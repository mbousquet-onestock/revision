(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 8,
  titre: "Calcul vectoriel – Produit scalaire",
  partie: "Géométrie",
  emoji: "📐",
  accroche: R`Comment calculer un angle sans rapporteur, prouver que deux droites sont perpendiculaires sans équerre, ou mesurer le « travail » d'une force qui tire une valise ? Avec une seule opération magique qui transforme deux vecteurs en un nombre : le produit scalaire. Bonus : tu vas enfin comprendre d'où vient le théorème de Pythagore « généralisé ».`,

  videos: [
    { titre: "Produit scalaire : définition avec le cosinus", recherche: "Yvan Monka produit scalaire définition norme cosinus", duree: "≈ 10 min", resume: R`La formule \(\vec u\cdot\vec v=\|\vec u\|\times\|\vec v\|\times\cos(\vec u,\vec v)\) et premiers calculs.` },
    { titre: "Produit scalaire et projection orthogonale", recherche: "Yvan Monka produit scalaire projection orthogonale", duree: "≈ 9 min", resume: R`Remplacer un vecteur par son projeté pour calculer sans angle, avec la règle des signes.` },
    { titre: "Produit scalaire avec les normes", recherche: "Yvan Monka produit scalaire avec les normes formule de polarisation", duree: "≈ 7 min", resume: R`Calculer \(\vec u\cdot\vec v\) quand on connaît seulement des longueurs.` },
    { titre: "Produit scalaire dans un repère orthonormé", recherche: "Yvan Monka produit scalaire coordonnées repère orthonormé xx'+yy'", duree: "≈ 8 min", resume: R`La formule \(xx'+yy'\) et le test d'orthogonalité.` },
    { titre: "Propriétés : bilinéarité et identités remarquables", recherche: "Yvan Monka produit scalaire propriétés bilinéarité identités remarquables", duree: "≈ 10 min", resume: R`Développer des produits scalaires comme des produits de nombres.` },
    { titre: "Le théorème d'Al-Kashi", recherche: "Yvan Monka théorème d'Al-Kashi démonstration", duree: "≈ 10 min", resume: R`La démonstration au programme et le calcul de longueurs et d'angles dans un triangle quelconque.` },
    { titre: "Théorème de la médiane et ensemble de points", recherche: "Yvan Monka théorème de la médiane ensemble de points MA.MB = 0", duree: "≈ 12 min", resume: R`La formule \(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{AB^2}{4}\) et le cercle de diamètre \([AB]\).` },
    { titre: "Calculer un angle avec le produit scalaire", recherche: "Yvan Monka calculer un angle avec le produit scalaire coordonnées", duree: "≈ 8 min", resume: R`Combiner deux expressions du produit scalaire pour obtenir un cosinus, puis l'angle.` }
  ],

  cours: [
    { titre: "1. Produit scalaire de deux vecteurs", html: R`
<div class="def"><b>Norme.</b> La norme d'un vecteur \(\vec u=\overrightarrow{AB}\) est sa longueur : \(\|\vec u\|=AB\). Dans un repère orthonormé, si \(\vec u(x\,;y)\), alors \(\|\vec u\|=\sqrt{x^2+y^2}\).</div>

<div class="def"><b>Définition (avec l'angle).</b> Soient \(\vec u\) et \(\vec v\) deux vecteurs non nuls. Le <b>produit scalaire</b> de \(\vec u\) et \(\vec v\) est le <b>nombre réel</b>
\[\vec u\cdot\vec v=\|\vec u\|\times\|\vec v\|\times\cos(\vec u,\vec v).\]
Si l'un des deux vecteurs est nul, \(\vec u\cdot\vec v=0\).<br>
Avec des points : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}\).</div>

<div class="ex"><b>Exemple.</b> \(AB=4\), \(AC=3\) et \(\widehat{BAC}=\frac{\pi}{3}\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=4\times3\times\frac12=6\).<br>
Triangle équilatéral de côté \(2\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=2\times2\times\cos\frac{\pi}{3}=2\).</div>

<div class="prop"><b>Signe.</b> Le signe de \(\vec u\cdot\vec v\) est celui du cosinus : positif si l'angle est aigu, nul s'il est droit, négatif s'il est obtus.</div>

<div class="prop"><b>Avec la projection orthogonale.</b> Soient \(A\), \(B\), \(C\) trois points avec \(A\neq B\), et \(H\) le projeté orthogonal de \(C\) sur la droite \((AB)\). Alors
\[\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AH}=\begin{cases}AB\times AH & \text{si } \overrightarrow{AB} \text{ et } \overrightarrow{AH} \text{ sont de même sens}\\ -AB\times AH & \text{s'ils sont de sens contraires.}\end{cases}\]</div>

<svg viewBox="0 0 200 140" width="240" role="img" aria-label="Projection orthogonale H du point C sur la droite AB">
  <line x1="5" y1="120" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="120" x2="120" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="30" x2="120" y2="120" stroke="currentColor" stroke-dasharray="4 3"/>
  <polyline points="112,120 112,112 120,112" fill="none" stroke="currentColor"/>
  <circle cx="20" cy="120" r="3" fill="currentColor"/>
  <circle cx="170" cy="120" r="3" fill="currentColor"/>
  <circle cx="120" cy="30" r="3" fill="currentColor"/>
  <circle cx="120" cy="120" r="3" fill="currentColor"/>
  <text x="14" y="136" font-size="12" fill="currentColor">A</text>
  <text x="166" y="136" font-size="12" fill="currentColor">B</text>
  <text x="124" y="28" font-size="12" fill="currentColor">C</text>
  <text x="116" y="136" font-size="12" fill="currentColor">H</text>
</svg>
<p><i>Figure : \(H\) est le pied de la perpendiculaire à \((AB)\) passant par \(C\). Ici \(H\) est du même côté que \(B\) par rapport à \(A\), donc \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AH\gt0\).</i></p>
<p><i>Pourquoi ?</i> Si \(\widehat{BAC}\) est aigu, dans le triangle \(AHC\) rectangle en \(H\), \(\cos\widehat{BAC}=\frac{AH}{AC}\), donc \(AB\times AC\times\cos\widehat{BAC}=AB\times AH\).</p>

<div class="ex"><b>Exemple.</b> \(ABCD\) est un carré de côté \(4\). Le projeté de \(C\) sur \((AB)\) est \(B\), donc \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AB}=4\times4=16\). Sans aucun angle !</div>

<div class="prop"><b>Avec les normes.</b> Pour tous vecteurs \(\vec u\) et \(\vec v\) :
\[\vec u\cdot\vec v=\frac12\left(\|\vec u+\vec v\|^2-\|\vec u\|^2-\|\vec v\|^2\right)=\frac12\left(\|\vec u\|^2+\|\vec v\|^2-\|\vec u-\vec v\|^2\right).\]
Avec des points : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\frac12\left(AB^2+AC^2-BC^2\right)\) (car \(\overrightarrow{AC}-\overrightarrow{AB}=\overrightarrow{BC}\)).</div>

<div class="ex"><b>Exemple.</b> \(\|\vec u\|=3\), \(\|\vec v\|=5\), \(\|\vec u+\vec v\|=7\). Alors \(\vec u\cdot\vec v=\frac12(49-9-25)=\frac{15}{2}=7{,}5\). Et \(\cos(\vec u,\vec v)=\frac{7{,}5}{3\times5}=\frac12\) : l'angle vaut \(\frac{\pi}{3}\).</div>

<div class="prop"><b>Dans un repère orthonormé.</b> Si \(\vec u(x\,;y)\) et \(\vec v(x'\,;y')\), alors
\[\vec u\cdot\vec v=xx'+yy'.\]
En particulier \(\vec u\cdot\vec u=x^2+y^2=\|\vec u\|^2\).</div>

<div class="ex"><b>Exemple.</b> \(\vec u(3\,;-2)\) et \(\vec v(4\,;5)\) : \(\vec u\cdot\vec v=3\times4+(-2)\times5=12-10=2\).</div>

<div class="warn"><b>Piège :</b> le produit scalaire est un <b>nombre</b>, pas un vecteur. On n'écrit jamais \(\overrightarrow{\vec u\cdot\vec v}\). Et la formule \(xx'+yy'\) n'est valable que dans un repère <b>orthonormé</b>.</div>
` },

    { titre: "2. Propriétés du produit scalaire", html: R`
<div class="prop"><b>Règles de calcul.</b> Pour tous vecteurs \(\vec u,\vec v,\vec w\) et tout réel \(k\) :
<ul>
<li><b>Symétrie :</b> \(\vec u\cdot\vec v=\vec v\cdot\vec u\) ;</li>
<li><b>Bilinéarité :</b> \(\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w\) et \((k\vec u)\cdot\vec v=k(\vec u\cdot\vec v)\) ;</li>
<li><b>Carré scalaire :</b> \(\vec u\cdot\vec u=\vec u^{\,2}=\|\vec u\|^2\), et \(\overrightarrow{AB}^{\,2}=AB^2\).</li>
</ul></div>
<p>On développe donc comme avec des nombres ! D'où les <b>identités remarquables</b> :</p>
<div class="prop">
\[\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\]
\[\|\vec u-\vec v\|^2=\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2\]
\[(\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2\]
</div>

<div class="ex"><b>Exemple de développement.</b> On sait que \(\|\vec u\|=2\), \(\|\vec v\|=1\) et \(\vec u\cdot\vec v=-1\).
\[(2\vec u-\vec v)\cdot(\vec u+3\vec v)=2\|\vec u\|^2+6\,\vec u\cdot\vec v-\vec v\cdot\vec u-3\|\vec v\|^2=2\|\vec u\|^2+5\,\vec u\cdot\vec v-3\|\vec v\|^2\]
\[=2\times4+5\times(-1)-3\times1=8-5-3=0.\]</div>

<div class="def"><b>Orthogonalité.</b> Deux vecteurs \(\vec u\) et \(\vec v\) sont <b>orthogonaux</b> si l'un d'eux est nul ou si leurs directions sont perpendiculaires.</div>
<div class="prop"><b>Théorème.</b> \(\vec u\) et \(\vec v\) sont orthogonaux \(\iff\vec u\cdot\vec v=0\).<br>
En repère orthonormé : \(\vec u(x\,;y)\perp\vec v(x'\,;y')\iff xx'+yy'=0\).<br>
Conséquence : les droites \((AB)\) et \((CD)\) sont perpendiculaires \(\iff\overrightarrow{AB}\cdot\overrightarrow{CD}=0\).</div>

<div class="ex"><b>Exemples.</b>
<ul>
<li>\(\vec u(2\,;-3)\) et \(\vec v(6\,;4)\) : \(2\times6+(-3)\times4=12-12=0\), ils sont orthogonaux.</li>
<li>Pour quelle valeur de \(m\) les vecteurs \(\vec u(m\,;2)\) et \(\vec v(3\,;m-1)\) sont-ils orthogonaux ?<br>
\(\vec u\cdot\vec v=3m+2(m-1)=5m-2=0\iff m=\frac25\).</li>
</ul></div>

<div class="warn"><b>Pièges :</b>
<ul>
<li>\(\vec u\cdot\vec v=0\) n'implique <b>pas</b> que \(\vec u=\vec 0\) ou \(\vec v=\vec 0\) (contrairement aux nombres) : deux vecteurs non nuls peuvent être orthogonaux.</li>
<li>\(\vec u\cdot\vec v=\vec u\cdot\vec w\) n'implique pas \(\vec v=\vec w\) : on ne « simplifie » pas par \(\vec u\).</li>
<li>Dans \(\|\vec u+\vec v\|^2\), ne pas oublier le double produit \(2\,\vec u\cdot\vec v\) ! En général \(\|\vec u+\vec v\|\neq\|\vec u\|+\|\vec v\|\).</li>
</ul></div>
` },

    { titre: "3. Applications du produit scalaire", html: R`
<p><b>Calculer un angle.</b> Si \(\vec u\) et \(\vec v\) sont non nuls, \(\cos(\vec u,\vec v)=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\times\|\vec v\|}\). On calcule le produit scalaire d'une autre façon (coordonnées, projection…), puis on en déduit le cosinus.</p>
<div class="ex"><b>Exemple.</b> \(A(1\,;2)\), \(B(4\,;3)\), \(C(2\,;5)\). \(\overrightarrow{AB}(3\,;1)\), \(\overrightarrow{AC}(1\,;3)\).<br>
\(\overrightarrow{AB}\cdot\overrightarrow{AC}=3+3=6\) ; \(AB=AC=\sqrt{10}\).<br>
\(\cos\widehat{BAC}=\frac{6}{\sqrt{10}\times\sqrt{10}}=0{,}6\), donc \(\widehat{BAC}\approx53{,}13^\circ\) (calculatrice : \(\arccos(0{,}6)\), touche \(\cos^{-1}\)).</div>

<div class="prop"><b>Théorème d'Al-Kashi.</b> Dans un triangle \(ABC\), avec \(a=BC\), \(b=AC\), \(c=AB\) :
\[a^2=b^2+c^2-2bc\cos\widehat{A}\qquad\text{c'est-à-dire}\qquad BC^2=AB^2+AC^2-2\,AB\times AC\times\cos\widehat{BAC}.\]
Si \(\widehat A\) est droit, \(\cos\widehat A=0\) et on retrouve Pythagore.</div>
<p><b>Démonstration (au programme).</b> D'après la relation de Chasles, \(\overrightarrow{BC}=\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{AC}-\overrightarrow{AB}\). Donc
\[BC^2=\overrightarrow{BC}^{\,2}=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=AC^2-2\,\overrightarrow{AC}\cdot\overrightarrow{AB}+AB^2.\]
Or \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}\), d'où \(BC^2=AB^2+AC^2-2\,AB\times AC\times\cos\widehat{BAC}\). \(\blacksquare\)</p>
<div class="ex"><b>Exemples.</b>
<ul>
<li><i>Calcul d'une longueur :</i> \(AB=5\), \(AC=8\), \(\widehat{A}=60^\circ\). \(BC^2=25+64-2\times5\times8\times\frac12=89-40=49\), donc \(BC=7\).</li>
<li><i>Calcul d'un angle :</i> triangle de côtés \(4\), \(5\), \(6\). Le plus grand angle est opposé au plus grand côté : \(36=16+25-2\times4\times5\cos\alpha\), donc \(\cos\alpha=\frac{16+25-36}{40}=\frac{5}{40}=\frac18\) et \(\alpha\approx82{,}82^\circ\).</li>
</ul></div>

<div class="prop"><b>Théorème de la médiane.</b> Soient \(A\), \(B\) deux points, \(I\) le milieu de \([AB]\), et \(M\) un point quelconque. Alors
\[\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{AB^2}{4}\qquad\text{et}\qquad MA^2+MB^2=2MI^2+\frac{AB^2}{2}.\]</div>
<p><i>Démonstration.</i> \(\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}\) et \(\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}=\overrightarrow{MI}-\overrightarrow{IA}\) (car \(I\) est le milieu). Donc \(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-IA^2=MI^2-\frac{AB^2}{4}\). De même \(MA^2+MB^2=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)^2+\left(\overrightarrow{MI}-\overrightarrow{IA}\right)^2=2MI^2+2IA^2=2MI^2+\frac{AB^2}{2}\).</p>

<div class="prop"><b>Ensemble des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\).</b> C'est le <b>cercle de diamètre \([AB]\)</b>.<br>
En effet \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff MI^2=\frac{AB^2}{4}\iff MI=\frac{AB}{2}\) : cercle de centre \(I\) et de rayon \(\frac{AB}{2}\). On retrouve le résultat du collège : \(M\neq A,B\) est sur ce cercle si et seulement si le triangle \(AMB\) est rectangle en \(M\).</div>

<div class="ex"><b>Généralisation.</b> \(AB=6\). Ensemble des \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=7\) : \(MI^2-9=7\iff MI^2=16\iff MI=4\). C'est le cercle de centre \(I\) et de rayon \(4\).<br>
Pour \(\overrightarrow{MA}\cdot\overrightarrow{MB}=-10\) : \(MI^2=-1\), impossible : l'ensemble est <b>vide</b>.</div>

<p><b>Choisir une méthode adaptée.</b></p>
<table>
<tr><td><b>Ce que je connais</b></td><td><b>Formule à utiliser</b></td></tr>
<tr><td>deux longueurs et l'angle entre elles</td><td>\(\|\vec u\|\times\|\vec v\|\times\cos(\vec u,\vec v)\)</td></tr>
<tr><td>une figure avec des angles droits (carré, rectangle, hauteur…)</td><td>projection orthogonale</td></tr>
<tr><td>trois longueurs (les côtés d'un triangle)</td><td>formule avec les normes / Al-Kashi</td></tr>
<tr><td>des coordonnées dans un repère orthonormé</td><td>\(xx'+yy'\)</td></tr>
<tr><td>des vecteurs exprimés à l'aide d'autres vecteurs</td><td>bilinéarité (on développe)</td></tr>
</table>

<div class="warn"><b>Piège :</b> dans Al-Kashi, l'angle utilisé est celui <b>opposé</b> au côté qu'on calcule (\(\widehat A\) pour \(BC\)). Et pense à mettre la calculatrice en degrés si tu veux un angle en degrés.</div>
` }
  ],

  quiz: [
    { q: R`\(\|\vec u\|=3\), \(\|\vec v\|=4\) et \((\vec u,\vec v)=\frac{\pi}{3}\). Alors \(\vec u\cdot\vec v=\)`, choix: [R`\(12\)`, R`\(6\)`, R`\(6\sqrt3\)`, R`\(7\)`], bonne: 1, explication: R`\(3\times4\times\cos\frac{\pi}{3}=12\times\frac12=6\).` },
    { q: R`Dans un repère orthonormé, \(\vec u(2\,;-1)\) et \(\vec v(3\,;4)\). \(\vec u\cdot\vec v=\)`, choix: [R`\(10\)`, R`\(5\)`, R`\(2\)`, R`\((6\,;-4)\)`], bonne: 2, explication: R`\(2\times3+(-1)\times4=6-4=2\). C'est un nombre, pas un vecteur !` },
    { q: R`\(ABCD\) est un carré de côté \(3\). \(\overrightarrow{AB}\cdot\overrightarrow{AD}=\)`, choix: [R`\(9\)`, R`\(0\)`, R`\(3\)`, R`\(-9\)`], bonne: 1, explication: R`\((AB)\perp(AD)\) : les vecteurs sont orthogonaux, le produit scalaire est nul.` },
    { q: R`\(ABCD\) est un carré de côté \(3\). \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\)`, choix: [R`\(9\)`, R`\(9\sqrt2\)`, R`\(0\)`, R`\(3\sqrt2\)`], bonne: 0, explication: R`Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AB=9\). (Ou : \(3\times3\sqrt2\times\frac{\sqrt2}{2}=9\).)` },
    { q: R`\(\|\vec u+\vec v\|^2\) est égal à :`, choix: [R`\(\|\vec u\|^2+\|\vec v\|^2\)`, R`\(\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\)`, R`\((\|\vec u\|+\|\vec v\|)^2\)`, R`\(\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2\)`], bonne: 1, explication: R`C'est l'identité remarquable du produit scalaire : ne pas oublier le double produit.` },
    { q: R`\(\vec u(m\,;2)\) et \(\vec v(4\,;-6)\) sont orthogonaux pour \(m=\)`, choix: [R`\(-3\)`, R`\(3\)`, R`\(\frac43\)`, R`\(12\)`], bonne: 1, explication: R`\(4m-12=0\iff m=3\).` },
    { q: R`Dans un triangle \(ABC\), \(AB=2\), \(AC=3\), \(\widehat{BAC}=60^\circ\). Alors \(BC=\)`, choix: [R`\(\sqrt{13}\)`, R`\(\sqrt{7}\)`, R`\(\sqrt{19}\)`, R`\(1\)`], bonne: 1, explication: R`Al-Kashi : \(BC^2=4+9-2\times2\times3\times\frac12=13-6=7\).` },
    { q: R`\(AB=10\). L'ensemble des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\) est :`, choix: [R`la médiatrice de \([AB]\)`, R`le cercle de centre \(A\) et de rayon \(10\)`, R`le cercle de diamètre \([AB]\), de rayon \(5\)`, R`le segment \([AB]\)`], bonne: 2, explication: R`\(MI^2-\frac{100}{4}=0\iff MI=5\) où \(I\) est le milieu de \([AB]\) : cercle de diamètre \([AB]\).` }
  ],

  exercices: [
    { niveau: 1, titre: "Avec les normes et l'angle",
      enonce: R`Calculer \(\vec u\cdot\vec v\) dans chaque cas :
<ol><li>\(\|\vec u\|=2\), \(\|\vec v\|=5\), \((\vec u,\vec v)=\frac{3\pi}{4}\) ;</li>
<li>\(\|\vec u\|=3\), \(\|\vec v\|=4\), \((\vec u,\vec v)=\frac{\pi}{6}\) ;</li>
<li>\(\vec u=\overrightarrow{AB}\), \(\vec v=\overrightarrow{AC}\) avec \(AB=6\), \(AC=4\), \(\widehat{BAC}=\frac{2\pi}{3}\) ;</li>
<li>\(\vec u\) et \(\vec v\) colinéaires de même sens, \(\|\vec u\|=2\), \(\|\vec v\|=7\).</li></ol>`,
      indice: R`Applique \(\|\vec u\|\times\|\vec v\|\times\cos(\vec u,\vec v)\). Pour la 4, l'angle entre deux vecteurs de même sens est nul.`,
      correction: R`<ol><li>\(\vec u\cdot\vec v=2\times5\times\cos\frac{3\pi}{4}=10\times\left(-\frac{\sqrt2}{2}\right)=-5\sqrt2\).</li>
<li>\(\vec u\cdot\vec v=3\times4\times\cos\frac{\pi}{6}=12\times\frac{\sqrt3}{2}=6\sqrt3\).</li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=6\times4\times\cos\frac{2\pi}{3}=24\times\left(-\frac12\right)=-12\) (négatif : angle obtus).</li>
<li>L'angle est nul, \(\cos0=1\) : \(\vec u\cdot\vec v=2\times7=14\).</li></ol>` },

    { niveau: 1, titre: "Avec les coordonnées",
      enonce: R`Le plan est muni d'un repère orthonormé.
<ol><li>\(\vec u(3\,;4)\) et \(\vec v(-2\,;5)\). Calculer \(\vec u\cdot\vec v\) et \(\|\vec u\|\).</li>
<li>\(A(1\,;-2)\), \(B(3\,;1)\), \(C(-1\,;2)\). Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Les vecteurs \(\vec w(4\,;-6)\) et \(\vec t(3\,;2)\) sont-ils orthogonaux ?</li></ol>`,
      indice: R`\(\vec u\cdot\vec v=xx'+yy'\) ; les coordonnées de \(\overrightarrow{AB}\) sont \((x_B-x_A\,;y_B-y_A)\).`,
      correction: R`<ol><li>\(\vec u\cdot\vec v=3\times(-2)+4\times5=-6+20=14\) ; \(\|\vec u\|=\sqrt{9+16}=\sqrt{25}=5\).</li>
<li>\(\overrightarrow{AB}(3-1\,;1-(-2))=(2\,;3)\) et \(\overrightarrow{AC}(-1-1\,;2-(-2))=(-2\,;4)\).<br>
\(\overrightarrow{AB}\cdot\overrightarrow{AC}=2\times(-2)+3\times4=-4+12=8\).</li>
<li>\(\vec w\cdot\vec t=4\times3+(-6)\times2=12-12=0\) : oui, ils sont orthogonaux.</li></ol>` },

    { niveau: 1, titre: "Projections dans un rectangle",
      enonce: R`\(ABCD\) est un rectangle avec \(AB=6\) et \(AD=4\) ; \(O\) est son centre (intersection des diagonales). Calculer, en utilisant des projections orthogonales :
\[\overrightarrow{AB}\cdot\overrightarrow{AC}\qquad\overrightarrow{AD}\cdot\overrightarrow{AC}\qquad\overrightarrow{AB}\cdot\overrightarrow{CD}\qquad\overrightarrow{AB}\cdot\overrightarrow{AO}\]
<i>Figure : \(A\) en bas à gauche, \(B\) en bas à droite, \(C\) en haut à droite, \(D\) en haut à gauche.</i>`,
      indice: R`Le projeté de \(C\) sur \((AB)\) est \(B\), sur \((AD)\) c'est \(D\). Le projeté de \(O\) sur \((AB)\) est le milieu de \([AB]\). Remarque que \(\overrightarrow{CD}=-\overrightarrow{AB}\).`,
      correction: R`<ul>
<li>Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AB}=AB^2=36\).</li>
<li>Le projeté de \(C\) sur \((AD)\) est \(D\) : \(\overrightarrow{AD}\cdot\overrightarrow{AC}=AD^2=16\).</li>
<li>\(\overrightarrow{CD}=-\overrightarrow{AB}\) (sens contraires), donc \(\overrightarrow{AB}\cdot\overrightarrow{CD}=-AB^2=-36\).</li>
<li>Le projeté de \(O\) sur \((AB)\) est le milieu \(K\) de \([AB]\), avec \(AK=3\), et \(\overrightarrow{AK}\) a le même sens que \(\overrightarrow{AB}\) : \(\overrightarrow{AB}\cdot\overrightarrow{AO}=AB\times AK=6\times3=18\).</li>
</ul>
<i>Vérification en repère</i> \(A(0\,;0)\), \(B(6\,;0)\), \(C(6\,;4)\), \(D(0\,;4)\), \(O(3\,;2)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AO}=6\times3+0\times2=18\). ✓` },

    { niveau: 1, titre: "Trouver le paramètre",
      enonce: R`Dans un repère orthonormé, déterminer le(s) réel(s) \(m\) pour le(s)quel(s) les vecteurs sont orthogonaux :
<ol><li>\(\vec u(m\,;3)\) et \(\vec v(2\,;m+1)\) ;</li>
<li>\(\vec u(m\,;4)\) et \(\vec v(m\,;-1)\).</li></ol>`,
      indice: R`Écris \(\vec u\cdot\vec v=0\) avec la formule \(xx'+yy'\), puis résous l'équation obtenue.`,
      correction: R`<ol><li>\(\vec u\cdot\vec v=2m+3(m+1)=5m+3\). \(5m+3=0\iff m=-\frac35\).<br><i>Vérif :</i> \(\vec u\left(-\frac35\,;3\right)\), \(\vec v\left(2\,;\frac25\right)\) : \(-\frac65+\frac65=0\). ✓</li>
<li>\(\vec u\cdot\vec v=m^2-4\). \(m^2-4=0\iff m^2=4\iff m=2\) ou \(m=-2\).</li></ol>` },

    { niveau: 2, titre: "Des normes à l'angle",
      enonce: R`\(\vec u\) et \(\vec v\) sont deux vecteurs tels que \(\|\vec u\|=4\), \(\|\vec v\|=3\) et \(\|\vec u-\vec v\|=\sqrt{13}\).
<ol><li>Calculer \(\vec u\cdot\vec v\), puis une mesure de l'angle \((\vec u,\vec v)\).</li>
<li>Calculer \(\|\vec u+\vec v\|\).</li>
<li>Calculer \(\|2\vec u-3\vec v\|\).</li></ol>`,
      indice: R`Utilise \(\|\vec u-\vec v\|^2=\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2\). Pour la 3, développe \((2\vec u-3\vec v)^2\).`,
      correction: R`<ol><li>\(\|\vec u-\vec v\|^2=\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2\) donne \(13=16-2\,\vec u\cdot\vec v+9\), donc \(2\,\vec u\cdot\vec v=12\) et \(\vec u\cdot\vec v=6\).<br>
\(\cos(\vec u,\vec v)=\frac{6}{4\times3}=\frac12\), donc l'angle mesure \(\frac{\pi}{3}\) (soit \(60^\circ\)).</li>
<li>\(\|\vec u+\vec v\|^2=16+2\times6+9=37\), donc \(\|\vec u+\vec v\|=\sqrt{37}\).</li>
<li>\(\|2\vec u-3\vec v\|^2=4\|\vec u\|^2-12\,\vec u\cdot\vec v+9\|\vec v\|^2=4\times16-12\times6+9\times9=64-72+81=73\).<br>
Donc \(\|2\vec u-3\vec v\|=\sqrt{73}\).</li></ol>` },

    { niveau: 2, titre: "Angles d'un triangle en repère",
      enonce: R`Dans un repère orthonormé, on donne \(A(-1\,;1)\), \(B(3\,;3)\) et \(C(1\,;5)\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\), \(AB\) et \(AC\). En déduire une valeur approchée au centième de degré de \(\widehat{BAC}\).</li>
<li>Calculer de même \(\widehat{ABC}\).</li>
<li>En déduire \(\widehat{ACB}\). Le résultat était-il prévisible ?</li></ol>`,
      indice: R`\(\cos\widehat{BAC}=\frac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\times AC}\). Pour l'angle en \(B\), utilise \(\overrightarrow{BA}\) et \(\overrightarrow{BC}\).`,
      correction: R`<ol><li>\(\overrightarrow{AB}(4\,;2)\), \(\overrightarrow{AC}(2\,;4)\). \(\overrightarrow{AB}\cdot\overrightarrow{AC}=8+8=16\). \(AB=\sqrt{16+4}=\sqrt{20}\), \(AC=\sqrt{4+16}=\sqrt{20}\).<br>
\(\cos\widehat{BAC}=\frac{16}{\sqrt{20}\times\sqrt{20}}=\frac{16}{20}=0{,}8\), donc \(\widehat{BAC}\approx36{,}87^\circ\).</li>
<li>\(\overrightarrow{BA}(-4\,;-2)\), \(\overrightarrow{BC}(-2\,;2)\). \(\overrightarrow{BA}\cdot\overrightarrow{BC}=8-4=4\). \(BA=\sqrt{20}\), \(BC=\sqrt{8}\).<br>
\(\cos\widehat{ABC}=\frac{4}{\sqrt{20}\times\sqrt8}=\frac{4}{\sqrt{160}}=\frac{4}{4\sqrt{10}}=\frac{1}{\sqrt{10}}\approx0{,}3162\), donc \(\widehat{ABC}\approx71{,}57^\circ\).</li>
<li>\(\widehat{ACB}=180^\circ-36{,}87^\circ-71{,}57^\circ\approx71{,}57^\circ\). C'était prévisible : \(AB=AC=\sqrt{20}\), le triangle est <b>isocèle en \(A\)</b>, donc ses angles en \(B\) et en \(C\) sont égaux.</li></ol>` },

    { niveau: 2, titre: "Al-Kashi dans un triangle obtus",
      enonce: R`Dans un triangle \(ABC\), on a \(AB=7\), \(AC=5\) et \(\widehat{BAC}=120^\circ\).
<ol><li>Calculer la valeur exacte de \(BC\), puis une valeur approchée au centième.</li>
<li>Calculer une valeur approchée au dixième de degré de \(\widehat{ABC}\).</li></ol>`,
      indice: R`\(\cos120^\circ=-\frac12\). Pour l'angle en \(B\), réécris Al-Kashi avec le côté opposé à \(B\), c'est-à-dire \(AC\) : \(AC^2=BA^2+BC^2-2\,BA\times BC\cos\widehat B\).`,
      correction: R`<ol><li>Al-Kashi : \(BC^2=AB^2+AC^2-2\,AB\times AC\cos\widehat{A}=49+25-2\times7\times5\times\left(-\frac12\right)=74+35=109\).<br>
\(BC=\sqrt{109}\approx10{,}44\).</li>
<li>\(AC^2=BA^2+BC^2-2\,BA\times BC\cos\widehat B\) donne \(\cos\widehat B=\frac{BA^2+BC^2-AC^2}{2\,BA\times BC}=\frac{49+109-25}{2\times7\times\sqrt{109}}=\frac{133}{14\sqrt{109}}\approx0{,}9099\).<br>
Donc \(\widehat{ABC}\approx24{,}5^\circ\). <i>(Cohérent : l'angle en \(A\) étant obtus, les deux autres sont aigus.)</i></li></ol>` },

    { niveau: 2, titre: "Bilinéarité dans un triangle équilatéral",
      enonce: R`\(ABC\) est un triangle équilatéral de côté \(4\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) et \(\overrightarrow{AB}\cdot\overrightarrow{BC}\).</li>
<li>En déduire \(\overrightarrow{AB}\cdot\left(\overrightarrow{AC}+2\overrightarrow{BC}\right)\).</li>
<li>Calculer \(\left(\overrightarrow{AB}+\overrightarrow{AC}\right)\cdot\left(\overrightarrow{AB}-\overrightarrow{AC}\right)\) et interpréter.</li>
<li>Calculer \(\left\|\overrightarrow{AB}+\overrightarrow{AC}\right\|\). Retrouver ce résultat avec le milieu \(I\) de \([BC]\).</li></ol>`,
      indice: R`Attention : l'angle entre \(\overrightarrow{AB}\) et \(\overrightarrow{BC}\) n'est pas \(60^\circ\). Écris \(\overrightarrow{AB}=-\overrightarrow{BA}\). Pour la 4, \(\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AI}\).`,
      correction: R`<ol><li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=4\times4\times\cos60^\circ=8\).<br>
\(\overrightarrow{AB}\cdot\overrightarrow{BC}=-\overrightarrow{BA}\cdot\overrightarrow{BC}=-4\times4\times\cos60^\circ=-8\).</li>
<li>Par bilinéarité : \(\overrightarrow{AB}\cdot\overrightarrow{AC}+2\,\overrightarrow{AB}\cdot\overrightarrow{BC}=8+2\times(-8)=-8\).</li>
<li>\(\left(\overrightarrow{AB}+\overrightarrow{AC}\right)\cdot\left(\overrightarrow{AB}-\overrightarrow{AC}\right)=AB^2-AC^2=16-16=0\). Or \(\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}\) et \(\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AI}\) : la médiane \((AI)\) est perpendiculaire à \((BC)\), c'est aussi une hauteur.</li>
<li>\(\left\|\overrightarrow{AB}+\overrightarrow{AC}\right\|^2=AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AC^2=16+16+16=48\), donc \(\left\|\overrightarrow{AB}+\overrightarrow{AC}\right\|=\sqrt{48}=4\sqrt3\).<br>
Avec \(I\) : \(\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AI}\) et la hauteur d'un triangle équilatéral de côté \(4\) vaut \(AI=\frac{4\sqrt3}{2}=2\sqrt3\) (Pythagore : \(AI^2=16-4=12\)). Donc \(2AI=4\sqrt3\). ✓</li></ol>` },

    { niveau: 3, titre: "Ensembles de points",
      enonce: R`Dans un repère orthonormé, \(A(-2\,;1)\) et \(B(4\,;-3)\) ; \(I\) est le milieu de \([AB]\).
<ol><li>Calculer les coordonnées de \(I\) et \(AB^2\).</li>
<li>Déterminer l'ensemble \(\mathcal{E}_1\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\). Le point \(C(3\,;2)\) appartient-il à \(\mathcal E_1\) ? Vérifier par un calcul direct.</li>
<li>Déterminer l'ensemble \(\mathcal E_2\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=-9\).</li>
<li>Déterminer l'ensemble \(\mathcal E_3\) des points \(M\) tels que \(MA^2+MB^2=60\).</li>
<li>Retrouver le résultat de la question 2 en posant \(M(x\,;y)\).</li></ol>`,
      indice: R`Utilise le théorème de la médiane : \(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{AB^2}{4}\) et \(MA^2+MB^2=2MI^2+\frac{AB^2}{2}\).`,
      correction: R`<ol><li>\(I\left(\frac{-2+4}{2}\,;\frac{1-3}{2}\right)=(1\,;-1)\). \(AB^2=(4+2)^2+(-3-1)^2=36+16=52\).</li>
<li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff MI^2=\frac{52}{4}=13\iff MI=\sqrt{13}\). \(\mathcal E_1\) est le cercle de centre \(I(1\,;-1)\) et de rayon \(\sqrt{13}\) (cercle de diamètre \([AB]\)).<br>
\(IC^2=(3-1)^2+(2+1)^2=4+9=13\) : \(C\in\mathcal E_1\). Vérification : \(\overrightarrow{CA}(-5\,;-1)\), \(\overrightarrow{CB}(1\,;-5)\), \(\overrightarrow{CA}\cdot\overrightarrow{CB}=-5+5=0\). ✓ (le triangle \(ACB\) est rectangle en \(C\)).</li>
<li>\(MI^2-13=-9\iff MI^2=4\iff MI=2\). \(\mathcal E_2\) est le cercle de centre \(I\) et de rayon \(2\).</li>
<li>\(2MI^2+\frac{52}{2}=60\iff2MI^2=34\iff MI^2=17\). \(\mathcal E_3\) est le cercle de centre \(I\) et de rayon \(\sqrt{17}\).</li>
<li>\(\overrightarrow{MA}(-2-x\,;1-y)\), \(\overrightarrow{MB}(4-x\,;-3-y)\).
\(\overrightarrow{MA}\cdot\overrightarrow{MB}=(-2-x)(4-x)+(1-y)(-3-y)=(x+2)(x-4)+(y-1)(y+3)\)<br>
\(=x^2-2x-8+y^2+2y-3=x^2-2x+y^2+2y-11\).<br>
Or \(x^2-2x=(x-1)^2-1\) et \(y^2+2y=(y+1)^2-1\), donc \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff(x-1)^2+(y+1)^2=13\) : on retrouve le cercle de centre \((1\,;-1)\) et de rayon \(\sqrt{13}\).</li></ol>` },

    { niveau: 3, titre: "Puissance d'un point par rapport à un cercle",
      enonce: R`Soit \(\mathcal C\) un cercle de centre \(O\) et de rayon \(r\), et \(P\) un point du plan. Une droite passant par \(P\) coupe \(\mathcal C\) en deux points \(A\) et \(B\). On note \(A'\) le point diamétralement opposé à \(A\) sur \(\mathcal C\).
<ol><li>Justifier que \(B\) est le projeté orthogonal de \(A'\) sur la droite \((AB)\), puis que \(\overrightarrow{PA}\cdot\overrightarrow{PB}=\overrightarrow{PA}\cdot\overrightarrow{PA'}\).</li>
<li>En utilisant le théorème de la médiane dans le segment \([AA']\), montrer que \(\overrightarrow{PA}\cdot\overrightarrow{PB}=PO^2-r^2\). <i>Ce nombre, qui ne dépend pas de la droite choisie, s'appelle la puissance de \(P\) par rapport à \(\mathcal C\).</i></li>
<li><b>Application.</b> \(r=3\) et \(PO=5\). Une droite passant par \(P\) coupe le cercle en \(A\) et \(B\) avec \(PA=2\). Calculer \(PB\).</li>
<li>Une droite passant par \(P\) est tangente au cercle en \(T\). Calculer \(PT\).</li></ol>`,
      indice: R`\(B\) est sur le cercle de diamètre \([AA']\) : le triangle \(ABA'\) est rectangle en \(B\). Le milieu de \([AA']\) est \(O\) et \(AA'=2r\). Pour la 3, \(P\) est à l'extérieur du cercle (\(PO\gt r\)), donc \(\overrightarrow{PA}\) et \(\overrightarrow{PB}\) sont de même sens.`,
      correction: R`<ol><li>\(A\), \(B\), \(A'\) sont sur le cercle de diamètre \([AA']\). Si \(B\neq A\) et \(B\neq A'\), le triangle \(ABA'\) est rectangle en \(B\), donc \((A'B)\perp(AB)\) : \(B\) est le projeté orthogonal de \(A'\) sur \((AB)\) (si \(B=A'\), c'est immédiat). Comme \(P\) et \(A\) sont sur la droite \((AB)\), la propriété de projection donne \(\overrightarrow{PA}\cdot\overrightarrow{PA'}=\overrightarrow{PA}\cdot\overrightarrow{PB}\).</li>
<li>\(O\) est le milieu de \([AA']\) et \(AA'=2r\). Le théorème de la médiane (avec \(M=P\)) donne \(\overrightarrow{PA}\cdot\overrightarrow{PA'}=PO^2-\frac{AA'^2}{4}=PO^2-\frac{4r^2}{4}=PO^2-r^2\). Donc \(\overrightarrow{PA}\cdot\overrightarrow{PB}=PO^2-r^2\).</li>
<li>\(PO^2-r^2=25-9=16\). \(P\) est extérieur au cercle, donc \(A\) et \(B\) sont du même côté de \(P\) : \(\overrightarrow{PA}\cdot\overrightarrow{PB}=PA\times PB\). Ainsi \(2\times PB=16\) et \(PB=8\).</li>
<li>Pour la tangente, \(A=B=T\) : \(\overrightarrow{PT}\cdot\overrightarrow{PT}=PT^2=16\), donc \(PT=4\). <i>Vérification :</i> le triangle \(OTP\) est rectangle en \(T\), et \(OT^2+PT^2=9+16=25=PO^2\). ✓</li></ol>` },

    { niveau: 3, titre: "Orthocentre d'un triangle variable",
      enonce: R`Dans un repère orthonormé, on considère \(B(-2\,;0)\), \(C(4\,;0)\) et \(A(0\,;a)\) avec \(a\gt0\).
<ol><li>Justifier que la hauteur issue de \(A\) dans le triangle \(ABC\) est l'axe des ordonnées.</li>
<li>Soit \(H(0\,;h)\) un point de cet axe. Déterminer \(h\) (en fonction de \(a\)) pour que \((BH)\perp(AC)\).</li>
<li>Vérifier que \((CH)\perp(AB)\). Que représente \(H\) ? Sur quelle ligne se déplace \(H\) quand \(a\) varie ?</li>
<li>Pour quelle valeur de \(a\) a-t-on \(H=A\) ? Montrer qu'alors le triangle est rectangle en \(A\).</li></ol>`,
      indice: R`Deux droites sont perpendiculaires si et seulement si le produit scalaire de leurs vecteurs directeurs est nul. \(\overrightarrow{BH}(2\,;h)\) et \(\overrightarrow{AC}(4\,;-a)\).`,
      correction: R`<ol><li>\((BC)\) est l'axe des abscisses. La hauteur issue de \(A\) est la perpendiculaire à \((BC)\) passant par \(A(0\,;a)\) : c'est la droite verticale d'équation \(x=0\), l'axe des ordonnées.</li>
<li>\(\overrightarrow{BH}(2\,;h)\), \(\overrightarrow{AC}(4\,;-a)\). \(\overrightarrow{BH}\cdot\overrightarrow{AC}=8-ah=0\iff h=\frac8a\). Donc \(H\left(0\,;\frac8a\right)\).</li>
<li>\(\overrightarrow{CH}\left(-4\,;\frac8a\right)\), \(\overrightarrow{AB}(-2\,;-a)\). \(\overrightarrow{CH}\cdot\overrightarrow{AB}=8+\frac8a\times(-a)=8-8=0\) : \((CH)\perp(AB)\).<br>
\(H\) est sur les trois hauteurs : c'est l'<b>orthocentre</b> du triangle \(ABC\). Quand \(a\) varie, \(H\) reste sur l'axe des ordonnées (demi-axe des ordonnées positives, puisque \(\frac8a\gt0\)).</li>
<li>\(H=A\iff\frac8a=a\iff a^2=8\iff a=2\sqrt2\) (car \(a\gt0\)).<br>
Alors \(\overrightarrow{AB}(-2\,;-2\sqrt2)\), \(\overrightarrow{AC}(4\,;-2\sqrt2)\) et \(\overrightarrow{AB}\cdot\overrightarrow{AC}=-8+8=0\) : le triangle est rectangle en \(A\). C'est logique : dans un triangle rectangle, l'orthocentre est le sommet de l'angle droit.</li></ol>` },

    { niveau: 3, titre: "Perpendiculaires cachées dans un carré",
      enonce: R`\(ABCD\) est un carré de côté \(1\) ; \(E\) est le milieu de \([AB]\) et \(F\) le milieu de \([BC]\).
<ol><li><b>Sans repère :</b> en écrivant \(\overrightarrow{DE}=\overrightarrow{DA}+\overrightarrow{AE}\) et \(\overrightarrow{AF}=\overrightarrow{AB}+\overrightarrow{BF}\), montrer que les droites \((DE)\) et \((AF)\) sont perpendiculaires.</li>
<li><b>Avec un repère :</b> on se place dans le repère orthonormé \((A\,;\overrightarrow{AB},\overrightarrow{AD})\). Retrouver ce résultat.</li>
<li>Calculer une valeur approchée au centième de degré de l'angle \(\widehat{EDF}\).</li></ol>`,
      indice: R`Développe par bilinéarité : deux des quatre produits sont nuls (vecteurs orthogonaux). \(\overrightarrow{BF}=\frac12\overrightarrow{AD}\) et \(\overrightarrow{DA}=-\overrightarrow{AD}\).`,
      correction: R`<ol><li>\(\overrightarrow{DE}\cdot\overrightarrow{AF}=\overrightarrow{DA}\cdot\overrightarrow{AB}+\overrightarrow{DA}\cdot\overrightarrow{BF}+\overrightarrow{AE}\cdot\overrightarrow{AB}+\overrightarrow{AE}\cdot\overrightarrow{BF}\).<br>
\(\overrightarrow{DA}\perp\overrightarrow{AB}\) et \(\overrightarrow{AE}\perp\overrightarrow{BF}\) : le 1er et le 4e terme sont nuls.<br>
\(\overrightarrow{DA}\cdot\overrightarrow{BF}=-\overrightarrow{AD}\cdot\frac12\overrightarrow{AD}=-\frac12AD^2=-\frac12\).<br>
\(\overrightarrow{AE}\cdot\overrightarrow{AB}=\frac12\overrightarrow{AB}\cdot\overrightarrow{AB}=\frac12\).<br>
Donc \(\overrightarrow{DE}\cdot\overrightarrow{AF}=-\frac12+\frac12=0\) : \((DE)\perp(AF)\).</li>
<li>\(A(0\,;0)\), \(B(1\,;0)\), \(C(1\,;1)\), \(D(0\,;1)\), \(E\left(\frac12\,;0\right)\), \(F\left(1\,;\frac12\right)\).<br>
\(\overrightarrow{DE}\left(\frac12\,;-1\right)\), \(\overrightarrow{AF}\left(1\,;\frac12\right)\) : \(\overrightarrow{DE}\cdot\overrightarrow{AF}=\frac12-\frac12=0\). ✓</li>
<li>\(\overrightarrow{DE}\left(\frac12\,;-1\right)\), \(\overrightarrow{DF}\left(1\,;-\frac12\right)\). \(\overrightarrow{DE}\cdot\overrightarrow{DF}=\frac12+\frac12=1\).<br>
\(DE=DF=\sqrt{\frac14+1}=\frac{\sqrt5}{2}\). \(\cos\widehat{EDF}=\frac{1}{\frac{\sqrt5}{2}\times\frac{\sqrt5}{2}}=\frac{1}{\frac54}=\frac45=0{,}8\).<br>
Donc \(\widehat{EDF}\approx36{,}87^\circ\).</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Calculer un produit scalaire", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Quatre méthodes", points: 5,
          enonce: R`<ol><li>\(\|\vec u\|=3\), \(\|\vec v\|=2\) et \((\vec u,\vec v)=\frac{5\pi}{6}\). Calculer \(\vec u\cdot\vec v\).</li>
<li>Dans un repère orthonormé, \(\vec u(-1\,;3)\) et \(\vec v(4\,;2)\). Calculer \(\vec u\cdot\vec v\).</li>
<li>\(ABCD\) est un rectangle avec \(AB=5\) et \(BC=3\). Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) et \(\overrightarrow{BC}\cdot\overrightarrow{BD}\).</li>
<li>\(\|\vec u\|=2\), \(\|\vec v\|=3\) et \(\|\vec u+\vec v\|=4\). Calculer \(\vec u\cdot\vec v\).</li></ol>`,
          correction: R`<ol><li>\(\vec u\cdot\vec v=3\times2\times\cos\frac{5\pi}{6}=6\times\left(-\frac{\sqrt3}{2}\right)=-3\sqrt3\). <b>(1 pt)</b></li>
<li>\(\vec u\cdot\vec v=-1\times4+3\times2=-4+6=2\). <b>(1 pt)</b></li>
<li>Le projeté de \(C\) sur \((AB)\) est \(B\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB^2=25\).<br>
\(\overrightarrow{BD}=\overrightarrow{BA}+\overrightarrow{AD}=\overrightarrow{BA}+\overrightarrow{BC}\), donc \(\overrightarrow{BC}\cdot\overrightarrow{BD}=\overrightarrow{BC}\cdot\overrightarrow{BA}+BC^2=0+9=9\) (ou : le projeté de \(D\) sur \((BC)\) est \(C\)). <b>(2 pts : 1 + 1)</b></li>
<li>\(\vec u\cdot\vec v=\frac12\left(\|\vec u+\vec v\|^2-\|\vec u\|^2-\|\vec v\|^2\right)=\frac12(16-4-9)=\frac32\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Un triangle en repère", points: 5,
          enonce: R`Dans un repère orthonormé, \(A(1\,;1)\), \(B(5\,;3)\) et \(C(2\,;4)\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Calculer \(AB\) et \(AC\), puis la mesure exacte en degrés de \(\widehat{BAC}\).</li>
<li>Calculer \(BC\) et déterminer la nature du triangle \(ABC\).</li>
<li>Calculer l'aire du triangle \(ABC\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(4\,;2)\), \(\overrightarrow{AC}(1\,;3)\) ; \(\overrightarrow{AB}\cdot\overrightarrow{AC}=4+6=10\). <b>(1 pt)</b></li>
<li>\(AB=\sqrt{16+4}=\sqrt{20}=2\sqrt5\) ; \(AC=\sqrt{1+9}=\sqrt{10}\).<br>
\(\cos\widehat{BAC}=\frac{10}{\sqrt{20}\times\sqrt{10}}=\frac{10}{\sqrt{200}}=\frac{10}{10\sqrt2}=\frac{\sqrt2}{2}\), donc \(\widehat{BAC}=45^\circ\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{BC}(-3\,;1)\), \(BC=\sqrt{10}\). Donc \(AC=BC=\sqrt{10}\) : le triangle est isocèle en \(C\). De plus \(AC^2+BC^2=10+10=20=AB^2\) : d'après la réciproque de Pythagore, il est rectangle en \(C\). \(ABC\) est <b>rectangle isocèle en \(C\)</b> (cohérent avec l'angle de \(45^\circ\)). <b>(1,5 pt)</b></li>
<li>Triangle rectangle en \(C\) : \(\mathcal A=\frac{AC\times BC}{2}=\frac{\sqrt{10}\times\sqrt{10}}{2}=5\) unités d'aire. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Al-Kashi et médiane", points: 6,
          enonce: R`<ol><li>Énoncer et démontrer le théorème d'Al-Kashi.</li>
<li>Dans un triangle \(ABC\), \(AB=8\), \(AC=5\) et \(BC=7\). Calculer la mesure exacte de \(\widehat{BAC}\).</li>
<li>Soit \(I\) le milieu de \([BC]\). En utilisant \(AB^2+AC^2=2AI^2+\frac{BC^2}{2}\), calculer la longueur exacte de la médiane \(AI\), puis une valeur approchée au centième.</li></ol>`,
          correction: R`<ol><li><b>Énoncé :</b> dans tout triangle \(ABC\), \(BC^2=AB^2+AC^2-2\,AB\times AC\times\cos\widehat{BAC}\). <b>(0,5 pt)</b><br>
<b>Démonstration :</b> \(\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}\), donc \(BC^2=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2\). Comme \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}\), on obtient la formule. <b>(2 pts)</b></li>
<li>\(49=64+25-2\times8\times5\cos\widehat A\), donc \(80\cos\widehat A=89-49=40\) et \(\cos\widehat A=\frac12\). Comme \(\widehat A\in[0^\circ\,;180^\circ]\), \(\widehat{BAC}=60^\circ\). <b>(1,5 pt)</b></li>
<li>\(64+25=2AI^2+\frac{49}{2}\iff2AI^2=89-24{,}5=64{,}5\iff AI^2=32{,}25=\frac{129}{4}\).<br>
Donc \(AI=\frac{\sqrt{129}}{2}\approx5{,}68\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 4 — Ensembles de points", points: 4,
          enonce: R`\(A\) et \(B\) sont deux points tels que \(AB=8\) ; \(I\) est le milieu de \([AB]\).
<ol><li>Rappeler l'expression de \(\overrightarrow{MA}\cdot\overrightarrow{MB}\) en fonction de \(MI\) et \(AB\).</li>
<li>Déterminer l'ensemble des points \(M\) tels que : a) \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\) ; b) \(\overrightarrow{MA}\cdot\overrightarrow{MB}=9\) ; c) \(\overrightarrow{MA}\cdot\overrightarrow{MB}=-20\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{AB^2}{4}=MI^2-16\). <b>(1 pt)</b></li>
<li>a) \(MI^2=16\iff MI=4\) : cercle de centre \(I\) et de rayon \(4\), c'est-à-dire le cercle de diamètre \([AB]\). <b>(1 pt)</b><br>
b) \(MI^2=9+16=25\iff MI=5\) : cercle de centre \(I\) et de rayon \(5\). <b>(1 pt)</b><br>
c) \(MI^2=-20+16=-4\lt0\) : impossible, l'ensemble est vide. <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°2 — Produit scalaire et géométrie", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — QCM (aucune justification demandée)", points: 4,
          enonce: R`Pour chaque question, une seule réponse est exacte.
<ol><li>Dans un repère orthonormé, \(\vec u(2\,;-5)\) et \(\vec v(5\,;2)\) : a) \(\vec u\cdot\vec v=20\) ; b) \(\vec u\) et \(\vec v\) sont orthogonaux ; c) \(\vec u\) et \(\vec v\) sont colinéaires.</li>
<li>\(\|\vec u\|=1\), \(\|\vec v\|=2\), \(\vec u\cdot\vec v=-1\). Une mesure de \((\vec u,\vec v)\) est : a) \(\frac{\pi}{3}\) ; b) \(\frac{2\pi}{3}\) ; c) \(\frac{5\pi}{6}\).</li>
<li>\(\|\vec u\|=3\) et \(\|\vec v\|=5\). \((\vec u+\vec v)\cdot(\vec u-\vec v)=\) a) \(-16\) ; b) \(-4\) ; c) on ne peut pas savoir.</li>
<li>\(ABCD\) est un carré de côté \(2\). \(\overrightarrow{AC}\cdot\overrightarrow{BD}=\) a) \(8\) ; b) \(4\) ; c) \(0\).</li></ol>`,
          correction: R`<ol><li><b>b)</b> \(2\times5+(-5)\times2=0\). <b>(1 pt)</b></li>
