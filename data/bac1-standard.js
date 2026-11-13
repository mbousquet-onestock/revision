// Sujets type bac — niveau Standard (10 sujets). Format : voir SCHEMA.md.
(function () {
const R = String.raw;
const BAC = (window.BAC = window.BAC || []);

BAC.push({
 "niveau": "Standard",
 "titre": "Sujet standard n°1",
 "duree": "2 h",
 "calculatrice": false,
 "chapitres": [
  1,
  2,
  3,
  4,
  5,
  10
 ],
 "automatismes": [
  {
   "q": "Que vaut \\(\\dfrac{3}{4}-\\dfrac{1}{6}\\) ?",
   "choix": [
    "\\(\\dfrac{7}{12}\\)",
    "\\(\\dfrac{2}{2}\\)",
    "\\(\\dfrac{1}{12}\\)",
    "\\(\\dfrac{2}{10}\\)"
   ],
   "bonne": 0,
   "explication": "On met au même dénominateur 12 : \\(\\dfrac{9}{12}-\\dfrac{2}{12}=\\dfrac{7}{12}\\). On ne soustrait jamais les dénominateurs entre eux !"
  },
  {
   "q": "Un prix augmente de 20 %, puis baisse de 20 %. Globalement, il a :",
   "choix": [
    "retrouvé sa valeur initiale",
    "baissé de 4 %",
    "augmenté de 4 %",
    "baissé de 2 %"
   ],
   "bonne": 1,
   "explication": "Les coefficients multiplicateurs se multiplient : \\(1{,}2\\times 0{,}8=0{,}96=1-0{,}04\\), soit une baisse de 4 %."
  },
  {
   "q": "Le développement de \\((2x-3)^2\\) est :",
   "choix": [
    "\\(4x^2-9\\)",
    "\\(4x^2+9\\)",
    "\\(4x^2-12x+9\\)",
    "\\(2x^2-12x+9\\)"
   ],
   "bonne": 2,
   "explication": "Identité remarquable \\((a-b)^2=a^2-2ab+b^2\\) avec \\(a=2x\\), \\(b=3\\) : \\(4x^2-12x+9\\)."
  },
  {
   "q": "La solution de l'équation \\(3x-7=2x+5\\) est :",
   "choix": [
    "\\(x=-2\\)",
    "\\(x=2\\)",
    "\\(x=12\\)",
    "\\(x=\\dfrac{12}{5}\\)"
   ],
   "bonne": 2,
   "explication": "On regroupe les \\(x\\) à gauche : \\(3x-2x=5+7\\), donc \\(x=12\\)."
  },
  {
   "q": "La dérivée de \\(f(x)=x^3-5x+2\\) est :",
   "choix": [
    "\\(f'(x)=3x^2-5x\\)",
    "\\(f'(x)=3x^2-5\\)",
    "\\(f'(x)=x^2-5\\)",
    "\\(f'(x)=3x^2-3\\)"
   ],
   "bonne": 1,
   "explication": "\\((x^3)'=3x^2\\), \\((-5x)'=-5\\) et la dérivée d'une constante est nulle : \\(f'(x)=3x^2-5\\)."
  },
  {
   "q": "\\((u_n)\\) est arithmétique de premier terme \\(u_0=4\\) et de raison \\(-3\\). Alors \\(u_{10}=\\)",
   "choix": [
    "\\(-26\\)",
    "\\(-30\\)",
    "\\(-23\\)",
    "\\(34\\)"
   ],
   "bonne": 0,
   "explication": "\\(u_n=u_0+nr\\), donc \\(u_{10}=4+10\\times(-3)=-26\\)."
  },
  {
   "q": "Les racines du trinôme \\(x^2-5x+6\\) sont :",
   "choix": [
    "\\(-2\\) et \\(-3\\)",
    "\\(2\\) et \\(3\\)",
    "\\(1\\) et \\(6\\)",
    "\\(-1\\) et \\(6\\)"
   ],
   "bonne": 1,
   "explication": "Somme \\(=5\\) et produit \\(=6\\) : ce sont 2 et 3. Vérification : \\(4-10+6=0\\) et \\(9-15+6=0\\)."
  },
  {
   "q": "Sur un graphique, une droite passe par les points \\(A(0;2)\\) et \\(B(3;8)\\). Son coefficient directeur est :",
   "choix": [
    "\\(\\dfrac{1}{2}\\)",
    "\\(6\\)",
    "\\(2\\)",
    "\\(3\\)"
   ],
   "bonne": 2,
   "explication": "\\(m=\\dfrac{y_B-y_A}{x_B-x_A}=\\dfrac{8-2}{3-0}=2\\)."
  },
  {
   "q": "\\(A\\) et \\(B\\) sont deux événements indépendants avec \\(P(A)=0{,}3\\) et \\(P(B)=0{,}5\\). Alors \\(P(A\\cap B)=\\)",
   "choix": [
    "\\(0{,}8\\)",
    "\\(0{,}15\\)",
    "\\(0{,}2\\)",
    "\\(0{,}6\\)"
   ],
   "bonne": 1,
   "explication": "Indépendance : \\(P(A\\cap B)=P(A)\\times P(B)=0{,}3\\times 0{,}5=0{,}15\\)."
  },
  {
   "q": "\\(\\dfrac{10^{-3}\\times 10^{5}}{10^{-2}}=\\)",
   "choix": [
    "\\(10^{0}\\)",
    "\\(10^{4}\\)",
    "\\(10^{-4}\\)",
    "\\(10^{10}\\)"
   ],
   "bonne": 1,
   "explication": "\\(10^{-3}\\times 10^{5}=10^{2}\\), puis \\(\\dfrac{10^{2}}{10^{-2}}=10^{2-(-2)}=10^{4}\\)."
  },
  {
   "q": "Après une remise de 25 %, un article coûte 60 €. Son prix initial était :",
   "choix": [
    "75 €",
    "80 €",
    "85 €",
    "45 €"
   ],
   "bonne": 1,
   "explication": "Prix initial \\(\\times 0{,}75=60\\), donc prix initial \\(=\\dfrac{60}{0{,}75}=80\\) €. Piège : ajouter 25 % à 60 € donne 75 €, ce qui est faux."
  },
  {
   "q": "L'ensemble des solutions de \\(x^2\\leqslant 9\\) est :",
   "choix": [
    "\\(]-\\infty;3]\\)",
    "\\([-3;3]\\)",
    "\\(]-\\infty;-3]\\cup[3;+\\infty[\\)",
    "\\([0;3]\\)"
   ],
   "bonne": 1,
   "explication": "\\(x^2-9=(x-3)(x+3)\\leqslant 0\\) entre les racines (le coefficient de \\(x^2\\) est positif) : \\(S=[-3;3]\\)."
  }
 ],
 "exercices": [
  {
   "titre": "Exercice 1 — Suites et Python (calculatrice autorisée)",
   "points": 5,
   "chapitres": [
    3,
    1
   ],
   "enonce": "<p>Une médiathèque en ligne comptait 1 000 abonnés en 2024. Chaque année, 10 % des abonnés ne renouvellent pas leur abonnement et 300 nouvelles personnes s'abonnent.</p>\n<p>On note \\(u_n\\) le nombre d'abonnés en l'année \\(2024+n\\). Ainsi \\(u_0=1000\\) et, pour tout entier naturel \\(n\\), \\(u_{n+1}=0{,}9\\,u_n+300\\).</p>\n<ol>\n<li>Calculer \\(u_1\\) et \\(u_2\\).</li>\n<li>On pose, pour tout \\(n\\), \\(v_n=u_n-3000\\). Montrer que \\((v_n)\\) est une suite géométrique dont on précisera la raison et le premier terme.</li>\n<li>En déduire que, pour tout entier naturel \\(n\\), \\(u_n=3000-2000\\times 0{,}9^{n}\\).</li>\n<li>Calculer \\(u_{n+1}-u_n\\) et en déduire le sens de variation de \\((u_n)\\).</li>\n<li>On considère la fonction Python suivante :\n<pre><code>def seuil():\n    n = 0\n    u = 1000\n    while u &lt;= 2500:\n        u = ..........\n        n = n + 1\n    return n</code></pre>\na) Compléter la ligne manquante.<br>\nb) Quelle valeur renvoie <code>seuil()</code> ? Interpréter ce résultat dans le contexte.</li>\n</ol>",
   "correction": "<ol>\n<li>\\(u_1=0{,}9\\times 1000+300=1200\\) et \\(u_2=0{,}9\\times 1200+300=1380\\). <i>(0,5 pt)</i></li>\n<li>Pour tout \\(n\\) :\n\\[v_{n+1}=u_{n+1}-3000=0{,}9\\,u_n+300-3000=0{,}9\\,u_n-2700=0{,}9\\,(u_n-3000)=0{,}9\\,v_n.\\]\nDonc \\((v_n)\\) est géométrique de raison \\(q=0{,}9\\) et de premier terme \\(v_0=u_0-3000=-2000\\). <i>(1 pt : 0,75 pour le calcul, 0,25 pour \\(v_0\\))</i></li>\n<li>On en déduit \\(v_n=v_0\\times q^n=-2000\\times 0{,}9^n\\), puis \\(u_n=v_n+3000=3000-2000\\times 0{,}9^n\\). <i>(0,5 pt)</i></li>\n<li>\\[u_{n+1}-u_n=-2000\\times 0{,}9^{n+1}+2000\\times 0{,}9^{n}=2000\\times 0{,}9^{n}\\,(1-0{,}9)=200\\times 0{,}9^{n}.\\]\nComme \\(0{,}9^n\\gt 0\\), on a \\(u_{n+1}-u_n\\gt 0\\) pour tout \\(n\\) : la suite \\((u_n)\\) est <b>strictement croissante</b>. <i>(1 pt)</i></li>\n<li>a) La ligne manquante est <code>u = 0.9*u + 300</code>. <i>(0,5 pt)</i><br>\nb) La boucle s'arrête dès que \\(u_n\\gt 2500\\). À la calculatrice : \\(u_{13}=3000-2000\\times 0{,}9^{13}\\approx 2491{,}6\\) et \\(u_{14}\\approx 2542{,}5\\). Donc <code>seuil()</code> renvoie <b>14</b> : c'est en \\(2024+14=2038\\) que la médiathèque dépassera pour la première fois 2 500 abonnés. <i>(1 pt : 0,5 pour 14, 0,5 pour l'interprétation)</i></li>\n</ol>\n<div class=\"astuce\">Pour une suite du type \\(u_{n+1}=a\\,u_n+b\\), l'énoncé te donne presque toujours la suite auxiliaire : il suffit de calculer \\(v_{n+1}\\) et de factoriser par \\(a\\).</div>\n<p><b>Total : 5 points.</b></p>"
  },
  {
   "titre": "Exercice 2 — Second degré et dérivation",
   "points": 5,
   "chapitres": [
    2,
    4,
    5
   ],
   "enonce": "<p><b>Partie A.</b> On considère le trinôme \\(P(x)=-3x^2+12x+15\\).</p>\n<ol>\n<li>Déterminer les racines de \\(P\\).</li>\n<li>Dresser le tableau de signes de \\(P(x)\\) sur \\(\\mathbb{R}\\).</li>\n</ol>\n<p><b>Partie B.</b> Une entreprise fabrique entre 0 et 800 objets par jour. Le bénéfice journalier, en milliers d'euros, pour \\(x\\) centaines d'objets est modélisé par\n\\[B(x)=-x^3+6x^2+15x-10,\\qquad x\\in[0;8].\\]</p>\n<ol start=\"3\">\n<li>Calculer \\(B'(x)\\) et vérifier que \\(B'(x)=P(x)\\).</li>\n<li>Dresser le tableau de variations de \\(B\\) sur \\([0;8]\\).</li>\n<li>Combien d'objets faut-il fabriquer pour obtenir un bénéfice maximal ? Quel est ce bénéfice ?</li>\n<li>Déterminer une équation de la tangente \\(T\\) à la courbe de \\(B\\) au point d'abscisse 1.</li>\n<li>Le bénéfice est-il positif pour une production de 800 objets ? Commenter.</li>\n</ol>",
   "correction": "<p><b>Partie A</b></p>\n<ol>\n<li>\\(\\Delta=12^2-4\\times(-3)\\times 15=144+180=324=18^2\\gt 0\\). Deux racines :\n\\[x_1=\\frac{-12-18}{-6}=5,\\qquad x_2=\\frac{-12+18}{-6}=-1.\\]\nOn peut vérifier : \\(P(x)=-3(x-5)(x+1)\\). <i>(1 pt)</i></li>\n<li>Le coefficient \\(a=-3\\) est négatif : \\(P(x)\\) est du signe de \\(a\\) (négatif) à l'extérieur des racines et positif entre elles.\n<table class=\"tv\"><tr><td>\\(x\\)</td><td>\\(-\\infty\\)</td><td></td><td>\\(-1\\)</td><td></td><td>\\(5\\)</td><td></td><td>\\(+\\infty\\)</td></tr>\n<tr><td>\\(P(x)\\)</td><td></td><td>\\(-\\)</td><td>0</td><td>\\(+\\)</td><td>0</td><td>\\(-\\)</td><td></td></tr></table>\n<i>(0,5 pt)</i></li>\n</ol>\n<p><b>Partie B</b></p>\n<ol start=\"3\">\n<li>\\(B'(x)=-3x^2+12x+15=P(x)\\). <i>(0,5 pt)</i></li>\n<li>Sur \\([0;8]\\), d'après la partie A, \\(B'(x)\\gt 0\\) sur \\([0;5[\\), \\(B'(5)=0\\) et \\(B'(x)\\lt 0\\) sur \\(]5;8]\\).\nOn calcule \\(B(0)=-10\\), \\(B(5)=-125+150+75-10=90\\) et \\(B(8)=-512+384+120-10=-18\\).\n<table class=\"tv\"><tr><td>\\(x\\)</td><td>0</td><td></td><td>5</td><td></td><td>8</td></tr>\n<tr><td>\\(B'(x)\\)</td><td></td><td>\\(+\\)</td><td>0</td><td>\\(-\\)</td><td></td></tr>\n<tr><td>\\(B\\)</td><td>\\(-10\\)</td><td>↗</td><td>\\(90\\)</td><td>↘</td><td>\\(-18\\)</td></tr></table>\n<i>(1 pt : 0,5 signe de \\(B'\\), 0,5 valeurs)</i></li>\n<li>Le maximum de \\(B\\) est atteint pour \\(x=5\\), soit <b>500 objets</b>, et vaut \\(B(5)=90\\), soit un bénéfice de <b>90 000 €</b>. <i>(0,5 pt)</i></li>\n<li>\\(B(1)=-1+6+15-10=10\\) et \\(B'(1)=-3+12+15=24\\). Donc\n\\[T : y=B'(1)(x-1)+B(1)=24(x-1)+10,\\quad\\text{soit } y=24x-14.\\]\n<i>(1 pt)</i></li>\n<li>\\(B(8)=-18\\lt 0\\) : pour 800 objets, l'entreprise perd 18 000 €. Produire trop fait chuter le bénéfice (coûts trop élevés) : il vaut mieux rester autour de 500 objets. <i>(0,5 pt)</i></li>\n</ol>\n<p><b>Total : 5 points.</b></p>"
  },
  {
   "titre": "Exercice 3 — Probabilités conditionnelles",
   "points": 4,
   "chapitres": [
    10
   ],
   "enonce": "<p>Dans un lycée, 30 % des élèves viennent en bus. Parmi les élèves qui viennent en bus, 20 % arrivent en retard un jour donné ; parmi les autres élèves, 5 % arrivent en retard.</p>\n<p>On choisit un élève au hasard. On note \\(B\\) : « l'élève vient en bus » et \\(R\\) : « l'élève est en retard ».</p>\n<ol>\n<li>Représenter la situation par un arbre pondéré.</li>\n<li>Calculer \\(P(B\\cap R)\\).</li>\n<li>Montrer que \\(P(R)=0{,}095\\).</li>\n<li>Un élève est en retard. Quelle est la probabilité qu'il soit venu en bus ? Donner la valeur exacte puis une valeur arrondie au centième.</li>\n<li>Les événements \\(B\\) et \\(R\\) sont-ils indépendants ? Justifier.</li>\n</ol>",
   "correction": "<ol>\n<li>Arbre : une première branche \\(B\\) (0,3) et \\(\\overline{B}\\) (0,7). Après \\(B\\) : \\(R\\) (0,2) et \\(\\overline{R}\\) (0,8). Après \\(\\overline{B}\\) : \\(R\\) (0,05) et \\(\\overline{R}\\) (0,95). <i>(1 pt)</i></li>\n<li>\\(P(B\\cap R)=P(B)\\times P_B(R)=0{,}3\\times 0{,}2=0{,}06\\). <i>(0,5 pt)</i></li>\n<li>\\(B\\) et \\(\\overline{B}\\) forment une partition de l'univers ; d'après la formule des probabilités totales :\n\\[P(R)=P(B\\cap R)+P(\\overline{B}\\cap R)=0{,}06+0{,}7\\times 0{,}05=0{,}06+0{,}035=0{,}095.\\]\n<i>(1 pt)</i></li>\n<li>\\[P_R(B)=\\frac{P(B\\cap R)}{P(R)}=\\frac{0{,}06}{0{,}095}=\\frac{60}{95}=\\frac{12}{19}\\approx 0{,}63.\\]\nPresque deux élèves en retard sur trois sont venus en bus. <i>(1 pt)</i></li>\n<li>\\(P(B)\\times P(R)=0{,}3\\times 0{,}095=0{,}0285\\ne 0{,}06=P(B\\cap R)\\) : les événements \\(B\\) et \\(R\\) ne sont <b>pas indépendants</b> (on le voyait déjà : \\(P_B(R)=0{,}2\\ne P(R)\\)). <i>(0,5 pt)</i></li>\n</ol>\n<p><b>Total : 4 points.</b></p>"
  }
 ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°2", duree: "2 h", calculatrice: false,
  chapitres: [4, 5, 6, 8, 9, 11],
  automatismes: [
    { q: R`Que vaut \(\dfrac{2}{3}+\dfrac{5}{6}\) ?`,
      choix: [R`\(\dfrac{3}{2}\)`, R`\(\dfrac{7}{9}\)`, R`\(\dfrac{7}{6}\)`, R`\(\dfrac{10}{18}\)`], bonne: 0,
      explication: R`Dénominateur commun 6 : \(\dfrac{4}{6}+\dfrac{5}{6}=\dfrac{9}{6}=\dfrac{3}{2}\).` },
    { q: R`15 % de 240 est égal à :`,
      choix: [R`24`, R`36`, R`34`, R`3,6`], bonne: 1,
      explication: R`\(0{,}15\times 240=0{,}1\times 240+0{,}05\times 240=24+12=36\).` },
    { q: R`\(\mathrm{e}^{3}\times \mathrm{e}^{-5}=\)`,
      choix: [R`\(\mathrm{e}^{-15}\)`, R`\(\mathrm{e}^{8}\)`, R`\(\mathrm{e}^{-2}\)`, R`\(\mathrm{e}^{3/5}\)`], bonne: 2,
      explication: R`\(\mathrm{e}^{a}\times\mathrm{e}^{b}=\mathrm{e}^{a+b}\), donc \(\mathrm{e}^{3+(-5)}=\mathrm{e}^{-2}\).` },
    { q: R`Une factorisation de \(x^2-16\) est :`,
      choix: [R`\((x-4)^2\)`, R`\((x-8)(x+8)\)`, R`\(x(x-16)\)`, R`\((x-4)(x+4)\)`], bonne: 3,
      explication: R`Identité remarquable \(a^2-b^2=(a-b)(a+b)\) avec \(a=x\) et \(b=4\).` },
    { q: R`Soit \(f(x)=5x^2-3x+1\). Alors \(f'(2)=\)`,
      choix: [R`\(17\)`, R`\(15\)`, R`\(7\)`, R`\(20\)`], bonne: 0,
      explication: R`\(f'(x)=10x-3\), donc \(f'(2)=20-3=17\).` },
    { q: R`\((u_n)\) est géométrique de premier terme \(u_0=3\) et de raison \(2\). Alors \(u_4=\)`,
      choix: [R`\(24\)`, R`\(48\)`, R`\(11\)`, R`\(96\)`], bonne: 1,
      explication: R`\(u_n=u_0\times q^n\), donc \(u_4=3\times 2^4=3\times 16=48\).` },
    { q: R`\(\cos\left(\dfrac{\pi}{3}\right)=\)`,
      choix: [R`\(\dfrac{\sqrt{3}}{2}\)`, R`\(\dfrac{\sqrt{2}}{2}\)`, R`\(\dfrac{1}{2}\)`, R`\(0\)`], bonne: 2,
      explication: R`Valeur remarquable : \(\cos\left(\dfrac{\pi}{3}\right)=\dfrac12\) (et \(\sin\left(\dfrac{\pi}{3}\right)=\dfrac{\sqrt3}{2}\)).` },
    { q: R`Dans un repère orthonormé, \(\vec u\begin{pmatrix}2\\-1\end{pmatrix}\) et \(\vec v\begin{pmatrix}3\\4\end{pmatrix}\). Alors \(\vec u\cdot\vec v=\)`,
      choix: [R`\(10\)`, R`\(-2\)`, R`\(5\)`, R`\(2\)`], bonne: 3,
      explication: R`\(\vec u\cdot\vec v=xx'+yy'=2\times 3+(-1)\times 4=6-4=2\).` },
    { q: R`Une variable aléatoire \(X\) prend les valeurs 0, 1 et 2 avec les probabilités 0,2 ; 0,5 et 0,3. Alors \(E(X)=\)`,
      choix: [R`\(1\)`, R`\(1{,}1\)`, R`\(0{,}5\)`, R`\(1{,}5\)`], bonne: 1,
      explication: R`\(E(X)=0\times 0{,}2+1\times 0{,}5+2\times 0{,}3=0{,}5+0{,}6=1{,}1\).` },
    { q: R`L'ensemble des solutions de \(2x+3\lt 7\) est :`,
      choix: [R`\(]-\infty;2[\)`, R`\(]2;+\infty[\)`, R`\(]-\infty;5[\)`, R`\(]-\infty;-2[\)`], bonne: 0,
      explication: R`\(2x\lt 4\) puis \(x\lt 2\) (on divise par 2, positif : le sens ne change pas).` },
    { q: R`La droite de coefficient directeur 3 passant par le point \((0;-1)\) a pour équation :`,
      choix: [R`\(y=-x+3\)`, R`\(y=3x+1\)`, R`\(y=3x-1\)`, R`\(y=-3x-1\)`], bonne: 2,
      explication: R`Équation \(y=mx+p\) avec \(m=3\) et l'ordonnée à l'origine \(p=-1\).` },
    { q: R`On lance un dé équilibré à 6 faces. La probabilité d'obtenir un nombre pair ou un 5 est :`,
      choix: [R`\(\dfrac12\)`, R`\(\dfrac23\)`, R`\(\dfrac56\)`, R`\(\dfrac13\)`], bonne: 1,
      explication: R`Issues favorables : 2, 4, 6 et 5, soit 4 issues sur 6 : \(\dfrac46=\dfrac23\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Fonction exponentielle et dérivation", points: 5, chapitres: [6, 4, 5],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=(2x-3)\,\mathrm{e}^{x}\). On note \(\mathcal{C}\) sa courbe représentative dans un repère.</p>
<ol>
<li>Calculer \(f(0)\) et \(f\left(\dfrac32\right)\).</li>
<li>Résoudre l'équation \(f(x)=0\), puis étudier le signe de \(f(x)\) sur \(\mathbb{R}\).</li>
<li>Montrer que, pour tout réel \(x\), \(f'(x)=(2x-1)\,\mathrm{e}^{x}\).</li>
<li>Étudier le signe de \(f'(x)\) et dresser le tableau de variations de \(f\) sur \(\mathbb{R}\) (on ne demande pas les limites). Préciser la valeur exacte du minimum.</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse 0.</li>
</ol>`,
      correction: R`<ol>
<li>\(f(0)=(0-3)\,\mathrm{e}^{0}=-3\times 1=-3\) et \(f\left(\dfrac32\right)=(3-3)\,\mathrm{e}^{3/2}=0\). <i>(0,5 pt)</i></li>
<li>Pour tout réel \(x\), \(\mathrm{e}^{x}\gt 0\). Donc \(f(x)=0\iff 2x-3=0\iff x=\dfrac32\). L'unique solution est \(\dfrac32\).<br>
De plus \(f(x)\) est du signe de \(2x-3\) : \(f(x)\lt 0\) sur \(\left]-\infty;\dfrac32\right[\) et \(f(x)\gt 0\) sur \(\left]\dfrac32;+\infty\right[\). <i>(1 pt)</i></li>
<li>\(f=uv\) avec \(u(x)=2x-3\), \(u'(x)=2\), \(v(x)=\mathrm{e}^{x}\), \(v'(x)=\mathrm{e}^{x}\). Donc
\[f'(x)=2\,\mathrm{e}^{x}+(2x-3)\,\mathrm{e}^{x}=(2+2x-3)\,\mathrm{e}^{x}=(2x-1)\,\mathrm{e}^{x}.\]
<i>(1 pt)</i></li>
<li>Comme \(\mathrm{e}^{x}\gt 0\), \(f'(x)\) a le signe de \(2x-1\), qui s'annule en \(x=\dfrac12\).
\[f\left(\tfrac12\right)=(1-3)\,\mathrm{e}^{1/2}=-2\,\mathrm{e}^{1/2}=-2\sqrt{\mathrm{e}}.\]
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(\frac12\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-2\sqrt{\mathrm{e}}\)</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \(\mathbb{R}\) est \(-2\sqrt{\mathrm{e}}\), atteint en \(x=\dfrac12\). <i>(1,5 pt : 0,5 signe de \(f'\), 0,5 tableau, 0,5 minimum)</i></li>
<li>\(f(0)=-3\) et \(f'(0)=(0-1)\,\mathrm{e}^{0}=-1\). Donc
\[T : y=f'(0)(x-0)+f(0),\quad\text{soit } y=-x-3.\]
<i>(1 pt)</i></li>
</ol>
<div class="astuce">Pour étudier le signe d'une expression du type \((ax+b)\,\mathrm{e}^{x}\), retiens que \(\mathrm{e}^{x}\) est toujours strictement positif : seul le facteur \(ax+b\) compte.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Variable aléatoire : un jeu de fête foraine", points: 5, chapitres: [11],
      enonce: R`<p>Dans un stand de fête foraine, une urne contient 10 boules indiscernables au toucher : 1 rouge, 3 vertes et 6 blanches. Pour jouer, on paie 2 € puis on tire une boule au hasard :</p>
<ul><li>si elle est rouge, on reçoit 10 € ;</li><li>si elle est verte, on reçoit 3 € ;</li><li>si elle est blanche, on ne reçoit rien.</li></ul>
<p>On note \(G\) la variable aléatoire égale au <b>gain algébrique</b> du joueur (somme reçue moins la mise).</p>
<ol>
<li>Justifier que \(G\) prend les valeurs \(-2\), \(1\) et \(8\).</li>
<li>Donner la loi de probabilité de \(G\) sous forme de tableau.</li>
<li>Calculer \(P(G\gt 0)\) et interpréter.</li>
<li>Calculer l'espérance \(E(G)\). Le jeu est-il favorable au joueur ?</li>
<li>Calculer la variance \(V(G)\).</li>
<li>Le forain souhaite rendre le jeu équitable en modifiant uniquement la somme reçue pour une boule rouge. Quelle somme doit-il alors donner ?</li>
</ol>`,
      correction: R`<ol>
<li>Boule rouge : \(10-2=8\) ; boule verte : \(3-2=1\) ; boule blanche : \(0-2=-2\). <i>(0,5 pt)</i></li>
<li>Les tirages sont équiprobables (10 boules) :
<table class="tv"><tr><td>\(g\)</td><td>\(-2\)</td><td>\(1\)</td><td>\(8\)</td></tr>
<tr><td>\(P(G=g)\)</td><td>\(0{,}6\)</td><td>\(0{,}3\)</td><td>\(0{,}1\)</td></tr></table>
On vérifie : \(0{,}6+0{,}3+0{,}1=1\). <i>(1 pt)</i></li>
<li>\(P(G\gt 0)=P(G=1)+P(G=8)=0{,}3+0{,}1=0{,}4\) : le joueur a 40 % de chances de gagner de l'argent. <i>(0,5 pt)</i></li>
<li>\[E(G)=-2\times 0{,}6+1\times 0{,}3+8\times 0{,}1=-1{,}2+0{,}3+0{,}8=-0{,}1.\]
\(E(G)\lt 0\) : le jeu est <b>défavorable</b> au joueur ; sur un grand nombre de parties, il perd en moyenne 10 centimes par partie. <i>(1 pt)</i></li>
<li>Avec la formule de König-Huygens :
\[E(G^2)=4\times 0{,}6+1\times 0{,}3+64\times 0{,}1=2{,}4+0{,}3+6{,}4=9{,}1\]
\[V(G)=E(G^2)-E(G)^2=9{,}1-0{,}01=9{,}09.\]
<i>(1 pt)</i></li>
<li>Notons \(a\) le gain algébrique en cas de boule rouge. Le jeu est équitable si \(E(G)=0\) :
\[-1{,}2+0{,}3+0{,}1\,a=0\iff 0{,}1\,a=0{,}9\iff a=9.\]
Le gain algébrique doit être 9 €, donc le forain doit donner \(9+2=\) <b>11 €</b> pour une boule rouge. <i>(1 pt)</i></li>
</ol>
<div class="warn">Ne confonds pas la somme reçue et le gain algébrique : il faut toujours retirer la mise.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Produit scalaire et géométrie repérée", points: 4, chapitres: [8, 9],
      enonce: R`<p>Dans un repère orthonormé, on considère les points \(A(1;1)\), \(B(5;3)\) et \(C(0;3)\).</p>
<ol>
<li>Calculer les coordonnées des vecteurs \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\), puis le produit scalaire \(\overrightarrow{AB}\cdot\overrightarrow{AC}\). Que peut-on en déduire pour le triangle \(ABC\) ?</li>
<li>Calculer les longueurs \(AB\) et \(AC\), puis l'aire du triangle \(ABC\).</li>
<li>Soit \(I\) le milieu de \([BC]\). Calculer les coordonnées de \(I\) et la longueur \(BC\). En déduire une équation du cercle \(\mathcal{C}\) circonscrit au triangle \(ABC\).</li>
<li>Déterminer une équation cartésienne de la droite \(d\) passant par \(A\) et de vecteur normal \(\overrightarrow{AB}\). Vérifier que \(C\) appartient à \(d\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}\begin{pmatrix}5-1\\3-1\end{pmatrix}=\begin{pmatrix}4\\2\end{pmatrix}\) et \(\overrightarrow{AC}\begin{pmatrix}0-1\\3-1\end{pmatrix}=\begin{pmatrix}-1\\2\end{pmatrix}\).
\[\overrightarrow{AB}\cdot\overrightarrow{AC}=4\times(-1)+2\times 2=-4+4=0.\]
Les vecteurs sont orthogonaux : le triangle \(ABC\) est <b>rectangle en \(A\)</b>. <i>(1 pt)</i></li>
<li>\(AB=\sqrt{4^2+2^2}=\sqrt{20}=2\sqrt5\) et \(AC=\sqrt{(-1)^2+2^2}=\sqrt5\).
Le triangle étant rectangle en \(A\) : \(\mathcal{A}=\dfrac{AB\times AC}{2}=\dfrac{2\sqrt5\times\sqrt5}{2}=\dfrac{10}{2}=5\) unités d'aire. <i>(1 pt)</i></li>
<li>\(I\left(\dfrac{5+0}{2};\dfrac{3+3}{2}\right)=\left(\dfrac52;3\right)\) et \(\overrightarrow{BC}\begin{pmatrix}-5\\0\end{pmatrix}\), donc \(BC=5\).<br>
Le triangle est rectangle en \(A\) : le centre de son cercle circonscrit est le milieu \(I\) de l'hypoténuse \([BC]\), et le rayon vaut \(\dfrac{BC}{2}=\dfrac52\). D'où
\[\mathcal{C} : \left(x-\frac52\right)^2+(y-3)^2=\frac{25}{4}.\]
<i>(1 pt)</i></li>
<li>Un vecteur normal \(\begin{pmatrix}4\\2\end{pmatrix}\) donne une équation \(4x+2y+c=0\). Comme \(A\in d\) : \(4+2+c=0\), donc \(c=-6\).
\[d : 4x+2y-6=0,\quad\text{ou encore } 2x+y-3=0.\]
Pour \(C(0;3)\) : \(2\times 0+3-3=0\), donc \(C\in d\). C'était prévisible : \(d\) est la perpendiculaire à \((AB)\) passant par \(A\), c'est-à-dire la droite \((AC)\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°3", duree: "2 h", calculatrice: false,
  chapitres: [1, 3, 7, 10],
  automatismes: [
    { q: R`\(\dfrac35 : \dfrac{3}{10}=\)`,
      choix: [R`\(\dfrac{9}{50}\)`, R`\(2\)`, R`\(\dfrac12\)`, R`\(\dfrac65\)`], bonne: 1,
      explication: R`Diviser par une fraction, c'est multiplier par son inverse : \(\dfrac35\times\dfrac{10}{3}=\dfrac{30}{15}=2\).` },
    { q: R`Un prix passe de 50 € à 65 €. Il a augmenté de :`,
      choix: [R`15 %`, R`23 %`, R`30 %`, R`65 %`], bonne: 2,
      explication: R`Taux d'évolution : \(\dfrac{65-50}{50}=\dfrac{15}{50}=0{,}3\), soit 30 %.` },
    { q: R`Un angle de 150° mesure, en radians :`,
      choix: [R`\(\dfrac{5\pi}{6}\)`, R`\(\dfrac{3\pi}{4}\)`, R`\(\dfrac{2\pi}{3}\)`, R`\(\dfrac{5\pi}{3}\)`], bonne: 0,
      explication: R`\(180^\circ\) correspond à \(\pi\) rad, donc \(150^\circ\) correspond à \(\dfrac{150}{180}\pi=\dfrac{5\pi}{6}\).` },
    { q: R`\(\sin\left(\dfrac{\pi}{6}\right)=\)`,
      choix: [R`\(\dfrac{\sqrt3}{2}\)`, R`\(-\dfrac12\)`, R`\(0\)`, R`\(\dfrac12\)`], bonne: 3,
      explication: R`Valeur remarquable : \(\sin\left(\dfrac{\pi}{6}\right)=\dfrac12\) et \(\cos\left(\dfrac{\pi}{6}\right)=\dfrac{\sqrt3}{2}\).` },
    { q: R`La somme \(1+2+3+\dots+100\) vaut :`,
      choix: [R`\(5000\)`, R`\(5050\)`, R`\(10100\)`, R`\(4950\)`], bonne: 1,
      explication: R`\(1+2+\dots+n=\dfrac{n(n+1)}{2}\), donc \(\dfrac{100\times 101}{2}=5050\).` },
    { q: R`La suite définie par \(u_n=3n-2\) est :`,
      choix: [R`géométrique de raison 3`, R`arithmétique de raison 3`, R`arithmétique de raison \(-2\)`, R`ni arithmétique ni géométrique`], bonne: 1,
      explication: R`\(u_{n+1}-u_n=3(n+1)-2-(3n-2)=3\) : c'est une constante, la suite est arithmétique de raison 3 (et \(u_0=-2\)).` },
    { q: R`Les solutions de l'équation \(2x^2-8=0\) sont :`,
      choix: [R`\(-4\) et \(4\)`, R`\(2\) seulement`, R`\(-2\) et \(2\)`, R`il n'y en a pas`], bonne: 2,
      explication: R`\(2x^2=8\iff x^2=4\iff x=-2\) ou \(x=2\).` },
    { q: R`\(P(A)=0{,}4\) et \(P_A(B)=0{,}5\). Alors \(P(A\cap B)=\)`,
      choix: [R`\(0{,}9\)`, R`\(0{,}2\)`, R`\(0{,}8\)`, R`\(0{,}1\)`], bonne: 1,
      explication: R`\(P(A\cap B)=P(A)\times P_A(B)=0{,}4\times 0{,}5=0{,}2\).` },
    { q: R`En Python, après <code>L = [2, 5, 8]</code> puis <code>L.append(11)</code>, que vaut <code>len(L)</code> ?`,
      choix: [R`4`, R`3`, R`11`, R`26`], bonne: 0,
      explication: R`<code>append</code> ajoute un élément à la fin : <code>L</code> vaut <code>[2, 5, 8, 11]</code> et contient 4 éléments.` },
    { q: R`Le développement de \((x+3)(x-2)\) est :`,
      choix: [R`\(x^2-6\)`, R`\(x^2-x-6\)`, R`\(x^2+5x-6\)`, R`\(x^2+x-6\)`], bonne: 3,
      explication: R`\(x^2-2x+3x-6=x^2+x-6\).` },
    { q: R`\(2^{5}\times 2^{-3}=\)`,
      choix: [R`\(4\)`, R`\(2^{-15}\)`, R`\(\dfrac14\)`, R`\(2^{8}\)`], bonne: 0,
      explication: R`\(2^{5}\times 2^{-3}=2^{5-3}=2^2=4\).` },
    { q: R`Si \(P(A)=0{,}35\), alors \(P(\overline{A})=\)`,
      choix: [R`\(0{,}35\)`, R`\(0{,}75\)`, R`\(0{,}65\)`, R`\(-0{,}35\)`], bonne: 2,
      explication: R`\(P(\overline{A})=1-P(A)=1-0{,}35=0{,}65\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suite arithmétique et Python", points: 5, chapitres: [3, 1],
      enonce: R`<p>Léa décide d'économiser pour s'acheter un ordinateur. Le premier mois, elle met 50 € de côté ; ensuite, chaque mois, elle met de côté 10 € de plus que le mois précédent.</p>
<p>On note \(u_n\) la somme, en euros, mise de côté le \(n\)-ième mois. Ainsi \(u_1=50\).</p>
<ol>
<li>Calculer \(u_2\) et \(u_3\).</li>
<li>Quelle est la nature de la suite \((u_n)\) ? Exprimer \(u_n\) en fonction de \(n\).</li>
<li>Au cours de quel mois Léa mettra-t-elle de côté exactement 200 € ?</li>
<li>Calculer la somme totale économisée au bout de 12 mois.</li>
<li>On s'intéresse au programme Python suivant :
<pre><code>L = [10*n + 40 for n in range(1, 6)]

def mois():
    n = 1
    u = 50
    total = 50
    while total &lt; 2000:
        n = n + 1
        u = ..........
        total = total + u
    return n</code></pre>
a) Quel est le contenu de la liste <code>L</code> ? Que représente-t-elle ?<br>
b) Compléter la ligne manquante de la fonction <code>mois</code>.<br>
c) Montrer que la somme totale économisée au bout de \(n\) mois est \(S_n=5n^2+45n\). En déduire la valeur renvoyée par <code>mois()</code> et l'interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>\(u_2=50+10=60\) et \(u_3=60+10=70\). <i>(0,5 pt)</i></li>
<li>Chaque mois, on ajoute 10 au terme précédent : \(u_{n+1}=u_n+10\). La suite \((u_n)\) est <b>arithmétique de raison \(r=10\)</b> et de premier terme \(u_1=50\). Donc
\[u_n=u_1+(n-1)r=50+10(n-1)=10n+40.\]
<i>(1 pt)</i></li>
<li>\(u_n=200\iff 10n+40=200\iff 10n=160\iff n=16\). C'est le <b>16e mois</b>. <i>(0,5 pt)</i></li>
<li>\(u_{12}=120+40=160\). Pour une suite arithmétique, la somme de termes consécutifs vaut nombre de termes \(\times\dfrac{\text{premier}+\text{dernier}}{2}\) :
\[S_{12}=12\times\frac{50+160}{2}=12\times 105=1260.\]
Au bout de 12 mois, Léa a économisé <b>1 260 €</b>. <i>(1 pt)</i></li>
<li>a) <code>range(1, 6)</code> donne \(n=1,2,3,4,5\), donc <code>L = [50, 60, 70, 80, 90]</code> : ce sont les cinq premiers termes \(u_1,\dots,u_5\), c'est-à-dire les sommes mises de côté les cinq premiers mois. <i>(0,5 pt)</i><br>
b) La ligne manquante est <code>u = u + 10</code>. <i>(0,5 pt)</i><br>
c) \(S_n=n\times\dfrac{u_1+u_n}{2}=n\times\dfrac{50+10n+40}{2}=n\times\dfrac{10n+90}{2}=n(5n+45)=5n^2+45n\).<br>
La fonction renvoie le premier \(n\) tel que \(S_n\geqslant 2000\). Or \(S_{15}=5\times 225+45\times 15=1125+675=1800\lt 2000\) et \(S_{16}=5\times 256+45\times 16=1280+720=2000\). La fonction renvoie donc <b>16</b> : c'est au bout de 16 mois que Léa aura économisé au moins 2 000 €. <i>(1 pt)</i></li>
</ol>
<div class="astuce">Somme de termes consécutifs d'une suite arithmétique : \(\text{(nombre de termes)}\times\dfrac{\text{premier terme}+\text{dernier terme}}{2}\).</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Trigonométrie", points: 5, chapitres: [7],
      enonce: R`<ol>
<li>a) Convertir \(150^\circ\) en radians.<br>b) Convertir \(\dfrac{7\pi}{4}\) radians en degrés.</li>
<li>Donner les valeurs exactes de \(\cos\left(\dfrac{5\pi}{6}\right)\), \(\sin\left(\dfrac{5\pi}{6}\right)\), \(\cos\left(-\dfrac{\pi}{3}\right)\) et \(\sin\left(\dfrac{7\pi}{6}\right)\). On pourra s'aider du cercle trigonométrique.</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'équation \(\cos x=\dfrac12\).</li>
<li>Résoudre dans \([0;2\pi[\) l'équation \(\sin x=-\dfrac{\sqrt2}{2}\).</li>
<li>Pour tout réel \(x\), on pose \(A(x)=\cos(\pi-x)+\sin\left(\dfrac{\pi}{2}-x\right)+\cos(-x)+\sin(\pi+x)\).<br>
Montrer que \(A(x)=\cos x-\sin x\), puis calculer \(A\left(\dfrac{\pi}{4}\right)\).</li>
<li>Soit \(a\) un réel de \(\left[-\dfrac{\pi}{2};0\right]\) tel que \(\cos a=\dfrac35\). Calculer \(\sin a\).</li>
</ol>`,
      correction: R`<ol>
<li>a) \(150^\circ=\dfrac{150}{180}\pi=\dfrac{5\pi}{6}\) rad. b) \(\dfrac{7\pi}{4}\) rad \(=\dfrac74\times 180^\circ=315^\circ\). <i>(0,5 pt)</i></li>
<li>\(\dfrac{5\pi}{6}=\pi-\dfrac{\pi}{6}\) : son point est le symétrique de celui de \(\dfrac{\pi}{6}\) par rapport à l'axe des ordonnées, donc
\(\cos\left(\dfrac{5\pi}{6}\right)=-\dfrac{\sqrt3}{2}\) et \(\sin\left(\dfrac{5\pi}{6}\right)=\dfrac12\).<br>
Le cosinus est pair : \(\cos\left(-\dfrac{\pi}{3}\right)=\cos\left(\dfrac{\pi}{3}\right)=\dfrac12\).<br>
\(\dfrac{7\pi}{6}=\pi+\dfrac{\pi}{6}\) : point symétrique de celui de \(\dfrac{\pi}{6}\) par rapport à l'origine, donc \(\sin\left(\dfrac{7\pi}{6}\right)=-\dfrac12\). <i>(1 pt)</i></li>
<li>Sur le cercle, deux points ont pour abscisse \(\dfrac12\) : ceux associés à \(\dfrac{\pi}{3}\) et \(-\dfrac{\pi}{3}\). Dans \(]-\pi;\pi]\) : \(S=\left\{-\dfrac{\pi}{3};\dfrac{\pi}{3}\right\}\). <i>(0,75 pt)</i></li>
<li>On sait que \(\sin\left(\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}\). Les points d'ordonnée \(-\dfrac{\sqrt2}{2}\) sont associés à \(\pi+\dfrac{\pi}{4}=\dfrac{5\pi}{4}\) et à \(2\pi-\dfrac{\pi}{4}=\dfrac{7\pi}{4}\). Dans \([0;2\pi[\) : \(S=\left\{\dfrac{5\pi}{4};\dfrac{7\pi}{4}\right\}\). <i>(0,75 pt)</i></li>
<li>On utilise les formules des angles associés : \(\cos(\pi-x)=-\cos x\), \(\sin\left(\dfrac{\pi}{2}-x\right)=\cos x\), \(\cos(-x)=\cos x\) et \(\sin(\pi+x)=-\sin x\). Donc
\[A(x)=-\cos x+\cos x+\cos x-\sin x=\cos x-\sin x.\]
Puis \(A\left(\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}-\dfrac{\sqrt2}{2}=0\). <i>(1 pt)</i></li>
<li>Pour tout réel, \(\cos^2 a+\sin^2 a=1\), donc \(\sin^2 a=1-\dfrac{9}{25}=\dfrac{16}{25}\) et \(\sin a=\dfrac45\) ou \(\sin a=-\dfrac45\).<br>
Comme \(a\in\left[-\dfrac{\pi}{2};0\right]\), \(\sin a\leqslant 0\). Donc \(\sin a=-\dfrac45\). <i>(1 pt)</i></li>
</ol>
<div class="warn">Une équation \(\cos x=k\) a en général <b>deux</b> solutions par tour : n'oublie pas la solution « symétrique ».</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Probabilités conditionnelles et tableau croisé", points: 4, chapitres: [10],
      enonce: R`<p>Dans un lycée, on a interrogé les 200 élèves de Terminale sur le choix de l'option « mathématiques expertes ». Les résultats sont les suivants :</p>
<table class="tv"><tr><td></td><td>Filles</td><td>Garçons</td><td>Total</td></tr>
<tr><td>Maths expertes</td><td>24</td><td>36</td><td>60</td></tr>
<tr><td>Pas maths expertes</td><td>86</td><td>54</td><td>140</td></tr>
<tr><td>Total</td><td>110</td><td>90</td><td>200</td></tr></table>
<p>On choisit un élève de Terminale au hasard. On note \(E\) : « l'élève suit maths expertes » et \(F\) : « l'élève est une fille ».</p>
<ol>
<li>Calculer \(P(E)\), \(P(F)\) et \(P(E\cap F)\).</li>
<li>Calculer \(P(E\cup F)\).</li>
<li>a) On choisit une fille au hasard. Quelle est la probabilité qu'elle suive maths expertes ?<br>
b) Calculer \(P_E(F)\) et interpréter ce résultat.</li>
<li>Les événements \(E\) et \(F\) sont-ils indépendants ? Justifier.</li>
</ol>`,
      correction: R`<ol>
