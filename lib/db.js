// Accès base de données : PostgreSQL (Neon via Vercel, Supabase…) grâce à DATABASE_URL / POSTGRES_URL,
// ou PGlite (Postgres embarqué) en développement local quand aucune URL n'est fournie.
const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
let client = null;

async function getClient() {
  if (client) return client;
  if (url) {
    const { Pool } = require('pg');
    const local = /localhost|127\.0\.0\.1/.test(url);
    const pool = new Pool({ connectionString: url, max: 3, ssl: local ? false : { rejectUnauthorized: false } });
    client = { query: (text, params) => pool.query(text, params) };
  } else {
    if (process.env.VERCEL) {
      throw new Error("Aucune base de données configurée : ajoute DATABASE_URL (ou POSTGRES_URL) dans les variables d'environnement Vercel.");
    }
    const { PGlite } = require('@electric-sql/pglite');
    const db = new PGlite(process.env.PGLITE_DIR || undefined);
    client = { query: (text, params) => db.query(text, params) };
  }
  return client;
}

async function query(text, params = []) {
  const c = await getClient();
  const r = await c.query(text, params);
  return r.rows;
}

const SCHEMA = [
  `create table if not exists users (
     id serial primary key,
     username text unique not null,
     nom text not null default '',
     password_hash text not null,
     role text not null default 'student',
     actif boolean not null default true,
     created_at timestamptz not null default now(),
     last_login timestamptz)`,
  `create table if not exists progress (
     user_id int primary key references users(id) on delete cascade,
     data jsonb not null default '{}',
     updated_at timestamptz not null default now())`,
  `create table if not exists views (
     id serial primary key,
     user_id int not null references users(id) on delete cascade,
     page text not null,
     at timestamptz not null default now())`,
  `create index if not exists views_user_at on views(user_id, at desc)`,
  `create table if not exists docs (
     kind text not null,
     id int not null,
     data jsonb not null,
     updated_at timestamptz not null default now(),
     primary key (kind, id))`,
  `create table if not exists meta (key text primary key, value text not null)`,
  // inscription en ligne + vérification de l'adresse e-mail
  `alter table users add column if not exists prenom text not null default ''`,
  `alter table users add column if not exists lycee text not null default ''`,
  `alter table users add column if not exists email text`,
  `alter table users add column if not exists email_verified boolean not null default true`,
  `alter table users add column if not exists token_hash text`,
  `alter table users add column if not exists token_kind text`,
  `alter table users add column if not exists token_expires timestamptz`,
  `alter table users add column if not exists token_sent_at timestamptz`,
  `create unique index if not exists users_email_unique on users (lower(email))`,
];

module.exports = { query, SCHEMA };