<li><b>b)</b> \(\cos(\vec u,\vec v)=\frac{-1}{1\times2}=-\frac12\), donc l'angle mesure \(\frac{2\pi}{3}\). <b>(1 pt)</b></li>
<li><b>a)</b> \(\|\vec u\|^2-\|\vec v\|^2=9-25=-16\). <b>(1 pt)</b></li>
<li><b>c)</b> Les diagonales d'un carré sont perpendiculaires. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Un triangle quelconque", points: 6,
          enonce: R`\(ABC\) est un triangle tel que \(AB=6\), \(AC=4\) et \(\widehat{BAC}=60^\circ\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Calculer la longueur exacte \(BC\).</li>
<li>Soit \(I\) le milieu de \([BC]\). En écrivant \(\overrightarrow{AI}=\frac12\left(\overrightarrow{AB}+\overrightarrow{AC}\right)\), calculer \(AI\).</li>
<li>Soit \(H\) le projeté orthogonal de \(C\) sur \((AB)\). Calculer \(AH\), puis \(CH\), et en déduire l'aire du triangle \(ABC\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=6\times4\times\cos60^\circ=12\). <b>(1 pt)</b></li>
<li>Al-Kashi : \(BC^2=36+16-2\times12=28\), donc \(BC=\sqrt{28}=2\sqrt7\). <b>(1,5 pt)</b></li>
<li>\(AI^2=\frac14\left(\overrightarrow{AB}+\overrightarrow{AC}\right)^2=\frac14\left(AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AC^2\right)=\frac14(36+24+16)=\frac{76}{4}=19\). Donc \(AI=\sqrt{19}\).<br>
<i>Vérification avec le théorème de la médiane :</i> \(AB^2+AC^2=2AI^2+\frac{BC^2}{2}\) donne \(52=2\times19+14\). ✓ <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AH}\). Le produit est positif, donc \(\overrightarrow{AH}\) et \(\overrightarrow{AB}\) sont de même sens et \(AB\times AH=12\), soit \(AH=2\).<br>
Dans le triangle \(AHC\) rectangle en \(H\) : \(CH^2=AC^2-AH^2=16-4=12\), \(CH=2\sqrt3\).<br>
Aire : \(\frac{AB\times CH}{2}=\frac{6\times2\sqrt3}{2}=6\sqrt3\approx10{,}39\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 3 — Orthocentre", points: 5,
          enonce: R`Dans un repère orthonormé, \(A(-1\,;4)\), \(B(-3\,;0)\) et \(C(5\,;0)\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\), puis une valeur approchée au dixième de degré de \(\widehat{BAC}\).</li>
