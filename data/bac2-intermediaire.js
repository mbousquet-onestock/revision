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

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°2", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 10, 11],
  automatismes: [
    { q: R`\(\dfrac{3}{4}+\dfrac{5}{6}=\)`, choix: [R`\(\dfrac{8}{10}\)`, R`\(\dfrac{19}{12}\)`, R`\(\dfrac{15}{24}\)`, R`\(\dfrac{4}{3}\)`], bonne: 1,
      explication: R`Dénominateur commun 12 : \(\frac34+\frac56=\frac{9}{12}+\frac{10}{12}=\frac{19}{12}\).` },
    { q: R`Un prix augmente de 20 % puis baisse de 20 %. Globalement, il :`, choix: [R`ne change pas`, R`baisse de 4 %`, R`augmente de 4 %`, R`baisse de 2 %`], bonne: 1,
      explication: R`Coefficient global : \(1{,}2\times 0{,}8=0{,}96\), soit une baisse de 4 %.` },
    { q: R`\(\left(2^{3}\right)^{2}=\)`, choix: [R`\(2^{5}\)`, R`\(2^{9}\)`, R`\(2^{6}\)`, R`\(2^{8}\)`], bonne: 2,
      explication: R`\((a^m)^p=a^{m\times p}\), donc \((2^3)^2=2^{6}=64\).` },
    { q: R`L'ensemble des solutions de \(x^2=5x\) est :`, choix: [R`\(\{5\}\)`, R`\(\{-5;5\}\)`, R`\(\{0;5\}\)`, R`\(\{0\}\)`], bonne: 2,
      explication: R`\(x^2-5x=0\iff x(x-5)=0\iff x=0\) ou \(x=5\). Ne jamais diviser par \(x\) sans savoir s'il est nul !` },
    { q: R`Le discriminant de \(2x^2-3x+1\) vaut :`, choix: [R`\(1\)`, R`\(17\)`, R`\(-1\)`, R`\(5\)`], bonne: 0,
      explication: R`\(\Delta=b^2-4ac=(-3)^2-4\times 2\times 1=9-8=1\).` },
    { q: R`La forme canonique de \(x^2+6x+5\) est :`, choix: [R`\((x+3)^2+5\)`, R`\((x-3)^2-4\)`, R`\((x+6)^2-31\)`, R`\((x+3)^2-4\)`], bonne: 3,
      explication: R`\(x^2+6x=(x+3)^2-9\), donc \(x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4\).` },
    { q: R`\((u_n)\) est arithmétique, de premier terme \(u_0=7\) et de raison \(-2\). Alors \(u_{10}=\)`, choix: [R`\(-13\)`, R`\(-27\)`, R`\(13\)`, R`\(-20\)`], bonne: 0,
      explication: R`\(u_n=u_0+nr\), donc \(u_{10}=7+10\times(-2)=-13\).` },
    { q: R`La dérivée de \(f(x)=x^3-4x+1\) est :`, choix: [R`\(3x^2-4x\)`, R`\(x^2-4\)`, R`\(3x^2+1\)`, R`\(3x^2-4\)`], bonne: 3,
      explication: R`\((x^3)'=3x^2\), \((-4x)'=-4\) et la dérivée d'une constante est nulle.` },
    { q: R`Si \(f(x)=\dfrac{1}{x}\), alors \(f'(2)=\)`, choix: [R`\(\dfrac14\)`, R`\(-\dfrac14\)`, R`\(-\dfrac12\)`, R`\(2\)`], bonne: 1,
      explication: R`\(f'(x)=-\dfrac{1}{x^2}\), donc \(f'(2)=-\dfrac14\).` },
    { q: R`\(P(A)=0{,}4\) et \(P_A(B)=0{,}5\). Alors \(P(A\cap B)=\)`, choix: [R`\(0{,}9\)`, R`\(0{,}8\)`, R`\(0{,}1\)`, R`\(0{,}2\)`], bonne: 3,
      explication: R`\(P(A\cap B)=P(A)\times P_A(B)=0{,}4\times 0{,}5=0{,}2\).` },
    { q: R`\(A\) et \(B\) sont indépendants, \(P(A)=0{,}3\) et \(P(B)=0{,}5\). Alors \(P(A\cap B)=\)`, choix: [R`\(0{,}8\)`, R`\(0{,}15\)`, R`\(0{,}65\)`, R`\(0{,}2\)`], bonne: 1,
      explication: R`Indépendance : \(P(A\cap B)=P(A)\times P(B)=0{,}3\times 0{,}5=0{,}15\).` },
    { q: R`La contraposée de « si \(n\) est pair, alors \(n^2\) est pair » est :`, choix: [R`« si \(n^2\) est pair, alors \(n\) est pair »`, R`« si \(n\) n'est pas pair, alors \(n^2\) n'est pas pair »`, R`« si \(n^2\) n'est pas pair, alors \(n\) n'est pas pair »`, R`« \(n\) est pair et \(n^2\) n'est pas pair »`], bonne: 2,
      explication: R`La contraposée de « si \(P\) alors \(Q\) » est « si non \(Q\) alors non \(P\) ». La première proposition est la <i>réciproque</i>.` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suites et Python : les adhérents d'un club", points: 5, chapitres: [3, 1],
      enonce: R`<p>Un club de natation compte 400 adhérents en 2024. Chaque année, 75 % des adhérents renouvellent leur inscription et 120 nouveaux adhérents s'inscrivent.</p>
<p>On note \(u_n\) le nombre d'adhérents l'année \(2024+n\). Ainsi \(u_0=400\) et, pour tout entier naturel \(n\), \(u_{n+1}=0{,}75\,u_n+120\).</p>
<ol>
<li>Calculer \(u_1\) et \(u_2\).</li>
<li>On considère la fonction Python ci-dessous.
<pre><code>def adherents(n):
    u = 400
    for i in range(n):
        u = 0.75*u + 120
    return u</code></pre>
a) Quelle valeur renvoie <code>adherents(2)</code> ?<br>
b) Modifier cette fonction pour qu'elle renvoie la <b>liste</b> \([u_0, u_1, \dots, u_n]\).</li>
<li>Pour tout entier naturel \(n\), on pose \(v_n=u_n-480\).<br>
a) Montrer que la suite \((v_n)\) est géométrique ; préciser sa raison et son premier terme.<br>
b) En déduire que, pour tout entier naturel \(n\), \(u_n=480-80\times 0{,}75^n\).</li>
<li>Étudier le sens de variation de la suite \((u_n)\).</li>
<li>a) Le club pourra-t-il un jour dépasser 480 adhérents ? Justifier.<br>
b) Le club souhaite atteindre au moins 470 adhérents. On donne \(0{,}75^7\approx 0{,}133\) et \(0{,}75^8\approx 0{,}100\). En quelle année cet objectif sera-t-il atteint pour la première fois ?</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=0{,}75\times 400+120=300+120=420\) et \(u_2=0{,}75\times 420+120=315+120=435\). <i>(0,5 pt)</i></li>
<li>a) La boucle est exécutée deux fois : \(u\) prend les valeurs 420 puis 435. La fonction renvoie <code>435.0</code> (c'est \(u_2\)). <i>(0,5 pt)</i><br>
b) On crée une liste contenant \(u_0\), et on y ajoute chaque nouveau terme :
<pre><code>def adherents(n):
    u = 400
    L = [u]
    for i in range(n):
        u = 0.75*u + 120
        L.append(u)
    return L</code></pre>
<i>(0,5 pt)</i></li>
<li>a) Pour tout \(n\) :
\[v_{n+1}=u_{n+1}-480=0{,}75\,u_n+120-480=0{,}75\,u_n-360=0{,}75\,(u_n-480)=0{,}75\,v_n.\]
La suite \((v_n)\) est donc géométrique de raison \(q=0{,}75\) et de premier terme \(v_0=u_0-480=400-480=-80\). <i>(1 pt)</i><br>
b) Donc \(v_n=v_0\times q^n=-80\times 0{,}75^n\), et comme \(u_n=v_n+480\) : \(u_n=480-80\times 0{,}75^n\). <i>(0,5 pt)</i></li>
<li>Pour tout \(n\) :
\[u_{n+1}-u_n=-80\times 0{,}75^{n+1}+80\times 0{,}75^n=80\times 0{,}75^n\,(1-0{,}75)=20\times 0{,}75^n.\]
Comme \(0{,}75^n\gt 0\), on a \(u_{n+1}-u_n\gt 0\) : la suite \((u_n)\) est <b>strictement croissante</b>. <i>(1 pt)</i></li>
<li>a) Pour tout \(n\), \(80\times 0{,}75^n\gt 0\), donc \(u_n=480-80\times 0{,}75^n\lt 480\). Le club ne dépassera <b>jamais</b> 480 adhérents (le nombre d'adhérents se rapproche de 480 sans l'atteindre). <i>(0,5 pt)</i><br>
b) \(u_n\geqslant 470\iff 480-80\times 0{,}75^n\geqslant 470\iff 80\times 0{,}75^n\leqslant 10\iff 0{,}75^n\leqslant \dfrac18=0{,}125\).<br>
Or \(0{,}75^7\approx 0{,}133\gt 0{,}125\) et \(0{,}75^8\approx 0{,}100\leqslant 0{,}125\) ; de plus \(0{,}75^n\) diminue quand \(n\) augmente (car \(0\lt 0{,}75\lt 1\)). Le plus petit entier convenable est donc \(n=8\) : l'objectif sera atteint pour la première fois en \(2024+8=\) <b>2032</b> (on a \(u_7\approx 469{,}3\) et \(u_8\approx 472{,}0\)). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">Pour une suite \(u_{n+1}=a\,u_n+b\), la suite auxiliaire s'obtient en retranchant le « point fixe » \(\ell\), solution de \(\ell=a\ell+b\) : ici \(\ell=0{,}75\ell+120\) donne \(\ell=480\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Second degré et dérivation : bénéfice d'une entreprise", points: 4, chapitres: [2, 4, 5],
      enonce: R`<p>Une entreprise fabrique entre 0 et 1 000 objets par jour. On note \(x\) le nombre de centaines d'objets fabriqués, avec \(x\in[0;10]\). Le bénéfice journalier, en milliers d'euros, est modélisé par
\[B(x)=-2x^2+24x-40.\]</p>
<ol>
<li>Résoudre l'équation \(B(x)=0\), puis dresser le tableau de signes de \(B(x)\) sur \([0;10]\). Pour quelles productions l'entreprise est-elle rentable ?</li>
<li>Calculer \(B'(x)\), puis dresser le tableau de variations de \(B\) sur \([0;10]\). Quel est le bénéfice maximal ? Pour quelle production est-il atteint ?</li>
<li>Déterminer une équation de la tangente à la courbe de \(B\) au point d'abscisse 4.</li>
<li>Pour quelles productions le bénéfice dépasse-t-il strictement 30 000 € ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\Delta=24^2-4\times(-2)\times(-40)=576-320=256=16^2\gt 0\). Deux racines :
\[x_1=\frac{-24+16}{-4}=2\quad\text{et}\quad x_2=\frac{-24-16}{-4}=10.\]
Donc \(B(x)=-2(x-2)(x-10)\). Un trinôme est du signe de \(a=-2\) (négatif) à l'extérieur des racines :
<table class="tv"><tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(10\)</td></tr>
<tr><td>\(B(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td></tr></table>
L'entreprise est rentable (\(B(x)\gt 0\)) pour \(x\in\,]2;10[\), c'est-à-dire pour une production strictement comprise entre 200 et 1 000 objets. <i>(1,25 pt)</i></li>
<li>\(B'(x)=-4x+24\). \(B'(x)\gt 0\iff x\lt 6\). Et \(B(6)=-72+144-40=32\), \(B(0)=-40\), \(B(10)=0\).
<table class="tv"><tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(6\)</td><td></td><td>\(10\)</td></tr>
<tr><td>\(B'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(B\)</td><td>\(-40\)</td><td>↗</td><td>\(32\)</td><td>↘</td><td>\(0\)</td></tr></table>
Le bénéfice maximal est de 32 milliers d'euros, soit <b>32 000 €</b>, atteint pour 600 objets. <i>(1 pt)</i></li>
<li>\(B(4)=-32+96-40=24\) et \(B'(4)=-16+24=8\). La tangente a pour équation \(y=B'(4)(x-4)+B(4)=8(x-4)+24\), soit \(y=8x-8\). <i>(0,75 pt)</i></li>
<li>\(B(x)\gt 30\iff -2x^2+24x-70\gt 0\iff x^2-12x+35\lt 0\) (on divise par \(-2\) : le sens change).<br>
\(x^2-12x+35\) a pour discriminant \(144-140=4\) et pour racines \(\frac{12-2}{2}=5\) et \(\frac{12+2}{2}=7\) : \(x^2-12x+35=(x-5)(x-7)\), négatif entre les racines.<br>
Le bénéfice dépasse 30 000 € pour \(x\in\,]5;7[\), c'est-à-dire pour une production strictement comprise entre 500 et 700 objets. <i>(1 pt)</i></li>
</ol>
<div class="warn">Quand on multiplie ou divise une inéquation par un nombre négatif, on change le sens de l'inégalité.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Probabilités conditionnelles : pièces défectueuses", points: 5, chapitres: [10, 11],
      enonce: R`<p>Une usine fabrique des pièces sur deux machines. La machine A produit 70 % des pièces et la machine B le reste. On sait que 2 % des pièces produites par A sont défectueuses, contre 5 % de celles produites par B.</p>
<p>On choisit une pièce au hasard dans la production. On note \(A\) : « la pièce provient de la machine A », \(B\) son contraire, et \(D\) : « la pièce est défectueuse ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer \(P(A\cap D)\).</li>
<li>Montrer que \(P(D)=0{,}029\).</li>
<li>Le responsable qualité affirme : « Plus de la moitié des pièces défectueuses proviennent de la machine B. » A-t-il raison ?</li>
<li>Les événements \(A\) et \(D\) sont-ils indépendants ?</li>
<li>Une pièce non défectueuse rapporte 3 € à l'usine ; une pièce défectueuse lui fait perdre 8 €. On note \(X\) le gain algébrique (en euros) associé à une pièce prise au hasard. Donner la loi de \(X\) et calculer \(E(X)\). Interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>Arbre : \(A\) (0,7) puis \(D\) (0,02) / \(\overline{D}\) (0,98) ; \(B\) (0,3) puis \(D\) (0,05) / \(\overline{D}\) (0,95). <i>(0,75 pt)</i></li>
<li>\(P(A\cap D)=P(A)\times P_A(D)=0{,}7\times 0{,}02=0{,}014\). <i>(0,5 pt)</i></li>
<li>\(A\) et \(B\) forment une partition de l'univers ; d'après la formule des probabilités totales :
\[P(D)=P(A\cap D)+P(B\cap D)=0{,}014+0{,}3\times 0{,}05=0{,}014+0{,}015=0{,}029.\]
<i>(1 pt)</i></li>
<li>On cherche \(P_D(B)\) :
\[P_D(B)=\frac{P(B\cap D)}{P(D)}=\frac{0{,}015}{0{,}029}=\frac{15}{29}.\]
Or \(\frac{15}{29}\gt\frac{14{,}5}{29}=\frac12\). Le responsable a <b>raison</b> : environ 52 % des pièces défectueuses viennent de B, alors que B ne produit que 30 % des pièces. <i>(1 pt)</i></li>
<li>\(P(A)\times P(D)=0{,}7\times 0{,}029=0{,}0203\neq 0{,}014=P(A\cap D)\). Les événements \(A\) et \(D\) ne sont <b>pas indépendants</b>. <i>(0,75 pt)</i></li>
<li>\(X\) prend la valeur \(3\) avec probabilité \(P(\overline{D})=1-0{,}029=0{,}971\) et la valeur \(-8\) avec probabilité \(P(D)=0{,}029\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(-8\)</td><td>\(3\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}029\)</td><td>\(0{,}971\)</td></tr></table>
\[E(X)=-8\times 0{,}029+3\times 0{,}971=-0{,}232+2{,}913=2{,}681.\]
En moyenne, chaque pièce rapporte environ 2,68 € à l'usine. <i>(1 pt)</i></li>
</ol>
<div class="warn">Ne pas confondre \(P_B(D)=0{,}05\) (proportion de défectueuses parmi les pièces de B) et \(P_D(B)\) (proportion de pièces de B parmi les défectueuses).</div>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°3", duree: "2 h", calculatrice: false,
  chapitres: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`\(\dfrac{\mathrm{e}^{5}}{\mathrm{e}^{2}}=\)`, choix: [R`\(\mathrm{e}^{5/2}\)`, R`\(\mathrm{e}^{7}\)`, R`\(\mathrm{e}^{3}\)`, R`\(\mathrm{e}^{10}\)`], bonne: 2,
      explication: R`\(\dfrac{\mathrm{e}^a}{\mathrm{e}^b}=\mathrm{e}^{a-b}\), donc \(\dfrac{\mathrm{e}^5}{\mathrm{e}^2}=\mathrm{e}^{3}\).` },
    { q: R`L'équation \(\mathrm{e}^{x}=1\) a pour solution :`, choix: [R`\(x=0\)`, R`\(x=1\)`, R`\(x=\mathrm{e}\)`, R`elle n'a pas de solution`], bonne: 0,
      explication: R`\(\mathrm{e}^0=1\) et \(\mathrm{e}^a=\mathrm{e}^b\iff a=b\) : \(\mathrm{e}^x=\mathrm{e}^0\iff x=0\).` },
    { q: R`\(\sin\left(\dfrac{\pi}{6}\right)=\)`, choix: [R`\(\dfrac{\sqrt3}{2}\)`, R`\(\dfrac12\)`, R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt2}{2}\)`], bonne: 1,
      explication: R`Valeur remarquable : \(\sin\frac{\pi}{6}=\frac12\) et \(\cos\frac{\pi}{6}=\frac{\sqrt3}{2}\).` },
    { q: R`Un angle de 30° mesure, en radians :`, choix: [R`\(\dfrac{\pi}{30}\)`, R`\(\dfrac{\pi}{3}\)`, R`\(6\pi\)`, R`\(\dfrac{\pi}{6}\)`], bonne: 3,
      explication: R`\(180°\) correspond à \(\pi\) rad, donc \(30°=\dfrac{30}{180}\pi=\dfrac{\pi}{6}\) rad.` },
    { q: R`Dans un repère orthonormé, \(\vec u(1;2)\) et \(\vec v(3;-1)\). Alors \(\vec u\cdot\vec v=\)`, choix: [R`\(1\)`, R`\(5\)`, R`\(0\)`, R`\(-1\)`], bonne: 0,
      explication: R`\(\vec u\cdot\vec v=xx'+yy'=1\times 3+2\times(-1)=3-2=1\).` },
    { q: R`\(\|\vec u\|=3\), \(\|\vec v\|=4\) et l'angle entre \(\vec u\) et \(\vec v\) mesure \(\dfrac{\pi}{3}\). Alors \(\vec u\cdot\vec v=\)`, choix: [R`\(12\)`, R`\(6\sqrt3\)`, R`\(6\)`, R`\(7\)`], bonne: 2,
      explication: R`\(\vec u\cdot\vec v=\|\vec u\|\times\|\vec v\|\times\cos\frac{\pi}{3}=3\times 4\times\frac12=6\).` },
    { q: R`Une équation du cercle de centre \(\Omega(1;-2)\) et de rayon 3 est :`, choix: [R`\((x+1)^2+(y-2)^2=9\)`, R`\((x-1)^2+(y+2)^2=9\)`, R`\((x-1)^2+(y+2)^2=3\)`, R`\((x-1)^2-(y+2)^2=9\)`], bonne: 1,
      explication: R`Le cercle de centre \(\Omega(a;b)\) et de rayon \(r\) a pour équation \((x-a)^2+(y-b)^2=r^2\) ; ici \(r^2=9\) et \(y-(-2)=y+2\).` },
    { q: R`La dérivée de \(g(x)=x\,\mathrm{e}^{x}\) est :`, choix: [R`\(\mathrm{e}^{x}\)`, R`\(x\,\mathrm{e}^{x}\)`, R`\(1+\mathrm{e}^{x}\)`, R`\((x+1)\,\mathrm{e}^{x}\)`], bonne: 3,
      explication: R`Produit : \((uv)'=u'v+uv'\), donc \(g'(x)=1\times\mathrm{e}^x+x\,\mathrm{e}^x=(x+1)\,\mathrm{e}^x\).` },
    { q: R`\(1+2+3+\dots+20=\)`, choix: [R`\(200\)`, R`\(210\)`, R`\(400\)`, R`\(420\)`], bonne: 1,
      explication: R`\(1+2+\dots+n=\dfrac{n(n+1)}{2}\), donc \(\dfrac{20\times 21}{2}=210\).` },
    { q: R`\(\sqrt{50}=\)`, choix: [R`\(25\)`, R`\(2\sqrt5\)`, R`\(5\sqrt2\)`, R`\(10\sqrt2\)`], bonne: 2,
      explication: R`\(\sqrt{50}=\sqrt{25\times 2}=\sqrt{25}\times\sqrt2=5\sqrt2\).` },
    { q: R`\(P(A)=0{,}5\), \(P(B)=0{,}4\) et \(P(A\cap B)=0{,}1\). Alors \(P(A\cup B)=\)`, choix: [R`\(0{,}9\)`, R`\(0{,}2\)`, R`\(1\)`, R`\(0{,}8\)`], bonne: 3,
      explication: R`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)=0{,}5+0{,}4-0{,}1=0{,}8\).` },
    { q: R`La droite passant par \(A(1;3)\) et de coefficient directeur 2 a pour équation :`, choix: [R`\(y=2x+3\)`, R`\(y=x+2\)`, R`\(y=2x+1\)`, R`\(y=2x-1\)`], bonne: 2,
      explication: R`\(y=2x+p\) et \(3=2\times 1+p\) donne \(p=1\). (La droite \(y=x+2\) passe bien par \(A\), mais son coefficient directeur vaut 1.)` }
  ],
  exercices: [
    { titre: "Exercice 1 — Exponentielle et second degré", points: 5, chapitres: [6, 4, 5, 2],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=x^2\,\mathrm{e}^{-x}\). On note \(\mathcal{C}\) sa courbe représentative dans un repère.</p>
<ol>
<li>Justifier que, pour tout réel \(x\), \(f(x)\geqslant 0\). Résoudre l'équation \(f(x)=0\).</li>
<li>Montrer que, pour tout réel \(x\), \(f'(x)=x(2-x)\,\mathrm{e}^{-x}\).</li>
<li>Étudier le signe de \(f'(x)\) et dresser le tableau de variations de \(f\) sur \(\mathbb{R}\) (les limites ne sont pas demandées). On donnera les valeurs exactes des extremums.</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse 1. Montrer que \(T\) passe par l'origine du repère.</li>
<li>Déterminer les abscisses des points d'intersection de \(\mathcal{C}\) et de la courbe \(\Gamma\) de la fonction \(g : x\mapsto x\,\mathrm{e}^{-x}\).</li>
</ol>`,
      correction: R`<ol>
<li>Pour tout réel \(x\), \(x^2\geqslant 0\) et \(\mathrm{e}^{-x}\gt 0\), donc \(f(x)\geqslant 0\).<br>
Comme \(\mathrm{e}^{-x}\neq 0\), \(f(x)=0\iff x^2=0\iff x=0\). <i>(0,75 pt)</i></li>
<li>\(f=uv\) avec \(u(x)=x^2\), \(u'(x)=2x\), \(v(x)=\mathrm{e}^{-x}\), \(v'(x)=-\mathrm{e}^{-x}\) (forme \(\mathrm{e}^{ax+b}\) avec \(a=-1\)) :
\[f'(x)=2x\,\mathrm{e}^{-x}+x^2\times(-\mathrm{e}^{-x})=(2x-x^2)\,\mathrm{e}^{-x}=x(2-x)\,\mathrm{e}^{-x}.\]
<i>(1 pt)</i></li>
<li>\(\mathrm{e}^{-x}\gt 0\), donc \(f'(x)\) a le signe de \(x(2-x)=-x^2+2x\), trinôme de racines 0 et 2 et de coefficient \(a=-1\lt 0\) : il est positif entre les racines, négatif à l'extérieur.<br>
\(f(0)=0\) et \(f(2)=4\,\mathrm{e}^{-2}\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(0\)</td><td>↗</td><td>\(4\,\mathrm{e}^{-2}\)</td><td>↘</td><td></td></tr></table>
\(f\) admet un minimum local égal à 0 en \(x=0\) (c'est même son minimum sur \(\mathbb{R}\), d'après la question 1) et un maximum local égal à \(4\,\mathrm{e}^{-2}\approx 0{,}54\) en \(x=2\). <i>(1,25 pt)</i></li>
<li>\(f(1)=\mathrm{e}^{-1}\) et \(f'(1)=1\times 1\times\mathrm{e}^{-1}=\mathrm{e}^{-1}\). Donc
\[T : y=\mathrm{e}^{-1}(x-1)+\mathrm{e}^{-1}=\mathrm{e}^{-1}x.\]
Pour \(x=0\), on obtient \(y=0\) : la tangente \(T\) passe par l'origine \(O\). <i>(1 pt)</i></li>
<li>On résout \(f(x)=g(x)\) :
\[x^2\,\mathrm{e}^{-x}=x\,\mathrm{e}^{-x}\iff (x^2-x)\,\mathrm{e}^{-x}=0\iff x(x-1)=0\quad(\text{car }\mathrm{e}^{-x}\neq 0).\]
Les courbes se coupent aux points d'abscisses \(0\) et \(1\) (points \(O(0;0)\) et \(\left(1;\mathrm{e}^{-1}\right)\)). <i>(1 pt)</i></li>
</ol>
<div class="astuce">Dès qu'un facteur \(\mathrm{e}^{\dots}\) apparaît dans un produit, on peut l'« éliminer » pour l'étude du signe ou la résolution d'une équation, puisqu'il est strictement positif.</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Produit scalaire et géométrie repérée dans un rectangle", points: 5, chapitres: [8, 9],
      enonce: R`<p>\(ABCD\) est un rectangle tel que \(AB=6\) cm et \(AD=4\) cm. Le point \(I\) est le milieu de \([AB]\).</p>
<p>On se place dans le repère orthonormé d'origine \(A\), dont l'axe des abscisses est \((AB)\) et l'axe des ordonnées \((AD)\), l'unité étant le centimètre. Ainsi \(A(0;0)\), \(B(6;0)\), \(C(6;4)\) et \(D(0;4)\).</p>
<ol>
<li>Donner les coordonnées de \(I\), puis celles des vecteurs \(\overrightarrow{DI}\) et \(\overrightarrow{DB}\).</li>
<li>Calculer \(\overrightarrow{DI}\cdot\overrightarrow{DB}\), puis les longueurs \(DI\) et \(DB\). En déduire la valeur exacte de \(\cos\widehat{IDB}\).</li>
<li>Montrer qu'une équation cartésienne de la droite \((DI)\) est \(4x+3y-12=0\).</li>
<li>On note \(H\) le projeté orthogonal de \(C\) sur la droite \((DI)\).<br>
a) Déterminer une équation de la droite passant par \(C\) et perpendiculaire à \((DI)\).<br>
b) En déduire les coordonnées de \(H\), puis la distance \(CH\).<br>
c) Retrouver la valeur de \(CH\) en calculant de deux façons l'aire du triangle \(DIC\).</li>
<li>Déterminer la position du point \(K\) du segment \([DC]\) tel que les droites \((AK)\) et \((DI)\) soient perpendiculaires.</li>
</ol>`,
      correction: R`<ol>
<li>\(I(3;0)\), \(\overrightarrow{DI}(3-0;0-4)=(3;-4)\) et \(\overrightarrow{DB}(6;-4)\). <i>(0,5 pt)</i></li>
<li>\(\overrightarrow{DI}\cdot\overrightarrow{DB}=3\times 6+(-4)\times(-4)=18+16=34\).<br>
\(DI=\sqrt{9+16}=5\) et \(DB=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}\).<br>
Comme \(\overrightarrow{DI}\cdot\overrightarrow{DB}=DI\times DB\times\cos\widehat{IDB}\) :
\[\cos\widehat{IDB}=\frac{34}{5\times 2\sqrt{13}}=\frac{17}{5\sqrt{13}}=\frac{17\sqrt{13}}{65}.\]
(On trouve \(\widehat{IDB}\approx 19°\).) <i>(1,25 pt)</i></li>
<li>\(\overrightarrow{DI}(3;-4)\) est un vecteur directeur de \((DI)\), donc \((DI)\) a une équation de la forme \(-(-4)x+3y+c=0\), soit \(4x+3y+c=0\). Comme \(D(0;4)\in(DI)\) : \(12+c=0\), donc \(c=-12\). D'où \((DI) : 4x+3y-12=0\). (Vérification avec \(I\) : \(12+0-12=0\).) <i>(0,75 pt)</i></li>
<li>a) La droite cherchée est perpendiculaire à \((DI)\), donc \(\overrightarrow{DI}(3;-4)\) en est un vecteur normal : elle a une équation \(3x-4y+c=0\). Elle passe par \(C(6;4)\) : \(18-16+c=0\), donc \(c=-2\). Équation : \(3x-4y-2=0\). <i>(0,5 pt)</i><br>
b) \(H\) est l'intersection des deux droites :
\[\begin{cases}4x+3y=12\\ 3x-4y=2\end{cases}\iff\begin{cases}16x+12y=48\\ 9x-12y=6\end{cases}\]
En additionnant : \(25x=54\), donc \(x=\frac{54}{25}\), puis \(3y=12-\frac{216}{25}=\frac{84}{25}\), donc \(y=\frac{28}{25}\). Ainsi \(H\left(\frac{54}{25};\frac{28}{25}\right)\).<br>
\(\overrightarrow{HC}\left(6-\frac{54}{25};4-\frac{28}{25}\right)=\left(\frac{96}{25};\frac{72}{25}\right)\), donc
\[CH=\frac{1}{25}\sqrt{96^2+72^2}=\frac{1}{25}\sqrt{9216+5184}=\frac{\sqrt{14400}}{25}=\frac{120}{25}=\frac{24}{5}=4{,}8\text{ cm}.\]
<i>(0,75 pt)</i><br>
c) Avec la base \([DC]\) (\(DC=6\)) et la hauteur issue de \(I\) (égale à \(AD=4\)) : \(\mathcal{A}=\frac{6\times 4}{2}=12\) cm². Avec la base \([DI]\) et la hauteur \([CH]\) : \(\mathcal{A}=\frac{DI\times CH}{2}=\frac{5\,CH}{2}\). Donc \(\frac{5\,CH}{2}=12\) et \(CH=\frac{24}{5}\). ✓ <i>(0,25 pt)</i></li>
<li>Un point \(K\) de \([DC]\) a pour coordonnées \(K(k;4)\) avec \(0\leqslant k\leqslant 6\) (et \(DK=k\)). Alors \(\overrightarrow{AK}(k;4)\) et :
\[(AK)\perp(DI)\iff\overrightarrow{AK}\cdot\overrightarrow{DI}=0\iff 3k-16=0\iff k=\frac{16}{3}.\]
Comme \(0\leqslant\frac{16}{3}\leqslant 6\), ce point existe : c'est le point \(K\) de \([DC]\) tel que \(DK=\frac{16}{3}\) cm (environ 5,33 cm). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Variable aléatoire : un jeu de jetons", points: 4, chapitres: [11, 10],
      enonce: R`<p>Un sac contient 2 jetons rouges et 3 jetons verts, indiscernables au toucher. Un joueur tire au hasard un jeton, le garde, puis tire un second jeton (tirage <b>sans remise</b>).</p>
<ul><li>S'il obtient deux jetons rouges, il gagne 10 € ;</li>
<li>s'il obtient exactement un jeton rouge, il gagne 2 € ;</li>
<li>s'il n'obtient aucun jeton rouge, il perd 4 €.</li></ul>
<p>On note \(X\) le gain algébrique du joueur, en euros.</p>
<ol>
<li>Représenter l'expérience par un arbre pondéré.</li>
<li>Déterminer la loi de probabilité de \(X\).</li>
<li>Calculer l'espérance, la variance et l'écart-type de \(X\). Le jeu est-il favorable au joueur ?</li>
<li>L'organisateur veut rendre le jeu équitable en ne modifiant que la somme perdue lorsque le joueur ne tire aucun jeton rouge. Quelle somme doit-il fixer ?</li>
</ol>`,
      correction: R`<ol>
<li>Premier tirage : \(R_1\) (\(\frac25\)), \(V_1\) (\(\frac35\)).<br>
Après \(R_1\), il reste 1 rouge et 3 verts : \(R_2\) (\(\frac14\)), \(V_2\) (\(\frac34\)).<br>
Après \(V_1\), il reste 2 rouges et 2 verts : \(R_2\) (\(\frac24\)), \(V_2\) (\(\frac24\)). <i>(1 pt)</i></li>
<li>\(P(X=10)=P(R_1\cap R_2)=\frac25\times\frac14=\frac{2}{20}=\frac{1}{10}\).<br>
\(P(X=-4)=P(V_1\cap V_2)=\frac35\times\frac24=\frac{6}{20}=\frac{3}{10}\).<br>
\(P(X=2)=P(R_1\cap V_2)+P(V_1\cap R_2)=\frac25\times\frac34+\frac35\times\frac24=\frac{6}{20}+\frac{6}{20}=\frac{6}{10}\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(-4\)</td><td>\(2\)</td><td>\(10\)</td></tr>
<tr><td>\(P(X=x_i)\)</td><td>\(0{,}3\)</td><td>\(0{,}6\)</td><td>\(0{,}1\)</td></tr></table>
Vérification : \(0{,}3+0{,}6+0{,}1=1\). <i>(1 pt)</i></li>
<li>\(E(X)=-4\times 0{,}3+2\times 0{,}6+10\times 0{,}1=-1{,}2+1{,}2+1=1\).<br>
\(E(X^2)=16\times 0{,}3+4\times 0{,}6+100\times 0{,}1=4{,}8+2{,}4+10=17{,}2\), donc \(V(X)=E(X^2)-E(X)^2=17{,}2-1=16{,}2\) et \(\sigma(X)=\sqrt{16{,}2}\approx 4{,}02\).<br>
\(E(X)=1\gt 0\) : en moyenne, le joueur gagne 1 € par partie ; le jeu lui est <b>favorable</b>. <i>(1 pt)</i></li>
<li>Notons \(a\) la somme perdue (\(a\gt 0\)). Alors
\[E(X)=-a\times 0{,}3+2\times 0{,}6+10\times 0{,}1=2{,}2-0{,}3a.\]
Le jeu est équitable si \(E(X)=0\iff 0{,}3a=2{,}2\iff a=\frac{22}{3}\approx 7{,}33\). Le joueur doit perdre \(\frac{22}{3}\) €, soit environ 7,33 €, lorsqu'il ne tire aucun jeton rouge. <i>(1 pt)</i></li>
</ol>
<div class="warn">Sans remise, la composition du sac change après le premier tirage : les probabilités du second tirage dépendent du premier.</div>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°4", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 7, 10, 11],
  automatismes: [
    { q: R`15 % de 240 est égal à :`, choix: [R`\(24\)`, R`\(36\)`, R`\(3{,}6\)`, R`\(160\)`], bonne: 1,
      explication: R`\(0{,}15\times 240=36\) (10 % font 24 et 5 % font 12).` },
    { q: R`\(\dfrac{2^{5}\times 2^{-2}}{2^{4}}=\)`, choix: [R`\(2\)`, R`\(2^{11}\)`, R`\(\dfrac12\)`, R`\(2^{-11}\)`], bonne: 2,
      explication: R`\(2^{5+(-2)-4}=2^{-1}=\dfrac12\).` },
    { q: R`L'inéquation \(-2x+6\gt 0\) équivaut à :`, choix: [R`\(x\gt 3\)`, R`\(x\gt -3\)`, R`\(x\lt -3\)`, R`\(x\lt 3\)`], bonne: 3,
      explication: R`\(-2x\gt -6\iff x\lt 3\) : on divise par \(-2\lt 0\), donc le sens de l'inégalité change.` },
    { q: R`L'ensemble des réels \(x\) tels que \((x-1)(x+3)\lt 0\) est :`, choix: [R`\(]-\infty;-3[\)`, R`\(]-3;1[\)`, R`\(]1;+\infty[\)`, R`\(]-1;3[\)`], bonne: 1,
      explication: R`Le trinôme \((x-1)(x+3)\) a pour racines \(-3\) et \(1\) et \(a=1\gt 0\) : il est négatif entre les racines.` },
    { q: R`\((u_n)\) est géométrique avec \(u_0=5\) et de raison 3. Alors \(u_0+u_1+u_2=\)`, choix: [R`\(65\)`, R`\(45\)`, R`\(135\)`, R`\(50\)`], bonne: 0,
      explication: R`\(u_0=5\), \(u_1=15\), \(u_2=45\), et \(5+15+45=65\).` },
    { q: R`Si \(u_n=n^2-1\) pour tout \(n\), alors \(u_{n+1}=\)`, choix: [R`\(n^2\)`, R`\(n^2+2n\)`, R`\(n^2+1\)`, R`\(n^2+2n+2\)`], bonne: 1,
      explication: R`On remplace \(n\) par \(n+1\) : \(u_{n+1}=(n+1)^2-1=n^2+2n+1-1=n^2+2n\).` },
    { q: R`\(\cos\left(-\dfrac{\pi}{3}\right)=\)`, choix: [R`\(\dfrac12\)`, R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`, R`\(-\dfrac{\sqrt3}{2}\)`], bonne: 0,
      explication: R`La fonction cosinus est paire : \(\cos(-x)=\cos x\), donc \(\cos\left(-\frac{\pi}{3}\right)=\cos\frac{\pi}{3}=\frac12\).` },
    { q: R`\(\sin\left(\dfrac{5\pi}{6}\right)=\)`, choix: [R`\(-\dfrac12\)`, R`\(\dfrac{\sqrt3}{2}\)`, R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`], bonne: 2,
      explication: R`\(\frac{5\pi}{6}=\pi-\frac{\pi}{6}\) et \(\sin(\pi-x)=\sin x\), donc \(\sin\frac{5\pi}{6}=\sin\frac{\pi}{6}=\frac12\).` },
    { q: R`Si \(f(x)=\sqrt{x}\), alors \(f'(4)=\)`, choix: [R`\(2\)`, R`\(\dfrac12\)`, R`\(\dfrac18\)`, R`\(\dfrac14\)`], bonne: 3,
      explication: R`\(f'(x)=\dfrac{1}{2\sqrt x}\), donc \(f'(4)=\dfrac{1}{2\times 2}=\dfrac14\).` },
    { q: R`La dérivée de \(f(x)=(2x+1)^2\) est :`, choix: [R`\(2(2x+1)\)`, R`\(4(2x+1)\)`, R`\(2x+1\)`, R`\(4x+1\)`], bonne: 1,
      explication: R`\(f(x)=4x^2+4x+1\), donc \(f'(x)=8x+4=4(2x+1)\). (Ou : \(\left(g(ax+b)\right)'=a\,g'(ax+b)\).)` },
    { q: R`\(P(A\cap B)=0{,}12\) et \(P(A)=0{,}4\). Alors \(P_A(B)=\)`, choix: [R`\(0{,}048\)`, R`\(0{,}52\)`, R`\(0{,}3\)`, R`\(0{,}28\)`], bonne: 2,
      explication: R`\(P_A(B)=\dfrac{P(A\cap B)}{P(A)}=\dfrac{0{,}12}{0{,}4}=0{,}3\).` },
    { q: R`\(X\) prend les valeurs \(-1\), \(1\) et \(3\) avec les probabilités \(0{,}5\), \(0{,}3\) et \(0{,}2\). Alors \(E(X)=\)`, choix: [R`\(1\)`, R`\(1{,}4\)`, R`\(0{,}2\)`, R`\(0{,}4\)`], bonne: 3,
      explication: R`\(E(X)=-1\times 0{,}5+1\times 0{,}3+3\times 0{,}2=-0{,}5+0{,}3+0{,}6=0{,}4\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Second degré et logique", points: 4, chapitres: [2, 1],
      enonce: R`<p>On considère le trinôme \(P(x)=2x^2-5x-3\), défini pour tout réel \(x\).</p>
<ol>
<li>Résoudre l'équation \(P(x)=0\) et en déduire une factorisation de \(P(x)\).</li>
<li>Résoudre l'inéquation \(P(x)\leqslant 0\).</li>
<li>On considère la proposition \(\mathcal{P}\) : « Pour tout réel \(x\), si \(x\gt 3\), alors \(P(x)\gt 0\). »<br>
a) Démontrer que \(\mathcal{P}\) est vraie.<br>
b) Énoncer la réciproque de \(\mathcal{P}\). Est-elle vraie ? Justifier.<br>
c) Énoncer la contraposée de \(\mathcal{P}\). Que peut-on dire de sa valeur de vérité ?<br>
d) Compléter par « nécessaire » ou « suffisante » : « La condition \(x\gt 3\) est une condition ... mais pas ... pour que \(P(x)\gt 0\). »</li>
<li>Déterminer l'ensemble des réels \(m\) pour lesquels l'équation \(2x^2-5x+m=0\) admet deux solutions distinctes.</li>
</ol>`,
      correction: R`<ol>
<li>\(\Delta=(-5)^2-4\times 2\times(-3)=25+24=49=7^2\gt 0\), donc deux solutions :
\[x_1=\frac{5-7}{4}=-\frac12\quad\text{et}\quad x_2=\frac{5+7}{4}=3.\]
D'où \(P(x)=2\left(x+\frac12\right)(x-3)=(2x+1)(x-3)\). <i>(1 pt)</i></li>
<li>\(a=2\gt 0\) : le trinôme est négatif ou nul entre ses racines. \(S=\left[-\frac12;3\right]\). <i>(0,75 pt)</i></li>
<li>a) Si \(x\gt 3\), alors \(x-3\gt 0\) et \(2x+1\gt 7\gt 0\) ; le produit \(P(x)=(2x+1)(x-3)\) est donc strictement positif. \(\mathcal{P}\) est vraie. <i>(0,5 pt)</i><br>
b) Réciproque : « Pour tout réel \(x\), si \(P(x)\gt 0\), alors \(x\gt 3\). » Elle est <b>fausse</b> : contre-exemple \(x=-1\), car \(P(-1)=2+5-3=4\gt 0\) alors que \(-1\leqslant 3\). <i>(0,5 pt)</i><br>
c) Contraposée : « Pour tout réel \(x\), si \(P(x)\leqslant 0\), alors \(x\leqslant 3\). » Une proposition et sa contraposée ont toujours la même valeur de vérité : elle est vraie (ce que confirme la question 2). <i>(0,25 pt)</i><br>
d) « La condition \(x\gt 3\) est une condition <b>suffisante</b> mais pas <b>nécessaire</b> pour que \(P(x)\gt 0\). » <i>(0,25 pt)</i></li>
<li>L'équation \(2x^2-5x+m=0\) a pour discriminant \(\Delta_m=25-8m\). Elle admet deux solutions distinctes si et seulement si \(\Delta_m\gt 0\iff 8m\lt 25\iff m\lt\dfrac{25}{8}\). L'ensemble cherché est \(\left]-\infty;\dfrac{25}{8}\right[\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Pour montrer qu'une proposition « pour tout \(x\)… » est fausse, <b>un seul contre-exemple</b> suffit.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Trigonométrie", points: 3, chapitres: [7, 2],
      enonce: R`<ol>
<li>Déterminer les valeurs exactes de \(\cos\left(-\dfrac{7\pi}{4}\right)\) et de \(\sin\left(-\dfrac{7\pi}{4}\right)\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'équation \(\sin x=\dfrac{\sqrt3}{2}\).</li>
<li>Soit \(a\) un réel de \(\left[\dfrac{\pi}{2};\pi\right]\) tel que \(\cos a=-\dfrac35\). Calculer \(\sin a\).</li>
<li>Résoudre dans \([0;2\pi[\) l'équation \(2\cos^2 x-\cos x-1=0\). <i>(On pourra poser \(X=\cos x\).)</i></li>
</ol>`,
      correction: R`<ol>
<li>\(-\dfrac{7\pi}{4}=-2\pi+\dfrac{\pi}{4}\). Le cosinus et le sinus sont \(2\pi\)-périodiques, donc
\(\cos\left(-\frac{7\pi}{4}\right)=\cos\frac{\pi}{4}=\frac{\sqrt2}{2}\) et \(\sin\left(-\frac{7\pi}{4}\right)=\sin\frac{\pi}{4}=\frac{\sqrt2}{2}\). <i>(0,75 pt)</i></li>
<li>\(\sin\frac{\pi}{3}=\frac{\sqrt3}{2}\) et \(\sin\left(\pi-\frac{\pi}{3}\right)=\sin\frac{2\pi}{3}=\frac{\sqrt3}{2}\). Sur le cercle trigonométrique, deux points ont pour ordonnée \(\frac{\sqrt3}{2}\). Dans \(]-\pi;\pi]\) : \(S=\left\{\dfrac{\pi}{3};\dfrac{2\pi}{3}\right\}\). <i>(0,75 pt)</i></li>
<li>\(\cos^2 a+\sin^2 a=1\), donc \(\sin^2 a=1-\frac{9}{25}=\frac{16}{25}\). Comme \(a\in\left[\frac{\pi}{2};\pi\right]\), \(\sin a\geqslant 0\), donc \(\sin a=\dfrac45\). <i>(0,75 pt)</i></li>
<li>Avec \(X=\cos x\), l'équation devient \(2X^2-X-1=0\). \(\Delta=1+8=9\), donc \(X=\frac{1+3}{4}=1\) ou \(X=\frac{1-3}{4}=-\frac12\).<br>
• \(\cos x=1\) : dans \([0;2\pi[\), \(x=0\).<br>
• \(\cos x=-\frac12\) : dans \([0;2\pi[\), \(x=\frac{2\pi}{3}\) ou \(x=\frac{4\pi}{3}\).<br>
\(S=\left\{0;\dfrac{2\pi}{3};\dfrac{4\pi}{3}\right\}\). <i>(0,75 pt)</i></li>
</ol>
<div class="warn">Attention à l'intervalle demandé : \(-\frac{2\pi}{3}\) n'est pas dans \([0;2\pi[\), on le remplace par \(-\frac{2\pi}{3}+2\pi=\frac{4\pi}{3}\).</div>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 3 — Suites et Python : une tirelire", points: 4, chapitres: [3, 1, 2],
      enonce: R`<p>Léa décide d'épargner : elle met 20 € de côté le premier mois, puis chaque mois 5 € de plus que le mois précédent. On note \(u_n\) la somme épargnée le \(n\)-ième mois (\(n\geqslant 1\)), donc \(u_1=20\).</p>
<ol>
<li>Préciser la nature de la suite \((u_n)\), exprimer \(u_n\) en fonction de \(n\), puis calculer la somme épargnée le 12<sup>e</sup> mois.</li>
<li>On note \(S_n=u_1+u_2+\dots+u_n\) la somme totale épargnée au bout de \(n\) mois. Montrer que \(S_n=\dfrac{5n^2+35n}{2}\).</li>
<li>On considère la fonction Python suivante.
<pre><code>def mois(objectif):
    n = 1
    u = 20
    S = 20
    while S &lt; objectif:
        n = n + 1
        u = u + 5
        S = S + u
    return n</code></pre>
Expliquer ce que représente la valeur renvoyée par <code>mois(1000)</code>.</li>
<li>Déterminer, par le calcul, cette valeur. <i>(On donne \(40^2=1600\) et \(41^2=1681\).)</i></li>
</ol>`,
      correction: R`<ol>
<li>Chaque mois, Léa épargne 5 € de plus que le mois précédent : \(u_{n+1}=u_n+5\). La suite \((u_n)\) est <b>arithmétique</b> de raison 5 et de premier terme \(u_1=20\). Donc \(u_n=u_1+(n-1)\times 5=5n+15\).<br>
Le 12<sup>e</sup> mois : \(u_{12}=60+15=75\) €. <i>(0,75 pt)</i></li>
<li>Somme de termes consécutifs d'une suite arithmétique : nombre de termes \(\times\dfrac{\text{premier}+\text{dernier}}{2}\).
\[S_n=n\times\frac{u_1+u_n}{2}=n\times\frac{20+5n+15}{2}=\frac{n(5n+35)}{2}=\frac{5n^2+35n}{2}.\]
<i>(1 pt)</i></li>
<li>Les variables <code>u</code> et <code>S</code> contiennent l'épargne du mois \(n\) et le total épargné au bout de \(n\) mois. La boucle s'arrête dès que <code>S</code> atteint ou dépasse l'objectif. <code>mois(1000)</code> renvoie donc le <b>nombre minimal de mois</b> nécessaires pour que le total épargné atteigne au moins 1 000 €. <i>(1 pt)</i></li>
<li>On cherche le plus petit entier \(n\geqslant 1\) tel que \(S_n\geqslant 1000\) :
\[\frac{5n^2+35n}{2}\geqslant 1000\iff 5n^2+35n-2000\geqslant 0\iff n^2+7n-400\geqslant 0.\]
\(\Delta=49+1600=1649\). Les racines sont \(n_1=\frac{-7-\sqrt{1649}}{2}\lt 0\) et \(n_2=\frac{-7+\sqrt{1649}}{2}\). Comme \(1600\lt 1649\lt 1681\), on a \(40\lt\sqrt{1649}\lt 41\), donc \(16{,}5\lt n_2\lt 17\).<br>
Le trinôme est positif à l'extérieur des racines ; pour \(n\geqslant 1\), cela revient à \(n\geqslant n_2\). Le plus petit entier convenable est \(n=17\).<br>
Vérification : \(S_{16}=\frac{5\times 256+35\times 16}{2}=\frac{1280+560}{2}=920\lt 1000\) et \(S_{17}=\frac{5\times 289+35\times 17}{2}=\frac{1445+595}{2}=1020\geqslant 1000\).<br>
<code>mois(1000)</code> renvoie <b>17</b> : il faut 17 mois à Léa. <i>(1,25 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 4 — Probabilités : tableau croisé", points: 3, chapitres: [10],
      enonce: R`<p>On a interrogé 500 personnes sur leur lieu d'habitation et leur moyen de transport principal :</p>
<table class="tv"><tr><td></td><td>Vélo</td><td>Transports en commun</td><td>Voiture</td><td>Total</td></tr>
<tr><td>En ville</td><td>60</td><td>140</td><td>50</td><td>250</td></tr>
<tr><td>Hors ville</td><td>20</td><td>80</td><td>150</td><td>250</td></tr>
<tr><td>Total</td><td>80</td><td>220</td><td>200</td><td>500</td></tr></table>
<p>On choisit une personne au hasard. On note \(V\) : « elle habite en ville », \(E\) : « elle se déplace à vélo » et \(T\) : « elle se déplace en voiture ».</p>
<ol>
<li>Calculer \(P(V)\), \(P(E)\) et \(P(V\cap E)\).</li>
<li>Calculer \(P_V(E)\) et \(P_E(V)\). Interpréter chacun de ces résultats par une phrase.</li>
<li>Les événements \(V\) et \(E\) sont-ils indépendants ?</li>
<li>La personne choisie n'utilise pas la voiture. Quelle est la probabilité qu'elle habite en ville ?</li>
</ol>`,
      correction: R`<ol>
<li>\(P(V)=\frac{250}{500}=\frac12\), \(P(E)=\frac{80}{500}=\frac{4}{25}\) et \(P(V\cap E)=\frac{60}{500}=\frac{3}{25}\). <i>(0,75 pt)</i></li>
<li>\(P_V(E)=\dfrac{60}{250}=\dfrac{6}{25}=0{,}24\) : 24 % des personnes habitant en ville se déplacent à vélo.<br>
\(P_E(V)=\dfrac{60}{80}=\dfrac34\) : 75 % des cyclistes habitent en ville. <i>(1 pt)</i></li>
<li>\(P(V)\times P(E)=\frac12\times\frac{4}{25}=\frac{2}{25}\neq\frac{3}{25}=P(V\cap E)\) : \(V\) et \(E\) ne sont <b>pas indépendants</b>. (On peut aussi remarquer que \(P_V(E)=0{,}24\neq P(E)=0{,}16\).) <i>(0,75 pt)</i></li>
<li>On cherche \(P_{\overline{T}}(V)\). Il y a \(500-200=300\) personnes qui n'utilisent pas la voiture, dont \(60+140=200\) habitent en ville :
\[P_{\overline{T}}(V)=\frac{200}{300}=\frac23.\]
<i>(0,5 pt)</i></li>
</ol>
<div class="astuce">Dans un tableau croisé, une probabilité conditionnelle se lit directement : on se restreint à la ligne (ou à la colonne) de l'événement qui est « sachant ».</div>
<p><b>Total : 3 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°5", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 7, 8, 9, 11],
  automatismes: [
    { q: R`Soit \(f(x)=x^2-3x\). L'image de \(-2\) par \(f\) est :`, choix: [R`\(-10\)`, R`\(-2\)`, R`\(2\)`, R`\(10\)`], bonne: 3,
      explication: R`\(f(-2)=(-2)^2-3\times(-2)=4+6=10\).` },
    { q: R`Pour tout réel \(x\), \((3x-2)^2=\)`, choix: [R`\(9x^2+4\)`, R`\(9x^2-12x+4\)`, R`\(9x^2-6x+4\)`, R`\(3x^2-12x+4\)`], bonne: 1,
      explication: R`\((a-b)^2=a^2-2ab+b^2\) avec \(a=3x\), \(b=2\) : \(9x^2-12x+4\).` },
    { q: R`\(0{,}2\times 0{,}03=\)`, choix: [R`\(0{,}06\)`, R`\(0{,}6\)`, R`\(0{,}0006\)`, R`\(0{,}006\)`], bonne: 3,
      explication: R`\(2\times 3=6\) et il y a \(1+2=3\) chiffres après la virgule : \(0{,}006\).` },
    { q: R`Un prix baisse de 25 %. Pour revenir au prix initial, il doit augmenter d'environ :`, choix: [R`\(25\) %`, R`\(20\) %`, R`\(33{,}3\) %`, R`\(50\) %`], bonne: 2,
      explication: R`Le coefficient réciproque de \(0{,}75\) est \(\frac{1}{0{,}75}=\frac43\approx 1{,}333\), soit une hausse d'environ 33,3 %.` },
    { q: R`\(f(2)=3\) et \(f'(2)=-1\). La tangente à la courbe de \(f\) au point d'abscisse 2 a pour équation :`, choix: [R`\(y=-x+5\)`, R`\(y=3x-1\)`, R`\(y=-x+3\)`, R`\(y=-x+1\)`], bonne: 0,
      explication: R`\(y=f'(2)(x-2)+f(2)=-(x-2)+3=-x+5\).` },
    { q: R`La dérivée de \(f(x)=\dfrac{x}{x+1}\) sur \(]-1;+\infty[\) est :`, choix: [R`\(-\dfrac{1}{(x+1)^2}\)`, R`\(1\)`, R`\(\dfrac{1}{(x+1)^2}\)`, R`\(\dfrac{2x+1}{(x+1)^2}\)`], bonne: 2,
      explication: R`\(\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\) : \(\dfrac{1\times(x+1)-x\times 1}{(x+1)^2}=\dfrac{1}{(x+1)^2}\).` },
    { q: R`Le cercle d'équation \(x^2+y^2-6x+4y=0\) a pour centre :`, choix: [R`\((-3;2)\)`, R`\((3;-2)\)`, R`\((6;-4)\)`, R`\((3;2)\)`], bonne: 1,
      explication: R`\(x^2-6x=(x-3)^2-9\) et \(y^2+4y=(y+2)^2-4\), d'où \((x-3)^2+(y+2)^2=13\) : centre \((3;-2)\).` },
    { q: R`Un vecteur directeur de la droite d'équation \(2x-5y+1=0\) est :`, choix: [R`\(\vec u(2;-5)\)`, R`\(\vec u(2;5)\)`, R`\(\vec u(5;2)\)`, R`\(\vec u(-5;2)\)`], bonne: 2,
      explication: R`La droite \(ax+by+c=0\) a pour vecteur directeur \(\vec u(-b;a)\), ici \((5;2)\). (\((2;-5)\) est un vecteur <i>normal</i>.)` },
    { q: R`\(u_0=2\) et, pour tout \(n\), \(u_{n+1}=u_n+3\). Alors, pour tout \(n\), \(u_n=\)`, choix: [R`\(3+2n\)`, R`\(2\times 3^n\)`, R`\(3n\)`, R`\(2+3n\)`], bonne: 3,
      explication: R`Suite arithmétique de raison 3 et de premier terme 2 : \(u_n=u_0+nr=2+3n\).` },
    { q: R`Après l'instruction Python <code>L = [2*k for k in range(4)]</code>, la liste <code>L</code> vaut :`, choix: [R`<code>[2, 4, 6, 8]</code>`, R`<code>[0, 2, 4, 6]</code>`, R`<code>[0, 2, 4, 6, 8]</code>`, R`<code>[2, 4, 6]</code>`], bonne: 1,
      explication: R`<code>range(4)</code> donne \(k=0,1,2,3\) (4 valeurs, 4 exclu), donc \(2k\) vaut 0, 2, 4, 6.` },
    { q: R`\(X\) prend la valeur 10 avec probabilité \(0{,}15\) et la valeur 0 sinon. Alors \(E(X)=\)`, choix: [R`\(1{,}5\)`, R`\(0{,}15\)`, R`\(10\)`, R`\(8{,}5\)`], bonne: 0,
      explication: R`\(E(X)=10\times 0{,}15+0\times 0{,}85=1{,}5\).` },
    { q: R`\(x\in\left[0;\dfrac{\pi}{2}\right]\) et \(\cos x=0{,}6\). Alors \(\sin x=\)`, choix: [R`\(0{,}4\)`, R`\(0{,}8\)`, R`\(0{,}64\)`, R`\(-0{,}8\)`], bonne: 1,
      explication: R`\(\sin^2 x=1-0{,}36=0{,}64\) et \(\sin x\geqslant 0\) sur \(\left[0;\frac{\pi}{2}\right]\), donc \(\sin x=0{,}8\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Étude d'une fonction rationnelle", points: 5, chapitres: [4, 5, 2],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(]1;+\infty[\) par \(f(x)=\dfrac{x^2+3}{x-1}\), et \(\mathcal{C}\) sa courbe représentative dans un repère.</p>
<ol>
<li>Calculer \(f(2)\) et \(f(5)\).</li>
<li>Montrer que, pour tout \(x\gt 1\), \(f'(x)=\dfrac{x^2-2x-3}{(x-1)^2}\).</li>
<li>Étudier le signe de \(f'(x)\) sur \(]1;+\infty[\), puis dresser le tableau de variations de \(f\) (les limites ne sont pas demandées). Quel est le minimum de \(f\) ?</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse 2.</li>
<li>Résoudre dans \(]1;+\infty[\) l'équation \(f(x)=7\). Ce résultat est-il cohérent avec le tableau de variations ?</li>
<li>Existe-t-il un point de \(\mathcal{C}\) en lequel la tangente est parallèle à la droite d'équation \(y=x\) ?</li>
</ol>`,
      correction: R`<ol>
<li>\(f(2)=\dfrac{4+3}{1}=7\) et \(f(5)=\dfrac{25+3}{4}=7\). <i>(0,5 pt)</i></li>
<li>\(f=\frac uv\) avec \(u(x)=x^2+3\), \(u'(x)=2x\), \(v(x)=x-1\), \(v'(x)=1\) :
\[f'(x)=\frac{2x(x-1)-(x^2+3)\times 1}{(x-1)^2}=\frac{2x^2-2x-x^2-3}{(x-1)^2}=\frac{x^2-2x-3}{(x-1)^2}.\]
<i>(1 pt)</i></li>
<li>\((x-1)^2\gt 0\) sur \(]1;+\infty[\), donc \(f'(x)\) a le signe de \(x^2-2x-3\). \(\Delta=4+12=16\), racines \(\frac{2-4}{2}=-1\) et \(\frac{2+4}{2}=3\) : \(x^2-2x-3=(x+1)(x-3)\). Sur \(]1;+\infty[\), \(x+1\gt 0\), donc \(f'(x)\) a le signe de \(x-3\).<br>
\(f(3)=\dfrac{9+3}{2}=6\).
<table class="tv"><tr><td>\(x\)</td><td>\(1\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(6\)</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \(]1;+\infty[\) vaut \(6\), atteint en \(x=3\). <i>(1,25 pt)</i></li>
<li>\(f(2)=7\) et \(f'(2)=\dfrac{4-4-3}{1}=-3\). Donc \(T : y=-3(x-2)+7\), soit \(y=-3x+13\). <i>(0,75 pt)</i></li>
<li>Pour \(x\gt 1\) (donc \(x-1\neq 0\)) :
\[f(x)=7\iff x^2+3=7(x-1)\iff x^2-7x+10=0\iff(x-2)(x-5)=0.\]
\(S=\{2;5\}\) (les deux valeurs sont bien dans \(]1;+\infty[\)). C'est cohérent : \(7\gt 6\) est atteint une fois sur \(]1;3[\) où \(f\) décroît, et une fois sur \(]3;+\infty[\) où \(f\) croît (et on retrouve la question 1). <i>(0,75 pt)</i></li>
<li>La tangente au point d'abscisse \(a\) est parallèle à \(y=x\) si et seulement si \(f'(a)=1\) :
\[\frac{a^2-2a-3}{(a-1)^2}=1\iff a^2-2a-3=a^2-2a+1\iff -3=1,\]
ce qui est impossible. <b>Aucune</b> tangente à \(\mathcal{C}\) n'est parallèle à la droite \(y=x\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Deux droites (non verticales) sont parallèles si et seulement si elles ont le même coefficient directeur : on traduit donc la question par \(f'(a)=1\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Cercle et tangente", points: 4, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère l'ensemble \(\mathcal{C}\) des points \(M(x;y)\) tels que \(x^2+y^2-4x+6y-12=0\).</p>
<ol>
<li>Montrer que \(\mathcal{C}\) est un cercle dont on précisera le centre \(\Omega\) et le rayon.</li>
<li>Vérifier que le point \(A(5;1)\) appartient à \(\mathcal{C}\).</li>
<li>Déterminer une équation cartésienne de la tangente \(\Delta\) à \(\mathcal{C}\) au point \(A\).</li>
<li>Déterminer les coordonnées des points d'intersection de \(\mathcal{C}\) avec l'axe des abscisses.</li>
<li>On note \(D\) le point de \(\mathcal{C}\) diamétralement opposé à \(A\), et \(E(6;0)\). Déterminer les coordonnées de \(D\), puis calculer \(\overrightarrow{EA}\cdot\overrightarrow{ED}\). Interpréter géométriquement.</li>
</ol>`,
      correction: R`<ol>
<li>On complète les carrés : \(x^2-4x=(x-2)^2-4\) et \(y^2+6y=(y+3)^2-9\). L'équation devient
\[(x-2)^2-4+(y+3)^2-9-12=0\iff(x-2)^2+(y+3)^2=25.\]
\(\mathcal{C}\) est le cercle de centre \(\Omega(2;-3)\) et de rayon \(\sqrt{25}=5\). <i>(1 pt)</i></li>
<li>\((5-2)^2+(1+3)^2=9+16=25\) : \(A\in\mathcal{C}\). <i>(0,5 pt)</i></li>
<li>La tangente en \(A\) est perpendiculaire au rayon \([\Omega A]\) : \(\overrightarrow{\Omega A}(3;4)\) est un vecteur normal à \(\Delta\). Donc \(\Delta : 3x+4y+c=0\), et \(A\in\Delta\) donne \(15+4+c=0\), soit \(c=-19\).<br>
\(\Delta : 3x+4y-19=0\). <i>(1 pt)</i></li>
<li>Sur l'axe des abscisses, \(y=0\) : \(x^2-4x-12=0\). \(\Delta=16+48=64\), donc \(x=\frac{4-8}{2}=-2\) ou \(x=\frac{4+8}{2}=6\). Les points d'intersection sont \((-2;0)\) et \((6;0)\). <i>(0,75 pt)</i></li>
<li>\(\Omega\) est le milieu de \([AD]\), donc \(x_D=2x_\Omega-x_A=4-5=-1\) et \(y_D=2y_\Omega-y_A=-6-1=-7\) : \(D(-1;-7)\).<br>
\(\overrightarrow{EA}(-1;1)\) et \(\overrightarrow{ED}(-7;-7)\), donc \(\overrightarrow{EA}\cdot\overrightarrow{ED}=7-7=0\).<br>
Le triangle \(AED\) est rectangle en \(E\) : c'est normal, car \(E(6;0)\) est sur le cercle (question 4) et \([AD]\) en est un diamètre. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Suite, sommes et listes Python", points: 5, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=1\) et, pour tout entier naturel \(n\), \(u_{n+1}=u_n+2n+3\).</p>
<ol>
<li>Calculer \(u_1\), \(u_2\) et \(u_3\).</li>
<li>La suite \((u_n)\) est-elle arithmétique ? géométrique ?</li>
<li>On considère la fonction Python suivante.
<pre><code>def liste(n):
    L = [1]
    for k in range(n):
        L.append(L[k] + 2*k + 3)
    return L</code></pre>
a) Que renvoie <code>liste(4)</code> ?<br>
b) Quelle instruction permet d'obtenir la valeur de \(u_{10}\) à l'aide de cette fonction ?</li>
<li>Étudier le sens de variation de la suite \((u_n)\).</li>
<li>a) En additionnant membre à membre les égalités \(u_1-u_0=3\), \(u_2-u_1=5\), …, \(u_n-u_{n-1}=2n+1\), montrer que, pour tout \(n\geqslant 1\), \(u_n=1+3+5+\dots+(2n+1)\).<br>
b) En déduire que, pour tout entier naturel \(n\), \(u_n=(n+1)^2\).</li>
<li>Déterminer le plus petit entier \(n\) tel que \(u_n\gt 2026\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=u_0+2\times 0+3=4\), \(u_2=u_1+2\times 1+3=9\), \(u_3=u_2+2\times 2+3=16\). <i>(0,5 pt)</i></li>
<li>\(u_1-u_0=3\) et \(u_2-u_1=5\) : les différences ne sont pas constantes, la suite n'est <b>pas arithmétique</b>.<br>
\(\frac{u_1}{u_0}=4\) et \(\frac{u_2}{u_1}=\frac94\) : les quotients ne sont pas constants, la suite n'est <b>pas géométrique</b>. <i>(0,75 pt)</i></li>
<li>a) <code>L[k]</code> contient \(u_k\) et on ajoute \(u_k+2k+3=u_{k+1}\). Pour \(n=4\), on ajoute \(u_1\), \(u_2\), \(u_3\), \(u_4\) : la fonction renvoie <code>[1, 4, 9, 16, 25]</code>. <i>(0,5 pt)</i><br>
b) <code>liste(10)</code> contient \(u_0,\dots,u_{10}\) ; \(u_{10}\) est l'élément d'indice 10 : <code>liste(10)[10]</code> (ou <code>liste(10)[-1]</code>). <i>(0,5 pt)</i></li>
<li>Pour tout \(n\), \(u_{n+1}-u_n=2n+3\gt 0\) : la suite \((u_n)\) est <b>strictement croissante</b>. <i>(0,75 pt)</i></li>
<li>a) Pour \(k\) de 0 à \(n-1\), \(u_{k+1}-u_k=2k+3\). En additionnant ces \(n\) égalités, les termes intermédiaires s'éliminent (\(u_1\), \(u_2\), …, \(u_{n-1}\) apparaissent une fois avec le signe \(+\) et une fois avec le signe \(-\)) :
\[u_n-u_0=3+5+\dots+(2n+1),\quad\text{donc}\quad u_n=1+3+5+\dots+(2n+1).\]
<i>(0,5 pt)</i><br>
b) \(3+5+\dots+(2n+1)\) est la somme de \(n\) termes consécutifs d'une suite arithmétique de raison 2 :
\[3+5+\dots+(2n+1)=n\times\frac{3+(2n+1)}{2}=n(n+2)=n^2+2n.\]
Donc \(u_n=1+n^2+2n=(n+1)^2\) pour \(n\geqslant 1\), et c'est vrai aussi pour \(n=0\) car \(u_0=1=1^2\). <i>(0,75 pt)</i></li>
<li>\(u_n\gt 2026\iff(n+1)^2\gt 2026\). Or \(45^2=2025\lt 2026\) et \(46^2=2116\gt 2026\). Comme \(n+1\gt 0\), il faut \(n+1\geqslant 46\), soit \(n\geqslant 45\). Le plus petit entier est \(n=45\) (\(u_{44}=2025\) et \(u_{45}=2116\)). <i>(0,75 pt)</i></li>
</ol>
<div class="warn">En Python, <code>range(n)</code> s'arrête à \(n-1\) et les indices d'une liste commencent à 0 : <code>L[0]</code> est le premier élément.</div>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°6", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11],
  automatismes: [
    { q: R`\(3\div\dfrac14=\)`, choix: [R`\(\dfrac34\)`, R`\(\dfrac43\)`, R`\(12\)`, R`\(\dfrac{1}{12}\)`], bonne: 2,
      explication: R`Diviser par \(\frac14\), c'est multiplier par 4 : \(3\times 4=12\).` },
    { q: R`\(2^{10}=\)`, choix: [R`\(20\)`, R`\(1024\)`, R`\(1000\)`, R`\(512\)`], bonne: 1,
      explication: R`\(2^{10}=2^5\times 2^5=32\times 32=1024\).` },
    { q: R`L'ensemble des solutions de \(x^2-9\leqslant 0\) est :`, choix: [R`\([-3;3]\)`, R`\(]-\infty;-3]\cup[3;+\infty[\)`, R`\([0;3]\)`, R`\(]-\infty;3]\)`], bonne: 0,
      explication: R`\(x^2-9=(x-3)(x+3)\), trinôme de coefficient \(a=1\gt 0\) : il est négatif ou nul entre ses racines \(-3\) et \(3\).` },
    { q: R`Pour tout réel \(x\), \((x-2)(x+5)=\)`, choix: [R`\(x^2-3x-10\)`, R`\(x^2-10\)`, R`\(x^2+3x-10\)`, R`\(x^2+3x+10\)`], bonne: 2,
      explication: R`\(x^2+5x-2x-10=x^2+3x-10\).` },
    { q: R`Pour tout réel \(x\), \(\left(\mathrm{e}^{x}\right)^2=\)`, choix: [R`\(\mathrm{e}^{x^2}\)`, R`\(2\,\mathrm{e}^{x}\)`, R`\(\mathrm{e}^{x+2}\)`, R`\(\mathrm{e}^{2x}\)`], bonne: 3,
      explication: R`\(\left(\mathrm{e}^{x}\right)^2=\mathrm{e}^{x}\times\mathrm{e}^{x}=\mathrm{e}^{x+x}=\mathrm{e}^{2x}\).` },
    { q: R`L'équation \(\mathrm{e}^{x}=-1\) :`, choix: [R`a pour solution \(x=-1\)`, R`a pour solution \(x=0\)`, R`a pour solution \(x=-\mathrm{e}\)`, R`n'a aucune solution`], bonne: 3,
      explication: R`Pour tout réel \(x\), \(\mathrm{e}^{x}\gt 0\) : il ne peut pas être égal à \(-1\).` },
    { q: R`\(\sin\left(-\dfrac{\pi}{2}\right)=\)`, choix: [R`\(1\)`, R`\(-1\)`, R`\(0\)`, R`\(-\dfrac{\pi}{2}\)`], bonne: 1,
      explication: R`Le point du cercle trigonométrique associé à \(-\frac{\pi}{2}\) est \((0;-1)\) ; son ordonnée est \(-1\).` },
    { q: R`\(ABCD\) est un carré de côté 2. Alors \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`, choix: [R`\(2\)`, R`\(2\sqrt2\)`, R`\(4\)`, R`\(8\)`], bonne: 2,
      explication: R`Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\), donc \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AB}=AB^2=4\).` },
    { q: R`\(\|\vec u\|=2\), \(\|\vec v\|=3\) et \(\vec u\cdot\vec v=1\). Alors \(\|\vec u+\vec v\|^2=\)`, choix: [R`\(13\)`, R`\(15\)`, R`\(25\)`, R`\(14\)`], bonne: 1,
      explication: R`\(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2=4+2+9=15\).` },
    { q: R`La suite définie pour tout \(n\) par \(u_n=3\times 0{,}5^n\) est :`, choix: [R`décroissante`, R`croissante`, R`constante`, R`ni croissante ni décroissante`], bonne: 0,
      explication: R`Suite géométrique de premier terme \(3\gt 0\) et de raison \(0{,}5\in\,]0;1[\) : elle est décroissante (\(u_{n+1}-u_n=-1{,}5\times 0{,}5^n\lt 0\)).` },
    { q: R`\(X\) prend chacune des valeurs 1, 2, 3, 4 avec la même probabilité. Alors \(E(X)=\)`, choix: [R`\(2\)`, R`\(2{,}5\)`, R`\(10\)`, R`\(0{,}25\)`], bonne: 1,
      explication: R`\(E(X)=\frac{1+2+3+4}{4}=\frac{10}{4}=2{,}5\).` },
    { q: R`Après exécution du programme Python
<pre><code>s = 0
for i in range(1, 5):
    s = s + i</code></pre>
la variable <code>s</code> vaut :`, choix: [R`\(15\)`, R`\(4\)`, R`\(6\)`, R`\(10\)`], bonne: 3,
      explication: R`<code>range(1, 5)</code> donne \(i=1,2,3,4\) (5 exclu), donc \(s=1+2+3+4=10\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Probabilités et variable aléatoire : les retards d'Inès", points: 5, chapitres: [10, 11],
      enonce: R`<p>Pour aller au lycée, Inès prend le bus 60 % des jours et son vélo les autres jours. Lorsqu'elle prend le bus, elle arrive en retard avec une probabilité de 0,15 ; lorsqu'elle prend son vélo, avec une probabilité de 0,05.</p>
<p>On choisit un jour au hasard. On note \(B\) : « Inès prend le bus » et \(R\) : « Inès arrive en retard ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer \(P(B\cap R)\), puis montrer que \(P(R)=0{,}11\).</li>
<li>Un jour, Inès arrive en retard. Quelle est la probabilité qu'elle ait pris le bus ? On donnera le résultat sous forme de fraction irréductible.</li>
<li>On considère deux jours de classe consécutifs, et on suppose que les retards de ces deux jours sont indépendants. On note \(X\) le nombre de retards d'Inès sur ces deux jours.<br>
a) Quelles sont les valeurs prises par \(X\) ? Déterminer la loi de probabilité de \(X\).<br>
b) Calculer \(E(X)\) et interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>Arbre : \(B\) (0,6) puis \(R\) (0,15) / \(\overline{R}\) (0,85) ; \(\overline{B}\) (0,4) puis \(R\) (0,05) / \(\overline{R}\) (0,95). <i>(0,75 pt)</i></li>
<li>\(P(B\cap R)=0{,}6\times 0{,}15=0{,}09\). D'après la formule des probabilités totales (\(B\), \(\overline{B}\) partition) :
\[P(R)=P(B\cap R)+P(\overline{B}\cap R)=0{,}09+0{,}4\times 0{,}05=0{,}09+0{,}02=0{,}11.\]
<i>(1,25 pt)</i></li>
<li>\[P_R(B)=\frac{P(B\cap R)}{P(R)}=\frac{0{,}09}{0{,}11}=\frac{9}{11}.\]
<i>(0,75 pt)</i></li>
<li>a) \(X\) prend les valeurs 0, 1 et 2. Chaque jour, la probabilité d'un retard est \(0{,}11\) et celle de l'absence de retard \(0{,}89\). Avec l'indépendance (arbre à deux niveaux) :<br>
\(P(X=0)=0{,}89\times 0{,}89=0{,}7921\) ;<br>
\(P(X=2)=0{,}11\times 0{,}11=0{,}0121\) ;<br>
\(P(X=1)=0{,}11\times 0{,}89+0{,}89\times 0{,}11=2\times 0{,}0979=0{,}1958\) (retard le 1<sup>er</sup> jour seulement, ou le 2<sup>e</sup> seulement).
<table class="tv"><tr><td>\(k\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td></tr>
<tr><td>\(P(X=k)\)</td><td>\(0{,}7921\)</td><td>\(0{,}1958\)</td><td>\(0{,}0121\)</td></tr></table>
Vérification : \(0{,}7921+0{,}1958+0{,}0121=1\). <i>(1,5 pt)</i><br>
b) \(E(X)=0\times 0{,}7921+1\times 0{,}1958+2\times 0{,}0121=0{,}1958+0{,}0242=0{,}22\).<br>
Sur un grand nombre de périodes de deux jours, Inès a en moyenne 0,22 retard par période (soit 0,11 par jour, ce qui est cohérent). <i>(0,75 pt)</i></li>
</ol>
<div class="warn">\(P(X=1)\) correspond à <b>deux</b> chemins de l'arbre : il ne faut pas en oublier un.</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Exponentielle et suite : le refroidissement d'un café", points: 5, chapitres: [6, 3, 4, 5, 1],
      enonce: R`<p>On sert un café dans une pièce à 20 °C. On admet que sa température, en °C, \(t\) minutes après avoir été servi, est donnée par
\[f(t)=20+70\,\mathrm{e}^{-0{,}1t},\qquad t\geqslant 0.\]</p>
<ol>
<li>Calculer \(f(0)\) et interpréter.</li>
<li>Calculer \(f'(t)\) et en déduire le sens de variation de \(f\) sur \([0;+\infty[\).</li>
<li>Montrer que, pour tout \(t\geqslant 0\), \(f(t)\gt 20\). Interpréter.</li>
<li>Pour tout entier naturel \(n\), on pose \(u_n=f(n)-20\). Montrer que la suite \((u_n)\) est géométrique, préciser sa raison et son premier terme, puis son sens de variation.</li>
<li>On considère le programme Python ci-dessous.
<pre><code>from math import exp

def temps():
    t = 0
    while 20 + 70*exp(-0.1*t) &gt; 55:
        t = t + 1
    return t</code></pre>
a) Que représente la valeur renvoyée par <code>temps()</code> dans le contexte de l'exercice ?<br>
b) On donne \(\mathrm{e}^{-0{,}6}\approx 0{,}549\) et \(\mathrm{e}^{-0{,}7}\approx 0{,}497\). Quelle valeur renvoie <code>temps()</code> ? Justifier.</li>
<li>Déterminer une équation de la tangente à la courbe de \(f\) au point d'abscisse 0. À quel instant cette tangente atteint-elle la valeur 20 ?</li>
</ol>`,
      correction: R`<ol>
<li>\(f(0)=20+70\,\mathrm{e}^0=90\) : le café est servi à 90 °C. <i>(0,25 pt)</i></li>
<li>\(\left(\mathrm{e}^{-0{,}1t}\right)'=-0{,}1\,\mathrm{e}^{-0{,}1t}\), donc \(f'(t)=70\times(-0{,}1)\,\mathrm{e}^{-0{,}1t}=-7\,\mathrm{e}^{-0{,}1t}\).<br>
Comme \(\mathrm{e}^{-0{,}1t}\gt 0\), \(f'(t)\lt 0\) : \(f\) est <b>strictement décroissante</b> sur \([0;+\infty[\) (le café refroidit). <i>(1 pt)</i></li>
<li>\(70\,\mathrm{e}^{-0{,}1t}\gt 0\), donc \(f(t)=20+70\,\mathrm{e}^{-0{,}1t}\gt 20\) : la température du café reste toujours supérieure à celle de la pièce (elle s'en rapproche sans l'atteindre). <i>(0,5 pt)</i></li>
<li>\(u_n=70\,\mathrm{e}^{-0{,}1n}\). Pour tout \(n\) :
\[u_{n+1}=70\,\mathrm{e}^{-0{,}1(n+1)}=70\,\mathrm{e}^{-0{,}1n}\times\mathrm{e}^{-0{,}1}=\mathrm{e}^{-0{,}1}\times u_n.\]
\((u_n)\) est géométrique de raison \(q=\mathrm{e}^{-0{,}1}\) et de premier terme \(u_0=70\). Comme \(-0{,}1\lt 0\), \(0\lt\mathrm{e}^{-0{,}1}\lt\mathrm{e}^0=1\) ; avec \(u_0\gt 0\), la suite est <b>décroissante</b>. <i>(1 pt)</i></li>
<li>a) La boucle augmente \(t\) de 1 tant que la température \(f(t)\) est strictement supérieure à 55 °C. La fonction renvoie donc le <b>plus petit nombre entier de minutes</b> au bout duquel la température du café est inférieure ou égale à 55 °C. <i>(0,5 pt)</i><br>
b) \(f(6)=20+70\,\mathrm{e}^{-0{,}6}\approx 20+70\times 0{,}549\approx 58{,}4\gt 55\) et \(f(7)=20+70\,\mathrm{e}^{-0{,}7}\approx 20+70\times 0{,}497\approx 54{,}8\leqslant 55\). Comme \(f\) est décroissante, \(f(t)\gt 55\) pour \(t=0,1,\dots,6\) et la boucle s'arrête à \(t=7\) : <code>temps()</code> renvoie <b>7</b>. <i>(0,75 pt)</i></li>
<li>\(f(0)=90\) et \(f'(0)=-7\), donc la tangente a pour équation \(y=-7t+90\).<br>
\(-7t+90=20\iff 7t=70\iff t=10\) : la tangente atteint 20 à l'instant \(t=10\) minutes. <i>(1 pt)</i></li>
</ol>
<div class="astuce">La dérivée de \(t\mapsto\mathrm{e}^{kt}\) est \(t\mapsto k\,\mathrm{e}^{kt}\) : son signe est celui de \(k\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Trigonométrie et produit scalaire", points: 4, chapitres: [7, 8],
      enonce: R`<p><b>Partie A</b></p>
<ol>
<li>Déterminer les valeurs exactes de \(\cos\left(-\dfrac{2\pi}{3}\right)\) et \(\sin\left(-\dfrac{2\pi}{3}\right)\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'équation \(2\sin x+1=0\).</li>
</ol>
<p><b>Partie B</b></p>
<p>\(ABC\) est un triangle tel que \(AB=4\), \(AC=6\) et \(\widehat{BAC}=\dfrac{\pi}{3}\). On note \(I\) le milieu de \([BC]\).</p>
<ol start="3">
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Calculer la longueur \(BC\).</li>
<li>Justifier que \(\overrightarrow{AI}=\dfrac12\left(\overrightarrow{AB}+\overrightarrow{AC}\right)\), puis calculer la longueur \(AI\).</li>
</ol>`,
      correction: R`<p><b>Partie A</b></p>
<ol>
<li>Le cosinus est pair et le sinus impair : \(\cos\left(-\frac{2\pi}{3}\right)=\cos\frac{2\pi}{3}=-\frac12\) et \(\sin\left(-\frac{2\pi}{3}\right)=-\sin\frac{2\pi}{3}=-\frac{\sqrt3}{2}\). <i>(0,5 pt)</i></li>
<li>\(2\sin x+1=0\iff\sin x=-\frac12\). Or \(\sin\left(-\frac{\pi}{6}\right)=-\frac12\), et le point symétrique par rapport à l'axe des ordonnées correspond à \(-\pi+\frac{\pi}{6}=-\frac{5\pi}{6}\). Dans \(]-\pi;\pi]\) : \(S=\left\{-\dfrac{5\pi}{6};-\dfrac{\pi}{6}\right\}\). <i>(1 pt)</i></li>
</ol>
<p><b>Partie B</b></p>
<ol start="3">
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}=4\times 6\times\frac12=12\). <i>(0,5 pt)</i></li>
<li>\(\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}\), donc
\[BC^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2=36-24+16=28,\]
d'où \(BC=\sqrt{28}=2\sqrt7\). (C'est la formule d'Al-Kashi.) <i>(1 pt)</i></li>
<li>\(I\) milieu de \([BC]\) donne \(\overrightarrow{IB}+\overrightarrow{IC}=\vec 0\). Donc \(\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AI}+\overrightarrow{IB}+\overrightarrow{AI}+\overrightarrow{IC}=2\,\overrightarrow{AI}\).<br>
Alors
\[AI^2=\frac14\left(AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AC^2\right)=\frac14(16+24+36)=\frac{76}{4}=19,\]
donc \(AI=\sqrt{19}\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°7", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`Les \(\dfrac23\) de \(\dfrac34\) valent :`, choix: [R`\(\dfrac57\)`, R`\(\dfrac12\)`, R`\(\dfrac67\)`, R`\(\dfrac98\)`], bonne: 1,
      explication: R`Prendre une fraction d'un nombre, c'est multiplier : \(\frac23\times\frac34=\frac{6}{12}=\frac12\).` },
    { q: R`Une population passe de 2 000 à 2 300 habitants. Le taux d'évolution est :`, choix: [R`\(+3\) %`, R`\(+30\) %`, R`\(+15\) %`, R`\(+13\) %`], bonne: 2,
      explication: R`\(\dfrac{2300-2000}{2000}=\dfrac{300}{2000}=0{,}15\), soit \(+15\) %.` },
    { q: R`L'ensemble des solutions de \(x^2-x-6=0\) est :`, choix: [R`\(\{2;-3\}\)`, R`\(\{-2;3\}\)`, R`\(\{1;6\}\)`, R`\(\{-1;6\}\)`], bonne: 1,
      explication: R`\(\Delta=1+24=25\), solutions \(\frac{1-5}{2}=-2\) et \(\frac{1+5}{2}=3\). Vérification : \(9-3-6=0\).` },
    { q: R`Le sommet de la parabole d'équation \(y=x^2-4x+1\) est le point :`, choix: [R`\((2;-3)\)`, R`\((-2;13)\)`, R`\((4;1)\)`, R`\((2;3)\)`], bonne: 0,
      explication: R`Abscisse \(-\frac{b}{2a}=\frac{4}{2}=2\), ordonnée \(4-8+1=-3\).` },
    { q: R`La dérivée de \(f(x)=3\,\mathrm{e}^{-2x}\) est :`, choix: [R`\(3\,\mathrm{e}^{-2x}\)`, R`\(-6\,\mathrm{e}^{-2x}\)`, R`\(-2\,\mathrm{e}^{-2x}\)`, R`\(6\,\mathrm{e}^{-2x}\)`], bonne: 1,
      explication: R`\(\left(\mathrm{e}^{-2x}\right)'=-2\,\mathrm{e}^{-2x}\), donc \(f'(x)=3\times(-2)\,\mathrm{e}^{-2x}=-6\,\mathrm{e}^{-2x}\).` },
    { q: R`Le plus grand des quatre nombres suivants est :`, choix: [R`\(\mathrm{e}^{-1}\)`, R`\(\mathrm{e}^{0}\)`, R`\(\mathrm{e}^{1/2}\)`, R`\(\mathrm{e}^{0{,}4}\)`], bonne: 2,
      explication: R`La fonction exponentielle est strictement croissante et \(\frac12=0{,}5\) est le plus grand des exposants.` },
    { q: R`\(\cos\left(\dfrac{5\pi}{6}\right)=\)`, choix: [R`\(\dfrac{\sqrt3}{2}\)`, R`\(-\dfrac12\)`, R`\(\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`], bonne: 3,
      explication: R`\(\cos(\pi-x)=-\cos x\), donc \(\cos\frac{5\pi}{6}=-\cos\frac{\pi}{6}=-\frac{\sqrt3}{2}\).` },
    { q: R`\((u_n)\) est géométrique avec \(u_1=6\) et \(u_2=18\). Alors \(u_0=\)`, choix: [R`\(2\)`, R`\(3\)`, R`\(0\)`, R`\(-6\)`], bonne: 0,
      explication: R`La raison est \(q=\frac{18}{6}=3\), donc \(u_0=\frac{u_1}{q}=\frac63=2\).` },
    { q: R`\(X\) prend les valeurs 0, 1, 2, 3 avec les probabilités \(0{,}1\) ; \(0{,}3\) ; \(0{,}4\) ; \(0{,}2\). Alors \(P(X\leqslant 1)=\)`, choix: [R`\(0{,}3\)`, R`\(0{,}4\)`, R`\(0{,}6\)`, R`\(0{,}8\)`], bonne: 1,
      explication: R`\(P(X\leqslant 1)=P(X=0)+P(X=1)=0{,}1+0{,}3=0{,}4\).` },
    { q: R`\(P(A)=0{,}3\), \(P_A(B)=0{,}6\) et \(P_{\overline{A}}(B)=0{,}2\). Alors \(P(B)=\)`, choix: [R`\(0{,}18\)`, R`\(0{,}8\)`, R`\(0{,}12\)`, R`\(0{,}32\)`], bonne: 3,
      explication: R`Probabilités totales : \(P(B)=0{,}3\times 0{,}6+0{,}7\times 0{,}2=0{,}18+0{,}14=0{,}32\).` },
    { q: R`Dans un repère orthonormé, \(\vec u(2;3)\) et \(\vec v(-3;k)\) sont orthogonaux lorsque \(k=\)`, choix: [R`\(-2\)`, R`\(1\)`, R`\(2\)`, R`\(4{,}5\)`], bonne: 2,
      explication: R`\(\vec u\cdot\vec v=-6+3k=0\iff k=2\).` },
    { q: R`On définit en Python <code>def f(x): return x**2 - 3</code>. Alors <code>f(-2)</code> renvoie :`, choix: [R`\(-7\)`, R`\(1\)`, R`\(7\)`, R`\(-1\)`], bonne: 1,
      explication: R`<code>x**2</code> signifie \(x^2\) : \((-2)^2-3=4-3=1\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Vrai ou faux : second degré et logique", points: 4, chapitres: [2, 1],
      enonce: R`<p>Pour chacune des affirmations suivantes, indiquer si elle est vraie ou fausse, en justifiant la réponse. Une réponse non justifiée ne rapporte aucun point.</p>
<ol>
<li><b>Affirmation 1</b> : « L'équation \(3x^2-2x+5=0\) admet deux solutions réelles. »</li>
<li><b>Affirmation 2</b> : « Pour tout réel \(x\), \(x^2+4x+5\gt 0\). »</li>
<li><b>Affirmation 3</b> : « Soit \(a\), \(b\), \(c\) trois réels avec \(a\neq 0\). Si \(a\) et \(c\) sont de signes contraires, alors l'équation \(ax^2+bx+c=0\) admet deux solutions distinctes. »</li>
<li><b>Affirmation 4</b> : « La réciproque de l'affirmation 3 est vraie. »</li>
<li><b>Affirmation 5</b> : « La parabole d'équation \(y=-2x^2+8x-3\) a pour sommet le point \(S(2;5)\), et la fonction \(x\mapsto -2x^2+8x-3\) admet 5 pour maximum sur \(\mathbb{R}\). »</li>
</ol>`,
      correction: R`<ol>
<li><b>Faux.</b> \(\Delta=(-2)^2-4\times 3\times 5=4-60=-56\lt 0\) : l'équation n'a aucune solution réelle. <i>(0,75 pt)</i></li>
<li><b>Vrai.</b> Forme canonique : \(x^2+4x+5=(x+2)^2-4+5=(x+2)^2+1\). Un carré est positif ou nul, donc \((x+2)^2+1\geqslant 1\gt 0\). (Autre méthode : \(\Delta=16-20=-4\lt 0\) et \(a=1\gt 0\), le trinôme est toujours du signe de \(a\).) <i>(0,75 pt)</i></li>
<li><b>Vrai.</b> Si \(a\) et \(c\) sont de signes contraires, alors \(ac\lt 0\), donc \(-4ac\gt 0\). Comme \(b^2\geqslant 0\), on a \(\Delta=b^2-4ac\gt 0\) : l'équation admet deux solutions distinctes. <i>(1 pt)</i></li>
<li><b>Faux.</b> La réciproque est : « si \(ax^2+bx+c=0\) admet deux solutions distinctes, alors \(a\) et \(c\) sont de signes contraires ». Contre-exemple : \(x^2-3x+2=0\) a deux solutions distinctes, 1 et 2 (\(\Delta=9-8=1\gt 0\)), alors que \(a=1\) et \(c=2\) sont de même signe. <i>(0,75 pt)</i></li>
<li><b>Vrai.</b> L'abscisse du sommet est \(-\frac{b}{2a}=-\frac{8}{-4}=2\) et son ordonnée \(-2\times 4+16-3=5\) : \(S(2;5)\). Comme \(a=-2\lt 0\), la parabole est « tournée vers le bas » : la fonction est croissante sur \(]-\infty;2]\), décroissante sur \([2;+\infty[\), et son maximum est \(5\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">La condition « \(a\) et \(c\) de signes contraires » est <b>suffisante</b> pour avoir deux racines, mais <b>pas nécessaire</b>.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Optimisation : volume d'une boîte", points: 5, chapitres: [4, 5, 2],
      enonce: R`<p>On dispose d'une plaque de carton carrée de 12 cm de côté. On découpe aux quatre coins un carré de côté \(x\) cm, puis on relève les bords pour obtenir une boîte sans couvercle, de base carrée.</p>
<ol>
<li>Justifier que \(x\in\,]0;6[\), puis que le volume de la boîte, en cm³, est \(V(x)=x(12-2x)^2\). Calculer \(V(1)\).</li>
<li>Montrer que, pour tout \(x\in\,]0;6[\), \(V(x)=4x^3-48x^2+144x\).</li>
<li>Calculer \(V'(x)\) et montrer que \(V'(x)=12(x-2)(x-6)\).</li>
<li>Dresser le tableau de variations de \(V\) sur \(]0;6[\). Pour quelle valeur de \(x\) le volume est-il maximal ? Quel est ce volume maximal ?</li>
<li>a) Vérifier que, pour tout réel \(x\), \(x^3-12x^2+36x-25=(x-1)(x^2-11x+25)\).<br>
b) En déduire toutes les valeurs de \(x\) pour lesquelles le volume de la boîte est égal à 100 cm³. <i>(On donne \(\sqrt{21}\approx 4{,}58\).)</i></li>
</ol>`,
      correction: R`<ol>
<li>Il faut \(x\gt 0\) et un côté de base \(12-2x\gt 0\), soit \(x\lt 6\). La base est un carré de côté \(12-2x\) et la hauteur vaut \(x\), donc \(V(x)=(12-2x)^2\times x\).<br>
\(V(1)=1\times 10^2=100\) cm³. <i>(0,5 pt)</i></li>
<li>\((12-2x)^2=144-48x+4x^2\), donc \(V(x)=x(4x^2-48x+144)=4x^3-48x^2+144x\). <i>(0,5 pt)</i></li>
<li>\(V'(x)=12x^2-96x+144=12(x^2-8x+12)\). Le trinôme \(x^2-8x+12\) a pour discriminant \(64-48=16\) et pour racines \(\frac{8-4}{2}=2\) et \(\frac{8+4}{2}=6\) : \(x^2-8x+12=(x-2)(x-6)\). Donc \(V'(x)=12(x-2)(x-6)\). <i>(1 pt)</i></li>
<li>Sur \(]0;6[\), \(x-6\lt 0\) : \(V'(x)\) est du signe de \(-(x-2)\), positif sur \(]0;2[\) et négatif sur \(]2;6[\).<br>
\(V(2)=2\times 8^2=128\).
<table class="tv"><tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(6\)</td></tr>
<tr><td>\(V'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(V\)</td><td></td><td>↗</td><td>\(128\)</td><td>↘</td><td></td></tr></table>
Le volume est maximal pour \(x=2\) cm ; il vaut alors <b>128 cm³</b>. <i>(1,5 pt)</i></li>
<li>a) \((x-1)(x^2-11x+25)=x^3-11x^2+25x-x^2+11x-25=x^3-12x^2+36x-25\). ✓ <i>(0,5 pt)</i><br>
b) \(V(x)=100\iff 4x^3-48x^2+144x-100=0\iff x^3-12x^2+36x-25=0\iff(x-1)(x^2-11x+25)=0\).<br>
• \(x-1=0\iff x=1\) (déjà vu à la question 1).<br>
• \(x^2-11x+25=0\) : \(\Delta=121-100=21\), donc \(x=\frac{11-\sqrt{21}}{2}\approx 3{,}21\) ou \(x=\frac{11+\sqrt{21}}{2}\approx 7{,}79\). Cette dernière valeur n'est pas dans \(]0;6[\).<br>
Le volume vaut 100 cm³ pour \(x=1\) cm et pour \(x=\frac{11-\sqrt{21}}{2}\approx 3{,}21\) cm. C'est cohérent avec le tableau : \(100\lt 128\) est atteint une fois sur \(]0;2[\) et une fois sur \(]2;6[\). <i>(1 pt)</i></li>
</ol>
<div class="warn">Une solution mathématique doit toujours être confrontée au domaine imposé par le problème : ici \(x\approx 7{,}79\) ne convient pas.</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Géométrie repérée : hauteurs et droite d'Euler", points: 5, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère les points \(A(-2;1)\), \(B(4;3)\) et \(C(2;-3)\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\). Le triangle \(ABC\) est-il rectangle en \(A\) ?</li>
<li>a) Montrer qu'une équation de la hauteur \(h_C\) issue de \(C\) est \(3x+y-3=0\).<br>
b) Déterminer une équation de la hauteur \(h_A\) issue de \(A\).</li>
<li>Déterminer les coordonnées du point \(H\), intersection de \(h_A\) et \(h_C\). Vérifier que \((BH)\) est perpendiculaire à \((AC)\). Que représente le point \(H\) pour le triangle ?</li>
<li>Soit \(\Omega\left(\frac32;\frac12\right)\). Montrer que \(\Omega\) est le centre du cercle circonscrit au triangle \(ABC\), et donner une équation de ce cercle.</li>
<li>Soit \(G\) le centre de gravité du triangle, de coordonnées \(\left(\dfrac{x_A+x_B+x_C}{3};\dfrac{y_A+y_B+y_C}{3}\right)\). Montrer que les points \(\Omega\), \(G\) et \(H\) sont alignés.</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}(6;2)\) et \(\overrightarrow{AC}(4;-4)\), donc \(\overrightarrow{AB}\cdot\overrightarrow{AC}=24-8=16\neq 0\). Le triangle n'est pas rectangle en \(A\). <i>(0,5 pt)</i></li>
<li>a) \(h_C\) passe par \(C\) et est perpendiculaire à \((AB)\) : \(\overrightarrow{AB}(6;2)\) est un vecteur normal. Équation : \(6x+2y+c=0\), et \(C\in h_C\) donne \(12-6+c=0\), soit \(c=-6\). D'où \(6x+2y-6=0\), c'est-à-dire \(3x+y-3=0\). <i>(0,75 pt)</i><br>
b) \(h_A\) passe par \(A\) et a pour vecteur normal \(\overrightarrow{BC}(-2;-6)\), ou \(\vec n(1;3)\). Équation : \(x+3y+c=0\), et \(A\in h_A\) donne \(-2+3+c=0\), soit \(c=-1\). \(h_A : x+3y-1=0\). <i>(0,75 pt)</i></li>
<li>\(\begin{cases}3x+y=3\\ x+3y=1\end{cases}\) : la première équation donne \(y=3-3x\), d'où \(x+9-9x=1\), \(x=1\), puis \(y=0\). Donc \(H(1;0)\).<br>
\(\overrightarrow{BH}(-3;-3)\) et \(\overrightarrow{AC}(4;-4)\) : \(\overrightarrow{BH}\cdot\overrightarrow{AC}=-12+12=0\), donc \((BH)\perp(AC)\).<br>
\(H\) appartient aux trois hauteurs : c'est l'<b>orthocentre</b> du triangle \(ABC\). <i>(1,25 pt)</i></li>
<li>\(\Omega A^2=\left(-\frac72\right)^2+\left(\frac12\right)^2=\frac{49+1}{4}=\frac{25}{2}\), \(\Omega B^2=\left(\frac52\right)^2+\left(\frac52\right)^2=\frac{50}{4}=\frac{25}{2}\), \(\Omega C^2=\left(\frac12\right)^2+\left(-\frac72\right)^2=\frac{25}{2}\).<br>
\(\Omega\) est équidistant des trois sommets : c'est le centre du cercle circonscrit, de rayon \(\sqrt{\frac{25}{2}}=\frac{5\sqrt2}{2}\). Équation :
\[\left(x-\tfrac32\right)^2+\left(y-\tfrac12\right)^2=\frac{25}{2}.\]
<i>(1 pt)</i></li>
<li>\(G\left(\frac{-2+4+2}{3};\frac{1+3-3}{3}\right)=\left(\frac43;\frac13\right)\).<br>
\(\overrightarrow{\Omega G}\left(\frac43-\frac32;\frac13-\frac12\right)=\left(-\frac16;-\frac16\right)\) et \(\overrightarrow{\Omega H}\left(1-\frac32;0-\frac12\right)=\left(-\frac12;-\frac12\right)\).<br>
Donc \(\overrightarrow{\Omega H}=3\,\overrightarrow{\Omega G}\) : les vecteurs sont colinéaires et \(\Omega\), \(G\), \(H\) sont <b>alignés</b> (cette droite s'appelle la droite d'Euler du triangle). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Pour la droite passant par un point et perpendiculaire à une droite \((PQ)\), le vecteur \(\overrightarrow{PQ}\) sert directement de <b>vecteur normal</b>.</div>
<p><b>Total : 5 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°8", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11],
  automatismes: [
    { q: R`\(\dfrac12-\dfrac13\times\dfrac34=\)`, choix: [R`\(\dfrac18\)`, R`\(\dfrac16\)`, R`\(\dfrac14\)`, R`\(\dfrac38\)`], bonne: 2,
      explication: R`La multiplication est prioritaire : \(\frac13\times\frac34=\frac14\), puis \(\frac12-\frac14=\frac14\).` },
    { q: R`\(3\times 10^{4}\times 2\times 10^{-6}=\)`, choix: [R`\(6\times 10^{-24}\)`, R`\(6\times 10^{-2}\)`, R`\(6\times 10^{2}\)`, R`\(5\times 10^{-2}\)`], bonne: 1,
      explication: R`\(3\times 2=6\) et \(10^{4}\times 10^{-6}=10^{4-6}=10^{-2}\).` },
    { q: R`Une factorisation de \(4x^2-12x+9\) est :`, choix: [R`\((2x+3)^2\)`, R`\((4x-3)^2\)`, R`\((2x-3)^2\)`, R`\((2x-3)(2x+3)\)`], bonne: 2,
      explication: R`\(a^2-2ab+b^2=(a-b)^2\) avec \(a=2x\) et \(b=3\) : \(2ab=12x\).` },
    { q: R`L'équation \(x^2+x+1=0\) admet :`, choix: [R`aucune solution réelle`, R`une seule solution`, R`deux solutions`, R`une infinité de solutions`], bonne: 0,
      explication: R`\(\Delta=1-4=-3\lt 0\) : pas de solution réelle.` },
    { q: R`Si \(f(x)=x^2+3x\), alors \(f'(1)=\)`, choix: [R`\(4\)`, R`\(5\)`, R`\(2\)`, R`\(3\)`], bonne: 1,
      explication: R`\(f'(x)=2x+3\), donc \(f'(1)=5\).` },
    { q: R`L'ensemble des solutions de l'inéquation \(\mathrm{e}^{x}\gt 1\) est :`, choix: [R`\(]0;+\infty[\)`, R`\(]1;+\infty[\)`, R`\(]-\infty;0[\)`, R`\(]\mathrm{e};+\infty[\)`], bonne: 0,
      explication: R`\(1=\mathrm{e}^0\) et la fonction exponentielle est strictement croissante : \(\mathrm{e}^x\gt\mathrm{e}^0\iff x\gt 0\).` },
    { q: R`La dérivée de \(f(x)=\mathrm{e}^{x}+x^2\) est :`, choix: [R`\(x\,\mathrm{e}^{x-1}+2x\)`, R`\(\mathrm{e}^{x}+x\)`, R`\(\mathrm{e}^{x}+2x\)`, R`\(2x\,\mathrm{e}^{x}\)`], bonne: 2,
      explication: R`La fonction exponentielle est égale à sa dérivée, et \((x^2)'=2x\).` },
    { q: R`\(\cos(\pi)+\sin\left(\dfrac{\pi}{2}\right)=\)`, choix: [R`\(0\)`, R`\(2\)`, R`\(-1\)`, R`\(1\)`], bonne: 0,
      explication: R`\(\cos\pi=-1\) et \(\sin\frac{\pi}{2}=1\), donc la somme vaut 0.` },
    { q: R`Dans un repère orthonormé, \(A(1;2)\) et \(B(4;6)\). Alors \(AB=\)`, choix: [R`\(7\)`, R`\(25\)`, R`\(5\)`, R`\(\sqrt7\)`], bonne: 2,
      explication: R`\(AB=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=5\).` },
    { q: R`Un vecteur directeur de la droite d'équation \(y=3x-2\) est :`, choix: [R`\(\vec u(3;-2)\)`, R`\(\vec u(1;3)\)`, R`\(\vec u(3;1)\)`, R`\(\vec u(-2;3)\)`], bonne: 1,
      explication: R`La droite \(y=mx+p\) a pour vecteur directeur \(\vec u(1;m)\), ici \((1;3)\).` },
    { q: R`Un capital augmente de 2 % par an. La suite des capitaux successifs est :`, choix: [R`arithmétique de raison 2`, R`géométrique de raison 1,02`, R`géométrique de raison 0,02`, R`arithmétique de raison 1,02`], bonne: 1,
      explication: R`Augmenter de 2 %, c'est multiplier par \(1+\frac{2}{100}=1{,}02\) : \(C_{n+1}=1{,}02\,C_n\).` },
    { q: R`\(E(X)=4\) et \(Y=2X+3\). Alors \(E(Y)=\)`, choix: [R`\(8\)`, R`\(14\)`, R`\(7\)`, R`\(11\)`], bonne: 3,
      explication: R`Linéarité de l'espérance : \(E(aX+b)=aE(X)+b=2\times 4+3=11\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suites : les rangées d'une salle de spectacle", points: 5, chapitres: [3, 2, 1],
      enonce: R`<p>Dans une salle de spectacle, la première rangée compte 20 fauteuils, et chaque rangée compte 2 fauteuils de plus que la précédente. On note \(u_n\) le nombre de fauteuils de la \(n\)-ième rangée (\(n\geqslant 1\)), donc \(u_1=20\).</p>
<ol>
<li>Préciser la nature de la suite \((u_n)\). Exprimer \(u_n\) en fonction de \(n\), puis calculer le nombre de fauteuils de la 15<sup>e</sup> rangée.</li>
<li>Montrer que le nombre total de fauteuils dans les \(N\) premières rangées est \(S_N=N(N+19)\).</li>
<li>La salle compte 1 100 fauteuils au total. Combien de rangées comporte-t-elle ?</li>
<li>On considère la fonction Python suivante.
<pre><code>def places(N):
    L = []
    for n in range(1, N+1):
        L.append(2*n + 18)
    return L</code></pre>
a) Que renvoie <code>places(3)</code> ?<br>
b) Quelle valeur renvoie l'instruction <code>sum(places(25))</code> ? Justifier sans calcul supplémentaire.</li>
<li>Les places des 10 premières rangées sont vendues 40 €, les autres 25 €. Calculer la recette d'un spectacle joué à guichets fermés.</li>
</ol>`,
      correction: R`<ol>
