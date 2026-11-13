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


BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°2", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`La forme factorisée de \(2x^2-8x+6\) est :`,
      choix: [R`\(2(x+1)(x+3)\)`, R`\((x-1)(x-3)\)`, R`\(2(x-1)(x-3)\)`, R`\(2(x-2)^2-2\)`], bonne: 2,
      explication: R`\(1\) est racine évidente (\(2-8+6=0\)) et le produit des racines vaut \(\frac{6}{2}=3\), donc l'autre racine est \(3\) : \(2x^2-8x+6=2(x-1)(x-3)\). Le dernier choix est la forme canonique, pas la forme factorisée.` },
    { q: R`Pour tout réel \(x\), \(\dfrac{\mathrm{e}^{3x}}{\mathrm{e}^{x}}=\)`,
      choix: [R`\(\mathrm{e}^{3}\)`, R`\(\mathrm{e}^{2x}\)`, R`\(3\)`, R`\(\mathrm{e}^{4x}\)`], bonne: 1,
      explication: R`\(\dfrac{\mathrm{e}^{a}}{\mathrm{e}^{b}}=\mathrm{e}^{a-b}\), donc \(\mathrm{e}^{3x-x}=\mathrm{e}^{2x}\).` },
    { q: R`\(\sin\left(\dfrac{5\pi}{6}\right)=\)`,
      choix: [R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`, R`\(-\dfrac{\sqrt3}{2}\)`, R`\(\dfrac12\)`], bonne: 3,
      explication: R`\(\frac{5\pi}{6}=\pi-\frac{\pi}{6}\) et \(\sin(\pi-x)=\sin x\), donc \(\sin\frac{5\pi}{6}=\sin\frac{\pi}{6}=\frac12\).` },
    { q: R`\((u_n)\) est géométrique de premier terme \(u_0=3\) et de raison \(2\). Alors \(u_5=\)`,
      choix: [R`\(96\)`, R`\(13\)`, R`\(48\)`, R`\(192\)`], bonne: 0,
      explication: R`\(u_n=u_0\times q^n\), donc \(u_5=3\times 2^5=3\times 32=96\).` },
    { q: R`Dans un repère orthonormé, \(\vec u(1;-2)\) et \(\vec v(4;3)\). Alors \(\vec u\cdot\vec v=\)`,
      choix: [R`\(10\)`, R`\(-2\)`, R`\(2\)`, R`\(-10\)`], bonne: 1,
      explication: R`\(\vec u\cdot\vec v=xx'+yy'=1\times 4+(-2)\times 3=4-6=-2\).` },
    { q: R`Une équation du cercle de centre \(\Omega(1;-2)\) et de rayon \(3\) est :`,
      choix: [R`\((x+1)^2+(y-2)^2=9\)`, R`\((x-1)^2+(y+2)^2=3\)`, R`\((x-1)^2+(y+2)^2=9\)`, R`\((x-1)^2-(y+2)^2=9\)`], bonne: 2,
      explication: R`Le cercle de centre \(\Omega(a;b)\) et de rayon \(r\) a pour équation \((x-a)^2+(y-b)^2=r^2\), soit ici \((x-1)^2+(y+2)^2=9\).` },
    { q: R`\(A\) et \(B\) sont indépendants, \(P(A)=0{,}3\) et \(P(B)=0{,}5\). Alors \(P(A\cap B)=\)`,
      choix: [R`\(0{,}8\)`, R`\(0{,}65\)`, R`\(0{,}2\)`, R`\(0{,}15\)`], bonne: 3,
      explication: R`Pour deux événements indépendants, \(P(A\cap B)=P(A)\times P(B)=0{,}3\times 0{,}5=0{,}15\).` },
    { q: R`\(X\) prend les valeurs \(-1\), \(2\) et \(5\) avec les probabilités respectives \(0{,}5\), \(0{,}3\) et \(0{,}2\). Alors \(E(X)=\)`,
      choix: [R`\(1{,}1\)`, R`\(2\)`, R`\(0{,}6\)`, R`\(2{,}1\)`], bonne: 0,
      explication: R`\(E(X)=-1\times 0{,}5+2\times 0{,}3+5\times 0{,}2=-0{,}5+0{,}6+1=1{,}1\).` },
    { q: R`Que renvoie <code>len([k for k in range(10) if k % 3 == 0])</code> ?`,
      choix: [R`<code>3</code>`, R`<code>4</code>`, R`<code>10</code>`, R`<code>[0, 3, 6, 9]</code>`], bonne: 1,
      explication: R`La liste contient les entiers de 0 à 9 multiples de 3 : <code>[0, 3, 6, 9]</code>. Sa longueur est 4.` },
    { q: R`La dérivée de \(f(x)=x\,\mathrm{e}^{x}\) est :`,
      choix: [R`\(\mathrm{e}^{x}\)`, R`\(x\,\mathrm{e}^{x}\)`, R`\((x+1)\,\mathrm{e}^{x}\)`, R`\((1-x)\,\mathrm{e}^{x}\)`], bonne: 2,
      explication: R`Produit \(uv\) avec \(u=x\), \(v=\mathrm{e}^x\) : \(f'(x)=1\times\mathrm{e}^x+x\,\mathrm{e}^x=(x+1)\,\mathrm{e}^x\).` },
    { q: R`Pour un réel \(x\), la condition « \(x=3\) » est, pour avoir « \(x^2=9\) », une condition :`,
      choix: [R`nécessaire mais pas suffisante`, R`suffisante mais pas nécessaire`, R`nécessaire et suffisante`, R`ni nécessaire ni suffisante`], bonne: 1,
      explication: R`Si \(x=3\) alors \(x^2=9\) : la condition est suffisante. Mais \(x=-3\) vérifie \(x^2=9\) sans vérifier \(x=3\) : elle n'est pas nécessaire.` },
    { q: R`Un prix augmente de 20 %, puis baisse de 20 %. Au total, il a :`,
      choix: [R`baissé de 4 %`, R`retrouvé sa valeur initiale`, R`augmenté de 4 %`, R`baissé de 40 %`], bonne: 0,
      explication: R`Le coefficient global est \(1{,}2\times 0{,}8=0{,}96=1-0{,}04\) : c'est une baisse de 4 %.` }
  ],
  exercices: [
    { titre: "Exercice 1 — Algues dans un bassin : suite arithmético-géométrique", points: 4, chapitres: [3, 1],
      enonce: R`<p>Un bassin contient 1 tonne d'algues au départ. Chaque semaine, un traitement élimine la moitié des algues présentes, puis 3 tonnes d'algues se développent. On note \(u_n\) la masse d'algues (en tonnes) au bout de \(n\) semaines, de sorte que \(u_0=1\) et, pour tout entier naturel \(n\), \(u_{n+1}=0{,}5\,u_n+3\).</p>
<ol>
<li>Calculer \(u_1\) et \(u_2\) (valeurs exactes).</li>
<li>On pose, pour tout \(n\), \(v_n=u_n-6\). Démontrer que \((v_n)\) est une suite géométrique dont on précisera la raison et le premier terme.</li>
<li>En déduire que, pour tout \(n\), \(u_n=6-5\times\left(\dfrac12\right)^n\). Étudier le sens de variation de \((u_n)\) et justifier que la masse d'algues ne dépasse jamais 6 tonnes.</li>
<li>On considère la fonction Python suivante.
<pre><code>def seuil():
    n = 0
    u = 1
    while 6 - u &gt;= 0.01:
        u = ..........
        n = n + 1
    return n</code></pre>
Compléter la ligne manquante, puis déterminer par le calcul la valeur renvoyée par <code>seuil()</code>. Interpréter.</li>
<li>Exprimer, en fonction de \(n\), la somme \(S_n=u_0+u_1+\dots+u_n\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=0{,}5\times 1+3=\dfrac72\) et \(u_2=0{,}5\times\dfrac72+3=\dfrac74+3=\dfrac{19}{4}\). <i>(0,5 pt)</i></li>
<li>Pour tout \(n\) :
\[v_{n+1}=u_{n+1}-6=0{,}5\,u_n+3-6=0{,}5\,u_n-3=0{,}5\,(u_n-6)=0{,}5\,v_n.\]
\((v_n)\) est donc géométrique de raison \(q=\dfrac12\) et de premier terme \(v_0=u_0-6=-5\). <i>(1 pt)</i></li>
<li>On a \(v_n=v_0\,q^n=-5\left(\dfrac12\right)^n\), donc \(u_n=v_n+6=6-5\left(\dfrac12\right)^n\).<br>
Pour tout \(n\) :
\[u_{n+1}-u_n=-5\left(\frac12\right)^{n+1}+5\left(\frac12\right)^{n}=5\left(\frac12\right)^{n+1}(-1+2)=5\left(\frac12\right)^{n+1}\gt 0.\]
La suite \((u_n)\) est strictement croissante. De plus \(5\left(\frac12\right)^n\gt 0\), donc \(u_n\lt 6\) pour tout \(n\) : la masse d'algues augmente mais reste toujours inférieure à 6 tonnes. <i>(1 pt)</i></li>
<li>Ligne manquante : <code>u = 0.5*u + 3</code>.<br>
La boucle s'arrête dès que \(6-u_n\lt 0{,}01\). Or \(6-u_n=\dfrac{5}{2^n}\) et
\[\frac{5}{2^n}\lt 0{,}01\iff 2^n\gt 500.\]
Comme \(2^8=256\) et \(2^9=512\), le plus petit entier convenable est \(n=9\) : <code>seuil()</code> renvoie <b>9</b>. À partir de la 9<sup>e</sup> semaine, la masse d'algues est à moins de 10 kg de 6 tonnes. <i>(0,75 pt)</i></li>
<li>\(S_n=\displaystyle\sum_{k=0}^{n}\left(6+v_k\right)=6(n+1)+(v_0+\dots+v_n)\), et la somme des termes d'une suite géométrique donne
\[v_0+\dots+v_n=-5\times\frac{1-\left(\frac12\right)^{n+1}}{1-\frac12}=-10\left(1-\left(\frac12\right)^{n+1}\right).\]
Donc \(S_n=6(n+1)-10+10\left(\dfrac12\right)^{n+1}=6n-4+10\left(\dfrac12\right)^{n+1}\).<br>
Vérification : \(S_1=6-4+\frac{10}{4}=\frac92=1+\frac72\) ✓. <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Pour une suite \(u_{n+1}=au_n+b\), on cherche le point fixe \(\ell=a\ell+b\) (ici \(\ell=6\)) : la suite \(u_n-\ell\) est géométrique de raison \(a\).</div>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Étude complète d'une fonction exponentielle", points: 5, chapitres: [6, 4, 5, 2],
      enonce: R`<p>On considère la fonction \(f\) définie sur \([-4;2]\) par \(f(x)=(x^2-3)\,\mathrm{e}^{x}\). On note \(\mathcal C\) sa courbe représentative dans un repère.</p>
<ol>
<li>Montrer que, pour tout \(x\in[-4;2]\), \(f'(x)=(x-1)(x+3)\,\mathrm{e}^{x}\).</li>
<li>Dresser le tableau de variations complet de \(f\) sur \([-4;2]\) (valeurs exactes).</li>
<li>Déterminer le maximum et le minimum de \(f\) sur \([-4;2]\), en justifiant les comparaisons nécessaires.</li>
<li>Résoudre l'équation \(f(x)=0\) sur \([-4;2]\), puis dresser le tableau de signes de \(f\).</li>
<li>a) Déterminer une équation de la tangente \(T\) à \(\mathcal C\) au point d'abscisse 0.<br>
b) En quels points de \(\mathcal C\) la tangente est-elle parallèle à l'axe des abscisses ?</li>
</ol>`,
      correction: R`<ol>
<li>\(f=uv\) avec \(u(x)=x^2-3\), \(u'(x)=2x\), \(v(x)=\mathrm{e}^x=v'(x)\) :
\[f'(x)=2x\,\mathrm{e}^x+(x^2-3)\,\mathrm{e}^x=(x^2+2x-3)\,\mathrm{e}^x.\]
Le trinôme \(x^2+2x-3\) a pour discriminant \(\Delta=4+12=16\), d'où les racines \(\frac{-2-4}{2}=-3\) et \(\frac{-2+4}{2}=1\) : \(x^2+2x-3=(x-1)(x+3)\). <i>(1 pt)</i></li>
<li>\(\mathrm{e}^x\gt 0\), donc \(f'(x)\) a le signe du trinôme \((x-1)(x+3)\) (coefficient \(a=1\gt 0\)) : positif à l'extérieur des racines, négatif entre elles.
\(f(-4)=13\,\mathrm{e}^{-4}\), \(f(-3)=6\,\mathrm{e}^{-3}\), \(f(1)=-2\,\mathrm{e}\), \(f(2)=\mathrm{e}^{2}\).
<table class="tv"><tr><td>\(x\)</td><td>\(-4\)</td><td></td><td>\(-3\)</td><td></td><td>\(1\)</td><td></td><td>\(2\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td>\(13\,\mathrm{e}^{-4}\)</td><td>↗</td><td>\(6\,\mathrm{e}^{-3}\)</td><td>↘</td><td>\(-2\,\mathrm{e}\)</td><td>↗</td><td>\(\mathrm{e}^{2}\)</td></tr></table>
<i>(1,25 pt)</i></li>
<li>Les candidats au maximum sont \(f(-3)=6\,\mathrm{e}^{-3}\) et \(f(2)=\mathrm{e}^2\). Or \(\dfrac{\mathrm{e}^2}{6\,\mathrm{e}^{-3}}=\dfrac{\mathrm{e}^5}{6}\) et \(\mathrm{e}\gt 2\) donne \(\mathrm{e}^5\gt 32\gt 6\) : donc \(\mathrm{e}^2\gt 6\,\mathrm{e}^{-3}\). Le maximum de \(f\) est \(\mathrm{e}^2\), atteint en \(x=2\).<br>
Les candidats au minimum sont \(f(-4)=13\,\mathrm{e}^{-4}\gt 0\) et \(f(1)=-2\,\mathrm{e}\lt 0\) : le minimum est \(-2\,\mathrm{e}\), atteint en \(x=1\). <i>(0,75 pt)</i></li>
<li>Comme \(\mathrm{e}^x\gt 0\), \(f(x)=0\iff x^2-3=0\iff x=-\sqrt3\) ou \(x=\sqrt3\), deux valeurs qui appartiennent bien à \([-4;2]\) (car \(\sqrt3\approx 1{,}73\)).<br>
\(f(x)\) a le signe de \(x^2-3\) : \(f(x)\gt 0\) sur \([-4;-\sqrt3[\) et sur \(]\sqrt3;2]\), \(f(x)\lt 0\) sur \(]-\sqrt3;\sqrt3[\). <i>(1 pt)</i></li>
<li>a) \(f(0)=-3\) et \(f'(0)=(0-1)(0+3)\,\mathrm{e}^0=-3\), donc \(T : y=-3(x-0)-3\), soit \(y=-3x-3\). <i>(0,5 pt)</i><br>
b) La tangente est horizontale lorsque \(f'(x)=0\), c'est-à-dire en \(x=-3\) et \(x=1\) : aux points \(\left(-3;6\,\mathrm{e}^{-3}\right)\) et \(\left(1;-2\,\mathrm{e}\right)\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Écrans de rechange : conditionnement inversé et bénéfice moyen", points: 5, chapitres: [10, 11],
      enonce: R`<p>Un atelier de réparation de smartphones achète ses écrans chez deux fournisseurs \(A\) et \(B\). On note \(x\) la proportion (inconnue) d'écrans provenant de \(A\). On sait que 4 % des écrans de \(A\) et 9 % des écrans de \(B\) sont défectueux, et qu'au total 6 % des écrans de l'atelier sont défectueux.</p>
<p>On choisit un écran au hasard et on note \(A\) : « l'écran vient du fournisseur \(A\) », \(B=\overline{A}\) et \(D\) : « l'écran est défectueux ».</p>
<ol>
<li>Construire un arbre pondéré (en fonction de \(x\)).</li>
<li>Exprimer \(P(D)\) en fonction de \(x\), puis en déduire que \(x=0{,}6\).</li>
<li>Un écran est défectueux. Quelle est la probabilité qu'il provienne du fournisseur \(A\) ?</li>
<li>Les événements \(A\) et \(D\) sont-ils indépendants ?</li>
<li>Une réparation est facturée 80 €. Un écran coûte 30 € chez \(A\) et 25 € chez \(B\) ; si l'écran posé est défectueux, il faut le remplacer, ce qui coûte 30 € de plus à l'atelier. On note \(X\) le bénéfice (en €) réalisé sur une réparation. Donner la loi de \(X\) et calculer \(E(X)\).</li>
<li>On note maintenant \(c\) le coût (en €) d'un remplacement. Montrer que le bénéfice moyen vaut \(52-0{,}06\,c\). Jusqu'à quelle valeur de \(c\) le bénéfice moyen reste-t-il supérieur ou égal à 51 € ?</li>
<li>Deux réparations sont réalisées de façon indépendante. Calculer la probabilité qu'au moins un des deux écrans soit défectueux.</li>
</ol>`,
      correction: R`<ol>
<li>\(A\) (\(x\)) puis \(D\) (0,04) / \(\overline D\) (0,96) ; \(B\) (\(1-x\)) puis \(D\) (0,09) / \(\overline D\) (0,91). <i>(0,5 pt)</i></li>
<li>Formule des probabilités totales :
\[P(D)=0{,}04\,x+0{,}09\,(1-x)=0{,}09-0{,}05\,x.\]
\(P(D)=0{,}06\iff 0{,}05\,x=0{,}03\iff x=0{,}6\). Donc 60 % des écrans viennent de \(A\). <i>(1 pt)</i></li>
<li>\[P_D(A)=\frac{P(A\cap D)}{P(D)}=\frac{0{,}6\times 0{,}04}{0{,}06}=\frac{0{,}024}{0{,}06}=0{,}4.\]
<i>(0,75 pt)</i></li>
<li>\(P(A)\times P(D)=0{,}6\times 0{,}06=0{,}036\neq 0{,}024=P(A\cap D)\) : \(A\) et \(D\) <b>ne sont pas indépendants</b> (on le voit aussi car \(P_D(A)=0{,}4\neq P(A)=0{,}6\)). <i>(0,5 pt)</i></li>
<li>Les quatre issues : \(A\cap\overline D\) : \(80-30=50\) ; \(A\cap D\) : \(50-30=20\) ; \(B\cap\overline D\) : \(80-25=55\) ; \(B\cap D\) : \(55-30=25\).
<table class="tv"><tr><td>\(x_i\)</td><td>20</td><td>25</td><td>50</td><td>55</td></tr>
<tr><td>\(P(X=x_i)\)</td><td>\(0{,}6\times 0{,}04=0{,}024\)</td><td>\(0{,}4\times 0{,}09=0{,}036\)</td><td>\(0{,}6\times 0{,}96=0{,}576\)</td><td>\(0{,}4\times 0{,}91=0{,}364\)</td></tr></table>
(la somme vaut bien 1)
\[E(X)=20\times 0{,}024+25\times 0{,}036+50\times 0{,}576+55\times 0{,}364=0{,}48+0{,}9+28{,}8+20{,}02=50{,}2.\]
Le bénéfice moyen est de 50,20 € par réparation. <i>(1,25 pt)</i></li>
<li>Sans défaut, le bénéfice moyen serait \(0{,}6\times 50+0{,}4\times 55=52\) ; on perd \(c\) avec la probabilité \(P(D)=0{,}06\). Plus précisément :
\[E=0{,}576\times 50+0{,}024\,(50-c)+0{,}364\times 55+0{,}036\,(55-c)=52-0{,}06\,c.\]
(Pour \(c=30\) on retrouve \(52-1{,}8=50{,}2\) ✓.) Puis \(52-0{,}06\,c\geqslant 51\iff c\leqslant\dfrac{1}{0{,}06}=\dfrac{50}{3}\approx 16{,}67\). Le coût d'un remplacement doit rester inférieur ou égal à environ 16,67 €. <i>(0,5 pt)</i></li>
<li>L'événement contraire est « aucun écran n'est défectueux », de probabilité \(0{,}94\times 0{,}94=0{,}8836\) (indépendance). La probabilité cherchée est \(1-0{,}8836=0{,}1164\). <i>(0,5 pt)</i></li>
</ol>
<div class="warn">Ne pas confondre \(P_A(D)=0{,}04\) (probabilité d'être défectueux sachant qu'il vient de \(A\)) et \(P_D(A)=0{,}4\) (probabilité de venir de \(A\) sachant qu'il est défectueux).</div>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°3", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`\((u_n)\) est arithmétique, \(u_0=5\) et de raison \(-3\). Alors \(u_{10}=\)`,
      choix: [R`\(-35\)`, R`\(-25\)`, R`\(35\)`, R`\(-28\)`], bonne: 1,
      explication: R`\(u_n=u_0+nr\), donc \(u_{10}=5+10\times(-3)=-25\).` },
    { q: R`Pour tout réel \(x\), \(\left(\mathrm{e}^{x}\right)^3=\)`,
      choix: [R`\(\mathrm{e}^{x+3}\)`, R`\(3\,\mathrm{e}^{x}\)`, R`\(\mathrm{e}^{3x}\)`, R`\(\mathrm{e}^{x^3}\)`], bonne: 2,
      explication: R`\(\left(\mathrm{e}^{a}\right)^n=\mathrm{e}^{na}\), donc \(\left(\mathrm{e}^{x}\right)^3=\mathrm{e}^{3x}\).` },
    { q: R`Les solutions dans \(]-\pi;\pi]\) de l'équation \(\cos x=\dfrac{\sqrt2}{2}\) sont :`,
      choix: [R`\(\dfrac{\pi}{4}\) seulement`, R`\(\dfrac{\pi}{4}\) et \(\dfrac{3\pi}{4}\)`, R`\(-\dfrac{\pi}{4}\) et \(\dfrac{\pi}{4}\)`, R`\(\dfrac{\pi}{3}\) et \(-\dfrac{\pi}{3}\)`], bonne: 2,
      explication: R`\(\cos\frac{\pi}{4}=\frac{\sqrt2}{2}\) et, le cosinus étant pair, \(\cos\left(-\frac{\pi}{4}\right)=\frac{\sqrt2}{2}\). Sur le cercle, ce sont les deux seuls points d'abscisse \(\frac{\sqrt2}{2}\).` },
    { q: R`La mesure principale de l'angle \(\dfrac{7\pi}{3}\) est :`,
      choix: [R`\(\dfrac{\pi}{3}\)`, R`\(-\dfrac{\pi}{3}\)`, R`\(\dfrac{2\pi}{3}\)`, R`\(\dfrac{4\pi}{3}\)`], bonne: 0,
      explication: R`\(\frac{7\pi}{3}=2\pi+\frac{\pi}{3}\) et \(\frac{\pi}{3}\in]-\pi;\pi]\).` },
    { q: R`\(P(A)=0{,}6\), \(P_A(B)=0{,}3\) et \(P_{\overline A}(B)=0{,}5\). Alors \(P(B)=\)`,
      choix: [R`\(0{,}8\)`, R`\(0{,}4\)`, R`\(0{,}18\)`, R`\(0{,}38\)`], bonne: 3,
      explication: R`Probabilités totales : \(P(B)=0{,}6\times 0{,}3+0{,}4\times 0{,}5=0{,}18+0{,}2=0{,}38\).` },
    { q: R`\(X\) prend les valeurs \(0\) et \(2\), chacune avec la probabilité \(\frac12\). La variance \(V(X)\) vaut :`,
      choix: [R`\(1\)`, R`\(2\)`, R`\(0\)`, R`\(4\)`], bonne: 0,
      explication: R`\(E(X)=1\) et \(V(X)=\frac12(0-1)^2+\frac12(2-1)^2=1\).` },
    { q: R`La dérivée de \(f(x)=\dfrac{1}{2x+1}\) (sur \(]-\frac12;+\infty[\)) est :`,
      choix: [R`\(\dfrac{1}{2}\)`, R`\(-\dfrac{1}{(2x+1)^2}\)`, R`\(\dfrac{2}{(2x+1)^2}\)`, R`\(-\dfrac{2}{(2x+1)^2}\)`], bonne: 3,
      explication: R`\(\left(\frac1v\right)'=-\frac{v'}{v^2}\) avec \(v=2x+1\), \(v'=2\) : \(f'(x)=-\dfrac{2}{(2x+1)^2}\).` },
    { q: R`L'inéquation \(\mathrm{e}^{2x}\gt\mathrm{e}^{x+3}\) a pour ensemble de solutions :`,
      choix: [R`\(]3;+\infty[\)`, R`\(]-\infty;3[\)`, R`\(]1;+\infty[\)`, R`\(\mathbb R\)`], bonne: 0,
      explication: R`La fonction exponentielle est strictement croissante : \(\mathrm{e}^{2x}\gt\mathrm{e}^{x+3}\iff 2x\gt x+3\iff x\gt 3\).` },
    { q: R`La forme canonique de \(x^2-6x+11\) est :`,
      choix: [R`\((x-3)^2-2\)`, R`\((x-3)^2+2\)`, R`\((x+3)^2+2\)`, R`\((x-6)^2+11\)`], bonne: 1,
      explication: R`\(x^2-6x=(x-3)^2-9\), donc \(x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2\).` },
    { q: R`Après <code>L = [1, 2]</code> puis <code>for k in range(3): L.append(L[-1] + L[-2])</code>, la liste <code>L</code> vaut :`,
      choix: [R`<code>[1, 2, 3]</code>`, R`<code>[1, 2, 3, 5]</code>`, R`<code>[1, 2, 3, 5, 8]</code>`, R`<code>[1, 2, 3, 4, 5]</code>`], bonne: 2,
      explication: R`Chaque tour ajoute la somme des deux derniers termes : 3, puis 5, puis 8. Trois tours, donc cinq éléments.` },
    { q: R`La négation de « Tous les élèves ont réussi l'épreuve » est :`,
      choix: [R`« Aucun élève n'a réussi l'épreuve »`, R`« Au moins un élève a réussi l'épreuve »`, R`« Tous les élèves ont échoué »`, R`« Au moins un élève n'a pas réussi l'épreuve »`], bonne: 3,
      explication: R`La négation de « pour tout \(x\), \(P(x)\) » est « il existe \(x\) tel que non \(P(x)\) ».` },
    { q: R`Un vecteur normal à la droite d'équation \(3x-2y+1=0\) est :`,
      choix: [R`\(\vec n(2;3)\)`, R`\(\vec n(3;-2)\)`, R`\(\vec n(-2;3)\)`, R`\(\vec n(3;1)\)`], bonne: 1,
      explication: R`La droite \(ax+by+c=0\) admet \(\vec n(a;b)\) comme vecteur normal, ici \(\vec n(3;-2)\). (\(\vec u(2;3)\) en est un vecteur directeur.)` }
  ],
  exercices: [
    { titre: "Exercice 1 — Équation du second degré à paramètre et logique", points: 4, chapitres: [2, 1],
      enonce: R`<p>Pour tout réel \(m\), on considère l'équation \((E_m)\) : \(x^2-(m+2)x+m+5=0\), d'inconnue réelle \(x\).</p>
<ol>
<li>Montrer que le discriminant de \((E_m)\) est \(\Delta_m=m^2-16\).</li>
<li>Discuter, selon les valeurs de \(m\), le nombre de solutions de \((E_m)\).</li>
<li>Résoudre \((E_5)\) et \((E_{-4})\).</li>
<li>On considère le programme Python ci-dessous. Que contient la liste <code>L</code> à la fin de son exécution ?
<pre><code>def nb_solutions(m):
    d = m**2 - 16
    if d &gt; 0:
        return 2
    elif d == 0:
        return 1
    else:
        return 0

L = [m for m in range(-6, 7) if nb_solutions(m) == 2]</code></pre></li>
<li>On considère la proposition : « Si \(m\gt 4\), alors \((E_m)\) admet deux solutions distinctes ». Est-elle vraie ? Énoncer sa réciproque : est-elle vraie ? La condition « \(m\gt 4\) » est-elle nécessaire, suffisante pour que \((E_m)\) admette deux solutions distinctes ?</li>
<li>On suppose \(m\gt 4\). Sans calculer les solutions, montrer qu'elles sont toutes les deux strictement positives.</li>
<li>Montrer que \(1\) n'est solution de \((E_m)\) pour aucune valeur de \(m\).</li>
</ol>`,
      correction: R`<ol>
<li>\(a=1\), \(b=-(m+2)\), \(c=m+5\) :
\[\Delta_m=(m+2)^2-4(m+5)=m^2+4m+4-4m-20=m^2-16.\]
<i>(0,5 pt)</i></li>
<li>\(\Delta_m=(m-4)(m+4)\) est un trinôme en \(m\) de racines \(-4\) et \(4\), positif à l'extérieur des racines.
<ul><li>si \(m\lt -4\) ou \(m\gt 4\) : \(\Delta_m\gt 0\), deux solutions distinctes ;</li>
<li>si \(m=-4\) ou \(m=4\) : \(\Delta_m=0\), une solution (double) ;</li>
<li>si \(-4\lt m\lt 4\) : \(\Delta_m\lt 0\), aucune solution.</li></ul>
<i>(0,75 pt)</i></li>
<li>\((E_5)\) : \(x^2-7x+10=0\), \(\Delta=9\), solutions \(\frac{7-3}{2}=2\) et \(\frac{7+3}{2}=5\).<br>
\((E_{-4})\) : \(x^2+2x+1=0\iff (x+1)^2=0\iff x=-1\). <i>(0,5 pt)</i></li>
<li>La liste contient les entiers \(m\) de \(-6\) à \(6\) tels que \(m^2-16\gt 0\), c'est-à-dire \(|m|\gt 4\) : <code>L = [-6, -5, 5, 6]</code>. <i>(0,5 pt)</i></li>
<li>La proposition est <b>vraie</b> : si \(m\gt 4\), alors \(m-4\gt 0\) et \(m+4\gt 0\), donc \(\Delta_m\gt 0\).<br>
Réciproque : « Si \((E_m)\) admet deux solutions distinctes, alors \(m\gt 4\) ». Elle est <b>fausse</b> : contre-exemple \(m=-5\), pour lequel \(\Delta_{-5}=9\gt 0\).<br>
La condition « \(m\gt 4\) » est donc <b>suffisante mais pas nécessaire</b>. <i>(0,75 pt)</i></li>
<li>Pour \(m\gt 4\), notons \(x_1\) et \(x_2\) les solutions. On a \(x_1x_2=\dfrac ca=m+5\gt 0\) : elles sont de même signe. Et \(x_1+x_2=-\dfrac ba=m+2\gt 0\) : elles ne peuvent pas être toutes deux négatives. Elles sont donc toutes les deux strictement positives. <i>(0,5 pt)</i></li>
<li>En remplaçant \(x\) par 1 : \(1-(m+2)+m+5=4\neq 0\), quelle que soit la valeur de \(m\). Donc 1 n'est jamais solution. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Triangle, cercle circonscrit et tangente", points: 5, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère les points \(A(-1;2)\), \(B(3;4)\) et \(C(5;0)\).</p>
<ol>
<li>Calculer \(\overrightarrow{BA}\cdot\overrightarrow{BC}\), ainsi que les longueurs \(AB\) et \(BC\). Quelle est la nature du triangle \(ABC\) ?</li>
<li>En déduire le centre \(\Omega\) et le rayon du cercle \(\Gamma\) circonscrit au triangle \(ABC\), puis une équation de \(\Gamma\).</li>
<li>Déterminer les coordonnées du point \(D\) tel que \(ABCD\) soit un carré, et vérifier que \(D\in\Gamma\).</li>
<li>Déterminer une équation cartésienne de la tangente à \(\Gamma\) en \(A\).</li>
<li>Déterminer les coordonnées des points d'intersection de \(\Gamma\) avec l'axe des ordonnées.</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) et en déduire la mesure de l'angle \(\widehat{BAC}\). Était-ce prévisible ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{BA}(-4;-2)\) et \(\overrightarrow{BC}(2;-4)\), donc \(\overrightarrow{BA}\cdot\overrightarrow{BC}=-8+8=0\) : \((BA)\perp(BC)\).
\(AB=\sqrt{16+4}=\sqrt{20}=2\sqrt5\) et \(BC=\sqrt{4+16}=2\sqrt5\).
Le triangle \(ABC\) est <b>rectangle isocèle en \(B\)</b>. <i>(1 pt)</i></li>
<li>Un triangle rectangle est inscrit dans le cercle de diamètre son hypoténuse : \(\Omega\) est le milieu de \([AC]\), \(\Omega\left(\frac{-1+5}{2};\frac{2+0}{2}\right)=(2;1)\), et le rayon vaut \(\Omega A=\sqrt{(-3)^2+1^2}=\sqrt{10}\).
\[\Gamma : (x-2)^2+(y-1)^2=10,\ \text{soit } x^2+y^2-4x-2y-5=0.\]
<i>(1 pt)</i></li>
<li>\(ABCD\) est un carré si \(\overrightarrow{AD}=\overrightarrow{BC}\) (et \(ABC\) est déjà rectangle isocèle en \(B\)) : \(D(-1+2;2-4)=(1;-2)\).
\((1-2)^2+(-2-1)^2=1+9=10\) : \(D\in\Gamma\) ✓. <i>(0,75 pt)</i></li>
<li>La tangente en \(A\) est perpendiculaire au rayon \([\Omega A]\) : \(\overrightarrow{\Omega A}(-3;1)\) en est un vecteur normal. Son équation est de la forme \(-3x+y+c=0\), et \(A\) lui appartient : \(3+2+c=0\), \(c=-5\).
Tangente : \(-3x+y-5=0\), soit \(y=3x+5\). <i>(1 pt)</i></li>
<li>On remplace \(x\) par 0 : \(4+(y-1)^2=10\iff (y-1)^2=6\iff y=1-\sqrt6\) ou \(y=1+\sqrt6\).
Points : \((0;1-\sqrt6)\) et \((0;1+\sqrt6)\). <i>(0,75 pt)</i></li>
<li>\(\overrightarrow{AB}(4;2)\), \(\overrightarrow{AC}(6;-2)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=24-4=20\). \(AC=\sqrt{40}=2\sqrt{10}\), donc
\[\cos\widehat{BAC}=\frac{20}{2\sqrt5\times 2\sqrt{10}}=\frac{20}{4\sqrt{50}}=\frac{20}{20\sqrt2}=\frac{\sqrt2}{2},\]
d'où \(\widehat{BAC}=\dfrac{\pi}{4}\) (45°). C'était prévisible : dans un triangle rectangle isocèle, les angles aigus mesurent 45°. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Fonction rationnelle : variations, tangente et position relative", points: 5, chapitres: [4, 5],
      enonce: R`<p>Soit \(f\) la fonction définie sur \([0;+\infty[\) par \(f(x)=\dfrac{x^2+3}{x+1}\), de courbe \(\mathcal C\), et \(\mathcal D\) la droite d'équation \(y=x-1\).</p>
<ol>
<li>Montrer que pour tout \(x\geqslant 0\), \(f'(x)=\dfrac{(x-1)(x+3)}{(x+1)^2}\).</li>
<li>Étudier les variations de \(f\) sur \([0;+\infty[\) et préciser son minimum.</li>
<li>En déduire que pour tout \(x\geqslant 0\), \(x^2+3\geqslant 2x+2\). Retrouver ce résultat directement.</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal C\) au point d'abscisse 0.</li>
<li>Montrer que pour tout \(x\geqslant 0\), \(f(x)-(x-1)=\dfrac{4}{x+1}\). En déduire la position relative de \(\mathcal C\) et \(\mathcal D\).</li>
<li>Existe-t-il un point de \(\mathcal C\) en lequel la tangente est parallèle à \(\mathcal D\) ?</li>
</ol>`,
      correction: R`<ol>
<li>\(f=\dfrac uv\) avec \(u=x^2+3\), \(u'=2x\), \(v=x+1\), \(v'=1\) :
\[f'(x)=\frac{2x(x+1)-(x^2+3)}{(x+1)^2}=\frac{x^2+2x-3}{(x+1)^2}.\]
\(x^2+2x-3\) a pour racines \(1\) et \(-3\) (\(\Delta=16\)), donc \(x^2+2x-3=(x-1)(x+3)\). <i>(1 pt)</i></li>
<li>Sur \([0;+\infty[\), \((x+1)^2\gt 0\) et \(x+3\gt 0\) : \(f'(x)\) a le signe de \(x-1\).
\(f\) est décroissante sur \([0;1]\) et croissante sur \([1;+\infty[\), avec \(f(0)=3\) et \(f(1)=\frac42=2\).
<table class="tv"><tr><td>\(x\)</td><td>0</td><td></td><td>1</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td>3</td><td>↘</td><td>2</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \([0;+\infty[\) est \(2\), atteint en \(x=1\). <i>(1,25 pt)</i></li>
<li>D'après 2, pour tout \(x\geqslant 0\), \(\dfrac{x^2+3}{x+1}\geqslant 2\), et comme \(x+1\gt 0\) : \(x^2+3\geqslant 2(x+1)=2x+2\).<br>
Directement : \(x^2+3-(2x+2)=x^2-2x+1=(x-1)^2\geqslant 0\). <i>(0,75 pt)</i></li>
<li>\(f(0)=3\) et \(f'(0)=\dfrac{-3}{1}=-3\), donc \(T : y=-3x+3\). <i>(0,5 pt)</i></li>
<li>\[f(x)-(x-1)=\frac{x^2+3-(x-1)(x+1)}{x+1}=\frac{x^2+3-x^2+1}{x+1}=\frac{4}{x+1}.\]
Pour \(x\geqslant 0\), \(\frac{4}{x+1}\gt 0\) : la courbe \(\mathcal C\) est <b>strictement au-dessus</b> de \(\mathcal D\). <i>(0,75 pt)</i></li>
<li>La tangente en \(a\) est parallèle à \(\mathcal D\) si et seulement si \(f'(a)=1\) (même coefficient directeur) :
\[\frac{a^2+2a-3}{(a+1)^2}=1\iff a^2+2a-3=a^2+2a+1\iff -3=1,\]
ce qui est impossible. Aucune tangente à \(\mathcal C\) n'est parallèle à \(\mathcal D\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°4", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`La somme des racines du trinôme \(2x^2-5x-3\) vaut :`,
      choix: [R`\(-\dfrac52\)`, R`\(\dfrac52\)`, R`\(-\dfrac32\)`, R`\(5\)`], bonne: 1,
      explication: R`La somme des racines vaut \(-\dfrac ba=\dfrac52\) (ici \(\Delta=25+24=49\gt 0\), les racines sont \(3\) et \(-\frac12\)).` },
    { q: R`\(f(x)=x^3-3x\). Alors \(f'(1)=\)`,
      choix: [R`\(-2\)`, R`\(3\)`, R`\(0\)`, R`\(6\)`], bonne: 2,
      explication: R`\(f'(x)=3x^2-3\), donc \(f'(1)=3-3=0\).` },
    { q: R`\(f\) est dérivable sur \(\mathbb R\) et \(f'(x)=(x-2)\,\mathrm{e}^{x}\). Alors \(f\) est :`,
      choix: [R`croissante sur \(\mathbb R\)`, R`décroissante sur \(]-\infty;2]\)`, R`croissante sur \(]-\infty;2]\)`, R`décroissante sur \([2;+\infty[\)`], bonne: 1,
      explication: R`\(\mathrm{e}^x\gt 0\), donc \(f'(x)\) a le signe de \(x-2\) : négatif sur \(]-\infty;2]\) (où \(f\) décroît), positif sur \([2;+\infty[\).` },
    { q: R`Pour tout réel \(x\), \(\cos(\pi-x)=\)`,
      choix: [R`\(\cos x\)`, R`\(\sin x\)`, R`\(-\sin x\)`, R`\(-\cos x\)`], bonne: 3,
      explication: R`Les points associés à \(x\) et \(\pi-x\) sont symétriques par rapport à l'axe des ordonnées : même sinus, cosinus opposés.` },
    { q: R`Dans \(]-\pi;\pi]\), l'équation \(\sin x=-1\) a pour solution :`,
      choix: [R`\(-\dfrac{\pi}{2}\)`, R`\(\pi\)`, R`\(\dfrac{\pi}{2}\)`, R`\(-\pi\)`], bonne: 0,
      explication: R`Le seul point du cercle trigonométrique d'ordonnée \(-1\) est associé à \(-\frac{\pi}{2}\) (et \(-\pi\notin]-\pi;\pi]\), d'ailleurs \(\sin\pi=0\)).` },
    { q: R`\(\mathrm{e}^{0}+\mathrm{e}^{1}\times\mathrm{e}^{-1}=\)`,
      choix: [R`\(1\)`, R`\(\mathrm{e}\)`, R`\(2\)`, R`\(0\)`], bonne: 2,
      explication: R`\(\mathrm{e}^0=1\) et \(\mathrm{e}^{1}\times\mathrm{e}^{-1}=\mathrm{e}^{0}=1\) : la somme vaut 2.` },
    { q: R`On lance deux pièces équilibrées. La probabilité d'obtenir deux « pile » est :`,
      choix: [R`\(\dfrac12\)`, R`\(\dfrac13\)`, R`\(\dfrac34\)`, R`\(\dfrac14\)`], bonne: 3,
      explication: R`Les lancers sont indépendants : \(\frac12\times\frac12=\frac14\).` },
    { q: R`\(P(A)=0{,}2\) et \(P_A(B)=0{,}5\). Alors \(P(A\cap\overline B)=\)`,
      choix: [R`\(0{,}1\)`, R`\(0{,}4\)`, R`\(0{,}7\)`, R`\(0{,}3\)`], bonne: 0,
      explication: R`\(P_A(\overline B)=1-0{,}5=0{,}5\) et \(P(A\cap\overline B)=P(A)\times P_A(\overline B)=0{,}2\times 0{,}5=0{,}1\).` },
    { q: R`Avec la fonction ci-dessous, que renvoie <code>f(4)</code> ?<pre><code>def f(n):
    s = 0
    for k in range(1, n + 1):
        s = s + k
    return s</code></pre>`,
      choix: [R`<code>6</code>`, R`<code>10</code>`, R`<code>4</code>`, R`<code>15</code>`], bonne: 1,
      explication: R`<code>range(1, 5)</code> donne 1, 2, 3, 4 : \(s=1+2+3+4=10\).` },
    { q: R`\(ABCD\) est un carré de côté 3. Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`,
      choix: [R`\(9\sqrt2\)`, R`\(0\)`, R`\(9\)`, R`\(18\)`], bonne: 2,
      explication: R`Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AB}=AB^2=9\).` },
    { q: R`Une équation de la droite passant par \(A(1;2)\) et de vecteur normal \(\vec n(2;-1)\) est :`,
      choix: [R`\(x+2y-5=0\)`, R`\(2x-y+3=0\)`, R`\(-x+2y-3=0\)`, R`\(2x-y=0\)`], bonne: 3,
      explication: R`L'équation est de la forme \(2x-y+c=0\) ; \(A\) y appartient : \(2-2+c=0\), donc \(c=0\).` },
    { q: R`\(u_0=100\) et, pour tout \(n\), \(u_{n+1}=0{,}9\,u_n\). Alors \(u_2=\)`,
      choix: [R`\(80\)`, R`\(81\)`, R`\(90\)`, R`\(72{,}9\)`], bonne: 1,
      explication: R`\(u_1=90\) et \(u_2=0{,}9\times 90=81\) (ou \(u_2=100\times 0{,}9^2=81\)).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Tirages sans remise : jeu équitable et variance", points: 5, chapitres: [10, 11],
      enonce: R`<p>Une urne contient 4 boules rouges et 6 boules bleues, indiscernables au toucher. On tire au hasard une boule, on note sa couleur, <b>on ne la remet pas</b>, puis on tire une seconde boule. On note \(R_1\) : « la première boule est rouge » et \(R_2\) : « la seconde boule est rouge ».</p>
<ol>
<li>Construire un arbre pondéré décrivant l'expérience.</li>
<li>Calculer la probabilité d'obtenir deux boules rouges, exactement une boule rouge, aucune boule rouge.</li>
<li>Calculer \(P(R_2)\). La seconde boule est rouge : quelle est la probabilité que la première l'ait été aussi ?</li>
<li>Les événements \(R_1\) et \(R_2\) sont-ils indépendants ?</li>
<li>On joue : on gagne 10 € si l'on tire deux boules rouges, 2 € si l'on en tire exactement une, et on perd \(a\) euros (\(a\gt 0\)) si l'on n'en tire aucune. On note \(X\) le gain algébrique. Donner la loi de \(X\) et montrer que \(E(X)=\dfrac{12}{5}-\dfrac a3\).</li>
<li>Pour quelle valeur de \(a\) le jeu est-il équitable ?</li>
<li>Dans cette question, \(a=6\). Calculer \(E(X)\) puis la variance \(V(X)\) (fraction irréductible).</li>
</ol>`,
      correction: R`<ol>
<li>\(R_1\) (\(\frac{4}{10}\)) puis \(R_2\) (\(\frac39\)) / \(\overline{R_2}\) (\(\frac69\)) ; \(\overline{R_1}\) (\(\frac{6}{10}\)) puis \(R_2\) (\(\frac49\)) / \(\overline{R_2}\) (\(\frac59\)). Au second tirage il ne reste que 9 boules. <i>(0,5 pt)</i></li>
<li>\(P(R_1\cap R_2)=\dfrac4{10}\times\dfrac39=\dfrac{12}{90}=\dfrac{2}{15}\).<br>
Exactement une rouge : \(P(R_1\cap\overline{R_2})+P(\overline{R_1}\cap R_2)=\dfrac4{10}\times\dfrac69+\dfrac6{10}\times\dfrac49=\dfrac{48}{90}=\dfrac{8}{15}\).<br>
Aucune rouge : \(\dfrac6{10}\times\dfrac59=\dfrac{30}{90}=\dfrac13\). (Vérification : \(\frac2{15}+\frac8{15}+\frac5{15}=1\).) <i>(1 pt)</i></li>
<li>Probabilités totales : \(P(R_2)=\dfrac{12}{90}+\dfrac{24}{90}=\dfrac{36}{90}=\dfrac25\).
\[P_{R_2}(R_1)=\frac{P(R_1\cap R_2)}{P(R_2)}=\frac{2/15}{2/5}=\frac{2}{15}\times\frac52=\frac13.\]
<i>(0,75 pt)</i></li>
<li>\(P(R_1)\times P(R_2)=\dfrac25\times\dfrac25=\dfrac{4}{25}\neq\dfrac{2}{15}=P(R_1\cap R_2)\) : \(R_1\) et \(R_2\) <b>ne sont pas indépendants</b> (logique : sans remise, le premier tirage modifie la composition de l'urne). <i>(0,5 pt)</i></li>
<li>\(X\) prend les valeurs \(10\), \(2\) et \(-a\) avec \(P(X=10)=\frac2{15}\), \(P(X=2)=\frac8{15}\), \(P(X=-a)=\frac13\).
\[E(X)=10\times\frac2{15}+2\times\frac8{15}-a\times\frac13=\frac{36}{15}-\frac a3=\frac{12}5-\frac a3.\]
<i>(0,75 pt)</i></li>
<li>Le jeu est équitable si \(E(X)=0\iff\dfrac a3=\dfrac{12}5\iff a=\dfrac{36}{5}=7{,}2\). Il faut perdre 7,20 € en l'absence de boule rouge. <i>(0,5 pt)</i></li>
<li>Pour \(a=6\) : \(E(X)=\dfrac{12}5-2=\dfrac25\).
\[E(X^2)=100\times\frac2{15}+4\times\frac8{15}+36\times\frac13=\frac{200+32+180}{15}=\frac{412}{15},\]
\[V(X)=E(X^2)-E(X)^2=\frac{412}{15}-\frac{4}{25}=\frac{2060-12}{75}=\frac{2048}{75}\ (\approx 27{,}3).\]
<i>(1 pt)</i></li>
</ol>
<div class="astuce">La formule de König-Huygens \(V(X)=E(X^2)-E(X)^2\) évite de calculer les écarts \((x_i-E(X))^2\) avec des fractions.</div>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Une suite définie avec l'exponentielle", points: 4, chapitres: [3, 6, 4, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie pour tout entier \(n\geqslant 1\) par \(u_n=n\,\mathrm{e}^{-n}\).</p>
<ol>
<li>Calculer \(u_1\) et \(u_2\), puis comparer ces deux nombres sans valeur approchée.</li>
<li>Montrer que pour tout \(n\geqslant 1\), \(\dfrac{u_{n+1}}{u_n}=\left(1+\dfrac1n\right)\mathrm{e}^{-1}\). En déduire le sens de variation de \((u_n)\).</li>
<li>Soit \(f\) la fonction définie sur \([0;+\infty[\) par \(f(x)=x\,\mathrm{e}^{-x}\). Étudier les variations de \(f\), puis en déduire que pour tout \(n\geqslant 1\), \(0\lt u_n\leqslant\dfrac1{\mathrm{e}}\).</li>
<li>On pose \(v_n=\mathrm{e}^{-n}\) pour \(n\geqslant 0\). Montrer que \((v_n)\) est géométrique, puis calculer \(S_n=v_0+v_1+\dots+v_n\). Justifier que \(S_n\lt\dfrac{\mathrm{e}}{\mathrm{e}-1}\).</li>
<li>Que renvoie la fonction Python ci-dessous ? On donne \(\mathrm{e}^9\approx 8103\) et \(\mathrm{e}^{10}\approx 22\,026\).
<pre><code>from math import exp

def rang():
    n = 1
    while n * exp(-n) &gt;= 0.001:
        n = n + 1
    return n</code></pre></li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=\mathrm{e}^{-1}\) et \(u_2=2\,\mathrm{e}^{-2}\). \(\dfrac{u_2}{u_1}=\dfrac{2\,\mathrm{e}^{-2}}{\mathrm{e}^{-1}}=\dfrac{2}{\mathrm{e}}\lt 1\) car \(\mathrm{e}\gt 2\) : donc \(u_2\lt u_1\). <i>(0,5 pt)</i></li>
<li>Pour \(n\geqslant 1\), \(u_n\gt 0\) et
\[\frac{u_{n+1}}{u_n}=\frac{(n+1)\,\mathrm{e}^{-n-1}}{n\,\mathrm{e}^{-n}}=\frac{n+1}{n}\,\mathrm{e}^{-1}=\left(1+\frac1n\right)\mathrm{e}^{-1}.\]
Comme \(n\geqslant 1\), \(1+\frac1n\leqslant 2\lt\mathrm{e}\), donc \(\dfrac{u_{n+1}}{u_n}\lt 1\) : \(u_{n+1}\lt u_n\) (les termes sont positifs). La suite \((u_n)\) est strictement décroissante. <i>(1 pt)</i></li>
<li>\(f'(x)=1\times\mathrm{e}^{-x}+x\times(-\mathrm{e}^{-x})=(1-x)\,\mathrm{e}^{-x}\), du signe de \(1-x\) : \(f\) est croissante sur \([0;1]\), décroissante sur \([1;+\infty[\), de maximum \(f(1)=\mathrm{e}^{-1}\).
<table class="tv"><tr><td>\(x\)</td><td>0</td><td></td><td>1</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(f\)</td><td>0</td><td>↗</td><td>\(\frac1{\mathrm{e}}\)</td><td>↘</td><td></td></tr></table>
Pour \(n\geqslant 1\), \(u_n=f(n)\leqslant f(1)=\dfrac1{\mathrm{e}}\), et \(u_n\gt 0\) comme produit de nombres strictement positifs. On retrouve aussi la décroissance de \((u_n)\) : \(f\) est décroissante sur \([1;+\infty[\). <i>(1,25 pt)</i></li>
<li>\(v_{n+1}=\mathrm{e}^{-n-1}=\mathrm{e}^{-1}\times\mathrm{e}^{-n}=\mathrm{e}^{-1}\,v_n\) : \((v_n)\) est géométrique de raison \(q=\mathrm{e}^{-1}\) et de premier terme \(v_0=1\).
\[S_n=\frac{1-q^{n+1}}{1-q}=\frac{1-\mathrm{e}^{-(n+1)}}{1-\mathrm{e}^{-1}}.\]
Comme \(1-\mathrm{e}^{-(n+1)}\lt 1\) et \(1-\mathrm{e}^{-1}\gt 0\) : \(S_n\lt\dfrac{1}{1-\mathrm{e}^{-1}}=\dfrac{\mathrm{e}}{\mathrm{e}-1}\) (en multipliant numérateur et dénominateur par \(\mathrm{e}\)). <i>(0,75 pt)</i></li>
<li>La fonction renvoie le plus petit \(n\geqslant 1\) tel que \(u_n\lt 0{,}001\) (la suite étant décroissante, elle ne repasse plus au-dessus ensuite).
\(u_9=\dfrac{9}{\mathrm{e}^9}\approx\dfrac{9}{8103}\approx 0{,}0011\geqslant 0{,}001\) et \(u_{10}=\dfrac{10}{\mathrm{e}^{10}}\approx\dfrac{10}{22\,026}\approx 0{,}00045\lt 0{,}001\).
<code>rang()</code> renvoie <b>10</b>. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 3 — Projeté orthogonal, aire et points cocycliques en Python", points: 5, chapitres: [8, 9, 1],
      enonce: R`<p>Dans un repère orthonormé, on considère \(A(1;1)\), \(B(7;3)\) et \(C(2;6)\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>On note \(H\) le projeté orthogonal de \(C\) sur la droite \((AB)\). Justifier qu'il existe un réel \(k\) tel que \(\overrightarrow{AH}=k\,\overrightarrow{AB}\), puis, en utilisant \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AH}\), déterminer \(k\) et les coordonnées de \(H\).</li>
<li>Calculer la distance \(CH\) et en déduire l'aire du triangle \(ABC\).</li>
<li>Déterminer une équation cartésienne de la hauteur issue de \(C\) dans le triangle \(ABC\). Vérifier que \(H\) lui appartient.</li>
<li>On exécute le programme Python suivant.
<pre><code>def ps(u, v):
    return u[0]*v[0] + u[1]*v[1]

P = []
for x in range(8):
    for y in range(8):
        MA = (1 - x, 1 - y)
        MB = (7 - x, 3 - y)
        if ps(MA, MB) == 0:
            P.append((x, y))</code></pre>
a) Montrer que pour tout point \(M(x;y)\), \(\overrightarrow{MA}\cdot\overrightarrow{MB}=(x-4)^2+(y-2)^2-10\). Quel est l'ensemble des points \(M\) du plan tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\) ?<br>
b) Que contient la liste <code>P</code> à la fin de l'exécution ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}(6;2)\), \(\overrightarrow{AC}(1;5)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=6+10=16\). <i>(0,5 pt)</i></li>
<li>\(H\) appartient à la droite \((AB)\), donc \(\overrightarrow{AH}\) et \(\overrightarrow{AB}\) sont colinéaires : il existe \(k\) tel que \(\overrightarrow{AH}=k\,\overrightarrow{AB}\).
Par projection, \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AH}=k\,AB^2=40k\). Donc \(40k=16\), \(k=\dfrac25\).
\(\overrightarrow{AH}=\dfrac25(6;2)=\left(\dfrac{12}5;\dfrac45\right)\), d'où \(H\left(\dfrac{17}{5};\dfrac{9}{5}\right)\). <i>(1,25 pt)</i></li>
<li>\(\overrightarrow{CH}\left(\dfrac{17}5-2;\dfrac95-6\right)=\left(\dfrac75;-\dfrac{21}5\right)\), donc
\[CH^2=\frac{49+441}{25}=\frac{490}{25},\quad CH=\frac{\sqrt{490}}{5}=\frac{7\sqrt{10}}{5}.\]
\(AB=\sqrt{40}=2\sqrt{10}\), donc \(\mathcal A=\dfrac12\times AB\times CH=\dfrac12\times 2\sqrt{10}\times\dfrac{7\sqrt{10}}5=\dfrac{70}{5}=14\). <i>(1 pt)</i></li>
<li>La hauteur issue de \(C\) est la droite passant par \(C\) de vecteur normal \(\overrightarrow{AB}(6;2)\) : \(6x+2y+c=0\) avec \(12+12+c=0\), \(c=-24\). En divisant par 2 : \(3x+y-12=0\).
Pour \(H\) : \(3\times\dfrac{17}5+\dfrac95=\dfrac{60}{5}=12\) ✓. <i>(0,75 pt)</i></li>
<li>a) \(\overrightarrow{MA}(1-x;1-y)\), \(\overrightarrow{MB}(7-x;3-y)\) :
\[\overrightarrow{MA}\cdot\overrightarrow{MB}=x^2-8x+7+y^2-4y+3=(x-4)^2-16+(y-2)^2-4+10=(x-4)^2+(y-2)^2-10.\]
\(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff (x-4)^2+(y-2)^2=10\) : c'est le cercle de centre \((4;2)\) (milieu de \([AB]\)) et de rayon \(\sqrt{10}\), c'est-à-dire le <b>cercle de diamètre \([AB]\)</b>.<br>
b) On cherche les entiers \(x,y\in\{0,\dots,7\}\) avec \((x-4)^2+(y-2)^2=10\). Or \(10=1+9=9+1\) est la seule écriture comme somme de deux carrés d'entiers :
<ul><li>\(x-4=\pm 3\) et \(y-2=\pm 1\) : \(x\in\{1;7\}\), \(y\in\{1;3\}\) ;</li>
<li>\(x-4=\pm 1\) et \(y-2=\pm 3\) : \(x\in\{3;5\}\), \(y\in\{-1;5\}\), et \(y=-1\) est exclu.</li></ul>
En suivant l'ordre des boucles (\(x\) croissant, puis \(y\) croissant) :
<code>P = [(1, 1), (1, 3), (3, 5), (5, 5), (7, 1), (7, 3)]</code> (on y retrouve \(A\) et \(B\)). <i>(1,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°5", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`Pour le trinôme \(3x^2-2x+1\), on peut affirmer :`,
      choix: [R`il a deux racines distinctes`, R`il est strictement positif pour tout réel \(x\)`, R`il a une racine double`, R`il change de signe sur \(\mathbb R\)`], bonne: 1,
      explication: R`\(\Delta=4-12=-8\lt 0\) : pas de racine, et le trinôme est du signe de \(a=3\gt 0\) pour tout \(x\).` },
    { q: R`\(f(x)=\sqrt x\). Alors \(f'(4)=\)`,
      choix: [R`\(\dfrac14\)`, R`\(\dfrac12\)`, R`\(2\)`, R`\(4\)`], bonne: 0,
      explication: R`\(f'(x)=\dfrac{1}{2\sqrt x}\), donc \(f'(4)=\dfrac{1}{2\times 2}=\dfrac14\).` },
    { q: R`L'équation \(\mathrm{e}^{x}=0\) :`,
      choix: [R`a pour solution \(x=0\)`, R`a pour solution \(x=1\)`, R`n'a pas de solution`, R`a une infinité de solutions`], bonne: 2,
      explication: R`Pour tout réel \(x\), \(\mathrm{e}^x\gt 0\) : l'équation n'a aucune solution.` },
    { q: R`Une équation de la tangente à la parabole \(y=x^2\) au point d'abscisse 1 est :`,
      choix: [R`\(y=2x\)`, R`\(y=x\)`, R`\(y=2x+1\)`, R`\(y=2x-1\)`], bonne: 3,
      explication: R`\(f(1)=1\), \(f'(x)=2x\) donc \(f'(1)=2\) : \(y=2(x-1)+1=2x-1\).` },
    { q: R`\(x\in[0;\pi]\) et \(\cos x=\dfrac35\). Alors \(\sin x=\)`,
      choix: [R`\(\dfrac25\)`, R`\(\dfrac45\)`, R`\(-\dfrac45\)`, R`\(\dfrac{16}{25}\)`], bonne: 1,
      explication: R`\(\sin^2x=1-\cos^2x=1-\frac9{25}=\frac{16}{25}\), et \(\sin x\geqslant 0\) sur \([0;\pi]\), donc \(\sin x=\frac45\).` },
    { q: R`\(1+3+5+\dots+19=\)`,
      choix: [R`\(100\)`, R`\(190\)`, R`\(95\)`, R`\(110\)`], bonne: 0,
      explication: R`Somme de 10 termes d'une suite arithmétique : \(10\times\dfrac{1+19}{2}=100\).` },
    { q: R`\(\|\vec u\|=2\), \(\|\vec v\|=3\) et \(\vec u\cdot\vec v=1\). Alors \(\|\vec u+\vec v\|^2=\)`,
      choix: [R`\(13\)`, R`\(14\)`, R`\(25\)`, R`\(15\)`], bonne: 3,
      explication: R`\(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2=4+2+9=15\).` },
    { q: R`Dans un repère orthonormé, la distance entre \(A(1;2)\) et \(B(4;6)\) vaut :`,
      choix: [R`\(7\)`, R`\(\sqrt7\)`, R`\(5\)`, R`\(25\)`], bonne: 2,
      explication: R`\(AB=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=5\).` },
    { q: R`\(P(A\cup B)=0{,}7\). Alors \(P(\overline A\cap\overline B)=\)`,
      choix: [R`\(0{,}3\)`, R`\(0{,}7\)`, R`\(0{,}49\)`, R`on ne peut pas savoir`], bonne: 0,
      explication: R`\(\overline A\cap\overline B=\overline{A\cup B}\), donc sa probabilité vaut \(1-0{,}7=0{,}3\).` },
    { q: R`\(E(X)=4\). Alors \(E(2X+3)=\)`,
      choix: [R`\(8\)`, R`\(11\)`, R`\(14\)`, R`\(7\)`], bonne: 1,
      explication: R`Linéarité de l'espérance : \(E(aX+b)=aE(X)+b=2\times 4+3=11\).` },
    { q: R`Avec <code>L = [3, 1, 4, 1, 5]</code>, que vaut <code>L[1] + L[-1]</code> ?`,
      choix: [R`<code>8</code>`, R`<code>4</code>`, R`<code>6</code>`, R`<code>2</code>`], bonne: 2,
      explication: R`Les indices commencent à 0 : <code>L[1]</code> vaut 1, et <code>L[-1]</code> est le dernier élément, 5. Somme : 6.` },
    { q: R`La réciproque de « Si \(ABCD\) est un carré, alors \(ABCD\) est un rectangle » est :`,
      choix: [R`« Si \(ABCD\) n'est pas un rectangle, alors ce n'est pas un carré » (vraie)`, R`« Si \(ABCD\) est un rectangle, alors c'est un carré » (vraie)`, R`« Si \(ABCD\) n'est pas un carré, alors ce n'est pas un rectangle » (fausse)`, R`« Si \(ABCD\) est un rectangle, alors c'est un carré » (fausse)`], bonne: 3,
      explication: R`La réciproque de « \(P\Rightarrow Q\) » est « \(Q\Rightarrow P\) ». Elle est fausse : un rectangle de côtés 1 et 2 n'est pas un carré. (Le premier choix est la contraposée.)` }
  ],
  exercices: [
    { titre: "Exercice 1 — Une suite de carrés : conjecture, preuve et parité", points: 4, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=1\) et, pour tout entier naturel \(n\), \(u_{n+1}=u_n+2n+3\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\) et \(u_3\).</li>
<li>On considère la fonction Python ci-dessous. Que renvoie <code>liste(5)</code> ? Quelle conjecture peut-on faire sur l'expression de \(u_n\) ?
<pre><code>def liste(N):
    L = [1]
    for n in range(N):
        L.append(L[-1] + 2*n + 3)
    return L</code></pre></li>
<li>On pose, pour tout \(n\), \(w_n=u_n-(n+1)^2\). Montrer que \((w_n)\) est constante et conclure.</li>
<li>a) Démontrer la proposition : « Pour tout entier \(n\), si \(n\) est pair, alors \(u_n\) est impair ».<br>
b) Énoncer sa contraposée et sa réciproque. La réciproque est-elle vraie ?</li>
<li>Déterminer le plus petit entier \(n\) tel que \(u_n\gt 2026\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=u_0+2\times 0+3=4\), \(u_2=u_1+2\times 1+3=9\), \(u_3=u_2+2\times 2+3=16\). <i>(0,5 pt)</i></li>
<li>Au tour d'indice <code>n</code>, on ajoute \(u_{n+1}=u_n+2n+3\) : <code>liste(5)</code> renvoie <code>[1, 4, 9, 16, 25, 36]</code>, c'est-à-dire \(u_0\) à \(u_5\).
Conjecture : \(u_n=(n+1)^2\) pour tout \(n\). <i>(0,75 pt)</i></li>
<li>Pour tout \(n\) :
\[w_{n+1}=u_{n+1}-(n+2)^2=u_n+2n+3-(n^2+4n+4)=u_n-(n^2+2n+1)=u_n-(n+1)^2=w_n.\]
La suite \((w_n)\) est constante, égale à \(w_0=u_0-1=0\). Donc pour tout \(n\), \(u_n=(n+1)^2\) : la conjecture est démontrée. <i>(1 pt)</i></li>
<li>a) Si \(n\) est pair, \(n=2k\) avec \(k\) entier, donc \(n+1=2k+1\) est impair et \(u_n=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1\) est impair.<br>
b) Contraposée : « si \(u_n\) est pair, alors \(n\) est impair » (vraie, comme la proposition).<br>
Réciproque : « si \(u_n\) est impair, alors \(n\) est pair ». Elle est <b>vraie</b> : par contraposée, si \(n\) est impair, \(n=2k+1\), alors \(u_n=(2k+2)^2=4(k+1)^2\) est pair. Ainsi \(u_n\) est impair <b>si et seulement si</b> \(n\) est pair. <i>(1 pt)</i></li>
<li>\(u_n\gt 2026\iff (n+1)^2\gt 2026\). Or \(45^2=2025\lt 2026\) et \(46^2=2116\gt 2026\). Comme \(n+1\gt 0\), il faut \(n+1\geqslant 46\), soit \(n\geqslant 45\). Le plus petit entier est \(n=45\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Rectangle inscrit sous une parabole : optimisation", points: 5, chapitres: [5, 4, 2],
      enonce: R`<p>Dans un repère orthonormé, on considère la parabole \(\mathcal P\) d'équation \(y=9-x^2\). Pour \(x\in]0;3[\), on construit le rectangle \(ABCD\) avec \(A(-x;0)\), \(B(x;0)\), \(C(x;9-x^2)\) et \(D(-x;9-x^2)\) : ses sommets \(C\) et \(D\) sont sur \(\mathcal P\).</p>
<ol>
<li>Montrer que l'aire du rectangle est \(\mathcal A(x)=18x-2x^3\).</li>
<li>Étudier les variations de \(\mathcal A\) sur \(]0;3[\). Pour quelle valeur de \(x\) l'aire est-elle maximale ? Donner cette aire maximale (valeur exacte).</li>
<li>On note \(p(x)\) le périmètre du rectangle. Montrer que \(p(x)=-2x^2+4x+18\) et déterminer son maximum.</li>
<li>Le rectangle d'aire maximale est-il un carré ? Déterminer la valeur de \(x\) pour laquelle \(ABCD\) est un carré.</li>
<li>Vérifier que \(x^3-9x+8=(x-1)(x^2+x-8)\), puis déterminer les valeurs de \(x\) pour lesquelles l'aire du rectangle vaut 16.</li>
</ol>`,
      correction: R`<ol>
<li>\(AB=x-(-x)=2x\) et \(BC=9-x^2\) (positif car \(x\lt 3\)). \(\mathcal A(x)=2x(9-x^2)=18x-2x^3\). <i>(0,5 pt)</i></li>
<li>\(\mathcal A'(x)=18-6x^2=6(3-x^2)=6(\sqrt3-x)(\sqrt3+x)\). Sur \(]0;3[\), \(\sqrt3+x\gt 0\), donc \(\mathcal A'(x)\) a le signe de \(\sqrt3-x\).
<table class="tv"><tr><td>\(x\)</td><td>0</td><td></td><td>\(\sqrt3\)</td><td></td><td>3</td></tr>
<tr><td>\(\mathcal A'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(\mathcal A\)</td><td>(0)</td><td>↗</td><td>\(12\sqrt3\)</td><td>↘</td><td>(0)</td></tr></table>
\(\mathcal A(\sqrt3)=18\sqrt3-2\times 3\sqrt3=12\sqrt3\) (car \((\sqrt3)^3=3\sqrt3\)). L'aire est maximale pour \(x=\sqrt3\) et vaut \(12\sqrt3\) unités d'aire. <i>(1,5 pt)</i></li>
<li>\(p(x)=2(AB+BC)=2(2x+9-x^2)=-2x^2+4x+18\). C'est un trinôme avec \(a=-2\lt 0\), maximal en \(x=-\dfrac{b}{2a}=1\) : \(p(1)=-2+4+18=20\). Forme canonique : \(p(x)=-2(x-1)^2+20\). Le périmètre maximal est 20, atteint pour \(x=1\). <i>(1 pt)</i></li>
<li>Pour \(x=\sqrt3\) : \(AB=2\sqrt3\approx 3{,}46\) et \(BC=9-3=6\) : ce n'est pas un carré.<br>
\(ABCD\) est un carré si \(2x=9-x^2\iff x^2+2x-9=0\). \(\Delta=4+36=40\), racines \(\dfrac{-2\pm 2\sqrt{10}}{2}=-1\pm\sqrt{10}\). Seule \(x=-1+\sqrt{10}\) est positive, et elle est inférieure à 3 car \(\sqrt{10}\lt 4\). C'est la valeur cherchée. <i>(1 pt)</i></li>
<li>\((x-1)(x^2+x-8)=x^3+x^2-8x-x^2-x+8=x^3-9x+8\) ✓.
\(\mathcal A(x)=16\iff 18x-2x^3=16\iff x^3-9x+8=0\iff x=1\) ou \(x^2+x-8=0\).
\(x^2+x-8=0\) : \(\Delta=33\), racines \(\dfrac{-1\pm\sqrt{33}}{2}\) ; seule \(\dfrac{-1+\sqrt{33}}{2}\) est dans \(]0;3[\) (car \(5\lt\sqrt{33}\lt 6\), elle est entre 2 et 2,5).
L'aire vaut 16 pour \(x=1\) et pour \(x=\dfrac{-1+\sqrt{33}}{2}\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Lancers francs : probabilités en chaîne", points: 5, chapitres: [10, 11],
      enonce: R`<p>Une joueuse de basket tire des lancers francs. Elle réussit le premier avec une probabilité de 0,7. Ensuite, si elle a réussi un lancer, elle réussit le suivant avec une probabilité de 0,8 ; si elle l'a manqué, elle réussit le suivant avec une probabilité de 0,5. On note \(S_k\) : « elle réussit le \(k\)-ième lancer ».</p>
<ol>
<li>Représenter les deux premiers lancers par un arbre pondéré.</li>
<li>Calculer \(P(S_2)\).</li>
<li>Elle a réussi son deuxième lancer. Quelle est la probabilité qu'elle ait réussi le premier ? (fraction irréductible)</li>
<li>On note \(X\) le nombre de lancers réussis sur les deux premiers. Déterminer la loi de \(X\) et son espérance.</li>
<li>Elle tire un troisième lancer, selon la même règle. Calculer la probabilité qu'elle réussisse les trois lancers, puis \(P(S_3)\).</li>
<li>Lors d'un défi d'entraînement, chacun des deux premiers lancers réussis rapporte 2 points ; on note \(Y=2X\) le score obtenu. Calculer \(V(X)\), puis \(E(Y)\) et \(V(Y)\).</li>
</ol>`,
      correction: R`<ol>
<li>\(S_1\) (0,7) puis \(S_2\) (0,8) / \(\overline{S_2}\) (0,2) ; \(\overline{S_1}\) (0,3) puis \(S_2\) (0,5) / \(\overline{S_2}\) (0,5). <i>(0,5 pt)</i></li>
<li>\(P(S_2)=0{,}7\times 0{,}8+0{,}3\times 0{,}5=0{,}56+0{,}15=0{,}71\). <i>(0,75 pt)</i></li>
<li>\[P_{S_2}(S_1)=\frac{P(S_1\cap S_2)}{P(S_2)}=\frac{0{,}56}{0{,}71}=\frac{56}{71}\approx 0{,}79.\]
<i>(0,75 pt)</i></li>
<li>\(P(X=2)=0{,}7\times 0{,}8=0{,}56\) ; \(P(X=1)=0{,}7\times 0{,}2+0{,}3\times 0{,}5=0{,}14+0{,}15=0{,}29\) ; \(P(X=0)=0{,}3\times 0{,}5=0{,}15\). (Somme : 1.)
\[E(X)=0\times 0{,}15+1\times 0{,}29+2\times 0{,}56=1{,}41.\]
<i>(1 pt)</i></li>
<li>\(P(S_1\cap S_2\cap S_3)=0{,}7\times 0{,}8\times 0{,}8=0{,}448\).
Le troisième lancer ne dépend que du deuxième : \(P(S_3)=P(S_2)\times 0{,}8+P(\overline{S_2})\times 0{,}5=0{,}71\times 0{,}8+0{,}29\times 0{,}5=0{,}568+0{,}145=0{,}713\). <i>(1 pt)</i></li>
<li>\(E(X^2)=0{,}29+4\times 0{,}56=2{,}53\), donc \(V(X)=2{,}53-1{,}41^2=2{,}53-1{,}9881=0{,}5419\).
\(E(Y)=2E(X)=2{,}82\) et \(V(Y)=2^2\,V(X)=2{,}1676\). <i>(1 pt)</i></li>
</ol>
<div class="warn">\(V(aX+b)=a^2V(X)\) : le coefficient est élevé au carré, et la constante \(b\) disparaît.</div>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°6", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`Pour tout réel \(x\), \((2x-3)^2=\)`,
      choix: [R`\(4x^2-9\)`, R`\(4x^2-12x+9\)`, R`\(4x^2-6x+9\)`, R`\(2x^2-12x+9\)`], bonne: 1,
      explication: R`\((a-b)^2=a^2-2ab+b^2\) : \(4x^2-2\times 2x\times 3+9=4x^2-12x+9\).` },
    { q: R`L'ensemble des solutions de \(x^2=5x\) est :`,
      choix: [R`\(\{5\}\)`, R`\(\{-5;5\}\)`, R`\(\{0;5\}\)`, R`\(\{\sqrt5\}\)`], bonne: 2,
      explication: R`\(x^2-5x=0\iff x(x-5)=0\iff x=0\) ou \(x=5\). Attention à ne pas diviser par \(x\) (on perdrait la solution 0).` },
    { q: R`Une équation de la tangente à la courbe de \(x\mapsto x^3\) au point d'abscisse 0 est :`,
      choix: [R`\(y=0\)`, R`\(y=x\)`, R`\(y=3x\)`, R`\(x=0\)`], bonne: 0,
      explication: R`\(f(0)=0\) et \(f'(x)=3x^2\), donc \(f'(0)=0\) : la tangente est l'axe des abscisses, \(y=0\).` },
    { q: R`La dérivée de \(f(x)=\mathrm{e}^{-3x+1}\) est :`,
      choix: [R`\(\mathrm{e}^{-3x+1}\)`, R`\(-3x\,\mathrm{e}^{-3x+1}\)`, R`\(\mathrm{e}^{-3}\)`, R`\(-3\,\mathrm{e}^{-3x+1}\)`], bonne: 3,
      explication: R`\(\left(\mathrm{e}^{ax+b}\right)'=a\,\mathrm{e}^{ax+b}\) avec \(a=-3\).` },
    { q: R`L'inéquation \(\mathrm{e}^{x-2}\lt 1\) a pour ensemble de solutions :`,
      choix: [R`\(]2;+\infty[\)`, R`\(]-\infty;2[\)`, R`\(]-\infty;0[\)`, R`\(\varnothing\)`], bonne: 1,
      explication: R`\(1=\mathrm{e}^0\) et la fonction exponentielle est strictement croissante : \(x-2\lt 0\iff x\lt 2\).` },
    { q: R`On lance un dé équilibré à 6 faces. Sachant que le résultat est strictement supérieur à 3, la probabilité qu'il soit pair est :`,
      choix: [R`\(\dfrac12\)`, R`\(\dfrac13\)`, R`\(\dfrac23\)`, R`\(\dfrac16\)`], bonne: 2,
      explication: R`Sachant « 4, 5 ou 6 », les résultats pairs sont 4 et 6 : probabilité \(\frac23\).` },
    { q: R`\(X\) prend les valeurs \(1, 2, 3, 4\) avec la même probabilité. Alors \(E(X)=\)`,
      choix: [R`\(2{,}5\)`, R`\(2\)`, R`\(10\)`, R`\(3\)`], bonne: 0,
      explication: R`\(E(X)=\frac14(1+2+3+4)=\frac{10}{4}=2{,}5\).` },
    { q: R`\(AB=4\), \(AC=5\) et \(\widehat{BAC}=\dfrac{2\pi}{3}\). Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`,
      choix: [R`\(10\)`, R`\(-10\sqrt3\)`, R`\(20\)`, R`\(-10\)`], bonne: 3,
      explication: R`\(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\frac{2\pi}{3}=4\times 5\times\left(-\frac12\right)=-10\).` },
    { q: R`Une équation du cercle de diamètre \([AB]\), avec \(A(0;0)\) et \(B(4;0)\), est :`,
      choix: [R`\(x^2+y^2=4\)`, R`\((x-2)^2+y^2=4\)`, R`\((x-2)^2+y^2=16\)`, R`\((x-4)^2+y^2=4\)`], bonne: 1,
      explication: R`Le centre est le milieu \((2;0)\) de \([AB]\) et le rayon vaut \(\frac{AB}{2}=2\).` },
    { q: R`Que renvoie <code>sum([2*k for k in range(1, 4)])</code> ?`,
      choix: [R`<code>20</code>`, R`<code>6</code>`, R`<code>12</code>`, R`<code>8</code>`], bonne: 2,
      explication: R`<code>range(1, 4)</code> donne 1, 2, 3 ; la liste est <code>[2, 4, 6]</code>, de somme 12.` },
    { q: R`Un contre-exemple à la proposition « Pour tout réel \(x\), \(x^2\geqslant x\) » est :`,
      choix: [R`\(x=-1\)`, R`\(x=\dfrac12\)`, R`\(x=2\)`, R`\(x=1\)`], bonne: 1,
      explication: R`\(\left(\frac12\right)^2=\frac14\lt\frac12\). Pour les trois autres valeurs, \(x^2\geqslant x\) est vraie.` },
    { q: R`\(u_n=2n^2-1\) pour tout \(n\). Alors \(u_{n+1}=\)`,
      choix: [R`\(2n^2\)`, R`\(2n^2+1\)`, R`\(2n^2+2n+1\)`, R`\(2n^2+4n+1\)`], bonne: 3,
      explication: R`\(u_{n+1}=2(n+1)^2-1=2n^2+4n+2-1=2n^2+4n+1\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Une équation trigonométrique du second degré", points: 5, chapitres: [7, 2, 9],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(\mathbb R\) par \(f(x)=2\cos^2x-\cos x-1\).</p>
<ol>
<li>Factoriser \(2X^2-X-1\) et résoudre l'équation \(2X^2-X-1=0\).</li>
<li>En déduire les solutions de l'équation \(f(x)=0\) dans l'intervalle \(]-\pi;\pi]\).</li>
<li>Dans un repère orthonormé, on note \(A\), \(B\) et \(C\) les points du cercle trigonométrique associés à ces solutions (\(A\) pour la solution nulle, \(B\) pour la solution positive). Donner leurs coordonnées exactes et démontrer que le triangle \(ABC\) est équilatéral.</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'inéquation \(f(x)\leqslant 0\).</li>
<li>a) Étudier la parité de \(f\) et justifier que \(f\) est périodique de période \(2\pi\).<br>
b) Calculer \(f\left(\dfrac{\pi}{4}\right)\) et \(f(\pi)\).<br>
c) En posant \(X=\cos x\in[-1;1]\), déterminer le minimum et le maximum de \(f\) sur \(\mathbb R\).</li>
</ol>`,
      correction: R`<ol>
<li>\(X=1\) est racine évidente (\(2-1-1=0\)), et le produit des racines vaut \(\frac{-1}{2}\), donc l'autre racine est \(-\frac12\) :
\[2X^2-X-1=2(X-1)\left(X+\tfrac12\right)=(X-1)(2X+1).\]
Les solutions sont \(1\) et \(-\dfrac12\). <i>(0,75 pt)</i></li>
<li>\(f(x)=(\cos x-1)(2\cos x+1)\), donc \(f(x)=0\iff\cos x=1\) ou \(\cos x=-\dfrac12\).
Dans \(]-\pi;\pi]\) : \(\cos x=1\iff x=0\) ; \(\cos x=-\frac12\iff x=\dfrac{2\pi}{3}\) ou \(x=-\dfrac{2\pi}{3}\).
\(\mathcal S=\left\{-\dfrac{2\pi}{3};0;\dfrac{2\pi}{3}\right\}\). <i>(1 pt)</i></li>
<li>\(A(1;0)\), \(B\left(\cos\frac{2\pi}3;\sin\frac{2\pi}3\right)=\left(-\frac12;\frac{\sqrt3}{2}\right)\), \(C\left(-\frac12;-\frac{\sqrt3}{2}\right)\).
\[AB^2=\left(-\tfrac32\right)^2+\left(\tfrac{\sqrt3}{2}\right)^2=\tfrac94+\tfrac34=3,\quad AC^2=\tfrac94+\tfrac34=3,\quad BC^2=0^2+(\sqrt3)^2=3.\]
\(AB=AC=BC=\sqrt3\) : le triangle \(ABC\) est équilatéral (inscrit dans le cercle trigonométrique). <i>(1,25 pt)</i></li>
<li>Pour tout \(x\), \(\cos x-1\leqslant 0\).
<ul><li>Si \(\cos x=1\) (\(x=0\)) : \(f(x)=0\leqslant 0\).</li>
<li>Sinon \(\cos x-1\lt 0\), et \(f(x)\leqslant 0\iff 2\cos x+1\geqslant 0\iff\cos x\geqslant-\frac12\).</li></ul>
Sur le cercle, \(\cos x\geqslant -\frac12\) correspond à \(x\in\left[-\frac{2\pi}{3};\frac{2\pi}{3}\right]\), qui contient 0.
\(\mathcal S=\left[-\dfrac{2\pi}{3};\dfrac{2\pi}{3}\right]\). <i>(1 pt)</i></li>
<li>a) \(\cos(-x)=\cos x\), donc \(f(-x)=f(x)\) : \(f\) est <b>paire</b>. Et \(\cos(x+2\pi)=\cos x\), donc \(f(x+2\pi)=f(x)\).<br>
b) \(f\left(\frac{\pi}{4}\right)=2\times\frac12-\frac{\sqrt2}{2}-1=-\dfrac{\sqrt2}{2}\) et \(f(\pi)=2\times 1-(-1)-1=2\).<br>
c) \(f(x)=g(\cos x)\) avec \(g(X)=2X^2-X-1\), trinôme de minimum en \(X=-\frac{b}{2a}=\frac14\in[-1;1]\) : \(g\left(\frac14\right)=\frac18-\frac14-1=-\frac98\). \(g\) décroît sur \(\left[-1;\frac14\right]\) et croît sur \(\left[\frac14;1\right]\), avec \(g(-1)=2\) et \(g(1)=0\).
Comme \(\cos x\) prend toutes les valeurs de \([-1;1]\), le minimum de \(f\) est \(-\dfrac98\) (quand \(\cos x=\frac14\)) et son maximum est \(2\) (quand \(\cos x=-1\)). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Exponentielle : une inégalité classique et un encadrement de e", points: 4, chapitres: [6, 4, 5],
      enonce: R`<p>On considère la fonction \(g\) définie sur \(\mathbb R\) par \(g(x)=\mathrm{e}^{x}-x-1\).</p>
<ol>
<li>Étudier les variations de \(g\) sur \(\mathbb R\) et en déduire que pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant 1+x\).</li>
<li>Interpréter graphiquement ce résultat à l'aide d'une tangente que l'on précisera.</li>
<li>En déduire que pour tout réel \(x\), \(\mathrm{e}^{-x}\geqslant 1-x\), puis que pour tout \(x\lt 1\), \(\mathrm{e}^{x}\leqslant\dfrac{1}{1-x}\).</li>
<li>Démontrer que pour tout entier \(n\geqslant 1\), \(\left(1+\dfrac1n\right)^n\leqslant\mathrm{e}\).</li>
<li>En choisissant judicieusement les valeurs, établir l'encadrement \(\dfrac94\leqslant\mathrm{e}\leqslant\dfrac{27}{8}\).</li>
</ol>`,
      correction: R`<ol>
<li>\(g'(x)=\mathrm{e}^x-1\). Comme \(\exp\) est strictement croissante et \(\mathrm{e}^0=1\) : \(g'(x)\lt 0\) si \(x\lt 0\), \(g'(0)=0\), \(g'(x)\gt 0\) si \(x\gt 0\).
\(g\) est décroissante sur \(]-\infty;0]\), croissante sur \([0;+\infty[\) : elle admet un minimum en 0, \(g(0)=1-0-1=0\).
Donc \(g(x)\geqslant 0\) pour tout \(x\), soit \(\mathrm{e}^x\geqslant 1+x\). <i>(1,25 pt)</i></li>
<li>La tangente à la courbe de \(\exp\) en 0 a pour équation \(y=\mathrm{e}^0(x-0)+\mathrm{e}^0=x+1\). La courbe de la fonction exponentielle est <b>au-dessus</b> de cette tangente. <i>(0,5 pt)</i></li>
<li>En appliquant l'inégalité à \(-x\) : \(\mathrm{e}^{-x}\geqslant 1-x\).
Si \(x\lt 1\), alors \(1-x\gt 0\) ; les deux membres sont strictement positifs et la fonction inverse est décroissante sur \(]0;+\infty[\) :
\[\frac{1}{\mathrm{e}^{-x}}\leqslant\frac{1}{1-x},\ \text{soit}\ \mathrm{e}^{x}\leqslant\frac{1}{1-x}.\]
<i>(0,75 pt)</i></li>
<li>Avec \(x=\frac1n\) : \(\mathrm{e}^{1/n}\geqslant 1+\frac1n\gt 0\). La fonction \(t\mapsto t^n\) étant croissante sur \([0;+\infty[\), on peut élever à la puissance \(n\) :
\[\left(\mathrm{e}^{1/n}\right)^n=\mathrm{e}\geqslant\left(1+\frac1n\right)^n.\]
<i>(0,75 pt)</i></li>
<li>Avec \(n=2\) dans la question 4 : \(\mathrm{e}\geqslant\left(\frac32\right)^2=\frac94\).
Avec \(x=\frac13\) dans la question 3 : \(\mathrm{e}^{1/3}\leqslant\dfrac{1}{1-\frac13}=\dfrac32\), puis en élevant au cube (fonction croissante sur \([0;+\infty[\)) : \(\mathrm{e}\leqslant\frac{27}{8}\).
Donc \(\dfrac94\leqslant\mathrm{e}\leqslant\dfrac{27}8\), c'est-à-dire \(2{,}25\leqslant\mathrm{e}\leqslant 3{,}375\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 3 — Suite auxiliaire, seuil, somme et divisibilité", points: 5, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=2\) et, pour tout entier naturel \(n\), \(u_{n+1}=3u_n-2\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\) et \(u_3\).</li>
<li>On pose \(v_n=u_n-1\). Montrer que \((v_n)\) est géométrique et en déduire que \(u_n=3^n+1\) pour tout \(n\).</li>
<li>Étudier le sens de variation de \((u_n)\).</li>
<li>a) Que contient la liste <code>[3**k + 1 for k in range(5)]</code> ?<br>
b) Que renvoie <code>seuil(1000)</code>, où la fonction <code>seuil</code> est définie ci-dessous ? Justifier par le calcul.
<pre><code>def seuil(S):
    n = 0
    u = 2
    while u &lt;= S:
        u = 3*u - 2
        n = n + 1
    return n</code></pre></li>
<li>Calculer \(S_n=u_0+u_1+\dots+u_n\) en fonction de \(n\).</li>
<li>a) Montrer que \(u_n\) est pair pour tout \(n\).<br>
b) Soit \(n\) un entier impair, \(n=2k+1\) avec \(k\geqslant 1\). Montrer que \(u_n=3(9^k-1)+4\), puis, en utilisant \(1+9+9^2+\dots+9^{k-1}=\dfrac{9^k-1}{8}\), démontrer que \(u_n\) est divisible par 4. Que dire de \(u_1\) ?</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=3\times 2-2=4\), \(u_2=3\times 4-2=10\), \(u_3=3\times 10-2=28\). <i>(0,5 pt)</i></li>
<li>\(v_{n+1}=u_{n+1}-1=3u_n-3=3(u_n-1)=3v_n\) : \((v_n)\) est géométrique de raison 3 et de premier terme \(v_0=1\).
Donc \(v_n=3^n\) et \(u_n=3^n+1\). <i>(1 pt)</i></li>
<li>\(u_{n+1}-u_n=3^{n+1}-3^n=3^n(3-1)=2\times 3^n\gt 0\) : la suite est strictement croissante. <i>(0,5 pt)</i></li>
<li>a) <code>[2, 4, 10, 28, 82]</code> : ce sont \(u_0\) à \(u_4\).<br>
b) La fonction renvoie le plus petit \(n\) tel que \(u_n\gt 1000\) (la suite est croissante). \(u_6=729+1=730\leqslant 1000\) et \(u_7=2187+1=2188\gt 1000\) : <code>seuil(1000)</code> renvoie <b>7</b>. <i>(0,75 pt)</i></li>
<li>\[S_n=\sum_{k=0}^{n}\left(3^k+1\right)=\frac{3^{n+1}-1}{3-1}+(n+1)=\frac{3^{n+1}-1}{2}+n+1.\]
Vérification : \(S_1=\frac{8}{2}+2=6=2+4\) ✓. <i>(0,75 pt)</i></li>
<li>a) \(3^n\) est un produit de nombres impairs, donc impair ; \(u_n=3^n+1\) est donc pair. <i>(0,5 pt)</i><br>
b) \(u_n=3^{2k+1}+1=3\times 9^k+1=3\times 9^k-3+4=3(9^k-1)+4\).
D'après la somme géométrique, \(9^k-1=8\times(1+9+\dots+9^{k-1})\) est un multiple de 8, donc de 4. Ainsi \(u_n=4\left[6\,(1+9+\dots+9^{k-1})+1\right]\) est divisible par 4.
Pour \(k=0\) : \(u_1=4\), divisible par 4 aussi. Tous les termes d'indice impair sont donc multiples de 4. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°7", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`Le discriminant du trinôme \(x^2+x+1\) vaut :`,
      choix: [R`\(5\)`, R`\(-3\)`, R`\(3\)`, R`\(0\)`], bonne: 1,
      explication: R`\(\Delta=b^2-4ac=1-4=-3\) : le trinôme n'a pas de racine réelle.` },
    { q: R`L'ensemble des solutions de \(x^2\lt 9\) est :`,
      choix: [R`\(]-\infty;3[\)`, R`\(]-9;9[\)`, R`\(]-3;3[\)`, R`\(]-\infty;-3[\cup]3;+\infty[\)`], bonne: 2,
      explication: R`\(x^2-9=(x-3)(x+3)\lt 0\) entre les racines \(-3\) et \(3\) (coefficient \(a=1\gt 0\)).` },
    { q: R`\(\dfrac{\mathrm{e}^{2}\times\mathrm{e}^{3}}{\mathrm{e}^{4}}=\)`,
      choix: [R`\(\mathrm{e}\)`, R`\(\mathrm{e}^{\frac32}\)`, R`\(\mathrm{e}^{2}\)`, R`\(1\)`], bonne: 0,
      explication: R`\(\mathrm{e}^{2+3-4}=\mathrm{e}^{1}=\mathrm{e}\).` },
    { q: R`La dérivée de \(f(x)=\dfrac{3x-1}{x+2}\) (sur \(]-2;+\infty[\)) est :`,
      choix: [R`\(3\)`, R`\(\dfrac{5}{(x+2)^2}\)`, R`\(\dfrac{-7}{(x+2)^2}\)`, R`\(\dfrac{7}{(x+2)^2}\)`], bonne: 3,
      explication: R`\(\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\) : \(\dfrac{3(x+2)-(3x-1)}{(x+2)^2}=\dfrac{7}{(x+2)^2}\).` },
    { q: R`La tangente à la courbe d'une fonction dérivable \(f\) au point d'abscisse \(a\) est parallèle à l'axe des abscisses si et seulement si :`,
      choix: [R`\(f(a)=0\)`, R`\(f'(a)=0\)`, R`\(f'(a)=1\)`, R`\(a=0\)`], bonne: 1,
      explication: R`Le coefficient directeur de la tangente est \(f'(a)\) ; elle est horizontale lorsqu'il est nul.` },
    { q: R`\(\sin\left(-\dfrac{\pi}{6}\right)=\)`,
      choix: [R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`, R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`], bonne: 2,
      explication: R`La fonction sinus est impaire : \(\sin\left(-\frac{\pi}{6}\right)=-\sin\frac{\pi}{6}=-\frac12\).` },
    { q: R`Dans \(]-\pi;\pi]\), les solutions de \(\cos x=0\) sont :`,
      choix: [R`\(-\dfrac{\pi}{2}\) et \(\dfrac{\pi}{2}\)`, R`\(0\) et \(\pi\)`, R`\(\dfrac{\pi}{2}\) seulement`, R`\(0\) seulement`], bonne: 0,
      explication: R`Les points du cercle trigonométrique d'abscisse nulle sont \((0;1)\) et \((0;-1)\), associés à \(\frac{\pi}{2}\) et \(-\frac{\pi}{2}\).` },
    { q: R`Dans un repère orthonormé, \(\vec u(m;2)\) et \(\vec v(3;-6)\) sont orthogonaux lorsque :`,
      choix: [R`\(m=-1\)`, R`\(m=1\)`, R`\(m=-4\)`, R`\(m=4\)`], bonne: 3,
      explication: R`\(\vec u\cdot\vec v=3m-12=0\iff m=4\).` },
    { q: R`\((u_n)\) est géométrique de raison \(q\gt 0\), avec \(u_1=6\) et \(u_3=24\). Alors \(q=\)`,
      choix: [R`\(2\)`, R`\(4\)`, R`\(9\)`, R`\(3\)`], bonne: 0,
      explication: R`\(u_3=u_1\times q^2\), donc \(q^2=4\) et, comme \(q\gt 0\), \(q=2\).` },
    { q: R`\(P(A)=0{,}5\), \(P(B)=0{,}4\) et \(P(A\cap B)=0{,}2\). Alors \(P_A(B)=\)`,
      choix: [R`\(0{,}5\)`, R`\(0{,}4\)`, R`\(0{,}2\)`, R`\(0{,}1\)`], bonne: 1,
      explication: R`\(P_A(B)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}2}{0{,}5}=0{,}4=P(B)\) : \(A\) et \(B\) sont d'ailleurs indépendants.` },
    { q: R`Avec <code>def f(x): return x**2 - 1</code>, que vaut <code>[f(k) for k in range(-1, 2)]</code> ?`,
      choix: [R`<code>[0, -1, 0, 3]</code>`, R`<code>[-1, 0, 1]</code>`, R`<code>[0, -1, 0]</code>`, R`<code>[1, 0, 1]</code>`], bonne: 2,
      explication: R`<code>range(-1, 2)</code> donne \(-1\), \(0\), \(1\), d'images \(0\), \(-1\), \(0\).` },
    { q: R`Pour un entier \(n\), « \(n\) est pair » est, pour que « \(n\) soit multiple de 4 », une condition :`,
      choix: [R`suffisante mais pas nécessaire`, R`nécessaire et suffisante`, R`ni nécessaire ni suffisante`, R`nécessaire mais pas suffisante`], bonne: 3,
      explication: R`Tout multiple de 4 est pair (condition nécessaire), mais 6 est pair sans être multiple de 4 (pas suffisante).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Cercle, tangentes et carré", points: 4, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère l'ensemble \(\Gamma\) des points \(M(x;y)\) tels que \(x^2+y^2-4x+6y-12=0\).</p>
<ol>
<li>Montrer que \(\Gamma\) est un cercle dont on précisera le centre \(\Omega\) et le rayon.</li>
<li>Vérifier que \(A(5;1)\) appartient à \(\Gamma\), puis déterminer une équation de la tangente \(T_A\) à \(\Gamma\) en \(A\).</li>
<li>Déterminer les coordonnées des points d'intersection de \(\Gamma\) avec la droite \(\Delta\) d'équation \(y=x\).</li>
<li>Vérifier que \(B(-2;0)\in\Gamma\). Calculer \(\overrightarrow{\Omega A}\cdot\overrightarrow{\Omega B}\) et en déduire la nature du triangle \(A\Omega B\), ainsi que la longueur \(AB\).</li>
<li>La tangente \(T_B\) à \(\Gamma\) en \(B\) a pour équation \(-4x+3y-8=0\) (à vérifier). Déterminer le point d'intersection \(K\) de \(T_A\) et \(T_B\), puis la nature du quadrilatère \(\Omega AKB\).</li>
</ol>`,
      correction: R`<ol>
<li>\(x^2-4x=(x-2)^2-4\) et \(y^2+6y=(y+3)^2-9\), donc l'équation équivaut à
\[(x-2)^2+(y+3)^2-4-9-12=0\iff (x-2)^2+(y+3)^2=25.\]
\(\Gamma\) est le cercle de centre \(\Omega(2;-3)\) et de rayon 5. <i>(0,75 pt)</i></li>
<li>\((5-2)^2+(1+3)^2=9+16=25\) : \(A\in\Gamma\).
\(T_A\) est perpendiculaire à \((\Omega A)\) en \(A\) : \(\overrightarrow{\Omega A}(3;4)\) est normal à \(T_A\), d'où \(3x+4y+c=0\) avec \(15+4+c=0\), \(c=-19\).
\(T_A : 3x+4y-19=0\). <i>(1 pt)</i></li>
<li>On remplace \(y\) par \(x\) : \((x-2)^2+(x+3)^2=25\iff 2x^2+2x+13=25\iff x^2+x-6=0\).
\(\Delta=1+24=25\), racines \(\frac{-1-5}{2}=-3\) et \(\frac{-1+5}{2}=2\).
Points d'intersection : \((2;2)\) et \((-3;-3)\). <i>(1 pt)</i></li>
<li>\((-2-2)^2+(0+3)^2=16+9=25\) : \(B\in\Gamma\).
\(\overrightarrow{\Omega B}(-4;3)\) et \(\overrightarrow{\Omega A}\cdot\overrightarrow{\Omega B}=-12+12=0\). Comme \(\Omega A=\Omega B=5\), le triangle \(A\Omega B\) est <b>rectangle isocèle en \(\Omega\)</b>, et \(AB=5\sqrt2\) (Pythagore : \(AB^2=25+25=50\)). <i>(0,75 pt)</i></li>
<li>\(\overrightarrow{\Omega B}(-4;3)\) est normal à \(T_B\) et \(-4\times(-2)+3\times 0-8=0\) ✓.
On résout \(\begin{cases}3x+4y=19\\-4x+3y=8\end{cases}\) : en formant \(4\times(1)+3\times(2)\) on obtient \(25y=100\), \(y=4\), puis \(3x=19-16\), \(x=1\). Donc \(K(1;4)\).
\(\overrightarrow{\Omega A}(3;4)=\overrightarrow{BK}(3;4)\) : \(\Omega AKB\) est un parallélogramme ; il a un angle droit en \(\Omega\) et deux côtés consécutifs égaux (\(\Omega A=\Omega B=5\)) : c'est un <b>carré</b>. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Club de sport : probabilité manquante et cotisation moyenne", points: 5, chapitres: [10, 11],
      enonce: R`<p>Dans un lycée, 55 % des élèves sont des filles. 40 % des filles sont inscrites au club de sport, et au total 46 % des élèves du lycée sont inscrits au club. On interroge un élève au hasard ; on note \(F\) : « l'élève est une fille » et \(S\) : « l'élève est inscrit au club ». On note \(p=P_{\overline F}(S)\).</p>
<ol>
<li>Construire un arbre pondéré (en fonction de \(p\)).</li>
<li>Calculer \(p\) (fraction irréductible) et interpréter.</li>
<li>L'élève interrogé est inscrit au club. Quelle est la probabilité que ce soit une fille ?</li>
<li>Les événements \(F\) et \(S\) sont-ils indépendants ?</li>
<li>La cotisation annuelle est de 30 € pour une fille et 40 € pour un garçon ; un élève non inscrit ne paie rien. On note \(Y\) la somme versée par un élève choisi au hasard. Donner la loi de \(Y\) et calculer \(E(Y)\).</li>
<li>Le club souhaite une recette moyenne de 18 € par élève du lycée, sans changer la cotisation des filles. Quelle cotisation doit-il demander aux garçons ?</li>
<li>On interroge deux élèves au hasard, de façon indépendante. Calculer la probabilité qu'exactement un des deux soit inscrit au club.</li>
</ol>`,
      correction: R`<ol>
<li>\(F\) (0,55) puis \(S\) (0,4) / \(\overline S\) (0,6) ; \(\overline F\) (0,45) puis \(S\) (\(p\)) / \(\overline S\) (\(1-p\)). <i>(0,5 pt)</i></li>
<li>Probabilités totales : \(P(S)=0{,}55\times 0{,}4+0{,}45\,p=0{,}22+0{,}45\,p\).
\(0{,}22+0{,}45\,p=0{,}46\iff p=\dfrac{0{,}24}{0{,}45}=\dfrac{24}{45}=\dfrac{8}{15}\approx 0{,}533\).
Environ 53 % des garçons sont inscrits au club. <i>(1 pt)</i></li>
<li>\[P_S(F)=\frac{P(F\cap S)}{P(S)}=\frac{0{,}22}{0{,}46}=\frac{11}{23}\approx 0{,}478.\]
<i>(0,75 pt)</i></li>
<li>\(P(F)\times P(S)=0{,}55\times 0{,}46=0{,}253\neq 0{,}22=P(F\cap S)\) : \(F\) et \(S\) ne sont pas indépendants. <i>(0,5 pt)</i></li>
<li>\(P(Y=30)=P(F\cap S)=0{,}22\) ; \(P(Y=40)=P(\overline F\cap S)=0{,}45\times\frac8{15}=0{,}24\) ; \(P(Y=0)=P(\overline S)=0{,}54\). (Somme : 1.)
\[E(Y)=0\times 0{,}54+30\times 0{,}22+40\times 0{,}24=6{,}6+9{,}6=16{,}2.\]
La recette moyenne est de 16,20 € par élève. <i>(1 pt)</i></li>
<li>Avec une cotisation \(c\) pour les garçons : \(E=6{,}6+0{,}24\,c\). \(6{,}6+0{,}24\,c=18\iff c=\dfrac{11{,}4}{0{,}24}=47{,}5\). Il faut demander 47,50 € aux garçons. <i>(0,5 pt)</i></li>
<li>« Exactement un » : (inscrit, non inscrit) ou (non inscrit, inscrit), donc par indépendance
\[2\times 0{,}46\times 0{,}54=0{,}4968.\]
<i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Étude complète d'une fonction produit avec l'exponentielle", points: 5, chapitres: [6, 4, 5, 2],
      enonce: R`<p>On considère la fonction \(f\) définie sur \([-2;4]\) par \(f(x)=(x^2+x+1)\,\mathrm{e}^{-x}\), de courbe \(\mathcal C_f\).</p>
<ol>
<li>Démontrer que \(f(x)\gt 0\) pour tout \(x\in[-2;4]\).</li>
<li>Montrer que \(f'(x)=x(1-x)\,\mathrm{e}^{-x}\).</li>
<li>Dresser le tableau de variations de \(f\) sur \([-2;4]\) (valeurs exactes).</li>
<li>Déterminer le maximum et le minimum de \(f\) sur \([-2;4]\). On pourra utiliser \(\mathrm{e}\gt 2{,}5\).</li>
<li>Déterminer une équation de la tangente à \(\mathcal C_f\) au point d'abscisse \(-1\), puis l'abscisse du point où elle coupe l'axe des abscisses. Que dire de la tangente au point d'abscisse 0 ?</li>
<li>On admet que si une fonction dérivable est strictement monotone sur un intervalle \([a;b]\), elle prend une fois et une seule chaque valeur comprise entre \(f(a)\) et \(f(b)\). Déterminer le nombre de solutions de l'équation \(f(x)=2\) sur \([-2;4]\).</li>
</ol>`,
      correction: R`<ol>
<li>Le trinôme \(x^2+x+1\) a pour discriminant \(\Delta=1-4=-3\lt 0\) : il est du signe de \(a=1\), donc strictement positif. Comme \(\mathrm{e}^{-x}\gt 0\), \(f(x)\gt 0\). <i>(0,5 pt)</i></li>
<li>\(f=uv\) avec \(u=x^2+x+1\), \(u'=2x+1\), \(v=\mathrm{e}^{-x}\), \(v'=-\mathrm{e}^{-x}\) :
\[f'(x)=(2x+1)\,\mathrm{e}^{-x}-(x^2+x+1)\,\mathrm{e}^{-x}=(-x^2+x)\,\mathrm{e}^{-x}=x(1-x)\,\mathrm{e}^{-x}.\]
<i>(1 pt)</i></li>
<li>\(f'(x)\) a le signe de \(x(1-x)\), trinôme de racines 0 et 1 et de coefficient \(-1\lt 0\) : négatif à l'extérieur des racines, positif entre elles.
\(f(-2)=3\,\mathrm{e}^{2}\), \(f(0)=1\), \(f(1)=3\,\mathrm{e}^{-1}\), \(f(4)=21\,\mathrm{e}^{-4}\).
<table class="tv"><tr><td>\(x\)</td><td>\(-2\)</td><td></td><td>0</td><td></td><td>1</td><td></td><td>4</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(f\)</td><td>\(3\,\mathrm{e}^{2}\)</td><td>↘</td><td>1</td><td>↗</td><td>\(\frac{3}{\mathrm{e}}\)</td><td>↘</td><td>\(\frac{21}{\mathrm{e}^4}\)</td></tr></table>
<i>(1,25 pt)</i></li>
<li>Maximum : on compare \(3\,\mathrm{e}^2\) et \(\frac3{\mathrm{e}}\) ; comme \(\mathrm{e}^2\gt 1\gt\frac1{\mathrm{e}}\), le maximum est \(3\,\mathrm{e}^2\), atteint en \(-2\).
Minimum : on compare \(1\) et \(\frac{21}{\mathrm{e}^4}\). Or \(\mathrm{e}\gt 2{,}5\) donne \(\mathrm{e}^2\gt 6{,}25\) puis \(\mathrm{e}^4\gt 39\gt 21\), donc \(\frac{21}{\mathrm{e}^4}\lt 1\). Le minimum est \(21\,\mathrm{e}^{-4}\), atteint en 4. <i>(0,75 pt)</i></li>
<li>\(f(-1)=(1-1+1)\,\mathrm{e}^{1}=\mathrm{e}\) et \(f'(-1)=(-1)\times 2\times\mathrm{e}^{1}=-2\,\mathrm{e}\).
Tangente : \(y=-2\,\mathrm{e}(x+1)+\mathrm{e}=-2\,\mathrm{e}\,x-\mathrm{e}\). Elle coupe l'axe des abscisses lorsque \(-2\,\mathrm{e}\,x-\mathrm{e}=0\iff x=-\frac12\).
En 0, \(f'(0)=0\) : la tangente est horizontale, d'équation \(y=1\). <i>(0,75 pt)</i></li>
<li><ul><li>Sur \([-2;0]\), \(f\) est strictement décroissante de \(3\,\mathrm{e}^2\) (\(\gt 2\)) à \(1\) (\(\lt 2\)) : l'équation \(f(x)=2\) y a exactement une solution.</li>
<li>Sur \([0;4]\), \(f(x)\leqslant\frac3{\mathrm{e}}\lt 1{,}2\) (car \(\mathrm{e}\gt 2{,}5\)) : pas de solution.</li></ul>
L'équation \(f(x)=2\) admet exactement <b>une</b> solution sur \([-2;4]\), située dans \(]-2;0[\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°8", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`Prendre 30 % de 40 % d'une quantité revient à en prendre :`,
      choix: [R`70 %`, R`12 %`, R`10 %`, R`1,2 %`], bonne: 1,
      explication: R`\(0{,}3\times 0{,}4=0{,}12\), soit 12 %.` },
    { q: R`Le trinôme \(x^2-2x-3\) est strictement négatif exactement sur :`,
      choix: [R`\(]-1;3[\)`, R`\(]-3;1[\)`, R`\(]-\infty;-1[\cup]3;+\infty[\)`, R`\(]1;3[\)`], bonne: 0,
      explication: R`\(x^2-2x-3=(x+1)(x-3)\) : racines \(-1\) et \(3\), et \(a=1\gt 0\) donc négatif entre les racines.` },
    { q: R`Le sommet de la parabole d'équation \(y=2x^2-8x+5\) est le point :`,
      choix: [R`\((-2;29)\)`, R`\((4;5)\)`, R`\((2;-3)\)`, R`\((2;5)\)`], bonne: 2,
      explication: R`Abscisse \(-\frac{b}{2a}=\frac{8}{4}=2\), ordonnée \(2\times 4-16+5=-3\).` },
    { q: R`La dérivée de \(f(x)=4\sqrt x-x\) sur \(]0;+\infty[\) est :`,
      choix: [R`\(\dfrac{4}{\sqrt x}-1\)`, R`\(2\sqrt x-1\)`, R`\(\dfrac{1}{2\sqrt x}-1\)`, R`\(\dfrac{2}{\sqrt x}-1\)`], bonne: 3,
      explication: R`\((\sqrt x)'=\dfrac{1}{2\sqrt x}\), donc \(f'(x)=\dfrac{4}{2\sqrt x}-1=\dfrac{2}{\sqrt x}-1\).` },
    { q: R`\(f\) est dérivable sur \([0;3]\), \(f'(x)\gt 0\) sur \(]0;3[\) et \(f(0)=1\). On peut affirmer que :`,
      choix: [R`\(f(3)=4\)`, R`\(f(3)\gt 1\)`, R`\(f(3)\lt 1\)`, R`\(f(3)\gt 3\)`], bonne: 1,
      explication: R`\(f\) est strictement croissante sur \([0;3]\), donc \(f(3)\gt f(0)=1\). On ne peut rien dire de plus précis.` },
    { q: R`Pour tout réel \(x\), \(\left(\mathrm{e}^{x}+\mathrm{e}^{-x}\right)^2=\)`,
      choix: [R`\(\mathrm{e}^{2x}+\mathrm{e}^{-2x}\)`, R`\(\mathrm{e}^{2x}+1+\mathrm{e}^{-2x}\)`, R`\(\mathrm{e}^{2x}+2+\mathrm{e}^{-2x}\)`, R`\(2\)`], bonne: 2,
      explication: R`\((a+b)^2=a^2+2ab+b^2\) avec \(ab=\mathrm{e}^x\times\mathrm{e}^{-x}=\mathrm{e}^0=1\).` },
    { q: R`Pour tout réel \(x\), \(\cos\left(\dfrac{\pi}{2}-x\right)=\)`,
      choix: [R`\(\sin x\)`, R`\(-\sin x\)`, R`\(\cos x\)`, R`\(-\cos x\)`], bonne: 0,
      explication: R`Les points associés à \(x\) et \(\frac{\pi}2-x\) sont symétriques par rapport à la droite \(y=x\) : on échange cosinus et sinus.` },
    { q: R`Un angle de \(\dfrac{3\pi}{4}\) radians mesure, en degrés :`,
      choix: [R`\(120^\circ\)`, R`\(150^\circ\)`, R`\(270^\circ\)`, R`\(135^\circ\)`], bonne: 3,
      explication: R`\(\pi\) rad \(=180^\circ\), donc \(\frac{3\pi}{4}\) rad \(=\frac34\times 180^\circ=135^\circ\).` },
    { q: R`\(\vec u\) et \(\vec v\) sont colinéaires de sens contraires, avec \(\|\vec u\|=\|\vec v\|=2\). Alors \(\vec u\cdot\vec v=\)`,
      choix: [R`\(-4\)`, R`\(0\)`, R`\(4\)`, R`\(-2\)`], bonne: 0,
      explication: R`L'angle entre les vecteurs vaut \(\pi\) : \(\vec u\cdot\vec v=2\times 2\times\cos\pi=-4\).` },
    { q: R`Une équation de la droite \((AB)\), avec \(A(1;3)\) et \(B(3;7)\), est :`,
      choix: [R`\(y=2x+3\)`, R`\(y=2x+1\)`, R`\(y=4x-1\)`, R`\(y=\frac12x+\frac52\)`], bonne: 1,
      explication: R`Coefficient directeur \(\frac{7-3}{3-1}=2\), puis \(3=2\times 1+p\) donne \(p=1\).` },
    { q: R`\(X\) prend les valeurs \(0,1,2,3\) avec les probabilités \(0{,}1\) ; \(0{,}3\) ; \(0{,}4\) ; \(0{,}2\). Alors \(P(X\geqslant 2)=\)`,
      choix: [R`\(0{,}4\)`, R`\(0{,}2\)`, R`\(0{,}6\)`, R`\(0{,}9\)`], bonne: 2,
      explication: R`\(P(X\geqslant 2)=P(X=2)+P(X=3)=0{,}4+0{,}2=0{,}6\).` },
    { q: R`Que valent <code>n</code> et <code>s</code> après l'exécution de ce programme ?<pre><code>n = 0
s = 0
while s &lt; 10:
    n = n + 1
    s = s + n</code></pre>`,
      choix: [R`<code>n = 3</code>, <code>s = 6</code>`, R`<code>n = 5</code>, <code>s = 15</code>`, R`<code>n = 10</code>, <code>s = 55</code>`, R`<code>n = 4</code>, <code>s = 10</code>`], bonne: 3,
      explication: R`\(s\) prend les valeurs 1, 3, 6, 10. Quand \(s=10\), la condition \(s\lt 10\) est fausse : la boucle s'arrête avec \(n=4\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Un jeu de dés : loi, espérance et simulation", points: 4, chapitres: [11, 1],
      enonce: R`<p>Un joueur paie 2 € pour lancer deux dés équilibrés à six faces. Il reçoit alors, en euros, l'écart entre les deux résultats (la valeur absolue de leur différence). On note \(X\) la somme reçue et \(Y=X-2\) le gain algébrique du joueur.</p>
<ol>
<li>À l'aide d'un tableau à double entrée, déterminer la loi de probabilité de \(X\).</li>
<li>Calculer \(E(X)\), puis \(E(Y)\). Le jeu est-il favorable au joueur ?</li>
<li>On considère le programme Python ci-dessous.
<pre><code>from random import randint

def partie():
    d1 = randint(1, 6)
    d2 = randint(1, 6)
    return abs(d1 - d2) - 2

def moyenne(N):
    L = [partie() for k in range(N)]
    return sum(L) / N</code></pre>
a) Quelles sont les valeurs que peut renvoyer <code>partie()</code> ?<br>
b) Autour de quelle valeur se situera vraisemblablement <code>moyenne(100000)</code> ? Justifier.</li>
<li>a) Calculer \(P(Y\gt 0)\).<br>
b) Le joueur affirme : « Si je joue suffisamment longtemps, je finirai forcément gagnant ». Qu'en penser ? Quel prix de participation rendrait le jeu équitable ?</li>
</ol>`,
      correction: R`<ol>
<li>Les 36 couples \((d_1;d_2)\) sont équiprobables. En comptant les écarts dans le tableau à double entrée :
<table class="tv"><tr><td>\(x_i\)</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><td>\(P(X=x_i)\)</td><td>\(\frac{6}{36}\)</td><td>\(\frac{10}{36}\)</td><td>\(\frac{8}{36}\)</td><td>\(\frac{6}{36}\)</td><td>\(\frac{4}{36}\)</td><td>\(\frac{2}{36}\)</td></tr></table>
(par exemple, l'écart 1 est obtenu pour les 10 couples \((1;2),(2;1),(2;3),(3;2),\dots,(5;6),(6;5)\) ; total : 36). <i>(1,25 pt)</i></li>
<li>\[E(X)=\frac{0\times 6+1\times 10+2\times 8+3\times 6+4\times 4+5\times 2}{36}=\frac{70}{36}=\frac{35}{18}\approx 1{,}94.\]
\(E(Y)=E(X)-2=-\dfrac{1}{18}\approx -0{,}056\). L'espérance est négative : le jeu est <b>défavorable</b> au joueur. <i>(1 pt)</i></li>
<li>a) \(|d_1-d_2|\) va de 0 à 5, donc <code>partie()</code> renvoie un entier parmi \(-2,-1,0,1,2,3\).<br>
b) <code>moyenne(100000)</code> calcule la moyenne des gains sur 100 000 parties simulées. D'après la loi des grands nombres, elle sera proche de \(E(Y)=-\frac1{18}\approx -0{,}056\). <i>(0,75 pt)</i></li>
<li>a) \(P(Y\gt 0)=P(X\geqslant 3)=\dfrac{6+4+2}{36}=\dfrac13\). <i>(0,5 pt)</i><br>
b) C'est faux : sur un grand nombre de parties, le gain moyen par partie se rapproche de \(-\frac1{18}\) €, donc le joueur perd en moyenne environ 5,6 centimes par partie. Le jeu serait équitable pour un prix de \(E(X)=\frac{35}{18}\approx 1{,}94\) €. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Suite des différences et minimum d'une suite", points: 5, chapitres: [3, 2],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=30\) et, pour tout entier naturel \(n\), \(u_{n+1}=u_n+2n-9\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\) et \(u_3\).</li>
<li>On pose \(w_n=u_{n+1}-u_n\). Montrer que \((w_n)\) est arithmétique.</li>
<li>Pour \(n\geqslant 1\), justifier que \(u_n=u_0+w_0+w_1+\dots+w_{n-1}\), puis en déduire que \(u_n=n^2-10n+30\) pour tout \(n\).</li>
<li>Étudier les variations de \((u_n)\). Quel est le plus petit terme de la suite ?</li>
<li>Déterminer le plus petit entier \(n\) tel que \(u_n\gt 100\).</li>
<li>a) Démontrer que \(u_n\) a la même parité que \(n\).<br>
b) Existe-t-il un entier \(n\) tel que \(u_n=2026\) ?</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=30+0-9=21\), \(u_2=21+2-9=14\), \(u_3=14+4-9=9\). <i>(0,5 pt)</i></li>
<li>\(w_n=2n-9\), donc \(w_{n+1}-w_n=2(n+1)-9-(2n-9)=2\) : \((w_n)\) est arithmétique de raison 2 et de premier terme \(w_0=-9\). <i>(0,5 pt)</i></li>
<li>La somme \(w_0+\dots+w_{n-1}=(u_1-u_0)+(u_2-u_1)+\dots+(u_n-u_{n-1})\) se simplifie « en cascade » et vaut \(u_n-u_0\).
C'est la somme de \(n\) termes consécutifs d'une suite arithmétique :
\[w_0+\dots+w_{n-1}=n\times\frac{w_0+w_{n-1}}{2}=n\times\frac{-9+2n-11}{2}=n(n-10).\]
Donc \(u_n=30+n^2-10n\), formule également vraie pour \(n=0\). Vérification : \(u_3=9-30+30=9\) ✓. <i>(1,25 pt)</i></li>
<li>\(u_{n+1}-u_n=2n-9\) : négatif pour \(n\leqslant 4\), positif pour \(n\geqslant 5\). La suite est décroissante de \(u_0\) à \(u_5\), puis croissante à partir de \(u_5\).
Le plus petit terme est \(u_5=25-50+30=5\) (forme canonique : \(u_n=(n-5)^2+5\geqslant 5\)). <i>(1 pt)</i></li>
<li>\(u_n\gt 100\iff (n-5)^2+5\gt 100\iff (n-5)^2\gt 95\).
Pour \(n\leqslant 5\), \((n-5)^2\leqslant 25\) : ces entiers ne conviennent pas. Pour \(n\geqslant 5\), comme \(9^2=81\lt 95\lt 100=10^2\), il faut \(n-5\geqslant 10\), soit \(n\geqslant 15\).
Vérification : \(u_{14}=86\leqslant 100\) et \(u_{15}=105\gt 100\). Le plus petit entier est \(n=15\). <i>(0,75 pt)</i></li>
<li>a) \(u_n=n(n-10)+30\). Si \(n\) est pair, \(n(n-10)\) est pair, donc \(u_n\) est pair. Si \(n\) est impair, \(n-10\) est impair, le produit \(n(n-10)\) est impair et \(u_n\) est impair. <i>(0,5 pt)</i><br>
b) \(u_n=2026\iff (n-5)^2=2021\). Or \(44^2=1936\) et \(45^2=2025\) : 2021 n'est pas un carré parfait. Aucun entier ne convient. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Al-Kashi, médiane et cercle de diamètre [BC]", points: 5, chapitres: [8, 7, 9],
      enonce: R`<p>\(ABC\) est un triangle tel que \(AB=5\), \(AC=8\) et \(\widehat{BAC}=\dfrac{\pi}{3}\). On note \(I\) le milieu de \([BC]\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Calculer la longueur \(BC\).</li>
<li>Calculer \(\cos\widehat{ABC}\).</li>
<li>Exprimer \(\overrightarrow{AI}\) en fonction de \(\overrightarrow{AB}\) et \(\overrightarrow{AC}\), puis calculer la longueur \(AI\).</li>
<li>Calculer l'aire du triangle \(ABC\), puis la longueur de la hauteur issue de \(A\).</li>
<li>On munit le plan d'un repère orthonormé d'origine \(A\) tel que \(B(5;0)\) et \(C(4;4\sqrt3)\).<br>
a) Vérifier que ces coordonnées sont cohérentes avec l'énoncé.<br>
b) Déterminer une équation de l'ensemble \(\mathcal E\) des points \(M\) tels que \(\overrightarrow{MB}\cdot\overrightarrow{MC}=0\). Le point \(A\) appartient-il à \(\mathcal E\) ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\frac{\pi}3=5\times 8\times\frac12=20\). <i>(0,5 pt)</i></li>
<li>Al-Kashi : \(BC^2=AB^2+AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}=25+64-40=49\), donc \(BC=7\). <i>(0,75 pt)</i></li>
<li>Al-Kashi en \(B\) : \(AC^2=BA^2+BC^2-2\,BA\times BC\cos\widehat{ABC}\), soit \(64=25+49-70\cos\widehat{ABC}\), d'où \(\cos\widehat{ABC}=\dfrac{10}{70}=\dfrac17\). <i>(0,75 pt)</i></li>
<li>\(I\) milieu de \([BC]\) : \(\overrightarrow{AI}=\dfrac12\left(\overrightarrow{AB}+\overrightarrow{AC}\right)\). Donc
\[AI^2=\frac14\left(AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AC^2\right)=\frac{25+40+64}{4}=\frac{129}{4},\quad AI=\frac{\sqrt{129}}{2}.\]
<i>(1 pt)</i></li>
<li>\(\mathcal A=\dfrac12\times AB\times AC\times\sin\widehat{BAC}=\dfrac12\times 5\times 8\times\dfrac{\sqrt3}{2}=10\sqrt3\).
Si \(h\) est la hauteur issue de \(A\) : \(\mathcal A=\dfrac12\times BC\times h\), donc \(h=\dfrac{2\times 10\sqrt3}{7}=\dfrac{20\sqrt3}{7}\). <i>(1 pt)</i></li>
<li>a) \(AB=5\) ✓ ; \(AC=\sqrt{16+48}=8\) ✓ ; \(\overrightarrow{AB}\cdot\overrightarrow{AC}=5\times 4+0=20\) ✓ (donc l'angle vaut bien \(\frac{\pi}{3}\)) ; et \(BC=\sqrt{1+48}=7\) ✓.<br>
b) \(\overrightarrow{MB}\cdot\overrightarrow{MC}=0\) caractérise le cercle de diamètre \([BC]\) : centre \(I\left(\frac92;2\sqrt3\right)\), rayon \(\frac72\).
\[\mathcal E : \left(x-\tfrac92\right)^2+\left(y-2\sqrt3\right)^2=\tfrac{49}{4}.\]
\(A\in\mathcal E\iff AI=\frac72\). Or \(AI^2=\frac{129}{4}\neq\frac{49}{4}\) : \(A\notin\mathcal E\) (ce qui est cohérent : l'angle en \(A\) n'est pas droit). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°9", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`\(\dfrac34-\dfrac23=\)`,
      choix: [R`\(\dfrac1{12}\)`, R`\(\dfrac17\)`, R`\(\dfrac{1}{1}\)`, R`\(\dfrac{5}{12}\)`], bonne: 0,
      explication: R`\(\frac34-\frac23=\frac{9}{12}-\frac{8}{12}=\frac1{12}\).` },
    { q: R`\(\left(\sqrt3+1\right)\left(\sqrt3-1\right)=\)`,
      choix: [R`\(4\)`, R`\(2\)`, R`\(3\)`, R`\(2\sqrt3\)`], bonne: 1,
      explication: R`Identité \((a+b)(a-b)=a^2-b^2\) : \(3-1=2\).` },
    { q: R`Pour tout réel \(x\), le trinôme \(-x^2+4x-4\) est :`,
      choix: [R`strictement positif`, R`strictement négatif`, R`négatif ou nul`, R`de signe variable`], bonne: 2,
      explication: R`\(-x^2+4x-4=-(x^2-4x+4)=-(x-2)^2\leqslant 0\), et il s'annule en \(x=2\).` },
    { q: R`\(f(x)=\dfrac1x\) sur \(]0;+\infty[\). Alors \(f'(2)=\)`,
      choix: [R`\(\dfrac12\)`, R`\(-\dfrac12\)`, R`\(\dfrac14\)`, R`\(-\dfrac14\)`], bonne: 3,
      explication: R`\(f'(x)=-\dfrac1{x^2}\), donc \(f'(2)=-\dfrac14\).` },
    { q: R`La fonction \(x\mapsto\mathrm{e}^{-x}\) est, sur \(\mathbb R\) :`,
      choix: [R`strictement décroissante et à valeurs strictement positives`, R`strictement croissante`, R`négative sur \(]0;+\infty[\)`, R`ni croissante ni décroissante`], bonne: 0,
      explication: R`Sa dérivée est \(-\mathrm{e}^{-x}\lt 0\) : elle est strictement décroissante. Et une exponentielle est toujours strictement positive.` },
    { q: R`\(\sin^2\left(\dfrac{\pi}{3}\right)=\)`,
      choix: [R`\(\dfrac{\sqrt3}{2}\)`, R`\(\dfrac14\)`, R`\(\dfrac34\)`, R`\(\dfrac{\sqrt3}{4}\)`], bonne: 2,
      explication: R`\(\sin\frac{\pi}{3}=\frac{\sqrt3}{2}\), dont le carré vaut \(\frac34\).` },
    { q: R`Le point du cercle trigonométrique associé au réel \(\pi\) a pour coordonnées :`,
      choix: [R`\((1;0)\)`, R`\((-1;0)\)`, R`\((0;-1)\)`, R`\((0;1)\)`], bonne: 1,
      explication: R`\(\cos\pi=-1\) et \(\sin\pi=0\) : c'est le point \((-1;0)\).` },
    { q: R`Un vecteur directeur de la droite d'équation \(2x+3y-1=0\) est :`,
      choix: [R`\(\vec u(2;3)\)`, R`\(\vec u(3;2)\)`, R`\(\vec u(2;-3)\)`, R`\(\vec u(-3;2)\)`], bonne: 3,
      explication: R`La droite \(ax+by+c=0\) a pour vecteur directeur \(\vec u(-b;a)\), ici \((-3;2)\). (\((2;3)\) est un vecteur normal.)` },
    { q: R`L'ensemble des points \(M(x;y)\) tels que \(x^2+y^2+2y=3\) est le cercle :`,
      choix: [R`de centre \((0;-1)\) et de rayon \(2\)`, R`de centre \((0;1)\) et de rayon \(2\)`, R`de centre \((0;-1)\) et de rayon \(4\)`, R`de centre \((0;0)\) et de rayon \(\sqrt3\)`], bonne: 0,
      explication: R`\(y^2+2y=(y+1)^2-1\), donc l'équation s'écrit \(x^2+(y+1)^2=4\).` },
    { q: R`La suite définie par \(u_n=3\times(-2)^n\) est :`,
      choix: [R`croissante`, R`décroissante`, R`ni croissante ni décroissante`, R`constante`], bonne: 2,
      explication: R`\(u_0=3\), \(u_1=-6\), \(u_2=12\) : les termes changent de signe à chaque rang, la suite n'est pas monotone.` },
    { q: R`\(P(A)=0{,}3\) et \(P(A\cap B)=0{,}12\). Alors \(P_A(B)=\)`,
      choix: [R`\(0{,}036\)`, R`\(0{,}18\)`, R`\(0{,}42\)`, R`\(0{,}4\)`], bonne: 3,
      explication: R`\(P_A(B)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}12}{0{,}3}=0{,}4\).` },
    { q: R`Après <code>L = [5, 8, 2]</code> puis <code>L.append(L[0] * 2)</code>, que vaut <code>len(L)</code> ?`,
      choix: [R`<code>3</code>`, R`<code>4</code>`, R`<code>10</code>`, R`<code>6</code>`], bonne: 1,
      explication: R`<code>append</code> ajoute un seul élément (ici 10) en fin de liste : <code>[5, 8, 2, 10]</code> a 4 éléments.` }
  ],
  exercices: [
    { titre: "Exercice 1 — Refroidissement d'un café : fonction et suite géométrique", points: 5, chapitres: [6, 3, 4, 1],
      enonce: R`<p>On sert un café à 90 °C dans une pièce à 20 °C. Sa température (en °C), \(t\) minutes après le service, est modélisée par \(T(t)=20+70\,\mathrm{e}^{-0{,}1t}\) pour \(t\geqslant 0\).</p>
<p>On donne : \(\mathrm{e}^{-0{,}6}\approx 0{,}549\), \(\mathrm{e}^{-0{,}7}\approx 0{,}497\), \(\mathrm{e}^{-1}\approx 0{,}368\). On admet que pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant 1+x\).</p>
<ol>
<li>Vérifier que \(T(0)=90\), calculer \(T'(t)\) et en déduire le sens de variation de \(T\).</li>
<li>Déterminer une équation de la tangente \(\Delta\) à la courbe de \(T\) au point d'abscisse 0. Démontrer que la courbe de \(T\) est au-dessus de \(\Delta\) sur \([0;+\infty[\). Au bout de combien de temps \(\Delta\) atteint-elle la valeur 20 ?</li>
<li>Pour tout entier \(n\), on pose \(u_n=T(n)\) (température à la minute \(n\)) et \(v_n=u_n-20\). Montrer que \((v_n)\) est géométrique de raison \(\mathrm{e}^{-0{,}1}\), et que \(u_{n+1}=20+\mathrm{e}^{-0{,}1}(u_n-20)\).</li>
<li>On considère la fonction Python ci-dessous.
<pre><code>from math import exp

def attente():
    n = 0
    u = 90
    while u &gt; 55:
        u = 20 + (u - 20)*exp(-0.1)
        n = n + 1
    return n</code></pre>
Expliquer ce que renvoie cette fonction dans le contexte, puis déterminer la valeur renvoyée à l'aide des données.</li>
<li>Calculer le taux de variation moyen de \(T\) entre 0 et 10 minutes, puis \(T'(10)\) (valeurs approchées). Interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>\(T(0)=20+70\times 1=90\). \(T'(t)=70\times(-0{,}1)\,\mathrm{e}^{-0{,}1t}=-7\,\mathrm{e}^{-0{,}1t}\lt 0\) : la température est strictement décroissante. <i>(0,75 pt)</i></li>
<li>\(T'(0)=-7\), donc \(\Delta : y=-7t+90\).
Avec \(x=-0{,}1t\) : \(\mathrm{e}^{-0{,}1t}\geqslant 1-0{,}1t\), puis en multipliant par \(70\gt 0\) et en ajoutant 20 : \(T(t)\geqslant 20+70-7t=90-7t\). La courbe est au-dessus de sa tangente \(\Delta\).
\(-7t+90=20\iff t=10\) : la tangente atteint 20 °C au bout de 10 minutes (alors que le café, lui, n'atteint jamais 20 °C puisque \(70\,\mathrm{e}^{-0{,}1t}\gt 0\)). <i>(1,25 pt)</i></li>
<li>\(v_n=70\,\mathrm{e}^{-0{,}1n}\), donc \(v_{n+1}=70\,\mathrm{e}^{-0{,}1n-0{,}1}=\mathrm{e}^{-0{,}1}\times 70\,\mathrm{e}^{-0{,}1n}=\mathrm{e}^{-0{,}1}\,v_n\) : \((v_n)\) est géométrique de raison \(\mathrm{e}^{-0{,}1}\) et de premier terme \(v_0=70\).
Alors \(u_{n+1}-20=\mathrm{e}^{-0{,}1}(u_n-20)\), soit \(u_{n+1}=20+\mathrm{e}^{-0{,}1}(u_n-20)\). <i>(1 pt)</i></li>
<li>La boucle calcule successivement \(u_1,u_2,\dots\) (relation de la question 3) tant que la température dépasse 55 °C : la fonction renvoie le nombre de minutes entières à attendre pour que le café descende à 55 °C ou moins.
\(u_n\leqslant 55\iff 70\,\mathrm{e}^{-0{,}1n}\leqslant 35\iff\mathrm{e}^{-0{,}1n}\leqslant 0{,}5\).
\(u_6=20+70\,\mathrm{e}^{-0{,}6}\approx 20+38{,}4=58{,}4\gt 55\) et \(u_7=20+70\,\mathrm{e}^{-0{,}7}\approx 20+34{,}8=54{,}8\leqslant 55\).
La suite étant décroissante, <code>attente()</code> renvoie <b>7</b>. <i>(1,25 pt)</i></li>
<li>\[\frac{T(10)-T(0)}{10}=\frac{70\,\mathrm{e}^{-1}-70}{10}=7(\mathrm{e}^{-1}-1)\approx 7\times(-0{,}632)\approx -4{,}42.\]
Entre 0 et 10 min, la température baisse en moyenne d'environ 4,4 °C par minute.
\(T'(10)=-7\,\mathrm{e}^{-1}\approx -2{,}58\) : à la 10<sup>e</sup> minute, le refroidissement instantané n'est plus que d'environ 2,6 °C par minute, contre 7 °C par minute au départ. Le café refroidit de moins en moins vite. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 2 — Distance minimale entre un point et une parabole", points: 4, chapitres: [5, 4, 9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère la parabole \(\mathcal P\) d'équation \(y=x^2\) et le point \(A(0;2)\). Pour tout réel \(x\), on note \(M\) le point de \(\mathcal P\) d'abscisse \(x\).</p>
<ol>
<li>Montrer que \(AM^2=x^4-3x^2+4\).</li>
<li>Étudier les variations de la fonction \(g\) définie sur \(\mathbb R\) par \(g(x)=x^4-3x^2+4\).</li>
<li>En déduire la distance minimale entre \(A\) et un point de \(\mathcal P\), ainsi que le(s) point(s) où elle est atteinte.</li>
<li>On note \(M_0\) le point de \(\mathcal P\) d'abscisse \(\dfrac{\sqrt6}{2}\). Démontrer que la tangente à \(\mathcal P\) en \(M_0\) est perpendiculaire à la droite \((AM_0)\).</li>
<li>Déterminer une équation de cette tangente.</li>
</ol>`,
      correction: R`<ol>
<li>\(M(x;x^2)\), donc \(AM^2=(x-0)^2+(x^2-2)^2=x^2+x^4-4x^2+4=x^4-3x^2+4\). <i>(0,5 pt)</i></li>
<li>\(g'(x)=4x^3-6x=2x(2x^2-3)=2x\left(\sqrt2x-\sqrt3\right)\left(\sqrt2x+\sqrt3\right)\), qui s'annule en \(0\) et \(\pm\sqrt{\frac32}=\pm\frac{\sqrt6}{2}\). Le signe s'obtient avec un tableau de signes (\(2x\) et le trinôme \(2x^2-3\), positif à l'extérieur de ses racines).
\(g\left(\pm\frac{\sqrt6}2\right)=\frac{9}{4}-3\times\frac32+4=\frac94-\frac{18}4+\frac{16}4=\frac74\) et \(g(0)=4\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-\frac{\sqrt6}2\)</td><td></td><td>0</td><td></td><td>\(\frac{\sqrt6}2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(g'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(g\)</td><td></td><td>↘</td><td>\(\frac74\)</td><td>↗</td><td>4</td><td>↘</td><td>\(\frac74\)</td><td>↗</td><td></td></tr></table>
<i>(1,5 pt)</i></li>
<li>Le minimum de \(g\) est \(\frac74\) (atteint en \(\pm\frac{\sqrt6}2\)) ; comme \(AM=\sqrt{g(x)}\) et que la racine carrée est croissante, la distance minimale est \(\sqrt{\frac74}=\dfrac{\sqrt7}{2}\), atteinte aux points \(\left(\frac{\sqrt6}{2};\frac32\right)\) et \(\left(-\frac{\sqrt6}{2};\frac32\right)\). <i>(0,5 pt)</i></li>
<li>Le coefficient directeur de la tangente en \(M_0\) est \(2\times\frac{\sqrt6}{2}=\sqrt6\) : \(\vec u(1;\sqrt6)\) est un vecteur directeur. \(\overrightarrow{AM_0}\left(\frac{\sqrt6}2;\frac32-2\right)=\left(\frac{\sqrt6}2;-\frac12\right)\).
\[\vec u\cdot\overrightarrow{AM_0}=\frac{\sqrt6}{2}-\frac{\sqrt6}{2}=0.\]
La tangente est perpendiculaire à \((AM_0)\). <i>(1 pt)</i></li>
<li>\(y=\sqrt6\left(x-\frac{\sqrt6}2\right)+\frac32=\sqrt6\,x-3+\frac32=\sqrt6\,x-\dfrac32\). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">Pour minimiser une distance, on minimise son carré : cela évite les racines carrées et donne le même point.</div>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 3 — Trois machines : origine d'une pièce défectueuse", points: 5, chapitres: [10, 11, 1],
      enonce: R`<p>Une usine fabrique des pièces sur trois machines : \(M_1\) produit 50 % des pièces, \(M_2\) 30 % et \(M_3\) 20 %. Les taux de pièces défectueuses sont respectivement 2 %, 3 % et 5 %. On choisit une pièce au hasard et on note \(D\) : « la pièce est défectueuse », \(M_i\) : « la pièce vient de la machine \(M_i\) ».</p>
<ol>
<li>Construire un arbre pondéré.</li>
<li>Calculer \(P(D)\).</li>
<li>Une pièce est défectueuse. Calculer la probabilité qu'elle provienne de chacune des machines (fractions). Quel constat surprenant peut-on faire ?</li>
<li>On considère le programme Python suivant.
<pre><code>parts = [0.5, 0.3, 0.2]
taux = [0.02, 0.03, 0.05]

def proba_defaut():
    p = 0
    for i in range(3):
        p = p + ..........
    return p

def origine():
    pD = proba_defaut()
    return [parts[i]*taux[i]/pD for i in range(3)]</code></pre>
Compléter la ligne manquante. Que renvoie <code>origine()</code> ?</li>
<li>Une pièce coûte 4 € à produire. Une pièce conforme est vendue 10 € ; une pièce défectueuse est détruite. On note \(X\) le bénéfice algébrique réalisé sur une pièce. Donner la loi de \(X\) et calculer \(E(X)\).</li>
<li>On règle la machine \(M_3\) ; son taux de défaut devient \(t\). Exprimer \(P(D)\) en fonction de \(t\). Quelle valeur maximale de \(t\) permet d'obtenir \(P(D)\leqslant 0{,}025\) ?</li>
<li>Avec les réglages initiaux, on prélève deux pièces de façon indépendante. Calculer la probabilité qu'elles soient toutes les deux conformes.</li>
</ol>`,
      correction: R`<ol>
<li>\(M_1\) (0,5), \(M_2\) (0,3), \(M_3\) (0,2), puis \(D\) avec les probabilités 0,02 ; 0,03 ; 0,05 (et \(\overline D\) avec 0,98 ; 0,97 ; 0,95). <i>(0,5 pt)</i></li>
<li>Probabilités totales (les \(M_i\) forment une partition) :
\[P(D)=0{,}5\times 0{,}02+0{,}3\times 0{,}03+0{,}2\times 0{,}05=0{,}01+0{,}009+0{,}01=0{,}029.\]
<i>(0,75 pt)</i></li>
<li>\(P_D(M_1)=\dfrac{0{,}01}{0{,}029}=\dfrac{10}{29}\), \(P_D(M_2)=\dfrac{0{,}009}{0{,}029}=\dfrac{9}{29}\), \(P_D(M_3)=\dfrac{0{,}01}{0{,}029}=\dfrac{10}{29}\) (somme : 1).
Constat : une pièce défectueuse a autant de chances de venir de \(M_1\), la machine la plus fiable, que de \(M_3\), la moins fiable : \(M_1\) produit beaucoup plus de pièces, ce qui compense son faible taux de défaut. <i>(1 pt)</i></li>
<li><code>p = p + parts[i]*taux[i]</code> (formule des probabilités totales).
<code>origine()</code> renvoie la liste des \(P_D(M_i)\), c'est-à-dire des valeurs approchées de \(\left[\frac{10}{29};\frac{9}{29};\frac{10}{29}\right]\approx[0{,}345;0{,}310;0{,}345]\). <i>(0,75 pt)</i></li>
<li>\(X=10-4=6\) si la pièce est conforme, \(X=-4\) sinon : \(P(X=6)=0{,}971\), \(P(X=-4)=0{,}029\).
\[E(X)=6\times 0{,}971-4\times 0{,}029=5{,}826-0{,}116=5{,}71.\]
Le bénéfice moyen est de 5,71 € par pièce. <i>(0,75 pt)</i></li>
<li>\(P(D)=0{,}01+0{,}009+0{,}2\,t=0{,}019+0{,}2\,t\). \(0{,}019+0{,}2\,t\leqslant 0{,}025\iff t\leqslant\dfrac{0{,}006}{0{,}2}=0{,}03\). Le taux de défaut de \(M_3\) doit descendre à 3 % au plus. <i>(0,5 pt)</i></li>
<li>Par indépendance : \(0{,}971^2=0{,}942\,841\approx 0{,}943\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Approfondi", titre: "Sujet approfondi n°10", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`L'image de 2 par la fonction \(f(x)=x^2-3x+1\) est :`,
      choix: [R`\(-1\)`, R`\(1\)`, R`\(3\)`, R`\(-3\)`], bonne: 0,
      explication: R`\(f(2)=4-6+1=-1\).` },
    { q: R`L'ensemble des solutions de \((x-1)(x+4)=0\) est :`,
      choix: [R`\(\{-1;4\}\)`, R`\(\{1;-4\}\)`, R`\(\{1;4\}\)`, R`\(\{-4\}\)`], bonne: 1,
      explication: R`Un produit est nul si et seulement si l'un de ses facteurs est nul : \(x=1\) ou \(x=-4\).` },
    { q: R`Le minimum sur \(\mathbb R\) de \(f(x)=x^2-4x\) est :`,
      choix: [R`\(0\)`, R`\(2\)`, R`\(-4\)`, R`\(-2\)`], bonne: 2,
      explication: R`\(x^2-4x=(x-2)^2-4\geqslant -4\), avec égalité pour \(x=2\).` },
    { q: R`La dérivée de \(f(x)=5x^4+\dfrac2x\) sur \(]0;+\infty[\) est :`,
      choix: [R`\(20x^3+\dfrac{2}{x^2}\)`, R`\(5x^3-\dfrac{2}{x^2}\)`, R`\(20x^3+2\)`, R`\(20x^3-\dfrac{2}{x^2}\)`], bonne: 3,
      explication: R`\((x^4)'=4x^3\) et \(\left(\frac1x\right)'=-\frac{1}{x^2}\), donc \(f'(x)=20x^3-\dfrac{2}{x^2}\).` },
    { q: R`Les solutions de l'équation \(\mathrm{e}^{x^2}=\mathrm{e}^{4}\) sont :`,
      choix: [R`\(2\) seulement`, R`\(-2\) et \(2\)`, R`\(4\)`, R`\(16\)`], bonne: 1,
      explication: R`\(\mathrm{e}^a=\mathrm{e}^b\iff a=b\) : \(x^2=4\iff x=-2\) ou \(x=2\).` },
    { q: R`\(\cos\left(-\dfrac{\pi}{3}\right)=\)`,
      choix: [R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`, R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`], bonne: 2,
      explication: R`Le cosinus est pair : \(\cos\left(-\frac{\pi}{3}\right)=\cos\frac{\pi}{3}=\frac12\).` },
    { q: R`Pour tout réel \(x\), \(\sin(x+\pi)=\)`,
      choix: [R`\(-\sin x\)`, R`\(\sin x\)`, R`\(\cos x\)`, R`\(-\cos x\)`], bonne: 0,
      explication: R`Les points associés à \(x\) et \(x+\pi\) sont symétriques par rapport à l'origine : cosinus et sinus sont opposés.` },
    { q: R`Dans un repère orthonormé, \(A(0;0)\), \(B(2;1)\) et \(C(-1;3)\). Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`,
      choix: [R`\(5\)`, R`\(-5\)`, R`\(0\)`, R`\(1\)`], bonne: 3,
      explication: R`\(\overrightarrow{AB}(2;1)\), \(\overrightarrow{AC}(-1;3)\) : \(2\times(-1)+1\times 3=1\).` },
    { q: R`\(\vec u\cdot\vec v=0\), \(\|\vec u\|=3\) et \(\|\vec v\|=4\). Alors \(\|\vec u+\vec v\|=\)`,
      choix: [R`\(7\)`, R`\(5\)`, R`\(25\)`, R`\(1\)`], bonne: 1,
      explication: R`\(\|\vec u+\vec v\|^2=9+2\times 0+16=25\), donc \(\|\vec u+\vec v\|=5\) (c'est Pythagore).` },
    { q: R`\((u_n)\) est arithmétique avec \(u_3=7\) et \(u_7=19\). Sa raison est :`,
      choix: [R`\(4\)`, R`\(12\)`, R`\(3\)`, R`\(\dfrac{19}{7}\)`], bonne: 2,
      explication: R`\(u_7=u_3+4r\), donc \(4r=12\) et \(r=3\).` },
    { q: R`Un jeu fait gagner 10 € avec une probabilité de 0,1 et perdre 2 € sinon. L'espérance du gain est :`,
      choix: [R`\(-0{,}8\) €`, R`\(8\) €`, R`\(0{,}8\) €`, R`\(-1{,}8\) €`], bonne: 0,
      explication: R`\(E=10\times 0{,}1+(-2)\times 0{,}9=1-1{,}8=-0{,}8\).` },
    { q: R`Que contient <code>[k for k in range(1, 20) if 20 % k == 0]</code> ?`,
      choix: [R`<code>[1, 2, 4, 5, 10, 20]</code>`, R`<code>[2, 4, 5, 10]</code>`, R`<code>[0, 20]</code>`, R`<code>[1, 2, 4, 5, 10]</code>`], bonne: 3,
      explication: R`Ce sont les diviseurs de 20 compris entre 1 et 19 (20 est exclu par <code>range(1, 20)</code>).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Vrai ou faux ? (logique, second degré, suites, Python)", points: 4, chapitres: [1, 2, 3],
      enonce: R`<p>Pour chacune des affirmations suivantes, indiquer si elle est vraie ou fausse, en justifiant. Une réponse non justifiée ne rapporte aucun point.</p>
<ol>
<li><b>Affirmation 1.</b> « Pour tout réel \(x\), si \(x^2\gt 4\), alors \(x\gt 2\). »</li>
<li><b>Affirmation 2.</b> « Soit \(a\neq 0\), \(b\), \(c\) des réels. La condition \(ac\lt 0\) est suffisante, mais pas nécessaire, pour que l'équation \(ax^2+bx+c=0\) admette deux solutions distinctes. »</li>
<li><b>Affirmation 3.</b> « Toute suite géométrique de raison \(q\gt 1\) est croissante. »</li>
<li><b>Affirmation 4.</b> « La fonction ci-dessous renvoie 35 lorsqu'on l'appelle avec <code>mystere(6)</code>. »
<pre><code>def mystere(n):
    L = []
    for k in range(n):
        if k % 2 == 1:
            L.append(k**2)
    return sum(L)</code></pre></li>
</ol>`,
      correction: R`<ol>
<li><b>Faux.</b> Contre-exemple : \(x=-3\) vérifie \(x^2=9\gt 4\) mais pas \(x\gt 2\). (En fait \(x^2\gt 4\iff x\lt -2\) ou \(x\gt 2\).) <i>(1 pt)</i></li>
<li><b>Vrai.</b> Suffisante : si \(ac\lt 0\), alors \(-4ac\gt 0\) et \(\Delta=b^2-4ac\gt 0\) (car \(b^2\geqslant 0\)) : deux solutions distinctes.
Pas nécessaire : \(x^2-3x+2=0\) a deux solutions distinctes (1 et 2, \(\Delta=1\)) alors que \(ac=2\gt 0\). <i>(1 pt)</i></li>
<li><b>Faux.</b> Contre-exemple : \(u_0=-1\) et \(q=2\) donnent \(u_n=-2^n\) : \(u_0=-1\), \(u_1=-2\), \(u_2=-4\)… la suite est décroissante. (Elle est croissante si \(q\gt 1\) et \(u_0\gt 0\).) <i>(1 pt)</i></li>
<li><b>Vrai.</b> \(k\) parcourt \(0,1,\dots,5\) ; on garde les \(k\) impairs (reste 1 dans la division par 2) : 1, 3, 5. La liste vaut <code>[1, 9, 25]</code> et sa somme \(1+9+25=35\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },
    { titre: "Exercice 2 — Polynôme de degré 3 : racine double et tangente qui traverse", points: 5, chapitres: [4, 5, 2],
      enonce: R`<p>On considère la fonction \(f\) définie sur \([0;9]\) par \(f(x)=-x^3+12x^2-36x+32\), de courbe \(\mathcal C\).</p>
<ol>
<li>Calculer \(f'(x)\) et la factoriser.</li>
<li>Dresser le tableau de variations de \(f\) sur \([0;9]\).</li>
<li>Vérifier que \(f(x)=(8-x)(x-2)^2\) et en déduire le tableau de signes de \(f\) sur \([0;9]\).</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal C\) au point d'abscisse 4.</li>
<li>Montrer que pour tout \(x\), \(f(x)-(12x-32)=-(x-4)^3\). En déduire la position relative de \(\mathcal C\) et \(T\). Que remarque-t-on ?</li>
<li>Quel est le maximum de \(f\) sur \([0;9]\) ? En quelle(s) valeur(s) est-il atteint ?</li>
</ol>`,
      correction: R`<ol>
<li>\(f'(x)=-3x^2+24x-36=-3(x^2-8x+12)\). Le trinôme \(x^2-8x+12\) a pour discriminant \(64-48=16\), racines \(\frac{8-4}{2}=2\) et \(\frac{8+4}2=6\) : \(f'(x)=-3(x-2)(x-6)\). <i>(0,75 pt)</i></li>
<li>\(f'(x)\) est du signe de \(-3\) à l'extérieur des racines (négatif) et positif entre 2 et 6.
\(f(0)=32\), \(f(2)=-8+48-72+32=0\), \(f(6)=-216+432-216+32=32\), \(f(9)=-729+972-324+32=-49\).
<table class="tv"><tr><td>\(x\)</td><td>0</td><td></td><td>2</td><td></td><td>6</td><td></td><td>9</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(f\)</td><td>32</td><td>↘</td><td>0</td><td>↗</td><td>32</td><td>↘</td><td>\(-49\)</td></tr></table>
<i>(1,25 pt)</i></li>
<li>\((8-x)(x-2)^2=(8-x)(x^2-4x+4)=8x^2-32x+32-x^3+4x^2-4x=-x^3+12x^2-36x+32\) ✓.
\((x-2)^2\geqslant 0\) (nul en 2) et \(8-x\) est positif sur \([0;8]\), négatif sur \(]8;9]\).
\(f(x)\geqslant 0\) sur \([0;8]\) (nul en 2 et en 8) et \(f(x)\lt 0\) sur \(]8;9]\). <i>(1 pt)</i></li>
<li>\(f(4)=(8-4)(4-2)^2=16\) et \(f'(4)=-3\times 2\times(-2)=12\) : \(T : y=12(x-4)+16=12x-32\). <i>(0,5 pt)</i></li>
<li>\(f(x)-(12x-32)=-x^3+12x^2-48x+64\), et \(-(x-4)^3=-(x^3-12x^2+48x-64)=-x^3+12x^2-48x+64\) ✓.
Si \(x\lt 4\), \((x-4)^3\lt 0\) donc \(f(x)-(12x-32)\gt 0\) : \(\mathcal C\) est au-dessus de \(T\). Si \(x\gt 4\) : \(\mathcal C\) est en dessous de \(T\).
On remarque que la courbe <b>traverse</b> sa tangente au point d'abscisse 4 (on parle de point d'inflexion). <i>(1 pt)</i></li>
<li>D'après le tableau, le maximum de \(f\) sur \([0;9]\) est \(32\), atteint en \(x=0\) et en \(x=6\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },
    { titre: "Exercice 3 — Produit scalaire dans un hexagone régulier", points: 5, chapitres: [8, 7, 9],
      enonce: R`<p>\(ABCDEF\) est un hexagone régulier de centre \(O\) et de côté 2 (les sommets sont nommés dans le sens direct). On rappelle que les triangles \(OAB\), \(OBC\), …, \(OFA\) sont équilatéraux, et que chaque angle intérieur de l'hexagone mesure \(\dfrac{2\pi}{3}\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AF}\).</li>
<li>Calculer la longueur \(AC\), puis \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) (on admet que \(\widehat{BAC}=\frac{\pi}{6}\)).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AD}\), en utilisant le projeté orthogonal de \(B\) sur \((AD)\).</li>
<li>On se place dans le repère orthonormé de centre \(O\) dans lequel \(A(2;0)\). Justifier que le sommet \(B\) a pour coordonnées \(\left(2\cos\frac{\pi}{3};2\sin\frac{\pi}{3}\right)\), puis donner les coordonnées exactes de tous les sommets. Retrouver le résultat de la question 2.</li>
<li>Démontrer que les droites \((AC)\) et \((CD)\) sont perpendiculaires. Interpréter à l'aide d'un cercle.</li>
<li>On note \(M\) le milieu de \([CD]\). Calculer \(AM\), puis \(\cos\widehat{BAM}\) (valeur exacte).</li>
</ol>`,
      correction: R`<ol>
<li>\(\widehat{FAB}=\frac{2\pi}{3}\), donc \(\overrightarrow{AB}\cdot\overrightarrow{AF}=2\times 2\times\cos\frac{2\pi}{3}=4\times\left(-\frac12\right)=-2\). <i>(0,5 pt)</i></li>
<li>Al-Kashi dans \(ABC\) (\(AB=BC=2\), \(\widehat{ABC}=\frac{2\pi}{3}\)) : \(AC^2=4+4-2\times 2\times 2\times\left(-\frac12\right)=12\), donc \(AC=2\sqrt3\).
\(\overrightarrow{AB}\cdot\overrightarrow{AC}=2\times 2\sqrt3\times\cos\frac{\pi}{6}=4\sqrt3\times\frac{\sqrt3}{2}=6\). <i>(1 pt)</i></li>
<li>\(AD=4\) (diamètre du cercle circonscrit, de rayon \(OA=2\)). Dans le triangle équilatéral \(OAB\), le projeté orthogonal \(H\) de \(B\) sur \((AD)\) est le milieu de \([OA]\) : \(AH=1\), et \(H\) est sur la demi-droite \([AD)\).
\(\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AH}\cdot\overrightarrow{AD}=AH\times AD=1\times 4=4\). <i>(0,5 pt)</i></li>
<li>\(OB=2\) et \((\overrightarrow{OA},\overrightarrow{OB})=\frac{\pi}{3}\) (triangle \(OAB\) équilatéral), donc \(B\left(2\cos\frac{\pi}{3};2\sin\frac{\pi}{3}\right)=(1;\sqrt3)\). De même, les sommets sont associés aux angles \(k\frac{\pi}{3}\) :
\(A(2;0)\), \(B(1;\sqrt3)\), \(C(-1;\sqrt3)\), \(D(-2;0)\), \(E(-1;-\sqrt3)\), \(F(1;-\sqrt3)\).
\(\overrightarrow{AB}(-1;\sqrt3)\), \(\overrightarrow{AC}(-3;\sqrt3)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=3+3=6\) ✓. <i>(1 pt)</i></li>
<li>\(\overrightarrow{CA}(3;-\sqrt3)\) et \(\overrightarrow{CD}(-1;-\sqrt3)\) : \(\overrightarrow{CA}\cdot\overrightarrow{CD}=-3+3=0\). Les droites \((AC)\) et \((CD)\) sont perpendiculaires.
Le triangle \(ACD\) est rectangle en \(C\) : \(C\) est sur le cercle de diamètre \([AD]\), qui est le cercle circonscrit à l'hexagone. <i>(0,75 pt)</i></li>
<li>\(M\left(\frac{-1-2}{2};\frac{\sqrt3+0}{2}\right)=\left(-\frac32;\frac{\sqrt3}{2}\right)\), \(\overrightarrow{AM}\left(-\frac72;\frac{\sqrt3}2\right)\), donc \(AM=\sqrt{\frac{49}{4}+\frac34}=\sqrt{13}\).
\(\overrightarrow{AB}\cdot\overrightarrow{AM}=\frac72+\frac32=5\), d'où
\[\cos\widehat{BAM}=\frac{\overrightarrow{AB}\cdot\overrightarrow{AM}}{AB\times AM}=\frac{5}{2\sqrt{13}}=\frac{5\sqrt{13}}{26}.\]
<i>(1,25 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

})();
