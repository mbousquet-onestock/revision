(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 7,
  titre: "Fonctions trigonométriques",
  partie: "Analyse",
  emoji: "🎡",
  accroche: R`Une grande roue qui tourne, la mer qui monte et descend deux fois par jour, la note « la » d'un diapason… Tout ce qui se répète en tournant se décrit avec le cosinus et le sinus. Dans ce chapitre, on enroule une droite autour d'un cercle (si, si !) et on découvre deux fonctions qui ondulent à l'infini.`,

  videos: [
    { titre: "Le cercle trigonométrique et l'enroulement de la droite", recherche: "Yvan Monka cercle trigonométrique enroulement de la droite des réels", duree: "≈ 8 min", resume: R`Pourquoi chaque réel correspond à un point du cercle de rayon 1, et pourquoi un même point correspond à une infinité de réels.` },
    { titre: "Le radian : convertir degrés et radians", recherche: "Yvan Monka radian conversion degrés radians", duree: "≈ 6 min", resume: R`La définition du radian et la règle de proportionnalité \(\pi \text{ rad} = 180^\circ\).` },
    { titre: "Placer un point et trouver la mesure principale", recherche: "Yvan Monka mesure principale d'un angle orienté placer un point cercle trigonométrique", duree: "≈ 9 min", resume: R`Comment retirer des tours complets (\(2\pi\)) pour se ramener dans \(]-\pi\,;\pi]\).` },
    { titre: "Cosinus et sinus : valeurs remarquables", recherche: "Yvan Monka cosinus sinus valeurs remarquables cercle trigonométrique", duree: "≈ 10 min", resume: R`Lire \(\cos x\) et \(\sin x\) sur le cercle, retenir le tableau des valeurs de \(0\) à \(\pi/2\).` },
    { titre: "Les angles associés", recherche: "Yvan Monka angles associés cosinus sinus pi moins x", duree: "≈ 10 min", resume: R`Les symétries du cercle qui donnent \(\cos(\pi-x)\), \(\sin(\pi+x)\), \(\cos(\pi/2-x)\)…` },
    { titre: "Résoudre cos x = a et sin x = a", recherche: "Yvan Monka résoudre une équation trigonométrique cos x = a sin x = a", duree: "≈ 12 min", resume: R`La méthode avec le cercle pour trouver toutes les solutions sur un intervalle donné.` },
    { titre: "Les fonctions cosinus et sinus", recherche: "Yvan Monka fonctions cosinus et sinus parité périodicité courbe", duree: "≈ 12 min", resume: R`Parité, périodicité, allure des courbes (sinusoïdes) et lien avec le cercle.` },
    { titre: "Approcher pi avec la méthode d'Archimède", recherche: "méthode d'Archimède approximation de pi polygones python", duree: "≈ 10 min", resume: R`Encadrer \(\pi\) par les périmètres de polygones réguliers, et le programmer en Python.` }
  ],

  cours: [
    { titre: "1. Le cercle trigonométrique", html: R`
<div class="def"><b>Cercle trigonométrique.</b> Dans un repère orthonormé \((O\,;I,J)\), le <b>cercle trigonométrique</b> est le cercle de centre \(O\), de rayon \(1\), parcouru dans le <b>sens direct</b> (sens inverse des aiguilles d'une montre).</div>

<svg viewBox="0 0 200 200" width="220" role="img" aria-label="Cercle trigonométrique avec le point M associé à pi sur 3">
  <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" stroke-width="1"/>
  <line x1="100" y1="195" x2="100" y2="5" stroke="currentColor" stroke-width="1"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="100" x2="140" y2="30.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="140" y1="30.7" x2="140" y2="100" stroke="currentColor" stroke-dasharray="3 3"/>
  <line x1="140" y1="30.7" x2="100" y2="30.7" stroke="currentColor" stroke-dasharray="3 3"/>
  <circle cx="140" cy="30.7" r="3" fill="currentColor"/>
  <text x="144" y="26" font-size="12" fill="currentColor">M</text>
  <text x="88" y="114" font-size="12" fill="currentColor">O</text>
  <text x="183" y="114" font-size="12" fill="currentColor">I</text>
  <text x="104" y="16" font-size="12" fill="currentColor">J</text>
  <text x="132" y="114" font-size="10" fill="currentColor">cos x</text>
  <text x="62" y="34" font-size="10" fill="currentColor">sin x</text>
</svg>
<p><i>Figure : le point \(M\) associé au réel \(x=\frac{\pi}{3}\). Son abscisse est \(\cos x\), son ordonnée est \(\sin x\).</i></p>

<p><b>L'enroulement de la droite des réels.</b> On imagine la droite graduée, tangente au cercle en \(I(1\,;0)\), et on l'« enroule » autour du cercle comme un fil : la partie positive dans le sens direct, la partie négative dans le sens indirect. Chaque réel \(x\) vient se poser sur <b>un unique point</b> \(M\) du cercle : on dit que \(M\) est le point <b>associé</b> à \(x\).</p>

<div class="prop"><b>Un tour complet = \(2\pi\).</b> Le cercle a pour longueur \(2\pi\times 1=2\pi\). Donc \(x\) et \(x+2\pi\) (et plus généralement \(x+2k\pi\), \(k\in\mathbb{Z}\)) sont associés au <b>même point</b>.<br>
Deux réels \(x\) et \(x'\) sont associés au même point si et seulement si \(x'=x+2k\pi\) avec \(k\in\mathbb{Z}\).</div>

<div class="def"><b>Radian.</b> Le radian est la mesure de l'angle au centre qui intercepte sur le cercle trigonométrique un arc de longueur \(1\). Si \(M\) est associé à \(x\in[0\,;\pi]\), l'angle \(\widehat{IOM}\) mesure \(x\) radians.<br>
Correspondance (proportionnalité) : \(\pi\text{ rad}=180^\circ\), donc \(1^\circ=\frac{\pi}{180}\text{ rad}\).</div>

<table class="tv">
<tr><td>degrés</td><td>\(0\)</td><td>\(30\)</td><td>\(45\)</td><td>\(60\)</td><td>\(90\)</td><td>\(120\)</td><td>\(135\)</td><td>\(150\)</td><td>\(180\)</td><td>\(360\)</td></tr>
<tr><td>radians</td><td>\(0\)</td><td>\(\frac{\pi}{6}\)</td><td>\(\frac{\pi}{4}\)</td><td>\(\frac{\pi}{3}\)</td><td>\(\frac{\pi}{2}\)</td><td>\(\frac{2\pi}{3}\)</td><td>\(\frac{3\pi}{4}\)</td><td>\(\frac{5\pi}{6}\)</td><td>\(\pi\)</td><td>\(2\pi\)</td></tr>
</table>

<div class="def"><b>Mesure principale.</b> Parmi tous les réels \(x+2k\pi\) associés à un même point, un seul appartient à l'intervalle \(]-\pi\,;\pi]\) : c'est la <b>mesure principale</b>.</div>

<div class="ex"><b>Méthode : trouver la mesure principale de \(\frac{17\pi}{3}\).</b><br>
On cherche le multiple de \(2\pi=\frac{6\pi}{3}\) le plus proche : \(17\) est proche de \(18=3\times 6\).<br>
\(\frac{17\pi}{3}=\frac{18\pi}{3}-\frac{\pi}{3}=6\pi-\frac{\pi}{3}=3\times 2\pi-\frac{\pi}{3}\).<br>
On retire trois tours : la mesure principale est \(-\frac{\pi}{3}\), qui est bien dans \(]-\pi\,;\pi]\).</div>

<div class="ex"><b>Autre exemple : \(-\frac{29\pi}{6}\).</b> \(2\pi=\frac{12\pi}{6}\) et \(-29=-24-5\), donc \(-\frac{29\pi}{6}=-4\pi-\frac{5\pi}{6}\). Mesure principale : \(-\frac{5\pi}{6}\).</div>

<div class="astuce">Pour placer \(\frac{p\pi}{q}\) sur le cercle : découpe le demi-cercle supérieur en \(q\) parts égales (chaque part vaut \(\frac{\pi}{q}\)), puis compte \(p\) parts dans le sens direct (ou indirect si \(p\lt 0\)).</div>

<div class="warn"><b>Piège :</b> \(-\pi\) n'est pas une mesure principale car l'intervalle est \(]-\pi\,;\pi]\), ouvert en \(-\pi\). La mesure principale de \(-\pi\) est \(\pi\). Autre piège : retirer \(\pi\) au lieu de \(2\pi\) — un demi-tour ne ramène pas au même point !</div>
` },

    { titre: "2. Cosinus et sinus d'un réel", html: R`
<div class="def"><b>Définition.</b> Soit \(x\) un réel et \(M\) le point du cercle trigonométrique associé à \(x\).<br>
\(\cos x\) est l'<b>abscisse</b> de \(M\) et \(\sin x\) est son <b>ordonnée</b> : \(M(\cos x\,;\sin x)\).</div>

<div class="prop"><b>Propriétés.</b> Pour tout réel \(x\) et tout entier \(k\) :
<ul>
<li>\(-1\leqslant \cos x\leqslant 1\) et \(-1\leqslant \sin x\leqslant 1\) ;</li>
<li>\(\cos(x+2k\pi)=\cos x\) et \(\sin(x+2k\pi)=\sin x\) ;</li>
<li>\(\cos^2 x+\sin^2 x=1\) (Pythagore dans le triangle \(OHM\), où \(H\) est le projeté de \(M\) sur l'axe des abscisses, car \(OM=1\)).</li>
</ul>
<i>Notation :</i> \(\cos^2 x\) signifie \((\cos x)^2\).</div>

<p><b>Valeurs remarquables</b> (à connaître par cœur) :</p>
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td>\(\frac{\pi}{6}\)</td><td>\(\frac{\pi}{4}\)</td><td>\(\frac{\pi}{3}\)</td><td>\(\frac{\pi}{2}\)</td><td>\(\pi\)</td></tr>
<tr><td>\(\cos x\)</td><td>\(1\)</td><td>\(\frac{\sqrt3}{2}\)</td><td>\(\frac{\sqrt2}{2}\)</td><td>\(\frac12\)</td><td>\(0\)</td><td>\(-1\)</td></tr>
<tr><td>\(\sin x\)</td><td>\(0\)</td><td>\(\frac12\)</td><td>\(\frac{\sqrt2}{2}\)</td><td>\(\frac{\sqrt3}{2}\)</td><td>\(1\)</td><td>\(0\)</td></tr>
</table>
<div class="astuce">Moyen mnémotechnique : pour \(\sin\), de \(0\) à \(\frac{\pi}{2}\) on lit \(\frac{\sqrt0}{2},\frac{\sqrt1}{2},\frac{\sqrt2}{2},\frac{\sqrt3}{2},\frac{\sqrt4}{2}\). Pour \(\cos\), c'est la même liste à l'envers.</div>

<div class="ex"><b>Exemple : utiliser \(\cos^2x+\sin^2x=1\).</b> On sait que \(x\in\left[\frac{\pi}{2}\,;\pi\right]\) et \(\sin x=\frac35\). Alors \(\cos^2x=1-\frac{9}{25}=\frac{16}{25}\), donc \(\cos x=\frac45\) ou \(\cos x=-\frac45\). Comme \(x\in\left[\frac{\pi}{2}\,;\pi\right]\), le point \(M\) est dans le quart en haut à gauche : son abscisse est négative. Donc \(\cos x=-\frac45\).</div>

<p><b>Angles associés.</b> Les symétries du cercle donnent les formules suivantes, valables pour tout réel \(x\) :</p>
<div class="prop">
<ul>
<li>\(\cos(-x)=\cos x\) et \(\sin(-x)=-\sin x\) ;</li>
<li>\(\cos(\pi-x)=-\cos x\) et \(\sin(\pi-x)=\sin x\) ;</li>
<li>\(\cos(\pi+x)=-\cos x\) et \(\sin(\pi+x)=-\sin x\) ;</li>
<li>\(\cos\left(\frac{\pi}{2}-x\right)=\sin x\) et \(\sin\left(\frac{\pi}{2}-x\right)=\cos x\) ;</li>
<li>\(\cos\left(\frac{\pi}{2}+x\right)=-\sin x\) et \(\sin\left(\frac{\pi}{2}+x\right)=\cos x\).</li>
</ul></div>

<p><b>Démonstration (au programme).</b> Soit \(M(\cos x\,;\sin x)\) le point associé à \(x\).</p>
<ul>
<li>Le point associé à \(-x\) s'obtient en enroulant la même longueur dans l'autre sens : c'est le symétrique \(M_1\) de \(M\) par rapport à l'axe des abscisses. Donc \(M_1(\cos x\,;-\sin x)\), d'où \(\cos(-x)=\cos x\) et \(\sin(-x)=-\sin x\).</li>
<li>Le point associé à \(\pi+x\) s'obtient à partir de \(M\) par un demi-tour : c'est le symétrique \(M_2\) de \(M\) par rapport à \(O\). Donc \(M_2(-\cos x\,;-\sin x)\).</li>
<li>Le point associé à \(\pi-x\) est le symétrique \(M_3\) de \(M\) par rapport à l'axe des ordonnées : partir de \(I'(-1\,;0)\), associé à \(\pi\), et reculer d'une longueur \(x\), c'est faire le trajet symétrique de celui qui va de \(I\) à \(M\). Donc \(M_3(-\cos x\,;\sin x)\).</li>
<li>Le point associé à \(\frac{\pi}{2}-x\) est le symétrique \(M_4\) de \(M\) par rapport à la droite d'équation \(y=x\) (la première bissectrice), car les arcs \(\overset{\frown}{IM}\) et \(\overset{\frown}{JM_4}\) ont la même longueur \(x\). Cette symétrie échange abscisse et ordonnée : \(M_4(\sin x\,;\cos x)\).</li>
<li>Enfin \(\frac{\pi}{2}+x=\frac{\pi}{2}-(-x)\), donc \(\cos\left(\frac{\pi}{2}+x\right)=\sin(-x)=-\sin x\) et \(\sin\left(\frac{\pi}{2}+x\right)=\cos(-x)=\cos x\).</li>
</ul>

<div class="ex"><b>Exemples.</b>
<ul>
<li>\(\cos\frac{5\pi}{6}=\cos\left(\pi-\frac{\pi}{6}\right)=-\cos\frac{\pi}{6}=-\frac{\sqrt3}{2}\).</li>
<li>\(\sin\frac{7\pi}{6}=\sin\left(\pi+\frac{\pi}{6}\right)=-\sin\frac{\pi}{6}=-\frac12\).</li>
<li>\(\cos\left(-\frac{2\pi}{3}\right)=\cos\frac{2\pi}{3}=\cos\left(\pi-\frac{\pi}{3}\right)=-\frac12\).</li>
</ul></div>

<p><b>Équations \(\cos x=a\) et \(\sin x=a\).</b></p>
<div class="prop">
<ul>
<li>Si \(\cos\alpha=a\), alors \(\cos x=a\iff x=\alpha+2k\pi\) ou \(x=-\alpha+2k\pi\), \(k\in\mathbb{Z}\) (deux points symétriques par rapport à l'axe des abscisses).</li>
<li>Si \(\sin\alpha=a\), alors \(\sin x=a\iff x=\alpha+2k\pi\) ou \(x=\pi-\alpha+2k\pi\), \(k\in\mathbb{Z}\) (deux points symétriques par rapport à l'axe des ordonnées).</li>
<li>Si \(a\gt 1\) ou \(a\lt -1\), il n'y a <b>aucune</b> solution.</li>
</ul></div>

<div class="ex"><b>Méthode.</b> Résoudre \(\cos x=\frac12\) sur \(]-\pi\,;\pi]\).<br>
1) On reconnaît une valeur remarquable : \(\cos\frac{\pi}{3}=\frac12\).<br>
2) Sur le cercle, la droite verticale d'abscisse \(\frac12\) coupe le cercle en deux points, associés à \(\frac{\pi}{3}\) et \(-\frac{\pi}{3}\).<br>
3) Les deux sont dans \(]-\pi\,;\pi]\) : \(S=\left\{-\frac{\pi}{3}\,;\frac{\pi}{3}\right\}\).</div>

<div class="ex"><b>Exemple.</b> Résoudre \(\sin x=-\frac{\sqrt2}{2}\) sur \([0\,;2\pi[\).<br>
\(\sin\left(-\frac{\pi}{4}\right)=-\frac{\sqrt2}{2}\), donc \(x=-\frac{\pi}{4}+2k\pi\) ou \(x=\pi+\frac{\pi}{4}+2k\pi=\frac{5\pi}{4}+2k\pi\).<br>
Dans \([0\,;2\pi[\) : \(-\frac{\pi}{4}+2\pi=\frac{7\pi}{4}\) et \(\frac{5\pi}{4}\). Donc \(S=\left\{\frac{5\pi}{4}\,;\frac{7\pi}{4}\right\}\).</div>

<div class="ex"><b>Inéquation (lecture sur le cercle).</b> Sur \(]-\pi\,;\pi]\), \(\cos x\geqslant\frac12\) correspond aux points du cercle situés à droite de la droite verticale d'abscisse \(\frac12\) : \(S=\left[-\frac{\pi}{3}\,;\frac{\pi}{3}\right]\).</div>

<div class="warn"><b>Pièges :</b> oublier la deuxième solution (il y en a presque toujours deux par tour !) ; donner des solutions hors de l'intervalle demandé ; confondre \(\pi-\alpha\) (pour le sinus) et \(-\alpha\) (pour le cosinus).</div>
` },

    { titre: "3. Les fonctions cosinus et sinus", html: R`
<div class="def"><b>Définition.</b> La fonction <b>cosinus</b> est la fonction \(x\mapsto\cos x\) définie sur \(\mathbb{R}\) ; la fonction <b>sinus</b> est \(x\mapsto \sin x\), définie sur \(\mathbb{R}\).</div>

<div class="prop"><b>Périodicité.</b> Pour tout réel \(x\), \(\cos(x+2\pi)=\cos x\) et \(\sin(x+2\pi)=\sin x\) : les fonctions cosinus et sinus sont <b>périodiques de période \(2\pi\)</b>. Leurs courbes se reproduisent à l'identique par translation de \(2\pi\) horizontalement : il suffit de les tracer sur un intervalle de longueur \(2\pi\), par exemple \(]-\pi\,;\pi]\).</div>

<div class="prop"><b>Parité.</b>
<ul>
<li>Pour tout réel \(x\), \(\cos(-x)=\cos x\) : la fonction cosinus est <b>paire</b>, sa courbe est symétrique par rapport à l'axe des ordonnées.</li>
<li>Pour tout réel \(x\), \(\sin(-x)=-\sin x\) : la fonction sinus est <b>impaire</b>, sa courbe est symétrique par rapport à l'origine \(O\).</li>
</ul></div>

<div class="def"><b>Rappel.</b> Une fonction \(f\) définie sur un intervalle symétrique par rapport à \(0\) est <b>paire</b> si \(f(-x)=f(x)\) pour tout \(x\), <b>impaire</b> si \(f(-x)=-f(x)\) pour tout \(x\). Elle est <b>périodique de période \(T\)</b> si \(f(x+T)=f(x)\) pour tout \(x\).</div>

<p><b>Les courbes</b> (appelées <b>sinusoïdes</b>) :</p>
<ul>
<li>la courbe de cosinus passe par \((0\,;1)\), \(\left(\frac{\pi}{2}\,;0\right)\), \((\pi\,;-1)\), \(\left(\frac{3\pi}{2}\,;0\right)\), \((2\pi\,;1)\) ;</li>
<li>la courbe de sinus passe par \((0\,;0)\), \(\left(\frac{\pi}{2}\,;1\right)\), \((\pi\,;0)\), \(\left(\frac{3\pi}{2}\,;-1\right)\), \((2\pi\,;0)\) ;</li>
<li>les deux courbes oscillent entre \(-1\) et \(1\), comme une vague.</li>
</ul>

<p><b>Lien avec le cercle (variations).</b> Quand \(x\) va de \(0\) à \(\pi\), le point \(M\) parcourt le demi-cercle supérieur de \(I\) vers \(I'(-1\,;0)\) : son abscisse diminue de \(1\) à \(-1\). Donc cosinus est <b>décroissante</b> sur \([0\,;\pi]\) ; par parité, elle est <b>croissante</b> sur \([-\pi\,;0]\). De même, sinus est croissante sur \(\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]\) (l'ordonnée de \(M\) monte de \(-1\) à \(1\)) et décroissante sur \(\left[\frac{\pi}{2}\,;\frac{3\pi}{2}\right]\).</p>
<table class="tv">
<tr><td>\(x\)</td><td>\(-\pi\)</td><td></td><td>\(0\)</td><td></td><td>\(\pi\)</td></tr>
<tr><td>\(\cos x\)</td><td>\(-1\)</td><td>\(\nearrow\)</td><td>\(1\)</td><td>\(\searrow\)</td><td>\(-1\)</td></tr>
</table>

<div class="astuce">La courbe de cosinus est la courbe de sinus décalée de \(\frac{\pi}{2}\) vers la gauche, car \(\sin\left(x+\frac{\pi}{2}\right)=\cos x\).</div>

<div class="ex"><b>Méthode : étudier la parité d'une fonction.</b> Soit \(f(x)=x\sin x\) sur \(\mathbb{R}\). \(\mathbb{R}\) est symétrique par rapport à \(0\) et \(f(-x)=(-x)\sin(-x)=(-x)(-\sin x)=x\sin x=f(x)\). Donc \(f\) est paire.</div>

<p><b>Approcher \(\pi\) : la méthode d'Archimède</b> (vers 250 av. J.-C.).</p>
<p>On inscrit dans le cercle de rayon \(1\) un polygone régulier à \(n\) côtés. Le triangle formé par \(O\) et un côté \([AB]\) est isocèle en \(O\), d'angle au sommet \(\frac{2\pi}{n}\). En le coupant en deux triangles rectangles, on trouve \(AB=2\sin\frac{\pi}{n}\). Le demi-périmètre du polygone vaut donc \(n\sin\frac{\pi}{n}\), et il est <b>plus petit</b> que le demi-périmètre du cercle, \(\pi\). Plus \(n\) est grand, plus il s'en approche.</p>
<p>Archimède ne connaissait pas la fonction sinus : il partait de l'hexagone (côté \(c=1\)) et doublait le nombre de côtés grâce à la formule \(c_{2n}=\sqrt{2-\sqrt{4-c_n^2}}\) (voir exercice 11).</p>
<pre><code>from math import sqrt

c = 1        # côté de l'hexagone régulier inscrit dans le cercle de rayon 1
n = 6        # nombre de côtés
for etape in range(5):
    print(n, n * c / 2)          # demi-périmètre : valeur approchée de pi par défaut
    c = sqrt(2 - sqrt(4 - c**2)) # côté du polygone à 2n côtés
    n = 2 * n</code></pre>
<p>Affichage : \(6\ \ 3{,}0\) ; \(12\ \ 3{,}1058\ldots\) ; \(24\ \ 3{,}1326\ldots\) ; \(48\ \ 3{,}1393\ldots\) ; \(96\ \ 3{,}1410\ldots\). Avec \(96\) côtés et des polygones circonscrits, Archimède a obtenu \(3{,}1408\lt\pi\lt 3{,}1429\).</p>

<div class="warn"><b>Piège :</b> sur la calculatrice, vérifie le mode <b>radian</b> ! En mode degré, \(\cos(\pi)\) ne donne pas \(-1\). En Python, le module <code>math</code> travaille toujours en radians.</div>
` }
  ],

  quiz: [
    { q: R`Combien vaut \(60^\circ\) en radians ?`, choix: [R`\(\frac{\pi}{6}\)`, R`\(\frac{\pi}{3}\)`, R`\(\frac{2\pi}{3}\)`, R`\(\frac{\pi}{60}\)`], bonne: 1, explication: R`\(180^\circ=\pi\) rad, donc \(60^\circ=\frac{60}{180}\pi=\frac{\pi}{3}\).` },
    { q: R`Quelle est la mesure principale de \(\frac{7\pi}{4}\) ?`, choix: [R`\(\frac{3\pi}{4}\)`, R`\(\frac{\pi}{4}\)`, R`\(-\frac{\pi}{4}\)`, R`\(-\frac{3\pi}{4}\)`], bonne: 2, explication: R`\(\frac{7\pi}{4}=\frac{8\pi}{4}-\frac{\pi}{4}=2\pi-\frac{\pi}{4}\). On retire un tour : \(-\frac{\pi}{4}\in]-\pi\,;\pi]\).` },
    { q: R`\(\cos\frac{\pi}{3}=\)`, choix: [R`\(\frac{\sqrt3}{2}\)`, R`\(\frac{\sqrt2}{2}\)`, R`\(\frac12\)`, R`\(0\)`], bonne: 2, explication: R`Valeur remarquable : \(\cos\frac{\pi}{3}=\frac12\) et \(\sin\frac{\pi}{3}=\frac{\sqrt3}{2}\).` },
    { q: R`Pour tout réel \(x\), \(\sin(\pi-x)=\)`, choix: [R`\(-\sin x\)`, R`\(\sin x\)`, R`\(\cos x\)`, R`\(-\cos x\)`], bonne: 1, explication: R`Les points associés à \(x\) et \(\pi-x\) sont symétriques par rapport à l'axe des ordonnées : même ordonnée, donc \(\sin(\pi-x)=\sin x\).` },
    { q: R`On sait que \(x\in\left[0\,;\frac{\pi}{2}\right]\) et \(\sin x=0{,}6\). Alors \(\cos x=\)`, choix: [R`\(0{,}4\)`, R`\(0{,}8\)`, R`\(-0{,}8\)`, R`\(0{,}64\)`], bonne: 1, explication: R`\(\cos^2x=1-0{,}36=0{,}64\), et \(\cos x\geqslant 0\) sur \(\left[0\,;\frac{\pi}{2}\right]\), donc \(\cos x=0{,}8\).` },
    { q: R`La fonction cosinus est…`, choix: [R`paire`, R`impaire`, R`ni paire ni impaire`, R`périodique de période \(\pi\)`], bonne: 0, explication: R`\(\cos(-x)=\cos x\) : elle est paire. Sa période est \(2\pi\), pas \(\pi\).` },
    { q: R`Les solutions de \(\sin x=\frac12\) dans \([0\,;2\pi[\) sont :`, choix: [R`\(\frac{\pi}{6}\) et \(-\frac{\pi}{6}\)`, R`\(\frac{\pi}{3}\) et \(\frac{2\pi}{3}\)`, R`\(\frac{\pi}{6}\) et \(\frac{5\pi}{6}\)`, R`\(\frac{\pi}{6}\) seulement`], bonne: 2, explication: R`\(\sin\frac{\pi}{6}=\frac12\) et l'autre solution est \(\pi-\frac{\pi}{6}=\frac{5\pi}{6}\). (\(-\frac{\pi}{6}\) n'est pas dans l'intervalle et son sinus vaut \(-\frac12\).)` },
    { q: R`Le point associé à \(\frac{25\pi}{4}\) est aussi associé à :`, choix: [R`\(\frac{\pi}{4}\)`, R`\(-\frac{\pi}{4}\)`, R`\(\frac{3\pi}{4}\)`, R`\(\frac{5\pi}{4}\)`], bonne: 0, explication: R`\(\frac{25\pi}{4}=\frac{24\pi}{4}+\frac{\pi}{4}=6\pi+\frac{\pi}{4}=3\times2\pi+\frac{\pi}{4}\) : trois tours complets puis \(\frac{\pi}{4}\).` }
  ],

  exercices: [
    { niveau: 1, titre: "Degrés et radians",
      enonce: R`<ol><li>Convertir en radians : \(30^\circ\), \(135^\circ\), \(270^\circ\).</li><li>Convertir en degrés : \(\frac{2\pi}{5}\), \(\frac{5\pi}{6}\), \(\frac{7\pi}{4}\).</li></ol>`,
      indice: R`Utilise la proportionnalité \(\pi\text{ rad}=180^\circ\) : on multiplie par \(\frac{\pi}{180}\) pour passer en radians, par \(\frac{180}{\pi}\) pour passer en degrés.`,
      correction: R`<ol><li>\(30^\circ=30\times\frac{\pi}{180}=\frac{\pi}{6}\) ; \(135^\circ=\frac{135\pi}{180}=\frac{3\pi}{4}\) (on simplifie par \(45\)) ; \(270^\circ=\frac{270\pi}{180}=\frac{3\pi}{2}\).</li>
<li>\(\frac{2\pi}{5}=\frac{2\times180}{5}=72^\circ\) ; \(\frac{5\pi}{6}=\frac{5\times180}{6}=150^\circ\) ; \(\frac{7\pi}{4}=\frac{7\times180}{4}=315^\circ\).</li></ol>` },

    { niveau: 1, titre: "Mesures principales",
      enonce: R`Déterminer la mesure principale de chacun des réels suivants, puis placer les points associés sur le cercle trigonométrique :
\[\frac{13\pi}{4}\qquad -\frac{11\pi}{3}\qquad \frac{35\pi}{6}\qquad \frac{100\pi}{3}\]`,
      indice: R`Écris \(2\pi\) avec le même dénominateur (\(\frac{8\pi}{4}\), \(\frac{6\pi}{3}\), \(\frac{12\pi}{6}\)) et cherche le multiple le plus proche du numérateur.`,
      correction: R`<ul>
<li>\(2\pi=\frac{8\pi}{4}\) ; le multiple de \(8\) le plus proche de \(13\) est \(16\) : \(\frac{13\pi}{4}=\frac{16\pi}{4}-\frac{3\pi}{4}=4\pi-\frac{3\pi}{4}\). Mesure principale : \(-\frac{3\pi}{4}\) (point en bas à gauche, sur la bissectrice).</li>
<li>\(2\pi=\frac{6\pi}{3}\) ; \(-11=-12+1\) : \(-\frac{11\pi}{3}=-4\pi+\frac{\pi}{3}\). Mesure principale : \(\frac{\pi}{3}\).</li>
<li>\(2\pi=\frac{12\pi}{6}\) ; \(35=36-1\) : \(\frac{35\pi}{6}=6\pi-\frac{\pi}{6}\). Mesure principale : \(-\frac{\pi}{6}\).</li>
<li>\(100=102-2\) et \(102=17\times 6\) : \(\frac{100\pi}{3}=\frac{102\pi}{3}-\frac{2\pi}{3}=34\pi-\frac{2\pi}{3}=17\times2\pi-\frac{2\pi}{3}\). Mesure principale : \(-\frac{2\pi}{3}\).</li>
</ul>
Chaque résultat est bien dans \(]-\pi\,;\pi]\).` },

    { niveau: 1, titre: "Valeurs exactes avec les angles associés",
      enonce: R`Donner la valeur exacte de :
\[\cos\frac{2\pi}{3}\qquad \sin\frac{5\pi}{4}\qquad \cos\left(-\frac{\pi}{6}\right)\qquad \sin\frac{11\pi}{6}\qquad \cos\frac{7\pi}{3}\]`,
      indice: R`Écris chaque réel sous la forme \(\pi-a\), \(\pi+a\), \(-a\) ou \(a+2k\pi\) avec \(a\) une valeur remarquable.`,
      correction: R`<ul>
<li>\(\cos\frac{2\pi}{3}=\cos\left(\pi-\frac{\pi}{3}\right)=-\cos\frac{\pi}{3}=-\frac12\).</li>
<li>\(\sin\frac{5\pi}{4}=\sin\left(\pi+\frac{\pi}{4}\right)=-\sin\frac{\pi}{4}=-\frac{\sqrt2}{2}\).</li>
<li>\(\cos\left(-\frac{\pi}{6}\right)=\cos\frac{\pi}{6}=\frac{\sqrt3}{2}\) (cosinus est paire).</li>
<li>\(\sin\frac{11\pi}{6}=\sin\left(2\pi-\frac{\pi}{6}\right)=\sin\left(-\frac{\pi}{6}\right)=-\sin\frac{\pi}{6}=-\frac12\).</li>
<li>\(\cos\frac{7\pi}{3}=\cos\left(2\pi+\frac{\pi}{3}\right)=\cos\frac{\pi}{3}=\frac12\).</li>
</ul>` },

    { niveau: 1, titre: "Retrouver le sinus",
      enonce: R`Soit \(x\) un réel de l'intervalle \(\left[-\frac{\pi}{2}\,;0\right]\) tel que \(\cos x=\frac{5}{13}\). Calculer la valeur exacte de \(\sin x\).`,
      indice: R`Utilise \(\cos^2x+\sin^2x=1\), puis regarde où se trouve le point associé à \(x\) pour choisir le signe.`,
      correction: R`On a \(\sin^2x=1-\cos^2x=1-\frac{25}{169}=\frac{144}{169}\). Donc \(\sin x=\frac{12}{13}\) ou \(\sin x=-\frac{12}{13}\).<br>
Comme \(x\in\left[-\frac{\pi}{2}\,;0\right]\), le point associé est dans le quart de cercle en bas à droite : son ordonnée est négative. Donc \(\sin x=-\frac{12}{13}\).` },

    { niveau: 2, titre: "Simplifier des expressions",
      enonce: R`Soit \(x\) un réel.
<ol><li>Simplifier \(A=\cos(-x)+\cos(\pi-x)+\sin(\pi+x)+\sin\left(\frac{\pi}{2}-x\right)\).</li>
<li>Simplifier \(B=\sin(x+\pi)+\cos\left(\frac{\pi}{2}-x\right)+\sin(3\pi-x)\).</li>
<li>Démontrer que \((\cos x+\sin x)^2+(\cos x-\sin x)^2=2\).</li></ol>`,
      indice: R`Applique les formules des angles associés une par une. Pour \(3\pi-x\), retire d'abord un tour \(2\pi\). Pour la 3, développe avec les identités remarquables.`,
      correction: R`<ol><li>\(\cos(-x)=\cos x\), \(\cos(\pi-x)=-\cos x\), \(\sin(\pi+x)=-\sin x\), \(\sin\left(\frac{\pi}{2}-x\right)=\cos x\).<br>
Donc \(A=\cos x-\cos x-\sin x+\cos x=\cos x-\sin x\).</li>
<li>\(\sin(x+\pi)=-\sin x\) ; \(\cos\left(\frac{\pi}{2}-x\right)=\sin x\) ; \(\sin(3\pi-x)=\sin(2\pi+\pi-x)=\sin(\pi-x)=\sin x\).<br>
Donc \(B=-\sin x+\sin x+\sin x=\sin x\).</li>
<li>\((\cos x+\sin x)^2=\cos^2x+2\cos x\sin x+\sin^2x\) et \((\cos x-\sin x)^2=\cos^2x-2\cos x\sin x+\sin^2x\).<br>
En additionnant, les doubles produits s'annulent : on obtient \(2\cos^2x+2\sin^2x=2(\cos^2x+\sin^2x)=2\times1=2\).</li></ol>` },

    { niveau: 2, titre: "Équations sur un intervalle",
      enonce: R`Résoudre :
<ol><li>\(\cos x=-\frac{\sqrt3}{2}\) sur \(]-\pi\,;\pi]\) ;</li>
<li>\(\sin x=\frac{\sqrt2}{2}\) sur \([0\,;2\pi[\) ;</li>
<li>\(2\cos x+1=0\) sur \([0\,;2\pi[\) ;</li>
<li>\(\sin x=-1\) sur \(\mathbb{R}\).</li></ol>`,
      indice: R`Trouve d'abord une solution \(\alpha\) « remarquable », puis la deuxième : \(-\alpha\) pour le cosinus, \(\pi-\alpha\) pour le sinus. Ramène-les dans l'intervalle en ajoutant ou retirant \(2\pi\).`,
      correction: R`<ol><li>\(\cos\frac{5\pi}{6}=\cos\left(\pi-\frac{\pi}{6}\right)=-\frac{\sqrt3}{2}\). Les solutions sont \(\frac{5\pi}{6}+2k\pi\) et \(-\frac{5\pi}{6}+2k\pi\). Dans \(]-\pi\,;\pi]\) : \(S=\left\{-\frac{5\pi}{6}\,;\frac{5\pi}{6}\right\}\).</li>
<li>\(\sin\frac{\pi}{4}=\frac{\sqrt2}{2}\) ; l'autre solution est \(\pi-\frac{\pi}{4}=\frac{3\pi}{4}\). Dans \([0\,;2\pi[\) : \(S=\left\{\frac{\pi}{4}\,;\frac{3\pi}{4}\right\}\).</li>
<li>\(2\cos x+1=0\iff\cos x=-\frac12\). Or \(\cos\frac{2\pi}{3}=-\frac12\), donc \(x=\frac{2\pi}{3}+2k\pi\) ou \(x=-\frac{2\pi}{3}+2k\pi\). Dans \([0\,;2\pi[\) : \(\frac{2\pi}{3}\) et \(-\frac{2\pi}{3}+2\pi=\frac{4\pi}{3}\). \(S=\left\{\frac{2\pi}{3}\,;\frac{4\pi}{3}\right\}\).</li>
<li>Le seul point du cercle d'ordonnée \(-1\) est \(J'(0\,;-1)\), associé à \(-\frac{\pi}{2}\). Donc \(S=\left\{-\frac{\pi}{2}+2k\pi,\ k\in\mathbb{Z}\right\}\) (ici les deux solutions \(\alpha\) et \(\pi-\alpha\) donnent le même point).</li></ol>` },

    { niveau: 2, titre: "Parité et périodicité",
      enonce: R`On considère les fonctions définies sur \(\mathbb{R}\) par \(f(x)=\cos(2x)+1\) et \(g(x)=\sin x\cos x\).
<ol><li>Montrer que \(f\) est paire et périodique de période \(\pi\).</li>
<li>Montrer que \(g\) est impaire et périodique de période \(\pi\).</li>
<li>Expliquer pourquoi il suffit d'étudier \(f\) sur \(\left[0\,;\frac{\pi}{2}\right]\) pour connaître toute sa courbe.</li></ol>`,
      indice: R`Calcule \(f(-x)\) et \(f(x+\pi)\) : attention, \(2(x+\pi)=2x+2\pi\). Pour \(g\), utilise \(\sin(x+\pi)=-\sin x\) et \(\cos(x+\pi)=-\cos x\).`,
      correction: R`<ol><li>Pour tout réel \(x\) : \(f(-x)=\cos(-2x)+1=\cos(2x)+1=f(x)\) car cosinus est paire. Donc \(f\) est paire.<br>
\(f(x+\pi)=\cos(2x+2\pi)+1=\cos(2x)+1=f(x)\) car cosinus est \(2\pi\)-périodique. Donc \(f\) est périodique de période \(\pi\).</li>
<li>\(g(-x)=\sin(-x)\cos(-x)=(-\sin x)\cos x=-g(x)\) : \(g\) est impaire.<br>
\(g(x+\pi)=\sin(x+\pi)\cos(x+\pi)=(-\sin x)(-\cos x)=\sin x\cos x=g(x)\) : \(g\) est périodique de période \(\pi\).</li>
<li>Grâce à la parité, la courbe sur \(\left[-\frac{\pi}{2}\,;0\right]\) est la symétrique (par rapport à l'axe des ordonnées) de celle sur \(\left[0\,;\frac{\pi}{2}\right]\). On connaît alors \(f\) sur \(\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]\), intervalle de longueur \(\pi\) ; par périodicité, on obtient toute la courbe par translations de \(k\pi\) horizontalement.</li></ol>` },

    { niveau: 2, titre: "Inéquations lues sur le cercle",
      enonce: R`À l'aide du cercle trigonométrique, résoudre :
<ol><li>\(\sin x\geqslant\frac12\) sur \([0\,;2\pi[\) ;</li>
<li>\(\cos x\lt\frac{\sqrt2}{2}\) sur \(]-\pi\,;\pi]\).</li></ol>`,
      indice: R`Résous d'abord l'égalité, place les points, puis repère l'arc de cercle qui est au-dessus de la droite horizontale (pour le sinus) ou à gauche de la droite verticale (pour le cosinus).`,
      correction: R`<ol><li>\(\sin x=\frac12\) sur \([0\,;2\pi[\) a pour solutions \(\frac{\pi}{6}\) et \(\frac{5\pi}{6}\). Les points d'ordonnée supérieure ou égale à \(\frac12\) sont sur l'arc supérieur entre ces deux points (celui qui passe par \(J\)). Donc \(S=\left[\frac{\pi}{6}\,;\frac{5\pi}{6}\right]\).</li>
<li>\(\cos x=\frac{\sqrt2}{2}\) sur \(]-\pi\,;\pi]\) a pour solutions \(-\frac{\pi}{4}\) et \(\frac{\pi}{4}\). Les points d'abscisse strictement inférieure à \(\frac{\sqrt2}{2}\) sont sur l'arc de gauche, qui passe par \(I'(-1\,;0)\), associé à \(\pi\). En parcourant \(]-\pi\,;\pi]\), cela donne \(S=\left]-\pi\,;-\frac{\pi}{4}\right[\cup\left]\frac{\pi}{4}\,;\pi\right]\) (les bornes \(\pm\frac{\pi}{4}\) sont exclues car l'inégalité est stricte ; \(\pi\) est inclus car \(\cos\pi=-1\lt\frac{\sqrt2}{2}\)).</li></ol>` },

    { niveau: 3, titre: "Équation du second degré déguisée",
      enonce: R`Résoudre sur \(]-\pi\,;\pi]\) l'équation \(2\cos^2x-\cos x-1=0\).`,
      indice: R`Pose \(X=\cos x\) : tu obtiens une équation du second degré en \(X\). N'oublie pas que \(X\) doit être dans \([-1\,;1]\).`,
      correction: R`On pose \(X=\cos x\). L'équation devient \(2X^2-X-1=0\).<br>
\(\Delta=(-1)^2-4\times2\times(-1)=1+8=9\gt 0\), donc deux racines : \(X_1=\frac{1-3}{4}=-\frac12\) et \(X_2=\frac{1+3}{4}=1\).<br>
On revient à \(x\) :
<ul><li>\(\cos x=1\) : sur \(]-\pi\,;\pi]\), seul \(x=0\) convient (point \(I\)).</li>
<li>\(\cos x=-\frac12\) : \(\cos\frac{2\pi}{3}=-\frac12\), donc \(x=\frac{2\pi}{3}\) ou \(x=-\frac{2\pi}{3}\), tous deux dans \(]-\pi\,;\pi]\).</li></ul>
Conclusion : \(S=\left\{-\frac{2\pi}{3}\,;0\,;\frac{2\pi}{3}\right\}\).<br>
<i>Vérification :</i> pour \(x=\frac{2\pi}{3}\), \(2\times\frac14-\left(-\frac12\right)-1=\frac12+\frac12-1=0\). ✓` },

    { niveau: 3, titre: "Un modèle pour les marées",
      enonce: R`Dans un port, on modélise la hauteur d'eau (en mètres) par \(h(t)=4+3\cos\left(\frac{\pi t}{6}\right)\), où \(t\in[0\,;24]\) est le temps en heures écoulé depuis minuit.
<ol><li>Calculer \(h(0)\), \(h(3)\) et \(h(6)\). Interpréter \(h(0)\) et \(h(6)\).</li>
<li>Montrer que pour tout \(t\in[0\,;12]\), \(h(t+12)=h(t)\). Interpréter.</li>
<li>Un bateau ne peut entrer dans le port que si la hauteur d'eau est d'au moins \(5{,}5\) m. Résoudre \(h(t)\geqslant 5{,}5\) sur \([0\,;24]\) et en déduire la durée totale pendant laquelle le bateau peut entrer dans la journée.</li></ol>`,
      indice: R`\(h(t)\geqslant5{,}5\iff\cos\left(\frac{\pi t}{6}\right)\geqslant\frac12\). Pose \(X=\frac{\pi t}{6}\) : quand \(t\) parcourt \([0\,;24]\), \(X\) parcourt \([0\,;4\pi]\), soit deux tours.`,
      correction: R`<ol><li>\(h(0)=4+3\cos0=7\) ; \(h(3)=4+3\cos\frac{\pi}{2}=4\) ; \(h(6)=4+3\cos\pi=4-3=1\).<br>
Comme \(-1\leqslant\cos\leqslant1\), on a toujours \(1\leqslant h(t)\leqslant7\) : à minuit c'est la <b>pleine mer</b> (7 m, maximum), à 6 h la <b>basse mer</b> (1 m, minimum).</li>
<li>\(h(t+12)=4+3\cos\left(\frac{\pi t}{6}+\frac{12\pi}{6}\right)=4+3\cos\left(\frac{\pi t}{6}+2\pi\right)=4+3\cos\left(\frac{\pi t}{6}\right)=h(t)\).<br>
La marée se répète toutes les 12 heures (dans la réalité, environ 12 h 25 min).</li>
<li>\(h(t)\geqslant5{,}5\iff3\cos\left(\frac{\pi t}{6}\right)\geqslant1{,}5\iff\cos\left(\frac{\pi t}{6}\right)\geqslant\frac12\).<br>
Posons \(X=\frac{\pi t}{6}\in[0\,;4\pi]\). Sur le cercle, \(\cos X\geqslant\frac12\) correspond à l'arc entre \(-\frac{\pi}{3}\) et \(\frac{\pi}{3}\), donc \(X\in\left[-\frac{\pi}{3}+2k\pi\,;\frac{\pi}{3}+2k\pi\right]\).<br>
Dans \([0\,;4\pi]\) : \(X\in\left[0\,;\frac{\pi}{3}\right]\cup\left[\frac{5\pi}{3}\,;\frac{7\pi}{3}\right]\cup\left[\frac{11\pi}{3}\,;4\pi\right]\).<br>
Comme \(t=\frac{6X}{\pi}\) : \(t\in[0\,;2]\cup[10\,;14]\cup[22\,;24]\).<br>
Durée totale : \(2+4+2=8\) heures. Le bateau peut entrer de 0 h à 2 h, de 10 h à 14 h et de 22 h à minuit.</li></ol>` },

    { niveau: 3, titre: "Archimède et Python",
      enonce: R`On inscrit dans le cercle de centre \(O\) et de rayon \(1\) un polygone régulier à \(n\) côtés (\(n\geqslant3\)). On note \(c_n\) la longueur d'un côté et \(p_n=\frac{n\,c_n}{2}\) son demi-périmètre.
<ol><li>Soit \([AB]\) un côté et \(H\) le milieu de \([AB]\). Justifier que \(\widehat{AOH}=\frac{\pi}{n}\) puis que \(c_n=2\sin\frac{\pi}{n}\).</li>
<li>Calculer \(c_6\) et \(p_6\). Pourquoi a-t-on \(p_n\lt\pi\) ?</li>
<li>Montrer que \(\sqrt{2-\sqrt{4-c_n^2}}=2\sin\frac{\pi}{2n}\), c'est-à-dire \(c_{2n}\). On admettra que \(1-\cos a=2\sin^2\frac{a}{2}\) pour tout réel \(a\).</li>
<li>Compléter le programme suivant pour qu'il affiche les demi-périmètres des polygones à \(6, 12, 24, 48, 96\) côtés, puis donner les valeurs obtenues (4 décimales).
<pre><code>from math import sqrt

c = ...
n = 6
for etape in range(5):
    print(n, ...)
    c = sqrt(2 - sqrt(4 - c**2))
    n = ...</code></pre></li></ol>`,
      indice: R`Le triangle \(OAB\) est isocèle en \(O\) d'angle au sommet \(\frac{2\pi}{n}\) (un tour divisé en \(n\)). Dans le triangle rectangle \(OHA\), \(\sin\widehat{AOH}=\frac{AH}{OA}\). Pour la 3, remplace \(c_n^2\) par \(4\sin^2\frac{\pi}{n}\) et utilise \(\cos^2+\sin^2=1\).`,
      correction: R`<ol><li>Les \(n\) sommets découpent le tour complet en \(n\) angles au centre égaux : \(\widehat{AOB}=\frac{2\pi}{n}\). Le triangle \(OAB\) est isocèle en \(O\) (\(OA=OB=1\)), donc la médiane \([OH]\) est aussi bissectrice et hauteur : \(\widehat{AOH}=\frac{\pi}{n}\) et \(OHA\) est rectangle en \(H\).<br>
Alors \(\sin\frac{\pi}{n}=\frac{AH}{OA}=AH\), donc \(c_n=AB=2AH=2\sin\frac{\pi}{n}\).</li>
<li>\(c_6=2\sin\frac{\pi}{6}=2\times\frac12=1\) et \(p_6=\frac{6\times1}{2}=3\).<br>
Le polygone est à l'intérieur du cercle et chaque côté (segment) est plus court que l'arc qu'il sous-tend : son périmètre est inférieur à \(2\pi\), donc \(p_n\lt\pi\).</li>
<li>\(4-c_n^2=4-4\sin^2\frac{\pi}{n}=4\cos^2\frac{\pi}{n}\). Comme \(\frac{\pi}{n}\in\left]0\,;\frac{\pi}{2}\right[\) pour \(n\geqslant3\), \(\cos\frac{\pi}{n}\gt0\), donc \(\sqrt{4-c_n^2}=2\cos\frac{\pi}{n}\).<br>
Alors \(2-\sqrt{4-c_n^2}=2\left(1-\cos\frac{\pi}{n}\right)=2\times2\sin^2\frac{\pi}{2n}=4\sin^2\frac{\pi}{2n}\).<br>
Comme \(\sin\frac{\pi}{2n}\gt0\), \(\sqrt{2-\sqrt{4-c_n^2}}=2\sin\frac{\pi}{2n}=c_{2n}\).</li>
<li>Programme complété :
<pre><code>from math import sqrt

c = 1
n = 6
for etape in range(5):
    print(n, n * c / 2)
    c = sqrt(2 - sqrt(4 - c**2))
    n = 2 * n</code></pre>
Valeurs affichées (arrondies) : \(p_6=3\) ; \(p_{12}\approx3{,}1058\) ; \(p_{24}\approx3{,}1326\) ; \(p_{48}\approx3{,}1394\) ; \(p_{96}\approx3{,}1410\). On se rapproche de \(\pi\approx3{,}1416\) par valeurs inférieures, sans jamais avoir utilisé \(\pi\) dans le programme !</li></ol>` },

    { niveau: 3, titre: "Le losange articulé",
      enonce: R`Un losange articulé \(ABCD\) est formé de quatre tiges de \(5\) cm. On fixe \(A\) à l'origine d'un repère orthonormé (unité : 1 cm) et \(B(5\,;0)\). On note \(\theta\in]0\,;\pi[\) une mesure en radians de l'angle \(\widehat{BAD}\), qu'on peut faire varier en déformant le losange.
<ol><li>Justifier que \(D(5\cos\theta\,;5\sin\theta)\) et en déduire les coordonnées de \(C\).</li>
<li>Montrer que l'aire du losange vaut \(\mathcal{A}(\theta)=25\sin\theta\). Pour quelle valeur de \(\theta\) est-elle maximale ? Quelle est alors la forme du losange ?</li>
<li>Pour quelles valeurs de \(\theta\) l'aire est-elle supérieure ou égale à \(12{,}5\) cm² ?</li>
<li>Montrer que \(AC^2=50(1+\cos\theta)\). Calculer \(AC\) pour \(\theta=\frac{\pi}{3}\) et pour \(\theta=\frac{2\pi}{3}\), et interpréter.</li></ol>`,
      indice: R`\(D\) est sur le cercle de centre \(A\) et de rayon \(5\) : c'est le cercle trigonométrique « agrandi 5 fois ». Pour \(C\), utilise \(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}\) (parallélogramme). L'aire d'un parallélogramme est base \(\times\) hauteur.`,
      correction: R`<ol><li>\(AD=5\) et l'angle orienté de \(\overrightarrow{AB}\) (direction de l'axe des abscisses) à \(\overrightarrow{AD}\) mesure \(\theta\) : \(D\) est le point associé à \(\theta\) sur le cercle de centre \(A\) de rayon \(5\), donc \(D(5\cos\theta\,;5\sin\theta)\).<br>
\(ABCD\) est un losange donc un parallélogramme : \(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}\), d'où \(C(5+5\cos\theta\,;5\sin\theta)\).</li>
<li>Avec la base \([AB]\) (longueur \(5\)), la hauteur est la distance de \(D\) à l'axe des abscisses, soit \(5\sin\theta\) (positif car \(\theta\in]0\,;\pi[\)). Donc \(\mathcal{A}(\theta)=5\times5\sin\theta=25\sin\theta\).<br>
\(\sin\theta\leqslant1\), avec égalité pour \(\theta=\frac{\pi}{2}\) : l'aire maximale est \(25\) cm², atteinte quand l'angle est droit : le losange est alors un <b>carré</b>.</li>
<li>\(25\sin\theta\geqslant12{,}5\iff\sin\theta\geqslant\frac12\). Sur \(]0\,;\pi[\), \(\sin\theta=\frac12\) pour \(\theta=\frac{\pi}{6}\) ou \(\theta=\frac{5\pi}{6}\), et \(\sin\theta\geqslant\frac12\) entre les deux (arc passant par \(J\)). Donc \(\theta\in\left[\frac{\pi}{6}\,;\frac{5\pi}{6}\right]\).</li>
<li>\(AC^2=(5+5\cos\theta)^2+(5\sin\theta)^2=25+50\cos\theta+25\cos^2\theta+25\sin^2\theta=25+50\cos\theta+25=50(1+\cos\theta)\).<br>
Pour \(\theta=\frac{\pi}{3}\) : \(AC^2=50\times\frac32=75\), \(AC=5\sqrt3\approx8{,}66\) cm.<br>
Pour \(\theta=\frac{2\pi}{3}\) : \(AC^2=50\times\frac12=25\), \(AC=5\) cm : la diagonale \([AC]\) a la même longueur que les côtés, les triangles \(ABC\) et \(ACD\) sont équilatéraux.</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Cercle trigonométrique, cosinus et sinus", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Automatismes", points: 5,
          enonce: R`<ol><li>Convertir \(150^\circ\) en radians.</li>
<li>Donner la mesure principale de \(\frac{31\pi}{6}\) et de \(-\frac{17\pi}{4}\).</li>
<li>Donner les valeurs exactes de \(\cos\frac{3\pi}{4}\), \(\sin\left(-\frac{2\pi}{3}\right)\), \(\cos\frac{13\pi}{6}\) et \(\sin\frac{5\pi}{3}\).</li></ol>`,
          correction: R`<ol><li>\(150^\circ=\frac{150\pi}{180}=\frac{5\pi}{6}\). <b>(1 pt)</b></li>
<li>\(\frac{31\pi}{6}=\frac{36\pi}{6}-\frac{5\pi}{6}=6\pi-\frac{5\pi}{6}\) : mesure principale \(-\frac{5\pi}{6}\).<br>
\(-\frac{17\pi}{4}=-\frac{16\pi}{4}-\frac{\pi}{4}=-4\pi-\frac{\pi}{4}\) : mesure principale \(-\frac{\pi}{4}\). <b>(1 pt : 0,5 + 0,5)</b></li>
<li>\(\cos\frac{3\pi}{4}=\cos\left(\pi-\frac{\pi}{4}\right)=-\frac{\sqrt2}{2}\) ;
\(\sin\left(-\frac{2\pi}{3}\right)=-\sin\frac{2\pi}{3}=-\sin\left(\pi-\frac{\pi}{3}\right)=-\frac{\sqrt3}{2}\) ;
\(\cos\frac{13\pi}{6}=\cos\left(2\pi+\frac{\pi}{6}\right)=\frac{\sqrt3}{2}\) ;
\(\sin\frac{5\pi}{3}=\sin\left(2\pi-\frac{\pi}{3}\right)=\sin\left(-\frac{\pi}{3}\right)=-\frac{\sqrt3}{2}\). <b>(3 pts : 0,75 par valeur, justification comprise)</b></li></ol>` },
        { titre: "Exercice 2 — Un réel mystère", points: 5,
          enonce: R`Soit \(x\in\left[\pi\,;\frac{3\pi}{2}\right]\) tel que \(\sin x=-\frac13\).
<ol><li>Calculer la valeur exacte de \(\cos x\).</li>
<li>En déduire les valeurs exactes de \(\cos(\pi-x)\), \(\sin(\pi+x)\), \(\cos\left(\frac{\pi}{2}-x\right)\) et \(\sin(-x)\).</li></ol>`,
          correction: R`<ol><li>\(\cos^2x=1-\sin^2x=1-\frac19=\frac89\), donc \(\cos x=\frac{2\sqrt2}{3}\) ou \(\cos x=-\frac{2\sqrt2}{3}\) (car \(\sqrt{8}=2\sqrt2\)).<br>
Pour \(x\in\left[\pi\,;\frac{3\pi}{2}\right]\), le point associé est dans le quart en bas à gauche : abscisse négative. Donc \(\cos x=-\frac{2\sqrt2}{3}\). <b>(2 pts : 1 pour le calcul, 1 pour le choix du signe justifié)</b></li>
<li>\(\cos(\pi-x)=-\cos x=\frac{2\sqrt2}{3}\) ; \(\sin(\pi+x)=-\sin x=\frac13\) ; \(\cos\left(\frac{\pi}{2}-x\right)=\sin x=-\frac13\) ; \(\sin(-x)=-\sin x=\frac13\). <b>(3 pts : 0,75 par valeur)</b></li></ol>` },
        { titre: "Exercice 3 — Équations et inéquation", points: 6,
          enonce: R`<ol><li>Résoudre \(\cos x=\frac{\sqrt2}{2}\) sur \(]-\pi\,;\pi]\).</li>
<li>Résoudre \(\sin x=-\frac{\sqrt3}{2}\) sur \([0\,;2\pi[\).</li>
<li>Résoudre \(2\sin^2x=1\) sur \(]-\pi\,;\pi]\).</li>
<li>Résoudre \(\cos x\geqslant-\frac12\) sur \(]-\pi\,;\pi]\) (on s'aidera d'un cercle trigonométrique).</li></ol>`,
          correction: R`<ol><li>\(\cos\frac{\pi}{4}=\frac{\sqrt2}{2}\), donc \(x=\frac{\pi}{4}+2k\pi\) ou \(x=-\frac{\pi}{4}+2k\pi\). Sur \(]-\pi\,;\pi]\) : \(S=\left\{-\frac{\pi}{4}\,;\frac{\pi}{4}\right\}\). <b>(1 pt)</b></li>
