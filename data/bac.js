(function () {
const R = String.raw;
window.BAC = [

/* =====================================================================
   SUJET 1 — standard
   ===================================================================== */
{ titre: "Sujet type bac n°1 — standard", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 10],
  automatismes: [
    { q: R`Que vaut \(\dfrac{3}{4}-\dfrac{1}{6}\) ?`,
      choix: [R`\(\dfrac{7}{12}\)`, R`\(\dfrac{2}{2}\)`, R`\(\dfrac{1}{12}\)`, R`\(\dfrac{2}{10}\)`], bonne: 0,
      explication: R`On met au même dénominateur 12 : \(\dfrac{9}{12}-\dfrac{2}{12}=\dfrac{7}{12}\). On ne soustrait jamais les dénominateurs entre eux !` },
    { q: R`Un prix augmente de 20 %, puis baisse de 20 %. Globalement, il a :`,
      choix: [R`retrouvé sa valeur initiale`, R`baissé de 4 %`, R`augmenté de 4 %`, R`baissé de 2 %`], bonne: 1,
      explication: R`Les coefficients multiplicateurs se multiplient : \(1{,}2\times 0{,}8=0{,}96=1-0{,}04\), soit une baisse de 4 %.` },
    { q: R`Le développement de \((2x-3)^2\) est :`,
      choix: [R`\(4x^2-9\)`, R`\(4x^2+9\)`, R`\(4x^2-12x+9\)`, R`\(2x^2-12x+9\)`], bonne: 2,
      explication: R`Identité remarquable \((a-b)^2=a^2-2ab+b^2\) avec \(a=2x\), \(b=3\) : \(4x^2-12x+9\).` },
    { q: R`La solution de l'équation \(3x-7=2x+5\) est :`,
      choix: [R`\(x=-2\)`, R`\(x=2\)`, R`\(x=12\)`, R`\(x=\dfrac{12}{5}\)`], bonne: 2,
      explication: R`On regroupe les \(x\) à gauche : \(3x-2x=5+7\), donc \(x=12\).` },
    { q: R`La dérivée de \(f(x)=x^3-5x+2\) est :`,
      choix: [R`\(f'(x)=3x^2-5x\)`, R`\(f'(x)=3x^2-5\)`, R`\(f'(x)=x^2-5\)`, R`\(f'(x)=3x^2-3\)`], bonne: 1,
      explication: R`\((x^3)'=3x^2\), \((-5x)'=-5\) et la dérivée d'une constante est nulle : \(f'(x)=3x^2-5\).` },
    { q: R`\((u_n)\) est arithmétique de premier terme \(u_0=4\) et de raison \(-3\). Alors \(u_{10}=\)`,
      choix: [R`\(-26\)`, R`\(-30\)`, R`\(-23\)`, R`\(34\)`], bonne: 0,
      explication: R`\(u_n=u_0+nr\), donc \(u_{10}=4+10\times(-3)=-26\).` },
    { q: R`Les racines du trinôme \(x^2-5x+6\) sont :`,
      choix: [R`\(-2\) et \(-3\)`, R`\(2\) et \(3\)`, R`\(1\) et \(6\)`, R`\(-1\) et \(6\)`], bonne: 1,
      explication: R`Somme \(=5\) et produit \(=6\) : ce sont 2 et 3. Vérification : \(4-10+6=0\) et \(9-15+6=0\).` },
    { q: R`Sur un graphique, une droite passe par les points \(A(0;2)\) et \(B(3;8)\). Son coefficient directeur est :`,
      choix: [R`\(\dfrac{1}{2}\)`, R`\(6\)`, R`\(2\)`, R`\(3\)`], bonne: 2,
      explication: R`\(m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{8-2}{3-0}=2\).` },
    { q: R`\(A\) et \(B\) sont deux événements indépendants avec \(P(A)=0{,}3\) et \(P(B)=0{,}5\). Alors \(P(A\cap B)=\)`,
      choix: [R`\(0{,}8\)`, R`\(0{,}15\)`, R`\(0{,}2\)`, R`\(0{,}6\)`], bonne: 1,
      explication: R`Indépendance : \(P(A\cap B)=P(A)\times P(B)=0{,}3\times 0{,}5=0{,}15\).` },
    { q: R`\(\dfrac{10^{-3}\times 10^{5}}{10^{-2}}=\)`,
      choix: [R`\(10^{0}\)`, R`\(10^{4}\)`, R`\(10^{-4}\)`, R`\(10^{10}\)`], bonne: 1,
      explication: R`\(10^{-3}\times 10^{5}=10^{2}\), puis \(\dfrac{10^{2}}{10^{-2}}=10^{2-(-2)}=10^{4}\).` },
    { q: R`Après une remise de 25 %, un article coûte 60 €. Son prix initial était :`,
      choix: [R`75 €`, R`80 €`, R`85 €`, R`45 €`], bonne: 1,
      explication: R`Prix initial \(\times 0{,}75=60\), donc prix initial \(=\dfrac{60}{0{,}75}=80\) €. Piège : ajouter 25 % à 60 € donne 75 €, ce qui est faux.` },
    { q: R`L'ensemble des solutions de \(x^2\leqslant 9\) est :`,
      choix: [R`\(]-\infty;3]\)`, R`\([-3;3]\)`, R`\(]-\infty;-3]\cup[3;+\infty[\)`, R`\([0;3]\)`], bonne: 1,
      explication: R`\(x^2-9=(x-3)(x+3)\leqslant 0\) entre les racines (le coefficient de \(x^2\) est positif) : \(S=[-3;3]\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suites et Python (calculatrice autorisée)", points: 5, chapitres: [3, 1],
      enonce: R`<p>Une médiathèque en ligne comptait 1 000 abonnés en 2024. Chaque année, 10 % des abonnés ne renouvellent pas leur abonnement et 300 nouvelles personnes s'abonnent.</p>
<p>On note \(u_n\) le nombre d'abonnés en l'année \(2024+n\). Ainsi \(u_0=1000\) et, pour tout entier naturel \(n\), \(u_{n+1}=0{,}9\,u_n+300\).</p>
<ol>
<li>Calculer \(u_1\) et \(u_2\).</li>
<li>On pose, pour tout \(n\), \(v_n=u_n-3000\). Montrer que \((v_n)\) est une suite géométrique dont on précisera la raison et le premier terme.</li>
<li>En déduire que, pour tout entier naturel \(n\), \(u_n=3000-2000\times 0{,}9^{n}\).</li>
<li>Calculer \(u_{n+1}-u_n\) et en déduire le sens de variation de \((u_n)\).</li>
<li>On considère la fonction Python suivante :
<pre><code>def seuil():
    n = 0
    u = 1000
    while u &lt;= 2500:
        u = ..........
        n = n + 1
    return n</code></pre>
a) Compléter la ligne manquante.<br>
b) Quelle valeur renvoie <code>seuil()</code> ? Interpréter ce résultat dans le contexte.</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=0{,}9\times 1000+300=1200\) et \(u_2=0{,}9\times 1200+300=1380\). <i>(0,5 pt)</i></li>
<li>Pour tout \(n\) :
\[v_{n+1}=u_{n+1}-3000=0{,}9\,u_n+300-3000=0{,}9\,u_n-2700=0{,}9\,(u_n-3000)=0{,}9\,v_n.\]
Donc \((v_n)\) est géométrique de raison \(q=0{,}9\) et de premier terme \(v_0=u_0-3000=-2000\). <i>(1 pt : 0,75 pour le calcul, 0,25 pour \(v_0\))</i></li>
<li>On en déduit \(v_n=v_0\times q^n=-2000\times 0{,}9^n\), puis \(u_n=v_n+3000=3000-2000\times 0{,}9^n\). <i>(0,5 pt)</i></li>
<li>\[u_{n+1}-u_n=-2000\times 0{,}9^{n+1}+2000\times 0{,}9^{n}=2000\times 0{,}9^{n}\,(1-0{,}9)=200\times 0{,}9^{n}.\]
Comme \(0{,}9^n\gt 0\), on a \(u_{n+1}-u_n\gt 0\) pour tout \(n\) : la suite \((u_n)\) est <b>strictement croissante</b>. <i>(1 pt)</i></li>
<li>a) La ligne manquante est <code>u = 0.9*u + 300</code>. <i>(0,5 pt)</i><br>
b) La boucle s'arrête dès que \(u_n\gt 2500\). À la calculatrice : \(u_{13}=3000-2000\times 0{,}9^{13}\approx 2491{,}6\) et \(u_{14}\approx 2542{,}5\). Donc <code>seuil()</code> renvoie <b>14</b> : c'est en \(2024+14=2038\) que la médiathèque dépassera pour la première fois 2 500 abonnés. <i>(1 pt : 0,5 pour 14, 0,5 pour l'interprétation)</i></li>
</ol>
<div class="astuce">Pour une suite du type \(u_{n+1}=a\,u_n+b\), l'énoncé te donne presque toujours la suite auxiliaire : il suffit de calculer \(v_{n+1}\) et de factoriser par \(a\).</div>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 2 — Second degré et dérivation", points: 5, chapitres: [2, 4, 5],
      enonce: R`<p><b>Partie A.</b> On considère le trinôme \(P(x)=-3x^2+12x+15\).</p>
<ol>
<li>Déterminer les racines de \(P\).</li>
<li>Dresser le tableau de signes de \(P(x)\) sur \(\mathbb{R}\).</li>
</ol>
<p><b>Partie B.</b> Une entreprise fabrique entre 0 et 800 objets par jour. Le bénéfice journalier, en milliers d'euros, pour \(x\) centaines d'objets est modélisé par
\[B(x)=-x^3+6x^2+15x-10,\qquad x\in[0;8].\]</p>
<ol start="3">
<li>Calculer \(B'(x)\) et vérifier que \(B'(x)=P(x)\).</li>
<li>Dresser le tableau de variations de \(B\) sur \([0;8]\).</li>
<li>Combien d'objets faut-il fabriquer pour obtenir un bénéfice maximal ? Quel est ce bénéfice ?</li>
<li>Déterminer une équation de la tangente \(T\) à la courbe de \(B\) au point d'abscisse 1.</li>
<li>Le bénéfice est-il positif pour une production de 800 objets ? Commenter.</li>
</ol>`,
      correction: R`<p><b>Partie A</b></p>
<ol>
<li>\(\Delta=12^2-4\times(-3)\times 15=144+180=324=18^2\gt 0\). Deux racines :
\[x_1=\frac{-12-18}{-6}=5,\qquad x_2=\frac{-12+18}{-6}=-1.\]
On peut vérifier : \(P(x)=-3(x-5)(x+1)\). <i>(1 pt)</i></li>
<li>Le coefficient \(a=-3\) est négatif : \(P(x)\) est du signe de \(a\) (négatif) à l'extérieur des racines et positif entre elles.
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(5\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(P(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr></table>
<i>(0,5 pt)</i></li>
</ol>
<p><b>Partie B</b></p>
<ol start="3">
<li>\(B'(x)=-3x^2+12x+15=P(x)\). <i>(0,5 pt)</i></li>
<li>Sur \([0;8]\), d'après la partie A, \(B'(x)\gt 0\) sur \([0;5[\), \(B'(5)=0\) et \(B'(x)\lt 0\) sur \(]5;8]\).
On calcule \(B(0)=-10\), \(B(5)=-125+150+75-10=90\) et \(B(8)=-512+384+120-10=-18\).
<table class="tv"><tr><td>\(x\)</td><td>0</td><td></td><td>5</td><td></td><td>8</td></tr>
<tr><td>\(B'(x)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(B\)</td><td>\(-10\)</td><td>↗</td><td>\(90\)</td><td>↘</td><td>\(-18\)</td></tr></table>
<i>(1 pt : 0,5 signe de \(B'\), 0,5 valeurs)</i></li>
<li>Le maximum de \(B\) est atteint pour \(x=5\), soit <b>500 objets</b>, et vaut \(B(5)=90\), soit un bénéfice de <b>90 000 €</b>. <i>(0,5 pt)</i></li>
<li>\(B(1)=-1+6+15-10=10\) et \(B'(1)=-3+12+15=24\). Donc
\[T : y=B'(1)(x-1)+B(1)=24(x-1)+10,\quad\text{soit } y=24x-14.\]
<i>(1 pt)</i></li>
<li>\(B(8)=-18\lt 0\) : pour 800 objets, l'entreprise perd 18 000 €. Produire trop fait chuter le bénéfice (coûts trop élevés) : il vaut mieux rester autour de 500 objets. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 5 points.</b></p>` },

    { titre: "Exercice 3 — Probabilités conditionnelles", points: 4, chapitres: [10],
      enonce: R`<p>Dans un lycée, 30 % des élèves viennent en bus. Parmi les élèves qui viennent en bus, 20 % arrivent en retard un jour donné ; parmi les autres élèves, 5 % arrivent en retard.</p>
<p>On choisit un élève au hasard. On note \(B\) : « l'élève vient en bus » et \(R\) : « l'élève est en retard ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Calculer \(P(B\cap R)\).</li>
<li>Montrer que \(P(R)=0{,}095\).</li>
<li>Un élève est en retard. Quelle est la probabilité qu'il soit venu en bus ? Donner la valeur exacte puis une valeur arrondie au centième.</li>
<li>Les événements \(B\) et \(R\) sont-ils indépendants ? Justifier.</li>
</ol>`,
      correction: R`<ol>
<li>Arbre : une première branche \(B\) (0,3) et \(\overline{B}\) (0,7). Après \(B\) : \(R\) (0,2) et \(\overline{R}\) (0,8). Après \(\overline{B}\) : \(R\) (0,05) et \(\overline{R}\) (0,95). <i>(1 pt)</i></li>
<li>\(P(B\cap R)=P(B)\times P_B(R)=0{,}3\times 0{,}2=0{,}06\). <i>(0,5 pt)</i></li>
<li>\(B\) et \(\overline{B}\) forment une partition de l'univers ; d'après la formule des probabilités totales :
\[P(R)=P(B\cap R)+P(\overline{B}\cap R)=0{,}06+0{,}7\times 0{,}05=0{,}06+0{,}035=0{,}095.\]
<i>(1 pt)</i></li>
<li>\[P_R(B)=\frac{P(B\cap R)}{P(R)}=\frac{0{,}06}{0{,}095}=\frac{60}{95}=\frac{12}{19}\approx 0{,}63.\]
Presque deux élèves en retard sur trois sont venus en bus. <i>(1 pt)</i></li>
<li>\(P(B)\times P(R)=0{,}3\times 0{,}095=0{,}0285\ne 0{,}06=P(B\cap R)\) : les événements \(B\) et \(R\) ne sont <b>pas indépendants</b> (on le voyait déjà : \(P_B(R)=0{,}2\ne P(R)\)). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
},

/* =====================================================================
   SUJET 2 — intermédiaire
   ===================================================================== */
{ titre: "Sujet type bac n°2 — intermédiaire", duree: "2 h", calculatrice: false,
  chapitres: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`\(\mathrm{e}^{3}\times\mathrm{e}^{-5}=\)`,
      choix: [R`\(\mathrm{e}^{-15}\)`, R`\(\mathrm{e}^{-2}\)`, R`\(\mathrm{e}^{8}\)`, R`\(\mathrm{e}^{2}\)`], bonne: 1,
      explication: R`\(\mathrm{e}^a\times\mathrm{e}^b=\mathrm{e}^{a+b}\), donc \(\mathrm{e}^{3+(-5)}=\mathrm{e}^{-2}\).` },
    { q: R`La dérivée de \(f(x)=\mathrm{e}^{2x}\) est :`,
      choix: [R`\(\mathrm{e}^{2x}\)`, R`\(2x\,\mathrm{e}^{2x}\)`, R`\(2\,\mathrm{e}^{2x}\)`, R`\(\mathrm{e}^{2}\)`], bonne: 2,
      explication: R`\(\left(\mathrm{e}^{ax+b}\right)'=a\,\mathrm{e}^{ax+b}\), ici \(a=2\).` },
    { q: R`\(\cos\left(\dfrac{\pi}{3}\right)=\)`,
      choix: [R`\(\dfrac{\sqrt{3}}{2}\)`, R`\(\dfrac{1}{2}\)`, R`\(\dfrac{\sqrt{2}}{2}\)`, R`\(-\dfrac{1}{2}\)`], bonne: 1,
      explication: R`Valeur remarquable : \(\cos\frac{\pi}{3}=\frac12\) et \(\sin\frac{\pi}{3}=\frac{\sqrt3}{2}\).` },
    { q: R`\(\cos\left(\dfrac{3\pi}{4}\right)=\)`,
      choix: [R`\(\dfrac{\sqrt{2}}{2}\)`, R`\(-\dfrac{\sqrt{3}}{2}\)`, R`\(-\dfrac{\sqrt{2}}{2}\)`, R`\(-\dfrac{1}{2}\)`], bonne: 2,
      explication: R`\(\frac{3\pi}{4}=\pi-\frac{\pi}{4}\) et \(\cos(\pi-x)=-\cos x\), donc \(\cos\frac{3\pi}{4}=-\frac{\sqrt2}{2}\).` },
    { q: R`Dans un repère orthonormé, \(\vec u(2;-3)\) et \(\vec v(6;4)\). Alors :`,
      choix: [R`\(\vec u\cdot\vec v=24\)`, R`\(\vec u\) et \(\vec v\) sont colinéaires`, R`\(\vec u\) et \(\vec v\) sont orthogonaux`, R`\(\vec u\cdot\vec v=-12\)`], bonne: 2,
      explication: R`\(\vec u\cdot\vec v=2\times 6+(-3)\times 4=12-12=0\) : les vecteurs sont orthogonaux.` },
    { q: R`Dans un repère orthonormé, la norme de \(\vec u(3;-4)\) vaut :`,
      choix: [R`\(-1\)`, R`\(7\)`, R`\(25\)`, R`\(5\)`], bonne: 3,
      explication: R`\(\|\vec u\|=\sqrt{3^2+(-4)^2}=\sqrt{25}=5\).` },
    { q: R`Une équation de la droite passant par l'origine et de vecteur normal \(\vec n(2;-1)\) est :`,
      choix: [R`\(2x-y=0\)`, R`\(x+2y=0\)`, R`\(-x+2y=0\)`, R`\(2x-y=1\)`], bonne: 0,
      explication: R`Un vecteur normal \(\vec n(a;b)\) donne une équation \(ax+by+c=0\) : \(2x-y+c=0\), et \(O\) appartient à la droite donc \(c=0\).` },
    { q: R`Une variable aléatoire \(X\) vérifie \(P(X=0)=0{,}2\), \(P(X=1)=0{,}5\), \(P(X=2)=0{,}3\). Alors \(E(X)=\)`,
      choix: [R`\(1\)`, R`\(1{,}1\)`, R`\(0{,}8\)`, R`\(1{,}5\)`], bonne: 1,
      explication: R`\(E(X)=0\times 0{,}2+1\times 0{,}5+2\times 0{,}3=0{,}5+0{,}6=1{,}1\).` },
    { q: R`\(\dfrac{2}{3}\div\dfrac{4}{9}=\)`,
      choix: [R`\(\dfrac{8}{27}\)`, R`\(\dfrac{2}{3}\)`, R`\(\dfrac{3}{2}\)`, R`\(\dfrac{6}{12}\)`], bonne: 2,
      explication: R`Diviser, c'est multiplier par l'inverse : \(\frac23\times\frac94=\frac{18}{12}=\frac32\).` },
    { q: R`Un prix passe de 50 € à 65 €. Le taux d'évolution est :`,
      choix: [R`\(+15\) %`, R`\(+30\) %`, R`\(+23\) %`, R`\(+1{,}3\) %`], bonne: 1,
      explication: R`\(\dfrac{65-50}{50}=\dfrac{15}{50}=0{,}3\), soit \(+30\) %.` },
    { q: R`\((u_n)\) est géométrique de premier terme \(u_0=3\) et de raison \(2\). Alors \(u_4=\)`,
      choix: [R`\(24\)`, R`\(11\)`, R`\(48\)`, R`\(96\)`], bonne: 2,
      explication: R`\(u_n=u_0\times q^n\), donc \(u_4=3\times 2^4=3\times 16=48\).` },
    { q: R`Une factorisation de \(x^2-16\) est :`,
      choix: [R`\((x-4)^2\)`, R`\((x-4)(x+4)\)`, R`\((x-8)(x+8)\)`, R`\(x(x-16)\)`], bonne: 1,
      explication: R`Identité remarquable \(a^2-b^2=(a-b)(a+b)\) avec \(b=4\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Fonction exponentielle", points: 4, chapitres: [6, 4, 5],
      enonce: R`<p>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=(2x-1)\,\mathrm{e}^{x}\), et \(\mathcal{C}\) sa courbe dans un repère.</p>
<ol>
<li>Calculer \(f(0)\). Résoudre l'équation \(f(x)=0\), puis étudier le signe de \(f(x)\) sur \(\mathbb{R}\).</li>
<li>Montrer que pour tout réel \(x\), \(f'(x)=(2x+1)\,\mathrm{e}^{x}\).</li>
<li>Dresser le tableau de variations de \(f\) (les limites ne sont pas demandées). Préciser la valeur exacte du minimum.</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse 0.</li>
</ol>`,
      correction: R`<ol>
<li>\(f(0)=(0-1)\times\mathrm{e}^0=-1\).<br>
Comme \(\mathrm{e}^x\gt 0\) pour tout \(x\), \(f(x)=0\iff 2x-1=0\iff x=\frac12\). De plus \(f(x)\) est du signe de \(2x-1\) : \(f(x)\lt 0\) sur \(\left]-\infty;\frac12\right[\) et \(f(x)\gt 0\) sur \(\left]\frac12;+\infty\right[\). <i>(1 pt)</i></li>
<li>\(f=uv\) avec \(u(x)=2x-1\), \(u'(x)=2\), \(v(x)=\mathrm{e}^x\), \(v'(x)=\mathrm{e}^x\) :
\[f'(x)=2\,\mathrm{e}^x+(2x-1)\,\mathrm{e}^x=(2+2x-1)\,\mathrm{e}^x=(2x+1)\,\mathrm{e}^x.\]
<i>(1 pt)</i></li>
<li>\(\mathrm{e}^x\gt 0\), donc \(f'(x)\) est du signe de \(2x+1\), qui s'annule en \(-\frac12\).
\[f\left(-\tfrac12\right)=(-1-1)\,\mathrm{e}^{-1/2}=-2\,\mathrm{e}^{-1/2}.\]
<table class="tv"><tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-\frac12\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-2\,\mathrm{e}^{-1/2}\)</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \(\mathbb{R}\) vaut \(-2\,\mathrm{e}^{-1/2}\) (environ \(-1{,}21\)), atteint en \(x=-\frac12\). <i>(1 pt)</i></li>
<li>\(f(0)=-1\) et \(f'(0)=(0+1)\,\mathrm{e}^0=1\), donc \(T : y=f'(0)(x-0)+f(0)\), soit \(y=x-1\). <i>(1 pt)</i></li>
</ol>
<div class="warn">Ne pas oublier que \(\mathrm{e}^x\) est <b>toujours strictement positif</b> : c'est ce qui permet d'étudier seulement le signe du facteur affine.</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Géométrie repérée et produit scalaire", points: 4, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère les points \(A(-1;2)\), \(B(3;4)\) et \(C(1;-2)\).</p>
<ol>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\), puis les longueurs \(AB\) et \(AC\). Quelle est la nature du triangle \(ABC\) ?</li>
<li>On note \(\mathcal{E}\) l'ensemble des points \(M(x;y)\) tels que \(\overrightarrow{MB}\cdot\overrightarrow{MC}=0\).<br>
a) Montrer que \(M\in\mathcal{E}\iff x^2+y^2-4x-2y-5=0\).<br>
b) En déduire que \(\mathcal{E}\) est un cercle dont on donnera le centre \(\Omega\) et le rayon. Vérifier que \(A\in\mathcal{E}\).</li>
<li>a) Montrer qu'une équation de la droite \((BC)\) est \(3x-y-5=0\).<br>
b) Déterminer une équation cartésienne de la droite \(\Delta\) passant par \(A\) et perpendiculaire à \((BC)\).</li>
<li>Déterminer les coordonnées du point \(H\), intersection de \(\Delta\) et \((BC)\). Que remarque-t-on ?</li>
</ol>`,
      correction: R`<ol>
