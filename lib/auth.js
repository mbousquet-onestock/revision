// Mots de passe (scrypt) et jeton de session signé (HMAC) stocké dans un cookie HttpOnly.
const crypto = require('crypto');

const SECRET = process.env.AUTH_SECRET || (process.env.VERCEL ? null : 'dev-secret-local');
const COOKIE = 'rm_session';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 jours

function hashPassword(pw) {
  const salt = crypto.randomBytes(16).toString('hex');
  const h = crypto.scryptSync(pw, salt, 64).toString('hex');
  return `scrypt$${salt}$${h}`;
}
function checkPassword(pw, stored) {
  const [, salt, h] = String(stored).split('$');
  if (!salt || !h) return false;
  const a = crypto.scryptSync(String(pw), salt, 64);
  const b = Buffer.from(h, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function sign(payload) {
  if (!SECRET) throw new Error("AUTH_SECRET manquant dans les variables d'environnement Vercel.");
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + MAX_AGE })).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  return `${body}.${sig}`;
}
function verify(token) {
  if (!SECRET || !token) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  const expected = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const p = JSON.parse(Buffer.from(body, 'base64url').toString());
    return p.exp > Date.now() / 1000 ? p : null;
  } catch (e) {
    return null;
  }
}

function readCookie(req) {
  const m = (req.headers.cookie || '').match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}
function setCookie(res, token, secure) {
  const parts = [`${COOKIE}=${token ? encodeURIComponent(token) : ''}`, 'Path=/', 'HttpOnly', 'SameSite=Lax', `Max-Age=${token ? MAX_AGE : 0}`];
  if (secure) parts.push('Secure');
  res.setHeader('Set-Cookie', parts.join('; '));
}

module.exports = { hashPassword, checkPassword, sign, verify, readCookie, setCookie };
