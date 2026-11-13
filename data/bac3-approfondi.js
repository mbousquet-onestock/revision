// Sujets type bac — niveau Approfondi (10 sujets). Format : voir SCHEMA.md.
(function () {
const R = String.raw;
const BAC = (window.BAC = window.BAC || []);

BAC.push({
 "niveau": "Approfondi",
 "titre": "Sujet approfondi n°1",
 "duree": "2 h",
 "calculatrice": false,
 "chapitres": [
  1,
  2,
  3,
  4,
  5,
  6,
  8,
  10,
  11
 ],
 "automatismes": [
  {
   "q": "Le coefficient multiplicateur associé à une baisse de 15 % est :",
   "choix": [
    "\\(0{,}15\\)",
    "\\(1{,}15\\)",
    "\\(0{,}85\\)",
    "\\(-0{,}15\\)"
   ],
   "bonne": 2,
   "explication": "Baisser de 15 %, c'est multiplier par \\(1-\\frac{15}{100}=0{,}85\\)."
  },
  {
   "q": "\\(\\sqrt{50}=\\)",
   "choix": [
    "\\(25\\)",
    "\\(5\\sqrt2\\)",
    "\\(2\\sqrt5\\)",
    "\\(10\\sqrt5\\)"
   ],
   "bonne": 1,
   "explication": "\\(\\sqrt{50}=\\sqrt{25\\times 2}=\\sqrt{25}\\times\\sqrt2=5\\sqrt2\\)."
  },
  {
   "q": "La contraposée de « Si \\(n\\) est pair, alors \\(n^2\\) est pair » est :",
   "choix": [
    "« Si \\(n^2\\) est pair, alors \\(n\\) est pair »",
    "« Si \\(n\\) est impair, alors \\(n^2\\) est impair »",
    "« Si \\(n^2\\) est impair, alors \\(n\\) est impair »",
    "« \\(n\\) est pair et \\(n^2\\) est impair »"
   ],
   "bonne": 2,
   "explication": "La contraposée de « \\(P\\Rightarrow Q\\) » est « non \\(Q\\Rightarrow\\) non \\(P\\) ». Le premier choix est la réciproque, le deuxième n'est ni l'une ni l'autre."
  },
  {
   "q": "La dérivée de \\(f(x)=(2x+1)^2\\) est :",
   "choix": [
    "\\(2(2x+1)\\)",
    "\\(8x+4\\)",
    "\\(4x^2+1\\)",
    "\\(4x+1\\)"
   ],
   "bonne": 1,
   "explication": "\\(\\big(g(ax+b)\\big)'=a\\,g'(ax+b)\\) avec \\(g(X)=X^2\\) : \\(f'(x)=2\\times 2(2x+1)=8x+4\\). On peut aussi développer : \\(f(x)=4x^2+4x+1\\)."
  },
  {
   "q": "Que contient la liste <code>L = [k**2 for k in range(4)]</code> ?",
   "choix": [
    "<code>[1, 4, 9, 16]</code>",
    "<code>[0, 1, 4, 9]</code>",
    "<code>[0, 2, 4, 6]</code>",
    "<code>[0, 1, 4, 9, 16]</code>"
   ],
   "bonne": 1,
   "explication": "<code>range(4)</code> donne 0, 1, 2, 3 (le 4 est exclu) ; on met leurs carrés : 0, 1, 4, 9."
  },
  {
   "q": "\\(f\\) est dérivable, \\(f(2)=3\\) et \\(f'(2)=-1\\). La tangente à la courbe de \\(f\\) au point d'abscisse 2 a pour équation :",
   "choix": [
    "\\(y=-x+5\\)",
    "\\(y=3x-1\\)",
    "\\(y=-x+3\\)",
    "\\(y=-x-1\\)"
   ],
   "bonne": 0,
   "explication": "\\(y=f'(2)(x-2)+f(2)=-(x-2)+3=-x+5\\)."
  },
  {
   "q": "\\(1+2+3+\\dots+100=\\)",
   "choix": [
    "\\(5000\\)",
    "\\(10\\,100\\)",
    "\\(5050\\)",
    "\\(4950\\)"
   ],
   "bonne": 2,
   "explication": "\\(1+2+\\dots+n=\\dfrac{n(n+1)}{2}\\), donc \\(\\dfrac{100\\times 101}{2}=5050\\)."
  },
  {
   "q": "La solution de l'équation \\(\\mathrm{e}^{2x-4}=1\\) est :",
   "choix": [
    "\\(x=0\\)",
    "\\(x=2\\)",
    "\\(x=\\dfrac52\\)",
    "\\(x=4\\)"
   ],
   "bonne": 1,
   "explication": "\\(\\mathrm{e}^{a}=1=\\mathrm{e}^0\\iff a=0\\) : \\(2x-4=0\\), donc \\(x=2\\)."
  },
  {
   "q": "\\(\\|\\vec u\\|=3\\), \\(\\|\\vec v\\|=4\\) et l'angle \\((\\vec u,\\vec v)\\) mesure \\(\\dfrac{\\pi}{3}\\). Alors \\(\\vec u\\cdot\\vec v=\\)",
   "choix": [
    "\\(12\\)",
    "\\(6\\sqrt3\\)",
    "\\(6\\)",
    "\\(7\\)"
   ],
   "bonne": 2,
   "explication": "\\(\\vec u\\cdot\\vec v=\\|\\vec u\\|\\times\\|\\vec v\\|\\times\\cos\\frac{\\pi}{3}=3\\times 4\\times\\frac12=6\\)."
  },
  {
   "q": "\\(P(A)=0{,}4\\) et \\(P_A(B)=0{,}5\\). Alors \\(P(A\\cap B)=\\)",
   "choix": [
    "\\(0{,}9\\)",
    "\\(0{,}8\\)",
    "\\(0{,}2\\)",
    "\\(0{,}1\\)"
   ],
   "bonne": 2,
   "explication": "\\(P(A\\cap B)=P(A)\\times P_A(B)=0{,}4\\times 0{,}5=0{,}2\\)."
  },
  {
   "q": "L'ensemble des solutions de \\(-2x^2+8\\gt 0\\) est :",
   "choix": [
    "\\(]-2;2[\\)",
    "\\(]-\\infty;-2[\\cup]2;+\\infty[\\)",
    "\\(]-4;4[\\)",
    "\\(]2;+\\infty[\\)"
   ],
   "bonne": 0,
   "explication": "\\(-2x^2+8=-2(x-2)(x+2)\\), racines \\(\\pm 2\\) et \\(a=-2\\lt 0\\) : le trinôme est positif entre les racines."
  },
  {
   "q": "\\(1+2+2^2+\\dots+2^{9}=\\)",
   "choix": [
    "\\(2^{10}\\)",
    "\\(1023\\)",
    "\\(511\\)",
    "\\(2^{9}-1\\)"
   ],
   "bonne": 1,
   "explication": "\\(1+q+\\dots+q^n=\\dfrac{q^{n+1}-1}{q-1}\\) : \\(\\dfrac{2^{10}-1}{2-1}=1024-1=1023\\)."
  }
 ],
 "exercices": [
  {
   "titre": "Exercice 1 — Suite, suite auxiliaire et listes Python",
   "points": 4,
   "chapitres": [
    3,
    1
   ],
   "enonce": "<p>On considère la suite \\((u_n)\\) définie par \\(u_0=2\\) et, pour tout entier naturel \\(n\\), \\(u_{n+1}=\\dfrac{2u_n}{2+u_n}\\). On admet que \\(u_n\\gt 0\\) pour tout \\(n\\).</p>\n<ol>\n<li>Calculer \\(u_1\\) et \\(u_2\\).</li>\n<li>On considère la fonction Python ci-dessous.\n<pre><code>def termes(N):\n    L = [2]\n    for k in range(N):\n        u = L[-1]\n        L.append(..........)\n    return L</code></pre>\na) Compléter la ligne manquante pour que <code>termes(N)</code> renvoie la liste \\([u_0, u_1, \\dots, u_N]\\).<br>\nb) Que renvoie <code>termes(4)</code> ? (valeurs exactes sous forme de fractions acceptées)</li>\n<li>On pose \\(v_n=\\dfrac{1}{u_n}\\). Montrer que \\((v_n)\\) est arithmétique ; préciser sa raison et son premier terme.</li>\n<li>En déduire l'expression de \\(v_n\\), puis de \\(u_n\\), en fonction de \\(n\\).</li>\n<li>Étudier le sens de variation de \\((u_n)\\).</li>\n<li>Déterminer le plus petit entier \\(n\\) tel que \\(u_n\\lt 0{,}01\\).</li>\n</ol>",
   "correction": "<ol>\n<li>\\(u_1=\\dfrac{2\\times 2}{2+2}=1\\) et \\(u_2=\\dfrac{2\\times 1}{2+1}=\\dfrac23\\). <i>(0,5 pt)</i></li>\n<li>a) <code>L.append(2*u/(2+u))</code> : <code>L[-1]</code> est le dernier terme calculé, on ajoute le suivant en fin de liste. <i>(0,5 pt)</i><br>\nb) La boucle tourne 4 fois : la liste contient \\(u_0\\) à \\(u_4\\), soit <code>[2, 1.0, 0.6666666666666666, 0.5, 0.4]</code>, c'est-à-dire \\(\\left[2;1;\\frac23;\\frac12;\\frac25\\right]\\). <i>(0,5 pt)</i></li>\n<li>Pour tout \\(n\\) (avec \\(u_n\\gt 0\\)) :\n\\[v_{n+1}=\\frac{1}{u_{n+1}}=\\frac{2+u_n}{2u_n}=\\frac{2}{2u_n}+\\frac{u_n}{2u_n}=\\frac{1}{u_n}+\\frac12=v_n+\\frac12.\\]\n\\((v_n)\\) est arithmétique de raison \\(r=\\frac12\\) et de premier terme \\(v_0=\\frac{1}{u_0}=\\frac12\\). <i>(1 pt)</i></li>\n<li>\\(v_n=v_0+nr=\\dfrac12+\\dfrac n2=\\dfrac{n+1}{2}\\), donc \\(u_n=\\dfrac{1}{v_n}=\\dfrac{2}{n+1}\\). On retrouve bien \\(u_4=\\frac25\\). <i>(0,5 pt)</i></li>\n<li>\\(u_{n+1}-u_n=\\dfrac{2}{n+2}-\\dfrac{2}{n+1}=\\dfrac{2(n+1)-2(n+2)}{(n+1)(n+2)}=\\dfrac{-2}{(n+1)(n+2)}\\lt 0\\). La suite \\((u_n)\\) est strictement décroissante. <i>(0,5 pt)</i></li>\n<li>\\(u_n\\lt 0{,}01\\iff \\dfrac{2}{n+1}\\lt\\dfrac{1}{100}\\iff n+1\\gt 200\\) (les deux membres sont positifs) \\(\\iff n\\gt 199\\). Le plus petit entier convenable est \\(n=200\\). <i>(0,5 pt)</i></li>\n</ol>\n<p><b>Total : 4 points.</b></p>"
  },
  {
   "titre": "Exercice 2 — Exponentielle : concentration d'un médicament (calculatrice autorisée)",
   "points": 4,
   "chapitres": [
    6,
    4,
    5
   ],
   "enonce": "<p>La concentration d'un médicament dans le sang (en mg/L), \\(t\\) heures après une injection, est modélisée par\n\\[C(t)=4t\\,\\mathrm{e}^{-0{,}5t},\\qquad t\\in[0;10].\\]</p>\n<ol>\n<li>Montrer que \\(C'(t)=(4-2t)\\,\\mathrm{e}^{-0{,}5t}\\).</li>\n<li>Dresser le tableau de variations de \\(C\\) sur \\([0;10]\\). Au bout de combien de temps la concentration est-elle maximale ? Donner cette concentration maximale (valeur exacte et arrondi au centième).</li>\n<li>a) Déterminer une équation de la tangente \\(T\\) à la courbe de \\(C\\) au point d'abscisse 0.<br>\nb) Démontrer que pour tout \\(t\\in[0;10]\\), \\(C(t)\\leqslant 4t\\). Interpréter graphiquement.</li>\n<li>Calculer le taux de variation moyen de \\(C\\) entre \\(t=2\\) et \\(t=10\\) (arrondi au centième) et l'interpréter.</li>\n</ol>",
   "correction": "<ol>\n<li>\\(C=uv\\) avec \\(u(t)=4t\\), \\(u'(t)=4\\), \\(v(t)=\\mathrm{e}^{-0{,}5t}\\), \\(v'(t)=-0{,}5\\,\\mathrm{e}^{-0{,}5t}\\) :\n\\[C'(t)=4\\,\\mathrm{e}^{-0{,}5t}+4t\\times(-0{,}5)\\,\\mathrm{e}^{-0{,}5t}=(4-2t)\\,\\mathrm{e}^{-0{,}5t}.\\]\n<i>(1 pt)</i></li>\n<li>\\(\\mathrm{e}^{-0{,}5t}\\gt 0\\), donc \\(C'(t)\\) a le signe de \\(4-2t\\) : positif sur \\([0;2[\\), nul en 2, négatif sur \\(]2;10]\\).\n\\(C(0)=0\\), \\(C(2)=8\\,\\mathrm{e}^{-1}=\\dfrac8{\\mathrm{e}}\\approx 2{,}94\\), \\(C(10)=40\\,\\mathrm{e}^{-5}\\approx 0{,}27\\).\n<table class=\"tv\"><tr><td>\\(t\\)</td><td>0</td><td></td><td>2</td><td></td><td>10</td></tr>\n<tr><td>\\(C'(t)\\)</td><td></td><td>\\(+\\)</td><td>0</td><td>\\(-\\)</td><td></td></tr>\n<tr><td>\\(C\\)</td><td>0</td><td>↗</td><td>\\(\\frac{8}{\\mathrm{e}}\\)</td><td>↘</td><td>\\(40\\,\\mathrm{e}^{-5}\\)</td></tr></table>\nLa concentration est maximale <b>2 heures</b> après l'injection et vaut \\(\\dfrac8{\\mathrm{e}}\\approx 2{,}94\\) mg/L. <i>(1 pt)</i></li>\n<li>a) \\(C(0)=0\\) et \\(C'(0)=4\\times\\mathrm{e}^0=4\\) : \\(T : y=4t\\). <i>(0,5 pt)</i><br>\nb) Pour \\(t\\in[0;10]\\), \\(-0{,}5t\\leqslant 0\\), donc \\(\\mathrm{e}^{-0{,}5t}\\leqslant\\mathrm{e}^0=1\\) (la fonction exponentielle est croissante). En multipliant par \\(4t\\geqslant 0\\) : \\(4t\\,\\mathrm{e}^{-0{,}5t}\\leqslant 4t\\), soit \\(C(t)\\leqslant 4t\\).<br>\nGraphiquement : la courbe de \\(C\\) est située <b>en dessous de sa tangente</b> \\(T\\) en 0 sur \\([0;10]\\). <i>(0,5 pt)</i></li>\n<li>\\[\\frac{C(10)-C(2)}{10-2}=\\frac{40\\,\\mathrm{e}^{-5}-8\\,\\mathrm{e}^{-1}}{8}\\approx\\frac{0{,}2695-2{,}9430}{8}\\approx -0{,}33.\\]\nEntre la 2<sup>e</sup> et la 10<sup>e</sup> heure, la concentration diminue en moyenne d'environ 0,33 mg/L par heure. <i>(1 pt)</i></li>\n</ol>\n<div class=\"astuce\">Pour comparer \\(C(t)\\) à sa tangente, pense à encadrer l'exponentielle : \\(\\mathrm{e}^{a}\\leqslant 1\\) dès que \\(a\\leqslant 0\\).</div>\n<p><b>Total : 4 points.</b></p>"
  },
  {
   "titre": "Exercice 3 — Produit scalaire dans un carré (calculatrice autorisée)",
   "points": 3,
   "chapitres": [
    8,
    9
   ],
   "enonce": "<p>\\(ABCD\\) est un carré de côté 4. \\(I\\) est le milieu de \\([AB]\\) et \\(J\\) le milieu de \\([BC]\\).</p>\n<svg viewBox=\"-10 -10 140 140\" width=\"160\" height=\"160\" role=\"img\" aria-label=\"Carré ABCD avec I milieu de AB et J milieu de BC\">\n<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n<rect x=\"10\" y=\"10\" width=\"100\" height=\"100\"/>\n<line x1=\"10\" y1=\"10\" x2=\"60\" y2=\"110\" stroke-dasharray=\"4 3\"/>\n<line x1=\"10\" y1=\"110\" x2=\"110\" y2=\"60\" stroke-dasharray=\"4 3\"/>\n</g>\n<g fill=\"currentColor\" font-size=\"10\" font-family=\"sans-serif\">\n<text x=\"0\" y=\"122\">A</text><text x=\"112\" y=\"122\">B</text><text x=\"112\" y=\"8\">C</text><text x=\"0\" y=\"8\">D</text>\n<text x=\"57\" y=\"124\">I</text><text x=\"114\" y=\"64\">J</text>\n</g>\n</svg>\n<ol>\n<li>En décomposant \\(\\overrightarrow{DI}=\\overrightarrow{DA}+\\overrightarrow{AI}\\) et \\(\\overrightarrow{AJ}=\\overrightarrow{AB}+\\overrightarrow{BJ}\\), calculer \\(\\overrightarrow{DI}\\cdot\\overrightarrow{AJ}\\). Que peut-on en déduire pour les droites \\((DI)\\) et \\((AJ)\\) ?</li>\n<li>On se place dans le repère orthonormé \\(\\left(A;\\tfrac14\\overrightarrow{AB},\\tfrac14\\overrightarrow{AD}\\right)\\). Donner les coordonnées de \\(D\\), \\(I\\), \\(J\\) et retrouver le résultat de la question 1.</li>\n<li>Calculer \\(\\overrightarrow{AJ}\\cdot\\overrightarrow{AC}\\), puis en déduire une mesure, arrondie au dixième de degré, de l'angle \\(\\widehat{JAC}\\).</li>\n</ol>",
   "correction": "<ol>\n<li>\\[\\overrightarrow{DI}\\cdot\\overrightarrow{AJ}=\\overrightarrow{DA}\\cdot\\overrightarrow{AB}+\\overrightarrow{DA}\\cdot\\overrightarrow{BJ}+\\overrightarrow{AI}\\cdot\\overrightarrow{AB}+\\overrightarrow{AI}\\cdot\\overrightarrow{BJ}.\\]\n\\(\\overrightarrow{DA}\\perp\\overrightarrow{AB}\\) et \\(\\overrightarrow{AI}\\perp\\overrightarrow{BJ}\\) : ces deux produits sont nuls.\n\\(\\overrightarrow{DA}\\) et \\(\\overrightarrow{BJ}\\) sont colinéaires de sens contraires : \\(\\overrightarrow{DA}\\cdot\\overrightarrow{BJ}=-4\\times 2=-8\\).\n\\(\\overrightarrow{AI}\\) et \\(\\overrightarrow{AB}\\) sont colinéaires de même sens : \\(\\overrightarrow{AI}\\cdot\\overrightarrow{AB}=2\\times 4=8\\).\nDonc \\(\\overrightarrow{DI}\\cdot\\overrightarrow{AJ}=0-8+8+0=0\\) : les droites \\((DI)\\) et \\((AJ)\\) sont <b>perpendiculaires</b>. <i>(1,25 pt)</i></li>\n<li>\\(D(0;4)\\), \\(I(2;0)\\), \\(J(4;2)\\). \\(\\overrightarrow{DI}(2;-4)\\), \\(\\overrightarrow{AJ}(4;2)\\) et \\(\\overrightarrow{DI}\\cdot\\overrightarrow{AJ}=2\\times 4+(-4)\\times 2=0\\) ✓. <i>(0,75 pt)</i></li>\n<li>\\(C(4;4)\\) : \\(\\overrightarrow{AC}(4;4)\\), donc \\(\\overrightarrow{AJ}\\cdot\\overrightarrow{AC}=16+8=24\\).\n\\(AJ=\\sqrt{16+4}=2\\sqrt5\\) et \\(AC=4\\sqrt2\\). Comme \\(\\overrightarrow{AJ}\\cdot\\overrightarrow{AC}=AJ\\times AC\\times\\cos\\widehat{JAC}\\) :\n\\[\\cos\\widehat{JAC}=\\frac{24}{2\\sqrt5\\times 4\\sqrt2}=\\frac{24}{8\\sqrt{10}}=\\frac{3}{\\sqrt{10}}\\approx 0{,}9487,\\]\nd'où \\(\\widehat{JAC}\\approx 18{,}4^\\circ\\). <i>(1 pt)</i></li>\n</ol>\n<p><b>Total : 3 points.</b></p>"
  },
  {
   "titre": "Exercice 4 — Dépistage : probabilités et coût moyen",
   "points": 3,
   "chapitres": [
    10,
    11
   ],
   "enonce": "<p>Une maladie touche 2 % d'une population. Un test de dépistage est positif pour 95 % des personnes malades et pour 3 % des personnes non malades. On choisit une personne au hasard ; on note \\(M\\) : « la personne est malade » et \\(T\\) : « le test est positif ».</p>\n<ol>\n<li>Construire un arbre pondéré décrivant la situation.</li>\n<li>Montrer que \\(P(T)=0{,}0484\\).</li>\n<li>Le test d'une personne est positif. Quelle est la probabilité qu'elle soit malade ? (arrondir au millième) Commenter.</li>\n<li>Le test coûte 10 € ; en cas de test positif, un examen complémentaire coûtant 50 € est réalisé. On note \\(X\\) le coût total pour une personne. Donner la loi de \\(X\\), calculer \\(E(X)\\), puis estimer le budget à prévoir pour dépister 5 000 personnes.</li>\n</ol>",
   "correction": "<ol>\n<li>\\(M\\) (0,02) puis \\(T\\) (0,95) / \\(\\overline{T}\\) (0,05) ; \\(\\overline{M}\\) (0,98) puis \\(T\\) (0,03) / \\(\\overline{T}\\) (0,97). <i>(0,5 pt)</i></li>\n<li>Probabilités totales :\n\\[P(T)=0{,}02\\times 0{,}95+0{,}98\\times 0{,}03=0{,}019+0{,}0294=0{,}0484.\\]\n<i>(0,75 pt)</i></li>\n<li>\\[P_T(M)=\\frac{P(M\\cap T)}{P(T)}=\\frac{0{,}019}{0{,}0484}=\\frac{95}{242}\\approx 0{,}393.\\]\nMoins de 40 % des personnes testées positives sont réellement malades ! C'est parce que la maladie est rare : les « faux positifs » parmi les 98 % de non-malades sont plus nombreux que les vrais positifs. Un test positif doit donc être confirmé. <i>(0,75 pt)</i></li>\n<li>\\(X\\) prend la valeur 60 si le test est positif et 10 sinon : \\(P(X=60)=0{,}0484\\) et \\(P(X=10)=0{,}9516\\).\n\\[E(X)=10\\times 0{,}9516+60\\times 0{,}0484=9{,}516+2{,}904=12{,}42.\\]\nLe coût moyen est de 12,42 € par personne ; pour 5 000 personnes, on peut prévoir environ \\(5000\\times 12{,}42=62\\,100\\) €. <i>(1 pt)</i></li>\n</ol>\n<p><b>Total : 3 points.</b></p>"
  }
 ]
});

})();
