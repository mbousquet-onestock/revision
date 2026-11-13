// Valide les fichiers data/*.js : structure + compilation KaTeX de toutes les formules.
// Usage : node scripts/validate.js [data/ch03.js ...]
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const katex = require('katex');

const dataDir = path.join(__dirname, '..', 'data');
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dataDir).filter(f => f.endsWith('.js')).sort().map(f => path.join(dataDir, f));

let errors = 0;
const err = (where, msg) => { errors++; console.error(`✗ ${where}: ${msg}`); };

function checkText(where, s) {
  if (typeof s !== 'string' || !s.trim()) return err(where, 'texte vide ou absent');
  if (s.includes('$')) err(where, 'contient "$" (utiliser \\( \\) / \\[ \\] et « € »)');
  const re = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
  let m;
  while ((m = re.exec(s))) {
    const tex = (m[1] !== undefined ? m[1] : m[2])
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    try { katex.renderToString(tex, { throwOnError: true, displayMode: m[2] !== undefined }); }
    catch (e) { err(where, `KaTeX: ${e.message.split('\n')[0]} — dans « ${tex.slice(0, 80)} »`); }
  }
  const stripped = s.replace(re, '');
  if (/\\\(|\\\)|\\\[|\\\]/.test(stripped)) err(where, 'délimiteur maths non apparié');
  for (const tag of ['div', 'ul', 'ol', 'table', 'pre', 'p']) {
    const o = (s.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
    const c = (s.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    if (o !== c) err(where, `<${tag}> ouvert ${o} fois, fermé ${c} fois`);
  }
}

function checkQcm(where, q) {
  checkText(where + '.q', q.q);
  if (!Array.isArray(q.choix) || q.choix.length < 2) err(where, 'choix manquants');
  else q.choix.forEach((c, i) => checkText(`${where}.choix[${i}]`, c));
  if (!Number.isInteger(q.bonne) || !q.choix || q.bonne < 0 || q.bonne >= q.choix.length) err(where, 'index "bonne" invalide');
  checkText(where + '.explication', q.explication);
}

function checkExo(where, e, needPoints) {
  if (!e.titre) err(where, 'titre manquant');
  checkText(where + '.enonce', e.enonce);
  checkText(where + '.correction', e.correction);
  if (e.indice !== undefined) checkText(where + '.indice', e.indice);
  if (needPoints && typeof e.points !== 'number') err(where, 'points manquants');
}

for (const file of files) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
  catch (e) { err(path.basename(file), 'erreur JS : ' + e.message); continue; }
  const name = path.basename(file);
  for (const ch of ctx.window.CHAPTERS || []) {
    const w = `${name} ch${ch.id}`;
    if (!ch.id || !ch.titre || !ch.partie || !ch.emoji) err(w, 'id/titre/partie/emoji manquant');
    checkText(w + '.accroche', ch.accroche);
    (ch.videos || []).forEach((v, i) => { if (!v.titre || !v.recherche) err(`${w}.videos[${i}]`, 'titre/recherche'); checkText(`${w}.videos[${i}].resume`, v.resume); });
    if (!ch.videos || ch.videos.length < 4) err(w, 'au moins 4 vidéos');
    (ch.cours || []).forEach((c, i) => { if (!c.titre) err(`${w}.cours[${i}]`, 'titre'); checkText(`${w}.cours[${i}].html`, c.html); });
    if (!ch.cours || !ch.cours.length) err(w, 'cours manquant');
    (ch.quiz || []).forEach((q, i) => checkQcm(`${w}.quiz[${i}]`, q));
    if (!ch.quiz || ch.quiz.length < 6) err(w, 'au moins 6 questions de quiz');
    (ch.exercices || []).forEach((e, i) => {
      checkExo(`${w}.exercices[${i}]`, e);
      if (![1, 2, 3].includes(e.niveau)) err(`${w}.exercices[${i}]`, 'niveau 1/2/3');
    });
    if (!ch.exercices || ch.exercices.length < 12) err(w, 'au moins 12 exercices');
    (ch.ds || []).forEach((d, i) => {
      if (!d.titre || !d.duree) err(`${w}.ds[${i}]`, 'titre/durée');
      const tot = (d.exercices || []).reduce((a, e) => a + (e.points || 0), 0);
      if (tot !== 20) err(`${w}.ds[${i}]`, `total des points = ${tot} (attendu 20)`);
      (d.exercices || []).forEach((e, j) => checkExo(`${w}.ds[${i}].ex[${j}]`, e, true));
    });
    if (!ch.ds || ch.ds.length < 2) err(w, 'au moins 2 DS');
    console.log(`• ${name} — chapitre ${ch.id} « ${ch.titre} » : ${ch.videos?.length} vidéos, ${ch.cours?.length} parties de cours, ${ch.quiz?.length} QCM, ${ch.exercices?.length} exercices, ${ch.ds?.length} DS`);
  }
  for (const [i, b] of (ctx.window.BAC || []).entries()) {
    const w = `${name} bac[${i}]`;
    (b.automatismes || []).forEach((q, j) => checkQcm(`${w}.auto[${j}]`, q));
    (b.exercices || []).forEach((e, j) => checkExo(`${w}.ex[${j}]`, e, true));
    const tot = (b.exercices || []).reduce((a, e) => a + (e.points || 0), 0);
    if (tot !== 14) err(w, `exercices = ${tot} points (attendu 14)`);
    if ((b.automatismes || []).length !== 12) err(w, '12 automatismes attendus');
    console.log(`• ${name} — ${b.titre} : ${b.automatismes?.length} automatismes, ${b.exercices?.length} exercices`);
  }
}
console.log(errors ? `\n${errors} erreur(s).` : '\nAucune erreur ✓');
process.exit(errors ? 1 : 0);
