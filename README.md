# Maths Première — site de révision

Site statique pour réviser le programme de Première spécialité maths, chapitre par chapitre (11 chapitres + 4 sujets type bac).

Chaque chapitre propose :
- **Vidéos** : des liens vers des recherches YouTube ciblées (Maths et tiques – Yvan Monka, Hans Amble, Jaicompris…)
- **Cours** : une fiche de cours avec définitions, propriétés, exemples et pièges
- **Quiz** : des QCM d'échauffement, corrigés au fur et à mesure
- **Exercices** : 12 exercices (★ facile, ★★ moyen, ★★★ difficile) avec indice et correction rédigée
- **DS** : 2 devoirs d'1 h sur 20 points, avec chrono, correction, barème et auto-notation

La rubrique **Sujets type bac** contient 4 sujets de 2 h au format de l'épreuve anticipée : 12 automatismes sur 6 points, puis des exercices sur 14 points.

## Utilisation

Ouvrir `index.html` dans un navigateur (aucune installation nécessaire, fonctionne hors ligne sauf les polices et les vidéos).
Pour le mettre en ligne : activer GitHub Pages sur la branche (Settings → Pages).

La progression (exercices réussis, scores) est enregistrée dans le navigateur.

## Contenu

Le contenu est dans `data/chNN.js` et `data/bac.js` (format décrit dans `SCHEMA.md`).
`npm install && npm run validate` vérifie la structure et compile toutes les formules KaTeX.