<li>Justifier que la hauteur issue de \(A\) a pour équation \(x=-1\).</li>
<li>Déterminer les coordonnées de l'orthocentre \(H\) du triangle \(ABC\).</li>
<li>Vérifier que \((CH)\perp(AB)\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(-2\,;-4)\), \(\overrightarrow{AC}(6\,;-4)\). \(\overrightarrow{AB}\cdot\overrightarrow{AC}=-12+16=4\).<br>
\(AB=\sqrt{4+16}=\sqrt{20}\), \(AC=\sqrt{36+16}=\sqrt{52}\). \(\cos\widehat{BAC}=\frac{4}{\sqrt{20}\times\sqrt{52}}=\frac{4}{\sqrt{1040}}=\frac{1}{\sqrt{65}}\approx0{,}124\), donc \(\widehat{BAC}\approx82{,}9^\circ\). <b>(1,5 pt)</b></li>
<li>\((BC)\) est l'axe des abscisses ; la hauteur issue de \(A\) est la perpendiculaire à cet axe passant par \(A\) : la droite verticale \(x=-1\). <b>(1 pt)</b></li>
<li>\(H(-1\,;h)\) est sur cette hauteur. Il faut aussi \((BH)\perp(AC)\) : \(\overrightarrow{BH}(2\,;h)\cdot\overrightarrow{AC}(6\,;-4)=12-4h=0\iff h=3\). Donc \(H(-1\,;3)\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{CH}(-6\,;3)\), \(\overrightarrow{AB}(-2\,;-4)\) : \(\overrightarrow{CH}\cdot\overrightarrow{AB}=12-12=0\). ✓ Les trois hauteurs sont bien concourantes en \(H\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Cercles et produit scalaire", points: 5,
          enonce: R`Dans un repère orthonormé d'origine \(O\), \(A(1\,;2)\) et \(B(5\,;-2)\) ; \(I\) est le milieu de \([AB]\).
<ol><li>Calculer les coordonnées de \(I\) et la longueur \(AB\).</li>
<li>Déterminer l'ensemble \(\Gamma\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\). Le point \(C(5\,;2)\) est-il sur \(\Gamma\) ? Que peut-on dire du triangle \(ABC\) ?</li>
<li>Déterminer l'ensemble \(\Gamma'\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=1\). Vérifier que \(O\) appartient à \(\Gamma'\) de deux manières.</li></ol>`,
          correction: R`<ol><li>\(I\left(\frac{1+5}{2}\,;\frac{2-2}{2}\right)=(3\,;0)\). \(AB^2=4^2+(-4)^2=32\), \(AB=\sqrt{32}=4\sqrt2\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{AB^2}{4}=MI^2-8\). Donc \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff MI=\sqrt8=2\sqrt2\) : \(\Gamma\) est le cercle de centre \(I(3\,;0)\) et de rayon \(2\sqrt2\) (cercle de diamètre \([AB]\)).<br>
\(IC^2=(5-3)^2+(2-0)^2=8\) : \(C\in\Gamma\). Donc \(\overrightarrow{CA}\cdot\overrightarrow{CB}=0\) : le triangle \(ABC\) est rectangle en \(C\). (Vérif : \(\overrightarrow{CA}(-4\,;0)\), \(\overrightarrow{CB}(0\,;-4)\), produit nul.) <b>(2 pts)</b></li>
<li>\(MI^2-8=1\iff MI=3\) : \(\Gamma'\) est le cercle de centre \(I\) et de rayon \(3\).<br>
1re manière : \(OI=3\), donc \(O\in\Gamma'\). 2e manière : \(\overrightarrow{OA}\cdot\overrightarrow{OB}=1\times5+2\times(-2)=5-4=1\). ✓ <b>(2 pts)</b></li></ol>` }
      ] },

    { titre: "DS n°3 — Forces, hexagone et navigation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Le travail d'une force", points: 5,
          enonce: R`En physique, le <b>travail</b> d'une force constante \(\vec F\) lors d'un déplacement rectiligne de \(A\) à \(B\) est le produit scalaire \(W=\vec F\cdot\overrightarrow{AB}\) (en joules, avec \(\|\vec F\|\) en newtons et \(AB\) en mètres). Les résultats seront arrondis au joule.
<ol><li>Élise tire sa valise à roulettes sur un quai horizontal rectiligne de \(150\) m. La force qu'elle exerce a pour intensité \(40\) N et fait un angle de \(30^\circ\) avec le déplacement. Calculer la valeur exacte, puis une valeur approchée, du travail de cette force.</li>
<li>Pendant ce même déplacement, le poids de la valise (force verticale, dirigée vers le bas, d'intensité \(180\) N) travaille-t-il ? Justifier.</li>
<li>Un skieur de poids \(700\) N descend en ligne droite une piste de \(300\) m inclinée de \(20^\circ\) par rapport à l'horizontale. Justifier que l'angle entre le poids et le déplacement mesure \(70^\circ\), puis calculer le travail du poids.</li>
<li>Élise tire maintenant avec la même force de \(40\) N sur les mêmes \(150\) m, mais en inclinant davantage la poignée. Quel doit être l'angle entre la force et le déplacement pour que le travail vaille \(3000\) J ?</li></ol>`,
          correction: R`<ol><li>\(W=\vec F\cdot\overrightarrow{AB}=\|\vec F\|\times AB\times\cos30^\circ=40\times150\times\frac{\sqrt3}{2}=3000\sqrt3\approx5196\) J. <b>(1,5 pt)</b></li>
<li>Le poids est vertical et le déplacement horizontal : les deux vecteurs sont orthogonaux, donc leur produit scalaire est nul. Le travail du poids est \(W=0\) J : le poids ne travaille pas. <b>(1 pt)</b></li>
<li>Le déplacement fait un angle de \(20^\circ\) avec l'horizontale et le poids est vertical, donc perpendiculaire à l'horizontale : l'angle entre le poids et le déplacement vaut \(90^\circ-20^\circ=70^\circ\).<br>
\(W=700\times300\times\cos70^\circ=210\,000\cos70^\circ\approx71\,824\) J (positif : le poids est « moteur » dans la descente). <b>(1,5 pt)</b></li>
<li>On cherche \(\alpha\in[0^\circ\,;180^\circ]\) tel que \(40\times150\times\cos\alpha=3000\), soit \(\cos\alpha=\frac{3000}{6000}=\frac12\). Donc \(\alpha=60^\circ\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Un hexagone régulier", points: 5,
          enonce: R`\(ABCDEF\) est un hexagone régulier de centre \(O\) et de côté \(2\). On rappelle que les six triangles \(OAB\), \(OBC\), …, \(OFA\) sont équilatéraux ; en particulier \(OA=OB=\dots=2\), et \(A\), \(O\), \(D\) sont alignés avec \(AD=4\).
<svg viewBox="0 0 200 180" width="200" role="img" aria-label="Hexagone régulier ABCDEF de centre O">
  <polygon points="170,90 135,29.4 65,29.4 30,90 65,150.6 135,150.6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="170" y1="90" x2="30" y2="90" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="170" y1="90" x2="65" y2="29.4" stroke="currentColor" stroke-dasharray="4 3"/>
  <circle cx="100" cy="90" r="2.5" fill="currentColor"/>
  <text x="174" y="94" font-size="12" fill="currentColor">A</text>
  <text x="137" y="24" font-size="12" fill="currentColor">B</text>
  <text x="55" y="24" font-size="12" fill="currentColor">C</text>
  <text x="16" y="94" font-size="12" fill="currentColor">D</text>
  <text x="55" y="166" font-size="12" fill="currentColor">E</text>
  <text x="137" y="166" font-size="12" fill="currentColor">F</text>
  <text x="96" y="105" font-size="12" fill="currentColor">O</text>
</svg>
<ol><li>Calculer \(\overrightarrow{OA}\cdot\overrightarrow{OB}\) et \(\overrightarrow{AB}\cdot\overrightarrow{AF}\).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AD}\).</li>
<li>Justifier que \(AC=2\sqrt3\), puis calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Justifier que \(\overrightarrow{ED}=\overrightarrow{AB}\), puis calculer \(\overrightarrow{AB}\cdot\overrightarrow{DE}\).</li>
<li>En utilisant le théorème de la médiane dans le triangle \(ACD\), démontrer que ce triangle est rectangle en \(C\).</li></ol>`,
          correction: R`<ol><li>\(OAB\) est équilatéral : \(\widehat{AOB}=60^\circ\), donc \(\overrightarrow{OA}\cdot\overrightarrow{OB}=2\times2\times\cos60^\circ=2\).<br>
