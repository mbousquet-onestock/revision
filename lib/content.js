// Lecture du contenu d'origine (data/*.js) pour initialiser ou réinitialiser la base.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = path.join(__dirname, '..', 'data');

function loadOriginal() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.js')).sort()) {
    vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'), ctx, { filename: f });
  }
  // passage par JSON pour obtenir des objets ordinaires (hors contexte vm)
  return JSON.parse(JSON.stringify({ chapters: ctx.window.CHAPTERS || [], bac: ctx.window.BAC || [] }));
}

module.exports = { loadOriginal };