<li>\(\sin\left(-\frac{\pi}{3}\right)=-\frac{\sqrt3}{2}\), donc \(x=-\frac{\pi}{3}+2k\pi\) ou \(x=\pi+\frac{\pi}{3}+2k\pi=\frac{4\pi}{3}+2k\pi\). Dans \([0\,;2\pi[\) : \(-\frac{\pi}{3}+2\pi=\frac{5\pi}{3}\) et \(\frac{4\pi}{3}\). \(S=\left\{\frac{4\pi}{3}\,;\frac{5\pi}{3}\right\}\). <b>(1,5 pt)</b></li>
<li>\(2\sin^2x=1\iff\sin^2x=\frac12\iff\sin x=\frac{\sqrt2}{2}\) ou \(\sin x=-\frac{\sqrt2}{2}\) (car \(\frac{1}{\sqrt2}=\frac{\sqrt2}{2}\)).<br>
\(\sin x=\frac{\sqrt2}{2}\) : \(x=\frac{\pi}{4}\) ou \(x=\frac{3\pi}{4}\). \(\sin x=-\frac{\sqrt2}{2}\) : \(x=-\frac{\pi}{4}\) ou \(x=-\frac{3\pi}{4}\) (car \(\pi-\left(-\frac{\pi}{4}\right)=\frac{5\pi}{4}\), qui a pour mesure principale \(-\frac{3\pi}{4}\)).<br>
\(S=\left\{-\frac{3\pi}{4}\,;-\frac{\pi}{4}\,;\frac{\pi}{4}\,;\frac{3\pi}{4}\right\}\). <b>(2 pts)</b></li>
<li>\(\cos x=-\frac12\) sur \(]-\pi\,;\pi]\) pour \(x=\pm\frac{2\pi}{3}\). Les points d'abscisse \(\geqslant-\frac12\) sont sur l'arc de droite (qui passe par \(I\)), entre ces deux points. \(S=\left[-\frac{2\pi}{3}\,;\frac{2\pi}{3}\right]\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Démonstration et parité", points: 4,
          enonce: R`<ol><li>En utilisant une symétrie du cercle trigonométrique, démontrer que pour tout réel \(x\), \(\cos(\pi+x)=-\cos x\) et \(\sin(\pi+x)=-\sin x\).</li>
<li>Étudier la parité des fonctions définies sur \(\mathbb{R}\) par \(f(x)=x^2\cos x\) et \(g(x)=\frac{\sin x}{2+\cos x}\).</li></ol>`,
          correction: R`<ol><li>Soit \(M(\cos x\,;\sin x)\) le point associé à \(x\). Ajouter \(\pi\), c'est parcourir un demi-tour supplémentaire : on arrive au point diamétralement opposé, c'est-à-dire au symétrique \(M'\) de \(M\) par rapport à \(O\). Une symétrie centrale de centre \(O\) change les coordonnées en leurs opposées : \(M'(-\cos x\,;-\sin x)\). Comme \(M'\) est associé à \(\pi+x\), on a \(\cos(\pi+x)=-\cos x\) et \(\sin(\pi+x)=-\sin x\). <b>(2 pts)</b></li>
<li>\(\mathbb{R}\) est symétrique par rapport à \(0\).<br>
\(f(-x)=(-x)^2\cos(-x)=x^2\cos x=f(x)\) : \(f\) est <b>paire</b>. <b>(1 pt)</b><br>
\(2+\cos x\geqslant1\gt0\) donc \(g\) est bien définie sur \(\mathbb{R}\), et \(g(-x)=\frac{\sin(-x)}{2+\cos(-x)}=\frac{-\sin x}{2+\cos x}=-g(x)\) : \(g\) est <b>impaire</b>. <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°2 — Fonctions trigonométriques et modélisation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — La grande roue", points: 6,
          enonce: R`Une grande roue a un rayon de \(20\) m ; son centre est à \(22\) m du sol. Elle fait un tour complet en \(8\) minutes. Une nacelle part du point le plus bas à \(t=0\). Sa hauteur (en m) au bout de \(t\) minutes est \(h(t)=22-20\cos\left(\frac{\pi t}{4}\right)\), pour \(t\in[0\,;8]\).
<ol><li>Calculer \(h(0)\), \(h(2)\) et \(h(4)\). Interpréter.</li>
<li>Donner la valeur exacte de \(h(1)\), puis une valeur approchée au cm près.</li>
<li>Vérifier que \(h(t+8)=h(t)\) pour tout réel \(t\). Interpréter.</li>
<li>Pendant combien de temps, au cours d'un tour, la nacelle est-elle à au moins \(32\) m du sol ?</li></ol>`,
          correction: R`<ol><li>\(h(0)=22-20\cos0=2\) m : point le plus bas. \(h(2)=22-20\cos\frac{\pi}{2}=22\) m : à la hauteur du centre (quart de tour). \(h(4)=22-20\cos\pi=42\) m : point le plus haut (demi-tour). <b>(1,5 pt)</b></li>
<li>\(h(1)=22-20\cos\frac{\pi}{4}=22-20\times\frac{\sqrt2}{2}=22-10\sqrt2\approx7{,}86\) m. <b>(1 pt)</b></li>
<li>\(h(t+8)=22-20\cos\left(\frac{\pi t}{4}+2\pi\right)=22-20\cos\left(\frac{\pi t}{4}\right)=h(t)\) : la fonction est périodique de période \(8\) ; la roue repasse à la même position toutes les 8 minutes. <b>(1 pt)</b></li>
<li>\(h(t)\geqslant32\iff-20\cos\left(\frac{\pi t}{4}\right)\geqslant10\iff\cos\left(\frac{\pi t}{4}\right)\leqslant-\frac12\) (on divise par \(-20\lt0\), le sens change).<br>
Posons \(X=\frac{\pi t}{4}\in[0\,;2\pi]\). Sur le cercle, \(\cos X\leqslant-\frac12\) pour \(X\in\left[\frac{2\pi}{3}\,;\frac{4\pi}{3}\right]\) (arc de gauche).<br>
Donc \(t=\frac{4X}{\pi}\in\left[\frac83\,;\frac{16}{3}\right]\). Durée : \(\frac{16}{3}-\frac83=\frac83\) min, soit <b>2 min 40 s</b>. <b>(2,5 pts : 1 pour la mise en équation, 1 pour la résolution, 0,5 pour la durée)</b></li></ol>` },
        { titre: "Exercice 2 — Algorithmique : mesure principale", points: 5,
          enonce: R`On considère la fonction Python suivante.
<pre><code>from math import pi

def mesure_principale(x):
    while x &gt; pi:
        x = x - 2*pi
    while x &lt;= -pi:
        x = x + 2*pi
    return x</code></pre>
<ol><li>Que renvoie <code>mesure_principale(7*pi/2)</code> ? Détailler les étapes.</li>
<li>Expliquer le rôle de chacune des deux boucles.</li>
<li>On travaille maintenant avec des réels de la forme \(\frac{p\pi}{q}\). Déterminer, sans programme, la mesure principale de \(\frac{2027\pi}{6}\).</li>
<li>Écrire une fonction <code>mp(p, q)</code> qui renvoie le numérateur \(p'\) de la mesure principale \(\frac{p'\pi}{q}\) de \(\frac{p\pi}{q}\) (avec \(q\gt0\)), en ne travaillant qu'avec des entiers.</li></ol>`,
          correction: R`<ol><li>\(x=\frac{7\pi}{2}\gt\pi\) : \(x\) devient \(\frac{7\pi}{2}-2\pi=\frac{3\pi}{2}\). Encore \(\gt\pi\) : \(x\) devient \(\frac{3\pi}{2}-2\pi=-\frac{\pi}{2}\). La première boucle s'arrête ; \(-\frac{\pi}{2}\gt-\pi\) donc la seconde ne s'exécute pas. La fonction renvoie \(-\frac{\pi}{2}\approx-1{,}5708\). <b>(1,5 pt)</b></li>
<li>La première boucle retire des tours tant que \(x\gt\pi\) ; la seconde ajoute des tours tant que \(x\leqslant-\pi\). À la fin, \(-\pi\lt x\leqslant\pi\) : c'est la mesure principale (même point du cercle car on n'a ajouté que des multiples de \(2\pi\)). <b>(1 pt)</b></li>
<li>\(2\pi=\frac{12\pi}{6}\) et \(2027=12\times169-1\) (car \(12\times169=2028\)). Donc \(\frac{2027\pi}{6}=169\times2\pi-\frac{\pi}{6}\) : mesure principale \(-\frac{\pi}{6}\). <b>(1 pt)</b></li>
<li>Un tour correspond à ajouter \(2q\) au numérateur :
<pre><code>def mp(p, q):
    while p &gt; q:
        p = p - 2*q
    while p &lt;= -q:
        p = p + 2*q
    return p</code></pre>
Par exemple <code>mp(2027, 6)</code> renvoie <code>-1</code>, soit \(-\frac{\pi}{6}\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Équations", points: 5,
          enonce: R`<ol><li>Résoudre dans \(\mathbb{R}\) l'équation \(2X^2+3X-2=0\).</li>
<li>En déduire les solutions dans \([0\,;2\pi[\) de \(2\cos^2x+3\cos x-2=0\).</li>
<li>Résoudre dans \([0\,;2\pi[\) l'équation \(2\sin^2x-\sin x=0\).</li></ol>`,
          correction: R`<ol><li>\(\Delta=3^2-4\times2\times(-2)=9+16=25\), \(\sqrt\Delta=5\). \(X_1=\frac{-3-5}{4}=-2\) et \(X_2=\frac{-3+5}{4}=\frac12\). <b>(1,5 pt)</b></li>
<li>On pose \(X=\cos x\) : \(\cos x=-2\) est impossible car \(-1\leqslant\cos x\leqslant1\). \(\cos x=\frac12\) : \(x=\frac{\pi}{3}\) ou \(x=-\frac{\pi}{3}+2\pi=\frac{5\pi}{3}\). \(S=\left\{\frac{\pi}{3}\,;\frac{5\pi}{3}\right\}\). <b>(1,5 pt)</b></li>
<li>\(2\sin^2x-\sin x=\sin x(2\sin x-1)=0\iff\sin x=0\) ou \(\sin x=\frac12\).<br>
\(\sin x=0\) : \(x=0\) ou \(x=\pi\). \(\sin x=\frac12\) : \(x=\frac{\pi}{6}\) ou \(x=\frac{5\pi}{6}\).<br>
\(S=\left\{0\,;\frac{\pi}{6}\,;\frac{5\pi}{6}\,;\pi\right\}\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 4 — Étude d'une fonction trigonométrique", points: 4,
          enonce: R`Soit \(g\) la fonction définie sur \(\mathbb{R}\) par \(g(x)=1+\cos(2x)\).
<ol><li>Montrer que \(g\) est paire et périodique de période \(\pi\).</li>
<li>Calculer \(g\left(\frac{\pi}{6}\right)\), \(g\left(\frac{\pi}{4}\right)\) et \(g\left(\frac{\pi}{2}\right)\).</li>
<li>Résoudre \(g(x)=1\) sur \([0\,;\pi]\).</li></ol>`,
          correction: R`<ol><li>\(g(-x)=1+\cos(-2x)=1+\cos(2x)=g(x)\) : \(g\) est paire. \(g(x+\pi)=1+\cos(2x+2\pi)=1+\cos(2x)=g(x)\) : \(g\) est \(\pi\)-périodique. <b>(1,5 pt)</b></li>
<li>\(g\left(\frac{\pi}{6}\right)=1+\cos\frac{\pi}{3}=\frac32\) ; \(g\left(\frac{\pi}{4}\right)=1+\cos\frac{\pi}{2}=1\) ; \(g\left(\frac{\pi}{2}\right)=1+\cos\pi=0\). <b>(1 pt)</b></li>
<li>\(g(x)=1\iff\cos(2x)=0\). Si \(x\in[0\,;\pi]\), alors \(X=2x\in[0\,;2\pi]\) et \(\cos X=0\iff X=\frac{\pi}{2}\) ou \(X=\frac{3\pi}{2}\). Donc \(x=\frac{\pi}{4}\) ou \(x=\frac{3\pi}{4}\). \(S=\left\{\frac{\pi}{4}\,;\frac{3\pi}{4}\right\}\). <b>(1,5 pt)</b></li></ol>` }
      ] }
  ]
});
})();