Chaque angle intérieur d'un hexagone régulier mesure \(120^\circ\) (\(\widehat{FAB}=\widehat{FAO}+\widehat{OAB}=60^\circ+60^\circ\)), donc \(\overrightarrow{AB}\cdot\overrightarrow{AF}=2\times2\times\cos120^\circ=4\times\left(-\frac12\right)=-2\). <b>(1,5 pt)</b></li>
<li>\(D\) est sur la demi-droite \([AO)\), donc \(\widehat{BAD}=\widehat{BAO}=60^\circ\) et \(\overrightarrow{AB}\cdot\overrightarrow{AD}=2\times4\times\frac12=4\). <b>(1 pt)</b></li>
<li>Dans le triangle \(ABC\), \(AB=BC=2\) et \(\widehat{ABC}=120^\circ\). Al-Kashi : \(AC^2=4+4-2\times2\times2\times\cos120^\circ=8+4=12\), donc \(AC=2\sqrt3\).<br>
Formule avec les normes : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\frac12\left(AB^2+AC^2-BC^2\right)=\frac12(4+12-4)=6\). <b>(1 pt)</b></li>
<li>Les diagonales \([AD]\) et \([BE]\) de \(ABDE\) ont le même milieu \(O\) (ce sont deux diamètres du cercle circonscrit) : \(ABDE\) est un parallélogramme, donc \(\overrightarrow{AB}=\overrightarrow{ED}\). Ainsi \(\overrightarrow{DE}=-\overrightarrow{AB}\) et \(\overrightarrow{AB}\cdot\overrightarrow{DE}=-AB^2=-4\). <b>(0,5 pt)</b></li>
<li>\(O\) est le milieu de \([AD]\), donc \(\overrightarrow{CA}\cdot\overrightarrow{CD}=CO^2-\frac{AD^2}{4}=2^2-\frac{16}{4}=0\). Les vecteurs \(\overrightarrow{CA}\) et \(\overrightarrow{CD}\) sont orthogonaux : le triangle \(ACD\) est rectangle en \(C\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Navigation côtière", points: 6,
          enonce: R`Un voilier quitte le port \(P\) et navigue en ligne droite sur \(12\) milles jusqu'à une bouée \(B\). Il change alors de cap et parcourt \(7\) milles en ligne droite jusqu'à une île \(I\). On mesure \(\widehat{PBI}=115^\circ\). Les résultats seront arrondis au centième de mille et au dixième de degré.
<ol><li>Calculer la distance \(PI\) entre le port et l'île.</li>
<li>Calculer l'angle \(\widehat{BPI}\).</li>
<li>Calculer \(\overrightarrow{BP}\cdot\overrightarrow{BI}\). On note \(H\) le projeté orthogonal de \(I\) sur la droite \((PB)\). Préciser la position de \(H\) par rapport à \(P\) et \(B\), calculer \(BH\), puis la distance \(IH\) de l'île à la droite \((PB)\).</li></ol>`,
          correction: R`<ol><li>Al-Kashi dans le triangle \(PBI\) (l'angle connu \(\widehat B\) est opposé au côté \([PI]\)) :
\[PI^2=BP^2+BI^2-2\times BP\times BI\times\cos\widehat{PBI}=144+49-168\cos115^\circ\approx193+71{,}00=264{,}00.\]
Donc \(PI\approx16{,}25\) milles. <b>(2 pts)</b></li>
<li>Al-Kashi pour l'angle en \(P\), opposé au côté \([BI]\) : \(BI^2=PB^2+PI^2-2\times PB\times PI\times\cos\widehat{BPI}\), donc
\[\cos\widehat{BPI}=\frac{PB^2+PI^2-BI^2}{2\times PB\times PI}\approx\frac{144+264{,}00-49}{2\times12\times16{,}248}\approx0{,}9206,\]
et \(\widehat{BPI}\approx23{,}0^\circ\). <b>(2 pts)</b></li>
<li>\(\overrightarrow{BP}\cdot\overrightarrow{BI}=12\times7\times\cos115^\circ\approx-35{,}50\).<br>
Comme \(H\) est le projeté de \(I\) sur \((PB)\), \(\overrightarrow{BP}\cdot\overrightarrow{BI}=\overrightarrow{BP}\cdot\overrightarrow{BH}\). Ce produit est négatif : \(\overrightarrow{BH}\) et \(\overrightarrow{BP}\) sont de sens contraires, donc \(H\) est sur le prolongement de \([PB]\) au-delà de \(B\) (et non entre \(P\) et \(B\)).<br>
Alors \(-BP\times BH\approx-35{,}50\), d'où \(BH\approx\frac{35{,}50}{12}\approx2{,}96\) milles.<br>
Le triangle \(BHI\) est rectangle en \(H\) : \(IH=\sqrt{BI^2-BH^2}\approx\sqrt{49-8{,}75}\approx6{,}34\) milles. <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 4 — Deux balises", points: 4,
          enonce: R`Deux balises \(A\) et \(B\) sont distantes de \(10\) km ; \(I\) est le milieu de \([AB]\) et \(M\) un point quelconque du plan.
<ol><li>Démontrer que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-25\).</li>
<li>Déterminer l'ensemble des points \(M\) tels que :<br>
a) \(\overrightarrow{MA}\cdot\overrightarrow{MB}=11\) ; b) \(\overrightarrow{MA}\cdot\overrightarrow{MB}=-30\).</li>
<li>On admet que \(MA^2+MB^2=2MI^2+\frac{AB^2}{2}\). Déterminer l'ensemble des points \(M\) tels que \(MA^2+MB^2=68\).</li></ol>`,
          correction: R`<ol><li>Par Chasles, \(\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}\) et \(\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}=\overrightarrow{MI}-\overrightarrow{IA}\) car \(I\) est le milieu de \([AB]\). Donc
\[\overrightarrow{MA}\cdot\overrightarrow{MB}=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)\cdot\left(\overrightarrow{MI}-\overrightarrow{IA}\right)=MI^2-IA^2=MI^2-5^2=MI^2-25.\] <b>(1,5 pt)</b></li>
<li>a) \(MI^2-25=11\iff MI^2=36\iff MI=6\) : c'est le cercle de centre \(I\) et de rayon \(6\) km. <b>(1 pt)</b><br>
b) \(MI^2-25=-30\iff MI^2=-5\), impossible : l'ensemble est vide. <b>(0,5 pt)</b></li>
<li>\(2MI^2+\frac{100}{2}=68\iff2MI^2=18\iff MI^2=9\iff MI=3\) : c'est le cercle de centre \(I\) et de rayon \(3\) km. <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°4 — Tout en coordonnées", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ? (justifier)", points: 4,
          enonce: R`Dans tout l'exercice, le plan est muni d'un repère orthonormé. Dire si chaque affirmation est vraie ou fausse, en justifiant.
