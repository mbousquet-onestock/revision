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
      ] },
    { titre: "DS n°3 — Enroulement, valeurs exactes et équations", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 5,
          enonce: R`Pour chacune des affirmations suivantes, dire si elle est vraie ou fausse, puis justifier. Une réponse non justifiée ne rapporte aucun point.
<ol><li>Un angle de \(225^\circ\) mesure \(\frac{5\pi}{4}\) radians.</li>
<li>Les réels \(\frac{23\pi}{5}\) et \(-\frac{7\pi}{5}\) sont associés au même point du cercle trigonométrique.</li>
<li>Pour tout réel \(x\), \(\sin\left(x+\frac{\pi}{2}\right)=\sin x\).</li>
<li>\(\cos\frac{19\pi}{4}=-\frac{\sqrt2}{2}\).</li>
<li>Il existe un réel \(x\) tel que \(\cos x=\frac12\) et \(\sin x=\frac12\).</li></ol>`,
          correction: R`<ol><li><b>Vrai.</b> \(225^\circ=225\times\frac{\pi}{180}=\frac{225\pi}{180}=\frac{5\pi}{4}\) (on simplifie par \(45\)). <b>(1 pt)</b></li>
<li><b>Vrai.</b> \(\frac{23\pi}{5}-\left(-\frac{7\pi}{5}\right)=\frac{30\pi}{5}=6\pi=3\times2\pi\). Les deux réels diffèrent d'un nombre entier de tours, ils sont donc associés au même point. <b>(1 pt)</b></li>
<li><b>Faux.</b> Contre-exemple : pour \(x=0\), \(\sin\left(0+\frac{\pi}{2}\right)=1\) alors que \(\sin0=0\). (En réalité, \(\sin\left(x+\frac{\pi}{2}\right)=\cos x\).) <b>(1 pt)</b></li>
<li><b>Vrai.</b> \(\frac{19\pi}{4}=\frac{16\pi}{4}+\frac{3\pi}{4}=4\pi+\frac{3\pi}{4}\), donc \(\cos\frac{19\pi}{4}=\cos\frac{3\pi}{4}=\cos\left(\pi-\frac{\pi}{4}\right)=-\cos\frac{\pi}{4}=-\frac{\sqrt2}{2}\). <b>(1 pt)</b></li>
<li><b>Faux.</b> Pour tout réel \(x\), \(\cos^2x+\sin^2x=1\). Or \(\left(\frac12\right)^2+\left(\frac12\right)^2=\frac14+\frac14=\frac12\neq1\). Aucun réel ne peut donc avoir ce cosinus et ce sinus. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Trois points sur le cercle", points: 5,
          enonce: R`<ol><li>Déterminer la mesure principale de chacun des réels \(a=\frac{43\pi}{6}\), \(b=-\frac{25\pi}{3}\) et \(c=\frac{2025\pi}{4}\).</li>
<li>On note \(A\), \(B\), \(C\) les points du cercle trigonométrique associés respectivement à \(a\), \(b\), \(c\). Donner les coordonnées exactes de ces trois points.</li>
<li>Placer \(A\), \(B\) et \(C\) sur un cercle trigonométrique (rayon conseillé : 4 cm).</li>
<li>Déterminer le réel de l'intervalle \([10\pi\,;12\pi[\) associé au point \(C\).</li></ol>`,
          correction: R`<ol><li>\(2\pi=\frac{12\pi}{6}\) et \(43=48-5\) : \(\frac{43\pi}{6}=\frac{48\pi}{6}-\frac{5\pi}{6}=4\times2\pi-\frac{5\pi}{6}\). Mesure principale de \(a\) : \(-\frac{5\pi}{6}\).<br>
\(2\pi=\frac{6\pi}{3}\) et \(-25=-24-1\) : \(-\frac{25\pi}{3}=-4\times2\pi-\frac{\pi}{3}\). Mesure principale de \(b\) : \(-\frac{\pi}{3}\).<br>
\(2\pi=\frac{8\pi}{4}\) et \(2025=2024+1=8\times253+1\) : \(\frac{2025\pi}{4}=253\times2\pi+\frac{\pi}{4}\). Mesure principale de \(c\) : \(\frac{\pi}{4}\).<br>
Les trois valeurs sont bien dans \(]-\pi\,;\pi]\). <b>(1,5 pt : 0,5 par réel)</b></li>
<li>\(\cos\left(-\frac{5\pi}{6}\right)=\cos\frac{5\pi}{6}=\cos\left(\pi-\frac{\pi}{6}\right)=-\frac{\sqrt3}{2}\) et \(\sin\left(-\frac{5\pi}{6}\right)=-\sin\left(\pi-\frac{\pi}{6}\right)=-\sin\frac{\pi}{6}=-\frac12\). Donc \(A\left(-\frac{\sqrt3}{2}\,;-\frac12\right)\).<br>
\(B\left(\cos\left(-\frac{\pi}{3}\right)\,;\sin\left(-\frac{\pi}{3}\right)\right)=\left(\frac12\,;-\frac{\sqrt3}{2}\right)\) par parité de cosinus et imparité de sinus.<br>
\(C\left(\frac{\sqrt2}{2}\,;\frac{\sqrt2}{2}\right)\). <b>(1,5 pt : 0,5 par point)</b></li>
<li>\(A\) est dans le quart en bas à gauche, à \(30^\circ\) sous le point \(I'(-1\,;0)\) ; \(B\) est dans le quart en bas à droite, à \(60^\circ\) sous \(I\) ; \(C\) est dans le quart en haut à droite, sur la première bissectrice (\(45^\circ\)). <b>(1 pt)</b></li>
<li>Les réels associés à \(C\) sont les \(\frac{\pi}{4}+2k\pi\), \(k\in\mathbb{Z}\). Pour \(k=5\) : \(\frac{\pi}{4}+10\pi=\frac{41\pi}{4}\), qui vérifie bien \(10\pi\leqslant\frac{41\pi}{4}\lt12\pi\) (car \(\frac{40}{4}\leqslant\frac{41}{4}\lt\frac{48}{4}\)). Le réel cherché est \(\frac{41\pi}{4}\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Du cosinus au sinus", points: 5,
          enonce: R`Soit \(x\) un réel de l'intervalle \(\left[\frac{\pi}{2}\,;\pi\right]\) tel que \(\cos x=-\frac{\sqrt5}{3}\).
<ol><li>Calculer la valeur exacte de \(\sin x\).</li>
<li>En déduire les valeurs exactes de \(\cos(\pi-x)\), \(\sin(x-\pi)\), \(\cos\left(\frac{\pi}{2}+x\right)\) et \(\sin\left(\frac{\pi}{2}-x\right)\).</li>
<li>Calculer la valeur exacte de \(A=(\cos x+\sin x)^2\).</li></ol>`,
          correction: R`<ol><li>D'après \(\cos^2x+\sin^2x=1\) : \(\sin^2x=1-\frac{5}{9}=\frac49\), donc \(\sin x=\frac23\) ou \(\sin x=-\frac23\).<br>
Comme \(x\in\left[\frac{\pi}{2}\,;\pi\right]\), le point associé à \(x\) est sur le quart de cercle en haut à gauche : son ordonnée est positive. Donc \(\sin x=\frac23\). <b>(2 pts : 1 pour le calcul de \(\sin^2x\), 1 pour le choix du signe justifié)</b></li>
<li>\(\cos(\pi-x)=-\cos x=\frac{\sqrt5}{3}\).<br>
\(\sin(x-\pi)=\sin(x-\pi+2\pi)=\sin(x+\pi)=-\sin x=-\frac23\).<br>
\(\cos\left(\frac{\pi}{2}+x\right)=-\sin x=-\frac23\).<br>
\(\sin\left(\frac{\pi}{2}-x\right)=\cos x=-\frac{\sqrt5}{3}\). <b>(2 pts : 0,5 par valeur)</b></li>
<li>\(A=\cos^2x+2\cos x\sin x+\sin^2x=1+2\cos x\sin x=1+2\times\left(-\frac{\sqrt5}{3}\right)\times\frac23=1-\frac{4\sqrt5}{9}\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Équations et inéquation", points: 5,
          enonce: R`<ol><li>Résoudre \(2\sin x+\sqrt3=0\) sur \(]-\pi\,;\pi]\).</li>
<li>Résoudre \(\cos x=\cos\frac{\pi}{5}\) sur \([0\,;2\pi[\).</li>
<li>Résoudre \(\sin x\leqslant\frac{\sqrt2}{2}\) sur \([0\,;2\pi[\), en s'aidant d'un cercle trigonométrique.</li></ol>`,
          correction: R`<ol><li>\(2\sin x+\sqrt3=0\iff\sin x=-\frac{\sqrt3}{2}\). Or \(\sin\left(-\frac{\pi}{3}\right)=-\frac{\sqrt3}{2}\), donc \(x=-\frac{\pi}{3}+2k\pi\) ou \(x=\pi-\left(-\frac{\pi}{3}\right)+2k\pi=\frac{4\pi}{3}+2k\pi\).<br>
Dans \(]-\pi\,;\pi]\) : \(-\frac{\pi}{3}\), et \(\frac{4\pi}{3}-2\pi=-\frac{2\pi}{3}\). \(S=\left\{-\frac{2\pi}{3}\,;-\frac{\pi}{3}\right\}\). <b>(1,5 pt)</b></li>
<li>\(\cos x=\cos\frac{\pi}{5}\iff x=\frac{\pi}{5}+2k\pi\) ou \(x=-\frac{\pi}{5}+2k\pi\).<br>
Dans \([0\,;2\pi[\) : \(\frac{\pi}{5}\) et \(-\frac{\pi}{5}+2\pi=\frac{9\pi}{5}\). \(S=\left\{\frac{\pi}{5}\,;\frac{9\pi}{5}\right\}\). <b>(1,5 pt)</b></li>
<li>Sur \([0\,;2\pi[\), \(\sin x=\frac{\sqrt2}{2}\) pour \(x=\frac{\pi}{4}\) et \(x=\pi-\frac{\pi}{4}=\frac{3\pi}{4}\). Les points d'ordonnée strictement supérieure à \(\frac{\sqrt2}{2}\) sont ceux du petit arc ouvert entre ces deux points, qui passe par \(J\) : on les exclut, tous les autres points conviennent.<br>
En parcourant \([0\,;2\pi[\) à partir de \(I\) : \(S=\left[0\,;\frac{\pi}{4}\right]\cup\left[\frac{3\pi}{4}\,;2\pi\right[\). <b>(2 pts : 1 pour les valeurs frontières, 1 pour l'ensemble)</b></li></ol>` }
      ] },

    { titre: "DS n°4 — Courbes, parité et périodicité", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Automatismes", points: 4,
          enonce: R`<ol><li>Convertir \(\frac{7\pi}{10}\) rad en degrés, puis \(40^\circ\) en radians.</li>
<li>Donner, en justifiant, les valeurs exactes de :
\[\sin\left(-\frac{3\pi}{4}\right)\qquad\cos\frac{4\pi}{3}\qquad\sin\frac{17\pi}{6}\qquad\cos\left(-\frac{11\pi}{3}\right)\]</li></ol>`,
          correction: R`<ol><li>\(\frac{7\pi}{10}\) rad \(=\frac{7\times180}{10}\)° \(=126^\circ\) ; \(40^\circ=\frac{40\pi}{180}=\frac{2\pi}{9}\) rad. <b>(1 pt : 0,5 + 0,5)</b></li>
<li>\(\sin\left(-\frac{3\pi}{4}\right)=-\sin\frac{3\pi}{4}=-\sin\left(\pi-\frac{\pi}{4}\right)=-\sin\frac{\pi}{4}=-\frac{\sqrt2}{2}\).<br>
\(\cos\frac{4\pi}{3}=\cos\left(\pi+\frac{\pi}{3}\right)=-\cos\frac{\pi}{3}=-\frac12\).<br>
\(\sin\frac{17\pi}{6}=\sin\left(2\pi+\frac{5\pi}{6}\right)=\sin\frac{5\pi}{6}=\sin\left(\pi-\frac{\pi}{6}\right)=\frac12\).<br>
\(\cos\left(-\frac{11\pi}{3}\right)=\cos\left(-\frac{11\pi}{3}+4\pi\right)=\cos\frac{\pi}{3}=\frac12\). <b>(3 pts : 0,75 par valeur)</b></li></ol>` },
        { titre: "Exercice 2 — Une sinusoïde décalée", points: 6,
          enonce: R`On considère la fonction \(f\) définie sur \([-\pi\,;\pi]\) par \(f(x)=2\sin x-1\).
<ol><li>En raisonnant sur le cercle trigonométrique, dresser le tableau de variations de la fonction sinus sur \([-\pi\,;\pi]\).</li>
<li>En déduire le tableau de variations de \(f\) sur \([-\pi\,;\pi]\), ainsi que son maximum et son minimum.</li>
<li>Résoudre l'équation \(f(x)=0\) sur \([-\pi\,;\pi]\).</li>
<li>Dresser le tableau de signes de \(f\) sur \([-\pi\,;\pi]\).</li></ol>`,
          correction: R`<ol><li>Quand \(x\) va de \(-\pi\) à \(-\frac{\pi}{2}\), le point \(M\) va de \(I'(-1\,;0)\) à \(J'(0\,;-1)\) : son ordonnée descend de \(0\) à \(-1\). De \(-\frac{\pi}{2}\) à \(\frac{\pi}{2}\), \(M\) remonte de \(J'\) à \(J\) en passant par \(I\) : l'ordonnée monte de \(-1\) à \(1\). De \(\frac{\pi}{2}\) à \(\pi\), \(M\) va de \(J\) à \(I'\) : l'ordonnée descend de \(1\) à \(0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\pi\)</td><td></td><td>\(-\frac{\pi}{2}\)</td><td></td><td>\(\frac{\pi}{2}\)</td><td></td><td>\(\pi\)</td></tr>
<tr><td>\(\sin x\)</td><td>\(0\)</td><td>\(\searrow\)</td><td>\(-1\)</td><td>\(\nearrow\)</td><td>\(1\)</td><td>\(\searrow\)</td><td>\(0\)</td></tr>
</table><b>(1,5 pt)</b></li>
<li>Multiplier par \(2\gt0\) puis ajouter \(-1\) ne change pas le sens de variation : \(f\) a les mêmes variations que sinus.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\pi\)</td><td></td><td>\(-\frac{\pi}{2}\)</td><td></td><td>\(\frac{\pi}{2}\)</td><td></td><td>\(\pi\)</td></tr>
<tr><td>\(f(x)\)</td><td>\(-1\)</td><td>\(\searrow\)</td><td>\(-3\)</td><td>\(\nearrow\)</td><td>\(1\)</td><td>\(\searrow\)</td><td>\(-1\)</td></tr>
</table>
Maximum : \(f\left(\frac{\pi}{2}\right)=2-1=1\). Minimum : \(f\left(-\frac{\pi}{2}\right)=-2-1=-3\). <b>(1,5 pt)</b></li>
<li>\(f(x)=0\iff\sin x=\frac12\). Or \(\sin\frac{\pi}{6}=\frac12\), donc \(x=\frac{\pi}{6}+2k\pi\) ou \(x=\pi-\frac{\pi}{6}+2k\pi=\frac{5\pi}{6}+2k\pi\). Dans \([-\pi\,;\pi]\) : \(S=\left\{\frac{\pi}{6}\,;\frac{5\pi}{6}\right\}\). <b>(1,5 pt)</b></li>
<li>\(f(x)\gt0\iff\sin x\gt\frac12\) : ce sont les points du petit arc entre \(\frac{\pi}{6}\) et \(\frac{5\pi}{6}\) (qui passe par \(J\)), extrémités exclues.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\pi\)</td><td></td><td>\(\frac{\pi}{6}\)</td><td></td><td>\(\frac{5\pi}{6}\)</td><td></td><td>\(\pi\)</td></tr>
<tr><td>\(f(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table><b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Parité et période", points: 6,
          enonce: R`On considère les fonctions définies sur \(\mathbb{R}\) par
\[f(x)=\sin(3x)\qquad g(x)=\sin^2x\qquad k(x)=\frac{1+\cos x}{2-\sin x}.\]
<ol><li>Montrer que \(f\) est impaire et périodique de période \(\frac{2\pi}{3}\).</li>
<li>Montrer que \(g\) est paire et périodique de période \(\pi\).</li>
<li>Justifier que \(k\) est bien définie sur \(\mathbb{R}\), puis calculer \(k\left(\frac{\pi}{2}\right)\) et \(k\left(-\frac{\pi}{2}\right)\). La fonction \(k\) est-elle paire ? impaire ?</li>
<li>Expliquer pourquoi il suffit de connaître la courbe de \(g\) sur \(\left[0\,;\frac{\pi}{2}\right]\) pour la tracer sur \(\mathbb{R}\).</li></ol>`,
          correction: R`<ol><li>\(\mathbb{R}\) est symétrique par rapport à \(0\) et, pour tout réel \(x\), \(f(-x)=\sin(-3x)=-\sin(3x)=-f(x)\) car sinus est impaire : \(f\) est impaire.<br>
\(f\left(x+\frac{2\pi}{3}\right)=\sin\left(3x+3\times\frac{2\pi}{3}\right)=\sin(3x+2\pi)=\sin(3x)=f(x)\) : \(f\) est périodique de période \(\frac{2\pi}{3}\). <b>(1,5 pt)</b></li>
<li>\(g(-x)=(\sin(-x))^2=(-\sin x)^2=\sin^2x=g(x)\) : \(g\) est paire.<br>
\(g(x+\pi)=(\sin(x+\pi))^2=(-\sin x)^2=\sin^2x=g(x)\) : \(g\) est périodique de période \(\pi\). <b>(1,5 pt)</b></li>
<li>Pour tout réel \(x\), \(\sin x\leqslant1\) donc \(2-\sin x\geqslant1\gt0\) : le dénominateur ne s'annule jamais.<br>
\(k\left(\frac{\pi}{2}\right)=\frac{1+0}{2-1}=1\) et \(k\left(-\frac{\pi}{2}\right)=\frac{1+0}{2-(-1)}=\frac13\).<br>
Comme \(k\left(-\frac{\pi}{2}\right)\neq k\left(\frac{\pi}{2}\right)\), \(k\) n'est pas paire ; comme \(k\left(-\frac{\pi}{2}\right)\neq-k\left(\frac{\pi}{2}\right)=-1\), \(k\) n'est pas impaire. <b>(1,5 pt)</b></li>
<li>\(g\) étant paire, sa courbe sur \(\left[-\frac{\pi}{2}\,;0\right]\) s'obtient par symétrie par rapport à l'axe des ordonnées de celle sur \(\left[0\,;\frac{\pi}{2}\right]\). On connaît alors la courbe sur \(\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]\), intervalle de longueur \(\pi\), c'est-à-dire une période. Par \(\pi\)-périodicité, on obtient toute la courbe par des translations horizontales de \(k\pi\), \(k\in\mathbb{Z}\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Démonstration et application", points: 4,
          enonce: R`<ol><li>Démontrer, à l'aide d'une symétrie du cercle trigonométrique que l'on précisera, que pour tout réel \(x\) : \(\cos(\pi-x)=-\cos x\) et \(\sin(\pi-x)=\sin x\).</li>
<li>Simplifier, pour tout réel \(x\), \(A(x)=\sin(\pi-x)-\cos\left(\frac{\pi}{2}-x\right)+\cos(\pi+x)+\cos(-x)\).</li>
<li>Sans calculatrice, calculer \(B=\cos\frac{\pi}{7}+\cos\frac{2\pi}{7}+\cos\frac{5\pi}{7}+\cos\frac{6\pi}{7}\).</li></ol>`,
          correction: R`<ol><li>Soit \(M(\cos x\,;\sin x)\) le point associé à \(x\). Le point associé à \(\pi\) est \(I'(-1\,;0)\). Pour atteindre le point associé à \(\pi-x\), on part de \(I'\) et on parcourt la longueur \(x\) dans le sens indirect : c'est exactement le trajet symétrique, par rapport à l'axe des ordonnées, de celui qui mène de \(I\) à \(M\). Le point associé à \(\pi-x\) est donc le symétrique \(M'\) de \(M\) par rapport à l'axe des ordonnées. Cette symétrie change l'abscisse en son opposée et conserve l'ordonnée : \(M'(-\cos x\,;\sin x)\). D'où \(\cos(\pi-x)=-\cos x\) et \(\sin(\pi-x)=\sin x\). <b>(2 pts)</b></li>
<li>\(\sin(\pi-x)=\sin x\), \(\cos\left(\frac{\pi}{2}-x\right)=\sin x\), \(\cos(\pi+x)=-\cos x\), \(\cos(-x)=\cos x\).<br>
Donc \(A(x)=\sin x-\sin x-\cos x+\cos x=0\). <b>(1 pt)</b></li>
<li>\(\frac{6\pi}{7}=\pi-\frac{\pi}{7}\) donc \(\cos\frac{6\pi}{7}=-\cos\frac{\pi}{7}\) ; \(\frac{5\pi}{7}=\pi-\frac{2\pi}{7}\) donc \(\cos\frac{5\pi}{7}=-\cos\frac{2\pi}{7}\).<br>
Les termes s'annulent deux à deux : \(B=0\). <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°5 — Durée du jour et ressort oscillant", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — La durée du jour", points: 6,
          enonce: R`Dans une ville de France, on modélise la durée du jour (temps entre le lever et le coucher du soleil, en heures) par
