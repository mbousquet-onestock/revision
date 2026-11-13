/* Backoffice : suivi des élèves, gestion des accès, édition des cours. Nécessite app.js (window.App). */
(function () {
  'use strict';
  const A = () => window.App;
  const esc = s => A().esc(s == null ? '' : s);
  const $ = (s, el = document) => el.querySelector(s);
  const fmtDate = d => d ? new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';
  const ago = d => {
    if (!d) return 'jamais';
    const s = (Date.now() - new Date(d)) / 1000;
    if (s < 3600) return `il y a ${Math.max(1, Math.round(s / 60))} min`;
    if (s < 86400) return `il y a ${Math.round(s / 3600)} h`;
    return `il y a ${Math.round(s / 86400)} j`;
  };
  const nameOf = u => [u.prenom, u.nom].filter(Boolean).join(' ') || u.username;
  const avg = arr => { const v = arr.filter(x => x != null); return v.length ? +(v.reduce((a, b) => a + b, 0) / v.length).toFixed(1) : null; };

  /* bouton à double clic de confirmation (pas de confirm() dans certains environnements) */
  function confirmBtn(btn, label, fn) {
    btn.addEventListener('click', async () => {
      if (!btn.dataset.armed) {
        btn.dataset.armed = '1'; const old = btn.textContent; btn.textContent = label; btn.classList.add('danger-armed');
        setTimeout(() => { delete btn.dataset.armed; btn.textContent = old; btn.classList.remove('danger-armed'); }, 4000);
        return;
      }
      btn.disabled = true;
      try { await fn(); } catch (e) { A().toast(e.message); btn.disabled = false; }
    });
  }

  function summary(p) {
    const CH = A().CH, BAC = A().BAC;
    let exDone = 0, exTot = 0;
    const quiz = [], ds = [];
    for (const ch of CH) {
      const pr = A().chapterProgress(ch, p);
      exDone += pr.done; exTot += pr.nEx;
      if (pr.quiz != null && ch.quiz.length) quiz.push(20 * pr.quiz / ch.quiz.length);
      ds.push(...pr.dsNotes);
    }
    const bac = BAC.map((b, i) => (p && p.bac || {})[b._id != null ? b._id - 1 : i]);
    return { exDone, exTot, pct: exTot ? Math.round(100 * exDone / exTot) : 0, quiz: avg(quiz), ds: avg(ds), bac: avg(bac), nbDs: ds.filter(x => x != null).length };
  }

  /* ================= suivi des élèves ================= */
  async function pageEleves(el) {
    el.innerHTML = `<div class="wrap"><section class="hero"><div class="eyebrow">Backoffice</div><h1>Suivi des élèves</h1>
      <p>Avancement de chaque élève : exercices cochés « réussi », moyenne des quiz ramenée sur 20, notes de DS et de sujets bac qu'il s'est attribuées avec le barème.</p></section>
      <div id="list" class="lead">Chargement…</div></div>`;
    const { users } = await A().api('GET', '/admin/users');
    const students = users.filter(u => u.role === 'student');
    if (!students.length) {
      $('#list', el).outerHTML = `<div class="sheet"><h2>Aucun élève pour l'instant</h2><p>Crée un premier compte dans <a href="#admin-acces">Gestion des accès</a>.</p></div>`;
      return;
    }
    $('#list', el).outerHTML = `<div class="tablewrap sheet flush"><table class="admin-table">
      <thead><tr><th>Élève</th><th>Exercices</th><th>Quiz /20</th><th>DS /20</th><th>Bac /20</th><th>Dernière activité</th><th></th></tr></thead>
      <tbody>${students.map(u => {
        const s = summary(u.progress);
        return `<tr class="${u.actif ? '' : 'muted'}">
          <td><b>${esc(nameOf(u))}</b><small>${esc(u.lycee || u.username)}${!u.email_verified ? ' · e-mail non confirmé' : u.actif ? '' : ' · désactivé'}</small></td>
          <td><div class="mini"><div class="bar"><span style="width:${s.pct}%"></span></div><span>${s.exDone}/${s.exTot}</span></div></td>
          <td class="num">${s.quiz ?? '—'}</td><td class="num">${s.ds ?? '—'}${s.nbDs ? `<small>${s.nbDs} DS</small>` : ''}</td><td class="num">${s.bac ?? '—'}</td>
          <td>${ago(u.derniere_vue || u.last_login)}<small>${u.nb_vues} pages vues</small></td>
          <td><a class="btn" href="#admin-eleve-${u.id}">Détail</a></td></tr>`;
      }).join('')}</tbody></table></div>`;
  }

  async function pageEleve(el, id) {
    el.innerHTML = `<div class="wrap"><p class="lead">Chargement…</p></div>`;
    const { user: u, views, pages } = await A().api('GET', '/admin/users/' + id);
    const p = u.progress || {};
    const s = summary(p);
    const pageStat = prefix => pages.filter(x => x.page.startsWith(prefix)).reduce((a, x) => ({ n: a.n + x.n, last: !a.last || x.last > a.last ? x.last : a.last }), { n: 0, last: null });
    const label = page => {
      let m;
      if ((m = page.match(/^ch(\d+)-(\w+)$/))) { const ch = A().CH.find(c => c.id === +m[1]); return `${ch ? ch.titre : 'Chapitre ' + m[1]} · ${{ videos: 'Vidéos', cours: 'Cours', quiz: 'Quiz', exos: 'Exercices', ds: 'DS' }[m[2]] || m[2]}`; }
      if ((m = page.match(/^bac(\d+)$/))) return `Sujet type bac n°${m[1]}`;
      return page === 'bac' ? 'Liste des sujets bac' : 'Accueil';
    };
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow"><a href="#admin">← Tous les élèves</a></div>
      <section class="hero"><h1>${esc(nameOf(u))}</h1>
        <p>${u.lycee ? esc(u.lycee) + ' · ' : ''}Identifiant <b>${esc(u.username)}</b>${u.email ? ' · ' + esc(u.email) : ''} · dernière connexion ${fmtDate(u.last_login)} · progression enregistrée ${fmtDate(u.progress_at)}</p></section>
      <div class="stats">
        <div><span>Exercices réussis</span><b>${s.exDone}/${s.exTot}</b></div>
        <div><span>Moyenne quiz</span><b>${s.quiz ?? '—'}<small>/20</small></b></div>
        <div><span>Moyenne DS</span><b>${s.ds ?? '—'}<small>/20</small></b></div>
        <div><span>Moyenne bac</span><b>${s.bac ?? '—'}<small>/20</small></b></div>
      </div>
      <h2 class="section-title">Par chapitre</h2>
      <div class="tablewrap sheet flush"><table class="admin-table">
        <thead><tr><th>Chapitre</th><th>Exercices</th><th>Quiz</th><th>DS</th><th>Visites</th></tr></thead>
        <tbody>${A().CH.map(ch => {
          const pr = A().chapterProgress(ch, p), st = pageStat(`ch${ch.id}-`);
          return `<tr><td><b>${ch.id}. ${esc(ch.titre)}</b></td>
            <td><div class="mini"><div class="bar"><span style="width:${pr.nEx ? 100 * pr.done / pr.nEx : 0}%"></span></div><span>${pr.done}/${pr.nEx}</span></div></td>
            <td class="num">${pr.quiz != null ? `${pr.quiz}/${ch.quiz.length}` : '—'}</td>
            <td class="num">${pr.dsNotes.map(n => n != null ? n : '—').join(' · ') || '—'}</td>
            <td>${st.n ? `${st.n} pages<small>${ago(st.last)}</small>` : '<span class="muted">jamais ouvert</span>'}</td></tr>`;
        }).join('')}</tbody></table></div>
      <h2 class="section-title">Sujets type bac</h2>
      <div class="tablewrap sheet flush"><table class="admin-table"><tbody>${A().BAC.map((b, i) => {
        const k = b._id != null ? b._id - 1 : i, n = (p.bac || {})[k], auto = (p.bac || {})[k + ':auto'];
        return `<tr><td><b>${esc(b.titre)}</b></td><td class="num">${n != null ? n + '/20' : '—'}</td><td>${auto != null ? `automatismes ${auto}/6` : ''}</td></tr>`;
      }).join('')}</tbody></table></div>
      <h2 class="section-title">Activité récente</h2>
      <div class="sheet">${views.length ? `<ul class="activity">${views.slice(0, 60).map(v => `<li><time>${fmtDate(v.at)}</time> ${esc(label(v.page))}</li>`).join('')}</ul>` : '<p class="lead">Aucune activité pour l\'instant.</p>'}</div>
      <div class="actions" style="margin-top:16px"><button class="btn danger" id="reset">Remettre sa progression à zéro</button></div>
    </div>`;
    confirmBtn($('#reset', el), 'Confirmer la remise à zéro ?', async () => {
      await A().api('DELETE', `/admin/users/${id}/progress`); A().toast('Progression remise à zéro.'); pageEleve(el, id);
    });
  }

  /* ================= gestion des accès ================= */
  async function pageAcces(el) {
    el.innerHTML = `<div class="wrap"><section class="hero"><div class="eyebrow">Backoffice</div><h1>Gestion des accès</h1>
      <p>Les élèves peuvent créer leur compte eux-mêmes depuis l'écran de connexion : il s'ouvre quand ils confirment leur adresse e-mail. Tu peux aussi créer un compte ici et transmettre l'identifiant et le mot de passe. Un compte désactivé ne peut plus se connecter mais garde sa progression.</p></section>
      <form class="sheet form grid-form" id="newuser">
        <h2>Nouveau compte</h2>
        <div><label for="nu-prenom">Prénom</label><input id="nu-prenom" placeholder="Léa"></div>
        <div><label for="nu-nom">Nom</label><input id="nu-nom" placeholder="Martin"></div>
        <div><label for="nu-lycee">Lycée</label><input id="nu-lycee"></div>
        <div><label for="nu-email">E-mail (facultatif)</label><input id="nu-email" type="email"></div>
        <div><label for="nu-user">Identifiant</label><input id="nu-user" placeholder="lea.martin" required pattern="[a-zA-Z0-9._\\-]{2,40}" autocapitalize="none"></div>
        <div><label for="nu-pass">Mot de passe</label><div class="row"><input id="nu-pass" required minlength="6"><button type="button" class="btn" id="gen">Générer</button></div></div>
        <div><label for="nu-role">Rôle</label><select id="nu-role"><option value="student">Élève</option><option value="admin">Administrateur</option></select></div>
        <div class="actions"><button class="btn primary" type="submit">Créer le compte</button></div>
        <p class="form-msg" id="nu-msg"></p>
      </form>
      <h2 class="section-title">Comptes</h2><div id="users" class="lead">Chargement…</div></div>`;
    const gen = () => { const c = 'abcdefghjkmnpqrstuvwxyz23456789'; let s = ''; const r = crypto.getRandomValues(new Uint8Array(8)); r.forEach(x => { s += c[x % c.length]; }); return s; };
    $('#gen', el).addEventListener('click', () => { $('#nu-pass', el).value = gen(); });
    $('#newuser', el).addEventListener('submit', async e => {
      e.preventDefault();
      const msg = $('#nu-msg', el);
      const body = { prenom: $('#nu-prenom', el).value, nom: $('#nu-nom', el).value, lycee: $('#nu-lycee', el).value, email: $('#nu-email', el).value, username: $('#nu-user', el).value, password: $('#nu-pass', el).value, role: $('#nu-role', el).value };
      try {
        await A().api('POST', '/admin/users', body);
        msg.className = 'form-msg ok';
        msg.innerHTML = `Compte créé. À transmettre : identifiant <code>${esc(body.username.trim().toLowerCase())}</code>, mot de passe <code>${esc(body.password)}</code>`;
        e.target.reset(); loadUsers();
      } catch (err) { msg.className = 'form-msg ko'; msg.textContent = err.message; }
    });
    async function loadUsers() {
      const { users } = await A().api('GET', '/admin/users');
      const me = A().ME;
      $('#users', el).outerHTML = `<div id="users" class="tablewrap sheet flush"><table class="admin-table">
        <thead><tr><th>Compte</th><th>Rôle</th><th>Statut</th><th>Dernière connexion</th><th>Actions</th></tr></thead>
        <tbody>${users.map(u => `<tr data-id="${u.id}" class="${u.actif ? '' : 'muted'}">
          <td><b>${esc(nameOf(u))}</b><small>${esc(u.username)}${u.email ? ' · ' + esc(u.email) : ''}</small>${u.lycee ? `<small>${esc(u.lycee)}</small>` : ''}</td>
          <td>${u.role === 'admin' ? 'Administrateur' : 'Élève'}</td>
          <td>${!u.email_verified ? '<span class="pill wait">E-mail non confirmé</span>' : `<span class="pill ${u.actif ? 'ok' : 'off'}">${u.actif ? 'Actif' : 'Désactivé'}</span>`}</td>
          <td>${fmtDate(u.last_login)}</td>
          <td><div class="acts">
            ${!u.email_verified ? '<button class="btn small primary" data-a="valider">Valider sans e-mail</button>' : ''}
            <button class="btn small" data-a="rename">Modifier</button>
            <button class="btn small" data-a="pw">Nouveau mot de passe</button>
            ${u.id === me.id ? '' : `<button class="btn small" data-a="toggle">${u.actif ? 'Désactiver' : 'Réactiver'}</button>
            <button class="btn small" data-a="role">${u.role === 'admin' ? 'Passer élève' : 'Passer admin'}</button>
            <button class="btn small danger" data-a="del">Supprimer</button>`}
            <div class="inline-edit" hidden></div>
          </div></td></tr>`).join('')}</tbody></table></div>`;
      const box = $('#users', el);
      box.querySelectorAll('[data-a="del"]').forEach(b => {
        const id = b.closest('tr').dataset.id;
        confirmBtn(b, 'Confirmer la suppression ?', async () => { await A().api('DELETE', '/admin/users/' + id); A().toast('Compte supprimé.'); loadUsers(); });
      });
      box.addEventListener('click', async e => {
        const b = e.target.closest('[data-a]'); if (!b || b.dataset.a === 'del') return;
        const tr = b.closest('tr'), id = tr.dataset.id, u = users.find(x => String(x.id) === id);
        const patch = async body => { try { await A().api('PATCH', '/admin/users/' + id, body); A().toast('Enregistré.'); loadUsers(); } catch (err) { A().toast(err.message); } };
        if (b.dataset.a === 'toggle') return patch({ actif: !u.actif });
        if (b.dataset.a === 'valider') return patch({ valider: true });
        if (b.dataset.a === 'role') return patch({ role: u.role === 'admin' ? 'student' : 'admin' });
        const ie = tr.querySelector('.inline-edit');
        const isPw = b.dataset.a === 'pw';
        ie.hidden = false;
        ie.innerHTML = isPw ? `<input id="ie-${id}" minlength="6" placeholder="Nouveau mot de passe">
          <button class="btn small primary" data-ok>Valider</button><button class="btn small" data-gen>Générer</button>`
          : `<input id="ie-p-${id}" placeholder="Prénom" value="${esc(u.prenom)}"><input id="ie-n-${id}" placeholder="Nom" value="${esc(u.nom)}"><input id="ie-l-${id}" placeholder="Lycée" value="${esc(u.lycee)}">
          <button class="btn small primary" data-ok>Valider</button>`;
        const inp = ie.querySelector('input'); inp.focus();
        ie.querySelector('[data-gen]')?.addEventListener('click', ev => { ev.stopPropagation(); inp.value = gen(); });
        ie.querySelector('[data-ok]').addEventListener('click', async ev => {
          ev.stopPropagation();
          if (isPw) {
            try { await A().api('PATCH', '/admin/users/' + id, { password: inp.value }); ie.innerHTML = `Nouveau mot de passe : <code>${esc(inp.value)}</code>`; }
            catch (err) { A().toast(err.message); }
          } else patch({ prenom: $(`#ie-p-${id}`, ie).value, nom: $(`#ie-n-${id}`, ie).value, lycee: $(`#ie-l-${id}`, ie).value });
        });
      });
    }
    loadUsers();
  }

  /* ================= gestion des cours ================= */
  function pageContenu(el) {
    const CH = A().CH, BAC = A().BAC;
    el.innerHTML = `<div class="wrap"><section class="hero"><div class="eyebrow">Backoffice</div><h1>Gestion des cours</h1>
      <p>Modifie les vidéos, la fiche de cours, les quiz, les exercices et les DS de chaque chapitre, ainsi que les sujets type bac. Les élèves voient les changements dès qu'ils rechargent la page.</p></section>
      <div class="actions"><a class="btn primary" href="#admin-nouveau-chapitre">Nouveau chapitre</a><a class="btn" href="#admin-nouveau-sujet">Nouveau sujet type bac</a></div>
      <h2 class="section-title">Chapitres</h2>
      <div class="tablewrap sheet flush"><table class="admin-table"><thead><tr><th>Chapitre</th><th>Vidéos</th><th>Cours</th><th>Quiz</th><th>Exercices</th><th>DS</th><th></th></tr></thead>
      <tbody>${CH.map(c => `<tr><td><b>${c.id}. ${esc(c.titre)}</b><small>${esc(c.partie)}</small></td>
        <td class="num">${c.videos.length}</td><td class="num">${c.cours.length}</td><td class="num">${c.quiz.length}</td><td class="num">${c.exercices.length}</td><td class="num">${c.ds.length}</td>
        <td><div class="acts"><a class="btn small primary" href="#admin-ch-${c.id}">Modifier</a><a class="btn small" href="#ch${c.id}">Voir</a></div></td></tr>`).join('')}</tbody></table></div>
      <h2 class="section-title">Sujets type bac</h2>
      <div class="tablewrap sheet flush"><table class="admin-table"><tbody>${BAC.map((b, i) => `<tr><td><b>${esc(b.titre)}</b><small>Chapitres ${(b.chapitres || []).join(', ')}</small></td>
        <td>${esc(b.niveau || '—')}</td><td class="num">${(b.automatismes || []).length} QCM</td><td class="num">${(b.exercices || []).length} exercices</td>
        <td><div class="acts"><a class="btn small primary" href="#admin-bac-${b._id}">Modifier</a><a class="btn small" href="#bac${i + 1}">Voir</a></div></td></tr>`).join('')}</tbody></table></div></div>`;
  }

  /* ----- schémas d'édition ----- */
  const QCM = [
    { k: 'q', label: 'Question', type: 'html', rows: 2 },
    { k: 'choix', label: 'Réponses proposées', type: 'choices' },
    { k: 'bonne', label: 'Bonne réponse', type: 'select', options: [[0, 'A'], [1, 'B'], [2, 'C'], [3, 'D']], num: true },
    { k: 'explication', label: 'Explication', type: 'html', rows: 3 },
  ];
  const CHAPTER = [
    { k: 'titre', label: 'Titre du chapitre', type: 'text' },
    { k: 'partie', label: 'Partie', type: 'select', options: () => A().PARTIES.map(p => [p, p]) },
    { k: 'emoji', label: 'Emoji', type: 'text', short: true },
    { k: 'accroche', label: "Phrase d'accroche", type: 'html', rows: 2 },
    { k: 'videos', label: 'Vidéos', type: 'list', item: 'Vidéo', title: v => v.titre, fields: [
      { k: 'titre', label: 'Titre', type: 'text' },
      { k: 'recherche', label: 'Recherche YouTube (ou lien complet https://…)', type: 'text' },
      { k: 'duree', label: 'Durée', type: 'text', short: true },
      { k: 'resume', label: 'Résumé', type: 'html', rows: 2 }] },
    { k: 'cours', label: 'Fiche de cours', type: 'list', item: 'Partie', title: v => v.titre, fields: [
      { k: 'titre', label: 'Titre de la partie', type: 'text' },
      { k: 'html', label: 'Contenu', type: 'html', rows: 16 }] },
    { k: 'quiz', label: 'Quiz', type: 'list', item: 'Question', title: v => v.q, fields: QCM },
    { k: 'exercices', label: 'Exercices', type: 'list', item: 'Exercice', title: v => `${'★'.repeat(v.niveau || 1)} ${v.titre || ''}`, fields: [
      { k: 'niveau', label: 'Niveau', type: 'select', options: [[1, '★ Facile'], [2, '★★ Moyen'], [3, '★★★ Difficile']], num: true },
      { k: 'titre', label: 'Titre', type: 'text' },
      { k: 'enonce', label: 'Énoncé', type: 'html', rows: 8 },
      { k: 'indice', label: 'Indice (facultatif)', type: 'html', rows: 2 },
      { k: 'correction', label: 'Correction', type: 'html', rows: 10 }] },
    { k: 'ds', label: 'Devoirs surveillés', type: 'list', item: 'DS', title: v => v.titre, check: v => total(v.exercices, 20), fields: [
      { k: 'titre', label: 'Titre', type: 'text' },
      { k: 'duree', label: 'Durée (ex. « 1 h », « 1 h 30 »)', type: 'text', short: true },
      { k: 'calculatrice', label: 'Calculatrice autorisée', type: 'bool' },
      { k: 'exercices', label: 'Exercices du DS', type: 'list', item: 'Exercice', title: v => `${v.titre || ''} (${v.points || 0} pts)`, fields: [
        { k: 'titre', label: 'Titre', type: 'text' },
        { k: 'points', label: 'Points', type: 'number', short: true },
        { k: 'enonce', label: 'Énoncé', type: 'html', rows: 8 },
        { k: 'correction', label: 'Correction et barème', type: 'html', rows: 10 }] }] },
  ];
  const BACS = [
    { k: 'niveau', label: 'Niveau', type: 'select', options: () => A().NIVEAUX.map(n => [n, n]) },
    { k: 'titre', label: 'Titre du sujet', type: 'text' },
    { k: 'duree', label: 'Durée', type: 'text', short: true },
    { k: 'chapitres', label: 'Chapitres couverts (numéros séparés par des virgules)', type: 'numlist' },
    { k: 'automatismes', label: 'Partie 1 · Automatismes (12 QCM, 0,5 point chacun)', type: 'list', item: 'QCM', title: v => v.q, fields: QCM },
    { k: 'exercices', label: 'Partie 2 · Exercices (14 points au total)', type: 'list', item: 'Exercice', title: v => `${v.titre || ''} (${v.points || 0} pts)`, fields: [
      { k: 'titre', label: 'Titre', type: 'text' },
      { k: 'points', label: 'Points', type: 'number', short: true },
      { k: 'chapitres', label: 'Chapitres', type: 'numlist' },
      { k: 'enonce', label: 'Énoncé', type: 'html', rows: 8 },
      { k: 'correction', label: 'Correction et barème', type: 'html', rows: 10 }] },
  ];
  function total(list, expected) {
    const t = (list || []).reduce((a, e) => a + (+e.points || 0), 0);
    return t === expected ? null : `Total des points : ${t} (attendu ${expected})`;
  }
  const blank = fields => {
    const o = {};
    for (const f of fields) o[f.k] = f.type === 'list' || f.type === 'numlist' ? [] : f.type === 'choices' ? ['', '', '', ''] : f.type === 'bool' ? false : f.type === 'number' ? 0 : f.type === 'select' ? (typeof f.options === 'function' ? f.options()[0][0] : f.options[0][0]) : '';
    return o;
  };
  const plain = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\\[()[\]]/g, '').replace(/\s+/g, ' ').trim().slice(0, 90);

  function pageEditor(el, kind, id) {
    const isNew = id == null;
    const schema = kind === 'chapter' ? CHAPTER : BACS;
    let src;
    if (isNew) {
      src = blank(schema);
      if (kind === 'chapter') src.id = Math.max(0, ...A().CH.map(c => c.id)) + 1;
      else { src.duree = '2 h'; src.calculatrice = false; }
    } else {
      src = kind === 'chapter' ? A().CH.find(c => c.id === id) : A().BAC.find(b => b._id === id);
      if (!src) { el.innerHTML = `<div class="wrap"><p class="lead">Contenu introuvable. <a href="#admin-contenu">Retour</a></p></div>`; return; }
    }
    const draft = JSON.parse(JSON.stringify(src));
    const open = new Set();
    let dirty = false;

    el.innerHTML = `<div class="wrap editor">
      <div class="eyebrow"><a href="#admin-contenu">← Gestion des cours</a></div>
      <div class="ds-bar"><h2>${isNew ? (kind === 'chapter' ? 'Nouveau chapitre' : 'Nouveau sujet type bac') : esc(kind === 'chapter' ? `Chapitre ${id} · ${src.titre}` : src.titre)}</h2>
        <span class="tag" id="dirty"></span>
        <button class="btn primary" id="save">Enregistrer</button></div>
      <details class="sheet help"><summary>Aide à la saisie (formules, encadrés, code)</summary><div class="content">
        <p>Les champs « contenu » acceptent du HTML simple. Clique sur <b>Aperçu</b> pour voir le rendu.</p>
        <ul>
          <li>Formule dans le texte : <code>\\( x^2 + 1 \\)</code> ; formule centrée : <code>\\[ \\Delta = b^2 - 4ac \\]</code></li>
          <li>Fraction <code>\\frac{a}{b}</code>, racine <code>\\sqrt{x}</code>, indice <code>u_{n+1}</code>, flèche <code>\\to</code>, multiplication <code>\\times</code></li>
          <li>Paragraphe <code>&lt;p&gt;…&lt;/p&gt;</code>, gras <code>&lt;b&gt;…&lt;/b&gt;</code>, liste <code>&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ul&gt;</code></li>
          <li>Encadrés : <code>&lt;div class="def"&gt;</code> définition, <code>"prop"</code> propriété, <code>"ex"</code> exemple, <code>"warn"</code> piège, <code>"astuce"</code></li>
          <li>Code Python : <code>&lt;pre&gt;&lt;code&gt;…&lt;/code&gt;&lt;/pre&gt;</code> (écrire <code>&amp;lt;</code> pour &lt;)</li>
        </ul></div></details>
      ${kind === 'chapter' ? `<div class="sheet form"><label for="f-id">Numéro du chapitre</label><input id="f-id" type="number" min="1" value="${draft.id}" ${isNew ? '' : 'disabled'}></div>` : ''}
      <div id="fields"></div>
      ${isNew ? '' : `<div class="actions danger-zone">
        <button class="btn" id="reset">Revenir au contenu d'origine</button>
        <button class="btn danger" id="del">Supprimer ${kind === 'chapter' ? 'ce chapitre' : 'ce sujet'}</button></div>`}
    </div>`;

    const fieldsEl = $('#fields', el);
    const markDirty = () => { dirty = true; $('#dirty', el).textContent = 'Modifications non enregistrées'; };
    const getAt = path => path.reduce((o, k) => o[k], draft);
    const setAt = (path, v) => { const last = path[path.length - 1]; getAt(path.slice(0, -1))[last] = v; };

    function fieldHtml(f, path) {
      const val = getAt(path), id = 'f-' + path.join('-'), p = JSON.stringify(path);
      const lab = `<label for="${id}">${esc(f.label)}</label>`;
      switch (f.type) {
        case 'text': return `<div class="fld ${f.short ? 'short' : ''}">${lab}<input id="${id}" data-path='${p}' value="${esc(val || '')}"></div>`;
        case 'number': return `<div class="fld short">${lab}<input id="${id}" type="number" step="0.5" data-path='${p}' data-num="1" value="${val ?? 0}"></div>`;
        case 'numlist': return `<div class="fld">${lab}<input id="${id}" data-path='${p}' data-numlist="1" value="${esc((val || []).join(', '))}"></div>`;
        case 'bool': return `<div class="fld"><label class="donebox"><input type="checkbox" id="${id}" data-path='${p}' data-bool="1" ${val ? 'checked' : ''}> ${esc(f.label)}</label></div>`;
        case 'select': {
          const opts = typeof f.options === 'function' ? f.options() : f.options;
          return `<div class="fld short">${lab}<select id="${id}" data-path='${p}' ${f.num ? 'data-num="1"' : ''}>${opts.map(([v, l]) => `<option value="${esc(v)}" ${String(v) === String(val) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></div>`;
        }
        case 'html': return `<div class="fld">${lab}<textarea id="${id}" rows="${f.rows || 4}" data-path='${p}' spellcheck="true">${esc(val || '')}</textarea>
          <button type="button" class="linkbtn" data-preview="${id}">Aperçu</button><div class="preview content" id="pv-${id}" hidden></div></div>`;
        case 'choices': return `<div class="fld">${lab}<div class="choice-edit">${[0, 1, 2, 3].map(i => `<div><span class="letter">${'ABCD'[i]}</span><input id="${id}-${i}" data-path='${JSON.stringify(path.concat(i))}' value="${esc((val || [])[i] || '')}"></div>`).join('')}</div></div>`;
        case 'list': return listHtml(f, path);
      }
      return '';
    }
    function listHtml(f, path) {
      const arr = getAt(path) || [];
      const totalWarn = (kind === 'bac' && f.k === 'exercices' && path.length === 1) ? total(arr, 14) : null;
      return `<section class="sheet listed"><div class="list-head"><h2>${esc(f.label)} <span class="count">${arr.length}</span></h2>
          <button type="button" class="btn small" data-add='${JSON.stringify(path)}'>+ Ajouter ${esc(f.item.toLowerCase())}</button></div>
        ${totalWarn ? `<p class="form-msg ko">${esc(totalWarn)}</p>` : ''}
        ${arr.map((it, i) => {
          const ip = path.concat(i), key = ip.join('-');
          const w = f.check ? f.check(it) : null;
          return `<details class="item" data-key="${key}" ${open.has(key) ? 'open' : ''}><summary><span class="item-n">${f.item} ${i + 1}</span><span class="item-t">${esc(plain(f.title(it)) || '(sans titre)')}</span>${w ? `<span class="pill off">${esc(w)}</span>` : ''}</summary>
            <div class="item-body">${f.fields.map(sf => fieldHtml(sf, ip.concat(sf.k))).join('')}
            <div class="actions item-acts">
              <button type="button" class="btn small" data-move='${JSON.stringify(ip)}' data-dir="-1" ${i === 0 ? 'disabled' : ''}>↑ Monter</button>
              <button type="button" class="btn small" data-move='${JSON.stringify(ip)}' data-dir="1" ${i === arr.length - 1 ? 'disabled' : ''}>↓ Descendre</button>
              <button type="button" class="btn small" data-dup='${JSON.stringify(ip)}'>Dupliquer</button>
              <button type="button" class="btn small danger" data-remove='${JSON.stringify(ip)}'>Supprimer</button></div></div></details>`;
        }).join('')}</section>`;
    }
    function render() {
      fieldsEl.querySelectorAll('details.item').forEach(d => { if (d.open) open.add(d.dataset.key); else open.delete(d.dataset.key); });
      const simple = schema.filter(f => f.type !== 'list'), lists = schema.filter(f => f.type === 'list');
      fieldsEl.innerHTML = `<div class="sheet form">${simple.map(f => fieldHtml(f, [f.k])).join('')}</div>` + lists.map(f => fieldHtml(f, [f.k])).join('');
    }
    render();

    fieldsEl.addEventListener('input', e => {
      const t = e.target; if (!t.dataset.path) return;
      const path = JSON.parse(t.dataset.path);
      let v = t.dataset.bool ? t.checked : t.value;
      if (t.dataset.num) v = t.value === '' ? 0 : +t.value;
      if (t.dataset.numlist) v = t.value.split(/[,; ]+/).map(Number).filter(n => Number.isInteger(n) && n > 0);
      setAt(path, v); markDirty();
      const pv = $('#pv-' + t.id, el); if (pv && !pv.hidden) { pv.innerHTML = t.value; A().math(pv); }
    });
    fieldsEl.addEventListener('change', e => {
      const t = e.target; if (!t.dataset.path || !(t.tagName === 'SELECT' || t.dataset.bool)) return;
      setAt(JSON.parse(t.dataset.path), t.dataset.bool ? t.checked : t.dataset.num ? +t.value : t.value); markDirty();
    });
    fieldsEl.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.preview) {
        const ta = $('#' + b.dataset.preview, el), pv = $('#pv-' + b.dataset.preview, el);
        pv.hidden = !pv.hidden; b.textContent = pv.hidden ? 'Aperçu' : "Masquer l'aperçu";
        if (!pv.hidden) { pv.innerHTML = ta.value; A().math(pv); }
        return;
      }
      const sch = path => { // retrouve le schéma de la liste désignée par path
        let fields = schema, f = null;
        for (const k of path) { if (typeof k === 'number') { fields = f.fields; continue; } f = fields.find(x => x.k === k); }
        return f;
      };
      if (b.dataset.add) {
        const path = JSON.parse(b.dataset.add), f = sch(path), arr = getAt(path);
        const it = blank(f.fields); if (f.k === 'exercices' && path.length === 1 && kind === 'chapter') it.niveau = 1;
        arr.push(it); open.add(path.concat(arr.length - 1).join('-')); markDirty(); render();
        return;
      }
      const ref = b.dataset.move || b.dataset.dup || b.dataset.remove; if (!ref) return;
      const ip = JSON.parse(ref), i = ip[ip.length - 1], arr = getAt(ip.slice(0, -1));
      if (b.dataset.move) { const j = i + +b.dataset.dir; [arr[i], arr[j]] = [arr[j], arr[i]]; }
      else if (b.dataset.dup) arr.splice(i + 1, 0, JSON.parse(JSON.stringify(arr[i])));
      else if (b.dataset.remove) {
        if (!b.dataset.armed) { b.dataset.armed = '1'; b.textContent = 'Confirmer ?'; setTimeout(() => { delete b.dataset.armed; b.textContent = 'Supprimer'; }, 4000); return; }
        arr.splice(i, 1);
      }
      open.clear(); markDirty(); render();
    });

    $('#save', el).addEventListener('click', async () => {
      const btn = $('#save', el); btn.disabled = true;
      try {
        if (!String(draft.titre || '').trim()) throw new Error('Le titre est obligatoire.');
        if (kind === 'chapter') draft.id = +$('#f-id', el).value;
        let newId = id;
        if (isNew) newId = (await A().api('POST', `/admin/docs/${kind}`, { data: draft })).id;
        else await A().api('PUT', `/admin/docs/${kind}/${id}`, { data: draft });
        await A().reload(); A().refreshNav();
        dirty = false; $('#dirty', el).textContent = 'Enregistré';
        A().toast('Enregistré.');
        if (isNew) location.hash = `admin-${kind === 'chapter' ? 'ch' : 'bac'}-${newId}`;
      } catch (e) { A().toast(e.message); }
      btn.disabled = false;
    });
    if (!isNew) {
      confirmBtn($('#reset', el), 'Confirmer : tout remplacer par la version d\'origine ?', async () => {
        await A().api('POST', `/admin/docs/${kind}/${id}/reset`, {}); await A().reload(); A().refreshNav(); A().toast("Contenu d'origine restauré."); pageEditor(el, kind, id); A().math(el);
      });
      confirmBtn($('#del', el), 'Confirmer la suppression définitive ?', async () => {
        await A().api('DELETE', `/admin/docs/${kind}/${id}`); await A().reload(); A().refreshNav(); A().toast('Supprimé.'); location.hash = 'admin-contenu';
      });
    }
    window.onbeforeunload = () => (dirty ? true : undefined);
  }

  window.Admin = {
    render(el, r) {
      window.onbeforeunload = null;
      const fail = e => { el.innerHTML = `<div class="wrap"><div class="sheet"><h2>Erreur</h2><p>${esc(e.message)}</p></div></div>`; };
      try {
        if (r.kind === 'eleve' && r.arg) return pageEleve(el, +r.arg).catch(fail);
        if (r.kind === 'acces') return pageAcces(el);
        if (r.kind === 'contenu') return pageContenu(el);
        if (r.kind === 'ch' && r.arg) return pageEditor(el, 'chapter', +r.arg);
        if (r.kind === 'bac' && r.arg) return pageEditor(el, 'bac', +r.arg);
        if (r.kind === 'nouveau') return pageEditor(el, r.arg === 'sujet' ? 'bac' : 'chapter', null);
        return pageEleves(el).catch(fail);
      } catch (e) { fail(e); }
    },
  };
})();
