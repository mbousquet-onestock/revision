# Format des fichiers de contenu

Chaque chapitre est un fichier `data/chNN.js` (NN = 01 … 11). Les DS type bac sont dans `data/bac.js`.
Les fichiers sont des scripts JS classiques (pas de modules) chargés par `index.html`.

## Règles d'écriture (IMPORTANT)

- Tout texte contenant du HTML / des maths est écrit avec le tag `R` = `String.raw` : ``R`...` ``.
  Cela évite tout problème d'échappement des antislashs LaTeX.
- Maths : **uniquement** `\( ... \)` en ligne et `\[ ... \]` en bloc (rendu KaTeX).
  **Ne jamais utiliser le caractère `$`** (ni pour les maths, ni pour l'argent : écrire « € »).
  Ne jamais écrire `${` ni un accent grave (backtick) dans le contenu. Un texte ne doit pas se terminer par `\`.
- Le contenu est du HTML simple : `<p>`, `<ul><li>`, `<ol>`, `<b>`, `<i>`, `<br>`, `<table>`,
  `<pre><code>` pour le Python (échapper `<` en `&lt;` et `>` en `&gt;` dans le code),
  `<div class="def">` (définition), `<div class="prop">` (propriété / théorème),
  `<div class="ex">` (exemple), `<div class="warn">` (piège classique), `<div class="astuce">`.
- Tableaux de signes / variations : utiliser `<table class="tv">` (cellules simples) ou `\begin{array}` KaTeX.
- Énoncés en français, niveau Première spécialité (programme 2019), du plus simple au plus difficile.
- Corrections **complètes et rédigées** (comme attendu d'un élève), pas juste le résultat. Vérifier chaque calcul.

## Structure d'un chapitre

```js
(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 3,                       // numéro du chapitre
  titre: "Suites numériques",
  partie: "Algèbre",           // Algorithmique et programmation | Algèbre | Analyse | Géométrie | Probabilités et statistiques
  emoji: "🔢",
  accroche: R`Une phrase ludique qui donne envie (ex. lien avec la vie réelle).`,

  // Vidéos : on ne met PAS d'URL ; le site crée un lien de recherche YouTube à partir de "recherche".
  // Viser des recherches précises qui tombent sur Yvan Monka (Maths et tiques), Hans Amble, Jaicompris, etc.
  videos: [
    { titre: "Suite arithmétique : la définition", recherche: "Yvan Monka suite arithmétique définition", duree: "≈ 6 min", resume: R`Ce qu'on y apprend.` }
  ],                            // 5 à 8 vidéos, dans l'ordre du cours

  cours: [                      // fiche de cours : une entrée par partie du chapitre (cf. sommaire du manuel)
    { titre: "1. Les suites numériques", html: R`<div class="def">...</div> ...` }
  ],

  quiz: [                       // échauffement ludique : 6 à 8 QCM rapides (automatismes)
    { q: R`...`, choix: [R`...`, R`...`, R`...`, R`...`], bonne: 2, explication: R`...` }   // bonne = index (0..3)
  ],

  exercices: [                  // 12 exercices : 4 de niveau 1, 4 de niveau 2, 4 de niveau 3, dans cet ordre
    { niveau: 1, titre: "...", enonce: R`...`, indice: R`...`, correction: R`...` }
  ],

  ds: [                         // 2 devoirs surveillés d'1 h sur 20 points, chacun 3 ou 4 exercices
    { titre: "DS n°1 — ...", duree: "1 h", calculatrice: true,
      exercices: [ { titre: "Exercice 1", points: 5, enonce: R`...`, correction: R`... barème détaillé ...` } ] }
  ]
});
})();
```

## Structure des DS type bac (`data/bac.js`)

```js
(function () {
const R = String.raw;
window.BAC = [
  { titre: "Sujet type bac n°1", duree: "2 h", calculatrice: false,
    chapitres: [2, 3, 4, 5, 10],
    automatismes: [ { q: R`...`, choix: [...4], bonne: 0, explication: R`...` } ],   // 12 QCM (6 points)
    exercices: [ { titre: "Exercice 1 — Suites", points: 5, chapitres: [3], enonce: R`...`, correction: R`...` } ]  // 14 points
  }
];
})();
```

Validation : `npm run validate` (vérifie la structure et compile toutes les formules avec KaTeX).
