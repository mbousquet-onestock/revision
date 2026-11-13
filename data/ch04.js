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
      ] }
  ]
});
})();
