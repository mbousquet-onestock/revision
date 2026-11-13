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
      ]}
  ]
});
})();