<ol><li>Les vecteurs \(\vec u(3\,;-2)\) et \(\vec v(4\,;6)\) sont orthogonaux.</li>
<li>Avec \(A(1\,;1)\), \(B(4\,;2)\) et \(C(0\,;5)\), le triangle \(ABC\) est rectangle en \(A\).</li>
<li>Si \(\|\vec u\|=2\) et \(\|\vec v\|=5\), alors \(\vec u\cdot\vec v\le10\).</li>
<li>Si \(\vec u\cdot\vec v=\vec u\cdot\vec w\) avec \(\vec u\neq\vec 0\), alors \(\vec v=\vec w\).</li></ol>`,
          correction: R`<ol><li><b>Vrai</b> : \(\vec u\cdot\vec v=3\times4+(-2)\times6=12-12=0\). <b>(1 pt)</b></li>
<li><b>Faux</b> : \(\overrightarrow{AB}(3\,;1)\), \(\overrightarrow{AC}(-1\,;4)\), \(\overrightarrow{AB}\cdot\overrightarrow{AC}=-3+4=1\neq0\), donc l'angle en \(A\) n'est pas droit. <b>(1 pt)</b></li>
<li><b>Vrai</b> : si l'un des vecteurs est nul, \(\vec u\cdot\vec v=0\le10\) ; sinon \(\vec u\cdot\vec v=2\times5\times\cos(\vec u,\vec v)=10\cos(\vec u,\vec v)\le10\) car un cosinus est toujours inférieur ou égal à \(1\). <b>(1 pt)</b></li>
<li><b>Faux</b> : contre-exemple \(\vec u(1\,;0)\), \(\vec v(0\,;1)\), \(\vec w(0\,;2)\). On a \(\vec u\cdot\vec v=0=\vec u\cdot\vec w\) mais \(\vec v\neq\vec w\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Un losange", points: 6,
          enonce: R`On considère les points \(A(-2\,;1)\), \(B(1\,;2)\), \(C(2\,;5)\) et \(D(-1\,;4)\).
<ol><li>Démontrer que \(ABCD\) est un parallélogramme.</li>
<li>Calculer \(\overrightarrow{AC}\cdot\overrightarrow{BD}\). En déduire que \(ABCD\) est un losange.</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AD}\), puis la valeur exacte de \(\cos\widehat{BAD}\). \(ABCD\) est-il un carré ?</li>
<li>Calculer l'aire du losange \(ABCD\).</li>
<li>Déterminer les coordonnées du point \(E\) de l'axe des ordonnées tel que les droites \((AE)\) et \((AB)\) soient perpendiculaires.</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(3\,;1)\) et \(\overrightarrow{DC}(2-(-1)\,;5-4)=(3\,;1)\). Donc \(\overrightarrow{AB}=\overrightarrow{DC}\) : \(ABCD\) est un parallélogramme. <b>(1 pt)</b></li>
<li>\(\overrightarrow{AC}(4\,;4)\), \(\overrightarrow{BD}(-2\,;2)\) : \(\overrightarrow{AC}\cdot\overrightarrow{BD}=-8+8=0\). Les diagonales du parallélogramme sont perpendiculaires : \(ABCD\) est un losange. <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AD}(1\,;3)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AD}=3\times1+1\times3=6\). \(AB=AD=\sqrt{9+1}=\sqrt{10}\).<br>
\(\cos\widehat{BAD}=\frac{6}{\sqrt{10}\times\sqrt{10}}=\frac{6}{10}=\frac35\). Ce cosinus n'est pas nul, donc \(\widehat{BAD}\) n'est pas droit : \(ABCD\) n'est pas un carré. <b>(1,5 pt)</b></li>
<li>\(AC=\sqrt{16+16}=4\sqrt2\) et \(BD=\sqrt{4+4}=2\sqrt2\). Aire \(=\frac{AC\times BD}{2}=\frac{4\sqrt2\times2\sqrt2}{2}=\frac{16}{2}=8\) unités d'aire. <b>(1 pt)</b></li>
<li>\(E(0\,;y)\), \(\overrightarrow{AE}(2\,;y-1)\). \((AE)\perp(AB)\iff\overrightarrow{AE}\cdot\overrightarrow{AB}=0\iff2\times3+(y-1)\times1=0\iff y+5=0\iff y=-5\). Donc \(E(0\,;-5)\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Projeté orthogonal et aire", points: 5,
          enonce: R`On considère \(A(1\,;1)\), \(B(5\,;3)\) et \(C(1\,;6)\). On note \(H\) le projeté orthogonal de \(C\) sur la droite \((AB)\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) et la longueur \(AB\).</li>
<li>En utilisant la projection orthogonale, calculer la longueur \(AH\) et justifier que \(H\) appartient à la demi-droite \([AB)\).</li>
<li>En déduire que \(\overrightarrow{AH}=\frac12\overrightarrow{AB}\), puis les coordonnées de \(H\).</li>
<li>Calculer \(CH\) et en déduire l'aire du triangle \(ABC\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(4\,;2)\), \(\overrightarrow{AC}(0\,;5)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=0+10=10\). \(AB=\sqrt{16+4}=\sqrt{20}=2\sqrt5\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AH}\). Ce produit est positif, donc \(\overrightarrow{AH}\) et \(\overrightarrow{AB}\) sont de même sens (\(H\in[AB)\)) et \(AB\times AH=10\), soit \(AH=\frac{10}{2\sqrt5}=\frac{5}{\sqrt5}=\sqrt5\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AH}\) et \(\overrightarrow{AB}\) sont colinéaires de même sens avec \(\frac{AH}{AB}=\frac{\sqrt5}{2\sqrt5}=\frac12\), donc \(\overrightarrow{AH}=\frac12\overrightarrow{AB}\), c'est-à-dire \(\overrightarrow{AH}(2\,;1)\) : \(H(3\,;2)\) (c'est le milieu de \([AB]\)). <b>(1 pt)</b></li>
<li>\(\overrightarrow{CH}(2\,;-4)\), \(CH=\sqrt{4+16}=\sqrt{20}=2\sqrt5\). (Vérification : \(\overrightarrow{CH}\cdot\overrightarrow{AB}=8-8=0\) ✓.)<br>
\([CH]\) est la hauteur issue de \(C\) : aire \(=\frac{AB\times CH}{2}=\frac{2\sqrt5\times2\sqrt5}{2}=10\) unités d'aire. <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Un cercle défini par un produit scalaire", points: 5,
          enonce: R`On considère \(A(-1\,;-2)\) et \(B(5\,;2)\). Pour tout point \(M(x\,;y)\), on s'intéresse à \(\overrightarrow{MA}\cdot\overrightarrow{MB}\).
<ol><li>Démontrer que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=x^2+y^2-4x-9\).</li>
<li>Vérifier que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=(x-2)^2+y^2-13\).</li>
<li>En déduire la nature et les éléments caractéristiques de l'ensemble \(\mathcal C\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\). Retrouver ce résultat à l'aide du milieu \(I\) de \([AB]\).</li>
<li>Déterminer les points de \(\mathcal C\) situés sur l'axe des ordonnées. Que peut-on dire des triangles \(APB\) correspondants ?</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{MA}(-1-x\,;-2-y)\) et \(\overrightarrow{MB}(5-x\,;2-y)\).<br>
\(\overrightarrow{MA}\cdot\overrightarrow{MB}=(-1-x)(5-x)+(-2-y)(2-y)=(-5+x-5x+x^2)+(-4+2y-2y+y^2)=x^2+y^2-4x-9\). <b>(1,5 pt)</b></li>
<li>\((x-2)^2+y^2-13=x^2-4x+4+y^2-13=x^2+y^2-4x-9\). ✓ <b>(1 pt)</b></li>
<li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff(x-2)^2+y^2=13\iff\Omega M^2=13\) avec \(\Omega(2\,;0)\) : \(\mathcal C\) est le cercle de centre \(\Omega(2\,;0)\) et de rayon \(\sqrt{13}\).<br>
Avec le cours : c'est le cercle de diamètre \([AB]\). Son centre est \(I\left(\frac{-1+5}{2}\,;\frac{-2+2}{2}\right)=(2\,;0)=\Omega\) et son rayon \(\frac{AB}{2}=\frac{\sqrt{36+16}}{2}=\frac{\sqrt{52}}{2}=\sqrt{13}\). ✓ <b>(1,5 pt)</b></li>
<li>Pour \(x=0\) : \(4+y^2=13\iff y^2=9\iff y=3\) ou \(y=-3\). Points \(P_1(0\,;3)\) et \(P_2(0\,;-3)\).<br>
Pour ces points, \(\overrightarrow{PA}\cdot\overrightarrow{PB}=0\) : les triangles \(AP_1B\) et \(AP_2B\) sont rectangles en \(P_1\) et \(P_2\). (Vérif. pour \(P_1\) : \(\overrightarrow{P_1A}(-1\,;-5)\cdot\overrightarrow{P_1B}(5\,;-1)=-5+5=0\).) <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°5 — Triangles quelconques et parallélogrammes", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — De part et d'autre d'un lac", points: 5,
          enonce: R`Pour mesurer la distance entre deux pontons \(A\) et \(B\) situés de part et d'autre d'un lac, un géomètre se place en un point \(O\) d'où il voit les deux pontons. Il mesure \(OA=120\) m, \(OB=85\) m et \(\widehat{AOB}=72^\circ\).
<ol><li>Calculer la distance \(AB\), arrondie au décimètre.</li>
<li>Calculer une mesure de l'angle \(\widehat{OAB}\), arrondie au dixième de degré.</li>
<li>Calculer \(\overrightarrow{OA}\cdot\overrightarrow{OB}\) (arrondi à l'unité).</li></ol>`,
          correction: R`<ol><li>Al-Kashi dans le triangle \(OAB\) : \(AB^2=OA^2+OB^2-2\times OA\times OB\times\cos\widehat{AOB}=14\,400+7\,225-20\,400\cos72^\circ\approx21\,625-6\,303{,}9=15\,321{,}1\).<br>
Donc \(AB\approx123{,}8\) m. <b>(2 pts)</b></li>
<li>L'angle en \(A\) est opposé au côté \([OB]\) : \(OB^2=OA^2+AB^2-2\times OA\times AB\times\cos\widehat{OAB}\), donc
\[\cos\widehat{OAB}=\frac{OA^2+AB^2-OB^2}{2\times OA\times AB}\approx\frac{14\,400+15\,321{,}1-7\,225}{2\times120\times123{,}78}\approx0{,}7573,\]
d'où \(\widehat{OAB}\approx40{,}8^\circ\). <b>(2 pts)</b></li>
<li>\(\overrightarrow{OA}\cdot\overrightarrow{OB}=120\times85\times\cos72^\circ=10\,200\cos72^\circ\approx3\,152\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Les trois angles d'un triangle", points: 6,
          enonce: R`\(ABC\) est un triangle tel que \(AB=6\), \(AC=7\) et \(BC=9\). Les angles seront arrondis au dixième de degré.
<ol><li>Calculer la valeur exacte de \(\cos\widehat{BAC}\), puis une mesure de \(\widehat{BAC}\). Le triangle est-il rectangle ?</li>
<li>Calculer de même \(\widehat{ABC}\), puis en déduire \(\widehat{ACB}\).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) sans utiliser d'angle.</li>
<li>Soit \(I\) le milieu de \([BC]\). Calculer la longueur exacte de la médiane \(AI\).</li></ol>`,
          correction: R`<ol><li>Al-Kashi : \(BC^2=AB^2+AC^2-2\times AB\times AC\times\cos\widehat A\), donc \(\cos\widehat A=\frac{36+49-81}{2\times6\times7}=\frac{4}{84}=\frac{1}{21}\).<br>
\(\widehat{BAC}\approx87{,}3^\circ\). Comme \(\cos\widehat A\neq0\), l'angle n'est pas droit (et c'est le plus grand angle, opposé au plus grand côté) : le triangle n'est pas rectangle, il est même acutangle. <b>(1,5 pt)</b></li>
<li>\(\cos\widehat B=\frac{AB^2+BC^2-AC^2}{2\times AB\times BC}=\frac{36+81-49}{108}=\frac{68}{108}=\frac{17}{27}\), donc \(\widehat{ABC}\approx51{,}0^\circ\).<br>
\(\widehat{ACB}=180^\circ-\widehat A-\widehat B\approx41{,}8^\circ\) (calcul fait avec les valeurs non arrondies ; on peut vérifier avec \(\cos\widehat C=\frac{49+81-36}{126}=\frac{47}{63}\)). <b>(2 pts)</b></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=\frac12\left(AB^2+AC^2-BC^2\right)=\frac12(36+49-81)=2\). (Cohérent : \(6\times7\times\frac1{21}=2\).) <b>(1 pt)</b></li>
<li>Théorème de la médiane : \(AB^2+AC^2=2AI^2+\frac{BC^2}{2}\), soit \(85=2AI^2+40{,}5\), donc \(AI^2=22{,}25=\frac{89}{4}\) et \(AI=\frac{\sqrt{89}}{2}\approx4{,}72\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Les diagonales d'un parallélogramme", points: 5,
          enonce: R`\(ABCD\) est un parallélogramme tel que \(AB=5\), \(AD=3\) et \(AC=7\).
<ol><li>En écrivant \(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}\), calculer \(\overrightarrow{AB}\cdot\overrightarrow{AD}\).</li>
<li>En déduire la mesure exacte de l'angle \(\widehat{BAD}\).</li>
<li>Exprimer \(\overrightarrow{BD}\) en fonction de \(\overrightarrow{AB}\) et \(\overrightarrow{AD}\), puis calculer la longueur exacte \(BD\).</li>
<li>Vérifier que \(AC^2+BD^2=2\left(AB^2+AD^2\right)\).</li></ol>`,
          correction: R`<ol><li>\(AC^2=\left(\overrightarrow{AB}+\overrightarrow{AD}\right)^2=AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AD}+AD^2\), donc \(49=25+2\,\overrightarrow{AB}\cdot\overrightarrow{AD}+9\) et \(\overrightarrow{AB}\cdot\overrightarrow{AD}=\frac{15}{2}=7{,}5\). <b>(1,5 pt)</b></li>
<li>\(\cos\widehat{BAD}=\frac{7{,}5}{5\times3}=\frac12\), et \(\widehat{BAD}\in[0^\circ\,;180^\circ]\), donc \(\widehat{BAD}=60^\circ\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{BD}=\overrightarrow{BA}+\overrightarrow{AD}=\overrightarrow{AD}-\overrightarrow{AB}\). Donc \(BD^2=AD^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AD}+AB^2=9-15+25=19\) et \(BD=\sqrt{19}\). <b>(1,5 pt)</b></li>
<li>\(AC^2+BD^2=49+19=68\) et \(2\left(AB^2+AD^2\right)=2(25+9)=68\). ✓ (C'est la « règle du parallélogramme ».) <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Théorème de la médiane", points: 4,
          enonce: R`<ol><li>Soient \(B\) et \(C\) deux points, \(I\) le milieu de \([BC]\) et \(M\) un point quelconque. Démontrer que \(MB^2+MC^2=2MI^2+\frac{BC^2}{2}\).</li>
<li>Dans un triangle \(ABC\), \(AB=4\), \(AC=6\) et la médiane issue de \(A\) mesure \(AI=\sqrt{19}\). Calculer \(BC\), puis la mesure exacte de \(\widehat{BAC}\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}\) et \(\overrightarrow{MC}=\overrightarrow{MI}+\overrightarrow{IC}=\overrightarrow{MI}-\overrightarrow{IB}\) (car \(I\) est le milieu de \([BC]\)).<br>
\(MB^2+MC^2=\left(MI^2+2\,\overrightarrow{MI}\cdot\overrightarrow{IB}+IB^2\right)+\left(MI^2-2\,\overrightarrow{MI}\cdot\overrightarrow{IB}+IB^2\right)=2MI^2+2IB^2\).<br>
Or \(IB=\frac{BC}{2}\), donc \(2IB^2=\frac{BC^2}{2}\) : \(MB^2+MC^2=2MI^2+\frac{BC^2}{2}\). <b>(2 pts)</b></li>
<li>Avec \(M=A\) : \(16+36=2\times19+\frac{BC^2}{2}\), donc \(\frac{BC^2}{2}=14\), \(BC^2=28\) et \(BC=2\sqrt7\). <b>(1 pt)</b><br>
Al-Kashi : \(\cos\widehat{BAC}=\frac{AB^2+AC^2-BC^2}{2\times AB\times AC}=\frac{16+36-28}{48}=\frac{24}{48}=\frac12\), donc \(\widehat{BAC}=60^\circ\). <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°6 — Projections dans les figures", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Un rectangle et ses diagonales", points: 6,
          enonce: R`\(ABCD\) est un rectangle tel que \(AB=6\) et \(AD=4\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) et \(\overrightarrow{AD}\cdot\overrightarrow{AC}\) à l'aide de projections orthogonales.</li>
<li>En écrivant \(\overrightarrow{AC}\) et \(\overrightarrow{BD}\) en fonction de \(\overrightarrow{AB}\) et \(\overrightarrow{AD}\), calculer \(\overrightarrow{AC}\cdot\overrightarrow{BD}\).</li>
<li>Calculer \(AC\) et \(BD\), puis la valeur exacte du cosinus de l'angle \(\left(\overrightarrow{AC},\overrightarrow{BD}\right)\).</li>
<li>\(M\) est un point du segment \([AB]\) ; on pose \(AM=x\) avec \(x\in[0\,;6]\). Démontrer que \(\overrightarrow{DM}\cdot\overrightarrow{AC}=6x-16\), puis déterminer la position de \(M\) pour laquelle les droites \((DM)\) et \((AC)\) sont perpendiculaires.</li></ol>`,
          correction: R`<ol><li>Le projeté orthogonal de \(C\) sur \((AB)\) est \(B\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\overrightarrow{AB}\cdot\overrightarrow{AB}=AB^2=36\).<br>
Le projeté orthogonal de \(C\) sur \((AD)\) est \(D\) : \(\overrightarrow{AD}\cdot\overrightarrow{AC}=AD^2=16\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}\) et \(\overrightarrow{BD}=\overrightarrow{BA}+\overrightarrow{AD}=\overrightarrow{AD}-\overrightarrow{AB}\). Donc
\[\overrightarrow{AC}\cdot\overrightarrow{BD}=\left(\overrightarrow{AD}+\overrightarrow{AB}\right)\cdot\left(\overrightarrow{AD}-\overrightarrow{AB}\right)=AD^2-AB^2=16-36=-20.\] <b>(1,5 pt)</b></li>
<li>Pythagore : \(AC=BD=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}\).<br>
\(\cos\left(\overrightarrow{AC},\overrightarrow{BD}\right)=\frac{-20}{\sqrt{52}\times\sqrt{52}}=-\frac{20}{52}=-\frac{5}{13}\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{DM}=\overrightarrow{DA}+\overrightarrow{AM}\), donc \(\overrightarrow{DM}\cdot\overrightarrow{AC}=\overrightarrow{DA}\cdot\overrightarrow{AC}+\overrightarrow{AM}\cdot\overrightarrow{AC}\).<br>
\(\overrightarrow{DA}\cdot\overrightarrow{AC}=-\overrightarrow{AD}\cdot\overrightarrow{AC}=-16\). Le projeté de \(C\) sur \((AB)\) est \(B\) et \(\overrightarrow{AM}\), \(\overrightarrow{AB}\) sont de même sens : \(\overrightarrow{AM}\cdot\overrightarrow{AC}=AM\times AB=6x\).<br>
Donc \(\overrightarrow{DM}\cdot\overrightarrow{AC}=6x-16\), et \((DM)\perp(AC)\iff6x-16=0\iff x=\frac83\). Comme \(\frac83\in[0\,;6]\), le point cherché est le point \(M\) de \([AB]\) tel que \(AM=\frac83\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 2 — Un losange", points: 5,
          enonce: R`\(ABCD\) est un losange de côté \(5\), de centre \(O\), dont la diagonale \([AC]\) mesure \(8\).
<ol><li>Justifier que \(BD=6\).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) à l'aide d'un projeté orthogonal.</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AD}\) à l'aide des normes, puis \(\cos\widehat{BAD}\).</li>
<li>Calculer \(\overrightarrow{BA}\cdot\overrightarrow{BC}\). Que peut-on en déduire pour l'angle \(\widehat{ABC}\) ?</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{DC}\).</li></ol>`,
          correction: R`<ol><li>Les diagonales d'un losange se coupent en leur milieu \(O\) et sont perpendiculaires. Dans le triangle \(AOB\) rectangle en \(O\), \(AO=4\) et \(AB=5\), donc \(OB=\sqrt{25-16}=3\) et \(BD=2\times3=6\). <b>(1 pt)</b></li>
<li>Comme \((BO)\perp(AC)\), le projeté orthogonal de \(B\) sur \((AC)\) est \(O\), et \(\overrightarrow{AO}\), \(\overrightarrow{AC}\) sont de même sens : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AO\times AC=4\times8=32\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AD}=\frac12\left(AB^2+AD^2-BD^2\right)=\frac12(25+25-36)=7\), et \(\cos\widehat{BAD}=\frac{7}{5\times5}=\frac{7}{25}\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{BA}\cdot\overrightarrow{BC}=\frac12\left(BA^2+BC^2-AC^2\right)=\frac12(25+25-64)=-7\). Le produit scalaire est négatif, donc \(\widehat{ABC}\) est obtus (\(\cos\widehat{ABC}=-\frac{7}{25}\)). <b>(1 pt)</b></li>
<li>\(\overrightarrow{DC}=\overrightarrow{AB}\) (un losange est un parallélogramme), donc \(\overrightarrow{AB}\cdot\overrightarrow{DC}=AB^2=25\). <b>(0,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Dans un demi-cercle", points: 5,
          enonce: R`\([AB]\) est un segment de longueur \(10\) et \(\mathcal C\) le cercle de diamètre \([AB]\). \(M\) est un point de \(\mathcal C\), distinct de \(A\) et \(B\), et \(H\) son projeté orthogonal sur \((AB)\). On suppose que \(AH=2\), avec \(H\in[AB]\) (donc \(HB=8\)).
