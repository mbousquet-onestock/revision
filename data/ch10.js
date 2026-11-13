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
      ]}
  ]
});
})();
