// API unique (une seule fonction Vercel) : authentification, contenu, suivi des élèves, backoffice.
const { query, SCHEMA } = require('../lib/db');
const auth = require('../lib/auth');
const { loadOriginal, originalVersion } = require('../lib/content');
const mail = require('../lib/mail');
const crypto = require('crypto');

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
      const version = originalVersion();
      if (!n) await seedAll();
      else {
        const [v] = await query(`select value from meta where key = 'content_version'`);
        if (!v || v.value !== version) await mergeNew();
      }
      await query(`insert into meta (key, value) values ('content_version', $1)
                   on conflict (key) do update set value = excluded.value`, [version]);
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
// Nouveau contenu d'origine (ex. DS ou sujets ajoutés) : on ajoute ce qui manque sans écraser les modifications de l'admin.
async function mergeNew() {
  const { chapters, bac } = loadOriginal();
  const docs = await query(`select kind, id, data from docs`);
  for (const ch of chapters) {
    const d = docs.find(x => x.kind === 'chapter' && x.id === ch.id);
    if (!d) { await upsertDoc('chapter', ch.id, ch); continue; }
    const titles = new Set((d.data.ds || []).map(x => x.titre));
    const missing = (ch.ds || []).filter(x => !titles.has(x.titre));
    if (missing.length) { d.data.ds = (d.data.ds || []).concat(missing); await upsertDoc('chapter', d.id, d.data); }
  }
  const bacDocs = docs.filter(x => x.kind === 'bac');
  // anciens sujets sans niveau : on reprend niveau + titre du sujet d'origine correspondant
  for (const d of bacDocs) {
    if (d.data.niveau) continue;
    const first = e => (e.exercices && e.exercices[0] && e.exercices[0].enonce) || '';
    const o = bac.find(b => first(b) === first(d.data));
    if (o) { d.data.niveau = o.niveau; d.data.titre = o.titre; await upsertDoc('bac', d.id, d.data); }
  }
  const titles = new Set(bacDocs.map(x => x.data.titre));
  let next = Math.max(0, ...bacDocs.map(x => x.id)) + 1;
  for (const b of bac) if (!titles.has(b.titre)) await upsertDoc('bac', next++, b);
}
function upsertDoc(kind, id, data) {
  return query(`insert into docs (kind, id, data, updated_at) values ($1, $2, $3, now())
                on conflict (kind, id) do update set data = excluded.data, updated_at = now()`, [kind, id, JSON.stringify(data)]);
}

