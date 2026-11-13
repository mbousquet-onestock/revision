# Maths Première — site de révision

Site statique pour réviser le programme de Première spécialité maths, chapitre par chapitre (11 chapitres + 4 sujets type bac).

Chaque chapitre propose :
- **Vidéos** : des liens vers des recherches YouTube ciblées (Maths et tiques – Yvan Monka, Hans Amble, Jaicompris…)
- **Cours** : une fiche de cours avec définitions, propriétés, exemples et pièges
- **Quiz** : des QCM d'échauffement, corrigés au fur et à mesure
- **Exercices** : 12 exercices (★ facile, ★★ moyen, ★★★ difficile) avec indice et correction rédigée
- **DS** : 2 devoirs d'1 h sur 20 points, avec chrono, correction, barème et auto-notation

La rubrique **Sujets type bac** contient 4 sujets de 2 h au format de l'épreuve anticipée : 12 automatismes sur 6 points, puis des exercices sur 14 points.

## Comptes élèves et backoffice

Le site fonctionne avec des comptes : chaque élève se connecte avec un identifiant et un mot de passe.
Sa progression (exercices réussis, quiz, notes de DS et de bac) et les pages qu'il consulte sont enregistrées en base.

Le compte **administrateur** a accès au backoffice :
- **Suivi des élèves** : avancement par élève et par chapitre, moyennes, activité récente, remise à zéro.
- **Gestion des accès** : créer un compte, renommer, changer le mot de passe, désactiver, passer admin, supprimer.
- **Gestion des cours** : modifier un chapitre (vidéos, fiche de cours, quiz, exercices, DS) ou un sujet type bac, avec aperçu des formules ; ajouter ou supprimer un chapitre ou un sujet ; revenir au contenu d'origine.

## Déploiement sur Vercel

1. Une base Postgres Neon associée au projet (Vercel fournit `DATABASE_URL` / `POSTGRES_URL`).
2. Variables d'environnement à ajouter (Settings → Environment Variables) :
   - `AUTH_SECRET` : une longue chaîne aléatoire (signe les sessions)
   - `ADMIN_PASSWORD` : mot de passe du premier compte administrateur
   - `ADMIN_USERNAME` (facultatif, `admin` par défaut)
3. Redéployer. Au premier appel, les tables sont créées, le contenu de `data/*.js` est importé et le compte admin est créé.
   Changer `ADMIN_PASSWORD` ensuite ne modifie pas le compte : utiliser le backoffice ou « Mot de passe ».

L'API est une seule fonction (`api/index.js`, routée par `vercel.json`). Les fichiers `data/` ne sont pas servis publiquement.

## Développement local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000 (compte `admin` / `admin`, base PGlite en mémoire ; `PGLITE_DIR=.pgdata` pour la conserver).

`artifact.html` (généré par `node scripts/build-artifact.js`) est une version statique sans comptes, avec progression dans le navigateur.

## Contenu

Le contenu est dans `data/chNN.js` et `data/bac.js` (format décrit dans `SCHEMA.md`).
`npm install && npm run validate` vérifie la structure et compile toutes les formules KaTeX.