<li>\(\overrightarrow{AB}(4;2)\) et \(\overrightarrow{AC}(2;-4)\), donc \(\overrightarrow{AB}\cdot\overrightarrow{AC}=4\times 2+2\times(-4)=0\).<br>
\(AB=\sqrt{16+4}=\sqrt{20}=2\sqrt5\) et \(AC=\sqrt{4+16}=2\sqrt5\).<br>
Le triangle \(ABC\) est donc <b>rectangle isocèle en \(A\)</b>. <i>(1 pt)</i></li>
<li>a) \(\overrightarrow{MB}(3-x;4-y)\) et \(\overrightarrow{MC}(1-x;-2-y)\), donc
\[\overrightarrow{MB}\cdot\overrightarrow{MC}=(3-x)(1-x)+(4-y)(-2-y)=x^2-4x+3+y^2-2y-8=x^2+y^2-4x-2y-5.\]
<i>(0,75 pt)</i><br>
b) On complète les carrés : \(x^2-4x=(x-2)^2-4\) et \(y^2-2y=(y-1)^2-1\). L'équation devient
\[(x-2)^2+(y-1)^2=10.\]
\(\mathcal{E}\) est le cercle de centre \(\Omega(2;1)\) (milieu de \([BC]\)) et de rayon \(\sqrt{10}\).<br>
Pour \(A\) : \((-1-2)^2+(2-1)^2=9+1=10\), donc \(A\in\mathcal{E}\) (logique, puisque l'angle en \(A\) est droit). <i>(0,75 pt)</i></li>
<li>a) \(B\) : \(3\times 3-4-5=0\) ✓ et \(C\) : \(3\times 1-(-2)-5=0\) ✓. Les deux points vérifient l'équation, c'est donc bien une équation de \((BC)\). <i>(0,5 pt)</i><br>
b) \(\overrightarrow{BC}(-2;-6)\), ou plus simplement \(\vec n(1;3)\), est un vecteur normal à \(\Delta\). Donc \(\Delta : x+3y+c=0\). Comme \(A\in\Delta\) : \(-1+6+c=0\), d'où \(c=-5\) et \(\Delta : x+3y-5=0\). <i>(0,5 pt)</i></li>
<li>On résout \(\begin{cases}x+3y=5\\ 3x-y=5\end{cases}\). La deuxième équation donne \(y=3x-5\) ; en remplaçant : \(x+9x-15=5\), donc \(x=2\) puis \(y=1\).<br>
\(H(2;1)\) : le pied de la hauteur issue de \(A\) est le centre \(\Omega\) du cercle, c'est-à-dire le milieu de \([BC]\). C'est normal : dans un triangle isocèle en \(A\), la hauteur issue de \(A\) est aussi la médiane. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Trigonométrie", points: 2, chapitres: [7],
      enonce: R`<ol>
<li>Déterminer la valeur exacte de \(\cos\left(\dfrac{17\pi}{6}\right)\).</li>
<li>Résoudre dans \(]-\pi;\pi]\) l'équation \(\cos x=-\dfrac12\).</li>
<li>Simplifier, pour tout réel \(x\) : \(A(x)=\sin(\pi-x)+\cos\left(\dfrac{\pi}{2}+x\right)+\cos(-x)-\cos(\pi+x)\).</li>
</ol>`,
      correction: R`<ol>
<li>\(\dfrac{17\pi}{6}=\dfrac{12\pi}{6}+\dfrac{5\pi}{6}=2\pi+\dfrac{5\pi}{6}\). Le cosinus est \(2\pi\)-périodique, donc \(\cos\dfrac{17\pi}{6}=\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}\). <i>(0,5 pt)</i></li>
<li>\(\cos\dfrac{2\pi}{3}=-\dfrac12\). Sur le cercle trigonométrique, deux points ont pour abscisse \(-\frac12\) : ceux associés à \(\frac{2\pi}{3}\) et \(-\frac{2\pi}{3}\). Donc \(S=\left\{-\dfrac{2\pi}{3};\dfrac{2\pi}{3}\right\}\). <i>(0,75 pt)</i></li>
<li>\(\sin(\pi-x)=\sin x\), \(\cos\left(\frac{\pi}{2}+x\right)=-\sin x\), \(\cos(-x)=\cos x\) et \(\cos(\pi+x)=-\cos x\). Donc
\[A(x)=\sin x-\sin x+\cos x+\cos x=2\cos x.\]
<i>(0,75 pt)</i></li>
</ol>
<div class="astuce">En cas de doute sur une formule d'angles associés, place les points sur le cercle trigonométrique avec un angle « test » comme \(\frac{\pi}{6}\).</div>
<p><b>Total : 2 points.</b></p>` },

    { titre: "Exercice 4 — Probabilités et variable aléatoire", points: 4, chapitres: [10, 11],
      enonce: R`<p>Un jeu de fête foraine coûte 3 € la partie. Le joueur lance un dé équilibré à six faces :</p>
<ul>
<li>s'il obtient 6, il tire une boule dans l'urne \(U_1\) qui contient 3 boules rouges et 1 noire ;</li>
<li>sinon, il tire une boule dans l'urne \(U_2\) qui contient 1 boule rouge et 3 noires.</li>
</ul>
<p>Si la boule est rouge et provient de \(U_1\), le joueur reçoit 20 € ; si elle est rouge et provient de \(U_2\), il reçoit 5 € ; si elle est noire, il ne reçoit rien.</p>
<p>On note \(S\) : « obtenir 6 » et \(R\) : « tirer une boule rouge ».</p>
<ol>
<li>Représenter la situation par un arbre pondéré.</li>
<li>Montrer que \(P(R)=\dfrac13\).</li>
<li>Le joueur a tiré une boule rouge. Quelle est la probabilité qu'il ait obtenu 6 ?</li>
<li>On note \(X\) le gain algébrique du joueur (somme reçue moins la mise de 3 €). Donner la loi de probabilité de \(X\).</li>
<li>Calculer \(E(X)\) et \(V(X)\). Le jeu est-il favorable au joueur ?</li>
<li>Quelle devrait être la mise pour que le jeu soit équitable ?</li>
</ol>`,
      correction: R`<ol>
<li>Arbre : \(S\) (\(\frac16\)) puis \(R\) (\(\frac34\)) / \(\overline{R}\) (\(\frac14\)) ; \(\overline{S}\) (\(\frac56\)) puis \(R\) (\(\frac14\)) / \(\overline{R}\) (\(\frac34\)). <i>(0,5 pt)</i></li>
<li>Formule des probabilités totales (\(S\), \(\overline{S}\) partition) :
\[P(R)=\frac16\times\frac34+\frac56\times\frac14=\frac{3}{24}+\frac{5}{24}=\frac{8}{24}=\frac13.\]
<i>(0,75 pt)</i></li>
<li>\[P_R(S)=\frac{P(S\cap R)}{P(R)}=\frac{3/24}{1/3}=\frac{3}{24}\times 3=\frac{9}{24}=\frac38.\]
<i>(0,5 pt)</i></li>
<li>\(X\) prend les valeurs \(20-3=17\), \(5-3=2\) et \(0-3=-3\).
\(P(X=17)=P(S\cap R)=\frac{3}{24}=\frac18\), \(P(X=2)=P(\overline{S}\cap R)=\frac{5}{24}\), \(P(X=-3)=P(\overline{R})=1-\frac13=\frac{16}{24}=\frac23\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(-3\)</td><td>\(2\)</td><td>\(17\)</td></tr>
<tr><td>\(P(X=x_i)\)</td><td>\(\frac{16}{24}\)</td><td>\(\frac{5}{24}\)</td><td>\(\frac{3}{24}\)</td></tr></table>
Vérification : \(\frac{16+5+3}{24}=1\). <i>(1 pt)</i></li>
<li>\[E(X)=\frac{-3\times 16+2\times 5+17\times 3}{24}=\frac{-48+10+51}{24}=\frac{13}{24}\approx 0{,}54.\]
\(E(X)\gt 0\) : en moyenne le joueur gagne environ 0,54 € par partie, le jeu lui est <b>favorable</b>.<br>
\(E(X^2)=\dfrac{9\times 16+4\times 5+289\times 3}{24}=\dfrac{144+20+867}{24}=\dfrac{1031}{24}\), donc
\[V(X)=E(X^2)-E(X)^2=\frac{1031}{24}-\frac{169}{576}=\frac{24744-169}{576}=\frac{24575}{576}\approx 42{,}66.\]
<i>(0,75 pt)</i></li>
<li>Notons \(m\) la mise. L'espérance de la somme reçue est \(20\times\frac{3}{24}+5\times\frac{5}{24}=\frac{60+25}{24}=\frac{85}{24}\). Le jeu est équitable si l'espérance du gain est nulle, c'est-à-dire si \(m=\dfrac{85}{24}\approx 3{,}54\) €. <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` }
  ]
},

