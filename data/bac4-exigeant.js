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

})();
