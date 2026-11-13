(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 9,
  titre: "Géométrie repérée",
  partie: "Géométrie",
  emoji: "📍",
  accroche: R`Un GPS qui localise ton téléphone, un sismologue qui retrouve l'épicentre d'un séisme, un architecte qui trace une arche parfaite… Tous utilisent la même magie : des <b>équations</b> de droites, de cercles et de paraboles dans un repère. Dans ce chapitre, tu apprends à transformer la géométrie en calcul (et inversement) !`,

  videos: [
    { titre: "Vecteur normal à une droite", recherche: "Yvan Monka vecteur normal à une droite", duree: "≈ 6 min", resume: R`Ce qu'est un vecteur normal, et comment le lire directement dans une équation \(ax+by+c=0\).` },
    { titre: "Équation cartésienne avec un vecteur normal", recherche: "Yvan Monka déterminer une équation cartésienne de droite à l'aide d'un vecteur normal", duree: "≈ 7 min", resume: R`La méthode pas à pas pour trouver l'équation d'une droite connaissant un point et un vecteur normal.` },
    { titre: "Équation d'un cercle", recherche: "Yvan Monka équation cartésienne d'un cercle centre rayon", duree: "≈ 6 min", resume: R`Écrire l'équation d'un cercle de centre et rayon donnés, puis la développer.` },
    { titre: "Retrouver le centre et le rayon d'un cercle", recherche: "Yvan Monka déterminer centre et rayon d'un cercle à partir de son équation", duree: "≈ 8 min", resume: R`La technique de la complétion du carré pour reconnaître (ou non !) une équation de cercle.` },
    { titre: "Cercle de diamètre [AB]", recherche: "Yvan Monka équation cercle de diamètre AB produit scalaire", duree: "≈ 7 min", resume: R`Utiliser le produit scalaire \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\) pour obtenir l'équation d'un cercle.` },
    { titre: "Projeté orthogonal et distance à une droite", recherche: "Yvan Monka coordonnées projeté orthogonal d'un point sur une droite", duree: "≈ 9 min", resume: R`Trouver les coordonnées du projeté orthogonal en résolvant un système, puis en déduire une distance.` },
    { titre: "Parabole : sommet et axe de symétrie", recherche: "Yvan Monka parabole sommet axe de symétrie second degré", duree: "≈ 6 min", resume: R`Retrouver le sommet et l'axe d'une parabole \(y=ax^2+bx+c\) grâce à \(-\frac{b}{2a}\).` }
  ],

  cours: [
    { titre: "1. Vecteur normal et équation cartésienne de droite", html: R`
<p>Dans tout le chapitre, on travaille dans un repère <b>orthonormé</b> \((O;\vec\imath,\vec\jmath)\).</p>
<div class="def"><b>Définition.</b> Un <b>vecteur normal</b> à une droite \(d\) est un vecteur non nul \(\vec n\) <b>orthogonal</b> à un vecteur directeur de \(d\).</div>
<p>Autrement dit : le vecteur directeur « suit » la droite, le vecteur normal lui est perpendiculaire.</p>
<div class="prop"><b>Propriété.</b>
<ul>
<li>Une droite de vecteur normal \(\vec n\begin{pmatrix}a\\b\end{pmatrix}\) admet une équation de la forme \(ax+by+c=0\).</li>
<li>Réciproquement, la droite d'équation \(ax+by+c=0\) (avec \((a;b)\neq(0;0)\)) admet \(\vec n\begin{pmatrix}a\\b\end{pmatrix}\) comme vecteur normal et \(\vec u\begin{pmatrix}-b\\a\end{pmatrix}\) comme vecteur directeur.</li>
</ul></div>
<p><b>Pourquoi ?</b> Un point \(M(x;y)\) est sur la droite passant par \(A(x_A;y_A)\) de vecteur normal \(\vec n\) si et seulement si \(\overrightarrow{AM}\cdot\vec n=0\), c'est-à-dire \(a(x-x_A)+b(y-y_A)=0\). En développant, on obtient bien \(ax+by+c=0\) avec \(c=-ax_A-by_A\).</p>
<div class="astuce"><b>Moyen mnémotechnique :</b> dans \(ax+by+c=0\), le vecteur <b>normal</b> se lit <b>normalement</b> : \((a;b)\). Le vecteur directeur, lui, « échange et change un signe » : \((-b;a)\).</div>
<div class="ex"><b>Méthode — équation d'une droite connaissant un point et un vecteur normal.</b><br>
Droite \(d\) passant par \(A(2;-1)\) de vecteur normal \(\vec n\begin{pmatrix}3\\4\end{pmatrix}\).
<ol>
<li>\(d\) a une équation de la forme \(3x+4y+c=0\).</li>
<li>\(A\in d\) donc \(3\times2+4\times(-1)+c=0\), soit \(2+c=0\), d'où \(c=-2\).</li>
<li>Conclusion : \(d : 3x+4y-2=0\).</li>
</ol>
Vecteur directeur de \(d\) : \(\vec u\begin{pmatrix}-4\\3\end{pmatrix}\). Vérification : \(\vec u\cdot\vec n=-12+12=0\) ✓.</div>
<div class="prop"><b>Droites perpendiculaires.</b> Deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux (produit scalaire nul).<br>Astuce : un vecteur <b>directeur</b> de \(d\) est un vecteur <b>normal</b> à toute perpendiculaire à \(d\).</div>
<div class="ex"><b>Exemple.</b> \(d : 2x-y+5=0\) et \(d' : x+2y-1=0\). Vecteurs normaux \(\begin{pmatrix}2\\-1\end{pmatrix}\) et \(\begin{pmatrix}1\\2\end{pmatrix}\) : produit scalaire \(2\times1+(-1)\times2=0\). Les droites sont perpendiculaires.</div>
<div class="warn"><b>Pièges classiques.</b>
<ul>
<li>Confondre vecteur normal \((a;b)\) et vecteur directeur \((-b;a)\).</li>
<li>Une droite a une <b>infinité</b> d'équations cartésiennes : \(3x+4y-2=0\) et \(6x+8y-4=0\) décrivent la même droite.</li>
<li>Oublier de déterminer \(c\) : « \(3x+4y+c=0\) » n'est pas une réponse finale !</li>
</ul></div>` },
    { titre: "2. Équations de cercles", html: R`
<div class="prop"><b>Propriété.</b> Le cercle \(\mathcal C\) de centre \(\Omega(x_\Omega;y_\Omega)\) et de rayon \(r&gt;0\) a pour équation
\[(x-x_\Omega)^2+(y-y_\Omega)^2=r^2.\]</div>
<p><b>Pourquoi ?</b> \(M(x;y)\in\mathcal C \iff \Omega M=r \iff \Omega M^2=r^2\), et \(\Omega M^2=(x-x_\Omega)^2+(y-y_\Omega)^2\).</p>
<div class="ex"><b>Exemple.</b> Cercle de centre \(\Omega(1;-2)\) et de rayon \(3\) :
\[(x-1)^2+(y+2)^2=9.\]
Forme développée : \(x^2-2x+1+y^2+4y+4=9\), soit \(x^2+y^2-2x+4y-4=0\).</div>
<div class="prop"><b>Cercle de diamètre \([AB]\).</b> \(M\) appartient au cercle de diamètre \([AB]\) si et seulement si \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\). Son centre est le milieu de \([AB]\), son rayon est \(\frac{AB}{2}\).</div>
<h4>Reconnaître une équation de cercle : la complétion du carré</h4>
<div class="prop"><b>Rappel.</b> \(x^2+2kx=(x+k)^2-k^2\). Par exemple \(x^2+6x=(x+3)^2-9\) et \(y^2-4y=(y-2)^2-4\).</div>
<div class="ex"><b>Méthode.</b> Ensemble \(\mathcal E\) des points tels que \(x^2+y^2+6x-4y-3=0\).
<ol>
<li>On regroupe : \((x^2+6x)+(y^2-4y)-3=0\).</li>
<li>On complète les carrés : \((x+3)^2-9+(y-2)^2-4-3=0\).</li>
<li>On isole : \((x+3)^2+(y-2)^2=16\).</li>
<li>Comme \(16=4^2&gt;0\), \(\mathcal E\) est le cercle de centre \(\Omega(-3;2)\) et de rayon \(4\).</li>
</ol></div>
<div class="warn"><b>Attention :</b> une équation du type \(x^2+y^2+\dots=0\) n'est <b>pas toujours</b> un cercle ! Après complétion, on obtient \((x-\alpha)^2+(y-\beta)^2=k\) :
<ul>
<li>si \(k&gt;0\) : cercle de centre \((\alpha;\beta)\), rayon \(\sqrt k\) ;</li>
<li>si \(k=0\) : un seul point \((\alpha;\beta)\) ;</li>
<li>si \(k&lt;0\) : ensemble <b>vide</b> (une somme de carrés n'est jamais négative).</li>
</ul>
Exemple : \(x^2+y^2-2x+4y+10=0 \iff (x-1)^2+(y+2)^2=-5\) : aucun point.</div>
<div class="warn"><b>Piège de signe :</b> \((x+3)^2\) correspond à un centre d'abscisse \(-3\), pas \(3\). Et le rayon est \(\sqrt{16}=4\), pas \(16\).</div>` },
    { titre: "3. Projeté orthogonal et distance d'un point à une droite", html: R`
<div class="def"><b>Définition.</b> Le <b>projeté orthogonal</b> d'un point \(A\) sur une droite \(d\) est le point \(H\) de \(d\) tel que \((AH)\perp d\) (ou \(H=A\) si \(A\in d\)).<br>
La <b>distance</b> de \(A\) à \(d\) est la longueur \(AH\) : c'est la plus petite distance entre \(A\) et un point de \(d\).</div>
<div class="ex"><b>Méthode.</b> Projeté de \(A(4;5)\) sur \(d : x+2y-4=0\).
<ol>
<li><b>Perpendiculaire à \(d\) passant par \(A\).</b> Un vecteur directeur de \(d\) est \(\vec u\begin{pmatrix}-2\\1\end{pmatrix}\) ; on peut aussi prendre \(\begin{pmatrix}2\\-1\end{pmatrix}\). C'est un vecteur normal de la perpendiculaire \(\Delta\) : \(\Delta : 2x-y+c=0\). Avec \(A\) : \(8-5+c=0\), \(c=-3\). Donc \(\Delta : 2x-y-3=0\).</li>
<li><b>Intersection.</b> On résout \(\begin{cases}x+2y-4=0\\2x-y-3=0\end{cases}\). La 2<sup>e</sup> donne \(y=2x-3\) ; dans la 1<sup>re</sup> : \(x+4x-6-4=0\), \(x=2\), puis \(y=1\). Donc \(H(2;1)\).</li>
<li><b>Distance.</b> \(AH=\sqrt{(2-4)^2+(1-5)^2}=\sqrt{4+16}=\sqrt{20}=2\sqrt5\approx4{,}47\).</li>
</ol>
Vérification : \(H\in d\) car \(2+2-4=0\) ✓.</div>
<div class="astuce"><b>Bonus pour vérifier</b> (formule hors programme, mais pratique) : la distance de \(A(x_A;y_A)\) à \(d : ax+by+c=0\) vaut \(\dfrac{|ax_A+by_A+c|}{\sqrt{a^2+b^2}}\). Ici : \(\dfrac{|4+10-4|}{\sqrt5}=\dfrac{10}{\sqrt5}=2\sqrt5\) ✓.</div>
<div class="prop"><b>Tangente à un cercle.</b> La tangente en un point \(A\) d'un cercle de centre \(\Omega\) est la droite passant par \(A\) et de vecteur normal \(\overrightarrow{\Omega A}\).</div>
<div class="warn"><b>Piège :</b> pour la perpendiculaire, il faut prendre le vecteur <b>directeur</b> de \(d\) comme vecteur <b>normal</b>, et non pas recopier le vecteur normal de \(d\) (sinon tu obtiens une parallèle !).</div>` },
    { titre: "4. Paraboles", html: R`
<div class="prop"><b>Propriété.</b> Avec \(a\neq0\), la courbe d'équation \(y=ax^2+bx+c\) est une <b>parabole</b>.
<ul>
<li>Son <b>sommet</b> \(S\) a pour abscisse \(\alpha=-\dfrac{b}{2a}\) et pour ordonnée \(\beta=f(\alpha)\).</li>
<li>Elle admet un <b>axe de symétrie</b> : la droite verticale d'équation \(x=\alpha\).</li>
<li>Si \(a&gt;0\), elle est « tournée vers le haut » (∪) ; si \(a&lt;0\), vers le bas (∩).</li>
</ul></div>
<p>La forme canonique \(y=a(x-\alpha)^2+\beta\) donne directement le sommet \(S(\alpha;\beta)\).</p>
<div class="ex"><b>Exemple.</b> \(\mathcal P : y=2x^2-8x+5\).<br>
\(\alpha=-\dfrac{-8}{2\times2}=2\) et \(\beta=2\times4-16+5=-3\). Sommet \(S(2;-3)\), axe \(x=2\), parabole tournée vers le haut (\(a=2&gt;0\)). Forme canonique : \(y=2(x-2)^2-3\).</div>
<div class="ex"><b>Intersection d'une parabole et d'une droite.</b> \(\mathcal P : y=x^2-4x+1\) et \(d : y=2x-4\). On résout \(x^2-4x+1=2x-4\iff x^2-6x+5=0\). \(\Delta=36-20=16\), \(x_1=1\), \(x_2=5\). Points d'intersection : \((1;-2)\) et \((5;6)\).</div>
<div class="warn"><b>Piège :</b> l'axe de symétrie est une <b>droite</b> d'équation \(x=\alpha\), pas un nombre. Et attention au signe dans \(-\frac{b}{2a}\) quand \(b\) est négatif.</div>` },
    { titre: "5. Utiliser un repère pour étudier une configuration", html: R`
<p>Beaucoup de problèmes de géométrie (alignement, perpendicularité, distances, cercles…) deviennent de simples calculs une fois qu'on a choisi un <b>bon repère</b>.</p>
<div class="ex"><b>Méthode.</b>
<ol>
<li><b>Choisir un repère orthonormé adapté</b> : origine en un sommet, axes le long de côtés perpendiculaires.</li>
<li><b>Écrire les coordonnées</b> de tous les points utiles (milieux : moyenne des coordonnées).</li>
<li><b>Traduire</b> la question : perpendicularité → produit scalaire nul ; appartenance → équation vérifiée ; distance → \(\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}\).</li>
<li><b>Conclure</b> en revenant à la figure (une phrase en français !).</li>
</ol></div>
<div class="ex"><b>Exemple.</b> \(ABCD\) est un carré, \(I\) le milieu de \([AB]\), \(J\) celui de \([BC]\). Montrer que \((DI)\perp(AJ)\).<br>
Repère \((A;\overrightarrow{AB},\overrightarrow{AD})\) : \(A(0;0)\), \(B(1;0)\), \(C(1;1)\), \(D(0;1)\), \(I\left(\tfrac12;0\right)\), \(J\left(1;\tfrac12\right)\).<br>
\(\overrightarrow{DI}\begin{pmatrix}1/2\\-1\end{pmatrix}\), \(\overrightarrow{AJ}\begin{pmatrix}1\\1/2\end{pmatrix}\), \(\overrightarrow{DI}\cdot\overrightarrow{AJ}=\tfrac12-\tfrac12=0\). Donc \((DI)\perp(AJ)\).</div>
<div class="astuce"><b>Trouver un point équidistant de trois points</b> (« où placer la mairie ? ») : c'est le centre du cercle circonscrit, à l'intersection des <b>médiatrices</b>. La médiatrice de \([AB]\) passe par le milieu de \([AB]\) et a \(\overrightarrow{AB}\) pour vecteur normal.</div>
<div class="warn"><b>Piège :</b> le repère \((A;\overrightarrow{AB},\overrightarrow{AD})\) n'est orthonormé que si la figure le permet (carré, rectangle avec mise à l'échelle…). Pour un produit scalaire en coordonnées, le repère doit être orthonormé !</div>` }
  ],

  quiz: [
    { q: R`Un vecteur normal à la droite \(d : 2x-5y+1=0\) est :`, choix: [R`\(\begin{pmatrix}5\\2\end{pmatrix}\)`, R`\(\begin{pmatrix}2\\-5\end{pmatrix}\)`, R`\(\begin{pmatrix}-5\\1\end{pmatrix}\)`, R`\(\begin{pmatrix}2\\5\end{pmatrix}\)`], bonne: 1, explication: R`Dans \(ax+by+c=0\), le vecteur normal est \((a;b)=(2;-5)\). Le vecteur \((5;2)\) est un vecteur <b>directeur</b> (piège classique).` },
    { q: R`La droite passant par l'origine \(O\) et de vecteur normal \(\vec n\begin{pmatrix}1\\-3\end{pmatrix}\) a pour équation :`, choix: [R`\(3x+y=0\)`, R`\(x-3y+1=0\)`, R`\(x-3y=0\)`, R`\(-3x+y=0\)`], bonne: 2, explication: R`Équation \(x-3y+c=0\), et \(O(0;0)\) est sur la droite donc \(c=0\).` },
    { q: R`Le cercle de centre \(\Omega(2;-1)\) et de rayon \(3\) a pour équation :`, choix: [R`\((x+2)^2+(y-1)^2=9\)`, R`\((x-2)^2+(y+1)^2=3\)`, R`\((x-2)^2+(y+1)^2=9\)`, R`\((x-2)^2+(y-1)^2=9\)`], bonne: 2, explication: R`\((x-x_\Omega)^2+(y-y_\Omega)^2=r^2\) avec \(x_\Omega=2\), \(y_\Omega=-1\) et \(r^2=9\).` },
    { q: R`L'ensemble des points tels que \(x^2+y^2-4x=0\) est :`, choix: [R`le cercle de centre \((2;0)\) et de rayon \(2\)`, R`le cercle de centre \((-2;0)\) et de rayon \(2\)`, R`le cercle de centre \((2;0)\) et de rayon \(4\)`, R`l'ensemble vide`], bonne: 0, explication: R`\(x^2-4x=(x-2)^2-4\), donc l'équation devient \((x-2)^2+y^2=4\) : centre \((2;0)\), rayon \(\sqrt4=2\).` },
    { q: R`Le sommet de la parabole \(y=x^2-6x+1\) est :`, choix: [R`\((-3;28)\)`, R`\((3;-8)\)`, R`\((6;1)\)`, R`\((3;10)\)`], bonne: 1, explication: R`\(\alpha=-\frac{-6}{2}=3\) et \(\beta=9-18+1=-8\).` },
    { q: R`Les droites \(d : 3x+y-2=0\) et \(d' : x-3y+7=0\) sont :`, choix: [R`parallèles`, R`confondues`, R`perpendiculaires`, R`sécantes mais pas perpendiculaires`], bonne: 2, explication: R`Vecteurs normaux \((3;1)\) et \((1;-3)\) : produit scalaire \(3-3=0\). Les normales sont orthogonales, donc les droites sont perpendiculaires.` },
    { q: R`La distance de l'origine \(O\) à la droite \(d : 3x+4y-10=0\) vaut :`, choix: [R`\(10\)`, R`\(2\)`, R`\(\frac{10}{7}\)`, R`\(5\)`], bonne: 1, explication: R`Le projeté de \(O\) est \(H(1{,}2;1{,}6)\) (intersection de \(d\) avec \(4x-3y=0\)), et \(OH=\sqrt{1{,}44+2{,}56}=2\). Avec la formule bonus : \(\frac{|-10|}{\sqrt{9+16}}=\frac{10}{5}=2\).` },
    { q: R`Le point \(A(1;2)\) appartient-il au cercle d'équation \(x^2+y^2=5\) ?`, choix: [R`Oui`, R`Non, il est à l'intérieur`, R`Non, il est à l'extérieur`, R`On ne peut pas savoir`], bonne: 0, explication: R`\(1^2+2^2=5\) : l'équation est vérifiée, donc \(A\) est sur le cercle (de centre \(O\), de rayon \(\sqrt5\)).` }
  ],

  exercices: [
    { niveau: 1, titre: "Équations avec un vecteur normal",
      enonce: R`Dans chaque cas, détermine une équation cartésienne de la droite passant par le point donné et de vecteur normal \(\vec n\).
<ol type="a"><li>\(A(1;3)\) et \(\vec n\begin{pmatrix}2\\-1\end{pmatrix}\)</li><li>\(B(-2;0)\) et \(\vec n\begin{pmatrix}0\\3\end{pmatrix}\)</li><li>\(C(4;-1)\) et \(\vec n\begin{pmatrix}-3\\5\end{pmatrix}\)</li></ol>`,
      indice: R`Avec \(\vec n\begin{pmatrix}a\\b\end{pmatrix}\), l'équation est \(ax+by+c=0\). Remplace \(x\) et \(y\) par les coordonnées du point pour trouver \(c\).`,
      correction: R`<ol type="a">
<li>La droite a une équation \(2x-y+c=0\). Comme \(A\) est dessus : \(2\times1-3+c=0\), donc \(c=1\). <b>Équation : \(2x-y+1=0\).</b></li>
<li>Équation \(0x+3y+c=0\), soit \(3y+c=0\). Avec \(B\) : \(3\times0+c=0\), donc \(c=0\). Équation \(3y=0\), c'est-à-dire <b>\(y=0\)</b> : c'est l'axe des abscisses (logique, \(B\) est dessus et la droite est horizontale).</li>
<li>Équation \(-3x+5y+c=0\). Avec \(C\) : \(-12-5+c=0\), donc \(c=17\). <b>Équation : \(-3x+5y+17=0\)</b> (ou \(3x-5y-17=0\) en multipliant par \(-1\)).</li>
</ol>`},
    { niveau: 1, titre: "Lire une équation de droite",
      enonce: R`On considère la droite \(d : 4x-3y+2=0\).
<ol><li>Donne un vecteur normal et un vecteur directeur de \(d\).</li><li>Détermine le point de \(d\) d'abscisse \(1\).</li><li>Le point \(E(-2;-2)\) appartient-il à \(d\) ?</li><li>Donne l'équation réduite de \(d\) et son coefficient directeur.</li></ol>`,
      indice: R`Normal : \((a;b)\). Directeur : \((-b;a)\). Pour l'équation réduite, isole \(y\).`,
      correction: R`<ol>
<li>\(\vec n\begin{pmatrix}4\\-3\end{pmatrix}\) est normal à \(d\) ; \(\vec u\begin{pmatrix}3\\4\end{pmatrix}\) (de la forme \((-b;a)\)) est directeur. Vérification : \(4\times3+(-3)\times4=0\) ✓.</li>
<li>Avec \(x=1\) : \(4-3y+2=0\), donc \(3y=6\), \(y=2\). Le point est \((1;2)\).</li>
<li>\(4\times(-2)-3\times(-2)+2=-8+6+2=0\). Oui, \(E\in d\).</li>
<li>\(4x-3y+2=0\iff 3y=4x+2\iff y=\frac43x+\frac23\). Le coefficient directeur est \(\frac43\) (cohérent avec \(\vec u(3;4)\) : on monte de 4 quand on avance de 3).</li>
</ol>`},
    { niveau: 1, titre: "Équation d'un cercle",
      enonce: R`Soit \(\mathcal C\) le cercle de centre \(\Omega(-1;4)\) et de rayon \(5\).
<ol><li>Écris une équation de \(\mathcal C\), puis développe-la.</li><li>Les points \(A(2;8)\), \(B(3;1)\) et \(C(0;0)\) sont-ils sur \(\mathcal C\) ?</li></ol>`,
      indice: R`\((x-x_\Omega)^2+(y-y_\Omega)^2=r^2\). Pour un point, calcule \(\Omega M^2\) et compare à \(25\).`,
      correction: R`<ol>
<li>\(\mathcal C : (x+1)^2+(y-4)^2=25\). En développant : \(x^2+2x+1+y^2-8y+16=25\), soit <b>\(x^2+y^2+2x-8y-8=0\)</b>.</li>
<li>
<ul>
<li>\(A\) : \((2+1)^2+(8-4)^2=9+16=25\) : <b>\(A\in\mathcal C\)</b>.</li>
<li>\(B\) : \((3+1)^2+(1-4)^2=16+9=25\) : <b>\(B\in\mathcal C\)</b>.</li>
<li>\(C\) : \((0+1)^2+(0-4)^2=1+16=17\neq25\) : <b>\(C\notin\mathcal C\)</b> (et comme \(17&lt;25\), \(C\) est à l'intérieur du cercle).</li>
</ul></li>
</ol>`},
    { niveau: 1, titre: "Sommet et axe d'une parabole",
      enonce: R`Soit \(\mathcal P\) la parabole d'équation \(y=-x^2+4x+5\).
<ol><li>Détermine son sommet \(S\) et son axe de symétrie. Est-elle tournée vers le haut ou vers le bas ?</li><li>Détermine les points d'intersection de \(\mathcal P\) avec l'axe des abscisses.</li><li>Vérifie que ces deux points sont symétriques par rapport à l'axe de \(\mathcal P\).</li></ol>`,
      indice: R`\(\alpha=-\frac{b}{2a}\) avec \(a=-1\), \(b=4\). Pour l'axe des abscisses, résous \(y=0\).`,
      correction: R`<ol>
<li>\(a=-1\), \(b=4\), \(c=5\). \(\alpha=-\frac{4}{2\times(-1)}=2\), \(\beta=-4+8+5=9\). <b>Sommet \(S(2;9)\)</b>, <b>axe : droite d'équation \(x=2\)</b>. Comme \(a=-1&lt;0\), la parabole est tournée vers le bas (le sommet est un maximum).</li>
<li>On résout \(-x^2+4x+5=0\iff x^2-4x-5=0\). \(\Delta=16+20=36\), \(x_1=\frac{4-6}{2}=-1\), \(x_2=\frac{4+6}{2}=5\). Points : <b>\((-1;0)\) et \((5;0)\)</b>.</li>
<li>Le milieu de ces deux points a pour abscisse \(\frac{-1+5}{2}=2\) : il est sur l'axe \(x=2\), et les deux points ont la même ordonnée. Ils sont bien symétriques par rapport à l'axe.</li>
</ol>`},
    { niveau: 2, titre: "Cercle, point ou rien du tout ?",
      enonce: R`Dans chaque cas, détermine la nature de l'ensemble des points \(M(x;y)\) vérifiant l'équation.
<ol type="a"><li>\(x^2+y^2-6x+2y+6=0\)</li><li>\(x^2+y^2+4x-10y+29=0\)</li><li>\(x^2+y^2-2x+8y+20=0\)</li></ol>`,
      indice: R`Complète les carrés : \(x^2-6x=(x-3)^2-9\), \(y^2+2y=(y+1)^2-1\), etc. Puis regarde le signe du membre de droite.`,
      correction: R`<ol type="a">
<li>\((x-3)^2-9+(y+1)^2-1+6=0\iff(x-3)^2+(y+1)^2=4\). Comme \(4=2^2&gt;0\) : <b>cercle de centre \((3;-1)\) et de rayon \(2\)</b>.</li>
<li>\((x+2)^2-4+(y-5)^2-25+29=0\iff(x+2)^2+(y-5)^2=0\). Une somme de deux carrés est nulle seulement si les deux sont nuls : \(x=-2\) et \(y=5\). L'ensemble est <b>réduit au point \((-2;5)\)</b>.</li>
<li>\((x-1)^2-1+(y+4)^2-16+20=0\iff(x-1)^2+(y+4)^2=-3\). Une somme de carrés ne peut pas être négative : <b>l'ensemble est vide</b>.</li>
</ol>`},
    { niveau: 2, titre: "Hauteur et médiatrice dans un triangle",
      enonce: R`On donne \(A(-1;1)\), \(B(3;-1)\) et \(C(5;5)\).
<ol><li>Détermine une équation de la hauteur issue de \(A\) dans le triangle \(ABC\).</li><li>Détermine une équation de la médiatrice de \([AB]\).</li><li>Le point \(C\) est-il sur la médiatrice de \([AB]\) ? Qu'en déduis-tu pour le triangle ?</li></ol>`,
      indice: R`La hauteur issue de \(A\) passe par \(A\) et a \(\overrightarrow{BC}\) pour vecteur normal. La médiatrice de \([AB]\) passe par le milieu de \([AB]\) et a \(\overrightarrow{AB}\) pour vecteur normal.`,
      correction: R`<ol>
<li>\(\overrightarrow{BC}\begin{pmatrix}2\\6\end{pmatrix}\) est normal à la hauteur ; on peut prendre plus simplement \(\begin{pmatrix}1\\3\end{pmatrix}\) (colinéaire). Équation \(x+3y+c=0\) ; avec \(A\) : \(-1+3+c=0\), \(c=-2\). <b>Hauteur : \(x+3y-2=0\)</b>.</li>
<li>Milieu de \([AB]\) : \(I\left(\frac{-1+3}{2};\frac{1-1}{2}\right)=(1;0)\). \(\overrightarrow{AB}\begin{pmatrix}4\\-2\end{pmatrix}\), ou plus simplement \(\begin{pmatrix}2\\-1\end{pmatrix}\). Équation \(2x-y+c=0\) ; avec \(I\) : \(2+c=0\), \(c=-2\). <b>Médiatrice : \(2x-y-2=0\)</b>.</li>
<li>\(2\times5-5-2=3\neq0\) : \(C\) n'est pas sur la médiatrice de \([AB]\), donc \(CA\neq CB\) : le triangle n'est pas isocèle en \(C\). (Vérification : \(CA^2=36+16=52\), \(CB^2=4+36=40\).)</li>
</ol>`},
    { niveau: 2, titre: "Projeté orthogonal et distance",
      enonce: R`Soit \(d\) la droite d'équation \(2x-y+3=0\) et \(A(3;4)\).
<ol><li>Vérifie que \(A\notin d\).</li><li>Détermine une équation de la droite \(\Delta\) perpendiculaire à \(d\) passant par \(A\).</li><li>Déduis-en les coordonnées du projeté orthogonal \(H\) de \(A\) sur \(d\).</li><li>Calcule la distance de \(A\) à \(d\).</li></ol>`,
      indice: R`Un vecteur directeur de \(d\) est \((1;2)\) : c'est un vecteur normal de \(\Delta\). Puis résous le système formé par les deux équations.`,
      correction: R`<ol>
<li>\(2\times3-4+3=5\neq0\), donc \(A\notin d\).</li>
<li>Un vecteur directeur de \(d\) est \(\vec u\begin{pmatrix}1\\2\end{pmatrix}\) ; c'est un vecteur normal de \(\Delta\). \(\Delta : x+2y+c=0\), avec \(A\) : \(3+8+c=0\), \(c=-11\). <b>\(\Delta : x+2y-11=0\)</b>.</li>
<li>On résout \(\begin{cases}2x-y+3=0\\x+2y-11=0\end{cases}\). La première donne \(y=2x+3\). Dans la seconde : \(x+4x+6-11=0\), \(5x=5\), \(x=1\), puis \(y=5\). <b>\(H(1;5)\)</b>. Vérification : \(2-5+3=0\) ✓.</li>
<li>\(AH=\sqrt{(1-3)^2+(5-4)^2}=\sqrt{4+1}=\sqrt5\approx2{,}24\). La distance de \(A\) à \(d\) est <b>\(\sqrt5\)</b>.</li>
</ol>`},
    { niveau: 2, titre: "Cercle de diamètre [AB]",
      enonce: R`On donne \(A(-1;2)\) et \(B(3;4)\).
<ol><li>Détermine le centre et le rayon du cercle \(\mathcal C\) de diamètre \([AB]\), puis une équation de \(\mathcal C\).</li><li>L'origine \(O\) est-elle sur \(\mathcal C\) ?</li><li>Montre que \(C(0;1)\) est sur \(\mathcal C\). Que peut-on dire du triangle \(ABC\) ? Vérifie-le par un produit scalaire.</li></ol>`,
      indice: R`Le centre est le milieu de \([AB]\) et le rayon vaut \(\frac{AB}{2}\). Un triangle inscrit dans un cercle dont un côté est un diamètre est rectangle.`,
      correction: R`<ol>
<li>Centre \(\Omega\left(\frac{-1+3}{2};\frac{2+4}{2}\right)=(1;3)\). \(AB=\sqrt{4^2+2^2}=\sqrt{20}=2\sqrt5\), donc \(r=\sqrt5\) et \(r^2=5\). <b>\(\mathcal C : (x-1)^2+(y-3)^2=5\)</b>.</li>
<li>\((0-1)^2+(0-3)^2=1+9=10\neq5\) : \(O\notin\mathcal C\).</li>
<li>\((0-1)^2+(1-3)^2=1+4=5\) : \(C\in\mathcal C\). Comme \([AB]\) est un diamètre, le triangle \(ABC\) est <b>rectangle en \(C\)</b>. Vérification : \(\overrightarrow{CA}\begin{pmatrix}-1\\1\end{pmatrix}\), \(\overrightarrow{CB}\begin{pmatrix}3\\3\end{pmatrix}\), \(\overrightarrow{CA}\cdot\overrightarrow{CB}=-3+3=0\) ✓.</li>
</ol>`},
    { niveau: 3, titre: "Cercle, sécante et tangente",
      enonce: R`Soit \(\mathcal C\) l'ensemble des points \(M(x;y)\) tels que \(x^2+y^2-2x-4y-20=0\).
<ol><li>Montre que \(\mathcal C\) est un cercle dont tu préciseras le centre \(\Omega\) et le rayon.</li><li>Détermine les coordonnées des points d'intersection de \(\mathcal C\) avec la droite \(\Delta\) d'équation \(y=x\).</li><li>Vérifie que \(A(4;6)\in\mathcal C\), puis détermine une équation de la tangente \(T\) à \(\mathcal C\) en \(A\).</li></ol>`,
      indice: R`2. Remplace \(y\) par \(x\) dans l'équation du cercle. 3. La tangente en \(A\) a pour vecteur normal \(\overrightarrow{\Omega A}\).`,
      correction: R`<ol>
<li>\((x-1)^2-1+(y-2)^2-4-20=0\iff(x-1)^2+(y-2)^2=25\). C'est le <b>cercle de centre \(\Omega(1;2)\) et de rayon \(5\)</b>.</li>
<li>Avec \(y=x\) : \(x^2+x^2-2x-4x-20=0\iff2x^2-6x-20=0\iff x^2-3x-10=0\). \(\Delta=9+40=49\), \(x_1=\frac{3-7}{2}=-2\), \(x_2=\frac{3+7}{2}=5\). Points d'intersection : <b>\((-2;-2)\) et \((5;5)\)</b>.<br>Vérification avec \((5;5)\) : \(25+25-10-20-20=0\) ✓.</li>
<li>\((4-1)^2+(6-2)^2=9+16=25\) : \(A\in\mathcal C\). \(\overrightarrow{\Omega A}\begin{pmatrix}3\\4\end{pmatrix}\) est normal à \(T\) : \(T : 3x+4y+c=0\). Avec \(A\) : \(12+24+c=0\), \(c=-36\). <b>\(T : 3x+4y-36=0\)</b>.</li>
</ol>`},
    { niveau: 3, titre: "Configuration dans un carré",
      enonce: R`\(ABCD\) est un carré de côté \(6\). \(E\) est le point de \([BC]\) tel que \(BE=2\) et \(F\) le point de \([CD]\) tel que \(CF=2\).<br>On se place dans le repère orthonormé d'origine \(A\) où \(B(6;0)\) et \(D(0;6)\).
<ol><li>Donne les coordonnées de \(C\), \(E\) et \(F\).</li><li>Démontre que les droites \((AE)\) et \((BF)\) sont perpendiculaires.</li><li>Détermine une équation de chacune des droites \((AE)\) et \((BF)\).</li><li>Déduis-en les coordonnées du point d'intersection \(I\) de ces deux droites.</li></ol>`,
      indice: R`\(F\) est sur \([CD]\), à 2 unités de \(C\) en allant vers \(D\). Pour la perpendicularité : produit scalaire \(\overrightarrow{AE}\cdot\overrightarrow{BF}\).`,
      correction: R`<ol>
<li>\(C(6;6)\). \(E\) est sur \([BC]\) (vertical, d'abscisse 6) à 2 de \(B\) : \(E(6;2)\). \(F\) est sur \([CD]\) (horizontal, d'ordonnée 6) à 2 de \(C\) vers \(D\) : \(F(4;6)\).</li>
<li>\(\overrightarrow{AE}\begin{pmatrix}6\\2\end{pmatrix}\), \(\overrightarrow{BF}\begin{pmatrix}-2\\6\end{pmatrix}\). \(\overrightarrow{AE}\cdot\overrightarrow{BF}=6\times(-2)+2\times6=0\). Donc <b>\((AE)\perp(BF)\)</b>.</li>
<li>\((AE)\) : vecteur directeur \((6;2)\), donc vecteur normal \((-2;6)\), ou \((1;-3)\) : \(x-3y+c=0\), avec \(A\) : \(c=0\). <b>\((AE) : x-3y=0\)</b>.<br>
\((BF)\) : comme \((AE)\perp(BF)\), le vecteur \(\overrightarrow{AE}\begin{pmatrix}6\\2\end{pmatrix}\), ou \((3;1)\), est normal à \((BF)\). \(3x+y+c=0\), avec \(B\) : \(18+c=0\). <b>\((BF) : 3x+y-18=0\)</b>. Vérification avec \(F\) : \(12+6-18=0\) ✓.</li>
<li>On résout : \(x=3y\), donc \(9y+y-18=0\), \(y=\frac{18}{10}=\frac95\) et \(x=\frac{27}{5}\). <b>\(I\left(\frac{27}{5};\frac95\right)\)</b>, soit \(I(5{,}4;1{,}8)\).</li>
</ol>`},
    { niveau: 3, titre: "Où est la mairie ?",
      enonce: R`Trois villages \(A\), \(B\) et \(C\) veulent construire une mairie commune <b>à égale distance</b> des trois. Dans un repère orthonormé d'unité 100 m, on a \(A(0;0)\), \(B(8;0)\) et \(C(2;6)\).
<ol><li>Explique pourquoi la mairie \(M\) doit se trouver sur la médiatrice de \([AB]\) et sur celle de \([AC]\).</li><li>Détermine une équation de chacune de ces médiatrices.</li><li>Déduis-en les coordonnées de \(M\).</li><li>À quelle distance (en mètres) de chaque village se trouve la mairie ? Donne une équation du cercle passant par \(A\), \(B\) et \(C\).</li></ol>`,
      indice: R`La médiatrice de \([AB]\) est l'ensemble des points équidistants de \(A\) et \(B\). Elle passe par le milieu et a \(\overrightarrow{AB}\) pour vecteur normal.`,
      correction: R`<ol>
<li>\(MA=MB\) signifie que \(M\) est sur la médiatrice de \([AB]\) ; \(MA=MC\) signifie que \(M\) est sur la médiatrice de \([AC]\). \(M\) est donc à leur intersection : c'est le centre du cercle circonscrit au triangle \(ABC\).</li>
<li>Médiatrice de \([AB]\) : milieu \((4;0)\), vecteur normal \(\overrightarrow{AB}(8;0)\), ou \((1;0)\) : \(x+c=0\) avec \(4+c=0\). Équation <b>\(x=4\)</b>.<br>
Médiatrice de \([AC]\) : milieu \((1;3)\), vecteur normal \(\overrightarrow{AC}(2;6)\), ou \((1;3)\) : \(x+3y+c=0\), avec \(1+9+c=0\), \(c=-10\). Équation <b>\(x+3y-10=0\)</b>.</li>
<li>Avec \(x=4\) : \(3y=6\), \(y=2\). <b>\(M(4;2)\)</b>.</li>
<li>\(MA=\sqrt{4^2+2^2}=\sqrt{20}\), \(MB=\sqrt{(-4)^2+2^2}=\sqrt{20}\), \(MC=\sqrt{(-2)^2+4^2}=\sqrt{20}\) ✓. \(\sqrt{20}=2\sqrt5\approx4{,}47\) unités, soit environ <b>447 m</b>.<br>
Cercle circonscrit : <b>\((x-4)^2+(y-2)^2=20\)</b>.</li>
</ol>`},
    { niveau: 3, titre: "Localiser l'épicentre d'un séisme",
      enonce: R`Trois stations sismiques \(A(0;0)\), \(B(8;-8)\) et \(C(-3;12)\) (unité : 10 km) enregistrent un séisme. En analysant les ondes, elles estiment leur distance à l'épicentre \(E\) : \(5\) unités pour \(A\), \(13\) pour \(B\) et \(10\) pour \(C\).
<ol><li>Écris les équations développées des cercles \(\mathcal C_A\), \(\mathcal C_B\), \(\mathcal C_C\) centrés sur les stations, de rayons les distances mesurées.</li><li>En soustrayant les équations de \(\mathcal C_A\) et \(\mathcal C_B\), montre que \(E\) est sur la droite \(d_1 : y=x+1\).</li><li>Détermine les deux points d'intersection de \(\mathcal C_A\) avec \(d_1\).</li><li>Utilise la station \(C\) pour trouver l'épicentre.</li></ol>`,
      indice: R`Les termes \(x^2+y^2\) disparaissent quand on soustrait deux équations de cercles : il reste une équation de droite. Pour la question 3, remplace \(y\) par \(x+1\) dans \(x^2+y^2=25\).`,
      correction: R`<ol>
<li>\(\mathcal C_A : x^2+y^2=25\), soit \(x^2+y^2-25=0\).<br>
\(\mathcal C_B : (x-8)^2+(y+8)^2=169\iff x^2+y^2-16x+16y+128-169=0\iff x^2+y^2-16x+16y-41=0\).<br>
\(\mathcal C_C : (x+3)^2+(y-12)^2=100\iff x^2+y^2+6x-24y+153-100=0\iff x^2+y^2+6x-24y+53=0\).</li>
<li>\(E\) vérifie les deux équations, donc aussi leur différence : \((x^2+y^2-25)-(x^2+y^2-16x+16y-41)=0\iff16x-16y+16=0\iff x-y+1=0\iff y=x+1\).</li>
<li>\(x^2+(x+1)^2=25\iff2x^2+2x-24=0\iff x^2+x-12=0\). \(\Delta=1+48=49\), \(x_1=\frac{-1-7}{2}=-4\), \(x_2=\frac{-1+7}{2}=3\). Points : \(E_1(-4;-3)\) et \(E_2(3;4)\).</li>
<li>Distance à \(C\) : \(CE_2=\sqrt{(3+3)^2+(4-12)^2}=\sqrt{36+64}=10\) ✓, alors que \(CE_1=\sqrt{(-1)^2+(-15)^2}=\sqrt{226}\neq10\).<br>
L'épicentre est donc <b>\(E(3;4)\)</b>, soit à 30 km à l'est et 40 km au nord de la station \(A\). (Vérification avec \(B\) : \(\sqrt{(-5)^2+12^2}=13\) ✓.)</li>
</ol>`}
  ],

  ds: [
    { titre: "DS n°1 — Droites, cercles, paraboles", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Droites", points: 5,
          enonce: R`On donne \(A(2;3)\) et \(B(-1;5)\).
<ol><li>Détermine une équation cartésienne de la droite \(d\) passant par \(A\) et de vecteur normal \(\vec n\begin{pmatrix}1\\-2\end{pmatrix}\).</li><li>Donne un vecteur directeur de \(d\).</li><li>Détermine une équation de la droite \(d'\) perpendiculaire à \(d\) passant par \(B\).</li><li>Calcule les coordonnées du point d'intersection de \(d\) et \(d'\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(d : x-2y+c=0\) ; avec \(A\) : \(2-6+c=0\), \(c=4\). <b>\(d : x-2y+4=0\)</b>.</li>
<li>(1 pt) \(\vec u\begin{pmatrix}2\\1\end{pmatrix}\) (forme \((-b;a)\)). Vérification : \(1\times2+(-2)\times1=0\).</li>
<li>(1,5 pt) \(\vec u\) est normal à \(d'\) : \(2x+y+c=0\) ; avec \(B\) : \(-2+5+c=0\), \(c=-3\). <b>\(d' : 2x+y-3=0\)</b>.</li>
<li>(1,5 pt) De \(d\) : \(x=2y-4\). Dans \(d'\) : \(4y-8+y-3=0\), \(5y=11\), \(y=\frac{11}{5}\), puis \(x=\frac{22}{5}-4=\frac25\). Point <b>\(\left(\frac25;\frac{11}{5}\right)\)</b>. Vérification dans \(d'\) : \(\frac45+\frac{11}{5}-3=0\) ✓.</li>
</ol>`},
        { titre: "Exercice 2 — Cercle", points: 5,
          enonce: R`Soit \(\mathcal C\) l'ensemble des points \(M(x;y)\) tels que \(x^2+y^2+4x-6y-12=0\).
<ol><li>Montre que \(\mathcal C\) est un cercle ; précise son centre \(\Omega\) et son rayon.</li><li>Vérifie que \(A(1;7)\) appartient à \(\mathcal C\).</li><li>Détermine une équation de la tangente à \(\mathcal C\) en \(A\).</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \((x+2)^2-4+(y-3)^2-9-12=0\iff(x+2)^2+(y-3)^2=25\). Cercle de <b>centre \(\Omega(-2;3)\)</b> et de <b>rayon \(5\)</b>. (1 pt pour la complétion, 1 pt pour la conclusion.)</li>
<li>(1 pt) \((1+2)^2+(7-3)^2=9+16=25\) ✓, donc \(A\in\mathcal C\).</li>
<li>(2 pts) La tangente en \(A\) a pour vecteur normal \(\overrightarrow{\Omega A}\begin{pmatrix}3\\4\end{pmatrix}\) : \(3x+4y+c=0\). Avec \(A\) : \(3+28+c=0\), \(c=-31\). <b>Tangente : \(3x+4y-31=0\)</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Parabole et droite", points: 5,
          enonce: R`Soit \(\mathcal P : y=x^2-4x+1\) et \(d : y=2x-4\).
<ol><li>Détermine le sommet et l'axe de symétrie de \(\mathcal P\).</li><li>Détermine les coordonnées des points d'intersection de \(\mathcal P\) et \(d\).</li><li>Étudie la position relative de \(\mathcal P\) et \(d\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\alpha=-\frac{-4}{2}=2\), \(\beta=4-8+1=-3\). <b>Sommet \(S(2;-3)\)</b>, <b>axe \(x=2\)</b>.</li>
<li>(2 pts) \(x^2-4x+1=2x-4\iff x^2-6x+5=0\). \(\Delta=36-20=16\), \(x_1=1\), \(x_2=5\). Avec \(d\) : \(y=-2\) et \(y=6\). Points <b>\((1;-2)\) et \((5;6)\)</b>.</li>
<li>(1,5 pt) On étudie le signe de \((x^2-4x+1)-(2x-4)=x^2-6x+5\) : trinôme de coefficient \(1&gt;0\), de racines 1 et 5, négatif entre les racines. Donc \(\mathcal P\) est <b>en dessous</b> de \(d\) sur \(]1;5[\) et <b>au-dessus</b> sur \(]-\infty;1[\cup]5;+\infty[\).</li>
</ol>`},
        { titre: "Exercice 4 — Distance à une droite", points: 5,
          enonce: R`Soit \(d : 2x+y-1=0\) et \(A(4;3)\).
<ol><li>Détermine une équation de la perpendiculaire \(\Delta\) à \(d\) passant par \(A\).</li><li>Détermine les coordonnées du projeté orthogonal \(H\) de \(A\) sur \(d\).</li><li>Calcule la distance de \(A\) à la droite \(d\).</li><li>Donne une équation du cercle de centre \(A\) tangent à \(d\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Un vecteur directeur de \(d\) est \((-1;2)\), ou \((1;-2)\) : il est normal à \(\Delta\). \(\Delta : x-2y+c=0\), avec \(A\) : \(4-6+c=0\), \(c=2\). <b>\(\Delta : x-2y+2=0\)</b>.</li>
<li>(2 pts) De \(d\) : \(y=1-2x\). Dans \(\Delta\) : \(x-2+4x+2=0\), \(x=0\), \(y=1\). <b>\(H(0;1)\)</b>.</li>
<li>(0,5 pt) \(AH=\sqrt{16+4}=\sqrt{20}=2\sqrt5\).</li>
<li>(1 pt) Le cercle de centre \(A\) tangent à \(d\) touche \(d\) en \(H\), donc son rayon est \(AH\) : <b>\((x-4)^2+(y-3)^2=20\)</b>.</li>
</ol>`}
      ]},
    { titre: "DS n°2 — Repérage et problèmes", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Orthocentre d'un triangle", points: 6,
          enonce: R`On donne \(A(-2;1)\), \(B(4;-1)\) et \(C(2;5)\).
<ol><li>Détermine une équation de la hauteur \(h_C\) issue de \(C\).</li><li>Détermine une équation de la hauteur \(h_A\) issue de \(A\).</li><li>Calcule les coordonnées du point d'intersection \(H\) de \(h_A\) et \(h_C\).</li><li>Vérifie que \(H\) est aussi sur la hauteur issue de \(B\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\overrightarrow{AB}\begin{pmatrix}6\\-2\end{pmatrix}\), ou \((3;-1)\), est normal à \(h_C\) : \(3x-y+c=0\) ; avec \(C\) : \(6-5+c=0\), \(c=-1\). <b>\(h_C : 3x-y-1=0\)</b>.</li>
<li>(1,5 pt) \(\overrightarrow{BC}\begin{pmatrix}-2\\6\end{pmatrix}\), ou \((1;-3)\) : \(x-3y+c=0\) ; avec \(A\) : \(-2-3+c=0\), \(c=5\). <b>\(h_A : x-3y+5=0\)</b>.</li>
<li>(1,5 pt) De \(h_C\) : \(y=3x-1\). Dans \(h_A\) : \(x-9x+3+5=0\), \(x=1\), \(y=2\). <b>\(H(1;2)\)</b>.</li>
<li>(1,5 pt) \(\overrightarrow{AC}\begin{pmatrix}4\\4\end{pmatrix}\), ou \((1;1)\) : \(h_B : x+y+c=0\), avec \(B\) : \(4-1+c=0\), \(c=-3\). \(h_B : x+y-3=0\) et \(1+2-3=0\) ✓. \(H\) est l'orthocentre de \(ABC\).</li>
</ol>`},
        { titre: "Exercice 2 — Un ensemble de points", points: 5,
          enonce: R`On donne \(A(1;-1)\) et \(B(5;3)\). On cherche l'ensemble \(\mathcal E\) des points \(M(x;y)\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\).
<ol><li>Montre que \(M\in\mathcal E\iff x^2+y^2-6x-2y+2=0\).</li><li>Déduis-en la nature de \(\mathcal E\) et ses éléments caractéristiques.</li><li>Retrouve ce résultat sans calcul.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(\overrightarrow{MA}\begin{pmatrix}1-x\\-1-y\end{pmatrix}\), \(\overrightarrow{MB}\begin{pmatrix}5-x\\3-y\end{pmatrix}\). \(\overrightarrow{MA}\cdot\overrightarrow{MB}=(1-x)(5-x)+(-1-y)(3-y)=x^2-6x+5+y^2-2y-3=x^2+y^2-6x-2y+2\).</li>
<li>(2 pts) \((x-3)^2-9+(y-1)^2-1+2=0\iff(x-3)^2+(y-1)^2=8\). <b>Cercle de centre \((3;1)\), de rayon \(\sqrt8=2\sqrt2\)</b>.</li>
<li>(1 pt) C'est le cercle de diamètre \([AB]\) : son centre est le milieu \(\left(\frac{1+5}{2};\frac{-1+3}{2}\right)=(3;1)\) et son rayon \(\frac{AB}{2}=\frac{\sqrt{16+16}}{2}=\frac{4\sqrt2}{2}=2\sqrt2\) ✓.</li>
</ol>`},
        { titre: "Exercice 3 — Retrouver une parabole", points: 4,
          enonce: R`Une parabole \(\mathcal P\) a pour sommet \(S(2;-1)\) et passe par \(A(0;3)\).
<ol><li>Justifie que \(\mathcal P\) a une équation de la forme \(y=a(x-2)^2-1\), puis détermine \(a\).</li><li>Écris l'équation sous la forme \(y=ax^2+bx+c\) et détermine les points d'intersection de \(\mathcal P\) avec l'axe des abscisses.</li><li>Le point \(B(5;8)\) est-il sur \(\mathcal P\) ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) La forme canonique \(y=a(x-\alpha)^2+\beta\) fait apparaître le sommet \((\alpha;\beta)=(2;-1)\). Avec \(A\) : \(3=a\times4-1\), donc \(a=1\).</li>
<li>(1,5 pt) \(y=(x-2)^2-1=x^2-4x+3\). \(x^2-4x+3=0\) : \(\Delta=4\), racines \(1\) et \(3\). Points <b>\((1;0)\) et \((3;0)\)</b> (symétriques par rapport à l'axe \(x=2\) ✓).</li>
<li>(1 pt) \(25-20+3=8\) : oui, \(B\in\mathcal P\).</li>
</ol>`},
        { titre: "Exercice 4 — Le séisme", points: 5,
          enonce: R`Deux stations sismiques sont situées en \(O(0;0)\) et \(P(7;1)\) (unité : 10 km). Chacune estime être à 5 unités de l'épicentre \(E\).
<ol><li>Écris les équations développées des deux cercles correspondants.</li><li>Montre que \(E\) est sur la droite d'équation \(y=25-7x\).</li><li>Détermine les deux positions possibles de l'épicentre.</li><li>Une troisième information indique que l'épicentre est au nord de \(O\) (ordonnée positive). Conclus.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(\mathcal C_O : x^2+y^2-25=0\) ; \(\mathcal C_P : (x-7)^2+(y-1)^2=25\iff x^2+y^2-14x-2y+25=0\).</li>
<li>(1 pt) Par différence : \((x^2+y^2-25)-(x^2+y^2-14x-2y+25)=14x+2y-50=0\iff y=25-7x\).</li>
<li>(2 pts) \(x^2+(25-7x)^2=25\iff50x^2-350x+600=0\iff x^2-7x+12=0\). \(\Delta=1\), \(x=3\) ou \(x=4\). Points <b>\((3;4)\) et \((4;-3)\)</b>.</li>
<li>(1 pt) L'ordonnée doit être positive : <b>\(E(3;4)\)</b>, à 30 km à l'est et 40 km au nord de \(O\).</li>
</ol>`}
      ]},
    { titre: "DS n°3 — Médiatrice, cercle et symétrique", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Médiatrice d'un segment", points: 5,
          enonce: R`On donne les points \(A(3;-2)\) et \(B(1;4)\).
<ol><li>Détermine une équation cartésienne de la médiatrice \(m\) du segment \([AB]\).</li><li>Détermine une équation cartésienne de la droite \((AB)\).</li><li>La droite \(d : 6x+2y+5=0\) est-elle parallèle à \((AB)\) ? Est-elle confondue avec \((AB)\) ?</li><li>Le point \(C\) de \(m\) d'abscisse \(5\) a pour ordonnée \(y_C\). Calcule \(y_C\), puis vérifie par un calcul de distances que \(CA=CB\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) La médiatrice de \([AB]\) passe par le milieu \(I\left(\frac{3+1}{2};\frac{-2+4}{2}\right)=(2;1)\) et a pour vecteur normal \(\overrightarrow{AB}\begin{pmatrix}-2\\6\end{pmatrix}\), ou plus simplement \(\begin{pmatrix}1\\-3\end{pmatrix}\). Donc \(m : x-3y+c=0\) ; avec \(I\) : \(2-3+c=0\), \(c=1\). <b>\(m : x-3y+1=0\)</b>.</li>
<li>(1,5 pt) \(\overrightarrow{AB}\begin{pmatrix}-2\\6\end{pmatrix}\) est directeur de \((AB)\), donc \(\begin{pmatrix}-1\\3\end{pmatrix}\) aussi, et \(\vec n\begin{pmatrix}3\\1\end{pmatrix}\) est normal (produit scalaire \(-3+3=0\)). \((AB) : 3x+y+c=0\) ; avec \(A\) : \(9-2+c=0\), \(c=-7\). <b>\((AB) : 3x+y-7=0\)</b>. Vérification avec \(B\) : \(3+4-7=0\) ✓.</li>
<li>(1 pt) Un vecteur normal de \(d\) est \(\begin{pmatrix}6\\2\end{pmatrix}=2\begin{pmatrix}3\\1\end{pmatrix}\) : les vecteurs normaux sont colinéaires, donc <b>\(d\parallel(AB)\)</b>. L'équation de \(d\) équivaut à \(3x+y+\frac52=0\), et \(\frac52\neq-7\) : par exemple \(A\) ne vérifie pas l'équation de \(d\) (\(18-4+5=19\neq0\)). Les droites sont <b>strictement parallèles</b>, pas confondues.</li>
<li>(1 pt) \(C\in m\) : \(5-3y_C+1=0\), donc \(y_C=2\) et \(C(5;2)\).<br>\(CA^2=(3-5)^2+(-2-2)^2=4+16=20\) et \(CB^2=(1-5)^2+(4-2)^2=16+4=20\). Donc <b>\(CA=CB=2\sqrt5\)</b> ✓ : c'est normal, tout point de la médiatrice est équidistant de \(A\) et \(B\).</li>
</ol>`},
        { titre: "Exercice 2 — Un cercle passant par l'origine", points: 6,
          enonce: R`Soit \(\mathcal C\) l'ensemble des points \(M(x;y)\) tels que \(x^2+y^2-6x+8y=0\).
<ol><li>Montre que \(\mathcal C\) est un cercle dont tu donneras le centre \(\Omega\) et le rayon \(r\).</li><li>Justifie que l'origine \(O\) appartient à \(\mathcal C\), puis détermine une équation de la tangente \(T\) à \(\mathcal C\) en \(O\).</li><li>Détermine les coordonnées des points d'intersection de \(\mathcal C\) avec l'axe des ordonnées.</li><li>Le point \(K(1;-1)\) est-il à l'intérieur ou à l'extérieur du disque délimité par \(\mathcal C\) ? Justifie.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) On complète les carrés : \(x^2-6x=(x-3)^2-9\) et \(y^2+8y=(y+4)^2-16\). L'équation devient \((x-3)^2-9+(y+4)^2-16=0\iff(x-3)^2+(y+4)^2=25\). Comme \(25=5^2&gt;0\), <b>\(\mathcal C\) est le cercle de centre \(\Omega(3;-4)\) et de rayon \(5\)</b>.</li>
<li>(1,5 pt) \(0^2+0^2-0+0=0\) : \(O\in\mathcal C\). La tangente en \(O\) a pour vecteur normal \(\overrightarrow{\Omega O}\begin{pmatrix}-3\\4\end{pmatrix}\) : \(T : -3x+4y+c=0\), et \(O\in T\) donne \(c=0\). <b>\(T : -3x+4y=0\)</b>, soit \(3x-4y=0\).</li>
<li>(1,5 pt) Sur l'axe des ordonnées, \(x=0\) : \(y^2+8y=0\iff y(y+8)=0\iff y=0\) ou \(y=-8\). Points d'intersection : <b>\(O(0;0)\) et \((0;-8)\)</b>. Vérification : \((0-3)^2+(-8+4)^2=9+16=25\) ✓.</li>
<li>(1 pt) \(\Omega K^2=(1-3)^2+(-1+4)^2=4+9=13\) et \(13&lt;25\), donc \(\Omega K&lt;5\) : <b>\(K\) est à l'intérieur</b> du disque.</li>
</ol>`},
        { titre: "Exercice 3 — Parabole tournée vers le bas", points: 4,
          enonce: R`Soit \(\mathcal P\) la parabole d'équation \(y=-2x^2+8x-3\) et \(d\) la droite d'équation \(y=-2x+5\).
<ol><li>Détermine le sommet \(S\) de \(\mathcal P\) et précise son orientation.</li><li>Donne une équation de l'axe de symétrie de \(\mathcal P\).</li><li>Détermine les coordonnées des points d'intersection de \(\mathcal P\) et \(d\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(a=-2\), \(b=8\) : \(\alpha=-\frac{8}{2\times(-2)}=2\) et \(\beta=-2\times4+16-3=5\). <b>Sommet \(S(2;5)\)</b>. Comme \(a=-2&lt;0\), la parabole est <b>tournée vers le bas</b> : \(S\) est son point le plus haut.</li>
<li>(0,5 pt) L'axe de symétrie est la droite d'équation <b>\(x=2\)</b>.</li>
<li>(2 pts) On résout \(-2x^2+8x-3=-2x+5\iff-2x^2+10x-8=0\iff x^2-5x+4=0\). \(\Delta=25-16=9\), \(x_1=\frac{5-3}{2}=1\), \(x_2=\frac{5+3}{2}=4\). Avec \(d\) : \(y=-2+5=3\) et \(y=-8+5=-3\). Points <b>\((1;3)\) et \((4;-3)\)</b>.<br>Vérification sur \(\mathcal P\) : \(-2+8-3=3\) ✓ et \(-32+32-3=-3\) ✓.</li>
</ol>`},
        { titre: "Exercice 4 — Projeté et symétrique", points: 5,
          enonce: R`Soit \(d\) la droite d'équation \(3x-y-4=0\) et \(A(-2;4)\).
<ol><li>Détermine une équation de la droite \(\Delta\) perpendiculaire à \(d\) passant par \(A\).</li><li>Détermine les coordonnées du projeté orthogonal \(H\) de \(A\) sur \(d\).</li><li>Calcule la distance de \(A\) à \(d\) (valeur exacte).</li><li>Détermine les coordonnées du symétrique \(A'\) de \(A\) par rapport à la droite \(d\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Un vecteur directeur de \(d\) est \(\vec u\begin{pmatrix}1\\3\end{pmatrix}\) (forme \((-b;a)\)) : il est normal à \(\Delta\). \(\Delta : x+3y+c=0\) ; avec \(A\) : \(-2+12+c=0\), \(c=-10\). <b>\(\Delta : x+3y-10=0\)</b>.</li>
<li>(1,5 pt) De \(d\) : \(y=3x-4\). Dans \(\Delta\) : \(x+9x-12-10=0\), \(10x=22\), \(x=\frac{11}{5}\), puis \(y=\frac{33}{5}-\frac{20}{5}=\frac{13}{5}\). <b>\(H\left(\frac{11}{5};\frac{13}{5}\right)\)</b>. Vérification dans \(\Delta\) : \(\frac{11}{5}+\frac{39}{5}-10=0\) ✓.</li>
<li>(1 pt) \(AH^2=\left(\frac{11}{5}+2\right)^2+\left(\frac{13}{5}-4\right)^2=\frac{441}{25}+\frac{49}{25}=\frac{490}{25}\), donc \(AH=\frac{\sqrt{490}}{5}=\frac{7\sqrt{10}}{5}\). La distance de \(A\) à \(d\) est <b>\(\frac{7\sqrt{10}}{5}\approx4{,}43\)</b>.</li>
<li>(1 pt) \(H\) est le milieu de \([AA']\), donc \(x_{A'}=2x_H-x_A=\frac{22}{5}+2=\frac{32}{5}\) et \(y_{A'}=2y_H-y_A=\frac{26}{5}-4=\frac65\). <b>\(A'\left(\frac{32}{5};\frac65\right)\)</b>.</li>
</ol>`}
      ]},
    { titre: "DS n°4 — Géométrie repérée en situation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Dans un rectangle", points: 6,
          enonce: R`\(ABCD\) est un rectangle tel que \(AB=8\) et \(AD=4\). \(I\) est le milieu de \([CD]\) et \(J\) celui de \([AB]\). On se place dans le repère orthonormé d'origine \(A\) dans lequel \(B(8;0)\) et \(D(0;4)\).
<ol><li>Donne les coordonnées de \(C\), \(I\) et \(J\).</li><li>Démontre que le triangle \(AIB\) est rectangle en \(I\).</li><li>Donne une équation du cercle \(\mathcal C\) de diamètre \([AB]\) et vérifie que \(I\in\mathcal C\). Pourquoi était-ce prévisible ?</li><li>On cherche un point \(K\) du segment \([AB]\) tel que le triangle \(DKC\) soit rectangle en \(K\). On note \(K(k;0)\) avec \(0\leq k\leq8\). Montre que \(\overrightarrow{KD}\cdot\overrightarrow{KC}=(k-4)^2\) et conclus.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <b>\(C(8;4)\)</b>, \(I\) milieu de \([CD]\) : \(I\left(\frac{8+0}{2};\frac{4+4}{2}\right)=\)<b>\((4;4)\)</b>, \(J\) milieu de \([AB]\) : <b>\(J(4;0)\)</b>.</li>
<li>(1,5 pt) \(\overrightarrow{IA}\begin{pmatrix}-4\\-4\end{pmatrix}\), \(\overrightarrow{IB}\begin{pmatrix}4\\-4\end{pmatrix}\). \(\overrightarrow{IA}\cdot\overrightarrow{IB}=-16+16=0\), donc \((IA)\perp(IB)\) : <b>\(AIB\) est rectangle en \(I\)</b>.</li>
<li>(1,5 pt) Centre \(J(4;0)\), rayon \(\frac{AB}{2}=4\) : <b>\(\mathcal C : (x-4)^2+y^2=16\)</b>. Avec \(I\) : \((4-4)^2+4^2=16\) ✓, donc \(I\in\mathcal C\). C'était prévisible : un triangle rectangle est inscrit dans le cercle ayant son hypoténuse pour diamètre, et \(AIB\) est rectangle en \(I\) d'hypoténuse \([AB]\).</li>
<li>(2 pts) \(\overrightarrow{KD}\begin{pmatrix}-k\\4\end{pmatrix}\), \(\overrightarrow{KC}\begin{pmatrix}8-k\\4\end{pmatrix}\). \(\overrightarrow{KD}\cdot\overrightarrow{KC}=-k(8-k)+16=k^2-8k+16=(k-4)^2\).<br>
\(DKC\) rectangle en \(K\iff\overrightarrow{KD}\cdot\overrightarrow{KC}=0\iff(k-4)^2=0\iff k=4\). Il y a <b>un seul point : \(K=J(4;0)\)</b>, le milieu de \([AB]\). Interprétation : le cercle de diamètre \([DC]\) (centre \(I\), rayon \(4\)) touche la droite \((AB)\) en un seul point, \(J\) : il est tangent à \((AB)\).</li>
</ol>`},
        { titre: "Exercice 2 — Le bateau et le phare", points: 5,
          enonce: R`Dans un repère orthonormé d'unité 1 km, un bateau suit une trajectoire rectiligne \(d\) passant par \(A(0;6)\) et \(B(8;2)\). Un phare est situé en \(P(1;0)\).
<ol><li>Détermine une équation cartésienne de \(d\).</li><li>Détermine les coordonnées du point \(H\) de la trajectoire le plus proche du phare.</li><li>Calcule la distance minimale entre le bateau et le phare (arrondie au mètre).</li><li>La lumière du phare est visible jusqu'à 5 km. Détermine les points de la trajectoire où le bateau entre et sort de la zone de visibilité, puis la longueur du trajet effectué dans cette zone (au mètre près).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(\overrightarrow{AB}\begin{pmatrix}8\\-4\end{pmatrix}\), ou \(\begin{pmatrix}2\\-1\end{pmatrix}\), est directeur de \(d\), donc \(\vec n\begin{pmatrix}1\\2\end{pmatrix}\) est normal. \(d : x+2y+c=0\), avec \(A\) : \(12+c=0\). <b>\(d : x+2y-12=0\)</b> (vérification avec \(B\) : \(8+4-12=0\) ✓).</li>
<li>(1,5 pt) \(H\) est le projeté orthogonal de \(P\) sur \(d\). La perpendiculaire à \(d\) passant par \(P\) a pour vecteur normal \(\begin{pmatrix}2\\-1\end{pmatrix}\) : \(2x-y+c=0\), avec \(P\) : \(c=-2\), soit \(2x-y-2=0\). On résout : \(y=2x-2\), puis \(x+4x-4-12=0\), \(x=\frac{16}{5}\) et \(y=\frac{32}{5}-2=\frac{22}{5}\). <b>\(H(3{,}2;4{,}4)\)</b>.</li>
<li>(0,5 pt) \(PH=\sqrt{2{,}2^2+4{,}4^2}=\sqrt{4{,}84+19{,}36}=\sqrt{24{,}2}\approx4{,}919\). Distance minimale : <b>environ 4,919 km</b>, soit 4 919 m.</li>
<li>(2 pts) La zone de visibilité est le disque de centre \(P\) et de rayon 5 : son bord a pour équation \((x-1)^2+y^2=25\). Sur \(d\), \(x=12-2y\) : \((11-2y)^2+y^2=25\iff5y^2-44y+96=0\). \(\Delta=1936-1920=16\), \(y_1=\frac{44-4}{10}=4\), \(y_2=\frac{44+4}{10}=4{,}8\). Points : <b>\((4;4)\) et \((2{,}4;4{,}8)\)</b> (vérification : \(9+16=25\) ✓ et \(1{,}96+23{,}04=25\) ✓).<br>
Longueur du trajet dans la zone : \(\sqrt{1{,}6^2+0{,}8^2}=\sqrt{3{,}2}\approx1{,}789\) km, soit <b>environ 1 789 m</b>. (Cohérent : \(PH\approx4{,}92&lt;5\), donc la trajectoire coupe bien la zone.)</li>
</ol>`},
        { titre: "Exercice 3 — L'arche du pont", points: 4,
          enonce: R`L'arche d'un pont est modélisée par une parabole \(\mathcal P\). Dans un repère orthonormé d'unité 1 m, ses pieds sont en \(O(0;0)\) et \(E(10;0)\) et sa hauteur maximale est de 5 m.
<ol><li>Justifie que l'axe de symétrie de \(\mathcal P\) est la droite d'équation \(x=5\) et donne les coordonnées du sommet.</li><li>On admet que \(\mathcal P\) a une équation de la forme \(y=ax(x-10)\). Détermine \(a\) et développe l'équation.</li><li>Un camion de 4 m de large et de 4 m de haut passe exactement au milieu de l'arche. Peut-il passer ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(O\) et \(E\) sont deux points de \(\mathcal P\) de même ordonnée : ils sont symétriques par rapport à l'axe, qui passe donc par le milieu d'abscisse \(\frac{0+10}{2}=5\). Axe : <b>\(x=5\)</b>. Le sommet est sur l'axe et la hauteur maximale est 5 : <b>\(S(5;5)\)</b>.</li>
<li>(1,5 pt) \(S\in\mathcal P\) : \(5=a\times5\times(5-10)=-25a\), donc <b>\(a=-\frac15\)</b>. \(y=-\frac15x(x-10)=\)<b>\(-\frac15x^2+2x\)</b>.</li>
<li>(1,5 pt) Centré au milieu, le camion occupe les abscisses de \(3\) à \(7\). Par symétrie, la hauteur de l'arche est la plus faible aux bords : \(y(3)=-\frac95+6=\frac{21}{5}=4{,}2\) (et \(y(7)=4{,}2\) aussi). Sur \([3;7]\), l'arche est à au moins 4,2 m (la parabole monte jusqu'à \(x=5\) puis redescend). Comme \(4{,}2&gt;4\), <b>le camion passe</b> (avec 20 cm de marge aux coins).</li>
</ol>`},
        { titre: "Exercice 4 — Droites tangentes à un cercle", points: 5,
          enonce: R`Soit \(\mathcal C\) le cercle d'équation \(x^2+y^2=8\) et, pour tout réel \(m\), la droite \(d_m\) d'équation \(y=x+m\).
<ol><li>Donne le centre et le rayon de \(\mathcal C\).</li><li>Montre que les abscisses des points communs à \(\mathcal C\) et \(d_m\) sont les solutions de \(2x^2+2mx+m^2-8=0\).</li><li>Détermine les valeurs de \(m\) pour lesquelles \(d_m\) est tangente à \(\mathcal C\).</li><li>Pour \(m=4\), donne le point de contact \(T\) et vérifie que \((OT)\perp d_4\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(x^2+y^2=8\iff(x-0)^2+(y-0)^2=(2\sqrt2)^2\) : centre <b>\(O(0;0)\)</b>, rayon <b>\(2\sqrt2\)</b>.</li>
<li>(1,5 pt) \(M(x;y)\) est commun aux deux si \(y=x+m\) et \(x^2+y^2=8\), donc \(x^2+(x+m)^2=8\iff x^2+x^2+2mx+m^2-8=0\iff2x^2+2mx+m^2-8=0\).</li>
<li>(2 pts) \(d_m\) est tangente à \(\mathcal C\) quand il y a un seul point commun, c'est-à-dire \(\Delta=0\). \(\Delta=(2m)^2-4\times2\times(m^2-8)=4m^2-8m^2+64=64-4m^2\). \(\Delta=0\iff m^2=16\iff\)<b>\(m=4\) ou \(m=-4\)</b>.</li>
<li>(0,5 pt) Pour \(m=4\), la racine double est \(x=-\frac{2m}{2\times2}=-2\), puis \(y=-2+4=2\) : <b>\(T(-2;2)\)</b>. \(\overrightarrow{OT}\begin{pmatrix}-2\\2\end{pmatrix}\) et un vecteur directeur de \(d_4\) est \(\begin{pmatrix}1\\1\end{pmatrix}\) : produit scalaire \(-2+2=0\) ✓, le rayon \([OT]\) est bien perpendiculaire à la tangente.</li>
</ol>`}
      ]},
    { titre: "DS n°5 — Vrai/faux, triangle et ensembles de points", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 4,
          enonce: R`Pour chaque affirmation, dis si elle est vraie ou fausse, en justifiant. Une réponse non justifiée ne rapporte aucun point.
<ol><li>La droite d'équation \(4x-6y+1=0\) admet \(\vec u\begin{pmatrix}3\\2\end{pmatrix}\) pour vecteur directeur.</li><li>Les droites \(d_1 : x+2y-3=0\) et \(d_2 : 4x-2y+1=0\) sont perpendiculaires.</li><li>L'ensemble des points \(M(x;y)\) tels que \(x^2+y^2+2x-4y+6=0\) est un cercle.</li><li>La parabole d'équation \(y=3x^2+12x+7\) a pour sommet \(S(2;43)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <b>Vrai.</b> Un vecteur directeur est \(\begin{pmatrix}-b\\a\end{pmatrix}=\begin{pmatrix}6\\4\end{pmatrix}=2\begin{pmatrix}3\\2\end{pmatrix}\). Autre justification : \(\vec u\cdot\vec n=3\times4+2\times(-6)=0\).</li>
<li>(1 pt) <b>Vrai.</b> Vecteurs normaux \(\begin{pmatrix}1\\2\end{pmatrix}\) et \(\begin{pmatrix}4\\-2\end{pmatrix}\) : produit scalaire \(4-4=0\).</li>
<li>(1 pt) <b>Faux.</b> \((x+1)^2-1+(y-2)^2-4+6=0\iff(x+1)^2+(y-2)^2=-1\). Une somme de carrés ne peut pas valoir \(-1\) : l'ensemble est <b>vide</b>.</li>
<li>(1 pt) <b>Faux.</b> \(\alpha=-\frac{12}{2\times3}=-2\) et \(\beta=3\times4-24+7=-5\) : le sommet est \(S(-2;-5)\). (Piège de signe sur \(-\frac{b}{2a}\).)</li>
</ol>`},
        { titre: "Exercice 2 — Hauteur et aire d'un triangle", points: 6,
          enonce: R`On donne les points \(A(-1;2)\), \(B(5;0)\) et \(C(3;6)\).
<ol><li>Détermine une équation cartésienne de la droite \((AB)\).</li><li>Détermine une équation de la hauteur \(h\) du triangle \(ABC\) issue de \(C\).</li><li>Déduis-en les coordonnées du pied \(H\) de cette hauteur.</li><li>Calcule \(CH\) et \(AB\) (valeurs exactes), puis l'aire du triangle \(ABC\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\overrightarrow{AB}\begin{pmatrix}6\\-2\end{pmatrix}\), ou \(\begin{pmatrix}3\\-1\end{pmatrix}\), est directeur, donc \(\vec n\begin{pmatrix}1\\3\end{pmatrix}\) est normal. \((AB) : x+3y+c=0\) ; avec \(A\) : \(-1+6+c=0\), \(c=-5\). <b>\((AB) : x+3y-5=0\)</b> (avec \(B\) : \(5+0-5=0\) ✓).</li>
<li>(1,5 pt) \(h\) est perpendiculaire à \((AB)\) : \(\begin{pmatrix}3\\-1\end{pmatrix}\) lui est normal. \(h : 3x-y+c=0\) ; avec \(C\) : \(9-6+c=0\), \(c=-3\). <b>\(h : 3x-y-3=0\)</b>.</li>
<li>(1,5 pt) De \(h\) : \(y=3x-3\). Dans \((AB)\) : \(x+9x-9-5=0\), \(x=\frac{14}{10}=\frac75\), puis \(y=\frac{21}{5}-3=\frac65\). <b>\(H\left(\frac75;\frac65\right)\)</b>. Vérification : \(\frac75+\frac{18}{5}-5=0\) ✓.</li>
<li>(1,5 pt) \(CH^2=\left(3-\frac75\right)^2+\left(6-\frac65\right)^2=\frac{64}{25}+\frac{576}{25}=\frac{640}{25}\), donc \(CH=\frac{\sqrt{640}}{5}=\frac{8\sqrt{10}}{5}\). \(AB=\sqrt{36+4}=\sqrt{40}=2\sqrt{10}\).<br>Aire \(=\frac{AB\times CH}{2}=\frac12\times2\sqrt{10}\times\frac{8\sqrt{10}}{5}=\frac{8\times10}{5}=\)<b>\(16\)</b> unités d'aire.</li>
</ol>`},
        { titre: "Exercice 3 — Un point deux fois plus loin", points: 5,
          enonce: R`On donne \(A(0;0)\) et \(B(3;0)\). On cherche l'ensemble \(\mathcal E\) des points \(M(x;y)\) tels que \(MA=2MB\).
<ol><li>Justifie que \(MA=2MB\iff MA^2=4MB^2\).</li><li>Montre que \(M\in\mathcal E\iff x^2+y^2-8x+12=0\).</li><li>Déduis-en la nature de \(\mathcal E\) et ses éléments caractéristiques.</li><li>Vérifie le résultat avec les deux points de \(\mathcal E\) situés sur l'axe des abscisses.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(MA\) et \(2MB\) sont des nombres positifs ; or deux nombres positifs sont égaux si et seulement si leurs carrés sont égaux. Donc \(MA=2MB\iff MA^2=(2MB)^2=4MB^2\).</li>
<li>(2 pts) \(MA^2=x^2+y^2\) et \(MB^2=(x-3)^2+y^2=x^2-6x+9+y^2\). Donc \(MA^2=4MB^2\iff x^2+y^2=4x^2-24x+36+4y^2\iff0=3x^2+3y^2-24x+36\iff x^2+y^2-8x+12=0\) (en divisant par 3).</li>
<li>(1,5 pt) \((x-4)^2-16+y^2+12=0\iff(x-4)^2+y^2=4\). <b>\(\mathcal E\) est le cercle de centre \((4;0)\) et de rayon \(2\)</b>.</li>
<li>(0,5 pt) Sur l'axe des abscisses : \((2;0)\) et \((6;0)\). Pour \((2;0)\) : \(MA=2\), \(MB=1\) ✓. Pour \((6;0)\) : \(MA=6\), \(MB=3\) ✓.</li>
</ol>`},
        { titre: "Exercice 4 — Une famille de droites et une parabole", points: 5,
          enonce: R`Soit \(\mathcal P : y=x^2-2x+3\) et, pour tout réel \(m\), la droite \(d_m : y=2x+m\).
<ol><li>Détermine le sommet et l'axe de symétrie de \(\mathcal P\).</li><li>Pour \(m=0\), détermine les points d'intersection de \(\mathcal P\) et \(d_0\).</li><li>Discute, selon les valeurs de \(m\), le nombre de points d'intersection de \(\mathcal P\) et \(d_m\). Donne le point commun dans le cas où il est unique.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\alpha=-\frac{-2}{2}=1\), \(\beta=1-2+3=2\). <b>Sommet \(S(1;2)\)</b>, <b>axe \(x=1\)</b>.</li>
<li>(1,5 pt) \(x^2-2x+3=2x\iff x^2-4x+3=0\). \(\Delta=16-12=4\), \(x_1=1\), \(x_2=3\). Points <b>\((1;2)\) et \((3;6)\)</b> (vérification : \(9-6+3=6\) ✓).</li>
<li>(2 pts) \(x^2-2x+3=2x+m\iff x^2-4x+3-m=0\), de discriminant \(\Delta=16-4(3-m)=4+4m\).
<ul><li>Si \(m&gt;-1\) : \(\Delta&gt;0\), <b>deux points</b> d'intersection.</li><li>Si \(m=-1\) : \(\Delta=0\), <b>un seul point</b> : \(x=\frac42=2\), \(y=2\times2-1=3\), soit \((2;3)\) (vérification : \(4-4+3=3\) ✓). La droite est tangente à la parabole.</li><li>Si \(m&lt;-1\) : \(\Delta&lt;0\), <b>aucun point</b>.</li></ul></li>
</ol>`}
      ]},
    { titre: "DS n°6 — Cercles, tangentes et distances", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Cercle, sécante et carré", points: 6,
          enonce: R`Soit \(\mathcal C\) l'ensemble des points \(M(x;y)\) tels que \(x^2+y^2-4x+2y-20=0\) et \(d\) la droite d'équation \(x+y-6=0\).
<ol><li>Montre que \(\mathcal C\) est un cercle de centre \(\Omega\) et de rayon \(r\) à préciser.</li><li>Détermine les coordonnées des points d'intersection \(A\) et \(B\) de \(\mathcal C\) et \(d\) (avec \(x_A&lt;x_B\)).</li><li>Détermine une équation des tangentes à \(\mathcal C\) en \(A\) et en \(B\), puis leur point d'intersection \(T\).</li><li>Quelle est la nature du quadrilatère \(\Omega ATB\) ? Justifie.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \((x-2)^2-4+(y+1)^2-1-20=0\iff(x-2)^2+(y+1)^2=25\). <b>Cercle de centre \(\Omega(2;-1)\) et de rayon \(5\)</b>.</li>
<li>(2 pts) De \(d\) : \(y=6-x\). On remplace : \(x^2+(6-x)^2-4x+2(6-x)-20=0\iff2x^2-18x+28=0\iff x^2-9x+14=0\). \(\Delta=81-56=25\), \(x=\frac{9-5}{2}=2\) ou \(x=\frac{9+5}{2}=7\). <b>\(A(2;4)\)</b> et <b>\(B(7;-1)\)</b>. Vérification : \(0^2+5^2=25\) ✓ et \(5^2+0^2=25\) ✓.</li>
<li>(1,5 pt) Tangente en \(A\) : vecteur normal \(\overrightarrow{\Omega A}\begin{pmatrix}0\\5\end{pmatrix}\), ou \(\begin{pmatrix}0\\1\end{pmatrix}\) : \(y+c=0\) avec \(4+c=0\), d'où <b>\(y=4\)</b>.<br>Tangente en \(B\) : vecteur normal \(\overrightarrow{\Omega B}\begin{pmatrix}5\\0\end{pmatrix}\), ou \(\begin{pmatrix}1\\0\end{pmatrix}\) : <b>\(x=7\)</b>.<br>Intersection : <b>\(T(7;4)\)</b>.</li>
<li>(1 pt) \(\overrightarrow{\Omega A}\begin{pmatrix}0\\5\end{pmatrix}=\overrightarrow{BT}\begin{pmatrix}0\\5\end{pmatrix}\) : \(\Omega ATB\) est un parallélogramme. De plus \(\overrightarrow{\Omega A}\cdot\overrightarrow{\Omega B}=0\) (angle droit) et \(\Omega A=\Omega B=5\) : c'est un <b>carré</b> de côté 5.</li>
</ol>`},
        { titre: "Exercice 2 — Deux cercles sécants", points: 5,
          enonce: R`On considère les cercles \(\mathcal C_1 : x^2+y^2-2x-2y-8=0\) et \(\mathcal C_2 : x^2+y^2-10x-6y+24=0\).
<ol><li>Détermine le centre et le rayon de chacun des deux cercles.</li><li>Montre que tout point commun aux deux cercles appartient à la droite \(\delta : 2x+y-8=0\).</li><li>Déduis-en les coordonnées des points d'intersection des deux cercles.</li><li>Vérifie que \(\delta\) est perpendiculaire à la droite \((\Omega_1\Omega_2)\) joignant les centres.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\mathcal C_1 : (x-1)^2-1+(y-1)^2-1-8=0\iff(x-1)^2+(y-1)^2=10\) : centre <b>\(\Omega_1(1;1)\)</b>, rayon <b>\(\sqrt{10}\)</b>.<br>
\(\mathcal C_2 : (x-5)^2-25+(y-3)^2-9+24=0\iff(x-5)^2+(y-3)^2=10\) : centre <b>\(\Omega_2(5;3)\)</b>, rayon <b>\(\sqrt{10}\)</b>.</li>
<li>(1,5 pt) Un point commun vérifie les deux équations, donc leur différence : \((x^2+y^2-2x-2y-8)-(x^2+y^2-10x-6y+24)=0\iff8x+4y-32=0\iff2x+y-8=0\).</li>
<li>(1,5 pt) Avec \(y=8-2x\) dans \(\mathcal C_1\) : \(x^2+(8-2x)^2-2x-2(8-2x)-8=0\iff5x^2-30x+40=0\iff x^2-6x+8=0\). \(\Delta=4\), \(x=2\) ou \(x=4\). Points <b>\((2;4)\) et \((4;0)\)</b>. Vérification dans \(\mathcal C_2\) : \(9+1=10\) ✓ et \(1+9=10\) ✓.</li>
<li>(0,5 pt) \(\overrightarrow{\Omega_1\Omega_2}\begin{pmatrix}4\\2\end{pmatrix}=2\begin{pmatrix}2\\1\end{pmatrix}\) est colinéaire au vecteur normal \(\begin{pmatrix}2\\1\end{pmatrix}\) de \(\delta\) : donc \(\delta\perp(\Omega_1\Omega_2)\) ✓.</li>
</ol>`},
        { titre: "Exercice 3 — Cercle de diamètre donné", points: 4,
          enonce: R`On donne \(A(-1;-2)\) et \(B(5;2)\). Soit \(\mathcal C\) le cercle de diamètre \([AB]\).
<ol><li>En utilisant \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\), montre que \(\mathcal C\) a pour équation \(x^2+y^2-4x-9=0\).</li><li>Déduis-en son centre et son rayon, et vérifie la cohérence avec \(A\) et \(B\).</li><li>Détermine les points \(E\) et \(F\) de \(\mathcal C\) situés sur l'axe des ordonnées (\(y_E&gt;0\)). Quelle est la nature du triangle \(ABE\) ?</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(\overrightarrow{MA}\begin{pmatrix}-1-x\\-2-y\end{pmatrix}\), \(\overrightarrow{MB}\begin{pmatrix}5-x\\2-y\end{pmatrix}\). \(\overrightarrow{MA}\cdot\overrightarrow{MB}=(-1-x)(5-x)+(-2-y)(2-y)=(x+1)(x-5)+(y+2)(y-2)=x^2-4x-5+y^2-4\). Donc \(M\in\mathcal C\iff x^2+y^2-4x-9=0\).</li>
<li>(1 pt) \((x-2)^2-4+y^2-9=0\iff(x-2)^2+y^2=13\) : centre <b>\((2;0)\)</b>, rayon <b>\(\sqrt{13}\)</b>. Cohérence : \((2;0)\) est bien le milieu \(\left(\frac{-1+5}{2};\frac{-2+2}{2}\right)\) et \(\frac{AB}{2}=\frac{\sqrt{36+16}}{2}=\frac{\sqrt{52}}{2}=\sqrt{13}\) ✓.</li>
<li>(1 pt) \(x=0\) : \(y^2-9=0\), \(y=3\) ou \(y=-3\). <b>\(E(0;3)\)</b>, <b>\(F(0;-3)\)</b>. \(E\) est sur le cercle de diamètre \([AB]\), donc <b>\(ABE\) est rectangle en \(E\)</b> (vérification : \(\overrightarrow{EA}\begin{pmatrix}-1\\-5\end{pmatrix}\cdot\overrightarrow{EB}\begin{pmatrix}5\\-1\end{pmatrix}=-5+5=0\) ✓).</li>
</ol>`},
        { titre: "Exercice 4 — Cercle tangent à une droite", points: 5,
          enonce: R`Soit \(d\) la droite d'équation \(3x+4y-12=0\) et \(\Omega(7;9)\).
<ol><li>Détermine une équation de la droite \(\Delta\) perpendiculaire à \(d\) passant par \(\Omega\).</li><li>Détermine les coordonnées du projeté orthogonal \(H\) de \(\Omega\) sur \(d\).</li><li>Calcule la distance de \(\Omega\) à \(d\).</li><li>Donne une équation du cercle de centre \(\Omega\) tangent à \(d\), et précise le point de contact.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Un vecteur directeur de \(d\) est \(\begin{pmatrix}-4\\3\end{pmatrix}\), ou \(\begin{pmatrix}4\\-3\end{pmatrix}\) : il est normal à \(\Delta\). \(\Delta : 4x-3y+c=0\), avec \(\Omega\) : \(28-27+c=0\), \(c=-1\). <b>\(\Delta : 4x-3y-1=0\)</b>.</li>
<li>(1,5 pt) On résout \(\begin{cases}3x+4y=12\\4x-3y=1\end{cases}\). En multipliant par 3 et 4 : \(9x+12y=36\) et \(16x-12y=4\) ; en additionnant, \(25x=40\), \(x=\frac85\). Puis \(4y=12-\frac{24}{5}=\frac{36}{5}\), \(y=\frac95\). <b>\(H\left(\frac85;\frac95\right)\)</b>. Vérification dans \(\Delta\) : \(\frac{32}{5}-\frac{27}{5}-1=0\) ✓.</li>
<li>(1 pt) \(\Omega H^2=\left(7-\frac85\right)^2+\left(9-\frac95\right)^2=\left(\frac{27}{5}\right)^2+\left(\frac{36}{5}\right)^2=\frac{729+1296}{25}=\frac{2025}{25}=81\). <b>\(\Omega H=9\)</b>.</li>
<li>(1 pt) Le cercle de centre \(\Omega\) tangent à \(d\) a pour rayon la distance de \(\Omega\) à \(d\) : <b>\((x-7)^2+(y-9)^2=81\)</b>. Il touche \(d\) au point <b>\(H\left(\frac85;\frac95\right)\)</b>.</li>
</ol>`}
      ]},
    { titre: "DS n°7 — Paraboles, trajectoires et configurations", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Parabole passant par trois points", points: 5,
          enonce: R`On cherche la parabole \(\mathcal P\) d'équation \(y=ax^2+bx+c\) passant par \(A(0;6)\), \(B(1;0)\) et \(C(2;-2)\).
<ol><li>Écris un système d'équations vérifié par \(a\), \(b\), \(c\) et résous-le.</li><li>Détermine le sommet et l'axe de symétrie de \(\mathcal P\). Que remarques-tu ?</li><li>Détermine les points d'intersection de \(\mathcal P\) avec l'axe des abscisses.</li><li>Donne, sans calcul de second degré, les coordonnées du symétrique \(A'\) de \(A\) par rapport à l'axe de \(\mathcal P\), puis vérifie que \(A'\in\mathcal P\).</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(A\in\mathcal P\) : \(c=6\). \(B\in\mathcal P\) : \(a+b+c=0\), soit \(a+b=-6\). \(C\in\mathcal P\) : \(4a+2b+c=-2\), soit \(4a+2b=-8\), ou \(2a+b=-4\). En soustrayant : \(a=-4-(-6)=2\), puis \(b=-6-2=-8\). <b>\(\mathcal P : y=2x^2-8x+6\)</b>.</li>
<li>(1 pt) \(\alpha=-\frac{-8}{4}=2\), \(\beta=8-16+6=-2\). <b>Sommet \(S(2;-2)\)</b>, axe <b>\(x=2\)</b>. On remarque que le sommet est le point \(C\).</li>
<li>(1 pt) \(2x^2-8x+6=0\iff x^2-4x+3=0\), \(\Delta=4\), \(x=1\) ou \(x=3\). Points <b>\((1;0)\) et \((3;0)\)</b>, symétriques par rapport à \(x=2\) ✓.</li>
<li>(1 pt) \(A'\) a la même ordonnée que \(A\) et une abscisse symétrique par rapport à 2 : \(x_{A'}=2\times2-0=4\). <b>\(A'(4;6)\)</b>. Vérification : \(2\times16-32+6=6\) ✓.</li>
</ol>`},
        { titre: "Exercice 2 — Le tir au basket", points: 5,
          enonce: R`Un joueur tire au panier. La trajectoire du ballon est modélisée par la parabole d'équation \(y=-0{,}05x^2+0{,}9x+2\), où \(x\) est la distance horizontale au joueur et \(y\) la hauteur, en mètres.
<ol><li>Détermine la hauteur maximale atteinte par le ballon et à quelle distance du joueur.</li><li>Un défenseur situé à 2 m du joueur saute et atteint 3,20 m avec les mains. Le ballon passe-t-il au-dessus ?</li><li>Si personne ne touche le ballon, à quelle distance du joueur retombe-t-il au sol ?</li><li>Le panier est à 3,05 m de haut. À quelles distances du joueur le ballon est-il à cette hauteur ? (Arrondir au cm.)</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(a=-0{,}05&lt;0\) : la parabole est tournée vers le bas, le maximum est atteint au sommet. \(\alpha=-\frac{0{,}9}{2\times(-0{,}05)}=9\) et \(\beta=-0{,}05\times81+0{,}9\times9+2=-4{,}05+8{,}1+2=6{,}05\). Hauteur maximale <b>6,05 m</b>, à <b>9 m</b> du joueur.</li>
<li>(1 pt) \(y(2)=-0{,}2+1{,}8+2=3{,}6\) m et \(3{,}6&gt;3{,}2\) : <b>le ballon passe</b> au-dessus des mains du défenseur.</li>
<li>(1 pt) \(-0{,}05x^2+0{,}9x+2=0\iff x^2-18x-40=0\) (en multipliant par \(-20\)). \(\Delta=324+160=484=22^2\), \(x=\frac{18-22}{2}=-2\) (exclu, \(x\geq0\)) ou \(x=\frac{18+22}{2}=20\). Le ballon retombe à <b>20 m</b>.</li>
<li>(1,5 pt) \(-0{,}05x^2+0{,}9x+2=3{,}05\iff x^2-18x+21=0\). \(\Delta=324-84=240\), \(x=\frac{18\pm\sqrt{240}}{2}=9\pm\sqrt{60}\). Soit <b>\(x\approx1{,}25\) m</b> (en montant) et <b>\(x\approx16{,}75\) m</b> (en descendant). Pour marquer, le panier doit donc être à environ 16,75 m du joueur.</li>
</ol>`},
        { titre: "Exercice 3 — Un cercle inscrit dans un carré", points: 6,
          enonce: R`\(OABC\) est un carré de côté 4. On se place dans le repère orthonormé où \(O(0;0)\), \(A(4;0)\), \(B(4;4)\), \(C(0;4)\). \(\mathcal C\) est le cercle inscrit dans le carré (tangent aux quatre côtés) et \(E\) le point de \([AB]\) tel que \(AE=1\).
<ol><li>Donne le centre \(I\), le rayon et une équation de \(\mathcal C\), ainsi que les coordonnées de \(E\).</li><li>Détermine une équation cartésienne de la droite \((CE)\).</li><li>Détermine les coordonnées du projeté orthogonal \(H\) de \(I\) sur \((CE)\).</li><li>Calcule \(IH\). Déduis-en que \((CE)\) coupe \(\mathcal C\) en deux points \(M\) et \(N\), puis calcule la longueur \(MN\) (valeur exacte et arrondi au centième).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Le centre est le centre du carré : <b>\(I(2;2)\)</b> ; le rayon est la moitié du côté : <b>\(2\)</b>. <b>\(\mathcal C : (x-2)^2+(y-2)^2=4\)</b>. \(E\) est sur \([AB]\) (abscisse 4) à 1 de \(A\) : <b>\(E(4;1)\)</b>.</li>
<li>(1,5 pt) \(\overrightarrow{CE}\begin{pmatrix}4\\-3\end{pmatrix}\) est directeur, donc \(\vec n\begin{pmatrix}3\\4\end{pmatrix}\) est normal. \(3x+4y+c=0\), avec \(C\) : \(16+c=0\). <b>\((CE) : 3x+4y-16=0\)</b> (avec \(E\) : \(12+4-16=0\) ✓).</li>
<li>(2 pts) Perpendiculaire à \((CE)\) passant par \(I\) : vecteur normal \(\begin{pmatrix}4\\-3\end{pmatrix}\), \(4x-3y+c=0\), avec \(I\) : \(8-6+c=0\), \(c=-2\). On résout \(\begin{cases}3x+4y=16\\4x-3y=2\end{cases}\) : \(9x+12y=48\) et \(16x-12y=8\), d'où \(25x=56\), \(x=\frac{56}{25}\), puis \(4y=16-\frac{168}{25}=\frac{232}{25}\), \(y=\frac{58}{25}\). <b>\(H\left(\frac{56}{25};\frac{58}{25}\right)\)</b>, soit \(H(2{,}24;2{,}32)\).</li>
<li>(1,5 pt) \(IH^2=\left(\frac{6}{25}\right)^2+\left(\frac{8}{25}\right)^2=\frac{100}{625}\), donc \(IH=\frac{10}{25}=\)<b>\(\frac25\)</b>. Comme \(\frac25&lt;2\) (le rayon), la droite est à une distance du centre inférieure au rayon : <b>elle coupe \(\mathcal C\) en deux points</b>.<br>
\(H\) est le milieu de la corde \([MN]\) et le triangle \(IHM\) est rectangle en \(H\) : \(HM^2=IM^2-IH^2=4-\frac{4}{25}=\frac{96}{25}\), donc \(HM=\frac{4\sqrt6}{5}\) et <b>\(MN=\frac{8\sqrt6}{5}\approx3{,}92\)</b>.</li>
</ol>`},
        { titre: "Exercice 4 — Le carrefour", points: 4,
          enonce: R`Dans un repère orthonormé d'unité 1 km, une route rectiligne suit la droite \(d_1 : 2x-3y+6=0\). Une maison est située en \(P(4;-1)\). On veut construire un chemin rectiligne le plus court possible reliant la maison à la route.
<ol><li>Donne un vecteur normal et un vecteur directeur de \(d_1\).</li><li>Détermine une équation de la droite \(d_2\) du chemin.</li><li>Détermine les coordonnées du carrefour \(K\) entre le chemin et la route.</li><li>Calcule la longueur du chemin, au mètre près.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) Vecteur normal \(\vec n\begin{pmatrix}2\\-3\end{pmatrix}\), vecteur directeur \(\vec u\begin{pmatrix}3\\2\end{pmatrix}\) (forme \((-b;a)\) ; \(\vec u\cdot\vec n=6-6=0\) ✓).</li>
<li>(1 pt) Le chemin le plus court est perpendiculaire à la route : \(\vec u\begin{pmatrix}3\\2\end{pmatrix}\) est normal à \(d_2\). \(d_2 : 3x+2y+c=0\), avec \(P\) : \(12-2+c=0\), \(c=-10\). <b>\(d_2 : 3x+2y-10=0\)</b>.</li>
<li>(1 pt) On résout \(\begin{cases}2x-3y=-6\\3x+2y=10\end{cases}\) : \(4x-6y=-12\) et \(9x+6y=30\), d'où \(13x=18\), \(x=\frac{18}{13}\), puis \(2y=10-\frac{54}{13}=\frac{76}{13}\), \(y=\frac{38}{13}\). <b>\(K\left(\frac{18}{13};\frac{38}{13}\right)\approx(1{,}385;2{,}923)\)</b>.</li>
<li>(1 pt) \(PK^2=\left(\frac{18}{13}-4\right)^2+\left(\frac{38}{13}+1\right)^2=\left(\frac{34}{13}\right)^2+\left(\frac{51}{13}\right)^2=\frac{1156+2601}{169}=\frac{3757}{169}=\frac{289}{13}\). \(PK=\frac{17}{\sqrt{13}}\approx4{,}715\) : le chemin mesure <b>environ 4 715 m</b>.</li>
</ol>`}
      ]},
    { titre: "DS n°8 — Cercle circonscrit, tangente et hauteur", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Cercle circonscrit à un triangle", points: 6,
          enonce: R`On donne \(A(-2;4)\), \(B(5;5)\) et \(C(6;-2)\).
<ol><li>Détermine une équation de la médiatrice \(m_1\) de \([AB]\).</li><li>Vérifie que la médiatrice \(m_2\) de \([BC]\) a pour équation \(x-7y+5=0\).</li><li>Déduis-en le centre \(\Omega\) du cercle circonscrit au triangle \(ABC\), son rayon et une équation de ce cercle.</li><li>Démontre que \(ABC\) est rectangle en \(B\). Comment pouvait-on alors trouver \(\Omega\) directement ?</li></ol>`,
          correction: R`<ol>
<li>(2 pts) Milieu de \([AB]\) : \(\left(\frac32;\frac92\right)\). Vecteur normal \(\overrightarrow{AB}\begin{pmatrix}7\\1\end{pmatrix}\) : \(m_1 : 7x+y+c=0\), avec le milieu : \(\frac{21}{2}+\frac92+c=0\), \(c=-15\). <b>\(m_1 : 7x+y-15=0\)</b>.</li>
<li>(1 pt) Milieu de \([BC]\) : \(\left(\frac{11}{2};\frac32\right)\) et \(\frac{11}{2}-\frac{21}{2}+5=0\) ✓. Vecteur normal de \(x-7y+5=0\) : \(\begin{pmatrix}1\\-7\end{pmatrix}=\overrightarrow{BC}\) ✓. C'est bien la médiatrice de \([BC]\).</li>
<li>(1,5 pt) De \(m_2\) : \(x=7y-5\). Dans \(m_1\) : \(49y-35+y-15=0\), \(y=1\), \(x=2\). <b>\(\Omega(2;1)\)</b>. Rayon : \(\Omega A=\sqrt{(-4)^2+3^2}=5\). Cercle : <b>\((x-2)^2+(y-1)^2=25\)</b> (vérification : \(\Omega B^2=9+16=25\), \(\Omega C^2=16+9=25\) ✓).</li>
<li>(1,5 pt) \(\overrightarrow{BA}\begin{pmatrix}-7\\-1\end{pmatrix}\cdot\overrightarrow{BC}\begin{pmatrix}1\\-7\end{pmatrix}=-7+7=0\) : <b>\(ABC\) est rectangle en \(B\)</b>. Le centre du cercle circonscrit à un triangle rectangle est le milieu de l'hypoténuse : \(\Omega\) est le milieu de \([AC]\), \(\left(\frac{-2+6}{2};\frac{4-2}{2}\right)=(2;1)\) ✓.</li>
</ol>`},
        { titre: "Exercice 2 — Tangente et théorème de Pythagore", points: 5,
          enonce: R`Soit \(\mathcal C : x^2+y^2+6x-2y-15=0\) et \(A(0;5)\).
<ol><li>Montre que \(\mathcal C\) est un cercle dont tu préciseras le centre \(\Omega\) et le rayon.</li><li>Vérifie que \(A\in\mathcal C\).</li><li>Détermine une équation de la tangente \(T\) à \(\mathcal C\) en \(A\).</li><li>\(T\) coupe l'axe des abscisses en \(K\). Calcule les coordonnées de \(K\), puis \(KA^2\) et \(K\Omega^2\), et vérifie la relation de Pythagore dans le triangle \(\Omega AK\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \((x+3)^2-9+(y-1)^2-1-15=0\iff(x+3)^2+(y-1)^2=25\). <b>Cercle de centre \(\Omega(-3;1)\) et de rayon \(5\)</b>.</li>
<li>(0,5 pt) \((0+3)^2+(5-1)^2=9+16=25\) ✓.</li>
<li>(1,5 pt) Vecteur normal \(\overrightarrow{\Omega A}\begin{pmatrix}3\\4\end{pmatrix}\) : \(3x+4y+c=0\), avec \(A\) : \(20+c=0\). <b>\(T : 3x+4y-20=0\)</b>.</li>
<li>(1,5 pt) \(y=0\) : \(3x=20\), <b>\(K\left(\frac{20}{3};0\right)\)</b>. \(KA^2=\left(\frac{20}{3}\right)^2+5^2=\frac{400}{9}+\frac{225}{9}=\frac{625}{9}\) (donc \(KA=\frac{25}{3}\)). \(K\Omega^2=\left(\frac{20}{3}+3\right)^2+1^2=\frac{841}{9}+\frac99=\frac{850}{9}\).<br>
\(\Omega A^2+KA^2=25+\frac{625}{9}=\frac{225+625}{9}=\frac{850}{9}=K\Omega^2\) ✓ : le triangle \(\Omega AK\) est rectangle en \(A\), ce qui confirme que la tangente est perpendiculaire au rayon \([\Omega A]\).</li>
</ol>`},
        { titre: "Exercice 3 — Parabole et droite", points: 5,
          enonce: R`Soit \(\mathcal P : y=\frac12x^2-x-4\) et \(d : x-2y-4=0\).
<ol><li>Écris l'équation de \(\mathcal P\) sous forme canonique et donne son sommet.</li><li>Détermine les points d'intersection de \(\mathcal P\) avec les axes du repère.</li><li>Détermine les points d'intersection de \(\mathcal P\) et \(d\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\alpha=-\frac{-1}{2\times\frac12}=1\) et \(\beta=\frac12-1-4=-\frac92\). <b>\(y=\frac12(x-1)^2-\frac92\)</b> (vérification : \(\frac12(x^2-2x+1)-\frac92=\frac12x^2-x-4\) ✓). Sommet <b>\(S\left(1;-\frac92\right)\)</b>.</li>
<li>(1,5 pt) Axe des ordonnées (\(x=0\)) : \(y=-4\), point <b>\((0;-4)\)</b>. Axe des abscisses : \(\frac12x^2-x-4=0\iff x^2-2x-8=0\), \(\Delta=4+32=36\), \(x=\frac{2-6}{2}=-2\) ou \(x=\frac{2+6}{2}=4\). Points <b>\((-2;0)\) et \((4;0)\)</b>.</li>
<li>(2 pts) \(d : y=\frac12x-2\). \(\frac12x^2-x-4=\frac12x-2\iff\frac12x^2-\frac32x-2=0\iff x^2-3x-4=0\). \(\Delta=9+16=25\), \(x=\frac{3-5}{2}=-1\) ou \(x=\frac{3+5}{2}=4\). Points <b>\(\left(-1;-\frac52\right)\) et \((4;0)\)</b>. Vérification : \(\frac12+1-4=-\frac52\) ✓ et \(-1+5-4=0\) ✓ (dans \(d\)).</li>
</ol>`},
        { titre: "Exercice 4 — Dans un triangle rectangle", points: 4,
          enonce: R`Dans un repère orthonormé, on considère \(A(0;0)\), \(B(6;0)\) et \(C(0;4)\). \(I\) est le milieu de \([BC]\).
<ol><li>Démontre que \(IA=IB=IC\).</li><li>Détermine une équation de la droite \((BC)\).</li><li>Détermine les coordonnées du pied \(H\) de la hauteur issue de \(A\) dans le triangle \(ABC\).</li><li>Calcule \(AH\) (valeur exacte).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(I(3;2)\). \(IA^2=9+4=13\), \(IB^2=(6-3)^2+(0-2)^2=13\), \(IC^2=(0-3)^2+(4-2)^2=13\). Donc <b>\(IA=IB=IC=\sqrt{13}\)</b> : \(I\) est le centre du cercle circonscrit.</li>
<li>(1 pt) \(\overrightarrow{BC}\begin{pmatrix}-6\\4\end{pmatrix}\), ou \(\begin{pmatrix}-3\\2\end{pmatrix}\), est directeur : \(\vec n\begin{pmatrix}2\\3\end{pmatrix}\) est normal. \(2x+3y+c=0\), avec \(B\) : \(12+c=0\). <b>\((BC) : 2x+3y-12=0\)</b>.</li>
<li>(1,5 pt) La hauteur issue de \(A\) a pour vecteur normal \(\begin{pmatrix}-3\\2\end{pmatrix}\), ou \(\begin{pmatrix}3\\-2\end{pmatrix}\) : \(3x-2y+c=0\), avec \(A\) : \(c=0\). On résout : \(y=\frac32x\), puis \(2x+\frac92x=12\), \(\frac{13}{2}x=12\), \(x=\frac{24}{13}\) et \(y=\frac{36}{13}\). <b>\(H\left(\frac{24}{13};\frac{36}{13}\right)\)</b>.</li>
<li>(0,5 pt) \(AH^2=\frac{576+1296}{169}=\frac{1872}{169}=\frac{144}{13}\), donc <b>\(AH=\frac{12}{\sqrt{13}}=\frac{12\sqrt{13}}{13}\)</b>. (Contrôle : \(AH=\frac{AB\times AC}{BC}=\frac{24}{\sqrt{52}}=\frac{12}{\sqrt{13}}\) ✓.)</li>
</ol>`}
      ]},
    { titre: "DS n°9 — Antenne, lieu de points et tunnel", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — La zone de couverture d'une antenne", points: 7,
          enonce: R`Dans un repère orthonormé d'unité 1 km, une antenne relais est installée en \(\Omega(3;2)\). Elle couvre tous les points situés à moins de 5 km. Une route rectiligne suit la droite \(d : x-y+4=0\).
<ol><li>Écris une équation développée du cercle \(\mathcal C\) qui délimite la zone couverte.</li><li>Un village est situé en \(V(6;-1)\). Est-il couvert ?</li><li>Détermine les points \(E\) et \(F\) où la route entre et sort de la zone couverte.</li><li>Quelle longueur de route est couverte (au mètre près) ?</li><li>Détermine le point \(H\) de la route le plus proche de l'antenne, et vérifie que c'est le milieu de \([EF]\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \((x-3)^2+(y-2)^2=25\iff x^2-6x+9+y^2-4y+4-25=0\iff\)<b>\(x^2+y^2-6x-4y-12=0\)</b>.</li>
<li>(1 pt) \(\Omega V^2=(6-3)^2+(-1-2)^2=9+9=18&lt;25\), donc \(\Omega V=\sqrt{18}\approx4{,}24&lt;5\) : <b>le village est couvert</b>.</li>
<li>(2 pts) Sur \(d\), \(y=x+4\) : \((x-3)^2+(x+2)^2=25\iff2x^2-2x+13=25\iff x^2-x-6=0\). \(\Delta=1+24=25\), \(x=\frac{1-5}{2}=-2\) ou \(x=\frac{1+5}{2}=3\). <b>\(E(-2;2)\)</b> et <b>\(F(3;7)\)</b>. Vérification : \(25+0=25\) ✓ et \(0+25=25\) ✓.</li>
<li>(1 pt) \(EF=\sqrt{5^2+5^2}=5\sqrt2\approx7{,}071\) : environ <b>7 071 m</b> de route couverte.</li>
<li>(2 pts) \(H\) est le projeté orthogonal de \(\Omega\) sur \(d\). Un vecteur directeur de \(d\) est \(\begin{pmatrix}1\\1\end{pmatrix}\), normal à la perpendiculaire : \(x+y+c=0\), avec \(\Omega\) : \(c=-5\). On résout \(x+y=5\) et \(y=x+4\) : \(2x+4=5\), \(x=\frac12\), \(y=\frac92\). <b>\(H\left(\frac12;\frac92\right)\)</b>. Milieu de \([EF]\) : \(\left(\frac{-2+3}{2};\frac{2+7}{2}\right)=\left(\frac12;\frac92\right)\) ✓ (le triangle \(\Omega EF\) est isocèle en \(\Omega\), la hauteur est aussi médiane). Distance minimale : \(\Omega H=\sqrt{\frac{25}{4}+\frac{25}{4}}=\frac{5\sqrt2}{2}\approx3{,}54\) km.</li>
</ol>`},
        { titre: "Exercice 2 — Un lieu de points", points: 6,
          enonce: R`On donne \(A(-1;2)\) et \(B(3;0)\). Pour un réel \(k\), on note \(\mathcal E_k\) l'ensemble des points \(M(x;y)\) tels que \(MA^2+MB^2=k\).
<ol><li>Montre que \(MA^2+MB^2=2x^2+2y^2-4x-4y+14\).</li><li>Détermine la nature et les éléments caractéristiques de \(\mathcal E_{24}\).</li><li>Montre que \(MA^2+MB^2=2\left[(x-1)^2+(y-1)^2\right]+10\) et discute, selon \(k\), la nature de \(\mathcal E_k\).</li><li>Que représente le point \(I(1;1)\) pour le segment \([AB]\) ? Interprète \(\mathcal E_{10}\).</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(MA^2=(x+1)^2+(y-2)^2=x^2+2x+1+y^2-4y+4\) et \(MB^2=(x-3)^2+y^2=x^2-6x+9+y^2\). En additionnant : \(MA^2+MB^2=2x^2+2y^2-4x-4y+14\).</li>
<li>(1,5 pt) \(2x^2+2y^2-4x-4y+14=24\iff x^2+y^2-2x-2y-5=0\iff(x-1)^2-1+(y-1)^2-1-5=0\iff(x-1)^2+(y-1)^2=7\). <b>\(\mathcal E_{24}\) est le cercle de centre \((1;1)\) et de rayon \(\sqrt7\)</b>.</li>
<li>(1,5 pt) \(2\left[(x-1)^2+(y-1)^2\right]+10=2(x^2-2x+1+y^2-2y+1)+10=2x^2+2y^2-4x-4y+14\) ✓. Ainsi \(M\in\mathcal E_k\iff(x-1)^2+(y-1)^2=\frac{k-10}{2}\).
<ul><li>Si \(k&gt;10\) : cercle de centre \((1;1)\) et de rayon \(\sqrt{\frac{k-10}{2}}\).</li><li>Si \(k=10\) : le seul point \((1;1)\).</li><li>Si \(k&lt;10\) : ensemble vide.</li></ul></li>
<li>(1 pt) \(I\left(\frac{-1+3}{2};\frac{2+0}{2}\right)\) : <b>\(I\) est le milieu de \([AB]\)</b>. \(\mathcal E_{10}=\{I\}\) : la somme \(MA^2+MB^2\) est minimale, égale à 10, quand \(M\) est le milieu de \([AB]\) (contrôle : \(IA^2=(1+1)^2+(1-2)^2=5\) et \(IB^2=(3-1)^2+(0-1)^2=5\), total \(10\) ✓).</li>
</ol>`},
        { titre: "Exercice 3 — Le camion et le tunnel", points: 7,
          enonce: R`L'entrée d'un tunnel est modélisée, dans un repère orthonormé d'unité 1 m, par la parabole d'équation \(y=-0{,}5x^2+3x\) pour \(0\leq x\leq6\) (le sol est l'axe des abscisses).
<ol><li>Détermine la hauteur maximale du tunnel et l'axe de symétrie de la parabole.</li><li>Quelle est la largeur du tunnel au niveau du sol ?</li><li>Un camion de 2,5 m de large et de 3,8 m de haut se présente, centré sur l'axe du tunnel. Calcule la hauteur du tunnel au niveau des bords du camion. Le camion peut-il passer ?</li><li>Détermine la largeur exacte du tunnel à la hauteur de 3,8 m, puis une valeur approchée au cm. Confirme la réponse précédente.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\alpha=-\frac{3}{2\times(-0{,}5)}=3\), \(\beta=-0{,}5\times9+9=4{,}5\). Hauteur maximale <b>4,5 m</b> (au centre), axe de symétrie <b>\(x=3\)</b>.</li>
<li>(1 pt) \(-0{,}5x^2+3x=0\iff x(-0{,}5x+3)=0\iff x=0\) ou \(x=6\). Largeur au sol : <b>6 m</b>.</li>
<li>(2 pts) Centré sur l'axe \(x=3\), le camion occupe les abscisses de \(3-1{,}25=1{,}75\) à \(3+1{,}25=4{,}25\). \(y(1{,}75)=-0{,}5\times3{,}0625+5{,}25=3{,}71875\) et, par symétrie, \(y(4{,}25)=3{,}71875\). Aux bords du camion, le tunnel ne fait qu'environ <b>3,72 m</b> \(&lt;3{,}8\) m : <b>le camion ne passe pas</b> (ses coins supérieurs touchent).</li>
<li>(2,5 pts) \(-0{,}5x^2+3x=3{,}8\iff x^2-6x+7{,}6=0\) (en multipliant par \(-2\)). \(\Delta=36-30{,}4=5{,}6\), \(x=\frac{6\pm\sqrt{5{,}6}}{2}=3\pm\frac{\sqrt{5{,}6}}{2}=3\pm\sqrt{1{,}4}\). La largeur à 3,8 m est \(2\sqrt{1{,}4}\approx\)<b>2,37 m</b>. Comme \(2{,}37&lt;2{,}5\), on confirme que le camion ne peut pas passer.</li>
</ol>`}
      ]},
    { titre: "DS n°10 — Synthèse : calculer et démontrer", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Droites parallèles et perpendiculaires", points: 5,
          enonce: R`Soit \(d\) la droite d'équation \(3x-y+10=0\) et \(A(2;-1)\).
<ol><li>Donne un vecteur normal et un vecteur directeur de \(d\).</li><li>Détermine une équation de la droite \(d'\) parallèle à \(d\) passant par \(A\).</li><li>Détermine une équation de la droite \(\delta\) perpendiculaire à \(d\) passant par l'origine \(O\).</li><li>Détermine le point d'intersection \(H\) de \(d\) et \(\delta\), puis la distance de \(O\) à \(d\).</li><li>\(\delta\) coupe \(d'\) en \(H'\). Calcule \(HH'\) : c'est la distance entre les deux droites parallèles.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(\vec n\begin{pmatrix}3\\-1\end{pmatrix}\) est normal, \(\vec u\begin{pmatrix}1\\3\end{pmatrix}\) est directeur (\(\vec u\cdot\vec n=3-3=0\) ✓).</li>
<li>(1 pt) \(d'\) a le même vecteur normal : \(3x-y+c=0\), avec \(A\) : \(6+1+c=0\), \(c=-7\). <b>\(d' : 3x-y-7=0\)</b>.</li>
<li>(1 pt) \(\vec u\begin{pmatrix}1\\3\end{pmatrix}\) est normal à \(\delta\) : \(x+3y+c=0\), avec \(O\) : \(c=0\). <b>\(\delta : x+3y=0\)</b>.</li>
<li>(1 pt) De \(\delta\) : \(x=-3y\). Dans \(d\) : \(-9y-y+10=0\), \(y=1\), \(x=-3\). <b>\(H(-3;1)\)</b>. \(OH=\sqrt{9+1}=\)<b>\(\sqrt{10}\)</b>.</li>
<li>(1 pt) Dans \(d'\) : \(-9y-y-7=0\), \(y=-\frac{7}{10}\), \(x=\frac{21}{10}\), donc \(H'\left(\frac{21}{10};-\frac{7}{10}\right)\). \(HH'^2=\left(\frac{51}{10}\right)^2+\left(\frac{17}{10}\right)^2=\frac{2601+289}{100}=\frac{2890}{100}=\frac{289}{10}\), donc <b>\(HH'=\frac{17}{\sqrt{10}}=\frac{17\sqrt{10}}{10}\)</b>.</li>
</ol>`},
        { titre: "Exercice 2 — Une équation à paramètre", points: 5,
          enonce: R`Pour un réel \(k\), on note \(\mathcal E_k\) l'ensemble des points \(M(x;y)\) tels que \(x^2+y^2+2x-6y+k=0\).
<ol><li>Montre que \(M\in\mathcal E_k\iff(x+1)^2+(y-3)^2=10-k\).</li><li>Donne la nature de \(\mathcal E_k\) pour \(k=1\), \(k=10\) et \(k=14\).</li><li>Pour \(k=1\), détermine les points d'intersection de \(\mathcal E_1\) avec l'axe des abscisses. Interprète géométriquement le résultat.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(x^2+2x=(x+1)^2-1\) et \(y^2-6y=(y-3)^2-9\). L'équation devient \((x+1)^2-1+(y-3)^2-9+k=0\iff(x+1)^2+(y-3)^2=10-k\).</li>
<li>(1,5 pt) \(k=1\) : \((x+1)^2+(y-3)^2=9\), <b>cercle de centre \((-1;3)\) et de rayon 3</b>.<br>\(k=10\) : \((x+1)^2+(y-3)^2=0\), <b>un seul point \((-1;3)\)</b>.<br>\(k=14\) : \((x+1)^2+(y-3)^2=-4&lt;0\), <b>ensemble vide</b>.</li>
<li>(2 pts) \(y=0\) : \(x^2+2x+1=0\iff(x+1)^2=0\iff x=-1\). Un <b>seul point : \((-1;0)\)</b>. Le cercle \(\mathcal E_1\) a un unique point commun avec l'axe des abscisses : il est <b>tangent</b> à cet axe en \((-1;0)\). C'est cohérent : la distance du centre \((-1;3)\) à l'axe des abscisses vaut 3, égale au rayon.</li>
</ol>`},
        { titre: "Exercice 3 — Démonstration dans un carré", points: 5,
          enonce: R`\(ABCD\) est un carré de côté 4. \(E\) est le milieu de \([BC]\) et \(F\) le point de \([CD]\) tel que \(DF=3\). On se place dans le repère orthonormé d'origine \(A\) dans lequel \(B(4;0)\) et \(D(0;4)\).
<ol><li>Donne les coordonnées de \(C\), \(E\) et \(F\).</li><li>Démontre que le triangle \(AEF\) est rectangle en \(E\).</li><li>Déduis-en une équation du cercle \(\mathcal C\) passant par \(A\), \(E\) et \(F\).</li><li>Démontre que \(D\) appartient aussi à \(\mathcal C\). Pouvait-on le prévoir ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <b>\(C(4;4)\)</b>, \(E\) milieu de \([BC]\) : <b>\(E(4;2)\)</b>. \(F\) est sur \([CD]\) (ordonnée 4) à 3 de \(D\) : <b>\(F(3;4)\)</b>.</li>
<li>(1,5 pt) \(\overrightarrow{EA}\begin{pmatrix}-4\\-2\end{pmatrix}\), \(\overrightarrow{EF}\begin{pmatrix}-1\\2\end{pmatrix}\). \(\overrightarrow{EA}\cdot\overrightarrow{EF}=4-4=0\) : <b>\(AEF\) est rectangle en \(E\)</b>.</li>
<li>(1,5 pt) Le cercle circonscrit à un triangle rectangle a pour diamètre l'hypoténuse \([AF]\). Centre : milieu \(\left(\frac32;2\right)\) ; \(AF=\sqrt{9+16}=5\), rayon \(\frac52\). <b>\(\mathcal C : \left(x-\frac32\right)^2+(y-2)^2=\frac{25}{4}\)</b>. Vérification avec \(E\) : \(\left(\frac52\right)^2+0=\frac{25}{4}\) ✓.</li>
<li>(1 pt) \(\left(0-\frac32\right)^2+(4-2)^2=\frac94+\frac{16}{4}=\frac{25}{4}\) ✓ : \(D\in\mathcal C\). C'était prévisible : l'angle \(\widehat{ADF}\) est droit (\(F\) est sur \([CD]\) et \(ABCD\) est un carré), donc \(D\) est sur le cercle de diamètre \([AF]\).</li>
</ol>`},
        { titre: "Exercice 4 — Parabole et tangente", points: 5,
          enonce: R`Une parabole \(\mathcal P\) a pour sommet \(S(-1;4)\) et passe par le point \(B(1;0)\).
<ol><li>Détermine une équation de \(\mathcal P\) sous la forme \(y=a(x-\alpha)^2+\beta\), puis sous forme développée.</li><li>Détermine les points d'intersection de \(\mathcal P\) avec les axes du repère.</li><li>Montre que la droite \(d : y=-4x+4\) n'a qu'un seul point commun avec \(\mathcal P\).</li><li>Étudie la position relative de \(\mathcal P\) et \(d\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Le sommet est \((-1;4)\), donc \(y=a(x+1)^2+4\). Avec \(B\) : \(0=4a+4\), \(a=-1\). <b>\(y=-(x+1)^2+4=-x^2-2x+3\)</b>.</li>
<li>(1 pt) \(x=0\) : \(y=3\), point <b>\((0;3)\)</b>. \(y=0\) : \((x+1)^2=4\iff x+1=2\) ou \(x+1=-2\), soit <b>\((1;0)\) et \((-3;0)\)</b>.</li>
<li>(1,5 pt) \(-x^2-2x+3=-4x+4\iff-x^2+2x-1=0\iff-(x-1)^2=0\iff x=1\). Un <b>seul point commun : \(B(1;0)\)</b> (\(-4+4=0\) ✓). La droite \(d\) est tangente à \(\mathcal P\) en \(B\).</li>
<li>(1 pt) \((-x^2-2x+3)-(-4x+4)=-(x-1)^2\leq0\) pour tout \(x\) : <b>\(\mathcal P\) est en dessous de \(d\)</b>, et les deux se touchent uniquement en \(B\).</li>
</ol>`}
      ]}
  ]
});
})();
