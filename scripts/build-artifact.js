// Produit artifact.html (même page, sans doctype/html/head/body) pour la publication en Artifact claude.ai.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const head = src.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<meta (charset|name="viewport")[^>]*>\n?/g, '');
const body = src.match(/<body>([\s\S]*?)<\/body>/)[1];
fs.writeFileSync(path.join(root, 'artifact.html'), head.trim() + '\n' + body.trim() + '\n');
console.log('artifact.html écrit');