/* =====================================================================
   SUJET 3 — approfondi
   ===================================================================== */
{ titre: "Sujet type bac n°3 — approfondi", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 8, 10, 11],
  automatismes: [
    { q: R`Le coefficient multiplicateur associé à une baisse de 15 % est :`,
      choix: [R`\(0{,}15\)`, R`\(1{,}15\)`, R`\(0{,}85\)`, R`\(-0{,}15\)`], bonne: 2,
      explication: R`Baisser de 15 %, c'est multiplier par \(1-\frac{15}{100}=0{,}85\).` },
    { q: R`\(\sqrt{50}=\)`,
      choix: [R`\(25\)`, R`\(5\sqrt2\)`, R`\(2\sqrt5\)`, R`\(10\sqrt5\)`], bonne: 1,
      explication: R`\(\sqrt{50}=\sqrt{25\times 2}=\sqrt{25}\times\sqrt2=5\sqrt2\).` },
    { q: R`La contraposée de « Si \(n\) est pair, alors \(n^2\) est pair » est :`,
      choix: [R`« Si \(n^2\) est pair, alors \(n\) est pair »`, R`« Si \(n\) est impair, alors \(n^2\) est impair »`, R`« Si \(n^2\) est impair, alors \(n\) est impair »`, R`« \(n\) est pair et \(n^2\) est impair »`], bonne: 2,
      explication: R`La contraposée de « \(P\Rightarrow Q\) » est « non \(Q\Rightarrow\) non \(P\) ». Le premier choix est la réciproque, le deuxième n'est ni l'une ni l'autre.` },
    { q: R`La dérivée de \(f(x)=(2x+1)^2\) est :`,
      choix: [R`\(2(2x+1)\)`, R`\(8x+4\)`, R`\(4x^2+1\)`, R`\(4x+1\)`], bonne: 1,
      explication: R`\(\big(g(ax+b)\big)'=a\,g'(ax+b)\) avec \(g(X)=X^2\) : \(f'(x)=2\times 2(2x+1)=8x+4\). On peut aussi développer : \(f(x)=4x^2+4x+1\).` },
    { q: R`Que contient la liste <code>L = [k**2 for k in range(4)]</code> ?`,
      choix: [R`<code>[1, 4, 9, 16]</code>`, R`<code>[0, 1, 4, 9]</code>`, R`<code>[0, 2, 4, 6]</code>`, R`<code>[0, 1, 4, 9, 16]</code>`], bonne: 1,
      explication: R`<code>range(4)</code> donne 0, 1, 2, 3 (le 4 est exclu) ; on met leurs carrés : 0, 1, 4, 9.` },
    { q: R`\(f\) est dérivable, \(f(2)=3\) et \(f'(2)=-1\). La tangente à la courbe de \(f\) au point d'abscisse 2 a pour équation :`,
      choix: [R`\(y=-x+5\)`, R`\(y=3x-1\)`, R`\(y=-x+3\)`, R`\(y=-x-1\)`], bonne: 0,
      explication: R`\(y=f'(2)(x-2)+f(2)=-(x-2)+3=-x+5\).` },
    { q: R`\(1+2+3+\dots+100=\)`,
      choix: [R`\(5000\)`, R`\(10\,100\)`, R`\(5050\)`, R`\(4950\)`], bonne: 2,
      explication: R`\(1+2+\dots+n=\dfrac{n(n+1)}{2}\), donc \(\dfrac{100\times 101}{2}=5050\).` },
    { q: R`La solution de l'équation \(\mathrm{e}^{2x-4}=1\) est :`,
      choix: [R`\(x=0\)`, R`\(x=2\)`, R`\(x=\dfrac52\)`, R`\(x=4\)`], bonne: 1,
      explication: R`\(\mathrm{e}^{a}=1=\mathrm{e}^0\iff a=0\) : \(2x-4=0\), donc \(x=2\).` },
    { q: R`\(\|\vec u\|=3\), \(\|\vec v\|=4\) et l'angle \((\vec u,\vec v)\) mesure \(\dfrac{\pi}{3}\). Alors \(\vec u\cdot\vec v=\)`,
      choix: [R`\(12\)`, R`\(6\sqrt3\)`, R`\(6\)`, R`\(7\)`], bonne: 2,
      explication: R`\(\vec u\cdot\vec v=\|\vec u\|\times\|\vec v\|\times\cos\frac{\pi}{3}=3\times 4\times\frac12=6\).` },
    { q: R`\(P(A)=0{,}4\) et \(P_A(B)=0{,}5\). Alors \(P(A\cap B)=\)`,
      choix: [R`\(0{,}9\)`, R`\(0{,}8\)`, R`\(0{,}2\)`, R`\(0{,}1\)`], bonne: 2,
      explication: R`\(P(A\cap B)=P(A)\times P_A(B)=0{,}4\times 0{,}5=0{,}2\).` },
    { q: R`L'ensemble des solutions de \(-2x^2+8\gt 0\) est :`,
      choix: [R`\(]-2;2[\)`, R`\(]-\infty;-2[\cup]2;+\infty[\)`, R`\(]-4;4[\)`, R`\(]2;+\infty[\)`], bonne: 0,
      explication: R`\(-2x^2+8=-2(x-2)(x+2)\), racines \(\pm 2\) et \(a=-2\lt 0\) : le trinôme est positif entre les racines.` },
    { q: R`\(1+2+2^2+\dots+2^{9}=\)`,
      choix: [R`\(2^{10}\)`, R`\(1023\)`, R`\(511\)`, R`\(2^{9}-1\)`], bonne: 1,
      explication: R`\(1+q+\dots+q^n=\dfrac{q^{n+1}-1}{q-1}\) : \(\dfrac{2^{10}-1}{2-1}=1024-1=1023\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Suite, suite auxiliaire et listes Python", points: 4, chapitres: [3, 1],
      enonce: R`<p>On considère la suite \((u_n)\) définie par \(u_0=2\) et, pour tout entier naturel \(n\), \(u_{n+1}=\dfrac{2u_n}{2+u_n}\). On admet que \(u_n\gt 0\) pour tout \(n\).</p>
<ol>
<li>Calculer \(u_1\) et \(u_2\).</li>
<li>On considère la fonction Python ci-dessous.
<pre><code>def termes(N):
    L = [2]
    for k in range(N):
        u = L[-1]
        L.append(..........)
    return L</code></pre>
a) Compléter la ligne manquante pour que <code>termes(N)</code> renvoie la liste \([u_0, u_1, \dots, u_N]\).<br>
b) Que renvoie <code>termes(4)</code> ? (valeurs exactes sous forme de fractions acceptées)</li>
<li>On pose \(v_n=\dfrac{1}{u_n}\). Montrer que \((v_n)\) est arithmétique ; préciser sa raison et son premier terme.</li>
<li>En déduire l'expression de \(v_n\), puis de \(u_n\), en fonction de \(n\).</li>
<li>Étudier le sens de variation de \((u_n)\).</li>
<li>Déterminer le plus petit entier \(n\) tel que \(u_n\lt 0{,}01\).</li>
</ol>`,
      correction: R`<ol>