<svg viewBox="0 0 220 150" width="220" role="img" aria-label="Demi-cercle de diamètre AB, point M sur le cercle et H son projeté sur AB">
  <path d="M20,130 A90,90 0 0 1 200,130" fill="none" stroke="currentColor"/>
  <line x1="20" y1="130" x2="200" y2="130" stroke="currentColor"/>
  <line x1="20" y1="130" x2="56" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="56" y1="58" x2="200" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="56" y1="58" x2="56" y2="130" stroke="currentColor" stroke-dasharray="4 3"/>
  <polyline points="56,122 64,122 64,130" fill="none" stroke="currentColor"/>
  <text x="8" y="144" font-size="12" fill="currentColor">A</text>
  <text x="202" y="144" font-size="12" fill="currentColor">B</text>
  <text x="46" y="52" font-size="12" fill="currentColor">M</text>
  <text x="52" y="145" font-size="12" fill="currentColor">H</text>
</svg>
<ol><li>Justifier que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AM}\) de deux façons : en projetant \(M\) sur \((AB)\), puis en projetant \(B\) sur \((AM)\). En déduire \(AM\).</li>
<li>De même, calculer \(BM\).</li>
<li>Calculer \(MH\) et vérifier que \(MH^2=AH\times HB\).</li></ol>`,
          correction: R`<ol><li>\(M\) appartient au cercle de diamètre \([AB]\) : d'après le cours, \(\overrightarrow{MA}\cdot\overrightarrow{MB}=0\) (le triangle \(AMB\) est rectangle en \(M\)). <b>(1 pt)</b></li>
