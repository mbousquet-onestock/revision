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

})();
