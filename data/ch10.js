(function () {
const R = String.raw;

// --- Petit utilitaire : arbre pondéré à deux niveaux en SVG (texte brut, sans KaTeX) ---
function bar(s) { return s + '̄'; }
function arbre(o) {
  var A = o.A, B = o.B;
  var W = o.fin ? 480 : 320;
  var s = '<svg viewBox="0 0 ' + W + ' 210" width="' + W + '" style="max-width:100%;height:auto;display:block;margin:0.6em auto" role="img" aria-label="Arbre pondéré">';
  function L(x1, y1, x2, y2) { s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="currentColor" stroke-width="1.4"/>'; }
  function T(x, y, t, anc, sz) { s += '<text x="' + x + '" y="' + y + '" fill="currentColor" font-size="' + (sz || 15) + '" text-anchor="' + (anc || 'middle') + '">' + t + '</text>'; }
  var y1 = [55, 155], y2 = [[25, 85], [125, 185]];
  for (var i = 0; i < 2; i++) {
    L(10, 105, 120, y1[i]);
    T(135, y1[i] + 5, A[i], 'middle', 16);
    T(58, i ? 147 : 72, o.p[i], 'middle', 14);
    for (var j = 0; j < 2; j++) {
      L(150, y1[i], 255, y2[i][j]);
      T(270, y2[i][j] + 5, B[j], 'middle', 16);
      var mid = (y1[i] + y2[i][j]) / 2;
      T(198, j ? mid + 16 : mid - 9, o.q[i][j], 'middle', 14);
      if (o.fin) T(295, y2[i][j] + 5, o.fin[2 * i + j], 'start', 13);
    }
  }
  return s + '</svg>';
}

(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 10,
  titre: "Probabilités conditionnelles",
  partie: "Probabilités et statistiques",
  emoji: "🎲",
  accroche: R`Ton test est positif : es-tu vraiment malade ? Il pleut : quelle chance d'arriver en retard ? Dès qu'une information nouvelle tombe, les probabilités changent ! Ce chapitre t'apprend à raisonner « sachant que… » avec des tableaux et des arbres — et à ne plus te faire piéger par les fausses évidences (même les médecins s'y trompent).`,

  videos: [
    { titre: "Probabilité conditionnelle : la définition", recherche: "Yvan Monka probabilité conditionnelle définition", duree: "≈ 7 min", resume: R`Ce que signifie \(P_A(B)\) et comment le calculer avec la formule \(\frac{P(A\cap B)}{P(A)}\).` },
    { titre: "Probabilités conditionnelles avec un tableau", recherche: "Yvan Monka probabilités conditionnelles tableau croisé effectifs", duree: "≈ 6 min", resume: R`Lire des probabilités (simples, d'intersection, conditionnelles) dans un tableau à double entrée.` },
    { titre: "Construire et utiliser un arbre pondéré", recherche: "Yvan Monka arbre pondéré probabilités conditionnelles", duree: "≈ 8 min", resume: R`Les règles des arbres : somme des branches égale à 1, produit le long d'un chemin.` },
    { titre: "Formule des probabilités totales", recherche: "Yvan Monka formule des probabilités totales arbre pondéré", duree: "≈ 7 min", resume: R`Additionner les chemins qui mènent à un même événement.` },
    { titre: "Inverser le conditionnement (test de dépistage)", recherche: "Yvan Monka probabilité conditionnelle test de dépistage calculer PB(A)", duree: "≈ 9 min", resume: R`Calculer \(P_B(A)\) quand l'arbre donne \(P_A(B)\) : l'exemple célèbre du test médical.` },
    { titre: "Événements indépendants", recherche: "Yvan Monka événements indépendants probabilités première", duree: "≈ 7 min", resume: R`La définition \(P(A\cap B)=P(A)\times P(B)\) et comment prouver (ou réfuter) une indépendance.` },
    { titre: "Succession de deux épreuves indépendantes", recherche: "Yvan Monka succession de deux épreuves indépendantes arbre", duree: "≈ 6 min", resume: R`Modéliser deux expériences qui ne s'influencent pas, avec un arbre ou un tableau.` },
    { titre: "Méthode de Monte-Carlo en Python", recherche: "méthode de Monte-Carlo Python estimation de pi lycée", duree: "≈ 10 min", resume: R`Lancer des points au hasard pour estimer une aire ou le nombre \(\pi\).` }
  ],

  cours: [
    { titre: "1. Probabilité conditionnelle", html: R`
<div class="def"><b>Définition.</b> Soient \(A\) et \(B\) deux événements avec \(P(A)\neq0\). La <b>probabilité de \(B\) sachant \(A\)</b> est
\[P_A(B)=\frac{P(A\cap B)}{P(A)}.\]
C'est la probabilité que \(B\) se réalise quand on <b>sait</b> que \(A\) est réalisé : l'univers « se réduit » à \(A\).</div>
<div class="prop"><b>Conséquence (formule du produit).</b> \(P(A\cap B)=P(A)\times P_A(B)\).<br>
De plus \(P_A(B)+P_A(\overline B)=1\).</div>
<h4>Du langage naturel au symbolique</h4>
<table class="tv">
<tr><td><b>Phrase</b></td><td><b>Traduction</b></td></tr>
<tr><td>« 30 % des élèves sont des filles »</td><td>\(P(F)=0{,}3\)</td></tr>
<tr><td>« 12 % des élèves sont des filles qui font du sport »</td><td>\(P(F\cap S)=0{,}12\)</td></tr>
<tr><td>« 40 % des filles font du sport »</td><td>\(P_F(S)=0{,}4\)</td></tr>
<tr><td>« parmi les sportifs, 25 % sont des filles »</td><td>\(P_S(F)=0{,}25\)</td></tr>
</table>
<div class="astuce">Les mots <b>« parmi »</b>, <b>« sachant que »</b>, <b>« si »</b>, <b>« lorsque »</b> annoncent une probabilité conditionnelle : l'événement qui suit « parmi » se met <b>en indice</b>.</div>
<h4>Tableau croisé d'effectifs</h4>
<div class="ex"><b>Exemple.</b> Dans un lycée de 200 élèves de Première :
<table class="tv">
<tr><td></td><td>Spé maths \(M\)</td><td>Pas spé maths</td><td>Total</td></tr>
<tr><td>Filles \(F\)</td><td>60</td><td>50</td><td>110</td></tr>
<tr><td>Garçons</td><td>54</td><td>36</td><td>90</td></tr>
<tr><td>Total</td><td>114</td><td>86</td><td>200</td></tr>
</table>
On choisit un élève au hasard.
<ul>
<li>\(P(F\cap M)=\frac{60}{200}=0{,}3\) (on divise par l'effectif <b>total</b>).</li>
<li>\(P_F(M)=\frac{60}{110}=\frac{6}{11}\approx0{,}545\) : on se restreint à la <b>ligne</b> des filles.</li>
<li>\(P_M(F)=\frac{60}{114}=\frac{10}{19}\approx0{,}526\) : on se restreint à la <b>colonne</b> des spé maths.</li>
</ul></div>
<div class="warn"><b>Piège n°1 :</b> \(P_A(B)\) et \(P_B(A)\) sont <b>différents</b> en général ! « La probabilité d'être un garçon sachant qu'on joue au rugby » est grande ; « la probabilité de jouer au rugby sachant qu'on est un garçon » est petite.<br>
<b>Piège n°2 :</b> ne pas confondre \(P(A\cap B)\) (on divise par le total) et \(P_A(B)\) (on divise par l'effectif de \(A\)).</div>` },
    { titre: "2. Arbres pondérés et probabilités totales", html: R`
<p>Un arbre pondéré représente une expérience en plusieurs étapes. Exemple : \(P(A)=0{,}3\), \(P_A(B)=0{,}8\), \(P_{\overline A}(B)=0{,}1\).</p>`
+ arbre({ A: ['A', bar('A')], B: ['B', bar('B')], p: ['0,3', '0,7'], q: [['0,8', '0,2'], ['0,1', '0,9']], fin: ['P(A∩B) = 0,24', 'P(A∩' + bar('B') + ') = 0,06', 'P(' + bar('A') + '∩B) = 0,07', 'P(' + bar('A') + '∩' + bar('B') + ') = 0,63'] }) + R`
<div class="prop"><b>Règles des arbres pondérés.</b>
<ol>
<li>La somme des probabilités des branches issues d'un même nœud vaut \(1\).</li>
<li>Les branches du 1<sup>er</sup> niveau portent \(P(A)\) et \(P(\overline A)\) ; celles du 2<sup>e</sup> niveau portent des probabilités <b>conditionnelles</b> \(P_A(B)\), \(P_A(\overline B)\)…</li>
<li>La probabilité d'un <b>chemin</b> (une intersection) est le <b>produit</b> des probabilités sur ses branches : \(P(A\cap B)=P(A)\times P_A(B)\).</li>
<li>La probabilité d'un événement est la <b>somme</b> des probabilités des chemins qui y mènent.</li>
</ol></div>
<div class="prop"><b>Formule des probabilités totales.</b> Si \(A_1,\dots,A_n\) forment une <b>partition</b> de l'univers (deux à deux incompatibles, de réunion l'univers), alors
\[P(B)=P(A_1\cap B)+P(A_2\cap B)+\dots+P(A_n\cap B).\]
Cas le plus fréquent (partition \(A\), \(\overline A\)) : \(P(B)=P(A)\,P_A(B)+P(\overline A)\,P_{\overline A}(B)\).</div>
<div class="ex"><b>Exemple</b> (arbre ci-dessus). \(P(B)=0{,}3\times0{,}8+0{,}7\times0{,}1=0{,}24+0{,}07=0{,}31\).</div>
<div class="warn"><b>Piège :</b> sur le 2<sup>e</sup> niveau, on écrit \(P_A(B)\) et <b>pas</b> \(P(B)\) ni \(P(A\cap B)\). Et la somme de <b>toutes</b> les feuilles (les 4 produits) vaut 1 : c'est une bonne vérification.</div>` },
    { titre: "3. Inverser le conditionnement", html: R`
<p>L'arbre donne naturellement \(P_A(B)\). Mais on veut souvent \(P_B(A)\) : « sachant le résultat, quelle était la cause ? ».</p>
<div class="prop"><b>Méthode.</b> \[P_B(A)=\frac{P(A\cap B)}{P(B)}=\frac{P(A)\times P_A(B)}{P(B)},\] où \(P(B)\) se calcule avec la formule des probabilités totales.</div>
<div class="ex"><b>Exemple : le test de dépistage.</b> Une maladie touche 2 % de la population. Un test est positif chez 95 % des malades et chez 3 % des non-malades. On note \(M\) « être malade » et \(T\) « test positif ».`
+ arbre({ A: ['M', bar('M')], B: ['T', bar('T')], p: ['0,02', '0,98'], q: [['0,95', '0,05'], ['0,03', '0,97']] }) + R`
<ul>
<li>\(P(M\cap T)=0{,}02\times0{,}95=0{,}019\).</li>
<li>\(P(T)=0{,}019+0{,}98\times0{,}03=0{,}019+0{,}0294=0{,}0484\).</li>
<li>\(P_T(M)=\dfrac{0{,}019}{0{,}0484}\approx0{,}393\).</li>
</ul>
Surprise : avec un test positif, on n'a qu'environ <b>39 %</b> de chances d'être malade ! Les « faux positifs » parmi les très nombreux non-malades pèsent lourd.</div>
<div class="warn"><b>Piège :</b> \(P_M(T)=0{,}95\) (fiabilité du test chez les malades) n'a rien à voir avec \(P_T(M)\approx0{,}39\). Confondre les deux, c'est l'erreur du « procureur ».</div>` },
    { titre: "4. Indépendance de deux événements", html: R`
<div class="def"><b>Définition.</b> Deux événements \(A\) et \(B\) sont <b>indépendants</b> si \[P(A\cap B)=P(A)\times P(B).\]
Si \(P(A)\neq0\), cela équivaut à \(P_A(B)=P(B)\) : savoir que \(A\) est réalisé ne change pas la probabilité de \(B\).</div>
<div class="prop"><b>Propriété.</b> Si \(A\) et \(B\) sont indépendants, alors \(A\) et \(\overline B\) le sont aussi (de même que \(\overline A\) et \(B\), \(\overline A\) et \(\overline B\)).<br>
<i>Preuve :</i> \(P(A\cap\overline B)=P(A)-P(A\cap B)=P(A)-P(A)P(B)=P(A)\big(1-P(B)\big)=P(A)\,P(\overline B)\).</div>
<div class="ex"><b>Exemple.</b> On lance un dé équilibré. \(A\) : « pair » \(=\{2;4;6\}\), \(B\) : « inférieur ou égal à 2 » \(=\{1;2\}\).<br>
\(P(A\cap B)=P(\{2\})=\frac16\) et \(P(A)\times P(B)=\frac12\times\frac13=\frac16\) : <b>indépendants</b>.<br>
Avec \(C=\{1;2;3\}\) : \(P(A\cap C)=\frac16\) mais \(P(A)P(C)=\frac14\) : <b>pas indépendants</b>.</div>
<div class="warn"><b>Grand piège :</b> « indépendants » ne veut <b>pas</b> dire « incompatibles » ! Deux événements incompatibles (\(A\cap B=\varnothing\)) de probabilités non nulles ne sont <b>jamais</b> indépendants, car \(P(A\cap B)=0\neq P(A)P(B)\).</div>` },
    { titre: "5. Succession de deux épreuves indépendantes", html: R`
<p>Quand on enchaîne deux expériences qui ne s'influencent pas (lancer un dé puis une pièce, deux tirages <b>avec remise</b>…), les branches du 2<sup>e</sup> niveau sont les mêmes quel que soit le résultat du 1<sup>er</sup>.</p>
<div class="prop"><b>Propriété.</b> Pour deux épreuves indépendantes, la probabilité d'un couple de résultats \((x;y)\) est le produit \(P(x)\times P(y)\).</div>
<div class="ex"><b>Exemple.</b> Une urne contient 3 boules rouges et 2 bleues. On tire une boule, on la remet, puis on en tire une seconde.`
+ arbre({ A: ['R', 'B'], B: ['R', 'B'], p: ['3/5', '2/5'], q: [['3/5', '2/5'], ['3/5', '2/5']], fin: ['RR : 9/25', 'RB : 6/25', 'BR : 6/25', 'BB : 4/25'] }) + R`
<ul>
<li>\(P(\text{deux rouges})=\frac35\times\frac35=\frac{9}{25}\).</li>
<li>\(P(\text{une boule de chaque couleur})=\frac{6}{25}+\frac{6}{25}=\frac{12}{25}\).</li>
</ul>
On peut aussi utiliser un tableau à double entrée (1<sup>er</sup> tirage en ligne, 2<sup>e</sup> en colonne) : chaque case contient le produit des probabilités.</div>
<div class="warn"><b>Piège :</b> <b>sans remise</b>, les tirages ne sont plus indépendants : la composition de l'urne change ! Par exemple \(P(RR)=\frac35\times\frac24=\frac{3}{10}\).</div>` },
    { titre: "6. Simulation : la méthode de Monte-Carlo", html: R`
<p>Idée : on lance un très grand nombre de points <b>au hasard</b> dans le carré \([0;1]\times[0;1]\). La proportion de points qui tombent dans une zone approche l'<b>aire</b> de cette zone (car l'aire du carré vaut 1).</p>
<div class="ex"><b>Aire sous la parabole</b> \(y=x^2\) entre 0 et 1 (la valeur exacte est \(\frac13\)) :
<pre><code>from random import random

def aire_parabole(n):
    compteur = 0
    for i in range(n):
        x = random()      # nombre au hasard dans [0 ; 1[
        y = random()
        if y &lt;= x**2:     # le point est sous la courbe
            compteur = compteur + 1
    return compteur / n

print(aire_parabole(100000))   # environ 0.333</code></pre></div>
<div class="ex"><b>Estimation de \(\pi\).</b> Le quart de disque de centre \(O\) et de rayon 1 a pour aire \(\frac{\pi}{4}\). Un point \((x;y)\) y est si \(x^2+y^2\leqslant1\). Donc \(\frac{\text{compteur}}{n}\approx\frac\pi4\), et \(\pi\approx4\times\frac{\text{compteur}}{n}\).
<pre><code>from random import random

def estimation_pi(n):
    compteur = 0
    for i in range(n):
        x = random()
        y = random()
        if x**2 + y**2 &lt;= 1:
            compteur = compteur + 1
    return 4 * compteur / n</code></pre></div>
<div class="warn"><b>Attention :</b> le résultat change à chaque exécution (c'est du hasard !) et n'est qu'une <b>estimation</b>. Plus \(n\) est grand, plus l'estimation est en général précise (mais la convergence est lente).</div>` }
  ],

  quiz: [
    { q: R`\(P(A)=0{,}4\) et \(P(A\cap B)=0{,}1\). Alors \(P_A(B)=\)`, choix: [R`\(0{,}04\)`, R`\(0{,}25\)`, R`\(0{,}5\)`, R`\(4\)`], bonne: 1, explication: R`\(P_A(B)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}1}{0{,}4}=0{,}25\).` },
    { q: R`\(P(A)=0{,}5\) et \(P_A(B)=0{,}6\). Alors \(P(A\cap B)=\)`, choix: [R`\(1{,}1\)`, R`\(0{,}83\)`, R`\(0{,}3\)`, R`\(0{,}1\)`], bonne: 2, explication: R`Formule du produit : \(P(A\cap B)=P(A)\times P_A(B)=0{,}5\times0{,}6=0{,}3\).` },
    { q: R`« Parmi les fumeurs \(F\), 20 % sont malades \(M\) » se traduit par :`, choix: [R`\(P(F\cap M)=0{,}2\)`, R`\(P_M(F)=0{,}2\)`, R`\(P_F(M)=0{,}2\)`, R`\(P(M)=0{,}2\)`], bonne: 2, explication: R`« Parmi les fumeurs » : on se restreint aux fumeurs, \(F\) va en indice. C'est \(P_F(M)\).` },
    { q: R`Dans un arbre : \(P(A)=0{,}3\), \(P_A(B)=0{,}5\), \(P_{\overline A}(B)=0{,}2\). Alors \(P(B)=\)`, choix: [R`\(0{,}7\)`, R`\(0{,}29\)`, R`\(0{,}15\)`, R`\(0{,}35\)`], bonne: 1, explication: R`Probabilités totales : \(0{,}3\times0{,}5+0{,}7\times0{,}2=0{,}15+0{,}14=0{,}29\).` },
    { q: R`Si \(P_A(B)=0{,}7\), alors \(P_A(\overline B)=\)`, choix: [R`\(0{,}3\)`, R`\(0{,}7\)`, R`\(1{,}7\)`, R`On ne peut pas savoir`], bonne: 0, explication: R`Les branches issues du nœud \(A\) ont une somme égale à 1 : \(P_A(\overline B)=1-0{,}7=0{,}3\).` },
    { q: R`\(A\) et \(B\) sont indépendants, \(P(A)=0{,}5\) et \(P(B)=0{,}4\). Alors \(P(A\cap B)=\)`, choix: [R`\(0{,}9\)`, R`\(0\)`, R`\(0{,}2\)`, R`\(0{,}1\)`], bonne: 2, explication: R`Indépendance : \(P(A\cap B)=P(A)\times P(B)=0{,}2\).` },
    { q: R`Deux événements incompatibles de probabilités non nulles sont :`, choix: [R`toujours indépendants`, R`jamais indépendants`, R`parfois indépendants`, R`contraires l'un de l'autre`], bonne: 1, explication: R`\(P(A\cap B)=0\) alors que \(P(A)\times P(B)&gt;0\) : l'égalité de l'indépendance est impossible. (Logique : si \(A\) se produit, on sait que \(B\) ne se produit pas, l'information change tout !)` },
    { q: R`Dans le programme Monte-Carlo, <code>compteur</code> compte les points tels que \(x^2+y^2\leqslant1\) parmi <code>n</code> points du carré unité. Quelle valeur approche \(\pi\) ?`, choix: [R`<code>compteur / n</code>`, R`<code>4 * compteur / n</code>`, R`<code>compteur / (4 * n)</code>`, R`<code>n / compteur</code>`], bonne: 1, explication: R`La proportion de points dans le quart de disque approche son aire \(\frac\pi4\). Il faut donc multiplier par 4.` }
  ],

  exercices: [
    { niveau: 1, titre: "Traduire l'énoncé",
      enonce: R`Dans une population, on note \(F\) : « la personne fume » et \(M\) : « la personne a une maladie respiratoire ». On sait que :
<ul><li>30 % des personnes fument ;</li><li>8 % des personnes fument et ont la maladie ;</li><li>parmi les malades, 40 % fument.</li></ul>
<ol><li>Traduis chaque information par une probabilité.</li><li>Calcule la probabilité qu'une personne soit malade sachant qu'elle fume.</li><li>Calcule \(P(M)\).</li></ol>`,
      indice: R`« Parmi les malades » : \(M\) en indice. Ensuite, utilise \(P_A(B)=\frac{P(A\cap B)}{P(A)}\) dans un sens ou dans l'autre.`,
      correction: R`<ol>
<li>\(P(F)=0{,}3\) ; \(P(F\cap M)=0{,}08\) ; \(P_M(F)=0{,}4\).</li>
<li>\(P_F(M)=\dfrac{P(F\cap M)}{P(F)}=\dfrac{0{,}08}{0{,}3}=\dfrac{8}{30}=\dfrac{4}{15}\approx0{,}267\). Environ 26,7 % des fumeurs sont malades.</li>
<li>\(P_M(F)=\dfrac{P(F\cap M)}{P(M)}\) donc \(P(M)=\dfrac{P(F\cap M)}{P_M(F)}=\dfrac{0{,}08}{0{,}4}=0{,}2\). 20 % de la population est malade.</li>
</ol>`},
    { niveau: 1, titre: "Lire un tableau croisé",
      enonce: R`Un club de sport compte 250 adhérents, répartis ainsi :
<table class="tv"><tr><td></td><td>Natation \(N\)</td><td>Tennis \(T\)</td><td>Total</td></tr>
<tr><td>Mineurs \(J\)</td><td>45</td><td>…</td><td>100</td></tr>
<tr><td>Majeurs</td><td>…</td><td>60</td><td>…</td></tr>
<tr><td>Total</td><td>135</td><td>…</td><td>250</td></tr></table>
Chaque adhérent pratique un seul sport. On choisit un adhérent au hasard.
<ol><li>Complète le tableau.</li><li>Calcule \(P(N)\), \(P(J\cap N)\), \(P_J(N)\) et \(P_N(J)\). Traduis les deux dernières par une phrase.</li></ol>`,
      indice: R`Pour \(P_J(N)\), on ne regarde que la ligne des mineurs ; pour \(P_N(J)\), que la colonne natation.`,
      correction: R`<ol>
<li>Mineurs au tennis : \(100-45=55\). Majeurs : \(250-100=150\), dont \(150-60=90\) en natation. Total tennis : \(55+60=115\) (et \(135+115=250\) ✓).
<table class="tv"><tr><td></td><td>\(N\)</td><td>\(T\)</td><td>Total</td></tr><tr><td>\(J\)</td><td>45</td><td>55</td><td>100</td></tr><tr><td>Majeurs</td><td>90</td><td>60</td><td>150</td></tr><tr><td>Total</td><td>135</td><td>115</td><td>250</td></tr></table></li>
<li>\(P(N)=\frac{135}{250}=0{,}54\) ; \(P(J\cap N)=\frac{45}{250}=0{,}18\).<br>
\(P_J(N)=\frac{45}{100}=0{,}45\) : 45 % des mineurs font de la natation.<br>
\(P_N(J)=\frac{45}{135}=\frac13\approx0{,}333\) : un tiers des nageurs sont mineurs.</li>
</ol>`},
    { niveau: 1, titre: "Compléter et exploiter un arbre",
      enonce: R`On donne \(P(A)=0{,}6\), \(P_A(B)=0{,}3\) et \(P_{\overline A}(B)=0{,}8\).
<ol><li>Construis l'arbre pondéré complet.</li><li>Calcule \(P(A\cap B)\) et \(P(\overline A\cap B)\).</li><li>Déduis-en \(P(B)\).</li><li>Calcule \(P_B(A)\).</li></ol>`,
      indice: R`Sur chaque nœud, la somme des branches vaut 1. Puis : produit le long d'un chemin, somme des chemins.`,
      correction: R`<ol>
<li>\(P(\overline A)=0{,}4\), \(P_A(\overline B)=0{,}7\), \(P_{\overline A}(\overline B)=0{,}2\).`
+ arbre({ A: ['A', bar('A')], B: ['B', bar('B')], p: ['0,6', '0,4'], q: [['0,3', '0,7'], ['0,8', '0,2']] }) + R`</li>
<li>\(P(A\cap B)=0{,}6\times0{,}3=0{,}18\) et \(P(\overline A\cap B)=0{,}4\times0{,}8=0{,}32\).</li>
<li>Probabilités totales : \(P(B)=0{,}18+0{,}32=0{,}5\).</li>
<li>\(P_B(A)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{0{,}18}{0{,}5}=0{,}36\).</li>
</ol>`},
    { niveau: 1, titre: "Indépendants ou pas ?",
      enonce: R`<ol><li>On lance un dé équilibré à 6 faces. \(A\) : « le résultat est pair », \(B\) : « le résultat est un multiple de 3 », \(C\) : « le résultat est supérieur ou égal à 4 ».<br>a) \(A\) et \(B\) sont-ils indépendants ? b) \(A\) et \(C\) ?</li>
<li>\(E\) et \(F\) vérifient \(P(E)=0{,}3\), \(P(F)=0{,}5\) et \(P(E\cap F)=0{,}15\). Sont-ils indépendants ? Calcule \(P_E(F)\).</li></ol>`,
      indice: R`Compare \(P(A\cap B)\) et \(P(A)\times P(B)\). Écris les événements comme des ensembles de faces.`,
      correction: R`<ol>
<li>\(A=\{2;4;6\}\), \(B=\{3;6\}\), \(C=\{4;5;6\}\).<br>
a) \(A\cap B=\{6\}\) : \(P(A\cap B)=\frac16\) ; \(P(A)\times P(B)=\frac12\times\frac13=\frac16\). Égalité : <b>\(A\) et \(B\) sont indépendants</b>.<br>
b) \(A\cap C=\{4;6\}\) : \(P(A\cap C)=\frac26=\frac13\) ; \(P(A)\times P(C)=\frac12\times\frac12=\frac14\neq\frac13\). <b>\(A\) et \(C\) ne sont pas indépendants</b>.</li>
<li>\(P(E)\times P(F)=0{,}3\times0{,}5=0{,}15=P(E\cap F)\) : <b>indépendants</b>. Et \(P_E(F)=\frac{0{,}15}{0{,}3}=0{,}5=P(F)\) : savoir que \(E\) est réalisé ne change rien, c'est cohérent.</li>
</ol>`},
    { niveau: 2, titre: "Trois machines",
      enonce: R`Une usine fabrique des pièces sur trois machines : \(M_1\) produit 50 % des pièces, \(M_2\) 30 % et \(M_3\) le reste. Le pourcentage de pièces défectueuses est de 2 % pour \(M_1\), 3 % pour \(M_2\) et 5 % pour \(M_3\). On prend une pièce au hasard ; \(D\) : « la pièce est défectueuse ».
<ol><li>Représente la situation par un arbre pondéré.</li><li>Calcule \(P(D)\).</li><li>La pièce est défectueuse. Quelle est la probabilité qu'elle vienne de \(M_3\) ?</li></ol>`,
      indice: R`L'arbre a 3 branches au premier niveau. \(M_1\), \(M_2\), \(M_3\) forment une partition : utilise la formule des probabilités totales.`,
      correction: R`<ol>
<li>Arbre :
<ul><li>\(M_1\) (0,5) → \(D\) (0,02) ; \(\overline D\) (0,98)</li><li>\(M_2\) (0,3) → \(D\) (0,03) ; \(\overline D\) (0,97)</li><li>\(M_3\) (0,2) → \(D\) (0,05) ; \(\overline D\) (0,95)</li></ul></li>
<li>\(M_1\), \(M_2\), \(M_3\) forment une partition. \(P(D)=0{,}5\times0{,}02+0{,}3\times0{,}03+0{,}2\times0{,}05=0{,}01+0{,}009+0{,}01=0{,}029\).</li>
<li>\(P_D(M_3)=\dfrac{P(M_3\cap D)}{P(D)}=\dfrac{0{,}01}{0{,}029}=\dfrac{10}{29}\approx0{,}345\). Alors que \(M_3\) ne fait que 20 % des pièces, elle est responsable d'environ 34,5 % des défauts.</li>
</ol>`},
    { niveau: 2, titre: "La branche manquante",
      enonce: R`On sait que \(P(A)=0{,}4\), \(P_A(B)=0{,}7\) et \(P(B)=0{,}52\).
<ol><li>Calcule \(P(A\cap B)\).</li><li>Déduis-en \(P(\overline A\cap B)\), puis \(P_{\overline A}(B)\).</li><li>\(A\) et \(B\) sont-ils indépendants ?</li></ol>`,
      indice: R`\(P(B)=P(A\cap B)+P(\overline A\cap B)\) : une seule inconnue !`,
      correction: R`<ol>
<li>\(P(A\cap B)=P(A)\times P_A(B)=0{,}4\times0{,}7=0{,}28\).</li>
<li>Probabilités totales : \(P(\overline A\cap B)=P(B)-P(A\cap B)=0{,}52-0{,}28=0{,}24\). Puis \(P_{\overline A}(B)=\dfrac{0{,}24}{P(\overline A)}=\dfrac{0{,}24}{0{,}6}=0{,}4\).</li>
<li>\(P(A)\times P(B)=0{,}4\times0{,}52=0{,}208\neq0{,}28\) : <b>non</b>. (On le voit aussi car \(P_A(B)=0{,}7\neq P(B)=0{,}52\).)</li>
</ol>`},
    { niveau: 2, titre: "Deux tirages avec remise",
      enonce: R`Une urne contient 2 boules rouges et 3 boules vertes. On tire une boule, on note sa couleur, on la <b>remet</b>, puis on tire une seconde boule.
<ol><li>Pourquoi les deux tirages sont-ils indépendants ? Représente l'expérience par un arbre.</li><li>Calcule la probabilité d'obtenir deux boules rouges, puis deux boules de la même couleur.</li><li>Calcule la probabilité d'obtenir au moins une boule rouge.</li></ol>`,
      indice: R`« Au moins une » : pense à l'événement contraire « aucune ».`,
      correction: R`<ol>
<li>Comme on remet la boule, l'urne est identique pour le 2<sup>e</sup> tirage : le résultat du 1<sup>er</sup> n'influence pas le 2<sup>e</sup>.`
+ arbre({ A: ['R', 'V'], B: ['R', 'V'], p: ['2/5', '3/5'], q: [['2/5', '3/5'], ['2/5', '3/5']], fin: ['RR : 4/25', 'RV : 6/25', 'VR : 6/25', 'VV : 9/25'] }) + R`</li>
<li>\(P(RR)=\frac25\times\frac25=\frac{4}{25}\). \(P(\text{même couleur})=P(RR)+P(VV)=\frac{4}{25}+\frac{9}{25}=\frac{13}{25}=0{,}52\).</li>
<li>Le contraire de « au moins une rouge » est « deux vertes » : \(P=1-\frac{9}{25}=\frac{16}{25}=0{,}64\).</li>
</ol>`},
    { niveau: 2, titre: "Indépendance et contraires",
      enonce: R`\(A\) et \(B\) sont deux événements indépendants avec \(P(A)=0{,}4\) et \(P(B)=0{,}7\).
<ol><li>Calcule \(P(A\cap B)\) et \(P(A\cup B)\).</li><li>Calcule \(P(\overline A\cap\overline B)\) de deux façons.</li><li>Calcule \(P(A\cap\overline B)\) et \(P_{\overline B}(A)\).</li></ol>`,
      indice: R`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\). Si \(A\) et \(B\) sont indépendants, \(\overline A\) et \(\overline B\) aussi.`,
      correction: R`<ol>
<li>\(P(A\cap B)=0{,}4\times0{,}7=0{,}28\) ; \(P(A\cup B)=0{,}4+0{,}7-0{,}28=0{,}82\).</li>
<li><b>Façon 1 :</b> \(\overline A\cap\overline B\) est le contraire de \(A\cup B\) : \(P=1-0{,}82=0{,}18\).<br><b>Façon 2 :</b> \(\overline A\) et \(\overline B\) sont indépendants : \(P=0{,}6\times0{,}3=0{,}18\) ✓.</li>
<li>\(A\) et \(\overline B\) sont indépendants : \(P(A\cap\overline B)=0{,}4\times0{,}3=0{,}12\) et \(P_{\overline B}(A)=\frac{0{,}12}{0{,}3}=0{,}4=P(A)\).</li>
</ol>`},
    { niveau: 3, titre: "Fiabilité d'un test de dépistage",
      enonce: R`Une maladie rare touche 1 % de la population. Un test de dépistage a les caractéristiques suivantes :
<ul><li>si la personne est malade, le test est positif dans 99 % des cas (sensibilité) ;</li><li>si la personne n'est pas malade, le test est négatif dans 98 % des cas (spécificité).</li></ul>
On note \(M\) : « malade » et \(T\) : « test positif ».
<ol><li>Construis l'arbre pondéré.</li><li>Calcule \(P(T)\).</li><li>Le test d'une personne est positif. Quelle est la probabilité qu'elle soit malade ? Commente.</li><li>Calcule \(P_{\overline T}(\overline M)\) à \(10^{-4}\) près. Commente.</li><li>On note \(p\) la proportion de malades dans une autre population (mêmes caractéristiques du test). Montre que \(P_T(M)\geqslant0{,}5\iff p\geqslant\frac{2}{101}\).</li></ol>`,
      indice: R`Attention : « négatif dans 98 % des cas » chez les non-malades donne \(P_{\overline M}(\overline T)=0{,}98\), donc \(P_{\overline M}(T)=0{,}02\). Pour la dernière question, exprime \(P(M\cap T)\) et \(P(T)\) en fonction de \(p\).`,
      correction: R`<ol>
<li>\(P(M)=0{,}01\), \(P_M(T)=0{,}99\), \(P_{\overline M}(\overline T)=0{,}98\) donc \(P_{\overline M}(T)=0{,}02\).`
+ arbre({ A: ['M', bar('M')], B: ['T', bar('T')], p: ['0,01', '0,99'], q: [['0,99', '0,01'], ['0,02', '0,98']] }) + R`</li>
<li>\(P(T)=0{,}01\times0{,}99+0{,}99\times0{,}02=0{,}0099+0{,}0198=0{,}0297\).</li>
<li>\(P_T(M)=\dfrac{0{,}0099}{0{,}0297}=\dfrac13\approx0{,}333\). Seulement <b>une chance sur trois</b> d'être malade malgré un test positif ! Les non-malades étant 99 fois plus nombreux, leurs 2 % de faux positifs représentent deux fois plus de personnes que les vrais malades positifs. D'où l'intérêt de refaire un test pour confirmer.</li>
<li>\(P(\overline M\cap\overline T)=0{,}99\times0{,}98=0{,}9702\) et \(P(\overline T)=1-0{,}0297=0{,}9703\). \(P_{\overline T}(\overline M)=\dfrac{0{,}9702}{0{,}9703}\approx0{,}9999\). Un test négatif est donc très rassurant.</li>
<li>\(P(M\cap T)=0{,}99p\) et \(P(T)=0{,}99p+0{,}02(1-p)=0{,}97p+0{,}02\). Comme \(P(T)&gt;0\) :
\[P_T(M)\geqslant0{,}5\iff0{,}99p\geqslant0{,}5(0{,}97p+0{,}02)\iff0{,}99p\geqslant0{,}485p+0{,}01\iff0{,}505p\geqslant0{,}01\iff p\geqslant\frac{0{,}01}{0{,}505}=\frac{2}{101}.\]
Il faut donc qu'environ 2 % (\(\frac{2}{101}\approx0{,}0198\)) de la population soit malade pour qu'un test positif signifie « plus probablement malade que non ».</li>
</ol>`},
    { niveau: 3, titre: "Pluie, bus et retard",
      enonce: R`Chaque matin, Léa va au lycée en bus ou à vélo.
<ul><li>Un matin donné, il pleut avec probabilité \(0{,}3\) (événement \(P\)).</li><li>S'il pleut, elle prend le bus (\(B\)) avec probabilité \(0{,}8\) ; s'il ne pleut pas, avec probabilité \(0{,}4\). Quand elle ne prend pas le bus, elle prend son vélo (\(V\)).</li><li>En bus, elle est en retard (\(R\)) avec probabilité \(0{,}1\) ; à vélo, avec probabilité \(0{,}05\), quel que soit le temps.</li></ul>
<ol><li>Représente la situation par un arbre à trois niveaux.</li><li>Calcule la probabilité qu'il pleuve, que Léa prenne le bus et soit en retard.</li><li>Calcule \(P(B)\), puis \(P(R)\).</li><li>Léa est en retard. Quelle est la probabilité qu'il ait plu ?</li><li>Les événements \(P\) et \(R\) sont-ils indépendants ?</li></ol>`,
      indice: R`Il y a 4 chemins qui mènent à \(R\). Pour la question 4, additionne les chemins qui contiennent à la fois \(P\) et \(R\).`,
      correction: R`<ol>
<li>Arbre (probabilités entre parenthèses) :
<ul>
<li>\(P\) (0,3)
<ul><li>\(B\) (0,8) → \(R\) (0,1) ; \(\overline R\) (0,9)</li><li>\(V\) (0,2) → \(R\) (0,05) ; \(\overline R\) (0,95)</li></ul></li>
<li>\(\overline P\) (0,7)
<ul><li>\(B\) (0,4) → \(R\) (0,1) ; \(\overline R\) (0,9)</li><li>\(V\) (0,6) → \(R\) (0,05) ; \(\overline R\) (0,95)</li></ul></li>
</ul></li>
<li>\(P(P\cap B\cap R)=0{,}3\times0{,}8\times0{,}1=0{,}024\).</li>
<li>\(P(B)=0{,}3\times0{,}8+0{,}7\times0{,}4=0{,}24+0{,}28=0{,}52\).<br>
\(P(R)=\underbrace{0{,}024}_{P,B}+\underbrace{0{,}3\times0{,}2\times0{,}05}_{=0{,}003}+\underbrace{0{,}7\times0{,}4\times0{,}1}_{=0{,}028}+\underbrace{0{,}7\times0{,}6\times0{,}05}_{=0{,}021}=0{,}076\).</li>
<li>\(P(P\cap R)=0{,}024+0{,}003=0{,}027\), donc \(P_R(P)=\dfrac{0{,}027}{0{,}076}=\dfrac{27}{76}\approx0{,}355\).</li>
<li>\(P(P)\times P(R)=0{,}3\times0{,}076=0{,}0228\neq0{,}027\) : <b>non</b>, la pluie rend le retard plus probable (elle pousse à prendre le bus, plus souvent en retard).</li>
</ol>`},
    { niveau: 3, titre: "Monte-Carlo : à toi de coder",
      enonce: R`On veut estimer \(\pi\) par la méthode de Monte-Carlo. On considère le carré \([0;1]\times[0;1]\) et le quart de disque \(\mathcal D\) de centre \(O\) et de rayon 1.
<ol><li>Quelle est l'aire de \(\mathcal D\) ? À quelle condition sur \(x\) et \(y\) le point \((x;y)\) du carré est-il dans \(\mathcal D\) ?</li><li>Complète la fonction suivante pour qu'elle renvoie une estimation de \(\pi\) à partir de <code>n</code> points :
<pre><code>from random import random

def estim_pi(n):
    c = 0
    for i in range(n):
        x = random()
        y = random()
        if ........ :
            c = c + 1
    return ........</code></pre></li>
<li>On modifie la fonction pour estimer l'aire sous la courbe \(y=x^2\) entre 0 et 1. Que faut-il changer ? Quelle valeur doit-on approcher (indication : l'aire sous la courbe de \(x\mapsto x^2\) sur \([0;1]\) vaut \(\frac13\)) ?</li><li>Un appel <code>estim_pi(1000)</code> a renvoyé <code>3.172</code>. Combien de points étaient dans \(\mathcal D\) ?</li></ol>`,
      indice: R`La proportion de points dans \(\mathcal D\) approche \(\frac{\text{aire de }\mathcal D}{\text{aire du carré}}\).`,
      correction: R`<ol>
<li>Aire de \(\mathcal D\) : un quart du disque de rayon 1, soit \(\frac{\pi\times1^2}{4}=\frac\pi4\). Le point est dans \(\mathcal D\) si sa distance à \(O\) est au plus 1 : \(\sqrt{x^2+y^2}\leqslant1\iff x^2+y^2\leqslant1\).</li>
<li>
<pre><code>from random import random

def estim_pi(n):
    c = 0
    for i in range(n):
        x = random()
        y = random()
        if x**2 + y**2 &lt;= 1:
            c = c + 1
    return 4 * c / n</code></pre>
Explication : \(\frac{c}{n}\approx\frac{\pi/4}{1}\), donc \(\pi\approx\frac{4c}{n}\).</li>
<li>On remplace la condition par <code>y &lt;= x**2</code> et on renvoie <code>c / n</code> (sans le 4). On doit approcher \(\frac13\approx0{,}333\).</li>
<li>\(\frac{4c}{1000}=3{,}172\) donc \(c=\frac{3{,}172\times1000}{4}=793\) points.</li>
</ol>`},
    { niveau: 3, titre: "Marche aléatoire",
      enonce: R`Un pion part de la position 0 sur une droite graduée. À chaque étape, il avance de \(+1\) avec probabilité \(\frac12\) ou recule de \(1\) avec probabilité \(\frac12\), les étapes étant indépendantes.
<ol><li>Donne les positions possibles après 2 étapes et leurs probabilités.</li><li>Combien y a-t-il de chemins possibles en 4 étapes ? Quelle est leur probabilité chacun ? Calcule la probabilité que le pion soit revenu en 0 après 4 étapes, puis qu'il soit en position 2.</li><li>Sachant que le premier pas est \(+1\), quelle est la probabilité d'être en position 2 après 4 étapes ? L'événement « premier pas \(+1\) » est-il indépendant de « position 2 après 4 étapes » ?</li><li>Écris une fonction Python <code>marche(n)</code> qui simule \(n\) étapes et renvoie la position finale, puis une fonction qui estime la probabilité de revenir en 0 après 4 étapes sur <code>N</code> simulations.</li></ol>`,
      indice: R`Un chemin de 4 pas est une suite de 4 signes \(+\) ou \(-\). Pour finir en 0, il faut autant de \(+\) que de \(-\).`,
      correction: R`<ol>
<li>Chemins : \(++\) (position 2), \(+-\) et \(-+\) (position 0), \(--\) (position \(-2\)), chacun de probabilité \(\frac14\). Donc \(P(2)=\frac14\), \(P(0)=\frac12\), \(P(-2)=\frac14\).</li>
<li>\(2^4=16\) chemins, chacun de probabilité \(\left(\frac12\right)^4=\frac{1}{16}\) (épreuves indépendantes).<br>
Revenir en 0 : 2 « + » et 2 « − ». Les chemins sont \(++--\), \(+-+-\), \(+--+\), \(-++-\), \(-+-+\), \(--++\) : 6 chemins, donc \(P=\frac{6}{16}=\frac38=0{,}375\).<br>
Position 2 : 3 « + » et 1 « − » ; le « − » peut être à 4 places : \(P=\frac{4}{16}=\frac14\).</li>
<li>Après un premier \(+1\), il faut gagner encore \(+1\) en 3 pas, soit 2 « + » et 1 « − » : 3 chemins (\(++-\), \(+-+\), \(-++\)) sur 8. \(P_{\text{1er pas }+}(\text{position }2)=\frac38\).<br>
Comme \(\frac38\neq\frac14\), les deux événements <b>ne sont pas indépendants</b> (logique : bien commencer aide à finir haut).</li>
<li>
<pre><code>from random import random

def marche(n):
    position = 0
    for i in range(n):
        if random() &lt; 0.5:
            position = position + 1
        else:
            position = position - 1
    return position

def frequence_retour(N):
    compteur = 0
    for k in range(N):
        if marche(4) == 0:
            compteur = compteur + 1
    return compteur / N</code></pre>
<code>frequence_retour(100000)</code> renvoie une valeur proche de \(0{,}375\).</li>
</ol>`}
  ],

  ds: [
    { titre: "DS n°1 — Tableaux, arbres, indépendance", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Tableau croisé", points: 4,
          enonce: R`Un lycée de 400 élèves recense qui mange à la cantine (\(C\)) :
<table class="tv"><tr><td></td><td>Cantine \(C\)</td><td>Pas cantine</td><td>Total</td></tr>
<tr><td>Seconde \(S\)</td><td>120</td><td>30</td><td>150</td></tr>
<tr><td>Première</td><td>90</td><td>40</td><td>130</td></tr>
<tr><td>Terminale \(T\)</td><td>70</td><td>50</td><td>120</td></tr>
<tr><td>Total</td><td>280</td><td>120</td><td>400</td></tr></table>
On choisit un élève au hasard. Calcule :
<ol><li>\(P(C)\) et \(P(S\cap C)\) ;</li><li>la probabilité qu'un élève de Terminale mange à la cantine ;</li><li>la probabilité qu'un élève qui mange à la cantine soit en Terminale ;</li><li>Les événements \(S\) et \(C\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(C)=\frac{280}{400}=0{,}7\) ; \(P(S\cap C)=\frac{120}{400}=0{,}3\).</li>
<li>(1 pt) \(P_T(C)=\frac{70}{120}=\frac{7}{12}\approx0{,}583\).</li>
<li>(1 pt) \(P_C(T)=\frac{70}{280}=0{,}25\).</li>
<li>(1 pt) \(P(S)=\frac{150}{400}=0{,}375\) et \(P(S)\times P(C)=0{,}375\times0{,}7=0{,}2625\neq0{,}3\). Non indépendants.</li>
</ol>`},
        { titre: "Exercice 2 — Arbre pondéré", points: 6,
          enonce: R`Dans un magasin, 70 % des clients paient par carte (\(C\)), les autres en espèces. Parmi ceux qui paient par carte, 40 % dépensent plus de 50 € (\(G\)) ; parmi ceux qui paient en espèces, 10 % dépensent plus de 50 €.
<ol><li>Construis l'arbre pondéré.</li><li>Calcule \(P(C\cap\overline G)\).</li><li>Montre que \(P(G)=0{,}31\).</li><li>Un client a dépensé plus de 50 €. Quelle est la probabilité qu'il ait payé par carte ? (arrondir à \(10^{-3}\))</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt)`
+ arbre({ A: ['C', bar('C')], B: ['G', bar('G')], p: ['0,7', '0,3'], q: [['0,4', '0,6'], ['0,1', '0,9']] }) + R`</li>
<li>(1 pt) \(P(C\cap\overline G)=0{,}7\times0{,}6=0{,}42\).</li>
<li>(2 pts) Probabilités totales : \(P(G)=0{,}7\times0{,}4+0{,}3\times0{,}1=0{,}28+0{,}03=0{,}31\).</li>
<li>(1,5 pt) \(P_G(C)=\frac{0{,}28}{0{,}31}=\frac{28}{31}\approx0{,}903\).</li>
</ol>`},
        { titre: "Exercice 3 — Indépendance", points: 5,
          enonce: R`On donne \(P(A)=0{,}6\), \(P(B)=0{,}5\) et \(P(A\cup B)=0{,}8\).
<ol><li>Calcule \(P(A\cap B)\).</li><li>Montre que \(A\) et \(B\) sont indépendants.</li><li>Calcule \(P(\overline A\cap\overline B)\) et \(P_A(B)\).</li><li>\(A\) et \(B\) sont-ils incompatibles ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(A\cap B)=P(A)+P(B)-P(A\cup B)=0{,}6+0{,}5-0{,}8=0{,}3\).</li>
<li>(1 pt) \(P(A)\times P(B)=0{,}3=P(A\cap B)\) : indépendants.</li>
<li>(1,5 pt) \(\overline A\) et \(\overline B\) sont indépendants : \(P(\overline A\cap\overline B)=0{,}4\times0{,}5=0{,}2\) (ou \(1-0{,}8\)). \(P_A(B)=\frac{0{,}3}{0{,}6}=0{,}5\).</li>
<li>(1 pt) Non, car \(P(A\cap B)=0{,}3\neq0\).</li>
</ol>`},
        { titre: "Exercice 4 — Lancers francs", points: 5,
          enonce: R`Une basketteuse réussit chaque lancer franc avec probabilité \(0{,}8\), indépendamment des autres. Elle tire deux lancers francs.
<ol><li>Représente la situation par un arbre.</li><li>Calcule la probabilité qu'elle réussisse les deux, puis exactement un seul.</li><li>Calcule la probabilité qu'elle en réussisse au moins un.</li><li>Que renvoie (environ) <code>serie(100000)</code> ?
<pre><code>from random import random

def serie(N):
    c = 0
    for k in range(N):
        tir1 = random() &lt; 0.8
        tir2 = random() &lt; 0.8
        if tir1 and tir2:
            c = c + 1
    return c / N</code></pre></li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(S\) : réussi, \(E\) : échoué.`
+ arbre({ A: ['S', 'E'], B: ['S', 'E'], p: ['0,8', '0,2'], q: [['0,8', '0,2'], ['0,8', '0,2']] }) + R`</li>
<li>(2 pts) \(P(SS)=0{,}8^2=0{,}64\). Exactement un : \(P(SE)+P(ES)=0{,}8\times0{,}2+0{,}2\times0{,}8=0{,}32\).</li>
<li>(1 pt) Contraire de « aucun » : \(1-0{,}2^2=1-0{,}04=0{,}96\).</li>
<li>(1 pt) La fonction simule \(N\) séries de deux lancers et renvoie la fréquence des doubles réussites : environ \(0{,}64\).</li>
</ol>`}
      ]},
    { titre: "DS n°2 — Dépistage et simulation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Test de dépistage", points: 7,
          enonce: R`5 % d'une population est porteuse d'un virus (\(M\)). Un test est positif (\(T\)) chez 90 % des porteurs et chez 8 % des non-porteurs.
<ol><li>Construis l'arbre pondéré.</li><li>Calcule \(P(M\cap T)\) puis \(P(T)\).</li><li>Calcule la probabilité qu'une personne testée positive soit porteuse (arrondir à \(10^{-3}\)). Commente.</li><li>Calcule la probabilité qu'une personne testée négative ne soit pas porteuse (arrondir à \(10^{-4}\)).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt)`
+ arbre({ A: ['M', bar('M')], B: ['T', bar('T')], p: ['0,05', '0,95'], q: [['0,9', '0,1'], ['0,08', '0,92']] }) + R`</li>
<li>(2 pts) \(P(M\cap T)=0{,}05\times0{,}9=0{,}045\). \(P(T)=0{,}045+0{,}95\times0{,}08=0{,}045+0{,}076=0{,}121\).</li>
<li>(2 pts) \(P_T(M)=\frac{0{,}045}{0{,}121}=\frac{45}{121}\approx0{,}372\). Moins de 4 chances sur 10 : un test positif doit être confirmé (beaucoup de faux positifs).</li>
<li>(1,5 pt) \(P(\overline M\cap\overline T)=0{,}95\times0{,}92=0{,}874\) ; \(P(\overline T)=1-0{,}121=0{,}879\). \(P_{\overline T}(\overline M)=\frac{0{,}874}{0{,}879}\approx0{,}9943\).</li>
</ol>`},
        { titre: "Exercice 2 — Retrouver une branche", points: 5,
          enonce: R`On sait que \(P(A)=0{,}3\), \(P_A(B)=0{,}8\) et \(P(B)=0{,}44\).
<ol><li>Calcule \(P(A\cap B)\) et \(P(\overline A\cap B)\).</li><li>Calcule \(P_{\overline A}(B)\) (valeur exacte).</li><li>Calcule \(P_B(A)\) (valeur exacte).</li><li>\(A\) et \(B\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(A\cap B)=0{,}3\times0{,}8=0{,}24\) ; \(P(\overline A\cap B)=0{,}44-0{,}24=0{,}2\).</li>
<li>(1,5 pt) \(P_{\overline A}(B)=\frac{0{,}2}{0{,}7}=\frac27\).</li>
<li>(1 pt) \(P_B(A)=\frac{0{,}24}{0{,}44}=\frac{6}{11}\).</li>
<li>(1 pt) \(P_A(B)=0{,}8\neq P(B)=0{,}44\) : non indépendants.</li>
</ol>`},
        { titre: "Exercice 3 — Monte-Carlo", points: 4,
          enonce: R`<pre><code>from random import random

def mystere(n):
    c = 0
    for i in range(n):
        x = random()
        y = random()
        if y &lt;= x**2:
            c = c + 1
    return c / n</code></pre>
<ol><li>Que représente <code>c</code> à la fin de la boucle ?</li><li>Vers quelle valeur <code>mystere(n)</code> se rapproche-t-elle quand \(n\) est grand ? (on admet que l'aire sous la parabole \(y=x^2\) sur \([0;1]\) vaut \(\frac13\))</li><li>Modifie deux lignes pour obtenir une estimation de \(\pi\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <code>c</code> est le nombre de points tirés au hasard dans le carré unité qui sont <b>sous</b> la parabole \(y=x^2\).</li>
<li>(1,5 pt) La proportion \(\frac cn\) approche l'aire sous la parabole divisée par l'aire du carré (1), soit \(\frac13\approx0{,}333\).</li>
<li>(1,5 pt) Condition <code>if x**2 + y**2 &lt;= 1:</code> (point dans le quart de disque, d'aire \(\frac\pi4\)) et <code>return 4 * c / n</code>.</li>
</ol>`},
        { titre: "Exercice 4 — Avec ou sans remise", points: 4,
          enonce: R`Une urne contient 3 boules rouges et 2 boules blanches. On tire deux boules successivement.
<ol><li><b>Avec remise</b> : calcule la probabilité d'obtenir deux boules de même couleur.</li><li><b>Avec remise</b> : calcule la probabilité d'obtenir au moins une boule rouge.</li><li><b>Sans remise</b> : calcule la probabilité d'obtenir deux boules rouges. Pourquoi le résultat diffère-t-il ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Tirages indépendants : \(P(RR)+P(BB)=\left(\frac35\right)^2+\left(\frac25\right)^2=\frac{9}{25}+\frac{4}{25}=\frac{13}{25}=0{,}52\).</li>
<li>(1 pt) Contraire de « deux blanches » : \(1-\frac{4}{25}=\frac{21}{25}=0{,}84\).</li>
<li>(1,5 pt) \(P(RR)=\frac35\times\frac24=\frac{6}{20}=\frac{3}{10}\). Sans remise, la composition de l'urne change après le 1<sup>er</sup> tirage : les tirages ne sont plus indépendants (2<sup>e</sup> niveau de l'arbre conditionné par le 1<sup>er</sup>).</li>
</ol>`}
      ]},
    { titre: "DS n°3 — Sondage, QCM et loterie", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Aller au travail", points: 5,
          enonce: R`On a interrogé 500 actifs sur leur mode de transport principal pour aller au travail. On note \(U\) : « la personne habite en zone urbaine », \(A\) : « elle utilise une automobile », \(T\) : « elle utilise les transports en commun » et \(V\) : « elle utilise un vélo ». Chaque personne a un seul mode de transport principal.
<table class="tv"><tr><td></td><td>Automobile \(A\)</td><td>Transports \(T\)</td><td>Vélo \(V\)</td><td>Total</td></tr>
<tr><td>Zone urbaine \(U\)</td><td>90</td><td>…</td><td>54</td><td>300</td></tr>
<tr><td>Zone rurale \(\overline U\)</td><td>…</td><td>24</td><td>…</td><td>…</td></tr>
<tr><td>Total</td><td>230</td><td>…</td><td>90</td><td>500</td></tr></table>
On choisit une personne au hasard parmi les 500.
<ol><li>Complète le tableau.</li><li>Calcule \(P(U)\) et \(P(U\cap A)\).</li><li>Calcule \(P_U(A)\) et \(P_A(U)\) (arrondir à \(10^{-3}\)) et traduis chacune par une phrase.</li><li>Les événements \(U\) et \(V\) sont-ils indépendants ? Et les événements \(U\) et \(A\) ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Urbains en transports : \(300-90-54=156\). Ruraux : \(500-300=200\). Ruraux en automobile : \(230-90=140\) ; ruraux à vélo : \(90-54=36\). Total transports : \(156+24=180\). Vérification : \(140+24+36=200\) ✓ et \(230+180+90=500\) ✓.
<table class="tv"><tr><td></td><td>\(A\)</td><td>\(T\)</td><td>\(V\)</td><td>Total</td></tr>
<tr><td>\(U\)</td><td>90</td><td>156</td><td>54</td><td>300</td></tr>
<tr><td>\(\overline U\)</td><td>140</td><td>24</td><td>36</td><td>200</td></tr>
<tr><td>Total</td><td>230</td><td>180</td><td>90</td><td>500</td></tr></table></li>
<li>(1 pt) \(P(U)=\frac{300}{500}=0{,}6\) et \(P(U\cap A)=\frac{90}{500}=0{,}18\).</li>
<li>(1,5 pt) \(P_U(A)=\frac{90}{300}=0{,}3\) : 30 % des urbains vont travailler en automobile.<br>
\(P_A(U)=\frac{90}{230}=\frac{9}{23}\approx0{,}391\) : environ 39,1 % des automobilistes habitent en zone urbaine.</li>
<li>(1,5 pt) \(P(V)=\frac{90}{500}=0{,}18\), donc \(P(U)\times P(V)=0{,}6\times0{,}18=0{,}108\) et \(P(U\cap V)=\frac{54}{500}=0{,}108\). Égalité : <b>\(U\) et \(V\) sont indépendants</b> (la proportion de cyclistes est la même en ville et à la campagne : 18 %).<br>
\(P(A)=\frac{230}{500}=0{,}46\) et \(P(U)\times P(A)=0{,}6\times0{,}46=0{,}276\neq0{,}18=P(U\cap A)\) : <b>\(U\) et \(A\) ne sont pas indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 2 — Répondre au hasard", points: 6,
          enonce: R`Un élève répond à une question d'un QCM qui propose 4 réponses dont une seule est juste. Il connaît la bonne réponse avec une probabilité \(0{,}6\). S'il la connaît, il répond juste ; sinon, il choisit une réponse au hasard parmi les 4.<br>
On note \(S\) : « l'élève connaît la réponse » et \(J\) : « l'élève répond juste ».
<ol><li>Construis l'arbre pondéré de la situation.</li><li>Calcule \(P(J)\).</li><li>L'élève a répondu juste. Quelle est la probabilité qu'il connaissait la réponse ? (valeur exacte puis arrondi à \(10^{-3}\))</li><li>On note maintenant \(p\) (avec \(0&lt;p\leqslant1\)) la probabilité que l'élève connaisse la réponse.<br>a) Montre que \(P_J(S)=\dfrac{4p}{3p+1}\).<br>b) Pour quelles valeurs de \(p\) a-t-on \(P_J(S)\geqslant0{,}9\) ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(S)=0{,}6\), \(P_S(J)=1\) ; \(P(\overline S)=0{,}4\) et, au hasard parmi 4 réponses, \(P_{\overline S}(J)=\frac14=0{,}25\).`
+ arbre({ A: ['S', bar('S')], B: ['J', bar('J')], p: ['0,6', '0,4'], q: [['1', '0'], ['0,25', '0,75']] }) + R`</li>
<li>(1,5 pt) Formule des probabilités totales : \(P(J)=P(S)\,P_S(J)+P(\overline S)\,P_{\overline S}(J)=0{,}6\times1+0{,}4\times0{,}25=0{,}6+0{,}1=0{,}7\).</li>
<li>(1,5 pt) \(P_J(S)=\dfrac{P(S\cap J)}{P(J)}=\dfrac{0{,}6}{0{,}7}=\dfrac67\approx0{,}857\). Une réponse juste ne prouve pas que l'élève sait : il y a environ 14 % de chances qu'il ait deviné.</li>
<li>(1,5 pt) a) \(P(S\cap J)=p\times1=p\) et \(P(J)=p+(1-p)\times\frac14=\frac{4p+1-p}{4}=\frac{3p+1}{4}\). Donc \(P_J(S)=\dfrac{p}{\frac{3p+1}{4}}=\dfrac{4p}{3p+1}\).<br>
b) Comme \(3p+1&gt;0\) : \(\dfrac{4p}{3p+1}\geqslant\dfrac{9}{10}\iff40p\geqslant27p+9\iff13p\geqslant9\iff p\geqslant\dfrac{9}{13}\approx0{,}692\).<br>
Il faut que l'élève connaisse la réponse avec une probabilité d'au moins \(\frac{9}{13}\).</li>
</ol>`},
        { titre: "Exercice 3 — Vrai ou faux ?", points: 5,
          enonce: R`Pour chaque affirmation, dis si elle est vraie ou fausse et <b>justifie</b> (une réponse non justifiée ne rapporte aucun point). \(A\) et \(B\) désignent deux événements.
