/* Site de révision — Maths Première spécialité.
   Routage par hash : #accueil, #ch3, #ch3-cours, #ch3-quiz, #ch3-exos, #ch3-ds, #ch3-ds2, #bac, #bac2 */
(function () {
  'use strict';
  const CH = (window.CHAPTERS || []).slice().sort((a, b) => a.id - b.id);
  const BAC = window.BAC || [];
  const PARTIES = ['Algorithmique et programmation', 'Algèbre', 'Analyse', 'Géométrie', 'Probabilités et statistiques'];
  const LVL = { 1: '★ Facile', 2: '★★ Moyen', 3: '★★★ Difficile' };
  const $ = (s, el = document) => el.querySelector(s);
  const main = $('#main');

  /* ---------- progression (localStorage, facultatif) ---------- */
  const KEY = 'revmaths1-progress';
  let P = { exos: {}, quiz: {}, ds: {}, bac: {} };
  try { const raw = localStorage.getItem(KEY); if (raw) P = Object.assign(P, JSON.parse(raw)); } catch (e) { /* stockage indisponible */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { /* ignore */ } };

  function chapterProgress(ch) {
    const nEx = ch.exercices.length;
    const done = ch.exercices.filter((_, i) => P.exos[`${ch.id}-${i}`]).length;
    const quizOk = P.quiz[ch.id] != null ? 1 : 0;
    const dsDone = (ch.ds || []).filter((_, i) => P.ds[`${ch.id}-${i}`] != null).length;
    const total = nEx + 1 + (ch.ds || []).length;
    return { done, nEx, pct: Math.round(100 * (done + quizOk + dsDone) / total) };
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
    nav.innerHTML = html;
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
    else renderHome();
    math(main);
    window.scrollTo(0, 0);
  }

  /* ---------- accueil ---------- */
  function renderHome() {
    let html = `<div class="wrap">
      <section class="hero">
        <div class="eyebrow">Maths · Première spécialité</div>
        <h1>Révise chapitre par chapitre, <span class="hl">à ton rythme</span>.</h1>
        <p>Les 11 chapitres du manuel, avec pour chacun des vidéos, une fiche de cours, un quiz, 12 exercices corrigés du plus simple au plus difficile et deux DS chronométrés. Les sujets type bac servent à la révision finale.</p>
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
        <a class="card bac" href="#bac"><div class="top"><span class="emoji">🎓</span><div><div class="chnum">${BAC.length} sujets · 2 h</div><h3>Sujets type bac</h3></div></div>
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
    ({ videos: tabVideos, cours: tabCours, quiz: tabQuiz, exos: tabExos, ds: tabDs })[r.tab](tab, c, r);
  }

  function ytUrl(q) { return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q); }

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
      <p>Chaque sujet dure 2 h et suit le format de l'épreuve anticipée de mathématiques : une partie automatismes (QCM sans calculatrice, 6 points) puis des exercices sur 14 points qui mélangent les chapitres.</p></section>
      <div class="grid">${BAC.map((b, i) => `<a class="card" href="#bac${i + 1}"><div class="top"><span class="emoji">📝</span><div><div class="chnum">${esc(b.duree)}${P.bac[i] != null ? ` · ma note ${P.bac[i]}/20` : ''}</div><h3>${esc(b.titre)}</h3></div></div>
        <p>Chapitres : ${(b.chapitres || []).map(n => { const ch = CH.find(c => c.id === n); return ch ? esc(ch.titre) : n; }).join(', ')}</p></a>`).join('')}</div></div>`;
  }

  function renderBacSubject(n) {
    const b = BAC[n - 1]; if (!b) return renderBacList();
    const key = n - 1;
    main.innerHTML = `<div class="wrap"><div class="eyebrow"><a href="#bac">← Tous les sujets</a></div>
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

  window.addEventListener('hashchange', route);
  route();
})();