<li>\(u_1=\dfrac{2\times 2}{2+2}=1\) et \(u_2=\dfrac{2\times 1}{2+1}=\dfrac23\). <i>(0,5 pt)</i></li>
<li>a) <code>L.append(2*u/(2+u))</code> : <code>L[-1]</code> est le dernier terme calculé, on ajoute le suivant en fin de liste. <i>(0,5 pt)</i><br>
b) La boucle tourne 4 fois : la liste contient \(u_0\) à \(u_4\), soit <code>[2, 1.0, 0.6666666666666666, 0.5, 0.4]</code>, c'est-à-dire \(\left[2;1;\frac23;\frac12;\frac25\right]\). <i>(0,5 pt)</i></li>
<li>Pour tout \(n\) (avec \(u_n\gt 0\)) :
\[v_{n+1}=\frac{1}{u_{n+1}}=\frac{2+u_n}{2u_n}=\frac{2}{2u_n}+\frac{u_n}{2u_n}=\frac{1}{u_n}+\frac12=v_n+\frac12.\]
\((v_n)\) est arithmétique de raison \(r=\frac12\) et de premier terme \(v_0=\frac{1}{u_0}=\frac12\). <i>(1 pt)</i></li>
<li>\(v_n=v_0+nr=\dfrac12+\dfrac n2=\dfrac{n+1}{2}\), donc \(u_n=\dfrac{1}{v_n}=\dfrac{2}{n+1}\). On retrouve bien \(u_4=\frac25\). <i>(0,5 pt)</i></li>
<li>\(u_{n+1}-u_n=\dfrac{2}{n+2}-\dfrac{2}{n+1}=\dfrac{2(n+1)-2(n+2)}{(n+1)(n+2)}=\dfrac{-2}{(n+1)(n+2)}\lt 0\). La suite \((u_n)\) est strictement décroissante. <i>(0,5 pt)</i></li>
<li>\(u_n\lt 0{,}01\iff \dfrac{2}{n+1}\lt\dfrac{1}{100}\iff n+1\gt 200\) (les deux membres sont positifs) \(\iff n\gt 199\). Le plus petit entier convenable est \(n=200\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Exponentielle : concentration d'un médicament (calculatrice autorisée)", points: 4, chapitres: [6, 4, 5],
      enonce: R`<p>La concentration d'un médicament dans le sang (en mg/L), \(t\) heures après une injection, est modélisée par
\[C(t)=4t\,\mathrm{e}^{-0{,}5t},\qquad t\in[0;10].\]</p>
<ol>
<li>Montrer que \(C'(t)=(4-2t)\,\mathrm{e}^{-0{,}5t}\).</li>
<li>Dresser le tableau de variations de \(C\) sur \([0;10]\). Au bout de combien de temps la concentration est-elle maximale ? Donner cette concentration maximale (valeur exacte et arrondi au centième).</li>
<li>a) Déterminer une équation de la tangente \(T\) à la courbe de \(C\) au point d'abscisse 0.<br>
b) Démontrer que pour tout \(t\in[0;10]\), \(C(t)\leqslant 4t\). Interpréter graphiquement.</li>
<li>Calculer le taux de variation moyen de \(C\) entre \(t=2\) et \(t=10\) (arrondi au centième) et l'interpréter.</li>
</ol>`,
      correction: R`<ol>
<li>\(C=uv\) avec \(u(t)=4t\), \(u'(t)=4\), \(v(t)=\mathrm{e}^{-0{,}5t}\), \(v'(t)=-0{,}5\,\mathrm{e}^{-0{,}5t}\) :
\[C'(t)=4\,\mathrm{e}^{-0{,}5t}+4t\times(-0{,}5)\,\mathrm{e}^{-0{,}5t}=(4-2t)\,\mathrm{e}^{-0{,}5t}.\]
<i>(1 pt)</i></li>
<li>\(\mathrm{e}^{-0{,}5t}\gt 0\), donc \(C'(t)\) a le signe de \(4-2t\) : positif sur \([0;2[\), nul en 2, négatif sur \(]2;10]\).
\(C(0)=0\), \(C(2)=8\,\mathrm{e}^{-1}=\dfrac8{\mathrm{e}}\approx 2{,}94\), \(C(10)=40\,\mathrm{e}^{-5}\approx 0{,}27\).
<table class="tv"><tr><td>\(t\)</td><td>0</td><td></td><td>2</td><td></td><td>10</td></tr>
<tr><td>\(C'(t)\)</td><td></td><td>\(+\)</td><td>0</td><td>\(-\)</td><td></td></tr>
<tr><td>\(C\)</td><td>0</td><td>↗</td><td>\(\frac{8}{\mathrm{e}}\)</td><td>↘</td><td>\(40\,\mathrm{e}^{-5}\)</td></tr></table>
La concentration est maximale <b>2 heures</b> après l'injection et vaut \(\dfrac8{\mathrm{e}}\approx 2{,}94\) mg/L. <i>(1 pt)</i></li>
<li>a) \(C(0)=0\) et \(C'(0)=4\times\mathrm{e}^0=4\) : \(T : y=4t\). <i>(0,5 pt)</i><br>
b) Pour \(t\in[0;10]\), \(-0{,}5t\leqslant 0\), donc \(\mathrm{e}^{-0{,}5t}\leqslant\mathrm{e}^0=1\) (la fonction exponentielle est croissante). En multipliant par \(4t\geqslant 0\) : \(4t\,\mathrm{e}^{-0{,}5t}\leqslant 4t\), soit \(C(t)\leqslant 4t\).<br>
Graphiquement : la courbe de \(C\) est située <b>en dessous de sa tangente</b> \(T\) en 0 sur \([0;10]\). <i>(0,5 pt)</i></li>
<li>\[\frac{C(10)-C(2)}{10-2}=\frac{40\,\mathrm{e}^{-5}-8\,\mathrm{e}^{-1}}{8}\approx\frac{0{,}2695-2{,}9430}{8}\approx -0{,}33.\]
Entre la 2<sup>e</sup> et la 10<sup>e</sup> heure, la concentration diminue en moyenne d'environ 0,33 mg/L par heure. <i>(1 pt)</i></li>
</ol>
<div class="astuce">Pour comparer \(C(t)\) à sa tangente, pense à encadrer l'exponentielle : \(\mathrm{e}^{a}\leqslant 1\) dès que \(a\leqslant 0\).</div>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 3 — Produit scalaire dans un carré (calculatrice autorisée)", points: 3, chapitres: [8, 9],
      enonce: R`<p>\(ABCD\) est un carré de côté 4. \(I\) est le milieu de \([AB]\) et \(J\) le milieu de \([BC]\).</p>
<svg viewBox="-10 -10 140 140" width="160" height="160" role="img" aria-label="Carré ABCD avec I milieu de AB et J milieu de BC">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<rect x="10" y="10" width="100" height="100"/>
<line x1="10" y1="10" x2="60" y2="110" stroke-dasharray="4 3"/>
<line x1="10" y1="110" x2="110" y2="60" stroke-dasharray="4 3"/>
</g>
<g fill="currentColor" font-size="10" font-family="sans-serif">
<text x="0" y="122">A</text><text x="112" y="122">B</text><text x="112" y="8">C</text><text x="0" y="8">D</text>
<text x="57" y="124">I</text><text x="114" y="64">J</text>
</g>
</svg>
<ol>
<li>En décomposant \(\overrightarrow{DI}=\overrightarrow{DA}+\overrightarrow{AI}\) et \(\overrightarrow{AJ}=\overrightarrow{AB}+\overrightarrow{BJ}\), calculer \(\overrightarrow{DI}\cdot\overrightarrow{AJ}\). Que peut-on en déduire pour les droites \((DI)\) et \((AJ)\) ?</li>
<li>On se place dans le repère orthonormé \(\left(A;\tfrac14\overrightarrow{AB},\tfrac14\overrightarrow{AD}\right)\). Donner les coordonnées de \(D\), \(I\), \(J\) et retrouver le résultat de la question 1.</li>
<li>Calculer \(\overrightarrow{AJ}\cdot\overrightarrow{AC}\), puis en déduire une mesure, arrondie au dixième de degré, de l'angle \(\widehat{JAC}\).</li>
</ol>`,
      correction: R`<ol>
<li>\[\overrightarrow{DI}\cdot\overrightarrow{AJ}=\overrightarrow{DA}\cdot\overrightarrow{AB}+\overrightarrow{DA}\cdot\overrightarrow{BJ}+\overrightarrow{AI}\cdot\overrightarrow{AB}+\overrightarrow{AI}\cdot\overrightarrow{BJ}.\]
\(\overrightarrow{DA}\perp\overrightarrow{AB}\) et \(\overrightarrow{AI}\perp\overrightarrow{BJ}\) : ces deux produits sont nuls.
\(\overrightarrow{DA}\) et \(\overrightarrow{BJ}\) sont colinéaires de sens contraires : \(\overrightarrow{DA}\cdot\overrightarrow{BJ}=-4\times 2=-8\).
\(\overrightarrow{AI}\) et \(\overrightarrow{AB}\) sont colinéaires de même sens : \(\overrightarrow{AI}\cdot\overrightarrow{AB}=2\times 4=8\).
Donc \(\overrightarrow{DI}\cdot\overrightarrow{AJ}=0-8+8+0=0\) : les droites \((DI)\) et \((AJ)\) sont <b>perpendiculaires</b>. <i>(1,25 pt)</i></li>
<li>\(D(0;4)\), \(I(2;0)\), \(J(4;2)\). \(\overrightarrow{DI}(2;-4)\), \(\overrightarrow{AJ}(4;2)\) et \(\overrightarrow{DI}\cdot\overrightarrow{AJ}=2\times 4+(-4)\times 2=0\) ✓. <i>(0,75 pt)</i></li>
<li>\(C(4;4)\) : \(\overrightarrow{AC}(4;4)\), donc \(\overrightarrow{AJ}\cdot\overrightarrow{AC}=16+8=24\).
\(AJ=\sqrt{16+4}=2\sqrt5\) et \(AC=4\sqrt2\). Comme \(\overrightarrow{AJ}\cdot\overrightarrow{AC}=AJ\times AC\times\cos\widehat{JAC}\) :
\[\cos\widehat{JAC}=\frac{24}{2\sqrt5\times 4\sqrt2}=\frac{24}{8\sqrt{10}}=\frac{3}{\sqrt{10}}\approx 0{,}9487,\]
d'où \(\widehat{JAC}\approx 18{,}4^\circ\). <i>(1 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 4 — Dépistage : probabilités et coût moyen", points: 3, chapitres: [10, 11],
      enonce: R`<p>Une maladie touche 2 % d'une population. Un test de dépistage est positif pour 95 % des personnes malades et pour 3 % des personnes non malades. On choisit une personne au hasard ; on note \(M\) : « la personne est malade » et \(T\) : « le test est positif ».</p>
<ol>
<li>Construire un arbre pondéré décrivant la situation.</li>
<li>Montrer que \(P(T)=0{,}0484\).</li>
<li>Le test d'une personne est positif. Quelle est la probabilité qu'elle soit malade ? (arrondir au millième) Commenter.</li>
<li>Le test coûte 10 € ; en cas de test positif, un examen complémentaire coûtant 50 € est réalisé. On note \(X\) le coût total pour une personne. Donner la loi de \(X\), calculer \(E(X)\), puis estimer le budget à prévoir pour dépister 5 000 personnes.</li>
</ol>`,
      correction: R`<ol>
<li>\(M\) (0,02) puis \(T\) (0,95) / \(\overline{T}\) (0,05) ; \(\overline{M}\) (0,98) puis \(T\) (0,03) / \(\overline{T}\) (0,97). <i>(0,5 pt)</i></li>
<li>Probabilités totales :
\[P(T)=0{,}02\times 0{,}95+0{,}98\times 0{,}03=0{,}019+0{,}0294=0{,}0484.\]
<i>(0,75 pt)</i></li>
<li>\[P_T(M)=\frac{P(M\cap T)}{P(T)}=\frac{0{,}019}{0{,}0484}=\frac{95}{242}\approx 0{,}393.\]
Moins de 40 % des personnes testées positives sont réellement malades ! C'est parce que la maladie est rare : les « faux positifs » parmi les 98 % de non-malades sont plus nombreux que les vrais positifs. Un test positif doit donc être confirmé. <i>(0,75 pt)</i></li>
<li>\(X\) prend la valeur 60 si le test est positif et 10 sinon : \(P(X=60)=0{,}0484\) et \(P(X=10)=0{,}9516\).
\[E(X)=10\times 0{,}9516+60\times 0{,}0484=9{,}516+2{,}904=12{,}42.\]
Le coût moyen est de 12,42 € par personne ; pour 5 000 personnes, on peut prévoir environ \(5000\times 12{,}42=62\,100\) €. <i>(1 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` }
  ]
},

