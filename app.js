/* Site de révision — Maths Première spécialité.
   Routage par hash : #accueil, #ch3, #ch3-cours, #ch3-quiz, #ch3-exos, #ch3-ds, #ch3-ds2, #bac, #bac2 */
(function () {
  'use strict';
  // Mode statique (fichiers data/*.js chargés, ex. Artifact) ou mode connecté (API + comptes).
  const STATIC = Array.isArray(window.CHAPTERS);
  let CH = STATIC ? window.CHAPTERS.slice().sort((a, b) => a.id - b.id) : [];
  let BAC = STATIC ? (window.BAC || []) : [];
  let ME = null;
  const PARTIES = ['Algorithmique et programmation', 'Algèbre', 'Analyse', 'Géométrie', 'Probabilités et statistiques'];
  const LVL = { 1: '★ Facile', 2: '★★ Moyen', 3: '★★★ Difficile' };
  const $ = (s, el = document) => el.querySelector(s);
  const main = $('#main');

  /* ---------- progression (localStorage, facultatif) ---------- */
  const KEY = 'revmaths1-progress';
  const emptyP = () => ({ exos: {}, quiz: {}, ds: {}, bac: {} });
  let P = emptyP();
  if (STATIC) {
    try { const raw = localStorage.getItem(KEY); if (raw) P = Object.assign(P, JSON.parse(raw)); } catch (e) { /* stockage indisponible */ }
  }
  let saveTimer = null;
  const save = () => {
    if (STATIC) { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { /* ignore */ } return; }
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => api('PUT', '/progress', { data: P }).catch(e => toast('Progression non enregistrée : ' + e.message)), 800);
  };

  /* ---------- API ---------- */
  async function api(method, path, body) {
    const r = await fetch('/api' + path, {
      method, credentials: 'same-origin',
      headers: body !== undefined ? { 'Content-Type': 'application/json' } : {},
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    let data = {};
    try { data = await r.json(); } catch (e) { /* réponse vide */ }
    if (!r.ok) { const err = new Error(data.error || 'Erreur ' + r.status); err.status = r.status; err.code = data.code; throw err; }
    return data;
  }
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(t._h); t._h = setTimeout(() => { t.hidden = true; }, 3500);
  }

  function chapterProgress(ch, p = P) {
    p = Object.assign(emptyP(), p || {});
    const nEx = ch.exercices.length;
    const done = ch.exercices.filter((_, i) => p.exos[`${ch.id}-${i}`]).length;
    const quizOk = p.quiz[ch.id] != null ? 1 : 0;
    const dsDone = (ch.ds || []).filter((_, i) => p.ds[`${ch.id}-${i}`] != null).length;
    const total = nEx + 1 + (ch.ds || []).length;
    return { done, nEx, quiz: p.quiz[ch.id], dsDone, nDs: (ch.ds || []).length,
             dsNotes: (ch.ds || []).map((_, i) => p.ds[`${ch.id}-${i}`]), pct: total ? Math.round(100 * (done + quizOk + dsDone) / total) : 0 };
  }

  /* ---------- rendu maths ---------- */
  function math(el) {
    if (window.renderMathInElement) {
      renderMathInElement(el, {
        delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }],
        throwOnError: false,
      });
    }
    el.querySelectorAll('.content table').forEach(t => {
      if (!t.parentElement.classList.contains('tablewrap')) {
        const w = document.createElement('div'); w.className = 'tablewrap';
        t.replaceWith(w); w.appendChild(t);
      }
    });
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- navigation latérale ---------- */
  function renderNav(route) {
    const nav = $('#nav');
    let html = `<a href="#accueil" class="${route.view === 'home' ? 'active' : ''}"><span class="num">⌂</span><span>Accueil</span><span></span></a>`;
    for (const part of PARTIES) {
      const chs = CH.filter(c => c.partie === part);
      if (!chs.length) continue;
      html += `<h4>${esc(part)}</h4>`;
      for (const c of chs) {
        const pr = chapterProgress(c);
        html += `<a href="#ch${c.id}" class="${route.ch && route.ch.id === c.id ? 'active' : ''}"><span class="num">${c.id}</span><span>${esc(c.titre)}</span><span class="pct">${pr.pct ? pr.pct + '%' : ''}</span></a>`;
      }
    }
    html += `<h4>Révision finale</h4><a href="#bac" class="bac-link ${route.view === 'bac' ? 'active' : ''}"><span class="num">★</span><span>Sujets type bac</span><span class="pct">${BAC.length || ''}</span></a>`;
    if (ME && ME.role === 'admin') {
      const a = route.view === 'admin' ? route.page : '';
      html += `<h4>Backoffice</h4>
        <a href="#admin" class="${a === 'eleves' ? 'active' : ''}"><span class="num">◔</span><span>Suivi des élèves</span><span></span></a>
        <a href="#admin-acces" class="${a === 'acces' ? 'active' : ''}"><span class="num">⚿</span><span>Gestion des accès</span><span></span></a>
        <a href="#admin-contenu" class="${a === 'contenu' ? 'active' : ''}"><span class="num">✎</span><span>Gestion des cours</span><span></span></a>`;
    }
    nav.innerHTML = html;
    const ub = $('#userbox');
    if (ub) {
      ub.hidden = !ME;
      if (ME) ub.innerHTML = `<div class="who"><b>${esc(fullName(ME))}</b><small>${ME.role === 'admin' ? 'Administrateur' : 'Élève'} · ${esc(ME.username)}</small></div>
        <div class="userlinks"><a href="#compte">Mot de passe</a><button id="logout" class="linkbtn">Se déconnecter</button></div>`;
    }
  }

  /* ---------- routage ---------- */
  function parse() {
    const h = (location.hash || '').replace('#', '');
    let m;
    if ((m = h.match(/^ch(\d+)(?:-(videos|cours|quiz|exos|ds)(\d+)?)?$/))) {
      const ch = CH.find(c => c.id === +m[1]);
      if (ch) return { view: 'ch', ch, tab: m[2] || 'videos', n: m[3] ? +m[3] : 1 };
    }
    if ((m = h.match(/^bac(\d+)?$/))) return { view: 'bac', n: m[1] ? +m[1] : 0 };
    if (h === 'compte' && ME) return { view: 'compte' };
    if (ME && ME.role === 'admin' && (m = h.match(/^admin(?:-(eleve|acces|contenu|ch|bac|nouveau)(?:-(\d+|chapitre|sujet))?)?$/))) {
      const kind = m[1] || 'eleves';
      const page = kind === 'eleve' ? 'eleves' : (kind === 'ch' || kind === 'bac' || kind === 'nouveau') ? 'contenu' : kind;
      return { view: 'admin', page, kind, arg: m[2] };
    }
    return { view: 'home' };
  }

  let timer = null;
  function route() {
    if (timer) { clearInterval(timer); timer = null; }
    const r = parse();
    renderNav(r);
    $('#side').classList.remove('open');
    if (r.view === 'ch') renderChapter(r);
    else if (r.view === 'bac') r.n ? renderBacSubject(r.n) : renderBacList();
    else if (r.view === 'compte') renderCompte();
    else if (r.view === 'admin' && window.Admin) window.Admin.render(main, r);
    else renderHome();
    math(main);
    window.scrollTo(0, 0);
    track(r);
  }

  let lastView = '';
  function track(r) {
    if (STATIC || !ME) return;
    let page = r.view === 'ch' ? `ch${r.ch.id}-${r.tab}` : r.view === 'bac' ? (r.n ? `bac${r.n}` : 'bac') : r.view === 'home' ? 'accueil' : '';
    if (!page || page === lastView) return;
    lastView = page;
    api('POST', '/view', { page }).catch(() => {});
  }

  function renderCompte() {
    main.innerHTML = `<div class="wrap"><section class="hero"><div class="eyebrow">Mon compte</div><h1>Changer mon mot de passe</h1></section>
      <form class="sheet form" id="pwform">
        <label for="pw-old">Mot de passe actuel</label><input type="password" id="pw-old" autocomplete="current-password" required>
        <label for="pw-new">Nouveau mot de passe (6 caractères minimum)</label><input type="password" id="pw-new" autocomplete="new-password" minlength="6" required>
        <div class="actions"><button class="btn primary" type="submit">Enregistrer</button></div>
        <p class="form-msg" id="pw-msg"></p>
      </form></div>`;
    $('#pwform').addEventListener('submit', async e => {
      e.preventDefault();
      const msg = $('#pw-msg');
      try { await api('PUT', '/password', { ancien: $('#pw-old').value, nouveau: $('#pw-new').value }); msg.textContent = 'Mot de passe modifié.'; msg.className = 'form-msg ok'; e.target.reset(); }
      catch (err) { msg.textContent = err.message; msg.className = 'form-msg ko'; }
    });
  }

  /* ---------- connexion, inscription, mot de passe oublié ---------- */
  function fullName(u) { return [u.prenom, u.nom].filter(Boolean).join(' ') || u.username; }
  const devNote = link => link ? `<br><small>Mode local, pas d'e-mail envoyé : <a href="${esc(link)}">ouvrir le lien</a></small>` : '';

  function loginShell(inner) {
    document.body.classList.add('logged-out');
    main.innerHTML = `<div class="login-wrap"><div class="sheet login">
      <div class="login-brand"><div class="brand-mark big">∫</div><div><h1>Maths Première</h1><p class="lead">Révisions de spécialité</p></div></div>
      ${inner}</div></div>`;
  }

  function renderLogin(error, info) {
    loginShell(`<div class="login-tabs"><button class="on" type="button">Se connecter</button><button type="button" data-go="register">Créer un compte</button></div>
      <form class="form" id="login">
        ${info ? `<p class="form-msg ok">${info}</p>` : ''}
        <label for="lg-user">Identifiant ou e-mail</label><input id="lg-user" autocomplete="username" autocapitalize="none" required>
        <label for="lg-pass">Mot de passe</label><input id="lg-pass" type="password" autocomplete="current-password" required>
        <div class="actions"><button class="btn primary" type="submit">Se connecter</button><button class="linkbtn" type="button" data-go="forgot">Mot de passe oublié ?</button></div>
        <p class="form-msg ko" id="lg-msg">${error ? esc(error) : ''}</p>
      </form>`);
    $('#login').addEventListener('submit', async e => {
      e.preventDefault();
      const btn = e.target.querySelector('button[type=submit]'); btn.disabled = true;
      const msg = $('#lg-msg');
      try {
        const r = await api('POST', '/login', { username: $('#lg-user').value, password: $('#lg-pass').value });
        ME = r.user; await loadAll(); document.body.classList.remove('logged-out'); route();
      } catch (err) {
        msg.textContent = err.message; btn.disabled = false;
        if (err.code === 'unverified') {
          const b = document.createElement('button'); b.type = 'button'; b.className = 'linkbtn'; b.textContent = "Renvoyer l'e-mail de confirmation";
          b.addEventListener('click', async () => {
            try { const r = await api('POST', '/resend', { login: $('#lg-user').value }); msg.className = 'form-msg ok'; msg.innerHTML = 'E-mail renvoyé (si tu viens d\'en demander un, attends une minute).' + devNote(r.devLink); }
            catch (e2) { msg.textContent = e2.message; }
          });
          msg.append(document.createElement('br'), b);
        }
      }
    });
  }

  function renderRegister() {
    loginShell(`<div class="login-tabs"><button type="button" data-go="login">Se connecter</button><button class="on" type="button">Créer un compte</button></div>
      <form class="form" id="register">
        <div class="two"><div><label for="rg-prenom">Prénom</label><input id="rg-prenom" autocomplete="given-name" required></div>
          <div><label for="rg-nom">Nom</label><input id="rg-nom" autocomplete="family-name" required></div></div>
        <label for="rg-lycee">Lycée</label><input id="rg-lycee" placeholder="Lycée Victor Hugo, Paris" required>
        <label for="rg-email">Adresse e-mail</label><input id="rg-email" type="email" autocomplete="email" required>
        <label for="rg-user">Identifiant</label><input id="rg-user" autocapitalize="none" autocomplete="username" pattern="[a-zA-Z0-9._\\-]{2,40}" placeholder="lea.martin" required>
        <label for="rg-pass">Mot de passe (6 caractères minimum)</label><input id="rg-pass" type="password" autocomplete="new-password" minlength="6" required>
        <label for="rg-pass2">Confirme le mot de passe</label><input id="rg-pass2" type="password" autocomplete="new-password" minlength="6" required>
        <div class="actions"><button class="btn primary" type="submit">Créer mon compte</button></div>
        <p class="form-msg ko" id="rg-msg"></p>
      </form>`);
    $('#register').addEventListener('submit', async e => {
      e.preventDefault();
      const msg = $('#rg-msg'), btn = e.target.querySelector('button[type=submit]');
      if ($('#rg-pass').value !== $('#rg-pass2').value) { msg.textContent = 'Les deux mots de passe sont différents.'; return; }
      btn.disabled = true; msg.textContent = '';
      try {
        const r = await api('POST', '/register', { prenom: $('#rg-prenom').value, nom: $('#rg-nom').value, lycee: $('#rg-lycee').value, email: $('#rg-email').value, username: $('#rg-user').value, password: $('#rg-pass').value });
        loginShell(`<div class="done-box"><h2>Vérifie ta boîte mail</h2>
          <p>Un e-mail de confirmation vient d'être envoyé à <b>${esc(r.email)}</b>. Clique sur le lien qu'il contient pour ouvrir ton compte, puis connecte-toi.</p>
          <p class="lead">Rien reçu ? Regarde dans les spams. Tu pourras aussi le renvoyer depuis l'écran de connexion.${devNote(r.devLink)}</p>
          <div class="actions"><button class="btn primary" type="button" data-go="login">Aller à la connexion</button></div></div>`);
      } catch (err) { msg.textContent = err.message; btn.disabled = false; }
    });
  }

  function renderForgot() {
    loginShell(`<form class="form" id="forgot"><h2>Mot de passe oublié</h2>
        <p class="lead">Indique l'adresse e-mail de ton compte : tu recevras un lien pour choisir un nouveau mot de passe.</p>
        <label for="fg-email">Adresse e-mail</label><input id="fg-email" type="email" autocomplete="email" required>
        <div class="actions"><button class="btn primary" type="submit">Recevoir le lien</button><button class="linkbtn" type="button" data-go="login">Retour à la connexion</button></div>
        <p class="form-msg" id="fg-msg"></p></form>`);
    $('#forgot').addEventListener('submit', async e => {
      e.preventDefault();
      const msg = $('#fg-msg');
      try { const r = await api('POST', '/forgot', { email: $('#fg-email').value }); msg.className = 'form-msg ok'; msg.innerHTML = "Si un compte correspond à cette adresse, un e-mail vient d'être envoyé." + devNote(r.devLink); }
      catch (err) { msg.className = 'form-msg ko'; msg.textContent = err.message; }
    });
  }

  function renderReset(token) {
    loginShell(`<form class="form" id="reset"><h2>Nouveau mot de passe</h2>
        <label for="rs-pass">Nouveau mot de passe (6 caractères minimum)</label><input id="rs-pass" type="password" autocomplete="new-password" minlength="6" required>
        <div class="actions"><button class="btn primary" type="submit">Enregistrer</button></div>
        <p class="form-msg ko" id="rs-msg"></p></form>`);
    $('#reset').addEventListener('submit', async e => {
      e.preventDefault();
      try { await api('POST', '/reset', { token, password: $('#rs-pass').value }); renderLogin('', 'Mot de passe modifié : tu peux te connecter.'); }
      catch (err) { $('#rs-msg').textContent = err.message; }
    });
  }

  main.addEventListener('click', e => {
    const g = e.target.closest('[data-go]'); if (!g || ME) return;
    ({ login: () => renderLogin(), register: renderRegister, forgot: renderForgot })[g.dataset.go]();
  });

  async function loadAll() {
    const [c, p] = await Promise.all([api('GET', '/content'), api('GET', '/progress')]);
    CH = c.chapters.slice().sort((a, b) => a.id - b.id);
    BAC = c.bac;
    P = Object.assign(emptyP(), p.data || {});
  }

  async function boot() {
    if (STATIC) { route(); return; }
    main.innerHTML = '<div class="wrap"><p class="lead">Chargement…</p></div>';
    try {
      ME = (await api('GET', '/me')).user;
      await loadAll();
      route();
    } catch (e) {
      ME = null;
      renderNav({ view: 'login' });
      const q = new URLSearchParams(location.search);
      const clearQuery = () => history.replaceState(null, '', location.pathname + location.hash);
      if (q.get('reinit')) { const t = q.get('reinit'); clearQuery(); return renderReset(t); }
      const compte = q.get('compte'); if (compte) clearQuery();
      if (compte === 'valide') return renderLogin('', 'Adresse e-mail confirmée, ton compte est ouvert : connecte-toi !');
      if (compte === 'lien-invalide') return renderLogin("Ce lien de confirmation a expiré ou a déjà servi. Connecte-toi pour en recevoir un nouveau.");
      renderLogin(e.status === 401 ? '' : e.message);
    }
  }

  /* ---------- accueil ---------- */
  function renderHome() {
    let html = `<div class="wrap">
      <section class="hero">
        <div class="eyebrow">Maths · Première spécialité</div>
        <h1>Révise chapitre par chapitre, <span class="hl">à ton rythme</span>.</h1>
        <p>Les 11 chapitres du manuel, avec pour chacun des vidéos, une fiche de cours, un quiz, 12 exercices corrigés du plus simple au plus difficile et dix DS chronométrés. Les sujets type bac servent à la révision finale.</p>
      </section>
      <ol class="steps">
        <li><b>Regarder</b>les vidéos pour comprendre</li>
        <li><b>Lire</b>la fiche de cours</li>
        <li><b>S'échauffer</b>avec le quiz</li>
        <li><b>S'entraîner</b>sur les exercices ★ à ★★★</li>
        <li><b>Se tester</b>avec un DS en temps limité</li>
      </ol>`;
    for (const part of PARTIES) {
      const chs = CH.filter(c => c.partie === part);
      if (!chs.length) continue;
      html += `<h2 class="part-title">${esc(part)}</h2><div class="grid">`;
      for (const c of chs) {
        const pr = chapterProgress(c);
        html += `<a class="card" href="#ch${c.id}">
          <div class="top"><span class="emoji">${c.emoji}</span><div><div class="chnum">Chapitre ${c.id}</div><h3>${esc(c.titre)}</h3></div></div>
          <p class="content">${c.accroche}</p>
          <div class="meta">${pr.done}/${pr.nEx} exercices · ${P.quiz[c.id] != null ? 'quiz ' + P.quiz[c.id] + '/' + c.quiz.length : 'quiz à faire'}</div>
          <div class="bar"><span style="width:${pr.pct}%"></span></div>
        </a>`;
      }
      html += `</div>`;
    }
    if (BAC.length) {
      html += `<h2 class="part-title">Révision finale</h2><div class="grid">
        <a class="card bac" href="#bac"><div class="top"><span class="emoji">🎓</span><div><div class="chnum">${BAC.length} sujets · 4 niveaux · 2 h</div><h3>Sujets type bac</h3></div></div>
        <p>Automatismes + exercices sur tout le programme, avec corrections et barème.</p></a></div>`;
    }
    html += `<p class="footer">Ta progression est enregistrée dans ce navigateur uniquement.</p></div>`;
    main.innerHTML = html;
  }

  /* ---------- chapitre ---------- */
  function renderChapter(r) {
    const c = r.ch;
    const tabs = [['videos', 'Vidéos', c.videos.length], ['cours', 'Cours', null], ['quiz', 'Quiz', c.quiz.length], ['exos', 'Exercices', c.exercices.length], ['ds', 'DS', c.ds.length]];
    let html = `<div class="wrap">
      <header class="ch-head"><span class="emoji">${c.emoji}</span><div>
        <div class="eyebrow">Chapitre ${c.id} · ${esc(c.partie)}</div>
        <h1>${esc(c.titre)}</h1><p class="content">${c.accroche}</p></div></header>
      <nav class="tabs">${tabs.map(([k, l, n]) => `<a href="#ch${c.id}-${k}" class="${r.tab === k ? 'active' : ''}">${l}${n != null ? `<span class="count">${n}</span>` : ''}</a>`).join('')}</nav>
      <div id="tab"></div></div>`;
    main.innerHTML = html;
    const tab = $('#tab');
    const list = { videos: c.videos, quiz: c.quiz, exos: c.exercices, ds: c.ds, cours: c.cours }[r.tab];
    if (!list || !list.length) { tab.innerHTML = `<div class="sheet"><h2>Bientôt disponible</h2><p class="lead">Cette rubrique n'a pas encore de contenu.</p></div>`; return; }
    ({ videos: tabVideos, cours: tabCours, quiz: tabQuiz, exos: tabExos, ds: tabDs })[r.tab](tab, c, r);
  }

  function ytUrl(q) { return /^https:\/\//.test(q) ? q : 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q); }

  function tabVideos(el, c) {
    el.innerHTML = `<p class="lead">Commence par là : regarde les vidéos dans l'ordre, puis passe à la fiche de cours.</p>
      <div class="videos">${c.videos.map(v => `
        <a class="video" href="${ytUrl(v.recherche)}" target="_blank" rel="noopener">
          <span class="play" aria-hidden="true"></span>
          <div class="content"><h3>${esc(v.titre)}</h3><p>${v.resume}</p></div>
          <span class="dur">${esc(v.duree || '')}</span>
        </a>`).join('')}</div>
      <p class="note">Chaque lien ouvre YouTube sur une recherche ciblée (chaînes conseillées : Maths et tiques – Yvan Monka, Hans Amble, Jaicompris). Choisis la vidéo du prof dont tu préfères les explications.</p>
      <div class="actions"><a class="btn primary" href="#ch${c.id}-cours">Passer à la fiche de cours →</a></div>`;
  }

  function tabCours(el, c) {
    el.innerHTML = c.cours.map(s => `<section class="sheet notebook"><h2>${esc(s.titre)}</h2><div class="content">${s.html}</div></section>`).join('') +
      `<div class="actions" style="margin-top:16px"><a class="btn primary" href="#ch${c.id}-quiz">Tester avec le quiz →</a></div>`;
  }

  /* QCM : mode "immediat" (quiz) ou "examen" (automatismes bac) */
  function qcmBlock(qs, prefix) {
    return qs.map((q, i) => `<div class="q" data-i="${i}">
      <div class="qtext content"><span class="qn">${i + 1}.</span>${q.q}</div>
      <div class="choices">${q.choix.map((ch, j) => `<button class="choice content" data-j="${j}"><span class="letter">${'ABCD'[j] || j + 1}</span><span>${ch}</span></button>`).join('')}</div>
      <div class="expl content" hidden></div></div>`).join('');
  }
  function showAnswer(qEl, q, picked) {
    qEl.querySelectorAll('.choice').forEach((b, j) => {
      b.disabled = true;
      if (j === q.bonne) b.classList.add('right');
      else if (j === picked) b.classList.add('wrong');
    });
    const ex = qEl.querySelector('.expl');
    ex.innerHTML = `<b class="${picked === q.bonne ? 'ok' : 'ko'}">${picked === q.bonne ? 'Bonne réponse !' : picked == null ? 'Pas de réponse.' : 'Raté.'}</b> ${q.explication}`;
    ex.hidden = false; math(ex);
  }

  function tabQuiz(el, c) {
    const best = P.quiz[c.id];
    el.innerHTML = `<div class="sheet"><h2>Échauffement</h2><p class="lead">Réponds sans calculatrice. L'explication s'affiche après chaque réponse.${best != null ? ` Ton meilleur score : <b>${best}/${c.quiz.length}</b>.` : ''}</p>
      ${qcmBlock(c.quiz)}<div class="scorebox" hidden><span>Score : <strong></strong></span><button class="btn" id="retry">Recommencer</button></div></div>`;
    let score = 0, answered = 0;
    el.querySelectorAll('.q').forEach(qEl => {
      const q = c.quiz[+qEl.dataset.i];
      qEl.addEventListener('click', e => {
        const b = e.target.closest('.choice'); if (!b || b.disabled) return;
        const j = +b.dataset.j; answered++; if (j === q.bonne) score++;
        showAnswer(qEl, q, j);
        if (answered === c.quiz.length) {
          const sb = el.querySelector('.scorebox'); sb.hidden = false;
          sb.querySelector('strong').textContent = `${score}/${c.quiz.length}`;
          P.quiz[c.id] = Math.max(score, P.quiz[c.id] || 0); save(); renderNav(parse());
        }
      });
    });
    el.addEventListener('click', e => { if (e.target.id === 'retry') { tabQuiz(el, c); math(el); } });
  }

  function exoCard(e, i, opts) {
    const key = opts.key;
    const done = key && P.exos[key];
    return `<article class="exo ${done ? 'done' : ''}" data-level="${e.niveau || ''}">
      <div class="exo-head">
        ${e.niveau ? `<span class="lvl lvl${e.niveau}">${LVL[e.niveau]}</span>` : ''}
        ${e.points != null ? `<span class="pts">${e.points} pts</span>` : ''}
        <h3>${opts.num ? `Exercice ${i + 1} — ` : ''}${esc(e.titre)}</h3>
        ${key ? `<label class="donebox"><input type="checkbox" data-key="${key}" id="done-${key}" ${done ? 'checked' : ''}> Réussi</label>` : ''}
      </div>
      <div class="content">${e.enonce}</div>
      <div class="actions">
        ${e.indice ? `<button class="btn" data-show="hint">Un indice</button>` : ''}
        <button class="btn" data-show="corr">${opts.corrLabel || "J'ai cherché : voir la correction"}</button>
      </div>
      ${e.indice ? `<div class="reveal hint" hidden><div class="label">Indice</div><div class="content">${e.indice}</div></div>` : ''}
      <div class="reveal corr" hidden><div class="label">Correction</div><div class="content">${e.correction}</div></div>
      ${opts.grade ? `<div class="grade"><label for="g-${opts.grade}-${i}">Ma note :</label><input type="number" min="0" max="${e.points}" step="0.25" id="g-${opts.grade}-${i}" data-i="${i}"> / ${e.points}</div>` : ''}
    </article>`;
  }
  function wireReveal(el) {
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-show]'); if (!b) return;
      const box = b.closest('.exo').querySelector('.reveal.' + b.dataset.show);
      box.hidden = !box.hidden;
    });
  }

  function tabExos(el, c) {
    el.innerHTML = `<div class="filters"><span class="tag">Niveau :</span>
      <button class="chip on" data-f="0">Tous</button><button class="chip" data-f="1">★ Facile</button><button class="chip" data-f="2">★★ Moyen</button><button class="chip" data-f="3">★★★ Difficile</button></div>
      ${c.exercices.map((e, i) => exoCard(e, i, { key: `${c.id}-${i}`, num: true })).join('')}
      <div class="actions" style="margin-top:16px"><a class="btn primary" href="#ch${c.id}-ds">Je me sens prête : passer au DS →</a></div>`;
    wireReveal(el);
    el.addEventListener('click', e => {
      const f = e.target.closest('[data-f]'); if (!f) return;
      el.querySelectorAll('[data-f]').forEach(b => b.classList.toggle('on', b === f));
      el.querySelectorAll('.exo').forEach(x => { x.hidden = f.dataset.f !== '0' && x.dataset.level !== f.dataset.f; });
    });
    el.addEventListener('change', e => {
      const k = e.target.dataset.key; if (!k) return;
      if (e.target.checked) P.exos[k] = true; else delete P.exos[k];
      e.target.closest('.exo').classList.toggle('done', e.target.checked);
      save(); renderNav(parse());
    });
  }

  /* chrono */
  function startTimer(el, minutes) {
    let left = minutes * 60, running = false;
    const out = el.querySelector('.timer'), btn = el.querySelector('.timer-btn');
    const fmt = s => `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
    out.textContent = fmt(left);
    btn.addEventListener('click', () => {
      running = !running;
      btn.textContent = running ? 'Pause' : 'Reprendre';
      if (running && !timer) {
        timer = setInterval(() => {
          if (!running) return;
          left = Math.max(0, left - 1); out.textContent = fmt(left);
          out.classList.toggle('low', left <= 300);
          if (!left) { clearInterval(timer); timer = null; btn.textContent = 'Temps écoulé'; btn.disabled = true; }
        }, 1000);
      }
    });
  }
  const minutesOf = d => { const m = String(d).match(/(\d+)\s*h(?:\s*(\d+))?/); return m ? +m[1] * 60 + (+m[2] || 0) : 60; };

  function gradeWire(el, exos, store, key, extra = () => 0, outOf = 20) {
    const inputs = [...el.querySelectorAll('.grade input')];
    const saved = store[key + ':detail'] || [];
    inputs.forEach((inp, i) => { if (saved[i] != null) inp.value = saved[i]; });
    const totalEl = el.querySelector('.total');
    const upd = () => {
      const vals = inputs.map(x => x.value === '' ? null : Math.min(+x.value, exos[+x.dataset.i].points));
      const sum = vals.reduce((a, v) => a + (v || 0), 0) + extra();
      totalEl.textContent = `${+sum.toFixed(2)} / ${outOf}`;
      if (vals.some(v => v != null) || extra()) { store[key] = +sum.toFixed(2); store[key + ':detail'] = vals; save(); }
    };
    el.addEventListener('input', e => { if (e.target.closest('.grade')) upd(); });
    upd();
    return upd;
  }

  function tabDs(el, c, r) {
    const n = Math.min(Math.max(r.n, 1), c.ds.length), d = c.ds[n - 1], key = `${c.id}-${n - 1}`;
    el.innerHTML = `<div class="ds-pick">${c.ds.map((x, i) => `<a class="chip ${i === n - 1 ? 'on' : ''}" href="#ch${c.id}-ds${i + 1}">${esc(x.titre.split('—')[0].trim())}${P.ds[`${c.id}-${i}`] != null ? ` · ${P.ds[`${c.id}-${i}`]}/20` : ''}</a>`).join('')}</div>
      <div class="ds-bar"><h2>${esc(d.titre)}</h2><span class="tag">${esc(d.duree)} · ${d.calculatrice ? 'calculatrice autorisée' : 'sans calculatrice'}</span>
        <span class="timer"></span><button class="btn primary timer-btn">Démarrer le chrono</button></div>
      <p class="lead">Mets-toi dans les conditions du contrôle : feuille, stylo, chrono. Quand tu as fini, clique sur « Rendre ma copie », compare avec la correction et note-toi avec le barème.</p>
      ${d.exercices.map((e, i) => exoCard(e, i, { grade: 'ds' + key, corrLabel: 'Correction de cet exercice' })).join('')}
      <div class="scorebox"><button class="btn primary" id="rendre">Rendre ma copie : afficher toutes les corrections</button><span>Total : <span class="total"></span></span></div>`;
    wireReveal(el); startTimer(el, minutesOf(d.duree));
    gradeWire(el, d.exercices, P.ds, key);
    el.querySelector('#rendre').addEventListener('click', () => { el.querySelectorAll('.reveal.corr').forEach(x => (x.hidden = false)); if (timer) { clearInterval(timer); timer = null; } });
    el.addEventListener('input', () => renderNav(parse()));
  }

  /* ---------- bac ---------- */
  function renderBacList() {
    main.innerHTML = `<div class="wrap"><section class="hero"><div class="eyebrow">Révision finale</div><h1>Sujets type bac</h1>
      <p>Chaque sujet dure 2 h et suit le format de l'épreuve anticipée de mathématiques : une partie automatismes (QCM sans calculatrice, 6 points) puis des exercices sur 14 points qui mélangent les chapitres. Quatre niveaux, du sujet standard au sujet exigeant.</p></section>
      ${bacGroups().map(([niv, items]) => `<h2 class="part-title">${esc(niv)} <span class="count">${items.length} sujets</span></h2><div class="grid">${items.map(({ b, i }) => {
        const k = b._id != null ? b._id - 1 : i;
        return `<a class="card" href="#bac${i + 1}"><div class="top"><span class="emoji">📝</span><div><div class="chnum">${esc(b.duree)}${P.bac[k] != null ? ` · ma note ${P.bac[k]}/20` : ''}</div><h3>${esc(b.titre)}</h3></div></div>
        <p title="${esc((b.chapitres || []).map(n => { const ch = CH.find(c => c.id === n); return ch ? ch.titre : n; }).join(', '))}">Chapitres ${(b.chapitres || []).join(' · ')}</p></a>`;
      }).join('')}</div>`).join('')}</div>`;
  }

  const NIVEAUX = ['Standard', 'Intermédiaire', 'Approfondi', 'Exigeant'];
  function bacGroups() {
    const groups = new Map();
    BAC.forEach((b, i) => { const n = b.niveau || 'Autres sujets'; if (!groups.has(n)) groups.set(n, []); groups.get(n).push({ b, i }); });
    const rank = n => { const r = NIVEAUX.indexOf(n); return r < 0 ? 99 : r; };
    return [...groups.entries()].sort((x, y) => rank(x[0]) - rank(y[0]));
  }

  function renderBacSubject(n) {
    const b = BAC[n - 1]; if (!b) return renderBacList();
    const key = b._id != null ? b._id - 1 : n - 1;
    main.innerHTML = `<div class="wrap"><div class="eyebrow"><a href="#bac">← Tous les sujets</a>${b.niveau ? ` · niveau ${esc(b.niveau)}` : ''}</div>
      <div class="ds-bar" style="margin-top:10px"><h2>${esc(b.titre)}</h2><span class="tag">${esc(b.duree)}</span><span class="timer"></span><button class="btn primary timer-btn">Démarrer le chrono</button></div>
      <h2 class="section-title">Partie 1 · Automatismes (6 points, sans calculatrice)</h2>
      <div class="sheet"><p class="lead">Une seule bonne réponse par question, 0,5 point chacune. Les réponses s'affichent quand tu valides la partie.</p>
        ${qcmBlock(b.automatismes)}
        <div class="scorebox"><button class="btn primary" id="valider">Valider la partie 1</button><span>Automatismes : <strong id="autoscore">–</strong></span></div></div>
      <h2 class="section-title">Partie 2 · Exercices (14 points)</h2>
      ${b.exercices.map((e, i) => exoCard(e, i, { grade: 'bac' + key, corrLabel: 'Correction de cet exercice' })).join('')}
      <div class="scorebox"><button class="btn primary" id="rendre">Rendre ma copie : afficher toutes les corrections</button><span>Total : <span class="total"></span></span></div></div>`;
    const el = main;
    const picks = {};
    let auto = P.bac[key + ':auto'] || 0, validated = false;
    el.querySelectorAll('.q').forEach(qEl => qEl.addEventListener('click', e => {
      const bt = e.target.closest('.choice'); if (!bt || bt.disabled || validated) return;
      qEl.querySelectorAll('.choice').forEach(x => x.classList.toggle('picked', x === bt));
      picks[qEl.dataset.i] = +bt.dataset.j;
    }));
    wireReveal(el); startTimer(el, minutesOf(b.duree));
    const upd = gradeWire(el, b.exercices, P.bac, key, () => (validated ? auto : 0));
    el.querySelector('#valider').addEventListener('click', ev => {
      if (validated) return; validated = true; ev.target.disabled = true;
      auto = 0;
      el.querySelectorAll('.q').forEach(qEl => {
        const q = b.automatismes[+qEl.dataset.i], p = picks[qEl.dataset.i];
        if (p === q.bonne) auto += 0.5;
        showAnswer(qEl, q, p);
      });
      $('#autoscore').textContent = `${auto} / 6`;
      P.bac[key + ':auto'] = auto; upd();
    });
    el.querySelector('#rendre').addEventListener('click', () => { el.querySelectorAll('.reveal.corr').forEach(x => (x.hidden = false)); if (timer) { clearInterval(timer); timer = null; } });
  }

  /* ---------- divers ---------- */
  $('#menu').addEventListener('click', () => $('#side').classList.toggle('open'));
  main.addEventListener('click', () => $('#side').classList.remove('open'));
  $('#theme').addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('revmaths1-theme', root.dataset.theme); } catch (e) { /* ignore */ }
  });
  try { const t = localStorage.getItem('revmaths1-theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) { /* ignore */ }

  document.addEventListener('click', async e => {
    if (e.target.id !== 'logout') return;
    try { await api('POST', '/logout', {}); } catch (err) { /* ignore */ }
    ME = null; CH = []; BAC = []; P = emptyP(); location.hash = '';
    renderNav({ view: 'login' }); renderLogin();
  });

  window.App = {
    api, toast, math, esc, chapterProgress, ytUrl, LVL, PARTIES,
    NIVEAUX, get CH() { return CH; }, get BAC() { return BAC; }, get ME() { return ME; },
    async reload() { await loadAll(); },
    refreshNav() { renderNav(parse()); },
  };

  window.addEventListener('hashchange', () => { if (STATIC || ME) route(); });
  boot();
})();
