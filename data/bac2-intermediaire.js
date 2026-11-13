// Sujets type bac — niveau Intermédiaire (10 sujets). Format : voir SCHEMA.md.
(function () {
const R = String.raw;
const BAC = (window.BAC = window.BAC || []);

BAC.push({
 "niveau": "Intermédiaire",
 "titre": "Sujet intermédiaire n°1",
 "duree": "2 h",
 "calculatrice": false,
 "chapitres": [
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
   "q": "\\(\\mathrm{e}^{3}\\times\\mathrm{e}^{-5}=\\)",
   "choix": [
    "\\(\\mathrm{e}^{-15}\\)",
    "\\(\\mathrm{e}^{-2}\\)",
    "\\(\\mathrm{e}^{8}\\)",
    "\\(\\mathrm{e}^{2}\\)"
   ],
   "bonne": 1,
   "explication": "\\(\\mathrm{e}^a\\times\\mathrm{e}^b=\\mathrm{e}^{a+b}\\), donc \\(\\mathrm{e}^{3+(-5)}=\\mathrm{e}^{-2}\\)."
  },
  {
   "q": "La dérivée de \\(f(x)=\\mathrm{e}^{2x}\\) est :",
   "choix": [
    "\\(\\mathrm{e}^{2x}\\)",
    "\\(2x\\,\\mathrm{e}^{2x}\\)",
    "\\(2\\,\\mathrm{e}^{2x}\\)",
    "\\(\\mathrm{e}^{2}\\)"
   ],
   "bonne": 2,
   "explication": "\\(\\left(\\mathrm{e}^{ax+b}\\right)'=a\\,\\mathrm{e}^{ax+b}\\), ici \\(a=2\\)."
  },
  {
   "q": "\\(\\cos\\left(\\dfrac{\\pi}{3}\\right)=\\)",
   "choix": [
    "\\(\\dfrac{\\sqrt{3}}{2}\\)",
    "\\(\\dfrac{1}{2}\\)",
    "\\(\\dfrac{\\sqrt{2}}{2}\\)",
    "\\(-\\dfrac{1}{2}\\)"
   ],
   "bonne": 1,
   "explication": "Valeur remarquable : \\(\\cos\\frac{\\pi}{3}=\\frac12\\) et \\(\\sin\\frac{\\pi}{3}=\\frac{\\sqrt3}{2}\\)."
  },
  {
   "q": "\\(\\cos\\left(\\dfrac{3\\pi}{4}\\right)=\\)",
   "choix": [
    "\\(\\dfrac{\\sqrt{2}}{2}\\)",
    "\\(-\\dfrac{\\sqrt{3}}{2}\\)",
    "\\(-\\dfrac{\\sqrt{2}}{2}\\)",
    "\\(-\\dfrac{1}{2}\\)"
   ],
   "bonne": 2,
   "explication": "\\(\\frac{3\\pi}{4}=\\pi-\\frac{\\pi}{4}\\) et \\(\\cos(\\pi-x)=-\\cos x\\), donc \\(\\cos\\frac{3\\pi}{4}=-\\frac{\\sqrt2}{2}\\)."
  },
  {
   "q": "Dans un repère orthonormé, \\(\\vec u(2;-3)\\) et \\(\\vec v(6;4)\\). Alors :",
   "choix": [
    "\\(\\vec u\\cdot\\vec v=24\\)",
    "\\(\\vec u\\) et \\(\\vec v\\) sont colinéaires",
    "\\(\\vec u\\) et \\(\\vec v\\) sont orthogonaux",
    "\\(\\vec u\\cdot\\vec v=-12\\)"
   ],
   "bonne": 2,
   "explication": "\\(\\vec u\\cdot\\vec v=2\\times 6+(-3)\\times 4=12-12=0\\) : les vecteurs sont orthogonaux."
  },
  {
   "q": "Dans un repère orthonormé, la norme de \\(\\vec u(3;-4)\\) vaut :",
   "choix": [
    "\\(-1\\)",
    "\\(7\\)",
    "\\(25\\)",
    "\\(5\\)"
   ],
   "bonne": 3,
   "explication": "\\(\\|\\vec u\\|=\\sqrt{3^2+(-4)^2}=\\sqrt{25}=5\\)."
  },
  {
   "q": "Une équation de la droite passant par l'origine et de vecteur normal \\(\\vec n(2;-1)\\) est :",
   "choix": [
    "\\(2x-y=0\\)",
    "\\(x+2y=0\\)",
    "\\(-x+2y=0\\)",
    "\\(2x-y=1\\)"
   ],
   "bonne": 0,
   "explication": "Un vecteur normal \\(\\vec n(a;b)\\) donne une équation \\(ax+by+c=0\\) : \\(2x-y+c=0\\), et \\(O\\) appartient à la droite donc \\(c=0\\)."
  },
  {
   "q": "Une variable aléatoire \\(X\\) vérifie \\(P(X=0)=0{,}2\\), \\(P(X=1)=0{,}5\\), \\(P(X=2)=0{,}3\\). Alors \\(E(X)=\\)",
   "choix": [
    "\\(1\\)",
    "\\(1{,}1\\)",
    "\\(0{,}8\\)",
    "\\(1{,}5\\)"
   ],
   "bonne": 1,
   "explication": "\\(E(X)=0\\times 0{,}2+1\\times 0{,}5+2\\times 0{,}3=0{,}5+0{,}6=1{,}1\\)."
  },
  {
   "q": "\\(\\dfrac{2}{3}\\div\\dfrac{4}{9}=\\)",
   "choix": [
    "\\(\\dfrac{8}{27}\\)",
    "\\(\\dfrac{2}{3}\\)",
    "\\(\\dfrac{3}{2}\\)",
    "\\(\\dfrac{6}{12}\\)"
   ],
   "bonne": 2,
   "explication": "Diviser, c'est multiplier par l'inverse : \\(\\frac23\\times\\frac94=\\frac{18}{12}=\\frac32\\)."
  },
  {
   "q": "Un prix passe de 50 € à 65 €. Le taux d'évolution est :",
   "choix": [
    "\\(+15\\) %",
    "\\(+30\\) %",
    "\\(+23\\) %",
    "\\(+1{,}3\\) %"
   ],
   "bonne": 1,
   "explication": "\\(\\dfrac{65-50}{50}=\\dfrac{15}{50}=0{,}3\\), soit \\(+30\\) %."
  },
  {
   "q": "\\((u_n)\\) est géométrique de premier terme \\(u_0=3\\) et de raison \\(2\\). Alors \\(u_4=\\)",
   "choix": [
    "\\(24\\)",
    "\\(11\\)",
    "\\(48\\)",
    "\\(96\\)"
   ],
   "bonne": 2,
   "explication": "\\(u_n=u_0\\times q^n\\), donc \\(u_4=3\\times 2^4=3\\times 16=48\\)."
  },
  {
   "q": "Une factorisation de \\(x^2-16\\) est :",
   "choix": [
    "\\((x-4)^2\\)",
    "\\((x-4)(x+4)\\)",
    "\\((x-8)(x+8)\\)",
    "\\(x(x-16)\\)"
   ],
   "bonne": 1,
   "explication": "Identité remarquable \\(a^2-b^2=(a-b)(a+b)\\) avec \\(b=4\\)."
  }
 ],
 "exercices": [
  {
   "titre": "Exercice 1 — Fonction exponentielle",
   "points": 4,
   "chapitres": [
    6,
    4,
    5
   ],
   "enonce": "<p>On considère la fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par \\(f(x)=(2x-1)\\,\\mathrm{e}^{x}\\), et \\(\\mathcal{C}\\) sa courbe dans un repère.</p>\n<ol>\n<li>Calculer \\(f(0)\\). Résoudre l'équation \\(f(x)=0\\), puis étudier le signe de \\(f(x)\\) sur \\(\\mathbb{R}\\).</li>\n<li>Montrer que pour tout réel \\(x\\), \\(f'(x)=(2x+1)\\,\\mathrm{e}^{x}\\).</li>\n<li>Dresser le tableau de variations de \\(f\\) (les limites ne sont pas demandées). Préciser la valeur exacte du minimum.</li>\n<li>Déterminer une équation de la tangente \\(T\\) à \\(\\mathcal{C}\\) au point d'abscisse 0.</li>\n</ol>",
   "correction": "<ol>\n<li>\\(f(0)=(0-1)\\times\\mathrm{e}^0=-1\\).<br>\nComme \\(\\mathrm{e}^x\\gt 0\\) pour tout \\(x\\), \\(f(x)=0\\iff 2x-1=0\\iff x=\\frac12\\). De plus \\(f(x)\\) est du signe de \\(2x-1\\) : \\(f(x)\\lt 0\\) sur \\(\\left]-\\infty;\\frac12\\right[\\) et \\(f(x)\\gt 0\\) sur \\(\\left]\\frac12;+\\infty\\right[\\). <i>(1 pt)</i></li>\n<li>\\(f=uv\\) avec \\(u(x)=2x-1\\), \\(u'(x)=2\\), \\(v(x)=\\mathrm{e}^x\\), \\(v'(x)=\\mathrm{e}^x\\) :\n\\[f'(x)=2\\,\\mathrm{e}^x+(2x-1)\\,\\mathrm{e}^x=(2+2x-1)\\,\\mathrm{e}^x=(2x+1)\\,\\mathrm{e}^x.\\]\n<i>(1 pt)</i></li>\n<li>\\(\\mathrm{e}^x\\gt 0\\), donc \\(f'(x)\\) est du signe de \\(2x+1\\), qui s'annule en \\(-\\frac12\\).\n\\[f\\left(-\\tfrac12\\right)=(-1-1)\\,\\mathrm{e}^{-1/2}=-2\\,\\mathrm{e}^{-1/2}.\\]\n<table class=\"tv\"><tr><td>\\(x\\)</td><td>\\(-\\infty\\)</td><td></td><td>\\(-\\frac12\\)</td><td></td><td>\\(+\\infty\\)</td></tr>\n<tr><td>\\(f'(x)\\)</td><td></td><td>\\(-\\)</td><td>0</td><td>\\(+\\)</td><td></td></tr>\n<tr><td>\\(f\\)</td><td></td><td>↘</td><td>\\(-2\\,\\mathrm{e}^{-1/2}\\)</td><td>↗</td><td></td></tr></table>\nLe minimum de \\(f\\) sur \\(\\mathbb{R}\\) vaut \\(-2\\,\\mathrm{e}^{-1/2}\\) (environ \\(-1{,}21\\)), atteint en \\(x=-\\frac12\\). <i>(1 pt)</i></li>\n<li>\\(f(0)=-1\\) et \\(f'(0)=(0+1)\\,\\mathrm{e}^0=1\\), donc \\(T : y=f'(0)(x-0)+f(0)\\), soit \\(y=x-1\\). <i>(1 pt)</i></li>\n</ol>\n<div class=\"warn\">Ne pas oublier que \\(\\mathrm{e}^x\\) est <b>toujours strictement positif</b> : c'est ce qui permet d'étudier seulement le signe du facteur affine.</div>\n<p><b>Total : 4 points.</b></p>"
  },
  {
   "titre": "Exercice 2 — Géométrie repérée et produit scalaire",
   "points": 4,
   "chapitres": [
    9,
    8
   ],
   "enonce": "<p>Dans un repère orthonormé, on considère les points \\(A(-1;2)\\), \\(B(3;4)\\) et \\(C(1;-2)\\).</p>\n<ol>\n<li>Calculer \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\), puis les longueurs \\(AB\\) et \\(AC\\). Quelle est la nature du triangle \\(ABC\\) ?</li>\n<li>On note \\(\\mathcal{E}\\) l'ensemble des points \\(M(x;y)\\) tels que \\(\\overrightarrow{MB}\\cdot\\overrightarrow{MC}=0\\).<br>\na) Montrer que \\(M\\in\\mathcal{E}\\iff x^2+y^2-4x-2y-5=0\\).<br>\nb) En déduire que \\(\\mathcal{E}\\) est un cercle dont on donnera le centre \\(\\Omega\\) et le rayon. Vérifier que \\(A\\in\\mathcal{E}\\).</li>\n<li>a) Montrer qu'une équation de la droite \\((BC)\\) est \\(3x-y-5=0\\).<br>\nb) Déterminer une équation cartésienne de la droite \\(\\Delta\\) passant par \\(A\\) et perpendiculaire à \\((BC)\\).</li>\n<li>Déterminer les coordonnées du point \\(H\\), intersection de \\(\\Delta\\) et \\((BC)\\). Que remarque-t-on ?</li>\n</ol>",
   "correction": "<ol>\n<li>\\(\\overrightarrow{AB}(4;2)\\) et \\(\\overrightarrow{AC}(2;-4)\\), donc \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=4\\times 2+2\\times(-4)=0\\).<br>\n\\(AB=\\sqrt{16+4}=\\sqrt{20}=2\\sqrt5\\) et \\(AC=\\sqrt{4+16}=2\\sqrt5\\).<br>\nLe triangle \\(ABC\\) est donc <b>rectangle isocèle en \\(A\\)</b>. <i>(1 pt)</i></li>\n<li>a) \\(\\overrightarrow{MB}(3-x;4-y)\\) et \\(\\overrightarrow{MC}(1-x;-2-y)\\), donc\n\\[\\overrightarrow{MB}\\cdot\\overrightarrow{MC}=(3-x)(1-x)+(4-y)(-2-y)=x^2-4x+3+y^2-2y-8=x^2+y^2-4x-2y-5.\\]\n<i>(0,75 pt)</i><br>\nb) On complète les carrés : \\(x^2-4x=(x-2)^2-4\\) et \\(y^2-2y=(y-1)^2-1\\). L'équation devient\n\\[(x-2)^2+(y-1)^2=10.\\]\n\\(\\mathcal{E}\\) est le cercle de centre \\(\\Omega(2;1)\\) (milieu de \\([BC]\\)) et de rayon \\(\\sqrt{10}\\).<br>\nPour \\(A\\) : \\((-1-2)^2+(2-1)^2=9+1=10\\), donc \\(A\\in\\mathcal{E}\\) (logique, puisque l'angle en \\(A\\) est droit). <i>(0,75 pt)</i></li>\n<li>a) \\(B\\) : \\(3\\times 3-4-5=0\\) ✓ et \\(C\\) : \\(3\\times 1-(-2)-5=0\\) ✓. Les deux points vérifient l'équation, c'est donc bien une équation de \\((BC)\\). <i>(0,5 pt)</i><br>\nb) \\(\\overrightarrow{BC}(-2;-6)\\), ou plus simplement \\(\\vec n(1;3)\\), est un vecteur normal à \\(\\Delta\\). Donc \\(\\Delta : x+3y+c=0\\). Comme \\(A\\in\\Delta\\) : \\(-1+6+c=0\\), d'où \\(c=-5\\) et \\(\\Delta : x+3y-5=0\\). <i>(0,5 pt)</i></li>\n<li>On résout \\(\\begin{cases}x+3y=5\\\\ 3x-y=5\\end{cases}\\). La deuxième équation donne \\(y=3x-5\\) ; en remplaçant : \\(x+9x-15=5\\), donc \\(x=2\\) puis \\(y=1\\).<br>\n\\(H(2;1)\\) : le pied de la hauteur issue de \\(A\\) est le centre \\(\\Omega\\) du cercle, c'est-à-dire le milieu de \\([BC]\\). C'est normal : dans un triangle isocèle en \\(A\\), la hauteur issue de \\(A\\) est aussi la médiane. <i>(0,5 pt)</i></li>\n</ol>\n<p><b>Total : 4 points.</b></p>"
  },
  {
   "titre": "Exercice 3 — Trigonométrie",
   "points": 2,
   "chapitres": [
    7
   ],
   "enonce": "<ol>\n<li>Déterminer la valeur exacte de \\(\\cos\\left(\\dfrac{17\\pi}{6}\\right)\\).</li>\n<li>Résoudre dans \\(]-\\pi;\\pi]\\) l'équation \\(\\cos x=-\\dfrac12\\).</li>\n<li>Simplifier, pour tout réel \\(x\\) : \\(A(x)=\\sin(\\pi-x)+\\cos\\left(\\dfrac{\\pi}{2}+x\\right)+\\cos(-x)-\\cos(\\pi+x)\\).</li>\n</ol>",
   "correction": "<ol>\n<li>\\(\\dfrac{17\\pi}{6}=\\dfrac{12\\pi}{6}+\\dfrac{5\\pi}{6}=2\\pi+\\dfrac{5\\pi}{6}\\). Le cosinus est \\(2\\pi\\)-périodique, donc \\(\\cos\\dfrac{17\\pi}{6}=\\cos\\dfrac{5\\pi}{6}=-\\dfrac{\\sqrt3}{2}\\). <i>(0,5 pt)</i></li>\n<li>\\(\\cos\\dfrac{2\\pi}{3}=-\\dfrac12\\). Sur le cercle trigonométrique, deux points ont pour abscisse \\(-\\frac12\\) : ceux associés à \\(\\frac{2\\pi}{3}\\) et \\(-\\frac{2\\pi}{3}\\). Donc \\(S=\\left\\{-\\dfrac{2\\pi}{3};\\dfrac{2\\pi}{3}\\right\\}\\). <i>(0,75 pt)</i></li>\n<li>\\(\\sin(\\pi-x)=\\sin x\\), \\(\\cos\\left(\\frac{\\pi}{2}+x\\right)=-\\sin x\\), \\(\\cos(-x)=\\cos x\\) et \\(\\cos(\\pi+x)=-\\cos x\\). Donc\n\\[A(x)=\\sin x-\\sin x+\\cos x+\\cos x=2\\cos x.\\]\n<i>(0,75 pt)</i></li>\n</ol>\n<div class=\"astuce\">En cas de doute sur une formule d'angles associés, place les points sur le cercle trigonométrique avec un angle « test » comme \\(\\frac{\\pi}{6}\\).</div>\n<p><b>Total : 2 points.</b></p>"
  },
  {
   "titre": "Exercice 4 — Probabilités et variable aléatoire",
   "points": 4,
   "chapitres": [
    10,
    11
   ],
   "enonce": "<p>Un jeu de fête foraine coûte 3 € la partie. Le joueur lance un dé équilibré à six faces :</p>\n<ul>\n<li>s'il obtient 6, il tire une boule dans l'urne \\(U_1\\) qui contient 3 boules rouges et 1 noire ;</li>\n<li>sinon, il tire une boule dans l'urne \\(U_2\\) qui contient 1 boule rouge et 3 noires.</li>\n</ul>\n<p>Si la boule est rouge et provient de \\(U_1\\), le joueur reçoit 20 € ; si elle est rouge et provient de \\(U_2\\), il reçoit 5 € ; si elle est noire, il ne reçoit rien.</p>\n<p>On note \\(S\\) : « obtenir 6 » et \\(R\\) : « tirer une boule rouge ».</p>\n<ol>\n<li>Représenter la situation par un arbre pondéré.</li>\n<li>Montrer que \\(P(R)=\\dfrac13\\).</li>\n<li>Le joueur a tiré une boule rouge. Quelle est la probabilité qu'il ait obtenu 6 ?</li>\n<li>On note \\(X\\) le gain algébrique du joueur (somme reçue moins la mise de 3 €). Donner la loi de probabilité de \\(X\\).</li>\n<li>Calculer \\(E(X)\\) et \\(V(X)\\). Le jeu est-il favorable au joueur ?</li>\n<li>Quelle devrait être la mise pour que le jeu soit équitable ?</li>\n</ol>",
   "correction": "<ol>\n<li>Arbre : \\(S\\) (\\(\\frac16\\)) puis \\(R\\) (\\(\\frac34\\)) / \\(\\overline{R}\\) (\\(\\frac14\\)) ; \\(\\overline{S}\\) (\\(\\frac56\\)) puis \\(R\\) (\\(\\frac14\\)) / \\(\\overline{R}\\) (\\(\\frac34\\)). <i>(0,5 pt)</i></li>\n<li>Formule des probabilités totales (\\(S\\), \\(\\overline{S}\\) partition) :\n\\[P(R)=\\frac16\\times\\frac34+\\frac56\\times\\frac14=\\frac{3}{24}+\\frac{5}{24}=\\frac{8}{24}=\\frac13.\\]\n<i>(0,75 pt)</i></li>\n<li>\\[P_R(S)=\\frac{P(S\\cap R)}{P(R)}=\\frac{3/24}{1/3}=\\frac{3}{24}\\times 3=\\frac{9}{24}=\\frac38.\\]\n<i>(0,5 pt)</i></li>\n<li>\\(X\\) prend les valeurs \\(20-3=17\\), \\(5-3=2\\) et \\(0-3=-3\\).\n\\(P(X=17)=P(S\\cap R)=\\frac{3}{24}=\\frac18\\), \\(P(X=2)=P(\\overline{S}\\cap R)=\\frac{5}{24}\\), \\(P(X=-3)=P(\\overline{R})=1-\\frac13=\\frac{16}{24}=\\frac23\\).\n<table class=\"tv\"><tr><td>\\(x_i\\)</td><td>\\(-3\\)</td><td>\\(2\\)</td><td>\\(17\\)</td></tr>\n<tr><td>\\(P(X=x_i)\\)</td><td>\\(\\frac{16}{24}\\)</td><td>\\(\\frac{5}{24}\\)</td><td>\\(\\frac{3}{24}\\)</td></tr></table>\nVérification : \\(\\frac{16+5+3}{24}=1\\). <i>(1 pt)</i></li>\n<li>\\[E(X)=\\frac{-3\\times 16+2\\times 5+17\\times 3}{24}=\\frac{-48+10+51}{24}=\\frac{13}{24}\\approx 0{,}54.\\]\n\\(E(X)\\gt 0\\) : en moyenne le joueur gagne environ 0,54 € par partie, le jeu lui est <b>favorable</b>.<br>\n\\(E(X^2)=\\dfrac{9\\times 16+4\\times 5+289\\times 3}{24}=\\dfrac{144+20+867}{24}=\\dfrac{1031}{24}\\), donc\n\\[V(X)=E(X^2)-E(X)^2=\\frac{1031}{24}-\\frac{169}{576}=\\frac{24744-169}{576}=\\frac{24575}{576}\\approx 42{,}66.\\]\n<i>(0,75 pt)</i></li>\n<li>Notons \\(m\\) la mise. L'espérance de la somme reçue est \\(20\\times\\frac{3}{24}+5\\times\\frac{5}{24}=\\frac{60+25}{24}=\\frac{85}{24}\\). Le jeu est équitable si l'espérance du gain est nulle, c'est-à-dire si \\(m=\\dfrac{85}{24}\\approx 3{,}54\\) €. <i>(0,5 pt)</i></li>\n</ol>\n<p><b>Total : 4 points.</b></p>"
  }
 ]
});

})();
