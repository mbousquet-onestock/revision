// API unique (une seule fonction Vercel) : authentification, contenu, suivi des élèves, backoffice.
const { query, SCHEMA } = require('../lib/db');
const auth = require('../lib/auth');
const { loadOriginal } = require('../lib/content');

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

/* ---------- initialisation (une fois par démarrage à froid) ---------- */
let ready = null;
function setup() {
  if (!ready) {
    ready = (async () => {
      for (const s of SCHEMA) await query(s);
      const [{ n }] = await query(`select count(*)::int as n from docs`);
      if (!n) await seedAll();
      const [{ a }] = await query(`select count(*)::int as a from users where role = 'admin'`);
      if (!a) {
        const username = (process.env.ADMIN_USERNAME || 'admin').trim().toLowerCase();
        const password = process.env.ADMIN_PASSWORD || (process.env.VERCEL ? null : 'admin');
        if (password) {
          await query(`insert into users (username, nom, password_hash, role) values ($1, $2, $3, 'admin')
                       on conflict (username) do update set role = 'admin'`, [username, 'Administrateur', auth.hashPassword(password)]);
        }
      }
    })().catch(e => { ready = null; throw e; });
  }
  return ready;
}

async function seedAll() {
  const { chapters, bac } = loadOriginal();
  for (const ch of chapters) await upsertDoc('chapter', ch.id, ch);
  for (const [i, b] of bac.entries()) await upsertDoc('bac', i + 1, b);
}
function upsertDoc(kind, id, data) {
  return query(`insert into docs (kind, id, data, updated_at) values ($1, $2, $3, now())
                on conflict (kind, id) do update set data = excluded.data, updated_at = now()`, [kind, id, JSON.stringify(data)]);
}

/* ---------- utilitaires HTTP ---------- */
function send(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}
async function readBody(req) {
  if (req.body !== undefined) return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString();
  if (raw.length > 2_000_000) throw new HttpError(413, 'Contenu trop volumineux.');
  return raw ? JSON.parse(raw) : {};
}

async function currentUser(req) {
  const p = auth.verify(auth.readCookie(req));
  if (!p) return null;
  const [u] = await query(`select id, username, nom, role, actif from users where id = $1`, [p.uid]);
  return u && u.actif ? u : null;
}
const publicUser = u => ({ id: u.id, username: u.username, nom: u.nom, role: u.role });
const cleanUsername = s => String(s || '').trim().toLowerCase();
function checkNewPassword(pw) {
  if (typeof pw !== 'string' || pw.length < 6) throw new HttpError(400, 'Le mot de passe doit faire au moins 6 caractères.');
}
function checkDoc(kind, data) {
  if (!data || typeof data !== 'object') throw new HttpError(400, 'Contenu invalide.');
  if (!data.titre) throw new HttpError(400, 'Le titre est obligatoire.');
  if (kind === 'chapter') {
    for (const k of ['videos', 'cours', 'quiz', 'exercices', 'ds']) if (!Array.isArray(data[k])) data[k] = [];
  } else {
    for (const k of ['automatismes', 'exercices', 'chapitres']) if (!Array.isArray(data[k])) data[k] = [];
  }
}

