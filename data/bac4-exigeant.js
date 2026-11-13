// Sujets type bac — niveau Exigeant (10 sujets). Format : voir SCHEMA.md.
(function () {
const R = String.raw;
const BAC = (window.BAC = window.BAC || []);

BAC.push({
 "niveau": "Exigeant",
 "titre": "Sujet exigeant n°1",
 "duree": "2 h",
 "calculatrice": false,
 "chapitres": [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
 ],
 "automatismes": [
  {
   "q": "Pour tout réel \\(x\\), \\((x+1)(x-1)-(x-1)^2=\\)",
   "choix": [
    "\\(-2\\)",
    "\\(2x-2\\)",
    "\\(2x\\)",
    "\\(-2x+2\\)"
   ],
   "bonne": 1,
   "explication": "\\(x^2-1-(x^2-2x+1)=x^2-1-x^2+2x-1=2x-2\\). Attention au signe moins devant la parenthèse."
  },
  {
   "q": "L'équation \\(2x^2+3x+5=0\\) :",
   "choix": [
    "a deux solutions",
    "a une seule solution",
    "n'a aucune solution réelle",
    "a pour solution \\(x=-\\frac32\\)"
   ],
   "bonne": 2,
   "explication": "\\(\\Delta=3^2-4\\times 2\\times 5=9-40=-31\\lt 0\\) : aucune solution réelle."
  },
  {
   "q": "Pour un réel \\(x\\), la condition « \\(x=2\\) » est, pour « \\(x^2=4\\) » :",
   "choix": [
    "nécessaire mais pas suffisante",
    "suffisante mais pas nécessaire",
    "nécessaire et suffisante",
    "ni nécessaire ni suffisante"
   ],
   "bonne": 1,
   "explication": "Si \\(x=2\\) alors \\(x^2=4\\) : c'est suffisant. Mais \\(x=-2\\) vérifie aussi \\(x^2=4\\) : ce n'est pas nécessaire."
  },
  {
   "q": "Pour tout réel \\(x\\), \\(\\cos(\\pi-x)=\\)",
   "choix": [
    "\\(\\cos x\\)",
    "\\(-\\cos x\\)",
    "\\(\\sin x\\)",
    "\\(-\\sin x\\)"
   ],
   "bonne": 1,
   "explication": "Les points associés à \\(x\\) et \\(\\pi-x\\) sont symétriques par rapport à l'axe des ordonnées : même sinus, cosinus opposés."
  },
  {
   "q": "La dérivée de \\(f(x)=(3x-1)\\,\\mathrm{e}^{x}\\) est :",
   "choix": [
    "\\(3\\,\\mathrm{e}^x\\)",
    "\\((3x+2)\\,\\mathrm{e}^x\\)",
    "\\((3x-4)\\,\\mathrm{e}^x\\)",
    "\\(3x\\,\\mathrm{e}^x\\)"
   ],
   "bonne": 1,
   "explication": "\\((uv)'=u'v+uv'\\) : \\(3\\,\\mathrm{e}^x+(3x-1)\\,\\mathrm{e}^x=(3x+2)\\,\\mathrm{e}^x\\)."
  },
  {
   "q": "Une équation du cercle de centre \\(\\Omega(1;-2)\\) et de rayon 3 est :",
   "choix": [
    "\\((x-1)^2+(y+2)^2=3\\)",
    "\\((x+1)^2+(y-2)^2=9\\)",
    "\\((x-1)^2+(y+2)^2=9\\)",
    "\\((x-1)^2+(y-2)^2=9\\)"
   ],
   "bonne": 2,
   "explication": "\\((x-x_\\Omega)^2+(y-y_\\Omega)^2=r^2\\), avec \\(r^2=9\\) et \\(y-(-2)=y+2\\)."
  },
  {
   "q": "Un vecteur directeur de la droite d'équation \\(3x-2y+1=0\\) est :",
   "choix": [
    "\\(\\vec u(3;-2)\\)",
    "\\(\\vec u(2;3)\\)",
    "\\(\\vec u(-3;2)\\)",
    "\\(\\vec u(3;2)\\)"
   ],
   "bonne": 1,
   "explication": "Pour \\(ax+by+c=0\\), le vecteur \\((-b;a)=(2;3)\\) est directeur ; \\((3;-2)\\) est un vecteur <i>normal</i>. Quant à \\((-3;2)\\), il est orthogonal à \\((2;3)\\) : c'est un autre vecteur normal, pas un vecteur directeur."
  },
  {
   "q": "\\(X\\) prend les valeurs \\(-1\\) et \\(3\\) avec la probabilité \\(0{,}5\\) chacune. Alors \\(V(X)=\\)",
   "choix": [
    "\\(1\\)",
    "\\(5\\)",
    "\\(4\\)",
    "\\(2\\)"
   ],
   "bonne": 2,
   "explication": "\\(E(X)=0{,}5\\times(-1)+0{,}5\\times 3=1\\) et \\(E(X^2)=0{,}5\\times 1+0{,}5\\times 9=5\\), donc \\(V(X)=5-1^2=4\\)."
  },
  {
   "q": "La suite définie par \\(u_n=3\\times 0{,}5^{n}\\) est :",
   "choix": [
    "arithmétique de raison \\(0{,}5\\)",
    "géométrique de raison \\(3\\)",
    "géométrique de raison \\(0{,}5\\), décroissante",
    "géométrique de raison \\(0{,}5\\), croissante"
   ],
   "bonne": 2,
   "explication": "\\(u_{n+1}=0{,}5\\,u_n\\) : géométrique de raison \\(0{,}5\\) et de premier terme \\(3\\gt 0\\) ; comme \\(0\\lt q\\lt 1\\), elle est décroissante."
  },
  {
   "q": "Dans un triangle \\(ABC\\), \\(AB=5\\), \\(AC=3\\) et \\(\\widehat{BAC}=60^\\circ\\). Alors \\(BC=\\)",
   "choix": [
    "\\(\\sqrt{19}\\)",
    "\\(7\\)",
    "\\(\\sqrt{34}\\)",
    "\\(4\\)"
   ],
   "bonne": 0,
   "explication": "Al-Kashi : \\(BC^2=5^2+3^2-2\\times 5\\times 3\\times\\cos 60^\\circ=25+9-15=19\\)."
  },
  {
   "q": "\\(f\\) est dérivable sur \\([-2;4]\\), strictement croissante sur \\([-2;1]\\) et strictement décroissante sur \\([1;4]\\). Laquelle de ces affirmations est forcément vraie ?",
   "choix": [
    "\\(f(1)=0\\)",
    "\\(f'(3)\\gt 0\\)",
    "\\(f'(-1)\\lt 0\\)",
    "\\(f'(1)=0\\)"
   ],
   "bonne": 3,
   "explication": "\\(f\\) admet un maximum local en 1, à l'intérieur de l'intervalle : la dérivée s'y annule. On ne sait rien sur la valeur \\(f(1)\\), et \\(f'\\) est positive sur \\([-2;1]\\), négative sur \\([1;4]\\)."
  },
  {
   "q": "\\(P(A\\cap B)=0{,}12\\) et \\(P(B)=0{,}4\\). Alors \\(P_B(A)=\\)",
   "choix": [
    "\\(0{,}048\\)",
    "\\(0{,}3\\)",
    "\\(0{,}52\\)",
    "\\(0{,}28\\)"
   ],
   "bonne": 1,
   "explication": "\\(P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0{,}12}{0{,}4}=0{,}3\\)."
  }
 ],
 "exercices": [
  {
   "titre": "Exercice 1 — Second degré avec paramètre et logique",
   "points": 4,
   "chapitres": [
    2,
    1
   ],
   "enonce": "<p>Pour tout réel \\(m\\), on considère l'équation \\((E_m) : x^2-2mx+m+6=0\\).</p>\n<ol>\n<li>Résoudre \\((E_0)\\) puis \\((E_4)\\).</li>\n<li>Montrer que le discriminant de \\((E_m)\\) est \\(\\Delta_m=4(m-3)(m+2)\\).</li>\n<li>Discuter, selon les valeurs de \\(m\\), le nombre de solutions de \\((E_m)\\). Donner la solution dans les cas où elle est unique.</li>\n<li>On considère la proposition \\(\\mathcal{P}\\) : « Si \\(m\\gt 3\\), alors \\((E_m)\\) admet deux solutions distinctes. »<br>\na) \\(\\mathcal{P}\\) est-elle vraie ?<br>\nb) Énoncer la réciproque de \\(\\mathcal{P}\\). Est-elle vraie ?<br>\nc) Énoncer la contraposée de \\(\\mathcal{P}\\). Est-elle vraie ?<br>\nd) La condition « \\(m\\gt 3\\) » est-elle nécessaire, suffisante pour que \\((E_m)\\) ait deux solutions distinctes ? Donner une condition nécessaire et suffisante.</li>\n</ol>",
   "correction": "<ol>\n<li>\\((E_0) : x^2+6=0\\), or \\(x^2+6\\geqslant 6\\gt 0\\) : aucune solution.<br>\n\\((E_4) : x^2-8x+10=0\\). \\(\\Delta=64-40=24\\gt 0\\), \\(\\sqrt{24}=2\\sqrt6\\) :\n\\[x=\\frac{8\\pm 2\\sqrt6}{2}=4\\pm\\sqrt6.\\]\n<i>(1 pt)</i></li>\n<li>\\(\\Delta_m=(-2m)^2-4\\times 1\\times(m+6)=4m^2-4m-24=4(m^2-m-6)\\). Le trinôme \\(m^2-m-6\\) a pour racines 3 et \\(-2\\) (somme 1, produit \\(-6\\)), donc \\(\\Delta_m=4(m-3)(m+2)\\). <i>(0,75 pt)</i></li>\n<li>\\(\\Delta_m\\) est un trinôme en \\(m\\) de coefficient dominant \\(4\\gt 0\\) :\n<ul>\n<li>si \\(m\\lt -2\\) ou \\(m\\gt 3\\) : \\(\\Delta_m\\gt 0\\), <b>deux solutions</b> ;</li>\n<li>si \\(m=-2\\) ou \\(m=3\\) : \\(\\Delta_m=0\\), <b>une solution</b> \\(x_0=\\dfrac{2m}{2}=m\\). Pour \\(m=3\\) : \\(x^2-6x+9=(x-3)^2\\), solution 3 ; pour \\(m=-2\\) : \\(x^2+4x+4=(x+2)^2\\), solution \\(-2\\) ;</li>\n<li>si \\(-2\\lt m\\lt 3\\) : \\(\\Delta_m\\lt 0\\), <b>aucune solution</b>.</li>\n</ul>\n<i>(1 pt)</i></li>\n<li>a) Si \\(m\\gt 3\\), alors \\(m-3\\gt 0\\) et \\(m+2\\gt 0\\), donc \\(\\Delta_m\\gt 0\\) : \\(\\mathcal{P}\\) est <b>vraie</b>. <i>(0,25 pt)</i><br>\nb) Réciproque : « Si \\((E_m)\\) admet deux solutions distinctes, alors \\(m\\gt 3\\) ». Elle est <b>fausse</b> : contre-exemple \\(m=-3\\), \\(\\Delta_{-3}=4\\times(-6)\\times(-1)=24\\gt 0\\), deux solutions alors que \\(m\\lt 3\\). <i>(0,5 pt)</i><br>\nc) Contraposée : « Si \\((E_m)\\) n'admet pas deux solutions distinctes, alors \\(m\\leqslant 3\\) ». Elle est <b>vraie</b>, car une proposition et sa contraposée ont toujours la même valeur de vérité. <i>(0,25 pt)</i><br>\nd) « \\(m\\gt 3\\) » est une condition <b>suffisante mais pas nécessaire</b>. Une condition nécessaire et suffisante est : \\(m\\in\\,]-\\infty;-2[\\,\\cup\\,]3;+\\infty[\\). <i>(0,25 pt)</i></li>\n</ol>\n<p><b>Total : 4 points.</b></p>"
  },
  {
   "titre": "Exercice 2 — Trigonométrie et second degré",
   "points": 3,
   "chapitres": [
    7,
    2
   ],
   "enonce": "<ol>\n<li>On considère la fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par \\(f(x)=\\sin x\\cos x\\).<br>\na) Étudier la parité de \\(f\\).<br>\nb) Montrer que \\(f\\) est périodique de période \\(\\pi\\).</li>\n<li>Résoudre dans \\([0;2\\pi[\\) l'équation \\(2\\cos^2 x-\\cos x-1=0\\). <i>(On pourra poser \\(X=\\cos x\\).)</i></li>\n<li>Résoudre dans \\(]-\\pi;\\pi]\\) l'inéquation \\(\\sin x\\geqslant\\dfrac12\\).</li>\n</ol>",
   "correction": "<ol>\n<li>a) \\(\\mathbb{R}\\) est symétrique par rapport à 0 et, pour tout \\(x\\), \\(f(-x)=\\sin(-x)\\cos(-x)=(-\\sin x)\\cos x=-f(x)\\) : \\(f\\) est <b>impaire</b> (sa courbe est symétrique par rapport à l'origine). <i>(0,5 pt)</i><br>\nb) \\(f(x+\\pi)=\\sin(x+\\pi)\\cos(x+\\pi)=(-\\sin x)(-\\cos x)=\\sin x\\cos x=f(x)\\) : \\(f\\) est \\(\\pi\\)-périodique. <i>(0,5 pt)</i></li>\n<li>En posant \\(X=\\cos x\\) : \\(2X^2-X-1=0\\). \\(\\Delta=1+8=9\\), donc \\(X=\\dfrac{1+3}{4}=1\\) ou \\(X=\\dfrac{1-3}{4}=-\\dfrac12\\).\n<ul>\n<li>\\(\\cos x=1\\) sur \\([0;2\\pi[\\) : \\(x=0\\) ;</li>\n<li>\\(\\cos x=-\\frac12\\) sur \\([0;2\\pi[\\) : \\(x=\\frac{2\\pi}{3}\\) ou \\(x=\\frac{4\\pi}{3}\\).</li>\n</ul>\n\\(S=\\left\\{0;\\dfrac{2\\pi}{3};\\dfrac{4\\pi}{3}\\right\\}\\). <i>(1,25 pt)</i></li>\n<li>\\(\\sin\\frac{\\pi}{6}=\\sin\\frac{5\\pi}{6}=\\frac12\\). Sur le cercle trigonométrique, les points d'ordonnée supérieure ou égale à \\(\\frac12\\) forment l'arc allant de \\(\\frac{\\pi}{6}\\) à \\(\\frac{5\\pi}{6}\\). Donc \\(S=\\left[\\dfrac{\\pi}{6};\\dfrac{5\\pi}{6}\\right]\\). <i>(0,75 pt)</i></li>\n</ol>\n<p><b>Total : 3 points.</b></p>"
  },
  {
   "titre": "Exercice 3 — Fonction rationnelle, tangente et position relative",
   "points": 4,
   "chapitres": [
    4,
    5
   ],
   "enonce": "<p>Soit \\(f\\) la fonction définie sur \\(]1;+\\infty[\\) par \\(f(x)=\\dfrac{x^2+3}{x-1}\\), et \\(\\mathcal{C}\\) sa courbe dans un repère.</p>\n<ol>\n<li>Montrer que pour tout \\(x\\gt 1\\), \\(f(x)=x+1+\\dfrac{4}{x-1}\\).</li>\n<li>Montrer que pour tout \\(x\\gt 1\\), \\(f'(x)=\\dfrac{(x-3)(x+1)}{(x-1)^2}\\).</li>\n<li>Dresser le tableau de variations de \\(f\\) sur \\(]1;+\\infty[\\) (limites non demandées) et préciser son minimum.</li>\n<li>Déterminer une équation de la tangente \\(T\\) à \\(\\mathcal{C}\\) au point d'abscisse 2.</li>\n<li>Étudier la position relative de \\(\\mathcal{C}\\) et de la droite \\(\\mathcal{D} : y=x+1\\).</li>\n<li>Déduire de la question 3 que, pour tout réel \\(x\\gt 1\\), \\(x^2+3\\geqslant 6(x-1)\\). Retrouver ce résultat directement.</li>\n</ol>",
   "correction": "<ol>\n<li>\\(x+1+\\dfrac{4}{x-1}=\\dfrac{(x+1)(x-1)+4}{x-1}=\\dfrac{x^2-1+4}{x-1}=\\dfrac{x^2+3}{x-1}=f(x)\\). <i>(0,5 pt)</i></li>\n<li>À partir de la forme précédente : \\(\\left(\\dfrac{4}{x-1}\\right)'=-\\dfrac{4}{(x-1)^2}\\), donc\n\\[f'(x)=1-\\frac{4}{(x-1)^2}=\\frac{(x-1)^2-4}{(x-1)^2}=\\frac{(x-1-2)(x-1+2)}{(x-1)^2}=\\frac{(x-3)(x+1)}{(x-1)^2}.\\]\n(On peut aussi utiliser \\(\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}\\) : \\(\\frac{2x(x-1)-(x^2+3)}{(x-1)^2}=\\frac{x^2-2x-3}{(x-1)^2}\\).) <i>(1 pt)</i></li>\n<li>Sur \\(]1;+\\infty[\\), \\((x-1)^2\\gt 0\\) et \\(x+1\\gt 0\\) : \\(f'(x)\\) a le signe de \\(x-3\\). \\(f(3)=\\dfrac{12}{2}=6\\).\n<table class=\"tv\"><tr><td>\\(x\\)</td><td>1</td><td></td><td>3</td><td></td><td>\\(+\\infty\\)</td></tr>\n<tr><td>\\(f'(x)\\)</td><td></td><td>\\(-\\)</td><td>0</td><td>\\(+\\)</td><td></td></tr>\n<tr><td>\\(f\\)</td><td></td><td>↘</td><td>6</td><td>↗</td><td></td></tr></table>\nLe minimum de \\(f\\) sur \\(]1;+\\infty[\\) est 6, atteint en \\(x=3\\). <i>(0,75 pt)</i></li>\n<li>\\(f(2)=\\dfrac{7}{1}=7\\) et \\(f'(2)=\\dfrac{(-1)\\times 3}{1^2}=-3\\). \\(T : y=-3(x-2)+7\\), soit \\(y=-3x+13\\). <i>(0,75 pt)</i></li>\n<li>\\(f(x)-(x+1)=\\dfrac{4}{x-1}\\gt 0\\) pour \\(x\\gt 1\\) : \\(\\mathcal{C}\\) est <b>strictement au-dessus</b> de \\(\\mathcal{D}\\) sur \\(]1;+\\infty[\\). <i>(0,5 pt)</i></li>\n<li>D'après la question 3, \\(f(x)\\geqslant 6\\) pour tout \\(x\\gt 1\\), soit \\(\\dfrac{x^2+3}{x-1}\\geqslant 6\\). En multipliant par \\(x-1\\gt 0\\) (le sens ne change pas) : \\(x^2+3\\geqslant 6(x-1)\\).<br>\nDirectement : \\(x^2+3-6(x-1)=x^2-6x+9=(x-3)^2\\geqslant 0\\). On retrouve aussi l'égalité pour \\(x=3\\). <i>(0,5 pt)</i></li>\n</ol>\n<p><b>Total : 4 points.</b></p>"
  },
  {
   "titre": "Exercice 4 — Cercle, tangente et produit scalaire (calculatrice autorisée)",
   "points": 3,
   "chapitres": [
    9,
    8
   ],
   "enonce": "<p>Dans un repère orthonormé, on considère l'ensemble \\(\\mathcal{C}\\) des points \\(M(x;y)\\) tels que \\(x^2+y^2-6x+4y-12=0\\), ainsi que le point \\(A(6;2)\\) et la droite \\(d : y=x-4\\).</p>\n<ol>\n<li>Montrer que \\(\\mathcal{C}\\) est un cercle dont on précisera le centre \\(\\Omega\\) et le rayon.</li>\n<li>Vérifier que \\(A\\in\\mathcal{C}\\), puis déterminer une équation de la tangente \\(\\mathcal{T}\\) à \\(\\mathcal{C}\\) en \\(A\\).</li>\n<li>Déterminer les coordonnées des points d'intersection de \\(d\\) et \\(\\mathcal{C}\\).</li>\n<li>On note \\(B\\) le point d'intersection autre que \\(A\\). Calculer \\(\\overrightarrow{\\Omega A}\\cdot\\overrightarrow{\\Omega B}\\), puis une mesure de l'angle \\(\\widehat{A\\Omega B}\\) arrondie au dixième de degré.</li>\n</ol>",
   "correction": "<ol>\n<li>\\(x^2-6x=(x-3)^2-9\\) et \\(y^2+4y=(y+2)^2-4\\). L'équation équivaut à\n\\[(x-3)^2+(y+2)^2=12+9+4=25.\\]\n\\(\\mathcal{C}\\) est le cercle de centre \\(\\Omega(3;-2)\\) et de rayon 5. <i>(0,75 pt)</i></li>\n<li>\\((6-3)^2+(2+2)^2=9+16=25\\) : \\(A\\in\\mathcal{C}\\).\nLa tangente en \\(A\\) est perpendiculaire au rayon \\([\\Omega A]\\) : \\(\\overrightarrow{\\Omega A}(3;4)\\) est un vecteur normal, donc \\(\\mathcal{T} : 3x+4y+c=0\\). Avec \\(A\\) : \\(18+8+c=0\\), \\(c=-26\\). \\(\\mathcal{T} : 3x+4y-26=0\\). <i>(0,75 pt)</i></li>\n<li>On remplace \\(y\\) par \\(x-4\\) dans l'équation réduite : \\((x-3)^2+(x-2)^2=25\\), soit \\(2x^2-10x+13=25\\), c'est-à-dire \\(x^2-5x-6=0\\). \\(\\Delta=25+24=49\\), d'où \\(x=\\dfrac{5+7}{2}=6\\) ou \\(x=\\dfrac{5-7}{2}=-1\\).\nLes points d'intersection sont \\(A(6;2)\\) et \\(B(-1;-5)\\) (vérification : \\(16+9=25\\)). <i>(0,75 pt)</i></li>\n<li>\\(\\overrightarrow{\\Omega A}(3;4)\\), \\(\\overrightarrow{\\Omega B}(-4;-3)\\), donc \\(\\overrightarrow{\\Omega A}\\cdot\\overrightarrow{\\Omega B}=-12-12=-24\\).\nComme \\(\\Omega A=\\Omega B=5\\) :\n\\[\\cos\\widehat{A\\Omega B}=\\frac{-24}{5\\times 5}=-0{,}96,\\qquad\\widehat{A\\Omega B}\\approx 163{,}7^\\circ.\\]\n<i>(0,75 pt)</i></li>\n</ol>\n<div class=\"astuce\">Pour la tangente à un cercle, retiens le réflexe : le rayon \\(\\overrightarrow{\\Omega A}\\) est un vecteur <b>normal</b> à la tangente en \\(A\\).</div>\n<p><b>Total : 3 points.</b></p>"
  }
 ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°2", duree: "2 h", calculatrice: false,
  chapitres: [1, 3, 4, 5, 6, 10, 11],
  automatismes: [
    { q: R`\(\dfrac{2^{10}+2^{10}}{2^{9}}=\)`,
      choix: [R`\(2\)`, R`\(4\)`, R`\(8\)`, R`\(2^{11}\)`], bonne: 1,
      explication: R`\(2^{10}+2^{10}=2\times 2^{10}=2^{11}\), puis \(\dfrac{2^{11}}{2^9}=2^{2}=4\). Piège : \(2^{10}+2^{10}\neq 2^{20}\).` },
    { q: R`Pour tout réel \(x\), \(\left(\mathrm{e}^{x}\right)^2\times\mathrm{e}^{-3x}=\)`,
      choix: [R`\(\mathrm{e}^{-x}\)`, R`\(\mathrm{e}^{x^2-3x}\)`, R`\(\mathrm{e}^{-6x}\)`, R`\(\mathrm{e}^{5x}\)`], bonne: 0,
      explication: R`\(\left(\mathrm{e}^{x}\right)^2=\mathrm{e}^{2x}\) (et non \(\mathrm{e}^{x^2}\)), puis \(\mathrm{e}^{2x}\times\mathrm{e}^{-3x}=\mathrm{e}^{2x-3x}=\mathrm{e}^{-x}\).` },
    { q: R`La négation de « pour tout réel \(x\), \(x^2\geqslant x\) » est :`,
      choix: [R`« pour tout réel \(x\), \(x^2\lt x\) »`, R`« il existe un réel \(x\) tel que \(x^2\geqslant x\) »`, R`« il existe un réel \(x\) tel que \(x^2\lt x\) »`, R`« il n'existe aucun réel \(x\) tel que \(x^2\geqslant x\) »`], bonne: 2,
      explication: R`La négation de « pour tout \(x\), \(P(x)\) » est « il existe \(x\) tel que non \(P(x)\) ». Ici elle est vraie : \(x=\frac12\) donne \(\frac14\lt\frac12\).` },
    { q: R`\(1+2+3+\dots+50=\)`,
      choix: [R`\(2500\)`, R`\(1275\)`, R`\(1250\)`, R`\(2550\)`], bonne: 1,
      explication: R`\(1+2+\dots+n=\dfrac{n(n+1)}{2}\), donc \(\dfrac{50\times 51}{2}=1275\).` },
    { q: R`La dérivée de \(f(x)=\dfrac{1}{x^2+1}\) est :`,
      choix: [R`\(\dfrac{1}{2x}\)`, R`\(-\dfrac{1}{(x^2+1)^2}\)`, R`\(\dfrac{2x}{(x^2+1)^2}\)`, R`\(-\dfrac{2x}{(x^2+1)^2}\)`], bonne: 3,
      explication: R`\(\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\) avec \(v=x^2+1\), \(v'=2x\). Ne pas oublier le \(v'\) au numérateur.` },
    { q: R`L'équation de la tangente à la courbe de la fonction exponentielle au point d'abscisse 0 est :`,
      choix: [R`\(y=x\)`, R`\(y=\mathrm{e}x\)`, R`\(y=x+1\)`, R`\(y=\mathrm{e}x+1\)`], bonne: 2,
      explication: R`\(y=\exp'(0)(x-0)+\exp(0)=1\times x+1\).` },
    { q: R`L'ensemble des solutions de \(x^2\lt 9\) est :`,
      choix: [R`\(]-\infty;3[\)`, R`\(]-3;3[\)`, R`\(]-\infty;-3[\,\cup\,]3;+\infty[\)`, R`\(]-9;9[\)`], bonne: 1,
      explication: R`\(x^2-9=(x-3)(x+3)\lt 0\) entre les racines. Piège : « \(x\lt 3\) » oublie que \(x=-5\) donne \(25\gt 9\).` },
    { q: R`\(A\) et \(B\) sont indépendants, \(P(A)=0{,}3\) et \(P(B)=0{,}5\). Alors \(P(A\cup B)=\)`,
      choix: [R`\(0{,}8\)`, R`\(0{,}15\)`, R`\(0{,}65\)`, R`\(0{,}5\)`], bonne: 2,
      explication: R`\(P(A\cap B)=0{,}3\times 0{,}5=0{,}15\) et \(P(A\cup B)=0{,}3+0{,}5-0{,}15=0{,}65\).` },
    { q: R`\((u_n)\) est géométrique de premier terme \(u_0=5\) et de raison 2. Alors \(u_4=\)`,
      choix: [R`\(40\)`, R`\(80\)`, R`\(160\)`, R`\(13\)`], bonne: 1,
      explication: R`\(u_n=u_0\,q^n\), donc \(u_4=5\times 2^4=80\). (\(160\) correspond à \(u_5\), \(13\) à une suite arithmétique.)` },
    { q: R`\(E(X)=3\) et \(V(X)=2\). Alors \(V(-2X+1)=\)`,
      choix: [R`\(-4\)`, R`\(-3\)`, R`\(8\)`, R`\(9\)`], bonne: 2,
      explication: R`\(V(aX+b)=a^2V(X)=4\times 2=8\). Une variance n'est jamais négative, et la constante \(b\) n'intervient pas.` },
    { q: R`Un prix augmente de 20 % puis baisse de 20 %. Au total, il :`,
      choix: [R`ne change pas`, R`baisse de 4 %`, R`augmente de 4 %`, R`baisse de 2 %`], bonne: 1,
      explication: R`Coefficient global : \(1{,}2\times 0{,}8=0{,}96\), soit une baisse de 4 %.` },
    { q: R`L'ensemble des solutions de \(-2x^2+x+1\geqslant 0\) est :`,
      choix: [R`\(]-\infty;-\frac12]\cup[1;+\infty[\)`, R`\([-\frac12;1]\)`, R`\([-1;\frac12]\)`, R`\(\mathbb{R}\)`], bonne: 1,
      explication: R`Racines : \(1\) (évidente) et \(-\frac12\) (produit \(\frac{c}{a}=-\frac12\)). Le coefficient \(a=-2\lt 0\) : le trinôme est positif <b>entre</b> les racines.` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suite homographique, suite auxiliaire et Python", points: 5, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=1\) et, pour tout entier naturel \(n\), \(u_{n+1}=\dfrac{u_n}{1+2u_n}\). On admet que, pour tout \(n\), \(u_n\) existe et \(u_n\gt 0\).</p>
<ol>
<li>Calculer \(u_1\) et \(u_2\). La suite \((u_n)\) est-elle arithmétique ? géométrique ?</li>
<li>Montrer que la suite \((u_n)\) est strictement décroissante.</li>
<li>On pose, pour tout \(n\), \(v_n=\dfrac{1}{u_n}\).<br>a) Montrer que \((v_n)\) est arithmétique et préciser sa raison et son premier terme.<br>b) En déduire que, pour tout \(n\), \(u_n=\dfrac{1}{2n+1}\).</li>
<li>On considère la fonction Python suivante.
<pre><code>def seuil(e):
    n = 0
    u = 1
    while u &gt;= e:
        u = u / (1 + 2*u)
        n = n + 1
    return n</code></pre>
a) Que représente la valeur renvoyée par <code>seuil(e)</code> ?<br>b) Déterminer, par le calcul, la valeur renvoyée par <code>seuil(0.001)</code>.</li>
<li>a) Montrer que, pour tout \(n\), \(u_n-u_{n+1}=2\,u_n\,u_{n+1}\).<br>b) En déduire la valeur de \(S_n=u_0u_1+u_1u_2+\dots+u_nu_{n+1}\) en fonction de \(n\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=\dfrac{1}{1+2}=\dfrac13\) et \(u_2=\dfrac{1/3}{1+2/3}=\dfrac{1/3}{5/3}=\dfrac15\).<br>
\(u_1-u_0=-\frac23\) et \(u_2-u_1=\frac15-\frac13=-\frac{2}{15}\) : différences distinctes, la suite n'est pas arithmétique.<br>
\(\frac{u_1}{u_0}=\frac13\) et \(\frac{u_2}{u_1}=\frac35\) : quotients distincts, elle n'est pas géométrique. <i>(0,5 pt)</i></li>
<li>Pour tout \(n\) :
\[u_{n+1}-u_n=\frac{u_n}{1+2u_n}-u_n=\frac{u_n-u_n(1+2u_n)}{1+2u_n}=\frac{-2u_n^2}{1+2u_n}.\]
Comme \(u_n\gt 0\), on a \(u_n^2\gt 0\) et \(1+2u_n\gt 0\), donc \(u_{n+1}-u_n\lt 0\) : la suite est strictement décroissante. <i>(0,75 pt)</i></li>
<li>a) \(v_{n+1}=\dfrac{1}{u_{n+1}}=\dfrac{1+2u_n}{u_n}=\dfrac{1}{u_n}+2=v_n+2\). La suite \((v_n)\) est arithmétique de raison 2 et de premier terme \(v_0=\frac11=1\). <i>(0,5 pt)</i><br>
b) Donc \(v_n=1+2n\) et \(u_n=\dfrac{1}{v_n}=\dfrac{1}{2n+1}\). <i>(0,5 pt)</i></li>
<li>a) La boucle calcule les termes successifs tant que \(u_n\geqslant e\) : la fonction renvoie le <b>plus petit entier \(n\)</b> tel que \(u_n\lt e\). <i>(0,5 pt)</i><br>
b) \(u_n\lt 0{,}001\iff\dfrac{1}{2n+1}\lt\dfrac{1}{1000}\iff 2n+1\gt 1000\) (les deux nombres sont positifs) \(\iff n\gt 499{,}5\).
Le plus petit entier convenable est \(n=500\) : <code>seuil(0.001)</code> renvoie <b>500</b>. (Contrôle : \(u_{499}=\frac{1}{999}\gt 0{,}001\) et \(u_{500}=\frac{1}{1001}\lt 0{,}001\).) <i>(0,75 pt)</i></li>
<li>a) \(u_n-u_{n+1}=\dfrac{1}{2n+1}-\dfrac{1}{2n+3}=\dfrac{(2n+3)-(2n+1)}{(2n+1)(2n+3)}=\dfrac{2}{(2n+1)(2n+3)}=2\,u_n\,u_{n+1}\). <i>(0,5 pt)</i><br>
b) Ainsi \(u_ku_{k+1}=\frac12(u_k-u_{k+1})\) pour tout \(k\). En additionnant pour \(k\) allant de 0 à \(n\), les termes intermédiaires se simplifient deux à deux (somme « télescopique ») :
\[S_n=\frac12\big[(u_0-u_1)+(u_1-u_2)+\dots+(u_n-u_{n+1})\big]=\frac12\,(u_0-u_{n+1})=\frac12\left(1-\frac{1}{2n+3}\right)=\frac{n+1}{2n+3}.\]
Vérification : \(S_0=u_0u_1=\frac13\) et \(\frac{0+1}{0+3}=\frac13\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Exponentielle : inégalité et tangentes issues d'un point", points: 5, chapitres: [6, 4, 5, 2],
      enonce: R`<p>Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=(x+1)\,\mathrm{e}^{-x}\), et \(\mathcal{C}\) sa courbe représentative dans un repère.</p>
<ol>
<li>Montrer que, pour tout réel \(x\), \(f'(x)=-x\,\mathrm{e}^{-x}\).</li>
<li>Dresser le tableau de variations de \(f\) sur \(\mathbb{R}\) (les limites ne sont pas demandées).</li>
<li>En déduire que, pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant x+1\).</li>
<li>Soit \(a\) un réel et \(T_a\) la tangente à \(\mathcal{C}\) au point d'abscisse \(a\). Soit \(p\) un réel et \(P(p;0)\).<br>Montrer que \(T_a\) passe par \(P\) si et seulement si \(a^2+(1-p)a+1=0\).</li>
<li>Déterminer, selon les valeurs de \(p\), le nombre de points de \(\mathcal{C}\) en lesquels la tangente passe par \(P(p;0)\). Préciser ces points (leurs abscisses) lorsque \(p=4\).</li>
<li>Les propositions suivantes sont-elles vraies ou fausses ? Justifier.<br>
\(\mathcal{P}_1\) : « Par tout point de l'axe des abscisses passe au moins une tangente à \(\mathcal{C}\). »<br>
\(\mathcal{P}_2\) : « Il existe un point de l'axe des abscisses par lequel passe la tangente à \(\mathcal{C}\) en exactement un point de \(\mathcal{C}\). »</li>
</ol>`,
      correction: R`<ol>
<li>\(f=uv\) avec \(u(x)=x+1\), \(u'(x)=1\), \(v(x)=\mathrm{e}^{-x}\), \(v'(x)=-\mathrm{e}^{-x}\) (dérivée de \(\mathrm{e}^{ax+b}\) : \(a\,\mathrm{e}^{ax+b}\)).
\[f'(x)=1\times\mathrm{e}^{-x}+(x+1)\times(-\mathrm{e}^{-x})=\mathrm{e}^{-x}(1-x-1)=-x\,\mathrm{e}^{-x}.\]
<i>(0,75 pt)</i></li>
<li>Comme \(\mathrm{e}^{-x}\gt 0\), \(f'(x)\) a le signe de \(-x\) : positif sur \(]-\infty;0]\), négatif sur \([0;+\infty[\). \(f(0)=1\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>0</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↗</td><td>1</td><td>↘</td><td></td></tr></table>
\(f\) admet un maximum égal à 1, atteint en 0. <i>(0,75 pt)</i></li>
<li>D'après la question 2, pour tout réel \(x\), \(f(x)\leqslant 1\), soit \((x+1)\,\mathrm{e}^{-x}\leqslant 1\). En multipliant par \(\mathrm{e}^{x}\gt 0\) (le sens est conservé) et comme \(\mathrm{e}^{-x}\times\mathrm{e}^{x}=1\) : \(x+1\leqslant\mathrm{e}^{x}\). <i>(0,75 pt)</i></li>
<li>\(T_a : y=f'(a)(x-a)+f(a)=-a\,\mathrm{e}^{-a}(x-a)+(a+1)\,\mathrm{e}^{-a}\).<br>
\(P(p;0)\in T_a\iff 0=-a\,\mathrm{e}^{-a}(p-a)+(a+1)\,\mathrm{e}^{-a}\iff 0=\mathrm{e}^{-a}\left(a^2-ap+a+1\right)\).<br>
Comme \(\mathrm{e}^{-a}\neq 0\), c'est équivalent à \(a^2+(1-p)a+1=0\). <i>(1 pt)</i></li>
<li>Le nombre de points cherchés est le nombre de solutions \(a\) de cette équation du second degré. Son discriminant est
\[\Delta=(1-p)^2-4=(1-p-2)(1-p+2)=(-1-p)(3-p)=(p+1)(p-3).\]
C'est un trinôme en \(p\) de racines \(-1\) et \(3\), positif à l'extérieur des racines :
<ul><li>si \(p\lt -1\) ou \(p\gt 3\) : <b>deux</b> points ;</li>
<li>si \(p=-1\) ou \(p=3\) : <b>un seul</b> point (\(a=\frac{p-1}{2}\), soit \(a=-1\) ou \(a=1\)) ;</li>
<li>si \(-1\lt p\lt 3\) : <b>aucun</b> point.</li></ul>
Pour \(p=4\) : \(a^2-3a+1=0\), \(\Delta=5\), \(a=\dfrac{3-\sqrt5}{2}\) ou \(a=\dfrac{3+\sqrt5}{2}\). <i>(1,25 pt)</i></li>
<li>\(\mathcal{P}_1\) est <b>fausse</b> : contre-exemple \(p=0\) (l'origine), car \(0\in\,]-1;3[\) ; en effet \(a^2+a+1=0\) a pour discriminant \(-3\lt 0\).<br>
\(\mathcal{P}_2\) est <b>vraie</b> : le point \(P(3;0)\) convient (seul le point d'abscisse \(a=1\) convient : \(a^2-2a+1=(a-1)^2\)). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">Méthode « tangente passant par un point » : écrire l'équation de \(T_a\), y injecter les coordonnées du point, et résoudre l'équation <b>d'inconnue \(a\)</b>.</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Tirages sans remise et jeu à paramètre", points: 4, chapitres: [10, 11, 2],
      enonce: R`<p>Une urne contient 2 boules rouges et \(n\) boules noires (\(n\) entier, \(n\geqslant 1\)), indiscernables au toucher. On tire au hasard une boule, on la garde, puis on tire une seconde boule. On note \(R_1\) (resp. \(R_2\)) l'événement « la première (resp. la seconde) boule est rouge ».</p>
<p><b>Partie A — Cas \(n=3\)</b></p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer \(P(R_2)\). Comparer avec \(P(R_1)\).</li>
<li>Sachant que la seconde boule est rouge, quelle est la probabilité que la première le soit aussi ?</li>
<li>Les événements \(R_1\) et \(R_2\) sont-ils indépendants ?</li>
</ol>
<p><b>Partie B — Cas général</b></p>
<p>Le joueur gagne 5 € s'il tire deux boules rouges, 2 € s'il tire exactement une boule rouge, et perd 1 € s'il ne tire aucune boule rouge. On note \(X\) son gain algébrique.</p>
<ol start="5">
<li>Donner la loi de probabilité de \(X\) en fonction de \(n\).</li>
<li>Montrer que \(E(X)=\dfrac{10-n}{n+2}\).</li>
<li>Pour quelles valeurs de \(n\) le jeu est-il favorable au joueur ? équitable ?</li>
</ol>`,
      correction: R`<p><b>Partie A</b> (5 boules : 2 rouges, 3 noires)</p>
<ol>
<li>Premier tirage : \(P(R_1)=\frac25\), \(P(\overline{R_1})=\frac35\). Second tirage (4 boules restantes) : \(P_{R_1}(R_2)=\frac14\), \(P_{R_1}(\overline{R_2})=\frac34\), \(P_{\overline{R_1}}(R_2)=\frac24=\frac12\), \(P_{\overline{R_1}}(\overline{R_2})=\frac12\). <i>(0,5 pt)</i></li>
<li>Formule des probabilités totales (\(R_1\), \(\overline{R_1}\) forment une partition) :
\[P(R_2)=\frac25\times\frac14+\frac35\times\frac12=\frac{1}{10}+\frac{3}{10}=\frac25.\]
On trouve \(P(R_2)=P(R_1)\) : sans information sur le premier tirage, le second « ressemble » au premier. <i>(0,75 pt)</i></li>
<li>\(P_{R_2}(R_1)=\dfrac{P(R_1\cap R_2)}{P(R_2)}=\dfrac{1/10}{2/5}=\dfrac{1}{10}\times\dfrac52=\dfrac14\). <i>(0,5 pt)</i></li>
<li>\(P(R_1)\times P(R_2)=\frac{4}{25}\neq\frac{1}{10}=P(R_1\cap R_2)\) : \(R_1\) et \(R_2\) ne sont <b>pas</b> indépendants (le premier tirage modifie la composition de l'urne). <i>(0,5 pt)</i></li>
</ol>
<p><b>Partie B</b> (\(n+2\) boules)</p>
<ol start="5">
<li>\(P(X=5)=P(R_1\cap R_2)=\dfrac{2}{n+2}\times\dfrac{1}{n+1}=\dfrac{2}{(n+1)(n+2)}\).<br>
\(P(X=2)=P(R_1\cap\overline{R_2})+P(\overline{R_1}\cap R_2)=\dfrac{2}{n+2}\times\dfrac{n}{n+1}+\dfrac{n}{n+2}\times\dfrac{2}{n+1}=\dfrac{4n}{(n+1)(n+2)}\).<br>
\(P(X=-1)=\dfrac{n}{n+2}\times\dfrac{n-1}{n+1}=\dfrac{n(n-1)}{(n+1)(n+2)}\).<br>
Contrôle : \(2+4n+n^2-n=n^2+3n+2=(n+1)(n+2)\), la somme vaut bien 1. <i>(0,75 pt)</i></li>
<li>\[E(X)=\frac{5\times 2+2\times 4n-n(n-1)}{(n+1)(n+2)}=\frac{-n^2+9n+10}{(n+1)(n+2)}.\]
Le trinôme \(-n^2+9n+10\) a pour racine évidente \(-1\) ; le produit des racines vaut \(-10\), l'autre racine est \(10\) : \(-n^2+9n+10=-(n+1)(n-10)=(n+1)(10-n)\). Donc \(E(X)=\dfrac{10-n}{n+2}\). <i>(0,75 pt)</i></li>
<li>\(n+2\gt 0\), donc \(E(X)\) a le signe de \(10-n\) : le jeu est <b>favorable</b> pour \(1\leqslant n\leqslant 9\), <b>équitable</b> pour \(n=10\) (et défavorable pour \(n\geqslant 11\)). <i>(0,25 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°3", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 4, 5, 8, 9, 11],
  automatismes: [
    { q: R`La forme canonique de \(x^2-6x+11\) est :`,
      choix: [R`\((x-3)^2+11\)`, R`\((x-3)^2+2\)`, R`\((x+3)^2+2\)`, R`\((x-6)^2-25\)`], bonne: 1,
      explication: R`\(x^2-6x=(x-3)^2-9\), donc \(x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2\).` },
    { q: R`\(\cos\left(\dfrac{2\pi}{3}\right)=\)`,
      choix: [R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`, R`\(\dfrac{\sqrt3}{2}\)`, R`\(-\dfrac12\)`], bonne: 3,
      explication: R`\(\frac{2\pi}{3}=\pi-\frac{\pi}{3}\), donc \(\cos\frac{2\pi}{3}=-\cos\frac{\pi}{3}=-\frac12\).` },
    { q: R`Soit \(f(x)=\sqrt{x}\). Alors \(f'(4)=\)`,
      choix: [R`\(2\)`, R`\(\dfrac12\)`, R`\(\dfrac14\)`, R`\(\dfrac18\)`], bonne: 2,
      explication: R`\(f'(x)=\dfrac{1}{2\sqrt x}\), donc \(f'(4)=\dfrac{1}{2\times 2}=\dfrac14\).` },
    { q: R`L'équation \(\mathrm{e}^{3x-1}=\mathrm{e}^{x+3}\) a pour solution :`,
      choix: [R`\(x=1\)`, R`\(x=2\)`, R`\(x=-2\)`, R`aucune solution`], bonne: 1,
      explication: R`\(\mathrm{e}^a=\mathrm{e}^b\iff a=b\) : \(3x-1=x+3\iff 2x=4\iff x=2\).` },
    { q: R`Les vecteurs \(\vec u(2;-3)\) et \(\vec v(6;4)\) sont :`,
      choix: [R`colinéaires`, R`orthogonaux`, R`de même norme`, R`ni colinéaires ni orthogonaux`], bonne: 1,
      explication: R`\(\vec u\cdot\vec v=2\times 6+(-3)\times 4=0\) : orthogonaux. (\(\det=8+18=26\neq 0\) : non colinéaires.)` },
    { q: R`La contraposée de « si \(n^2\) est pair, alors \(n\) est pair » est :`,
      choix: [R`« si \(n\) est pair, alors \(n^2\) est pair »`, R`« si \(n^2\) est impair, alors \(n\) est impair »`, R`« si \(n\) est impair, alors \(n^2\) est impair »`, R`« \(n^2\) est pair et \(n\) est impair »`], bonne: 2,
      explication: R`La contraposée de « \(P\Rightarrow Q\) » est « non \(Q\Rightarrow\) non \(P\) ». La première proposition est la <i>réciproque</i>.` },
    { q: R`\((u_n)\) est arithmétique avec \(u_3=7\) et \(u_7=19\). Alors \(u_0=\)`,
      choix: [R`\(-2\)`, R`\(1\)`, R`\(4\)`, R`\(-5\)`], bonne: 0,
      explication: R`\(u_7-u_3=4r=12\), donc \(r=3\), puis \(u_0=u_3-3r=7-9=-2\).` },
    { q: R`\(P(A)=0{,}4\), \(P_A(B)=0{,}5\) et \(P_{\overline A}(B)=0{,}25\). Alors \(P(B)=\)`,
      choix: [R`\(0{,}75\)`, R`\(0{,}35\)`, R`\(0{,}2\)`, R`\(0{,}375\)`], bonne: 1,
      explication: R`Probabilités totales : \(P(B)=0{,}4\times 0{,}5+0{,}6\times 0{,}25=0{,}2+0{,}15=0{,}35\).` },
    { q: R`La droite passant par \(A(1;2)\) et de vecteur normal \(\vec n(3;-1)\) a pour équation :`,
      choix: [R`\(3x-y-1=0\)`, R`\(x+3y-7=0\)`, R`\(3x-y+1=0\)`, R`\(-x+3y-5=0\)`], bonne: 0,
      explication: R`\(3x-y+c=0\) et \(A\) : \(3-2+c=0\), \(c=-1\). Attention : \(x+3y-7=0\) passe par \(A\) mais a \((3;-1)\) pour vecteur <i>directeur</i>.` },
    { q: R`La fonction \(f(x)=x^3-3x\) est décroissante sur :`,
      choix: [R`\(]-\infty;0]\)`, R`\([-\sqrt3;\sqrt3]\)`, R`\([-1;1]\)`, R`\([0;+\infty[\)`], bonne: 2,
      explication: R`\(f'(x)=3x^2-3=3(x-1)(x+1)\), négatif entre \(-1\) et \(1\). (\(\pm\sqrt3\) sont les racines de \(f\), pas de \(f'\).)` },
    { q: R`La mesure principale de \(\dfrac{17\pi}{4}\) est :`,
      choix: [R`\(\dfrac{\pi}{4}\)`, R`\(-\dfrac{\pi}{4}\)`, R`\(\dfrac{3\pi}{4}\)`, R`\(\dfrac{17\pi}{4}\)`], bonne: 0,
      explication: R`\(\frac{17\pi}{4}=4\pi+\frac{\pi}{4}=2\times 2\pi+\frac{\pi}{4}\), et \(\frac{\pi}{4}\in\,]-\pi;\pi]\).` },
    { q: R`Un ticket coûte 3 € et permet de gagner un lot de 10 € avec la probabilité \(0{,}2\). L'espérance du gain algébrique est :`,
      choix: [R`\(2\) €`, R`\(1{,}4\) €`, R`\(-1\) €`, R`\(-0{,}6\) €`], bonne: 2,
      explication: R`Gain \(7\) € avec probabilité \(0{,}2\), \(-3\) € avec probabilité \(0{,}8\) : \(1{,}4-2{,}4=-1\). Ou plus vite : \(10\times 0{,}2-3=-1\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Théorème de la médiane et lignes de niveau", points: 4, chapitres: [8, 9],
      enonce: R`<p><b>Partie A — Démonstration.</b> Soit \(A\) et \(B\) deux points distincts du plan, \(I\) le milieu de \([AB]\) et \(M\) un point quelconque.</p>
<ol>
<li>En écrivant \(\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}\) et \(\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}\), démontrer que
\[MA^2+MB^2=2MI^2+\frac{AB^2}{2}.\]</li>
<li>Démontrer de même que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\dfrac{AB^2}{4}\).</li>
</ol>
<p><b>Partie B — Application.</b> Dans un repère orthonormé, \(A(-1;2)\) et \(B(3;0)\). Pour tout réel \(k\), on note \(\mathcal{E}_k\) l'ensemble des points \(M\) tels que \(MA^2+MB^2=k\).</p>
<ol start="3">
<li>Déterminer, selon les valeurs de \(k\), la nature de \(\mathcal{E}_k\).</li>
<li>Montrer que \(\mathcal{E}_{20}\) est le cercle de diamètre \([AB]\). Retrouver ce résultat à l'aide de la question 2.</li>
<li>Donner une équation cartésienne de \(\mathcal{E}_{30}\) et vérifier que \(C(4;2)\) lui appartient.</li>
</ol>`,
      correction: R`<ol>
<li>\(MA^2=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)^2=MI^2+2\,\overrightarrow{MI}\cdot\overrightarrow{IA}+IA^2\) et \(MB^2=MI^2+2\,\overrightarrow{MI}\cdot\overrightarrow{IB}+IB^2\).<br>
Comme \(I\) est le milieu de \([AB]\), \(\overrightarrow{IB}=-\overrightarrow{IA}\) et \(IA=IB=\frac{AB}{2}\). En additionnant, les produits scalaires s'annulent :
\[MA^2+MB^2=2MI^2+2\times\frac{AB^2}{4}=2MI^2+\frac{AB^2}{2}.\]
<i>(1 pt)</i></li>
<li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)\cdot\left(\overrightarrow{MI}-\overrightarrow{IA}\right)=MI^2-IA^2=MI^2-\dfrac{AB^2}{4}\). <i>(0,5 pt)</i></li>
<li>\(I(1;1)\) et \(AB^2=4^2+(-2)^2=20\). D'après la question 1 :
\[MA^2+MB^2=k\iff 2MI^2+10=k\iff MI^2=\frac{k-10}{2}.\]
<ul><li>si \(k\lt 10\) : \(\mathcal{E}_k\) est vide (un carré n'est pas négatif) ;</li>
<li>si \(k=10\) : \(\mathcal{E}_k=\{I\}\) ;</li>
<li>si \(k\gt 10\) : \(\mathcal{E}_k\) est le cercle de centre \(I\) et de rayon \(\sqrt{\frac{k-10}{2}}\).</li></ul>
<i>(1 pt)</i></li>
<li>Pour \(k=20\) : cercle de centre \(I\), milieu de \([AB]\), et de rayon \(\sqrt5=\frac{\sqrt{20}}{2}=\frac{AB}{2}\) : c'est le cercle de diamètre \([AB]\).<br>
Autre méthode : \(MA^2+MB^2=AB^2\) équivaut, d'après les questions 1 et 2, à \(2MI^2-\frac{AB^2}{2}=0\), c'est-à-dire à \(2\,\overrightarrow{MA}\cdot\overrightarrow{MB}=0\) : on retrouve l'ensemble des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\), cercle de diamètre \([AB]\) (c'est aussi la réciproque du théorème de Pythagore). <i>(0,75 pt)</i></li>
<li>\(\mathcal{E}_{30}\) : \(MI^2=10\), soit \((x-1)^2+(y-1)^2=10\).<br>
\((4-1)^2+(2-1)^2=9+1=10\) : \(C\in\mathcal{E}_{30}\). Vérification directe : \(CA^2=25+0=25\), \(CB^2=1+4=5\), \(25+5=30\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Trinôme à paramètre, signe et conditions", points: 4, chapitres: [2, 1],
      enonce: R`<p>Pour tout réel \(m\), on considère la fonction \(P_m\) définie sur \(\mathbb{R}\) par \(P_m(x)=(m-1)x^2-2mx+m+2\).</p>
<ol>
<li>Résoudre l'équation \(P_1(x)=0\).</li>
<li>On suppose \(m\neq 1\). Montrer que le discriminant de \(P_m\) est \(\Delta=8-4m\), puis discuter selon \(m\) le nombre de solutions de \(P_m(x)=0\).</li>
<li>Déterminer l'ensemble des réels \(m\) tels que, pour tout réel \(x\), \(P_m(x)\gt 0\).</li>
<li>a) La condition « \(m\gt 2\) » est-elle nécessaire ? suffisante ? pour que l'on ait \(P_m(x)\geqslant 0\) pour tout réel \(x\). Donner une condition nécessaire et suffisante.<br>
b) Déterminer les valeurs de \(m\) pour lesquelles \(P_m(x)=0\) admet deux solutions de signes contraires.</li>
</ol>`,
      correction: R`<ol>
<li>\(P_1(x)=-2x+3\) (ce n'est pas un trinôme !). \(P_1(x)=0\iff x=\frac32\). <i>(0,5 pt)</i></li>
<li>\(\Delta=(-2m)^2-4(m-1)(m+2)=4m^2-4(m^2+m-2)=-4m+8=8-4m\).
<ul><li>si \(m\lt 2\) et \(m\neq 1\) : \(\Delta\gt 0\), deux solutions ;</li>
<li>si \(m=2\) : \(\Delta=0\), une solution \(x_0=\frac{2m}{2(m-1)}=2\) (en effet \(P_2(x)=x^2-4x+4=(x-2)^2\)) ;</li>
<li>si \(m\gt 2\) : \(\Delta\lt 0\), aucune solution.</li></ul>
<i>(1 pt)</i></li>
<li>Pour \(m=1\), \(P_1(2)=-1\lt 0\) : ne convient pas. Pour \(m\neq 1\), un trinôme est strictement positif sur \(\mathbb{R}\) si et seulement si son discriminant est strictement négatif <b>et</b> son coefficient dominant strictement positif : \(8-4m\lt 0\) et \(m-1\gt 0\), soit \(m\gt 2\). L'ensemble cherché est \(]2;+\infty[\). <i>(1 pt)</i></li>
<li>a) \(P_m(x)\geqslant 0\) pour tout \(x\) équivaut à (\(m\gt 2\)) ou (\(m=2\)), car \(P_2(x)=(x-2)^2\geqslant 0\) ; si \(m\lt 2\), \(m\neq1\), le trinôme a deux racines et change de signe ; \(m=1\) a été exclu.<br>
Donc « \(m\gt 2\) » est <b>suffisante mais pas nécessaire</b> (\(m=2\) convient aussi). Condition nécessaire et suffisante : \(m\geqslant 2\). <i>(0,75 pt)</i><br>
b) Il faut \(m\neq 1\). Deux solutions de signes contraires existent si et seulement si leur produit \(\frac ca=\frac{m+2}{m-1}\) est strictement négatif (dans ce cas \(ac\lt 0\), donc \(\Delta=b^2-4ac\gt 0\) automatiquement). Tableau de signes du quotient : \(\frac{m+2}{m-1}\lt 0\iff -2\lt m\lt 1\). <i>(0,75 pt)</i></li>
</ol>
<div class="warn">Ne jamais oublier le cas où le coefficient de \(x^2\) s'annule : pour \(m=1\), il n'y a pas de discriminant.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Distance d'un point à une parabole", points: 3, chapitres: [4, 5, 9, 8],
      enonce: R`<p>Dans un repère orthonormé, on note \(\mathcal{P}\) la parabole d'équation \(y=x^2\) et \(A(3;0)\). Pour tout réel \(x\), on note \(M\) le point de \(\mathcal{P}\) d'abscisse \(x\) et \(d(x)=AM^2\).</p>
<ol>
<li>Montrer que \(d(x)=x^4+x^2-6x+9\), puis que \(d'(x)=2(x-1)(2x^2+2x+3)\).</li>
<li>En déduire la distance minimale \(AM\) et le point \(M_0\) de \(\mathcal{P}\) où elle est atteinte.</li>
<li>Démontrer que la droite \((AM_0)\) est perpendiculaire à la tangente à \(\mathcal{P}\) en \(M_0\).</li>
</ol>`,
      correction: R`<ol>
<li>\(M(x;x^2)\), donc \(d(x)=(x-3)^2+(x^2-0)^2=x^2-6x+9+x^4\).<br>
\(d'(x)=4x^3+2x-6\). Or \(2(x-1)(2x^2+2x+3)=2(2x^3+2x^2+3x-2x^2-2x-3)=2(2x^3+x-3)=4x^3+2x-6\). <i>(1 pt)</i></li>
<li>Le trinôme \(2x^2+2x+3\) a pour discriminant \(4-24=-20\lt 0\) : il est toujours strictement positif. Donc \(d'(x)\) a le signe de \(x-1\) : \(d\) est décroissante sur \(]-\infty;1]\), croissante sur \([1;+\infty[\), et admet un minimum en 1 : \(d(1)=1+1-6+9=5\).<br>
Comme \(AM=\sqrt{d(x)}\) et que la racine carrée est croissante, \(AM\) est minimale en même temps que \(d\) : la distance minimale est \(\sqrt5\), atteinte en \(M_0(1;1)\). <i>(1 pt)</i></li>
<li>La tangente en \(M_0\) a pour coefficient directeur \(f'(1)=2\) (avec \(f(x)=x^2\)), donc pour vecteur directeur \(\vec u(1;2)\). \(\overrightarrow{AM_0}(-2;1)\) et \(\vec u\cdot\overrightarrow{AM_0}=-2+2=0\) : la droite \((AM_0)\) est perpendiculaire à la tangente. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 4 — Retrouver une loi et minimiser un écart quadratique", points: 3, chapitres: [11, 2],
      enonce: R`<p>Une variable aléatoire \(X\) prend les valeurs \(-1\), \(1\) et \(3\) avec les probabilités respectives \(p_1\), \(p_2\), \(p_3\). On sait que \(E(X)=1\) et \(V(X)=2\).</p>
<ol>
<li>Calculer \(E(X^2)\), puis déterminer \(p_1\), \(p_2\) et \(p_3\).</li>
<li>Calculer l'espérance et la variance de \(Z=2X-1\).</li>
<li>Pour tout réel \(t\), on pose \(g(t)=p_1(-1-t)^2+p_2(1-t)^2+p_3(3-t)^2\) (c'est l'espérance de \((X-t)^2\)).<br>
a) Démontrer, dans le cas général d'une variable \(X\) prenant les valeurs \(x_1,\dots,x_r\) avec les probabilités \(p_1,\dots,p_r\), que \(\displaystyle\sum_{i=1}^{r}p_i(x_i-t)^2=V(X)+\big(E(X)-t\big)^2\).<br>
b) En déduire la valeur de \(t\) qui minimise \(g(t)\) ici, et ce minimum.</li>
</ol>`,
      correction: R`<ol>
<li>Formule de König-Huygens : \(V(X)=E(X^2)-E(X)^2\), donc \(E(X^2)=2+1=3\). On obtient le système
\[\begin{cases}p_1+p_2+p_3=1\\-p_1+p_2+3p_3=1\\p_1+p_2+9p_3=3\end{cases}\]
(3) − (1) : \(8p_3=2\), \(p_3=\frac14\). (1) − (2) : \(2p_1-2p_3=0\), \(p_1=\frac14\). Puis \(p_2=1-\frac12=\frac12\).<br>
Vérification : \(E(X)=-\frac14+\frac12+\frac34=1\) et \(E(X^2)=\frac14+\frac12+\frac94=3\). <i>(1,25 pt)</i></li>
<li>\(E(Z)=2E(X)-1=1\) et \(V(Z)=2^2V(X)=8\). <i>(0,5 pt)</i></li>
<li>a) En développant \((x_i-t)^2=x_i^2-2tx_i+t^2\) :
\[\sum p_i(x_i-t)^2=\sum p_ix_i^2-2t\sum p_ix_i+t^2\sum p_i=E(X^2)-2tE(X)+t^2.\]
Avec \(E(X^2)=V(X)+E(X)^2\) : \(=V(X)+E(X)^2-2tE(X)+t^2=V(X)+\big(E(X)-t\big)^2\). <i>(0,75 pt)</i><br>
b) Ici \(g(t)=2+(1-t)^2\geqslant 2\), avec égalité si et seulement si \(t=1\). Le minimum vaut \(2=V(X)\), atteint pour \(t=E(X)=1\) : l'espérance est la valeur qui minimise l'écart quadratique moyen. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°4", duree: "2 h", calculatrice: false,
  chapitres: [1, 3, 4, 5, 6, 7, 8, 9, 10],
  automatismes: [
    { q: R`\(\sin\left(\dfrac{5\pi}{6}\right)=\)`,
      choix: [R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`, R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`], bonne: 2,
      explication: R`\(\frac{5\pi}{6}=\pi-\frac{\pi}{6}\) et \(\sin(\pi-x)=\sin x\), donc \(\sin\frac{5\pi}{6}=\sin\frac{\pi}{6}=\frac12\).` },
    { q: R`Pour tout réel \(x\), \((2x-3)^2=\)`,
      choix: [R`\(4x^2-9\)`, R`\(4x^2+9\)`, R`\(4x^2-6x+9\)`, R`\(4x^2-12x+9\)`], bonne: 3,
      explication: R`\((a-b)^2=a^2-2ab+b^2\) avec \(a=2x\), \(b=3\) : \(4x^2-12x+9\). Ne pas oublier le double produit.` },
    { q: R`\(u_0=1\) et \(u_{n+1}=2u_n-1\) pour tout \(n\). Alors \(u_3=\)`,
      choix: [R`\(5\)`, R`\(1\)`, R`\(8\)`, R`\(7\)`], bonne: 1,
      explication: R`\(u_1=2-1=1\), \(u_2=1\), \(u_3=1\) : la suite est constante (1 est le point fixe de \(x\mapsto 2x-1\)).` },
    { q: R`L'ensemble des solutions de \(\mathrm{e}^{2x-4}\geqslant 1\) est :`,
      choix: [R`\([2;+\infty[\)`, R`\(]-\infty;2]\)`, R`\([\frac52;+\infty[\)`, R`\(\mathbb{R}\)`], bonne: 0,
      explication: R`\(1=\mathrm{e}^0\) et \(\exp\) est strictement croissante : \(2x-4\geqslant 0\iff x\geqslant 2\).` },
    { q: R`La dérivée de \(f(x)=(2x+1)^3\) est :`,
      choix: [R`\(3(2x+1)^2\)`, R`\(6(2x+1)^2\)`, R`\(6(2x+1)\)`, R`\(2(2x+1)^3\)`], bonne: 1,
      explication: R`\(f(x)=g(2x+1)\) avec \(g(X)=X^3\) : \(f'(x)=2\,g'(2x+1)=2\times 3(2x+1)^2=6(2x+1)^2\).` },
    { q: R`L'ensemble d'équation \(x^2+y^2+4x-2y=0\) est :`,
      choix: [R`le cercle de centre \((2;-1)\) et de rayon \(\sqrt5\)`, R`le cercle de centre \((-2;1)\) et de rayon 5`, R`le cercle de centre \((-2;1)\) et de rayon \(\sqrt5\)`, R`l'ensemble vide`], bonne: 2,
      explication: R`\((x+2)^2-4+(y-1)^2-1=0\iff(x+2)^2+(y-1)^2=5\) : centre \((-2;1)\), rayon \(\sqrt5\).` },
    { q: R`\(\|\vec u\|=3\), \(\|\vec v\|=2\) et \((\vec u,\vec v)=\dfrac{\pi}{3}\). Alors \(\vec u\cdot\vec v=\)`,
      choix: [R`\(3\sqrt3\)`, R`\(3\)`, R`\(6\)`, R`\(-3\)`], bonne: 1,
      explication: R`\(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\frac{\pi}{3}=6\times\frac12=3\).` },
    { q: R`\(P(A\cap B)=0{,}12\) et \(P(A)=0{,}3\). Alors \(P_A(B)=\)`,
      choix: [R`\(0{,}036\)`, R`\(0{,}4\)`, R`\(0{,}25\)`, R`\(0{,}42\)`], bonne: 1,
      explication: R`\(P_A(B)=\dfrac{P(A\cap B)}{P(A)}=\dfrac{0{,}12}{0{,}3}=0{,}4\).` },
    { q: R`\(X\) prend les valeurs \(0\), \(2\) et \(a\) avec les probabilités \(0{,}5\), \(0{,}3\) et \(0{,}2\). Si \(E(X)=2\), alors \(a=\)`,
      choix: [R`\(7\)`, R`\(4\)`, R`\(10\)`, R`\(2\)`], bonne: 0,
      explication: R`\(E(X)=0+0{,}6+0{,}2a=2\iff 0{,}2a=1{,}4\iff a=7\).` },
    { q: R`Pour un réel \(x\), « \(x^2\gt 1\) » est, pour « \(x\gt 1\) », une condition :`,
      choix: [R`nécessaire mais pas suffisante`, R`suffisante mais pas nécessaire`, R`nécessaire et suffisante`, R`ni nécessaire ni suffisante`], bonne: 0,
      explication: R`Si \(x\gt 1\) alors \(x^2\gt 1\) : elle est nécessaire. Mais \(x=-2\) vérifie \(x^2\gt 1\) sans vérifier \(x\gt 1\) : pas suffisante.` },
    { q: R`La somme des solutions de \(2x^2-6x+1=0\) est :`,
      choix: [R`\(-3\)`, R`\(\dfrac12\)`, R`\(3\)`, R`\(6\)`], bonne: 2,
      explication: R`\(\Delta=36-8=28\gt 0\) : deux solutions, de somme \(-\dfrac ba=\dfrac62=3\) (et de produit \(\frac ca=\frac12\)).` },
    { q: R`Que renvoie <code>f(4)</code> ?<pre><code>def f(n):
    s = 0
    for k in range(1, n):
        s = s + k
    return s</code></pre>`,
      choix: [R`\(10\)`, R`\(6\)`, R`\(4\)`, R`\(3\)`], bonne: 1,
      explication: R`<code>range(1, 4)</code> parcourt 1, 2, 3 (la borne 4 est exclue) : \(s=1+2+3=6\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Une fonction trigonométrique et un piège logique", points: 4, chapitres: [7, 4, 5, 1],
      enonce: R`<p>Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=\sin x-x\cos x\), et \(\mathcal{C}\) sa courbe représentative.</p>
<ol>
<li>Étudier la parité de \(f\). Interpréter graphiquement.</li>
<li>Montrer que, pour tout réel \(x\), \(f'(x)=x\sin x\).</li>
<li>Étudier le signe de \(f'(x)\) sur \([-\pi;\pi]\) et dresser le tableau de variations de \(f\) sur \([-\pi;\pi]\).</li>
<li>En déduire que, pour tout \(x\in\,]0;\pi]\), \(\dfrac{\sin x}{x}\geqslant\cos x\).</li>
<li>Déterminer une équation de la tangente à \(\mathcal{C}\) au point d'abscisse \(\dfrac{\pi}{2}\).</li>
<li>On considère la proposition : « Si \(g\) est une fonction dérivable sur \(\mathbb{R}\) et si \(g'(a)=0\), alors \(g\) admet un extremum local en \(a\). » Est-elle vraie ? Justifier à l'aide de \(f\). Énoncer sa réciproque (pour \(a\) intérieur à l'intervalle) : est-elle vraie ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\mathbb{R}\) est symétrique par rapport à 0 et \(f(-x)=\sin(-x)-(-x)\cos(-x)=-\sin x+x\cos x=-f(x)\) : \(f\) est <b>impaire</b>, \(\mathcal{C}\) est symétrique par rapport à l'origine. <i>(0,5 pt)</i></li>
<li>\((x\cos x)'=1\times\cos x+x\times(-\sin x)=\cos x-x\sin x\), donc \(f'(x)=\cos x-(\cos x-x\sin x)=x\sin x\). <i>(0,5 pt)</i></li>
<li>Sur \([0;\pi]\) : \(x\geqslant 0\) et \(\sin x\geqslant 0\), donc \(f'(x)\geqslant 0\). Sur \([-\pi;0]\) : \(x\leqslant 0\) et \(\sin x\leqslant 0\), donc \(f'(x)\geqslant 0\). De plus \(f'\) ne s'annule qu'en \(-\pi\), \(0\) et \(\pi\) : \(f\) est strictement croissante sur \([-\pi;\pi]\).<br>
\(f(-\pi)=0-(-\pi)\times(-1)=-\pi\), \(f(0)=0\), \(f(\pi)=0-\pi\times(-1)=\pi\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\pi\)</td><td></td><td>0</td><td></td><td>\(\pi\)</td></tr>
<tr><td>\(f'(x)\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(+\)</td><td>0</td></tr>
<tr><td>\(f\)</td><td>\(-\pi\)</td><td>↗</td><td>0</td><td>↗</td><td>\(\pi\)</td></tr></table>
<i>(1 pt)</i></li>
<li>\(f\) est croissante sur \([0;\pi]\) et \(f(0)=0\), donc \(f(x)\geqslant 0\) pour \(x\in[0;\pi]\) : \(\sin x\geqslant x\cos x\). Pour \(x\gt 0\), on divise par \(x\) sans changer le sens : \(\dfrac{\sin x}{x}\geqslant\cos x\). <i>(0,5 pt)</i></li>
<li>\(f\left(\frac{\pi}{2}\right)=1-\frac{\pi}{2}\times 0=1\) et \(f'\left(\frac{\pi}{2}\right)=\frac{\pi}{2}\times 1=\frac{\pi}{2}\).
\[T : y=\frac{\pi}{2}\left(x-\frac{\pi}{2}\right)+1=\frac{\pi}{2}x+1-\frac{\pi^2}{4}.\]
<i>(0,75 pt)</i></li>
<li>La proposition est <b>fausse</b> : \(f'(0)=0\) mais \(f\) est strictement croissante sur \([-\pi;\pi]\), donc \(f(x)\lt f(0)\) pour \(x\lt 0\) et \(f(x)\gt f(0)\) pour \(x\gt 0\) : pas d'extremum en 0 (\(f'\) s'annule sans changer de signe).<br>
Réciproque : « si \(g\) admet un extremum local en \(a\), intérieur à l'intervalle, alors \(g'(a)=0\) ». Elle est <b>vraie</b> (propriété du cours). L'annulation de la dérivée est donc une condition <b>nécessaire</b> mais pas suffisante d'extremum. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Cercle circonscrit, orthocentre et droite d'Euler", points: 4, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère \(A(-2;0)\), \(B(4;0)\) et \(C(0;4)\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\), \(\overrightarrow{BA}\cdot\overrightarrow{BC}\) et \(\overrightarrow{CA}\cdot\overrightarrow{CB}\). Le triangle \(ABC\) est-il rectangle ?</li>
<li>Montrer que \(\Omega(1;1)\) est le centre du cercle circonscrit \(\Gamma\) au triangle \(ABC\) et donner une équation de \(\Gamma\) sous la forme \(x^2+y^2+ax+by+c=0\).</li>
<li>Déterminer une équation de la hauteur issue de \(A\), puis les coordonnées de l'orthocentre \(H\) du triangle.</li>
<li>Soit \(G\) le centre de gravité de \(ABC\). Montrer que \(\overrightarrow{\Omega H}=3\,\overrightarrow{\Omega G}\). Que peut-on en déduire ?</li>
<li>Déterminer une équation de la tangente à \(\Gamma\) en \(C\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}(6;0)\), \(\overrightarrow{AC}(2;4)\), \(\overrightarrow{BC}(-4;4)\).<br>
\(\overrightarrow{AB}\cdot\overrightarrow{AC}=12\), \(\overrightarrow{BA}\cdot\overrightarrow{BC}=(-6)(-4)+0=24\), \(\overrightarrow{CA}\cdot\overrightarrow{CB}=(-2)\times 4+(-4)\times(-4)=8\).<br>
Aucun n'est nul : le triangle n'est rectangle en aucun sommet (les trois angles sont même aigus, car les produits sont positifs). <i>(0,75 pt)</i></li>
<li>\(\Omega A^2=3^2+1^2=10\), \(\Omega B^2=3^2+(-1)^2=10\), \(\Omega C^2=(-1)^2+3^2=10\) : \(\Omega\) est équidistant des trois sommets, c'est le centre du cercle circonscrit, de rayon \(\sqrt{10}\).<br>
\(\Gamma : (x-1)^2+(y-1)^2=10\iff x^2+y^2-2x-2y-8=0\). <i>(0,75 pt)</i></li>
<li>La hauteur issue de \(A\) est perpendiculaire à \((BC)\) : \(\overrightarrow{BC}(-4;4)\) est normal, d'où \(-4x+4y+c=0\) ; avec \(A\) : \(8+c=0\). Équation : \(-4x+4y-8=0\), soit \(y=x+2\).<br>
La hauteur issue de \(C\) est perpendiculaire à \((AB)\), qui est l'axe des abscisses : c'est la droite \(x=0\).<br>
\(H\) est l'intersection : \(x=0\), \(y=2\), donc \(H(0;2)\). Contrôle : \(\overrightarrow{BH}(-4;2)\cdot\overrightarrow{AC}(2;4)=-8+8=0\). <i>(1 pt)</i></li>
<li>\(G\left(\frac{-2+4+0}{3};\frac{0+0+4}{3}\right)=\left(\frac23;\frac43\right)\). \(\overrightarrow{\Omega H}(-1;1)\) et \(\overrightarrow{\Omega G}\left(-\frac13;\frac13\right)\), donc \(\overrightarrow{\Omega H}=3\,\overrightarrow{\Omega G}\).<br>
Les points \(\Omega\), \(G\), \(H\) sont alignés (c'est la droite d'Euler du triangle). <i>(0,75 pt)</i></li>
<li>La tangente en \(C\) est perpendiculaire au rayon : \(\overrightarrow{\Omega C}(-1;3)\) est normal, d'où \(-x+3y+c=0\) ; avec \(C\) : \(12+c=0\). Tangente : \(-x+3y-12=0\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Suites et exponentielle", points: 3, chapitres: [3, 6],
      enonce: R`<p>Pour tout entier \(n\geqslant 1\), on pose \(u_n=n\,\mathrm{e}^{-n}\) et, pour tout entier \(n\geqslant 0\), \(w_n=\mathrm{e}^{-n}\).</p>
<ol>
<li>Montrer que, pour tout \(n\geqslant 1\), \(\dfrac{u_{n+1}}{u_n}=\dfrac{n+1}{n}\times\dfrac{1}{\mathrm{e}}\).</li>
<li>Montrer que, pour tout \(n\geqslant 1\), \(\dfrac{n+1}{n}\leqslant 2\). En déduire le sens de variation de \((u_n)\).</li>
<li>a) Montrer que \((w_n)\) est géométrique.<br>b) Exprimer \(S_n=w_0+w_1+\dots+w_n\) en fonction de \(n\), puis montrer que \(S_n\lt\dfrac{\mathrm{e}}{\mathrm{e}-1}\) pour tout \(n\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_n\gt 0\) et \(\dfrac{u_{n+1}}{u_n}=\dfrac{(n+1)\,\mathrm{e}^{-n-1}}{n\,\mathrm{e}^{-n}}=\dfrac{n+1}{n}\,\mathrm{e}^{-n-1+n}=\dfrac{n+1}{n}\times\mathrm{e}^{-1}\). <i>(0,75 pt)</i></li>
<li>\(\dfrac{n+1}{n}=1+\dfrac1n\leqslant 1+1=2\) car \(n\geqslant 1\). Comme \(\mathrm{e}\gt 2\) :
\[\frac{u_{n+1}}{u_n}\leqslant\frac{2}{\mathrm{e}}\lt 1.\]
Les termes étant strictement positifs, \(u_{n+1}\lt u_n\) : \((u_n)\) est strictement décroissante. <i>(1 pt)</i></li>
<li>a) \(w_{n+1}=\mathrm{e}^{-n-1}=\mathrm{e}^{-1}\times\mathrm{e}^{-n}=\mathrm{e}^{-1}\,w_n\) : \((w_n)\) est géométrique de raison \(q=\mathrm{e}^{-1}\) et de premier terme \(w_0=1\). <i>(0,25 pt)</i><br>
b) Comme \(q\neq 1\) :
\[S_n=\frac{1-q^{n+1}}{1-q}=\frac{1-\mathrm{e}^{-(n+1)}}{1-\mathrm{e}^{-1}}=\frac{\mathrm{e}-\mathrm{e}^{-n}}{\mathrm{e}-1}\]
(en multipliant numérateur et dénominateur par \(\mathrm{e}\)). Or \(\mathrm{e}^{-n}\gt 0\) et \(\mathrm{e}-1\gt 0\), donc \(S_n\lt\dfrac{\mathrm{e}}{\mathrm{e}-1}\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 4 — Indépendance : démonstration et applications", points: 3, chapitres: [10, 1],
      enonce: R`<p>\(A\) et \(B\) sont deux événements d'un univers \(\Omega\).</p>
<ol>
<li>Démontrer que si \(A\) et \(B\) sont indépendants, alors \(A\) et \(\overline{B}\) sont indépendants.</li>
<li>En déduire que si \(A\) et \(B\) sont indépendants, alors \(\overline{A}\) et \(\overline{B}\) le sont aussi.</li>
<li>On suppose \(P(A)=0{,}4\), \(P(B)=0{,}3\), \(A\) et \(B\) indépendants. Calculer \(P(\overline A\cap\overline B)\) de deux façons, dont l'une utilise \(P(A\cup B)\).</li>
<li>Démontrer que si \(A\) et \(B\) sont incompatibles avec \(P(A)\gt 0\) et \(P(B)\gt 0\), alors ils ne sont pas indépendants. Énoncer la contraposée de ce résultat.</li>
<li>Un local est équipé de deux détecteurs de fumée qui fonctionnent indépendamment ; en cas de fumée, le premier se déclenche avec la probabilité \(0{,}9\), le second avec la probabilité \(0{,}8\). Calculer la probabilité qu'au moins un détecteur se déclenche.</li>
</ol>`,
      correction: R`<ol>
<li>\(A\) est la réunion disjointe de \(A\cap B\) et \(A\cap\overline{B}\), donc \(P(A)=P(A\cap B)+P(A\cap\overline B)\). Par indépendance :
\[P(A\cap\overline B)=P(A)-P(A)P(B)=P(A)\big(1-P(B)\big)=P(A)\,P(\overline B).\]
\(A\) et \(\overline B\) sont indépendants. <i>(0,75 pt)</i></li>
<li>On applique la question 1 au couple \((\overline B, A)\), qui est indépendant : alors \(\overline B\) et \(\overline A\) sont indépendants. <i>(0,5 pt)</i></li>
<li>Par la question 2 : \(P(\overline A\cap\overline B)=0{,}6\times 0{,}7=0{,}42\).<br>
Autrement : \(P(A\cup B)=0{,}4+0{,}3-0{,}4\times 0{,}3=0{,}58\) et \(\overline A\cap\overline B=\overline{A\cup B}\), donc \(P(\overline A\cap\overline B)=1-0{,}58=0{,}42\). <i>(0,5 pt)</i></li>
<li>Incompatibles : \(A\cap B=\varnothing\), donc \(P(A\cap B)=0\). Or \(P(A)P(B)\gt 0\). Donc \(P(A\cap B)\neq P(A)P(B)\) : pas indépendants.<br>
Contraposée : « si \(A\) et \(B\) sont indépendants et de probabilités non nulles, alors ils ne sont pas incompatibles ». <i>(0,75 pt)</i></li>
<li>Notons \(D_1\), \(D_2\) les déclenchements. « Au moins un » est le contraire de \(\overline{D_1}\cap\overline{D_2}\), et \(\overline{D_1}\), \(\overline{D_2}\) sont indépendants (question 2) :
\[P=1-0{,}1\times 0{,}2=1-0{,}02=0{,}98.\]
<i>(0,5 pt)</i></li>
</ol>
<div class="warn">Ne confonds pas <b>incompatibles</b> (\(A\cap B=\varnothing\)) et <b>indépendants</b> (\(P(A\cap B)=P(A)P(B)\)) : sauf cas d'une probabilité nulle, ces deux notions s'excluent.</div>
<p><b>Total : 3 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°5", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 8, 9, 10],
  automatismes: [
    { q: R`\(\dfrac{3^{5}\times 3^{-2}}{9}=\)`,
      choix: [R`\(3\)`, R`\(9\)`, R`\(3^{-9}\)`, R`\(\dfrac13\)`], bonne: 0,
      explication: R`\(3^5\times 3^{-2}=3^{3}\) et \(9=3^2\), donc le quotient vaut \(3^{3-2}=3\).` },
    { q: R`Pour tout réel \(x\gt 0\), \(\dfrac1x-\dfrac{1}{x+1}=\)`,
      choix: [R`\(-\dfrac{1}{x(x+1)}\)`, R`\(\dfrac{1}{x(x+1)}\)`, R`\(-1\)`, R`\(\dfrac{2x+1}{x(x+1)}\)`], bonne: 1,
      explication: R`Même dénominateur : \(\dfrac{(x+1)-x}{x(x+1)}=\dfrac{1}{x(x+1)}\).` },
    { q: R`Pour tout réel \(x\), le trinôme \(x^2+x+1\) est :`,
      choix: [R`strictement positif`, R`négatif entre ses racines`, R`nul en \(x=-1\)`, R`de signe variable`], bonne: 0,
      explication: R`\(\Delta=1-4=-3\lt 0\) et \(a=1\gt 0\) : le trinôme est toujours du signe de \(a\), donc strictement positif.` },
    { q: R`La dérivée de \(f(x)=x\,\mathrm{e}^{x}\) est :`,
      choix: [R`\(\mathrm{e}^{x}\)`, R`\(x\,\mathrm{e}^{x}\)`, R`\((x+1)\,\mathrm{e}^{x}\)`, R`\((x-1)\,\mathrm{e}^{x}\)`], bonne: 2,
      explication: R`\((uv)'=u'v+uv'\) : \(1\times\mathrm{e}^x+x\,\mathrm{e}^x=(x+1)\,\mathrm{e}^x\).` },
    { q: R`Pour tout réel \(x\), \(\dfrac{\mathrm{e}^{2x}-1}{\mathrm{e}^{x}+1}=\)`,
      choix: [R`\(\mathrm{e}^{x}-1\)`, R`\(\mathrm{e}^{x}+1\)`, R`\(\mathrm{e}^{2x}\)`, R`\(\mathrm{e}^{x}-\mathrm{e}^{-1}\)`], bonne: 0,
      explication: R`\(\mathrm{e}^{2x}-1=(\mathrm{e}^{x})^2-1^2=(\mathrm{e}^x-1)(\mathrm{e}^x+1)\), puis on simplifie par \(\mathrm{e}^x+1\neq 0\).` },
    { q: R`Pour tout réel \(x\), \(\sin\left(x+\dfrac{\pi}{2}\right)=\)`,
      choix: [R`\(\sin x\)`, R`\(-\sin x\)`, R`\(-\cos x\)`, R`\(\cos x\)`], bonne: 3,
      explication: R`Rotation d'un quart de tour sur le cercle trigonométrique : \(\sin\left(x+\frac{\pi}{2}\right)=\cos x\) (test : \(x=0\) donne \(\sin\frac{\pi}{2}=1=\cos 0\)).` },
    { q: R`Pour \(u_n=n^2-10n\), on a \(u_{n+1}-u_n=\)`,
      choix: [R`\(2n-9\)`, R`\(2n+1\)`, R`\(-9\)`, R`\(2n-11\)`], bonne: 0,
      explication: R`\((n+1)^2-10(n+1)-n^2+10n=2n+1-10=2n-9\). La suite décroît jusqu'à \(u_5\) puis croît.` },
    { q: R`\(P(A)=0{,}5\), \(P_A(B)=0{,}6\) et \(P(B)=0{,}5\). Alors \(P_{\overline A}(B)=\)`,
      choix: [R`\(0{,}4\)`, R`\(0{,}5\)`, R`\(0{,}2\)`, R`\(0{,}6\)`], bonne: 0,
      explication: R`\(P(B)=0{,}5\times 0{,}6+0{,}5\times P_{\overline A}(B)\), donc \(0{,}5\,P_{\overline A}(B)=0{,}2\) et \(P_{\overline A}(B)=0{,}4\).` },
    { q: R`Avec \(A(1;3)\) et \(B(4;-1)\) dans un repère orthonormé, \(AB=\)`,
      choix: [R`\(\sqrt{13}\)`, R`\(5\)`, R`\(7\)`, R`\(25\)`], bonne: 1,
      explication: R`\(AB=\sqrt{3^2+(-4)^2}=\sqrt{25}=5\).` },
    { q: R`Les droites \(d_1 : 2x-y+3=0\) et \(d_2 : x+2y-1=0\) sont :`,
      choix: [R`parallèles`, R`confondues`, R`perpendiculaires`, R`sécantes non perpendiculaires`], bonne: 2,
      explication: R`Vecteurs normaux \((2;-1)\) et \((1;2)\) : produit scalaire \(2-2=0\), les droites sont perpendiculaires.` },
    { q: R`\(E(X)=2\) et \(E(X^2)=7\). L'écart type de \(X\) vaut :`,
      choix: [R`\(3\)`, R`\(\sqrt3\)`, R`\(\sqrt5\)`, R`\(\sqrt{7}\)`], bonne: 1,
      explication: R`\(V(X)=E(X^2)-E(X)^2=7-4=3\), donc \(\sigma(X)=\sqrt3\).` },
    { q: R`Pour un entier \(n\), laquelle de ces affirmations est vraie ?`,
      choix: [R`« \(n\) pair » est une condition suffisante pour que \(n\) soit multiple de 6`, R`« \(n\) pair » est une condition nécessaire pour que \(n\) soit multiple de 6`, R`« \(n\) multiple de 3 » est une condition suffisante pour que \(n\) soit multiple de 6`, R`« \(n\) multiple de 6 » est une condition nécessaire pour que \(n\) soit pair`], bonne: 1,
      explication: R`Si \(n\) est multiple de 6, il est pair : être pair est <b>nécessaire</b>. Ce n'est pas suffisant (\(n=4\)).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Une inégalité fondamentale et un encadrement de e", points: 5, chapitres: [6, 5, 3],
      enonce: R`<ol>
<li>Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \(g(x)=\mathrm{e}^{x}-x-1\). Étudier les variations de \(g\) et en déduire que, pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant 1+x\). Donner une interprétation graphique.</li>
<li>Soit \(n\) un entier, \(n\geqslant 1\). En appliquant l'inégalité précédente à \(x=\dfrac1n\), montrer que \(\left(1+\dfrac1n\right)^{n}\leqslant\mathrm{e}\).</li>
<li>En l'appliquant à \(x=-\dfrac{1}{n+1}\), montrer que \(\left(1+\dfrac1n\right)^{n+1}\geqslant\mathrm{e}\).</li>
<li>On pose \(u_n=\left(1+\dfrac1n\right)^{n}\) pour \(n\geqslant 1\). Montrer que \(0\leqslant\mathrm{e}-u_n\leqslant\dfrac{\mathrm{e}}{n}\).</li>
<li>Quel encadrement de \(\mathrm{e}\) par deux nombres rationnels obtient-on avec \(n=2\) ? À partir de quelle valeur de \(n\) l'inégalité de la question 4 garantit-elle que \(u_n\) est une valeur approchée de \(\mathrm{e}\) à \(10^{-3}\) près ? (On utilisera \(\mathrm{e}\lt 3\).)</li>
</ol>`,
      correction: R`<ol>
<li>\(g'(x)=\mathrm{e}^x-1\). Comme \(\exp\) est strictement croissante et \(\mathrm{e}^0=1\) : \(g'(x)\lt 0\) si \(x\lt 0\), \(g'(x)\gt 0\) si \(x\gt 0\). \(g\) est décroissante sur \(]-\infty;0]\), croissante sur \([0;+\infty[\) : son minimum est \(g(0)=1-0-1=0\).<br>
Donc \(g(x)\geqslant 0\), c'est-à-dire \(\mathrm{e}^x\geqslant 1+x\), pour tout réel \(x\).<br>
Interprétation : \(y=x+1\) est la tangente à la courbe de \(\exp\) en 0, et la courbe est <b>au-dessus</b> de cette tangente. <i>(1,25 pt)</i></li>
<li>Avec \(x=\frac1n\) : \(0\lt 1+\frac1n\leqslant\mathrm{e}^{1/n}\). Les deux membres étant positifs et la fonction \(t\mapsto t^n\) croissante sur \([0;+\infty[\) :
\[\left(1+\frac1n\right)^n\leqslant\left(\mathrm{e}^{1/n}\right)^n=\mathrm{e}^{1}=\mathrm{e}.\]
<i>(1 pt)</i></li>
<li>Avec \(x=-\frac{1}{n+1}\) : \(1-\frac{1}{n+1}=\frac{n}{n+1}\leqslant\mathrm{e}^{-1/(n+1)}\). Les deux membres sont strictement positifs ; la fonction inverse étant décroissante sur \(]0;+\infty[\) :
\[\frac{n+1}{n}\geqslant\frac{1}{\mathrm{e}^{-1/(n+1)}}=\mathrm{e}^{1/(n+1)}.\]
On élève à la puissance \(n+1\) (nombres positifs) : \(\left(1+\frac1n\right)^{n+1}\geqslant\mathrm{e}\). <i>(1,25 pt)</i></li>
<li>D'après 2, \(u_n\leqslant\mathrm{e}\), donc \(\mathrm{e}-u_n\geqslant 0\). D'après 3, \(\mathrm{e}\leqslant u_n\left(1+\frac1n\right)=u_n+\frac{u_n}{n}\), donc \(\mathrm{e}-u_n\leqslant\frac{u_n}{n}\leqslant\frac{\mathrm{e}}{n}\) (car \(u_n\leqslant\mathrm{e}\)). <i>(1 pt)</i></li>
<li>Avec \(n=2\) : \(\left(\frac32\right)^2\leqslant\mathrm{e}\leqslant\left(\frac32\right)^3\), soit \(\dfrac94\leqslant\mathrm{e}\leqslant\dfrac{27}{8}\) (\(2{,}25\leqslant\mathrm{e}\leqslant 3{,}375\)).<br>
Comme \(\frac{\mathrm{e}}{n}\lt\frac3n\), il suffit que \(\frac3n\leqslant 10^{-3}\), soit \(n\geqslant 3000\). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">L'inégalité \(\mathrm{e}^x\geqslant 1+x\) est un grand classique : retiens la méthode (étude de la différence) et son interprétation (courbe au-dessus de sa tangente en 0).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Dépistage : une fonction de la prévalence", points: 4, chapitres: [10, 4, 1],
      enonce: R`<p>Un test de dépistage d'une maladie a les caractéristiques suivantes : si une personne est malade, le test est positif avec la probabilité \(0{,}99\) ; si elle n'est pas malade, le test est positif avec la probabilité \(0{,}02\). On choisit une personne au hasard dans une population où la proportion de malades est \(p\in\,]0;1]\). On note \(M\) : « la personne est malade » et \(T\) : « le test est positif ».</p>
<ol>
<li>Dans cette question, \(p=0{,}01\).<br>
a) Calculer \(P(T)\), puis \(P_T(M)\).<br>
b) Un journaliste écrit : « le test est fiable à 99 %, donc une personne testée positive a 99 % de chances d'être malade ». Commenter.</li>
<li>Dans le cas général, montrer que \(P_T(M)=f(p)\) où \(f(p)=\dfrac{99p}{97p+2}\).</li>
<li>Étudier les variations de \(f\) sur \(]0;1]\). Interpréter.</li>
<li>Déterminer les valeurs de \(p\) pour lesquelles \(P_T(M)\geqslant 0{,}9\).</li>
</ol>`,
      correction: R`<ol>
<li>a) Probabilités totales : \(P(T)=0{,}01\times 0{,}99+0{,}99\times 0{,}02=0{,}0099+0{,}0198=0{,}0297\).
\[P_T(M)=\frac{P(M\cap T)}{P(T)}=\frac{0{,}0099}{0{,}0297}=\frac13.\]
<i>(0,75 pt)</i><br>
b) Le journaliste confond \(P_M(T)=0{,}99\) (probabilité d'être positif <i>sachant</i> malade) et \(P_T(M)\) (probabilité d'être malade <i>sachant</i> positif), qui ne vaut ici qu'environ \(33\,\%\) : la maladie étant rare, la plupart des positifs sont des faux positifs. <i>(0,5 pt)</i></li>
<li>\(P(M\cap T)=0{,}99p\) et \(P(T)=0{,}99p+0{,}02(1-p)=0{,}97p+0{,}02\). Donc
\[P_T(M)=\frac{0{,}99p}{0{,}97p+0{,}02}=\frac{99p}{97p+2}\]
(en multipliant numérateur et dénominateur par 100). <i>(0,75 pt)</i></li>
<li>\(f=\frac uv\) avec \(u=99p\), \(v=97p+2\gt 0\) sur \(]0;1]\) :
\[f'(p)=\frac{99(97p+2)-99p\times 97}{(97p+2)^2}=\frac{198}{(97p+2)^2}\gt 0.\]
\(f\) est strictement croissante sur \(]0;1]\) : plus la maladie est fréquente, plus un test positif est probant. (\(f(1)=1\) : si tout le monde est malade, un positif est malade.) <i>(1 pt)</i></li>
<li>Comme \(97p+2\gt 0\) :
\[\frac{99p}{97p+2}\geqslant\frac{9}{10}\iff 990p\geqslant 873p+18\iff 117p\geqslant 18\iff p\geqslant\frac{18}{117}=\frac{2}{13}.\]
Il faut \(p\in\left[\frac{2}{13};1\right]\), soit une prévalence d'au moins \(15{,}4\,\%\) environ. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Lignes de niveau du produit scalaire et tangentes", points: 5, chapitres: [8, 9, 2],
      enonce: R`<p>Dans un repère orthonormé, on considère \(A(1;2)\) et \(B(5;-2)\). Pour tout réel \(k\), on note \(\mathcal{E}_k\) l'ensemble des points \(M(x;y)\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=k\).</p>
<ol>
<li>Montrer que \(M(x;y)\in\mathcal{E}_k\iff(x-3)^2+y^2=k+8\).</li>
<li>Déterminer, selon \(k\), la nature de \(\mathcal{E}_k\). Que vaut \(\mathcal{E}_0\) ?</li>
<li>On pose \(\mathcal{C}=\mathcal{E}_2\) et \(d\) la droite d'équation \(x+3y-13=0\).<br>
a) Montrer que \(d\) et \(\mathcal{C}\) ont un unique point commun \(H\), dont on donnera les coordonnées.<br>
b) Vérifier que \(\overrightarrow{IH}\) est normal à \(d\), où \(I(3;0)\). Que représente \(d\) pour \(\mathcal{C}\) ?</li>
<li>Pour tout réel \(c\), on note \(d_c\) la droite d'équation \(x+3y+c=0\).<br>
a) Montrer que les ordonnées des points communs à \(d_c\) et \(\mathcal{C}\) sont les solutions de \(10y^2+6(c+3)y+(c+3)^2-10=0\).<br>
b) En déduire, selon \(c\), le nombre de points d'intersection de \(d_c\) et \(\mathcal{C}\), et déterminer les deux droites \(d_c\) tangentes à \(\mathcal{C}\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{MA}(1-x;2-y)\), \(\overrightarrow{MB}(5-x;-2-y)\) :
\[\overrightarrow{MA}\cdot\overrightarrow{MB}=(1-x)(5-x)+(2-y)(-2-y)=x^2-6x+5+y^2-4=x^2-6x+y^2+1.\]
Or \(x^2-6x=(x-3)^2-9\), donc \(\overrightarrow{MA}\cdot\overrightarrow{MB}=(x-3)^2+y^2-8\), et \(\overrightarrow{MA}\cdot\overrightarrow{MB}=k\iff(x-3)^2+y^2=k+8\). <i>(1 pt)</i></li>
<li>\(I(3;0)\) est le milieu de \([AB]\) et \((x-3)^2+y^2=IM^2\).
<ul><li>\(k\lt -8\) : \(\mathcal{E}_k=\varnothing\) ;</li><li>\(k=-8\) : \(\mathcal{E}_k=\{I\}\) ;</li><li>\(k\gt -8\) : cercle de centre \(I\) et de rayon \(\sqrt{k+8}\).</li></ul>
\(\mathcal{E}_0\) : cercle de centre \(I\) et de rayon \(\sqrt8=2\sqrt2\) ; c'est le cercle de diamètre \([AB]\) (\(AB=\sqrt{32}=4\sqrt2\)). <i>(1 pt)</i></li>
<li>a) \(\mathcal{C} : (x-3)^2+y^2=10\). Sur \(d\), \(x=13-3y\) ; en remplaçant : \((10-3y)^2+y^2=10\iff 10y^2-60y+90=0\iff y^2-6y+9=0\iff(y-3)^2=0\).<br>
Une seule solution \(y=3\), d'où \(x=13-9=4\) : un unique point commun \(H(4;3)\). (Contrôle : \(\overrightarrow{HA}(-3;-1)\cdot\overrightarrow{HB}(1;-5)=-3+5=2\).) <i>(0,75 pt)</i><br>
b) \(\overrightarrow{IH}(1;3)\), qui est bien un vecteur normal de \(d : x+3y-13=0\). La droite \(d\) est perpendiculaire au rayon \([IH]\) en \(H\) : c'est la <b>tangente</b> à \(\mathcal{C}\) en \(H\). <i>(0,5 pt)</i></li>
<li>a) Sur \(d_c\), \(x=-c-3y\), donc \(x-3=-(3y+c+3)\). En remplaçant : \((3y+c+3)^2+y^2=10\), soit
\[9y^2+6(c+3)y+(c+3)^2+y^2-10=0\iff 10y^2+6(c+3)y+(c+3)^2-10=0.\]
<i>(0,5 pt)</i><br>
b) À chaque solution \(y\) correspond un unique point (\(x=-c-3y\)). Discriminant :
\[\Delta=36(c+3)^2-40\big((c+3)^2-10\big)=400-4(c+3)^2=4\big(10-(c+3)\big)\big(10+(c+3)\big)=4(7-c)(c+13).\]
<ul><li>\(-13\lt c\lt 7\) : \(\Delta\gt 0\), deux points d'intersection ;</li>
<li>\(c=-13\) ou \(c=7\) : un point (droite tangente) ;</li>
<li>\(c\lt -13\) ou \(c\gt 7\) : aucun point.</li></ul>
Les tangentes de vecteur normal \((1;3)\) sont \(d_{-13}=d\) et \(d_7 : x+3y+7=0\), cette dernière touchant \(\mathcal{C}\) au symétrique de \(H\) par rapport à \(I\), \(H'(2;-3)\) : \(2-9+7=0\). <i>(1,25 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°6", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 10, 11],
  automatismes: [
    { q: R`\(\sqrt{50}-\sqrt{18}=\)`,
      choix: [R`\(\sqrt{32}\)`, R`\(2\sqrt2\)`, R`\(4\sqrt2\)`, R`\(8\)`], bonne: 1,
      explication: R`\(\sqrt{50}=5\sqrt2\) et \(\sqrt{18}=3\sqrt2\), donc la différence vaut \(2\sqrt2\). Piège : \(\sqrt a-\sqrt b\neq\sqrt{a-b}\).` },
    { q: R`L'ensemble des solutions de \((x-1)(x+3)\lt 0\) est :`,
      choix: [R`\(]-3;1[\)`, R`\(]-1;3[\)`, R`\(]-\infty;-3[\,\cup\,]1;+\infty[\)`, R`\(]-\infty;1[\)`], bonne: 0,
      explication: R`Trinôme de coefficient dominant \(1\gt 0\) et de racines \(-3\) et \(1\) : il est négatif entre les racines.` },
    { q: R`La dérivée de \(f(x)=\dfrac{3}{x}\) sur \(]0;+\infty[\) est :`,
      choix: [R`\(\dfrac{3}{x^2}\)`, R`\(-\dfrac{1}{x^2}\)`, R`\(\dfrac{1}{3x^2}\)`, R`\(-\dfrac{3}{x^2}\)`], bonne: 3,
      explication: R`\(\left(\frac1x\right)'=-\frac{1}{x^2}\), et la constante 3 se conserve : \(-\frac{3}{x^2}\).` },
    { q: R`Pour tout réel \(x\), \(\dfrac{\mathrm{e}^{x+1}}{\mathrm{e}^{x-1}}=\)`,
      choix: [R`\(1\)`, R`\(\mathrm{e}\)`, R`\(\mathrm{e}^{2}\)`, R`\(\mathrm{e}^{2x}\)`], bonne: 2,
      explication: R`\(\mathrm{e}^{(x+1)-(x-1)}=\mathrm{e}^{2}\).` },
    { q: R`La tangente à la parabole \(y=x^2\) au point d'abscisse 1 a pour équation :`,
      choix: [R`\(y=2x\)`, R`\(y=2x-1\)`, R`\(y=x\)`, R`\(y=2x+1\)`], bonne: 1,
      explication: R`\(y=f'(1)(x-1)+f(1)=2(x-1)+1=2x-1\).` },
    { q: R`Les solutions dans \([0;2\pi[\) de \(\cos x=-\dfrac{\sqrt3}{2}\) sont :`,
      choix: [R`\(\dfrac{\pi}{6}\) et \(\dfrac{11\pi}{6}\)`, R`\(\dfrac{5\pi}{6}\) et \(\dfrac{7\pi}{6}\)`, R`\(\dfrac{2\pi}{3}\) et \(\dfrac{4\pi}{3}\)`, R`\(\dfrac{5\pi}{6}\) seulement`], bonne: 1,
      explication: R`\(\cos\frac{\pi}{6}=\frac{\sqrt3}{2}\), donc \(\cos\left(\pi\pm\frac{\pi}{6}\right)=-\frac{\sqrt3}{2}\) : \(\frac{5\pi}{6}\) et \(\frac{7\pi}{6}\).` },
    { q: R`\(1+3+3^2+\dots+3^5=\)`,
      choix: [R`\(243\)`, R`\(121\)`, R`\(728\)`, R`\(364\)`], bonne: 3,
      explication: R`Somme géométrique de 6 termes : \(\dfrac{3^6-1}{3-1}=\dfrac{728}{2}=364\). Attention au nombre de termes (de \(3^0\) à \(3^5\)).` },
    { q: R`On lance deux pièces équilibrées. La probabilité d'obtenir au moins un « pile » est :`,
      choix: [R`\(\dfrac12\)`, R`\(\dfrac23\)`, R`\(\dfrac34\)`, R`\(1\)`], bonne: 2,
      explication: R`Événement contraire « deux faces » : \(\frac12\times\frac12=\frac14\), donc \(1-\frac14=\frac34\).` },
    { q: R`Un vecteur normal à la droite d'équation \(y=2x+1\) est :`,
      choix: [R`\(\vec n(1;2)\)`, R`\(\vec n(2;1)\)`, R`\(\vec n(2;-1)\)`, R`\(\vec n(-1;2)\)`], bonne: 2,
      explication: R`\(y=2x+1\iff 2x-y+1=0\) : vecteur normal \((a;b)=(2;-1)\). \((1;2)\) est un vecteur <i>directeur</i>.` },
    { q: R`Laquelle de ces propositions est vraie ?`,
      choix: [R`« il existe un réel \(y\) tel que, pour tout réel \(x\), \(y\gt x\) »`, R`« pour tout réel \(x\), il existe un réel \(y\) tel que \(y\gt x\) »`, R`« pour tout réel \(x\), \(x^2\gt 0\) »`, R`« il existe un réel \(x\) tel que \(x^2=-1\) »`], bonne: 1,
      explication: R`Pour tout \(x\), \(y=x+1\) convient. L'ordre des quantificateurs compte : aucun réel ne dépasse <i>tous</i> les réels. \(x^2\gt 0\) est faux pour \(x=0\).` },
    { q: R`\(E(X)=5\). Alors \(E(3X-2)=\)`,
      choix: [R`\(13\)`, R`\(15\)`, R`\(43\)`, R`\(3\)`], bonne: 0,
      explication: R`Linéarité : \(E(aX+b)=aE(X)+b=15-2=13\).` },
    { q: R`Que contient <code>L</code> après l'instruction <code>L = [k**2 for k in range(4)]</code> ?`,
      choix: [R`<code>[1, 4, 9, 16]</code>`, R`<code>[0, 1, 4, 9]</code>`, R`<code>[0, 2, 4, 6]</code>`, R`<code>[0, 1, 4, 9, 16]</code>`], bonne: 1,
      explication: R`<code>range(4)</code> donne 0, 1, 2, 3 et <code>**</code> est la puissance : \(0, 1, 4, 9\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Composition d'une urne et jeu équitable", points: 5, chapitres: [11, 10, 2],
      enonce: R`<p>Une urne contient 10 boules indiscernables au toucher, dont \(n\) rouges (\(n\) entier, \(0\leqslant n\leqslant 10\)), les autres étant blanches. On tire une boule, on note sa couleur, on la <b>remet</b> dans l'urne, puis on tire une seconde boule. On note \(X\) le nombre de boules rouges obtenues et \(p=\dfrac{n}{10}\).</p>
<ol>
<li>Dans cette question, \(n=4\). Donner la loi de \(X\), puis calculer \(E(X)\) et \(V(X)\).</li>
<li>Dans le cas général, montrer que \(P(X=0)=(1-p)^2\), \(P(X=1)=2p(1-p)\) et \(P(X=2)=p^2\).</li>
<li>Montrer que \(E(X)=2p\) et \(V(X)=2p(1-p)\).</li>
<li>Pour quelle composition de l'urne la probabilité d'obtenir exactement une boule rouge est-elle maximale ?</li>
<li>On joue : on gagne 2 € si l'on obtient exactement une boule rouge, et on perd 1 € sinon. On note \(G\) le gain algébrique.<br>
a) Montrer que \(E(G)=\dfrac{3n(10-n)}{50}-1\).<br>
b) Déterminer les valeurs de \(n\) pour lesquelles le jeu est favorable au joueur. Peut-il être équitable ?</li>
</ol>`,
      correction: R`<ol>
<li>Tirages avec remise, donc indépendants, avec \(P(R)=0{,}4\) à chaque tirage.<br>
\(P(X=0)=0{,}6^2=0{,}36\) ; \(P(X=1)=2\times 0{,}4\times 0{,}6=0{,}48\) (deux chemins : RB et BR) ; \(P(X=2)=0{,}4^2=0{,}16\).<br>
\(E(X)=0{,}48+2\times 0{,}16=0{,}8\) ; \(E(X^2)=0{,}48+4\times 0{,}16=1{,}12\) ; \(V(X)=1{,}12-0{,}8^2=0{,}48\). <i>(1 pt)</i></li>
<li>Avec remise, les deux tirages sont indépendants, \(P(R)=p\) et \(P(B)=1-p\) à chaque tirage. \(X=0\) correspond à BB, \(X=2\) à RR et \(X=1\) aux deux issues RB et BR, d'où \(P(X=1)=p(1-p)+(1-p)p=2p(1-p)\). <i>(0,75 pt)</i></li>
<li>\(E(X)=2p(1-p)+2p^2=2p\).<br>
\(E(X^2)=2p(1-p)+4p^2=2p+2p^2\), donc \(V(X)=2p+2p^2-4p^2=2p-2p^2=2p(1-p)\). <i>(1 pt)</i></li>
<li>\(P(X=1)=2p(1-p)=-2p^2+2p\) est un trinôme en \(p\) de coefficient dominant négatif : il est maximal en \(p=-\frac{b}{2a}=\frac{-2}{-4}=\frac12\). L'urne doit contenir <b>5 boules rouges</b> (et alors \(P(X=1)=\frac12\)). <i>(0,75 pt)</i></li>
<li>a) Notons \(q=P(X=1)=2\times\frac{n}{10}\times\frac{10-n}{10}=\frac{n(10-n)}{50}\). \(G\) vaut 2 avec probabilité \(q\) et \(-1\) avec probabilité \(1-q\) :
\[E(G)=2q-(1-q)=3q-1=\frac{3n(10-n)}{50}-1.\]
<i>(0,5 pt)</i><br>
b) \(E(G)\gt 0\iff n(10-n)\gt\frac{50}{3}\). Comme \(n(10-n)\) est entier et \(\frac{50}{3}\approx 16{,}7\), cela équivaut à \(n(10-n)\geqslant 17\), soit \(-n^2+10n-17\geqslant 0\). Les racines de ce trinôme sont \(5\pm\sqrt8\), avec \(2\lt 5-\sqrt8\lt 3\) et \(7\lt 5+\sqrt8\lt 8\) (car \(2\lt\sqrt8\lt 3\)). Le trinôme est positif entre ses racines : \(n\in\{3;4;5;6;7\}\).<br>
Contrôle : \(n=2\) donne \(n(10-n)=16\) (défavorable), \(n=3\) donne \(21\) (favorable).<br>
Le jeu n'est <b>jamais équitable</b> : il faudrait \(n(10-n)=\frac{50}{3}\), qui n'est pas entier. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Suite récurrente, terme général et débogage", points: 4, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=2\) et, pour tout entier naturel \(n\), \(u_{n+1}=2u_n-n\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\), \(u_3\).</li>
<li>Un élève écrit la fonction suivante pour calculer \(u_n\) :
<pre><code>def u(n):
    a = 2
    for k in range(n):
        a = 2*a - n
    return a</code></pre>
Que renvoie <code>u(2)</code> ? Corriger l'erreur.</li>
<li>On pose \(v_n=u_n-n-1\). Montrer que \((v_n)\) est géométrique, puis que \(u_n=2^n+n+1\).</li>
<li>Étudier le sens de variation de \((u_n)\).</li>
<li>Calculer \(S_n=u_0+u_1+\dots+u_n\) en fonction de \(n\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=2\times 2-0=4\), \(u_2=2\times 4-1=7\), \(u_3=2\times 7-2=12\). <i>(0,5 pt)</i></li>
<li>Avec \(n=2\), la boucle effectue deux fois <code>a = 2*a - 2</code> : \(a=2\times 2-2=2\), puis \(a=2\times 2-2=2\). La fonction renvoie <b>2</b>, au lieu de \(u_2=7\).<br>
Erreur : à l'étape \(k\), on calcule \(u_{k+1}=2u_k-k\) ; il faut donc écrire <code>a = 2*a - k</code>. <i>(0,75 pt)</i></li>
<li>\(v_{n+1}=u_{n+1}-(n+1)-1=2u_n-n-n-2=2u_n-2n-2=2(u_n-n-1)=2v_n\).<br>
\((v_n)\) est géométrique de raison 2 et de premier terme \(v_0=2-0-1=1\), donc \(v_n=2^n\) et \(u_n=v_n+n+1=2^n+n+1\). (Contrôle : \(u_3=8+3+1=12\).) <i>(1 pt)</i></li>
<li>\(u_{n+1}-u_n=2^{n+1}+n+2-2^n-n-1=2^n+1\gt 0\) : \((u_n)\) est strictement croissante. <i>(0,5 pt)</i></li>
<li>On sépare la somme en trois :
\[S_n=\sum_{k=0}^{n}2^k+\sum_{k=0}^{n}k+\sum_{k=0}^{n}1=(2^{n+1}-1)+\frac{n(n+1)}{2}+(n+1).\]
Comme \(\frac{n(n+1)}{2}+(n+1)=\frac{(n+1)(n+2)}{2}\) : \(S_n=2^{n+1}+\dfrac{(n+1)(n+2)}{2}-1\). Contrôle : \(S_1=4+3-1=6=u_0+u_1\). <i>(1,25 pt)</i></li>
</ol>
<div class="warn">La somme \(\sum_{k=0}^{n}1\) compte les termes : il y en a \(n+1\), pas \(n\).</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Fonction cubique : tangente passant par un point de la courbe", points: 5, chapitres: [4, 5, 2],
      enonce: R`<p>Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=x^3-3x+1\), et \(\mathcal{C}\) sa courbe représentative. On note \(A\) le point de \(\mathcal{C}\) d'abscisse 1.</p>
<ol>
<li>Étudier les variations de \(f\) sur \(\mathbb{R}\) (limites non demandées). Préciser les extremums locaux.</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(-\frac12\).</li>
<li>Vérifier que \(T\) passe par \(A\).</li>
<li>Soit \(a\) un réel et \(T_a\) la tangente à \(\mathcal{C}\) au point d'abscisse \(a\).<br>
a) Montrer que \(T_a\) passe par \(A\) si et seulement si \(2a^3-3a^2+1=0\).<br>
b) Vérifier que \(2a^3-3a^2+1=(a-1)^2(2a+1)\) et conclure : quelles tangentes à \(\mathcal{C}\) passent par \(A\) ?</li>
<li>Étudier la position relative de \(\mathcal{C}\) et de \(T\). <i>(On pourra vérifier que \(x^3-\frac34x-\frac14=(x-1)\left(x+\frac12\right)^2\).)</i></li>
</ol>`,
      correction: R`<ol>
<li>\(f'(x)=3x^2-3=3(x-1)(x+1)\) : positif à l'extérieur de \([-1;1]\), négatif à l'intérieur. \(f(-1)=-1+3+1=3\), \(f(1)=1-3+1=-1\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>1</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↗</td><td>3</td><td>↘</td><td>\(-1\)</td><td>↗</td><td></td></tr></table>
Maximum local 3 en \(-1\), minimum local \(-1\) en 1. <i>(1 pt)</i></li>
<li>\(f\left(-\frac12\right)=-\frac18+\frac32+1=\frac{19}{8}\) et \(f'\left(-\frac12\right)=\frac34-3=-\frac94\).
\[T : y=-\frac94\left(x+\frac12\right)+\frac{19}{8}=-\frac94x-\frac98+\frac{19}{8}=-\frac94x+\frac54.\]
<i>(0,75 pt)</i></li>
<li>\(A(1;f(1))=A(1;-1)\). Pour \(x=1\) : \(-\frac94+\frac54=-1\) : \(A\in T\). <i>(0,25 pt)</i></li>
<li>a) \(T_a : y=(3a^2-3)(x-a)+a^3-3a+1\). \(A\in T_a\iff -1=(3a^2-3)(1-a)+a^3-3a+1\). Or
\[(3a^2-3)(1-a)+a^3-3a+1=3a^2-3a^3-3+3a+a^3-3a+1=-2a^3+3a^2-2.\]
Donc \(A\in T_a\iff -1=-2a^3+3a^2-2\iff 2a^3-3a^2+1=0\). <i>(1 pt)</i><br>
b) \((a-1)^2(2a+1)=(a^2-2a+1)(2a+1)=2a^3+a^2-4a^2-2a+2a+1=2a^3-3a^2+1\).<br>
Un produit est nul si et seulement si l'un des facteurs l'est : \(a=1\) ou \(a=-\frac12\). Exactement <b>deux</b> tangentes passent par \(A\) : la tangente en \(A\) lui-même (\(y=-1\), car \(f'(1)=0\)) et la tangente \(T\) au point d'abscisse \(-\frac12\). <i>(0,75 pt)</i></li>
<li>\(f(x)-\left(-\frac94x+\frac54\right)=x^3-3x+1+\frac94x-\frac54=x^3-\frac34x-\frac14\).<br>
Vérification : \((x-1)\left(x+\frac12\right)^2=(x-1)\left(x^2+x+\frac14\right)=x^3+x^2+\frac14x-x^2-x-\frac14=x^3-\frac34x-\frac14\).<br>
Comme \(\left(x+\frac12\right)^2\geqslant 0\), la différence a le signe de \(x-1\) (et s'annule en \(-\frac12\) et en 1) :
<ul><li>pour \(x\lt 1\), \(x\neq-\frac12\) : \(\mathcal{C}\) est en dessous de \(T\) ;</li>
<li>pour \(x\gt 1\) : \(\mathcal{C}\) est au-dessus de \(T\) ;</li>
<li>\(\mathcal{C}\) et \(T\) se rencontrent aux points d'abscisses \(-\frac12\) (point de contact) et 1 (point \(A\)).</li></ul>
<i>(1,25 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°7", duree: "2 h", calculatrice: false,
  chapitres: [3, 4, 5, 6, 7, 8, 10, 11],
  automatismes: [
    { q: R`\(\dfrac{1}{\sqrt2-1}=\)`,
      choix: [R`\(\sqrt2-1\)`, R`\(\sqrt2+1\)`, R`\(\dfrac{\sqrt2}{2}-1\)`, R`\(1-\sqrt2\)`], bonne: 1,
      explication: R`On multiplie par la quantité conjuguée : \(\dfrac{\sqrt2+1}{(\sqrt2-1)(\sqrt2+1)}=\dfrac{\sqrt2+1}{2-1}=\sqrt2+1\).` },
    { q: R`L'ensemble des solutions de \(x^2=3x\) est :`,
      choix: [R`\(\{3\}\)`, R`\(\{0;3\}\)`, R`\(\{-3;3\}\)`, R`\(\{\sqrt3\}\)`], bonne: 1,
      explication: R`\(x^2-3x=0\iff x(x-3)=0\iff x=0\) ou \(x=3\). Piège : diviser par \(x\) fait perdre la solution 0.` },
    { q: R`La dérivée de \(f(x)=\mathrm{e}^{-2x+1}\) est :`,
      choix: [R`\(\mathrm{e}^{-2x+1}\)`, R`\(-2x\,\mathrm{e}^{-2x+1}\)`, R`\(-2\,\mathrm{e}^{-2x+1}\)`, R`\((-2x+1)\,\mathrm{e}^{-2x}\)`], bonne: 2,
      explication: R`\(\left(\mathrm{e}^{ax+b}\right)'=a\,\mathrm{e}^{ax+b}\) avec \(a=-2\).` },
    { q: R`Sur \(\mathbb{R}\), \(\mathrm{e}^{x}-1\) est :`,
      choix: [R`toujours positif`, R`négatif sur \(]-\infty;0[\) et positif sur \(]0;+\infty[\)`, R`négatif sur \(]-\infty;1[\)`, R`toujours négatif`], bonne: 1,
      explication: R`\(\mathrm{e}^x-1\gt 0\iff\mathrm{e}^x\gt\mathrm{e}^0\iff x\gt 0\) (\(\exp\) strictement croissante).` },
    { q: R`Les solutions dans \(]-\pi;\pi]\) de \(\cos x=0\) sont :`,
      choix: [R`\(0\) et \(\pi\)`, R`\(\dfrac{\pi}{2}\) seulement`, R`\(-\dfrac{\pi}{2}\) et \(\dfrac{\pi}{2}\)`, R`\(\dfrac{\pi}{2}\) et \(\dfrac{3\pi}{2}\)`], bonne: 2,
      explication: R`Abscisse nulle : points \((0;1)\) et \((0;-1)\) du cercle, associés à \(\frac{\pi}{2}\) et \(-\frac{\pi}{2}\). (\(\frac{3\pi}{2}\notin\,]-\pi;\pi]\).)` },
    { q: R`\(ABCD\) est un carré de côté 4. Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`,
      choix: [R`\(16\sqrt2\)`, R`\(0\)`, R`\(16\)`, R`\(32\)`], bonne: 2,
      explication: R`Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AB=16\).` },
    { q: R`\((u_n)\) est géométrique de raison positive, avec \(u_1=3\) et \(u_3=12\). Alors \(u_0=\)`,
      choix: [R`\(\dfrac32\)`, R`\(0\)`, R`\(-\dfrac32\)`, R`\(6\)`], bonne: 0,
      explication: R`\(u_3=u_1q^2\), donc \(q^2=4\) et \(q=2\) (raison positive). Puis \(u_0=\frac{u_1}{q}=\frac32\).` },
    { q: R`\(P(A)=0{,}3\), \(P(B)=0{,}6\) et \(P(A\cup B)=0{,}72\). Les événements \(A\) et \(B\) sont :`,
      choix: [R`incompatibles`, R`indépendants`, R`contraires`, R`ni indépendants ni incompatibles`], bonne: 1,
      explication: R`\(P(A\cap B)=0{,}3+0{,}6-0{,}72=0{,}18=0{,}3\times 0{,}6\) : indépendants (et non incompatibles car \(P(A\cap B)\neq 0\)).` },
    { q: R`\(X\) prend les valeurs 1, 2, 3 avec \(P(X=1)=0{,}2\) et \(P(X=2)=0{,}5\). Alors \(E(X)=\)`,
      choix: [R`\(2\)`, R`\(1{,}2\)`, R`\(2{,}1\)`, R`\(2{,}3\)`], bonne: 2,
      explication: R`\(P(X=3)=1-0{,}7=0{,}3\), puis \(E(X)=0{,}2+1+0{,}9=2{,}1\).` },
    { q: R`Une équation de la droite passant par \(A(0;2)\) et \(B(3;0)\) est :`,
      choix: [R`\(3x+2y-6=0\)`, R`\(2x+3y-6=0\)`, R`\(2x-3y+6=0\)`, R`\(y=-\frac32x+2\)`], bonne: 1,
      explication: R`Vérification : \(A\) : \(0+6-6=0\) ; \(B\) : \(6+0-6=0\). (Pente \(-\frac23\), pas \(-\frac32\).)` },
    { q: R`« Si un quadrilatère est un carré, alors ses diagonales sont perpendiculaires. » Sa réciproque est :`,
      choix: [R`vraie`, R`fausse, un losange non carré est un contre-exemple`, R`fausse, un rectangle non carré est un contre-exemple`, R`équivalente à la proposition`], bonne: 1,
      explication: R`Réciproque : « diagonales perpendiculaires \(\Rightarrow\) carré ». Un losange non carré a des diagonales perpendiculaires. (Les diagonales d'un rectangle non carré ne sont pas perpendiculaires.)` },
    { q: R`La courbe de \(f(x)=x^2-4x+1\) admet une tangente horizontale au point d'abscisse :`,
      choix: [R`\(0\)`, R`\(-2\)`, R`\(2\)`, R`\(4\)`], bonne: 2,
      explication: R`Tangente horizontale \(\iff f'(x)=0\) : \(2x-4=0\iff x=2\) (sommet de la parabole).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Formule d'addition par le produit scalaire", points: 4, chapitres: [7, 8],
      enonce: R`<p>Dans un repère orthonormé \((O;\vec\imath,\vec\jmath)\), soit \(a\) et \(b\) deux réels, \(\vec u(\cos a;\sin a)\) et \(\vec v(\cos b;\sin b)\).</p>
<ol>
<li>Justifier que \(\vec u\) et \(\vec v\) sont unitaires et qu'une mesure de l'angle orienté \((\vec v,\vec u)\) est \(a-b\). En calculant \(\vec u\cdot\vec v\) de deux façons, démontrer que
\[\cos(a-b)=\cos a\cos b+\sin a\sin b.\]</li>
<li>En déduire une expression de \(\cos(a+b)\).</li>
<li>Calculer la valeur exacte de \(\cos\dfrac{\pi}{12}\) (on remarquera que \(\frac{\pi}{12}=\frac{\pi}{3}-\frac{\pi}{4}\)).</li>
<li>Montrer que, pour tout réel \(x\), \(\cos x+\sin x=\sqrt2\cos\left(x-\dfrac{\pi}{4}\right)\).</li>
<li>Résoudre dans \([0;2\pi[\) l'équation \(\cos x+\sin x=1\), puis l'inéquation \(\cos x+\sin x\geqslant 1\).</li>
<li>Quelle est la valeur maximale de \(\cos x+\sin x\) ? Pour quelles valeurs de \(x\) est-elle atteinte ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\|\vec u\|^2=\cos^2a+\sin^2a=1\), de même pour \(\vec v\). Les points \(U\), \(V\) tels que \(\overrightarrow{OU}=\vec u\), \(\overrightarrow{OV}=\vec v\) sont les points du cercle trigonométrique associés à \(a\) et \(b\) : \((\vec\imath,\vec u)=a\) et \((\vec\imath,\vec v)=b\), donc (relation de Chasles) \((\vec v,\vec u)=(\vec v,\vec\imath)+(\vec\imath,\vec u)=a-b\) à \(2\pi\) près.<br>
D'une part \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos(a-b)=\cos(a-b)\) (le cosinus est pair, le sens de l'angle n'importe pas). D'autre part, en repère orthonormé, \(\vec u\cdot\vec v=\cos a\cos b+\sin a\sin b\). D'où la formule. <i>(1,25 pt)</i></li>
<li>On remplace \(b\) par \(-b\) : \(\cos(a+b)=\cos a\cos(-b)+\sin a\sin(-b)=\cos a\cos b-\sin a\sin b\). <i>(0,25 pt)</i></li>
<li>\[\cos\frac{\pi}{12}=\cos\frac{\pi}{3}\cos\frac{\pi}{4}+\sin\frac{\pi}{3}\sin\frac{\pi}{4}=\frac12\times\frac{\sqrt2}{2}+\frac{\sqrt3}{2}\times\frac{\sqrt2}{2}=\frac{\sqrt2+\sqrt6}{4}.\]
<i>(0,75 pt)</i></li>
<li>\(\sqrt2\cos\left(x-\frac{\pi}{4}\right)=\sqrt2\left(\cos x\times\frac{\sqrt2}{2}+\sin x\times\frac{\sqrt2}{2}\right)=\cos x+\sin x\). <i>(0,5 pt)</i></li>
<li>\(\cos x+\sin x=1\iff\cos\left(x-\frac{\pi}{4}\right)=\frac{1}{\sqrt2}=\frac{\sqrt2}{2}=\cos\frac{\pi}{4}\). Posons \(X=x-\frac{\pi}{4}\) ; pour \(x\in[0;2\pi[\), \(X\in\left[-\frac{\pi}{4};\frac{7\pi}{4}\right[\). Sur cet intervalle, \(\cos X=\frac{\sqrt2}{2}\iff X=-\frac{\pi}{4}\) ou \(X=\frac{\pi}{4}\), d'où \(x=0\) ou \(x=\frac{\pi}{2}\). \(S=\left\{0;\frac{\pi}{2}\right\}\) (vérification : \(1+0=1\) et \(0+1=1\)).<br>
Inéquation : \(\cos X\geqslant\frac{\sqrt2}{2}\) avec \(X\in\left[-\frac{\pi}{4};\frac{7\pi}{4}\right[\) : sur le cercle, les points d'abscisse au moins \(\frac{\sqrt2}{2}\) forment l'arc de \(-\frac{\pi}{4}\) à \(\frac{\pi}{4}\), donc \(X\in\left[-\frac{\pi}{4};\frac{\pi}{4}\right]\), soit \(x\in\left[0;\frac{\pi}{2}\right]\). <i>(1 pt)</i></li>
<li>\(\cos\left(x-\frac{\pi}{4}\right)\leqslant 1\), donc \(\cos x+\sin x\leqslant\sqrt2\), avec égalité si et seulement si \(x-\frac{\pi}{4}=2k\pi\), soit \(x=\frac{\pi}{4}+2k\pi\), \(k\in\mathbb{Z}\). Le maximum est \(\sqrt2\). <i>(0,25 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Exponentielle, tangente par l'origine et suite", points: 5, chapitres: [6, 5, 4, 3],
      enonce: R`<p>On admet que \(2{,}7\lt\mathrm{e}\lt 2{,}8\). Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=\mathrm{e}^{x}-\mathrm{e}\,x\).</p>
<ol>
<li>Étudier les variations de \(f\) sur \(\mathbb{R}\) (limites non demandées) et déterminer son minimum.</li>
<li>En déduire que, pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant\mathrm{e}\,x\). Interpréter graphiquement à l'aide de la courbe \(\Gamma\) de la fonction exponentielle.</li>
<li>Soit \(a\) un réel. Montrer que la tangente à \(\Gamma\) au point d'abscisse \(a\) passe par l'origine si et seulement si \(a=1\).</li>
<li>Pour tout entier \(n\geqslant 1\), on pose \(u_n=\dfrac{\mathrm{e}^{n}}{n}\).<br>
a) Montrer que \(\dfrac{u_{n+1}}{u_n}=\dfrac{\mathrm{e}\,n}{n+1}\), puis que \((u_n)\) est strictement croissante.<br>
b) En appliquant la question 2 à \(x=\frac n2\), montrer que \(u_n\geqslant\dfrac{\mathrm{e}^2}{4}\,n\).<br>
c) Justifier que \(u_n\geqslant 1000\) dès que \(n\geqslant 572\).</li>
</ol>`,
      correction: R`<ol>
<li>\(f'(x)=\mathrm{e}^x-\mathrm{e}\). Par stricte croissance de \(\exp\) : \(f'(x)\gt 0\iff\mathrm{e}^x\gt\mathrm{e}^1\iff x\gt 1\). \(f\) est décroissante sur \(]-\infty;1]\), croissante sur \([1;+\infty[\) ; minimum \(f(1)=\mathrm{e}-\mathrm{e}=0\). <i>(1 pt)</i></li>
<li>Pour tout \(x\), \(f(x)\geqslant f(1)=0\), donc \(\mathrm{e}^x\geqslant\mathrm{e}\,x\).<br>
La tangente à \(\Gamma\) en 1 a pour équation \(y=\mathrm{e}^1(x-1)+\mathrm{e}^1=\mathrm{e}\,x\) : la courbe \(\Gamma\) est au-dessus de sa tangente au point d'abscisse 1. <i>(0,75 pt)</i></li>
<li>\(T_a : y=\mathrm{e}^a(x-a)+\mathrm{e}^a\). \(O\in T_a\iff 0=-a\,\mathrm{e}^a+\mathrm{e}^a=\mathrm{e}^a(1-a)\). Comme \(\mathrm{e}^a\neq 0\), c'est équivalent à \(a=1\). La seule tangente à \(\Gamma\) passant par l'origine est donc \(y=\mathrm{e}\,x\). <i>(1 pt)</i></li>
<li>a) \(\dfrac{u_{n+1}}{u_n}=\dfrac{\mathrm{e}^{n+1}}{n+1}\times\dfrac{n}{\mathrm{e}^n}=\dfrac{\mathrm{e}\,n}{n+1}\). Or \(\mathrm{e}\,n-(n+1)=(\mathrm{e}-1)n-1\gt 1\times n-1\geqslant 0\) car \(\mathrm{e}-1\gt 1\) et \(n\geqslant 1\). Donc \(\mathrm{e}\,n\gt n+1\), le quotient est strictement supérieur à 1 et, les termes étant positifs, \(u_{n+1}\gt u_n\). <i>(1 pt)</i><br>
b) Avec \(x=\frac n2\) : \(\mathrm{e}^{n/2}\geqslant\frac{\mathrm{e}\,n}{2}\gt 0\). En élevant au carré (nombres positifs) : \(\mathrm{e}^{n}\geqslant\frac{\mathrm{e}^2n^2}{4}\), puis en divisant par \(n\gt 0\) : \(u_n\geqslant\frac{\mathrm{e}^2}{4}n\). <i>(0,75 pt)</i><br>
c) \(\mathrm{e}\gt 2{,}7\) donc \(\mathrm{e}^2\gt 7{,}29\gt 7\). Pour \(n\geqslant 572\) : \(u_n\geqslant\frac{\mathrm{e}^2}{4}n\gt\frac{7\times 572}{4}=1001\gt 1000\). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">Ce type de minoration montre que \(u_n\) dépasse n'importe quel seuil : on peut le dire sans connaître la notion de limite, rien qu'avec des inégalités.</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Trois tirs dépendants", points: 5, chapitres: [10, 11],
      enonce: R`<p>Un basketteur effectue trois lancers francs successifs. Il réussit le premier avec la probabilité \(0{,}6\). Ensuite, s'il a réussi un lancer, il réussit le suivant avec la probabilité \(0{,}8\) ; s'il l'a manqué, il réussit le suivant avec la probabilité \(0{,}4\). On note \(T_i\) l'événement « le \(i\)-ième lancer est réussi » et \(X\) le nombre de lancers réussis.</p>
<ol>
<li>Construire un arbre pondéré décrivant la situation.</li>
<li>Calculer \(P(T_2)\), puis \(P_{T_2}(T_1)\).</li>
<li>Les événements \(T_1\) et \(T_2\) sont-ils indépendants ?</li>
<li>Déterminer la loi de probabilité de \(X\).</li>
<li>Calculer \(E(X)\).</li>
<li>Sachant que le joueur a réussi exactement deux lancers, quelle est la probabilité qu'il ait réussi le premier ?</li>
<li>Un commentateur affirme : « s'il a réussi le troisième lancer, il y a plus de trois chances sur quatre qu'il ait aussi réussi le deuxième ». A-t-il raison ?</li>
</ol>`,
      correction: R`<ol>
<li>Arbre à trois niveaux : premier niveau \(T_1\) (0,6) / \(\overline{T_1}\) (0,4) ; puis, après une réussite, 0,8 / 0,2 et, après un échec, 0,4 / 0,6. Les huit chemins ont pour probabilités :
<table class="tv"><tr><td>chemin</td><td>RRR</td><td>RRE</td><td>RER</td><td>REE</td><td>ERR</td><td>ERE</td><td>EER</td><td>EEE</td></tr>
<tr><td>proba</td><td>0,384</td><td>0,096</td><td>0,048</td><td>0,072</td><td>0,128</td><td>0,032</td><td>0,096</td><td>0,144</td></tr></table>
(par exemple \(P(\text{RER})=0{,}6\times 0{,}2\times 0{,}4=0{,}048\)). <i>(0,75 pt)</i></li>
<li>\(P(T_2)=0{,}6\times 0{,}8+0{,}4\times 0{,}4=0{,}48+0{,}16=0{,}64\).<br>
\(P_{T_2}(T_1)=\dfrac{P(T_1\cap T_2)}{P(T_2)}=\dfrac{0{,}48}{0{,}64}=0{,}75\). <i>(1 pt)</i></li>
<li>\(P(T_1)P(T_2)=0{,}6\times 0{,}64=0{,}384\neq 0{,}48=P(T_1\cap T_2)\) : non indépendants (la réussite au premier lancer influence le deuxième). <i>(0,5 pt)</i></li>
<li>On regroupe les chemins selon le nombre de réussites :
<ul><li>\(P(X=3)=0{,}384\) ;</li>
<li>\(P(X=2)=0{,}096+0{,}048+0{,}128=0{,}272\) ;</li>
<li>\(P(X=1)=0{,}072+0{,}032+0{,}096=0{,}2\) ;</li>
<li>\(P(X=0)=0{,}144\).</li></ul>
Contrôle : \(0{,}384+0{,}272+0{,}2+0{,}144=1\). <i>(1,25 pt)</i></li>
<li>\(E(X)=0\times 0{,}144+1\times 0{,}2+2\times 0{,}272+3\times 0{,}384=0{,}2+0{,}544+1{,}152=1{,}896\). <i>(0,5 pt)</i></li>
<li>\(P_{\{X=2\}}(T_1)=\dfrac{P(\text{RRE})+P(\text{RER})}{P(X=2)}=\dfrac{0{,}144}{0{,}272}=\dfrac{144}{272}=\dfrac{9}{17}\). <i>(0,5 pt)</i></li>
<li>\(P(T_3)=0{,}384+0{,}048+0{,}128+0{,}096=0{,}656\) et \(P(T_2\cap T_3)=0{,}384+0{,}128=0{,}512\).
\[P_{T_3}(T_2)=\frac{0{,}512}{0{,}656}=\frac{512}{656}=\frac{32}{41}.\]
Or \(\frac{32}{41}\gt\frac34\iff 128\gt 123\) : vrai. Le commentateur a raison. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°8", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 9],
  automatismes: [
    { q: R`\(0{,}2\,\%\) de \(3000\) vaut :`,
      choix: [R`\(600\)`, R`\(60\)`, R`\(6\)`, R`\(0{,}6\)`], bonne: 2,
      explication: R`\(0{,}2\,\%=\frac{0{,}2}{100}=0{,}002\) et \(0{,}002\times 3000=6\). Piège : \(0{,}2\,\%\neq 0{,}2\).` },
    { q: R`Pour tout réel \(x\), \(4x^2-9=\)`,
      choix: [R`\((4x-3)(4x+3)\)`, R`\((2x-3)^2\)`, R`\((2x-9)(2x+1)\)`, R`\((2x-3)(2x+3)\)`], bonne: 3,
      explication: R`\(a^2-b^2=(a-b)(a+b)\) avec \(a=2x\) et \(b=3\).` },
    { q: R`La dérivée de \(f(x)=x-\dfrac1x\) sur \(]0;+\infty[\) est :`,
      choix: [R`\(1-\dfrac{1}{x^2}\)`, R`\(1+\dfrac{1}{x^2}\)`, R`\(1+\dfrac1x\)`, R`\(\dfrac{1}{x^2}\)`], bonne: 1,
      explication: R`\(\left(\frac1x\right)'=-\frac{1}{x^2}\), donc \(\left(-\frac1x\right)'=+\frac{1}{x^2}\) et \(f'(x)=1+\frac{1}{x^2}\).` },
    { q: R`L'équation \(\mathrm{e}^{x}=-1\) :`,
      choix: [R`a pour solution \(x=0\)`, R`a pour solution \(x=-1\)`, R`a une infinité de solutions`, R`n'a aucune solution`], bonne: 3,
      explication: R`Pour tout réel \(x\), \(\mathrm{e}^x\gt 0\) : il ne peut pas valoir \(-1\).` },
    { q: R`\(f(2)=3\) et \(f'(2)=-1\). La tangente à la courbe de \(f\) au point d'abscisse 2 a pour équation :`,
      choix: [R`\(y=-x+5\)`, R`\(y=-x+3\)`, R`\(y=3x-1\)`, R`\(y=-x-1\)`], bonne: 0,
      explication: R`\(y=f'(2)(x-2)+f(2)=-(x-2)+3=-x+5\).` },
    { q: R`Les solutions dans \([0;2\pi[\) de \(\sin x=\dfrac12\) sont :`,
      choix: [R`\(\dfrac{\pi}{3}\) et \(\dfrac{2\pi}{3}\)`, R`\(\dfrac{\pi}{6}\) et \(\dfrac{11\pi}{6}\)`, R`\(\dfrac{\pi}{6}\) et \(\dfrac{5\pi}{6}\)`, R`\(\dfrac{\pi}{6}\) seulement`], bonne: 2,
      explication: R`\(\sin\frac{\pi}{6}=\frac12\) et \(\sin(\pi-x)=\sin x\), d'où aussi \(\pi-\frac{\pi}{6}=\frac{5\pi}{6}\).` },
    { q: R`Un vecteur unitaire colinéaire à \(\vec u(3;4)\) est :`,
      choix: [R`\((1;1)\)`, R`\(\left(\frac35;\frac45\right)\)`, R`\(\left(\frac37;\frac47\right)\)`, R`\(\left(\frac13;\frac14\right)\)`], bonne: 1,
      explication: R`\(\|\vec u\|=5\), donc \(\frac15\vec u=\left(\frac35;\frac45\right)\) est unitaire (\(\frac{9}{25}+\frac{16}{25}=1\)).` },
    { q: R`\(AB=4\), \(AC=6\) et \(\widehat{BAC}=120^\circ\). Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`,
      choix: [R`\(12\)`, R`\(-12\)`, R`\(-12\sqrt3\)`, R`\(24\)`], bonne: 1,
      explication: R`\(4\times 6\times\cos 120^\circ=24\times\left(-\frac12\right)=-12\). Angle obtus : produit scalaire négatif.` },
    { q: R`Pour \(u_n=3-2n\), la somme \(u_0+u_1+\dots+u_9\) vaut :`,
      choix: [R`\(-60\)`, R`\(-75\)`, R`\(-54\)`, R`\(-12\)`], bonne: 0,
      explication: R`Suite arithmétique : 10 termes, \(u_0=3\), \(u_9=-15\). Somme \(=10\times\frac{3+(-15)}{2}=-60\).` },
    { q: R`\(P(B)=0{,}5\) et \(P(A\cap B)=0{,}2\). Alors \(P(\overline A\cap B)=\)`,
      choix: [R`\(0{,}7\)`, R`\(0{,}1\)`, R`\(0{,}4\)`, R`\(0{,}3\)`], bonne: 3,
      explication: R`\(B\) est la réunion disjointe de \(A\cap B\) et \(\overline A\cap B\) : \(0{,}5-0{,}2=0{,}3\).` },
    { q: R`\(X\) prend les valeurs \(-2\), \(1\), \(4\) de façon équiprobable. Alors \(V(X)=\)`,
      choix: [R`\(1\)`, R`\(6\)`, R`\(7\)`, R`\(18\)`], bonne: 1,
      explication: R`\(E(X)=\frac{-2+1+4}{3}=1\), puis \(V(X)=\frac{(-3)^2+0^2+3^2}{3}=6\).` },
    { q: R`Quelle est la valeur de <code>n</code> après exécution ?<pre><code>x = 1
n = 0
while x &lt; 100:
    x = 3*x
    n = n + 1</code></pre>`,
      choix: [R`\(4\)`, R`\(5\)`, R`\(6\)`, R`\(100\)`], bonne: 1,
      explication: R`\(x\) prend les valeurs 3, 9, 27, 81, 243 : la boucle tourne 5 fois et s'arrête quand \(x=243\geqslant 100\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Une famille de cercles", points: 4, chapitres: [9, 2],
      enonce: R`<p>Dans un repère orthonormé, pour tout réel \(m\), on note \(\mathcal{C}_m\) l'ensemble des points \(M(x;y)\) tels que \(x^2+y^2-2mx+4y+5m=0\).</p>
<ol>
<li>Déterminer la nature de \(\mathcal{C}_0\).</li>
<li>Montrer que \(M(x;y)\in\mathcal{C}_m\iff(x-m)^2+(y+2)^2=(m-1)(m-4)\). En déduire, selon \(m\), la nature de \(\mathcal{C}_m\).</li>
<li>Lorsque \(\mathcal{C}_m\) est un cercle, sur quelle droite se trouve son centre ?</li>
<li>Déterminer les valeurs de \(m\) pour lesquelles \(\mathcal{C}_m\) est un cercle tangent à l'axe des abscisses, c'est-à-dire ayant un unique point commun avec lui. Vérifier le résultat géométriquement.</li>
<li>Existe-t-il un point appartenant à tous les cercles \(\mathcal{C}_m\) ? Justifier.</li>
</ol>`,
      correction: R`<ol>
<li>\(\mathcal{C}_0 : x^2+y^2+4y=0\iff x^2+(y+2)^2=4\) : cercle de centre \((0;-2)\) et de rayon 2. <i>(0,5 pt)</i></li>
<li>\(x^2-2mx=(x-m)^2-m^2\) et \(y^2+4y=(y+2)^2-4\), donc l'équation équivaut à \((x-m)^2+(y+2)^2=m^2-5m+4\). Le trinôme \(m^2-5m+4\) a pour racines 1 et 4, donc il vaut \((m-1)(m-4)\).
<ul><li>\(m\lt 1\) ou \(m\gt 4\) : cercle de centre \(\Omega_m(m;-2)\) et de rayon \(\sqrt{(m-1)(m-4)}\) ;</li>
<li>\(m=1\) ou \(m=4\) : réduit au point \(\Omega_m\) ;</li>
<li>\(1\lt m\lt 4\) : ensemble vide.</li></ul>
<i>(1 pt)</i></li>
<li>Les centres \(\Omega_m(m;-2)\) sont sur la droite d'équation \(y=-2\) (plus précisément sur les parties d'abscisses \(m\lt 1\) ou \(m\gt 4\)). <i>(0,5 pt)</i></li>
<li>Points communs avec l'axe \(y=0\) : \(x^2-2mx+5m=0\). Il y a un unique point commun si et seulement si le discriminant est nul : \(4m^2-20m=4m(m-5)=0\iff m=0\) ou \(m=5\). Ces deux valeurs donnent bien des cercles (\(0\lt 1\) et \(5\gt 4\)).<br>
Vérification : pour \(m=0\), centre \((0;-2)\), rayon 2 ; pour \(m=5\), centre \((5;-2)\), rayon \(\sqrt{4\times 1}=2\). Dans les deux cas, la distance du centre à l'axe des abscisses vaut 2, égale au rayon. <i>(1 pt)</i></li>
<li>L'équation s'écrit \(x^2+y^2+4y+m(5-2x)=0\). Si un point \(M(x;y)\) appartenait à deux cercles \(\mathcal{C}_{m_1}\) et \(\mathcal{C}_{m_2}\) avec \(m_1\neq m_2\), on aurait par différence \((m_1-m_2)(5-2x)=0\), donc \(x=\frac52\), puis \(\frac{25}{4}+y^2+4y=0\). Ce trinôme en \(y\) a pour discriminant \(16-25=-9\lt 0\) : impossible.<br>
Raisonnement par l'absurde : aucun point n'appartient à deux cercles distincts de la famille, <i>a fortiori</i> à tous. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Fonction rationnelle et nombre d'or", points: 5, chapitres: [4, 5, 2],
      enonce: R`<p>Soit \(a\) et \(b\) deux réels et \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=\dfrac{ax+b}{x^2+1}\), de courbe \(\mathcal{C}\). On sait que \(\mathcal{C}\) passe par \(A(0;1)\) et que la tangente à \(\mathcal{C}\) en \(A\) a pour coefficient directeur 2.</p>
<ol>
<li>Exprimer \(f'(x)\) en fonction de \(a\) et \(b\), puis montrer que \(a=2\) et \(b=1\).</li>
<li>Montrer que, pour tout réel \(x\), \(f'(x)=\dfrac{-2(x^2+x-1)}{(x^2+1)^2}\).</li>
<li>Dresser le tableau de variations de \(f\) (limites non demandées). On notera \(\alpha\lt\beta\) les racines de \(x^2+x-1\).</li>
<li>Montrer que si \(r\) est une racine de \(x^2+x-1\), alors \(f(r)=r+1\). En déduire \(f(\alpha)\) et \(f(\beta)\).</li>
<li>Soit \(k\) un réel non nul. Montrer que l'équation \(f(x)=k\) admet au moins une solution si et seulement si \(k^2-k-1\leqslant 0\). En déduire que, pour tout réel \(x\), \(\dfrac{1-\sqrt5}{2}\leqslant f(x)\leqslant\dfrac{1+\sqrt5}{2}\).</li>
<li>Étudier la position relative de \(\mathcal{C}\) et de sa tangente en \(A\).</li>
</ol>`,
      correction: R`<ol>
<li>\(f'(x)=\dfrac{a(x^2+1)-(ax+b)\times 2x}{(x^2+1)^2}=\dfrac{-ax^2-2bx+a}{(x^2+1)^2}\).<br>
\(f(0)=b=1\) et \(f'(0)=a=2\). <i>(0,75 pt)</i></li>
<li>Avec \(a=2\), \(b=1\) : numérateur \(-2x^2-2x+2=-2(x^2+x-1)\). <i>(0,75 pt)</i></li>
<li>\(x^2+x-1\) : \(\Delta=5\), \(\alpha=\frac{-1-\sqrt5}{2}\), \(\beta=\frac{-1+\sqrt5}{2}\). Ce trinôme est positif à l'extérieur des racines ; avec le facteur \(-2\) et le dénominateur positif, \(f'(x)\lt 0\) hors de \([\alpha;\beta]\) et \(f'(x)\gt 0\) sur \(]\alpha;\beta[\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(\alpha\)</td><td></td><td>\(\beta\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(f(\alpha)\)</td><td>↗</td><td>\(f(\beta)\)</td><td>↘</td><td></td></tr></table>
<i>(0,75 pt)</i></li>
<li>Si \(r^2+r-1=0\), alors \(r^2+1=2-r\) et \((r+1)(2-r)=2r-r^2+2-r=r+2-r^2=r+2-(1-r)=2r+1\). Donc \(f(r)=\dfrac{2r+1}{2-r}=\dfrac{(r+1)(2-r)}{2-r}=r+1\) (\(2-r=r^2+1\neq 0\)).<br>
\(f(\alpha)=\alpha+1=\dfrac{1-\sqrt5}{2}\) et \(f(\beta)=\beta+1=\dfrac{1+\sqrt5}{2}\) (le nombre d'or). <i>(0,75 pt)</i></li>
<li>Comme \(x^2+1\gt 0\) : \(f(x)=k\iff 2x+1=k(x^2+1)\iff kx^2-2x+k-1=0\). Pour \(k\neq 0\), c'est une équation du second degré, qui a au moins une solution si et seulement si \(\Delta=4-4k(k-1)=-4(k^2-k-1)\geqslant 0\), soit \(k^2-k-1\leqslant 0\).<br>
Les racines de \(k^2-k-1\) sont \(\frac{1\pm\sqrt5}{2}\) ; il est négatif entre elles. Ainsi, pour \(k\neq 0\), \(k\) est une valeur prise par \(f\) si et seulement si \(\frac{1-\sqrt5}{2}\leqslant k\leqslant\frac{1+\sqrt5}{2}\) ; la valeur \(0\), prise en \(x=-\frac12\), est aussi dans cet intervalle.<br>
Par contraposée : si \(k\gt\frac{1+\sqrt5}{2}\) ou \(k\lt\frac{1-\sqrt5}{2}\), \(f\) ne prend jamais la valeur \(k\). Donc pour tout \(x\), \(\frac{1-\sqrt5}{2}\leqslant f(x)\leqslant\frac{1+\sqrt5}{2}\) : ce sont le minimum et le maximum de \(f\) sur \(\mathbb{R}\), atteints en \(\alpha\) et \(\beta\). <i>(1,25 pt)</i></li>
<li>Tangente en \(A\) : \(y=2x+1\).
\[f(x)-(2x+1)=\frac{(2x+1)-(2x+1)(x^2+1)}{x^2+1}=\frac{-x^2(2x+1)}{x^2+1}.\]
Comme \(x^2\geqslant 0\) et \(x^2+1\gt 0\), le signe est celui de \(-(2x+1)\) : \(\mathcal{C}\) est au-dessus de la tangente pour \(x\lt-\frac12\), en dessous pour \(x\gt -\frac12\) (\(x\neq 0\)) ; elles se rencontrent en \(x=-\frac12\) et en \(A\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">La question 5 donne les extremums <b>globaux</b> sans aucune limite : l'étude des variations seule ne suffisait pas à comparer \(f(\beta)\) aux valeurs prises pour \(x\to-\infty\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Suite des carrés, Python et logique", points: 5, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=1\) et, pour tout entier naturel \(n\), \(u_{n+1}=u_n+2n+3\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\), \(u_3\). Émettre une conjecture sur l'expression de \(u_n\).</li>
<li>On pose \(d_n=u_{n+1}-u_n\).<br>a) Quelle est la nature de la suite \((d_n)\) ?<br>b) En écrivant \(u_n=u_0+d_0+d_1+\dots+d_{n-1}\) pour \(n\geqslant 1\), démontrer que \(u_n=(n+1)^2\) pour tout \(n\).</li>
<li>On considère la fonction Python ci-dessous.
<pre><code>def premier(A):
    n = 0
    u = 1
    while u &lt;= A:
        u = u + 2*n + 3
        n = n + 1
    return n</code></pre>
Que renvoie <code>premier(1000)</code> ? Justifier sans exécuter le programme.</li>
<li>Pour chacune des propositions suivantes, dire si elle est vraie ou fausse en justifiant.<br>
\(\mathcal{P}_1\) : « Pour tout entier \(n\), \(u_n+u_{n+1}\) est impair. »<br>
\(\mathcal{P}_2\) : « Pour tout entier \(n\), si \(u_n\) est pair, alors \(n\) est impair. » (On pourra raisonner par contraposée.)<br>
\(\mathcal{P}_3\) : « Pour tout entier \(n\), \(u_n\leqslant 2^n\). »<br>
\(\mathcal{P}_4\) : la réciproque de \(\mathcal{P}_2\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=1+3=4\), \(u_2=4+5=9\), \(u_3=9+7=16\). Conjecture : \(u_n=(n+1)^2\). <i>(0,5 pt)</i></li>
<li>a) \(d_n=2n+3\) : \(d_{n+1}-d_n=2\), \((d_n)\) est arithmétique de raison 2 et de premier terme \(d_0=3\). <i>(0,5 pt)</i><br>
b) Les termes \(d_0,\dots,d_{n-1}\) sont \(n\) termes consécutifs d'une suite arithmétique : leur somme vaut \(n\times\frac{d_0+d_{n-1}}{2}=n\times\frac{3+2n+1}{2}=n(n+2)\). Donc \(u_n=1+n^2+2n=(n+1)^2\), formule également vraie pour \(n=0\). <i>(1 pt)</i></li>
<li>La boucle calcule les termes successifs (\(u\) contient \(u_n\)) tant que \(u_n\leqslant 1000\) : la fonction renvoie le plus petit \(n\) tel que \(u_n\gt 1000\), c'est-à-dire \((n+1)^2\gt 1000\). Or \(31^2=961\leqslant 1000\) et \(32^2=1024\gt 1000\) : il faut \(n+1=32\). <code>premier(1000)</code> renvoie <b>31</b>. <i>(1 pt)</i></li>
<li>\(\mathcal{P}_1\) : <b>vraie</b>. \(u_n+u_{n+1}=(n+1)^2+(n+2)^2=2n^2+6n+5=2(n^2+3n+2)+1\), qui est impair. <i>(0,5 pt)</i><br>
\(\mathcal{P}_2\) : <b>vraie</b>. Contraposée : « si \(n\) est pair, alors \(u_n\) est impair ». Si \(n=2p\), alors \(u_n=(2p+1)^2=4p^2+4p+1=2(2p^2+2p)+1\) est impair. La contraposée étant vraie, \(\mathcal{P}_2\) l'est. <i>(0,75 pt)</i><br>
\(\mathcal{P}_3\) : <b>fausse</b>. Contre-exemple : \(n=1\), \(u_1=4\gt 2^1=2\). <i>(0,25 pt)</i><br>
\(\mathcal{P}_4\) : « si \(n\) est impair, alors \(u_n\) est pair » : <b>vraie</b>, car si \(n=2p+1\), \(u_n=(2p+2)^2=4(p+1)^2\) est pair. Ainsi \(u_n\) est pair <b>si et seulement si</b> \(n\) est impair. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°9", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 10, 11],
  automatismes: [
    { q: R`\(\dfrac34\div\dfrac98=\)`,
      choix: [R`\(\dfrac{27}{32}\)`, R`\(\dfrac23\)`, R`\(\dfrac32\)`, R`\(\dfrac{3}{2}\times\dfrac{9}{4}\)`], bonne: 1,
      explication: R`Diviser revient à multiplier par l'inverse : \(\frac34\times\frac89=\frac{24}{36}=\frac23\).` },
    { q: R`Le discriminant de \(3x^2-2x+1\) vaut :`,
      choix: [R`\(-8\)`, R`\(16\)`, R`\(8\)`, R`\(-16\)`], bonne: 0,
      explication: R`\(\Delta=b^2-4ac=(-2)^2-4\times 3\times 1=4-12=-8\).` },
    { q: R`Le coefficient directeur de la tangente à la courbe de \(x\mapsto x^3\) au point d'abscisse \(-1\) est :`,
      choix: [R`\(-3\)`, R`\(-1\)`, R`\(3\)`, R`\(1\)`], bonne: 2,
      explication: R`\(f'(x)=3x^2\), donc \(f'(-1)=3\times(-1)^2=3\). (Le carré rend le signe positif.)` },
    { q: R`La fonction \(x\mapsto\mathrm{e}^{-x}\) est, sur \(\mathbb{R}\) :`,
      choix: [R`strictement croissante`, R`strictement décroissante`, R`négative`, R`croissante puis décroissante`], bonne: 1,
      explication: R`Sa dérivée est \(-\mathrm{e}^{-x}\lt 0\). Elle reste strictement positive.` },
    { q: R`\(\cos^2\left(\dfrac{\pi}{8}\right)+\sin^2\left(\dfrac{\pi}{8}\right)=\)`,
      choix: [R`\(\dfrac{\pi}{8}\)`, R`\(\dfrac{\sqrt2}{2}\)`, R`\(1\)`, R`\(2\)`], bonne: 2,
      explication: R`Pour tout réel \(x\), \(\cos^2x+\sin^2x=1\) : inutile de connaître \(\cos\frac{\pi}{8}\).` },
    { q: R`Le milieu de \([AB]\) avec \(A(-1;4)\) et \(B(5;-2)\) est :`,
      choix: [R`\((3;-3)\)`, R`\((2;1)\)`, R`\((4;2)\)`, R`\((6;-6)\)`], bonne: 1,
      explication: R`\(\left(\frac{-1+5}{2};\frac{4-2}{2}\right)=(2;1)\). \((6;-6)\) sont les coordonnées de \(\overrightarrow{AB}\).` },
    { q: R`Une droite perpendiculaire à \(y=3x+1\) a pour coefficient directeur :`,
      choix: [R`\(-3\)`, R`\(\dfrac13\)`, R`\(-\dfrac13\)`, R`\(3\)`], bonne: 2,
      explication: R`Vecteurs directeurs \((1;3)\) et \((1;m)\) orthogonaux : \(1+3m=0\), \(m=-\frac13\).` },
    { q: R`\(2+5+8+\dots+32=\)`,
      choix: [R`\(170\)`, R`\(187\)`, R`\(204\)`, R`\(340\)`], bonne: 1,
      explication: R`Termes \(2+3k\) pour \(k=0\) à \(10\) : 11 termes. Somme \(=11\times\frac{2+32}{2}=187\).` },
    { q: R`\(P(A)=0{,}2\), \(P(B)=0{,}5\) et \(P_A(B)=0{,}75\). Alors \(P_B(A)=\)`,
      choix: [R`\(0{,}75\)`, R`\(0{,}15\)`, R`\(0{,}3\)`, R`\(0{,}4\)`], bonne: 2,
      explication: R`\(P(A\cap B)=0{,}2\times 0{,}75=0{,}15\), puis \(P_B(A)=\frac{0{,}15}{0{,}5}=0{,}3\). Ne pas confondre \(P_A(B)\) et \(P_B(A)\).` },
    { q: R`\(V(X)=4\). L'écart type de \(-3X\) vaut :`,
      choix: [R`\(-6\)`, R`\(12\)`, R`\(36\)`, R`\(6\)`], bonne: 3,
      explication: R`\(V(-3X)=9\times 4=36\), donc \(\sigma(-3X)=6=|-3|\times\sigma(X)\). Un écart type est positif.` },
    { q: R`Pour démontrer que la proposition « pour tout réel \(x\), \(x^2\geqslant x\) » est fausse, il suffit :`,
      choix: [R`de vérifier qu'elle est fausse pour tous les réels`, R`de trouver un réel \(x\) tel que \(x^2\geqslant x\)`, R`de trouver un réel \(x\) tel que \(x^2\lt x\)`, R`de montrer que \(x^2\lt x\) pour tout réel \(x\)`], bonne: 2,
      explication: R`Un seul contre-exemple suffit, par exemple \(x=\frac12\) : \(\frac14\lt\frac12\).` },
    { q: R`Lequel de ces points appartient au cercle de centre \(O\) et de rayon 5 ?`,
      choix: [R`\((4;4)\)`, R`\((2;3)\)`, R`\((5;5)\)`, R`\((-3;4)\)`], bonne: 3,
      explication: R`Équation \(x^2+y^2=25\) : \(9+16=25\). Les autres donnent 32, 13 et 50.` }
  ],
  exercices: [
    { titre: "Exercice 1 — Les fonctions cosinus et sinus hyperboliques", points: 5, chapitres: [6, 4, 5, 2],
      enonce: R`<p>On définit sur \(\mathbb{R}\) les fonctions \(f(x)=\mathrm{e}^{x}+\mathrm{e}^{-x}\) et \(g(x)=\mathrm{e}^{x}-\mathrm{e}^{-x}\).</p>
<ol>
<li>Étudier la parité de \(f\) et de \(g\).</li>
<li>Montrer que \(f'=g\) et \(g'=f\).</li>
<li>Étudier le signe de \(g(x)\) selon \(x\). En déduire les variations de \(f\) et de \(g\) sur \(\mathbb{R}\) (limites non demandées), ainsi que le minimum de \(f\).</li>
<li>Montrer que, pour tout réel \(x\), \(f(x)^2-g(x)^2=4\).</li>
<li>a) En posant \(X=\mathrm{e}^{x}\), résoudre l'équation \(f(x)=\mathrm{e}+\dfrac{1}{\mathrm{e}}\).<br>
b) Résoudre l'inéquation \(f(x)\leqslant\mathrm{e}+\dfrac{1}{\mathrm{e}}\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\mathbb{R}\) est symétrique par rapport à 0. \(f(-x)=\mathrm{e}^{-x}+\mathrm{e}^{x}=f(x)\) : \(f\) est <b>paire</b>. \(g(-x)=\mathrm{e}^{-x}-\mathrm{e}^{x}=-g(x)\) : \(g\) est <b>impaire</b>. <i>(0,75 pt)</i></li>
<li>\(\left(\mathrm{e}^{-x}\right)'=-\mathrm{e}^{-x}\), donc \(f'(x)=\mathrm{e}^x-\mathrm{e}^{-x}=g(x)\) et \(g'(x)=\mathrm{e}^x+\mathrm{e}^{-x}=f(x)\). <i>(0,75 pt)</i></li>
<li>\(g(x)\gt 0\iff\mathrm{e}^x\gt\mathrm{e}^{-x}\iff x\gt -x\iff x\gt 0\) (stricte croissance de \(\exp\)). De même \(g(x)\lt 0\iff x\lt 0\), et \(g(0)=0\).<br>
Comme \(f'=g\) : \(f\) est décroissante sur \(]-\infty;0]\), croissante sur \([0;+\infty[\), de minimum \(f(0)=2\).<br>
Comme \(g'=f\) et \(f(x)\gt 0\) (somme de deux exponentielles) : \(g\) est strictement croissante sur \(\mathbb{R}\). <i>(1,25 pt)</i></li>
<li>\(f(x)^2-g(x)^2=\big(f(x)-g(x)\big)\big(f(x)+g(x)\big)=2\mathrm{e}^{-x}\times 2\mathrm{e}^{x}=4\mathrm{e}^{0}=4\). <i>(0,5 pt)</i></li>
<li>a) Avec \(X=\mathrm{e}^x\gt 0\), \(\mathrm{e}^{-x}=\frac1X\) et l'équation devient \(X+\frac1X=\mathrm{e}+\frac1{\mathrm{e}}\). En multipliant par \(X\neq 0\) :
\[X^2-\left(\mathrm{e}+\tfrac{1}{\mathrm{e}}\right)X+1=0.\]
On reconnaît une somme \(\mathrm{e}+\frac1{\mathrm{e}}\) et un produit \(\mathrm{e}\times\frac1{\mathrm{e}}=1\) : les racines sont \(X=\mathrm{e}\) et \(X=\frac1{\mathrm{e}}\), donc \(X^2-\left(\mathrm{e}+\tfrac1{\mathrm{e}}\right)X+1=(X-\mathrm{e})\left(X-\tfrac1{\mathrm{e}}\right)\).<br>
\(\mathrm{e}^x=\mathrm{e}\iff x=1\) ; \(\mathrm{e}^x=\mathrm{e}^{-1}\iff x=-1\). \(S=\{-1;1\}\) (cohérent avec la parité de \(f\)). <i>(1 pt)</i><br>
b) En multipliant par \(X\gt 0\), l'inéquation équivaut à \((X-\mathrm{e})\left(X-\frac1{\mathrm{e}}\right)\leqslant 0\), soit \(\frac1{\mathrm{e}}\leqslant X\leqslant\mathrm{e}\) (trinôme négatif entre ses racines), c'est-à-dire \(\mathrm{e}^{-1}\leqslant\mathrm{e}^x\leqslant\mathrm{e}^1\iff -1\leqslant x\leqslant 1\). \(S=[-1;1]\).<br>
On pouvait aussi conclure avec les variations de \(f\) : \(f\) est paire, croissante sur \([0;+\infty[\) et \(f(1)=\mathrm{e}+\frac1{\mathrm{e}}\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Trigonométrie : mesure principale et équations", points: 3, chapitres: [7, 2],
      enonce: R`<ol>
<li>Déterminer la mesure principale de l'angle \(\dfrac{2027\pi}{6}\), puis la valeur exacte de \(\cos\dfrac{2027\pi}{6}\).</li>
<li>Montrer que, pour tout réel \(x\), \(2\sin^2x+3\cos x-3=-(2\cos x-1)(\cos x-1)\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'équation \(2\sin^2x+3\cos x-3=0\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'inéquation \(2\sin^2x+3\cos x-3\geqslant 0\).</li>
</ol>`,
      correction: R`<ol>
<li>\(2027=12\times 168+11\), donc \(\frac{2027\pi}{6}=\frac{2016\pi}{6}+\frac{11\pi}{6}=336\pi+\frac{11\pi}{6}=168\times 2\pi+\frac{11\pi}{6}\).<br>
\(\frac{11\pi}{6}\notin\,]-\pi;\pi]\) : on retire \(2\pi\), \(\frac{11\pi}{6}-2\pi=-\frac{\pi}{6}\). La mesure principale est \(-\dfrac{\pi}{6}\), et \(\cos\frac{2027\pi}{6}=\cos\left(-\frac{\pi}{6}\right)=\frac{\sqrt3}{2}\). <i>(0,75 pt)</i></li>
<li>Avec \(\sin^2x=1-\cos^2x\) : \(2\sin^2x+3\cos x-3=-2\cos^2x+3\cos x-1\). Or \((2\cos x-1)(\cos x-1)=2\cos^2x-3\cos x+1\). D'où l'égalité. <i>(0,5 pt)</i></li>
<li>L'équation équivaut à \(\cos x=\frac12\) ou \(\cos x=1\). Dans \(]-\pi;\pi]\) : \(\cos x=\frac12\iff x=\pm\frac{\pi}{3}\) ; \(\cos x=1\iff x=0\). \(S=\left\{-\frac{\pi}{3};0;\frac{\pi}{3}\right\}\). <i>(0,75 pt)</i></li>
<li>L'inéquation équivaut à \((2\cos x-1)(\cos x-1)\leqslant 0\). Posons \(c=\cos x\in[-1;1]\) : \(c-1\leqslant 0\) toujours. Le produit est négatif ou nul si et seulement si \(c=1\) ou \(2c-1\geqslant 0\), c'est-à-dire \(\cos x\geqslant\frac12\).<br>
Sur le cercle trigonométrique, les points d'abscisse au moins \(\frac12\) forment l'arc de \(-\frac{\pi}{3}\) à \(\frac{\pi}{3}\) : \(S=\left[-\frac{\pi}{3};\frac{\pi}{3}\right]\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 3 — Écart entre deux dés", points: 3, chapitres: [11, 10],
      enonce: R`<p>On lance deux dés équilibrés à six faces, l'un rouge, l'autre bleu, et on note \(X\) la valeur absolue de la différence des deux résultats (par exemple, \((2;5)\) donne \(X=3\)).</p>
<ol>
<li>Déterminer la loi de probabilité de \(X\).</li>
<li>Calculer \(E(X)\).</li>
<li>Sachant que la somme des deux dés est paire, quelle est la probabilité que \(X=0\) ?</li>
<li>On note \(A\) : « le dé rouge donne un nombre pair » et \(B\) : « \(X\) est pair ». Les événements \(A\) et \(B\) sont-ils indépendants ? Même question avec \(C\) : « le dé rouge donne 1 » et \(D\) : « \(X\leqslant 1\) ».</li>
</ol>`,
      correction: R`<ol>
<li>Il y a 36 issues équiprobables. On compte les couples :
<table class="tv"><tr><td>\(k\)</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><td>\(P(X=k)\)</td><td>\(\frac{6}{36}\)</td><td>\(\frac{10}{36}\)</td><td>\(\frac{8}{36}\)</td><td>\(\frac{6}{36}\)</td><td>\(\frac{4}{36}\)</td><td>\(\frac{2}{36}\)</td></tr></table>
(par exemple \(X=1\) : \((1;2),(2;3),(3;4),(4;5),(5;6)\) et leurs symétriques, soit 10 couples). Total : \(36\). <i>(1 pt)</i></li>
<li>\(E(X)=\dfrac{0+10+16+18+16+10}{36}=\dfrac{70}{36}=\dfrac{35}{18}\approx 1{,}94\). <i>(0,75 pt)</i></li>
<li>La somme est paire si et seulement si les deux dés ont la même parité : \(3\times 3+3\times 3=18\) issues. Les 6 doubles en font partie. \(P(X=0\mid\text{somme paire})=\frac{6}{18}=\frac13\). <i>(0,5 pt)</i></li>
<li>\(P(A)=\frac12\). \(X\) est pair si et seulement si les dés ont la même parité, donc \(P(B)=\frac{18}{36}=\frac12\). \(A\cap B\) : les deux dés pairs, \(P(A\cap B)=\frac{9}{36}=\frac14=P(A)P(B)\) : \(A\) et \(B\) sont <b>indépendants</b>.<br>
\(P(C)=\frac16\), \(P(D)=\frac{16}{36}=\frac49\), \(C\cap D=\{(1;1),(1;2)\}\), \(P(C\cap D)=\frac{2}{36}=\frac1{18}\), alors que \(P(C)P(D)=\frac{4}{54}=\frac{2}{27}\neq\frac{1}{18}\) : \(C\) et \(D\) ne sont <b>pas</b> indépendants. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 4 — Nombres de Mersenne : suite et raisonnement", points: 3, chapitres: [3, 1],
      enonce: R`<p>On définit la suite \((u_n)\) par \(u_0=0\) et \(u_{n+1}=2u_n+1\) pour tout entier naturel \(n\).</p>
<ol>
<li>En étudiant \(v_n=u_n+1\), montrer que \(u_n=2^n-1\).</li>
<li>Que renvoie <code>liste(5)</code> ?
<pre><code>def liste(n):
    L = [0]
    for k in range(n):
        L.append(2*L[-1] + 1)
    return L</code></pre></li>
<li>Soit \(n\geqslant 2\) un entier non premier : \(n=ab\) avec \(a\) et \(b\) entiers, \(a\geqslant 2\), \(b\geqslant 2\). On pose \(q=2^a\).<br>
a) Montrer que \(2^n-1=(q-1)(1+q+q^2+\dots+q^{b-1})\).<br>
b) En déduire que \(2^n-1\) n'est pas premier.<br>
c) Énoncer la contraposée du résultat démontré.</li>
<li>La réciproque de la contraposée, « si \(n\) est premier, alors \(2^n-1\) est premier », est-elle vraie ? (On pourra calculer \(23\times 89\).)</li>
</ol>`,
      correction: R`<ol>
<li>\(v_{n+1}=u_{n+1}+1=2u_n+2=2v_n\) : \((v_n)\) est géométrique de raison 2, de premier terme \(v_0=1\). Donc \(v_n=2^n\) et \(u_n=2^n-1\). <i>(0,75 pt)</i></li>
<li><code>L[-1]</code> est le dernier élément ; on ajoute 5 termes : <code>[0, 1, 3, 7, 15, 31]</code>, c'est-à-dire \(u_0,\dots,u_5\). <i>(0,5 pt)</i></li>
<li>a) \(q\neq 1\), et la somme des \(b\) premiers termes d'une suite géométrique de raison \(q\) vaut \(1+q+\dots+q^{b-1}=\dfrac{q^b-1}{q-1}\). Donc \((q-1)(1+q+\dots+q^{b-1})=q^b-1=2^{ab}-1=2^n-1\). <i>(0,5 pt)</i><br>
b) Ainsi \(2^a-1\) divise \(2^n-1\). Or \(a\geqslant 2\) donne \(2^a-1\geqslant 3\gt 1\), et \(a\lt n\) (car \(b\geqslant 2\)) donne \(2^a-1\lt 2^n-1\). \(2^n-1\) a un diviseur strictement compris entre 1 et lui-même : il n'est pas premier. <i>(0,5 pt)</i><br>
c) Contraposée : « si \(2^n-1\) est premier (\(n\geqslant 2\)), alors \(n\) est premier ». <i>(0,25 pt)</i></li>
<li>Non. \(11\) est premier, mais \(2^{11}-1=2047=23\times 89\) (\(23\times 89=2047\)) n'est pas premier : c'est un contre-exemple. La primalité de \(n\) est une condition <b>nécessaire</b>, pas suffisante, pour que \(2^n-1\) soit premier. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Exigeant", titre: "Sujet exigeant n°10", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 7, 8, 9, 10],
  automatismes: [
    { q: R`\(-2^4=\)`,
      choix: [R`\(16\)`, R`\(8\)`, R`\(-8\)`, R`\(-16\)`], bonne: 3,
      explication: R`La puissance est prioritaire sur le signe : \(-2^4=-(2^4)=-16\), alors que \((-2)^4=16\).` },
    { q: R`L'ensemble des solutions de \(\dfrac1x=x\) est :`,
      choix: [R`\(\{1\}\)`, R`\(\{0;1\}\)`, R`\(\{-1;1\}\)`, R`\(\varnothing\)`], bonne: 2,
      explication: R`Pour \(x\neq 0\) : \(\frac1x=x\iff x^2=1\iff x=1\) ou \(x=-1\).` },
    { q: R`La dérivée de \(f(x)=x^2\,\mathrm{e}^{x}\) est :`,
      choix: [R`\(2x\,\mathrm{e}^{x}\)`, R`\((x^2+2x)\,\mathrm{e}^{x}\)`, R`\(x^2\,\mathrm{e}^{x}\)`, R`\((x^2+2)\,\mathrm{e}^{x}\)`], bonne: 1,
      explication: R`\((uv)'=u'v+uv'=2x\,\mathrm{e}^x+x^2\,\mathrm{e}^x=(x^2+2x)\,\mathrm{e}^x\).` },
    { q: R`Pour tout réel \(x\), \(\mathrm{e}^{x}\times\mathrm{e}^{1-x}=\)`,
      choix: [R`\(\mathrm{e}^{x-x^2}\)`, R`\(1\)`, R`\(\mathrm{e}\)`, R`\(\mathrm{e}^{2x+1}\)`], bonne: 2,
      explication: R`\(\mathrm{e}^{x+(1-x)}=\mathrm{e}^1=\mathrm{e}\).` },
    { q: R`\(\cos\left(-\dfrac{\pi}{3}\right)=\)`,
      choix: [R`\(-\dfrac12\)`, R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`, R`\(\dfrac{\sqrt3}{2}\)`], bonne: 1,
      explication: R`Le cosinus est pair : \(\cos\left(-\frac{\pi}{3}\right)=\cos\frac{\pi}{3}=\frac12\).` },
    { q: R`Les vecteurs \(\vec u(2;-6)\) et \(\vec v(-1;3)\) sont :`,
      choix: [R`orthogonaux`, R`colinéaires`, R`de même norme`, R`ni colinéaires ni orthogonaux`], bonne: 1,
      explication: R`\(\vec u=-2\vec v\) (déterminant \(2\times 3-(-6)\times(-1)=0\)) : colinéaires. \(\vec u\cdot\vec v=-2-18=-20\neq 0\).` },
    { q: R`\(u_0=1\) et \(u_{n+1}=u_n+4\). Alors \(u_{10}=\)`,
      choix: [R`\(41\)`, R`\(44\)`, R`\(40\)`, R`\(45\)`], bonne: 0,
      explication: R`Suite arithmétique : \(u_n=1+4n\), donc \(u_{10}=41\).` },
    { q: R`La suite définie par \(u_n=-2\times\left(\dfrac13\right)^n\) est :`,
      choix: [R`décroissante`, R`croissante`, R`constante`, R`ni croissante ni décroissante`], bonne: 1,
      explication: R`\(u_{n+1}-u_n=-2\left(\frac13\right)^n\left(\frac13-1\right)=\frac43\left(\frac13\right)^n\gt 0\). Piège : raison entre 0 et 1, mais premier terme <b>négatif</b>.` },
    { q: R`\(P(A)=0{,}7\) et \(P_A(B)=0{,}2\). Alors \(P(A\cap\overline B)=\)`,
      choix: [R`\(0{,}14\)`, R`\(0{,}24\)`, R`\(0{,}8\)`, R`\(0{,}56\)`], bonne: 3,
      explication: R`\(P_A(\overline B)=1-0{,}2=0{,}8\), donc \(P(A\cap\overline B)=0{,}7\times 0{,}8=0{,}56\).` },
    { q: R`Le gain \(X\) d'un jeu vérifie \(E(X)=-0{,}5\) €. Cela signifie que :`,
      choix: [R`on perd 0,50 € à chaque partie`, R`on perd en moyenne environ 0,50 € par partie sur un grand nombre de parties`, R`on a une chance sur deux de perdre`, R`le jeu est favorable au joueur`], bonne: 1,
      explication: R`L'espérance est une moyenne sur un grand nombre de répétitions, pas le résultat de chaque partie.` },
    { q: R`\(f\) est dérivable sur \(\mathbb{R}\) avec \(f'(x)=(x-2)\,\mathrm{e}^{x}\). Alors :`,
      choix: [R`\(f\) admet un maximum en 2`, R`\(f\) admet un minimum en 2`, R`\(f\) est croissante sur \(\mathbb{R}\)`, R`\(f(2)=0\)`], bonne: 1,
      explication: R`\(f'\) a le signe de \(x-2\) : négative puis positive. \(f\) décroît puis croît : minimum en 2. On ne connaît pas \(f(2)\).` },
    { q: R`Une équation du cercle de diamètre \([AB]\), avec \(A(1;1)\) et \(B(5;3)\), est :`,
      choix: [R`\((x-3)^2+(y-2)^2=20\)`, R`\((x-3)^2+(y-2)^2=5\)`, R`\((x+3)^2+(y+2)^2=5\)`, R`\((x-3)^2+(y-2)^2=\sqrt5\)`], bonne: 1,
      explication: R`Centre : milieu \((3;2)\). Rayon \(\frac{AB}{2}=\frac{\sqrt{16+4}}{2}=\sqrt5\), donc \(r^2=5\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Parabole, sécantes et tangentes perpendiculaires", points: 5, chapitres: [2, 9, 4, 8],
      enonce: R`<p>Dans un repère orthonormé, on note \(\mathcal{P}\) la parabole d'équation \(y=x^2\) et \(A(0;-1)\). Pour tout réel \(m\), \(D_m\) est la droite de coefficient directeur \(m\) passant par \(A\).</p>
<ol>
<li>Montrer que les abscisses des points communs à \(D_m\) et \(\mathcal{P}\) sont les solutions de \(x^2-mx+1=0\). Discuter, selon \(m\), le nombre de points communs.</li>
<li>Vérifier que \(D_2\) est la tangente à \(\mathcal{P}\) en un point que l'on précisera.</li>
<li>On suppose \(m\gt 2\) ou \(m\lt -2\), et on note \(M_1\), \(M_2\) les points communs et \(I_m\) le milieu de \([M_1M_2]\). Montrer, sans calculer \(M_1\) et \(M_2\), que \(I_m\) appartient à la parabole d'équation \(y=2x^2-1\).</li>
<li>Soit \(a\) et \(b\) deux réels distincts, \(T_a\) et \(T_b\) les tangentes à \(\mathcal{P}\) aux points d'abscisses \(a\) et \(b\).<br>
a) Montrer que \(T_a\) et \(T_b\) sont perpendiculaires si et seulement si \(ab=-\frac14\).<br>
b) Montrer que \(T_a\) et \(T_b\) se coupent au point de coordonnées \(\left(\frac{a+b}{2};ab\right)\).<br>
c) En déduire que deux tangentes perpendiculaires à \(\mathcal{P}\) se coupent toujours sur une droite fixe, dont on donnera l'équation.</li>
</ol>`,
      correction: R`<ol>
<li>\(D_m : y=mx-1\). Un point \(M(x;y)\) est commun ssi \(y=x^2\) et \(y=mx-1\), d'où \(x^2=mx-1\iff x^2-mx+1=0\). \(\Delta=m^2-4=(m-2)(m+2)\) :
<ul><li>\(m\lt -2\) ou \(m\gt 2\) : deux points communs ;</li><li>\(m=\pm 2\) : un seul point ;</li><li>\(-2\lt m\lt 2\) : aucun.</li></ul>
<i>(1,25 pt)</i></li>
<li>Pour \(m=2\) : \(x^2-2x+1=(x-1)^2=0\), point commun \((1;1)\). La tangente à \(\mathcal{P}\) en 1 est \(y=2(x-1)+1=2x-1\), c'est bien \(D_2\). <i>(0,5 pt)</i></li>
<li>Les abscisses \(x_1\), \(x_2\) de \(M_1\), \(M_2\) sont les racines de \(x^2-mx+1\), de somme \(-\frac ba=m\). Donc \(x_I=\frac{x_1+x_2}{2}=\frac m2\). \(I_m\) est sur \(D_m\) (milieu de deux points de \(D_m\)), donc \(y_I=m\times\frac m2-1=\frac{m^2}{2}-1\).<br>
Or \(2x_I^2-1=2\times\frac{m^2}{4}-1=\frac{m^2}{2}-1=y_I\) : \(I_m\) appartient à la parabole \(y=2x^2-1\) (plus précisément à sa partie d'abscisses \(|x|\gt 1\)). <i>(1,25 pt)</i></li>
<li>a) \(T_a : y=2a(x-a)+a^2=2ax-a^2\), de vecteur directeur \(\vec u_a(1;2a)\) ; de même \(\vec u_b(1;2b)\). Les tangentes sont perpendiculaires ssi \(\vec u_a\cdot\vec u_b=0\iff 1+4ab=0\iff ab=-\frac14\). <i>(0,75 pt)</i><br>
b) \(2ax-a^2=2bx-b^2\iff 2(a-b)x=a^2-b^2=(a-b)(a+b)\iff x=\frac{a+b}{2}\) (car \(a\neq b\)). Alors \(y=2a\times\frac{a+b}{2}-a^2=a^2+ab-a^2=ab\). <i>(0,75 pt)</i><br>
c) Si \(T_a\perp T_b\), alors \(ab=-\frac14\) et le point d'intersection a pour ordonnée \(-\frac14\) : il est sur la droite fixe d'équation \(y=-\frac14\) (appelée directrice de la parabole). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Al-Kashi : démonstration et résolution d'un triangle", points: 4, chapitres: [8, 7],
      enonce: R`<p>Soit \(ABC\) un triangle tel que \(AB=3\), \(AC=5\) et \(\widehat{BAC}=\dfrac{2\pi}{3}\).</p>
<ol>
<li>Démontrer, dans un triangle quelconque, la formule d'Al-Kashi : \(BC^2=AB^2+AC^2-2\,AB\times AC\times\cos\widehat{BAC}\).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) puis \(BC\).</li>
<li>Calculer \(\cos\widehat{ABC}\), puis \(\sin\widehat{ABC}\).</li>
<li>Soit \(I\) le milieu de \([BC]\). En utilisant \(\overrightarrow{AI}=\frac12\left(\overrightarrow{AB}+\overrightarrow{AC}\right)\), calculer la longueur \(AI\).</li>
<li>Calculer l'aire du triangle \(ABC\), puis la distance de \(A\) à la droite \((BC)\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}\), donc
\[BC^2=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2=AB^2+AC^2-2\,AB\times AC\times\cos\widehat{BAC}.\]
<i>(0,75 pt)</i></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=3\times 5\times\cos\frac{2\pi}{3}=15\times\left(-\frac12\right)=-\frac{15}{2}\).<br>
\(BC^2=9+25-2\times\left(-\frac{15}{2}\right)=34+15=49\), donc \(BC=7\). <i>(0,75 pt)</i></li>
<li>Al-Kashi en \(B\) : \(AC^2=AB^2+BC^2-2\,AB\times BC\cos\widehat{ABC}\), soit \(25=9+49-42\cos\widehat{ABC}\), d'où \(\cos\widehat{ABC}=\frac{33}{42}=\frac{11}{14}\).<br>
\(\sin^2\widehat{ABC}=1-\frac{121}{196}=\frac{75}{196}\) et, l'angle étant compris entre 0 et \(\pi\), son sinus est positif : \(\sin\widehat{ABC}=\frac{\sqrt{75}}{14}=\frac{5\sqrt3}{14}\). <i>(1 pt)</i></li>
<li>\(AI^2=\frac14\left(AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AC^2\right)=\frac14(9-15+25)=\frac{19}{4}\), donc \(AI=\dfrac{\sqrt{19}}{2}\). <i>(0,75 pt)</i></li>
<li>Aire \(=\frac12\,AB\times AC\times\sin\widehat{BAC}=\frac12\times 15\times\frac{\sqrt3}{2}=\frac{15\sqrt3}{4}\).<br>
Avec \(h\) la distance de \(A\) à \((BC)\) : aire \(=\frac12\times BC\times h\), d'où \(h=\frac{2\times 15\sqrt3/4}{7}=\frac{15\sqrt3}{14}\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Contrôle de cohérence : l'aire vaut aussi \(\frac12\,BA\times BC\times\sin\widehat{ABC}=\frac12\times 3\times 7\times\frac{5\sqrt3}{14}=\frac{15\sqrt3}{4}\).</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Le bus ou pas ? Probabilités et suite", points: 5, chapitres: [10, 3, 1],
      enonce: R`<p>Chaque matin, Léa va au lycée en bus ou à vélo. Si elle prend le bus un jour, elle le reprend le lendemain avec la probabilité \(0{,}7\) ; si elle ne le prend pas, elle le prend le lendemain avec la probabilité \(0{,}4\). Le premier jour, elle prend le bus avec la probabilité \(0{,}5\). On note \(B_n\) l'événement « Léa prend le bus le jour \(n\) » et \(p_n=P(B_n)\), donc \(p_1=0{,}5\).</p>
<ol>
<li>Calculer \(p_2\). Sachant que Léa a pris le bus le jour 2, quelle est la probabilité qu'elle l'ait pris le jour 1 ?</li>
<li>Montrer que, pour tout \(n\geqslant 1\), \(p_{n+1}=0{,}3\,p_n+0{,}4\).</li>
<li>On pose \(v_n=p_n-\frac47\). Montrer que \((v_n)\) est géométrique, puis que \(p_n=\dfrac47-\dfrac{1}{14}\times 0{,}3^{\,n-1}\).</li>
<li>Étudier le sens de variation de \((p_n)\). La proposition « il existe un jour \(n\) tel que \(p_n\geqslant 0{,}6\) » est-elle vraie ?</li>
<li>On considère la fonction Python suivante.
<pre><code>def seuil(e):
    n = 1
    p = 0.5
    while 4/7 - p &gt;= e:
        p = 0.3*p + 0.4
        n = n + 1
    return n</code></pre>
Que renvoie <code>seuil(0.001)</code> ? Justifier par le calcul (on donne \(0{,}3^3=0{,}027\) et \(0{,}3^4=0{,}0081\)).</li>
</ol>`,
      correction: R`<ol>
<li>Probabilités totales : \(p_2=0{,}5\times 0{,}7+0{,}5\times 0{,}4=0{,}35+0{,}2=0{,}55\).
\[P_{B_2}(B_1)=\frac{P(B_1\cap B_2)}{P(B_2)}=\frac{0{,}35}{0{,}55}=\frac{7}{11}.\]
<i>(1 pt)</i></li>
<li>\(B_n\) et \(\overline{B_n}\) forment une partition :
\[p_{n+1}=P(B_n)P_{B_n}(B_{n+1})+P(\overline{B_n})P_{\overline{B_n}}(B_{n+1})=0{,}7p_n+0{,}4(1-p_n)=0{,}3p_n+0{,}4.\]
<i>(0,75 pt)</i></li>
<li>\(v_{n+1}=0{,}3p_n+0{,}4-\frac47=0{,}3p_n-\frac{6}{35}\). Or \(0{,}3v_n=0{,}3p_n-\frac{3}{10}\times\frac47=0{,}3p_n-\frac{6}{35}\). Donc \(v_{n+1}=0{,}3\,v_n\) : \((v_n)\) est géométrique de raison \(0{,}3\), de premier terme \(v_1=\frac12-\frac47=-\frac{1}{14}\).<br>
D'où \(v_n=-\frac1{14}\times 0{,}3^{n-1}\) et \(p_n=\frac47-\frac{1}{14}\times 0{,}3^{n-1}\). <i>(1,25 pt)</i></li>
<li>\(p_{n+1}-p_n=-\frac1{14}\times 0{,}3^{n}+\frac1{14}\times 0{,}3^{n-1}=\frac1{14}\times 0{,}3^{n-1}(1-0{,}3)\gt 0\) : \((p_n)\) est strictement croissante.<br>
Mais \(p_n\lt\frac47\) pour tout \(n\) (on retranche un nombre strictement positif), et \(\frac47\lt 0{,}6\) (car \(4\lt 4{,}2\)). Donc \(p_n\lt 0{,}6\) pour tout \(n\) : la proposition est <b>fausse</b> (une suite croissante n'est pas forcément « aussi grande qu'on veut »). <i>(1 pt)</i></li>
<li>La fonction renvoie le premier \(n\) tel que \(\frac47-p_n\lt 0{,}001\), c'est-à-dire \(\frac1{14}\times 0{,}3^{n-1}\lt 0{,}001\iff 0{,}3^{n-1}\lt 0{,}014\).<br>
\(0{,}3^3=0{,}027\geqslant 0{,}014\) et \(0{,}3^4=0{,}0081\lt 0{,}014\) ; la suite \((0{,}3^k)\) étant décroissante, le premier exposant convenable est \(n-1=4\). <code>seuil(0.001)</code> renvoie <b>5</b>. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});

})();