/* =====================================================================
   SUJET 4 — exigeant
   ===================================================================== */
{ titre: "Sujet type bac n°4 — exigeant", duree: "2 h", calculatrice: false,
  chapitres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  automatismes: [
    { q: R`Pour tout réel \(x\), \((x+1)(x-1)-(x-1)^2=\)`,
      choix: [R`\(-2\)`, R`\(2x-2\)`, R`\(2x\)`, R`\(-2x+2\)`], bonne: 1,
      explication: R`\(x^2-1-(x^2-2x+1)=x^2-1-x^2+2x-1=2x-2\). Attention au signe moins devant la parenthèse.` },
    { q: R`L'équation \(2x^2+3x+5=0\) :`,
      choix: [R`a deux solutions`, R`a une seule solution`, R`n'a aucune solution réelle`, R`a pour solution \(x=-\frac32\)`], bonne: 2,
      explication: R`\(\Delta=3^2-4\times 2\times 5=9-40=-31\lt 0\) : aucune solution réelle.` },
    { q: R`Pour un réel \(x\), la condition « \(x=2\) » est, pour « \(x^2=4\) » :`,
      choix: [R`nécessaire mais pas suffisante`, R`suffisante mais pas nécessaire`, R`nécessaire et suffisante`, R`ni nécessaire ni suffisante`], bonne: 1,
      explication: R`Si \(x=2\) alors \(x^2=4\) : c'est suffisant. Mais \(x=-2\) vérifie aussi \(x^2=4\) : ce n'est pas nécessaire.` },
    { q: R`Pour tout réel \(x\), \(\cos(\pi-x)=\)`,
      choix: [R`\(\cos x\)`, R`\(-\cos x\)`, R`\(\sin x\)`, R`\(-\sin x\)`], bonne: 1,
      explication: R`Les points associés à \(x\) et \(\pi-x\) sont symétriques par rapport à l'axe des ordonnées : même sinus, cosinus opposés.` },
    { q: R`La dérivée de \(f(x)=(3x-1)\,\mathrm{e}^{x}\) est :`,
      choix: [R`\(3\,\mathrm{e}^x\)`, R`\((3x+2)\,\mathrm{e}^x\)`, R`\((3x-4)\,\mathrm{e}^x\)`, R`\(3x\,\mathrm{e}^x\)`], bonne: 1,
      explication: R`\((uv)'=u'v+uv'\) : \(3\,\mathrm{e}^x+(3x-1)\,\mathrm{e}^x=(3x+2)\,\mathrm{e}^x\).` },
    { q: R`Une équation du cercle de centre \(\Omega(1;-2)\) et de rayon 3 est :`,
      choix: [R`\((x-1)^2+(y+2)^2=3\)`, R`\((x+1)^2+(y-2)^2=9\)`, R`\((x-1)^2+(y+2)^2=9\)`, R`\((x-1)^2+(y-2)^2=9\)`], bonne: 2,
      explication: R`\((x-x_\Omega)^2+(y-y_\Omega)^2=r^2\), avec \(r^2=9\) et \(y-(-2)=y+2\).` },
    { q: R`Un vecteur directeur de la droite d'équation \(3x-2y+1=0\) est :`,
      choix: [R`\(\vec u(3;-2)\)`, R`\(\vec u(2;3)\)`, R`\(\vec u(-3;2)\)`, R`\(\vec u(3;2)\)`], bonne: 1,
      explication: R`Pour \(ax+by+c=0\), le vecteur \((-b;a)=(2;3)\) est directeur ; \((3;-2)\) est un vecteur <i>normal</i>. Quant à \((-3;2)\), il est orthogonal à \((2;3)\) : c'est un autre vecteur normal, pas un vecteur directeur.` },
    { q: R`\(X\) prend les valeurs \(-1\) et \(3\) avec la probabilité \(0{,}5\) chacune. Alors \(V(X)=\)`,
      choix: [R`\(1\)`, R`\(5\)`, R`\(4\)`, R`\(2\)`], bonne: 2,
      explication: R`\(E(X)=0{,}5\times(-1)+0{,}5\times 3=1\) et \(E(X^2)=0{,}5\times 1+0{,}5\times 9=5\), donc \(V(X)=5-1^2=4\).` },
    { q: R`La suite définie par \(u_n=3\times 0{,}5^{n}\) est :`,
      choix: [R`arithmétique de raison \(0{,}5\)`, R`géométrique de raison \(3\)`, R`géométrique de raison \(0{,}5\), décroissante`, R`géométrique de raison \(0{,}5\), croissante`], bonne: 2,
      explication: R`\(u_{n+1}=0{,}5\,u_n\) : géométrique de raison \(0{,}5\) et de premier terme \(3\gt 0\) ; comme \(0\lt q\lt 1\), elle est décroissante.` },
    { q: R`Dans un triangle \(ABC\), \(AB=5\), \(AC=3\) et \(\widehat{BAC}=60^\circ\). Alors \(BC=\)`,
      choix: [R`\(\sqrt{19}\)`, R`\(7\)`, R`\(\sqrt{34}\)`, R`\(4\)`], bonne: 0,
      explication: R`Al-Kashi : \(BC^2=5^2+3^2-2\times 5\times 3\times\cos 60^\circ=25+9-15=19\).` },
    { q: R`\(f\) est dérivable sur \([-2;4]\), strictement croissante sur \([-2;1]\) et strictement décroissante sur \([1;4]\). Laquelle de ces affirmations est forcément vraie ?`,
      choix: [R`\(f(1)=0\)`, R`\(f'(3)\gt 0\)`, R`\(f'(-1)\lt 0\)`, R`\(f'(1)=0\)`], bonne: 3,
      explication: R`\(f\) admet un maximum local en 1, à l'intérieur de l'intervalle : la dérivée s'y annule. On ne sait rien sur la valeur \(f(1)\), et \(f'\) est positive sur \([-2;1]\), négative sur \([1;4]\).` },
    { q: R`\(P(A\cap B)=0{,}12\) et \(P(B)=0{,}4\). Alors \(P_B(A)=\)`,
      choix: [R`\(0{,}048\)`, R`\(0{,}3\)`, R`\(0{,}52\)`, R`\(0{,}28\)`], bonne: 1,
      explication: R`\(P_B(A)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{0{,}12}{0{,}4}=0{,}3\).` }
  ],
  exercices: [
    { titre: "Exercice 1 — Second degré avec paramètre et logique", points: 4, chapitres: [2, 1],
      enonce: R`<p>Pour tout réel \(m\), on considère l'équation \((E_m) : x^2-2mx+m+6=0\).</p>
<ol>
<li>Résoudre \((E_0)\) puis \((E_4)\).</li>
<li>Montrer que le discriminant de \((E_m)\) est \(\Delta_m=4(m-3)(m+2)\).</li>
<li>Discuter, selon les valeurs de \(m\), le nombre de solutions de \((E_m)\). Donner la solution dans les cas où elle est unique.</li>
<li>On considère la proposition \(\mathcal{P}\) : « Si \(m\gt 3\), alors \((E_m)\) admet deux solutions distinctes. »<br>
a) \(\mathcal{P}\) est-elle vraie ?<br>
b) Énoncer la réciproque de \(\mathcal{P}\). Est-elle vraie ?<br>
c) Énoncer la contraposée de \(\mathcal{P}\). Est-elle vraie ?<br>
d) La condition « \(m\gt 3\) » est-elle nécessaire, suffisante pour que \((E_m)\) ait deux solutions distinctes ? Donner une condition nécessaire et suffisante.</li>
</ol>`,
      correction: R`<ol>
<li>\((E_0) : x^2+6=0\), or \(x^2+6\geqslant 6\gt 0\) : aucune solution.<br>
\((E_4) : x^2-8x+10=0\). \(\Delta=64-40=24\gt 0\), \(\sqrt{24}=2\sqrt6\) :
\[x=\frac{8\pm 2\sqrt6}{2}=4\pm\sqrt6.\]
<i>(1 pt)</i></li>
<li>\(\Delta_m=(-2m)^2-4\times 1\times(m+6)=4m^2-4m-24=4(m^2-m-6)\). Le trinôme \(m^2-m-6\) a pour racines 3 et \(-2\) (somme 1, produit \(-6\)), donc \(\Delta_m=4(m-3)(m+2)\). <i>(0,75 pt)</i></li>
<li>\(\Delta_m\) est un trinôme en \(m\) de coefficient dominant \(4\gt 0\) :
<ul>
<li>si \(m\lt -2\) ou \(m\gt 3\) : \(\Delta_m\gt 0\), <b>deux solutions</b> ;</li>
<li>si \(m=-2\) ou \(m=3\) : \(\Delta_m=0\), <b>une solution</b> \(x_0=\dfrac{2m}{2}=m\). Pour \(m=3\) : \(x^2-6x+9=(x-3)^2\), solution 3 ; pour \(m=-2\) : \(x^2+4x+4=(x+2)^2\), solution \(-2\) ;</li>
<li>si \(-2\lt m\lt 3\) : \(\Delta_m\lt 0\), <b>aucune solution</b>.</li>
</ul>
<i>(1 pt)</i></li>
<li>a) Si \(m\gt 3\), alors \(m-3\gt 0\) et \(m+2\gt 0\), donc \(\Delta_m\gt 0\) : \(\mathcal{P}\) est <b>vraie</b>. <i>(0,25 pt)</i><br>
b) Réciproque : « Si \((E_m)\) admet deux solutions distinctes, alors \(m\gt 3\) ». Elle est <b>fausse</b> : contre-exemple \(m=-3\), \(\Delta_{-3}=4\times(-6)\times(-1)=24\gt 0\), deux solutions alors que \(m\lt 3\). <i>(0,5 pt)</i><br>
c) Contraposée : « Si \((E_m)\) n'admet pas deux solutions distinctes, alors \(m\leqslant 3\) ». Elle est <b>vraie</b>, car une proposition et sa contraposée ont toujours la même valeur de vérité. <i>(0,25 pt)</i><br>
d) « \(m\gt 3\) » est une condition <b>suffisante mais pas nécessaire</b>. Une condition nécessaire et suffisante est : \(m\in\,]-\infty;-2[\,\cup\,]3;+\infty[\). <i>(0,25 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 2 — Trigonométrie et second degré", points: 3, chapitres: [7, 2],
      enonce: R`<ol>
<li>On considère la fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=\sin x\cos x\).<br>
a) Étudier la parité de \(f\).<br>
b) Montrer que \(f\) est périodique de période \(\pi\).</li>
<li>Résoudre dans \([0;2\pi[\) l'équation \(2\cos^2 x-\cos x-1=0\). <i>(On pourra poser \(X=\cos x\).)</i></li>
<li>Résoudre dans \(]-\pi;\pi]\) l'inéquation \(\sin x\geqslant\dfrac12\).</li>
</ol>`,
      correction: R`<ol>