/* ---------- routes ---------- */
async function handle(req, res) {
  const url = new URL(req.url, 'http://x');
  const route = url.searchParams.get('route');
  const path = (route != null ? '/' + route : url.pathname.replace(/^\/api/, '')).replace(/\/$/, '') || '/';
  const method = req.method;
  const secure = (req.headers['x-forwarded-proto'] || '').includes('https');

  if (method !== 'GET' && !(req.headers['content-type'] || '').includes('application/json')) {
    throw new HttpError(415, 'Requête invalide.');
  }
  await setup();

  if (method === 'POST' && path === '/login') {
    const { username, password } = await readBody(req);
    const [u] = await query(`select * from users where username = $1`, [cleanUsername(username)]);
    if (!u || !u.actif || !auth.checkPassword(password || '', u.password_hash)) {
      await new Promise(r => setTimeout(r, 600));
      throw new HttpError(401, 'Identifiant ou mot de passe incorrect.');
    }
    await query(`update users set last_login = now() where id = $1`, [u.id]);
    auth.setCookie(res, auth.sign({ uid: u.id }), secure);
    return send(res, 200, { user: publicUser(u) });
  }
  if (method === 'POST' && path === '/logout') {
    auth.setCookie(res, null, secure);
    return send(res, 200, { ok: true });
  }

  const me = await currentUser(req);
  if (!me) throw new HttpError(401, 'Connexion requise.');

  if (method === 'GET' && path === '/me') return send(res, 200, { user: publicUser(me) });

  if (method === 'GET' && path === '/content') {
    const rows = await query(`select kind, id, data from docs order by kind, id`);
    return send(res, 200, {
      chapters: rows.filter(r => r.kind === 'chapter').map(r => ({ ...r.data, id: r.id })),
      bac: rows.filter(r => r.kind === 'bac').map(r => ({ ...r.data, _id: r.id })),
    });
  }
  if (method === 'GET' && path === '/progress') {
    const [p] = await query(`select data from progress where user_id = $1`, [me.id]);
    return send(res, 200, { data: p ? p.data : {} });
  }
  if (method === 'PUT' && path === '/progress') {
    const { data } = await readBody(req);
    if (!data || typeof data !== 'object') throw new HttpError(400, 'Progression invalide.');
    await query(`insert into progress (user_id, data, updated_at) values ($1, $2, now())
                 on conflict (user_id) do update set data = excluded.data, updated_at = now()`, [me.id, JSON.stringify(data)]);
    return send(res, 200, { ok: true });
  }
  if (method === 'POST' && path === '/view') {
    const { page } = await readBody(req);
    if (typeof page === 'string' && /^[a-z0-9-]{1,40}$/.test(page)) await query(`insert into views (user_id, page) values ($1, $2)`, [me.id, page]);
    return send(res, 200, { ok: true });
  }
  if (method === 'PUT' && path === '/password') {
    const { ancien, nouveau } = await readBody(req);
    const [u] = await query(`select password_hash from users where id = $1`, [me.id]);
    if (!auth.checkPassword(ancien || '', u.password_hash)) throw new HttpError(400, 'Ancien mot de passe incorrect.');
    checkNewPassword(nouveau);
    await query(`update users set password_hash = $1 where id = $2`, [auth.hashPassword(nouveau), me.id]);
    return send(res, 200, { ok: true });
  }

  /* ----- backoffice ----- */
  if (!path.startsWith('/admin/')) throw new HttpError(404, 'Route inconnue.');
  if (me.role !== 'admin') throw new HttpError(403, 'Réservé aux administrateurs.');
  let m;

  if (method === 'GET' && path === '/admin/users') {
    const users = await query(`
      select u.id, u.username, u.nom, u.role, u.actif, u.created_at, u.last_login,
             p.data as progress, p.updated_at as progress_at,
             (select count(*)::int from views v where v.user_id = u.id) as nb_vues,
             (select max(at) from views v where v.user_id = u.id) as derniere_vue
      from users u left join progress p on p.user_id = u.id
      order by u.role, u.nom, u.username`);
    return send(res, 200, { users });
  }
  if (method === 'POST' && path === '/admin/users') {
    const b = await readBody(req);
    const username = cleanUsername(b.username);
    if (!/^[a-z0-9._-]{2,40}$/.test(username)) throw new HttpError(400, 'Identifiant invalide : lettres minuscules, chiffres, point, tiret (2 à 40 caractères).');
    checkNewPassword(b.password);
    const role = b.role === 'admin' ? 'admin' : 'student';
    const exists = await query(`select 1 from users where username = $1`, [username]);
    if (exists.length) throw new HttpError(409, 'Cet identifiant existe déjà.');
    const [u] = await query(`insert into users (username, nom, password_hash, role) values ($1, $2, $3, $4) returning id`,
      [username, String(b.nom || '').trim(), auth.hashPassword(b.password), role]);
    return send(res, 201, { id: u.id });
  }
  if ((m = path.match(/^\/admin\/users\/(\d+)$/))) {
    const id = +m[1];
    if (method === 'GET') {
      const [u] = await query(`select u.id, u.username, u.nom, u.role, u.actif, u.created_at, u.last_login, p.data as progress, p.updated_at as progress_at
                               from users u left join progress p on p.user_id = u.id where u.id = $1`, [id]);
      if (!u) throw new HttpError(404, 'Élève introuvable.');
      const views = await query(`select page, at from views where user_id = $1 order by at desc limit 300`, [id]);
      const pages = await query(`select page, count(*)::int as n, max(at) as last from views where user_id = $1 group by page`, [id]);
      return send(res, 200, { user: u, views, pages });
    }
    if (method === 'PATCH') {
      const b = await readBody(req);
      if (id === me.id && (b.actif === false || b.role === 'student')) throw new HttpError(400, 'Tu ne peux pas désactiver ou rétrograder ton propre compte.');
      if (b.nom !== undefined) await query(`update users set nom = $1 where id = $2`, [String(b.nom).trim(), id]);
      if (b.actif !== undefined) await query(`update users set actif = $1 where id = $2`, [!!b.actif, id]);
      if (b.role !== undefined) await query(`update users set role = $1 where id = $2`, [b.role === 'admin' ? 'admin' : 'student', id]);
      if (b.password !== undefined) { checkNewPassword(b.password); await query(`update users set password_hash = $1 where id = $2`, [auth.hashPassword(b.password), id]); }
      return send(res, 200, { ok: true });
    }
    if (method === 'DELETE') {
      if (id === me.id) throw new HttpError(400, 'Tu ne peux pas supprimer ton propre compte.');
      await query(`delete from users where id = $1`, [id]);
      return send(res, 200, { ok: true });
    }
  }
  if (method === 'DELETE' && (m = path.match(/^\/admin\/users\/(\d+)\/progress$/))) {
    await query(`delete from progress where user_id = $1`, [+m[1]]);
    await query(`delete from views where user_id = $1`, [+m[1]]);
    return send(res, 200, { ok: true });
  }

  if ((m = path.match(/^\/admin\/docs\/(chapter|bac)(?:\/(\d+))?(\/reset)?$/))) {
    const kind = m[1], id = m[2] ? +m[2] : null;
    if (method === 'POST' && id == null) {
      const b = await readBody(req);
      checkDoc(kind, b.data);
      const [{ next }] = await query(`select coalesce(max(id), 0) + 1 as next from docs where kind = $1`, [kind]);
      const newId = kind === 'chapter' && Number.isInteger(b.data.id) && b.data.id > 0 ? b.data.id : next;
      const exists = await query(`select 1 from docs where kind = $1 and id = $2`, [kind, newId]);
      if (exists.length) throw new HttpError(409, `Le numéro ${newId} est déjà utilisé.`);
      if (kind === 'chapter') b.data.id = newId;
      await upsertDoc(kind, newId, b.data);
      return send(res, 201, { id: newId });
    }
    if (id != null && m[3] && method === 'POST') {
      const orig = loadOriginal();
      const data = kind === 'chapter' ? orig.chapters.find(c => c.id === id) : orig.bac[id - 1];
      if (!data) throw new HttpError(404, "Pas de version d'origine pour ce contenu.");
      await upsertDoc(kind, id, data);
      return send(res, 200, { ok: true });
    }
    if (id != null && method === 'PUT') {
      const b = await readBody(req);
      checkDoc(kind, b.data);
      if (kind === 'chapter') b.data.id = id;
      delete b.data._id;
      await upsertDoc(kind, id, b.data);
      return send(res, 200, { ok: true });
    }
    if (id != null && method === 'DELETE') {
      await query(`delete from docs where kind = $1 and id = $2`, [kind, id]);
      return send(res, 200, { ok: true });
    }
  }
  throw new HttpError(404, 'Route inconnue.');
}

module.exports = async (req, res) => {
  try {
    await handle(req, res);
  } catch (e) {
    if (e instanceof SyntaxError) return send(res, 400, { error: 'JSON invalide.' });
    if (!e.status) console.error(e);
    send(res, e.status || 500, { error: e.status ? e.message : 'Erreur serveur : ' + e.message });
  }
};