<ol><li>Si \(P(A)=0{,}5\) et \(P_A(B)=0{,}4\), alors \(P(A\cap B)=0{,}2\).</li><li>Si \(A\) et \(B\) sont incompatibles avec \(P(A)=0{,}3\) et \(P(B)=0{,}4\), alors ils sont indépendants.</li><li>On a toujours \(P_A(B)+P_{\overline A}(B)=1\) (avec \(0&lt;P(A)&lt;1\)).</li><li>Si \(A\) et \(B\) sont indépendants avec \(P(A)=0{,}3\) et \(P(B)=0{,}5\), alors \(P(A\cup B)=0{,}8\).</li><li>Si \(0&lt;P(A)&lt;1\) et \(P_A(B)=P_{\overline A}(B)\), alors \(A\) et \(B\) sont indépendants.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <b>Vrai</b> : \(P(A\cap B)=P(A)\times P_A(B)=0{,}5\times0{,}4=0{,}2\).</li>
<li>(1 pt) <b>Faux</b> : incompatibles donne \(P(A\cap B)=0\), alors que \(P(A)\times P(B)=0{,}12\neq0\).</li>
<li>(1 pt) <b>Faux</b> : c'est \(P_A(B)+P_A(\overline B)\) qui vaut 1. Contre-exemple : si \(B\) est l'événement certain, \(P_A(B)=P_{\overline A}(B)=1\) et la somme vaut 2.</li>
<li>(1 pt) <b>Faux</b> : \(P(A\cap B)=0{,}3\times0{,}5=0{,}15\) donc \(P(A\cup B)=0{,}3+0{,}5-0{,}15=0{,}65\).</li>
<li>(1 pt) <b>Vrai</b> : notons \(q=P_A(B)=P_{\overline A}(B)\). Par les probabilités totales, \(P(B)=P(A)\,q+P(\overline A)\,q=\big(P(A)+P(\overline A)\big)q=q\). Donc \(P_A(B)=P(B)\), ce qui équivaut à l'indépendance (puisque \(P(A)\neq0\)).</li>
</ol>`},
        { titre: "Exercice 4 — La roue de la fête foraine", points: 4,
          enonce: R`Sur une roue de loterie, la probabilité de tomber sur un secteur gagnant est \(0{,}2\). Lina joue trois parties ; les parties sont indépendantes.