<li>\(P(E)=\dfrac{60}{200}=0{,}3\), \(P(F)=\dfrac{110}{200}=0{,}55\) et \(P(E\cap F)=\dfrac{24}{200}=0{,}12\). <i>(1 pt)</i></li>
<li>\(P(E\cup F)=P(E)+P(F)-P(E\cap F)=0{,}3+0{,}55-0{,}12=0{,}73\).<br>
Vérification : seuls les 54 garçons ne suivant pas maths expertes ne sont ni dans \(E\) ni dans \(F\), et \(\dfrac{200-54}{200}=\dfrac{146}{200}=0{,}73\). <i>(0,5 pt)</i></li>
<li>a) On cherche \(P_F(E)=\dfrac{P(E\cap F)}{P(F)}=\dfrac{24}{110}=\dfrac{12}{55}\approx 0{,}22\). <i>(0,75 pt)</i><br>
b) \(P_E(F)=\dfrac{P(E\cap F)}{P(E)}=\dfrac{24}{60}=0{,}4\) : parmi les élèves qui suivent maths expertes, 40 % sont des filles. <i>(0,75 pt)</i></li>
<li>\(P(E)\times P(F)=0{,}3\times 0{,}55=0{,}165\) et \(P(E\cap F)=0{,}12\). Comme \(0{,}165\ne 0{,}12\), les événements \(E\) et \(F\) <b>ne sont pas indépendants</b>. <i>(1 pt)</i></li>
</ol>
<div class="astuce">Avec un tableau croisé, une probabilité conditionnelle se lit directement : \(P_F(E)\) = effectif de \(E\cap F\) divisé par l'effectif de la <b>ligne ou colonne</b> de \(F\).</div>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°4", duree: "2 h", calculatrice: false,
  chapitres: [2, 4, 5, 8, 9],
  automatismes: [
    { q: R`\(1-\dfrac25\times\dfrac54=\)`,
      choix: [R`\(\dfrac12\)`, R`\(\dfrac34\)`, R`\(-\dfrac14\)`, R`\(\dfrac{3}{20}\)`], bonne: 0,
      explication: R`La multiplication est prioritaire : \(\dfrac25\times\dfrac54=\dfrac{10}{20}=\dfrac12\), puis \(1-\dfrac12=\dfrac12\).` },
    { q: R`Le coefficient multiplicateur associé à une baisse de 30 % est :`,
      choix: [R`\(0{,}3\)`, R`\(1{,}3\)`, R`\(0{,}7\)`, R`\(-0{,}3\)`], bonne: 2,
      explication: R`Baisser de 30 %, c'est multiplier par \(1-\dfrac{30}{100}=0{,}7\).` },
    { q: R`La parabole d'équation \(y=(x-2)^2+5\) a pour sommet le point :`,
      choix: [R`\(S(-2;5)\)`, R`\(S(2;5)\)`, R`\(S(2;-5)\)`, R`\(S(5;2)\)`], bonne: 1,
      explication: R`Forme canonique \(a(x-\alpha)^2+\beta\) avec \(\alpha=2\) et \(\beta=5\) : le sommet est \(S(\alpha;\beta)=(2;5)\).` },
    { q: R`Le trinôme \(x^2+x+1\) :`,
      choix: [R`admet deux racines distinctes`, R`admet une racine double`, R`n'admet aucune racine réelle`, R`s'annule en \(-1\)`], bonne: 2,
      explication: R`\(\Delta=1^2-4\times1\times1=-3\lt 0\) : pas de racine réelle.` },
    { q: R`Soit \(g(x)=\dfrac1x\) sur \(]0;+\infty[\). Alors \(g'(2)=\)`,
      choix: [R`\(\dfrac12\)`, R`\(-\dfrac14\)`, R`\(-\dfrac12\)`, R`\(\dfrac14\)`], bonne: 1,
      explication: R`\(g'(x)=-\dfrac{1}{x^2}\), donc \(g'(2)=-\dfrac14\).` },
    { q: R`La dérivée de \(h(x)=(3x+1)^2\) est :`,
      choix: [R`\(2(3x+1)\)`, R`\(3(3x+1)\)`, R`\(9x^2\)`, R`\(6(3x+1)\)`], bonne: 3,
      explication: R`\((u^2)'=2u'u\) avec \(u=3x+1\), \(u'=3\) : \(h'(x)=2\times 3\times(3x+1)=6(3x+1)\). On peut vérifier en développant : \(h(x)=9x^2+6x+1\), \(h'(x)=18x+6\).` },
    { q: R`Dans un repère orthonormé, le cercle de centre \(\Omega(1;-2)\) et de rayon 3 a pour équation :`,
      choix: [R`\((x+1)^2+(y-2)^2=9\)`, R`\((x-1)^2+(y+2)^2=3\)`, R`\((x-1)^2+(y+2)^2=9\)`, R`\((x-1)^2+(y-2)^2=9\)`], bonne: 2,
      explication: R`Équation \((x-x_\Omega)^2+(y-y_\Omega)^2=r^2\) : \((x-1)^2+(y+2)^2=9\). Attention : le second membre est \(r^2\), pas \(r\).` },
    { q: R`Un vecteur directeur de la droite d'équation \(2x-3y+5=0\) est :`,
      choix: [R`\(\begin{pmatrix}2\\-3\end{pmatrix}\)`, R`\(\begin{pmatrix}3\\2\end{pmatrix}\)`, R`\(\begin{pmatrix}-3\\2\end{pmatrix}\)`, R`\(\begin{pmatrix}2\\3\end{pmatrix}\)`], bonne: 1,
      explication: R`Pour \(ax+by+c=0\), un vecteur directeur est \(\begin{pmatrix}-b\\a\end{pmatrix}=\begin{pmatrix}3\\2\end{pmatrix}\). (Le vecteur \(\begin{pmatrix}2\\-3\end{pmatrix}\) est un vecteur <b>normal</b>.)` },
    { q: R`Dans un repère orthonormé, la norme du vecteur \(\vec u\begin{pmatrix}3\\-4\end{pmatrix}\) est :`,
      choix: [R`\(5\)`, R`\(7\)`, R`\(25\)`, R`\(1\)`], bonne: 0,
      explication: R`\(\|\vec u\|=\sqrt{3^2+(-4)^2}=\sqrt{25}=5\).` },
    { q: R`La moyenne de la série 8 ; 12 ; 15 ; 9 est :`,
      choix: [R`10`, R`11`, R`12`, R`44`], bonne: 1,
      explication: R`\(\dfrac{8+12+15+9}{4}=\dfrac{44}{4}=11\).` },
    { q: R`L'écriture scientifique de \(0{,}005\) est :`,
      choix: [R`\(5\times 10^{3}\)`, R`\(5\times 10^{-2}\)`, R`\(0{,}5\times 10^{-2}\)`, R`\(5\times 10^{-3}\)`], bonne: 3,
      explication: R`\(0{,}005=\dfrac{5}{1000}=5\times 10^{-3}\) ; en écriture scientifique, le premier facteur est entre 1 et 10.` },
    { q: R`Soit \(f(x)=x^2-4x\). Alors \(f(-1)=\)`,
      choix: [R`\(-3\)`, R`\(5\)`, R`\(-5\)`, R`\(3\)`], bonne: 1,
      explication: R`\(f(-1)=(-1)^2-4\times(-1)=1+4=5\). Attention aux parenthèses : \((-1)^2=1\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Second degré", points: 4, chapitres: [2],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=2x^2-4x-6\), et \(\mathcal{P}\) sa courbe représentative.</p>
<ol>
<li>Montrer que, pour tout réel \(x\), \(f(x)=2(x-1)^2-8\).</li>
<li>En déduire le tableau de variations de \(f\) et les coordonnées du sommet de \(\mathcal{P}\).</li>
<li>Déterminer les racines de \(f\) et en déduire une forme factorisée de \(f(x)\).</li>
<li>Résoudre l'inéquation \(f(x)\leqslant 0\).</li>
<li>Déterminer les abscisses des points de \(\mathcal{P}\) d'ordonnée \(-6\).</li>
</ol>`,
      correction: R`<ol>
<li>On développe : \(2(x-1)^2-8=2(x^2-2x+1)-8=2x^2-4x+2-8=2x^2-4x-6=f(x)\). <i>(1 pt)</i></li>
<li>Forme canonique avec \(a=2\gt 0\), \(\alpha=1\), \(\beta=-8\) : \(f\) est décroissante sur \(]-\infty;1]\) puis croissante sur \([1;+\infty[\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-8\)</td><td>↗</td><td></td></tr></table>
Le sommet de \(\mathcal{P}\) est \(S(1;-8)\). <i>(0,5 pt)</i></li>
<li>\(\Delta=(-4)^2-4\times 2\times(-6)=16+48=64=8^2\gt 0\). Deux racines :
\[x_1=\frac{4-8}{4}=-1,\qquad x_2=\frac{4+8}{4}=3.\]
Donc \(f(x)=2(x+1)(x-3)\). <i>(1 pt)</i></li>
<li>\(a=2\gt 0\) : \(f(x)\) est négatif entre les racines. \(S=[-1;3]\). <i>(0,75 pt)</i></li>
<li>\(f(x)=-6\iff 2x^2-4x=0\iff 2x(x-2)=0\iff x=0\) ou \(x=2\).<br>
Les points cherchés ont pour abscisses 0 et 2 ; ils sont symétriques par rapport à l'axe de symétrie \(x=1\) de la parabole. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Cercle et tangente dans un repère", points: 5, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère l'ensemble \(\mathcal{C}\) des points \(M(x;y)\) tels que
\[x^2+y^2-4x+2y-20=0.\]</p>
<ol>
<li>Montrer que \(\mathcal{C}\) est un cercle dont on précisera le centre \(\Omega\) et le rayon.</li>
<li>Vérifier que le point \(A(5;3)\) appartient à \(\mathcal{C}\).</li>
<li>Déterminer une équation cartésienne de la tangente \(T\) à \(\mathcal{C}\) en \(A\).</li>
<li>Déterminer les coordonnées des points d'intersection de \(\mathcal{C}\) avec la droite d'équation \(y=3\).</li>
<li>On note \(A'(-1;3)\) et \(B(-1;-5)\).<br>
a) Vérifier que \(B\) appartient à \(\mathcal{C}\) et que \(\Omega\) est le milieu de \([AB]\).<br>
b) Calculer \(\overrightarrow{A'A}\cdot\overrightarrow{A'B}\). Que peut-on en conclure pour le triangle \(AA'B\) ? Était-ce prévisible ?</li>
</ol>`,
      correction: R`<ol>
<li>On fait apparaître des carrés : \(x^2-4x=(x-2)^2-4\) et \(y^2+2y=(y+1)^2-1\). L'équation devient
\[(x-2)^2-4+(y+1)^2-1-20=0\iff(x-2)^2+(y+1)^2=25.\]
\(\mathcal{C}\) est le cercle de centre \(\Omega(2;-1)\) et de rayon \(\sqrt{25}=5\). <i>(1 pt)</i></li>
<li>\(5^2+3^2-4\times 5+2\times 3-20=25+9-20+6-20=0\) : \(A\in\mathcal{C}\). <i>(0,5 pt)</i></li>
<li>La tangente en \(A\) est perpendiculaire au rayon \([\Omega A]\) : \(\overrightarrow{\Omega A}\begin{pmatrix}3\\4\end{pmatrix}\) est un vecteur normal de \(T\). Donc \(T : 3x+4y+c=0\), et \(A\in T\) donne \(15+12+c=0\), soit \(c=-27\).
\[T : 3x+4y-27=0.\]
<i>(1 pt)</i></li>
<li>On remplace \(y\) par 3 : \(x^2+9-4x+6-20=0\iff x^2-4x-5=0\).
\(\Delta=16+20=36\), d'où \(x=\dfrac{4-6}{2}=-1\) ou \(x=\dfrac{4+6}{2}=5\).
Les points d'intersection sont \(A(5;3)\) et \(A'(-1;3)\). <i>(1 pt)</i></li>
<li>a) \((-1)^2+(-5)^2-4\times(-1)+2\times(-5)-20=1+25+4-10-20=0\) : \(B\in\mathcal{C}\).
Le milieu de \([AB]\) a pour coordonnées \(\left(\dfrac{5-1}{2};\dfrac{3-5}{2}\right)=(2;-1)\) : c'est \(\Omega\). <i>(0,5 pt)</i><br>
b) \(\overrightarrow{A'A}\begin{pmatrix}6\\0\end{pmatrix}\) et \(\overrightarrow{A'B}\begin{pmatrix}0\\-8\end{pmatrix}\), donc \(\overrightarrow{A'A}\cdot\overrightarrow{A'B}=6\times 0+0\times(-8)=0\).
Le triangle \(AA'B\) est <b>rectangle en \(A'\)</b>. C'était prévisible : \([AB]\) est un diamètre de \(\mathcal{C}\) et \(A'\) est un point du cercle, donc l'angle \(\widehat{AA'B}\) est droit. <i>(1 pt)</i></li>
</ol>
<div class="astuce">Tangente à un cercle en \(A\) : le vecteur \(\overrightarrow{\Omega A}\) est un vecteur <b>normal</b> à la tangente.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Étude d'une fonction polynôme", points: 5, chapitres: [4, 5],
      enonce: R`<p>Soit \(f\) la fonction définie sur \([-3;5]\) par \(f(x)=x^3-3x^2-9x+5\), et \(\mathcal{C}_f\) sa courbe représentative.</p>
<ol>
<li>Calculer \(f'(x)\).</li>
<li>Vérifier que \(f'(x)=3(x+1)(x-3)\), puis étudier le signe de \(f'(x)\) sur \([-3;5]\).</li>
<li>Dresser le tableau de variations complet de \(f\) sur \([-3;5]\).</li>
<li>En déduire le maximum et le minimum de \(f\) sur \([-3;5]\).</li>
<li>Déterminer une équation de la tangente à \(\mathcal{C}_f\) au point d'abscisse 0.</li>
<li>En quels points \(\mathcal{C}_f\) admet-elle une tangente horizontale ?</li>
</ol>`,
      correction: R`<ol>
<li>\(f'(x)=3x^2-6x-9\). <i>(0,5 pt)</i></li>
<li>\(3(x+1)(x-3)=3(x^2-3x+x-3)=3(x^2-2x-3)=3x^2-6x-9=f'(x)\).
\(f'\) est un trinôme de coefficient \(3\gt 0\) et de racines \(-1\) et \(3\) : \(f'(x)\gt 0\) sur \([-3;-1[\) et sur \(]3;5]\), \(f'(x)\lt 0\) sur \(]-1;3[\). <i>(1 pt)</i></li>
<li>\(f(-3)=-27-27+27+5=-22\), \(f(-1)=-1-3+9+5=10\), \(f(3)=27-27-27+5=-22\), \(f(5)=125-75-45+5=10\).
<table class="tv"><tr><td>\(x\)</td><td>\(-3\)</td><td></td><td>\(-1\)</td><td></td><td>\(3\)</td><td></td><td>\(5\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td>\(-22\)</td><td>↗</td><td>\(10\)</td><td>↘</td><td>\(-22\)</td><td>↗</td><td>\(10\)</td></tr></table>
<i>(1,5 pt : 0,5 pour les flèches, 1 pour les quatre valeurs)</i></li>
<li>D'après le tableau, le maximum de \(f\) sur \([-3;5]\) est \(10\) (atteint en \(-1\) et en \(5\)) et le minimum est \(-22\) (atteint en \(-3\) et en \(3\)). Ainsi, pour tout \(x\in[-3;5]\), \(-22\leqslant f(x)\leqslant 10\). <i>(0,5 pt)</i></li>
<li>\(f(0)=5\) et \(f'(0)=-9\). La tangente a pour équation \(y=f'(0)(x-0)+f(0)\), soit \(y=-9x+5\). <i>(1 pt)</i></li>
<li>La tangente est horizontale lorsque \(f'(x)=0\), c'est-à-dire en \(x=-1\) et \(x=3\) : aux points \((-1;10)\) et \((3;-22)\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°5", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 4, 5, 6, 10, 11],
  automatismes: [
    { q: R`\(\dfrac52-\dfrac23=\)`,
      choix: [R`\(3\)`, R`\(\dfrac{11}{6}\)`, R`\(\dfrac76\)`, R`\(1\)`], bonne: 1,
      explication: R`\(\dfrac{15}{6}-\dfrac{4}{6}=\dfrac{11}{6}\).` },
    { q: R`Deux hausses successives de 5 % équivalent à une hausse globale de :`,
      choix: [R`10 %`, R`25 %`, R`10,25 %`, R`5 %`], bonne: 2,
      explication: R`\(1{,}05\times 1{,}05=1{,}1025\), soit une hausse de 10,25 % (et non 10 %).` },
    { q: R`La dérivée de la fonction \(x\mapsto \mathrm{e}^{2x}\) est :`,
      choix: [R`\(x\mapsto 2\mathrm{e}^{2x}\)`, R`\(x\mapsto \mathrm{e}^{2x}\)`, R`\(x\mapsto 2x\,\mathrm{e}^{2x-1}\)`, R`\(x\mapsto \mathrm{e}^{2}\)`], bonne: 0,
      explication: R`\(\left(\mathrm{e}^{ax+b}\right)'=a\,\mathrm{e}^{ax+b}\), donc ici \(2\mathrm{e}^{2x}\).` },
    { q: R`\(\left(\mathrm{e}^{3}\right)^2=\)`,
      choix: [R`\(\mathrm{e}^{9}\)`, R`\(\mathrm{e}^{5}\)`, R`\(\mathrm{e}^{6}\)`, R`\(2\mathrm{e}^{3}\)`], bonne: 2,
      explication: R`\(\left(\mathrm{e}^{a}\right)^n=\mathrm{e}^{na}\), donc \(\mathrm{e}^{3\times 2}=\mathrm{e}^{6}\).` },
    { q: R`L'équation \(\mathrm{e}^{x}=1\) a pour solution :`,
      choix: [R`\(x=1\)`, R`\(x=\mathrm{e}\)`, R`aucune solution`, R`\(x=0\)`], bonne: 3,
      explication: R`\(\mathrm{e}^{0}=1\) et la fonction exponentielle est strictement croissante, donc \(x=0\) est l'unique solution.` },
    { q: R`On sait que \(f(2)=3\) et \(f'(2)=-1\). La tangente à la courbe de \(f\) au point d'abscisse 2 a pour équation :`,
      choix: [R`\(y=-x+5\)`, R`\(y=3x-1\)`, R`\(y=-x+3\)`, R`\(y=-x-5\)`], bonne: 0,
      explication: R`\(y=f'(2)(x-2)+f(2)=-(x-2)+3=-x+5\).` },
    { q: R`Si \(f'(x)\gt 0\) pour tout \(x\) d'un intervalle \(I\), alors :`,
      choix: [R`\(f\) est positive sur \(I\)`, R`\(f\) est strictement croissante sur \(I\)`, R`\(f\) est constante sur \(I\)`, R`\(f\) admet un maximum sur \(I\)`], bonne: 1,
      explication: R`Le signe de la dérivée donne le sens de variation : \(f'\gt 0\) sur \(I\) entraîne \(f\) strictement croissante sur \(I\). Cela ne dit rien du signe de \(f\).` },
    { q: R`Les racines du trinôme \(3x^2-12x\) sont :`,
      choix: [R`\(0\) et \(4\)`, R`\(0\) et \(-4\)`, R`\(3\) et \(12\)`, R`\(4\) seulement`], bonne: 0,
      explication: R`On factorise : \(3x^2-12x=3x(x-4)\), qui s'annule en \(0\) et en \(4\).` },
    { q: R`\(P(A)=0{,}4\) et \(P(A\cap B)=0{,}12\). Alors \(P_A(B)=\)`,
      choix: [R`\(0{,}048\)`, R`\(0{,}3\)`, R`\(0{,}52\)`, R`\(0{,}28\)`], bonne: 1,
      explication: R`\(P_A(B)=\dfrac{P(A\cap B)}{P(A)}=\dfrac{0{,}12}{0{,}4}=0{,}3\).` },
    { q: R`\(X\) prend les valeurs \(-1\), \(0\) et \(3\) avec les probabilités 0,5 ; 0,3 et 0,2. Alors \(E(X)=\)`,
      choix: [R`\(0{,}1\)`, R`\(0{,}6\)`, R`\(-0{,}5\)`, R`\(\dfrac23\)`], bonne: 0,
      explication: R`\(E(X)=-1\times 0{,}5+0\times 0{,}3+3\times 0{,}2=-0{,}5+0{,}6=0{,}1\).` },
    { q: R`En Python, <code>list(range(2, 8, 2))</code> vaut :`,
      choix: [R`<code>[2, 4, 6, 8]</code>`, R`<code>[2, 4, 6]</code>`, R`<code>[2, 3, 4, 5, 6, 7]</code>`, R`<code>[4, 6, 8]</code>`], bonne: 1,
      explication: R`<code>range(début, fin, pas)</code> part de 2, avance de 2 en 2 et s'arrête <b>avant</b> 8 : 2, 4, 6.` },
    { q: R`La négation de « tous les élèves ont réussi l'épreuve » est :`,
      choix: [R`« aucun élève n'a réussi l'épreuve »`, R`« tous les élèves ont échoué »`, R`« un seul élève n'a pas réussi »`, R`« au moins un élève n'a pas réussi l'épreuve »`], bonne: 3,
      explication: R`La négation de « pour tout… » est « il existe au moins un… qui ne… pas ».` }
  ],
  exercices: [
    { titre: "Exercice 1 — Refroidissement d'un café (exponentielle)", points: 5, chapitres: [6, 4, 5],
      enonce: R`<p>On sert un café dans une pièce dont la température est de 20 °C. On modélise la température du café, en °C, au bout de \(t\) minutes par
\[T(t)=20+60\,\mathrm{e}^{-0{,}2t},\qquad t\geqslant 0.\]</p>
<p>On donne \(\mathrm{e}^{-1}\approx 0{,}37\).</p>
<ol>
<li>Quelle est la température du café au moment où on le sert ?</li>
<li>Calculer \(T'(t)\). En déduire le sens de variation de \(T\) sur \([0;+\infty[\) et l'interpréter.</li>
<li>Justifier que, pour tout \(t\geqslant 0\), \(T(t)\gt 20\). Interpréter.</li>
<li>Déterminer une équation de la tangente à la courbe de \(T\) au point d'abscisse 0. À quel instant cette tangente coupe-t-elle la droite d'équation \(y=20\) ?</li>
<li>Donner une valeur approchée de la température du café au bout de 5 minutes.</li>
<li>Montrer que, pour tout \(t\geqslant 0\), \(T(t+5)-20=\mathrm{e}^{-1}\left(T(t)-20\right)\). Interpréter ce résultat.</li>
</ol>`,
      correction: R`<ol>
<li>\(T(0)=20+60\,\mathrm{e}^{0}=20+60=80\) : le café est servi à <b>80 °C</b>. <i>(0,5 pt)</i></li>
<li>La dérivée de \(t\mapsto\mathrm{e}^{-0{,}2t}\) est \(t\mapsto-0{,}2\,\mathrm{e}^{-0{,}2t}\). Donc
\[T'(t)=60\times(-0{,}2)\,\mathrm{e}^{-0{,}2t}=-12\,\mathrm{e}^{-0{,}2t}.\]
Comme \(\mathrm{e}^{-0{,}2t}\gt 0\), \(T'(t)\lt 0\) : \(T\) est <b>strictement décroissante</b> sur \([0;+\infty[\). Le café refroidit en permanence. <i>(1,5 pt : 1 pour \(T'\), 0,5 pour le sens de variation)</i></li>
<li>\(60\,\mathrm{e}^{-0{,}2t}\gt 0\), donc \(T(t)=20+60\,\mathrm{e}^{-0{,}2t}\gt 20\). Le café reste toujours plus chaud que la pièce (sa température s'en rapproche sans l'atteindre). <i>(0,5 pt)</i></li>
<li>\(T(0)=80\) et \(T'(0)=-12\). La tangente a pour équation \(y=-12(t-0)+80\), soit \(y=-12t+80\).<br>
\(-12t+80=20\iff 12t=60\iff t=5\) : la tangente coupe la droite \(y=20\) en \(t=5\) min. <i>(1 pt)</i></li>
<li>\(T(5)=20+60\,\mathrm{e}^{-0{,}2\times 5}=20+60\,\mathrm{e}^{-1}\approx 20+60\times 0{,}37=20+22{,}2=42{,}2\). Au bout de 5 minutes, le café est à environ <b>42 °C</b>. <i>(0,5 pt)</i></li>
<li>\(T(t+5)-20=60\,\mathrm{e}^{-0{,}2(t+5)}=60\,\mathrm{e}^{-0{,}2t-1}=60\,\mathrm{e}^{-0{,}2t}\times\mathrm{e}^{-1}=\mathrm{e}^{-1}\left(T(t)-20\right)\).<br>
Interprétation : toutes les 5 minutes, l'écart entre la température du café et celle de la pièce est multiplié par \(\mathrm{e}^{-1}\approx 0{,}37\) (il diminue d'environ 63 %). <i>(1 pt)</i></li>
</ol>
<div class="astuce">Retiens la règle \((\mathrm{e}^{kt})'=k\,\mathrm{e}^{kt}\) : avec \(k\lt 0\), la fonction \(t\mapsto\mathrm{e}^{kt}\) est décroissante.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Un jeu avec un dé et deux urnes", points: 5, chapitres: [10, 11],
      enonce: R`<p>Un joueur lance un dé équilibré à six faces.</p>
<ul><li>S'il obtient 6, il tire une boule au hasard dans l'urne \(U_1\), qui contient 2 boules rouges et 3 boules noires.</li>
<li>Sinon, il tire une boule au hasard dans l'urne \(U_2\), qui contient 1 boule rouge et 4 boules noires.</li></ul>
<p>On note \(S\) l'événement « le joueur obtient 6 » et \(R\) l'événement « la boule tirée est rouge ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer \(P(S\cap R)\).</li>
<li>Montrer que \(P(R)=\dfrac{7}{30}\).</li>
<li>La boule tirée est rouge. Quelle est la probabilité que le joueur ait obtenu 6 ?</li>
<li>Le joueur mise 1 € pour jouer. S'il tire une boule rouge après avoir obtenu 6, il reçoit 6 € ; s'il tire une boule rouge sans avoir obtenu 6, il reçoit 2 € ; sinon il ne reçoit rien. On note \(X\) son gain algébrique (somme reçue moins la mise).<br>
a) Donner la loi de probabilité de \(X\).<br>
b) Calculer \(E(X)\) et interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>Premier niveau : \(S\) (\(\frac16\)) et \(\overline{S}\) (\(\frac56\)). Après \(S\) : \(R\) (\(\frac25\)), \(\overline{R}\) (\(\frac35\)). Après \(\overline{S}\) : \(R\) (\(\frac15\)), \(\overline{R}\) (\(\frac45\)). <i>(0,5 pt)</i></li>
<li>\(P(S\cap R)=P(S)\times P_S(R)=\dfrac16\times\dfrac25=\dfrac{2}{30}=\dfrac{1}{15}\). <i>(0,5 pt)</i></li>
<li>\(S\) et \(\overline{S}\) forment une partition de l'univers ; d'après la formule des probabilités totales :
\[P(R)=P(S\cap R)+P(\overline{S}\cap R)=\frac{2}{30}+\frac56\times\frac15=\frac{2}{30}+\frac{5}{30}=\frac{7}{30}.\]
<i>(1 pt)</i></li>
<li>\[P_R(S)=\frac{P(S\cap R)}{P(R)}=\frac{2/30}{7/30}=\frac27.\]
<i>(1 pt)</i></li>
<li>a) Gains algébriques : \(6-1=5\) (événement \(S\cap R\)), \(2-1=1\) (événement \(\overline{S}\cap R\)) et \(-1\) (événement \(\overline{R}\), de probabilité \(1-\frac{7}{30}=\frac{23}{30}\)).
<table class="tv"><tr><td>\(x\)</td><td>\(-1\)</td><td>\(1\)</td><td>\(5\)</td></tr>
<tr><td>\(P(X=x)\)</td><td>\(\frac{23}{30}\)</td><td>\(\frac{5}{30}\)</td><td>\(\frac{2}{30}\)</td></tr></table>
<i>(1 pt)</i><br>
b) \[E(X)=-1\times\frac{23}{30}+1\times\frac{5}{30}+5\times\frac{2}{30}=\frac{-23+5+10}{30}=-\frac{8}{30}=-\frac{4}{15}\approx -0{,}27.\]
L'espérance est négative : le jeu est défavorable au joueur, qui perd en moyenne environ 27 centimes par partie sur un grand nombre de parties. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Logique, second degré et Python", points: 4, chapitres: [1, 2],
      enonce: R`<p>Dans cet exercice, \(a\), \(b\), \(c\) sont des réels avec \(a\ne 0\).</p>
<ol>
<li>On considère la proposition \(\mathcal{P}\) : « Si \(a\) et \(c\) sont de signes contraires (c'est-à-dire \(ac\lt 0\)), alors le trinôme \(ax^2+bx+c\) admet deux racines distinctes. »<br>
a) Démontrer la proposition \(\mathcal{P}\).<br>
b) Énoncer la contraposée de \(\mathcal{P}\).<br>
c) Énoncer la réciproque de \(\mathcal{P}\). Est-elle vraie ? On pourra étudier le trinôme \(x^2-3x+2\).</li>
<li>Pour un réel \(x\), la condition « \(x=2\) » est-elle nécessaire, suffisante, ou nécessaire et suffisante pour que \(x^2=4\) ? Justifier.</li>
<li>On considère le programme Python suivant :
<pre><code>L = [x**2 - 5*x + 6 for x in range(6)]

def compte(L):
    c = 0
    for v in L:
        if v == 0:
            c = c + 1
    return c</code></pre>
a) Donner le contenu de la liste <code>L</code>.<br>
b) Que renvoie <code>compte(L)</code> ? Interpréter en lien avec le trinôme \(x^2-5x+6\).<br>
c) Que contient la liste <code>[x for x in range(21) if x**2 - 5*x + 6 &lt;= 0]</code> ? Justifier par une étude de signe.</li>
</ol>`,
      correction: R`<ol>
<li>a) \(\Delta=b^2-4ac\). On a \(b^2\geqslant 0\) et, puisque \(ac\lt 0\), \(-4ac\gt 0\). Donc \(\Delta\gt 0\) et le trinôme admet deux racines distinctes. <i>(0,75 pt)</i><br>
b) Contraposée : « Si le trinôme \(ax^2+bx+c\) n'admet pas deux racines distinctes, alors \(ac\geqslant 0\) » (\(a\) et \(c\) ne sont pas de signes contraires). <i>(0,5 pt)</i><br>
c) Réciproque : « Si le trinôme \(ax^2+bx+c\) admet deux racines distinctes, alors \(ac\lt 0\) ».
Elle est <b>fausse</b> : pour \(x^2-3x+2\), \(\Delta=9-8=1\gt 0\) (racines 1 et 2) mais \(ac=1\times 2=2\gt 0\). C'est un contre-exemple. <i>(0,75 pt)</i></li>
<li>Si \(x=2\), alors \(x^2=4\) : la condition est <b>suffisante</b>. Mais \(x=-2\) vérifie aussi \(x^2=4\) : elle n'est <b>pas nécessaire</b>. <i>(0,5 pt)</i></li>
<li>a) Pour \(x=0,1,2,3,4,5\) : <code>L = [6, 2, 0, 0, 2, 6]</code>. <i>(0,5 pt)</i><br>
b) La fonction compte les valeurs nulles de la liste : <code>compte(L)</code> renvoie <b>2</b>. Parmi les entiers de 0 à 5, exactement deux (2 et 3) sont racines de \(x^2-5x+6\). <i>(0,5 pt)</i><br>
c) \(x^2-5x+6=(x-2)(x-3)\) est négatif ou nul entre ses racines (coefficient de \(x^2\) positif), c'est-à-dire pour \(x\in[2;3]\). Les seuls entiers de cet intervalle sont 2 et 3 : la liste vaut <code>[2, 3]</code>. <i>(0,5 pt)</i></li>
</ol>
<div class="warn">La contraposée d'une proposition vraie est toujours vraie ; sa réciproque, elle, peut être fausse. Un seul contre-exemple suffit pour le prouver.</div>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°6", duree: "2 h", calculatrice: false,
  chapitres: [1, 3, 7, 8, 11],
  automatismes: [
    { q: R`\(\dfrac49\times\dfrac38=\)`,
      choix: [R`\(\dfrac16\)`, R`\(\dfrac{7}{17}\)`, R`\(\dfrac{32}{27}\)`, R`\(\dfrac13\)`], bonne: 0,
      explication: R`\(\dfrac{4\times 3}{9\times 8}=\dfrac{12}{72}=\dfrac16\).` },
    { q: R`Un article à 80 € est soldé à \(-15\) %. Son nouveau prix est :`,
      choix: [R`65 €`, R`68 €`, R`72 €`, R`92 €`], bonne: 1,
      explication: R`\(80\times 0{,}85=68\) €.` },
    { q: R`\(u_0=5\) et, pour tout \(n\), \(u_{n+1}=u_n-3\). Alors \(u_3=\)`,
      choix: [R`\(2\)`, R`\(-1\)`, R`\(-4\)`, R`\(14\)`], bonne: 2,
      explication: R`\(u_1=2\), \(u_2=-1\), \(u_3=-4\) (ou \(u_3=u_0+3r=5-9=-4\)).` },
    { q: R`\((u_n)\) est géométrique avec \(u_0=64\) et de raison \(\dfrac12\). Alors \(u_3=\)`,
      choix: [R`\(8\)`, R`\(32\)`, R`\(16\)`, R`\(4\)`], bonne: 0,
      explication: R`\(u_3=64\times\left(\dfrac12\right)^3=\dfrac{64}{8}=8\).` },
    { q: R`\(\cos(\pi)=\)`,
      choix: [R`\(0\)`, R`\(1\)`, R`\(-1\)`, R`\(\pi\)`], bonne: 2,
      explication: R`Le point associé à \(\pi\) sur le cercle trigonométrique est \((-1;0)\) : \(\cos\pi=-1\) et \(\sin\pi=0\).` },
    { q: R`Pour tout réel \(x\), \(\sin(-x)=\)`,
      choix: [R`\(\sin x\)`, R`\(-\sin x\)`, R`\(\cos x\)`, R`\(-\cos x\)`], bonne: 1,
      explication: R`La fonction sinus est impaire : \(\sin(-x)=-\sin x\).` },
    { q: R`\(\|\vec u\|=3\), \(\|\vec v\|=4\) et l'angle \((\vec u,\vec v)\) mesure \(\dfrac{\pi}{3}\). Alors \(\vec u\cdot\vec v=\)`,
      choix: [R`\(12\)`, R`\(6\sqrt3\)`, R`\(7\)`, R`\(6\)`], bonne: 3,
      explication: R`\(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta=3\times 4\times\dfrac12=6\).` },
    { q: R`Dans un repère orthonormé, \(\vec u\begin{pmatrix}2\\m\end{pmatrix}\) et \(\vec v\begin{pmatrix}3\\-6\end{pmatrix}\) sont orthogonaux lorsque :`,
      choix: [R`\(m=1\)`, R`\(m=-1\)`, R`\(m=4\)`, R`\(m=0\)`], bonne: 0,
      explication: R`\(\vec u\cdot\vec v=6-6m=0\iff m=1\).` },
    { q: R`\(X\) prend les valeurs 1, 2 et 3 avec \(P(X=1)=0{,}2\) et \(P(X=3)=0{,}5\). Alors \(P(X=2)=\)`,
      choix: [R`\(0{,}7\)`, R`\(0{,}3\)`, R`\(0{,}5\)`, R`\(0{,}2\)`], bonne: 1,
      explication: R`La somme des probabilités vaut 1 : \(P(X=2)=1-0{,}2-0{,}5=0{,}3\).` },
    { q: R`Si \(E(X)=3\), alors \(E(2X+1)=\)`,
      choix: [R`\(6\)`, R`\(9\)`, R`\(7\)`, R`\(3\)`], bonne: 2,
      explication: R`Linéarité de l'espérance : \(E(aX+b)=aE(X)+b=2\times 3+1=7\).` },
    { q: R`Les solutions de l'équation \(x^2=5x\) sont :`,
      choix: [R`\(5\) seulement`, R`\(0\) et \(5\)`, R`\(\sqrt5\)`, R`\(-5\) et \(5\)`], bonne: 1,
      explication: R`\(x^2-5x=0\iff x(x-5)=0\iff x=0\) ou \(x=5\). Ne divise jamais par \(x\) : tu perdrais la solution 0.` },
    { q: R`La droite passant par \(A(1;2)\) et \(B(3;6)\) a pour équation réduite :`,
      choix: [R`\(y=x+1\)`, R`\(y=2x+2\)`, R`\(y=4x-2\)`, R`\(y=2x\)`], bonne: 3,
      explication: R`\(m=\dfrac{6-2}{3-1}=2\), puis \(2=2\times 1+p\) donne \(p=0\) : \(y=2x\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Les rebonds d'une balle", points: 5, chapitres: [3, 1],
      enonce: R`<p>On lâche une balle d'une hauteur de 256 cm. À chaque rebond, elle remonte aux \(\dfrac34\) de la hauteur atteinte précédemment.</p>
<p>On note \(h_0=256\) et, pour tout entier \(n\geqslant 1\), \(h_n\) la hauteur maximale, en cm, atteinte après le \(n\)-ième rebond.</p>
<ol>
<li>Calculer \(h_1\) et \(h_2\).</li>
<li>Justifier que \((h_n)\) est une suite géométrique, puis exprimer \(h_n\) en fonction de \(n\).</li>
<li>Étudier le sens de variation de la suite \((h_n)\).</li>
<li>Calculer \(h_4\).</li>
<li>Calculer \(h_1+h_2+h_3+h_4\). En déduire la distance totale parcourue par la balle depuis son lâcher jusqu'au moment où elle touche le sol pour la cinquième fois.</li>
<li>On considère la fonction Python ci-dessous.
<pre><code>def rebonds():
    n = 0
    h = 256
    while h &gt;= 10:
        h = 0.75 * h
        n = n + 1
    return n</code></pre>
On donne \(h_{11}\approx 10{,}8\) et \(h_{12}\approx 8{,}1\). Quelle valeur renvoie <code>rebonds()</code> ? Interpréter ce résultat.</li>
</ol>`,
      correction: R`<ol>
<li>\(h_1=\dfrac34\times 256=192\) et \(h_2=\dfrac34\times 192=144\). <i>(0,5 pt)</i></li>
<li>Pour tout \(n\), \(h_{n+1}=\dfrac34\,h_n\) : \((h_n)\) est <b>géométrique de raison \(q=\dfrac34\)</b> et de premier terme \(h_0=256\). Donc \(h_n=256\times\left(\dfrac34\right)^n\). <i>(1 pt)</i></li>
<li>\(h_{n+1}-h_n=\dfrac34 h_n-h_n=-\dfrac14 h_n\lt 0\) car \(h_n\gt 0\). La suite \((h_n)\) est <b>strictement décroissante</b> (ce qui est cohérent : \(h_0\gt 0\) et \(0\lt q\lt 1\)). <i>(0,75 pt)</i></li>
<li>\(h_4=256\times\dfrac{3^4}{4^4}=256\times\dfrac{81}{256}=81\) cm. <i>(0,5 pt)</i></li>
<li>On a \(h_3=\dfrac34\times 144=108\), donc \(h_1+h_2+h_3+h_4=192+144+108+81=525\).<br>
(Avec la formule : \(h_1\times\dfrac{1-q^4}{1-q}=192\times\dfrac{1-\frac{81}{256}}{\frac14}=768\times\dfrac{175}{256}=3\times 175=525\).)<br>
La balle descend de 256 cm, puis, pour chacun des 4 premiers rebonds, elle monte puis redescend de \(h_n\). Distance totale :
\[256+2\times 525=256+1050=1306\text{ cm},\]
soit environ <b>13 m</b>. <i>(1,25 pt)</i></li>
<li>La boucle multiplie \(h\) par 0,75 tant que \(h\geqslant 10\) ; à la sortie, \(h=h_n\) avec \(n\) le premier entier tel que \(h_n\lt 10\). Comme \(h_{11}\approx 10{,}8\geqslant 10\) et \(h_{12}\approx 8{,}1\lt 10\), la fonction renvoie <b>12</b> : c'est après le 12e rebond que la balle remonte pour la première fois à moins de 10 cm. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Produit scalaire dans un triangle", points: 5, chapitres: [8, 7],
      enonce: R`<p>On considère un triangle \(ABC\) tel que \(AB=5\), \(AC=8\) et \(\widehat{BAC}=\dfrac{\pi}{3}\) radians.</p>
<ol>
<li>Calculer le produit scalaire \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>En écrivant \(\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}\), calculer \(BC^2\), puis \(BC\).</li>
<li>Calculer \(\overrightarrow{BA}\cdot\overrightarrow{BC}\), puis \(\cos\widehat{ABC}\).</li>
<li>On note \(H\) le projeté orthogonal de \(C\) sur la droite \((AB)\). Justifier que \(AH=4\), puis calculer \(CH\).</li>
<li>En déduire l'aire du triangle \(ABC\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}=5\times 8\times\dfrac12=20\). <i>(1 pt)</i></li>
<li>\[BC^2=\left\|\overrightarrow{AC}-\overrightarrow{AB}\right\|^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2=64-40+25=49.\]
Donc \(BC=7\). <i>(1 pt)</i></li>
<li>Avec la formule \(\vec u\cdot\vec v=\dfrac12\left(\|\vec u\|^2+\|\vec v\|^2-\|\vec v-\vec u\|^2\right)\) :
\[\overrightarrow{BA}\cdot\overrightarrow{BC}=\frac12\left(BA^2+BC^2-AC^2\right)=\frac12(25+49-64)=5.\]
Puis \(\cos\widehat{ABC}=\dfrac{\overrightarrow{BA}\cdot\overrightarrow{BC}}{BA\times BC}=\dfrac{5}{5\times 7}=\dfrac17\). <i>(1 pt)</i></li>
<li>Par projection orthogonale : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AH}\). Ce produit est positif, donc \(H\) est sur la demi-droite \([AB)\) et \(\overrightarrow{AB}\cdot\overrightarrow{AH}=AB\times AH\). Ainsi \(5\times AH=20\), d'où \(AH=4\).<br>
Le triangle \(AHC\) est rectangle en \(H\) : \(CH^2=AC^2-AH^2=64-16=48\), donc \(CH=\sqrt{48}=4\sqrt3\). <i>(1 pt)</i></li>
<li>\([CH]\) est la hauteur issue de \(C\) : \(\mathcal{A}=\dfrac{AB\times CH}{2}=\dfrac{5\times 4\sqrt3}{2}=10\sqrt3\) unités d'aire. <i>(1 pt)</i></li>
</ol>
<div class="astuce">Le théorème d'Al-Kashi \(BC^2=AB^2+AC^2-2\,AB\times AC\cos\widehat{A}\) n'est rien d'autre que le calcul de la question 2.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Les desserts d'un restaurant", points: 4, chapitres: [11],
      enonce: R`<p>Un restaurant a étudié le nombre de desserts commandés par table de quatre personnes. On note \(X\) la variable aléatoire égale au nombre de desserts commandés par une table choisie au hasard. Sa loi est donnée ci-dessous, où \(p\) est un réel.</p>
<table class="tv"><tr><td>\(k\)</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr><td>\(P(X=k)\)</td><td>0,1</td><td>0,2</td><td>0,3</td><td>\(p\)</td><td>0,15</td></tr></table>
<ol>
<li>Déterminer \(p\).</li>
<li>Calculer la probabilité qu'une table commande au moins deux desserts.</li>
<li>Calculer l'espérance \(E(X)\) et l'interpréter.</li>
<li>Calculer la variance \(V(X)\).</li>
<li>Un dessert est vendu 6 €. On note \(Y\) la recette en desserts d'une table. Exprimer \(Y\) en fonction de \(X\), calculer \(E(Y)\) et estimer la recette en desserts pour un service de 40 tables.</li>
</ol>`,
      correction: R`<ol>
<li>La somme des probabilités vaut 1 : \(0{,}1+0{,}2+0{,}3+p+0{,}15=1\), donc \(p=1-0{,}75=0{,}25\). <i>(0,5 pt)</i></li>
<li>\(P(X\geqslant 2)=0{,}3+0{,}25+0{,}15=0{,}7\). <i>(0,5 pt)</i></li>
<li>\[E(X)=0\times 0{,}1+1\times 0{,}2+2\times 0{,}3+3\times 0{,}25+4\times 0{,}15=0{,}2+0{,}6+0{,}75+0{,}6=2{,}15.\]
En moyenne, une table commande 2,15 desserts. <i>(1 pt)</i></li>
<li>\(E(X^2)=0+1\times 0{,}2+4\times 0{,}3+9\times 0{,}25+16\times 0{,}15=0{,}2+1{,}2+2{,}25+2{,}4=6{,}05\).
\[V(X)=E(X^2)-E(X)^2=6{,}05-2{,}15^2=6{,}05-4{,}6225=1{,}4275.\]
<i>(1 pt)</i></li>
<li>\(Y=6X\), donc \(E(Y)=6\,E(X)=6\times 2{,}15=12{,}9\) €. Pour 40 tables, on peut estimer la recette à \(40\times 12{,}9=\) <b>516 €</b>. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°7", duree: "2 h", calculatrice: false,
  chapitres: [2, 4, 5, 7, 10],
  automatismes: [
    { q: R`\(0{,}2\times 0{,}15=\)`,
      choix: [R`\(0{,}3\)`, R`\(0{,}03\)`, R`\(0{,}003\)`, R`\(0{,}35\)`], bonne: 1,
      explication: R`\(2\times 15=30\) et il y a 3 chiffres après la virgule au total : \(0{,}030=0{,}03\).` },
    { q: R`Une quantité passe de 200 à 150. Son taux d'évolution est :`,
      choix: [R`\(-50\) %`, R`\(+25\) %`, R`\(-25\) %`, R`\(-33\) %`], bonne: 2,
      explication: R`\(\dfrac{150-200}{200}=\dfrac{-50}{200}=-0{,}25\), soit \(-25\) %.` },
    { q: R`La dérivée de \(f(x)=x^4-2x\) est :`,
      choix: [R`\(4x^3-2\)`, R`\(x^3-2\)`, R`\(4x^3-2x\)`, R`\(4x^4-2\)`], bonne: 0,
      explication: R`\((x^n)'=nx^{n-1}\) : \((x^4)'=4x^3\) et \((-2x)'=-2\).` },
    { q: R`Si \(f=\dfrac{u}{v}\) (avec \(v\) ne s'annulant pas), alors \(f'=\)`,
      choix: [R`\(\dfrac{u'}{v'}\)`, R`\(\dfrac{u'v+uv'}{v^2}\)`, R`\(\dfrac{u'v-uv'}{v^2}\)`, R`\(\dfrac{uv'-u'v}{v^2}\)`], bonne: 2,
      explication: R`Formule du quotient : \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\). Attention à l'ordre des termes au numérateur.` },
    { q: R`La dérivée de \(x\mapsto\dfrac3x\) sur \(]0;+\infty[\) est :`,
      choix: [R`\(x\mapsto\dfrac{3}{x^2}\)`, R`\(x\mapsto-\dfrac{3}{x^2}\)`, R`\(x\mapsto-\dfrac3x\)`, R`\(x\mapsto 3\)`], bonne: 1,
      explication: R`\(\left(\dfrac1x\right)'=-\dfrac{1}{x^2}\), donc \(\left(\dfrac3x\right)'=-\dfrac{3}{x^2}\).` },
    { q: R`\(\sin\left(\dfrac{\pi}{2}\right)+\cos(0)=\)`,
      choix: [R`\(0\)`, R`\(1\)`, R`\(\dfrac{\pi}{2}\)`, R`\(2\)`], bonne: 3,
      explication: R`\(\sin\left(\dfrac{\pi}{2}\right)=1\) et \(\cos 0=1\), d'où \(2\).` },
    { q: R`\(\cos\left(-\dfrac{\pi}{4}\right)=\)`,
      choix: [R`\(\dfrac{\sqrt2}{2}\)`, R`\(-\dfrac{\sqrt2}{2}\)`, R`\(\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`], bonne: 0,
      explication: R`Le cosinus est pair : \(\cos\left(-\dfrac{\pi}{4}\right)=\cos\left(\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}\).` },
    { q: R`\(P(A)=0{,}6\), \(P_A(B)=0{,}3\) et \(P_{\overline{A}}(B)=0{,}5\). Alors \(P(B)=\)`,
      choix: [R`\(0{,}8\)`, R`\(0{,}38\)`, R`\(0{,}18\)`, R`\(0{,}5\)`], bonne: 1,
      explication: R`Probabilités totales : \(P(B)=0{,}6\times 0{,}3+0{,}4\times 0{,}5=0{,}18+0{,}2=0{,}38\).` },
    { q: R`\(A\) et \(B\) sont indépendants, \(P(A)=0{,}5\) et \(P(B)=0{,}4\). Alors \(P(A\cup B)=\)`,
      choix: [R`\(0{,}9\)`, R`\(0{,}2\)`, R`\(0{,}7\)`, R`\(0{,}45\)`], bonne: 2,
      explication: R`\(P(A\cap B)=0{,}5\times 0{,}4=0{,}2\), puis \(P(A\cup B)=0{,}5+0{,}4-0{,}2=0{,}7\).` },
    { q: R`\(\sqrt{50}=\)`,
      choix: [R`\(25\sqrt2\)`, R`\(2\sqrt5\)`, R`\(10\sqrt5\)`, R`\(5\sqrt2\)`], bonne: 3,
      explication: R`\(\sqrt{50}=\sqrt{25\times 2}=\sqrt{25}\times\sqrt2=5\sqrt2\).` },
    { q: R`La solution de l'équation \(\dfrac1x=4\) est :`,
      choix: [R`\(\dfrac14\)`, R`\(4\)`, R`\(-4\)`, R`\(-\dfrac14\)`], bonne: 0,
      explication: R`\(\dfrac1x=4\iff x=\dfrac14\) (on passe à l'inverse, \(x\ne 0\)).` },
    { q: R`La fonction \(x\mapsto x^2-6x+1\) atteint son minimum en :`,
      choix: [R`\(x=-3\)`, R`\(x=6\)`, R`\(x=3\)`, R`\(x=1\)`], bonne: 2,
      explication: R`Pour \(ax^2+bx+c\) avec \(a\gt 0\), le minimum est atteint en \(-\dfrac{b}{2a}=\dfrac{6}{2}=3\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Coût moyen de production", points: 5, chapitres: [4, 5, 2],
      enonce: R`<p>Une entreprise fabrique entre 1 et 10 tonnes d'un produit par jour. Le coût total de fabrication de \(x\) tonnes, en centaines d'euros, est \(C(x)=x^2+9\).</p>
<p>Le coût moyen par tonne est la fonction \(f\) définie sur \([1;10]\) par \(f(x)=\dfrac{C(x)}{x}=\dfrac{x^2+9}{x}\).</p>
<ol>
<li>Calculer \(f(2)\) et interpréter ce résultat.</li>
<li>Montrer que, pour tout \(x\in[1;10]\), \(f'(x)=\dfrac{x^2-9}{x^2}\).</li>
<li>Étudier le signe de \(f'(x)\) sur \([1;10]\) et dresser le tableau de variations de \(f\).</li>
<li>Quelle quantité faut-il produire pour que le coût moyen soit minimal ? Quel est ce coût moyen minimal ?</li>
<li>Déterminer une équation de la tangente à la courbe de \(f\) au point d'abscisse 1.</li>
<li>Résoudre dans \([1;10]\) l'équation \(f(x)=10\).</li>
</ol>`,
      correction: R`<ol>
<li>\(f(2)=\dfrac{4+9}{2}=6{,}5\) : pour 2 tonnes produites, le coût moyen est de 6,5 centaines d'euros, soit <b>650 € par tonne</b>. <i>(0,5 pt)</i></li>
<li>\(f=\dfrac uv\) avec \(u(x)=x^2+9\), \(u'(x)=2x\), \(v(x)=x\), \(v'(x)=1\) :
\[f'(x)=\frac{2x\times x-(x^2+9)\times 1}{x^2}=\frac{2x^2-x^2-9}{x^2}=\frac{x^2-9}{x^2}.\]
<i>(1 pt)</i></li>
<li>\(x^2-9=(x-3)(x+3)\). Sur \([1;10]\), \(x+3\gt 0\) et \(x^2\gt 0\), donc \(f'(x)\) a le signe de \(x-3\).
\(f(1)=10\), \(f(3)=\dfrac{18}{3}=6\), \(f(10)=\dfrac{109}{10}=10{,}9\).
<table class="tv"><tr><td>\(x\)</td><td>1</td><td></td><td>3</td><td></td><td>10</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td>\(10\)</td><td>↘</td><td>\(6\)</td><td>↗</td><td>\(10{,}9\)</td></tr></table>
<i>(1,5 pt : 0,75 signe, 0,75 tableau)</i></li>
<li>Le coût moyen est minimal pour <b>3 tonnes</b> ; il vaut alors 6 centaines d'euros, soit <b>600 € par tonne</b>. <i>(0,5 pt)</i></li>
<li>\(f(1)=10\) et \(f'(1)=\dfrac{1-9}{1}=-8\). Tangente : \(y=-8(x-1)+10\), soit \(y=-8x+18\). <i>(1 pt)</i></li>
<li>Pour \(x\in[1;10]\) (donc \(x\ne 0\)) : \(\dfrac{x^2+9}{x}=10\iff x^2+9=10x\iff x^2-10x+9=0\).
\(\Delta=100-36=64\), d'où \(x=\dfrac{10-8}{2}=1\) ou \(x=\dfrac{10+8}{2}=9\). Les deux appartiennent à \([1;10]\) : \(S=\{1;9\}\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Fiabilité d'un test de dépistage", points: 5, chapitres: [10],
      enonce: R`<p>Une maladie touche 2 % de la population. Un test de dépistage est proposé :</p>
<ul><li>si la personne est malade, le test est positif dans 95 % des cas ;</li>
<li>si la personne n'est pas malade, le test est positif dans 3 % des cas.</li></ul>
<p>On choisit une personne au hasard. On note \(M\) : « la personne est malade » et \(T\) : « le test est positif ».</p>
<ol>
<li>Traduire les données de l'énoncé en probabilités et construire un arbre pondéré.</li>
<li>Calculer \(P(M\cap T)\).</li>
<li>Montrer que \(P(T)=0{,}0484\).</li>
<li>Le test d'une personne est positif. Calculer la probabilité qu'elle soit malade (on donnera la valeur exacte sous forme de fraction irréductible, et on admettra qu'elle vaut environ 0,39). Ce résultat te paraît-il surprenant ?</li>
<li>a) Calculer \(P(\overline{M}\cap\overline{T})\).<br>
b) Le test est dit « correct » si la personne est malade et testée positive, ou non malade et testée négative. Calculer la probabilité que le test soit correct.</li>
</ol>`,
      correction: R`<ol>
<li>\(P(M)=0{,}02\), \(P_M(T)=0{,}95\), \(P_{\overline{M}}(T)=0{,}03\).
Arbre : \(M\) (0,02) puis \(T\) (0,95), \(\overline{T}\) (0,05) ; \(\overline{M}\) (0,98) puis \(T\) (0,03), \(\overline{T}\) (0,97). <i>(0,5 pt)</i></li>
<li>\(P(M\cap T)=0{,}02\times 0{,}95=0{,}019\). <i>(0,5 pt)</i></li>
<li>Formule des probabilités totales (\(M\), \(\overline{M}\) partition) :
\[P(T)=P(M\cap T)+P(\overline{M}\cap T)=0{,}019+0{,}98\times 0{,}03=0{,}019+0{,}0294=0{,}0484.\]
<i>(1 pt)</i></li>
<li>\[P_T(M)=\frac{P(M\cap T)}{P(T)}=\frac{0{,}019}{0{,}0484}=\frac{190}{484}=\frac{95}{242}\approx 0{,}39.\]
C'est surprenant : bien que le test soit fiable, une personne testée positive n'a qu'environ 39 % de chances d'être malade. Cela vient de la rareté de la maladie : il y a beaucoup plus de « faux positifs » (0,0294) que de « vrais positifs » (0,019). <i>(1,5 pt : 1 pour le calcul, 0,5 pour le commentaire)</i></li>
<li>a) \(P(\overline{M}\cap\overline{T})=0{,}98\times 0{,}97=0{,}9506\). <i>(0,5 pt)</i><br>
b) Les deux cas sont incompatibles : \(P(M\cap T)+P(\overline{M}\cap\overline{T})=0{,}019+0{,}9506=0{,}9696\). Le test est correct dans près de 97 % des cas. <i>(1 pt)</i></li>
</ol>
<div class="warn">Ne confonds pas \(P_M(T)\) (probabilité d'être positif sachant qu'on est malade, 0,95) et \(P_T(M)\) (probabilité d'être malade sachant qu'on est positif, environ 0,39).</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Fonctions trigonométriques et équations", points: 4, chapitres: [7],
      enonce: R`<ol>
<li>Donner les valeurs exactes de \(\cos\left(\dfrac{2\pi}{3}\right)\), \(\sin\left(-\dfrac{\pi}{6}\right)\) et \(\cos\left(\dfrac{11\pi}{6}\right)\).</li>
<li>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=\sin x\cos x\).<br>
a) Montrer que \(f\) est impaire.<br>
b) Montrer que, pour tout réel \(x\), \(f(x+\pi)=f(x)\). Que peut-on en déduire ?</li>
<li>Résoudre dans \([0;2\pi[\) l'équation \(2\cos x+1=0\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'équation \((2\sin x-1)(\sin x+1)=0\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\dfrac{2\pi}{3}=\pi-\dfrac{\pi}{3}\) : \(\cos\left(\dfrac{2\pi}{3}\right)=-\cos\left(\dfrac{\pi}{3}\right)=-\dfrac12\).<br>
Le sinus est impair : \(\sin\left(-\dfrac{\pi}{6}\right)=-\dfrac12\).<br>
\(\dfrac{11\pi}{6}=2\pi-\dfrac{\pi}{6}\) : \(\cos\left(\dfrac{11\pi}{6}\right)=\cos\left(-\dfrac{\pi}{6}\right)=\dfrac{\sqrt3}{2}\). <i>(1 pt)</i></li>
<li>a) \(\mathbb{R}\) est symétrique par rapport à 0 et \(f(-x)=\sin(-x)\cos(-x)=(-\sin x)\cos x=-f(x)\) : \(f\) est impaire. <i>(0,5 pt)</i><br>
b) \(f(x+\pi)=\sin(x+\pi)\cos(x+\pi)=(-\sin x)(-\cos x)=\sin x\cos x=f(x)\). La fonction \(f\) est périodique de période \(\pi\) : il suffit de l'étudier sur un intervalle de longueur \(\pi\). <i>(0,5 pt)</i></li>
<li>\(2\cos x+1=0\iff\cos x=-\dfrac12\). D'après la question 1, \(\cos\left(\dfrac{2\pi}{3}\right)=-\dfrac12\) ; l'autre point du cercle d'abscisse \(-\dfrac12\) est associé à \(-\dfrac{2\pi}{3}\), soit \(2\pi-\dfrac{2\pi}{3}=\dfrac{4\pi}{3}\) dans \([0;2\pi[\).
\(S=\left\{\dfrac{2\pi}{3};\dfrac{4\pi}{3}\right\}\). <i>(1 pt)</i></li>
<li>Un produit est nul si et seulement si l'un de ses facteurs est nul :
<ul><li>\(2\sin x-1=0\iff\sin x=\dfrac12\) : dans \(]-\pi;\pi]\), \(x=\dfrac{\pi}{6}\) ou \(x=\pi-\dfrac{\pi}{6}=\dfrac{5\pi}{6}\) ;</li>
<li>\(\sin x+1=0\iff\sin x=-1\) : \(x=-\dfrac{\pi}{2}\).</li></ul>
\(S=\left\{-\dfrac{\pi}{2};\dfrac{\pi}{6};\dfrac{5\pi}{6}\right\}\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°8", duree: "2 h", calculatrice: false,
  chapitres: [1, 3, 4, 5, 6, 8, 9],
  automatismes: [
    { q: R`Les \(\dfrac34\) de 120 valent :`,
      choix: [R`80`, R`90`, R`160`, R`30`], bonne: 1,
      explication: R`\(\dfrac{120}{4}=30\), puis \(3\times 30=90\).` },
    { q: R`Un prix augmente de 25 %, puis baisse de 20 %. Globalement, il :`,
      choix: [R`baisse de 5 %`, R`augmente de 5 %`, R`retrouve sa valeur initiale`, R`augmente de 45 %`], bonne: 2,
      explication: R`\(1{,}25\times 0{,}8=1\) : le prix final est égal au prix initial.` },
    { q: R`La dérivée de la fonction \(x\mapsto\mathrm{e}^{-x}\) est :`,
      choix: [R`\(x\mapsto\mathrm{e}^{-x}\)`, R`\(x\mapsto-\mathrm{e}^{-x}\)`, R`\(x\mapsto-x\,\mathrm{e}^{-x-1}\)`, R`\(x\mapsto\mathrm{e}^{x}\)`], bonne: 1,
      explication: R`\(\left(\mathrm{e}^{ax+b}\right)'=a\,\mathrm{e}^{ax+b}\) avec \(a=-1\).` },
    { q: R`\(\dfrac{\mathrm{e}^{2}}{\mathrm{e}^{-3}}=\)`,
      choix: [R`\(\mathrm{e}^{-1}\)`, R`\(\mathrm{e}^{-6}\)`, R`\(\mathrm{e}^{5}\)`, R`\(\mathrm{e}^{-2/3}\)`], bonne: 2,
      explication: R`\(\dfrac{\mathrm{e}^{a}}{\mathrm{e}^{b}}=\mathrm{e}^{a-b}=\mathrm{e}^{2-(-3)}=\mathrm{e}^{5}\).` },
    { q: R`\(2^{10}=\)`,
      choix: [R`\(1024\)`, R`\(512\)`, R`\(20\)`, R`\(2048\)`], bonne: 0,
      explication: R`\(2^{5}=32\), donc \(2^{10}=32^2=1024\).` },
    { q: R`La dérivée de \(f(x)=(2x+1)(x-3)\) est :`,
      choix: [R`\(2\)`, R`\(4x-5\)`, R`\(4x-7\)`, R`\(2x-5\)`], bonne: 1,
      explication: R`\((uv)'=u'v+uv'\) : \(2(x-3)+(2x+1)\times 1=4x-5\). (Ou : \(f(x)=2x^2-5x-3\).)` },
    { q: R`Dans un repère orthonormé, la distance entre \(A(1;2)\) et \(B(4;6)\) est :`,
      choix: [R`\(5\)`, R`\(7\)`, R`\(25\)`, R`\(\sqrt7\)`], bonne: 0,
      explication: R`\(AB=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=5\).` },
    { q: R`Le milieu du segment \([AB]\) avec \(A(-2;3)\) et \(B(4;-1)\) est :`,
      choix: [R`\((2;2)\)`, R`\((1;1)\)`, R`\((3;-2)\)`, R`\((6;-4)\)`], bonne: 1,
      explication: R`\(\left(\dfrac{-2+4}{2};\dfrac{3+(-1)}{2}\right)=(1;1)\).` },
    { q: R`La droite passant par l'origine et de vecteur normal \(\vec n\begin{pmatrix}3\\-1\end{pmatrix}\) a pour équation :`,
      choix: [R`\(x+3y=0\)`, R`\(-x+3y=0\)`, R`\(3x-y+1=0\)`, R`\(3x-y=0\)`], bonne: 3,
      explication: R`Un vecteur normal \(\begin{pmatrix}a\\b\end{pmatrix}\) donne \(ax+by+c=0\) : \(3x-y+c=0\), et \(O\) appartient à la droite donc \(c=0\).` },
    { q: R`En Python, on définit <code>def f(x): return 2*x**2 - 1</code>. Que vaut <code>f(3)</code> ?`,
      choix: [R`17`, R`35`, R`11`, R`5`], bonne: 0,
      explication: R`<code>**</code> est la puissance, prioritaire : \(2\times 3^2-1=18-1=17\).` },
    { q: R`Pour tout \(n\), \(u_n=n^2-1\). Alors \(u_{n+1}=\)`,
      choix: [R`\(n^2\)`, R`\(n^2+1\)`, R`\(n^2+2n\)`, R`\(u_n+1\)`], bonne: 2,
      explication: R`\(u_{n+1}=(n+1)^2-1=n^2+2n+1-1=n^2+2n\).` },
    { q: R`Le couple solution du système \(\begin{cases}x+y=5\\x-y=1\end{cases}\) est :`,
      choix: [R`\((2;3)\)`, R`\((4;1)\)`, R`\((5;0)\)`, R`\((3;2)\)`], bonne: 3,
      explication: R`En additionnant les deux équations : \(2x=6\), donc \(x=3\), puis \(y=2\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suite et listes Python", points: 4, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=3\) et, pour tout entier naturel \(n\), \(u_{n+1}=2u_n-1\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\) et \(u_3\).</li>
<li>On pose, pour tout \(n\), \(v_n=u_n-1\). Montrer que \((v_n)\) est géométrique, puis en déduire que \(u_n=2^{n+1}+1\).</li>
<li>On considère la fonction Python suivante :
<pre><code>def liste(n):
    L = [3]
    for i in range(n):
        L.append(2*L[-1] - 1)
    return L</code></pre>
Que renvoie <code>liste(4)</code> ? Expliquer le rôle de <code>L[-1]</code>.</li>
<li>Écrire une fonction Python <code>seuil()</code> qui renvoie le plus petit entier \(n\) tel que \(u_n\gt 1000\).</li>
<li>À l'aide de la question 2, déterminer la valeur renvoyée par <code>seuil()</code>.</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=2\times 3-1=5\), \(u_2=2\times 5-1=9\), \(u_3=2\times 9-1=17\). <i>(0,5 pt)</i></li>
<li>\(v_{n+1}=u_{n+1}-1=2u_n-1-1=2u_n-2=2(u_n-1)=2v_n\).
\((v_n)\) est géométrique de raison 2 et de premier terme \(v_0=3-1=2\). Donc \(v_n=2\times 2^n=2^{n+1}\) et \(u_n=v_n+1=2^{n+1}+1\). <i>(1,25 pt)</i></li>
<li><code>L[-1]</code> désigne le <b>dernier</b> élément de la liste : à chaque tour, on ajoute le terme suivant \(2u-1\) calculé à partir du dernier terme. La boucle tourne 4 fois et <code>liste(4)</code> renvoie <code>[3, 5, 9, 17, 33]</code>, c'est-à-dire \(u_0\) à \(u_4\). <i>(0,75 pt)</i></li>
<li>Une solution possible :
<pre><code>def seuil():
    n = 0
    u = 3
    while u &lt;= 1000:
        u = 2*u - 1
        n = n + 1
    return n</code></pre>
<i>(0,75 pt)</i></li>
<li>On cherche le premier \(n\) tel que \(2^{n+1}+1\gt 1000\). Or \(u_8=2^{9}+1=513\leqslant 1000\) et \(u_9=2^{10}+1=1025\gt 1000\). La suite étant croissante (\(2^{n+1}\) augmente avec \(n\)), <code>seuil()</code> renvoie <b>9</b>. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Concentration d'un médicament", points: 5, chapitres: [6, 4, 5],
      enonce: R`<p>On injecte un médicament à un patient. La concentration du médicament dans le sang, en mg/L, \(t\) heures après l'injection, est modélisée par
\[C(t)=4t\,\mathrm{e}^{-0{,}5t},\qquad t\in[0;10].\]</p>
<p>On donne \(\mathrm{e}^{-1}\approx 0{,}37\) et \(\mathrm{e}^{-5}\approx 0{,}0067\).</p>
<ol>
<li>Calculer \(C(0)\) et la valeur exacte de \(C(2)\).</li>
<li>Montrer que, pour tout \(t\in[0;10]\), \(C'(t)=(4-2t)\,\mathrm{e}^{-0{,}5t}\).</li>
<li>Étudier le signe de \(C'(t)\) et dresser le tableau de variations de \(C\) sur \([0;10]\) (valeurs exactes).</li>
<li>Au bout de combien de temps la concentration est-elle maximale ? Donner une valeur approchée de cette concentration maximale.</li>
<li>Déterminer une équation de la tangente à la courbe de \(C\) au point d'abscisse 0.</li>
<li>Donner une valeur approchée de la concentration au bout de 10 heures. Commenter.</li>
</ol>`,
      correction: R`<ol>
<li>\(C(0)=0\) (aucun médicament dans le sang au moment de l'injection) et \(C(2)=8\,\mathrm{e}^{-1}\). <i>(0,5 pt)</i></li>
<li>\(C=uv\) avec \(u(t)=4t\), \(u'(t)=4\), \(v(t)=\mathrm{e}^{-0{,}5t}\), \(v'(t)=-0{,}5\,\mathrm{e}^{-0{,}5t}\) :
\[C'(t)=4\,\mathrm{e}^{-0{,}5t}+4t\times(-0{,}5)\,\mathrm{e}^{-0{,}5t}=(4-2t)\,\mathrm{e}^{-0{,}5t}.\]
<i>(1 pt)</i></li>
<li>\(\mathrm{e}^{-0{,}5t}\gt 0\), donc \(C'(t)\) a le signe de \(4-2t\) : positif pour \(t\lt 2\), nul en 2, négatif pour \(t\gt 2\).
\(C(10)=40\,\mathrm{e}^{-5}\).
<table class="tv"><tr><td>\(t\)</td><td>0</td><td></td><td>2</td><td></td><td>10</td></tr>
<tr><td>\(C'(t)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(C\)</td><td>\(0\)</td><td>↗</td><td>\(8\,\mathrm{e}^{-1}\)</td><td>↘</td><td>\(40\,\mathrm{e}^{-5}\)</td></tr></table>
<i>(1,5 pt : 0,75 signe, 0,75 tableau)</i></li>
<li>La concentration est maximale <b>2 heures</b> après l'injection et vaut \(8\,\mathrm{e}^{-1}\approx 8\times 0{,}37=2{,}96\), soit environ <b>3 mg/L</b>. <i>(0,5 pt)</i></li>
<li>\(C(0)=0\) et \(C'(0)=4\,\mathrm{e}^{0}=4\). La tangente a pour équation \(y=4t\). <i>(0,75 pt)</i></li>
<li>\(C(10)=40\,\mathrm{e}^{-5}\approx 40\times 0{,}0067=0{,}268\), soit environ 0,27 mg/L. Au bout de 10 heures, il ne reste presque plus de médicament dans le sang : il a été en grande partie éliminé. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Projeté orthogonal et distance à une droite", points: 5, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère la droite \(d\) d'équation \(x-2y+4=0\) et le point \(M(4;-1)\).</p>
<ol>
<li>a) Le point \(M\) appartient-il à \(d\) ?<br>
b) Donner un vecteur normal \(\vec n\) et un vecteur directeur \(\vec u\) de la droite \(d\).</li>
<li>Déterminer une équation cartésienne de la droite \(d'\) passant par \(M\) et perpendiculaire à \(d\).</li>
<li>Déterminer les coordonnées du point \(H\), intersection de \(d\) et \(d'\). Que représente \(H\) pour le point \(M\) ?</li>
<li>Calculer la distance \(MH\).</li>
<li>Déterminer une équation du cercle \(\mathcal{C}\) de centre \(M\) passant par \(H\). Justifier que \(d\) est tangente à \(\mathcal{C}\).</li>
<li>Vérifier, à l'aide d'un produit scalaire, que \(\overrightarrow{MH}\) et \(\vec u\) sont orthogonaux.</li>
</ol>`,
      correction: R`<ol>
<li>a) \(4-2\times(-1)+4=10\ne 0\) : \(M\notin d\). <i>(0,5 pt)</i><br>
b) Pour une droite \(ax+by+c=0\) : \(\vec n\begin{pmatrix}1\\-2\end{pmatrix}\) est normal et \(\vec u\begin{pmatrix}-b\\a\end{pmatrix}=\begin{pmatrix}2\\1\end{pmatrix}\) est directeur. <i>(0,5 pt)</i></li>
<li>\(d'\) est perpendiculaire à \(d\), donc \(\vec u\begin{pmatrix}2\\1\end{pmatrix}\) est un vecteur normal de \(d'\) : \(d' : 2x+y+c=0\).
\(M\in d'\) : \(8-1+c=0\), donc \(c=-7\) et \(d' : 2x+y-7=0\). <i>(1 pt)</i></li>
<li>On résout \(\begin{cases}x-2y+4=0\\2x+y-7=0\end{cases}\). La première donne \(x=2y-4\) ; dans la seconde : \(2(2y-4)+y-7=0\iff 5y=15\iff y=3\), puis \(x=2\).
\(H(2;3)\) est le <b>projeté orthogonal</b> de \(M\) sur \(d\). <i>(1 pt)</i></li>
<li>\(\overrightarrow{MH}\begin{pmatrix}-2\\4\end{pmatrix}\), donc \(MH=\sqrt{4+16}=\sqrt{20}=2\sqrt5\). C'est la distance du point \(M\) à la droite \(d\). <i>(0,5 pt)</i></li>
<li>\(\mathcal{C} : (x-4)^2+(y+1)^2=20\).
La droite \(d\) passe par \(H\in\mathcal{C}\) et est perpendiculaire au rayon \([MH]\) : elle est tangente à \(\mathcal{C}\) en \(H\). <i>(0,75 pt)</i></li>
<li>\(\overrightarrow{MH}\cdot\vec u=(-2)\times 2+4\times 1=-4+4=0\) : les vecteurs sont orthogonaux. <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Vecteur directeur d'une droite \(\Longleftrightarrow\) vecteur normal de toute droite perpendiculaire : c'est l'outil le plus rapide pour écrire une perpendiculaire.</div>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°9", duree: "2 h", calculatrice: false,
  chapitres: [2, 3, 5, 10, 11],
  automatismes: [
    { q: R`\(\dfrac73\times\dfrac{6}{14}=\)`,
      choix: [R`\(\dfrac{13}{17}\)`, R`\(1\)`, R`\(2\)`, R`\(\dfrac12\)`], bonne: 1,
      explication: R`\(\dfrac{7\times 6}{3\times 14}=\dfrac{42}{42}=1\).` },
    { q: R`Un capital de 1 000 € est placé à intérêts composés au taux de 2 % par an. Au bout de 2 ans, il vaut :`,
      choix: [R`1 040 €`, R`1 004 €`, R`1 040,40 €`, R`1 020 €`], bonne: 2,
      explication: R`\(1000\times 1{,}02^2=1000\times 1{,}0404=1040{,}40\) €. Les intérêts de la 2e année portent aussi sur ceux de la 1re.` },
    { q: R`Le discriminant du trinôme \(2x^2-3x+1\) vaut :`,
      choix: [R`\(1\)`, R`\(17\)`, R`\(-1\)`, R`\(7\)`], bonne: 0,
      explication: R`\(\Delta=b^2-4ac=(-3)^2-4\times 2\times 1=9-8=1\).` },
    { q: R`Une forme factorisée de \(x^2-6x+9\) est :`,
      choix: [R`\((x+3)^2\)`, R`\((x-3)^2\)`, R`\((x-3)(x+3)\)`, R`\((x-9)(x+1)\)`], bonne: 1,
      explication: R`\(a^2-2ab+b^2=(a-b)^2\) avec \(a=x\), \(b=3\).` },
    { q: R`L'inéquation \(-x^2+4\gt 0\) a pour ensemble de solutions :`,
      choix: [R`\(]-2;2[\)`, R`\(]2;+\infty[\)`, R`\(]-\infty;-2[\cup]2;+\infty[\)`, R`\(]4;+\infty[\)`], bonne: 0,
      explication: R`\(-x^2+4=(2-x)(2+x)\), de coefficient \(a=-1\lt 0\) : il est positif entre ses racines \(-2\) et \(2\).` },
    { q: R`\((u_n)\) est arithmétique avec \(u_2=8\) et \(u_5=17\). Sa raison est :`,
      choix: [R`\(9\)`, R`\(4{,}5\)`, R`\(3\)`, R`\(5\)`], bonne: 2,
      explication: R`\(u_5=u_2+3r\), donc \(3r=17-8=9\) et \(r=3\).` },
    { q: R`\(1+2+2^2+\dots+2^9=\)`,
      choix: [R`\(1024\)`, R`\(1023\)`, R`\(512\)`, R`\(2047\)`], bonne: 1,
      explication: R`\(1+q+\dots+q^n=\dfrac{1-q^{n+1}}{1-q}\) : \(\dfrac{1-2^{10}}{1-2}=2^{10}-1=1023\).` },
    { q: R`Soit \(f(x)=3x^2-x\). Alors \(f'(-1)=\)`,
      choix: [R`\(-7\)`, R`\(4\)`, R`\(-5\)`, R`\(7\)`], bonne: 0,
      explication: R`\(f'(x)=6x-1\), donc \(f'(-1)=-6-1=-7\).` },
    { q: R`Sur \([0;5]\), \(f'(x)=(x-1)(x-4)\). La fonction \(f\) est décroissante sur :`,
      choix: [R`\([0;1]\)`, R`\([4;5]\)`, R`\([1;4]\)`, R`\([0;4]\)`], bonne: 2,
      explication: R`\(f'\) est un trinôme de coefficient positif, négatif entre ses racines 1 et 4 : \(f\) est décroissante sur \([1;4]\).` },
    { q: R`\(A\) et \(B\) sont incompatibles, \(P(A)=0{,}3\) et \(P(B)=0{,}5\). Alors \(P(A\cup B)=\)`,
      choix: [R`\(0{,}15\)`, R`\(0{,}8\)`, R`\(0{,}65\)`, R`\(0{,}2\)`], bonne: 1,
      explication: R`Incompatibles : \(P(A\cap B)=0\), donc \(P(A\cup B)=0{,}3+0{,}5=0{,}8\).` },
    { q: R`\(X\) prend la valeur 10 avec la probabilité 0,4 et la valeur 20 avec la probabilité 0,6. Alors \(E(X)=\)`,
      choix: [R`\(15\)`, R`\(14\)`, R`\(30\)`, R`\(16\)`], bonne: 3,
      explication: R`\(E(X)=10\times 0{,}4+20\times 0{,}6=4+12=16\).` },
    { q: R`On sait que \(E(X)=2\) et \(E(X^2)=5\). Alors \(V(X)=\)`,
      choix: [R`\(1\)`, R`\(3\)`, R`\(9\)`, R`\(\sqrt3\)`], bonne: 0,
      explication: R`König-Huygens : \(V(X)=E(X^2)-E(X)^2=5-4=1\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Un enclos le long d'un mur", points: 5, chapitres: [2, 5],
      enonce: R`<p>Un éleveur dispose de 40 m de grillage pour construire un enclos rectangulaire le long d'un mur rectiligne (le côté contre le mur n'a pas besoin de grillage). On note \(x\) la longueur, en mètres, de chacun des deux côtés perpendiculaires au mur, avec \(x\in]0;20[\).</p>
<ol>
<li>Calculer l'aire de l'enclos lorsque \(x=5\).</li>
<li>Montrer que l'aire de l'enclos, en m², est \(A(x)=-2x^2+40x\).</li>
<li>Calculer \(A'(x)\), étudier son signe et dresser le tableau de variations de \(A\) sur \(]0;20[\). En déduire les dimensions de l'enclos d'aire maximale et cette aire maximale.</li>
<li>Vérifier que, pour tout \(x\), \(A(x)=-2(x-10)^2+200\). Retrouver ainsi le résultat précédent.</li>
<li>Pour quelles valeurs de \(x\) l'aire de l'enclos est-elle supérieure ou égale à 150 m² ?</li>
<li>L'éleveur peut-il obtenir un enclos de 250 m² ? Justifier.</li>
</ol>`,
      correction: R`<ol>
<li>Pour \(x=5\), le côté parallèle au mur mesure \(40-2\times 5=30\) m, donc l'aire vaut \(5\times 30=150\) m². <i>(0,5 pt)</i></li>
<li>Le côté parallèle au mur mesure \(40-2x\), donc \(A(x)=x(40-2x)=-2x^2+40x\). <i>(0,5 pt)</i></li>
<li>\(A'(x)=-4x+40\), qui est positif pour \(x\lt 10\), nul en 10 et négatif pour \(x\gt 10\). \(A(10)=-200+400=200\).
<table class="tv"><tr><td>\(x\)</td><td>0</td><td></td><td>10</td><td></td><td>20</td></tr>
<tr><td>\(A'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(A\)</td><td></td><td>↗</td><td>\(200\)</td><td>↘</td><td></td></tr></table>
L'aire est maximale pour \(x=10\) : l'enclos mesure <b>10 m sur 20 m</b> et son aire est de <b>200 m²</b>. <i>(1,5 pt)</i></li>
<li>\(-2(x-10)^2+200=-2(x^2-20x+100)+200=-2x^2+40x-200+200=-2x^2+40x=A(x)\).
Comme \(-2(x-10)^2\leqslant 0\), on a \(A(x)\leqslant 200\), avec égalité pour \(x=10\) : on retrouve le maximum 200 atteint en 10. <i>(0,75 pt)</i></li>
<li>\(A(x)\geqslant 150\iff -2x^2+40x-150\geqslant 0\iff x^2-20x+75\leqslant 0\) (on divise par \(-2\lt 0\) : le sens change).
\(\Delta=400-300=100\), racines \(\dfrac{20-10}{2}=5\) et \(\dfrac{20+10}{2}=15\). Le trinôme \(x^2-20x+75\) est négatif ou nul entre ses racines : \(x\in[5;15]\). <i>(1,25 pt)</i></li>
<li>Non : l'aire maximale est de 200 m² \(\lt 250\) m². <i>(0,5 pt)</i></li>
</ol>
<div class="warn">Quand on multiplie ou divise une inéquation par un nombre négatif, on change le sens de l'inégalité.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Lancers francs au basket", points: 5, chapitres: [10, 11],
      enonce: R`<p>Un joueur de basket tire deux lancers francs successifs.</p>
<ul><li>Il réussit le premier avec la probabilité 0,7.</li>
<li>S'il a réussi le premier, il réussit le second avec la probabilité 0,8.</li>
<li>S'il a manqué le premier, il réussit le second avec la probabilité 0,5.</li></ul>
<p>On note \(S_1\) : « le premier lancer est réussi » et \(S_2\) : « le second lancer est réussi ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer la probabilité que le joueur réussisse les deux lancers.</li>
<li>Montrer que \(P(S_2)=0{,}71\).</li>
<li>Le second lancer est réussi. Quelle est la probabilité que le premier l'ait été aussi ?</li>
<li>On note \(X\) le nombre de lancers réussis. Déterminer la loi de probabilité de \(X\).</li>
<li>Calculer \(E(X)\) et interpréter.</li>
<li>Les événements \(S_1\) et \(S_2\) sont-ils indépendants ?</li>
</ol>`,
      correction: R`<ol>
<li>\(S_1\) (0,7) puis \(S_2\) (0,8), \(\overline{S_2}\) (0,2) ; \(\overline{S_1}\) (0,3) puis \(S_2\) (0,5), \(\overline{S_2}\) (0,5). <i>(0,5 pt)</i></li>
<li>\(P(S_1\cap S_2)=0{,}7\times 0{,}8=0{,}56\). <i>(0,5 pt)</i></li>
<li>Probabilités totales : \(P(S_2)=P(S_1\cap S_2)+P(\overline{S_1}\cap S_2)=0{,}56+0{,}3\times 0{,}5=0{,}56+0{,}15=0{,}71\). <i>(1 pt)</i></li>
<li>\(P_{S_2}(S_1)=\dfrac{P(S_1\cap S_2)}{P(S_2)}=\dfrac{0{,}56}{0{,}71}=\dfrac{56}{71}\approx 0{,}79\). <i>(0,5 pt)</i></li>
<li>\(P(X=2)=0{,}56\) ; \(P(X=1)=P(S_1\cap\overline{S_2})+P(\overline{S_1}\cap S_2)=0{,}7\times 0{,}2+0{,}15=0{,}14+0{,}15=0{,}29\) ; \(P(X=0)=0{,}3\times 0{,}5=0{,}15\).
<table class="tv"><tr><td>\(k\)</td><td>0</td><td>1</td><td>2</td></tr>
<tr><td>\(P(X=k)\)</td><td>0,15</td><td>0,29</td><td>0,56</td></tr></table>
Vérification : \(0{,}15+0{,}29+0{,}56=1\). <i>(1 pt)</i></li>
<li>\(E(X)=0\times 0{,}15+1\times 0{,}29+2\times 0{,}56=0{,}29+1{,}12=1{,}41\). Sur un grand nombre de séries de deux lancers, le joueur marque en moyenne 1,41 lancer franc par série. <i>(0,75 pt)</i></li>
<li>\(P(S_1)\times P(S_2)=0{,}7\times 0{,}71=0{,}497\ne 0{,}56=P(S_1\cap S_2)\) : les événements ne sont <b>pas indépendants</b> (réussir le premier lancer met le joueur en confiance). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — La croissance de deux plantes", points: 4, chapitres: [3],
      enonce: R`<p>Deux plantes sont mesurées chaque semaine.</p>
<ul><li>La plante A mesure 10 cm au départ et grandit de 1,5 cm par semaine.</li>
<li>La plante B mesure 4 cm au départ et sa hauteur augmente de 25 % par semaine.</li></ul>
<p>On note \(a_n\) et \(b_n\) les hauteurs, en cm, des plantes A et B au bout de \(n\) semaines. Ainsi \(a_0=10\) et \(b_0=4\).</p>
<ol>
<li>Calculer \(a_1\), \(a_2\), \(b_1\) et \(b_2\).</li>
<li>Préciser la nature de chacune des suites \((a_n)\) et \((b_n)\), puis exprimer \(a_n\) et \(b_n\) en fonction de \(n\).</li>
<li>Montrer que la suite \((b_n)\) est croissante.</li>
<li>Au bout de combien de semaines la plante A mesure-t-elle 25 cm ?</li>
<li>On donne les valeurs suivantes, arrondies au centième :
<table class="tv"><tr><td>\(n\)</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr><td>\(b_n\)</td><td>12,21</td><td>15,26</td><td>19,07</td><td>23,84</td><td>29,80</td></tr></table>
À partir de quelle semaine la plante B devient-elle plus haute que la plante A ? Justifier.</li>
</ol>`,
      correction: R`<ol>
<li>\(a_1=11{,}5\), \(a_2=13\) ; \(b_1=4\times 1{,}25=5\), \(b_2=5\times 1{,}25=6{,}25\). <i>(0,5 pt)</i></li>
<li>\(a_{n+1}=a_n+1{,}5\) : \((a_n)\) est arithmétique de raison 1,5, donc \(a_n=10+1{,}5n\).<br>
Augmenter de 25 %, c'est multiplier par 1,25 : \(b_{n+1}=1{,}25\,b_n\), \((b_n)\) est géométrique de raison 1,25, donc \(b_n=4\times 1{,}25^n\). <i>(1 pt)</i></li>
<li>\(b_{n+1}-b_n=1{,}25\,b_n-b_n=0{,}25\,b_n=0{,}25\times 4\times 1{,}25^n=1{,}25^n\gt 0\). La suite \((b_n)\) est strictement croissante. <i>(0,75 pt)</i></li>
<li>\(10+1{,}5n=25\iff 1{,}5n=15\iff n=10\) : au bout de <b>10 semaines</b>. <i>(0,5 pt)</i></li>
<li>On compare avec \(a_n=10+1{,}5n\) : \(a_5=17{,}5\), \(a_6=19\), \(a_7=20{,}5\), \(a_8=22\), \(a_9=23{,}5\).
Pour \(n\leqslant 4\), \(b_n\leqslant b_4=4\times 1{,}25^4\approx 9{,}77\lt 10\leqslant a_n\) ; puis \(b_5\lt a_5\), \(b_6\lt a_6\) et \(b_7\approx 19{,}07\lt 20{,}5=a_7\), et \(b_8\approx 23{,}84\gt 22=a_8\), \(b_9\approx 29{,}80\gt 23{,}5=a_9\).
C'est à partir de la <b>8e semaine</b> que la plante B dépasse la plante A (on admet qu'elle reste ensuite devant : une croissance de 25 % par semaine finit par l'emporter sur une croissance constante de 1,5 cm par semaine). <i>(1,25 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Standard", titre: "Sujet standard n°10", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 4, 6, 7, 8, 9],
  automatismes: [
    { q: R`\(\dfrac{1}{\dfrac12+\dfrac13}=\)`,
      choix: [R`\(5\)`, R`\(\dfrac65\)`, R`\(\dfrac56\)`, R`\(\dfrac25\)`], bonne: 1,
      explication: R`\(\dfrac12+\dfrac13=\dfrac56\), et l'inverse de \(\dfrac56\) est \(\dfrac65\).` },
    { q: R`Un article coûte 120 € TTC, avec une TVA de 20 %. Son prix hors taxe est :`,
      choix: [R`96 €`, R`140 €`, R`100 €`, R`144 €`], bonne: 2,
      explication: R`Prix HT \(\times 1{,}2=120\), donc prix HT \(=\dfrac{120}{1{,}2}=100\) €. Retirer 20 % de 120 € (96 €) est une erreur classique.` },
    { q: R`Pour tout réel \(x\), le nombre \(\mathrm{e}^{-x}\) :`,
      choix: [R`est strictement positif`, R`peut être négatif`, R`est nul pour \(x=0\)`, R`est toujours inférieur à 1`], bonne: 0,
      explication: R`La fonction exponentielle est strictement positive sur \(\mathbb{R}\) : \(\mathrm{e}^{-x}\gt 0\) (et \(\mathrm{e}^{0}=1\)).` },
    { q: R`Pour tout réel \(x\), \(\mathrm{e}^{x}\times\mathrm{e}^{x}=\)`,
      choix: [R`\(\mathrm{e}^{x^2}\)`, R`\(2\mathrm{e}^{x}\)`, R`\(\mathrm{e}^{2x}\)`, R`\(\mathrm{e}^{x+2}\)`], bonne: 2,
      explication: R`\(\mathrm{e}^{x}\times\mathrm{e}^{x}=\mathrm{e}^{x+x}=\mathrm{e}^{2x}\).` },
    { q: R`Soit \(f(x)=\sqrt x\) sur \(]0;+\infty[\). Alors \(f'(4)=\)`,
      choix: [R`\(2\)`, R`\(\dfrac12\)`, R`\(\dfrac18\)`, R`\(\dfrac14\)`], bonne: 3,
      explication: R`\(f'(x)=\dfrac{1}{2\sqrt x}\), donc \(f'(4)=\dfrac{1}{2\times 2}=\dfrac14\).` },
    { q: R`Sur le cercle trigonométrique, le réel \(\dfrac{7\pi}{3}\) est associé au même point que :`,
      choix: [R`\(\dfrac{\pi}{3}\)`, R`\(\dfrac{2\pi}{3}\)`, R`\(-\dfrac{\pi}{3}\)`, R`\(\dfrac{7\pi}{6}\)`], bonne: 0,
      explication: R`\(\dfrac{7\pi}{3}=\dfrac{\pi}{3}+2\pi\) : on a fait un tour complet en plus.` },
    { q: R`On sait que \(\cos x=0{,}6\) et \(\sin x\gt 0\). Alors \(\sin x=\)`,
      choix: [R`\(0{,}4\)`, R`\(0{,}8\)`, R`\(0{,}64\)`, R`\(\sqrt{0{,}4}\)`], bonne: 1,
      explication: R`\(\sin^2x=1-\cos^2x=1-0{,}36=0{,}64\), et \(\sin x\gt 0\), donc \(\sin x=0{,}8\).` },
    { q: R`Dans un repère orthonormé, \(A(0;0)\), \(B(2;1)\) et \(C(-1;3)\). Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`,
      choix: [R`\(1\)`, R`\(5\)`, R`\(-1\)`, R`\(7\)`], bonne: 0,
      explication: R`\(\overrightarrow{AB}\begin{pmatrix}2\\1\end{pmatrix}\), \(\overrightarrow{AC}\begin{pmatrix}-1\\3\end{pmatrix}\) : \(2\times(-1)+1\times 3=1\).` },
    { q: R`\(\|\vec u\|=2\), \(\|\vec v\|=3\) et \(\vec u\cdot\vec v=1\). Alors \(\|\vec u+\vec v\|^2=\)`,
      choix: [R`\(13\)`, R`\(15\)`, R`\(25\)`, R`\(11\)`], bonne: 1,
      explication: R`\(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2=4+2+9=15\).` },
    { q: R`Le cercle d'équation \(x^2+(y-3)^2=16\) a pour centre et pour rayon :`,
      choix: [R`\((0;3)\) et \(16\)`, R`\((0;-3)\) et \(4\)`, R`\((0;3)\) et \(4\)`, R`\((3;0)\) et \(4\)`], bonne: 2,
      explication: R`\((x-0)^2+(y-3)^2=4^2\) : centre \((0;3)\), rayon \(\sqrt{16}=4\).` },
    { q: R`En Python, que vaut <code>17 % 5</code> ?`,
      choix: [R`3`, R`2`, R`3.4`, R`85`], bonne: 1,
      explication: R`<code>%</code> donne le reste de la division euclidienne : \(17=3\times 5+2\), le reste est 2.` },
    { q: R`La contraposée de « Si \(n\) est pair, alors \(n^2\) est pair » est :`,
      choix: [R`« Si \(n^2\) est pair, alors \(n\) est pair »`, R`« Si \(n^2\) est impair, alors \(n\) est impair »`, R`« Si \(n\) est impair, alors \(n^2\) est impair »`, R`« \(n\) est pair et \(n^2\) est impair »`], bonne: 1,
      explication: R`La contraposée de « Si \(A\), alors \(B\) » est « Si non \(B\), alors non \(A\) ». La première proposition est la réciproque.` }
  ],
  exercices: [
    { titre: "Exercice 1 — Exponentielle : équations et inégalité", points: 5, chapitres: [6, 4, 2],
      enonce: R`<p><b>Partie A.</b> Résoudre dans \(\mathbb{R}\) les équations suivantes.</p>
<ol>
<li>\(\mathrm{e}^{2x-1}=\mathrm{e}^{x+3}\)</li>
<li>\(\mathrm{e}^{x^2}=\mathrm{e}^{4x-3}\)</li>
</ol>
<p><b>Partie B.</b> On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=\mathrm{e}^{x}-x-1\).</p>
<ol start="3">
<li>Calculer \(f'(x)\) et étudier son signe sur \(\mathbb{R}\).</li>
<li>Dresser le tableau de variations de \(f\) (sans les limites) et préciser son minimum.</li>
<li>En déduire que, pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant x+1\). Vérifier que la droite d'équation \(y=x+1\) est la tangente à la courbe de la fonction exponentielle au point d'abscisse 0 et interpréter graphiquement l'inégalité.</li>
<li>En déduire que \(\mathrm{e}^{0{,}1}\geqslant 1{,}1\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\mathrm{e}^{a}=\mathrm{e}^{b}\iff a=b\). Donc \(2x-1=x+3\iff x=4\). \(S=\{4\}\). <i>(0,5 pt)</i></li>
<li>\(x^2=4x-3\iff x^2-4x+3=0\). \(\Delta=16-12=4\), d'où \(x=\dfrac{4-2}{2}=1\) ou \(x=\dfrac{4+2}{2}=3\). \(S=\{1;3\}\). <i>(1 pt)</i></li>
<li>\(f'(x)=\mathrm{e}^{x}-1\). La fonction exponentielle est strictement croissante et \(\mathrm{e}^{0}=1\), donc :
\(f'(x)\gt 0\iff\mathrm{e}^{x}\gt\mathrm{e}^{0}\iff x\gt 0\), \(f'(x)\lt 0\iff x\lt 0\) et \(f'(0)=0\). <i>(1 pt)</i></li>
<li>\(f(0)=\mathrm{e}^{0}-0-1=0\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \(\mathbb{R}\) est \(0\), atteint en \(x=0\). <i>(1 pt)</i></li>
<li>Le minimum de \(f\) étant 0, pour tout réel \(x\) : \(f(x)\geqslant 0\), soit \(\mathrm{e}^{x}-x-1\geqslant 0\), c'est-à-dire \(\mathrm{e}^{x}\geqslant x+1\).<br>
La tangente à la courbe de \(\exp\) en 0 a pour équation \(y=\exp'(0)(x-0)+\exp(0)=1\times x+1=x+1\).<br>
Interprétation : la courbe de la fonction exponentielle est située <b>au-dessus</b> de sa tangente au point d'abscisse 0. <i>(1 pt)</i></li>
<li>Avec \(x=0{,}1\) : \(\mathrm{e}^{0{,}1}\geqslant 0{,}1+1=1{,}1\). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">Pour démontrer une inégalité \(A(x)\geqslant B(x)\), on étudie souvent la fonction différence \(A(x)-B(x)\) et on montre que son minimum est positif ou nul.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Un triangle isocèle dans un repère", points: 5, chapitres: [8, 7, 9],
      enonce: R`<p>Dans un repère orthonormé, on considère les points \(A(1;1)\), \(B\left(1+\sqrt3;2\right)\) et \(C\left(2;1+\sqrt3\right)\).</p>
<ol>
<li>Calculer les coordonnées de \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\), puis les longueurs \(AB\) et \(AC\). Quelle est la nature du triangle \(ABC\) ?</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\). En déduire \(\cos\widehat{BAC}\), puis une mesure en radians de l'angle \(\widehat{BAC}\).</li>
<li>Calculer l'aire du triangle \(ABC\) (on rappelle que cette aire vaut \(\dfrac12\,AB\times AC\times\sin\widehat{BAC}\)).</li>
<li>Soit \(I\) le milieu de \([BC]\). Calculer les coordonnées de \(I\), puis le produit scalaire \(\overrightarrow{AI}\cdot\overrightarrow{BC}\). Interpréter.</li>
<li>En utilisant le vecteur \(\overrightarrow{BC}\), déterminer une équation cartésienne de la droite \((AI)\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}\begin{pmatrix}\sqrt3\\1\end{pmatrix}\) et \(\overrightarrow{AC}\begin{pmatrix}1\\\sqrt3\end{pmatrix}\).
\(AB=\sqrt{3+1}=2\) et \(AC=\sqrt{1+3}=2\) : le triangle \(ABC\) est <b>isocèle en \(A\)</b>. <i>(1 pt)</i></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=\sqrt3\times 1+1\times\sqrt3=2\sqrt3\).
Or \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}=4\cos\widehat{BAC}\), donc \(\cos\widehat{BAC}=\dfrac{2\sqrt3}{4}=\dfrac{\sqrt3}{2}\).
L'angle géométrique \(\widehat{BAC}\) est compris entre 0 et \(\pi\), donc \(\widehat{BAC}=\dfrac{\pi}{6}\). <i>(1,5 pt)</i></li>
<li>\(\mathcal{A}=\dfrac12\times 2\times 2\times\sin\dfrac{\pi}{6}=2\times\dfrac12=1\) unité d'aire. <i>(0,75 pt)</i></li>
<li>\(I\left(\dfrac{1+\sqrt3+2}{2};\dfrac{2+1+\sqrt3}{2}\right)=\left(\dfrac{3+\sqrt3}{2};\dfrac{3+\sqrt3}{2}\right)\).
\(\overrightarrow{AI}\begin{pmatrix}\frac{1+\sqrt3}{2}\\\frac{1+\sqrt3}{2}\end{pmatrix}\) et \(\overrightarrow{BC}\begin{pmatrix}1-\sqrt3\\\sqrt3-1\end{pmatrix}\).
\[\overrightarrow{AI}\cdot\overrightarrow{BC}=\frac{1+\sqrt3}{2}\left[(1-\sqrt3)+(\sqrt3-1)\right]=\frac{1+\sqrt3}{2}\times 0=0.\]
Les droites \((AI)\) et \((BC)\) sont perpendiculaires : \((AI)\) est la hauteur issue de \(A\) et aussi la médiatrice de \([BC]\), ce qui est cohérent avec le fait que \(ABC\) est isocèle en \(A\). <i>(1 pt)</i></li>
<li>\(\overrightarrow{BC}\) est un vecteur normal de \((AI)\) : \((1-\sqrt3)x+(\sqrt3-1)y+c=0\). Avec \(A(1;1)\) : \((1-\sqrt3)+(\sqrt3-1)+c=0\), donc \(c=0\).
En divisant par \(1-\sqrt3\ne 0\) : \((AI) : x-y=0\), c'est-à-dire \(y=x\). On vérifie que \(I\), dont les deux coordonnées sont égales, appartient bien à cette droite. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Python, logique et second degré", points: 4, chapitres: [1, 2],
      enonce: R`<ol>
<li>On considère la fonction Python suivante :
<pre><code>def nb_racines(a, b, c):
    d = b**2 - 4*a*c
    if d &gt; 0:
        return 2
    elif d == 0:
        return 1
    else:
        return 0</code></pre>
Que renvoient <code>nb_racines(1, -6, 9)</code>, <code>nb_racines(2, 3, 5)</code> et <code>nb_racines(-1, 4, 5)</code> ? Justifier.</li>
<li>Pour un réel \(m\), on considère le trinôme \(T_m(x)=x^2+mx+4\).<br>
a) Exprimer son discriminant \(\Delta\) en fonction de \(m\).<br>
b) Démontrer la proposition \(\mathcal{P}\) : « Si \(m\gt 4\), alors \(T_m\) admet deux racines distinctes ».<br>
c) La réciproque de \(\mathcal{P}\) est-elle vraie ? Justifier.<br>
d) Énoncer la contraposée de \(\mathcal{P}\).</li>
<li>Que contient la liste <code>[m for m in range(-6, 7) if m**2 - 16 &gt; 0]</code> ? Interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>La variable <code>d</code> est le discriminant et la fonction renvoie le nombre de racines réelles du trinôme \(ax^2+bx+c\).
<ul><li>\((1,-6,9)\) : \(\Delta=36-36=0\), la fonction renvoie <b>1</b>.</li>
<li>\((2,3,5)\) : \(\Delta=9-40=-31\lt 0\), elle renvoie <b>0</b>.</li>
<li>\((-1,4,5)\) : \(\Delta=16+20=36\gt 0\), elle renvoie <b>2</b>.</li></ul>
<i>(1,5 pt : 0,5 par cas)</i></li>
<li>a) \(\Delta=m^2-4\times 1\times 4=m^2-16\). <i>(0,5 pt)</i><br>
b) Si \(m\gt 4\), alors, comme \(m\) et 4 sont positifs, \(m^2\gt 16\), donc \(\Delta\gt 0\) : \(T_m\) admet deux racines distinctes. <i>(0,5 pt)</i><br>
c) Réciproque : « Si \(T_m\) admet deux racines distinctes, alors \(m\gt 4\) ». Elle est <b>fausse</b> : pour \(m=-5\), \(\Delta=25-16=9\gt 0\), mais \(-5\lt 4\). <i>(0,5 pt)</i><br>
d) Contraposée : « Si \(T_m\) n'admet pas deux racines distinctes, alors \(m\leqslant 4\) ». <i>(0,5 pt)</i></li>
<li>On garde les entiers \(m\) de \(-6\) à \(6\) tels que \(m^2\gt 16\), c'est-à-dire \(m\lt -4\) ou \(m\gt 4\) : la liste vaut <code>[-6, -5, 5, 6]</code>. Ce sont les entiers de \([-6;6]\) pour lesquels \(T_m\) admet deux racines distinctes. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

})();
