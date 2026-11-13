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
      ] }
  ]
});
})();