<ol><li>Calcule la probabilité que Lina perde les trois parties, puis qu'elle gagne au moins une partie.</li><li>Calcule la probabilité qu'elle gagne exactement une partie.</li><li>On considère le programme Python ci-dessous.
<pre><code>from random import random

def partie():
    g = 0
    for i in range(3):
        if random() &lt; 0.2:
            g = g + 1
    return g

def estimation(N):
    c = 0
    for k in range(N):
        if partie() &gt;= 1:
            c = c + 1
    return c / N</code></pre>
a) Que renvoie la fonction <code>partie()</code> ?<br>b) De quelle valeur <code>estimation(100000)</code> sera-t-elle proche ? Justifie.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) On note \(G\) « gagner une partie » : \(P(G)=0{,}2\), \(P(\overline G)=0{,}8\). Les parties étant indépendantes, on multiplie le long du chemin \(\overline G\,\overline G\,\overline G\) : \(P(\text{3 défaites})=0{,}8^3=0{,}512\).<br>
« Au moins une victoire » est le contraire : \(1-0{,}512=0{,}488\).</li>
<li>(1,5 pt) Trois chemins conviennent : \(G\overline G\,\overline G\), \(\overline G G\overline G\), \(\overline G\,\overline G G\), chacun de probabilité \(0{,}2\times0{,}8^2=0{,}128\). Donc \(P(\text{exactement une})=3\times0{,}128=0{,}384\).</li>
<li>(1,5 pt) a) <code>partie()</code> simule trois parties (<code>random() &lt; 0.2</code> est vrai avec probabilité \(0{,}2\)) et renvoie le <b>nombre de parties gagnées</b> (entier entre 0 et 3).<br>
b) <code>estimation(N)</code> renvoie la fréquence des séries de trois parties avec au moins une victoire. Pour \(N\) grand, elle est proche de la probabilité calculée : environ \(0{,}488\).</li>
</ol>`}
      ]},
    { titre: "DS n°4 — Urnes, diviseurs et aire (sans calculatrice)", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Le dé choisit l'urne", points: 6,
          enonce: R`On dispose de deux urnes : \(U_1\) contient 3 boules rouges et 1 boule noire ; \(U_2\) contient 1 boule rouge et 3 boules noires. On lance un dé équilibré à 6 faces : si on obtient 1 ou 2, on tire une boule dans \(U_1\) ; sinon on tire une boule dans \(U_2\).<br>