<li>Pour tout \(n\geqslant 1\), \(u_{n+1}=u_n+2\) : \((u_n)\) est <b>arithmétique</b> de raison 2 et de premier terme \(u_1=20\). Donc \(u_n=u_1+(n-1)\times 2=2n+18\).<br>
15<sup>e</sup> rangée : \(u_{15}=30+18=48\) fauteuils. <i>(1 pt)</i></li>
<li>\(S_N=u_1+\dots+u_N\) est une somme de \(N\) termes consécutifs d'une suite arithmétique :
\[S_N=N\times\frac{u_1+u_N}{2}=N\times\frac{20+2N+18}{2}=N\times\frac{2N+38}{2}=N(N+19).\]
<i>(1 pt)</i></li>
<li>On cherche l'entier \(N\geqslant 1\) tel que \(N(N+19)=1100\iff N^2+19N-1100=0\).<br>
\(\Delta=361+4400=4761=69^2\), donc \(N=\frac{-19+69}{2}=25\) ou \(N=\frac{-19-69}{2}=-44\) (impossible, car \(N\geqslant 1\)).<br>
La salle comporte <b>25 rangées</b> (vérification : \(25\times 44=1100\)). <i>(1 pt)</i></li>
<li>a) Pour \(n=1,2,3\) on ajoute \(2n+18\), c'est-à-dire \(u_1\), \(u_2\), \(u_3\) : <code>places(3)</code> renvoie <code>[20, 22, 24]</code>. <i>(0,5 pt)</i><br>
b) <code>places(25)</code> est la liste \([u_1,\dots,u_{25}]\), et <code>sum</code> en fait la somme : on obtient \(S_{25}=1100\). <i>(0,5 pt)</i></li>
<li>Les 10 premières rangées comptent \(S_{10}=10\times 29=290\) fauteuils ; les 15 autres en comptent \(1100-290=810\).<br>
Recette : \(290\times 40+810\times 25=11\,600+20\,250=31\,850\) €. <i>(1 pt)</i></li>
</ol>
<div class="warn">Les rangées sont numérotées à partir de 1 : \(u_n=u_1+(n-1)r\), et non \(u_1+nr\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Fonction exponentielle", points: 5, chapitres: [6, 4, 5, 2],
      enonce: R`<p><b>Partie A</b></p>
<p>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=\mathrm{e}^{x}-x-1\).</p>
<ol>
<li>Calculer \(f'(x)\) et étudier son signe.</li>
<li>Dresser le tableau de variations de \(f\) (les limites ne sont pas demandées) et préciser son minimum.</li>
<li>En déduire que, pour tout réel \(x\), \(\mathrm{e}^{x}\geqslant x+1\).</li>
<li>Déterminer une équation de la tangente à la courbe de la fonction exponentielle au point d'abscisse 0. Interpréter graphiquement le résultat de la question 3.</li>
</ol>
<p><b>Partie B</b></p>
<ol start="5">
<li>Résoudre dans \(\mathbb{R}\) l'équation \(\mathrm{e}^{2x}+\mathrm{e}^{x}-2=0\). <i>(On pourra poser \(X=\mathrm{e}^{x}\).)</i></li>
<li>Résoudre dans \(\mathbb{R}\) l'inéquation \(\mathrm{e}^{2x}+\mathrm{e}^{x}-2\gt 0\).</li>
<li>Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \(g(x)=\frac12\mathrm{e}^{2x}+\mathrm{e}^{x}-2x\). Calculer \(g'(x)\) et en déduire le tableau de variations de \(g\), ainsi que son minimum.</li>
</ol>`,
      correction: R`<p><b>Partie A</b></p>
<ol>
<li>\(f'(x)=\mathrm{e}^{x}-1\). La fonction exponentielle étant strictement croissante et \(\mathrm{e}^0=1\) : \(f'(x)\gt 0\iff\mathrm{e}^x\gt\mathrm{e}^0\iff x\gt 0\), \(f'(x)\lt 0\iff x\lt 0\) et \(f'(0)=0\). <i>(0,75 pt)</i></li>
<li>\(f(0)=1-0-1=0\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \(\mathbb{R}\) est \(0\), atteint en \(x=0\). <i>(0,75 pt)</i></li>
<li>Pour tout réel \(x\), \(f(x)\geqslant 0\), c'est-à-dire \(\mathrm{e}^x-x-1\geqslant 0\), soit \(\mathrm{e}^x\geqslant x+1\). <i>(0,5 pt)</i></li>
<li>\(\exp(0)=1\) et \(\exp'(0)=\mathrm{e}^0=1\) : la tangente a pour équation \(y=1\times(x-0)+1\), soit \(y=x+1\).<br>
La question 3 signifie que la courbe de la fonction exponentielle est <b>au-dessus</b> de sa tangente au point d'abscisse 0. <i>(0,5 pt)</i></li>
</ol>
<p><b>Partie B</b></p>
<ol start="5">
<li>Avec \(X=\mathrm{e}^x\), on a \(\mathrm{e}^{2x}=\left(\mathrm{e}^x\right)^2=X^2\), et l'équation devient \(X^2+X-2=0\). \(\Delta=1+8=9\), donc \(X=\frac{-1+3}{2}=1\) ou \(X=\frac{-1-3}{2}=-2\).<br>
• \(\mathrm{e}^x=1\iff x=0\).<br>
• \(\mathrm{e}^x=-2\) n'a pas de solution, car \(\mathrm{e}^x\gt 0\).<br>
\(S=\{0\}\). <i>(1,25 pt)</i></li>
<li>\(\mathrm{e}^{2x}+\mathrm{e}^x-2=(X-1)(X+2)\) avec \(X=\mathrm{e}^x\). Comme \(X+2\gt 0\), le signe est celui de \(X-1=\mathrm{e}^x-1\), strictement positif si et seulement si \(x\gt 0\). \(S=\,]0;+\infty[\). <i>(0,5 pt)</i></li>
<li>\(\left(\frac12\mathrm{e}^{2x}\right)'=\frac12\times 2\,\mathrm{e}^{2x}=\mathrm{e}^{2x}\), donc \(g'(x)=\mathrm{e}^{2x}+\mathrm{e}^x-2\). D'après les questions 5 et 6, \(g'(x)\lt 0\) sur \(]-\infty;0[\), \(g'(0)=0\) et \(g'(x)\gt 0\) sur \(]0;+\infty[\).<br>
\(g(0)=\frac12+1-0=\frac32\).
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(g'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(g\)</td><td></td><td>↘</td><td>\(\frac32\)</td><td>↗</td><td></td></tr></table>
Le minimum de \(g\) est \(\frac32\), atteint en \(x=0\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Le changement de variable \(X=\mathrm{e}^x\) transforme l'équation en un trinôme ; on ne garde ensuite que les solutions \(X\gt 0\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Variable aléatoire : la roue de la kermesse", points: 4, chapitres: [11, 10],
      enonce: R`<p>À la kermesse d'un collège, on fait tourner une roue équilibrée. Elle s'arrête :</p>
<ul><li>sur un secteur « perdu » avec une probabilité \(\frac12\) ;</li>
<li>sur un secteur « bon d'achat de 5 € » avec une probabilité \(\frac13\) ;</li>
<li>sur un secteur « bon d'achat de 20 € » avec une probabilité \(\frac16\).</li></ul>
<p>Un ticket pour faire tourner la roue coûte 6 €. On note \(X\) le gain algébrique du joueur (valeur du bon obtenu moins le prix du ticket).</p>
<ol>
<li>Déterminer la loi de probabilité de \(X\).</li>
<li>Calculer \(E(X)\) et interpréter.</li>
<li>Calculer \(V(X)\) et \(\sigma(X)\).</li>
<li>Quel devrait être le prix du ticket pour que le jeu soit équitable ?</li>
<li>Le prix restant fixé à 6 €, l'organisateur envisage plutôt de modifier la valeur \(a\) du gros lot (actuellement 20 €). Quelle valeur de \(a\) rendrait le jeu équitable ?</li>
<li>Un joueur fait tourner la roue deux fois ; les deux lancers sont indépendants. Quelle est la probabilité qu'il obtienne au moins une fois le bon de 20 € ?</li>
</ol>`,
      correction: R`<ol>
<li>\(X\) prend les valeurs \(0-6=-6\), \(5-6=-1\) et \(20-6=14\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(-6\)</td><td>\(-1\)</td><td>\(14\)</td></tr>
<tr><td>\(P(X=x_i)\)</td><td>\(\frac12\)</td><td>\(\frac13\)</td><td>\(\frac16\)</td></tr></table>
<i>(1 pt)</i></li>
<li>\(E(X)=-6\times\frac12-1\times\frac13+14\times\frac16=-3-\frac13+\frac73=-3+2=-1\).<br>
En moyenne, un joueur perd 1 € par partie : le jeu est défavorable au joueur (et rapporte en moyenne 1 € par ticket à la kermesse). <i>(0,75 pt)</i></li>
<li>\(E(X^2)=36\times\frac12+1\times\frac13+196\times\frac16=18+\frac13+\frac{98}{3}=18+33=51\).<br>
\(V(X)=E(X^2)-E(X)^2=51-1=50\) et \(\sigma(X)=\sqrt{50}=5\sqrt2\approx 7{,}07\). <i>(0,75 pt)</i></li>
<li>L'espérance de la valeur du bon obtenu est \(0\times\frac12+5\times\frac13+20\times\frac16=\frac53+\frac{10}{3}=5\). Le jeu est équitable si le ticket coûte <b>5 €</b>. <i>(0,5 pt)</i></li>
<li>L'espérance du gain devient \(5\times\frac13+a\times\frac16-6=\frac{a}{6}-\frac{13}{3}\). Elle est nulle si \(\frac{a}{6}=\frac{13}{3}\), soit \(a=26\). Le gros lot devrait valoir <b>26 €</b>. <i>(0,5 pt)</i></li>
<li>L'événement contraire est « ne jamais obtenir le bon de 20 € », de probabilité \(\frac56\times\frac56=\frac{25}{36}\) par indépendance. La probabilité cherchée est \(1-\frac{25}{36}=\frac{11}{36}\). <i>(0,5 pt)</i></li>
</ol>
<div class="astuce">« Au moins une fois » : on passe presque toujours par l'événement contraire « jamais ».</div>
<p><b>Total : 4 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°9", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 6, 7, 8, 9, 10],
  automatismes: [
    { q: R`\(\dfrac{10^{3}\times 10^{-5}}{10^{-4}}=\)`, choix: [R`\(10^{-12}\)`, R`\(10^{2}\)`, R`\(10^{-6}\)`, R`\(10^{12}\)`], bonne: 1,
      explication: R`\(10^{3-5-(-4)}=10^{2}\).` },
    { q: R`Après une remise de 30 %, un article coûte 70 €. Son prix initial était :`, choix: [R`\(91\) €`, R`\(49\) €`, R`\(100\) €`, R`\(53{,}85\) €`], bonne: 2,
      explication: R`Prix final = prix initial \(\times 0{,}7\), donc prix initial \(=\frac{70}{0{,}7}=100\) €.` },
    { q: R`Les racines du trinôme \(3(x-1)(x+2)\) sont :`, choix: [R`\(1\) et \(-2\)`, R`\(-1\) et \(2\)`, R`\(3\) et \(1\)`, R`\(1\) et \(2\)`], bonne: 0,
      explication: R`Un produit est nul si et seulement si l'un des facteurs est nul : \(x-1=0\) ou \(x+2=0\).` },
    { q: R`Le trinôme \(-x^2+4\) est strictement positif sur :`, choix: [R`\(]-\infty;-2[\cup]2;+\infty[\)`, R`\(]-2;2[\)`, R`\(]-4;4[\)`, R`\(\mathbb{R}\)`], bonne: 1,
      explication: R`Racines \(-2\) et \(2\), coefficient \(a=-1\lt 0\) : le trinôme est positif entre les racines.` },
    { q: R`\(1+2+2^2+\dots+2^{9}=\)`, choix: [R`\(1023\)`, R`\(1024\)`, R`\(512\)`, R`\(2047\)`], bonne: 0,
      explication: R`Somme géométrique : \(1+q+\dots+q^n=\dfrac{1-q^{n+1}}{1-q}\), donc \(\dfrac{1-2^{10}}{1-2}=2^{10}-1=1023\).` },
    { q: R`La suite définie par \(u_n=(-1)^n\) est :`, choix: [R`croissante`, R`décroissante`, R`arithmétique`, R`ni croissante ni décroissante`], bonne: 3,
      explication: R`Ses termes valent alternativement \(1\) et \(-1\) : \(u_0\gt u_1\) mais \(u_1\lt u_2\).` },
    { q: R`La courbe de \(f(x)=x^2-6x+1\) admet une tangente horizontale au point d'abscisse :`, choix: [R`\(6\)`, R`\(-3\)`, R`\(3\)`, R`\(0\)`], bonne: 2,
      explication: R`Tangente horizontale \(\iff f'(x)=0\) : \(2x-6=0\iff x=3\).` },
    { q: R`La dérivée de \(f(x)=\mathrm{e}^{3x-1}\) est :`, choix: [R`\(\mathrm{e}^{3x-1}\)`, R`\(3\,\mathrm{e}^{3x-1}\)`, R`\((3x-1)\,\mathrm{e}^{3x-1}\)`, R`\(3\,\mathrm{e}^{3x}\)`], bonne: 1,
      explication: R`\(\left(\mathrm{e}^{ax+b}\right)'=a\,\mathrm{e}^{ax+b}\), ici \(a=3\).` },
    { q: R`Pour tout réel \(x\), \(\cos(x+\pi)=\)`, choix: [R`\(\cos x\)`, R`\(-\cos x\)`, R`\(\sin x\)`, R`\(-\sin x\)`], bonne: 1,
      explication: R`Les points associés à \(x\) et \(x+\pi\) sont symétriques par rapport à l'origine : \(\cos(x+\pi)=-\cos x\).` },
    { q: R`Dans un repère orthonormé, les vecteurs \(\vec u(2;-1)\) et \(\vec v(2;4)\) sont :`, choix: [R`colinéaires`, R`orthogonaux`, R`de même norme`, R`ni colinéaires ni orthogonaux`], bonne: 1,
      explication: R`\(\vec u\cdot\vec v=2\times 2+(-1)\times 4=0\).` },
    { q: R`La droite passant par l'origine et perpendiculaire à la droite \(d : 2x+y-3=0\) a pour équation :`, choix: [R`\(2x+y=0\)`, R`\(x+2y=0\)`, R`\(x-2y=0\)`, R`\(2x-y=0\)`], bonne: 2,
      explication: R`\(\vec n(2;1)\), normal à \(d\), est un vecteur directeur de la perpendiculaire ; la droite \(x-2y=0\) a pour vecteur directeur \((2;1)\) et passe par l'origine.` },
    { q: R`\(A\) et \(B\) sont indépendants, \(P(A)=0{,}6\) et \(P(B)=0{,}5\). Alors \(P(A\cup B)=\)`, choix: [R`\(0{,}8\)`, R`\(1{,}1\)`, R`\(0{,}3\)`, R`\(0{,}9\)`], bonne: 0,
      explication: R`\(P(A\cap B)=0{,}6\times 0{,}5=0{,}3\), puis \(P(A\cup B)=0{,}6+0{,}5-0{,}3=0{,}8\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Produit scalaire dans un carré", points: 4, chapitres: [8, 9],
      enonce: R`<p>\(ABCD\) est un carré de côté 4. Le point \(E\) est le milieu de \([BC]\). Pour un réel \(x\in[0;4]\), on note \(F\) le point du segment \([CD]\) tel que \(CF=x\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AE}\) en utilisant un projeté orthogonal.</li>
<li>En décomposant \(\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{BE}\) et \(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}\), calculer \(\overrightarrow{AE}\cdot\overrightarrow{AC}\). En déduire la valeur exacte de \(\cos\widehat{EAC}\).</li>
<li>Montrer que \(\overrightarrow{AE}\cdot\overrightarrow{BF}=8-4x\). Pour quelle position de \(F\) les droites \((AE)\) et \((BF)\) sont-elles perpendiculaires ?</li>
<li>On se place dans le repère orthonormé \(\left(A;\tfrac14\overrightarrow{AB},\tfrac14\overrightarrow{AD}\right)\). Donner les coordonnées de \(E\) et de \(F\) en fonction de \(x\), puis retrouver le résultat de la question 3.</li>
</ol>`,
      correction: R`<ol>
<li>\((BE)\perp(AB)\), donc le projeté orthogonal de \(E\) sur \((AB)\) est \(B\). Ainsi \(\overrightarrow{AB}\cdot\overrightarrow{AE}=\overrightarrow{AB}\cdot\overrightarrow{AB}=AB^2=16\). <i>(0,75 pt)</i></li>
<li>\[\overrightarrow{AE}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AB}+\overrightarrow{AB}\cdot\overrightarrow{BC}+\overrightarrow{BE}\cdot\overrightarrow{AB}+\overrightarrow{BE}\cdot\overrightarrow{BC}.\]
\(\overrightarrow{AB}\cdot\overrightarrow{BC}=0\) et \(\overrightarrow{BE}\cdot\overrightarrow{AB}=0\) (vecteurs orthogonaux), et \(\overrightarrow{BE}\cdot\overrightarrow{BC}=BE\times BC=2\times 4=8\) (même sens). Donc \(\overrightarrow{AE}\cdot\overrightarrow{AC}=16+8=24\).<br>
\(AE=\sqrt{AB^2+BE^2}=\sqrt{16+4}=2\sqrt5\) (Pythagore) et \(AC=4\sqrt2\). Donc
\[\cos\widehat{EAC}=\frac{24}{2\sqrt5\times 4\sqrt2}=\frac{3}{\sqrt{10}}=\frac{3\sqrt{10}}{10}.\]
<i>(1,25 pt)</i></li>
<li>\(\overrightarrow{BF}=\overrightarrow{BC}+\overrightarrow{CF}\), donc
\[\overrightarrow{AE}\cdot\overrightarrow{BF}=\overrightarrow{AB}\cdot\overrightarrow{BC}+\overrightarrow{AB}\cdot\overrightarrow{CF}+\overrightarrow{BE}\cdot\overrightarrow{BC}+\overrightarrow{BE}\cdot\overrightarrow{CF}.\]
\(\overrightarrow{AB}\cdot\overrightarrow{BC}=0\), \(\overrightarrow{BE}\cdot\overrightarrow{CF}=0\) ; \(\overrightarrow{CF}\) et \(\overrightarrow{AB}\) sont colinéaires de sens contraires, donc \(\overrightarrow{AB}\cdot\overrightarrow{CF}=-4x\) ; et \(\overrightarrow{BE}\cdot\overrightarrow{BC}=8\). Ainsi \(\overrightarrow{AE}\cdot\overrightarrow{BF}=8-4x\).<br>
\((AE)\perp(BF)\iff 8-4x=0\iff x=2\) : \(F\) doit être le <b>milieu de \([CD]\)</b>. <i>(1,25 pt)</i></li>
<li>\(A(0;0)\), \(B(4;0)\), \(C(4;4)\), \(D(0;4)\), donc \(E(4;2)\) et, \(F\) étant sur \([CD]\) à la distance \(x\) de \(C\), \(F(4-x;4)\).<br>
\(\overrightarrow{AE}(4;2)\) et \(\overrightarrow{BF}(-x;4)\) : \(\overrightarrow{AE}\cdot\overrightarrow{BF}=-4x+8\). ✓ <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Si \(\vec u\) et \(\vec v\) sont colinéaires, \(\vec u\cdot\vec v=\pm\|\vec u\|\times\|\vec v\|\) : signe \(+\) s'ils sont de même sens, \(-\) sinon.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Probabilités conditionnelles : répondre au hasard", points: 4, chapitres: [10],
      enonce: R`<p>Un QCM propose quatre réponses par question, dont une seule est juste. Pour une question donnée, un élève connaît la réponse avec une probabilité de 0,7. S'il ne la connaît pas, il répond au hasard (chacune des quatre réponses ayant la même probabilité d'être choisie).</p>
<p>On note \(C\) : « l'élève connaît la réponse » et \(J\) : « l'élève répond juste ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer \(P(C\cap J)\) et \(P(\overline{C}\cap J)\).</li>
<li>Montrer que \(P(J)=\dfrac{31}{40}\).</li>
<li>L'élève a répondu juste. Quelle est la probabilité qu'il connaissait réellement la réponse ?</li>
<li>On note maintenant \(p\) (avec \(0\lt p\lt 1\)) la probabilité que l'élève connaisse la réponse. Montrer que \(P_J(C)=\dfrac{4p}{3p+1}\), puis déterminer les valeurs de \(p\) pour lesquelles \(P_J(C)\geqslant 0{,}95\).</li>
</ol>`,
      correction: R`<ol>
<li>Arbre : \(C\) (0,7) puis \(J\) (1) / \(\overline{J}\) (0) ; \(\overline{C}\) (0,3) puis \(J\) (0,25) / \(\overline{J}\) (0,75). <i>(0,75 pt)</i></li>
<li>\(P(C\cap J)=0{,}7\times 1=0{,}7\) et \(P(\overline{C}\cap J)=0{,}3\times 0{,}25=0{,}075\). <i>(0,5 pt)</i></li>
<li>Formule des probabilités totales : \(P(J)=0{,}7+0{,}075=0{,}775=\dfrac{775}{1000}=\dfrac{31}{40}\). <i>(0,75 pt)</i></li>
<li>\[P_J(C)=\frac{P(C\cap J)}{P(J)}=\frac{0{,}7}{0{,}775}=\frac{700}{775}=\frac{28}{31}\approx 0{,}90.\]
<i>(1 pt)</i></li>
<li>\(P(C\cap J)=p\) et \(P(J)=p+\frac{1-p}{4}=\frac{4p+1-p}{4}=\frac{3p+1}{4}\), donc \(P_J(C)=\dfrac{p}{\frac{3p+1}{4}}=\dfrac{4p}{3p+1}\).<br>
Comme \(3p+1\gt 0\) :
\[\frac{4p}{3p+1}\geqslant 0{,}95\iff 4p\geqslant 2{,}85p+0{,}95\iff 1{,}15p\geqslant 0{,}95\iff p\geqslant\frac{0{,}95}{1{,}15}=\frac{19}{23}.\]
Il faut \(p\in\left[\frac{19}{23};1\right[\), soit \(p\) supérieur ou égal à environ 0,83. <i>(1 pt)</i></li>
</ol>
<div class="warn">On ne peut multiplier les deux membres d'une inéquation par \(3p+1\) sans changer le sens que parce que \(3p+1\gt 0\) : il faut le dire.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Trigonométrie", points: 3, chapitres: [7],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=\cos(2x)\).</p>
<ol>
<li>Montrer que \(f\) est paire.</li>
<li>Montrer que, pour tout réel \(x\), \(f(x+\pi)=f(x)\). Que peut-on en déduire ?</li>
<li>Calculer \(f\left(\dfrac{\pi}{8}\right)\).</li>
<li>Résoudre dans \([0;\pi]\) l'équation \(f(x)=\dfrac12\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'inéquation \(\cos x\geqslant\dfrac12\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\mathbb{R}\) est symétrique par rapport à 0 et, pour tout \(x\), \(f(-x)=\cos(-2x)=\cos(2x)=f(x)\) car le cosinus est pair. \(f\) est paire (sa courbe est symétrique par rapport à l'axe des ordonnées). <i>(0,5 pt)</i></li>
<li>\(f(x+\pi)=\cos(2x+2\pi)=\cos(2x)=f(x)\), car le cosinus est \(2\pi\)-périodique. La fonction \(f\) est <b>périodique de période \(\pi\)</b>. <i>(0,5 pt)</i></li>
<li>\(f\left(\frac{\pi}{8}\right)=\cos\frac{\pi}{4}=\frac{\sqrt2}{2}\). <i>(0,5 pt)</i></li>
<li>Si \(x\in[0;\pi]\), alors \(X=2x\in[0;2\pi]\). Dans \([0;2\pi]\), \(\cos X=\frac12\iff X=\frac{\pi}{3}\) ou \(X=2\pi-\frac{\pi}{3}=\frac{5\pi}{3}\).<br>
Donc \(x=\frac{\pi}{6}\) ou \(x=\frac{5\pi}{6}\) : \(S=\left\{\dfrac{\pi}{6};\dfrac{5\pi}{6}\right\}\). <i>(1 pt)</i></li>
<li>Sur le cercle trigonométrique, les points d'abscisse supérieure ou égale à \(\frac12\) sont ceux de l'arc allant de \(-\frac{\pi}{3}\) à \(\frac{\pi}{3}\) (passant par le point associé à 0). \(S=\left[-\dfrac{\pi}{3};\dfrac{\pi}{3}\right]\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 4 — Suites, logique et Python", points: 3, chapitres: [1, 3, 2],
      enonce: R`<p>On considère la suite \((u_n)\) définie pour tout entier naturel \(n\) par \(u_n=n^2-3n\).</p>
<ol>
<li>Que contient la liste <code>L</code> après l'instruction Python <code>L = [k**2 - 3*k for k in range(6)]</code> ?</li>
<li>Calculer \(u_{n+1}-u_n\) en fonction de \(n\), et en déduire le sens de variation de \((u_n)\) à partir du rang 1.</li>
<li>On considère la proposition : « Pour tout entier naturel \(n\), si \(u_n\gt 0\), alors \(n\gt 3\). » Est-elle vraie ? Énoncer sa réciproque et préciser si elle est vraie.</li>
<li>On considère la fonction ci-dessous.
<pre><code>def seuil():
    n = 0
    while n**2 - 3*n &lt;= 1000:
        n = n + 1
    return n</code></pre>
Déterminer, par le calcul, la valeur renvoyée par <code>seuil()</code>. <i>(On donne \(63^2=3969\) et \(64^2=4096\).)</i></li>
</ol>`,
      correction: R`<ol>
<li><code>L</code> contient \(u_0,\dots,u_5\) : <code>[0, -2, -2, 0, 4, 10]</code>. <i>(0,75 pt)</i></li>
<li>\(u_{n+1}-u_n=(n+1)^2-3(n+1)-n^2+3n=n^2+2n+1-3n-3-n^2+3n=2n-2\).<br>
Pour \(n\geqslant 1\), \(2n-2\geqslant 0\) : la suite est croissante à partir du rang 1 (strictement à partir du rang 2, car \(u_1=u_2=-2\)). <i>(0,75 pt)</i></li>
<li>\(u_n=n(n-3)\). Pour un entier \(n\geqslant 0\) : si \(n\in\{0,1,2,3\}\), alors \(n\geqslant 0\) et \(n-3\leqslant 0\), donc \(u_n\leqslant 0\). Ainsi, si \(u_n\gt 0\), \(n\) ne peut pas valoir 0, 1, 2 ou 3, donc \(n\gt 3\) : la proposition est <b>vraie</b>.<br>
Réciproque : « si \(n\gt 3\), alors \(u_n\gt 0\) ». Elle est vraie aussi : si \(n\gt 3\), \(n\gt 0\) et \(n-3\gt 0\), donc \(u_n\gt 0\). La condition \(n\gt 3\) est donc nécessaire et suffisante. <i>(0,75 pt)</i></li>
<li>La boucle s'arrête au premier \(n\) tel que \(u_n\gt 1000\), c'est-à-dire \(n^2-3n-1000\gt 0\). \(\Delta=9+4000=4009\) et \(63\lt\sqrt{4009}\lt 64\), donc la racine positive \(\frac{3+\sqrt{4009}}{2}\) est comprise entre 33 et 33,5. Le trinôme est positif au-delà de cette racine : le premier entier convenable est \(n=34\).<br>
Vérification : \(u_{33}=1089-99=990\leqslant 1000\) et \(u_{34}=1156-102=1054\gt 1000\). La fonction renvoie <b>34</b>. <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` }
  ]
});

BAC.push({ niveau: "Intermédiaire", titre: "Sujet intermédiaire n°10", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`\(\dfrac56-\dfrac34=\)`, choix: [R`\(\dfrac{1}{12}\)`, R`\(\dfrac{2}{10}\)`, R`\(\dfrac12\)`, R`\(-\dfrac{1}{12}\)`], bonne: 0,
      explication: R`\(\frac{10}{12}-\frac{9}{12}=\frac{1}{12}\).` },
    { q: R`Un article à 80 € augmente de 15 %. Son nouveau prix est :`, choix: [R`\(95\) €`, R`\(92\) €`, R`\(81{,}20\) €`, R`\(68\) €`], bonne: 1,
      explication: R`\(80\times 1{,}15=80+12=92\) €.` },
    { q: R`La fonction \(f(x)=-3(x-2)^2+5\) admet :`, choix: [R`un minimum égal à 5 en \(x=2\)`, R`un maximum égal à 5 en \(x=2\)`, R`un maximum égal à 5 en \(x=-2\)`, R`un maximum égal à 2 en \(x=5\)`], bonne: 1,
      explication: R`Forme canonique \(a(x-\alpha)^2+\beta\) avec \(a=-3\lt 0\) : maximum \(\beta=5\) atteint en \(\alpha=2\).` },
    { q: R`Le produit des deux racines de \(x^2-7x+10\) vaut :`, choix: [R`\(7\)`, R`\(-7\)`, R`\(10\)`, R`\(-10\)`], bonne: 2,
      explication: R`Les racines sont 2 et 5 (\(\Delta=49-40=9\)) ; leur produit vaut \(10=\frac{c}{a}\).` },
    { q: R`La suite définie par \(u_n=5-2n\) est :`, choix: [R`géométrique de raison \(-2\)`, R`arithmétique de raison 5`, R`arithmétique de raison \(-2\)`, R`ni arithmétique ni géométrique`], bonne: 2,
      explication: R`\(u_{n+1}-u_n=5-2(n+1)-(5-2n)=-2\) : différence constante.` },
    { q: R`Pour tout réel \(x\), \(\mathrm{e}^{-x}\times\mathrm{e}^{x+1}=\)`, choix: [R`\(1\)`, R`\(\mathrm{e}\)`, R`\(\mathrm{e}^{2x+1}\)`, R`\(\mathrm{e}^{-x^2}\)`], bonne: 1,
      explication: R`\(\mathrm{e}^{-x+x+1}=\mathrm{e}^{1}=\mathrm{e}\).` },
    { q: R`Pour tout réel \(x\), le nombre \(-2\,\mathrm{e}^{x}\) est :`, choix: [R`du signe de \(x\)`, R`nul pour \(x=0\)`, R`strictement positif`, R`strictement négatif`], bonne: 3,
      explication: R`\(\mathrm{e}^x\gt 0\), donc \(-2\,\mathrm{e}^x\lt 0\) (pour \(x=0\), il vaut \(-2\)).` },
    { q: R`Pour tout réel \(x\), \(\sin(-x)=\)`, choix: [R`\(-\cos x\)`, R`\(\cos x\)`, R`\(-\sin x\)`, R`\(\sin x\)`], bonne: 2,
      explication: R`La fonction sinus est impaire : les points associés à \(x\) et \(-x\) sont symétriques par rapport à l'axe des abscisses.` },
    { q: R`Un angle de \(\dfrac{7\pi}{6}\) radians mesure, en degrés :`, choix: [R`\(210°\)`, R`\(120°\)`, R`\(105°\)`, R`\(270°\)`], bonne: 0,
      explication: R`\(\pi\) rad \(=180°\), donc \(\frac{7\pi}{6}=7\times 30°=210°\).` },
    { q: R`Dans un triangle \(ABC\), \(AB=3\), \(AC=4\) et \(\overrightarrow{AB}\cdot\overrightarrow{AC}=6\). Alors l'angle \(\widehat{BAC}\) mesure :`, choix: [R`\(\dfrac{\pi}{6}\)`, R`\(\dfrac{\pi}{4}\)`, R`\(\dfrac{\pi}{3}\)`, R`\(\dfrac{\pi}{2}\)`], bonne: 2,
      explication: R`\(\cos\widehat{BAC}=\dfrac{6}{3\times 4}=\dfrac12\), donc \(\widehat{BAC}=\dfrac{\pi}{3}\).` },
    { q: R`Après les instructions Python <code>L = [3, 5, 8]</code> puis <code>L.append(13)</code>, que vaut <code>len(L)</code> ?`, choix: [R`\(3\)`, R`\(4\)`, R`\(13\)`, R`\(5\)`], bonne: 1,
      explication: R`<code>append</code> ajoute un élément en fin de liste : <code>L</code> vaut <code>[3, 5, 8, 13]</code>, qui a 4 éléments.` },
    { q: R`\(X\) prend les valeurs 0, 1, 2 avec \(P(X=0)=0{,}25\) et \(P(X=1)=0{,}45\). Alors \(P(X=2)=\)`, choix: [R`\(0{,}3\)`, R`\(0{,}7\)`, R`\(0{,}2\)`, R`\(0{,}55\)`], bonne: 0,
      explication: R`La somme des probabilités vaut 1 : \(1-0{,}25-0{,}45=0{,}3\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Parabole, droite et cercle", points: 4, chapitres: [2, 9, 4],
      enonce: R`<p>Dans un repère orthonormé, on considère la parabole \(\mathcal{P}\) d'équation \(y=x^2-2x-3\) et la droite \(\mathcal{D}\) d'équation \(y=x+1\).</p>
<ol>
<li>Déterminer la forme canonique de \(x^2-2x-3\). En déduire les coordonnées du sommet \(S\) de \(\mathcal{P}\).</li>
<li>Déterminer les coordonnées des points d'intersection \(A\) et \(B\) de \(\mathcal{P}\) et \(\mathcal{D}\) (on notera \(A\) celui d'abscisse la plus petite).</li>
<li>Étudier la position relative de \(\mathcal{P}\) et \(\mathcal{D}\).</li>
<li>Déterminer le point \(M\) de \(\mathcal{P}\) en lequel la tangente à \(\mathcal{P}\) est parallèle à \(\mathcal{D}\), puis une équation de cette tangente.</li>
<li>Calculer la longueur \(AB\) et les coordonnées du milieu \(I\) de \([AB]\). Donner une équation du cercle de diamètre \([AB]\). Que remarque-t-on concernant les abscisses de \(I\) et de \(M\) ?</li>
</ol>`,
      correction: R`<ol>
<li>\(x^2-2x-3=(x-1)^2-1-3=(x-1)^2-4\). Le sommet est \(S(1;-4)\). <i>(0,75 pt)</i></li>
<li>On résout \(x^2-2x-3=x+1\iff x^2-3x-4=0\). \(\Delta=9+16=25\), donc \(x=\frac{3-5}{2}=-1\) ou \(x=\frac{3+5}{2}=4\).<br>
Avec \(y=x+1\) : \(A(-1;0)\) et \(B(4;5)\). <i>(1 pt)</i></li>
<li>On étudie le signe de la différence \((x^2-2x-3)-(x+1)=x^2-3x-4=(x+1)(x-4)\), trinôme de coefficient \(a=1\gt 0\) :<br>
• sur \(]-\infty;-1[\cup]4;+\infty[\), elle est positive : \(\mathcal{P}\) est <b>au-dessus</b> de \(\mathcal{D}\) ;<br>
• sur \(]-1;4[\), elle est négative : \(\mathcal{P}\) est <b>en dessous</b> de \(\mathcal{D}\) ;<br>
• elles se coupent en \(A\) et \(B\). <i>(1 pt)</i></li>
<li>Avec \(f(x)=x^2-2x-3\), \(f'(x)=2x-2\). La tangente est parallèle à \(\mathcal{D}\) (coefficient directeur 1) si \(2x-2=1\), soit \(x=\frac32\). \(f\left(\frac32\right)=\frac94-3-3=-\frac{15}{4}\), donc \(M\left(\frac32;-\frac{15}{4}\right)\).<br>
Tangente : \(y=1\times\left(x-\frac32\right)-\frac{15}{4}=x-\frac{21}{4}\). <i>(0,5 pt)</i></li>
<li>\(AB=\sqrt{5^2+5^2}=5\sqrt2\) et \(I\left(\frac{-1+4}{2};\frac{0+5}{2}\right)=\left(\frac32;\frac52\right)\).<br>
Le cercle de diamètre \([AB]\) a pour centre \(I\) et pour rayon \(\frac{5\sqrt2}{2}\), donc pour équation \(\left(x-\frac32\right)^2+\left(y-\frac52\right)^2=\frac{25}{2}\).<br>
\(I\) et \(M\) ont la même abscisse \(\frac32\) : le point où la tangente est parallèle à la corde \([AB]\) a pour abscisse la moyenne des abscisses de \(A\) et \(B\). <i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Position relative de deux courbes : on étudie toujours le <b>signe de la différence</b> des deux expressions.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Exponentielle et optimisation d'un bénéfice", points: 5, chapitres: [6, 4, 5],
      enonce: R`<p>Une entreprise produit chaque mois entre 0 et 1 000 unités d'un composant. Pour \(x\) centaines d'unités produites (\(x\in[0;10]\)), le bénéfice, en milliers d'euros, est modélisé par
\[B(x)=(4x-2)\,\mathrm{e}^{-0{,}5x}.\]</p>
<ol>
<li>Calculer \(B(0)\) et interpréter. Étudier le signe de \(B(x)\) sur \([0;10]\) : à partir de quelle production l'entreprise est-elle bénéficiaire ?</li>
<li>Montrer que, pour tout \(x\in[0;10]\), \(B'(x)=(5-2x)\,\mathrm{e}^{-0{,}5x}\).</li>
<li>Dresser le tableau de variations de \(B\) sur \([0;10]\), en donnant les valeurs exactes aux bornes et à l'extremum.</li>
<li>On donne \(\mathrm{e}^{-1{,}25}\approx 0{,}2865\). Quelle production maximise le bénéfice ? Donner une valeur approchée à l'euro près de ce bénéfice maximal.</li>
<li>Déterminer une équation de la tangente à la courbe de \(B\) au point d'abscisse 1. On l'écrira sous la forme \(y=\mathrm{e}^{-0{,}5}(ax+b)\).</li>
</ol>`,
      correction: R`<ol>
<li>\(B(0)=-2\times\mathrm{e}^0=-2\) : sans production, l'entreprise perd 2 000 € (charges fixes).<br>
\(\mathrm{e}^{-0{,}5x}\gt 0\), donc \(B(x)\) a le signe de \(4x-2\) : \(B(x)\lt 0\) sur \(\left[0;\frac12\right[\), \(B\left(\frac12\right)=0\) et \(B(x)\gt 0\) sur \(\left]\frac12;10\right]\). L'entreprise est bénéficiaire au-delà de 50 unités. <i>(0,75 pt)</i></li>
<li>\(B=uv\) avec \(u(x)=4x-2\), \(u'(x)=4\), \(v(x)=\mathrm{e}^{-0{,}5x}\), \(v'(x)=-0{,}5\,\mathrm{e}^{-0{,}5x}\) :
\[B'(x)=4\,\mathrm{e}^{-0{,}5x}-0{,}5(4x-2)\,\mathrm{e}^{-0{,}5x}=(4-2x+1)\,\mathrm{e}^{-0{,}5x}=(5-2x)\,\mathrm{e}^{-0{,}5x}.\]
<i>(1,25 pt)</i></li>
<li>\(B'(x)\) a le signe de \(5-2x\), positif pour \(x\lt 2{,}5\) et négatif pour \(x\gt 2{,}5\).<br>
\(B(2{,}5)=(10-2)\,\mathrm{e}^{-1{,}25}=8\,\mathrm{e}^{-1{,}25}\) et \(B(10)=38\,\mathrm{e}^{-5}\).
<table class="tv"><tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(2{,}5\)</td><td></td><td>\(10\)</td></tr>
<tr><td>\(B'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(B\)</td><td>\(-2\)</td><td>↗</td><td>\(8\,\mathrm{e}^{-1{,}25}\)</td><td>↘</td><td>\(38\,\mathrm{e}^{-5}\)</td></tr></table>
<i>(1,25 pt)</i></li>
<li>Le bénéfice est maximal pour \(x=2{,}5\), soit <b>250 unités</b>. Il vaut \(8\,\mathrm{e}^{-1{,}25}\approx 8\times 0{,}2865=2{,}292\) milliers d'euros, soit environ <b>2 292 €</b>. <i>(0,75 pt)</i></li>
<li>\(B(1)=2\,\mathrm{e}^{-0{,}5}\) et \(B'(1)=3\,\mathrm{e}^{-0{,}5}\). La tangente a pour équation
\[y=3\,\mathrm{e}^{-0{,}5}(x-1)+2\,\mathrm{e}^{-0{,}5}=\mathrm{e}^{-0{,}5}(3x-3+2)=\mathrm{e}^{-0{,}5}(3x-1).\]
<i>(1 pt)</i></li>
</ol>
<div class="warn">Ne pas oublier le facteur \(-0{,}5\) en dérivant \(\mathrm{e}^{-0{,}5x}\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Probabilités et variable aléatoire : un jeu vidéo", points: 5, chapitres: [10, 11],
      enonce: R`<p>Un jeu vidéo comporte deux niveaux. Un joueur réussit le niveau 1 avec une probabilité de 0,8. S'il a réussi le niveau 1, il réussit le niveau 2 avec une probabilité de 0,6 ; s'il a échoué au niveau 1, il passe quand même au niveau 2 mais ne le réussit qu'avec une probabilité de 0,3.</p>
<p>On note \(N_1\) : « le joueur réussit le niveau 1 » et \(N_2\) : « le joueur réussit le niveau 2 ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Montrer que \(P(N_2)=0{,}54\).</li>
<li>Le joueur a réussi le niveau 2. Quelle est la probabilité qu'il ait réussi le niveau 1 ?</li>
<li>Les événements \(N_1\) et \(N_2\) sont-ils indépendants ?</li>
<li>Chaque niveau réussi rapporte 10 points. On note \(X\) le nombre de points obtenus. Déterminer la loi de \(X\).</li>
<li>Calculer \(E(X)\) et \(V(X)\).</li>
<li>Une mise à jour accorde un bonus de 5 points au joueur qui réussit les deux niveaux. On note \(Y\) le nouveau nombre de points. Calculer \(E(Y)\).</li>
</ol>`,
      correction: R`<ol>
<li>Arbre : \(N_1\) (0,8) puis \(N_2\) (0,6) / \(\overline{N_2}\) (0,4) ; \(\overline{N_1}\) (0,2) puis \(N_2\) (0,3) / \(\overline{N_2}\) (0,7). <i>(0,75 pt)</i></li>
<li>Formule des probabilités totales :
\[P(N_2)=0{,}8\times 0{,}6+0{,}2\times 0{,}3=0{,}48+0{,}06=0{,}54.\]
<i>(0,75 pt)</i></li>
<li>\[P_{N_2}(N_1)=\frac{P(N_1\cap N_2)}{P(N_2)}=\frac{0{,}48}{0{,}54}=\frac{8}{9}.\]
<i>(0,75 pt)</i></li>
<li>\(P(N_1)\times P(N_2)=0{,}8\times 0{,}54=0{,}432\neq 0{,}48=P(N_1\cap N_2)\) : ils ne sont <b>pas indépendants</b> (réussir le niveau 1 augmente les chances de réussir le niveau 2). <i>(0,5 pt)</i></li>
<li>\(P(X=20)=P(N_1\cap N_2)=0{,}48\) ;<br>
\(P(X=10)=P(N_1\cap\overline{N_2})+P(\overline{N_1}\cap N_2)=0{,}8\times 0{,}4+0{,}2\times 0{,}3=0{,}32+0{,}06=0{,}38\) ;<br>
\(P(X=0)=P(\overline{N_1}\cap\overline{N_2})=0{,}2\times 0{,}7=0{,}14\).
<table class="tv"><tr><td>\(k\)</td><td>\(0\)</td><td>\(10\)</td><td>\(20\)</td></tr>
<tr><td>\(P(X=k)\)</td><td>\(0{,}14\)</td><td>\(0{,}38\)</td><td>\(0{,}48\)</td></tr></table>
Vérification : \(0{,}14+0{,}38+0{,}48=1\). <i>(1 pt)</i></li>
<li>\(E(X)=0\times 0{,}14+10\times 0{,}38+20\times 0{,}48=3{,}8+9{,}6=13{,}4\).<br>
\(E(X^2)=100\times 0{,}38+400\times 0{,}48=38+192=230\), donc \(V(X)=230-13{,}4^2=230-179{,}56=50{,}44\) (et \(\sigma(X)\approx 7{,}1\)). <i>(0,75 pt)</i></li>
<li>\(Y\) vaut 25 lorsque les deux niveaux sont réussis, et \(Y=X\) sinon :
\[E(Y)=0\times 0{,}14+10\times 0{,}38+25\times 0{,}48=3{,}8+12=15{,}8.\]
(Le bonus ajoute en moyenne \(5\times 0{,}48=2{,}4\) points.) <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` }
  ]
});


})();