<li>Le projeté de \(M\) sur \((AB)\) est \(H\), avec \(\overrightarrow{AH}\) et \(\overrightarrow{AB}\) de même sens : \(\overrightarrow{AB}\cdot\overrightarrow{AM}=AB\times AH=10\times2=20\).<br>
Comme \((BM)\perp(AM)\), le projeté de \(B\) sur \((AM)\) est \(M\) : \(\overrightarrow{AB}\cdot\overrightarrow{AM}=\overrightarrow{AM}\cdot\overrightarrow{AM}=AM^2\).<br>
Donc \(AM^2=20\) et \(AM=2\sqrt5\). <b>(2 pts)</b></li>
<li>De même \(\overrightarrow{BA}\cdot\overrightarrow{BM}=BA\times BH=10\times8=80\) et \(\overrightarrow{BA}\cdot\overrightarrow{BM}=BM^2\), donc \(BM=\sqrt{80}=4\sqrt5\). (Vérification : \(AM^2+BM^2=20+80=100=AB^2\) ✓.) <b>(1 pt)</b></li>
<li>Triangle \(AHM\) rectangle en \(H\) : \(MH^2=AM^2-AH^2=20-4=16\), donc \(MH=4\). Et \(AH\times HB=2\times8=16=MH^2\). ✓ <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Ensembles de points autour d'un carré", points: 4,
          enonce: R`\(ABCD\) est un carré de côté \(4\), de centre \(O\) ; \(I\) est le milieu de \([AB]\). On rappelle que pour tous points \(P\), \(Q\) de milieu \(K\) et tout point \(M\), \(\overrightarrow{MP}\cdot\overrightarrow{MQ}=MK^2-\frac{PQ^2}{4}\).
<ol><li>Déterminer l'ensemble \(\mathcal E_1\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MC}=0\). Les points \(B\) et \(D\) appartiennent-ils à \(\mathcal E_1\) ?</li>
<li>Déterminer l'ensemble \(\mathcal E_2\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=-4\).</li>
<li>Déterminer l'ensemble \(\mathcal E_3\) des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=16\) et vérifier que \(C\) et \(D\) appartiennent à \(\mathcal E_3\).</li></ol>`,
          correction: R`<ol><li>\(\mathcal E_1\) est le cercle de diamètre \([AC]\) : centre \(O\) (milieu de \([AC]\)) et rayon \(\frac{AC}{2}=\frac{4\sqrt2}{2}=2\sqrt2\).<br>
\(\widehat{ABC}\) est droit, donc \(\overrightarrow{BA}\cdot\overrightarrow{BC}=0\) : \(B\in\mathcal E_1\). De même \(D\in\mathcal E_1\) (c'est le cercle circonscrit au carré). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{16}{4}=MI^2-4\). Donc \(MI^2-4=-4\iff MI=0\iff M=I\) : \(\mathcal E_2=\{I\}\), un seul point. <b>(1 pt)</b></li>
<li>\(MI^2-4=16\iff MI^2=20\iff MI=2\sqrt5\) : cercle de centre \(I\) et de rayon \(2\sqrt5\).<br>
Triangle \(IBC\) rectangle en \(B\) : \(IC^2=IB^2+BC^2=4+16=20\), donc \(C\in\mathcal E_3\) ; de même \(ID^2=IA^2+AD^2=20\), donc \(D\in\mathcal E_3\). <b>(1,5 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°7 — Angles et orthogonalité en repère", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Les angles d'un triangle", points: 5,
          enonce: R`Dans un repère orthonormé, on considère \(A(-2\,;1)\), \(B(4\,;3)\) et \(C(1\,;6)\). Les angles seront arrondis au dixième de degré.
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\), les longueurs \(AB\) et \(AC\), puis une mesure de \(\widehat{BAC}\).</li>
<li>Calculer une mesure de \(\widehat{ABC}\) ; on donnera d'abord la valeur exacte de son cosinus sous la forme \(\frac{1}{\sqrt k}\).</li>
<li>Calculer une mesure de \(\widehat{ACB}\) par un produit scalaire et vérifier la cohérence du résultat.</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(6\,;2)\), \(\overrightarrow{AC}(3\,;5)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=18+10=28\). \(AB=\sqrt{40}=2\sqrt{10}\), \(AC=\sqrt{34}\).<br>
\(\cos\widehat{BAC}=\frac{28}{\sqrt{40}\times\sqrt{34}}=\frac{28}{\sqrt{1360}}\approx0{,}7593\), donc \(\widehat{BAC}\approx40{,}6^\circ\). <b>(2 pts)</b></li>
<li>\(\overrightarrow{BA}(-6\,;-2)\), \(\overrightarrow{BC}(-3\,;3)\) : \(\overrightarrow{BA}\cdot\overrightarrow{BC}=18-6=12\) ; \(BC=\sqrt{18}=3\sqrt2\).<br>
\(\cos\widehat{ABC}=\frac{12}{\sqrt{40}\times\sqrt{18}}=\frac{12}{\sqrt{720}}=\frac{12}{12\sqrt5}=\frac{1}{\sqrt5}\approx0{,}4472\), donc \(\widehat{ABC}\approx63{,}4^\circ\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{CA}(-3\,;-5)\), \(\overrightarrow{CB}(3\,;-3)\) : \(\overrightarrow{CA}\cdot\overrightarrow{CB}=-9+15=6\).<br>
\(\cos\widehat{ACB}=\frac{6}{\sqrt{34}\times\sqrt{18}}=\frac{6}{\sqrt{612}}\approx0{,}2425\), donc \(\widehat{ACB}\approx76{,}0^\circ\).<br>
Cohérence : \(40{,}6+63{,}4+76{,}0=180\) : la somme des angles vaut bien \(180^\circ\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Des angles droits sur les axes", points: 5,
          enonce: R`Dans un repère orthonormé, on considère \(A(0\,;2)\) et \(B(5\,;3)\).
<ol><li>Soit \(M(x\,;0)\) un point de l'axe des abscisses. Exprimer \(\overrightarrow{MA}\cdot\overrightarrow{MB}\) en fonction de \(x\).</li>
<li>En déduire les points \(M\) de l'axe des abscisses tels que le triangle \(AMB\) soit rectangle en \(M\).</li>
<li>Soit \(I\) le milieu de \([AB]\). Interpréter le résultat précédent à l'aide d'un cercle que l'on précisera, et vérifier le résultat pour l'un des points trouvés.</li>
<li>Existe-t-il un point \(N\) de l'axe des ordonnées, distinct de \(A\), tel que \(ANB\) soit rectangle en \(N\) ?</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{MA}(-x\,;2)\), \(\overrightarrow{MB}(5-x\,;3)\) : \(\overrightarrow{MA}\cdot\overrightarrow{MB}=-x(5-x)+6=x^2-5x+6\). <b>(1,5 pt)</b></li>
<li>\(AMB\) est rectangle en \(M\iff\overrightarrow{MA}\cdot\overrightarrow{MB}=0\iff x^2-5x+6=0\).<br>
\(\Delta=25-24=1\), \(x_1=\frac{5-1}{2}=2\), \(x_2=\frac{5+1}{2}=3\). Les points cherchés sont \(M_1(2\,;0)\) et \(M_2(3\,;0)\). <b>(1,5 pt)</b></li>
<li>Ces points sont les intersections de l'axe des abscisses avec le cercle de diamètre \([AB]\), de centre \(I(2{,}5\,;2{,}5)\) et de rayon \(\frac{AB}{2}=\frac{\sqrt{25+1}}{2}=\frac{\sqrt{26}}{2}\).<br>
Vérification : \(IM_1^2=(2-2{,}5)^2+(0-2{,}5)^2=0{,}25+6{,}25=6{,}5=\frac{26}{4}\). ✓ <b>(1 pt)</b></li>
<li>\(N(0\,;y)\) : \(\overrightarrow{NA}(0\,;2-y)\), \(\overrightarrow{NB}(5\,;3-y)\), \(\overrightarrow{NA}\cdot\overrightarrow{NB}=(2-y)(3-y)=0\iff y=2\) ou \(y=3\).<br>
\(y=2\) donne \(N=A\) (exclu). Donc \(N(0\,;3)\) convient : \(\overrightarrow{NA}(0\,;-1)\cdot\overrightarrow{NB}(5\,;0)=0\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Un paramètre", points: 5,
          enonce: R`Dans un repère orthonormé, pour tout réel \(m\), on considère les vecteurs \(\vec u(m\,;4)\) et \(\vec v(m-3\,;m)\).
<ol><li>Déterminer les valeurs de \(m\) pour lesquelles \(\vec u\) et \(\vec v\) sont orthogonaux.</li>
<li>Existe-t-il des valeurs de \(m\) pour lesquelles \(\vec u\) et \(\vec v\) sont colinéaires ?</li>
<li>On prend \(m=1\). Calculer une mesure de l'angle \((\vec u,\vec v)\) arrondie au dixième de degré.</li></ol>`,
          correction: R`<ol><li>\(\vec u\cdot\vec v=m(m-3)+4m=m^2+m=m(m+1)\). \(\vec u\perp\vec v\iff m(m+1)=0\iff m=0\) ou \(m=-1\). <b>(2 pts)</b></li>
<li>\(\vec u\) et \(\vec v\) colinéaires \(\iff\det(\vec u,\vec v)=m\times m-4(m-3)=0\iff m^2-4m+12=0\).<br>
\(\Delta=16-48=-32\lt0\) : pas de solution, \(\vec u\) et \(\vec v\) ne sont jamais colinéaires. <b>(1,5 pt)</b></li>
<li>\(\vec u(1\,;4)\), \(\vec v(-2\,;1)\) : \(\vec u\cdot\vec v=-2+4=2\), \(\|\vec u\|=\sqrt{17}\), \(\|\vec v\|=\sqrt5\).<br>
\(\cos(\vec u,\vec v)=\frac{2}{\sqrt{17}\times\sqrt5}=\frac{2}{\sqrt{85}}\approx0{,}2169\), donc l'angle mesure environ \(77{,}5^\circ\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Un terrain triangulaire", points: 5,
          enonce: R`Un terrain a la forme d'un triangle \(ABC\) avec \(AB=50\) m, \(AC=35\) m et \(\widehat{BAC}=48^\circ\).
<ol><li>Calculer la longueur \(BC\) au centimètre près.</li>
<li>Calculer une mesure de \(\widehat{ABC}\) au dixième de degré.</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\). On note \(H\) le projeté orthogonal de \(C\) sur \((AB)\) : en déduire \(AH\).</li>
<li>Calculer \(CH\), puis l'aire du terrain au mètre carré près.</li></ol>`,
          correction: R`<ol><li>Al-Kashi : \(BC^2=50^2+35^2-2\times50\times35\times\cos48^\circ=3725-3500\cos48^\circ\approx1383{,}04\). Donc \(BC\approx37{,}19\) m. <b>(1,5 pt)</b></li>
<li>\(\cos\widehat{ABC}=\frac{AB^2+BC^2-AC^2}{2\times AB\times BC}\approx\frac{2500+1383{,}04-1225}{2\times50\times37{,}189}\approx0{,}7147\), donc \(\widehat{ABC}\approx44{,}4^\circ\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=50\times35\times\cos48^\circ\approx1171{,}0\). Ce nombre est positif, donc \(H\in[AB)\) et \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AH\), d'où \(AH=35\cos48^\circ\approx23{,}42\) m. <b>(1 pt)</b></li>
<li>Triangle \(AHC\) rectangle en \(H\) : \(CH=\sqrt{AC^2-AH^2}\approx\sqrt{1225-548{,}48}\approx26{,}01\) m.<br>
Aire \(=\frac{AB\times CH}{2}\approx\frac{50\times26{,}01}{2}\approx650\) m². <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°8 — Règles de calcul et bilinéarité", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — QCM (aucune justification demandée)", points: 4,
          enonce: R`Pour chaque question, une seule réponse est exacte.
<ol><li>\(\|\vec u\|=4\), \(\|\vec v\|=3\) et \(\|\vec u-\vec v\|=5\). Alors \(\vec u\cdot\vec v=\) a) \(0\) ; b) \(12\) ; c) \(-12\).</li>
<li>\(\|\vec u\|=1\), \(\|\vec v\|=2\) et \(\vec u\cdot\vec v=1\). Alors \(\|\vec u-\vec v\|^2=\) a) \(3\) ; b) \(5\) ; c) \(1\).</li>
<li>\(ABC\) est un triangle équilatéral de côté \(6\). \(\overrightarrow{AB}\cdot\overrightarrow{BC}=\) a) \(18\) ; b) \(-18\) ; c) \(0\).</li>
<li>Dans un repère orthonormé, \(\vec u(\sqrt2\,;1)\) et \(\vec v(1\,;-\sqrt2)\) sont : a) colinéaires ; b) orthogonaux ; c) tels que \(\vec u\cdot\vec v=2\).</li></ol>`,
          correction: R`<ol><li><b>a)</b> \(\vec u\cdot\vec v=\frac12\left(\|\vec u\|^2+\|\vec v\|^2-\|\vec u-\vec v\|^2\right)=\frac12(16+9-25)=0\). <b>(1 pt)</b></li>