<li>a) \(\mathbb{R}\) est symétrique par rapport à 0 et, pour tout \(x\), \(f(-x)=\sin(-x)\cos(-x)=(-\sin x)\cos x=-f(x)\) : \(f\) est <b>impaire</b> (sa courbe est symétrique par rapport à l'origine). <i>(0,5 pt)</i><br>
b) \(f(x+\pi)=\sin(x+\pi)\cos(x+\pi)=(-\sin x)(-\cos x)=\sin x\cos x=f(x)\) : \(f\) est \(\pi\)-périodique. <i>(0,5 pt)</i></li>
<li>En posant \(X=\cos x\) : \(2X^2-X-1=0\). \(\Delta=1+8=9\), donc \(X=\dfrac{1+3}{4}=1\) ou \(X=\dfrac{1-3}{4}=-\dfrac12\).
<ul>
<li>\(\cos x=1\) sur \([0;2\pi[\) : \(x=0\) ;</li>
<li>\(\cos x=-\frac12\) sur \([0;2\pi[\) : \(x=\frac{2\pi}{3}\) ou \(x=\frac{4\pi}{3}\).</li>
</ul>
\(S=\left\{0;\dfrac{2\pi}{3};\dfrac{4\pi}{3}\right\}\). <i>(1,25 pt)</i></li>
<li>\(\sin\frac{\pi}{6}=\sin\frac{5\pi}{6}=\frac12\). Sur le cercle trigonométrique, les points d'ordonnée supérieure ou égale à \(\frac12\) forment l'arc allant de \(\frac{\pi}{6}\) à \(\frac{5\pi}{6}\). Donc \(S=\left[\dfrac{\pi}{6};\dfrac{5\pi}{6}\right]\). <i>(0,75 pt)</i></li>
</ol>
<p><b>Total : 3 points.</b></p>` },

    { titre: "Exercice 3 — Fonction rationnelle, tangente et position relative", points: 4, chapitres: [4, 5],
      enonce: R`<p>Soit \(f\) la fonction définie sur \(]1;+\infty[\) par \(f(x)=\dfrac{x^2+3}{x-1}\), et \(\mathcal{C}\) sa courbe dans un repère.</p>
<ol>
<li>Montrer que pour tout \(x\gt 1\), \(f(x)=x+1+\dfrac{4}{x-1}\).</li>
<li>Montrer que pour tout \(x\gt 1\), \(f'(x)=\dfrac{(x-3)(x+1)}{(x-1)^2}\).</li>
<li>Dresser le tableau de variations de \(f\) sur \(]1;+\infty[\) (limites non demandées) et préciser son minimum.</li>
<li>Déterminer une équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse 2.</li>
<li>Étudier la position relative de \(\mathcal{C}\) et de la droite \(\mathcal{D} : y=x+1\).</li>
<li>Déduire de la question 3 que, pour tout réel \(x\gt 1\), \(x^2+3\geqslant 6(x-1)\). Retrouver ce résultat directement.</li>
</ol>`,
      correction: R`<ol>
<li>\(x+1+\dfrac{4}{x-1}=\dfrac{(x+1)(x-1)+4}{x-1}=\dfrac{x^2-1+4}{x-1}=\dfrac{x^2+3}{x-1}=f(x)\). <i>(0,5 pt)</i></li>
<li>À partir de la forme précédente : \(\left(\dfrac{4}{x-1}\right)'=-\dfrac{4}{(x-1)^2}\), donc
\[f'(x)=1-\frac{4}{(x-1)^2}=\frac{(x-1)^2-4}{(x-1)^2}=\frac{(x-1-2)(x-1+2)}{(x-1)^2}=\frac{(x-3)(x+1)}{(x-1)^2}.\]
(On peut aussi utiliser \(\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\) : \(\frac{2x(x-1)-(x^2+3)}{(x-1)^2}=\frac{x^2-2x-3}{(x-1)^2}\).) <i>(1 pt)</i></li>
<li>Sur \(]1;+\infty[\), \((x-1)^2\gt 0\) et \(x+1\gt 0\) : \(f'(x)\) a le signe de \(x-3\). \(f(3)=\dfrac{12}{2}=6\).
<table class="tv"><tr><td>\(x\)</td><td>1</td><td></td><td>3</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>0</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>6</td><td>↗</td><td></td></tr></table>
Le minimum de \(f\) sur \(]1;+\infty[\) est 6, atteint en \(x=3\). <i>(0,75 pt)</i></li>
<li>\(f(2)=\dfrac{7}{1}=7\) et \(f'(2)=\dfrac{(-1)\times 3}{1^2}=-3\). \(T : y=-3(x-2)+7\), soit \(y=-3x+13\). <i>(0,75 pt)</i></li>
<li>\(f(x)-(x+1)=\dfrac{4}{x-1}\gt 0\) pour \(x\gt 1\) : \(\mathcal{C}\) est <b>strictement au-dessus</b> de \(\mathcal{D}\) sur \(]1;+\infty[\). <i>(0,5 pt)</i></li>
<li>D'après la question 3, \(f(x)\geqslant 6\) pour tout \(x\gt 1\), soit \(\dfrac{x^2+3}{x-1}\geqslant 6\). En multipliant par \(x-1\gt 0\) (le sens ne change pas) : \(x^2+3\geqslant 6(x-1)\).<br>
Directement : \(x^2+3-6(x-1)=x^2-6x+9=(x-3)^2\geqslant 0\). On retrouve aussi l'égalité pour \(x=3\). <i>(0,5 pt)</i></li>
</ol>
<p><b>Total : 4 points.</b></p>` },

    { titre: "Exercice 4 — Cercle, tangente et produit scalaire (calculatrice autorisée)", points: 3, chapitres: [9, 8],
      enonce: R`<p>Dans un repère orthonormé, on considère l'ensemble \(\mathcal{C}\) des points \(M(x;y)\) tels que \(x^2+y^2-6x+4y-12=0\), ainsi que le point \(A(6;2)\) et la droite \(d : y=x-4\).</p>
<ol>
<li>Montrer que \(\mathcal{C}\) est un cercle dont on précisera le centre \(\Omega\) et le rayon.</li>
<li>Vérifier que \(A\in\mathcal{C}\), puis déterminer une équation de la tangente \(\mathcal{T}\) à \(\mathcal{C}\) en \(A\).</li>
<li>Déterminer les coordonnées des points d'intersection de \(d\) et \(\mathcal{C}\).</li>
<li>On note \(B\) le point d'intersection autre que \(A\). Calculer \(\overrightarrow{\Omega A}\cdot\overrightarrow{\Omega B}\), puis une mesure de l'angle \(\widehat{A\Omega B}\) arrondie au dixième de degré.</li>
</ol>`,
      correction: R`<ol>
<li>\(x^2-6x=(x-3)^2-9\) et \(y^2+4y=(y+2)^2-4\). L'équation équivaut à
\[(x-3)^2+(y+2)^2=12+9+4=25.\]
\(\mathcal{C}\) est le cercle de centre \(\Omega(3;-2)\) et de rayon 5. <i>(0,75 pt)</i></li>
<li>\((6-3)^2+(2+2)^2=9+16=25\) : \(A\in\mathcal{C}\).
La tangente en \(A\) est perpendiculaire au rayon \([\Omega A]\) : \(\overrightarrow{\Omega A}(3;4)\) est un vecteur normal, donc \(\mathcal{T} : 3x+4y+c=0\). Avec \(A\) : \(18+8+c=0\), \(c=-26\). \(\mathcal{T} : 3x+4y-26=0\). <i>(0,75 pt)</i></li>
<li>On remplace \(y\) par \(x-4\) dans l'équation réduite : \((x-3)^2+(x-2)^2=25\), soit \(2x^2-10x+13=25\), c'est-à-dire \(x^2-5x-6=0\). \(\Delta=25+24=49\), d'où \(x=\dfrac{5+7}{2}=6\) ou \(x=\dfrac{5-7}{2}=-1\).
Les points d'intersection sont \(A(6;2)\) et \(B(-1;-5)\) (vérification : \(16+9=25\)). <i>(0,75 pt)</i></li>
<li>\(\overrightarrow{\Omega A}(3;4)\), \(\overrightarrow{\Omega B}(-4;-3)\), donc \(\overrightarrow{\Omega A}\cdot\overrightarrow{\Omega B}=-12-12=-24\).
Comme \(\Omega A=\Omega B=5\) :
\[\cos\widehat{A\Omega B}=\frac{-24}{5\times 5}=-0{,}96,\qquad\widehat{A\Omega B}\approx 163{,}7^\circ.\]
<i>(0,75 pt)</i></li>
</ol>
<div class="astuce">Pour la tangente à un cercle, retiens le réflexe : le rayon \(\overrightarrow{\Omega A}\) est un vecteur <b>normal</b> à la tangente en \(A\).</div>
<p><b>Total : 3 points.</b></p>` }
  ]
}

];
})();