On note \(E\) : « on tire dans l'urne \(U_1\) » et \(R\) : « la boule tirée est rouge ». Les résultats seront donnés sous forme de fractions irréductibles.
<ol><li>Construis l'arbre pondéré.</li><li>Calcule \(P(E\cap R)\).</li><li>Montre que \(P(R)=\frac{5}{12}\).</li><li>La boule tirée est rouge. Quelle est la probabilité qu'elle provienne de \(U_1\) ?</li><li>Les événements \(E\) et \(R\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(E)=\frac26=\frac13\), \(P_E(R)=\frac34\), \(P_{\overline E}(R)=\frac14\).`
+ arbre({ A: ['E', bar('E')], B: ['R', bar('R')], p: ['1/3', '2/3'], q: [['3/4', '1/4'], ['1/4', '3/4']] }) + R`</li>
<li>(1 pt) \(P(E\cap R)=\frac13\times\frac34=\frac14\).</li>
<li>(1,5 pt) Probabilités totales : \(P(R)=P(E\cap R)+P(\overline E\cap R)=\frac14+\frac23\times\frac14=\frac14+\frac16=\frac{3}{12}+\frac{2}{12}=\frac{5}{12}\).</li>
<li>(1 pt) \(P_R(E)=\dfrac{P(E\cap R)}{P(R)}=\dfrac{1/4}{5/12}=\dfrac14\times\dfrac{12}{5}=\dfrac35\).</li>
<li>(1 pt) \(P(E)\times P(R)=\frac13\times\frac{5}{12}=\frac{5}{36}\) alors que \(P(E\cap R)=\frac14=\frac{9}{36}\). <b>Non indépendants</b> (on le voit aussi : \(P_R(E)=\frac35\neq P(E)=\frac13\)).</li>
</ol>`},
        { titre: "Exercice 2 — De l'arbre au tableau", points: 5,
          enonce: R`On donne \(P(A)=0{,}4\), \(P_A(B)=0{,}25\) et \(P_{\overline A}(B)=0{,}5\).
