(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 4,
  titre: "Dérivation",
  partie: "Analyse",
  emoji: "📈",
  accroche: R`Le radar qui te flashe à 92 km/h ne mesure pas ta vitesse moyenne sur le trajet, mais ta vitesse <b>à un instant précis</b>. Comment calculer une vitesse « instantanée » alors qu'en un instant on ne parcourt… aucune distance ? C'est exactement le problème que résout le nombre dérivé, l'un des outils les plus puissants des maths !`,

  videos: [
    { titre: "Taux de variation et nombre dérivé", recherche: "Yvan Monka nombre dérivé taux de variation limite", duree: "≈ 12 min", resume: R`Passer de la pente d'une sécante à la pente de la tangente : calculer \(f'(a)\) comme limite du taux de variation quand \(h\) tend vers 0.` },
    { titre: "Lire graphiquement un nombre dérivé", recherche: "Yvan Monka lire graphiquement un nombre dérivé coefficient directeur tangente", duree: "≈ 6 min", resume: R`Lire \(f'(a)\) comme le coefficient directeur de la tangente sur un graphique.` },
    { titre: "Déterminer une équation de tangente", recherche: "Yvan Monka déterminer une équation de tangente", duree: "≈ 8 min", resume: R`Appliquer la formule \(y=f'(a)(x-a)+f(a)\) pas à pas.` },
    { titre: "Dérivées des fonctions usuelles", recherche: "Yvan Monka dérivées des fonctions usuelles première", duree: "≈ 10 min", resume: R`Le tableau des dérivées (constante, \(x^n\), \(\dfrac1x\), \(\sqrt x\)) et ses démonstrations.` },
    { titre: "Dérivée d'une somme et d'un produit", recherche: "Yvan Monka dérivée d'un produit de fonctions", duree: "≈ 10 min", resume: R`Les formules \((u+v)'=u'+v'\), \((ku)'=ku'\) et \((uv)'=u'v+uv'\) avec des exemples.` },
    { titre: "Dérivée d'un inverse et d'un quotient", recherche: "Yvan Monka dérivée d'un quotient de fonctions", duree: "≈ 10 min", resume: R`Dériver \(\dfrac1v\) et \(\dfrac uv\) sans se tromper de signe.` },
    { titre: "Dériver une fonction composée g(ax+b)", recherche: "Yvan Monka dérivée de g(ax+b) fonction composée première", duree: "≈ 8 min", resume: R`La formule \(\big(g(ax+b)\big)'=a\,g'(ax+b)\) et ses applications, par exemple \(\sqrt{3x+1}\) ou \((2x-5)^3\).` }
  ],

  cours: [
    { titre: "1. Point de vue local : nombre dérivé et tangente", html: R`
<div class="def"><b>Taux de variation.</b> Soit \(f\) une fonction définie sur un intervalle \(I\), et \(a\), \(a+h\) deux réels de \(I\) (\(h\neq0\)). Le <b>taux de variation</b> de \(f\) entre \(a\) et \(a+h\) est
\[\tau(h)=\frac{f(a+h)-f(a)}{h}.\]
C'est le <b>coefficient directeur de la sécante</b> passant par \(A(a\,;f(a))\) et \(M(a+h\,;f(a+h))\).</div>
<div class="def"><b>Nombre dérivé.</b> Si, quand \(h\) tend vers 0, le taux \(\tau(h)\) se rapproche d'un réel \(\ell\), on dit que \(f\) est <b>dérivable en \(a\)</b> et que \(\ell\) est le <b>nombre dérivé</b> de \(f\) en \(a\), noté \(f'(a)\) :
\[f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.\]</div>
<div class="ex"><b>Exemple résolu.</b> \(f(x)=x^2\) en \(a=3\). Pour \(h\neq0\) :
\[\frac{f(3+h)-f(3)}{h}=\frac{9+6h+h^2-9}{h}=\frac{h(6+h)}{h}=6+h.\]
Quand \(h\) tend vers 0, \(6+h\) tend vers 6. Donc \(f\) est dérivable en 3 et \(f'(3)=6\).</div>
<div class="astuce"><b>Méthode.</b> 1) Calcule \(f(a+h)\) et développe. 2) Soustrais \(f(a)\). 3) Factorise par \(h\) et simplifie (on a le droit car \(h\neq0\)). 4) Remplace \(h\) par 0 dans ce qui reste.</div>
<div class="def"><b>Tangente.</b> Si \(f\) est dérivable en \(a\), la <b>tangente</b> à la courbe \(\mathcal C_f\) au point \(A(a\,;f(a))\) est la droite passant par \(A\) de coefficient directeur \(f'(a)\). C'est la position limite des sécantes \((AM)\) quand \(M\) se rapproche de \(A\).</div>
<div class="prop"><b>Équation de la tangente</b> en \(a\) :
\[y=f'(a)(x-a)+f(a).\]</div>
<div class="ex"><b>Exemple résolu.</b> Tangente à \(f(x)=x^2\) en \(a=3\) : \(f(3)=9\), \(f'(3)=6\), donc \(y=6(x-3)+9\), soit \(y=6x-9\).</div>
<div class="prop"><b>Lecture graphique.</b> \(f'(a)\) est le coefficient directeur de la tangente en \(a\) : on le lit en prenant deux points \((x_1\,;y_1)\), \((x_2\,;y_2)\) de la tangente et en calculant \(\dfrac{y_2-y_1}{x_2-x_1}\) (« on avance de 1, on monte de \(f'(a)\) »). Une <b>tangente horizontale</b> correspond à \(f'(a)=0\).</div>
<div class="prop"><b>Interprétation cinématique.</b> Si \(d(t)\) est la distance parcourue à l'instant \(t\), le taux de variation entre \(t_0\) et \(t_0+h\) est la <b>vitesse moyenne</b> sur cette durée, et \(d'(t_0)\) est la <b>vitesse instantanée</b> à l'instant \(t_0\).</div>
<div class="warn"><b>Pièges.</b> Ne confonds pas \(f(a)\) (l'ordonnée du point, sur la courbe) et \(f'(a)\) (la pente de la tangente). Et dans l'équation de tangente, c'est \((x-a)\), pas \((x+a)\) !</div>` },

    { titre: "2. Point de vue global : fonction dérivée et fonctions usuelles", html: R`
<div class="def"><b>Fonction dérivée.</b> Si \(f\) est dérivable en tout réel \(x\) d'un intervalle \(I\), la fonction \(f':x\mapsto f'(x)\) est appelée <b>fonction dérivée</b> de \(f\) sur \(I\).</div>
<div class="prop"><b>Dérivées des fonctions usuelles.</b>
<table>
<tr><th>\(f(x)\)</th><th>\(f'(x)\)</th><th>Dérivable sur</th></tr>
<tr><td>\(k\) (constante)</td><td>\(0\)</td><td>\(\mathbb R\)</td></tr>
<tr><td>\(x\)</td><td>\(1\)</td><td>\(\mathbb R\)</td></tr>
<tr><td>\(x^2\)</td><td>\(2x\)</td><td>\(\mathbb R\)</td></tr>
<tr><td>\(x^3\)</td><td>\(3x^2\)</td><td>\(\mathbb R\)</td></tr>
<tr><td>\(x^n\) (\(n\geqslant1\) entier)</td><td>\(nx^{n-1}\)</td><td>\(\mathbb R\)</td></tr>
<tr><td>\(\dfrac1x\)</td><td>\(-\dfrac1{x^2}\)</td><td>\(]-\infty\,;0[\) et \(]0\,;+\infty[\)</td></tr>
<tr><td>\(\dfrac1{x^n}=x^{-n}\) (\(n\geqslant1\))</td><td>\(-\dfrac{n}{x^{n+1}}\)</td><td>\(]-\infty\,;0[\) et \(]0\,;+\infty[\)</td></tr>
<tr><td>\(\sqrt x\)</td><td>\(\dfrac1{2\sqrt x}\)</td><td>\(]0\,;+\infty[\)</td></tr>
</table>
Bilan : pour tout \(n\in\mathbb Z\), la dérivée de \(x^n\) est \(nx^{n-1}\) (sur \(\mathbb R\) si \(n\geqslant0\), sur \(\mathbb R^*\) si \(n&lt;0\)).</div>
<div class="prop"><b>Démonstration : dérivée de \(x\mapsto x^2\).</b> Pour \(a\) réel et \(h\neq0\) :
\[\frac{(a+h)^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h\xrightarrow[h\to0]{}2a.\]
Donc \(f'(a)=2a\) pour tout \(a\) : \(f'(x)=2x\).</div>
<div class="prop"><b>Démonstration : dérivée de \(x\mapsto\dfrac1x\).</b> Pour \(a\neq0\) et \(h\neq0\) petit (avec \(a+h\neq0\)) :
\[\frac{\frac1{a+h}-\frac1a}{h}=\frac{a-(a+h)}{a(a+h)}\times\frac1h=\frac{-h}{a(a+h)h}=\frac{-1}{a(a+h)}\xrightarrow[h\to0]{}-\frac1{a^2}.\]</div>
<div class="prop"><b>Démonstration : dérivée de \(x\mapsto\sqrt x\) et non-dérivabilité en 0.</b> Pour \(a&gt;0\), on multiplie par la <b>quantité conjuguée</b> :
\[\frac{\sqrt{a+h}-\sqrt a}{h}=\frac{(\sqrt{a+h}-\sqrt a)(\sqrt{a+h}+\sqrt a)}{h(\sqrt{a+h}+\sqrt a)}=\frac{a+h-a}{h(\sqrt{a+h}+\sqrt a)}=\frac{1}{\sqrt{a+h}+\sqrt a}\xrightarrow[h\to0]{}\frac1{2\sqrt a}.\]
En \(a=0\) (avec \(h&gt;0\)) : \(\dfrac{\sqrt h-0}{h}=\dfrac1{\sqrt h}\), qui devient aussi grand que l'on veut quand \(h\) tend vers 0. Ce taux n'a pas de limite finie : <b>la fonction racine carrée n'est pas dérivable en 0</b> (sa courbe y a une tangente verticale).</div>
<div class="warn"><b>Piège.</b> \(\sqrt x\) est définie sur \([0\,;+\infty[\) mais dérivable seulement sur \(]0\,;+\infty[\).</div>` },

    { titre: "3. Opérations sur les fonctions dérivables", html: R`
<p>\(u\) et \(v\) sont deux fonctions dérivables sur un intervalle \(I\), et \(k\) un réel.</p>
<div class="prop"><b>Formules de dérivation.</b>
<table>
<tr><th>Fonction</th><th>Dérivée</th><th>Condition</th></tr>
<tr><td>\(u+v\)</td><td>\(u'+v'\)</td><td></td></tr>
<tr><td>\(ku\)</td><td>\(ku'\)</td><td></td></tr>
<tr><td>\(uv\)</td><td>\(u'v+uv'\)</td><td></td></tr>
<tr><td>\(\dfrac1v\)</td><td>\(-\dfrac{v'}{v^2}\)</td><td>\(v\) ne s'annule pas sur \(I\)</td></tr>
<tr><td>\(\dfrac uv\)</td><td>\(\dfrac{u'v-uv'}{v^2}\)</td><td>\(v\) ne s'annule pas sur \(I\)</td></tr>
<tr><td>\(x\mapsto g(ax+b)\)</td><td>\(x\mapsto a\,g'(ax+b)\)</td><td>\(ax+b\) dans l'ensemble où \(g\) est dérivable</td></tr>
</table></div>
<div class="prop"><b>Démonstration : dérivée d'un produit.</b> On écrit le taux de variation de \(uv\) en \(a\) en ajoutant et retranchant \(u(a)v(a+h)\) :
\[\frac{u(a+h)v(a+h)-u(a)v(a)}{h}=\frac{u(a+h)-u(a)}{h}\,v(a+h)+u(a)\,\frac{v(a+h)-v(a)}{h}.\]
Quand \(h\to0\), le premier quotient tend vers \(u'(a)\), \(v(a+h)\) tend vers \(v(a)\) (admis) et le second quotient vers \(v'(a)\). D'où \((uv)'(a)=u'(a)v(a)+u(a)v'(a)\).</div>
<div class="prop"><b>Conséquence :</b> les fonctions polynômes sont dérivables sur \(\mathbb R\), et on les dérive terme à terme. Par exemple \(\left(4x^3-5x^2+x-7\right)'=12x^2-10x+1\).</div>
<div class="ex"><b>Exemple résolu (produit).</b> \(f(x)=(x^2+1)\sqrt x\) sur \(]0\,;+\infty[\). On pose \(u(x)=x^2+1\), \(u'(x)=2x\), \(v(x)=\sqrt x\), \(v'(x)=\dfrac1{2\sqrt x}\).
\[f'(x)=2x\sqrt x+\frac{x^2+1}{2\sqrt x}=\frac{4x^2+x^2+1}{2\sqrt x}=\frac{5x^2+1}{2\sqrt x}.\]
(On a mis au même dénominateur en utilisant \(2x\sqrt x\times2\sqrt x=4x^2\).)</div>
<div class="ex"><b>Exemple résolu (quotient).</b> \(f(x)=\dfrac{2x+1}{x-3}\) sur \(]3\,;+\infty[\). \(u=2x+1\), \(u'=2\), \(v=x-3\), \(v'=1\).
\[f'(x)=\frac{2(x-3)-(2x+1)\times1}{(x-3)^2}=\frac{-7}{(x-3)^2}.\]</div>
<div class="ex"><b>Exemple résolu (\(g(ax+b)\)).</b> \(f(x)=(3x-1)^4\) : ici \(g(X)=X^4\), \(g'(X)=4X^3\), \(a=3\). Donc \(f'(x)=3\times4(3x-1)^3=12(3x-1)^3\).<br>
\(h(x)=\sqrt{5-2x}\) sur \(\left]-\infty\,;\dfrac52\right[\) : \(a=-2\), donc \(h'(x)=-2\times\dfrac1{2\sqrt{5-2x}}=-\dfrac1{\sqrt{5-2x}}\).</div>
<div class="warn"><b>Pièges classiques.</b>
<ul><li>\((uv)'\neq u'v'\) ! Et \(\left(\dfrac uv\right)'\neq\dfrac{u'}{v'}\).</li>
<li>Dans le quotient, c'est \(u'v-uv'\) (dans cet ordre) : une inversion change le signe.</li>
<li>Ne développe pas le dénominateur \(v^2\) : on le garde au carré, c'est plus pratique pour étudier un signe.</li>
<li>Pour \((2x+1)^3\), n'oublie pas le facteur \(a=2\) : la dérivée est \(6(2x+1)^2\), pas \(3(2x+1)^2\).</li></ul></div>` },

    { titre: "4. Valeur absolue et coût marginal", html: R`
<div class="def"><b>Valeur absolue.</b> Pour tout réel \(x\), \(|x|=x\) si \(x\geqslant0\) et \(|x|=-x\) si \(x&lt;0\). C'est la distance entre \(x\) et 0. Sa courbe est en forme de « V », symétrique par rapport à l'axe des ordonnées.</div>
<div class="prop"><b>La fonction valeur absolue n'est pas dérivable en 0</b> (démonstration au programme). Pour \(h\neq0\) :
\[\frac{|0+h|-|0|}{h}=\frac{|h|}{h}=\begin{cases}1&amp;\text{si }h&gt;0\\-1&amp;\text{si }h&lt;0\end{cases}\]
Le taux vaut 1 à droite de 0 et \(-1\) à gauche : il ne se rapproche pas d'<b>un</b> seul nombre quand \(h\) tend vers 0. Il n'y a pas de nombre dérivé en 0 : la courbe a un « point anguleux » (deux demi-tangentes différentes).<br>
En revanche, elle est dérivable sur \(]-\infty\,;0[\) (dérivée \(-1\)) et sur \(]0\,;+\infty[\) (dérivée \(1\)).</div>
<div class="def"><b>Coût marginal.</b> En économie, si \(C(q)\) est le coût total de production de \(q\) unités, le <b>coût marginal</b> est le coût de production d'une unité supplémentaire : \(C(q+1)-C(q)\). C'est le taux de variation de \(C\) entre \(q\) et \(q+1\) (avec \(h=1\)). Quand \(q\) est grand, on l'approche par le nombre dérivé : \(C_m(q)\approx C'(q)\). En pratique, <b>on appelle coût marginal la dérivée \(C'(q)\)</b>.</div>
<div class="ex"><b>Exemple.</b> \(C(q)=q^2+10q+400\). Coût marginal : \(C'(q)=2q+10\). Pour \(q=20\) : \(C'(20)=50\) €, à comparer avec \(C(21)-C(20)=1051-1000=51\) €.</div>
<div class="astuce"><b>Approximation affine.</b> Plus généralement, pour \(h\) proche de 0, \(f(a+h)\approx f(a)+f'(a)\,h\) : près de \(A\), la courbe se confond presque avec sa tangente.</div>` }
  ],

  quiz: [
    { q: R`Que représente graphiquement le nombre dérivé \(f'(a)\) ?`, choix: [R`L'ordonnée du point de la courbe d'abscisse \(a\)`, R`Le coefficient directeur de la tangente au point d'abscisse \(a\)`, R`L'ordonnée à l'origine de la tangente`, R`L'abscisse du point où la tangente coupe l'axe des abscisses`], bonne: 1, explication: R`\(f'(a)\) est la pente (coefficient directeur) de la tangente en \(A(a\,;f(a))\). L'ordonnée du point, c'est \(f(a)\).` },
    { q: R`Pour \(f(x)=x^2\), le taux de variation entre 1 et \(1+h\) vaut :`, choix: [R`\(h\)`, R`\(2+h\)`, R`\(2h+h^2\)`, R`\(2\)`], bonne: 1, explication: R`\(\dfrac{(1+h)^2-1}{h}=\dfrac{2h+h^2}{h}=2+h\). Quand \(h\to0\), on obtient \(f'(1)=2\).` },
    { q: R`La dérivée de \(f(x)=x^5\) est :`, choix: [R`\(5x^5\)`, R`\(4x^5\)`, R`\(x^4\)`, R`\(5x^4\)`], bonne: 3, explication: R`\((x^n)'=nx^{n-1}\) : avec \(n=5\), \(f'(x)=5x^4\).` },
    { q: R`La dérivée de \(f(x)=\dfrac1x\) est :`, choix: [R`\(\dfrac1{x^2}\)`, R`\(-\dfrac1{x^2}\)`, R`\(\ln x\)`, R`\(-\dfrac1x\)`], bonne: 1, explication: R`\(\left(\dfrac1x\right)'=-\dfrac1{x^2}\) sur \(]-\infty\,;0[\) et sur \(]0\,;+\infty[\). Le signe moins est essentiel : la fonction inverse est décroissante sur chacun de ces intervalles.` },
    { q: R`On sait que \(f(2)=3\) et \(f'(2)=-1\). La tangente en 2 a pour équation :`, choix: [R`\(y=-x+5\)`, R`\(y=3x-1\)`, R`\(y=-x+3\)`, R`\(y=-x-5\)`], bonne: 0, explication: R`\(y=f'(2)(x-2)+f(2)=-(x-2)+3=-x+5\).` },
    { q: R`La dérivée de \(f(x)=\sqrt x\) sur \(]0\,;+\infty[\) est :`, choix: [R`\(\dfrac{1}{\sqrt x}\)`, R`\(2\sqrt x\)`, R`\(\dfrac{1}{2\sqrt x}\)`, R`\(\dfrac{\sqrt x}{2}\)`], bonne: 2, explication: R`C'est une formule du cours à connaître par cœur : \((\sqrt x)'=\dfrac1{2\sqrt x}\). Attention, \(\sqrt x\) n'est pas dérivable en 0.` },
    { q: R`La dérivée de \(f(x)=(3x+1)^2\) est :`, choix: [R`\(2(3x+1)\)`, R`\(6(3x+1)\)`, R`\(6x\)`, R`\(3(3x+1)^2\)`], bonne: 1, explication: R`Avec \(g(X)=X^2\) et \(a=3\) : \(f'(x)=3\times2(3x+1)=6(3x+1)\). On peut vérifier en développant : \(9x^2+6x+1\) a pour dérivée \(18x+6=6(3x+1)\).` },
    { q: R`Si \(u\) et \(v\) sont dérivables, \((uv)'\) vaut :`, choix: [R`\(u'v'\)`, R`\(u'v-uv'\)`, R`\(u'v+uv'\)`, R`\(\dfrac{u'v-uv'}{v^2}\)`], bonne: 2, explication: R`\((uv)'=u'v+uv'\). La forme \(u'v-uv'\) apparaît au numérateur de la dérivée d'un <b>quotient</b>.` }
  ],

  exercices: [
    { niveau: 1, titre: "Du taux de variation au nombre dérivé",
      enonce: R`Soit \(f(x)=x^2+1\).
<ol><li>Calcule le taux de variation de \(f\) entre 1 et 3. Interprète-le graphiquement.</li>
<li>Pour \(h\neq0\), montre que \(\dfrac{f(2+h)-f(2)}{h}=4+h\).</li>
<li>En déduire que \(f\) est dérivable en 2 et donne \(f'(2)\).</li></ol>`,
      indice: R`Développe \((2+h)^2=4+4h+h^2\), puis factorise le numérateur par \(h\).`,
      correction: R`<ol><li>\(f(1)=2\) et \(f(3)=10\). Taux : \(\dfrac{f(3)-f(1)}{3-1}=\dfrac{10-2}{2}=4\). C'est le coefficient directeur de la sécante passant par les points \((1\,;2)\) et \((3\,;10)\) de la courbe.</li>
<li>\(f(2+h)=(2+h)^2+1=4+4h+h^2+1=5+4h+h^2\) et \(f(2)=5\). Donc \(\dfrac{f(2+h)-f(2)}{h}=\dfrac{4h+h^2}{h}=\dfrac{h(4+h)}{h}=4+h\).</li>
<li>Quand \(h\) tend vers 0, \(4+h\) tend vers 4, qui est un réel. Donc \(f\) est dérivable en 2 et \(f'(2)=4\).</li></ol>` },

    { niveau: 1, titre: "Dériver des fonctions usuelles",
      enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué.
<ol><li>\(f(x)=5x^3-2x^2+7x-1\) sur \(\mathbb R\)</li>
<li>\(g(x)=\dfrac4x\) sur \(]0\,;+\infty[\)</li>
<li>\(h(x)=3\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(k(x)=\dfrac1{x^3}\) sur \(]0\,;+\infty[\)</li></ol>`,
      indice: R`Utilise le tableau des dérivées usuelles, et \((ku)'=ku'\). Pour \(k\), écris \(\dfrac1{x^3}=x^{-3}\).`,
      correction: R`<ol><li>On dérive terme à terme : \(f'(x)=5\times3x^2-2\times2x+7=15x^2-4x+7\).</li>
<li>\(g(x)=4\times\dfrac1x\), donc \(g'(x)=4\times\left(-\dfrac1{x^2}\right)=-\dfrac4{x^2}\).</li>
<li>\(h'(x)=3\times\dfrac1{2\sqrt x}=\dfrac3{2\sqrt x}\).</li>
<li>\(k(x)=x^{-3}\), donc \(k'(x)=-3x^{-4}=-\dfrac3{x^4}\).</li></ol>` },

    { niveau: 1, titre: "Lecture graphique de nombres dérivés",
      enonce: R`On considère une fonction \(f\) dérivable sur \(\mathbb R\), de courbe \(\mathcal C_f\). On sait que :
<ul><li>\(\mathcal C_f\) passe par \(A(1\,;2)\) et la tangente en \(A\) passe aussi par \(B(3\,;6)\) ;</li>
<li>\(\mathcal C_f\) admet au point \(C(4\,;5)\) une tangente parallèle à l'axe des abscisses ;</li>
<li>\(\mathcal C_f\) passe par \(D(0\,;1)\) et la tangente en \(D\) passe par \(E(2\,;0)\).</li></ul>
<ol><li>Donne \(f(1)\), \(f(4)\), \(f(0)\).</li>
<li>Détermine \(f'(1)\), \(f'(4)\) et \(f'(0)\).</li>
<li>Donne une équation de chacune des trois tangentes.</li></ol>`,
      indice: R`Le nombre dérivé est le coefficient directeur de la tangente : \(\dfrac{y_B-y_A}{x_B-x_A}\). Une tangente horizontale a un coefficient directeur nul.`,
      correction: R`<ol><li>Les points sont sur la courbe : \(f(1)=2\), \(f(4)=5\), \(f(0)=1\).</li>
<li>\(f'(1)=\dfrac{6-2}{3-1}=2\) ; \(f'(4)=0\) (tangente horizontale) ; \(f'(0)=\dfrac{0-1}{2-0}=-\dfrac12\).</li>
<li>En \(A\) : \(y=2(x-1)+2=2x\).<br>
En \(C\) : \(y=0\times(x-4)+5\), soit \(y=5\).<br>
En \(D\) : \(y=-\dfrac12(x-0)+1=-\dfrac12x+1\).</li></ol>` },

    { niveau: 1, titre: "Équation de tangente",
      enonce: R`<ol><li>Soit \(f(x)=x^2-3x\). Détermine une équation de la tangente à \(\mathcal C_f\) au point d'abscisse 2.</li>
<li>Soit \(g(x)=\dfrac1x\). Détermine une équation de la tangente à \(\mathcal C_g\) au point d'abscisse \(-1\).</li></ol>`,
      indice: R`Trois étapes : calcule \(f(a)\), calcule \(f'(x)\) puis \(f'(a)\), et applique \(y=f'(a)(x-a)+f(a)\).`,
      correction: R`<ol><li>\(f(2)=4-6=-2\). \(f'(x)=2x-3\), donc \(f'(2)=1\).<br>
Tangente : \(y=1\times(x-2)+(-2)\), soit \(y=x-4\).</li>
<li>\(g(-1)=-1\). \(g'(x)=-\dfrac1{x^2}\), donc \(g'(-1)=-\dfrac11=-1\).<br>
Tangente : \(y=-1\times(x-(-1))+(-1)=-(x+1)-1\), soit \(y=-x-2\).</li></ol>` },

    { niveau: 2, titre: "Produits, inverses et quotients",
      enonce: R`Calcule la dérivée de chaque fonction et simplifie.
<ol><li>\(f(x)=(2x+1)\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(g(x)=\dfrac{3x-1}{x+2}\) sur \(]-2\,;+\infty[\)</li>
<li>\(h(x)=\dfrac1{x^2+1}\) sur \(\mathbb R\)</li></ol>`,
      indice: R`Identifie \(u\) et \(v\) et écris \(u'\), \(v'\) avant d'appliquer la formule. Pour \(f\), mets au même dénominateur \(2\sqrt x\).`,
      correction: R`<ol><li>\(u(x)=2x+1\), \(u'(x)=2\) ; \(v(x)=\sqrt x\), \(v'(x)=\dfrac1{2\sqrt x}\).
\[f'(x)=2\sqrt x+(2x+1)\times\frac1{2\sqrt x}=\frac{2\sqrt x\times2\sqrt x+2x+1}{2\sqrt x}=\frac{4x+2x+1}{2\sqrt x}=\frac{6x+1}{2\sqrt x}.\]</li>
<li>\(u(x)=3x-1\), \(u'(x)=3\) ; \(v(x)=x+2\), \(v'(x)=1\) (et \(v\) ne s'annule pas sur \(]-2\,;+\infty[\)).
\[g'(x)=\frac{3(x+2)-(3x-1)\times1}{(x+2)^2}=\frac{3x+6-3x+1}{(x+2)^2}=\frac{7}{(x+2)^2}.\]</li>
<li>\(v(x)=x^2+1\) ne s'annule jamais, \(v'(x)=2x\). Avec \(\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\) :
\[h'(x)=-\frac{2x}{(x^2+1)^2}.\]</li></ol>` },

    { niveau: 2, titre: "Fonctions du type g(ax+b)",
      enonce: R`Calcule la dérivée de chaque fonction.
<ol><li>\(f(x)=(2x-5)^3\) sur \(\mathbb R\)</li>
<li>\(g(x)=\sqrt{4x+1}\) sur \(\left]-\dfrac14\,;+\infty\right[\)</li>
<li>\(h(x)=\dfrac1{3x+2}\) sur \(\left]-\dfrac23\,;+\infty\right[\)</li></ol>`,
      indice: R`\(\big(g(ax+b)\big)'=a\times g'(ax+b)\). Repère la fonction « de base » \(g\) et le coefficient \(a\).`,
      correction: R`<ol><li>\(g(X)=X^3\), \(g'(X)=3X^2\), \(a=2\) : \(f'(x)=2\times3(2x-5)^2=6(2x-5)^2\).</li>
<li>\(g(X)=\sqrt X\), \(g'(X)=\dfrac1{2\sqrt X}\), \(a=4\). Pour \(x&gt;-\dfrac14\), \(4x+1&gt;0\), donc :
\[g'(x)=4\times\frac{1}{2\sqrt{4x+1}}=\frac{2}{\sqrt{4x+1}}.\]</li>
<li>Fonction de base \(X\mapsto\dfrac1X\), de dérivée \(-\dfrac1{X^2}\), et \(a=3\) : \(h'(x)=3\times\left(-\dfrac1{(3x+2)^2}\right)=-\dfrac{3}{(3x+2)^2}\).<br>
(On retrouve le même résultat avec \(\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\) et \(v'=3\).)</li></ol>` },

    { niveau: 2, titre: "Nombre dérivé par la limite : inverse et racine",
      enonce: R`<ol><li>Soit \(f(x)=\dfrac1x\). Pour \(h\neq0\) proche de 0, calcule \(\dfrac{f(2+h)-f(2)}{h}\), puis déduis-en \(f'(2)\).</li>
<li>Soit \(g(x)=\sqrt x\). Montre que pour \(h\neq0\) (avec \(h&gt;-4\)), \(\dfrac{g(4+h)-g(4)}{h}=\dfrac{1}{\sqrt{4+h}+2}\), puis déduis-en \(g'(4)\).</li>
<li>Vérifie ces deux résultats avec les formules du cours.</li></ol>`,
      indice: R`Pour 1, mets \(\dfrac1{2+h}-\dfrac12\) au même dénominateur. Pour 2, multiplie numérateur et dénominateur par la quantité conjuguée \(\sqrt{4+h}+2\).`,
      correction: R`<ol><li>\(\dfrac1{2+h}-\dfrac12=\dfrac{2-(2+h)}{2(2+h)}=\dfrac{-h}{2(2+h)}\). Donc \(\dfrac{f(2+h)-f(2)}{h}=\dfrac{-1}{2(2+h)}\).<br>
Quand \(h\to0\), cela tend vers \(\dfrac{-1}{4}\) : \(f'(2)=-\dfrac14\).</li>
<li>\(\dfrac{\sqrt{4+h}-2}{h}=\dfrac{(\sqrt{4+h}-2)(\sqrt{4+h}+2)}{h(\sqrt{4+h}+2)}=\dfrac{4+h-4}{h(\sqrt{4+h}+2)}=\dfrac1{\sqrt{4+h}+2}\).<br>
Quand \(h\to0\), cela tend vers \(\dfrac1{2+2}=\dfrac14\) : \(g'(4)=\dfrac14\).</li>
<li>\(f'(x)=-\dfrac1{x^2}\) donne \(f'(2)=-\dfrac14\) ✓. \(g'(x)=\dfrac1{2\sqrt x}\) donne \(g'(4)=\dfrac1{2\times2}=\dfrac14\) ✓.</li></ol>` },

    { niveau: 2, titre: "Vitesse instantanée : la chute libre",
      enonce: R`On lâche une bille du haut d'une tour. La distance parcourue (en m) au bout de \(t\) secondes est \(d(t)=4{,}9t^2\).
<ol><li>Calcule la vitesse moyenne de la bille entre \(t=1\) et \(t=3\).</li>
<li>Pour \(h\neq0\), calcule \(\dfrac{d(2+h)-d(2)}{h}\) et déduis-en la vitesse instantanée à \(t=2\) s.</li>
<li>Retrouve ce résultat avec la fonction dérivée, puis donne la vitesse à \(t=3\) s en m/s et en km/h.</li></ol>`,
      indice: R`Vitesse moyenne = distance parcourue / durée. Vitesse instantanée = \(d'(t)\). Pour passer de m/s à km/h, multiplie par 3,6.`,
      correction: R`<ol><li>\(d(1)=4{,}9\) m et \(d(3)=4{,}9\times9=44{,}1\) m. Vitesse moyenne : \(\dfrac{44{,}1-4{,}9}{3-1}=\dfrac{39{,}2}{2}=19{,}6\) m/s.</li>
<li>\(d(2+h)=4{,}9(4+4h+h^2)=19{,}6+19{,}6h+4{,}9h^2\) et \(d(2)=19{,}6\).<br>
\(\dfrac{d(2+h)-d(2)}{h}=\dfrac{19{,}6h+4{,}9h^2}{h}=19{,}6+4{,}9h\), qui tend vers 19,6 quand \(h\to0\). La vitesse instantanée à \(t=2\) s est 19,6 m/s.<br>
(Ce n'est pas un hasard qu'elle soit égale à la vitesse moyenne entre 1 et 3 : pour une fonction du second degré, la pente de la sécante entre \(a-k\) et \(a+k\) est toujours égale au nombre dérivé en \(a\).)</li>
<li>\(d'(t)=4{,}9\times2t=9{,}8t\). \(d'(2)=19{,}6\) m/s ✓.<br>
\(d'(3)=29{,}4\) m/s, soit \(29{,}4\times3{,}6=105{,}84\) km/h.</li></ol>` },

    { niveau: 3, titre: "Tangentes parallèles et position relative",
      enonce: R`Soit \(f(x)=x^3-3x\) définie sur \(\mathbb R\), de courbe \(\mathcal C\).
<ol><li>Calcule \(f'(x)\).</li>
<li>En quels points \(\mathcal C\) admet-elle une tangente horizontale ?</li>
<li>Détermine les points de \(\mathcal C\) où la tangente est parallèle à la droite \(\Delta : y=9x+1\), et donne une équation de chacune de ces tangentes.</li>
<li>Soit \(T\) la tangente au point d'abscisse 1. Vérifie que \(f(x)-(-2)=(x-1)^2(x+2)\), puis étudie la position de \(\mathcal C\) par rapport à \(T\).</li></ol>`,
      indice: R`Deux droites sont parallèles si elles ont le même coefficient directeur : résous \(f'(x)=9\). Pour la position relative, étudie le signe de \(f(x)-y_T\).`,
      correction: R`<ol><li>\(f'(x)=3x^2-3\).</li>
<li>\(f'(x)=0\iff x^2=1\iff x=1\) ou \(x=-1\). \(f(1)=-2\) et \(f(-1)=2\) : tangentes horizontales aux points \((1\,;-2)\) et \((-1\,;2)\).</li>
<li>\(f'(x)=9\iff3x^2=12\iff x^2=4\iff x=2\) ou \(x=-2\).<br>
En \(x=2\) : \(f(2)=8-6=2\), tangente \(y=9(x-2)+2=9x-16\).<br>
En \(x=-2\) : \(f(-2)=-8+6=-2\), tangente \(y=9(x+2)-2=9x+16\).</li>
<li>D'après la question 2, \(T : y=-2\). On développe \((x-1)^2(x+2)=(x^2-2x+1)(x+2)=x^3+2x^2-2x^2-4x+x+2=x^3-3x+2\), qui est bien \(f(x)+2=f(x)-(-2)\).<br>
\((x-1)^2\geqslant0\), donc \(f(x)-(-2)\) a le signe de \(x+2\) (et s'annule en 1) :
<ul><li>pour \(x&lt;-2\), \(\mathcal C\) est <b>en dessous</b> de \(T\) ;</li>
<li>pour \(x&gt;-2\), \(\mathcal C\) est <b>au-dessus</b> de \(T\) (elle la touche en \(x=1\)) ;</li>
<li>elles se coupent en \(x=-2\) et \(x=1\).</li></ul></li></ol>` },

    { niveau: 3, titre: "Valeur absolue : dérivable ou pas ?",
      enonce: R`<ol><li>Rappelle pourquoi la fonction \(x\mapsto|x|\) n'est pas dérivable en 0.</li>
<li>Soit \(f(x)=x|x|\) définie sur \(\mathbb R\). Écris \(f(x)\) sans valeur absolue sur \([0\,;+\infty[\) et sur \(]-\infty\,;0[\).</li>
<li>Calcule le taux de variation de \(f\) entre 0 et \(h\) (\(h\neq0\)). La fonction \(f\) est-elle dérivable en 0 ? Si oui, donne \(f'(0)\).</li>
<li>Exprime \(f'(x)\) pour \(x&gt;0\) et pour \(x&lt;0\), puis montre que pour tout réel \(x\), \(f'(x)=2|x|\).</li></ol>`,
      indice: R`Dans le taux \(\dfrac{h|h|}{h}\), simplifie par \(h\) : il reste \(|h|\). Que fait \(|h|\) quand \(h\) tend vers 0 ?`,
      correction: R`<ol><li>\(\dfrac{|h|-|0|}{h}=\dfrac{|h|}{h}\) vaut 1 si \(h&gt;0\) et \(-1\) si \(h&lt;0\). Quand \(h\) tend vers 0, ce taux ne se rapproche pas d'un unique réel : pas de nombre dérivé en 0.</li>
<li>Si \(x\geqslant0\), \(|x|=x\) donc \(f(x)=x^2\). Si \(x&lt;0\), \(|x|=-x\) donc \(f(x)=-x^2\).</li>
<li>\(\dfrac{f(h)-f(0)}{h}=\dfrac{h|h|-0}{h}=|h|\). Quand \(h\) tend vers 0, \(|h|\) tend vers 0. Donc \(f\) <b>est dérivable en 0</b> et \(f'(0)=0\) (tangente horizontale en l'origine). Multiplier par \(x\) a « adouci » le point anguleux !</li>
<li>Pour \(x&gt;0\), \(f'(x)=2x=2|x|\). Pour \(x&lt;0\), \(f'(x)=-2x=2|x|\) (car \(-x=|x|\)). Et \(f'(0)=0=2|0|\). Donc pour tout réel \(x\), \(f'(x)=2|x|\).</li></ol>` },

    { niveau: 3, titre: "Coût marginal d'une entreprise",
      enonce: R`Une entreprise fabrique entre 0 et 60 objets par jour. Le coût total de fabrication de \(q\) objets, en euros, est
\[C(q)=0{,}01q^3-0{,}6q^2+15q+100.\]
<ol><li>Calcule \(C(30)\) et \(C(31)\). Combien coûte la fabrication du 31e objet ?</li>
<li>Le coût marginal est assimilé à \(C'(q)\). Calcule \(C'(q)\) puis \(C'(30)\). Compare avec la question 1.</li>
<li>\(C'\) est une fonction polynôme du second degré. Pour quelle production le coût marginal est-il minimal ? Que vaut-il alors ?</li>
<li>Pour quelles productions le coût marginal vaut-il 15 € ?</li></ol>`,
      indice: R`Pour la 3, le minimum d'un trinôme \(aq^2+bq+c\) avec \(a&gt;0\) est atteint en \(q=-\dfrac{b}{2a}\).`,
      correction: R`<ol><li>\(C(30)=0{,}01\times27\,000-0{,}6\times900+450+100=270-540+450+100=280\) €.<br>
\(C(31)=0{,}01\times29\,791-0{,}6\times961+465+100=297{,}91-576{,}6+465+100=286{,}31\) €.<br>
Le 31e objet coûte \(C(31)-C(30)=6{,}31\) €.</li>
<li>\(C'(q)=0{,}03q^2-1{,}2q+15\). \(C'(30)=0{,}03\times900-36+15=27-36+15=6\) €. C'est une bonne approximation du coût réel du 31e objet (6,31 €).</li>
<li>\(C'(q)=0{,}03q^2-1{,}2q+15\) avec \(a=0{,}03&gt;0\) : le minimum est atteint en \(q=-\dfrac{-1{,}2}{2\times0{,}03}=\dfrac{1{,}2}{0{,}06}=20\).<br>
\(C'(20)=0{,}03\times400-24+15=12-24+15=3\) €. Le coût marginal est minimal (3 €) pour une production de 20 objets.</li>
<li>\(C'(q)=15\iff0{,}03q^2-1{,}2q=0\iff q(0{,}03q-1{,}2)=0\iff q=0\) ou \(q=40\). Le coût marginal vaut 15 € pour \(q=0\) et pour \(q=40\) objets.</li></ol>` },

    { niveau: 3, titre: "Tangentes issues d'un point extérieur",
      enonce: R`Soit \(f(x)=x^2\), de courbe \(\mathcal P\) (une parabole), et le point \(P(1\,;-3)\), qui n'est pas sur \(\mathcal P\).
<ol><li>Soit \(a\) un réel. Montre que la tangente \(T_a\) à \(\mathcal P\) au point d'abscisse \(a\) a pour équation \(y=2ax-a^2\).</li>
<li>Montre que \(T_a\) passe par \(P\) si et seulement si \(a^2-2a-3=0\).</li>
<li>Déduis-en les équations des tangentes à \(\mathcal P\) passant par \(P\), ainsi que les points de contact.</li></ol>`,
      indice: R`Un point \((x_P\,;y_P)\) est sur la droite \(y=mx+p\) si et seulement si \(y_P=mx_P+p\). L'équation du second degré se résout avec le discriminant (ou une factorisation).`,
      correction: R`<ol><li>\(f(a)=a^2\), \(f'(x)=2x\) donc \(f'(a)=2a\). \(T_a : y=2a(x-a)+a^2=2ax-2a^2+a^2=2ax-a^2\).</li>
<li>\(P\in T_a\iff-3=2a\times1-a^2\iff a^2-2a-3=0\).</li>
<li>\(\Delta=(-2)^2-4\times1\times(-3)=16&gt;0\) : deux solutions \(a=\dfrac{2-4}{2}=-1\) et \(a=\dfrac{2+4}{2}=3\).<br>
Pour \(a=3\) : \(T_3 : y=6x-9\), point de contact \((3\,;9)\).<br>
Pour \(a=-1\) : \(T_{-1} : y=-2x-1\), point de contact \((-1\,;1)\).<br>
Vérification : \(6\times1-9=-3\) ✓ et \(-2\times1-1=-3\) ✓. Il y a donc exactement deux tangentes à \(\mathcal P\) passant par \(P\).</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Nombre dérivé, tangentes et dérivées usuelles", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Nombre dérivé par le calcul", points: 5,
          enonce: R`Soit \(f(x)=x^2-2x+3\).
<ol><li>Pour \(h\neq0\), montre que \(\dfrac{f(1+h)-f(1)}{h}=h\). Déduis-en \(f'(1)\) et interprète graphiquement.</li>
<li>Pour \(h\neq0\), calcule \(\dfrac{f(3+h)-f(3)}{h}\) et déduis-en \(f'(3)\).</li>
<li>Donne une équation de la tangente à \(\mathcal C_f\) au point d'abscisse 3.</li></ol>`,
          correction: R`<ol><li>\(f(1)=1-2+3=2\) et \(f(1+h)=1+2h+h^2-2-2h+3=2+h^2\). Donc \(\dfrac{f(1+h)-f(1)}{h}=\dfrac{h^2}{h}=h\). <b>(1 pt)</b><br>
Quand \(h\to0\), ce taux tend vers 0 : \(f'(1)=0\). La tangente au point \((1\,;2)\) est horizontale (d'équation \(y=2\)). <b>(1 pt)</b></li>
<li>\(f(3)=9-6+3=6\) ; \(f(3+h)=9+6h+h^2-6-2h+3=6+4h+h^2\). Taux : \(\dfrac{4h+h^2}{h}=4+h\), qui tend vers 4 : \(f'(3)=4\). <b>(2 pts)</b></li>
<li>\(y=4(x-3)+6=4x-6\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Calculs de dérivées", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction (on admet qu'elles sont dérivables sur l'intervalle indiqué).
<ol><li>\(f_1(x)=3x^4-5x^2+2x-7\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=\dfrac2x+x\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=x\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(f_4(x)=(x^2+1)(3x-2)\) sur \(\mathbb R\)</li>
<li>\(f_5(x)=\dfrac1{x^4}\) sur \(]0\,;+\infty[\)</li>
<li>\(f_6(x)=5\sqrt x-\dfrac1x\) sur \(]0\,;+\infty[\)</li></ol>`,
          correction: R`<b>1 pt par question</b> (0,5 pour la méthode, 0,5 pour le résultat).
<ol><li>\(f_1'(x)=12x^3-10x+2\).</li>
<li>\(f_2'(x)=-\dfrac2{x^2}+1\).</li>
<li>Produit avec \(u=x\), \(v=\sqrt x\) : \(f_3'(x)=1\times\sqrt x+x\times\dfrac1{2\sqrt x}=\sqrt x+\dfrac{\sqrt x}{2}=\dfrac32\sqrt x\) (car \(\dfrac{x}{\sqrt x}=\sqrt x\)).</li>
<li>Produit avec \(u=x^2+1\), \(v=3x-2\) : \(f_4'(x)=2x(3x-2)+3(x^2+1)=6x^2-4x+3x^2+3=9x^2-4x+3\).<br>(Vérification en développant : \(f_4(x)=3x^3-2x^2+3x-2\), de dérivée \(9x^2-4x+3\) ✓.)</li>
<li>\(f_5(x)=x^{-4}\), donc \(f_5'(x)=-4x^{-5}=-\dfrac4{x^5}\).</li>
<li>\(f_6'(x)=\dfrac5{2\sqrt x}+\dfrac1{x^2}\).</li></ol>` },
        { titre: "Exercice 3 — Les tangentes à l'hyperbole", points: 5,
          enonce: R`Soit \(f(x)=\dfrac1x\) sur \(]0\,;+\infty[\), et \(a&gt;0\).
<ol><li>Montre que la tangente \(T_a\) au point d'abscisse \(a\) a pour équation \(y=-\dfrac{1}{a^2}x+\dfrac2a\).</li>
<li>Détermine \(a\) pour que \(T_a\) coupe l'axe des ordonnées au point \((0\,;1)\).</li>
<li>Montre que \(T_a\) coupe l'axe des abscisses au point d'abscisse \(2a\).</li>
<li>Montre que l'aire du triangle formé par \(T_a\) et les deux axes ne dépend pas de \(a\).</li></ol>`,
          correction: R`<ol><li>\(f(a)=\dfrac1a\), \(f'(x)=-\dfrac1{x^2}\) donc \(f'(a)=-\dfrac1{a^2}\). <b>(0,5 pt)</b><br>
\(T_a : y=-\dfrac1{a^2}(x-a)+\dfrac1a=-\dfrac{x}{a^2}+\dfrac1a+\dfrac1a=-\dfrac1{a^2}x+\dfrac2a\). <b>(1 pt)</b></li>
<li>L'ordonnée à l'origine est \(\dfrac2a\). \(\dfrac2a=1\iff a=2\). <b>(1 pt)</b></li>
<li>\(y=0\iff\dfrac{x}{a^2}=\dfrac2a\iff x=\dfrac{2a^2}{a}=2a\). <b>(1 pt)</b></li>
<li>Le triangle est rectangle en \(O\), de côtés \(2a\) et \(\dfrac2a\) (tous deux positifs). Son aire est \(\dfrac12\times2a\times\dfrac2a=2\) unités d'aire, quelle que soit la valeur de \(a\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Un mobile sur un rail", points: 4,
          enonce: R`Un mobile se déplace sur un rail. Sa position (en m) à l'instant \(t\) (en s), pour \(t\in[0\,;4]\), est \(s(t)=t^3-6t^2+9t\).
<ol><li>Calcule la vitesse moyenne du mobile entre \(t=0\) et \(t=2\).</li>
<li>La vitesse instantanée est \(v(t)=s'(t)\). Calcule \(v(t)\), puis \(v(2)\). Interprète le signe obtenu.</li>
<li>À quels instants le mobile est-il à l'arrêt ?</li></ol>`,
          correction: R`<ol><li>\(s(0)=0\), \(s(2)=8-24+18=2\). Vitesse moyenne : \(\dfrac{2-0}{2-0}=1\) m/s. <b>(1 pt)</b></li>
<li>\(v(t)=3t^2-12t+9\). <b>(0,5 pt)</b> \(v(2)=12-24+9=-3\) m/s. <b>(0,5 pt)</b> La vitesse est négative : à cet instant, le mobile recule (sa position diminue) à 3 m/s. <b>(0,5 pt)</b></li>
<li>\(v(t)=0\iff3(t^2-4t+3)=0\). \(\Delta=16-12=4\), racines \(t=\dfrac{4-2}{2}=1\) et \(t=\dfrac{4+2}{2}=3\). Le mobile est à l'arrêt à \(t=1\) s et \(t=3\) s. <b>(1,5 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°2 — Opérations, valeur absolue et applications", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Dériver avec les formules", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué, et simplifie.
<ol><li>\(f_1(x)=\dfrac{3x+1}{x-2}\) sur \(]2\,;+\infty[\)</li>
<li>\(f_2(x)=(x^2-1)\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=(5-2x)^4\) sur \(\mathbb R\)</li>
<li>\(f_4(x)=\sqrt{3x+6}\) sur \(]-2\,;+\infty[\)</li>
<li>\(f_5(x)=\dfrac4{x^2+3}\) sur \(\mathbb R\)</li>
<li>\(f_6(x)=\dfrac{x^2}{x+1}\) sur \(]-1\,;+\infty[\)</li></ol>`,
          correction: R`<b>1 pt par question.</b>
<ol><li>\(u=3x+1\), \(u'=3\), \(v=x-2\), \(v'=1\) : \(f_1'(x)=\dfrac{3(x-2)-(3x+1)}{(x-2)^2}=\dfrac{-7}{(x-2)^2}\).</li>
<li>\(u=x^2-1\), \(u'=2x\), \(v=\sqrt x\), \(v'=\dfrac1{2\sqrt x}\) : \(f_2'(x)=2x\sqrt x+\dfrac{x^2-1}{2\sqrt x}=\dfrac{4x^2+x^2-1}{2\sqrt x}=\dfrac{5x^2-1}{2\sqrt x}\).</li>
<li>\(g(X)=X^4\), \(a=-2\) : \(f_3'(x)=-2\times4(5-2x)^3=-8(5-2x)^3\).</li>
<li>\(g(X)=\sqrt X\), \(a=3\) : \(f_4'(x)=\dfrac{3}{2\sqrt{3x+6}}\).</li>
<li>\(f_5=4\times\dfrac1v\) avec \(v=x^2+3\), \(v'=2x\) : \(f_5'(x)=4\times\left(-\dfrac{2x}{(x^2+3)^2}\right)=-\dfrac{8x}{(x^2+3)^2}\).</li>
<li>\(u=x^2\), \(u'=2x\), \(v=x+1\), \(v'=1\) : \(f_6'(x)=\dfrac{2x(x+1)-x^2}{(x+1)^2}=\dfrac{x^2+2x}{(x+1)^2}=\dfrac{x(x+2)}{(x+1)^2}\).</li></ol>` },
        { titre: "Exercice 2 — Tangente et position relative", points: 5,
          enonce: R`Soit \(f(x)=x^3-3x^2+2\) sur \(\mathbb R\), de courbe \(\mathcal C\).
<ol><li>Calcule \(f'(x)\). En quels points \(\mathcal C\) a-t-elle une tangente horizontale ?</li>
<li>Détermine une équation de la tangente \(T\) à \(\mathcal C\) au point d'abscisse 1.</li>
<li>Montre que pour tout réel \(x\), \(f(x)-(-3x+3)=(x-1)^3\).</li>
<li>Déduis-en la position relative de \(\mathcal C\) et \(T\).</li></ol>`,
          correction: R`<ol><li>\(f'(x)=3x^2-6x=3x(x-2)\). \(f'(x)=0\iff x=0\) ou \(x=2\). \(f(0)=2\), \(f(2)=8-12+2=-2\) : tangentes horizontales en \((0\,;2)\) et \((2\,;-2)\). <b>(1,5 pt)</b></li>
<li>\(f(1)=1-3+2=0\), \(f'(1)=3-6=-3\). \(T : y=-3(x-1)+0=-3x+3\). <b>(1 pt)</b></li>
<li>\(f(x)-(-3x+3)=x^3-3x^2+2+3x-3=x^3-3x^2+3x-1\). Or \((x-1)^3=(x-1)(x^2-2x+1)=x^3-2x^2+x-x^2+2x-1=x^3-3x^2+3x-1\). C'est bien égal. <b>(1,5 pt)</b></li>
<li>\((x-1)^3\) a le signe de \(x-1\) : pour \(x&lt;1\), \(\mathcal C\) est en dessous de \(T\) ; pour \(x&gt;1\), \(\mathcal C\) est au-dessus de \(T\). La courbe <b>traverse</b> sa tangente au point \((1\,;0)\) (on parle de point d'inflexion). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Valeur absolue", points: 4,
          enonce: R`Soit \(f(x)=|x-2|\) définie sur \(\mathbb R\).
<ol><li>Écris \(f(x)\) sans valeur absolue selon les valeurs de \(x\).</li>
<li>Calcule le taux de variation de \(f\) entre 2 et \(2+h\) (\(h\neq0\)), en distinguant \(h&gt;0\) et \(h&lt;0\). La fonction \(f\) est-elle dérivable en 2 ?</li>
<li>Donne \(f'(x)\) pour \(x&gt;2\) et pour \(x&lt;2\).</li></ol>`,
          correction: R`<ol><li>Si \(x\geqslant2\), \(x-2\geqslant0\) et \(f(x)=x-2\). Si \(x&lt;2\), \(f(x)=-(x-2)=2-x\). <b>(1 pt)</b></li>
<li>\(\dfrac{f(2+h)-f(2)}{h}=\dfrac{|h|-0}{h}=\dfrac{|h|}{h}\). Il vaut 1 si \(h&gt;0\) et \(-1\) si \(h&lt;0\). <b>(1 pt)</b><br>
Quand \(h\) tend vers 0, ce taux ne se rapproche pas d'un unique réel : \(f\) n'est <b>pas dérivable en 2</b> (point anguleux en \((2\,;0)\)). <b>(1 pt)</b></li>
<li>Pour \(x&gt;2\), \(f'(x)=1\) ; pour \(x&lt;2\), \(f'(x)=-1\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Coût moyen et coût marginal", points: 5,
          enonce: R`Une artisane fabrique \(q\) objets (\(q\in[1\,;100]\)). Son coût total, en euros, est \(C(q)=q^2+10q+400\).
<ol><li>Calcule le coût marginal \(C'(q)\), puis \(C'(20)\). Compare avec \(C(21)-C(20)\).</li>
<li>Le coût moyen est \(M(q)=\dfrac{C(q)}{q}\). Montre que \(M(q)=q+10+\dfrac{400}{q}\).</li>
<li>Montre que \(M'(q)=\dfrac{q^2-400}{q^2}\).</li>
<li>On admet que le coût moyen est minimal lorsque sa tangente est horizontale. Pour quelle production est-ce le cas ? Calcule ce coût moyen minimal et compare-le au coût marginal pour cette production.</li></ol>`,
          correction: R`<ol><li>\(C'(q)=2q+10\), donc \(C'(20)=50\) €. <b>(0,5 pt)</b><br>
\(C(21)=441+210+400=1051\) et \(C(20)=400+200+400=1000\), donc \(C(21)-C(20)=51\) € : le coût marginal \(C'(20)\) en est une bonne approximation. <b>(1 pt)</b></li>
<li>\(M(q)=\dfrac{q^2+10q+400}{q}=\dfrac{q^2}{q}+\dfrac{10q}{q}+\dfrac{400}{q}=q+10+\dfrac{400}q\). <b>(0,5 pt)</b></li>
<li>\(M'(q)=1+0+400\times\left(-\dfrac1{q^2}\right)=1-\dfrac{400}{q^2}=\dfrac{q^2-400}{q^2}\). <b>(1 pt)</b></li>
<li>Tangente horizontale : \(M'(q)=0\iff q^2=400\iff q=20\) (car \(q&gt;0\)). <b>(1 pt)</b><br>
\(M(20)=20+10+\dfrac{400}{20}=50\) €. C'est exactement le coût marginal \(C'(20)=50\) € : au minimum du coût moyen, coût moyen et coût marginal sont égaux. <b>(1 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°3 — Nombre dérivé, lecture graphique et approximation", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Du taux de variation à la tangente", points: 5,
          enonce: R`Soit \(f\) la fonction définie sur \(\mathbb R\) par \(f(x)=2x^2+x-1\), de courbe \(\mathcal C_f\).
<ol><li>Pour \(h\neq0\), calcule \(\dfrac{f(-1+h)-f(-1)}{h}\). Déduis-en que \(f\) est dérivable en \(-1\) et donne \(f'(-1)\).</li>
<li>Donne une équation de la tangente à \(\mathcal C_f\) au point d'abscisse \(-1\).</li>
<li>Soit \(a\) un réel. Pour \(h\neq0\), montre que \(\dfrac{f(a+h)-f(a)}{h}=4a+1+2h\). Déduis-en \(f'(a)\).</li>
<li>En quel point de \(\mathcal C_f\) la tangente est-elle horizontale ?</li></ol>`,
          correction: R`<ol><li>\(f(-1)=2-1-1=0\) et \(f(-1+h)=2(1-2h+h^2)+(-1+h)-1=2-4h+2h^2-1+h-1=-3h+2h^2\).<br>
Donc \(\dfrac{f(-1+h)-f(-1)}{h}=\dfrac{-3h+2h^2}{h}=-3+2h\). Quand \(h\) tend vers 0, ce taux tend vers \(-3\) : \(f\) est dérivable en \(-1\) et \(f'(-1)=-3\). <b>(1,5 pt)</b></li>
<li>\(y=f'(-1)(x+1)+f(-1)=-3(x+1)+0\), soit \(y=-3x-3\). <b>(1 pt)</b></li>
<li>\(f(a+h)-f(a)=2(a+h)^2+(a+h)-1-(2a^2+a-1)=2(2ah+h^2)+h=h(4a+1+2h)\).<br>
Donc pour \(h\neq0\), \(\dfrac{f(a+h)-f(a)}{h}=4a+1+2h\), qui tend vers \(4a+1\) quand \(h\to0\) : \(f'(a)=4a+1\). <b>(1,5 pt)</b><br>
(Vérification : \(f'(-1)=-4+1=-3\) ✓.)</li>
<li>La tangente est horizontale quand \(f'(a)=0\iff4a+1=0\iff a=-\dfrac14\).<br>
\(f\left(-\dfrac14\right)=2\times\dfrac1{16}-\dfrac14-1=\dfrac18-\dfrac28-\dfrac88=-\dfrac98\). C'est le point \(\left(-\dfrac14\,;-\dfrac98\right)\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Retrouver une fonction à partir de ses tangentes", points: 5,
          enonce: R`Une fonction \(f\) dérivable sur \(\mathbb R\) a une courbe \(\mathcal C_f\) qui vérifie les informations suivantes, lues sur un graphique :
<ul><li>\(\mathcal C_f\) passe par \(A(0\,;1)\) et la tangente en \(A\) passe par le point \(B(1\,;4)\) ;</li>
<li>\(\mathcal C_f\) passe par \(C(1\,;3)\) et la tangente en \(C\) est parallèle à l'axe des abscisses ;</li>
<li>\(\mathcal C_f\) passe par \(D(2\,;-1)\) et la tangente en \(D\) passe par le point \(E(1\,;8)\).</li></ul>
<ol><li>Donne \(f(0)\), \(f(1)\), \(f(2)\), puis \(f'(0)\), \(f'(1)\) et \(f'(2)\) en justifiant.</li>
<li>Donne une équation de la tangente en \(A\) et de la tangente en \(D\).</li>
<li>On admet que \(f(x)=ax^3+bx+c\), avec \(a\), \(b\), \(c\) réels. Calcule \(f'(x)\), puis détermine \(a\), \(b\) et \(c\) à l'aide de \(f(0)\), \(f'(0)\) et \(f'(1)\).</li>
<li>Vérifie que la fonction obtenue est cohérente avec les informations données au point \(D\).</li></ol>`,
          correction: R`<ol><li>Les points sont sur la courbe : \(f(0)=1\), \(f(1)=3\), \(f(2)=-1\). <b>(0,5 pt)</b><br>
\(f'(0)\) est le coefficient directeur de \((AB)\) : \(\dfrac{4-1}{1-0}=3\). La tangente en \(C\) est horizontale : \(f'(1)=0\). \(f'(2)\) est le coefficient directeur de \((DE)\) : \(\dfrac{8-(-1)}{1-2}=-9\). <b>(1,5 pt)</b></li>
<li>En \(A\) : \(y=3(x-0)+1=3x+1\). En \(D\) : \(y=-9(x-2)-1=-9x+17\). <b>(1 pt)</b></li>
<li>\(f'(x)=3ax^2+b\). <b>(0,5 pt)</b><br>
\(f(0)=c=1\) ; \(f'(0)=b=3\) ; \(f'(1)=3a+b=0\) donc \(3a=-3\) et \(a=-1\). Ainsi \(f(x)=-x^3+3x+1\). <b>(1 pt)</b></li>
<li>\(f(2)=-8+6+1=-1\) ✓ et \(f'(2)=-3\times4+3=-9\) ✓ : c'est cohérent avec le point \(D\) et sa tangente. (Et \(f(1)=-1+3+1=3\) ✓.) <b>(0,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Calculs de dérivées", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué (on admet qu'elle y est dérivable), et simplifie.
<ol><li>\(f_1(x)=\dfrac{x^5}{5}-2x^3+7x\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=(2x-3)\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=\dfrac{4x-1}{2x+3}\) sur \(\left]-\dfrac32\,;+\infty\right[\)</li>
<li>\(f_4(x)=-\dfrac{2}{3x-1}\) sur \(\left]\dfrac13\,;+\infty\right[\)</li>
<li>\(f_5(x)=(1-3x)^5\) sur \(\mathbb R\)</li>
<li>\(f_6(x)=\sqrt{8-2x}\) sur \(]-\infty\,;4[\)</li></ol>`,
          correction: R`<b>1 pt par question</b> (0,5 pt pour la formule utilisée, 0,5 pt pour le résultat simplifié).
<ol><li>\(f_1'(x)=\dfrac{5x^4}{5}-6x^2+7=x^4-6x^2+7\).</li>
<li>Produit : \(u=2x-3\), \(u'=2\), \(v=\sqrt x\), \(v'=\dfrac1{2\sqrt x}\).<br>
\(f_2'(x)=2\sqrt x+\dfrac{2x-3}{2\sqrt x}=\dfrac{4x+2x-3}{2\sqrt x}=\dfrac{6x-3}{2\sqrt x}\) (car \(2\sqrt x\times2\sqrt x=4x\)).</li>
<li>Quotient : \(u=4x-1\), \(u'=4\), \(v=2x+3\), \(v'=2\).<br>
\(f_3'(x)=\dfrac{4(2x+3)-2(4x-1)}{(2x+3)^2}=\dfrac{8x+12-8x+2}{(2x+3)^2}=\dfrac{14}{(2x+3)^2}\).</li>
<li>\(f_4=-2\times\dfrac1v\) avec \(v=3x-1\), \(v'=3\) : \(f_4'(x)=-2\times\left(-\dfrac{3}{(3x-1)^2}\right)=\dfrac{6}{(3x-1)^2}\).</li>
<li>\(g(X)=X^5\), \(g'(X)=5X^4\), \(a=-3\) : \(f_5'(x)=-3\times5(1-3x)^4=-15(1-3x)^4\).</li>
<li>\(g(X)=\sqrt X\), \(a=-2\) : \(f_6'(x)=-2\times\dfrac{1}{2\sqrt{8-2x}}=-\dfrac{1}{\sqrt{8-2x}}\).</li></ol>` },
        { titre: "Exercice 4 — Calculer une racine sans calculatrice", points: 4,
          enonce: R`Soit \(f(x)=\sqrt x\) sur \(]0\,;+\infty[\), de courbe \(\mathcal C\).
<ol><li>Détermine une équation de la tangente \(T\) à \(\mathcal C\) au point d'abscisse 9.</li>
<li>En utilisant l'approximation \(f(9+h)\approx f(9)+f'(9)\,h\) pour \(h\) proche de 0, donne une valeur approchée de \(\sqrt{9{,}12}\) et de \(\sqrt{8{,}94}\).</li>
<li>Montre que pour tout \(x&gt;0\), \(\sqrt x-\left(\dfrac x6+\dfrac32\right)=-\dfrac{(\sqrt x-3)^2}{6}\). Déduis-en la position de \(\mathcal C\) par rapport à \(T\). Les valeurs approchées de la question 2 sont-elles des valeurs par excès ou par défaut ?</li></ol>`,
          correction: R`<ol><li>\(f(9)=3\), \(f'(x)=\dfrac1{2\sqrt x}\) donc \(f'(9)=\dfrac16\). \(T : y=\dfrac16(x-9)+3=\dfrac x6+\dfrac32\). <b>(1 pt)</b></li>
<li>\(\sqrt{9{,}12}=f(9+0{,}12)\approx3+\dfrac{0{,}12}{6}=3+0{,}02=3{,}02\). <b>(0,5 pt)</b><br>
\(\sqrt{8{,}94}=f(9-0{,}06)\approx3-\dfrac{0{,}06}{6}=3-0{,}01=2{,}99\). <b>(0,5 pt)</b></li>
<li>\(-\dfrac{(\sqrt x-3)^2}{6}=-\dfrac{x-6\sqrt x+9}{6}=-\dfrac x6+\sqrt x-\dfrac32\), qui est bien égal à \(\sqrt x-\left(\dfrac x6+\dfrac32\right)\). <b>(1 pt)</b><br>
Un carré est positif, donc cette différence est négative ou nulle : \(\mathcal C\) est <b>en dessous</b> de \(T\) (elle la touche seulement en \(x=9\)). Les valeurs lues sur la tangente sont donc des valeurs approchées <b>par excès</b> : \(\sqrt{9{,}12}&lt;3{,}02\) et \(\sqrt{8{,}94}&lt;2{,}99\). <b>(1 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°4 — Démonstrations du cours et fonctions dérivées", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Nombre dérivé d'une fonction rationnelle", points: 5,
          enonce: R`Soit \(f\) la fonction définie sur \(]-2\,;+\infty[\) par \(f(x)=\dfrac{1}{x+2}\).
<ol><li>Pour \(h\neq0\) (avec \(h&gt;-2\)), montre que \(\dfrac{f(h)-f(0)}{h}=\dfrac{-1}{2(h+2)}\). Déduis-en \(f'(0)\).</li>
<li>Soit \(a&gt;-2\). En procédant de même, montre que \(f'(a)=-\dfrac{1}{(a+2)^2}\).</li>
<li>Retrouve ce résultat avec la formule de dérivation de \(x\mapsto g(ax+b)\).</li>
<li>Donne une équation de la tangente à la courbe de \(f\) au point d'abscisse 0.</li></ol>`,
          correction: R`<ol><li>\(f(h)-f(0)=\dfrac1{h+2}-\dfrac12=\dfrac{2-(h+2)}{2(h+2)}=\dfrac{-h}{2(h+2)}\). En divisant par \(h\neq0\) : \(\dfrac{f(h)-f(0)}{h}=\dfrac{-1}{2(h+2)}\). <b>(1 pt)</b><br>
Quand \(h\to0\), ce taux tend vers \(\dfrac{-1}{2\times2}=-\dfrac14\) : \(f'(0)=-\dfrac14\). <b>(0,5 pt)</b></li>
<li>\(f(a+h)-f(a)=\dfrac1{a+h+2}-\dfrac1{a+2}=\dfrac{(a+2)-(a+h+2)}{(a+h+2)(a+2)}=\dfrac{-h}{(a+h+2)(a+2)}\).<br>
Donc \(\dfrac{f(a+h)-f(a)}{h}=\dfrac{-1}{(a+h+2)(a+2)}\), qui tend vers \(\dfrac{-1}{(a+2)^2}\) quand \(h\to0\). <b>(1,5 pt)</b></li>
<li>\(f(x)=g(x+2)\) avec \(g(X)=\dfrac1X\), \(g'(X)=-\dfrac1{X^2}\) et \(a=1\) : \(f'(x)=1\times\left(-\dfrac1{(x+2)^2}\right)=-\dfrac1{(x+2)^2}\). C'est bien le même résultat. <b>(1 pt)</b></li>
<li>\(f(0)=\dfrac12\), \(f'(0)=-\dfrac14\) : \(y=-\dfrac14x+\dfrac12\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Racine carrée : dérivable ou pas en 0 ?", points: 5,
          enonce: R`<ol><li>On considère la fonction racine carrée \(r(x)=\sqrt x\) sur \([0\,;+\infty[\). Pour \(h&gt;0\), calcule \(\dfrac{r(h)-r(0)}{h}\) et explique pourquoi \(r\) n'est pas dérivable en 0. Que peut-on dire de la tangente à sa courbe à l'origine ?</li>
<li>Soit \(f(x)=x\sqrt x\) sur \([0\,;+\infty[\). Pour \(h&gt;0\), calcule \(\dfrac{f(h)-f(0)}{h}\). La fonction \(f\) est-elle dérivable en 0 ? Si oui, donne \(f'(0)\).</li>
<li>Calcule \(f'(x)\) pour \(x&gt;0\).</li>
<li>Détermine une équation de la tangente à la courbe de \(f\) au point d'abscisse 4.</li></ol>`,
          correction: R`<ol><li>\(\dfrac{\sqrt h-0}{h}=\dfrac{\sqrt h}{h}=\dfrac{1}{\sqrt h}\). Quand \(h\) tend vers 0, \(\sqrt h\) tend vers 0 et \(\dfrac1{\sqrt h}\) devient aussi grand que l'on veut : le taux n'a pas de limite finie, donc \(r\) n'est pas dérivable en 0. La courbe admet en l'origine une tangente <b>verticale</b>. <b>(1,5 pt)</b></li>
<li>\(\dfrac{h\sqrt h-0}{h}=\sqrt h\), qui tend vers 0 quand \(h\to0\). Donc \(f\) <b>est</b> dérivable en 0 et \(f'(0)=0\) : tangente horizontale à l'origine. <b>(1,5 pt)</b></li>
<li>Produit : \(u=x\), \(u'=1\), \(v=\sqrt x\), \(v'=\dfrac1{2\sqrt x}\). \(f'(x)=\sqrt x+\dfrac{x}{2\sqrt x}=\sqrt x+\dfrac{\sqrt x}{2}=\dfrac32\sqrt x\). <b>(1 pt)</b></li>
<li>\(f(4)=4\times2=8\), \(f'(4)=\dfrac32\times2=3\). Tangente : \(y=3(x-4)+8=3x-4\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Dériver et simplifier", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué, et simplifie.
<ol><li>\(f_1(x)=-4x^3+6x^2-x+10\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=x^2-\dfrac3x+2\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=(x^2-4x)(x+5)\) sur \(\mathbb R\)</li>
<li>\(f_4(x)=\dfrac{x^2+1}{x-1}\) sur \(]1\,;+\infty[\)</li>
<li>\(f_5(x)=(3x+2)^3\) sur \(\mathbb R\)</li>
<li>\(f_6(x)=\dfrac{1}{\sqrt x}\) sur \(]0\,;+\infty[\)</li></ol>`,
          correction: R`<b>1 pt par question.</b>
<ol><li>\(f_1'(x)=-12x^2+12x-1\).</li>
<li>\(f_2'(x)=2x-3\times\left(-\dfrac1{x^2}\right)+2\times\dfrac1{2\sqrt x}=2x+\dfrac3{x^2}+\dfrac1{\sqrt x}\).</li>
<li>Produit : \(u=x^2-4x\), \(u'=2x-4\), \(v=x+5\), \(v'=1\).<br>
\(f_3'(x)=(2x-4)(x+5)+(x^2-4x)=2x^2+10x-4x-20+x^2-4x=3x^2+2x-20\).<br>
(Vérification : \(f_3(x)=x^3+x^2-20x\), de dérivée \(3x^2+2x-20\) ✓.)</li>
<li>Quotient : \(u=x^2+1\), \(u'=2x\), \(v=x-1\), \(v'=1\).<br>
\(f_4'(x)=\dfrac{2x(x-1)-(x^2+1)}{(x-1)^2}=\dfrac{x^2-2x-1}{(x-1)^2}\).</li>
<li>\(g(X)=X^3\), \(a=3\) : \(f_5'(x)=3\times3(3x+2)^2=9(3x+2)^2\).</li>
<li>\(f_6=\dfrac1v\) avec \(v=\sqrt x\), \(v'=\dfrac1{2\sqrt x}\) : \(f_6'(x)=-\dfrac{\frac1{2\sqrt x}}{(\sqrt x)^2}=-\dfrac{1}{2x\sqrt x}\).</li></ol>` },
        { titre: "Exercice 4 — Un ballon lancé vers le haut", points: 4,
          enonce: R`Un ballon est lancé verticalement. Sa hauteur (en m) au bout de \(t\) secondes est \(h(t)=-5t^2+12t+1{,}6\), pour \(t\in[0\,;2{,}5]\).
<ol><li>Calcule la vitesse moyenne du ballon entre \(t=0\) et \(t=2\).</li>
<li>La vitesse instantanée est \(v(t)=h'(t)\). Calcule \(v(t)\) et la vitesse de lancement \(v(0)\).</li>
<li>Le ballon atteint sa hauteur maximale lorsque sa vitesse s'annule. À quel instant ? Quelle est cette hauteur maximale ?</li></ol>`,
          correction: R`<ol><li>\(h(0)=1{,}6\) et \(h(2)=-20+24+1{,}6=5{,}6\). Vitesse moyenne : \(\dfrac{5{,}6-1{,}6}{2-0}=2\) m/s. <b>(1 pt)</b></li>
<li>\(v(t)=-10t+12\) <b>(0,5 pt)</b>, donc \(v(0)=12\) m/s. <b>(0,5 pt)</b></li>
<li>\(v(t)=0\iff-10t+12=0\iff t=1{,}2\) s. <b>(1 pt)</b><br>
\(h(1{,}2)=-5\times1{,}44+12\times1{,}2+1{,}6=-7{,}2+14{,}4+1{,}6=8{,}8\) m. <b>(1 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°5 — Tangentes : équations, intersections et paramètres", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Tangentes à une parabole", points: 6,
          enonce: R`Soit \(f(x)=x^2-4x+1\) sur \(\mathbb R\), de courbe \(\mathcal P\).
<ol><li>Calcule \(f'(x)\) et donne une équation de la tangente \(T_0\) à \(\mathcal P\) au point d'abscisse 0.</li>
<li>Donne une équation de la tangente \(T_4\) au point d'abscisse 4.</li>
<li>Détermine les coordonnées du point d'intersection \(I\) de \(T_0\) et \(T_4\). Que remarques-tu pour son abscisse ?</li>
<li>Existe-t-il un point de \(\mathcal P\) où la tangente est parallèle à la droite \(d : y=2x+5\) ? Si oui, donne une équation de cette tangente.</li></ol>`,
          correction: R`<ol><li>\(f'(x)=2x-4\). \(f(0)=1\), \(f'(0)=-4\) : \(T_0 : y=-4x+1\). <b>(1 pt)</b></li>
<li>\(f(4)=16-16+1=1\), \(f'(4)=4\) : \(T_4 : y=4(x-4)+1=4x-15\). <b>(1,5 pt)</b></li>
<li>\(-4x+1=4x-15\iff-8x=-16\iff x=2\), puis \(y=-8+1=-7\). Donc \(I(2\,;-7)\). <b>(1 pt)</b><br>
L'abscisse de \(I\) est 2, le milieu des abscisses 0 et 4 des deux points de contact. <b>(0,5 pt)</b></li>
<li>Deux droites sont parallèles si elles ont le même coefficient directeur : \(f'(x)=2\iff2x-4=2\iff x=3\). <b>(1 pt)</b><br>
\(f(3)=9-12+1=-2\) : la tangente au point \((3\,;-2)\) a pour équation \(y=2(x-3)-2=2x-8\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Une fonction homographique", points: 5,
          enonce: R`Soit \(f(x)=\dfrac{2x-1}{x+1}\) sur \(]-1\,;+\infty[\), de courbe \(\mathcal H\).
<ol><li>Montre que \(f'(x)=\dfrac{3}{(x+1)^2}\).</li>
<li>Donne une équation de la tangente à \(\mathcal H\) au point d'abscisse 0, puis au point d'abscisse 2.</li>
<li>Détermine le point de \(\mathcal H\) en lequel la tangente a pour coefficient directeur \(\dfrac34\), et donne une équation de cette tangente.</li>
<li>Peut-on trouver un point de \(\mathcal H\) où la tangente est horizontale ? Justifie.</li></ol>`,
          correction: R`<ol><li>\(u=2x-1\), \(u'=2\), \(v=x+1\), \(v'=1\) : \(f'(x)=\dfrac{2(x+1)-(2x-1)}{(x+1)^2}=\dfrac{3}{(x+1)^2}\). <b>(1 pt)</b></li>
<li>\(f(0)=-1\), \(f'(0)=3\) : \(y=3x-1\). <b>(0,5 pt)</b><br>
\(f(2)=\dfrac33=1\), \(f'(2)=\dfrac39=\dfrac13\) : \(y=\dfrac13(x-2)+1=\dfrac13x+\dfrac13\). <b>(1 pt)</b></li>
<li>\(\dfrac{3}{(x+1)^2}=\dfrac34\iff(x+1)^2=4\iff x+1=2\) ou \(x+1=-2\). Comme \(x&gt;-1\), \(x+1&gt;0\), donc \(x=1\). <b>(1 pt)</b><br>
\(f(1)=\dfrac12\) : tangente \(y=\dfrac34(x-1)+\dfrac12=\dfrac34x-\dfrac14\). <b>(0,5 pt)</b></li>
<li>Pour tout \(x&gt;-1\), \(f'(x)=\dfrac{3}{(x+1)^2}&gt;0\) : \(f'(x)\) ne s'annule jamais, donc aucune tangente n'est horizontale (elles « montent » toutes). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Une tangente qui recoupe la courbe", points: 5,
          enonce: R`Soit \(f(x)=x^3-2x^2+1\) sur \(\mathbb R\), de courbe \(\mathcal C\).
<ol><li>Calcule \(f'(x)\), puis montre que la tangente \(T\) à \(\mathcal C\) au point d'abscisse 1 a pour équation \(y=-x+1\).</li>
<li>Montre que pour tout réel \(x\), \(f(x)-(-x+1)=x(x-1)^2\).</li>
<li>Étudie le signe de \(x(x-1)^2\) et déduis-en la position relative de \(\mathcal C\) et \(T\).</li>
<li>Donne les coordonnées des points communs à \(\mathcal C\) et \(T\).</li></ol>`,
          correction: R`<ol><li>\(f'(x)=3x^2-4x\). \(f(1)=1-2+1=0\) et \(f'(1)=3-4=-1\). \(T : y=-1(x-1)+0=-x+1\). <b>(1,5 pt)</b></li>
<li>\(f(x)-(-x+1)=x^3-2x^2+1+x-1=x^3-2x^2+x=x(x^2-2x+1)=x(x-1)^2\). <b>(1 pt)</b></li>
<li>\((x-1)^2\geqslant0\), donc \(x(x-1)^2\) a le signe de \(x\) et s'annule en 0 et en 1.
<ul><li>Pour \(x&lt;0\) : \(f(x)-(-x+1)&lt;0\), \(\mathcal C\) est <b>en dessous</b> de \(T\).</li>
<li>Pour \(x&gt;0\) (\(x\neq1\)) : \(\mathcal C\) est <b>au-dessus</b> de \(T\).</li></ul> <b>(1,5 pt)</b></li>
<li>Les points communs correspondent à \(x=0\) et \(x=1\) : \((0\,;1)\) (la tangente recoupe la courbe) et \((1\,;0)\) (point de contact). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Une parabole sur mesure", points: 4,
          enonce: R`On cherche une fonction \(f(x)=ax^2+bx+c\) (\(a\), \(b\), \(c\) réels) dont la courbe passe par \(A(0\,;1)\) et est tangente en \(B(2\,;3)\) à la droite \(\Delta : y=-x+5\).
<ol><li>Vérifie que \(B\) appartient à \(\Delta\).</li>
<li>Traduis les informations de l'énoncé par trois équations d'inconnues \(a\), \(b\), \(c\).</li>
<li>Résous ce système et donne \(f(x)\). Vérifie le résultat.</li></ol>`,
          correction: R`<ol><li>\(-2+5=3\) : \(B\in\Delta\). <b>(0,5 pt)</b></li>
<li>\(A\) sur la courbe : \(f(0)=c=1\). \(B\) sur la courbe : \(f(2)=4a+2b+c=3\). La tangente en \(B\) est \(\Delta\), de coefficient directeur \(-1\) : \(f'(x)=2ax+b\), donc \(f'(2)=4a+b=-1\). <b>(1,5 pt)</b></li>
<li>Avec \(c=1\) : \(4a+2b=2\) et \(4a+b=-1\). Par soustraction, \(b=3\), puis \(4a=-1-3=-4\), \(a=-1\). Donc \(f(x)=-x^2+3x+1\). <b>(1,5 pt)</b><br>
Vérification : \(f(0)=1\) ✓, \(f(2)=-4+6+1=3\) ✓, \(f'(2)=-4+3=-1\) ✓. <b>(0,5 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°6 — Fonctions composées, quotients et tangentes", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Dérivées avec g(ax+b)", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué, et simplifie.
<ol><li>\(f_1(x)=(4x+3)^6\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=\sqrt{2x+5}\) sur \(\left]-\dfrac52\,;+\infty\right[\)</li>
<li>\(f_3(x)=\dfrac{1}{3-x}\) sur \(]-\infty\,;3[\)</li>
<li>\(f_4(x)=(x-2)^2(x+1)\) sur \(\mathbb R\) (donne le résultat factorisé)</li>
<li>\(f_5(x)=x\sqrt{1-x}\) sur \(]-\infty\,;1[\)</li>
<li>\(f_6(x)=\dfrac{5}{(2x+1)^3}\) sur \(\left]-\dfrac12\,;+\infty\right[\)</li></ol>`,
          correction: R`<b>1 pt par question.</b>
<ol><li>\(g(X)=X^6\), \(a=4\) : \(f_1'(x)=4\times6(4x+3)^5=24(4x+3)^5\).</li>
<li>\(g(X)=\sqrt X\), \(a=2\) : \(f_2'(x)=2\times\dfrac{1}{2\sqrt{2x+5}}=\dfrac{1}{\sqrt{2x+5}}\).</li>
<li>\(g(X)=\dfrac1X\), \(g'(X)=-\dfrac1{X^2}\), \(a=-1\) : \(f_3'(x)=-1\times\left(-\dfrac1{(3-x)^2}\right)=\dfrac1{(3-x)^2}\).</li>
<li>Produit : \(u=(x-2)^2\), \(u'=2(x-2)\) (formule avec \(a=1\)), \(v=x+1\), \(v'=1\).<br>
\(f_4'(x)=2(x-2)(x+1)+(x-2)^2=(x-2)\big(2(x+1)+(x-2)\big)=(x-2)(3x)=3x(x-2)\).</li>
<li>Produit : \(u=x\), \(u'=1\), \(v=\sqrt{1-x}\), \(v'=-1\times\dfrac{1}{2\sqrt{1-x}}=-\dfrac1{2\sqrt{1-x}}\).<br>
\(f_5'(x)=\sqrt{1-x}-\dfrac{x}{2\sqrt{1-x}}=\dfrac{2(1-x)-x}{2\sqrt{1-x}}=\dfrac{2-3x}{2\sqrt{1-x}}\).</li>
<li>\(f_6(x)=5(2x+1)^{-3}\) ; avec \(g(X)=X^{-3}\), \(g'(X)=-3X^{-4}\), \(a=2\) : \(f_6'(x)=5\times2\times(-3)(2x+1)^{-4}=-\dfrac{30}{(2x+1)^4}\).</li></ol>` },
        { titre: "Exercice 2 — La fonction x ↦ √(4x+1)", points: 5,
          enonce: R`Soit \(f(x)=\sqrt{4x+1}\), définie sur \(\left[-\dfrac14\,;+\infty\right[\).
<ol><li>Justifie que \(f\) est dérivable sur \(\left]-\dfrac14\,;+\infty\right[\) et montre que \(f'(x)=\dfrac{2}{\sqrt{4x+1}}\).</li>
<li>Détermine une équation de la tangente à la courbe de \(f\) au point d'abscisse 2.</li>
<li>Déduis-en une valeur approchée de \(\sqrt{9{,}4}\) (on pourra remarquer que \(9{,}4=4\times2{,}1+1\)).</li>
<li>Pour \(h&gt;0\), calcule \(\dfrac{f\left(-\frac14+h\right)-f\left(-\frac14\right)}{h}\). La fonction \(f\) est-elle dérivable en \(-\dfrac14\) ?</li></ol>`,
          correction: R`<ol><li>\(f(x)=g(4x+1)\) avec \(g(X)=\sqrt X\), dérivable sur \(]0\,;+\infty[\). Or \(4x+1&gt;0\iff x&gt;-\dfrac14\), donc \(f\) est dérivable sur \(\left]-\dfrac14\,;+\infty\right[\) et \(f'(x)=4\times\dfrac{1}{2\sqrt{4x+1}}=\dfrac{2}{\sqrt{4x+1}}\). <b>(1,5 pt)</b></li>
<li>\(f(2)=\sqrt9=3\), \(f'(2)=\dfrac23\). Tangente : \(y=\dfrac23(x-2)+3=\dfrac23x+\dfrac53\). <b>(1 pt)</b></li>
<li>\(\sqrt{9{,}4}=f(2{,}1)\approx3+\dfrac23\times0{,}1=\dfrac{46}{15}\approx3{,}07\). <b>(1 pt)</b></li>
<li>\(f\left(-\frac14+h\right)=\sqrt{4h}=2\sqrt h\) et \(f\left(-\frac14\right)=0\). Le taux vaut \(\dfrac{2\sqrt h}{h}=\dfrac{2}{\sqrt h}\), qui devient aussi grand que l'on veut quand \(h\) tend vers 0 : pas de limite finie, \(f\) n'est <b>pas</b> dérivable en \(-\dfrac14\) (tangente verticale). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Étude d'un quotient", points: 5,
          enonce: R`Soit \(f(x)=\dfrac{x^2+3}{x+1}\) sur \(]-1\,;+\infty[\), de courbe \(\mathcal C\).
<ol><li>Montre que \(f'(x)=\dfrac{x^2+2x-3}{(x+1)^2}\), puis factorise le numérateur.</li>
<li>Déduis-en le point de \(\mathcal C\) où la tangente est horizontale.</li>
<li>Donne une équation de la tangente à \(\mathcal C\) au point d'abscisse 0.</li>
<li>Vérifie que pour tout \(x&gt;-1\), \(f(x)=x-1+\dfrac{4}{x+1}\), puis retrouve \(f'(x)\) à partir de cette écriture.</li></ol>`,
          correction: R`<ol><li>\(u=x^2+3\), \(u'=2x\), \(v=x+1\), \(v'=1\) : \(f'(x)=\dfrac{2x(x+1)-(x^2+3)}{(x+1)^2}=\dfrac{x^2+2x-3}{(x+1)^2}\). <b>(1 pt)</b><br>
\(x^2+2x-3\) a pour racine évidente 1 ; le produit des racines vaut \(-3\), donc l'autre est \(-3\) : \(x^2+2x-3=(x-1)(x+3)\). <b>(0,5 pt)</b></li>
<li>\(f'(x)=0\iff x=1\) ou \(x=-3\) ; seule \(x=1\) est dans \(]-1\,;+\infty[\). \(f(1)=\dfrac42=2\) : tangente horizontale au point \((1\,;2)\). <b>(1 pt)</b></li>
<li>\(f(0)=3\), \(f'(0)=\dfrac{-3}{1}=-3\) : \(y=-3x+3\). <b>(1 pt)</b></li>
<li>\(x-1+\dfrac4{x+1}=\dfrac{(x-1)(x+1)+4}{x+1}=\dfrac{x^2-1+4}{x+1}=\dfrac{x^2+3}{x+1}\) ✓. <b>(0,5 pt)</b><br>
Alors \(f'(x)=1-\dfrac{4}{(x+1)^2}=\dfrac{(x+1)^2-4}{(x+1)^2}=\dfrac{x^2+2x-3}{(x+1)^2}\) : on retrouve le même résultat. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Tangentes parallèles à une droite donnée", points: 4,
          enonce: R`Soit \(f(x)=(2x-1)^3\) sur \(\mathbb R\), de courbe \(\mathcal C\).
<ol><li>Calcule \(f'(x)\).</li>
<li>Montre que la tangente à \(\mathcal C\) au point d'abscisse \(\dfrac12\) est horizontale.</li>
<li>Détermine les points de \(\mathcal C\) où la tangente est parallèle à la droite \(d : y=24x\), et donne une équation de chacune de ces tangentes.</li></ol>`,
          correction: R`<ol><li>\(g(X)=X^3\), \(a=2\) : \(f'(x)=2\times3(2x-1)^2=6(2x-1)^2\). <b>(1 pt)</b></li>
<li>\(f'\left(\dfrac12\right)=6\times0^2=0\) : la tangente au point \(\left(\dfrac12\,;0\right)\) est horizontale (c'est l'axe des abscisses). <b>(0,5 pt)</b></li>
<li>\(f'(x)=24\iff(2x-1)^2=4\iff2x-1=2\) ou \(2x-1=-2\iff x=\dfrac32\) ou \(x=-\dfrac12\). <b>(1 pt)</b><br>
\(f\left(\dfrac32\right)=2^3=8\) : tangente \(y=24\left(x-\dfrac32\right)+8=24x-28\). <b>(0,75 pt)</b><br>
\(f\left(-\dfrac12\right)=(-2)^3=-8\) : tangente \(y=24\left(x+\dfrac12\right)-8=24x+4\). <b>(0,75 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°7 — Vitesse, coût marginal et approximation affine", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Freinage d'une voiture", points: 5,
          enonce: R`Une voiture freine. La distance (en m) parcourue depuis le début du freinage au bout de \(t\) secondes est \(d(t)=20t-2t^2\), pour \(t\in[0\,;5]\).
<ol><li>Calcule la vitesse moyenne de la voiture entre \(t=1\) et \(t=3\).</li>
<li>Pour \(h\neq0\), montre que \(\dfrac{d(2+h)-d(2)}{h}=12-2h\). Déduis-en la vitesse instantanée à \(t=2\). Compare avec la question 1.</li>
<li>Calcule \(d'(t)\). Quelle était la vitesse au début du freinage, en m/s puis en km/h ?</li>
<li>À quel instant la voiture s'arrête-t-elle ? Quelle est alors la distance de freinage ?</li></ol>`,
          correction: R`<ol><li>\(d(1)=20-2=18\) et \(d(3)=60-18=42\). Vitesse moyenne : \(\dfrac{42-18}{3-1}=12\) m/s. <b>(1 pt)</b></li>
<li>\(d(2)=40-8=32\) ; \(d(2+h)=20(2+h)-2(4+4h+h^2)=40+20h-8-8h-2h^2=32+12h-2h^2\).<br>
Donc \(\dfrac{d(2+h)-d(2)}{h}=\dfrac{12h-2h^2}{h}=12-2h\), qui tend vers 12 quand \(h\to0\) : \(d'(2)=12\) m/s. C'est la même valeur que la vitesse moyenne entre 1 et 3. <b>(1,5 pt)</b></li>
<li>\(d'(t)=20-4t\). Au début du freinage, \(d'(0)=20\) m/s, soit \(20\times3{,}6=72\) km/h. <b>(1 pt)</b></li>
<li>\(d'(t)=0\iff20-4t=0\iff t=5\) s. Distance de freinage : \(d(5)=100-50=50\) m. <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Une petite brasserie", points: 5,
          enonce: R`Une brasserie produit \(q\) hectolitres de bière par mois, avec \(q\in[0\,;150]\). Le coût total de production, en euros, est
\[C(q)=0{,}002q^3-0{,}3q^2+20q+500.\]
<ol><li>Calcule \(C(10)\), \(C(11)\), puis le coût de production du 11e hectolitre.</li>
<li>Calcule le coût marginal \(C'(q)\), puis \(C'(10)\). Compare avec la question 1.</li>
<li>Pour quelle production le coût marginal est-il minimal ? Que vaut-il ?</li>
<li>Chaque hectolitre est vendu 20 €. Le bénéfice est \(B(q)=20q-C(q)\). Montre que \(B'(q)=-0{,}006q(q-100)\). On admet que le bénéfice est maximal lorsque \(B'(q)=0\) avec \(q&gt;0\) : donne cette production et le bénéfice correspondant.</li></ol>`,
          correction: R`<ol><li>\(C(10)=2-30+200+500=672\) € ; \(C(11)=2{,}662-36{,}3+220+500=686{,}362\) €. Le 11e hectolitre coûte \(686{,}362-672\approx14{,}36\) €. <b>(1 pt)</b></li>
<li>\(C'(q)=0{,}006q^2-0{,}6q+20\). \(C'(10)=0{,}6-6+20=14{,}6\) €, proche du coût réel du 11e hectolitre (14,36 €). <b>(1 pt)</b></li>
<li>\(C'\) est un trinôme avec \(a=0{,}006&gt;0\) : son minimum est atteint en \(q=-\dfrac{-0{,}6}{2\times0{,}006}=50\). \(C'(50)=15-30+20=5\) €. <b>(1 pt)</b></li>
<li>\(B'(q)=20-C'(q)=20-0{,}006q^2+0{,}6q-20=-0{,}006q^2+0{,}6q=-0{,}006q(q-100)\). <b>(1 pt)</b><br>
\(B'(q)=0\) avec \(q&gt;0\) donne \(q=100\) hL. \(C(100)=2000-3000+2000+500=1500\), donc \(B(100)=2000-1500=500\) €. (On remarque qu'en \(q=100\), le coût marginal \(C'(100)=20\) € est égal au prix de vente.) <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Approximation affine de l'inverse", points: 5,
          enonce: R`Soit \(f(x)=\dfrac{1}{1+x}\) sur \(]-1\,;+\infty[\), de courbe \(\mathcal C\).
<ol><li>Calcule \(f'(x)\) et montre que la tangente \(T\) à \(\mathcal C\) au point d'abscisse 0 a pour équation \(y=1-x\).</li>
<li>Montre que pour tout \(x&gt;-1\), \(f(x)-(1-x)=\dfrac{x^2}{1+x}\). Déduis-en la position de \(\mathcal C\) par rapport à \(T\).</li>
<li>Utilise l'approximation \(\dfrac1{1+x}\approx1-x\) pour donner des valeurs approchées de \(\dfrac1{1{,}02}\) et \(\dfrac1{0{,}97}\). À l'aide de la calculatrice, donne l'erreur commise dans chaque cas (arrondie à \(10^{-4}\)).</li>
<li>Application : un prix augmente de 5 %. Par quel pourcentage environ faut-il le baisser pour revenir au prix initial ? Compare avec la valeur exacte.</li></ol>`,
          correction: R`<ol><li>\(f=\dfrac1v\) avec \(v=1+x\), \(v'=1\) : \(f'(x)=-\dfrac{1}{(1+x)^2}\). \(f(0)=1\), \(f'(0)=-1\), donc \(T : y=-1(x-0)+1=1-x\). <b>(1 pt)</b></li>
<li>\(\dfrac1{1+x}-(1-x)=\dfrac{1-(1-x)(1+x)}{1+x}=\dfrac{1-(1-x^2)}{1+x}=\dfrac{x^2}{1+x}\). <b>(1 pt)</b><br>
Pour \(x&gt;-1\), \(1+x&gt;0\) et \(x^2\geqslant0\) : la différence est positive, donc \(\mathcal C\) est <b>au-dessus</b> de \(T\) (contact en \(x=0\)). <b>(0,5 pt)</b></li>
<li>\(\dfrac1{1{,}02}\approx1-0{,}02=0{,}98\) ; la calculatrice donne \(0{,}98039\ldots\), erreur \(\approx0{,}0004\). <b>(0,75 pt)</b><br>
\(\dfrac1{0{,}97}=f(-0{,}03)\approx1+0{,}03=1{,}03\) ; la calculatrice donne \(1{,}03093\ldots\), erreur \(\approx0{,}0009\). <b>(0,75 pt)</b><br>
Dans les deux cas l'approximation est par défaut, conformément à la question 2.</li>
<li>Le nouveau prix est \(1{,}05P\) ; pour revenir à \(P\), on multiplie par \(\dfrac{1}{1{,}05}\approx1-0{,}05=0{,}95\) : il faut baisser d'environ 5 %. En réalité \(\dfrac1{1{,}05}\approx0{,}9524\), soit une baisse d'environ 4,76 %. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Calculs de dérivées", points: 5,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué, et simplifie.
<ol><li>\(f_1(x)=\dfrac12x^4-\dfrac{x^3}{3}+2\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=\dfrac{x+1}{\sqrt x}\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=(2-5x)^3\) sur \(\mathbb R\)</li>
<li>\(f_4(x)=\dfrac{3x-1}{x^2+1}\) sur \(\mathbb R\)</li>
<li>\(f_5(x)=x^2\sqrt x\) sur \(]0\,;+\infty[\)</li></ol>`,
          correction: R`<b>1 pt par question.</b>
<ol><li>\(f_1'(x)=\dfrac12\times4x^3-\dfrac{3x^2}{3}=2x^3-x^2\).</li>
<li>Quotient : \(u=x+1\), \(u'=1\), \(v=\sqrt x\), \(v'=\dfrac1{2\sqrt x}\).<br>
\(f_2'(x)=\dfrac{\sqrt x-\frac{x+1}{2\sqrt x}}{x}=\dfrac{\frac{2x-(x+1)}{2\sqrt x}}{x}=\dfrac{x-1}{2x\sqrt x}\).</li>
<li>\(g(X)=X^3\), \(a=-5\) : \(f_3'(x)=-5\times3(2-5x)^2=-15(2-5x)^2\).</li>
<li>Quotient : \(u=3x-1\), \(u'=3\), \(v=x^2+1\), \(v'=2x\).<br>
\(f_4'(x)=\dfrac{3(x^2+1)-2x(3x-1)}{(x^2+1)^2}=\dfrac{3x^2+3-6x^2+2x}{(x^2+1)^2}=\dfrac{-3x^2+2x+3}{(x^2+1)^2}\).</li>
<li>Produit : \(u=x^2\), \(v=\sqrt x\) : \(f_5'(x)=2x\sqrt x+\dfrac{x^2}{2\sqrt x}=2x\sqrt x+\dfrac{x\sqrt x}{2}=\dfrac52x\sqrt x\) (car \(\dfrac{x^2}{\sqrt x}=x\sqrt x\)).</li></ol>` }
      ] },
    { titre: "DS n°8 — Vrai-faux, démonstration et modélisation", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 4,
          enonce: R`Pour chaque affirmation, dis si elle est vraie ou fausse, et justifie.
<ol><li>La dérivée de \(f(x)=(2x+1)^2\) est \(f'(x)=2(2x+1)\).</li>
<li>La fonction \(x\mapsto|x-3|\) est dérivable en 3.</li>
<li>Si la tangente à \(\mathcal C_f\) au point d'abscisse 1 a pour équation \(y=2x-5\), alors \(f(1)=-3\) et \(f'(1)=2\).</li>
<li>La fonction racine carrée est dérivable sur \([0\,;+\infty[\).</li></ol>`,
          correction: R`<b>1 pt par affirmation</b> (0,25 pt pour la réponse, 0,75 pt pour la justification).
<ol><li><b>Faux.</b> Avec \(g(X)=X^2\) et \(a=2\) : \(f'(x)=2\times2(2x+1)=4(2x+1)\). (On a oublié le facteur \(a\).)</li>
<li><b>Faux.</b> Le taux \(\dfrac{|3+h-3|-0}{h}=\dfrac{|h|}{h}\) vaut 1 si \(h&gt;0\) et \(-1\) si \(h&lt;0\) : il ne tend pas vers un unique réel. Point anguleux en 3.</li>
<li><b>Vrai.</b> Le coefficient directeur de la tangente est \(f'(1)=2\), et le point de contact est sur la tangente : \(f(1)=2\times1-5=-3\).</li>
<li><b>Faux.</b> Elle est définie sur \([0\,;+\infty[\) mais n'est pas dérivable en 0 : \(\dfrac{\sqrt h}{h}=\dfrac1{\sqrt h}\) n'a pas de limite finie quand \(h\) tend vers 0. Elle est dérivable seulement sur \(]0\,;+\infty[\).</li></ol>` },
        { titre: "Exercice 2 — La fonction cube", points: 6,
          enonce: R`Soit \(f(x)=x^3\) sur \(\mathbb R\), de courbe \(\mathcal C\).
<ol><li>Soit \(a\) un réel et \(h\neq0\). Développe \((a+h)^3\), puis montre que \(\dfrac{f(a+h)-f(a)}{h}=3a^2+3ah+h^2\). Déduis-en \(f'(a)\).</li>
<li>Donne une équation de la tangente \(T\) à \(\mathcal C\) au point d'abscisse 1.</li>
<li>Montre que pour tout réel \(x\), \(x^3-3x+2=(x-1)^2(x+2)\).</li>
<li>Déduis-en la position relative de \(\mathcal C\) et \(T\), et les coordonnées du second point d'intersection de \(T\) avec \(\mathcal C\).</li></ol>`,
          correction: R`<ol><li>\((a+h)^3=(a+h)(a^2+2ah+h^2)=a^3+3a^2h+3ah^2+h^3\). <b>(0,5 pt)</b><br>
Donc \(f(a+h)-f(a)=3a^2h+3ah^2+h^3=h(3a^2+3ah+h^2)\) et, pour \(h\neq0\), \(\dfrac{f(a+h)-f(a)}{h}=3a^2+3ah+h^2\). <b>(1 pt)</b><br>
Quand \(h\to0\), \(3ah\) et \(h^2\) tendent vers 0 : \(f'(a)=3a^2\). <b>(0,5 pt)</b></li>
<li>\(f(1)=1\), \(f'(1)=3\) : \(T : y=3(x-1)+1=3x-2\). <b>(1 pt)</b></li>
<li>\((x-1)^2(x+2)=(x^2-2x+1)(x+2)=x^3+2x^2-2x^2-4x+x+2=x^3-3x+2\). <b>(1 pt)</b></li>
<li>\(f(x)-(3x-2)=x^3-3x+2=(x-1)^2(x+2)\). Comme \((x-1)^2\geqslant0\), cette différence a le signe de \(x+2\) :
<ul><li>pour \(x&lt;-2\), \(\mathcal C\) est en dessous de \(T\) ;</li>
<li>pour \(x&gt;-2\), \(\mathcal C\) est au-dessus de \(T\) (contact en \(x=1\)).</li></ul> <b>(1 pt)</b>
La différence s'annule aussi en \(x=-2\) : \(f(-2)=-8\) et \(3\times(-2)-2=-8\). Le second point d'intersection est \((-2\,;-8)\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Retrouver des paramètres", points: 5,
          enonce: R`Soit \(f(x)=\dfrac{ax+b}{x+1}\) sur \(]-1\,;+\infty[\), où \(a\) et \(b\) sont deux réels. On sait que sa courbe \(\mathcal C\) passe par \(A(0\,;3)\) et que la tangente en \(A\) a pour coefficient directeur \(-5\).
<ol><li>Montre que \(f'(x)=\dfrac{a-b}{(x+1)^2}\).</li>
<li>Détermine \(a\) et \(b\).</li>
<li>Donne une équation de la tangente en \(A\).</li>
<li>Détermine le point de \(\mathcal C\) où la tangente est parallèle à la droite \(y=-\dfrac54x\).</li></ol>`,
          correction: R`<ol><li>\(u=ax+b\), \(u'=a\), \(v=x+1\), \(v'=1\) : \(f'(x)=\dfrac{a(x+1)-(ax+b)}{(x+1)^2}=\dfrac{a-b}{(x+1)^2}\). <b>(1 pt)</b></li>
<li>\(f(0)=\dfrac b1=b=3\) ; \(f'(0)=a-b=-5\), donc \(a=-2\). Ainsi \(f(x)=\dfrac{-2x+3}{x+1}\) et \(f'(x)=-\dfrac{5}{(x+1)^2}\). <b>(1,5 pt)</b></li>
<li>\(y=-5x+3\). <b>(0,5 pt)</b></li>
<li>\(-\dfrac{5}{(x+1)^2}=-\dfrac54\iff(x+1)^2=4\iff x+1=2\) (car \(x+1&gt;0\)) \(\iff x=1\). \(f(1)=\dfrac{1}{2}\) : c'est le point \(\left(1\,;\dfrac12\right)\). <b>(2 pts)</b></li></ol>` },
        { titre: "Exercice 4 — Le profil d'un toboggan", points: 5,
          enonce: R`Dans un repère (unité : le mètre), on modélise le profil d'un toboggan par la courbe de \(f(x)=ax^3+bx^2+c\), pour \(x\in[0\,;4]\). Le haut du toboggan est le point \(H(0\,;4)\), le bas est le point \(B(4\,;0)\), et pour la sécurité, les tangentes en \(H\) et en \(B\) doivent être horizontales.
<ol><li>Calcule \(f'(x)\) et vérifie que la tangente en \(H\) est horizontale quelles que soient les valeurs de \(a\), \(b\), \(c\).</li>
<li>Traduis les autres conditions par des équations et montre que \(a=\dfrac18\), \(b=-\dfrac34\), \(c=4\).</li>
<li>Calcule \(f'(2)\) et donne une équation de la tangente au point d'abscisse 2.</li>
<li>\(f'\) est un trinôme du second degré. Justifie que la pente est la plus forte (en valeur absolue) en \(x=2\).</li></ol>`,
          correction: R`<ol><li>\(f'(x)=3ax^2+2bx\), donc \(f'(0)=0\) dans tous les cas : tangente horizontale en \(H\). <b>(1 pt)</b></li>
<li>\(f(0)=c=4\). \(f(4)=64a+16b+4=0\) et \(f'(4)=48a+8b=0\). La dernière donne \(b=-6a\) ; en remplaçant : \(64a-96a+4=0\iff-32a=-4\iff a=\dfrac18\), puis \(b=-\dfrac68=-\dfrac34\). <b>(1,5 pt)</b></li>
<li>\(f'(x)=\dfrac38x^2-\dfrac32x\), donc \(f'(2)=\dfrac{12}8-3=-\dfrac32\). \(f(2)=1-3+4=2\). Tangente : \(y=-\dfrac32(x-2)+2=-\dfrac32x+5\). <b>(1,5 pt)</b></li>
<li>\(f'(x)=\dfrac38x^2-\dfrac32x\) avec \(\dfrac38&gt;0\) : son minimum est atteint en \(x=-\dfrac{-3/2}{2\times3/8}=\dfrac{3/2}{3/4}=2\). Sur \([0\,;4]\), \(f'(x)\) est négative (car \(f'(x)=\dfrac38x(x-4)\)) et minimale en 2 : c'est là que la descente est la plus raide, avec une pente de \(-1{,}5\). <b>(1 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°9 — Modélisation, algorithme et calculs de dérivées", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Concentration d'un médicament", points: 5,
          enonce: R`La concentration d'un médicament dans le sang (en mg/L), \(t\) heures après l'injection, est modélisée par \(C(t)=\dfrac{10t}{t^2+4}\), pour \(t\geqslant0\).
<ol><li>Montre que \(C'(t)=\dfrac{10(4-t^2)}{(t^2+4)^2}\).</li>
<li>La vitesse d'évolution de la concentration à l'instant \(t\) est \(C'(t)\). Calcule \(C'(1)\) et \(C'(3)\) (valeur arrondie au centième pour \(C'(3)\)) et interprète.</li>
<li>On admet que la concentration est maximale à l'instant où la tangente est horizontale. Détermine cet instant et la concentration maximale.</li></ol>`,
          correction: R`<ol><li>\(u=10t\), \(u'=10\), \(v=t^2+4\), \(v'=2t\) : \(C'(t)=\dfrac{10(t^2+4)-10t\times2t}{(t^2+4)^2}=\dfrac{40-10t^2}{(t^2+4)^2}=\dfrac{10(4-t^2)}{(t^2+4)^2}\). <b>(1,5 pt)</b></li>
<li>\(C'(1)=\dfrac{10\times3}{25}=1{,}2\) : au bout d'1 h, la concentration augmente à la vitesse de 1,2 mg/L par heure. <b>(1 pt)</b><br>
\(C'(3)=\dfrac{10\times(-5)}{169}=-\dfrac{50}{169}\approx-0{,}30\) : au bout de 3 h, la concentration diminue d'environ 0,30 mg/L par heure. <b>(1 pt)</b></li>
<li>\(C'(t)=0\iff4-t^2=0\iff t=2\) (car \(t\geqslant0\)). \(C(2)=\dfrac{20}{8}=2{,}5\) mg/L, atteinte 2 h après l'injection. <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Tangentes à une parabole", points: 5,
          enonce: R`Soit \(f(x)=\dfrac{x^2}{4}\) sur \(\mathbb R\), de courbe \(\mathcal P\), et \(a\) un réel.
<ol><li>Montre que la tangente \(T_a\) à \(\mathcal P\) au point d'abscisse \(a\) a pour équation \(y=\dfrac a2x-\dfrac{a^2}{4}\).</li>
<li>Pour quelles valeurs de \(a\) la tangente \(T_a\) passe-t-elle par le point \(S(0\,;-4)\) ? Donne les équations des tangentes correspondantes.</li>
<li>Donne les équations de \(T_2\) et \(T_{-2}\), et les coordonnées de leur point d'intersection.</li>
<li>Montre que, pour \(a\neq0\), \(T_a\) coupe l'axe des abscisses au point d'abscisse \(\dfrac a2\).</li></ol>`,
          correction: R`<ol><li>\(f'(x)=\dfrac{2x}{4}=\dfrac x2\), donc \(f'(a)=\dfrac a2\) et \(f(a)=\dfrac{a^2}{4}\).<br>
\(T_a : y=\dfrac a2(x-a)+\dfrac{a^2}4=\dfrac a2x-\dfrac{a^2}{2}+\dfrac{a^2}{4}=\dfrac a2x-\dfrac{a^2}4\). <b>(1,5 pt)</b></li>
<li>\(S\in T_a\iff-4=\dfrac a2\times0-\dfrac{a^2}4\iff a^2=16\iff a=4\) ou \(a=-4\). <b>(1 pt)</b><br>
\(T_4 : y=2x-4\) et \(T_{-4} : y=-2x-4\). <b>(0,5 pt)</b></li>
<li>\(T_2 : y=x-1\) et \(T_{-2} : y=-x-1\). \(x-1=-x-1\iff x=0\), puis \(y=-1\) : elles se coupent en \((0\,;-1)\). <b>(1 pt)</b></li>
<li>\(\dfrac a2x-\dfrac{a^2}4=0\iff\dfrac a2x=\dfrac{a^2}{4}\iff x=\dfrac{a^2}{4}\times\dfrac2a=\dfrac a2\) (on peut diviser car \(a\neq0\)). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Dérivées", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué, et simplifie.
<ol><li>\(f_1(x)=-\dfrac{x^4}{2}+3x^2-5\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=3x-4\sqrt x\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=(2x+1)(x^2-x+3)\) sur \(\mathbb R\)</li>
<li>\(f_4(x)=\dfrac{x-3}{x+3}\) sur \(]-3\,;+\infty[\)</li>
<li>\(f_5(x)=\sqrt{6-3x}\) sur \(]-\infty\,;2[\)</li>
<li>\(f_6(x)=\dfrac{2}{(x-1)^2}\) sur \(]1\,;+\infty[\)</li></ol>`,
          correction: R`<b>1 pt par question.</b>
<ol><li>\(f_1'(x)=-\dfrac{4x^3}{2}+6x=-2x^3+6x\).</li>
<li>\(f_2'(x)=3-4\times\dfrac1{2\sqrt x}=3-\dfrac{2}{\sqrt x}\).</li>
<li>Produit : \(u=2x+1\), \(u'=2\), \(v=x^2-x+3\), \(v'=2x-1\).<br>
\(f_3'(x)=2(x^2-x+3)+(2x+1)(2x-1)=2x^2-2x+6+4x^2-1=6x^2-2x+5\).</li>
<li>Quotient : \(f_4'(x)=\dfrac{1\times(x+3)-(x-3)\times1}{(x+3)^2}=\dfrac{6}{(x+3)^2}\).</li>
<li>\(g(X)=\sqrt X\), \(a=-3\) : \(f_5'(x)=-3\times\dfrac{1}{2\sqrt{6-3x}}=-\dfrac{3}{2\sqrt{6-3x}}\).</li>
<li>\(f_6(x)=2(x-1)^{-2}\) ; avec \(g(X)=X^{-2}\), \(g'(X)=-2X^{-3}\), \(a=1\) : \(f_6'(x)=2\times(-2)(x-1)^{-3}=-\dfrac{4}{(x-1)^3}\).</li></ol>` },
        { titre: "Exercice 4 — Conjecturer un nombre dérivé avec Python", points: 4,
          enonce: R`On considère \(f(x)=x^3\) et le programme Python suivant :
<pre><code>def taux(a, h):
    return ((a + h)**3 - a**3) / h

for k in range(1, 5):
    print(taux(2, 10**(-k)))</code></pre>
<ol><li>Quelles valeurs de \(h\) le programme utilise-t-il ? Que représente le nombre renvoyé par <b>taux(2, h)</b> ?</li>
<li>Le programme affiche (aux erreurs d'arrondi près) 12.61 ; 12.0601 ; 12.006001 ; 12.00060001. Quelle conjecture peut-on faire ?</li>
<li>Démontre cette conjecture en calculant \(\dfrac{f(2+h)-f(2)}{h}\) pour \(h\neq0\).</li>
<li>Quelle(s) modification(s) faut-il apporter au programme pour conjecturer le nombre dérivé de la fonction racine carrée en 4 ? (On écrira <b>from math import sqrt</b> en première ligne.)</li></ol>`,
          correction: R`<ol><li>\(k\) prend les valeurs 1, 2, 3, 4, donc \(h\) vaut \(0{,}1\) ; \(0{,}01\) ; \(0{,}001\) ; \(0{,}0001\). <b>taux(2, h)</b> est le taux de variation de \(f\) entre 2 et \(2+h\), c'est-à-dire le coefficient directeur de la sécante passant par les points d'abscisses 2 et \(2+h\). <b>(1 pt)</b></li>
<li>Quand \(h\) se rapproche de 0, le taux se rapproche de 12 : on conjecture que \(f'(2)=12\). <b>(0,5 pt)</b></li>
<li>\((2+h)^3=8+12h+6h^2+h^3\), donc \(\dfrac{f(2+h)-f(2)}{h}=\dfrac{12h+6h^2+h^3}{h}=12+6h+h^2\), qui tend vers 12 quand \(h\to0\). Donc \(f'(2)=12\). (On retrouve d'ailleurs les valeurs affichées : pour \(h=0{,}1\), \(12+0{,}6+0{,}01=12{,}61\).) <b>(1,5 pt)</b></li>
<li>On remplace la ligne du <b>return</b> par <b>return (sqrt(a + h) - sqrt(a)) / h</b> et l'appel par <b>taux(4, 10**(-k))</b>. Les valeurs affichées se rapprochent alors de \(\dfrac{1}{2\sqrt4}=0{,}25\). <b>(1 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°10 — Bilan : tout le chapitre", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Nombre dérivé par la quantité conjuguée", points: 5,
          enonce: R`Soit \(f(x)=\sqrt{x+3}\) sur \([-3\,;+\infty[\).
<ol><li>Pour \(h\neq0\) (avec \(h&gt;-4\)), montre que \(\dfrac{f(1+h)-f(1)}{h}=\dfrac{1}{\sqrt{4+h}+2}\). Déduis-en \(f'(1)\).</li>
<li>Retrouve ce résultat à l'aide de la formule de dérivation de \(x\mapsto g(ax+b)\).</li>
<li>Donne une équation de la tangente à la courbe de \(f\) au point d'abscisse 1.</li>
<li>Déduis-en une valeur approchée de \(\sqrt{4{,}2}\).</li></ol>`,
          correction: R`<ol><li>\(f(1)=\sqrt4=2\) et \(f(1+h)=\sqrt{4+h}\). On multiplie par la quantité conjuguée :
\[\frac{\sqrt{4+h}-2}{h}=\frac{(\sqrt{4+h}-2)(\sqrt{4+h}+2)}{h(\sqrt{4+h}+2)}=\frac{4+h-4}{h(\sqrt{4+h}+2)}=\frac{1}{\sqrt{4+h}+2}.\]
<b>(1,5 pt)</b> Quand \(h\to0\), ce taux tend vers \(\dfrac1{2+2}=\dfrac14\) : \(f'(1)=\dfrac14\). <b>(0,5 pt)</b></li>
<li>\(g(X)=\sqrt X\), \(a=1\) : \(f'(x)=\dfrac{1}{2\sqrt{x+3}}\) pour \(x&gt;-3\), donc \(f'(1)=\dfrac1{2\times2}=\dfrac14\) ✓. <b>(1 pt)</b></li>
<li>\(y=\dfrac14(x-1)+2=\dfrac14x+\dfrac74\). <b>(1 pt)</b></li>
<li>\(\sqrt{4{,}2}=f(1{,}2)\approx\dfrac14\times1{,}2+\dfrac74=0{,}3+1{,}75=2{,}05\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Six dérivées", points: 6,
          enonce: R`Calcule la dérivée de chaque fonction sur l'intervalle indiqué, et simplifie.
<ol><li>\(f_1(x)=x^6-4x^5+x\) sur \(\mathbb R\)</li>
<li>\(f_2(x)=\dfrac{7}{x^3}\) sur \(]0\,;+\infty[\)</li>
<li>\(f_3(x)=(x^2+2)(1-4x)\) sur \(\mathbb R\)</li>
<li>\(f_4(x)=\dfrac{x+2}{x^2+1}\) sur \(\mathbb R\)</li>
<li>\(f_5(x)=\left(1-\dfrac x2\right)^4\) sur \(\mathbb R\)</li>
<li>\(f_6(x)=\sqrt x\,(x-4)\) sur \(]0\,;+\infty[\)</li></ol>`,
          correction: R`<b>1 pt par question.</b>
<ol><li>\(f_1'(x)=6x^5-20x^4+1\).</li>
<li>\(f_2(x)=7x^{-3}\), donc \(f_2'(x)=7\times(-3)x^{-4}=-\dfrac{21}{x^4}\).</li>
<li>Produit : \(f_3'(x)=2x(1-4x)+(x^2+2)\times(-4)=2x-8x^2-4x^2-8=-12x^2+2x-8\).</li>
<li>Quotient : \(u=x+2\), \(u'=1\), \(v=x^2+1\), \(v'=2x\).<br>
\(f_4'(x)=\dfrac{(x^2+1)-2x(x+2)}{(x^2+1)^2}=\dfrac{x^2+1-2x^2-4x}{(x^2+1)^2}=\dfrac{-x^2-4x+1}{(x^2+1)^2}\).</li>
<li>\(g(X)=X^4\), \(a=-\dfrac12\) : \(f_5'(x)=-\dfrac12\times4\left(1-\dfrac x2\right)^3=-2\left(1-\dfrac x2\right)^3\).</li>
<li>Produit : \(u=\sqrt x\), \(u'=\dfrac1{2\sqrt x}\), \(v=x-4\), \(v'=1\).<br>
\(f_6'(x)=\dfrac{x-4}{2\sqrt x}+\sqrt x=\dfrac{x-4+2x}{2\sqrt x}=\dfrac{3x-4}{2\sqrt x}\).</li></ol>` },
        { titre: "Exercice 3 — Une courbe en « W »", points: 5,
          enonce: R`Soit \(f(x)=x^2-2|x|\) définie sur \(\mathbb R\).
<ol><li>Écris \(f(x)\) sans valeur absolue sur \([0\,;+\infty[\) puis sur \(]-\infty\,;0[\).</li>
<li>Pour \(h\neq0\), calcule \(\dfrac{f(h)-f(0)}{h}\) en distinguant \(h&gt;0\) et \(h&lt;0\). La fonction \(f\) est-elle dérivable en 0 ?</li>
<li>Calcule \(f'(x)\) sur \(]0\,;+\infty[\) puis sur \(]-\infty\,;0[\). Déduis-en les points de la courbe où la tangente est horizontale.</li>
<li>Donne une équation de la tangente au point d'abscisse 3.</li></ol>`,
          correction: R`<ol><li>Si \(x\geqslant0\) : \(f(x)=x^2-2x\). Si \(x&lt;0\) : \(|x|=-x\) donc \(f(x)=x^2+2x\). <b>(1 pt)</b></li>
<li>\(\dfrac{f(h)-f(0)}{h}=\dfrac{h^2-2|h|}{h}=h-\dfrac{2|h|}{h}\). Si \(h&gt;0\), il vaut \(h-2\), qui tend vers \(-2\) ; si \(h&lt;0\), il vaut \(h+2\), qui tend vers \(2\). <b>(1 pt)</b><br>
Le taux ne se rapproche pas d'un unique réel : \(f\) n'est pas dérivable en 0 (point anguleux en l'origine). <b>(0,5 pt)</b></li>
<li>Sur \(]0\,;+\infty[\) : \(f'(x)=2x-2\), nul pour \(x=1\) ; \(f(1)=1-2=-1\). Sur \(]-\infty\,;0[\) : \(f'(x)=2x+2\), nul pour \(x=-1\) ; \(f(-1)=1-2=-1\). Tangentes horizontales aux points \((1\,;-1)\) et \((-1\,;-1)\). <b>(1,5 pt)</b></li>
<li>\(f(3)=9-6=3\) et \(f'(3)=6-2=4\) : \(y=4(x-3)+3=4x-9\). <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Tangentes communes à deux paraboles", points: 4,
          enonce: R`Soit \(f(x)=x^2\) et \(g(x)=-x^2+4x-4\), de courbes \(\mathcal C_f\) et \(\mathcal C_g\). On cherche les droites tangentes à la fois à \(\mathcal C_f\) et à \(\mathcal C_g\).
<ol><li>Montre que la tangente à \(\mathcal C_f\) au point d'abscisse \(a\) a pour équation \(y=2ax-a^2\).</li>
<li>Montre que la tangente à \(\mathcal C_g\) au point d'abscisse \(b\) a pour équation \(y=(4-2b)x+b^2-4\).</li>
<li>Deux droites sont confondues si elles ont même coefficient directeur et même ordonnée à l'origine. Déduis-en les tangentes communes à \(\mathcal C_f\) et \(\mathcal C_g\).</li></ol>`,
          correction: R`<ol><li>\(f'(a)=2a\), \(f(a)=a^2\) : \(y=2a(x-a)+a^2=2ax-a^2\). <b>(1 pt)</b></li>
<li>\(g'(x)=-2x+4\), donc \(g'(b)=4-2b\) et \(g(b)=-b^2+4b-4\).<br>
\(y=(4-2b)(x-b)-b^2+4b-4=(4-2b)x-4b+2b^2-b^2+4b-4=(4-2b)x+b^2-4\). <b>(1 pt)</b></li>
<li>On résout \(2a=4-2b\) et \(-a^2=b^2-4\). La première donne \(a=2-b\) ; en remplaçant : \(-(2-b)^2=b^2-4\iff-4+4b-b^2=b^2-4\iff2b^2-4b=0\iff2b(b-2)=0\). <b>(1 pt)</b><br>
Si \(b=0\) : \(a=2\), tangente commune \(y=4x-4\). Si \(b=2\) : \(a=0\), tangente commune \(y=0\) (l'axe des abscisses). Il y a donc deux tangentes communes : \(y=4x-4\) et \(y=0\). <b>(1 pt)</b></li></ol>` }
      ] }
  ]
});
})();