/* ---------- utilitaires HTTP ---------- */
function send(res, status, data, req) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  const body = JSON.stringify(data);
  if (req && body.length > 50000 && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
    res.setHeader('Content-Encoding', 'gzip');
    return res.end(require('zlib').gzipSync(body));
  }
  res.end(body);
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
  const [u] = await query(`select id, username, nom, prenom, lycee, email, role, actif, email_verified from users where id = $1`, [p.uid]);
  return u && u.actif && u.email_verified ? u : null;
}
const publicUser = u => ({ id: u.id, username: u.username, nom: u.nom, prenom: u.prenom || '', lycee: u.lycee || '', email: u.email || '', role: u.role });
const USER_COLS = `id, username, nom, prenom, lycee, email, email_verified, role, actif, created_at, last_login`;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const sha = t => crypto.createHash('sha256').update(t).digest('hex');
function origin(req) {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, '');
  const proto = (req.headers['x-forwarded-proto'] || 'http').split(',')[0];
  return `${proto}://${req.headers['x-forwarded-host'] || req.headers.host}`;
}
// Crée un jeton à usage unique (vérification ou réinitialisation) et envoie l'e-mail correspondant.
async function sendToken(req, u, kind) {
  const token = crypto.randomBytes(32).toString('base64url');
  const hours = kind === 'verify' ? 48 : 2;
  await query(`update users set token_hash = $1, token_kind = $2, token_expires = now() + ($3 || ' hours')::interval, token_sent_at = now() where id = $4`,
    [sha(token), kind, String(hours), u.id]);
  const link = kind === 'verify' ? `${origin(req)}/api/verify/${token}` : `${origin(req)}/?reinit=${token}`;
  const m = kind === 'verify' ? mail.verifyMail(u.prenom || u.nom || u.username, link) : mail.resetMail(u.prenom || u.nom || u.username, link);
  await mail.sendMail({ to: u.email, ...m });
  return process.env.VERCEL || mail.configured() ? null : link; // en local sans e-mail : lien renvoyé pour les tests
}
const recentlySent = (u, kind) => u.token_kind === kind && u.token_sent_at && Date.now() - new Date(u.token_sent_at) < 60 * 1000;
const clean = (s, max = 80) => String(s || '').trim().slice(0, max);
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
  let m0;
  const secure = (req.headers['x-forwarded-proto'] || '').includes('https');

  if (method !== 'GET' && !(req.headers['content-type'] || '').includes('application/json')) {
    throw new HttpError(415, 'Requête invalide.');
  }
  await setup();

  if (method === 'POST' && path === '/login') {
    const { username, password } = await readBody(req);
    const login = cleanUsername(username);
    const [u] = await query(`select * from users where username = $1 or lower(email) = $1`, [login]);
    if (!u || !auth.checkPassword(password || '', u.password_hash)) {
      await new Promise(r => setTimeout(r, 600));
      throw new HttpError(401, 'Identifiant ou mot de passe incorrect.');
    }
    if (!u.email_verified) {
      const e = new HttpError(403, `Ton adresse e-mail n'est pas encore confirmée. Clique sur le lien reçu à ${u.email}.`);
      e.code = 'unverified'; throw e;
    }
    if (!u.actif) throw new HttpError(403, 'Ce compte est désactivé. Contacte ton professeur.');
    await query(`update users set last_login = now() where id = $1`, [u.id]);
    auth.setCookie(res, auth.sign({ uid: u.id }), secure);
    return send(res, 200, { user: publicUser(u) });
  }
  if (method === 'POST' && path === '/logout') {
    auth.setCookie(res, null, secure);
    return send(res, 200, { ok: true });
  }

  /* ----- inscription, vérification, mot de passe oublié ----- */
  if (method === 'POST' && path === '/register') {
    if (process.env.ALLOW_REGISTRATION === 'false') throw new HttpError(403, "Les inscriptions sont fermées. Demande un compte à ton professeur.");
    const b = await readBody(req);
    const f = { nom: clean(b.nom), prenom: clean(b.prenom), lycee: clean(b.lycee, 120), username: cleanUsername(b.username), email: clean(b.email, 160).toLowerCase() };
    if (!f.nom || !f.prenom || !f.lycee) throw new HttpError(400, 'Nom, prénom et lycée sont obligatoires.');
    if (!/^[a-z0-9._-]{2,40}$/.test(f.username)) throw new HttpError(400, 'Identifiant invalide : lettres minuscules, chiffres, point, tiret (2 à 40 caractères).');
    if (!EMAIL_RE.test(f.email)) throw new HttpError(400, 'Adresse e-mail invalide.');
    checkNewPassword(b.password);
    if ((await query(`select 1 from users where username = $1`, [f.username])).length) throw new HttpError(409, 'Cet identifiant est déjà pris.');
    if ((await query(`select 1 from users where lower(email) = $1`, [f.email])).length) throw new HttpError(409, 'Un compte existe déjà avec cette adresse e-mail.');
    const [u] = await query(`insert into users (username, nom, prenom, lycee, email, password_hash, role, actif, email_verified)
                             values ($1, $2, $3, $4, $5, $6, 'student', false, false) returning *`,
      [f.username, f.nom, f.prenom, f.lycee, f.email, auth.hashPassword(b.password)]);
    let devLink;
    try { devLink = await sendToken(req, u, 'verify'); }
    catch (e) { await query(`delete from users where id = $1`, [u.id]); throw e; }
    return send(res, 201, { ok: true, email: f.email, devLink });
  }
  if (method === 'POST' && path === '/resend') {
    const { login } = await readBody(req);
    const [u] = await query(`select * from users where username = $1 or lower(email) = $1`, [cleanUsername(login)]);
    let devLink = null;
    if (u && !u.email_verified && u.email && !recentlySent(u, 'verify')) devLink = await sendToken(req, u, 'verify');
    return send(res, 200, { ok: true, devLink });
  }
  if (method === 'GET' && (m0 = path.match(/^\/verify\/([A-Za-z0-9_-]{20,})$/))) {
    const [u] = await query(`select id from users where token_hash = $1 and token_kind = 'verify' and token_expires > now()`, [sha(m0[1])]);
    if (u) await query(`update users set email_verified = true, actif = true, token_hash = null, token_kind = null where id = $1`, [u.id]);
    res.statusCode = 302;
    res.setHeader('Location', u ? '/?compte=valide' : '/?compte=lien-invalide');
    return res.end();
  }
  if (method === 'POST' && path === '/forgot') {
    const { email } = await readBody(req);
    const [u] = await query(`select * from users where lower(email) = $1`, [clean(email, 160).toLowerCase()]);
    let devLink = null;
    if (u && u.actif && u.email_verified && !recentlySent(u, 'reset')) devLink = await sendToken(req, u, 'reset');
    return send(res, 200, { ok: true, devLink }); // même réponse que l'adresse existe ou non
  }
  if (method === 'POST' && path === '/reset') {
    const { token, password } = await readBody(req);
    checkNewPassword(password);
    const [u] = await query(`select id from users where token_hash = $1 and token_kind = 'reset' and token_expires > now()`, [sha(String(token || ''))]);
    if (!u) throw new HttpError(400, 'Ce lien a expiré ou a déjà servi. Refais une demande de mot de passe oublié.');
    await query(`update users set password_hash = $1, token_hash = null, token_kind = null where id = $2`, [auth.hashPassword(password), u.id]);
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
    }, req);
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
      select u.id, u.username, u.nom, u.prenom, u.lycee, u.email, u.email_verified, u.role, u.actif, u.created_at, u.last_login,
             p.data as progress, p.updated_at as progress_at,
             (select count(*)::int from views v where v.user_id = u.id) as nb_vues,
             (select max(at) from views v where v.user_id = u.id) as derniere_vue
      from users u left join progress p on p.user_id = u.id
      order by u.role, u.nom, u.prenom, u.username`);
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
    const email = clean(b.email, 160).toLowerCase() || null;
    if (email && !EMAIL_RE.test(email)) throw new HttpError(400, 'Adresse e-mail invalide.');
    if (email && (await query(`select 1 from users where lower(email) = $1`, [email])).length) throw new HttpError(409, 'Un compte existe déjà avec cette adresse e-mail.');
    const [u] = await query(`insert into users (username, nom, prenom, lycee, email, password_hash, role) values ($1, $2, $3, $4, $5, $6, $7) returning id`,
      [username, clean(b.nom), clean(b.prenom), clean(b.lycee, 120), email, auth.hashPassword(b.password), role]);
    return send(res, 201, { id: u.id });
  }
  if ((m = path.match(/^\/admin\/users\/(\d+)$/))) {
    const id = +m[1];
    if (method === 'GET') {
      const [u] = await query(`select u.id, u.username, u.nom, u.prenom, u.lycee, u.email, u.email_verified, u.role, u.actif, u.created_at, u.last_login, p.data as progress, p.updated_at as progress_at
                               from users u left join progress p on p.user_id = u.id where u.id = $1`, [id]);
      if (!u) throw new HttpError(404, 'Élève introuvable.');
      const views = await query(`select page, at from views where user_id = $1 order by at desc limit 300`, [id]);
      const pages = await query(`select page, count(*)::int as n, max(at) as last from views where user_id = $1 group by page`, [id]);
      return send(res, 200, { user: u, views, pages });
    }
    if (method === 'PATCH') {
      const b = await readBody(req);
      if (id === me.id && (b.actif === false || b.role === 'student')) throw new HttpError(400, 'Tu ne peux pas désactiver ou rétrograder ton propre compte.');
      if (b.nom !== undefined) await query(`update users set nom = $1 where id = $2`, [clean(b.nom), id]);
      if (b.prenom !== undefined) await query(`update users set prenom = $1 where id = $2`, [clean(b.prenom), id]);
      if (b.lycee !== undefined) await query(`update users set lycee = $1 where id = $2`, [clean(b.lycee, 120), id]);
      if (b.valider) await query(`update users set email_verified = true, actif = true, token_hash = null, token_kind = null where id = $1`, [id]);
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
    send(res, e.status || 500, { error: e.status ? e.message : 'Erreur serveur : ' + e.message, code: e.code });
  }
};
