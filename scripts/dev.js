// Serveur de développement local : fichiers statiques + /api (même code que sur Vercel).
// Sans DATABASE_URL, la base est PGlite (en mémoire, ou dans PGLITE_DIR). Compte admin par défaut : admin / admin.
const http = require('http');
const fs = require('fs');
const path = require('path');
const api = require('../api/index.js');

const root = path.join(__dirname, '..');
const port = +process.env.PORT || 3000;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.woff2': 'font/woff2', '.json': 'application/json', '.svg': 'image/svg+xml' };

http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.startsWith('/api/') || p === '/api') return api(req, res);
  if (p.startsWith('/data/') || p.startsWith('/lib/') || p.startsWith('/node_modules/')) { res.statusCode = 404; return res.end(); }
  const file = path.join(root, p === '/' ? 'index.html' : p);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.statusCode = 404; return res.end('404'); }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`http://localhost:${port}`));