\[D(t)=12+4\sin\left(\frac{\pi t}{6}\right),\]
où \(t\in[0\,;12]\) est le temps écoulé, en mois, depuis l'équinoxe de printemps (le 21 mars).
<ol><li>Calculer \(D(0)\), \(D(3)\) et \(D(9)\). À quelles dates de l'année correspondent \(t=3\) et \(t=9\) ? Interpréter.</li>
<li>Donner la valeur exacte de \(D(1)\) et de \(D(2)\), puis convertir \(D(2)\) en heures et minutes (à la minute près).</li>
<li>Vérifier que pour tout réel \(t\), \(D(t+12)=D(t)\). Interpréter.</li>
<li>Pendant combien de mois la durée du jour est-elle d'au moins \(14\) heures ? Préciser la période correspondante de l'année.</li></ol>`,
          correction: R`<ol><li>\(D(0)=12+4\sin0=12\) h ; \(D(3)=12+4\sin\frac{\pi}{2}=16\) h ; \(D(9)=12+4\sin\frac{3\pi}{2}=12-4=8\) h.<br>
\(t=3\) correspond au 21 juin et \(t=9\) au 21 décembre. Comme \(-1\leqslant\sin\leqslant1\), on a toujours \(8\leqslant D(t)\leqslant16\) : le 21 juin est le jour le plus long (16 h, solstice d'été), le 21 décembre le plus court (8 h, solstice d'hiver) ; à l'équinoxe, jour et nuit durent 12 h. <b>(1,5 pt)</b></li>
<li>\(D(1)=12+4\sin\frac{\pi}{6}=12+4\times\frac12=14\) h.<br>
\(D(2)=12+4\sin\frac{\pi}{3}=12+4\times\frac{\sqrt3}{2}=12+2\sqrt3\approx15{,}464\) h. Or \(0{,}464\times60\approx27{,}8\) : \(D(2)\approx15\) h \(28\) min. <b>(1,5 pt)</b></li>
<li>\(D(t+12)=12+4\sin\left(\frac{\pi t}{6}+\frac{12\pi}{6}\right)=12+4\sin\left(\frac{\pi t}{6}+2\pi\right)=12+4\sin\left(\frac{\pi t}{6}\right)=D(t)\).<br>
La fonction \(D\) est périodique de période \(12\) : la durée du jour se répète d'une année sur l'autre. <b>(1 pt)</b></li>
<li>\(D(t)\geqslant14\iff4\sin\left(\frac{\pi t}{6}\right)\geqslant2\iff\sin\left(\frac{\pi t}{6}\right)\geqslant\frac12\).<br>
Posons \(X=\frac{\pi t}{6}\) : quand \(t\) parcourt \([0\,;12]\), \(X\) parcourt \([0\,;2\pi]\). Sur le cercle, \(\sin X\geqslant\frac12\) pour \(X\in\left[\frac{\pi}{6}\,;\frac{5\pi}{6}\right]\) (arc supérieur passant par \(J\)).<br>
Donc \(t=\frac{6X}{\pi}\in[1\,;5]\). La durée du jour atteint au moins \(14\) h pendant \(5-1=4\) mois, du 21 avril au 21 août environ. <b>(2 pts : 1 pour la mise en équation, 0,5 pour la résolution en \(X\), 0,5 pour la conclusion)</b></li></ol>` },
        { titre: "Exercice 2 — Le ressort et Python", points: 5,
          enonce: R`Une masse accrochée à un ressort oscille verticalement. Sa position (en cm) par rapport à la position d'équilibre est donnée, au bout de \(t\) secondes, par \(x(t)=5\cos(2t)\). On considère le programme Python suivant.
