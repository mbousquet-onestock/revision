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
      ] },
    { titre: "DS n°3 — Démonstration, deux paraboles et une allée", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Démonstration de cours", points: 5, enonce: R`
<p>Soient \(a\), \(b\), \(c\) trois réels avec \(a \ne 0\), et \(\Delta = b^2 - 4ac\).</p>
<ol><li>Démontre que pour tout réel \(x\) :
\[ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right].\]</li>
<li>En déduire que si \(\Delta \lt 0\), l'équation \(ax^2 + bx + c = 0\) n'a aucune solution réelle.</li>
<li>Application : donne la forme canonique de \(3x^2 - 12x + 7\), puis justifie sans calculer \(\Delta\) que \(3x^2 - 12x + 13 = 0\) n'a pas de solution.</li></ol>`,
          correction: R`
<ol><li>Comme \(a \ne 0\), on peut factoriser par \(a\) : \(ax^2 + bx + c = a\left[x^2 + \frac ba x + \frac ca\right]\).<br>
Or \(x^2 + \frac ba x\) est le début du carré \(\left(x + \frac{b}{2a}\right)^2 = x^2 + \frac ba x + \frac{b^2}{4a^2}\), donc \(x^2 + \frac ba x = \left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\).<br>
Ainsi \(ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} + \frac{4ac}{4a^2}\right] = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a^2}\right] = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right]\). <i>(2 points)</i></li>
<li>Comme \(a \ne 0\) : \(ax^2 + bx + c = 0 \Leftrightarrow \left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}\).<br>
Si \(\Delta \lt 0\), alors \(\frac{\Delta}{4a^2} \lt 0\) (car \(4a^2 \gt 0\)), alors qu'un carré est toujours positif ou nul. L'égalité est impossible : l'équation n'a aucune solution réelle. <i>(1,5 point)</i></li>
<li>\(3x^2 - 12x + 7 = 3(x^2 - 4x) + 7 = 3\left[(x - 2)^2 - 4\right] + 7 = 3(x - 2)^2 - 5\).<br>
On en déduit \(3x^2 - 12x + 13 = 3x^2 - 12x + 7 + 6 = 3(x - 2)^2 + 1\). Comme \(3(x - 2)^2 \geqslant 0\), on a \(3x^2 - 12x + 13 \geqslant 1 \gt 0\) pour tout \(x\) : l'équation n'a pas de solution. <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 2 — Deux paraboles de même axe", points: 5, enonce: R`
<p>On considère \(f(x) = -(x + 1)(x - 3)\) et \(g(x) = 2(x - 1)^2 + 1\), de courbes \(\mathcal{C}_f\) et \(\mathcal{C}_g\).</p>
<ol><li>Donne la forme développée de \(f(x)\) et de \(g(x)\).</li>
<li>Détermine le sommet de chacune des deux paraboles. Que remarques-tu ?</li>
<li>Dresse le tableau de signes de \(f(x)\). Justifie que \(g(x) \gt 0\) pour tout réel \(x\).</li>
<li>Étudie la position relative de \(\mathcal{C}_f\) et \(\mathcal{C}_g\) et donne les coordonnées de leurs points d'intersection.</li></ol>`,
          correction: R`
<ol><li>\(f(x) = -(x^2 - 3x + x - 3) = -(x^2 - 2x - 3) = -x^2 + 2x + 3\).<br>
\(g(x) = 2(x^2 - 2x + 1) + 1 = 2x^2 - 4x + 3\). <i>(1 point)</i></li>
<li>Pour \(f\) : l'axe passe au milieu des racines \(-1\) et \(3\), donc \(\alpha = 1\) et \(f(1) = -2 \times (-2) = 4\) : sommet \((1 ; 4)\).<br>
Pour \(g\), on lit la forme canonique : sommet \((1 ; 1)\).<br>
Les deux paraboles ont le même axe de symétrie, la droite d'équation \(x = 1\). <i>(1 point)</i></li>
<li>\(a = -1 \lt 0\) : \(f(x)\) est négatif à l'extérieur des racines, positif entre elles.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table>
Pour tout \(x\), \(2(x - 1)^2 \geqslant 0\), donc \(g(x) \geqslant 1 \gt 0\). <i>(1,5 point)</i></li>
<li>\(g(x) - f(x) = 2x^2 - 4x + 3 - (-x^2 + 2x + 3) = 3x^2 - 6x = 3x(x - 2)\).<br>
Ce trinôme a pour racines \(0\) et \(2\) et pour coefficient \(3 \gt 0\) : il est positif à l'extérieur des racines, négatif entre elles.<br>
Donc \(\mathcal{C}_g\) est au-dessus de \(\mathcal{C}_f\) sur \(]-\infty ; 0[\) et sur \(]2 ; +\infty[\), en dessous sur \(]0 ; 2[\).<br>
Points d'intersection : \(f(0) = 3\) et \(f(2) = -3 \times (-1) = 3\), donc \((0 ; 3)\) et \((2 ; 3)\) (vérification : \(g(0) = 3\), \(g(2) = 2 + 1 = 3\) ✓). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 3 — Une famille d'équations", points: 5, enonce: R`
<p>Pour tout réel \(m\), on considère l'équation \((E_m) : x^2 - 6x + m = 0\).</p>
<ol><li>Pour quelles valeurs de \(m\) l'équation \((E_m)\) admet-elle deux solutions distinctes ?</li>
<li>Détermine \(m\) pour que \(2\) soit solution de \((E_m)\). Déduis-en l'autre solution sans calculer de discriminant.</li>
<li>Dans le cas où \((E_m)\) a deux solutions \(x_1\) et \(x_2\), exprime \(x_1^2 + x_2^2\) en fonction de \(m\). Pour quelle valeur de \(m\) a-t-on \(x_1^2 + x_2^2 = 26\) ? Vérifie en donnant les solutions.</li></ol>`,
          correction: R`