<li><b>a)</b> \(\|\vec u-\vec v\|^2=1-2\times1+4=3\). <b>(1 pt)</b></li>
<li><b>b)</b> L'angle entre \(\overrightarrow{AB}\) et \(\overrightarrow{BC}\) mesure \(180^\circ-60^\circ=120^\circ\) : \(6\times6\times\left(-\frac12\right)=-18\). (Ou : \(\overrightarrow{AB}\cdot\overrightarrow{BC}=-\overrightarrow{BA}\cdot\overrightarrow{BC}=-18\).) <b>(1 pt)</b></li>
<li><b>b)</b> \(\sqrt2\times1+1\times\left(-\sqrt2\right)=0\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Un parallélogramme", points: 6,
          enonce: R`\(ABCD\) est un parallélogramme tel que \(AB=4\), \(AD=3\) et \(\widehat{BAD}=60^\circ\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AD}\).</li>
<li>Calculer la longueur exacte de la diagonale \(AC\).</li>
<li>Calculer la longueur exacte de la diagonale \(BD\).</li>
<li>Calculer \(\overrightarrow{AC}\cdot\overrightarrow{BD}\). Les diagonales sont-elles perpendiculaires ?</li>
<li>\(M\) est le point défini par \(\overrightarrow{AM}=t\,\overrightarrow{AB}\) (\(t\) réel). Déterminer \(t\) pour que \((DM)\perp(AB)\), et interpréter le point \(M\) obtenu.</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}\cdot\overrightarrow{AD}=4\times3\times\cos60^\circ=6\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}\), donc \(AC^2=AB^2+2\,\overrightarrow{AB}\cdot\overrightarrow{AD}+AD^2=16+12+9=37\) et \(AC=\sqrt{37}\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}\), donc \(BD^2=AD^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AD}+AB^2=9-12+16=13\) et \(BD=\sqrt{13}\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AC}\cdot\overrightarrow{BD}=\left(\overrightarrow{AD}+\overrightarrow{AB}\right)\cdot\left(\overrightarrow{AD}-\overrightarrow{AB}\right)=AD^2-AB^2=9-16=-7\neq0\) : les diagonales ne sont pas perpendiculaires (ce n'est pas un losange). <b>(1 pt)</b></li>
<li>\(\overrightarrow{DM}=\overrightarrow{DA}+\overrightarrow{AM}=-\overrightarrow{AD}+t\,\overrightarrow{AB}\), donc \(\overrightarrow{DM}\cdot\overrightarrow{AB}=-6+16t\).<br>
\((DM)\perp(AB)\iff16t-6=0\iff t=\frac38\). Alors \(AM=\frac38\times4=1{,}5\) : \(M\) est le projeté orthogonal de \(D\) sur \((AB)\) (on retrouve \(AM=AD\cos60^\circ=1{,}5\)). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Deux identités", points: 5,
          enonce: R`<ol><li>Démontrer que pour tous vecteurs \(\vec u\) et \(\vec v\) : \(\|\vec u+\vec v\|^2+\|\vec u-\vec v\|^2=2\left(\|\vec u\|^2+\|\vec v\|^2\right)\).</li>
<li>Démontrer que pour tous vecteurs \(\vec u\) et \(\vec v\) : \(\vec u\cdot\vec v=\frac14\left(\|\vec u+\vec v\|^2-\|\vec u-\vec v\|^2\right)\).</li>
<li>Application : \(\|\vec u+\vec v\|=6\), \(\|\vec u-\vec v\|=4\) et \(\|\vec u\|=3\). Calculer \(\|\vec v\|\) et \(\vec u\cdot\vec v\).</li></ol>`,
          correction: R`<ol><li>Par bilinéarité : \(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\) et \(\|\vec u-\vec v\|^2=\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2\).<br>
En additionnant, les doubles produits s'éliminent : \(\|\vec u+\vec v\|^2+\|\vec u-\vec v\|^2=2\|\vec u\|^2+2\|\vec v\|^2\). <b>(1,5 pt)</b></li>
<li>En soustrayant les deux mêmes égalités : \(\|\vec u+\vec v\|^2-\|\vec u-\vec v\|^2=4\,\vec u\cdot\vec v\), d'où le résultat en divisant par \(4\). <b>(1,5 pt)</b></li>
<li>D'après 1 : \(36+16=2\left(9+\|\vec v\|^2\right)\), donc \(9+\|\vec v\|^2=26\), \(\|\vec v\|^2=17\) et \(\|\vec v\|=\sqrt{17}\).<br>
D'après 2 : \(\vec u\cdot\vec v=\frac14(36-16)=5\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 4 — Deux ensembles de points", points: 5,
          enonce: R`\(A\) et \(B\) sont deux points tels que \(AB=4\), et \(I\) est le milieu de \([AB]\).
<ol><li>En écrivant \(\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}\) et \(\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}\), démontrer que pour tout point \(M\), \(MA^2+MB^2=2MI^2+8\).</li>
<li>Déterminer l'ensemble des points \(M\) tels que \(MA^2+MB^2=40\).</li>
<li>a) Démontrer que \(MA^2-MB^2=\left(\overrightarrow{MA}-\overrightarrow{MB}\right)\cdot\left(\overrightarrow{MA}+\overrightarrow{MB}\right)=2\,\overrightarrow{AB}\cdot\overrightarrow{IM}\).<br>
b) En déduire l'ensemble des points \(M\) tels que \(MA^2-MB^2=8\). On pourra utiliser le projeté orthogonal \(H\) de \(M\) sur \((AB)\).</li></ol>`,
          correction: R`<ol><li>Comme \(\overrightarrow{IB}=-\overrightarrow{IA}\) et \(IA=2\) :<br>
\(MA^2+MB^2=\left(\overrightarrow{MI}+\overrightarrow{IA}\right)^2+\left(\overrightarrow{MI}-\overrightarrow{IA}\right)^2=2MI^2+2IA^2=2MI^2+2\times4=2MI^2+8\). <b>(1,5 pt)</b></li>
<li>\(2MI^2+8=40\iff MI^2=16\iff MI=4\) : cercle de centre \(I\) et de rayon \(4\). <b>(1 pt)</b></li>
<li>a) \(MA^2-MB^2=\overrightarrow{MA}^{\,2}-\overrightarrow{MB}^{\,2}=\left(\overrightarrow{MA}-\overrightarrow{MB}\right)\cdot\left(\overrightarrow{MA}+\overrightarrow{MB}\right)\) (identité remarquable).<br>
Or \(\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{MA}+\overrightarrow{BM}=\overrightarrow{BA}\) et \(\overrightarrow{MA}+\overrightarrow{MB}=2\,\overrightarrow{MI}\) (\(I\) milieu de \([AB]\)).<br>
Donc \(MA^2-MB^2=2\,\overrightarrow{BA}\cdot\overrightarrow{MI}=2\,\overrightarrow{AB}\cdot\overrightarrow{IM}\). <b>(1,5 pt)</b><br>
b) \(MA^2-MB^2=8\iff\overrightarrow{AB}\cdot\overrightarrow{IM}=4\). \(I\) est sur \((AB)\) et le projeté de \(M\) sur \((AB)\) est \(H\), donc \(\overrightarrow{AB}\cdot\overrightarrow{IM}=\overrightarrow{AB}\cdot\overrightarrow{IH}\). Ce produit vaut \(4\gt0\) : \(\overrightarrow{IH}\) est de même sens que \(\overrightarrow{AB}\) et \(4\times IH=4\), soit \(IH=1\). \(H\) est donc le point fixe de \([IB]\) tel que \(IH=1\) (le milieu de \([IB]\)).<br>
L'ensemble cherché est la droite perpendiculaire à \((AB)\) passant par ce point \(H\). <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°9 — Modéliser avec le produit scalaire", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Deux remorqueurs", points: 5,
          enonce: R`Deux remorqueurs tirent un paquebot à l'aide de câbles. Le premier exerce une force \(\vec F_1\) d'intensité \(3000\) N, le second une force \(\vec F_2\) d'intensité \(2000\) N, et l'angle entre les deux câbles est \(\left(\vec F_1,\vec F_2\right)=40^\circ\). On note \(\vec R=\vec F_1+\vec F_2\) la force résultante.
<ol><li>Calculer \(\vec F_1\cdot\vec F_2\) (arrondi à l'unité).</li>
<li>Calculer l'intensité \(\|\vec R\|\) de la résultante, arrondie au newton.</li>
<li>Calculer \(\vec R\cdot\vec F_1\), puis une mesure, au dixième de degré, de l'angle entre \(\vec R\) et \(\vec F_1\).</li></ol>`,
          correction: R`<ol><li>\(\vec F_1\cdot\vec F_2=3000\times2000\times\cos40^\circ=6\times10^6\cos40^\circ\approx4\,596\,267\). <b>(1 pt)</b></li>
<li>\(\|\vec R\|^2=\left\|\vec F_1+\vec F_2\right\|^2=\|\vec F_1\|^2+2\,\vec F_1\cdot\vec F_2+\|\vec F_2\|^2\approx9\times10^6+9\,192\,533+4\times10^6=22\,192\,533\).<br>
Donc \(\|\vec R\|\approx4711\) N (et non \(5000\) N : les intensités ne s'additionnent pas). <b>(2 pts)</b></li>
<li>\(\vec R\cdot\vec F_1=\left(\vec F_1+\vec F_2\right)\cdot\vec F_1=\|\vec F_1\|^2+\vec F_1\cdot\vec F_2\approx9\times10^6+4\,596\,267=13\,596\,267\).<br>
\(\cos\left(\vec R,\vec F_1\right)=\frac{\vec R\cdot\vec F_1}{\|\vec R\|\times\|\vec F_1\|}\approx\frac{13\,596\,267}{4710{,}9\times3000}\approx0{,}9620\), donc l'angle mesure environ \(15{,}8^\circ\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 2 — Un parc triangulaire", points: 5,
          enonce: R`Un parc a la forme d'un triangle \(RST\) avec \(RS=120\) m, \(RT=150\) m et \(ST=200\) m.
<ol><li>Déterminer la valeur exacte du cosinus du plus grand angle du triangle, puis une mesure de cet angle au dixième de degré. Est-il aigu ou obtus ?</li>
<li>Calculer \(\overrightarrow{RS}\cdot\overrightarrow{RT}\) sans angle. On note \(H\) le projeté orthogonal de \(T\) sur la droite \((RS)\) : où se situe \(H\) ? Calculer \(RH\), puis \(TH\), et en déduire l'aire du parc au mètre carré près.</li>
<li>Une allée rectiligne relie \(R\) au milieu \(K\) de \([ST]\). Calculer sa longueur exacte, puis arrondie au centimètre.</li></ol>`,
          correction: R`<ol><li>Le plus grand angle est opposé au plus grand côté \([ST]\) : c'est \(\widehat{SRT}\). Al-Kashi :
\[\cos\widehat{SRT}=\frac{RS^2+RT^2-ST^2}{2\times RS\times RT}=\frac{14\,400+22\,500-40\,000}{36\,000}=\frac{-3100}{36\,000}=-\frac{31}{360}.\]
\(\widehat{SRT}\approx94{,}9^\circ\) : l'angle est obtus (cosinus négatif). <b>(2 pts)</b></li>
<li>\(\overrightarrow{RS}\cdot\overrightarrow{RT}=\frac12\left(RS^2+RT^2-ST^2\right)=\frac12(-3100)=-1550\).<br>
\(\overrightarrow{RS}\cdot\overrightarrow{RT}=\overrightarrow{RS}\cdot\overrightarrow{RH}\lt0\) : \(\overrightarrow{RH}\) et \(\overrightarrow{RS}\) sont de sens contraires, \(H\) est sur le prolongement de \([SR]\) au-delà de \(R\). Alors \(RS\times RH=1550\), d'où \(RH=\frac{1550}{120}=\frac{155}{12}\approx12{,}92\) m.<br>
Triangle \(RHT\) rectangle en \(H\) : \(TH=\sqrt{RT^2-RH^2}\approx\sqrt{22\,500-166{,}84}\approx149{,}44\) m.<br>
\([TH]\) est la hauteur relative au côté \([RS]\) : aire \(=\frac{RS\times TH}{2}\approx\frac{120\times149{,}44}{2}\approx8967\) m². <b>(2 pts)</b></li>
<li>Théorème de la médiane : \(RS^2+RT^2=2RK^2+\frac{ST^2}{2}\), soit \(36\,900=2RK^2+20\,000\), donc \(RK^2=8450\) et \(RK=\sqrt{8450}=65\sqrt2\approx91{,}92\) m. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — La maison et la route", points: 6,
          enonce: R`Dans un repère orthonormé (unité : \(100\) m), une route rectiligne passe par les points \(A(-2\,;1)\) et \(B(6\,;5)\). Une maison est située au point \(C(3\,;-1)\). On veut construire le chemin le plus court possible entre la maison et la route : il aboutit au projeté orthogonal \(H\) de \(C\) sur \((AB)\).
<ol><li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\).</li>
<li>Calculer une mesure de l'angle \(\widehat{BAC}\) au dixième de degré.</li>
<li>On cherche \(H\) sous la forme \(\overrightarrow{AH}=t\,\overrightarrow{AB}\). Exprimer les coordonnées de \(\overrightarrow{CH}\) en fonction de \(t\), puis déterminer \(t\) et les coordonnées de \(H\).</li>
<li>Calculer la longueur du chemin \([CH]\), en mètres. Contrôler ce résultat avec \(AH\) obtenu par projection.</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(8\,;4)\), \(\overrightarrow{AC}(5\,;-2)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=40-8=32\). <b>(1 pt)</b></li>
<li>\(AB=\sqrt{80}=4\sqrt5\), \(AC=\sqrt{29}\). \(\cos\widehat{BAC}=\frac{32}{4\sqrt5\times\sqrt{29}}=\frac{8}{\sqrt{145}}\approx0{,}6644\), donc \(\widehat{BAC}\approx48{,}4^\circ\). <b>(1,5 pt)</b></li>
<li>\(H(-2+8t\,;1+4t)\) et \(\overrightarrow{CH}(-5+8t\,;2+4t)\).<br>
\((CH)\perp(AB)\iff\overrightarrow{CH}\cdot\overrightarrow{AB}=0\iff8(-5+8t)+4(2+4t)=0\iff80t-32=0\iff t=0{,}4\).<br>
Donc \(H(1{,}2\,;2{,}6)\). <b>(2 pts)</b></li>
<li>\(\overrightarrow{CH}(-1{,}8\,;3{,}6)\), \(CH=\sqrt{3{,}24+12{,}96}=\sqrt{16{,}2}\approx4{,}02\) unités, soit environ \(402\) m.<br>
Contrôle : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AH\) (produit positif), donc \(AH=\frac{32}{\sqrt{80}}\) et \(AH^2=\frac{1024}{80}=12{,}8\) ; Pythagore dans \(AHC\) : \(CH^2=AC^2-AH^2=29-12{,}8=16{,}2\). ✓ <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Zone de couverture", points: 4,
          enonce: R`Dans un repère orthonormé (unité : le kilomètre), deux relais sont placés en \(A(1\,;-1)\) et \(B(7\,;3)\). Un point \(M\) est « bien couvert » lorsque \(\overrightarrow{MA}\cdot\overrightarrow{MB}\le12\).
<ol><li>Calculer les coordonnées du milieu \(I\) de \([AB]\) et \(AB^2\).</li>
<li>Déterminer l'ensemble des points \(M\) tels que \(\overrightarrow{MA}\cdot\overrightarrow{MB}=12\), puis décrire la zone bien couverte.</li>
<li>Le village \(P(7\,;5)\) est-il bien couvert ? Répondre de deux façons différentes.</li></ol>`,
          correction: R`<ol><li>\(I\left(\frac{1+7}{2}\,;\frac{-1+3}{2}\right)=(4\,;1)\) et \(AB^2=6^2+4^2=52\). <b>(1 pt)</b></li>
<li>\(\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\frac{AB^2}{4}=MI^2-13\). Donc \(\overrightarrow{MA}\cdot\overrightarrow{MB}=12\iff MI^2=25\iff MI=5\) : cercle de centre \(I(4\,;1)\) et de rayon \(5\) km.<br>
\(\overrightarrow{MA}\cdot\overrightarrow{MB}\le12\iff MI\le5\) : la zone bien couverte est le disque de centre \(I\) et de rayon \(5\) km (bord compris). <b>(1,5 pt)</b></li>
<li><i>1re façon :</i> \(IP^2=(7-4)^2+(5-1)^2=9+16=25\), \(IP=5\) : \(P\) est sur le bord de la zone, il est (tout juste) bien couvert.<br>
<i>2e façon :</i> \(\overrightarrow{PA}(-6\,;-6)\), \(\overrightarrow{PB}(0\,;-2)\), \(\overrightarrow{PA}\cdot\overrightarrow{PB}=0+12=12\le12\). ✓ <b>(1,5 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°10 — Bilan du chapitre", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Al-Kashi : du cours à l'application", points: 5,
          enonce: R`<ol><li>Énoncer le théorème d'Al-Kashi dans un triangle \(ABC\) (pour le côté \(BC\)), puis le démontrer à l'aide du produit scalaire.</li>
<li>Un triangle \(ABC\) vérifie \(AB=3\), \(AC=5\) et \(BC=7\). Déterminer la mesure exacte de l'angle \(\widehat{BAC}\).</li>
<li>Calculer \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) de deux manières différentes.</li></ol>`,
          correction: R`<ol><li><b>Énoncé :</b> \(BC^2=AB^2+AC^2-2\times AB\times AC\times\cos\widehat{BAC}\). <b>(0,5 pt)</b><br>
<b>Démonstration :</b> par Chasles, \(\overrightarrow{BC}=\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{AC}-\overrightarrow{AB}\). Donc
\(BC^2=\left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2\). Comme \(\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\widehat{BAC}\), on obtient la formule. <b>(2 pts)</b></li>
<li>\(\cos\widehat{BAC}=\frac{AB^2+AC^2-BC^2}{2\times AB\times AC}=\frac{9+25-49}{30}=\frac{-15}{30}=-\frac12\). Comme \(\widehat{BAC}\in[0^\circ\,;180^\circ]\), \(\widehat{BAC}=120^\circ\). <b>(1,5 pt)</b></li>
<li>Avec les normes : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=\frac12(9+25-49)=-\frac{15}{2}\).<br>
Avec l'angle : \(3\times5\times\cos120^\circ=15\times\left(-\frac12\right)=-\frac{15}{2}\). ✓ <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Diagonales d'un trapèze rectangle", points: 5,
          enonce: R`\(ABCD\) est un trapèze rectangle en \(A\) et en \(D\), de bases \([AB]\) et \([DC]\) parallèles et de même sens, avec \(AB=6\), \(DC=2\) et \(AD=h\) (\(h\gt0\)).
<svg viewBox="0 0 220 120" width="220" role="img" aria-label="Trapèze rectangle ABCD avec ses diagonales AC et BD">
  <polygon points="20,100 200,100 80,20 20,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="100" x2="80" y2="20" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="200" y1="100" x2="20" y2="20" stroke="currentColor" stroke-dasharray="4 3"/>
  <polyline points="20,92 28,92 28,100" fill="none" stroke="currentColor"/>
  <polyline points="20,28 28,28 28,20" fill="none" stroke="currentColor"/>
  <text x="8" y="114" font-size="12" fill="currentColor">A</text>
  <text x="202" y="114" font-size="12" fill="currentColor">B</text>
  <text x="82" y="16" font-size="12" fill="currentColor">C</text>
  <text x="8" y="16" font-size="12" fill="currentColor">D</text>
</svg>
<ol><li>En décomposant \(\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}\) et \(\overrightarrow{BD}=\overrightarrow{BA}+\overrightarrow{AD}\), démontrer que \(\overrightarrow{AC}\cdot\overrightarrow{BD}=h^2-12\).</li>
<li>Pour \(h=4\), les diagonales sont-elles perpendiculaires ? Pour quelle valeur de \(h\) le sont-elles ?</li>
<li>Retrouver le résultat de la question 1 en se plaçant dans le repère orthonormé d'origine \(A\) où \(B(6\,;0)\) et \(D(0\,;h)\).</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AC}\cdot\overrightarrow{BD}=\overrightarrow{AD}\cdot\overrightarrow{BA}+\overrightarrow{AD}\cdot\overrightarrow{AD}+\overrightarrow{DC}\cdot\overrightarrow{BA}+\overrightarrow{DC}\cdot\overrightarrow{AD}\).<br>
\((AD)\perp(AB)\) et \((AD)\perp(DC)\), donc le premier et le dernier termes sont nuls. \(\overrightarrow{AD}\cdot\overrightarrow{AD}=h^2\). \(\overrightarrow{DC}\) et \(\overrightarrow{BA}\) sont colinéaires de sens contraires : \(\overrightarrow{DC}\cdot\overrightarrow{BA}=-2\times6=-12\).<br>
Donc \(\overrightarrow{AC}\cdot\overrightarrow{BD}=h^2-12\). <b>(2 pts)</b></li>
<li>Pour \(h=4\) : \(16-12=4\neq0\), les diagonales ne sont pas perpendiculaires.<br>
\((AC)\perp(BD)\iff h^2=12\iff h=2\sqrt3\) (car \(h\gt0\)). <b>(1,5 pt)</b></li>
<li>\(A(0\,;0)\), \(B(6\,;0)\), \(D(0\,;h)\), \(C(2\,;h)\). \(\overrightarrow{AC}(2\,;h)\), \(\overrightarrow{BD}(-6\,;h)\) : \(\overrightarrow{AC}\cdot\overrightarrow{BD}=-12+h^2\). ✓ <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Triangle et carré en repère", points: 5,
          enonce: R`Dans un repère orthonormé, on considère \(A(1\,;3)\), \(B(-2\,;-1)\) et \(C(5\,;0)\).
<ol><li>Démontrer que le triangle \(ABC\) est rectangle isocèle en \(A\).</li>
<li>Déterminer le centre \(I\) et le rayon du cercle \(\mathcal C\) circonscrit au triangle \(ABC\).</li>
<li>Déterminer les coordonnées du point \(D\) tel que \(ABDC\) soit un carré.</li>
<li>Justifier, sans calcul de distance, que \(D\) appartient à \(\mathcal C\), puis le vérifier par le calcul.</li></ol>`,
          correction: R`<ol><li>\(\overrightarrow{AB}(-3\,;-4)\), \(\overrightarrow{AC}(4\,;-3)\) : \(\overrightarrow{AB}\cdot\overrightarrow{AC}=-12+12=0\), donc l'angle en \(A\) est droit. \(AB=\sqrt{9+16}=5\) et \(AC=\sqrt{16+9}=5\) : le triangle est rectangle isocèle en \(A\). <b>(1,5 pt)</b></li>
<li>\(\overrightarrow{AB}\cdot\overrightarrow{AC}=0\) signifie que \(A\) est sur le cercle de diamètre \([BC]\) : c'est \(\mathcal C\). Centre \(I\left(\frac{-2+5}{2}\,;\frac{-1+0}{2}\right)=(1{,}5\,;-0{,}5)\), rayon \(\frac{BC}{2}=\frac{\sqrt{49+1}}{2}=\frac{5\sqrt2}{2}\). <b>(1,5 pt)</b></li>
<li>\(ABDC\) carré \(\Rightarrow\overrightarrow{CD}=\overrightarrow{AB}\), donc \(D(5-3\,;0-4)=(2\,;-4)\). (Le parallélogramme \(ABDC\) a un angle droit et deux côtés consécutifs égaux : c'est bien un carré.) <b>(1 pt)</b></li>
<li>Dans le carré, l'angle \(\widehat{BDC}\) est droit, donc \(\overrightarrow{DB}\cdot\overrightarrow{DC}=0\) et \(D\) est sur le cercle de diamètre \([BC]\).<br>
Calcul : \(ID^2=(2-1{,}5)^2+(-4+0{,}5)^2=0{,}25+12{,}25=12{,}5=\left(\frac{5\sqrt2}{2}\right)^2\). ✓ <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Calcul vectoriel", points: 5,
          enonce: R`\(\vec u\) et \(\vec v\) sont deux vecteurs tels que \(\|\vec u\|=3\), \(\|\vec v\|=2\) et \((\vec u,\vec v)=\frac{\pi}{3}\).
<ol><li>Calculer \(\vec u\cdot\vec v\).</li>
<li>Calculer \(\|\vec u+\vec v\|\) et \(\|\vec u-\vec v\|\).</li>
<li>Calculer \((\vec u+\vec v)\cdot(\vec u-\vec v)\).</li>
<li>Déterminer le réel \(x\) tel que les vecteurs \(x\vec u+\vec v\) et \(\vec u-\vec v\) soient orthogonaux.</li></ol>`,
          correction: R`<ol><li>\(\vec u\cdot\vec v=3\times2\times\cos\frac{\pi}{3}=6\times\frac12=3\). <b>(0,5 pt)</b></li>
<li>\(\|\vec u+\vec v\|^2=9+2\times3+4=19\), donc \(\|\vec u+\vec v\|=\sqrt{19}\).<br>
\(\|\vec u-\vec v\|^2=9-2\times3+4=7\), donc \(\|\vec u-\vec v\|=\sqrt7\). <b>(1,5 pt)</b></li>
<li>\((\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2=9-4=5\). <b>(1 pt)</b></li>
<li>\((x\vec u+\vec v)\cdot(\vec u-\vec v)=x\|\vec u\|^2-x\,\vec u\cdot\vec v+\vec v\cdot\vec u-\|\vec v\|^2=9x-3x+3-4=6x-1\).<br>
Les vecteurs sont orthogonaux \(\iff6x-1=0\iff x=\frac16\). <b>(2 pts)</b></li></ol>` }
      ] }
  ]
});
})();