<pre><code>from math import cos

t = 0
while 5*cos(2*t) &gt; -2.5:
    t = t + 0.01
print(round(t, 2))</code></pre>
<ol><li>Expliquer ce que permet d'obtenir ce programme.</li>
<li>Résoudre de façon exacte l'équation \(x(t)=-2{,}5\) sur \(\left[0\,;\frac{\pi}{2}\right]\).</li>
<li>En déduire la valeur affichée par le programme.</li>
<li>Montrer que \(x\) est périodique de période \(\pi\), puis déterminer la durée totale, sur l'intervalle \([0\,;\pi]\), pendant laquelle \(x(t)\leqslant-2{,}5\).</li></ol>`,
          correction: R`<ol><li>Le programme augmente \(t\) par pas de \(0{,}01\) s tant que la position est strictement supérieure à \(-2{,}5\) cm. Il s'arrête dès que \(x(t)\leqslant-2{,}5\) : il affiche une valeur approchée (par excès, à \(0{,}01\) près) du premier instant où la masse descend à \(2{,}5\) cm sous l'équilibre. <b>(1 pt)</b></li>
<li>\(x(t)=-2{,}5\iff\cos(2t)=-\frac12\). Posons \(X=2t\in[0\,;\pi]\). Sur \([0\,;\pi]\), le cosinus est strictement décroissant et \(\cos\frac{2\pi}{3}=-\frac12\) : la seule solution est \(X=\frac{2\pi}{3}\). Donc \(t=\frac{\pi}{3}\). <b>(1,5 pt)</b></li>
<li>Pour \(t\in\left[0\,;\frac{\pi}{3}\right[\), \(2t\in\left[0\,;\frac{2\pi}{3}\right[\) et \(\cos(2t)\gt-\frac12\) : la boucle continue. Le programme s'arrête au premier multiple de \(0{,}01\) supérieur ou égal à \(\frac{\pi}{3}\approx1{,}0472\), soit \(1{,}05\). Il affiche <code>1.05</code>. <b>(1 pt)</b></li>
<li>\(x(t+\pi)=5\cos(2t+2\pi)=5\cos(2t)=x(t)\) : \(x\) est \(\pi\)-périodique.<br>
Sur \([0\,;\pi]\), \(X=2t\in[0\,;2\pi]\) et \(\cos X\leqslant-\frac12\iff X\in\left[\frac{2\pi}{3}\,;\frac{4\pi}{3}\right]\) (arc de gauche). Donc \(t\in\left[\frac{\pi}{3}\,;\frac{2\pi}{3}\right]\) : durée \(\frac{\pi}{3}\approx1{,}05\) s par période. <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Un angle obtus", points: 5,
          enonce: R`Soit \(\alpha\) un réel de \([0\,;\pi]\) tel que \(\cos\alpha=-0{,}6\).