<ol><li>Recopie et complète le tableau des probabilités suivant :
<table class="tv"><tr><td></td><td>\(B\)</td><td>\(\overline B\)</td><td>Total</td></tr>
<tr><td>\(A\)</td><td>…</td><td>…</td><td>…</td></tr>
<tr><td>\(\overline A\)</td><td>…</td><td>…</td><td>…</td></tr>
<tr><td>Total</td><td>…</td><td>…</td><td>1</td></tr></table></li>
<li>Calcule \(P_B(A)\) et \(P_{\overline B}(A)\).</li><li>Calcule \(P(A\cup B)\).</li><li>Les événements \(A\) et \(B\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(P(A\cap B)=0{,}4\times0{,}25=0{,}1\) ; \(P(A\cap\overline B)=0{,}4-0{,}1=0{,}3\) ; \(P(\overline A)=0{,}6\) ; \(P(\overline A\cap B)=0{,}6\times0{,}5=0{,}3\) ; \(P(\overline A\cap\overline B)=0{,}6-0{,}3=0{,}3\).
<table class="tv"><tr><td></td><td>\(B\)</td><td>\(\overline B\)</td><td>Total</td></tr>
<tr><td>\(A\)</td><td>0,1</td><td>0,3</td><td>0,4</td></tr>
<tr><td>\(\overline A\)</td><td>0,3</td><td>0,3</td><td>0,6</td></tr>
<tr><td>Total</td><td>0,4</td><td>0,6</td><td>1</td></tr></table></li>
<li>(1 pt) \(P_B(A)=\frac{0{,}1}{0{,}4}=0{,}25\) et \(P_{\overline B}(A)=\frac{0{,}3}{0{,}6}=0{,}5\).</li>
<li>(1 pt) \(P(A\cup B)=P(A)+P(B)-P(A\cap B)=0{,}4+0{,}4-0{,}1=0{,}7\) (ou \(1-P(\overline A\cap\overline B)=1-0{,}3\)).</li>
<li>(1 pt) \(P(A)\times P(B)=0{,}4\times0{,}4=0{,}16\neq0{,}1=P(A\cap B)\) : <b>non indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Pair, multiple de 3, multiple de 5", points: 5,
          enonce: R`On choisit au hasard un entier entre 1 et 20 (inclus), tous les entiers ayant la même probabilité. On considère les événements \(A\) : « l'entier est pair », \(B\) : « l'entier est un multiple de 5 » et \(C\) : « l'entier est un multiple de 3 ».
<ol><li>Calcule \(P(A)\), \(P(B)\) et \(P(C)\).</li><li>Les événements \(A\) et \(B\) sont-ils indépendants ?</li><li>Les événements \(A\) et \(C\) sont-ils indépendants ?</li><li>Les événements \(B\) et \(C\) sont-ils indépendants ?</li><li>Sans dénombrer, donne \(P(A\cap\overline B)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(A=\{2;4;\dots;20\}\) (10 entiers), \(B=\{5;10;15;20\}\), \(C=\{3;6;9;12;15;18\}\). Donc \(P(A)=\frac{10}{20}=\frac12\), \(P(B)=\frac{4}{20}=\frac15\), \(P(C)=\frac{6}{20}=\frac{3}{10}\).</li>
<li>(1,5 pt) \(A\cap B=\{10;20\}\) : \(P(A\cap B)=\frac{2}{20}=\frac{1}{10}\) et \(P(A)\times P(B)=\frac12\times\frac15=\frac{1}{10}\). <b>Indépendants</b>.</li>
<li>(1 pt) \(A\cap C=\{6;12;18\}\) : \(P(A\cap C)=\frac{3}{20}\) et \(P(A)\times P(C)=\frac12\times\frac{3}{10}=\frac{3}{20}\). <b>Indépendants</b>.</li>
<li>(1 pt) \(B\cap C=\{15\}\) : \(P(B\cap C)=\frac{1}{20}=\frac{5}{100}\) et \(P(B)\times P(C)=\frac15\times\frac{3}{10}=\frac{3}{50}=\frac{6}{100}\). <b>Non indépendants</b>.</li>
<li>(0,5 pt) \(A\) et \(B\) étant indépendants, \(A\) et \(\overline B\) le sont aussi : \(P(A\cap\overline B)=\frac12\times\frac45=\frac25\). (Vérification : \(\{2;4;6;8;12;14;16;18\}\), 8 entiers sur 20.)</li>
</ol>`},
        { titre: "Exercice 4 — Entre la droite et la parabole", points: 4,
          enonce: R`On considère le programme Python suivant.
<pre><code>from random import random

def zone(n):
    c = 0
    for i in range(n):
        x = random()
        y = random()
        if x**2 &lt;= y and y &lt;= x:
            c = c + 1
    return c / n</code></pre>
<ol><li>Décris la zone du carré \([0;1]\times[0;1]\) dans laquelle doit se trouver le point \((x;y)\) pour que <code>c</code> augmente.</li><li>On admet que l'aire sous la parabole \(y=x^2\) sur \([0;1]\) vaut \(\frac13\). Vers quelle valeur <code>zone(n)</code> se rapproche-t-elle quand \(n\) est grand ? Justifie.</li><li>Un appel <code>zone(10000)</code> a renvoyé <code>0.1659</code>. Combien de points ont été comptés ? Quelle valeur renverrait approximativement la fonction si la condition devenait <code>y &lt;= x</code> ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Le point doit être <b>au-dessus</b> de la parabole \(y=x^2\) et <b>en dessous</b> de la droite \(y=x\) : c'est la zone comprise entre la parabole et la droite pour \(x\in[0;1]\) (sur cet intervalle, \(x^2\leqslant x\)).</li>
<li>(1,5 pt) Sous la droite \(y=x\), on a un triangle rectangle d'aire \(\frac{1\times1}{2}=\frac12\). On lui retire la partie sous la parabole, d'aire \(\frac13\) : l'aire de la zone vaut \(\frac12-\frac13=\frac16\). Le carré ayant une aire de 1, la proportion \(\frac cn\) se rapproche de \(\frac16\approx0{,}167\).</li>
<li>(1,5 pt) \(\frac{c}{10000}=0{,}1659\) donc \(c=1659\) points.<br>
Avec la condition <code>y &lt;= x</code>, on compte les points du triangle sous la droite : la fonction renverrait environ \(\frac12=0{,}5\).</li>
</ol>`}
      ]},
    { titre: "DS n°5 — Abonnements, révisions et dés tétraédriques", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Plateforme de streaming", points: 7,
          enonce: R`Une plateforme de streaming propose trois formules : Essentiel, Standard et Premium. 50 % des abonnés ont choisi Essentiel, 35 % Standard et les autres Premium. Au cours d'une année, 20 % des abonnés Essentiel résilient leur abonnement, contre 12 % des abonnés Standard et 4 % des abonnés Premium.<br>
On choisit un abonné au hasard et on note \(E\), \(S\), \(Q\) les événements « l'abonné a la formule Essentiel / Standard / Premium » et \(R\) : « l'abonné résilie dans l'année ».
<ol><li>Représente la situation par un arbre pondéré.</li><li>Calcule \(P(E\cap R)\).</li><li>Montre que \(P(R)=0{,}148\).</li><li>Un abonné a résilié. Quelle est la probabilité qu'il avait la formule Essentiel ? (arrondir à \(10^{-3}\)) Commente.</li><li>Un abonné n'a pas résilié. Quelle est la probabilité qu'il ait la formule Premium ? (arrondir à \(10^{-3}\))</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Arbre (trois branches au premier niveau) :
<ul><li>\(E\) (0,5) → \(R\) (0,2) ; \(\overline R\) (0,8)</li><li>\(S\) (0,35) → \(R\) (0,12) ; \(\overline R\) (0,88)</li><li>\(Q\) (0,15) → \(R\) (0,04) ; \(\overline R\) (0,96)</li></ul>
(\(P(Q)=1-0{,}5-0{,}35=0{,}15\).)</li>
<li>(1 pt) \(P(E\cap R)=0{,}5\times0{,}2=0{,}1\).</li>
<li>(1,5 pt) \(E\), \(S\), \(Q\) forment une partition. Formule des probabilités totales :
\[P(R)=0{,}5\times0{,}2+0{,}35\times0{,}12+0{,}15\times0{,}04=0{,}1+0{,}042+0{,}006=0{,}148.\]</li>
<li>(1,5 pt) \(P_R(E)=\dfrac{P(E\cap R)}{P(R)}=\dfrac{0{,}1}{0{,}148}=\dfrac{25}{37}\approx0{,}676\). Les abonnés Essentiel représentent la moitié des abonnés mais environ les deux tiers des résiliations.</li>
<li>(1,5 pt) \(P(Q\cap\overline R)=0{,}15\times0{,}96=0{,}144\) et \(P(\overline R)=1-0{,}148=0{,}852\). Donc \(P_{\overline R}(Q)=\dfrac{0{,}144}{0{,}852}=\dfrac{12}{71}\approx0{,}169\).</li>
</ol>`},
        { titre: "Exercice 2 — Devoirs et résultats", points: 5,
          enonce: R`Dans un lycée, 30 % des élèves ont une moyenne supérieure ou égale à 14 (événement \(E\)). Parmi ces élèves, 80 % font leurs devoirs régulièrement (événement \(D\)). Par ailleurs, 50 % des élèves du lycée font leurs devoirs régulièrement. On choisit un élève au hasard.
<ol><li>Traduis les trois informations de l'énoncé par des probabilités.</li><li>Calcule \(P(E\cap D)\).</li><li>Calcule \(P(\overline E\cap D)\), puis la probabilité qu'un élève ayant une moyenne inférieure à 14 fasse ses devoirs régulièrement (valeur exacte et arrondi à \(10^{-3}\)).</li><li>Un élève fait ses devoirs régulièrement. Quelle est la probabilité qu'il ait au moins 14 de moyenne ?</li><li>Les événements \(E\) et \(D\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(E)=0{,}3\) ; \(P_E(D)=0{,}8\) (« parmi ces élèves ») ; \(P(D)=0{,}5\).</li>
<li>(1 pt) \(P(E\cap D)=P(E)\times P_E(D)=0{,}3\times0{,}8=0{,}24\).</li>
<li>(1,5 pt) Probabilités totales : \(P(D)=P(E\cap D)+P(\overline E\cap D)\), donc \(P(\overline E\cap D)=0{,}5-0{,}24=0{,}26\).<br>
\(P_{\overline E}(D)=\dfrac{0{,}26}{P(\overline E)}=\dfrac{0{,}26}{0{,}7}=\dfrac{13}{35}\approx0{,}371\).</li>
<li>(1 pt) \(P_D(E)=\dfrac{P(E\cap D)}{P(D)}=\dfrac{0{,}24}{0{,}5}=0{,}48\).</li>
<li>(0,5 pt) \(P_E(D)=0{,}8\neq P(D)=0{,}5\) : <b>non indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Deux dés tétraédriques", points: 4,
          enonce: R`On lance un dé tétraédrique rouge et un dé tétraédrique bleu, tous deux équilibrés et dont les faces sont numérotées de 1 à 4. On note \(S\) la somme des deux résultats.
<ol><li>Présente les issues dans un tableau à double entrée donnant la somme \(S\). Quelle est la probabilité de chaque issue ?</li><li>Calcule \(P(S=5)\).</li><li>On note \(A\) : « le dé rouge donne un nombre pair » et \(B\) : « \(S=5\) ». Les événements \(A\) et \(B\) sont-ils indépendants ?</li><li>On note \(C\) : « \(S\geqslant6\) ». Calcule \(P(C)\) et \(P_C(A)\). Les événements \(A\) et \(C\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Les deux lancers sont des épreuves indépendantes : chacune des \(4\times4=16\) issues \((r;b)\) a pour probabilité \(\frac14\times\frac14=\frac{1}{16}\).
<table class="tv"><tr><td>rouge / bleu</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
<tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
<tr><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr></table></li>
<li>(1 pt) \(S=5\) pour \((1;4)\), \((2;3)\), \((3;2)\), \((4;1)\) : \(P(S=5)=\frac{4}{16}=\frac14\).</li>
<li>(1 pt) \(P(A)=\frac12\). \(A\cap B=\{(2;3);(4;1)\}\) : \(P(A\cap B)=\frac{2}{16}=\frac18\) et \(P(A)\times P(B)=\frac12\times\frac14=\frac18\). <b>Indépendants</b>.</li>
<li>(1 pt) \(C=\{(2;4);(3;3);(3;4);(4;2);(4;3);(4;4)\}\) : \(P(C)=\frac{6}{16}=\frac38\).<br>
\(A\cap C=\{(2;4);(4;2);(4;3);(4;4)\}\) : \(P(A\cap C)=\frac{4}{16}=\frac14\), donc \(P_C(A)=\dfrac{1/4}{3/8}=\dfrac23\).<br>
\(P_C(A)=\frac23\neq P(A)=\frac12\) : <b>non indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 4 — Simuler les dés", points: 4,
          enonce: R`On rappelle que <code>randint(1, 4)</code> renvoie un entier au hasard entre 1 et 4 (inclus), chaque entier ayant la même probabilité.
<pre><code>from random import randint

def freq(N):
    c = 0
    for k in range(N):
        r = randint(1, 4)
        b = randint(1, 4)
        if ........ :
            c = c + 1
    return ........</code></pre>
<ol><li>Que représentent les variables <code>r</code> et <code>b</code> ?</li><li>Complète la fonction pour qu'elle renvoie la fréquence de l'événement « \(S=5\) » sur <code>N</code> lancers. De quelle valeur sera proche <code>freq(100000)</code> ?</li><li>Écris une fonction <code>freq_cond(N)</code> qui estime \(P_C(A)\) de l'exercice 3 (dé rouge pair sachant \(S\geqslant6\)). Quelle valeur doit-on obtenir environ ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <code>r</code> et <code>b</code> simulent les résultats du dé rouge et du dé bleu.</li>
<li>(1,5 pt) <code>if r + b == 5:</code> et <code>return c / N</code>. D'après l'exercice 3, <code>freq(100000)</code> sera proche de \(\frac14=0{,}25\).</li>
<li>(1,5 pt) On compte les lancers où \(C\) est réalisé, et parmi eux ceux où \(A\) l'est aussi :
<pre><code>from random import randint

def freq_cond(N):
    nc = 0
    nac = 0
    for k in range(N):
        r = randint(1, 4)
        b = randint(1, 4)
        if r + b &gt;= 6:
            nc = nc + 1
            if r % 2 == 0:
                nac = nac + 1
    return nac / nc</code></pre>
On doit obtenir environ \(\frac23\approx0{,}667\).</li>
</ol>`}
      ]},
    { titre: "DS n°6 — Filtre anti-spam, vélos et paramètre", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Le filtre anti-spam", points: 7,
          enonce: R`Dans une messagerie, 60 % des courriels reçus sont des spams. Un filtre classe les courriels en « indésirables » : il classe ainsi 95 % des spams, mais aussi 2 % des courriels légitimes.<br>
On choisit un courriel reçu au hasard et on note \(S\) : « c'est un spam » et \(F\) : « le filtre le classe en indésirable ».
<ol><li>Construis l'arbre pondéré.</li><li>Calcule \(P(F)\).</li><li>Un courriel est classé indésirable. Quelle est la probabilité que ce soit un spam ? (arrondir à \(10^{-3}\))</li><li>Calcule la probabilité qu'un courriel arrivé dans la boîte principale (non classé indésirable) soit un spam (arrondir à \(10^{-3}\)). Interprète.</li><li>On note \(p\) la proportion de spams (le filtre gardant les mêmes caractéristiques). Montre que \(P_F(S)=\dfrac{0{,}95p}{0{,}93p+0{,}02}\), puis détermine pour quelles valeurs de \(p\) on a \(P_F(S)\geqslant0{,}99\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(S)=0{,}6\), \(P_S(F)=0{,}95\), \(P_{\overline S}(F)=0{,}02\).`
+ arbre({ A: ['S', bar('S')], B: ['F', bar('F')], p: ['0,6', '0,4'], q: [['0,95', '0,05'], ['0,02', '0,98']] }) + R`</li>
<li>(1,5 pt) \(P(S\cap F)=0{,}6\times0{,}95=0{,}57\) et \(P(\overline S\cap F)=0{,}4\times0{,}02=0{,}008\). Probabilités totales : \(P(F)=0{,}57+0{,}008=0{,}578\).</li>
<li>(1,5 pt) \(P_F(S)=\dfrac{0{,}57}{0{,}578}=\dfrac{285}{289}\approx0{,}986\).</li>
<li>(1,5 pt) \(P(S\cap\overline F)=0{,}6\times0{,}05=0{,}03\) et \(P(\overline F)=1-0{,}578=0{,}422\). Donc \(P_{\overline F}(S)=\dfrac{0{,}03}{0{,}422}=\dfrac{15}{211}\approx0{,}071\) : environ 7,1 % des courriels de la boîte principale sont encore des spams.</li>
<li>(1,5 pt) \(P(S\cap F)=0{,}95p\) et \(P(F)=0{,}95p+0{,}02(1-p)=0{,}93p+0{,}02\), d'où la formule. Comme \(0{,}93p+0{,}02&gt;0\) :
\[P_F(S)\geqslant0{,}99\iff0{,}95p\geqslant0{,}99(0{,}93p+0{,}02)\iff0{,}95p\geqslant0{,}9207p+0{,}0198\iff0{,}0293p\geqslant0{,}0198\iff p\geqslant\frac{198}{293}.\]
Il faut que la proportion de spams soit au moins \(\frac{198}{293}\approx0{,}676\) (avec 60 % de spams, on a bien \(P_F(S)\approx0{,}986&lt;0{,}99\)).</li>
</ol>`},
        { titre: "Exercice 2 — Vélo ou voiture ?", points: 4,
          enonce: R`Dans une ville, on choisit un habitant au hasard. On note \(V\) : « il possède un vélo » et \(A\) : « il possède une voiture ». On sait que :
<ul><li>55 % des habitants possèdent un vélo ;</li><li>22 % des habitants possèdent un vélo et une voiture ;</li><li>parmi les possesseurs d'une voiture, 40 % possèdent un vélo.</li></ul>
<ol><li>Traduis chaque information par une probabilité.</li><li>Calcule \(P(A)\).</li><li>Calcule \(P_V(A)\) et traduis le résultat par une phrase.</li><li>Calcule la probabilité qu'un habitant ne possède ni vélo ni voiture.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(V)=0{,}55\) ; \(P(V\cap A)=0{,}22\) ; \(P_A(V)=0{,}4\).</li>
<li>(1 pt) \(P_A(V)=\dfrac{P(V\cap A)}{P(A)}\) donc \(P(A)=\dfrac{P(V\cap A)}{P_A(V)}=\dfrac{0{,}22}{0{,}4}=0{,}55\).</li>
<li>(1 pt) \(P_V(A)=\dfrac{0{,}22}{0{,}55}=0{,}4\) : 40 % des possesseurs d'un vélo ont aussi une voiture.</li>
<li>(1 pt) \(P(V\cup A)=0{,}55+0{,}55-0{,}22=0{,}88\). « Ni vélo ni voiture » est le contraire de \(V\cup A\) : \(P(\overline V\cap\overline A)=1-0{,}88=0{,}12\).</li>
</ol>`},
        { titre: "Exercice 3 — Un paramètre à régler", points: 5,
          enonce: R`\(A\) et \(B\) sont deux événements tels que \(P(A)=0{,}4\) et \(P(B)=0{,}5\). On note \(x=P(A\cap B)\).
<ol><li>Pour quelle valeur de \(x\) les événements \(A\) et \(B\) sont-ils indépendants ?</li><li>Pour quelle valeur de \(x\) sont-ils incompatibles ? Peuvent-ils être à la fois indépendants et incompatibles ?</li><li>Explique pourquoi on ne peut pas avoir \(x=0{,}45\).</li><li>On suppose désormais que \(P(A\cup B)=0{,}7\). Calcule \(x\) et conclus sur l'indépendance. Calcule ensuite \(P_A(\overline B)\) et \(P(\overline A\cap\overline B)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Indépendance \(\iff x=P(A)\times P(B)=0{,}4\times0{,}5=0{,}2\).</li>
<li>(1 pt) Incompatibles \(\iff A\cap B=\varnothing\), donc \(x=0\). Comme \(0\neq0{,}2\), ils ne peuvent pas être à la fois incompatibles et indépendants.</li>
<li>(1 pt) \(A\cap B\) est inclus dans \(A\), donc \(P(A\cap B)\leqslant P(A)=0{,}4\). La valeur \(0{,}45\) est impossible.</li>
<li>(2 pts) \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\) donc \(0{,}7=0{,}4+0{,}5-x\), soit \(x=0{,}2\) : \(A\) et \(B\) sont <b>indépendants</b> (question 1).<br>
\(P(A\cap\overline B)=P(A)-P(A\cap B)=0{,}4-0{,}2=0{,}2\), donc \(P_A(\overline B)=\frac{0{,}2}{0{,}4}=0{,}5\) (\(=P(\overline B)\), cohérent avec l'indépendance).<br>
\(P(\overline A\cap\overline B)=1-P(A\cup B)=1-0{,}7=0{,}3\) (ou \(0{,}6\times0{,}5\) car \(\overline A\) et \(\overline B\) sont indépendants).</li>
</ol>`},
        { titre: "Exercice 4 — Pièce et urne", points: 4,
          enonce: R`Un jeu se déroule en deux étapes indépendantes. On lance une pièce truquée qui tombe sur Pile avec probabilité \(0{,}6\), puis on tire une boule dans une urne contenant 2 boules vertes et 3 boules rouges. On gagne si on obtient « Pile et une boule verte » ou « Face et une boule rouge ». On note \(G\) l'événement « gagner ».
<ol><li>Représente l'expérience par un arbre pondéré.</li><li>Calcule \(P(G)\).</li><li>On a gagné. Quelle est la probabilité d'avoir obtenu Pile ? Les événements « obtenir Pile » et \(G\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Les deux étapes sont indépendantes : les branches du 2<sup>e</sup> niveau sont les mêmes (\(P(V)=\frac25=0{,}4\), \(P(R)=0{,}6\)) quel que soit le résultat de la pièce.`
+ arbre({ A: ['P', 'F'], B: ['V', 'R'], p: ['0,6', '0,4'], q: [['0,4', '0,6'], ['0,4', '0,6']], fin: ['PV : 0,24 (gagné)', 'PR : 0,36', 'FV : 0,16', 'FR : 0,24 (gagné)'] }) + R`</li>
<li>(1,5 pt) \(P(G)=P(PV)+P(FR)=0{,}6\times0{,}4+0{,}4\times0{,}6=0{,}24+0{,}24=0{,}48\).</li>
<li>(1,5 pt) \(P_G(P)=\dfrac{P(P\cap G)}{P(G)}=\dfrac{0{,}24}{0{,}48}=0{,}5\).<br>
\(P(P)\times P(G)=0{,}6\times0{,}48=0{,}288\neq0{,}24=P(P\cap G)\) : <b>non indépendants</b> (savoir qu'on a gagné fait passer la probabilité de Pile de 0,6 à 0,5).</li>
</ol>`}
      ]},
    { titre: "DS n°7 — Tirages, cinéma et alarmes (sans calculatrice)", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Deux boules sans remise", points: 5,
          enonce: R`Une urne contient 4 boules rouges et 2 boules bleues. On tire successivement et <b>sans remise</b> deux boules. On note \(R_1\) : « la 1<sup>re</sup> boule est rouge » et \(R_2\) : « la 2<sup>e</sup> boule est rouge ». Les résultats seront donnés sous forme de fractions irréductibles.
<ol><li>Construis l'arbre pondéré de l'expérience.</li><li>Calcule la probabilité d'obtenir deux boules rouges, puis celle d'obtenir deux boules de couleurs différentes.</li><li>Montre que \(P(R_2)=\frac23\).</li><li>La 2<sup>e</sup> boule est rouge. Quelle est la probabilité que la 1<sup>re</sup> l'ait été aussi ?</li><li>Quelle serait la probabilité d'obtenir deux boules rouges avec remise ? Compare.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Au 1<sup>er</sup> tirage : \(P(R_1)=\frac46=\frac23\). Après une rouge, il reste 3 rouges et 2 bleues ; après une bleue, 4 rouges et 1 bleue.`
+ arbre({ A: ['R₁', bar('R₁')], B: ['R₂', bar('R₂')], p: ['2/3', '1/3'], q: [['3/5', '2/5'], ['4/5', '1/5']] }) + R`</li>
<li>(1 pt) \(P(R_1\cap R_2)=\frac23\times\frac35=\frac25\).<br>
Couleurs différentes : \(P(R_1\cap\overline{R_2})+P(\overline{R_1}\cap R_2)=\frac23\times\frac25+\frac13\times\frac45=\frac{4}{15}+\frac{4}{15}=\frac{8}{15}\).</li>
<li>(1 pt) Probabilités totales : \(P(R_2)=\frac25+\frac{4}{15}=\frac{6}{15}+\frac{4}{15}=\frac{10}{15}=\frac23\).</li>
<li>(1 pt) \(P_{R_2}(R_1)=\dfrac{P(R_1\cap R_2)}{P(R_2)}=\dfrac{2/5}{2/3}=\dfrac25\times\dfrac32=\dfrac35\).</li>
<li>(0,5 pt) Avec remise, les tirages sont indépendants : \(\left(\frac23\right)^2=\frac49\). Comme \(\frac49=\frac{20}{45}&gt;\frac25=\frac{18}{45}\), c'est plus probable avec remise (sans remise, il y a une rouge de moins pour le 2<sup>e</sup> tirage).</li>
</ol>`},
        { titre: "Exercice 2 — Au cinéma", points: 5,
          enonce: R`Lors d'une séance, un cinéma a accueilli 240 spectateurs répartis entre trois films (animation \(N\), comédie \(C\), thriller \(T\)) et deux tarifs (réduit \(R\) ou plein).
<table class="tv"><tr><td></td><td>Animation \(N\)</td><td>Comédie \(C\)</td><td>Thriller \(T\)</td><td>Total</td></tr>
<tr><td>Tarif réduit \(R\)</td><td>60</td><td>30</td><td>…</td><td>120</td></tr>
<tr><td>Plein tarif</td><td>…</td><td>…</td><td>50</td><td>…</td></tr>
<tr><td>Total</td><td>80</td><td>80</td><td>…</td><td>240</td></tr></table>
On choisit un spectateur au hasard.
<ol><li>Complète le tableau.</li><li>Calcule \(P(R)\) et \(P(N\cap R)\).</li><li>Calcule \(P_N(R)\) et \(P_R(N)\), et traduis chacune par une phrase.</li><li>Les événements \(C\) et \(R\) sont-ils indépendants ? Interprète.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Thriller en tarif réduit : \(120-60-30=30\) ; total thriller : \(30+50=80\) ; plein tarif : \(240-120=120\) ; animation plein tarif : \(80-60=20\) ; comédie plein tarif : \(80-30=50\). Vérification : \(20+50+50=120\) ✓.
<table class="tv"><tr><td></td><td>\(N\)</td><td>\(C\)</td><td>\(T\)</td><td>Total</td></tr>
<tr><td>\(R\)</td><td>60</td><td>30</td><td>30</td><td>120</td></tr>
<tr><td>Plein</td><td>20</td><td>50</td><td>50</td><td>120</td></tr>
<tr><td>Total</td><td>80</td><td>80</td><td>80</td><td>240</td></tr></table></li>
<li>(1 pt) \(P(R)=\frac{120}{240}=\frac12\) et \(P(N\cap R)=\frac{60}{240}=\frac14\).</li>
<li>(1,5 pt) \(P_N(R)=\frac{60}{80}=\frac34\) : les trois quarts des spectateurs du film d'animation ont payé le tarif réduit.<br>
\(P_R(N)=\frac{60}{120}=\frac12\) : la moitié des spectateurs au tarif réduit sont venus voir le film d'animation.</li>
<li>(1,5 pt) \(P(C)=\frac{80}{240}=\frac13\), \(P(C)\times P(R)=\frac13\times\frac12=\frac16\) et \(P(C\cap R)=\frac{30}{240}=\frac18\neq\frac16\) : <b>non indépendants</b>. En effet \(P_R(C)=\frac{30}{120}=\frac14\) est inférieur à \(P(C)=\frac13\) : les spectateurs au tarif réduit choisissent moins souvent la comédie.</li>
</ol>`},
        { titre: "Exercice 3 — Reconstituer un arbre", points: 6,
          enonce: R`On sait que \(P(A)=\frac14\), \(P_A(B)=\frac23\) et \(P(B)=\frac12\).
<ol><li>Calcule \(P(A\cap B)\).</li><li>Calcule \(P(\overline A\cap B)\), puis \(P_{\overline A}(B)\).</li><li>Construis l'arbre pondéré complet (toutes les branches).</li><li>Calcule \(P_B(A)\).</li><li>Calcule \(P(A\cup B)\). Les événements \(A\) et \(B\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(A\cap B)=\frac14\times\frac23=\frac{2}{12}=\frac16\).</li>
<li>(1,5 pt) \(P(\overline A\cap B)=P(B)-P(A\cap B)=\frac12-\frac16=\frac13\). Puis \(P_{\overline A}(B)=\dfrac{1/3}{3/4}=\dfrac13\times\dfrac43=\dfrac49\).</li>
<li>(1,5 pt) \(P(\overline A)=\frac34\), \(P_A(\overline B)=\frac13\), \(P_{\overline A}(\overline B)=1-\frac49=\frac59\).`
+ arbre({ A: ['A', bar('A')], B: ['B', bar('B')], p: ['1/4', '3/4'], q: [['2/3', '1/3'], ['4/9', '5/9']] }) + R`</li>
<li>(1 pt) \(P_B(A)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{1/6}{1/2}=\dfrac13\).</li>
<li>(1 pt) \(P(A\cup B)=\frac14+\frac12-\frac16=\frac{3}{12}+\frac{6}{12}-\frac{2}{12}=\frac{7}{12}\).<br>
\(P(A)\times P(B)=\frac18\neq\frac16=P(A\cap B)\) : <b>non indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 4 — Démonstration et alarmes", points: 4,
          enonce: R`<ol><li>Soient \(A\) et \(B\) deux événements indépendants. Démontre que \(\overline A\) et \(\overline B\) sont indépendants.</li><li>Une maison est équipée de deux alarmes qui fonctionnent indépendamment l'une de l'autre. En cas d'intrusion, la première se déclenche avec probabilité \(\frac{9}{10}\) et la seconde avec probabilité \(\frac45\). Lors d'une intrusion, calcule la probabilité qu'aucune alarme ne se déclenche, puis qu'au moins une se déclenche.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(\overline A\cap\overline B\) est le contraire de \(A\cup B\), donc
\[P(\overline A\cap\overline B)=1-P(A\cup B)=1-P(A)-P(B)+P(A\cap B).\]
Par indépendance, \(P(A\cap B)=P(A)P(B)\), d'où
\[P(\overline A\cap\overline B)=1-P(A)-P(B)+P(A)P(B)=\big(1-P(A)\big)\big(1-P(B)\big)=P(\overline A)\,P(\overline B).\]
Donc \(\overline A\) et \(\overline B\) sont indépendants.</li>
<li>(2 pts) Notons \(A_1\), \(A_2\) : « l'alarme 1 (resp. 2) se déclenche ». \(A_1\) et \(A_2\) sont indépendants, donc \(\overline{A_1}\) et \(\overline{A_2}\) aussi (question 1) :
\(P(\overline{A_1}\cap\overline{A_2})=\frac{1}{10}\times\frac15=\frac{1}{50}\).<br>
« Au moins une se déclenche » est le contraire : \(1-\frac{1}{50}=\frac{49}{50}\).</li>
</ol>`}
      ]},
    { titre: "DS n°8 — Météo, cartes et télétravail", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Pluie, jour après jour", points: 6,
          enonce: R`Dans une région, on admet que s'il pleut un jour, il pleut le lendemain avec probabilité \(0{,}6\) ; s'il ne pleut pas un jour, il pleut le lendemain avec probabilité \(0{,}2\). Lundi, la probabilité qu'il pleuve est \(0{,}3\).<br>
On note \(L\), \(M\), \(N\) les événements « il pleut lundi », « il pleut mardi », « il pleut mercredi ».
<ol><li>Construis l'arbre pondéré correspondant à lundi et mardi.</li><li>Calcule la probabilité qu'il pleuve lundi et mardi.</li><li>Montre que \(P(M)=0{,}32\).</li><li>Il pleut mardi. Quelle est la probabilité qu'il ait plu lundi ?</li><li>Calcule \(P(N)\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(L)=0{,}3\), \(P_L(M)=0{,}6\), \(P_{\overline L}(M)=0{,}2\).`
+ arbre({ A: ['L', bar('L')], B: ['M', bar('M')], p: ['0,3', '0,7'], q: [['0,6', '0,4'], ['0,2', '0,8']] }) + R`</li>
<li>(1 pt) \(P(L\cap M)=0{,}3\times0{,}6=0{,}18\).</li>
<li>(1,5 pt) Probabilités totales : \(P(M)=0{,}18+0{,}7\times0{,}2=0{,}18+0{,}14=0{,}32\).</li>
<li>(1 pt) \(P_M(L)=\dfrac{0{,}18}{0{,}32}=\dfrac{9}{16}=0{,}5625\).</li>
<li>(1 pt) Même raisonnement en partant de mardi (partition \(M\), \(\overline M\) avec \(P(\overline M)=0{,}68\)) :
\(P(N)=0{,}32\times0{,}6+0{,}68\times0{,}2=0{,}192+0{,}136=0{,}328\).</li>
</ol>`},
        { titre: "Exercice 2 — Jeu de 32 cartes", points: 5,
          enonce: R`On tire une carte au hasard dans un jeu de 32 cartes (4 couleurs : cœur, carreau, trèfle, pique ; 8 cartes par couleur : 7, 8, 9, 10, valet, dame, roi, as). On note \(A\) : « la carte est un cœur », \(B\) : « la carte est une figure » (valet, dame ou roi) et \(C\) : « la carte est un as ».
<ol><li>Calcule \(P(A)\), \(P(B)\) et \(P(C)\).</li><li>Les événements \(A\) et \(B\) sont-ils indépendants ?</li><li>Les événements \(B\) et \(C\) sont-ils indépendants ?</li><li>Calcule \(P(A\cup B)\) et \(P_B(A)\). Interprète \(P_B(A)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(A)=\frac{8}{32}=\frac14\) ; \(P(B)=\frac{12}{32}=\frac38\) (3 figures par couleur) ; \(P(C)=\frac{4}{32}=\frac18\).</li>
<li>(1,5 pt) \(A\cap B\) : valet, dame et roi de cœur, donc \(P(A\cap B)=\frac{3}{32}\). Et \(P(A)\times P(B)=\frac14\times\frac38=\frac{3}{32}\). <b>Indépendants</b>.</li>
<li>(1 pt) Un as n'est pas une figure : \(B\cap C=\varnothing\), \(P(B\cap C)=0\) alors que \(P(B)\times P(C)=\frac{3}{64}\neq0\). <b>Non indépendants</b> (incompatibles).</li>
<li>(1,5 pt) \(P(A\cup B)=\frac{8}{32}+\frac{12}{32}-\frac{3}{32}=\frac{17}{32}\).<br>
\(P_B(A)=\dfrac{3/32}{12/32}=\dfrac{3}{12}=\dfrac14=P(A)\) : savoir que la carte est une figure ne change pas la probabilité qu'elle soit un cœur.</li>
</ol>`},
        { titre: "Exercice 3 — Télétravail", points: 5,
          enonce: R`Une entreprise compte 1 200 salariés. 35 % d'entre eux télétravaillent (événement \(T\)). Parmi les télétravailleurs, 60 % sont cadres (événement \(C\)) ; parmi les autres salariés, 30 % sont cadres.
<ol><li>Construis le tableau croisé des effectifs (lignes : \(T\), \(\overline T\), total ; colonnes : \(C\), \(\overline C\), total).</li><li>On choisit un salarié au hasard. Calcule \(P(C)\).</li><li>Calcule la probabilité qu'un cadre télétravaille (valeur exacte et arrondi à \(10^{-3}\)).</li><li>Les événements \(T\) et \(C\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(2 pts) Télétravailleurs : \(0{,}35\times1200=420\), dont \(0{,}6\times420=252\) cadres et \(168\) non-cadres. Autres : \(1200-420=780\), dont \(0{,}3\times780=234\) cadres et \(546\) non-cadres.
<table class="tv"><tr><td></td><td>\(C\)</td><td>\(\overline C\)</td><td>Total</td></tr>
<tr><td>\(T\)</td><td>252</td><td>168</td><td>420</td></tr>
<tr><td>\(\overline T\)</td><td>234</td><td>546</td><td>780</td></tr>
<tr><td>Total</td><td>486</td><td>714</td><td>1200</td></tr></table></li>
<li>(1 pt) \(P(C)=\frac{486}{1200}=0{,}405\).</li>
<li>(1 pt) \(P_C(T)=\frac{252}{486}=\frac{14}{27}\approx0{,}519\).</li>
<li>(1 pt) \(P(T\cap C)=\frac{252}{1200}=0{,}21\) et \(P(T)\times P(C)=0{,}35\times0{,}405=0{,}14175\neq0{,}21\) : <b>non indépendants</b> (on le voit aussi car \(P_T(C)=0{,}6\neq P(C)=0{,}405\)).</li>
</ol>`},
        { titre: "Exercice 4 — Simuler la météo", points: 4,
          enonce: R`On reprend la situation de l'exercice 1 avec le programme suivant.
<pre><code>from random import random

def simule(N):
    c = 0
    for k in range(N):
        pluie_lundi = random() &lt; 0.3
        if pluie_lundi:
            pluie_mardi = random() &lt; 0.6
        else:
            pluie_mardi = random() &lt; 0.2
        if pluie_mardi:
            c = c + 1
    return c / N</code></pre>
<ol><li>Explique pourquoi <code>pluie_lundi</code> vaut <code>True</code> avec une probabilité \(0{,}3\).</li><li>De quelle valeur <code>simule(100000)</code> sera-t-elle proche ? Justifie.</li><li>Modifie la fonction pour qu'elle estime la probabilité qu'il ait plu lundi sachant qu'il pleut mardi. Quelle valeur doit-on obtenir environ ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <code>random()</code> renvoie un nombre au hasard dans \([0;1[\) ; la probabilité qu'il soit inférieur à \(0{,}3\) est la longueur de \([0;0{,}3[\), soit \(0{,}3\).</li>
<li>(1 pt) La fonction renvoie la fréquence des simulations où il pleut mardi : elle sera proche de \(P(M)=0{,}32\).</li>
<li>(2 pts) Il faut compter les mardis pluvieux, et parmi eux ceux où il a plu lundi :
<pre><code>from random import random

def simule_cond(N):
    nm = 0
    nlm = 0
    for k in range(N):
        pluie_lundi = random() &lt; 0.3
        if pluie_lundi:
            pluie_mardi = random() &lt; 0.6
        else:
            pluie_mardi = random() &lt; 0.2
        if pluie_mardi:
            nm = nm + 1
            if pluie_lundi:
                nlm = nlm + 1
    return nlm / nm</code></pre>
On doit obtenir environ \(P_M(L)=\frac{9}{16}=0{,}5625\).</li>
</ol>`}
      ]},
    { titre: "DS n°9 — Contrôle qualité, vaccin et feux tricolores", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Contrôle en sortie d'usine", points: 6,
          enonce: R`Une usine fabrique des composants électroniques ; 8 % d'entre eux sont défectueux. Avant expédition, chaque composant passe un contrôle qui rejette 97 % des composants défectueux, mais aussi 4 % des composants sans défaut.<br>
On choisit un composant au hasard et on note \(D\) : « il est défectueux » et \(R\) : « il est rejeté par le contrôle ».
<ol><li>Construis l'arbre pondéré.</li><li>Montre que \(P(R)=0{,}1144\).</li><li>Un composant est rejeté. Quelle est la probabilité qu'il soit en fait sans défaut ? (valeur exacte et arrondi à \(10^{-3}\))</li><li>Un composant est accepté. Quelle est la probabilité qu'il soit défectueux ? (valeur exacte et arrondi à \(10^{-4}\)) Commente l'efficacité du contrôle.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(D)=0{,}08\), \(P_D(R)=0{,}97\), \(P_{\overline D}(R)=0{,}04\).`
+ arbre({ A: ['D', bar('D')], B: ['R', bar('R')], p: ['0,08', '0,92'], q: [['0,97', '0,03'], ['0,04', '0,96']] }) + R`</li>
<li>(1,5 pt) \(P(D\cap R)=0{,}08\times0{,}97=0{,}0776\) et \(P(\overline D\cap R)=0{,}92\times0{,}04=0{,}0368\). Probabilités totales : \(P(R)=0{,}0776+0{,}0368=0{,}1144\).</li>
<li>(1,5 pt) \(P_R(\overline D)=\dfrac{0{,}0368}{0{,}1144}=\dfrac{46}{143}\approx0{,}322\) : près d'un composant rejeté sur trois est en réalité bon.</li>
<li>(2 pts) \(P(D\cap\overline R)=0{,}08\times0{,}03=0{,}0024\) et \(P(\overline R)=1-0{,}1144=0{,}8856\).
\(P_{\overline R}(D)=\dfrac{0{,}0024}{0{,}8856}=\dfrac{1}{369}\approx0{,}0027\).<br>
Parmi les composants expédiés, la proportion de défectueux passe de 8 % à environ 0,27 % : le contrôle est très efficace (au prix du rejet de quelques composants bons).</li>
</ol>`},
        { titre: "Exercice 2 — Grippe et vaccination", points: 5,
          enonce: R`Pendant un hiver, dans une population, 40 % des personnes sont vaccinées contre la grippe (événement \(V\)) et 20 % ont eu la grippe (événement \(G\)). Parmi les personnes qui ont eu la grippe, 10 % étaient vaccinées.
<ol><li>Traduis les trois informations par des probabilités.</li><li>Calcule \(P(G\cap V)\).</li><li>Calcule la probabilité qu'une personne vaccinée ait eu la grippe.</li><li>Calcule \(P(\overline V\cap G)\), puis la probabilité qu'une personne non vaccinée ait eu la grippe.</li><li>Compare les deux résultats précédents. Les événements \(V\) et \(G\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(V)=0{,}4\) ; \(P(G)=0{,}2\) ; \(P_G(V)=0{,}1\) (« parmi les personnes qui ont eu la grippe »).</li>
<li>(1 pt) \(P(G\cap V)=P(G)\times P_G(V)=0{,}2\times0{,}1=0{,}02\).</li>
<li>(1 pt) \(P_V(G)=\dfrac{P(G\cap V)}{P(V)}=\dfrac{0{,}02}{0{,}4}=0{,}05\).</li>
<li>(1,5 pt) \(P(\overline V\cap G)=P(G)-P(V\cap G)=0{,}2-0{,}02=0{,}18\) et \(P_{\overline V}(G)=\dfrac{0{,}18}{0{,}6}=0{,}3\).</li>
<li>(0,5 pt) \(\frac{0{,}3}{0{,}05}=6\) : une personne non vaccinée a eu 6 fois plus de risque d'avoir la grippe. \(P_V(G)=0{,}05\neq P(G)=0{,}2\) : <b>non indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Trois feux tricolores", points: 5,
          enonce: R`Sur son trajet, Hugo rencontre trois feux tricolores. Chaque feu est vert à son arrivée avec probabilité \(0{,}4\), et les trois feux fonctionnent de manière indépendante.
<ol><li>Combien de chemins comporte l'arbre représentant la situation ? Quelle est la probabilité de chaque chemin qui comporte exactement \(k\) feux verts ?</li><li>Calcule la probabilité que les trois feux soient verts.</li><li>Calcule la probabilité qu'exactement un feu soit vert.</li><li>Calcule la probabilité qu'au moins un feu soit vert.</li><li>Sachant qu'au moins un feu était vert, quelle est la probabilité que les trois l'aient été ? (arrondir à \(10^{-3}\))</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Chaque feu donne 2 branches (vert \(V\) ou non \(\overline V\)) : \(2^3=8\) chemins. Les épreuves étant indépendantes, un chemin avec \(k\) feux verts a pour probabilité \(0{,}4^k\times0{,}6^{3-k}\).</li>
<li>(1 pt) \(P(VVV)=0{,}4^3=0{,}064\).</li>
<li>(1 pt) Trois chemins : \(V\overline V\,\overline V\), \(\overline V V\overline V\), \(\overline V\,\overline V V\), chacun de probabilité \(0{,}4\times0{,}6^2=0{,}144\). Donc \(P=3\times0{,}144=0{,}432\).</li>
<li>(1 pt) Contraire de « aucun vert » : \(1-0{,}6^3=1-0{,}216=0{,}784\).</li>
<li>(1 pt) Notons \(W\) : « au moins un vert ». L'événement « trois verts » est inclus dans \(W\), donc
\(P_W(VVV)=\dfrac{0{,}064}{0{,}784}=\dfrac{4}{49}\approx0{,}082\).</li>
</ol>`},
        { titre: "Exercice 4 — Monte-Carlo dans un grand carré", points: 4,
          enonce: R`<pre><code>from random import random

def estim(n):
    c = 0
    for i in range(n):
        x = 2 * random() - 1
        y = 2 * random() - 1
        if x**2 + y**2 &lt;= 1:
            c = c + 1
    return 4 * c / n</code></pre>
<ol><li>Dans quel intervalle se trouvent <code>x</code> et <code>y</code> ? Dans quelle figure (et d'aire combien) se trouve le point \((x;y)\) ?</li><li>Que signifie la condition du <code>if</code> ? Explique pourquoi <code>estim(n)</code> donne une estimation de \(\pi\).</li><li>Un appel <code>estim(5000)</code> a renvoyé <code>3.1416</code>. Combien de points vérifiaient la condition ? Un second appel <code>estim(5000)</code> renverra-t-il le même résultat ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <code>random()</code> est dans \([0;1[\), donc <code>2 * random()</code> est dans \([0;2[\) et <code>x</code>, <code>y</code> sont dans \([-1;1[\). Le point est dans le carré de côté 2 centré en \(O\), d'aire \(2\times2=4\).</li>
<li>(1,5 pt) \(x^2+y^2\leqslant1\) signifie que le point est dans le disque de centre \(O\) et de rayon 1, d'aire \(\pi\times1^2=\pi\). La proportion \(\frac cn\) approche \(\frac{\pi}{4}\) (aire du disque sur aire du carré), donc \(\frac{4c}{n}\) approche \(\pi\).</li>
<li>(1,5 pt) \(\frac{4c}{5000}=3{,}1416\) donc \(c=\frac{3{,}1416\times5000}{4}=3927\) points.<br>
Non : les points sont tirés au hasard, chaque appel donne en général une estimation différente.</li>
</ol>`}
      ]},
    { titre: "DS n°10 — Bilan : spécialités, jeux vidéo et dés", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Choix de spécialités", points: 8,
          enonce: R`<b>Partie A.</b> Dans un grand lycée, 40 % des élèves de Première suivent la spécialité SES (événement \(S\)). Parmi eux, 70 % suivent aussi la spécialité mathématiques (événement \(M\)) ; parmi les élèves ne suivant pas SES, 50 % suivent la spécialité mathématiques. On choisit un élève de Première au hasard.
<ol><li>Construis l'arbre pondéré.</li><li>Calcule \(P(M)\).</li><li>Un élève suit la spécialité mathématiques. Quelle est la probabilité qu'il suive SES ? (arrondir à \(10^{-3}\))</li><li>Les événements \(S\) et \(M\) sont-ils indépendants ?</li></ol>
<b>Partie B.</b> On choisit trois élèves de Première au hasard ; le lycée est assez grand pour assimiler ces choix à des tirages indépendants.
<ol start="5"><li>Calcule la probabilité que les trois suivent la spécialité mathématiques, puis qu'au moins un des trois ne la suive pas (arrondir à \(10^{-3}\)).</li></ol>
<b>Partie C.</b> Dans un autre lycée, les proportions 70 % et 50 % sont les mêmes, mais la proportion \(x\) d'élèves suivant SES est inconnue.
<ol start="6"><li>Exprime \(P(M)\) en fonction de \(x\), puis détermine \(x\) sachant que 55 % des élèves suivent la spécialité mathématiques.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(S)=0{,}4\), \(P_S(M)=0{,}7\), \(P_{\overline S}(M)=0{,}5\).`
+ arbre({ A: ['S', bar('S')], B: ['M', bar('M')], p: ['0,4', '0,6'], q: [['0,7', '0,3'], ['0,5', '0,5']] }) + R`</li>
<li>(1,5 pt) Probabilités totales : \(P(M)=0{,}4\times0{,}7+0{,}6\times0{,}5=0{,}28+0{,}3=0{,}58\).</li>
<li>(1 pt) \(P_M(S)=\dfrac{0{,}28}{0{,}58}=\dfrac{14}{29}\approx0{,}483\).</li>
<li>(1 pt) \(P(S)\times P(M)=0{,}4\times0{,}58=0{,}232\neq0{,}28=P(S\cap M)\) : <b>non indépendants</b>.</li>
<li>(1,5 pt) Tirages indépendants : \(P(\text{trois en maths})=0{,}58^3=0{,}195112\approx0{,}195\).<br>
« Au moins un ne suit pas maths » est le contraire : \(1-0{,}195112=0{,}804888\approx0{,}805\).</li>
<li>(1,5 pt) \(P(M)=0{,}7x+0{,}5(1-x)=0{,}2x+0{,}5\). Alors \(0{,}2x+0{,}5=0{,}55\iff0{,}2x=0{,}05\iff x=0{,}25\) : 25 % des élèves suivent SES.</li>
</ol>`},
        { titre: "Exercice 2 — Sur quel écran joues-tu ?", points: 6,
          enonce: R`On a interrogé 800 adolescents qui jouent aux jeux vidéo sur l'écran qu'ils utilisent le plus. 45 % ont moins de 15 ans (événement \(J\)).
<ul><li>Parmi les moins de 15 ans, 50 % jouent surtout sur mobile, 30 % sur console et les autres sur ordinateur.</li><li>Parmi les 15 ans et plus, 40 % jouent surtout sur mobile, 35 % sur console et les autres sur ordinateur.</li></ul>
On note \(B\), \(K\), \(O\) les événements « joue surtout sur mobile / console / ordinateur ».
<ol><li>Construis le tableau croisé des effectifs (lignes : \(J\), \(\overline J\), total ; colonnes : \(B\), \(K\), \(O\), total).</li><li>On choisit un adolescent au hasard. Calcule \(P(B)\) et \(P(\overline J\cap K)\).</li><li>Calcule \(P_O(J)\) et \(P_K(\overline J)\) (arrondir à \(10^{-3}\)).</li><li>Les événements \(O\) et \(J\) sont-ils indépendants ?</li></ol>`,
          correction: R`<ol>
<li>(2 pts) Moins de 15 ans : \(0{,}45\times800=360\), dont \(0{,}5\times360=180\) sur mobile, \(0{,}3\times360=108\) sur console, \(360-180-108=72\) sur ordinateur.<br>
15 ans et plus : \(800-360=440\), dont \(0{,}4\times440=176\) sur mobile, \(0{,}35\times440=154\) sur console, \(440-176-154=110\) sur ordinateur.
<table class="tv"><tr><td></td><td>\(B\)</td><td>\(K\)</td><td>\(O\)</td><td>Total</td></tr>
<tr><td>\(J\)</td><td>180</td><td>108</td><td>72</td><td>360</td></tr>
<tr><td>\(\overline J\)</td><td>176</td><td>154</td><td>110</td><td>440</td></tr>
<tr><td>Total</td><td>356</td><td>262</td><td>182</td><td>800</td></tr></table></li>
<li>(1 pt) \(P(B)=\frac{356}{800}=0{,}445\) et \(P(\overline J\cap K)=\frac{154}{800}=0{,}1925\).</li>
<li>(1,5 pt) \(P_O(J)=\frac{72}{182}=\frac{36}{91}\approx0{,}396\) : environ 39,6 % des joueurs sur ordinateur ont moins de 15 ans.<br>
\(P_K(\overline J)=\frac{154}{262}=\frac{77}{131}\approx0{,}588\).</li>
<li>(1,5 pt) \(P(O)=\frac{182}{800}=0{,}2275\), \(P(J)=0{,}45\) : \(P(O)\times P(J)=0{,}102375\) alors que \(P(O\cap J)=\frac{72}{800}=0{,}09\). <b>Non indépendants</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Deux dés et un programme", points: 6,
          enonce: R`On lance un dé rouge et un dé bleu, équilibrés, à 6 faces. On considère les événements \(A\) : « on obtient un double », \(B\) : « la somme vaut 7 », \(C\) : « la somme est paire » et \(D\) : « le dé rouge donne 3 ».
<ol><li>Calcule \(P(A)\), \(P(B)\) et \(P(C)\).</li><li>Les événements \(A\) et \(B\) sont-ils indépendants ?</li><li>Calcule \(P(A\cap C)\) et \(P_C(A)\). Les événements \(A\) et \(C\) sont-ils indépendants ?</li><li>Montre que \(D\) est indépendant de \(B\), et aussi de \(C\).</li><li>On considère le programme suivant, où <code>randint(1, 6)</code> renvoie un entier au hasard entre 1 et 6.
<pre><code>from random import randint

def estime(N):
    c = 0
    for k in range(N):
        r = randint(1, 6)
        b = randint(1, 6)
        if r + b == 7:
            c = c + 1
    return c / N</code></pre>
De quelle valeur <code>estime(100000)</code> sera-t-elle proche ? Quelle ligne faut-il modifier, et comment, pour estimer \(P(A)\) ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Les deux lancers sont indépendants : 36 issues équiprobables de probabilité \(\frac{1}{36}\).<br>
Doubles : 6 issues, \(P(A)=\frac{6}{36}=\frac16\). Somme 7 : \((1;6),(2;5),(3;4),(4;3),(5;2),(6;1)\), \(P(B)=\frac{6}{36}=\frac16\). Somme paire : les deux dés de même parité, \(3\times3+3\times3=18\) issues, \(P(C)=\frac{18}{36}=\frac12\).</li>
<li>(1 pt) Un double a une somme paire, jamais 7 : \(A\cap B=\varnothing\), \(P(A\cap B)=0\neq\frac{1}{36}=P(A)P(B)\). <b>Non indépendants</b> (incompatibles).</li>
<li>(1 pt) Tout double a une somme paire, donc \(A\subset C\) et \(P(A\cap C)=P(A)=\frac16\). \(P_C(A)=\dfrac{1/6}{1/2}=\dfrac13\neq P(A)=\dfrac16\) : <b>non indépendants</b>.</li>
<li>(1,5 pt) \(P(D)=\frac16\). \(B\cap D=\{(3;4)\}\) : \(P(B\cap D)=\frac{1}{36}=\frac16\times\frac16=P(B)P(D)\) : indépendants.<br>
\(C\cap D=\{(3;1);(3;3);(3;5)\}\) : \(P(C\cap D)=\frac{3}{36}=\frac{1}{12}=\frac12\times\frac16=P(C)P(D)\) : indépendants.</li>
<li>(1,5 pt) La fonction renvoie la fréquence des lancers de somme 7 : elle sera proche de \(P(B)=\frac16\approx0{,}167\).<br>
Pour estimer \(P(A)\), on remplace la condition par <code>if r == b:</code> (on obtiendra aussi environ \(0{,}167\)).</li>
</ol>`}
      ]}
  ]
});
})();
