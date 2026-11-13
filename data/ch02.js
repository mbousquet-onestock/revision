(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 2,
  titre: "Second degré",
  partie: "Algèbre",
  emoji: "🏀",
  accroche: R`Le panier à trois points, le jet d'eau d'une fontaine, l'antenne satellite sur le toit : tous dessinent une <b>parabole</b> ! Dans ce chapitre, tu vas apprendre à dompter les fonctions \(x \mapsto ax^2 + bx + c\) : trouver leurs racines avec le célèbre \(\Delta\), leur sommet, leur signe… et même trouver le prix qui rapporte le plus 💰.`,

  videos: [
    { titre: "Forme factorisée et signe d'un produit", recherche: "Yvan Monka forme factorisée polynôme second degré signe", duree: "≈ 8 min", resume: R`Lire les racines et le signe de \(a(x - x_1)(x - x_2)\) directement, sans calcul.` },
    { titre: "Déterminer la forme canonique", recherche: "Yvan Monka forme canonique second degré", duree: "≈ 10 min", resume: R`Mettre \(ax^2 + bx + c\) sous la forme \(a(x - \alpha)^2 + \beta\) en complétant le carré.` },
    { titre: "Résoudre une équation du second degré avec le discriminant", recherche: "Yvan Monka résoudre une équation du second degré discriminant", duree: "≈ 12 min", resume: R`Calculer \(\Delta = b^2 - 4ac\) et appliquer les formules des racines selon le signe de \(\Delta\).` },
    { titre: "Démonstration des formules des racines", recherche: "Yvan Monka démonstration formule racines second degré discriminant", duree: "≈ 9 min", resume: R`La démonstration au programme : de la forme canonique aux formules \(\frac{-b \pm \sqrt\Delta}{2a}\).` },
    { titre: "Variations et sommet de la parabole", recherche: "Yvan Monka variations fonction polynôme second degré sommet parabole", duree: "≈ 9 min", resume: R`Trouver le sommet \(\left(-\frac{b}{2a} ; f\left(-\frac{b}{2a}\right)\right)\), l'axe de symétrie et dresser le tableau de variations.` },
    { titre: "Signe d'un trinôme et inéquations", recherche: "Yvan Monka signe d'un trinôme inéquation second degré", duree: "≈ 11 min", resume: R`« Signe de \(a\) à l'extérieur des racines » : la règle et son utilisation pour résoudre des inéquations.` },
    { titre: "Somme et produit des racines", recherche: "Yvan Monka somme et produit des racines second degré", duree: "≈ 7 min", resume: R`Utiliser \(x_1 + x_2 = -\frac ba\) et \(x_1 x_2 = \frac ca\) pour trouver une racine à partir d'une racine évidente.` }
  ],

  cours: [
    { titre: "1. Polynôme du second degré et forme factorisée", html: R`
<div class="def"><b>Définition.</b> On appelle <b>fonction polynôme du second degré</b> (ou trinôme) toute fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x) = ax^2 + bx + c\), où \(a\), \(b\), \(c\) sont des réels avec \(a \ne 0\). C'est la <b>forme développée</b>.<br>
Une <b>racine</b> de \(f\) est un réel \(x_0\) tel que \(f(x_0) = 0\).</div>
<div class="def"><b>Forme factorisée.</b> Si \(f\) admet deux racines \(x_1\) et \(x_2\) (éventuellement égales), alors pour tout réel \(x\) :
\[f(x) = a(x - x_1)(x - x_2).\]</div>
<div class="ex"><b>Exemple.</b> \(f(x) = 2(x - 1)(x + 3)\) est sous forme factorisée : \(a = 2\), et ses racines sont \(1\) et \(-3\) (car \(x + 3 = x - (-3)\)). En développant : \(f(x) = 2(x^2 + 2x - 3) = 2x^2 + 4x - 6\).</div>
<div class="prop"><b>Signe de la forme factorisée.</b> Si \(x_1 \lt x_2\), \(a(x - x_1)(x - x_2)\) est :
<ul><li>du <b>signe de \(a\)</b> à l'extérieur des racines (\(x \lt x_1\) ou \(x \gt x_2\)) ;</li>
<li>du <b>signe contraire de \(a\)</b> entre les racines.</li></ul></div>
<div class="ex"><b>Exemple.</b> Signe de \(f(x) = 2(x - 1)(x + 3)\) (ici \(a = 2 \gt 0\)) :
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-3\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(x + 3\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td><td>\(+\)</td><td></td></tr>
<tr><td>\(x - 1\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>\(f(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
</table></div>
<div class="prop"><b>Polynôme s'annulant en deux réels donnés.</b> Les fonctions polynômes du second degré qui s'annulent en \(x_1\) et \(x_2\) sont exactement les fonctions \(x \mapsto a(x - x_1)(x - x_2)\) avec \(a \ne 0\). Pour trouver \(a\), on utilise une information supplémentaire (un point de la courbe).</div>
<div class="ex"><b>Exemple résolu.</b> Trouver le polynôme du second degré qui s'annule en \(-1\) et \(4\) et tel que \(f(0) = 8\).<br>
\(f(x) = a(x + 1)(x - 4)\), et \(f(0) = a \times 1 \times (-4) = -4a = 8\), donc \(a = -2\). Ainsi \(f(x) = -2(x + 1)(x - 4) = -2x^2 + 6x + 8\).</div>
<div class="warn"><b>Piège.</b> N'oublie pas le coefficient \(a\) ! \((x + 1)(x - 4)\) et \(-2(x + 1)(x - 4)\) ont les mêmes racines, mais ce ne sont pas les mêmes fonctions.</div>
` },
    { titre: "2. Forme canonique, discriminant et racines", html: R`
<div class="prop"><b>Forme canonique.</b> Tout polynôme \(f(x) = ax^2 + bx + c\) (\(a \ne 0\)) peut s'écrire
\[f(x) = a(x - \alpha)^2 + \beta \quad \text{avec} \quad \alpha = -\frac{b}{2a} \quad \text{et} \quad \beta = f(\alpha).\]</div>
<div class="ex"><b>Méthode : compléter le carré.</b> On utilise \(x^2 + 2kx = (x + k)^2 - k^2\).<br>
\(x^2 + 6x + 5 = (x + 3)^2 - 9 + 5 = (x + 3)^2 - 4\).<br>
\(2x^2 - 8x + 3 = 2(x^2 - 4x) + 3 = 2\left[(x - 2)^2 - 4\right] + 3 = 2(x - 2)^2 - 5\).<br>
Vérification avec la formule : \(\alpha = -\frac{-8}{4} = 2\) et \(\beta = f(2) = 8 - 16 + 3 = -5\). ✓</div>
<div class="def"><b>Discriminant.</b> Le discriminant du trinôme \(ax^2 + bx + c\) est le réel \(\Delta = b^2 - 4ac\).</div>
<div class="prop"><b>Théorème (racines).</b> On considère l'équation \(ax^2 + bx + c = 0\) avec \(a \ne 0\).
<ul>
<li>Si \(\Delta \gt 0\) : deux solutions distinctes \(x_1 = \dfrac{-b - \sqrt\Delta}{2a}\) et \(x_2 = \dfrac{-b + \sqrt\Delta}{2a}\).</li>
<li>Si \(\Delta = 0\) : une seule solution (racine double) \(x_0 = -\dfrac{b}{2a}\).</li>
<li>Si \(\Delta \lt 0\) : aucune solution réelle.</li>
</ul></div>
<div class="ex"><b>Démonstration (au programme).</b> Comme \(a \ne 0\), on factorise par \(a\) puis on complète le carré :
\[ax^2 + bx + c = a\left[x^2 + \frac ba x + \frac ca\right] = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} + \frac{c}{a}\right] = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a^2}\right].\]
Donc \(ax^2 + bx + c = 0 \Leftrightarrow \left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}\) (car \(a \ne 0\)).
<ul>
<li>Si \(\Delta \lt 0\) : le membre de droite est strictement négatif alors qu'un carré est positif : pas de solution.</li>
<li>Si \(\Delta = 0\) : \(\left(x + \frac{b}{2a}\right)^2 = 0 \Leftrightarrow x = -\frac{b}{2a}\).</li>
<li>Si \(\Delta \gt 0\) : \(\frac{\Delta}{4a^2} = \left(\frac{\sqrt\Delta}{2a}\right)^2\), donc \(x + \frac{b}{2a} = \frac{\sqrt\Delta}{2a}\) ou \(x + \frac{b}{2a} = -\frac{\sqrt\Delta}{2a}\), soit \(x = \frac{-b + \sqrt\Delta}{2a}\) ou \(x = \frac{-b - \sqrt\Delta}{2a}\).</li>
</ul></div>
<div class="ex"><b>Exemple résolu.</b> Résoudre \(x^2 + x - 6 = 0\).<br>
\(a = 1\), \(b = 1\), \(c = -6\) ; \(\Delta = 1^2 - 4 \times 1 \times (-6) = 1 + 24 = 25 \gt 0\) et \(\sqrt\Delta = 5\).<br>
\(x_1 = \frac{-1 - 5}{2} = -3\) et \(x_2 = \frac{-1 + 5}{2} = 2\). \(\mathcal{S} = \{-3 ; 2\}\).</div>
<div class="warn"><b>Pièges classiques.</b>
<ul>
<li>Le signe de \(b\) : si \(b = -3\), alors \(-b = 3\) et \(b^2 = 9\) (pas \(-9\) !).</li>
<li>Le dénominateur est \(2a\), pas \(2\) : avec \(a = -1\), on divise par \(-2\).</li>
<li>Inutile de sortir \(\Delta\) quand il manque un terme : \(x^2 - 5x = 0 \Leftrightarrow x(x - 5) = 0\) et \(x^2 - 9 = 0 \Leftrightarrow x = 3\) ou \(x = -3\).</li>
</ul></div>
` },
    { titre: "3. Variations et représentation graphique", html: R`
<div class="prop"><b>Variations.</b> Soit \(f(x) = ax^2 + bx + c = a(x - \alpha)^2 + \beta\) avec \(\alpha = -\frac{b}{2a}\) et \(\beta = f(\alpha)\).
<ul>
<li>Si \(a \gt 0\) : \(f\) est décroissante sur \(]-\infty ; \alpha]\) puis croissante sur \([\alpha ; +\infty[\). Elle admet un <b>minimum</b> \(\beta\) atteint en \(\alpha\).</li>
<li>Si \(a \lt 0\) : \(f\) est croissante sur \(]-\infty ; \alpha]\) puis décroissante sur \([\alpha ; +\infty[\). Elle admet un <b>maximum</b> \(\beta\) atteint en \(\alpha\).</li>
</ul></div>
<div class="prop"><b>Représentation graphique.</b> La courbe de \(f\) est une <b>parabole</b> :
<ul>
<li>de <b>sommet</b> \(S(\alpha ; \beta)\) ;</li>
<li>d'<b>axe de symétrie</b> la droite d'équation \(x = \alpha\) ;</li>
<li>« tournée vers le haut » (∪) si \(a \gt 0\), « vers le bas » (∩) si \(a \lt 0\).</li>
</ul>
Les racines (si elles existent) sont les abscisses des points d'intersection avec l'axe des abscisses ; elles sont symétriques par rapport à \(\alpha\) : \(\alpha = \frac{x_1 + x_2}{2}\).</div>
<div class="ex"><b>Exemple.</b> \(f(x) = 2x^2 - 8x + 3\) : \(a = 2 \gt 0\), \(\alpha = 2\), \(\beta = -5\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-5\)</td><td>↗</td><td></td></tr>
</table>
Sommet \(S(2 ; -5)\), axe de symétrie \(x = 2\), minimum \(-5\).</div>
<div class="prop"><b>Courbe de \(x \mapsto f(x - m)\).</b> La courbe de la fonction \(g : x \mapsto f(x - m)\) s'obtient à partir de celle de \(f\) par la <b>translation de \(m\) unités horizontalement</b> (vers la droite si \(m \gt 0\), vers la gauche si \(m \lt 0\)).</div>
<div class="ex"><b>Exemple.</b> La parabole de \(x \mapsto (x - 3)^2\) est celle de \(x \mapsto x^2\) décalée de 3 unités <b>vers la droite</b> : son sommet est \((3 ; 0)\). Plus généralement, la courbe de \(x \mapsto a(x - \alpha)^2 + \beta\) est celle de \(x \mapsto ax^2\) translatée de \(\alpha\) horizontalement et de \(\beta\) verticalement.</div>
<div class="warn"><b>Piège.</b> \(f(x - 3)\) décale vers la <b>droite</b> (et non vers la gauche) : le sommet de \((x - 3)^2\) est en \(x = 3\), là où la parenthèse s'annule.</div>
` },
    { titre: "4. Signe, factorisation, inéquations, somme et produit", html: R`
<div class="prop"><b>Factorisation.</b> Soit \(f(x) = ax^2 + bx + c\) de discriminant \(\Delta\).
<ul>
<li>Si \(\Delta \gt 0\) : \(f(x) = a(x - x_1)(x - x_2)\).</li>
<li>Si \(\Delta = 0\) : \(f(x) = a(x - x_0)^2\).</li>
<li>Si \(\Delta \lt 0\) : \(f(x)\) ne se factorise pas (en produit de facteurs du premier degré).</li>
</ul></div>
<div class="prop"><b>Signe d'un trinôme.</b>
<ul>
<li>Si \(\Delta \gt 0\) : \(f(x)\) est du signe de \(a\) <b>à l'extérieur</b> des racines, du signe contraire <b>entre</b> les racines.</li>
<li>Si \(\Delta = 0\) : \(f(x)\) est du signe de \(a\) et s'annule en \(x_0\).</li>
<li>Si \(\Delta \lt 0\) : \(f(x)\) est toujours <b>strictement du signe de \(a\)</b>.</li>
</ul></div>
<div class="ex"><b>Exemple résolu : inéquation.</b> Résoudre \(2x^2 - x - 1 \gt 0\).<br>
\(\Delta = (-1)^2 - 4 \times 2 \times (-1) = 1 + 8 = 9\), \(\sqrt\Delta = 3\). Racines : \(x_1 = \frac{1 - 3}{4} = -\frac12\) et \(x_2 = \frac{1 + 3}{4} = 1\).<br>
\(a = 2 \gt 0\) : le trinôme est positif à l'extérieur des racines.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-\frac12\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(2x^2 - x - 1\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
</table>
\(\mathcal{S} = \left]-\infty ; -\frac12\right[ \cup \left]1 ; +\infty\right[\).</div>
<div class="prop"><b>Somme et produit des racines.</b> Si \(ax^2 + bx + c\) a deux racines \(x_1\) et \(x_2\), alors
\[x_1 + x_2 = -\frac{b}{a} \qquad \text{et} \qquad x_1 x_2 = \frac{c}{a}.\]
<i>Preuve :</i> en développant \(a(x - x_1)(x - x_2) = ax^2 - a(x_1 + x_2)x + a x_1 x_2\) et en identifiant avec \(ax^2 + bx + c\).</div>
<div class="ex"><b>Exemple : racine évidente.</b> \(x^2 + 2x - 3\) : \(1 + 2 - 3 = 0\), donc \(1\) est racine. Le produit des racines vaut \(\frac ca = -3\), donc l'autre racine est \(-3\). D'où \(x^2 + 2x - 3 = (x - 1)(x + 3)\).<br>
<b>Réciproquement</b>, deux nombres de somme \(S\) et de produit \(P\) sont les solutions de \(x^2 - Sx + P = 0\).</div>
<div class="astuce"><b>Choisir la forme adaptée.</b>
<ul>
<li><b>Forme développée</b> \(ax^2 + bx + c\) : calculer \(f(0) = c\), dériver plus tard, identifier \(a, b, c\).</li>
<li><b>Forme canonique</b> \(a(x - \alpha)^2 + \beta\) : sommet, extremum, variations, équations du type \(f(x) = k\).</li>
<li><b>Forme factorisée</b> \(a(x - x_1)(x - x_2)\) : racines, signe, inéquations \(f(x) \geqslant 0\).</li>
</ul></div>
<div class="warn"><b>Piège.</b> Dans une inéquation, ne divise jamais par une expression contenant \(x\) et ne « simplifie » pas \(x^2 \gt 4\) en \(x \gt 2\) : il faut étudier le signe de \(x^2 - 4 = (x - 2)(x + 2)\), ce qui donne \(x \lt -2\) ou \(x \gt 2\).</div>
` }
  ],

  quiz: [
    { q: R`Que vaut le discriminant de \(2x^2 - 3x + 5\) ?`, choix: [R`\(-31\)`, R`\(49\)`, R`\(-11\)`, R`\(31\)`], bonne: 0, explication: R`\(\Delta = b^2 - 4ac = (-3)^2 - 4 \times 2 \times 5 = 9 - 40 = -31\).` },
    { q: R`Quel est le sommet de la parabole d'équation \(y = 3(x - 2)^2 + 5\) ?`, choix: [R`\((-2 ; 5)\)`, R`\((2 ; 5)\)`, R`\((3 ; 5)\)`, R`\((2 ; -5)\)`], bonne: 1, explication: R`Sous la forme canonique \(a(x - \alpha)^2 + \beta\), le sommet est \((\alpha ; \beta) = (2 ; 5)\).` },
    { q: R`Combien de solutions réelles a l'équation \(x^2 + x + 1 = 0\) ?`, choix: [R`0`, R`1`, R`2`, R`une infinité`], bonne: 0, explication: R`\(\Delta = 1 - 4 = -3 \lt 0\) : aucune solution réelle.` },
    { q: R`Une forme factorisée de \(x^2 - 5x + 6\) est :`, choix: [R`\((x + 2)(x + 3)\)`, R`\((x - 1)(x - 6)\)`, R`\((x - 2)(x - 3)\)`, R`\((x + 1)(x - 6)\)`], bonne: 2, explication: R`2 et 3 ont pour somme 5 et pour produit 6 : ce sont les racines. Vérification : \((x - 2)(x - 3) = x^2 - 5x + 6\).` },
    { q: R`Sur quel ensemble \(-(x - 1)(x - 4)\) est-il strictement positif ?`, choix: [R`\(]-\infty ; 1[ \cup ]4 ; +\infty[\)`, R`\(]1 ; 4[\)`, R`\(]-4 ; -1[\)`, R`\(\mathbb{R}\)`], bonne: 1, explication: R`\(a = -1 \lt 0\) : le trinôme est du signe de \(a\) (négatif) à l'extérieur des racines et positif <b>entre</b> 1 et 4.` },
    { q: R`Quelle est la somme des racines de \(2x^2 - 6x + 1\) ?`, choix: [R`\(-3\)`, R`\(\frac12\)`, R`\(6\)`, R`\(3\)`], bonne: 3, explication: R`\(\Delta = 36 - 8 = 28 \gt 0\), il y a bien deux racines, et \(x_1 + x_2 = -\frac ba = -\frac{-6}{2} = 3\).` },
    { q: R`La courbe de \(x \mapsto (x + 4)^2\) s'obtient à partir de celle de \(x \mapsto x^2\) par une translation de 4 unités…`, choix: [R`vers la droite`, R`vers la gauche`, R`vers le haut`, R`vers le bas`], bonne: 1, explication: R`\((x + 4)^2 = (x - (-4))^2\) : c'est \(f(x - m)\) avec \(m = -4\), donc un décalage vers la gauche. Le sommet est \((-4 ; 0)\).` },
    { q: R`La fonction \(f(x) = -x^2 + 6x - 5\) admet :`, choix: [R`un minimum égal à \(-5\)`, R`un maximum égal à \(3\)`, R`un maximum égal à \(4\)`, R`un minimum égal à \(4\)`], bonne: 2, explication: R`\(a = -1 \lt 0\) donc maximum, atteint en \(\alpha = -\frac{6}{-2} = 3\) : \(f(3) = -9 + 18 - 5 = 4\).` }
  ],

  exercices: [
    { niveau: 1, titre: "Résoudre avec le discriminant", enonce: R`
<p>Résous dans \(\mathbb{R}\) les équations suivantes.</p>
<ol type="a"><li>\(2x^2 - 3x - 2 = 0\)</li>
<li>\(x^2 - 6x + 9 = 0\)</li>
<li>\(3x^2 + x + 1 = 0\)</li>
<li>\(-x^2 + 4x + 5 = 0\)</li></ol>`,
      indice: R`Identifie bien \(a\), \(b\) et \(c\) avec leurs signes, calcule \(\Delta = b^2 - 4ac\), puis applique la formule qui correspond au signe de \(\Delta\).`,
      correction: R`
<ol type="a"><li>\(a = 2\), \(b = -3\), \(c = -2\). \(\Delta = (-3)^2 - 4 \times 2 \times (-2) = 9 + 16 = 25 \gt 0\), \(\sqrt\Delta = 5\).<br>
\(x_1 = \frac{3 - 5}{4} = -\frac12\) et \(x_2 = \frac{3 + 5}{4} = 2\). \(\mathcal{S} = \left\{-\frac12 ; 2\right\}\).</li>
<li>\(\Delta = 36 - 36 = 0\) : une seule solution \(x_0 = -\frac{-6}{2} = 3\). \(\mathcal{S} = \{3\}\). (On reconnaît aussi \((x - 3)^2 = 0\).)</li>
<li>\(\Delta = 1 - 4 \times 3 \times 1 = -11 \lt 0\) : pas de solution. \(\mathcal{S} = \varnothing\).</li>
<li>\(a = -1\), \(b = 4\), \(c = 5\). \(\Delta = 16 + 20 = 36\), \(\sqrt\Delta = 6\).<br>
\(x_1 = \frac{-4 - 6}{-2} = 5\) et \(x_2 = \frac{-4 + 6}{-2} = -1\). \(\mathcal{S} = \{-1 ; 5\}\).<br>
Vérification : \(-25 + 20 + 5 = 0\) ✓ et \(-1 - 4 + 5 = 0\) ✓.</li></ol>` },

    { niveau: 1, titre: "Lire une forme factorisée", enonce: R`
<p>Soit \(f(x) = -2(x - 1)(x + 3)\).</p>
<ol><li>Quelles sont les racines de \(f\) ?</li>
<li>Développe \(f(x)\).</li>
<li>Dresse le tableau de signes de \(f(x)\), puis résous \(f(x) \geqslant 0\).</li>
<li>Calcule \(f(0)\) de la façon la plus rapide.</li></ol>`,
      indice: R`Un produit est nul si et seulement si l'un des facteurs est nul. Pour le signe : \(a = -2\).`,
      correction: R`
<ol><li>\(f(x) = 0 \Leftrightarrow x - 1 = 0\) ou \(x + 3 = 0 \Leftrightarrow x = 1\) ou \(x = -3\). Les racines sont \(-3\) et \(1\).</li>
<li>\((x - 1)(x + 3) = x^2 + 3x - x - 3 = x^2 + 2x - 3\), donc \(f(x) = -2x^2 - 4x + 6\).</li>
<li>\(a = -2 \lt 0\) : \(f(x)\) est négatif à l'extérieur des racines et positif entre elles.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-3\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table>
\(f(x) \geqslant 0 \Leftrightarrow x \in [-3 ; 1]\).</li>
<li>Avec la forme développée, \(f(0) = c = 6\). (Avec la forme factorisée : \(-2 \times (-1) \times 3 = 6\). ✓)</li></ol>` },

    { niveau: 1, titre: "Forme canonique et sommet", enonce: R`
<ol><li>Mets sous forme canonique \(f(x) = x^2 - 4x + 1\). Donne les coordonnées du sommet de la parabole et le sens de variation de \(f\).</li>
<li>Même question avec \(g(x) = 2x^2 + 12x + 7\).</li>
<li>Vérifie tes résultats avec la formule \(\alpha = -\frac{b}{2a}\).</li></ol>`,
      indice: R`\(x^2 - 4x\) est le début de \((x - 2)^2 = x^2 - 4x + 4\). Pour \(g\), factorise d'abord par 2 les termes en \(x\).`,
      correction: R`
<ol><li>\(x^2 - 4x = (x - 2)^2 - 4\), donc \(f(x) = (x - 2)^2 - 4 + 1 = (x - 2)^2 - 3\).<br>
Sommet \(S(2 ; -3)\). Comme \(a = 1 \gt 0\), \(f\) est décroissante sur \(]-\infty ; 2]\) et croissante sur \([2 ; +\infty[\) ; son minimum est \(-3\).</li>
<li>\(g(x) = 2(x^2 + 6x) + 7 = 2\left[(x + 3)^2 - 9\right] + 7 = 2(x + 3)^2 - 18 + 7 = 2(x + 3)^2 - 11\).<br>
Sommet \(S(-3 ; -11)\). \(a = 2 \gt 0\) : \(g\) est décroissante sur \(]-\infty ; -3]\), croissante sur \([-3 ; +\infty[\) ; minimum \(-11\).</li>
<li>Pour \(f\) : \(\alpha = -\frac{-4}{2} = 2\) et \(f(2) = 4 - 8 + 1 = -3\) ✓.<br>
Pour \(g\) : \(\alpha = -\frac{12}{4} = -3\) et \(g(-3) = 18 - 36 + 7 = -11\) ✓.</li></ol>` },

    { niveau: 1, titre: "Trouver un polynôme connaissant ses racines", enonce: R`
<ol><li>Détermine la fonction polynôme \(f\) du second degré qui s'annule en \(-1\) et en \(4\) et dont la courbe passe par le point \(A(0 ; 8)\). Donne sa forme factorisée et sa forme développée.</li>
<li>Sans calcul supplémentaire, donne l'axe de symétrie de la parabole.</li>
<li>Calcule le maximum de \(f\).</li></ol>`,
      indice: R`\(f(x) = a(x + 1)(x - 4)\), et on trouve \(a\) grâce à \(f(0) = 8\). L'axe de symétrie passe au milieu des racines.`,
      correction: R`
<ol><li>\(f\) s'annule en \(-1\) et \(4\), donc \(f(x) = a(x + 1)(x - 4)\) avec \(a \ne 0\).<br>
\(f(0) = 8 \Leftrightarrow a \times 1 \times (-4) = 8 \Leftrightarrow -4a = 8 \Leftrightarrow a = -2\).<br>
Forme factorisée : \(f(x) = -2(x + 1)(x - 4)\). Forme développée : \(f(x) = -2(x^2 - 3x - 4) = -2x^2 + 6x + 8\).</li>
<li>L'axe de symétrie passe par le milieu des racines : \(x = \frac{-1 + 4}{2} = \frac32\).</li>
<li>\(a = -2 \lt 0\), donc \(f\) admet un maximum en \(\alpha = \frac32\) :
\[f\left(\tfrac32\right) = -2\left(\tfrac32 + 1\right)\left(\tfrac32 - 4\right) = -2 \times \tfrac52 \times \left(-\tfrac52\right) = \tfrac{25}{2}.\]
Le maximum de \(f\) est \(\frac{25}{2} = 12{,}5\).</li></ol>` },

    { niveau: 2, titre: "Inéquations du second degré", enonce: R`
<p>Résous dans \(\mathbb{R}\) les inéquations suivantes.</p>
<ol type="a"><li>\(x^2 - x - 6 \leqslant 0\)</li>
<li>\(-2x^2 + 3x + 5 \gt 0\)</li>
<li>\(x^2 + 2x + 5 \gt 0\)</li>
<li>\(x^2 \lt 2x + 8\)</li></ol>`,
      indice: R`Ramène tout dans un membre, cherche les racines, puis applique « signe de \(a\) à l'extérieur des racines ».`,
      correction: R`
<ol type="a"><li>\(\Delta = 1 + 24 = 25\), racines \(\frac{1 - 5}{2} = -2\) et \(\frac{1 + 5}{2} = 3\). \(a = 1 \gt 0\) : le trinôme est négatif entre les racines. \(\mathcal{S} = [-2 ; 3]\).</li>
<li>\(\Delta = 9 + 40 = 49\), \(\sqrt\Delta = 7\). Racines \(\frac{-3 - 7}{-4} = \frac52\) et \(\frac{-3 + 7}{-4} = -1\). \(a = -2 \lt 0\) : le trinôme est positif <b>entre</b> les racines.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(\frac52\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(-2x^2 + 3x + 5\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table>
\(\mathcal{S} = \left]-1 ; \frac52\right[\).</li>
<li>\(\Delta = 4 - 20 = -16 \lt 0\) : le trinôme est toujours du signe de \(a = 1\), donc strictement positif. \(\mathcal{S} = \mathbb{R}\).</li>
<li>\(x^2 \lt 2x + 8 \Leftrightarrow x^2 - 2x - 8 \lt 0\). \(\Delta = 4 + 32 = 36\), racines \(\frac{2 - 6}{2} = -2\) et \(\frac{2 + 6}{2} = 4\). \(a \gt 0\) : négatif entre les racines. \(\mathcal{S} = ]-2 ; 4[\).</li></ol>` },

    { niveau: 2, titre: "Somme et produit des racines", enonce: R`
<ol><li>Vérifie que \(3\) est racine de \(2x^2 - 7x + 3\). Déduis-en l'autre racine sans calculer \(\Delta\), puis factorise.</li>
<li>Trouve deux nombres dont la somme vaut \(10\) et le produit \(21\).</li>
<li>Sans calculer les racines, montre que \(5x^2 + 3x - 7 = 0\) a deux solutions de signes contraires, et donne leur somme.</li></ol>`,
      indice: R`\(x_1 x_2 = \frac ca\) et \(x_1 + x_2 = -\frac ba\). Deux nombres de somme \(S\) et de produit \(P\) sont solutions de \(x^2 - Sx + P = 0\).`,
      correction: R`
<ol><li>\(2 \times 9 - 7 \times 3 + 3 = 18 - 21 + 3 = 0\) : \(3\) est bien racine.<br>
Le produit des racines vaut \(\frac ca = \frac32\), donc \(3 \times x_2 = \frac32\), soit \(x_2 = \frac12\).<br>
Vérification avec la somme : \(3 + \frac12 = \frac72 = -\frac{-7}{2}\) ✓.<br>
Factorisation : \(2x^2 - 7x + 3 = 2(x - 3)\left(x - \frac12\right) = (x - 3)(2x - 1)\).</li>
<li>Ces nombres sont les solutions de \(x^2 - 10x + 21 = 0\). \(\Delta = 100 - 84 = 16\), \(x = \frac{10 \pm 4}{2}\), donc \(3\) et \(7\). (Vérification : \(3 + 7 = 10\), \(3 \times 7 = 21\).)</li>
<li>\(\Delta = 9 + 140 = 149 \gt 0\) : il y a deux racines. Leur produit vaut \(\frac ca = -\frac75 \lt 0\) : elles sont donc de signes contraires. Leur somme vaut \(-\frac ba = -\frac35\).</li></ol>` },

    { niveau: 2, titre: "Parabole et translation", enonce: R`
<p>Soit \(f(x) = -x^2 + 6x - 5\) et \(\mathcal{C}_f\) sa courbe.</p>
<ol><li>Détermine la forme canonique de \(f\), puis dresse son tableau de variations.</li>
<li>Détermine les racines de \(f\), puis la forme factorisée.</li>
<li>On pose \(g(x) = f(x - 2)\). Comment obtient-on la courbe de \(g\) à partir de \(\mathcal{C}_f\) ? Donne le sommet de la courbe de \(g\) et ses racines.</li>
<li>Développe \(g(x)\) et vérifie tes résultats.</li></ol>`,
      indice: R`\(\alpha = -\frac{b}{2a}\). Pour \(g\) : la courbe est décalée de 2 vers la droite, donc tout ce qui concerne les abscisses augmente de 2.`,
      correction: R`
<ol><li>\(\alpha = -\frac{6}{-2} = 3\) et \(\beta = f(3) = -9 + 18 - 5 = 4\). Donc \(f(x) = -(x - 3)^2 + 4\).<br>
\(a = -1 \lt 0\) :
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↗</td><td>\(4\)</td><td>↘</td><td></td></tr>
</table></li>
<li>\(f(x) = 0 \Leftrightarrow (x - 3)^2 = 4 \Leftrightarrow x - 3 = 2\) ou \(x - 3 = -2 \Leftrightarrow x = 5\) ou \(x = 1\). Donc \(f(x) = -(x - 1)(x - 5)\).</li>
<li>La courbe de \(g : x \mapsto f(x - 2)\) est l'image de \(\mathcal{C}_f\) par la translation de 2 unités vers la droite. Son sommet est \((3 + 2 ; 4) = (5 ; 4)\) et ses racines sont \(1 + 2 = 3\) et \(5 + 2 = 7\).</li>
<li>\(g(x) = -(x - 2)^2 + 6(x - 2) - 5 = -(x^2 - 4x + 4) + 6x - 12 - 5 = -x^2 + 10x - 21\).<br>
Vérifications : \(\alpha = -\frac{10}{-2} = 5\), \(g(5) = -25 + 50 - 21 = 4\) ✓ ; \(g(3) = -9 + 30 - 21 = 0\) ✓ ; \(g(7) = -49 + 70 - 21 = 0\) ✓.</li></ol>` },

    { niveau: 2, titre: "Équation bicarrée et intersection", enonce: R`
<ol><li>Résous \(x^4 - 5x^2 + 4 = 0\) en posant \(X = x^2\).</li>
<li>On considère la parabole \(\mathcal{P}\) d'équation \(y = x^2 - 3x + 1\) et la droite \(d\) d'équation \(y = x - 2\).
<ol type="a"><li>Détermine les coordonnées des points d'intersection de \(\mathcal{P}\) et \(d\).</li>
<li>Étudie la position relative de \(\mathcal{P}\) et \(d\).</li></ol></li></ol>`,
      indice: R`Les points d'intersection vérifient \(x^2 - 3x + 1 = x - 2\). Pour la position relative, étudie le signe de la différence \(x^2 - 3x + 1 - (x - 2)\).`,
      correction: R`
<ol><li>Avec \(X = x^2\), l'équation devient \(X^2 - 5X + 4 = 0\). \(\Delta = 25 - 16 = 9\), \(X = \frac{5 \pm 3}{2}\), donc \(X = 1\) ou \(X = 4\).<br>
\(x^2 = 1 \Leftrightarrow x = 1\) ou \(x = -1\) ; \(x^2 = 4 \Leftrightarrow x = 2\) ou \(x = -2\). \(\mathcal{S} = \{-2 ; -1 ; 1 ; 2\}\).</li>
<li><ol type="a"><li>\(x^2 - 3x + 1 = x - 2 \Leftrightarrow x^2 - 4x + 3 = 0\). \(\Delta = 16 - 12 = 4\), \(x = \frac{4 \pm 2}{2}\), donc \(x = 1\) ou \(x = 3\).<br>
Pour \(x = 1\) : \(y = 1 - 2 = -1\). Pour \(x = 3\) : \(y = 3 - 2 = 1\). Les points d'intersection sont \(A(1 ; -1)\) et \(B(3 ; 1)\).</li>
<li>On étudie le signe de \(D(x) = x^2 - 4x + 3 = (x - 1)(x - 3)\) ; \(a = 1 \gt 0\), donc \(D(x) \gt 0\) à l'extérieur de \([1 ; 3]\) et \(D(x) \lt 0\) sur \(]1 ; 3[\).<br>
Conclusion : \(\mathcal{P}\) est <b>au-dessus</b> de \(d\) sur \(]-\infty ; 1[\) et sur \(]3 ; +\infty[\), et <b>en dessous</b> sur \(]1 ; 3[\).</li></ol></li></ol>` },

    { niveau: 3, titre: "Équations avec paramètre", enonce: R`
<p>\(m\) désigne un nombre réel.</p>
<ol><li>Pour quelles valeurs de \(m\) l'équation \(x^2 + mx + 4 = 0\) admet-elle une unique solution ? Donne cette solution dans chaque cas.</li>
<li>Pour quelles valeurs de \(m\) admet-elle deux solutions distinctes ?</li>
<li>Pour quelles valeurs de \(m\) a-t-on \(x^2 + mx + m + 3 \gt 0\) pour <b>tout</b> réel \(x\) ?</li></ol>`,
      indice: R`Le discriminant dépend de \(m\) : c'est lui qui décide du nombre de solutions. Pour la question 3, le trinôme (avec \(a = 1 \gt 0\)) est toujours strictement positif si et seulement si \(\Delta \lt 0\).`,
      correction: R`
<ol><li>\(\Delta = m^2 - 16\). Unique solution \(\Leftrightarrow \Delta = 0 \Leftrightarrow m^2 = 16 \Leftrightarrow m = 4\) ou \(m = -4\).
<ul><li>Si \(m = 4\) : \(x^2 + 4x + 4 = (x + 2)^2\), solution \(x = -2\).</li>
<li>Si \(m = -4\) : \(x^2 - 4x + 4 = (x - 2)^2\), solution \(x = 2\).</li></ul></li>
<li>Deux solutions \(\Leftrightarrow m^2 - 16 \gt 0 \Leftrightarrow (m - 4)(m + 4) \gt 0\). Ce trinôme en \(m\) (coefficient \(1 \gt 0\)) est positif à l'extérieur des racines \(-4\) et \(4\) : \(m \in \,]-\infty ; -4[ \cup ]4 ; +\infty[\).</li>
<li>Le coefficient de \(x^2\) vaut \(1 \gt 0\). Le trinôme est strictement positif pour tout \(x\) si et seulement si \(\Delta \lt 0\) (si \(\Delta \geqslant 0\), il s'annule au moins une fois).<br>
\(\Delta = m^2 - 4(m + 3) = m^2 - 4m - 12\). Ce trinôme en \(m\) a pour discriminant \(16 + 48 = 64\) et pour racines \(\frac{4 - 8}{2} = -2\) et \(\frac{4 + 8}{2} = 6\). Il est négatif entre ses racines.<br>
Conclusion : \(x^2 + mx + m + 3 \gt 0\) pour tout \(x\) \(\Leftrightarrow m \in \,]-2 ; 6[\).</li></ol>` },

    { niveau: 3, titre: "L'enclos du jardin", enonce: R`
<p>Lina veut construire un enclos rectangulaire pour ses poules contre le mur du jardin. Elle dispose de \(40\) m de grillage pour les trois autres côtés. On note \(x\) la longueur (en m) des deux côtés perpendiculaires au mur.</p>
<ol><li>Montre que le côté parallèle au mur mesure \(40 - 2x\) et que \(x \in \,]0 ; 20[\).</li>
<li>Montre que l'aire de l'enclos est \(A(x) = -2x^2 + 40x\), puis que \(A(x) = -2(x - 10)^2 + 200\).</li>
<li>Quelles dimensions donnent une aire maximale ? Quelle est cette aire ?</li>
<li>Pour quelles valeurs de \(x\) l'aire est-elle au moins égale à \(150\) m² ?</li></ol>`,
      indice: R`Le grillage couvre deux côtés de longueur \(x\) et un côté parallèle au mur. Pour la question 4, résous \(A(x) \geqslant 150\) et n'oublie pas l'intervalle de \(x\).`,
      correction: R`
<ol><li>Les trois côtés grillagés mesurent \(x\), \(x\) et \(L\), avec \(x + x + L = 40\), donc \(L = 40 - 2x\). Les longueurs doivent être strictement positives : \(x \gt 0\) et \(40 - 2x \gt 0 \Leftrightarrow x \lt 20\). Donc \(x \in \,]0 ; 20[\).</li>
<li>\(A(x) = x(40 - 2x) = -2x^2 + 40x\). De plus \(-2(x - 10)^2 + 200 = -2(x^2 - 20x + 100) + 200 = -2x^2 + 40x - 200 + 200 = -2x^2 + 40x\) ✓.</li>
<li>Avec la forme canonique : \((x - 10)^2 \geqslant 0\) donc \(A(x) \leqslant 200\), avec égalité pour \(x = 10\). L'aire maximale est \(200\) m², obtenue avec deux côtés de \(10\) m et un côté de \(40 - 20 = 20\) m le long du mur.</li>
<li>\(A(x) \geqslant 150 \Leftrightarrow -2x^2 + 40x - 150 \geqslant 0 \Leftrightarrow x^2 - 20x + 75 \leqslant 0\) (on divise par \(-2 \lt 0\) : le sens change).<br>
\(\Delta = 400 - 300 = 100\), racines \(\frac{20 - 10}{2} = 5\) et \(\frac{20 + 10}{2} = 15\). Le trinôme (\(a = 1 \gt 0\)) est négatif entre les racines : \(x \in [5 ; 15]\), qui est bien inclus dans \(]0 ; 20[\).<br>
L'aire est d'au moins 150 m² pour \(x\) compris entre 5 m et 15 m.</li></ol>` },

    { niveau: 3, titre: "Le lancer franc : choisir la bonne forme", enonce: R`
<p>Un ballon est lancé depuis le haut d'un muret. Sa hauteur (en m) en fonction du temps \(t\) (en s, \(t \geqslant 0\)) est donnée par \(h(t) = -5t^2 + 10t + 15\).</p>
<ol><li>Montre que pour tout \(t\) : \(h(t) = -5(t - 1)^2 + 20\) et \(h(t) = -5(t + 1)(t - 3)\).</li>
<li>En choisissant à chaque fois la forme la plus adaptée, réponds aux questions suivantes.
<ol type="a"><li>De quelle hauteur le ballon est-il lancé ?</li>
<li>Quelle hauteur maximale atteint-il, et à quel instant ?</li>
<li>À quel instant touche-t-il le sol ?</li>
<li>Pendant combien de temps est-il au-dessus de sa hauteur de départ ?</li>
<li>À quels instants est-il à \(18{,}75\) m de haut ?</li></ol></li></ol>`,
      indice: R`Développée pour \(h(0)\), canonique pour le maximum et pour \(h(t) = 18{,}75\), factorisée pour \(h(t) = 0\).`,
      correction: R`
<ol><li>\(-5(t - 1)^2 + 20 = -5(t^2 - 2t + 1) + 20 = -5t^2 + 10t + 15\) ✓.<br>
\(-5(t + 1)(t - 3) = -5(t^2 - 3t + t - 3) = -5(t^2 - 2t - 3) = -5t^2 + 10t + 15\) ✓.</li>
<li><ol type="a"><li><b>Forme développée</b> : \(h(0) = 15\). Le ballon est lancé à 15 m de haut.</li>
<li><b>Forme canonique</b> : \(-5(t - 1)^2 \leqslant 0\), donc \(h(t) \leqslant 20\) avec égalité pour \(t = 1\). Hauteur maximale : 20 m, atteinte au bout d'1 s.</li>
<li><b>Forme factorisée</b> : \(h(t) = 0 \Leftrightarrow t = -1\) ou \(t = 3\). Comme \(t \geqslant 0\), le ballon touche le sol au bout de 3 s.</li>
<li>\(h(t) \geqslant 15 \Leftrightarrow -5t^2 + 10t \geqslant 0 \Leftrightarrow 5t(2 - t) \geqslant 0\). Pour \(t \geqslant 0\), c'est vrai si et seulement si \(2 - t \geqslant 0\), soit \(t \in [0 ; 2]\). Le ballon est au-dessus de sa hauteur de départ pendant 2 s.</li>
<li><b>Forme canonique</b> : \(h(t) = 18{,}75 \Leftrightarrow -5(t - 1)^2 = -1{,}25 \Leftrightarrow (t - 1)^2 = 0{,}25 \Leftrightarrow t - 1 = 0{,}5\) ou \(t - 1 = -0{,}5\). Donc \(t = 1{,}5\) s ou \(t = 0{,}5\) s (à la montée puis à la descente).</li></ol></li></ol>` },

    { niveau: 3, titre: "Bénéfice d'une entreprise (type bac)", enonce: R`
<p>Une entreprise produit chaque jour \(q\) tonnes d'un produit, avec \(q \in [0 ; 60]\). Le coût de production est \(C(q) = q^2 + 10q + 500\) et la recette est \(R(q) = 70q\), en centaines d'euros.</p>
<ol><li>Montre que le bénéfice est \(B(q) = -q^2 + 60q - 500\).</li>
<li>Vérifie que \(B(q) = -(q - 10)(q - 50)\).</li>
<li>Pour quelles productions l'entreprise est-elle rentable (bénéfice strictement positif) ?</li>
<li>Quelle production maximise le bénéfice ? Quel est ce bénéfice maximal, en euros ?</li>
<li>L'entreprise vise un bénéfice d'au moins \(30\,000\) €. Quelles productions le permettent ?</li></ol>`,
      indice: R`\(B = R - C\). Attention aux unités : \(300\) centaines d'euros \(= 30\,000\) €.`,
      correction: R`
<ol><li>\(B(q) = R(q) - C(q) = 70q - q^2 - 10q - 500 = -q^2 + 60q - 500\).</li>
<li>\(-(q - 10)(q - 50) = -(q^2 - 50q - 10q + 500) = -(q^2 - 60q + 500) = -q^2 + 60q - 500\) ✓.</li>
<li>\(a = -1 \lt 0\) : \(B(q)\) est positif entre les racines 10 et 50.
<table class="tv">
<tr><td>\(q\)</td><td>\(0\)</td><td></td><td>\(10\)</td><td></td><td>\(50\)</td><td></td><td>\(60\)</td></tr>
<tr><td>\(B(q)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table>
L'entreprise est rentable pour une production comprise strictement entre 10 et 50 tonnes.</li>
<li>Le maximum est atteint en \(\alpha = -\frac{60}{-2} = 30\) (au milieu des racines 10 et 50). \(B(30) = -(30 - 10)(30 - 50) = -20 \times (-20) = 400\). Le bénéfice maximal est de 400 centaines d'euros, soit <b>40 000 €</b>, pour 30 tonnes.</li>
<li>\(30\,000\) € \(= 300\) centaines d'euros. \(B(q) \geqslant 300 \Leftrightarrow -q^2 + 60q - 800 \geqslant 0 \Leftrightarrow q^2 - 60q + 800 \leqslant 0\).<br>
\(\Delta = 3600 - 3200 = 400\), racines \(\frac{60 - 20}{2} = 20\) et \(\frac{60 + 20}{2} = 40\). Le trinôme est négatif entre ses racines : \(q \in [20 ; 40]\).<br>
Il faut produire entre 20 et 40 tonnes par jour. (Vérification : \(B(20) = -400 + 1200 - 500 = 300\) ✓.)</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Équations, formes et problèmes", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Équations", points: 6, enonce: R`
<p>Résous dans \(\mathbb{R}\) :</p>
<ol type="a"><li>\(x^2 - 5x + 6 = 0\)</li>
<li>\(4x^2 - 4x + 1 = 0\)</li>
<li>\(2x^2 + x + 3 = 0\)</li>
<li>\(x(x - 3) = 2x - 6\)</li></ol>`,
          correction: R`
<ol type="a"><li>\(\Delta = 25 - 24 = 1\), \(x = \frac{5 \pm 1}{2}\) : \(\mathcal{S} = \{2 ; 3\}\). <i>(1,5 point)</i></li>
<li>\(\Delta = 16 - 16 = 0\) : une solution \(x_0 = -\frac{-4}{8} = \frac12\). \(\mathcal{S} = \left\{\frac12\right\}\). (On reconnaît \((2x - 1)^2 = 0\).) <i>(1,5 point)</i></li>
<li>\(\Delta = 1 - 24 = -23 \lt 0\) : \(\mathcal{S} = \varnothing\). <i>(1,5 point)</i></li>
<li>\(x(x - 3) = 2(x - 3) \Leftrightarrow x(x - 3) - 2(x - 3) = 0 \Leftrightarrow (x - 3)(x - 2) = 0\). \(\mathcal{S} = \{2 ; 3\}\). (On peut aussi développer : \(x^2 - 5x + 6 = 0\), on retrouve le a.) <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 2 — Étude complète d'un trinôme", points: 5, enonce: R`
<p>Soit \(f(x) = 2x^2 - 8x + 6\).</p>
<ol><li>Détermine la forme canonique de \(f\).</li>
<li>Dresse le tableau de variations de \(f\) et donne les coordonnées du sommet de sa courbe.</li>
<li>Détermine la forme factorisée de \(f\).</li>
<li>Résous \(f(x) \leqslant 0\).</li></ol>`,
          correction: R`
<ol><li>\(f(x) = 2(x^2 - 4x) + 6 = 2\left[(x - 2)^2 - 4\right] + 6 = 2(x - 2)^2 - 2\). <i>(1,5 point)</i></li>
<li>\(a = 2 \gt 0\), \(\alpha = 2\), \(\beta = -2\). <i>(1 point)</i>
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-2\)</td><td>↗</td><td></td></tr>
</table>
Sommet \(S(2 ; -2)\).</li>
<li>\(f(x) = 0 \Leftrightarrow (x - 2)^2 = 1 \Leftrightarrow x = 3\) ou \(x = 1\) (ou avec \(\Delta = 64 - 48 = 16\)). Donc \(f(x) = 2(x - 1)(x - 3)\). <i>(1,5 point)</i></li>
<li>\(a \gt 0\) : \(f(x)\) est négatif ou nul entre les racines. \(\mathcal{S} = [1 ; 3]\). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Retrouver un polynôme", points: 4, enonce: R`
<p>On cherche la fonction polynôme \(f\) du second degré qui s'annule en \(-2\) et en \(3\), et telle que \(f(1) = 12\).</p>
<ol><li>Détermine \(f(x)\) sous forme factorisée puis développée.</li>
<li>Détermine le maximum de \(f\).</li></ol>`,
          correction: R`
<ol><li>\(f(x) = a(x + 2)(x - 3)\). \(f(1) = a \times 3 \times (-2) = -6a = 12\), donc \(a = -2\). <i>(1,5 point)</i><br>
\(f(x) = -2(x + 2)(x - 3) = -2(x^2 - x - 6) = -2x^2 + 2x + 12\). <i>(1 point)</i></li>
<li>\(a = -2 \lt 0\) : maximum atteint en \(\alpha = \frac{-2 + 3}{2} = \frac12\) (milieu des racines).
\(f\left(\frac12\right) = -2 \times \frac52 \times \left(-\frac52\right) = \frac{25}{2}\). Le maximum de \(f\) est \(\frac{25}{2} = 12{,}5\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 4 — Le rectangle", points: 5, enonce: R`
<p>Un rectangle a un périmètre de \(34\) cm. On note \(x\) la longueur d'un de ses côtés (en cm), avec \(0 \lt x \lt 17\).</p>
<ol><li>Exprime l'autre côté en fonction de \(x\), puis montre que l'aire est \(A(x) = -x^2 + 17x\).</li>
<li>Pour quelles valeurs de \(x\) l'aire vaut-elle \(60\) cm² ? Quelles sont alors les dimensions du rectangle ?</li>
<li>Quelle est l'aire maximale possible ? Quelle est alors la nature du rectangle ?</li>
<li>Pour quelles valeurs de \(x\) l'aire est-elle supérieure ou égale à \(60\) cm² ?</li></ol>`,
          correction: R`
<ol><li>Le demi-périmètre vaut \(17\), donc l'autre côté mesure \(17 - x\) et \(A(x) = x(17 - x) = -x^2 + 17x\). <i>(1 point)</i></li>
<li>\(A(x) = 60 \Leftrightarrow x^2 - 17x + 60 = 0\). \(\Delta = 289 - 240 = 49\), \(x = \frac{17 \pm 7}{2}\), soit \(x = 5\) ou \(x = 12\). Dans les deux cas, le rectangle mesure \(5\) cm sur \(12\) cm (vérification : \(2(5 + 12) = 34\) et \(5 \times 12 = 60\)). <i>(1,5 point)</i></li>
<li>\(a = -1 \lt 0\) : maximum en \(\alpha = \frac{17}{2} = 8{,}5\). \(A(8{,}5) = 8{,}5 \times 8{,}5 = 72{,}25\) cm². Les deux côtés valent \(8{,}5\) cm : c'est un <b>carré</b>. <i>(1,5 point)</i></li>
<li>\(A(x) \geqslant 60 \Leftrightarrow x^2 - 17x + 60 \leqslant 0\), trinôme de racines 5 et 12 et de coefficient \(1 \gt 0\), négatif entre ses racines : \(x \in [5 ; 12]\). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°2 — Signe, somme-produit et optimisation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Inéquations", points: 5, enonce: R`
<p>Résous dans \(\mathbb{R}\) :</p>
<ol type="a"><li>\(-x^2 + x + 6 \geqslant 0\)</li>
<li>\(3x^2 - 2x + 1 \gt 0\)</li>
<li>\(x^2 \lt 2x + 8\)</li></ol>`,
          correction: R`
<ol type="a"><li>\(\Delta = 1 + 24 = 25\), racines \(\frac{-1 - 5}{-2} = 3\) et \(\frac{-1 + 5}{-2} = -2\). \(a = -1 \lt 0\) : positif entre les racines. \(\mathcal{S} = [-2 ; 3]\). <i>(2 points : 1 pour les racines, 1 pour le signe et la conclusion)</i></li>
<li>\(\Delta = 4 - 12 = -8 \lt 0\) : le trinôme est toujours du signe de \(a = 3 \gt 0\). \(\mathcal{S} = \mathbb{R}\). <i>(1 point)</i></li>
<li>\(x^2 - 2x - 8 \lt 0\). \(\Delta = 4 + 32 = 36\), racines \(\frac{2 - 6}{2} = -2\) et \(\frac{2 + 6}{2} = 4\). \(a \gt 0\) : négatif entre les racines. \(\mathcal{S} = ]-2 ; 4[\). <i>(2 points)</i></li></ol>` },
        { titre: "Exercice 2 — Somme et produit", points: 5, enonce: R`
<ol><li>Vérifie que \(-2\) est racine de \(3x^2 + 5x - 2\), puis déduis-en l'autre racine à l'aide du produit des racines.</li>
<li>Vérifie ton résultat avec la somme des racines, puis factorise \(3x^2 + 5x - 2\).</li>
<li>Trouve deux nombres dont la somme vaut \(7\) et le produit \(12\).</li>
<li>Pour quelle valeur de \(m\) l'équation \(x^2 - 2x + m = 0\) a-t-elle une racine double ? Quelle est cette racine ?</li></ol>`,
          correction: R`
<ol><li>\(3 \times 4 + 5 \times (-2) - 2 = 12 - 10 - 2 = 0\) ✓. Produit : \(x_1 x_2 = \frac ca = -\frac23\), donc \(x_2 = \frac{-2/3}{-2} = \frac13\). <i>(1,5 point)</i></li>
<li>Somme : \(-2 + \frac13 = -\frac53 = -\frac ba\) ✓. Donc \(3x^2 + 5x - 2 = 3(x + 2)\left(x - \frac13\right) = (x + 2)(3x - 1)\). <i>(1 point)</i></li>
<li>Solutions de \(x^2 - 7x + 12 = 0\) : \(\Delta = 49 - 48 = 1\), \(x = \frac{7 \pm 1}{2}\), soit \(3\) et \(4\). <i>(1,5 point)</i></li>
<li>Racine double \(\Leftrightarrow \Delta = 4 - 4m = 0 \Leftrightarrow m = 1\). La racine est \(x_0 = -\frac{-2}{2} = 1\) (car \(x^2 - 2x + 1 = (x - 1)^2\)). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Parabole, translation et position relative", points: 5, enonce: R`
<p>Soit \(f(x) = x^2 - 2x - 3\) et \(\mathcal{C}_f\) sa courbe.</p>
<ol><li>Donne la forme canonique de \(f\), le sommet de \(\mathcal{C}_f\) et les racines de \(f\).</li>
<li>On pose \(g(x) = f(x + 3)\). Par quelle transformation obtient-on la courbe de \(g\) ? Donne son sommet, puis exprime \(g(x)\) sous forme développée.</li>
<li>Étudie la position relative de \(\mathcal{C}_f\) et de la droite \(d\) d'équation \(y = x + 1\), et donne les coordonnées de leurs points d'intersection.</li></ol>`,
          correction: R`
<ol><li>\(f(x) = (x - 1)^2 - 1 - 3 = (x - 1)^2 - 4\). Sommet \(S(1 ; -4)\). \(f(x) = 0 \Leftrightarrow (x - 1)^2 = 4 \Leftrightarrow x - 1 = \pm 2 \Leftrightarrow x = 3\) ou \(x = -1\). <i>(1,5 point)</i></li>
<li>\(g(x) = f(x - (-3))\) : translation de 3 unités <b>vers la gauche</b>. Sommet \((1 - 3 ; -4) = (-2 ; -4)\). \(g(x) = (x + 3 - 1)^2 - 4 = (x + 2)^2 - 4 = x^2 + 4x\). <i>(1,5 point)</i></li>
<li>\(f(x) - (x + 1) = x^2 - 3x - 4\). \(\Delta = 9 + 16 = 25\), racines \(\frac{3 - 5}{2} = -1\) et \(\frac{3 + 5}{2} = 4\), donc \(f(x) - (x + 1) = (x + 1)(x - 4)\).<br>
Positive à l'extérieur de \([-1 ; 4]\), négative sur \(]-1 ; 4[\) : \(\mathcal{C}_f\) est au-dessus de \(d\) sur \(]-\infty ; -1[\) et \(]4 ; +\infty[\), en dessous sur \(]-1 ; 4[\).<br>
Points d'intersection : \((-1 ; 0)\) et \((4 ; 5)\) (vérification : \(f(4) = 16 - 8 - 3 = 5\) ✓). <i>(2 points)</i></li></ol>` },
        { titre: "Exercice 4 — Le prix du cinéma", points: 5, enonce: R`
<p>Un cinéma vend ses places 8 € et accueille 300 spectateurs par séance. Une étude montre que chaque baisse de 0,50 € du prix attire 30 spectateurs de plus. On note \(x\) le nombre de baisses de 0,50 € (\(0 \leqslant x \leqslant 16\)).</p>
<ol><li>Exprime le prix d'une place et le nombre de spectateurs en fonction de \(x\).</li>
<li>Montre que la recette est \(R(x) = -15x^2 + 90x + 2400\).</li>
<li>Quel prix faut-il fixer pour avoir une recette maximale ? Combien y a-t-il alors de spectateurs, et quelle est la recette ?</li>
<li>Pour quelles valeurs de \(x\) la recette est-elle au moins égale à la recette actuelle ?</li></ol>`,
          correction: R`
<ol><li>Prix : \(8 - 0{,}5x\) (en €). Spectateurs : \(300 + 30x\). <i>(1 point)</i></li>
<li>\(R(x) = (8 - 0{,}5x)(300 + 30x) = 2400 + 240x - 150x - 15x^2 = -15x^2 + 90x + 2400\). <i>(1 point)</i></li>
<li>\(a = -15 \lt 0\) : maximum en \(\alpha = -\frac{90}{-30} = 3\). Prix : \(8 - 1{,}5 = 6{,}50\) € ; spectateurs : \(300 + 90 = 390\) ; recette : \(R(3) = -135 + 270 + 2400 = 2535\) € (et \(6{,}5 \times 390 = 2535\) ✓). <i>(1,5 point)</i></li>
<li>La recette actuelle est \(R(0) = 2400\) €. \(R(x) \geqslant 2400 \Leftrightarrow -15x^2 + 90x \geqslant 0 \Leftrightarrow 15x(6 - x) \geqslant 0\). Pour \(x \geqslant 0\), cela équivaut à \(6 - x \geqslant 0\), soit \(x \in [0 ; 6]\) : on peut baisser le prix jusqu'à \(8 - 3 = 5\) € sans perdre de recette. <i>(1,5 point)</i></li></ol>` }
      ] }
  ]
});
})();