<ol><li>Calculer la valeur exacte de \(\sin\alpha\).</li>
<li>En déduire \(\cos(\pi+\alpha)\), \(\sin\left(\frac{\pi}{2}+\alpha\right)\), \(\sin(\alpha-\pi)\) et \(\cos\left(\frac{\pi}{2}-\alpha\right)\).</li>
<li>À l'aide de la calculatrice (touche \(\cos^{-1}\) ou Arccos, en mode radian), donner une valeur approchée de \(\alpha\) à \(0{,}01\) près, puis de sa mesure en degrés à \(0{,}1\) près. Ce résultat est-il cohérent avec la question 1 ?</li></ol>`,
          correction: R`<ol><li>\(\sin^2\alpha=1-\cos^2\alpha=1-0{,}36=0{,}64\), donc \(\sin\alpha=0{,}8\) ou \(\sin\alpha=-0{,}8\). Comme \(\alpha\in[0\,;\pi]\), le point associé est sur le demi-cercle supérieur : \(\sin\alpha\geqslant0\). Donc \(\sin\alpha=0{,}8\). <b>(1,5 pt)</b></li>
<li>\(\cos(\pi+\alpha)=-\cos\alpha=0{,}6\) ; \(\sin\left(\frac{\pi}{2}+\alpha\right)=\cos\alpha=-0{,}6\) ;<br>
\(\sin(\alpha-\pi)=\sin(\alpha+\pi-2\pi)=\sin(\alpha+\pi)=-\sin\alpha=-0{,}8\) ; \(\cos\left(\frac{\pi}{2}-\alpha\right)=\sin\alpha=0{,}8\). <b>(2 pts : 0,5 par valeur)</b></li>
<li>La calculatrice donne \(\alpha\approx2{,}21\) rad, soit \(\alpha\times\frac{180}{\pi}\approx126{,}9^\circ\).<br>
C'est cohérent : \(\alpha\) est compris entre \(\frac{\pi}{2}\approx1{,}57\) et \(\pi\approx3{,}14\), son point associé est en haut à gauche (cosinus négatif, sinus positif), et on vérifie que \(\sin(2{,}21)\approx0{,}80\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Deux équations", points: 4,
          enonce: R`Résoudre sur \([0\,;2\pi[\) :
<ol><li>\(4\cos^2x-3=0\) ;</li>
<li>\(\sin(2x)=0\).</li></ol>`,
          correction: R`<ol><li>\(4\cos^2x-3=0\iff\cos^2x=\frac34\iff\cos x=\frac{\sqrt3}{2}\) ou \(\cos x=-\frac{\sqrt3}{2}\).<br>
\(\cos x=\frac{\sqrt3}{2}=\cos\frac{\pi}{6}\) : \(x=\frac{\pi}{6}\) ou \(x=-\frac{\pi}{6}+2\pi=\frac{11\pi}{6}\).<br>
\(\cos x=-\frac{\sqrt3}{2}=\cos\frac{5\pi}{6}\) : \(x=\frac{5\pi}{6}\) ou \(x=-\frac{5\pi}{6}+2\pi=\frac{7\pi}{6}\).<br>
\(S=\left\{\frac{\pi}{6}\,;\frac{5\pi}{6}\,;\frac{7\pi}{6}\,;\frac{11\pi}{6}\right\}\). <b>(2 pts)</b></li>
<li>Posons \(X=2x\) : si \(x\in[0\,;2\pi[\), alors \(X\in[0\,;4\pi[\) (deux tours). \(\sin X=0\) correspond aux points \(I\) et \(I'\), c'est-à-dire \(X=k\pi\), \(k\in\mathbb{Z}\). Dans \([0\,;4\pi[\) : \(X\in\{0\,;\pi\,;2\pi\,;3\pi\}\).<br>
Donc \(x=\frac{X}{2}\) : \(S=\left\{0\,;\frac{\pi}{2}\,;\pi\,;\frac{3\pi}{2}\right\}\). <b>(2 pts)</b></li></ol>` }
      ] },

    { titre: "DS n°6 — Trigonométrie et géométrie du cercle", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — L'octogone régulier", points: 5,
          enonce: R`Dans un repère orthonormé, on note \(A_0,A_1,\ldots,A_7\) les points du cercle trigonométrique associés aux réels \(0,\frac{\pi}{4},\frac{2\pi}{4},\ldots,\frac{7\pi}{4}\). Ils forment un octogone régulier.
<ol><li>Donner les coordonnées exactes de \(A_1\), \(A_3\) et \(A_5\).</li>
<li>Quel sommet de l'octogone est associé au réel \(\frac{2026\pi}{4}\) ? Justifier.</li>
<li>Montrer que \(A_0A_1=\sqrt{2-\sqrt2}\).</li>
<li>L'octogone est formé de 8 triangles isocèles \(OA_kA_{k+1}\) superposables. Calculer l'aire du triangle \(OA_0A_1\), puis celle de l'octogone.</li></ol>`,
          correction: R`<ol><li>\(A_1\left(\cos\frac{\pi}{4}\,;\sin\frac{\pi}{4}\right)=\left(\frac{\sqrt2}{2}\,;\frac{\sqrt2}{2}\right)\).<br>
\(\frac{3\pi}{4}=\pi-\frac{\pi}{4}\) : \(A_3\left(-\frac{\sqrt2}{2}\,;\frac{\sqrt2}{2}\right)\).<br>
\(\frac{5\pi}{4}=\pi+\frac{\pi}{4}\) : \(A_5\left(-\frac{\sqrt2}{2}\,;-\frac{\sqrt2}{2}\right)\). <b>(1,5 pt : 0,5 par point)</b></li>
<li>\(\frac{2026\pi}{4}=\frac{1013\pi}{2}\). Or \(2\pi=\frac{4\pi}{2}\) et \(1013=4\times253+1\), donc \(\frac{1013\pi}{2}=253\times2\pi+\frac{\pi}{2}\). Ce réel est associé au même point que \(\frac{\pi}{2}=\frac{2\pi}{4}\) : c'est le sommet \(A_2\) (le point \(J\)). <b>(1 pt)</b></li>
<li>\(A_0(1\,;0)\) et \(A_1\left(\frac{\sqrt2}{2}\,;\frac{\sqrt2}{2}\right)\) :
\[A_0A_1^2=\left(\frac{\sqrt2}{2}-1\right)^2+\left(\frac{\sqrt2}{2}\right)^2=\frac12-\sqrt2+1+\frac12=2-\sqrt2.\]
Donc \(A_0A_1=\sqrt{2-\sqrt2}\) (une longueur est positive). <b>(1,5 pt)</b></li>
<li>Dans le triangle \(OA_0A_1\), prenons la base \([OA_0]\) de longueur \(1\) ; la hauteur issue de \(A_1\) est son ordonnée \(\frac{\sqrt2}{2}\). Aire : \(\frac12\times1\times\frac{\sqrt2}{2}=\frac{\sqrt2}{4}\).<br>
Aire de l'octogone : \(8\times\frac{\sqrt2}{4}=2\sqrt2\) (environ \(2{,}83\), un peu moins que l'aire \(\pi\) du disque). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Un triangle inscrit dans un demi-cercle", points: 5,
          enonce: R`Soit \(x\in]0\,;\pi[\) et \(M(\cos x\,;\sin x)\) le point du cercle trigonométrique associé à \(x\). On note \(I(1\,;0)\) et \(I'(-1\,;0)\).
<ol><li>Montrer que \(IM^2=2-2\cos x\).</li>
<li>Montrer de même que \(I'M^2=2+2\cos x\).</li>
<li>En déduire que le triangle \(IMI'\) est rectangle en \(M\).</li>
<li>Pour quelle valeur de \(x\) a-t-on \(IM=1\) ? Quelle est alors la nature du triangle \(OIM\) ?</li>
<li>Exprimer l'aire du triangle \(IMI'\) en fonction de \(x\). Pour quelle valeur de \(x\) est-elle maximale ?</li></ol>`,
          correction: R`<ol><li>\(IM^2=(\cos x-1)^2+\sin^2x=\cos^2x-2\cos x+1+\sin^2x=1-2\cos x+1=2-2\cos x\), en utilisant \(\cos^2x+\sin^2x=1\). <b>(1 pt)</b></li>
<li>\(I'M^2=(\cos x+1)^2+\sin^2x=\cos^2x+2\cos x+1+\sin^2x=2+2\cos x\). <b>(1 pt)</b></li>
<li>\(IM^2+I'M^2=2-2\cos x+2+2\cos x=4\) et \(II'^2=2^2=4\). Donc \(IM^2+I'M^2=II'^2\) : d'après la réciproque du théorème de Pythagore, \(IMI'\) est rectangle en \(M\). <b>(1 pt)</b></li>
<li>\(IM=1\iff IM^2=1\iff2-2\cos x=1\iff\cos x=\frac12\). Sur \(]0\,;\pi[\), cela donne \(x=\frac{\pi}{3}\).<br>
Alors \(OI=OM=1\) (rayons) et \(IM=1\) : le triangle \(OIM\) est <b>équilatéral</b> (cohérent avec un angle \(\widehat{IOM}\) de \(\frac{\pi}{3}\), soit \(60^\circ\)). <b>(1 pt)</b></li>
<li>Avec la base \([II']\) de longueur \(2\), la hauteur issue de \(M\) est son ordonnée \(\sin x\gt0\). Aire : \(\frac12\times2\times\sin x=\sin x\).<br>
Elle est maximale quand \(\sin x=1\), c'est-à-dire \(x=\frac{\pi}{2}\) (point \(J\)) : l'aire vaut alors \(1\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Angles associés", points: 5,
          enonce: R`<ol><li>Simplifier, pour tout réel \(x\), \(A(x)=\cos(x+\pi)+\sin\left(\frac{\pi}{2}+x\right)+\cos(3\pi-x)\).</li>
<li>Simplifier, pour tout réel \(x\), \(B(x)=\sin(-x)-\sin(x+5\pi)+\cos\left(\frac{\pi}{2}-x\right)\).</li>
<li>Sans calculatrice, calculer
\[S=\sin^2\frac{\pi}{8}+\sin^2\frac{3\pi}{8}+\sin^2\frac{5\pi}{8}+\sin^2\frac{7\pi}{8}.\]</li></ol>`,
          correction: R`<ol><li>\(\cos(x+\pi)=-\cos x\) ; \(\sin\left(\frac{\pi}{2}+x\right)=\cos x\) ; \(\cos(3\pi-x)=\cos(2\pi+\pi-x)=\cos(\pi-x)=-\cos x\).<br>
Donc \(A(x)=-\cos x+\cos x-\cos x=-\cos x\). <b>(1,5 pt)</b></li>
<li>\(\sin(-x)=-\sin x\) ; \(\sin(x+5\pi)=\sin(x+\pi+4\pi)=\sin(x+\pi)=-\sin x\) ; \(\cos\left(\frac{\pi}{2}-x\right)=\sin x\).<br>
Donc \(B(x)=-\sin x-(-\sin x)+\sin x=\sin x\). <b>(1,5 pt)</b></li>
<li>\(\frac{7\pi}{8}=\pi-\frac{\pi}{8}\) donc \(\sin\frac{7\pi}{8}=\sin\frac{\pi}{8}\) ; \(\frac{5\pi}{8}=\pi-\frac{3\pi}{8}\) donc \(\sin\frac{5\pi}{8}=\sin\frac{3\pi}{8}\).<br>
De plus \(\frac{3\pi}{8}=\frac{\pi}{2}-\frac{\pi}{8}\), donc \(\sin\frac{3\pi}{8}=\cos\frac{\pi}{8}\).<br>
Ainsi \(S=2\sin^2\frac{\pi}{8}+2\cos^2\frac{\pi}{8}=2\left(\sin^2\frac{\pi}{8}+\cos^2\frac{\pi}{8}\right)=2\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 4 — Équations et inéquations", points: 5,
          enonce: R`<ol><li>Résoudre \(\cos x=-\frac{\sqrt2}{2}\) sur \([0\,;2\pi[\).</li>
<li>Résoudre \(\sin x=\sin\frac{2\pi}{7}\) sur \(]-\pi\,;\pi]\).</li>
<li>Résoudre \(2\sin^2x+\sin x-1=0\) sur \(]-\pi\,;\pi]\).</li>
<li>Déterminer l'ensemble des réels \(x\) de \(]-\pi\,;\pi]\) tels que \(\cos x\gt0\) et \(\sin x\lt\frac12\). On pourra s'aider d'un cercle.</li></ol>`,
          correction: R`<ol><li>\(\cos\frac{3\pi}{4}=-\frac{\sqrt2}{2}\), donc \(x=\frac{3\pi}{4}+2k\pi\) ou \(x=-\frac{3\pi}{4}+2k\pi\). Dans \([0\,;2\pi[\) : \(\frac{3\pi}{4}\) et \(-\frac{3\pi}{4}+2\pi=\frac{5\pi}{4}\). \(S=\left\{\frac{3\pi}{4}\,;\frac{5\pi}{4}\right\}\). <b>(1 pt)</b></li>
<li>\(\sin x=\sin\frac{2\pi}{7}\iff x=\frac{2\pi}{7}+2k\pi\) ou \(x=\pi-\frac{2\pi}{7}+2k\pi=\frac{5\pi}{7}+2k\pi\). Dans \(]-\pi\,;\pi]\) : \(S=\left\{\frac{2\pi}{7}\,;\frac{5\pi}{7}\right\}\). <b>(1 pt)</b></li>
<li>On pose \(X=\sin x\) : \(2X^2+X-1=0\). \(\Delta=1+8=9\), \(X_1=\frac{-1-3}{4}=-1\), \(X_2=\frac{-1+3}{4}=\frac12\).<br>
\(\sin x=-1\) : \(x=-\frac{\pi}{2}\). \(\sin x=\frac12\) : \(x=\frac{\pi}{6}\) ou \(x=\frac{5\pi}{6}\).<br>
\(S=\left\{-\frac{\pi}{2}\,;\frac{\pi}{6}\,;\frac{5\pi}{6}\right\}\). <b>(1,5 pt)</b></li>
<li>Sur \(]-\pi\,;\pi]\), \(\cos x\gt0\iff x\in\left]-\frac{\pi}{2}\,;\frac{\pi}{2}\right[\) (demi-cercle de droite, privé de \(J\) et \(J'\)).<br>
\(\sin x\lt\frac12\) : on exclut l'arc supérieur \(\left[\frac{\pi}{6}\,;\frac{5\pi}{6}\right]\), donc \(x\in\left]-\pi\,;\frac{\pi}{6}\right[\cup\left]\frac{5\pi}{6}\,;\pi\right]\).<br>
Intersection : \(S=\left]-\frac{\pi}{2}\,;\frac{\pi}{6}\right[\) (arc de droite, sous la droite d'équation \(y=\frac12\)). <b>(1,5 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°7 — Horloge, programme et note « la »", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — L'horloge", points: 5,
          enonce: R`On place le centre d'une horloge à l'origine d'un repère orthonormé (unité : 1 cm), le « 12 » étant dans la direction de l'axe des ordonnées et le « 3 » dans celle de l'axe des abscisses. La grande aiguille mesure \(10\) cm. À midi, elle pointe vers le « 12 ». On note \(t\) le temps écoulé depuis midi, en minutes.
<ol><li>De quel angle (en radians, puis en degrés) la grande aiguille tourne-t-elle en \(20\) minutes ? Dans quel sens tourne-t-elle par rapport au sens direct ?</li>
<li>On admet qu'au bout de \(t\) minutes, l'extrémité de la grande aiguille est le point du cercle de centre \(O\) et de rayon \(10\) associé (dans le sens direct, à partir de l'axe des abscisses) au réel \(\frac{\pi}{2}-\frac{\pi t}{30}\). Montrer que ses coordonnées sont \(\left(10\sin\frac{\pi t}{30}\,;10\cos\frac{\pi t}{30}\right)\).</li>
<li>Donner les coordonnées exactes de l'extrémité de la grande aiguille à 12 h 05, 12 h 25 et 12 h 40.</li>
<li>La petite aiguille fait un tour complet en \(12\) heures. À midi, les deux aiguilles sont superposées. À quelle heure (à la seconde près) seront-elles de nouveau superposées pour la première fois ?</li></ol>`,
          correction: R`<ol><li>La grande aiguille fait un tour (\(2\pi\) rad) en \(60\) minutes ; en \(20\) minutes, elle fait un tiers de tour : \(\frac{2\pi}{3}\) rad, soit \(120^\circ\). Elle tourne dans le sens des aiguilles d'une montre, c'est-à-dire dans le sens <b>indirect</b>. <b>(1 pt)</b></li>
<li>Le point associé au réel \(a\) sur le cercle de rayon \(10\) a pour coordonnées \((10\cos a\,;10\sin a)\). Avec \(a=\frac{\pi}{2}-\frac{\pi t}{30}\) et les formules \(\cos\left(\frac{\pi}{2}-u\right)=\sin u\), \(\sin\left(\frac{\pi}{2}-u\right)=\cos u\), on obtient \(\left(10\sin\frac{\pi t}{30}\,;10\cos\frac{\pi t}{30}\right)\). <b>(1 pt)</b></li>
<li>\(t=5\) : \(\frac{5\pi}{30}=\frac{\pi}{6}\), point \(\left(10\times\frac12\,;10\times\frac{\sqrt3}{2}\right)=(5\,;5\sqrt3)\).<br>
\(t=25\) : \(\frac{25\pi}{30}=\frac{5\pi}{6}\), \(\sin\frac{5\pi}{6}=\frac12\) et \(\cos\frac{5\pi}{6}=-\frac{\sqrt3}{2}\) : point \((5\,;-5\sqrt3)\).<br>
\(t=40\) : \(\frac{40\pi}{30}=\frac{4\pi}{3}=\pi+\frac{\pi}{3}\), \(\sin\frac{4\pi}{3}=-\frac{\sqrt3}{2}\) et \(\cos\frac{4\pi}{3}=-\frac12\) : point \((-5\sqrt3\,;-5)\).<br>
Cohérence : à 12 h 40, l'aiguille pointe vers le « 8 », en bas à gauche. <b>(1,5 pt : 0,5 par point)</b></li>
<li>En \(t\) minutes, la grande aiguille tourne de \(\frac{2\pi t}{60}=\frac{\pi t}{30}\) et la petite de \(\frac{2\pi t}{720}=\frac{\pi t}{360}\) (12 h = 720 min). Elles sont de nouveau superposées, pour la première fois, quand la grande aiguille a fait exactement un tour de plus que la petite :
\[\frac{\pi t}{30}-\frac{\pi t}{360}=2\pi\iff\frac{12t-t}{360}=2\iff t=\frac{720}{11}\approx65{,}4545.\]
Or \(0{,}4545\times60\approx27{,}3\) s. Les aiguilles se superposent à environ <b>13 h 05 min 27 s</b>. <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Dans quel quart de cercle ?", points: 5,
          enonce: R`On considère la fonction Python suivante.
<pre><code>from math import pi

def quart(x):
    while x &gt;= 2*pi:
        x = x - 2*pi
    while x &lt; 0:
        x = x + 2*pi
    if x &lt; pi/2:
        return 1
    elif x &lt; pi:
        return 2
    elif x &lt; 3*pi/2:
        return 3
    else:
        return 4</code></pre>
<ol><li>Dans quel intervalle se trouve la variable <code>x</code> à la sortie des deux boucles <code>while</code> ? Le point associé a-t-il changé ?</li>
<li>Que renvoie <code>quart(23*pi/6)</code> ? Justifier par le calcul.</li>
<li>Que renvoie <code>quart(-10)</code> ? Détailler les étapes (valeurs approchées au centième).</li>
<li>Sans calculer \(\cos(-10)\) ni \(\sin(-10)\), en déduire leur signe. Vérifier à la calculatrice (mode radian).</li>
<li>On suppose que \(x\) n'est pas de la forme \(\frac{\pi}{2}+k\pi\) (donc \(\cos x\neq0\)). Écrire une fonction <code>signe_cos(x)</code> qui utilise <code>quart</code> et renvoie <code>"+"</code> si \(\cos x\gt0\) et <code>"-"</code> si \(\cos x\lt0\).</li></ol>`,
          correction: R`<ol><li>La première boucle retire des tours tant que \(x\geqslant2\pi\), la seconde en ajoute tant que \(x\lt0\). À la sortie, \(0\leqslant x\lt2\pi\). On n'a ajouté ou retiré que des multiples de \(2\pi\) : le point associé est le même. <b>(1 pt)</b></li>
<li>\(\frac{23\pi}{6}\geqslant2\pi\) : la boucle donne \(\frac{23\pi}{6}-2\pi=\frac{11\pi}{6}\lt2\pi\). Or \(\frac{3\pi}{2}=\frac{9\pi}{6}\leqslant\frac{11\pi}{6}\lt2\pi\) : la fonction renvoie <code>4</code> (quart en bas à droite). <b>(1 pt)</b></li>
<li>\(x=-10\lt0\) : \(x\) devient \(-10+2\pi\approx-3{,}72\), encore négatif, puis \(-10+4\pi\approx2{,}57\). Comme \(\frac{\pi}{2}\approx1{,}57\leqslant2{,}57\lt\pi\approx3{,}14\), la fonction renvoie <code>2</code>. <b>(1 pt)</b></li>
<li>Le point associé à \(-10\) est dans le quart en haut à gauche : son abscisse est négative et son ordonnée positive. Donc \(\cos(-10)\lt0\) et \(\sin(-10)\gt0\). La calculatrice donne \(\cos(-10)\approx-0{,}839\) et \(\sin(-10)\approx0{,}544\). <b>(1 pt)</b></li>
<li>Le cosinus est strictement positif dans les quarts 1 et 4 (demi-cercle de droite) et strictement négatif dans les quarts 2 et 3 (demi-cercle de gauche), les points \(J\) et \(J'\) étant exclus par hypothèse.
<pre><code>def signe_cos(x):
    q = quart(x)
    if q == 1 or q == 4:
        return "+"
    else:
        return "-"</code></pre>
<b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Un réel du troisième quart", points: 5,
          enonce: R`Soit \(x\) un réel de l'intervalle \(\left[-\pi\,;-\frac{\pi}{2}\right]\) tel que \(\cos x=-\frac14\).
<ol><li>Calculer la valeur exacte de \(\sin x\).</li>
<li>En déduire les valeurs exactes de \(\sin(x+\pi)\), \(\cos\left(\frac{\pi}{2}-x\right)\) et \(\cos(x-\pi)\).</li>
<li>Calculer \(E=\cos^2x-\sin^2x\) et \(F=2\cos^2x-1\). Démontrer que, pour tout réel \(x\), \(\cos^2x-\sin^2x=2\cos^2x-1\).</li></ol>`,
          correction: R`<ol><li>\(\sin^2x=1-\cos^2x=1-\frac{1}{16}=\frac{15}{16}\), donc \(\sin x=\frac{\sqrt{15}}{4}\) ou \(\sin x=-\frac{\sqrt{15}}{4}\).<br>
Pour \(x\in\left[-\pi\,;-\frac{\pi}{2}\right]\), le point associé est sur le quart de cercle en bas à gauche : son ordonnée est négative. Donc \(\sin x=-\frac{\sqrt{15}}{4}\). <b>(2 pts)</b></li>
<li>\(\sin(x+\pi)=-\sin x=\frac{\sqrt{15}}{4}\) ; \(\cos\left(\frac{\pi}{2}-x\right)=\sin x=-\frac{\sqrt{15}}{4}\) ;<br>
\(\cos(x-\pi)=\cos(x-\pi+2\pi)=\cos(x+\pi)=-\cos x=\frac14\). <b>(1,5 pt : 0,5 par valeur)</b></li>
<li>\(E=\frac{1}{16}-\frac{15}{16}=-\frac{14}{16}=-\frac78\) et \(F=2\times\frac{1}{16}-1=\frac18-1=-\frac78\).<br>
En général, \(\sin^2x=1-\cos^2x\), donc \(\cos^2x-\sin^2x=\cos^2x-(1-\cos^2x)=2\cos^2x-1\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Le « la » du diapason", points: 5,
          enonce: R`Un diapason émet la note « la », de fréquence \(440\) Hz. On modélise le signal sonore par \(s(t)=\sin(880\pi t)\), où \(t\) est le temps en secondes.
<ol><li>Montrer que \(s\) est périodique de période \(\frac{1}{440}\) s.</li>
<li>Calculer \(s\left(\frac{1}{1760}\right)\) et \(s\left(\frac{1}{2640}\right)\).</li>
<li>Résoudre l'équation \(s(t)=\frac12\) sur l'intervalle \(\left[0\,;\frac{1}{440}\right[\). Donner les solutions sous forme de fractions, puis en millisecondes à \(0{,}001\) près.</li>
<li>La fonction \(s\) est-elle paire ? impaire ? Justifier.</li></ol>`,
          correction: R`<ol><li>Pour tout réel \(t\), \(s\left(t+\frac{1}{440}\right)=\sin\left(880\pi t+\frac{880\pi}{440}\right)=\sin(880\pi t+2\pi)=\sin(880\pi t)=s(t)\). <b>(1,5 pt)</b></li>
<li>\(s\left(\frac{1}{1760}\right)=\sin\frac{880\pi}{1760}=\sin\frac{\pi}{2}=1\) ; \(s\left(\frac{1}{2640}\right)=\sin\frac{880\pi}{2640}=\sin\frac{\pi}{3}=\frac{\sqrt3}{2}\). <b>(1 pt)</b></li>
<li>Posons \(X=880\pi t\) : si \(t\in\left[0\,;\frac{1}{440}\right[\), alors \(X\in[0\,;2\pi[\). Dans cet intervalle, \(\sin X=\frac12\iff X=\frac{\pi}{6}\) ou \(X=\frac{5\pi}{6}\).<br>
Donc \(t=\frac{X}{880\pi}\) : \(t=\frac{1}{6\times880}=\frac{1}{5280}\) ou \(t=\frac{5}{5280}=\frac{1}{1056}\).<br>
En millisecondes : \(t\approx0{,}189\) ms ou \(t\approx0{,}947\) ms. <b>(1,5 pt)</b></li>
<li>\(s\) est définie sur \(\mathbb{R}\), symétrique par rapport à \(0\), et \(s(-t)=\sin(-880\pi t)=-\sin(880\pi t)=-s(t)\) : \(s\) est <b>impaire</b> (elle n'est pas paire puisque \(s\left(\frac{1}{1760}\right)=1\) et \(s\left(-\frac{1}{1760}\right)=-1\)). <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°8 — Équations et inéquations trigonométriques", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Symétries sur le cercle", points: 4,
          enonce: R`Sur le cercle trigonométrique ci-dessous, on a placé les points \(A\), \(B\), \(C\), \(D\) associés respectivement à \(\frac{\pi}{6}\), \(\frac{3\pi}{4}\), \(-\frac{2\pi}{3}\) et \(-\frac{\pi}{4}\).
<svg viewBox="0 0 200 200" width="200" role="img" aria-label="Cercle trigonométrique avec quatre points A, B, C, D">
  <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" stroke-width="1"/>
  <line x1="100" y1="195" x2="100" y2="5" stroke="currentColor" stroke-width="1"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="169.3" cy="60" r="3" fill="currentColor"/>
  <text x="174" y="56" font-size="12" fill="currentColor">A</text>
  <circle cx="43.4" cy="43.4" r="3" fill="currentColor"/>
  <text x="28" y="40" font-size="12" fill="currentColor">B</text>
  <circle cx="60" cy="169.3" r="3" fill="currentColor"/>
  <text x="46" y="182" font-size="12" fill="currentColor">C</text>
  <circle cx="156.6" cy="156.6" r="3" fill="currentColor"/>
  <text x="162" y="170" font-size="12" fill="currentColor">D</text>
  <text x="88" y="114" font-size="12" fill="currentColor">O</text>
</svg>
Donner, en justifiant, la mesure principale du réel associé à chacun des points suivants :
<ol><li>\(E\), symétrique de \(A\) par rapport à l'axe des ordonnées ;</li>
<li>\(F\), symétrique de \(B\) par rapport à l'origine \(O\) ;</li>
<li>\(G\), symétrique de \(C\) par rapport à l'axe des abscisses ;</li>
<li>\(H\), symétrique de \(A\) par rapport à la droite d'équation \(y=x\).</li></ol>`,
          correction: R`<ol><li>La symétrie par rapport à l'axe des ordonnées associe au point de \(x\) celui de \(\pi-x\) : \(E\) est associé à \(\pi-\frac{\pi}{6}=\frac{5\pi}{6}\), qui est dans \(]-\pi\,;\pi]\). <b>(1 pt)</b></li>
<li>La symétrie de centre \(O\) associe au point de \(x\) celui de \(x+\pi\) : \(\frac{3\pi}{4}+\pi=\frac{7\pi}{4}\), de mesure principale \(\frac{7\pi}{4}-2\pi=-\frac{\pi}{4}\). Le point \(F\) est donc le point \(D\). <b>(1 pt)</b></li>
<li>La symétrie par rapport à l'axe des abscisses associe au point de \(x\) celui de \(-x\) : \(G\) est associé à \(\frac{2\pi}{3}\). <b>(1 pt)</b></li>
<li>La symétrie par rapport à la droite \(y=x\) échange abscisse et ordonnée ; elle associe au point de \(x\) celui de \(\frac{\pi}{2}-x\) : \(H\) est associé à \(\frac{\pi}{2}-\frac{\pi}{6}=\frac{\pi}{3}\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Équations", points: 6,
          enonce: R`<ol><li>Résoudre \(\sqrt2\cos x-1=0\) sur \([0\,;2\pi[\).</li>
<li>Résoudre \(\sin x=-\frac12\) sur \([-2\pi\,;2\pi]\).</li>
<li>Résoudre \(\cos\left(x+\frac{\pi}{3}\right)=0\) sur \(]-\pi\,;\pi]\).</li>
<li>Résoudre \(\sin x\,(2\cos x+1)=0\) sur \([0\,;2\pi[\).</li></ol>`,
          correction: R`<ol><li>\(\sqrt2\cos x-1=0\iff\cos x=\frac{1}{\sqrt2}=\frac{\sqrt2}{2}=\cos\frac{\pi}{4}\). Donc \(x=\pm\frac{\pi}{4}+2k\pi\). Dans \([0\,;2\pi[\) : \(\frac{\pi}{4}\) et \(-\frac{\pi}{4}+2\pi=\frac{7\pi}{4}\). \(S=\left\{\frac{\pi}{4}\,;\frac{7\pi}{4}\right\}\). <b>(1 pt)</b></li>
<li>\(\sin\left(-\frac{\pi}{6}\right)=-\frac12\), donc \(x=-\frac{\pi}{6}+2k\pi\) ou \(x=\pi+\frac{\pi}{6}+2k\pi=\frac{7\pi}{6}+2k\pi\).<br>
L'intervalle \([-2\pi\,;2\pi]\) correspond à deux tours :<br>
• \(-\frac{\pi}{6}\) et \(-\frac{\pi}{6}+2\pi=\frac{11\pi}{6}\) conviennent (\(-\frac{\pi}{6}-2\pi=-\frac{13\pi}{6}\lt-2\pi\) non) ;<br>
• \(\frac{7\pi}{6}\) et \(\frac{7\pi}{6}-2\pi=-\frac{5\pi}{6}\) conviennent (\(\frac{7\pi}{6}+2\pi\gt2\pi\) non).<br>
\(S=\left\{-\frac{5\pi}{6}\,;-\frac{\pi}{6}\,;\frac{7\pi}{6}\,;\frac{11\pi}{6}\right\}\). <b>(1,5 pt)</b></li>
<li>Posons \(X=x+\frac{\pi}{3}\). Si \(x\in]-\pi\,;\pi]\), alors \(X\in\left]-\frac{2\pi}{3}\,;\frac{4\pi}{3}\right]\). \(\cos X=0\iff X=\frac{\pi}{2}+k\pi\) ; dans cet intervalle : \(X=-\frac{\pi}{2}\) ou \(X=\frac{\pi}{2}\) (\(\frac{3\pi}{2}\gt\frac{4\pi}{3}\) ne convient pas).<br>
Donc \(x=X-\frac{\pi}{3}\) : \(x=-\frac{5\pi}{6}\) ou \(x=\frac{\pi}{6}\). \(S=\left\{-\frac{5\pi}{6}\,;\frac{\pi}{6}\right\}\). <b>(1,5 pt)</b></li>
<li>Un produit est nul si et seulement si l'un des facteurs est nul.<br>
\(\sin x=0\) : \(x=0\) ou \(x=\pi\). \(2\cos x+1=0\iff\cos x=-\frac12\) : \(x=\frac{2\pi}{3}\) ou \(x=-\frac{2\pi}{3}+2\pi=\frac{4\pi}{3}\).<br>
\(S=\left\{0\,;\frac{2\pi}{3}\,;\pi\,;\frac{4\pi}{3}\right\}\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 3 — Inéquations", points: 6,
          enonce: R`À l'aide du cercle trigonométrique, résoudre :
<ol><li>\(2\sin x-\sqrt3\lt0\) sur \([0\,;2\pi[\) ;</li>
<li>\(\cos x\leqslant0\) sur \(]-\pi\,;\pi]\) ;</li>
<li>\(\cos^2x\geqslant\frac12\) sur \(]-\pi\,;\pi]\) ;</li>
<li>\((2\cos x-1)\sin x\gt0\) sur \(]-\pi\,;\pi]\) (on pourra dresser un tableau de signes).</li></ol>`,
          correction: R`<ol><li>\(2\sin x-\sqrt3\lt0\iff\sin x\lt\frac{\sqrt3}{2}\). Sur \([0\,;2\pi[\), \(\sin x=\frac{\sqrt3}{2}\) pour \(x=\frac{\pi}{3}\) et \(x=\frac{2\pi}{3}\) ; les points d'ordonnée \(\geqslant\frac{\sqrt3}{2}\) forment le petit arc entre eux (passant par \(J\)), qu'on exclut.<br>
\(S=\left[0\,;\frac{\pi}{3}\right[\cup\left]\frac{2\pi}{3}\,;2\pi\right[\). <b>(1,5 pt)</b></li>
<li>\(\cos x\leqslant0\) : demi-cercle de gauche, entre \(J\) (\(\frac{\pi}{2}\)) et \(J'\) (\(-\frac{\pi}{2}\)) en passant par \(I'\). Dans \(]-\pi\,;\pi]\) : \(S=\left]-\pi\,;-\frac{\pi}{2}\right]\cup\left[\frac{\pi}{2}\,;\pi\right]\). <b>(1 pt)</b></li>
<li>\(\cos^2x\geqslant\frac12\iff\cos x\geqslant\frac{\sqrt2}{2}\) ou \(\cos x\leqslant-\frac{\sqrt2}{2}\).<br>
\(\cos x\geqslant\frac{\sqrt2}{2}\) : arc de droite, \(x\in\left[-\frac{\pi}{4}\,;\frac{\pi}{4}\right]\).<br>
\(\cos x\leqslant-\frac{\sqrt2}{2}\) : arc de gauche, de \(\frac{3\pi}{4}\) à \(-\frac{3\pi}{4}\) en passant par \(\pi\), soit \(x\in\left]-\pi\,;-\frac{3\pi}{4}\right]\cup\left[\frac{3\pi}{4}\,;\pi\right]\).<br>
\(S=\left]-\pi\,;-\frac{3\pi}{4}\right]\cup\left[-\frac{\pi}{4}\,;\frac{\pi}{4}\right]\cup\left[\frac{3\pi}{4}\,;\pi\right]\). <b>(2 pts)</b></li>
<li>Sur \(]-\pi\,;\pi]\) : \(\sin x\gt0\) sur \(]0\,;\pi[\), \(\sin x\lt0\) sur \(]-\pi\,;0[\), nul en \(0\) et \(\pi\). \(2\cos x-1\gt0\iff\cos x\gt\frac12\iff x\in\left]-\frac{\pi}{3}\,;\frac{\pi}{3}\right[\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\pi\)</td><td></td><td>\(-\frac{\pi}{3}\)</td><td></td><td>\(0\)</td><td></td><td>\(\frac{\pi}{3}\)</td><td></td><td>\(\pi\)</td></tr>
<tr><td>\(2\cos x-1\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>\(\sin x\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td><td>\(+\)</td><td>\(0\)</td></tr>
<tr><td>produit</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td></tr>
</table>
\(S=\left]-\pi\,;-\frac{\pi}{3}\right[\cup\left]0\,;\frac{\pi}{3}\right[\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Un trinôme en cosinus", points: 4,
          enonce: R`<ol><li>Résoudre dans \(\mathbb{R}\) l'équation \(2X^2+5X+2=0\), puis factoriser \(2X^2+5X+2\).</li>
<li>En déduire les solutions dans \([0\,;2\pi[\) de l'équation \(2\cos^2x+5\cos x+2=0\).</li>
<li>Résoudre dans \([0\,;2\pi[\) l'inéquation \(2\cos^2x+5\cos x+2\leqslant0\).</li></ol>`,
          correction: R`<ol><li>\(\Delta=5^2-4\times2\times2=25-16=9\), \(\sqrt\Delta=3\) : \(X_1=\frac{-5-3}{4}=-2\) et \(X_2=\frac{-5+3}{4}=-\frac12\).<br>
Donc \(2X^2+5X+2=2(X+2)\left(X+\frac12\right)=(X+2)(2X+1)\). <b>(1 pt)</b></li>
<li>Avec \(X=\cos x\) : \(\cos x=-2\) est impossible (\(\cos x\geqslant-1\)). \(\cos x=-\frac12\) : \(x=\frac{2\pi}{3}\) ou \(x=\frac{4\pi}{3}\). \(S=\left\{\frac{2\pi}{3}\,;\frac{4\pi}{3}\right\}\). <b>(1,5 pt)</b></li>
<li>\(2\cos^2x+5\cos x+2=(\cos x+2)(2\cos x+1)\). Comme \(\cos x\geqslant-1\), \(\cos x+2\geqslant1\gt0\) : le signe est celui de \(2\cos x+1\).<br>
\(2\cos x+1\leqslant0\iff\cos x\leqslant-\frac12\) : arc de gauche entre \(\frac{2\pi}{3}\) et \(\frac{4\pi}{3}\). \(S=\left[\frac{2\pi}{3}\,;\frac{4\pi}{3}\right]\). <b>(1,5 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°9 — Radians, balayage et balançoire", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Le radian concrètement", points: 5,
          enonce: R`<ol><li>Convertir \(1\) rad en degrés (à \(0{,}1\) près), puis \(72^\circ\) en radians (valeur exacte).</li>
<li>Une roue de vélo a un rayon de \(35\) cm. Le vélo avance de \(1\) m (la roue roule sans glisser). De quel angle, en radians puis en degrés (à \(0{,}1\) près), la roue a-t-elle tourné ?</li>
<li>Combien de tours complets la roue effectue-t-elle sur \(1\) km ?</li>
<li>Sans calculer \(\cos2\) ni \(\sin2\), déterminer leur signe en situant le point associé à \(2\) sur le cercle trigonométrique. Vérifier à la calculatrice.</li></ol>`,
          correction: R`<ol><li>\(1\) rad \(=\frac{180}{\pi}\)° \(\approx57{,}3^\circ\) ; \(72^\circ=\frac{72\pi}{180}=\frac{2\pi}{5}\) rad. <b>(1 pt)</b></li>
<li>La longueur d'un arc est proportionnelle à l'angle au centre : sur un cercle de rayon \(r\), un tour (\(2\pi\) rad) correspond à \(2\pi r\), donc un angle de \(\theta\) rad intercepte un arc de longueur \(r\theta\). Ici \(35\theta=100\), d'où \(\theta=\frac{100}{35}=\frac{20}{7}\approx2{,}857\) rad, soit \(\frac{20}{7}\times\frac{180}{\pi}\approx163{,}7^\circ\). <b>(1,5 pt)</b></li>
<li>Un tour fait avancer le vélo de \(2\pi\times35=70\pi\approx219{,}9\) cm. Sur \(1\) km \(=100\,000\) cm : \(\frac{100\,000}{70\pi}\approx454{,}7\). La roue effectue \(454\) tours complets. <b>(1 pt)</b></li>
<li>\(\frac{\pi}{2}\approx1{,}57\lt2\lt\pi\approx3{,}14\) : le point associé à \(2\) est dans le quart de cercle en haut à gauche. Donc \(\cos2\lt0\) et \(\sin2\gt0\). Calculatrice : \(\cos2\approx-0{,}416\) et \(\sin2\approx0{,}909\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Résoudre cos x = x par balayage", points: 5,
          enonce: R`On s'intéresse à l'équation \(\cos x=x\) sur \(\left[0\,;\frac{\pi}{2}\right]\). On pose \(g(x)=\cos x-x\).
<ol><li>Justifier que \(g\) est strictement décroissante sur \(\left[0\,;\frac{\pi}{2}\right]\), puis calculer \(g(0)\) et \(g\left(\frac{\pi}{2}\right)\). On admet alors que l'équation \(\cos x=x\) possède une unique solution \(\alpha\) dans \(\left[0\,;\frac{\pi}{2}\right]\).</li>
<li>On considère la fonction Python suivante.
<pre><code>from math import cos

def balayage(n):
    k = 0
    while cos(k/n) &gt; k/n:
        k = k + 1
    return k/n</code></pre>
Que renvoie <code>balayage(10)</code> ? Justifier à l'aide de quelques valeurs de \(\cos\).</li>
<li><code>balayage(100)</code> renvoie <code>0.74</code>. En déduire un encadrement de \(\alpha\) d'amplitude \(0{,}01\).</li>
<li>En utilisant la parité de cosinus, montrer que \(-\alpha\) est solution de l'équation \(\cos x=-x\).</li></ol>`,
          correction: R`<ol><li>Sur \(\left[0\,;\frac{\pi}{2}\right]\), la fonction cosinus est décroissante (elle l'est sur \([0\,;\pi]\)) et \(x\mapsto-x\) est strictement décroissante : leur somme \(g\) est strictement décroissante.<br>
\(g(0)=\cos0-0=1\gt0\) et \(g\left(\frac{\pi}{2}\right)=0-\frac{\pi}{2}=-\frac{\pi}{2}\lt0\). <b>(1,5 pt)</b></li>
<li>La boucle avance de \(\frac{1}{10}\) en \(\frac{1}{10}\) tant que \(\cos x\gt x\), c'est-à-dire tant que \(g(x)\gt0\). On a \(\cos(0{,}7)\approx0{,}765\gt0{,}7\) donc \(g(0{,}7)\gt0\) (et, \(g\) étant décroissante, \(g\) est positive pour \(0\), \(0{,}1\), …, \(0{,}7\)). Puis \(\cos(0{,}8)\approx0{,}697\lt0{,}8\) : la boucle s'arrête pour \(k=8\). La fonction renvoie <code>0.8</code>. <b>(1,5 pt)</b></li>
<li><code>balayage(100)</code> renvoie \(0{,}74\) : cela signifie que \(g(0{,}74)\leqslant0\) et que la valeur précédente vérifiait \(g(0{,}73)\gt0\) (en effet \(\cos(0{,}73)\approx0{,}745\gt0{,}73\)). Comme \(g\) est strictement décroissante et \(g(\alpha)=0\) : \(0{,}73\lt\alpha\leqslant0{,}74\). (En fait \(\alpha\approx0{,}7391\).) <b>(1 pt)</b></li>
<li>Cosinus est paire : \(\cos(-\alpha)=\cos\alpha=\alpha=-(-\alpha)\). Donc \(x=-\alpha\) vérifie \(\cos x=-x\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — La balançoire", points: 5,
          enonce: R`Une balançoire est suspendue par des chaînes de \(2\) m. On repère sa position par l'angle \(\theta\) (en radians) entre les chaînes et la verticale. On modélise \(\theta(t)=0{,}3\cos(\pi t)\), où \(t\) est le temps en secondes.
<ol><li>Montrer que \(\theta\) est périodique de période \(2\). Interpréter.</li>
<li>Calculer \(\theta\left(\frac13\right)\), \(\theta\left(\frac12\right)\) et \(\theta(1)\). Interpréter \(\theta\left(\frac12\right)\) et \(\theta(1)\). Convertir \(0{,}3\) rad en degrés.</li>
<li>Sur \([0\,;2]\), déterminer les instants où l'angle est, en valeur absolue, inférieur ou égal à \(0{,}15\) rad, et la durée totale correspondante.</li>
<li>On admet que la hauteur du siège au-dessus de sa position la plus basse vaut \(h=2-2\cos\theta\) (en m). Calculer cette hauteur, au cm près, à l'instant \(t=0\).</li></ol>`,
          correction: R`<ol><li>\(\theta(t+2)=0{,}3\cos(\pi t+2\pi)=0{,}3\cos(\pi t)=\theta(t)\) : \(\theta\) est \(2\)-périodique. Un aller-retour complet de la balançoire dure \(2\) secondes. <b>(1 pt)</b></li>
<li>\(\theta\left(\frac13\right)=0{,}3\cos\frac{\pi}{3}=0{,}15\) ; \(\theta\left(\frac12\right)=0{,}3\cos\frac{\pi}{2}=0\) : à \(t=0{,}5\) s, les chaînes sont verticales (le siège passe au point le plus bas) ; \(\theta(1)=0{,}3\cos\pi=-0{,}3\) : à \(t=1\) s, la balançoire est au plus loin de l'autre côté.<br>
\(0{,}3\times\frac{180}{\pi}\approx17{,}2^\circ\). <b>(1,5 pt)</b></li>
<li>\(|\theta(t)|\leqslant0{,}15\iff-\frac12\leqslant\cos(\pi t)\leqslant\frac12\). Posons \(X=\pi t\in[0\,;2\pi]\). Sur le cercle, les points d'abscisse comprise entre \(-\frac12\) et \(\frac12\) forment deux arcs : \(X\in\left[\frac{\pi}{3}\,;\frac{2\pi}{3}\right]\) (en haut) et \(X\in\left[\frac{4\pi}{3}\,;\frac{5\pi}{3}\right]\) (en bas).<br>
Donc \(t=\frac{X}{\pi}\in\left[\frac13\,;\frac23\right]\cup\left[\frac43\,;\frac53\right]\). Durée totale : \(\frac13+\frac13=\frac23\) s. <b>(1,5 pt)</b></li>
<li>À \(t=0\), \(\theta=0{,}3\) et \(h=2-2\cos(0{,}3)\approx2-2\times0{,}9553\approx0{,}089\) m, soit environ \(9\) cm. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Réduire l'intervalle d'étude", points: 5,
          enonce: R`Soit \(f\) la fonction définie sur \(\mathbb{R}\) par \(f(x)=\sin x\cos(2x)\).
<ol><li>Montrer que \(f\) est impaire et périodique de période \(2\pi\).</li>
<li>Montrer que pour tout réel \(x\), \(f(\pi-x)=f(x)\). Quelle symétrie de la courbe cela traduit-il ?</li>
<li>Expliquer pourquoi il suffit d'étudier \(f\) sur \(\left[0\,;\frac{\pi}{2}\right]\).</li>
<li>Résoudre l'équation \(f(x)=0\) sur \([-\pi\,;\pi]\).</li></ol>`,
          correction: R`<ol><li>\(f(-x)=\sin(-x)\cos(-2x)=-\sin x\cos(2x)=-f(x)\) (sinus impaire, cosinus paire) : \(f\) est impaire. <b>(1 pt)</b><br>
\(f(x+2\pi)=\sin(x+2\pi)\cos(2x+4\pi)=\sin x\cos(2x)=f(x)\) : \(f\) est \(2\pi\)-périodique. <b>(0,5 pt)</b></li>
<li>\(f(\pi-x)=\sin(\pi-x)\cos(2\pi-2x)=\sin x\cos(-2x)=\sin x\cos(2x)=f(x)\).<br>
Les réels \(x\) et \(\pi-x\) sont symétriques par rapport à \(\frac{\pi}{2}\) (leur moyenne vaut \(\frac{\pi}{2}\)) : la courbe est symétrique par rapport à la droite d'équation \(x=\frac{\pi}{2}\). <b>(1,5 pt)</b></li>
<li>Connaissant la courbe sur \(\left[0\,;\frac{\pi}{2}\right]\), la symétrie d'axe \(x=\frac{\pi}{2}\) la donne sur \(\left[\frac{\pi}{2}\,;\pi\right]\) ; l'imparité (symétrie de centre \(O\)) la donne sur \([-\pi\,;0]\) ; on la connaît alors sur \([-\pi\,;\pi]\), de longueur \(2\pi\), et la périodicité donne toute la courbe par translations de \(2k\pi\). <b>(1 pt)</b></li>
<li>\(f(x)=0\iff\sin x=0\) ou \(\cos(2x)=0\).<br>
\(\sin x=0\) sur \([-\pi\,;\pi]\) : \(x\in\{-\pi\,;0\,;\pi\}\).<br>
\(\cos(2x)=0\) : \(X=2x\in[-2\pi\,;2\pi]\) et \(\cos X=0\iff X\in\left\{-\frac{3\pi}{2}\,;-\frac{\pi}{2}\,;\frac{\pi}{2}\,;\frac{3\pi}{2}\right\}\), d'où \(x\in\left\{-\frac{3\pi}{4}\,;-\frac{\pi}{4}\,;\frac{\pi}{4}\,;\frac{3\pi}{4}\right\}\).<br>
\(S=\left\{-\pi\,;-\frac{3\pi}{4}\,;-\frac{\pi}{4}\,;0\,;\frac{\pi}{4}\,;\frac{3\pi}{4}\,;\pi\right\}\). <b>(1 pt)</b></li></ol>` }
      ] },

    { titre: "DS n°10 — Bilan du chapitre", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — QCM", points: 4,
          enonce: R`Pour chaque question, une seule réponse est exacte. Recopier la lettre de la bonne réponse. Aucune justification n'est demandée. Une bonne réponse rapporte 1 point, une mauvaise réponse ou une absence de réponse 0 point.
<ol><li>La mesure principale de \(\frac{7\pi}{5}\) est : <b>a.</b> \(\frac{2\pi}{5}\) ; <b>b.</b> \(-\frac{3\pi}{5}\) ; <b>c.</b> \(\frac{3\pi}{5}\) ; <b>d.</b> \(-\frac{2\pi}{5}\).</li>
<li>Pour tout réel \(x\), \(\cos\left(\frac{\pi}{2}+x\right)-\sin(\pi-x)\) est égal à : <b>a.</b> \(0\) ; <b>b.</b> \(2\cos x\) ; <b>c.</b> \(-2\sin x\) ; <b>d.</b> \(\cos x-\sin x\).</li>
<li>Si \(x\in\left[\frac{\pi}{2}\,;\pi\right]\) et \(\sin x=0{,}8\), alors \(\cos x\) vaut : <b>a.</b> \(0{,}2\) ; <b>b.</b> \(0{,}6\) ; <b>c.</b> \(-0{,}6\) ; <b>d.</b> \(0{,}36\).</li>
<li>Le nombre de solutions de l'équation \(\cos x=0{,}3\) dans \([0\,;6\pi[\) est : <b>a.</b> \(2\) ; <b>b.</b> \(3\) ; <b>c.</b> \(6\) ; <b>d.</b> une infinité.</li></ol>`,
          correction: R`<ol><li><b>b.</b> \(\frac{7\pi}{5}-2\pi=\frac{7\pi}{5}-\frac{10\pi}{5}=-\frac{3\pi}{5}\in]-\pi\,;\pi]\). <b>(1 pt)</b></li>
<li><b>c.</b> \(\cos\left(\frac{\pi}{2}+x\right)=-\sin x\) et \(\sin(\pi-x)=\sin x\), donc l'expression vaut \(-\sin x-\sin x=-2\sin x\). <b>(1 pt)</b></li>
<li><b>c.</b> \(\cos^2x=1-0{,}64=0{,}36\), donc \(\cos x=\pm0{,}6\) ; sur \(\left[\frac{\pi}{2}\,;\pi\right]\), le cosinus est négatif : \(\cos x=-0{,}6\). <b>(1 pt)</b></li>
<li><b>c.</b> Comme \(-1\lt0{,}3\lt1\), la droite verticale d'abscisse \(0{,}3\) coupe le cercle en deux points distincts : deux solutions par tour. L'intervalle \([0\,;6\pi[\) correspond à trois tours : \(3\times2=6\) solutions. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Démonstration et valeurs exactes", points: 5,
          enonce: R`<ol><li>Démontrer que pour tout réel \(x\), \(\cos(-x)=\cos x\) et \(\sin(-x)=-\sin x\), en précisant la symétrie du cercle trigonométrique utilisée.</li>
<li>On admet que \(\cos\frac{\pi}{5}=\frac{1+\sqrt5}{4}\). Montrer que \(\sin\frac{\pi}{5}=\frac{\sqrt{10-2\sqrt5}}{4}\).</li>
<li>En déduire les valeurs exactes de \(\cos\frac{4\pi}{5}\), \(\sin\frac{6\pi}{5}\) et \(\cos\frac{3\pi}{10}\).</li></ol>`,
          correction: R`<ol><li>Soit \(M(\cos x\,;\sin x)\) le point associé à \(x\). Le point associé à \(-x\) s'obtient en enroulant la même longueur \(|x|\) dans le sens opposé à partir de \(I\) : c'est le symétrique \(M'\) de \(M\) par rapport à l'axe des abscisses. Cette symétrie conserve l'abscisse et change l'ordonnée en son opposée : \(M'(\cos x\,;-\sin x)\). Donc \(\cos(-x)=\cos x\) et \(\sin(-x)=-\sin x\). <b>(1,5 pt)</b></li>
<li>\(\cos^2\frac{\pi}{5}=\frac{(1+\sqrt5)^2}{16}=\frac{1+2\sqrt5+5}{16}=\frac{6+2\sqrt5}{16}\), donc
\[\sin^2\frac{\pi}{5}=1-\frac{6+2\sqrt5}{16}=\frac{16-6-2\sqrt5}{16}=\frac{10-2\sqrt5}{16}.\]
Comme \(\frac{\pi}{5}\in]0\,;\pi[\), \(\sin\frac{\pi}{5}\gt0\), donc \(\sin\frac{\pi}{5}=\frac{\sqrt{10-2\sqrt5}}{\sqrt{16}}=\frac{\sqrt{10-2\sqrt5}}{4}\). <b>(1,5 pt)</b></li>
<li>\(\cos\frac{4\pi}{5}=\cos\left(\pi-\frac{\pi}{5}\right)=-\cos\frac{\pi}{5}=-\frac{1+\sqrt5}{4}\). <b>(0,5 pt)</b><br>
\(\sin\frac{6\pi}{5}=\sin\left(\pi+\frac{\pi}{5}\right)=-\sin\frac{\pi}{5}=-\frac{\sqrt{10-2\sqrt5}}{4}\). <b>(0,75 pt)</b><br>
\(\frac{3\pi}{10}=\frac{5\pi}{10}-\frac{2\pi}{10}=\frac{\pi}{2}-\frac{\pi}{5}\), donc \(\cos\frac{3\pi}{10}=\sin\frac{\pi}{5}=\frac{\sqrt{10-2\sqrt5}}{4}\). <b>(0,75 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Rectangle dans un demi-cercle", points: 6,
          enonce: R`Dans un repère orthonormé, on considère le demi-cercle supérieur du cercle trigonométrique. Pour \(x\in\left]0\,;\frac{\pi}{2}\right[\), on note \(M\) le point associé à \(x\), \(N\) son symétrique par rapport à l'axe des ordonnées, et \(P\), \(Q\) les projetés orthogonaux respectifs de \(N\) et \(M\) sur l'axe des abscisses. On obtient un rectangle \(MNPQ\) inscrit dans le demi-disque.
<ol><li>Donner les coordonnées de \(M\), \(N\), \(P\), \(Q\) en fonction de \(x\), puis montrer que l'aire du rectangle vaut \(\mathcal{A}(x)=2\sin x\cos x\).</li>
<li>Calculer les valeurs exactes de \(\mathcal{A}\left(\frac{\pi}{6}\right)\), \(\mathcal{A}\left(\frac{\pi}{4}\right)\) et \(\mathcal{A}\left(\frac{\pi}{3}\right)\).</li>
<li>Montrer que pour tout \(x\in\left]0\,;\frac{\pi}{2}\right[\), \(\mathcal{A}\left(\frac{\pi}{2}-x\right)=\mathcal{A}(x)\). Interpréter avec les résultats de la question 2.</li>
<li>En développant \((\cos x-\sin x)^2\), montrer que \(\mathcal{A}(x)\leqslant1\). Pour quelle valeur de \(x\) l'aire est-elle maximale ? Donner alors les dimensions du rectangle.</li></ol>`,
          correction: R`<ol><li>\(M(\cos x\,;\sin x)\), \(N(-\cos x\,;\sin x)\), \(P(-\cos x\,;0)\), \(Q(\cos x\,;0)\). Pour \(x\in\left]0\,;\frac{\pi}{2}\right[\), \(\cos x\gt0\) et \(\sin x\gt0\).<br>
Longueur \(MN=2\cos x\), largeur \(MQ=\sin x\) : \(\mathcal{A}(x)=2\cos x\times\sin x=2\sin x\cos x\). <b>(1,5 pt)</b></li>
<li>\(\mathcal{A}\left(\frac{\pi}{6}\right)=2\times\frac12\times\frac{\sqrt3}{2}=\frac{\sqrt3}{2}\) ; \(\mathcal{A}\left(\frac{\pi}{4}\right)=2\times\frac{\sqrt2}{2}\times\frac{\sqrt2}{2}=1\) ; \(\mathcal{A}\left(\frac{\pi}{3}\right)=2\times\frac{\sqrt3}{2}\times\frac12=\frac{\sqrt3}{2}\). <b>(1,5 pt)</b></li>
<li>\(\mathcal{A}\left(\frac{\pi}{2}-x\right)=2\sin\left(\frac{\pi}{2}-x\right)\cos\left(\frac{\pi}{2}-x\right)=2\cos x\sin x=\mathcal{A}(x)\).<br>
Deux angles complémentaires donnent des rectangles de même aire, comme \(\frac{\pi}{6}\) et \(\frac{\pi}{3}=\frac{\pi}{2}-\frac{\pi}{6}\), qui donnent tous deux \(\frac{\sqrt3}{2}\) (les rectangles ne sont pourtant pas les mêmes : \(\sqrt3\times\frac12\) et \(1\times\frac{\sqrt3}{2}\)). <b>(1,5 pt)</b></li>
<li>\((\cos x-\sin x)^2=\cos^2x-2\sin x\cos x+\sin^2x=1-\mathcal{A}(x)\). Un carré est positif, donc \(1-\mathcal{A}(x)\geqslant0\), soit \(\mathcal{A}(x)\leqslant1\).<br>
L'égalité a lieu si et seulement si \(\cos x=\sin x\). Pour \(x=\frac{\pi}{4}\), \(\cos x=\sin x=\frac{\sqrt2}{2}\) : l'aire maximale vaut \(1\) (question 2). Le rectangle mesure alors \(2\times\frac{\sqrt2}{2}=\sqrt2\) sur \(\frac{\sqrt2}{2}\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Équation et inéquation", points: 5,
          enonce: R`<ol><li>Justifier que pour tout réel \(x\), \(\sin x=\cos\left(\frac{\pi}{2}-x\right)\). En déduire les solutions sur \(]-\pi\,;\pi]\) de l'équation \(\cos x=\sin x\).</li>
<li>Résoudre sur \(]-\pi\,;\pi]\) l'inéquation \(\sin x\gt-\frac{\sqrt3}{2}\), puis en déduire l'ensemble des solutions de \(\sin x\leqslant-\frac{\sqrt3}{2}\) sur \(]-\pi\,;\pi]\).</li></ol>`,
          correction: R`<ol><li>C'est la formule d'angle associé \(\cos\left(\frac{\pi}{2}-x\right)=\sin x\) (symétrie par rapport à la droite \(y=x\)). <b>(0,5 pt)</b><br>
L'équation s'écrit \(\cos x=\cos\left(\frac{\pi}{2}-x\right)\), c'est-à-dire, avec \(k\in\mathbb{Z}\) :
<ul><li>\(x=\frac{\pi}{2}-x+2k\pi\iff2x=\frac{\pi}{2}+2k\pi\iff x=\frac{\pi}{4}+k\pi\) ;</li>
<li>ou \(x=-\left(\frac{\pi}{2}-x\right)+2k\pi\iff0=-\frac{\pi}{2}+2k\pi\iff k=\frac14\) : impossible car \(k\) est entier.</li></ul>
Dans \(]-\pi\,;\pi]\) : \(k=0\) donne \(\frac{\pi}{4}\), \(k=-1\) donne \(-\frac{3\pi}{4}\) (\(k=1\) donne \(\frac{5\pi}{4}\gt\pi\)). \(S=\left\{-\frac{3\pi}{4}\,;\frac{\pi}{4}\right\}\).<br>
<i>Vérification :</i> \(\cos\left(-\frac{3\pi}{4}\right)=\sin\left(-\frac{3\pi}{4}\right)=-\frac{\sqrt2}{2}\). <b>(2 pts)</b></li>
<li>Sur \(]-\pi\,;\pi]\), \(\sin\left(-\frac{\pi}{3}\right)=-\frac{\sqrt3}{2}\) ; l'autre solution est \(\pi-\left(-\frac{\pi}{3}\right)=\frac{4\pi}{3}\), de mesure principale \(\frac{4\pi}{3}-2\pi=-\frac{2\pi}{3}\). Donc \(\sin x=-\frac{\sqrt3}{2}\) pour \(x=-\frac{2\pi}{3}\) et \(x=-\frac{\pi}{3}\). Les points d'ordonnée \(\leqslant-\frac{\sqrt3}{2}\) forment le petit arc inférieur entre ces deux points (passant par \(J'\)) ; tous les autres points ont une ordonnée \(\gt-\frac{\sqrt3}{2}\).<br>
\(S=\left]-\pi\,;-\frac{2\pi}{3}\right[\cup\left]-\frac{\pi}{3}\,;\pi\right]\). <b>(1,5 pt)</b><br>
L'inéquation \(\sin x\leqslant-\frac{\sqrt3}{2}\) est la négation de la précédente : ses solutions sont les réels de \(]-\pi\,;\pi]\) qui ne sont pas dans \(S\), soit \(\left[-\frac{2\pi}{3}\,;-\frac{\pi}{3}\right]\). <b>(1 pt)</b></li></ol>` }
      ] }
  ]
});
})();