<ol><li>\(\Delta = (-6)^2 - 4 \times 1 \times m = 36 - 4m\). Deux solutions distinctes \(\Leftrightarrow 36 - 4m \gt 0 \Leftrightarrow m \lt 9\). <i>(1,5 point)</i></li>
<li>\(2\) est solution \(\Leftrightarrow 4 - 12 + m = 0 \Leftrightarrow m = 8\).<br>
Le produit des solutions de \(x^2 - 6x + 8 = 0\) vaut \(\frac ca = 8\), donc l'autre solution est \(\frac82 = 4\). Vérification avec la somme : \(2 + 4 = 6 = -\frac ba\) ✓. <i>(1,5 point)</i></li>
<li>On a \(x_1 + x_2 = -\frac ba = 6\) et \(x_1 x_2 = \frac ca = m\). Or \((x_1 + x_2)^2 = x_1^2 + 2x_1x_2 + x_2^2\), donc
\[x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 36 - 2m.\]
\(36 - 2m = 26 \Leftrightarrow m = 5\), et \(5 \lt 9\) : il y a bien deux solutions.<br>
Vérification : \(x^2 - 6x + 5 = 0\), \(\Delta = 36 - 20 = 16\), \(x = \frac{6 \pm 4}{2}\), soit \(1\) et \(5\) ; et \(1^2 + 5^2 = 26\) ✓. <i>(2 points : 1 pour l'expression, 1 pour \(m\) et la vérification)</i></li></ol>` },
        { titre: "Exercice 4 — L'allée autour de la pelouse", points: 5, enonce: R`
<p>Une pelouse rectangulaire mesure \(12\) m sur \(8\) m. On l'entoure d'une allée de largeur constante \(x\) (en m, \(x \gt 0\)), de sorte que la pelouse et l'allée forment un grand rectangle.</p>
<ol><li>Montre que l'aire de l'allée (en m²) est \(A(x) = 4x^2 + 40x\).</li>
<li>Étudie les variations de \(A\) sur \(]0 ; +\infty[\).</li>
<li>On dispose de gravier pour recouvrir exactement \(44\) m². Quelle largeur d'allée peut-on réaliser ?</li>
<li>Pour quelles largeurs l'aire de l'allée ne dépasse-t-elle pas celle de la pelouse ?</li></ol>`,
          correction: R`
<ol><li>Le grand rectangle mesure \(12 + 2x\) sur \(8 + 2x\). L'aire de l'allée est l'aire du grand rectangle moins celle de la pelouse :
\(A(x) = (12 + 2x)(8 + 2x) - 96 = 96 + 24x + 16x + 4x^2 - 96 = 4x^2 + 40x\). <i>(1,5 point)</i></li>
<li>\(a = 4 \gt 0\) et \(\alpha = -\frac{40}{8} = -5\) : \(A\) est croissante sur \([-5 ; +\infty[\), donc en particulier sur \(]0 ; +\infty[\). <i>(1 point)</i></li>
<li>\(A(x) = 44 \Leftrightarrow 4x^2 + 40x - 44 = 0 \Leftrightarrow x^2 + 10x - 11 = 0\). \(\Delta = 100 + 44 = 144\), \(x = \frac{-10 \pm 12}{2}\), soit \(x = 1\) ou \(x = -11\).<br>
Comme \(x \gt 0\), l'allée mesure \(1\) m de large (vérification : \(4 + 40 = 44\) ✓). <i>(1,5 point)</i></li>
<li>\(A(x) \leqslant 96 \Leftrightarrow 4x^2 + 40x - 96 \leqslant 0 \Leftrightarrow x^2 + 10x - 24 \leqslant 0\). \(\Delta = 100 + 96 = 196\), racines \(\frac{-10 - 14}{2} = -12\) et \(\frac{-10 + 14}{2} = 2\). Le trinôme (\(a = 1 \gt 0\)) est négatif ou nul entre ses racines : \(x \in [-12 ; 2]\).<br>
Avec \(x \gt 0\) : l'allée doit avoir une largeur \(x \in \,]0 ; 2]\), c'est-à-dire au plus 2 m. <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°4 — Discriminant, tangente et distance d'arrêt", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Équations", points: 6, enonce: R`
<p>Résous dans \(\mathbb{R}\) les équations suivantes (valeurs exactes, puis arrondies au centième pour la dernière).</p>
<ol type="a"><li>\(-3x^2 + 5x + 2 = 0\)</li>
<li>\(9x^2 - 12x + 4 = 0\)</li>
<li>\(5x^2 = 3x\)</li>
<li>\(x^2 + 3 = 2x\)</li>
<li>\(x^2 - 4x - 1 = 0\)</li></ol>`,
          correction: R`
<ol type="a"><li>\(a = -3\), \(b = 5\), \(c = 2\). \(\Delta = 25 + 24 = 49\), \(\sqrt\Delta = 7\).<br>
\(x_1 = \frac{-5 - 7}{-6} = 2\) et \(x_2 = \frac{-5 + 7}{-6} = -\frac13\). \(\mathcal{S} = \left\{-\frac13 ; 2\right\}\). <i>(1,5 point)</i></li>
<li>\(\Delta = 144 - 144 = 0\) : une seule solution \(x_0 = -\frac{-12}{18} = \frac23\). (On reconnaît \((3x - 2)^2 = 0\).) \(\mathcal{S} = \left\{\frac23\right\}\). <i>(1 point)</i></li>
<li>\(5x^2 - 3x = 0 \Leftrightarrow x(5x - 3) = 0 \Leftrightarrow x = 0\) ou \(x = \frac35\). \(\mathcal{S} = \left\{0 ; \frac35\right\}\). (Attention : diviser par \(x\) ferait perdre la solution \(0\).) <i>(1 point)</i></li>
<li>\(x^2 - 2x + 3 = 0\) : \(\Delta = 4 - 12 = -8 \lt 0\). \(\mathcal{S} = \varnothing\). <i>(1 point)</i></li>
<li>\(\Delta = 16 + 4 = 20\), \(\sqrt{20} = 2\sqrt5\). \(x = \frac{4 \pm 2\sqrt5}{2} = 2 \pm \sqrt5\).<br>
\(\mathcal{S} = \{2 - \sqrt5 ; 2 + \sqrt5\}\), soit environ \(\{-0{,}24 ; 4{,}24\}\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 2 — Inéquations", points: 5, enonce: R`
<p>Résous dans \(\mathbb{R}\) :</p>
<ol type="a"><li>\(-2x^2 + 7x - 3 \geqslant 0\)</li>
<li>\(x(x + 4) \gt -4\)</li>
<li>\(x^2 + x + 1 \lt 0\)</li></ol>`,
          correction: R`
<ol type="a"><li>\(\Delta = 49 - 24 = 25\), \(\sqrt\Delta = 5\). Racines : \(\frac{-7 - 5}{-4} = 3\) et \(\frac{-7 + 5}{-4} = \frac12\).<br>
\(a = -2 \lt 0\) : le trinôme est positif entre les racines.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(\frac12\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(-2x^2 + 7x - 3\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table>
\(\mathcal{S} = \left[\frac12 ; 3\right]\). <i>(2 points)</i></li>
<li>\(x(x + 4) \gt -4 \Leftrightarrow x^2 + 4x + 4 \gt 0 \Leftrightarrow (x + 2)^2 \gt 0\). Un carré est strictement positif sauf quand il s'annule, c'est-à-dire en \(x = -2\).<br>
\(\mathcal{S} = \mathbb{R} \setminus \{-2\} = ]-\infty ; -2[ \cup ]-2 ; +\infty[\). <i>(1,5 point)</i></li>
<li>\(\Delta = 1 - 4 = -3 \lt 0\) : le trinôme est toujours strictement du signe de \(a = 1\), donc strictement positif. Il n'est jamais négatif : \(\mathcal{S} = \varnothing\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 3 — Parabole et droites", points: 5, enonce: R`
<p>On note \(\mathcal{P}\) la parabole d'équation \(y = -x^2 + 4x + 1\) et \(d\) la droite d'équation \(y = 2x - 2\).</p>
<ol><li>Détermine les coordonnées des points d'intersection de \(\mathcal{P}\) et \(d\).</li>
<li>Étudie la position relative de \(\mathcal{P}\) et \(d\).</li>
<li>Pour tout réel \(k\), on note \(d_k\) la droite d'équation \(y = 2x + k\) (parallèle à \(d\)). Détermine \(k\) pour que \(d_k\) et \(\mathcal{P}\) aient <b>un seul</b> point commun, et donne ses coordonnées.</li></ol>`,
          correction: R`
<ol><li>\(-x^2 + 4x + 1 = 2x - 2 \Leftrightarrow -x^2 + 2x + 3 = 0\). \(\Delta = 4 + 12 = 16\), \(x = \frac{-2 \pm 4}{-2}\), soit \(x = -1\) ou \(x = 3\).<br>
Pour \(x = -1\) : \(y = 2 \times (-1) - 2 = -4\). Pour \(x = 3\) : \(y = 6 - 2 = 4\). Points : \(A(-1 ; -4)\) et \(B(3 ; 4)\). <i>(2 points)</i></li>
<li>On étudie le signe de \(D(x) = (-x^2 + 4x + 1) - (2x - 2) = -x^2 + 2x + 3 = -(x + 1)(x - 3)\).<br>
\(a = -1 \lt 0\) : \(D(x) \gt 0\) entre les racines, \(D(x) \lt 0\) à l'extérieur.<br>
\(\mathcal{P}\) est au-dessus de \(d\) sur \(]-1 ; 3[\), en dessous sur \(]-\infty ; -1[\) et sur \(]3 ; +\infty[\). <i>(1,5 point)</i></li>
<li>Les abscisses des points communs sont les solutions de \(-x^2 + 4x + 1 = 2x + k \Leftrightarrow -x^2 + 2x + 1 - k = 0\).<br>
Un seul point commun \(\Leftrightarrow \Delta = 4 + 4(1 - k) = 8 - 4k = 0 \Leftrightarrow k = 2\).<br>
La solution double est \(x_0 = -\frac{2}{-2} = 1\), et \(y = 2 \times 1 + 2 = 4\). Le point commun est \((1 ; 4)\) : la droite \(d_2\) est tangente à \(\mathcal{P}\) en ce point. Vérification : \(-1 + 4 + 1 = 4\) ✓. <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 4 — Distance d'arrêt", points: 4, enonce: R`
<p>On modélise la distance d'arrêt (en m) d'une voiture roulant à la vitesse \(v\) (en km/h, \(v \geqslant 0\)) par
\[d(v) = \frac{v^2}{150} + \frac{v}{5}.\]</p>
<ol><li>Calcule \(d(50)\) et \(d(100)\) (arrondis au dixième). La distance d'arrêt est-elle proportionnelle à la vitesse ?</li>
<li>Justifie que \(d\) est croissante sur \([0 ; +\infty[\).</li>
<li>Un obstacle apparaît à \(50\) m. Quelle est la vitesse maximale (arrondie au dixième de km/h) qui permet de s'arrêter avant l'obstacle ?</li></ol>`,
          correction: R`
<ol><li>\(d(50) = \frac{2500}{150} + 10 = \frac{80}{3} \approx 26{,}7\) m et \(d(100) = \frac{10\,000}{150} + 20 = \frac{260}{3} \approx 86{,}7\) m.<br>
Quand la vitesse double, la distance est multipliée par \(\frac{260}{80} = 3{,}25\) et non par 2 : ce n'est pas proportionnel. <i>(1 point)</i></li>
<li>\(d\) est un trinôme avec \(a = \frac{1}{150} \gt 0\) et \(\alpha = -\frac{1/5}{2/150} = -\frac15 \times 75 = -15\). Donc \(d\) est croissante sur \([-15 ; +\infty[\), et en particulier sur \([0 ; +\infty[\). <i>(1 point)</i></li>
<li>On résout \(d(v) = 50\) : en multipliant par \(150\), \(v^2 + 30v - 7500 = 0\). \(\Delta = 900 + 30\,000 = 30\,900\), \(\sqrt{\Delta} \approx 175{,}78\).<br>
\(v = \frac{-30 + \sqrt{30\,900}}{2} \approx 72{,}9\) (l'autre solution, négative, est exclue).<br>
Comme \(d\) est croissante sur \([0 ; +\infty[\), \(d(v) \leqslant 50 \Leftrightarrow v \leqslant \frac{-30 + \sqrt{30\,900}}{2}\). La vitesse maximale est d'environ \(72{,}9\) km/h. <i>(2 points)</i></li></ol>` }
      ] },
    { titre: "DS n°5 — Vrai-faux, paramètre et arche de pont", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 5, enonce: R`
<p>Pour chaque affirmation, réponds par « vrai » ou « faux » en justifiant. Une réponse non justifiée ne rapporte pas de point.</p>
<ol><li>La parabole d'équation \(y = 3(x + 2)^2 - 1\) a pour sommet le point \((2 ; -1)\).</li>
<li>Si \(a\) et \(c\) sont de signes contraires, alors le trinôme \(ax^2 + bx + c\) admet deux racines distinctes.</li>
<li>L'équation \(x^2 + 2026x - 1 = 0\) admet deux solutions dont le produit vaut \(-1\).</li>
<li>Pour tout réel \(x\), \(-x^2 + x - 1 \lt 0\).</li>
<li>La courbe de \(x \mapsto (x - 1)^2 + 2\) s'obtient à partir de celle de \(x \mapsto x^2 + 2\) par une translation de 1 unité vers la gauche.</li></ol>`,
          correction: R`
<ol><li><b>Faux.</b> \(3(x + 2)^2 - 1 = 3(x - (-2))^2 + (-1)\) : le sommet est \((-2 ; -1)\). <i>(1 point)</i></li>
<li><b>Vrai.</b> Si \(a\) et \(c\) sont de signes contraires, \(ac \lt 0\), donc \(-4ac \gt 0\) et \(\Delta = b^2 - 4ac \gt 0\) (car \(b^2 \geqslant 0\)). <i>(1 point)</i></li>
<li><b>Vrai.</b> Ici \(a = 1\) et \(c = -1\) sont de signes contraires, donc d'après le point 2, \(\Delta \gt 0\) : il y a deux solutions, et leur produit vaut \(\frac ca = -1\). <i>(1 point)</i></li>
<li><b>Vrai.</b> \(\Delta = 1 - 4 = -3 \lt 0\) : le trinôme est toujours strictement du signe de \(a = -1\), donc strictement négatif. <i>(1 point)</i></li>
<li><b>Faux.</b> En posant \(h(x) = x^2 + 2\), on a \((x - 1)^2 + 2 = h(x - 1)\) : c'est une translation de 1 unité vers la <b>droite</b> (le sommet passe de \((0 ; 2)\) à \((1 ; 2)\)). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 2 — Étude d'un trinôme et translation", points: 5, enonce: R`
<p>Soit \(f(x) = -2x^2 - 4x + 6\).</p>
<ol><li>Détermine la forme canonique de \(f(x)\).</li>
<li>Dresse le tableau de variations de \(f\) et précise son extremum.</li>
<li>Détermine la forme factorisée de \(f(x)\).</li>
<li>Résous \(f(x) \geqslant 6\).</li>
<li>On pose \(g(x) = f(x - 3)\). Sans développer, donne le sommet et les racines de \(g\), puis vérifie en développant \(g(x)\).</li></ol>`,
          correction: R`
<ol><li>\(f(x) = -2(x^2 + 2x) + 6 = -2\left[(x + 1)^2 - 1\right] + 6 = -2(x + 1)^2 + 8\). <i>(1 point)</i></li>
<li>\(a = -2 \lt 0\), \(\alpha = -1\), \(\beta = 8\) :
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↗</td><td>\(8\)</td><td>↘</td><td></td></tr>
</table>
\(f\) admet un maximum égal à \(8\), atteint en \(x = -1\). <i>(1 point)</i></li>
<li>\(f(x) = 0 \Leftrightarrow (x + 1)^2 = 4 \Leftrightarrow x + 1 = 2\) ou \(x + 1 = -2 \Leftrightarrow x = 1\) ou \(x = -3\). Donc \(f(x) = -2(x - 1)(x + 3)\). <i>(1 point)</i></li>
<li>\(f(x) \geqslant 6 \Leftrightarrow -2x^2 - 4x \geqslant 0 \Leftrightarrow -2x(x + 2) \geqslant 0\). Ce trinôme de racines \(-2\) et \(0\) a pour coefficient \(-2 \lt 0\) : il est positif entre ses racines. \(\mathcal{S} = [-2 ; 0]\). <i>(1 point)</i></li>
<li>La courbe de \(g\) est celle de \(f\) translatée de 3 unités vers la droite : sommet \((-1 + 3 ; 8) = (2 ; 8)\), racines \(1 + 3 = 4\) et \(-3 + 3 = 0\).<br>
\(g(x) = -2(x - 3 + 1)^2 + 8 = -2(x - 2)^2 + 8 = -2x^2 + 8x - 8 + 8 = -2x^2 + 8x = -2x(x - 4)\) : on retrouve le sommet \((2 ; 8)\) et les racines \(0\) et \(4\) ✓. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Équation à paramètre", points: 5, enonce: R`
<p>Pour tout réel \(m\), on considère l'équation \((E_m) : (m - 1)x^2 + 2mx + m + 2 = 0\).</p>
<ol><li>Résous \((E_1)\). Pourquoi ce cas est-il à part ?</li>
<li>On suppose \(m \ne 1\). Montre que le discriminant de \((E_m)\) est \(\Delta = 8 - 4m\).</li>
<li>Selon les valeurs de \(m \ne 1\), donne le nombre de solutions de \((E_m)\).</li>
<li>Résous \((E_m)\) dans le cas où \(m \ne 1\) et où elle a une unique solution.</li></ol>`,
          correction: R`
<ol><li>Pour \(m = 1\) : \(0 \times x^2 + 2x + 3 = 0 \Leftrightarrow x = -\frac32\). Ce cas est à part car le coefficient de \(x^2\) est nul : l'équation est du premier degré, on ne peut pas utiliser le discriminant. <i>(1 point)</i></li>
<li>Pour \(m \ne 1\), \(a = m - 1\), \(b = 2m\), \(c = m + 2\) :
\(\Delta = 4m^2 - 4(m - 1)(m + 2) = 4m^2 - 4(m^2 + m - 2) = 4m^2 - 4m^2 - 4m + 8 = 8 - 4m\). <i>(1,5 point)</i></li>
<li><ul><li>\(\Delta \gt 0 \Leftrightarrow m \lt 2\) : pour \(m \lt 2\) et \(m \ne 1\), deux solutions distinctes ;</li>
<li>\(\Delta = 0 \Leftrightarrow m = 2\) : une unique solution ;</li>
<li>\(\Delta \lt 0 \Leftrightarrow m \gt 2\) : aucune solution.</li></ul> <i>(1,5 point)</i></li>
<li>C'est le cas \(m = 2\) : \((E_2) : x^2 + 4x + 4 = 0 \Leftrightarrow (x + 2)^2 = 0 \Leftrightarrow x = -2\). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — L'arche du pont", points: 5, enonce: R`
<p>L'arche d'un pont a la forme d'une parabole. Ses deux pieds sont distants de \(40\) m et son point le plus haut est à \(12\) m au-dessus de l'eau. Dans un repère d'unité 1 m, l'eau est l'axe des abscisses et les pieds de l'arche sont les points \(O(0 ; 0)\) et \(B(40 ; 0)\). On note \(f\) la fonction dont la courbe est l'arche.</p>
<ol><li>Justifie que \(f(x) = ax(x - 40)\) avec \(a \ne 0\), puis détermine \(a\). Donne la forme développée de \(f(x)\).</li>
<li>Quelle est la hauteur de l'arche à \(15\) m d'un des pieds ?</li>
<li>Une péniche ne peut passer que là où l'arche est à au moins \(9\) m de hauteur. Sur quelle largeur peut-elle naviguer ?</li></ol>`,
          correction: R`
<ol><li>\(f\) est un polynôme du second degré qui s'annule en \(0\) et en \(40\), donc \(f(x) = a(x - 0)(x - 40) = ax(x - 40)\). <i>(0,5 point)</i><br>
Le sommet est sur l'axe de symétrie, au milieu des pieds : \(x = 20\), et \(f(20) = 12\). Donc \(a \times 20 \times (-20) = 12 \Leftrightarrow -400a = 12 \Leftrightarrow a = -\frac{3}{100}\).<br>
\(f(x) = -\frac{3}{100}x(x - 40) = -0{,}03x^2 + 1{,}2x\). <i>(1,5 point)</i></li>
<li>\(f(15) = -0{,}03 \times 225 + 1{,}2 \times 15 = -6{,}75 + 18 = 11{,}25\). La hauteur est de \(11{,}25\) m (et de même à 15 m de l'autre pied, par symétrie). <i>(1 point)</i></li>
<li>\(f(x) \geqslant 9 \Leftrightarrow -0{,}03x^2 + 1{,}2x - 9 \geqslant 0 \Leftrightarrow x^2 - 40x + 300 \leqslant 0\) (on multiplie par \(-\frac{100}{3} \lt 0\) : le sens change).<br>
\(\Delta = 1600 - 1200 = 400\), racines \(\frac{40 - 20}{2} = 10\) et \(\frac{40 + 20}{2} = 30\). Le trinôme (\(a = 1 \gt 0\)) est négatif entre ses racines : \(x \in [10 ; 30]\).<br>
La péniche peut naviguer sur une largeur de \(30 - 10 = 20\) m, au centre de l'arche. <i>(2 points)</i></li></ol>` }
      ] },
    { titre: "DS n°6 — Somme-produit, équations bicarrées et carré inscrit", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Somme et produit des racines", points: 5, enonce: R`
<ol><li>Vérifie que \(1\) est racine de \(7x^2 - 5x - 2\). Déduis-en l'autre racine, puis factorise ce trinôme.</li>
<li>Détermine deux nombres dont la somme vaut \(-1\) et le produit \(-30\).</li>
<li>On considère l'équation \(2x^2 - 9x + 3 = 0\). Sans calculer les solutions, montre qu'elle a deux solutions \(x_1\) et \(x_2\) strictement positives, puis calcule \(\frac{1}{x_1} + \frac{1}{x_2}\).</li>
<li>Un rectangle a pour périmètre \(26\) cm et pour aire \(40\) cm². Quelles sont ses dimensions ?</li></ol>`,
          correction: R`
<ol><li>\(7 - 5 - 2 = 0\) : \(1\) est racine. Le produit des racines vaut \(\frac ca = -\frac27\), donc l'autre racine est \(x_2 = -\frac27\).<br>
Vérification : \(1 - \frac27 = \frac57 = -\frac{-5}{7}\) ✓. Donc \(7x^2 - 5x - 2 = 7(x - 1)\left(x + \frac27\right) = (x - 1)(7x + 2)\). <i>(1,5 point)</i></li>
<li>Ce sont les solutions de \(x^2 + x - 30 = 0\) : \(\Delta = 1 + 120 = 121\), \(x = \frac{-1 \pm 11}{2}\), soit \(5\) et \(-6\). (Vérification : \(5 - 6 = -1\), \(5 \times (-6) = -30\).) <i>(1 point)</i></li>
<li>\(\Delta = 81 - 24 = 57 \gt 0\) : deux solutions. Leur produit \(\frac ca = \frac32 \gt 0\) : elles sont non nulles et de même signe ; leur somme \(-\frac ba = \frac92 \gt 0\) : elles sont donc toutes deux strictement positives.<br>
\(\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2} = \frac{9/2}{3/2} = 3\). <i>(1,5 point)</i></li>
<li>Les côtés \(L\) et \(\ell\) vérifient \(L + \ell = 13\) et \(L\ell = 40\) : ce sont les solutions de \(x^2 - 13x + 40 = 0\). \(\Delta = 169 - 160 = 9\), \(x = \frac{13 \pm 3}{2}\), soit \(5\) et \(8\). Le rectangle mesure \(8\) cm sur \(5\) cm. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 2 — Un trinôme à coefficients décimaux", points: 5, enonce: R`
<p>Soit \(f(x) = 0{,}5x^2 - 3x + 2\).</p>
<ol><li>Montre que \(f(x) = 0{,}5(x - 3)^2 - 2{,}5\).</li>
<li>Dresse le tableau de variations de \(f\).</li>
<li>Détermine les valeurs exactes des racines de \(f\), puis leurs valeurs arrondies au centième.</li>
<li>Résous \(f(x) \leqslant 2\).</li></ol>`,
          correction: R`
<ol><li>\(0{,}5(x - 3)^2 - 2{,}5 = 0{,}5(x^2 - 6x + 9) - 2{,}5 = 0{,}5x^2 - 3x + 4{,}5 - 2{,}5 = 0{,}5x^2 - 3x + 2\) ✓. <i>(1 point)</i></li>
<li>\(a = 0{,}5 \gt 0\), \(\alpha = 3\), \(\beta = -2{,}5\) :
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-2{,}5\)</td><td>↗</td><td></td></tr>
</table> <i>(1 point)</i></li>
<li>\(f(x) = 0 \Leftrightarrow 0{,}5(x - 3)^2 = 2{,}5 \Leftrightarrow (x - 3)^2 = 5 \Leftrightarrow x - 3 = \sqrt5\) ou \(x - 3 = -\sqrt5\). Les racines sont \(3 - \sqrt5 \approx 0{,}76\) et \(3 + \sqrt5 \approx 5{,}24\).<br>
(Avec le discriminant : \(\Delta = 9 - 4 \times 0{,}5 \times 2 = 5\), \(x = \frac{3 \pm \sqrt5}{2 \times 0{,}5} = 3 \pm \sqrt5\).) <i>(1,5 point)</i></li>
<li>\(f(x) \leqslant 2 \Leftrightarrow 0{,}5x^2 - 3x \leqslant 0 \Leftrightarrow 0{,}5x(x - 6) \leqslant 0\). Trinôme de racines \(0\) et \(6\), de coefficient \(0{,}5 \gt 0\), négatif ou nul entre ses racines : \(\mathcal{S} = [0 ; 6]\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 3 — Changements d'inconnue", points: 5, enonce: R`
<p>Résous dans \(\mathbb{R}\) les équations suivantes à l'aide du changement d'inconnue indiqué.</p>
<ol type="a"><li>\(x^4 - 13x^2 + 36 = 0\) (poser \(X = x^2\)).</li>
<li>\(2x^4 + x^2 - 3 = 0\) (poser \(X = x^2\)).</li>
<li>\((x^2 - x)^2 - 8(x^2 - x) + 12 = 0\) (poser \(X = x^2 - x\)).</li></ol>`,
          correction: R`
<ol type="a"><li>L'équation devient \(X^2 - 13X + 36 = 0\) : \(\Delta = 169 - 144 = 25\), \(X = \frac{13 \pm 5}{2}\), soit \(X = 4\) ou \(X = 9\).<br>
\(x^2 = 4 \Leftrightarrow x = \pm 2\) ; \(x^2 = 9 \Leftrightarrow x = \pm 3\). \(\mathcal{S} = \{-3 ; -2 ; 2 ; 3\}\). <i>(2 points)</i></li>
<li>\(2X^2 + X - 3 = 0\) : \(1\) est racine évidente (\(2 + 1 - 3 = 0\)) et le produit des racines vaut \(-\frac32\), donc l'autre racine est \(X = -\frac32\).<br>
\(x^2 = 1 \Leftrightarrow x = \pm 1\) ; \(x^2 = -\frac32\) est impossible (un carré est positif). \(\mathcal{S} = \{-1 ; 1\}\). <i>(1,5 point)</i></li>
<li>\(X^2 - 8X + 12 = 0\) : \(\Delta = 64 - 48 = 16\), \(X = \frac{8 \pm 4}{2}\), soit \(X = 2\) ou \(X = 6\).<br>
\(x^2 - x = 2 \Leftrightarrow x^2 - x - 2 = 0\) : \(\Delta = 9\), \(x = \frac{1 \pm 3}{2}\), soit \(2\) ou \(-1\).<br>
\(x^2 - x = 6 \Leftrightarrow x^2 - x - 6 = 0\) : \(\Delta = 25\), \(x = \frac{1 \pm 5}{2}\), soit \(3\) ou \(-2\).<br>
\(\mathcal{S} = \{-2 ; -1 ; 2 ; 3\}\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 4 — Le carré inscrit", points: 5, enonce: R`
<p>\(ABCD\) est un carré de côté \(10\) cm. On place \(M \in [AB]\), \(N \in [BC]\), \(P \in [CD]\) et \(Q \in [DA]\) tels que \(AM = BN = CP = DQ = x\), avec \(x \in [0 ; 10]\). On admet que \(MNPQ\) est un carré, et on note \(S(x)\) son aire (en cm²).</p>
<ol><li>En utilisant le triangle \(MBN\), montre que \(S(x) = 2x^2 - 20x + 100\).</li>
<li>Pour quelle valeur de \(x\) l'aire de \(MNPQ\) est-elle minimale ? Quelle est cette aire ?</li>
<li>Pour quelles valeurs de \(x\) l'aire de \(MNPQ\) est-elle inférieure ou égale à \(68\) cm² ?</li>
<li>Détermine les valeurs de \(x\) pour lesquelles l'aire vaut \(60\) cm² (valeurs exactes et arrondies au centième).</li></ol>`,
          correction: R`
<ol><li>Le triangle \(MBN\) est rectangle en \(B\), avec \(MB = 10 - x\) et \(BN = x\). Par le théorème de Pythagore : \(MN^2 = (10 - x)^2 + x^2 = 100 - 20x + x^2 + x^2\).<br>
Donc \(S(x) = MN^2 = 2x^2 - 20x + 100\). <i>(1,5 point)</i></li>
<li>\(a = 2 \gt 0\) : minimum en \(\alpha = -\frac{-20}{4} = 5\), et \(S(5) = 50 - 100 + 100 = 50\). L'aire est minimale (\(50\) cm², la moitié de l'aire de \(ABCD\)) quand \(M\), \(N\), \(P\), \(Q\) sont les milieux des côtés. <i>(1 point)</i></li>
<li>\(S(x) \leqslant 68 \Leftrightarrow 2x^2 - 20x + 32 \leqslant 0 \Leftrightarrow x^2 - 10x + 16 \leqslant 0\). \(\Delta = 100 - 64 = 36\), racines \(\frac{10 - 6}{2} = 2\) et \(\frac{10 + 6}{2} = 8\). Négatif entre les racines (\(a = 1 \gt 0\)) : \(x \in [2 ; 8]\), inclus dans \([0 ; 10]\). <i>(1,5 point)</i></li>
<li>\(S(x) = 60 \Leftrightarrow 2x^2 - 20x + 40 = 0 \Leftrightarrow x^2 - 10x + 20 = 0\). \(\Delta = 100 - 80 = 20\), \(x = \frac{10 \pm 2\sqrt5}{2} = 5 \pm \sqrt5\).<br>
\(x = 5 - \sqrt5 \approx 2{,}76\) ou \(x = 5 + \sqrt5 \approx 7{,}24\), toutes deux dans \([0 ; 10]\). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°7 — Retrouver des trinômes et démontrer", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Retrouver un trinôme", points: 7, enonce: R`
<p>Dans chaque cas, détermine la fonction polynôme \(f\) du second degré vérifiant les conditions données, et donne sa forme développée.</p>
<ol type="a"><li>Sa courbe a pour sommet \(S(2 ; -3)\) et passe par le point \(A(0 ; 5)\).</li>
<li>\(f\) s'annule en \(-3\) et en \(5\), et sa courbe passe par \(B(1 ; -8)\).</li>
<li>\(f(0) = 1\), \(f(1) = 4\) et \(f(-1) = 0\). Que remarque-t-on sur sa courbe ?</li></ol>`,
          correction: R`
<ol type="a"><li>Le sommet est \((\alpha ; \beta) = (2 ; -3)\), donc \(f(x) = a(x - 2)^2 - 3\) avec \(a \ne 0\).<br>
\(f(0) = 5 \Leftrightarrow 4a - 3 = 5 \Leftrightarrow a = 2\). Donc \(f(x) = 2(x - 2)^2 - 3 = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 5\). <i>(2,5 points)</i></li>
<li>\(f(x) = a(x + 3)(x - 5)\) avec \(a \ne 0\). \(f(1) = -8 \Leftrightarrow a \times 4 \times (-4) = -8 \Leftrightarrow -16a = -8 \Leftrightarrow a = \frac12\).<br>
\(f(x) = \frac12(x + 3)(x - 5) = \frac12(x^2 - 2x - 15) = \frac12x^2 - x - \frac{15}{2}\). <i>(2 points)</i></li>
<li>On écrit \(f(x) = ax^2 + bx + c\). \(f(0) = c = 1\). Puis \(f(1) = a + b + 1 = 4\) et \(f(-1) = a - b + 1 = 0\), soit \(a + b = 3\) et \(a - b = -1\).<br>
En additionnant : \(2a = 2\), donc \(a = 1\), puis \(b = 2\). Ainsi \(f(x) = x^2 + 2x + 1 = (x + 1)^2\).<br>
Son discriminant est nul : la courbe touche l'axe des abscisses en un seul point, son sommet \((-1 ; 0)\). <i>(2,5 points)</i></li></ol>` },
        { titre: "Exercice 2 — Deux paraboles face à face", points: 7, enonce: R`
<p>Soient \(f(x) = x^2 - 6x + 5\) et \(g(x) = -x^2 + 2x + 5\), de courbes \(\mathcal{C}_f\) et \(\mathcal{C}_g\).</p>
<ol><li>Donne le sommet de chaque parabole et dresse les tableaux de variations de \(f\) et de \(g\).</li>
<li>Détermine les coordonnées des points d'intersection de \(\mathcal{C}_f\) et \(\mathcal{C}_g\).</li>
<li>Étudie la position relative de \(\mathcal{C}_f\) et \(\mathcal{C}_g\).</li>
<li>Pour \(x \in [0 ; 4]\), on note \(M\) et \(N\) les points d'abscisse \(x\) de \(\mathcal{C}_g\) et \(\mathcal{C}_f\). Pour quelle valeur de \(x\) la distance \(MN\) est-elle maximale ? Quelle est cette distance ?</li></ol>`,
          correction: R`
<ol><li>Pour \(f\) : \(\alpha = -\frac{-6}{2} = 3\), \(f(3) = 9 - 18 + 5 = -4\) ; sommet \((3 ; -4)\), et \(a = 1 \gt 0\).<br>
Pour \(g\) : \(\alpha = -\frac{2}{-2} = 1\), \(g(1) = -1 + 2 + 5 = 6\) ; sommet \((1 ; 6)\), et \(a = -1 \lt 0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-4\)</td><td>↗</td><td></td></tr>
</table>
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(g\)</td><td></td><td>↗</td><td>\(6\)</td><td>↘</td><td></td></tr>
</table> <i>(2 points)</i></li>
<li>\(f(x) = g(x) \Leftrightarrow x^2 - 6x + 5 = -x^2 + 2x + 5 \Leftrightarrow 2x^2 - 8x = 0 \Leftrightarrow 2x(x - 4) = 0 \Leftrightarrow x = 0\) ou \(x = 4\).<br>
\(f(0) = 5\) et \(f(4) = 16 - 24 + 5 = -3\) (vérification : \(g(4) = -16 + 8 + 5 = -3\) ✓). Points : \((0 ; 5)\) et \((4 ; -3)\). <i>(2 points)</i></li>
<li>\(f(x) - g(x) = 2x^2 - 8x = 2x(x - 4)\), de coefficient \(2 \gt 0\) : positif à l'extérieur de \([0 ; 4]\), négatif sur \(]0 ; 4[\).<br>
\(\mathcal{C}_f\) est au-dessus de \(\mathcal{C}_g\) sur \(]-\infty ; 0[\) et sur \(]4 ; +\infty[\), en dessous sur \(]0 ; 4[\). <i>(1,5 point)</i></li>
<li>Sur \([0 ; 4]\), \(\mathcal{C}_g\) est au-dessus de \(\mathcal{C}_f\), donc \(MN = g(x) - f(x) = -2x^2 + 8x\).<br>
C'est un trinôme avec \(a = -2 \lt 0\) : maximum en \(\alpha = -\frac{8}{-4} = 2\), et \(MN = -8 + 16 = 8\). La distance maximale est \(8\), atteinte pour \(x = 2\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 3 — Somme et produit : démonstration et application", points: 6, enonce: R`
<ol><li>Soit \(ax^2 + bx + c\) (\(a \ne 0\)) un trinôme de discriminant \(\Delta \gt 0\), de racines \(x_1 = \frac{-b - \sqrt\Delta}{2a}\) et \(x_2 = \frac{-b + \sqrt\Delta}{2a}\). Démontre que \(x_1 + x_2 = -\frac ba\) et \(x_1 x_2 = \frac ca\).</li>
<li>On considère l'équation \(x^2 - 3x - 5 = 0\). Justifie qu'elle admet deux solutions \(x_1\) et \(x_2\), et donne leur somme et leur produit.</li>
<li>Sans calculer \(x_1\) et \(x_2\), calcule \(x_1^2 + x_2^2\).</li>
<li>Sans calculer \(x_1\) et \(x_2\), calcule \(\frac{1}{x_1} + \frac{1}{x_2}\).</li></ol>`,
          correction: R`
<ol><li>\(x_1 + x_2 = \frac{-b - \sqrt\Delta - b + \sqrt\Delta}{2a} = \frac{-2b}{2a} = -\frac ba\).<br>
\(x_1 x_2 = \frac{(-b - \sqrt\Delta)(-b + \sqrt\Delta)}{4a^2} = \frac{(-b)^2 - (\sqrt\Delta)^2}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{4ac}{4a^2} = \frac ca\). <i>(2,5 points)</i></li>
<li>\(\Delta = 9 + 20 = 29 \gt 0\) : deux solutions. \(x_1 + x_2 = 3\) et \(x_1 x_2 = -5\). <i>(1 point)</i></li>
<li>\(x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 9 + 10 = 19\). <i>(1,5 point)</i></li>
<li>\(\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2} = \frac{3}{-5} = -\frac35\) (les racines sont non nulles car leur produit vaut \(-5 \ne 0\)). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°8 — Signe de produits, translations et jet d'eau", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Équations", points: 5, enonce: R`
<p>Résous dans \(\mathbb{R}\) (valeurs exactes, et arrondies au centième pour la première) :</p>
<ol type="a"><li>\(2x^2 + 3x - 7 = 0\)</li>
<li>\(x^2 - 2\sqrt3\,x + 3 = 0\)</li>
<li>\(-x^2 + 0{,}6x - 0{,}1 = 0\)</li>
<li>\((2x - 1)^2 = (x + 3)^2\)</li></ol>`,
          correction: R`
<ol type="a"><li>\(\Delta = 9 + 56 = 65 \gt 0\). \(x_1 = \frac{-3 - \sqrt{65}}{4} \approx -2{,}77\) et \(x_2 = \frac{-3 + \sqrt{65}}{4} \approx 1{,}27\). <i>(1,5 point)</i></li>
<li>\(\Delta = (2\sqrt3)^2 - 4 \times 3 = 12 - 12 = 0\) : une solution \(x_0 = \frac{2\sqrt3}{2} = \sqrt3\). (On reconnaît \((x - \sqrt3)^2 = 0\).) \(\mathcal{S} = \{\sqrt3\}\). <i>(1 point)</i></li>
<li>\(\Delta = 0{,}36 - 4 \times (-1) \times (-0{,}1) = 0{,}36 - 0{,}4 = -0{,}04 \lt 0\) : \(\mathcal{S} = \varnothing\). <i>(1 point)</i></li>
<li>\((2x - 1)^2 - (x + 3)^2 = 0 \Leftrightarrow (2x - 1 - x - 3)(2x - 1 + x + 3) = 0 \Leftrightarrow (x - 4)(3x + 2) = 0\).<br>
\(\mathcal{S} = \left\{-\frac23 ; 4\right\}\). <i>(1,5 point)</i></li></ol>` },
        { titre: "Exercice 2 — Signe d'un produit", points: 5, enonce: R`
<p>Résous dans \(\mathbb{R}\) à l'aide d'un tableau de signes :</p>
<ol type="a"><li>\((x^2 - x - 6)(-x^2 + 2x - 5) \geqslant 0\)</li>
<li>\(x^3 - 2x^2 - 3x \geqslant 0\)</li></ol>`,
          correction: R`
<ol type="a"><li>\(x^2 - x - 6\) : \(\Delta = 1 + 24 = 25\), racines \(\frac{1 - 5}{2} = -2\) et \(\frac{1 + 5}{2} = 3\) ; positif à l'extérieur des racines (\(a = 1 \gt 0\)).<br>
\(-x^2 + 2x - 5\) : \(\Delta = 4 - 20 = -16 \lt 0\), donc toujours strictement négatif (signe de \(a = -1\)).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-2\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(x^2 - x - 6\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>\(-x^2 + 2x - 5\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td></td></tr>
<tr><td>produit</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table>
\(\mathcal{S} = [-2 ; 3]\). <i>(2,5 points)</i></li>
<li>\(x^3 - 2x^2 - 3x = x(x^2 - 2x - 3)\). Pour \(x^2 - 2x - 3\) : \(\Delta = 4 + 12 = 16\), racines \(\frac{2 - 4}{2} = -1\) et \(\frac{2 + 4}{2} = 3\), positif à l'extérieur des racines.
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(0\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(x\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td><td>\(+\)</td><td></td></tr>
<tr><td>\(x^2 - 2x - 3\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>produit</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
</table>
\(\mathcal{S} = [-1 ; 0] \cup [3 ; +\infty[\). <i>(2,5 points)</i></li></ol>` },
        { titre: "Exercice 3 — Paraboles translatées", points: 5, enonce: R`
<p>Soit \(g(x) = 2(x + 1)^2 - 8\) et \(\mathcal{C}_g\) sa courbe.</p>
<ol><li>Par quelles translations obtient-on \(\mathcal{C}_g\) à partir de la courbe de \(x \mapsto 2x^2\) ? Donne le sommet de \(\mathcal{C}_g\).</li>
<li>Détermine les racines de \(g\) et sa forme factorisée.</li>
<li>On pose \(h(x) = g(x - 4)\). Donne le sommet et les racines de \(h\), puis la forme développée de \(h(x)\).</li>
<li>Montre que \(g(x) - h(x) = 16(x - 1)\). Déduis-en la position relative de \(\mathcal{C}_g\) et de la courbe de \(h\).</li></ol>`,
          correction: R`
<ol><li>\(\mathcal{C}_g\) s'obtient par une translation de 1 unité vers la gauche puis de 8 unités vers le bas. Sommet : \((-1 ; -8)\). <i>(1 point)</i></li>
<li>\(g(x) = 0 \Leftrightarrow (x + 1)^2 = 4 \Leftrightarrow x + 1 = 2\) ou \(x + 1 = -2 \Leftrightarrow x = 1\) ou \(x = -3\). Donc \(g(x) = 2(x - 1)(x + 3)\). <i>(1,5 point)</i></li>
<li>La courbe de \(h\) est \(\mathcal{C}_g\) translatée de 4 unités vers la droite : sommet \((3 ; -8)\), racines \(1 + 4 = 5\) et \(-3 + 4 = 1\).<br>
\(h(x) = 2(x - 4 + 1)^2 - 8 = 2(x - 3)^2 - 8 = 2x^2 - 12x + 18 - 8 = 2x^2 - 12x + 10\). (Vérification : \(h(1) = 2 - 12 + 10 = 0\) ✓.) <i>(1,5 point)</i></li>
<li>\(g(x) = 2(x^2 + 2x + 1) - 8 = 2x^2 + 4x - 6\), donc \(g(x) - h(x) = 2x^2 + 4x - 6 - 2x^2 + 12x - 10 = 16x - 16 = 16(x - 1)\).<br>
Si \(x \gt 1\), \(\mathcal{C}_g\) est au-dessus de la courbe de \(h\) ; si \(x \lt 1\), elle est en dessous ; les deux courbes se coupent uniquement en \((1 ; 0)\) (racine commune de \(g\) et \(h\)). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Le jet d'eau", points: 5, enonce: R`
<p>Dans un jardin, un jet d'eau sort d'une buse. À la distance horizontale \(x\) (en m) de la buse, la hauteur de l'eau (en m) est \(h(x) = -0{,}5x^2 + 2x + 1\), pour \(x \geqslant 0\) tant que l'eau n'a pas touché le sol.</p>
<ol><li>À quelle hauteur se trouve la buse ? Quelle est la hauteur maximale du jet, et à quelle distance de la buse est-elle atteinte ?</li>
<li>À quelle distance de la buse l'eau retombe-t-elle sur le sol ? (Valeur exacte, puis arrondie au centimètre.)</li>
<li>Une personne mesurant \(1{,}80\) m veut passer sous le jet sans être mouillée. Sur quelle zone ne doit-elle pas se trouver ? (Arrondir au centimètre.)</li></ol>`,
          correction: R`
<ol><li>\(h(0) = 1\) : la buse est à \(1\) m du sol. \(a = -0{,}5 \lt 0\) : maximum en \(\alpha = -\frac{2}{-1} = 2\), \(h(2) = -2 + 4 + 1 = 3\). Le jet culmine à \(3\) m, à \(2\) m de la buse. <i>(1,5 point)</i></li>
<li>\(h(x) = 0 \Leftrightarrow -0{,}5x^2 + 2x + 1 = 0 \Leftrightarrow x^2 - 4x - 2 = 0\). \(\Delta = 16 + 8 = 24\), \(x = \frac{4 \pm 2\sqrt6}{2} = 2 \pm \sqrt6\).<br>
Comme \(x \geqslant 0\) et \(2 - \sqrt6 \lt 0\), l'eau retombe à \(2 + \sqrt6 \approx 4{,}45\) m de la buse. <i>(1,5 point)</i></li>
<li>La personne est mouillée là où \(h(x) \geqslant 1{,}8\) : \(-0{,}5x^2 + 2x - 0{,}8 \geqslant 0 \Leftrightarrow x^2 - 4x + 1{,}6 \leqslant 0\).<br>
\(\Delta = 16 - 6{,}4 = 9{,}6\), racines \(\frac{4 \pm \sqrt{9{,}6}}{2}\), soit environ \(0{,}45\) et \(3{,}55\). Le trinôme (\(a = 1 \gt 0\)) est négatif entre ses racines.<br>
La personne ne doit pas se trouver entre environ \(0{,}45\) m et \(3{,}55\) m de la buse. <i>(2 points)</i></li></ol>` }
      ] },
    { titre: "DS n°9 — Automatismes, Python et polygones", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Automatismes", points: 4, enonce: R`
<ol><li>Écris \(x^2 + 10x + 21\) sous forme canonique.</li>
<li>Déduis-en une factorisation de \(x^2 + 10x + 21\).</li>
<li>Donne le signe de \(-3x^2 + x - 2\) selon les valeurs de \(x\).</li>
<li>Détermine \(c\) pour que \(4\) soit racine de \(x^2 - 7x + c\), puis donne l'autre racine.</li></ol>`,
          correction: R`
<ol><li>\(x^2 + 10x = (x + 5)^2 - 25\), donc \(x^2 + 10x + 21 = (x + 5)^2 - 4\). <i>(1 point)</i></li>
<li>\((x + 5)^2 - 2^2 = (x + 5 - 2)(x + 5 + 2) = (x + 3)(x + 7)\). <i>(1 point)</i></li>
<li>\(\Delta = 1 - 24 = -23 \lt 0\) : le trinôme est strictement négatif pour tout réel \(x\) (signe de \(a = -3\)). <i>(1 point)</i></li>
<li>\(16 - 28 + c = 0 \Leftrightarrow c = 12\). La somme des racines vaut \(7\), donc l'autre racine est \(7 - 4 = 3\) (vérification : \(4 \times 3 = 12 = c\) ✓). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 2 — Étude complète", points: 6, enonce: R`
<p>Soit \(f(x) = 4x^2 - 4x - 3\).</p>
<ol><li>Détermine les racines de \(f\).</li>
<li>Donne la forme canonique de \(f(x)\) et le tableau de variations de \(f\).</li>
<li>Factorise \(f(x)\) en produit de deux facteurs à coefficients entiers.</li>
<li>Résous \(f(x) \lt -3\).</li>
<li>Résous \(f(x) \geqslant 5\).</li></ol>`,
          correction: R`
<ol><li>\(\Delta = 16 + 48 = 64\), \(\sqrt\Delta = 8\). \(x_1 = \frac{4 - 8}{8} = -\frac12\) et \(x_2 = \frac{4 + 8}{8} = \frac32\). <i>(1,5 point)</i></li>
<li>\(\alpha = -\frac{-4}{8} = \frac12\) (milieu des racines) et \(f\left(\frac12\right) = 1 - 2 - 3 = -4\). Donc \(f(x) = 4\left(x - \frac12\right)^2 - 4\). \(a = 4 \gt 0\) :
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(\frac12\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(f\)</td><td></td><td>↘</td><td>\(-4\)</td><td>↗</td><td></td></tr>
</table> <i>(1,5 point)</i></li>
<li>\(f(x) = 4\left(x + \frac12\right)\left(x - \frac32\right) = 2\left(x + \frac12\right) \times 2\left(x - \frac32\right) = (2x + 1)(2x - 3)\). <i>(1 point)</i></li>
<li>\(f(x) \lt -3 \Leftrightarrow 4x^2 - 4x \lt 0 \Leftrightarrow 4x(x - 1) \lt 0\). Racines \(0\) et \(1\), coefficient \(4 \gt 0\) : strictement négatif entre les racines. \(\mathcal{S} = ]0 ; 1[\). <i>(1 point)</i></li>
<li>\(f(x) \geqslant 5 \Leftrightarrow 4x^2 - 4x - 8 \geqslant 0 \Leftrightarrow x^2 - x - 2 \geqslant 0\). \(\Delta = 9\), racines \(\frac{1 - 3}{2} = -1\) et \(\frac{1 + 3}{2} = 2\) ; positif à l'extérieur des racines. \(\mathcal{S} = ]-\infty ; -1] \cup [2 ; +\infty[\). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Un programme Python", points: 5, enonce: R`
<p>On considère la fonction Python suivante.</p>
<pre><code>def nb_solutions(a, b, c):
    d = b**2 - 4*a*c
    if d &gt; 0:
        return 2
    elif d == 0:
        return 1
    else:
        return 0</code></pre>
<ol><li>Que renvoient <code>nb_solutions(1, -4, 4)</code>, <code>nb_solutions(2, 3, 5)</code> et <code>nb_solutions(-1, 2, 8)</code> ? Justifie.</li>
<li>Explique pourquoi, si <code>a</code> et <code>c</code> sont non nuls et de signes contraires, la fonction renvoie toujours <code>2</code>.</li>
<li>Pour quelles valeurs du réel \(m\) l'appel <code>nb_solutions(1, m, 9)</code> renvoie-t-il <code>2</code> ?</li>
<li>Pour calculer la plus petite racine lorsque \(a \gt 0\) et \(d \gt 0\), un élève écrit <code>x1 = (-b - sqrt(d))/2*a</code>. Explique son erreur et corrige la ligne.</li></ol>`,
          correction: R`
<ol><li><code>nb_solutions(1, -4, 4)</code> : \(d = 16 - 16 = 0\), renvoie <code>1</code>.<br>
<code>nb_solutions(2, 3, 5)</code> : \(d = 9 - 40 = -31 \lt 0\), renvoie <code>0</code>.<br>
<code>nb_solutions(-1, 2, 8)</code> : \(d = 4 + 32 = 36 \gt 0\), renvoie <code>2</code>. <i>(1,5 point)</i></li>
<li>Si \(a\) et \(c\) sont de signes contraires, \(ac \lt 0\) donc \(-4ac \gt 0\), et \(d = b^2 - 4ac \geqslant -4ac \gt 0\) : on est dans le cas <code>d &gt; 0</code>, la fonction renvoie <code>2</code>. <i>(1 point)</i></li>
<li>\(d = m^2 - 36\). La fonction renvoie <code>2</code> \(\Leftrightarrow m^2 - 36 \gt 0 \Leftrightarrow (m - 6)(m + 6) \gt 0\). Ce trinôme en \(m\) (coefficient \(1 \gt 0\)) est positif à l'extérieur de ses racines : \(m \in \,]-\infty ; -6[ \cup ]6 ; +\infty[\). <i>(1,5 point)</i></li>
<li>En Python, <code>/2*a</code> divise par 2 <b>puis multiplie</b> par <code>a</code> : on calcule \(\frac{-b - \sqrt d}{2} \times a\) au lieu de \(\frac{-b - \sqrt d}{2a}\). Il faut des parenthèses : <code>x1 = (-b - sqrt(d))/(2*a)</code> (avec <code>from math import sqrt</code>). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Les diagonales d'un polygone", points: 5, enonce: R`
<p>On admet qu'un polygone convexe à \(n\) côtés (\(n \geqslant 3\) entier) possède \(D(n) = \frac{n(n - 3)}{2}\) diagonales.</p>
<ol><li>Vérifie la formule pour un carré et pour un pentagone.</li>
<li>Quel polygone possède \(35\) diagonales ?</li>
<li>Existe-t-il un polygone ayant exactement \(100\) diagonales ?</li>
<li>À partir de combien de côtés un polygone a-t-il au moins \(20\) diagonales ?</li></ol>`,
          correction: R`
<ol><li>Carré : \(D(4) = \frac{4 \times 1}{2} = 2\) (les deux diagonales). Pentagone : \(D(5) = \frac{5 \times 2}{2} = 5\) (de chaque sommet partent 2 diagonales, chacune comptée deux fois). <i>(1 point)</i></li>
<li>\(D(n) = 35 \Leftrightarrow n^2 - 3n = 70 \Leftrightarrow n^2 - 3n - 70 = 0\). \(\Delta = 9 + 280 = 289 = 17^2\), \(n = \frac{3 \pm 17}{2}\), soit \(n = 10\) ou \(n = -7\).<br>
Comme \(n \geqslant 3\), c'est le <b>décagone</b> (10 côtés). <i>(1,5 point)</i></li>
<li>\(D(n) = 100 \Leftrightarrow n^2 - 3n - 200 = 0\). \(\Delta = 9 + 800 = 809\). Or \(28^2 = 784\) et \(29^2 = 841\) : \(809\) n'est pas un carré parfait, donc \(\sqrt{809}\) n'est pas entier et les solutions \(\frac{3 \pm \sqrt{809}}{2}\) ne sont pas des entiers. Aucun polygone n'a exactement 100 diagonales. <i>(1,5 point)</i></li>
<li>\(D(n) \geqslant 20 \Leftrightarrow n^2 - 3n - 40 \geqslant 0\). \(\Delta = 9 + 160 = 169 = 13^2\), racines \(\frac{3 - 13}{2} = -5\) et \(\frac{3 + 13}{2} = 8\). Le trinôme est positif à l'extérieur des racines, donc pour \(n \geqslant 8\) (car \(n \geqslant 3\)). Il faut au moins 8 côtés (\(D(8) = 20\)). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°10 — Plongeon, paramètre et rectangle dans un triangle", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 5, enonce: R`
<p>Pour chaque affirmation, réponds par « vrai » ou « faux » en justifiant.</p>
<ol><li>Quel que soit le réel \(b\), le trinôme \(2x^2 + bx - 3\) admet deux racines distinctes.</li>
<li>Si \(f(x) = a(x - 1)(x - 5)\) avec \(a \lt 0\), alors \(f\) admet un maximum atteint en \(x = 3\).</li>
<li>L'ensemble des solutions de \(x^2 \gt 9\) est \(]3 ; +\infty[\).</li>
<li>La somme des racines de \(3x^2 - 12x + 20\) vaut \(4\).</li>
<li>Les paraboles d'équations \(y = x^2\) et \(y = (x - 2)^2 + 1\) ont un unique point commun.</li></ol>`,
          correction: R`
<ol><li><b>Vrai.</b> \(\Delta = b^2 + 24 \gt 0\) pour tout \(b\). <i>(1 point)</i></li>
<li><b>Vrai.</b> \(a \lt 0\) : \(f\) admet un maximum, atteint en l'abscisse du sommet, qui est le milieu des racines : \(\frac{1 + 5}{2} = 3\). <i>(1 point)</i></li>
<li><b>Faux.</b> \(x^2 \gt 9 \Leftrightarrow (x - 3)(x + 3) \gt 0\) : le trinôme est positif à l'extérieur des racines, donc \(\mathcal{S} = ]-\infty ; -3[ \cup ]3 ; +\infty[\). Par exemple \(-4\) est solution. <i>(1 point)</i></li>
<li><b>Faux.</b> \(\Delta = 144 - 240 = -96 \lt 0\) : ce trinôme n'a pas de racine. La formule \(-\frac ba = 4\) ne s'applique que s'il y a des racines ! <i>(1 point)</i></li>
<li><b>Vrai.</b> \(x^2 = (x - 2)^2 + 1 \Leftrightarrow x^2 = x^2 - 4x + 5 \Leftrightarrow 4x = 5 \Leftrightarrow x = \frac54\). Unique point commun : \(\left(\frac54 ; \frac{25}{16}\right)\). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 2 — Le plongeon", points: 5, enonce: R`
<p>Une plongeuse s'élance d'un plongeoir situé à \(10\) m au-dessus de l'eau. La hauteur (en m) de son centre de gravité au-dessus de l'eau, \(t\) secondes après l'impulsion, est modélisée par
\[h(t) = -4{,}9t^2 + 3{,}5t + 10.\]</p>
<ol><li>À quel instant atteint-elle sa hauteur maximale ? Quelle est cette hauteur ? (Valeurs exactes, puis arrondies au centième.)</li>
<li>À quel instant repasse-t-elle à la hauteur du plongeoir ?</li>
<li>À quel instant entre-t-elle dans l'eau ? (Arrondir au centième de seconde.)</li></ol>`,
          correction: R`
<ol><li>\(a = -4{,}9 \lt 0\) : maximum en \(\alpha = -\frac{3{,}5}{-9{,}8} = \frac{5}{14} \approx 0{,}36\) s.<br>
\(h\left(\frac5{14}\right) = -4{,}9 \times \frac{25}{196} + 3{,}5 \times \frac{5}{14} + 10 = -0{,}625 + 1{,}25 + 10 = 10{,}625\). La hauteur maximale est \(10{,}625 \approx 10{,}63\) m. <i>(2 points)</i></li>
<li>\(h(t) = 10 \Leftrightarrow -4{,}9t^2 + 3{,}5t = 0 \Leftrightarrow t(-4{,}9t + 3{,}5) = 0 \Leftrightarrow t = 0\) ou \(t = \frac{3{,}5}{4{,}9} = \frac57\).<br>
Elle repasse à la hauteur du plongeoir à \(t = \frac57 \approx 0{,}71\) s (on retrouve que \(\alpha = \frac{5}{14}\) est le milieu de \(0\) et \(\frac57\)). <i>(1 point)</i></li>
<li>\(h(t) = 0\) : \(\Delta = 3{,}5^2 + 4 \times 4{,}9 \times 10 = 12{,}25 + 196 = 208{,}25\).<br>
\(t = \frac{-3{,}5 \pm \sqrt{208{,}25}}{-9{,}8}\), soit \(t \approx -1{,}12\) ou \(t \approx 1{,}83\). Comme \(t \geqslant 0\), elle entre dans l'eau au bout d'environ \(1{,}83\) s. <i>(2 points)</i></li></ol>` },
        { titre: "Exercice 3 — Une famille de trinômes", points: 5, enonce: R`
<p>Pour tout réel \(m\), on pose \(f_m(x) = x^2 - (m + 2)x + 2m\).</p>
<ol><li>Montre que le discriminant de \(f_m\) est \(\Delta = (m - 2)^2\).</li>
<li>Déduis-en les racines de \(f_m\) et une factorisation de \(f_m(x)\). Vérifie en développant.</li>
<li>Pour quelle valeur de \(m\) le trinôme \(f_m\) a-t-il une racine double ?</li>
<li>Pour quelle valeur de \(m\) l'ensemble des solutions de \(f_m(x) \leqslant 0\) est-il \([-1 ; 2]\) ?</li>
<li>Pour quelles valeurs de \(m\) le minimum de \(f_m\) est-il égal à \(-4\) ?</li></ol>`,
          correction: R`
<ol><li>\(\Delta = (m + 2)^2 - 4 \times 2m = m^2 + 4m + 4 - 8m = m^2 - 4m + 4 = (m - 2)^2\). <i>(1 point)</i></li>
<li>\(\sqrt\Delta = |m - 2|\) ; dans les deux cas, les racines sont \(\frac{m + 2 + (m - 2)}{2} = m\) et \(\frac{m + 2 - (m - 2)}{2} = 2\).<br>
Donc \(f_m(x) = (x - 2)(x - m)\). Vérification : \((x - 2)(x - m) = x^2 - mx - 2x + 2m = x^2 - (m + 2)x + 2m\) ✓. <i>(1,5 point)</i></li>
<li>Racine double \(\Leftrightarrow \Delta = 0 \Leftrightarrow m = 2\) : \(f_2(x) = (x - 2)^2\). <i>(0,5 point)</i></li>
<li>\(f_m(x) \leqslant 0\) entre ses racines \(2\) et \(m\) (coefficient \(1 \gt 0\)). L'ensemble des solutions est \([-1 ; 2]\) si et seulement si \(m = -1\). <i>(1 point)</i></li>
<li>Le minimum est atteint au milieu des racines, en \(\alpha = \frac{m + 2}{2}\), et vaut
\(f_m(\alpha) = \left(\frac{m + 2}{2} - 2\right)\left(\frac{m + 2}{2} - m\right) = \frac{m - 2}{2} \times \frac{2 - m}{2} = -\frac{(m - 2)^2}{4}\).<br>
\(-\frac{(m - 2)^2}{4} = -4 \Leftrightarrow (m - 2)^2 = 16 \Leftrightarrow m - 2 = 4\) ou \(m - 2 = -4 \Leftrightarrow m = 6\) ou \(m = -2\).<br>
(Vérification : \(f_6(4) = 2 \times (-2) = -4\) et \(f_{-2}(x) = x^2 - 4\) a pour minimum \(-4\) ✓.) <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Rectangle inscrit dans un triangle", points: 5, enonce: R`
<p>\(ABC\) est un triangle rectangle en \(A\) avec \(AB = 8\) cm et \(AC = 6\) cm. Pour \(x \in [0 ; 8]\), on place \(M\) sur \([AB]\) tel que \(AM = x\), puis \(N\) sur \([BC]\) tel que \((MN)\) soit parallèle à \((AC)\), et \(P\) sur \([AC]\) tel que \(AMNP\) soit un rectangle. On note \(\mathcal{A}(x)\) l'aire de \(AMNP\) (en cm²).</p>
<ol><li>Montre que \(MN = \frac34(8 - x)\).</li>
<li>Déduis-en que \(\mathcal{A}(x) = -0{,}75x^2 + 6x\).</li>
<li>Détermine l'aire maximale du rectangle et la position de \(M\) correspondante. Compare avec l'aire du triangle \(ABC\).</li>
<li>Pour quelles valeurs de \(x\) l'aire du rectangle est-elle au moins égale à \(9\) cm² ?</li></ol>`,
          correction: R`
<ol><li>Dans le triangle \(ABC\), \(M \in [BA]\), \(N \in [BC]\) et \((MN) \parallel (AC)\). D'après le théorème de Thalès : \(\frac{BM}{BA} = \frac{MN}{AC}\), soit \(\frac{8 - x}{8} = \frac{MN}{6}\), donc \(MN = \frac{6(8 - x)}{8} = \frac34(8 - x)\). <i>(1,5 point)</i></li>
<li>\(\mathcal{A}(x) = AM \times MN = x \times \frac34(8 - x) = 6x - \frac34x^2 = -0{,}75x^2 + 6x\). <i>(0,5 point)</i></li>
<li>\(a = -0{,}75 \lt 0\) : maximum en \(\alpha = -\frac{6}{-1{,}5} = 4\), et \(\mathcal{A}(4) = -12 + 24 = 12\) cm². L'aire est maximale quand \(M\) est le milieu de \([AB]\).<br>
L'aire du triangle est \(\frac{8 \times 6}{2} = 24\) cm² : le rectangle d'aire maximale occupe exactement la moitié du triangle. <i>(1,5 point)</i></li>
<li>\(\mathcal{A}(x) \geqslant 9 \Leftrightarrow -0{,}75x^2 + 6x - 9 \geqslant 0 \Leftrightarrow x^2 - 8x + 12 \leqslant 0\) (on divise par \(-0{,}75 \lt 0\)).<br>
\(\Delta = 64 - 48 = 16\), racines \(\frac{8 - 4}{2} = 2\) et \(\frac{8 + 4}{2} = 6\). Le trinôme est négatif entre ses racines : \(x \in [2 ; 6]\). <i>(1,5 point)</i></li></ol>` }
      ] }
  ]
});
})();
