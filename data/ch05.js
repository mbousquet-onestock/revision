(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 5,
  titre: "Applications de la dérivation",
  partie: "Analyse",
  emoji: "📈",
  accroche: R`Quelle taille de boîte contient le plus de céréales avec le moins de carton ? À quel moment un médicament agit-il le plus ? Combien d'objets fabriquer pour que chaque objet coûte le moins cher ? Derrière toutes ces questions se cache la même super-arme : <b>le signe de la dérivée</b>. Dans ce chapitre, tu vas apprendre à lire une fonction comme un GPS lit une route : où ça monte, où ça descend, et où se trouvent les sommets. 🏔️`,

  videos: [
    { titre: "Étudier les variations d'une fonction avec la dérivée", recherche: "Yvan Monka étudier les variations d'une fonction dérivée", duree: "≈ 10 min", resume: R`Le lien entre le signe de \(f'\) et le sens de variation de \(f\), puis la construction complète du tableau de variations.` },
    { titre: "Tableau de variations d'un polynôme de degré 3", recherche: "Yvan Monka tableau de variations polynôme degré 3 dérivée", duree: "≈ 8 min", resume: R`On dérive, on factorise ou on utilise le discriminant pour trouver le signe de \(f'\), et on complète le tableau avec les valeurs.` },
    { titre: "Variations d'une fonction quotient", recherche: "Yvan Monka variations fonction rationnelle dérivée quotient", duree: "≈ 9 min", resume: R`Cas où le dénominateur de \(f'\) est un carré, donc positif : seul le numérateur décide du signe.` },
    { titre: "Extremum d'une fonction", recherche: "Yvan Monka extremum d'une fonction dérivée s'annule change de signe", duree: "≈ 7 min", resume: R`Pourquoi un extremum se repère quand la dérivée s'annule <b>en changeant de signe</b>, et pourquoi \(f'(a)=0\) ne suffit pas.` },
    { titre: "Démontrer une inégalité avec la dérivée", recherche: "Yvan Monka démontrer une inégalité étude de fonction dérivée", duree: "≈ 8 min", resume: R`La méthode reine : on étudie la différence \(h=f-g\) et on montre que son minimum est positif.` },
    { titre: "Position relative de deux courbes", recherche: "Yvan Monka position relative de deux courbes", duree: "≈ 7 min", resume: R`On étudie le signe de \(f(x)-g(x)\) pour savoir quelle courbe est au-dessus de l'autre.` },
    { titre: "Problème d'optimisation", recherche: "Yvan Monka problème d'optimisation dérivée volume boîte", duree: "≈ 10 min", resume: R`Mettre un problème concret en équation, puis chercher le maximum (ou le minimum) grâce au tableau de variations.` },
    { titre: "Méthode de Newton en Python", recherche: "méthode de Newton tangente approximation racine Python première spécialité", duree: "≈ 10 min", resume: R`L'idée géniale de Newton : remplacer la courbe par sa tangente pour s'approcher très vite d'une solution de \(f(x)=0\).` }
  ],

  cours: [
    { titre: "1. Dérivée et sens de variation", html: R`
<p>Dans toute cette partie, \(f\) est une fonction <b>dérivable</b> sur un <b>intervalle</b> \(I\).</p>
<div class="prop"><b>Théorème (du sens de variation au signe de la dérivée).</b>
<ul>
<li>Si \(f\) est croissante sur \(I\), alors \(f'(x)\geqslant 0\) pour tout \(x\in I\).</li>
<li>Si \(f\) est décroissante sur \(I\), alors \(f'(x)\leqslant 0\) pour tout \(x\in I\).</li>
<li>Si \(f\) est constante sur \(I\), alors \(f'(x)=0\) pour tout \(x\in I\).</li>
</ul>
<i>Idée :</i> \(f'(a)\) est le coefficient directeur de la tangente. Si la courbe monte, ses tangentes ne peuvent pas « descendre ».</div>
<div class="prop"><b>Théorème (du signe de la dérivée au sens de variation) — admis.</b>
<ul>
<li>Si \(f'(x)\geqslant 0\) pour tout \(x\in I\), alors \(f\) est croissante sur \(I\).</li>
<li>Si \(f'(x)\leqslant 0\) pour tout \(x\in I\), alors \(f\) est décroissante sur \(I\).</li>
<li>Si \(f'(x)=0\) pour tout \(x\in I\), alors \(f\) est constante sur \(I\).</li>
</ul>
Si de plus \(f'(x)\gt 0\) sur \(I\) sauf éventuellement en quelques valeurs isolées où elle s'annule, \(f\) est <b>strictement</b> croissante sur \(I\) (de même pour « strictement décroissante » avec \(f'\lt 0\)).</div>
<div class="astuce"><b>Méthode : étudier les variations de \(f\)</b>
<ol>
<li>Préciser l'ensemble de définition (et de dérivabilité).</li>
<li>Calculer \(f'(x)\).</li>
<li>Étudier le <b>signe</b> de \(f'(x)\) : factoriser, utiliser le discriminant d'un trinôme, remarquer qu'un carré est positif…</li>
<li>Dresser le <b>tableau de variations</b> : ligne de \(x\), ligne du signe de \(f'(x)\), ligne des variations avec les flèches et les valeurs aux bornes et aux points où \(f'\) s'annule.</li>
</ol></div>
<div class="ex"><b>Exemple 1.</b> Soit \(f(x)=x^3-3x+1\) sur \(\mathbb{R}\).<br>
\(f'(x)=3x^2-3=3(x^2-1)=3(x-1)(x+1)\). C'est un trinôme de racines \(-1\) et \(1\), de coefficient \(3\gt 0\) : il est positif à l'extérieur des racines, négatif entre.<br>
\(f(-1)=-1+3+1=3\) et \(f(1)=1-3+1=-1\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↗</td><td>\(3\)</td><td>↘</td><td>\(-1\)</td><td>↗</td><td></td></tr>
</table>
</div>
<div class="ex"><b>Exemple 2 (quotient).</b> Soit \(g(x)=\dfrac{2x+1}{x-1}\) sur \(]1\,;+\infty[\). Avec \(\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}\) :
\[g'(x)=\frac{2(x-1)-(2x+1)\times 1}{(x-1)^2}=\frac{-3}{(x-1)^2}.\]
Le dénominateur est un carré non nul, donc strictement positif ; le numérateur vaut \(-3\lt 0\). Donc \(g'(x)\lt 0\) et \(g\) est strictement décroissante sur \(]1\,;+\infty[\).</div>
<div class="warn"><b>Pièges classiques.</b>
<ul>
<li>Ne confonds pas le <b>signe de \(f'\)</b> (qui donne les variations) et le <b>signe de \(f\)</b> (qui dit si la courbe est au-dessus de l'axe des abscisses).</li>
<li>Le théorème marche sur un <b>intervalle</b>. Pour \(x\mapsto \dfrac1x\), la dérivée est négative sur \(\mathbb{R}^*\), mais la fonction n'est pas décroissante « sur \(\mathbb{R}^*\) » : elle l'est sur \(]-\infty\,;0[\) et sur \(]0\,;+\infty[\) séparément.</li>
<li>Dans un tableau de variations, on ne met jamais de flèche qui traverse une valeur interdite : on met une double barre.</li>
</ul></div>
` },
    { titre: "2. Extremums et applications", html: R`
<div class="def"><b>Définitions.</b> Soit \(f\) définie sur un intervalle \(I\) et \(a\in I\).
<ul>
<li>\(f(a)\) est le <b>maximum</b> de \(f\) sur \(I\) si \(f(x)\leqslant f(a)\) pour tout \(x\in I\).</li>
<li>\(f(a)\) est le <b>minimum</b> de \(f\) sur \(I\) si \(f(x)\geqslant f(a)\) pour tout \(x\in I\).</li>
<li>\(f(a)\) est un <b>maximum (ou minimum) local</b> s'il est le maximum (ou minimum) de \(f\) sur un intervalle ouvert contenant \(a\), même petit.</li>
</ul>
Un <b>extremum</b> est un maximum ou un minimum.</div>
<div class="prop"><b>Propriétés.</b> Soit \(f\) dérivable sur un intervalle <b>ouvert</b> \(I\) et \(a\in I\).
<ul>
<li>Si \(f\) admet un extremum local en \(a\), alors \(f'(a)=0\) : la tangente est horizontale.</li>
<li>Si \(f'\) <b>s'annule en \(a\) en changeant de signe</b>, alors \(f\) admet un extremum local en \(a\) : un maximum si \(f'\) passe de \(+\) à \(-\), un minimum si \(f'\) passe de \(-\) à \(+\).</li>
</ul></div>
<div class="warn"><b>Attention : \(f'(a)=0\) ne suffit pas !</b> Pour \(f(x)=x^3\), \(f'(x)=3x^2\) et \(f'(0)=0\). Mais \(f'\) est positive des deux côtés de \(0\) : \(f\) est strictement croissante sur \(\mathbb{R}\) et n'a <b>pas</b> d'extremum en \(0\).</div>

<p><b>Application 1 : démontrer une inégalité.</b></p>
<div class="astuce"><b>Méthode.</b> Pour montrer que \(f(x)\geqslant g(x)\) sur \(I\) :
<ol><li>on pose \(h(x)=f(x)-g(x)\) ;</li><li>on étudie les variations de \(h\) ;</li><li>on montre que le minimum de \(h\) sur \(I\) est positif ou nul ;</li><li>on conclut : \(h(x)\geqslant 0\), donc \(f(x)\geqslant g(x)\).</li></ol></div>
<div class="ex"><b>Exemple.</b> Montrons que pour tout \(x\geqslant 0\), \(x^3\geqslant 3x-2\).<br>
On pose \(h(x)=x^3-3x+2\) sur \([0\,;+\infty[\). \(h'(x)=3x^2-3=3(x-1)(x+1)\). Sur \([0\,;+\infty[\), \(x+1\gt 0\), donc \(h'(x)\) a le signe de \(x-1\) : \(h\) est décroissante sur \([0\,;1]\) et croissante sur \([1\,;+\infty[\). Son minimum est \(h(1)=1-3+2=0\). Donc \(h(x)\geqslant 0\), c'est-à-dire \(x^3\geqslant 3x-2\).</div>

<p><b>Application 2 : position relative de deux courbes.</b></p>
<div class="prop">Soit \(\mathcal{C}_f\) et \(\mathcal{C}_g\) les courbes de \(f\) et \(g\) sur \(I\), et \(d(x)=f(x)-g(x)\).
<ul><li>Si \(d(x)\gt 0\), \(\mathcal{C}_f\) est <b>au-dessus</b> de \(\mathcal{C}_g\) ;</li><li>si \(d(x)\lt 0\), \(\mathcal{C}_f\) est <b>en dessous</b> ;</li><li>si \(d(x)=0\), les courbes se coupent (ou se touchent).</li></ul>
Pour connaître le signe de \(d\), on factorise si on peut ; sinon on étudie ses variations avec \(d'\).</div>

<p><b>Application 3 : problèmes d'optimisation.</b></p>
<div class="astuce"><b>Méthode.</b> 1) Choisir la variable \(x\) et préciser ses valeurs possibles. 2) Exprimer la grandeur à optimiser en fonction de \(x\). 3) Étudier les variations de cette fonction. 4) Lire le maximum ou le minimum et <b>répondre à la question posée par une phrase</b>.</div>
<div class="ex"><b>Exemple (la boîte).</b> Dans un carré de carton de \(24\) cm de côté, on découpe aux quatre coins un carré de côté \(x\) puis on replie pour former une boîte sans couvercle. Ici \(x\in\,]0\,;12[\) et le volume vaut \(V(x)=x(24-2x)^2\).<br>
Avec \((uv)'=u'v+uv'\) et \(\big((24-2x)^2\big)'=2\times(-2)\times(24-2x)\) :
\[V'(x)=(24-2x)^2-4x(24-2x)=(24-2x)(24-2x-4x)=(24-2x)(24-6x).\]
Sur \(]0\,;12[\), \(24-2x\gt 0\), donc \(V'(x)\) a le signe de \(24-6x\) : positif si \(x\lt 4\), négatif si \(x\gt 4\). \(V\) est croissante sur \(]0\,;4]\) puis décroissante sur \([4\,;12[\). Le volume est maximal pour \(x=4\) cm et vaut \(V(4)=4\times 16^2=1024\) cm³.</div>

<p><b>Application 4 : la méthode de Newton.</b></p>
<div class="def">On cherche une valeur approchée d'une solution \(\alpha\) de \(f(x)=0\). Partant d'une valeur \(x_0\) proche de \(\alpha\), on remplace la courbe par sa tangente en \(x_0\) : \(y=f(x_0)+f'(x_0)(x-x_0)\). Cette tangente coupe l'axe des abscisses (si \(f'(x_0)\neq 0\)) en
\[x_1=x_0-\frac{f(x_0)}{f'(x_0)}.\]
On recommence à partir de \(x_1\), et ainsi de suite : \(x_{n+1}=x_n-\dfrac{f(x_n)}{f'(x_n)}\). En général, la suite se rapproche <b>très vite</b> de \(\alpha\).</div>
<div class="ex"><b>Exemple : une valeur approchée de \(\sqrt2\).</b> On prend \(f(x)=x^2-2\), \(f'(x)=2x\), \(x_0=1\).
<pre><code>def newton(x, n):
    for i in range(n):
        x = x - (x**2 - 2) / (2*x)
    return x

print(newton(1, 3))   # 1.4142156862745099</code></pre>
On obtient \(x_1=1{,}5\), \(x_2\approx 1{,}416\,667\), \(x_3\approx 1{,}414\,216\), alors que \(\sqrt2\approx 1{,}414\,214\) : déjà 5 décimales justes en 3 étapes !</div>
<div class="warn">La méthode peut échouer si \(f'(x_n)=0\) (tangente horizontale : division par zéro) ou si \(x_0\) est choisi trop loin de la solution.</div>
` }
  ],

  quiz: [
    { q: R`\(f\) est dérivable sur \([0\,;5]\) et \(f'(x)\gt 0\) pour tout \(x\) de \([0\,;5]\). Alors :`,
      choix: [R`\(f\) est positive sur \([0\,;5]\)`, R`\(f\) est strictement croissante sur \([0\,;5]\)`, R`\(f\) est strictement décroissante sur \([0\,;5]\)`, R`On ne peut rien dire`],
      bonne: 1, explication: R`Le signe de \(f'\) donne le sens de variation de \(f\), pas le signe de \(f\). Dérivée strictement positive : \(f\) strictement croissante.` },
    { q: R`Le minimum de \(f(x)=x^2-4x+1\) sur \(\mathbb{R}\) est :`,
      choix: [R`\(1\)`, R`\(2\)`, R`\(-3\)`, R`\(-4\)`],
      bonne: 2, explication: R`\(f'(x)=2x-4\) s'annule en \(2\) en passant de \(-\) à \(+\). Le minimum vaut \(f(2)=4-8+1=-3\) (atteint en \(x=2\) : ne confonds pas l'abscisse et la valeur !).` },
    { q: R`La dérivée \(f'\) est négative sur \(]-\infty\,;3]\), s'annule en \(3\), puis est positive sur \([3\,;+\infty[\). Alors :`,
      choix: [R`\(f\) admet un maximum en \(3\)`, R`\(f\) admet un minimum en \(3\)`, R`\(f(3)=0\)`, R`\(f\) est croissante sur \(\mathbb{R}\)`],
      bonne: 1, explication: R`\(f\) descend puis monte : elle atteint son point le plus bas en \(x=3\). C'est \(f'(3)\) qui vaut \(0\), pas \(f(3)\).` },
    { q: R`Si \(f'(a)=0\), alors \(f\) admet forcément un extremum en \(a\).`,
      choix: [R`Vrai`, R`Faux`, R`Vrai seulement si \(a=0\)`, R`Vrai seulement pour les polynômes`],
      bonne: 1, explication: R`Contre-exemple : \(f(x)=x^3\), \(f'(0)=0\) mais \(f'\geqslant 0\) partout, donc pas d'extremum en \(0\). Il faut que \(f'\) <b>change de signe</b>.` },
    { q: R`Les abscisses des points où la courbe de \(f(x)=x^3-12x\) a une tangente horizontale sont :`,
      choix: [R`\(0\) et \(12\)`, R`\(-2\) et \(2\)`, R`\(-4\) et \(4\)`, R`\(2\) seulement`],
      bonne: 1, explication: R`\(f'(x)=3x^2-12=3(x^2-4)=3(x-2)(x+2)\), qui s'annule en \(-2\) et \(2\).` },
    { q: R`On sait que \(f(x)-g(x)\lt 0\) pour tout \(x\in I\). Alors sur \(I\) :`,
      choix: [R`\(\mathcal{C}_f\) est au-dessus de \(\mathcal{C}_g\)`, R`\(\mathcal{C}_f\) est en dessous de \(\mathcal{C}_g\)`, R`les courbes se coupent`, R`\(f\) est décroissante`],
      bonne: 1, explication: R`\(f(x)\lt g(x)\) : pour chaque abscisse, le point de \(\mathcal{C}_f\) est plus bas que celui de \(\mathcal{C}_g\).` },
    { q: R`Méthode de Newton pour \(f(x)=x^2-5\) avec \(x_0=2\). Que vaut \(x_1\) ?`,
      choix: [R`\(2{,}5\)`, R`\(2{,}25\)`, R`\(2{,}2\)`, R`\(1{,}75\)`],
      bonne: 1, explication: R`\(x_1=x_0-\dfrac{f(x_0)}{f'(x_0)}=2-\dfrac{4-5}{4}=2+\dfrac14=2{,}25\). (Et \(\sqrt5\approx 2{,}236\) : déjà proche !)` }
  ],

  exercices: [
    { niveau: 1, titre: "Un polynôme de degré 3",
      enonce: R`<p>Soit \(f\) définie sur \(\mathbb{R}\) par \(f(x)=2x^3-3x^2-12x+5\).</p><ol><li>Calculer \(f'(x)\) et vérifier que \(f'(x)=6(x-2)(x+1)\).</li><li>Étudier le signe de \(f'(x)\).</li><li>Dresser le tableau de variations de \(f\) (avec les valeurs aux points où \(f'\) s'annule).</li></ol>`,
      indice: R`Développe \(6(x-2)(x+1)\) pour vérifier. Pour le signe, \(6(x-2)(x+1)\) est un trinôme : signe de \(a=6\) à l'extérieur des racines.`,
      correction: R`<ol><li>\(f'(x)=2\times 3x^2-3\times 2x-12=6x^2-6x-12\). Or \(6(x-2)(x+1)=6(x^2+x-2x-2)=6(x^2-x-2)=6x^2-6x-12\). C'est bien égal.</li>
<li>\(f'(x)\) est un trinôme de racines \(-1\) et \(2\), de coefficient dominant \(6\gt 0\). Il est positif à l'extérieur des racines et négatif entre : \(f'(x)\gt 0\) sur \(]-\infty\,;-1[\cup]2\,;+\infty[\), \(f'(x)\lt 0\) sur \(]-1\,;2[\), \(f'(-1)=f'(2)=0\).</li>
<li>\(f(-1)=2\times(-1)-3\times 1+12+5=-2-3+12+5=12\) et \(f(2)=16-12-24+5=-15\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↗</td><td>\(12\)</td><td>↘</td><td>\(-15\)</td><td>↗</td><td></td></tr>
</table>
\(f\) admet un maximum local \(12\) en \(x=-1\) et un minimum local \(-15\) en \(x=2\).</li></ol>` },

    { niveau: 1, titre: "Du tableau au signe de la dérivée (et retour)",
      enonce: R`<p><b>Partie A.</b> Une fonction \(f\), dérivable sur \([-3\,;6]\), a le tableau de variations suivant :</p>
<table class="tv">
<tr><td>\(x\)</td><td>\(-3\)</td><td></td><td>\(1\)</td><td></td><td>\(4\)</td><td></td><td>\(6\)</td></tr>
<tr><td>variations de \(f\)</td><td>\(-1\)</td><td>↗</td><td>\(4\)</td><td>↘</td><td>\(-2\)</td><td>↗</td><td>\(3\)</td></tr>
</table>
<ol><li>Donner le signe de \(f'(0)\), de \(f'(2)\) et de \(f'(5)\).</li><li>Que valent \(f'(1)\) et \(f'(4)\) ? Justifier.</li><li>Comparer \(f(-2)\) et \(f(0)\). Peut-on comparer \(f(0)\) et \(f(5)\) ?</li></ol>
<p><b>Partie B.</b> Une fonction \(g\) dérivable sur \([-2\,;3]\) vérifie : \(g'(x)\gt 0\) sur \([-2\,;0[\), \(g'(0)=0\), \(g'(x)\lt 0\) sur \(]0\,;3]\). De plus \(g(-2)=1\), \(g(0)=5\), \(g(3)=-4\). Dresser le tableau de variations de \(g\) et donner son maximum sur \([-2\,;3]\).</p>`,
      indice: R`Croissante ⇒ dérivée positive ; décroissante ⇒ dérivée négative. En un extremum situé à l'intérieur de l'intervalle, la tangente est horizontale.`,
      correction: R`<p><b>Partie A.</b></p><ol><li>\(0\in[-3\,;1]\) où \(f\) est croissante : \(f'(0)\geqslant 0\). \(2\in[1\,;4]\) où \(f\) est décroissante : \(f'(2)\leqslant 0\). \(5\in[4\,;6]\) où \(f\) est croissante : \(f'(5)\geqslant 0\).</li>
<li>\(f\) admet un maximum local en \(1\) et un minimum local en \(4\), qui sont à l'intérieur de \([-3\,;6]\). Comme \(f\) est dérivable, \(f'(1)=0\) et \(f'(4)=0\) (tangentes horizontales).</li>
<li>\(-3\leqslant -2\lt 0\leqslant 1\) et \(f\) est croissante sur \([-3\,;1]\), donc \(f(-2)\leqslant f(0)\). En revanche, on sait seulement que \(f(0)\in[-1\,;4]\) et \(f(5)\in[-2\,;3]\) : ces intervalles se chevauchent, on <b>ne peut pas</b> comparer \(f(0)\) et \(f(5)\).</li></ol>
<p><b>Partie B.</b> \(g'\) positive puis négative : \(g\) croît puis décroît.</p>
<table class="tv">
<tr><td>\(x\)</td><td>\(-2\)</td><td></td><td>\(0\)</td><td></td><td>\(3\)</td></tr>
<tr><td>signe de \(g'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(g\)</td><td>\(1\)</td><td>↗</td><td>\(5\)</td><td>↘</td><td>\(-4\)</td></tr>
</table>
<p>Le maximum de \(g\) sur \([-2\,;3]\) est \(5\), atteint en \(x=0\).</p>` },

    { niveau: 1, titre: "Un minimum et une inégalité",
      enonce: R`<p>Soit \(f\) définie sur \(]0\,;+\infty[\) par \(f(x)=x+\dfrac{4}{x}\).</p><ol><li>Montrer que \(f'(x)=\dfrac{x^2-4}{x^2}\).</li><li>Étudier le signe de \(f'(x)\) sur \(]0\,;+\infty[\) et dresser le tableau de variations de \(f\).</li><li>En déduire que pour tout \(x\gt 0\), \(x+\dfrac4x\geqslant 4\).</li></ol>`,
      indice: R`La dérivée de \(\dfrac1x\) est \(-\dfrac1{x^2}\). Sur \(]0\,;+\infty[\), \(x^2-4=(x-2)(x+2)\) avec \(x+2\gt 0\).`,
      correction: R`<ol><li>\(f'(x)=1+4\times\left(-\dfrac1{x^2}\right)=1-\dfrac4{x^2}=\dfrac{x^2}{x^2}-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}\).</li>
<li>\(x^2\gt 0\) et \(x^2-4=(x-2)(x+2)\) avec \(x+2\gt 0\) sur \(]0\,;+\infty[\). Donc \(f'(x)\) a le signe de \(x-2\) : négatif sur \(]0\,;2[\), nul en \(2\), positif sur \(]2\,;+\infty[\). \(f(2)=2+2=4\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>||</td><td>↘</td><td>\(4\)</td><td>↗</td><td></td></tr>
</table></li>
<li>D'après le tableau, \(f\) admet sur \(]0\,;+\infty[\) un minimum égal à \(4\), atteint en \(x=2\). Donc pour tout \(x\gt 0\), \(f(x)\geqslant 4\), c'est-à-dire \(x+\dfrac4x\geqslant 4\).</li></ol>` },

    { niveau: 1, titre: "Extremums sur un intervalle fermé",
      enonce: R`<p>Soit \(f\) définie sur \([-2\,;2]\) par \(f(x)=-x^3+3x\).</p><ol><li>Calculer \(f'(x)\) et étudier son signe.</li><li>Dresser le tableau de variations de \(f\) sur \([-2\,;2]\).</li><li>Déterminer le maximum et le minimum de \(f\) sur \([-2\,;2]\), en précisant où ils sont atteints.</li></ol>`,
      indice: R`\(f'(x)=3-3x^2=3(1-x)(1+x)\). N'oublie pas de calculer les images des bornes \(-2\) et \(2\) : un extremum peut être atteint au bord !`,
      correction: R`<ol><li>\(f'(x)=-3x^2+3=3(1-x^2)=3(1-x)(1+x)\). C'est un trinôme de coefficient dominant \(-3\lt 0\) et de racines \(-1\) et \(1\) : \(f'(x)\lt 0\) sur \([-2\,;-1[\) et \(]1\,;2]\), \(f'(x)\gt 0\) sur \(]-1\,;1[\).</li>
<li>\(f(-2)=8-6=2\), \(f(-1)=1-3=-2\), \(f(1)=-1+3=2\), \(f(2)=-8+6=-2\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-2\)</td><td></td><td>\(-1\)</td><td></td><td>\(1\)</td><td></td><td>\(2\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>\(2\)</td><td>↘</td><td>\(-2\)</td><td>↗</td><td>\(2\)</td><td>↘</td><td>\(-2\)</td></tr>
</table></li>
<li>Le maximum de \(f\) sur \([-2\,;2]\) est \(2\), atteint en \(x=-2\) et en \(x=1\). Le minimum est \(-2\), atteint en \(x=-1\) et en \(x=2\). <i>Remarque :</i> deux de ces extremums sont atteints aux bornes, là où \(f'\) ne s'annule pas.</li></ol>` },

    { niveau: 2, titre: "Démontrer une inégalité",
      enonce: R`<p>On veut démontrer que pour tout réel \(x\geqslant 0\) : \(x^3\geqslant 3x-2\).</p><ol><li>On pose \(h(x)=x^3-3x+2\) pour \(x\geqslant 0\). Calculer \(h'(x)\) et étudier son signe sur \([0\,;+\infty[\).</li><li>Dresser le tableau de variations de \(h\) sur \([0\,;+\infty[\).</li><li>Conclure.</li><li>Bonus : vérifier que \(h(x)=(x-1)^2(x+2)\). Pour quelles valeurs de \(x\) l'inégalité est-elle une égalité ?</li></ol>`,
      indice: R`Le but est de montrer que \(h(x)\geqslant 0\) : il suffit que le minimum de \(h\) soit positif ou nul.`,
      correction: R`<ol><li>\(h'(x)=3x^2-3=3(x-1)(x+1)\). Sur \([0\,;+\infty[\), \(x+1\gt 0\), donc \(h'(x)\) est du signe de \(x-1\) : \(h'(x)\lt 0\) sur \([0\,;1[\), \(h'(1)=0\), \(h'(x)\gt 0\) sur \(]1\,;+\infty[\).</li>
<li>\(h(0)=2\) et \(h(1)=1-3+2=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(h'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(h\)</td><td>\(2\)</td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr>
</table></li>
<li>Le minimum de \(h\) sur \([0\,;+\infty[\) est \(h(1)=0\). Donc pour tout \(x\geqslant 0\), \(h(x)\geqslant 0\), soit \(x^3-3x+2\geqslant 0\), c'est-à-dire \(x^3\geqslant 3x-2\).</li>
<li>\((x-1)^2(x+2)=(x^2-2x+1)(x+2)=x^3+2x^2-2x^2-4x+x+2=x^3-3x+2=h(x)\). Pour \(x\geqslant 0\), \(h(x)=0\iff x=1\) (car \(x+2\neq 0\)). L'égalité a lieu uniquement pour \(x=1\) : la droite \(y=3x-2\) est d'ailleurs la tangente à la courbe de \(x\mapsto x^3\) en \(1\).</li></ol>` },

    { niveau: 2, titre: "Position relative de deux courbes",
      enonce: R`<p>On considère \(f(x)=x^3\) et \(g(x)=3x^2-4\) définies sur \(\mathbb{R}\), de courbes \(\mathcal{C}_f\) et \(\mathcal{C}_g\). On pose \(d(x)=f(x)-g(x)\).</p><ol><li>Exprimer \(d(x)\), calculer \(d'(x)\) et dresser le tableau de variations de \(d\) sur \(\mathbb{R}\).</li><li>Calculer \(d(-1)\). En déduire le signe de \(d(x)\) suivant les valeurs de \(x\).</li><li>En déduire la position relative de \(\mathcal{C}_f\) et \(\mathcal{C}_g\).</li></ol>`,
      indice: R`\(d'(x)=3x^2-6x=3x(x-2)\). Utilise les variations : sur un intervalle où \(d\) est croissante et s'annule en \(-1\), \(d\) est négative avant \(-1\) et positive après.`,
      correction: R`<ol><li>\(d(x)=x^3-3x^2+4\) et \(d'(x)=3x^2-6x=3x(x-2)\) : trinôme de racines \(0\) et \(2\), coefficient \(3\gt 0\), donc positif à l'extérieur des racines. \(d(0)=4\) et \(d(2)=8-12+4=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(d'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(d\)</td><td></td><td>↗</td><td>\(4\)</td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr>
</table></li>
<li>\(d(-1)=-1-3+4=0\).
<ul><li>Sur \(]-\infty\,;0]\), \(d\) est strictement croissante et \(d(-1)=0\) : donc \(d(x)\lt 0\) si \(x\lt -1\) et \(d(x)\gt 0\) si \(-1\lt x\leqslant 0\).</li>
<li>Sur \([0\,;2]\), \(d\) décroît de \(4\) à \(0\) : \(d(x)\geqslant 0\), avec égalité seulement en \(2\).</li>
<li>Sur \([2\,;+\infty[\), \(d\) croît à partir de \(0\) : \(d(x)\geqslant 0\), avec égalité seulement en \(2\).</li></ul>
Bilan : \(d(x)\lt 0\) sur \(]-\infty\,;-1[\), \(d(x)=0\) pour \(x=-1\) et \(x=2\), \(d(x)\gt 0\) sinon.<br><i>Vérification :</i> on peut montrer que \(d(x)=(x+1)(x-2)^2\).</li>
<li>\(\mathcal{C}_f\) est en dessous de \(\mathcal{C}_g\) sur \(]-\infty\,;-1[\), au-dessus sur \(]-1\,;2[\) et sur \(]2\,;+\infty[\). Les courbes se coupent au point d'abscisse \(-1\) et se touchent (sans se traverser) au point d'abscisse \(2\).</li></ol>` },

    { niveau: 2, titre: "La boîte de volume maximal",
      enonce: R`<p>Dans une plaque carrée de carton de \(24\) cm de côté, on découpe à chaque coin un carré de côté \(x\) cm, puis on relève les bords pour obtenir une boîte sans couvercle.</p><ol><li>Quelles sont les valeurs possibles de \(x\) ?</li><li>Montrer que le volume de la boîte (en cm³) est \(V(x)=x(24-2x)^2\).</li><li>Montrer que \(V'(x)=(24-2x)(24-6x)\).</li><li>Étudier les variations de \(V\). Quelle valeur de \(x\) faut-il choisir pour que le volume soit maximal ? Quel est ce volume ?</li></ol>`,
      indice: R`Le fond de la boîte est un carré de côté \(24-2x\), la hauteur est \(x\). Tu peux développer \(V(x)=4x^3-96x^2+576x\) avant de dériver, puis factoriser.`,
      correction: R`<ol><li>Il faut \(x\gt 0\) et \(24-2x\gt 0\), soit \(x\lt 12\). Donc \(x\in\,]0\,;12[\).</li>
<li>Après pliage, le fond est un carré de côté \(24-2x\) et la hauteur vaut \(x\). Donc \(V(x)=(24-2x)^2\times x=x(24-2x)^2\).</li>
<li>En développant : \(V(x)=x(576-96x+4x^2)=4x^3-96x^2+576x\), donc \(V'(x)=12x^2-192x+576\). Par ailleurs \((24-2x)(24-6x)=576-144x-48x+12x^2=12x^2-192x+576\). C'est bien égal.</li>
<li>Sur \(]0\,;12[\), \(24-2x\gt 0\) donc \(V'(x)\) a le signe de \(24-6x\), qui est positif pour \(x\lt 4\) et négatif pour \(x\gt 4\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(4\)</td><td></td><td>\(12\)</td></tr>
<tr><td>signe de \(V'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(V\)</td><td>\(0\)</td><td>↗</td><td>\(1024\)</td><td>↘</td><td>\(0\)</td></tr>
</table>
\(V(4)=4\times(24-8)^2=4\times 256=1024\). Il faut découper des carrés de \(4\) cm de côté ; le volume maximal est alors \(1024\) cm³ (soit environ 1 litre).</li></ol>` },

    { niveau: 2, titre: "Retrouver les coefficients",
      enonce: R`<p>Soit \(f(x)=x^3+ax^2+b\), où \(a\) et \(b\) sont deux réels. On sait que la courbe de \(f\) admet une tangente horizontale au point d'abscisse \(2\) et que \(f(2)=-3\).</p><ol><li>Calculer \(f'(x)\) en fonction de \(a\).</li><li>Déterminer \(a\), puis \(b\).</li><li>Vérifier que \(f\) admet bien un extremum local en \(2\). Est-ce un maximum ou un minimum ?</li></ol>`,
      indice: R`Tangente horizontale en \(2\) se traduit par \(f'(2)=0\). Pour la question 3, étudie le signe de \(f'\) autour de \(2\).`,
      correction: R`<ol><li>\(f'(x)=3x^2+2ax\).</li>
<li>Tangente horizontale en \(2\) : \(f'(2)=0\iff 12+4a=0\iff a=-3\). Puis \(f(2)=-3\iff 8+4a+b=-3\iff 8-12+b=-3\iff b=1\). Donc \(f(x)=x^3-3x^2+1\).</li>
<li>\(f'(x)=3x^2-6x=3x(x-2)\), trinôme positif à l'extérieur de ses racines \(0\) et \(2\). Donc \(f'(x)\lt 0\) sur \(]0\,;2[\) et \(f'(x)\gt 0\) sur \(]2\,;+\infty[\) : \(f'\) s'annule en \(2\) <b>en changeant de signe</b> (de \(-\) à \(+\)). \(f\) admet donc en \(2\) un <b>minimum local</b>, égal à \(f(2)=-3\).</li></ol>` },

    { niveau: 3, titre: "Coût marginal et coût moyen",
      enonce: R`<p>Une entreprise fabrique \(q\) centaines d'objets par jour, avec \(q\in\,]0\,;20]\). Le coût total de fabrication, en centaines d'euros, est \(C(q)=0{,}5q^2+2q+32\).</p>
<ol><li>Le <b>coût moyen</b> par centaine d'objets est \(C_M(q)=\dfrac{C(q)}{q}\). Montrer que \(C_M(q)=0{,}5q+2+\dfrac{32}{q}\).</li>
<li>Calculer \(C_M'(q)\), étudier les variations de \(C_M\) et déterminer la production qui rend le coût moyen minimal. Quel est ce coût moyen minimal ?</li>
<li>Les économistes appellent <b>coût marginal</b> la dérivée \(C_m(q)=C'(q)\). Calculer \(C_m(8)\). Que remarques-tu ?</li>
<li>Chaque centaine d'objets est vendue \(20\) centaines d'euros (soit 20 € l'objet). Exprimer le bénéfice \(B(q)\) et déterminer la production qui le rend maximal. Quel est le bénéfice maximal, en euros ?</li></ol>`,
      indice: R`\(C_M'(q)=0{,}5-\dfrac{32}{q^2}=\dfrac{0{,}5q^2-32}{q^2}=\dfrac{0{,}5(q-8)(q+8)}{q^2}\). Pour le bénéfice : \(B(q)=20q-C(q)\).`,
      correction: R`<ol><li>\(C_M(q)=\dfrac{0{,}5q^2+2q+32}{q}=0{,}5q+2+\dfrac{32}{q}\).</li>
<li>\(C_M'(q)=0{,}5-\dfrac{32}{q^2}=\dfrac{0{,}5q^2-32}{q^2}=\dfrac{0{,}5(q^2-64)}{q^2}=\dfrac{0{,}5(q-8)(q+8)}{q^2}\). Sur \(]0\,;20]\), \(q^2\gt 0\) et \(q+8\gt 0\), donc \(C_M'(q)\) a le signe de \(q-8\).
<table class="tv">
<tr><td>\(q\)</td><td>\(0\)</td><td></td><td>\(8\)</td><td></td><td>\(20\)</td></tr>
<tr><td>signe de \(C_M'(q)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(C_M\)</td><td>||</td><td>↘</td><td>\(10\)</td><td>↗</td><td>\(13{,}6\)</td></tr>
</table>
\(C_M(8)=4+2+4=10\) et \(C_M(20)=10+2+1{,}6=13{,}6\). Le coût moyen est minimal pour \(q=8\), soit \(800\) objets par jour ; il vaut alors \(10\) centaines d'euros par centaine d'objets, soit \(10\) € par objet.</li>
<li>\(C_m(q)=C'(q)=q+2\), donc \(C_m(8)=10=C_M(8)\). On remarque que <b>le coût moyen est minimal quand il est égal au coût marginal</b> : c'est un résultat classique en économie.</li>
<li>\(B(q)=20q-(0{,}5q^2+2q+32)=-0{,}5q^2+18q-32\). \(B'(q)=-q+18\), positif pour \(q\lt 18\) et négatif pour \(q\gt 18\) : \(B\) est croissante sur \(]0\,;18]\) et décroissante sur \([18\,;20]\). Le bénéfice est maximal pour \(q=18\) (1 800 objets) et vaut \(B(18)=-0{,}5\times 324+324-32=-162+324-32=130\) centaines d'euros, soit \(13\,000\) €.</li></ol>` },

    { niveau: 3, titre: "Optimiser une distance",
      enonce: R`<p>Dans un repère orthonormé, on considère la parabole \(\mathcal{P}\) d'équation \(y=x^2\) et le point \(A(3\,;0)\). Un point \(M\) d'abscisse \(x\) se déplace sur \(\mathcal{P}\). On cherche la position de \(M\) qui rend la distance \(AM\) minimale.</p>
<ol><li>Montrer que \(AM^2=x^4+x^2-6x+9\).</li><li>On pose \(f(x)=x^4+x^2-6x+9\). Montrer que \(f'(x)=2(x-1)(2x^2+2x+3)\).</li><li>Étudier le signe de \(f'(x)\) et les variations de \(f\).</li><li>En déduire les coordonnées du point \(M\) le plus proche de \(A\) et la distance minimale \(AM\).</li><li>Pourquoi a-t-on le droit de travailler avec \(AM^2\) plutôt qu'avec \(AM\) ?</li></ol>`,
      indice: R`\(AM^2=(x_M-x_A)^2+(y_M-y_A)^2\) avec \(M(x\,;x^2)\). Pour le signe de \(2x^2+2x+3\), calcule son discriminant.`,
      correction: R`<ol><li>\(M(x\,;x^2)\) et \(A(3\,;0)\) : \(AM^2=(x-3)^2+(x^2-0)^2=x^2-6x+9+x^4=x^4+x^2-6x+9\).</li>
<li>\(f'(x)=4x^3+2x-6\). Et \(2(x-1)(2x^2+2x+3)=2(2x^3+2x^2+3x-2x^2-2x-3)=2(2x^3+x-3)=4x^3+2x-6\). C'est bien égal.</li>
<li>Pour \(2x^2+2x+3\) : \(\Delta=4-24=-20\lt 0\), donc ce trinôme garde le signe de \(a=2\) : il est toujours strictement positif. Ainsi \(f'(x)\) a le signe de \(x-1\) : \(f\) est décroissante sur \(]-\infty\,;1]\) et croissante sur \([1\,;+\infty[\). \(f(1)=1+1-6+9=5\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↘</td><td>\(5\)</td><td>↗</td><td></td></tr>
</table></li>
<li>\(AM^2\) est minimal pour \(x=1\) : le point cherché est \(M(1\,;1)\), et la distance minimale est \(AM=\sqrt5\approx 2{,}24\).</li>
<li>Une distance est positive, et la fonction racine carrée est strictement croissante sur \([0\,;+\infty[\) : \(AM=\sqrt{AM^2}\) est donc minimale exactement quand \(AM^2\) l'est. Travailler avec \(AM^2\) évite de dériver une racine carrée.</li></ol>` },

    { niveau: 3, titre: "Algorithme : la méthode de Newton",
      enonce: R`<p>Soit \(f(x)=x^3+x-1\) sur \(\mathbb{R}\).</p>
<ol><li>Étudier les variations de \(f\). Calculer \(f(0)\) et \(f(1)\). On admet que l'équation \(f(x)=0\) a une unique solution \(\alpha\), et qu'elle est dans \([0\,;1]\).</li>
<li>Soit \(a\) un réel. Donner l'équation de la tangente \(T_a\) à la courbe de \(f\) au point d'abscisse \(a\), et montrer que \(T_a\) coupe l'axe des abscisses au point d'abscisse \(a-\dfrac{f(a)}{f'(a)}\).</li>
<li>On considère le programme Python suivant :
<pre><code>def f(x):
    return x**3 + x - 1

def fp(x):
    return 3*x**2 + 1

x = 1
for i in range(4):
    x = x - f(x) / fp(x)
    print(x)</code></pre>
Calculer à la main les deux premières valeurs affichées (arrondies à \(10^{-4}\)).</li>
<li>Le programme affiche ensuite \(0{,}682\,339\,58\) puis \(0{,}682\,327\,80\). Que peux-tu en conclure ? Modifier le programme pour qu'il s'arrête dès que deux valeurs successives diffèrent de moins de \(10^{-8}\).</li></ol>`,
      indice: R`\(T_a : y=f(a)+f'(a)(x-a)\). Coupe l'axe des abscisses : on résout \(y=0\). Pour la boucle « tant que », garde en mémoire l'ancienne valeur de \(x\).`,
      correction: R`<ol><li>\(f'(x)=3x^2+1\gt 0\) pour tout \(x\) : \(f\) est strictement croissante sur \(\mathbb{R}\). \(f(0)=-1\lt 0\) et \(f(1)=1\gt 0\).</li>
<li>\(T_a : y=f(a)+f'(a)(x-a)\). Comme \(f'(a)=3a^2+1\neq 0\), on résout \(0=f(a)+f'(a)(x-a)\iff x-a=-\dfrac{f(a)}{f'(a)}\iff x=a-\dfrac{f(a)}{f'(a)}\).</li>
<li>Départ \(x_0=1\) : \(x_1=1-\dfrac{f(1)}{f'(1)}=1-\dfrac{1}{4}=0{,}75\).<br>
Puis \(f(0{,}75)=0{,}421\,875+0{,}75-1=0{,}171\,875\) et \(f'(0{,}75)=3\times 0{,}5625+1=2{,}6875\), donc \(x_2=0{,}75-\dfrac{0{,}171\,875}{2{,}6875}\approx 0{,}75-0{,}0640\approx 0{,}6860\).<br>Le programme affiche \(0{,}75\) puis \(0{,}6860\) (environ).</li>
<li>Les valeurs se stabilisent très vite : \(\alpha\approx 0{,}682\,33\) (les décimales communes aux dernières valeurs sont justes). Programme avec arrêt :
<pre><code>x = 1
ancien = 0
while abs(x - ancien) &gt;= 10**-8:
    ancien = x
    x = x - f(x) / fp(x)
print(x)    # 0.6823278038280194</code></pre></li></ol>` },

    { niveau: 3, titre: "Type bac : la canette économique",
      enonce: R`<p>Un fabricant veut produire des canettes cylindriques de volume \(330\) cm³ (33 cL) en utilisant le moins de métal possible. On note \(r\) le rayon de la base et \(h\) la hauteur, en cm (\(r\gt 0\)).</p>
<ol><li>Exprimer \(h\) en fonction de \(r\) sachant que le volume d'un cylindre est \(\pi r^2h\).</li>
<li>L'aire totale de métal (deux disques et la surface latérale) est \(S=2\pi r^2+2\pi rh\). Montrer que \(S(r)=2\pi r^2+\dfrac{660}{r}\).</li>
<li>Montrer que \(S'(r)=\dfrac{4\pi r^3-660}{r^2}\).</li>
<li>On note \(r_0\) le réel positif tel que \(r_0^3=\dfrac{165}{\pi}\). Étudier le signe de \(S'(r)\) et dresser le tableau de variations de \(S\) sur \(]0\,;+\infty[\).</li>
<li>Donner une valeur approchée de \(r_0\) au millimètre, puis de la hauteur correspondante. Que remarques-tu ? Pourquoi les vraies canettes ne respectent-elles pas cette forme, à ton avis ?</li></ol>`,
      indice: R`Pour le signe : \(4\pi r^3-660\geqslant 0\iff r^3\geqslant \dfrac{660}{4\pi}=\dfrac{165}{\pi}\), et la fonction cube est strictement croissante.`,
      correction: R`<ol><li>\(\pi r^2h=330\iff h=\dfrac{330}{\pi r^2}\).</li>
<li>\(S=2\pi r^2+2\pi r\times\dfrac{330}{\pi r^2}=2\pi r^2+\dfrac{660}{r}\).</li>
<li>\(S'(r)=4\pi r+660\times\left(-\dfrac1{r^2}\right)=\dfrac{4\pi r^3}{r^2}-\dfrac{660}{r^2}=\dfrac{4\pi r^3-660}{r^2}\).</li>
<li>\(r^2\gt 0\), donc \(S'(r)\) a le signe de \(4\pi r^3-660\). Or \(4\pi r^3-660\gt 0\iff r^3\gt\dfrac{165}{\pi}=r_0^3\iff r\gt r_0\) car la fonction cube est strictement croissante. Donc \(S'(r)\lt 0\) sur \(]0\,;r_0[\), \(S'(r_0)=0\), \(S'(r)\gt 0\) sur \(]r_0\,;+\infty[\).
<table class="tv">
<tr><td>\(r\)</td><td>\(0\)</td><td></td><td>\(r_0\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(S'(r)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(S\)</td><td>||</td><td>↘</td><td>\(S(r_0)\)</td><td>↗</td><td></td></tr>
</table>
L'aire de métal est minimale pour \(r=r_0\).</li>
<li>À la calculatrice, \(r_0=\left(\dfrac{165}{\pi}\right)^{1/3}\approx 3{,}7\) cm (plus précisément \(3{,}745\)), et \(h=\dfrac{330}{\pi r_0^2}\approx 7{,}5\) cm. L'aire minimale est alors d'environ \(264\) cm².<br>
On remarque que \(h\approx 2r_0\) : la hauteur est égale au diamètre. C'est exact : \(h=\dfrac{330}{\pi r_0^2}=\dfrac{2\times 165}{\pi r_0^2}=\dfrac{2\pi r_0^3}{\pi r_0^2}=2r_0\).<br>
Les vraies canettes sont plus hautes et plus fines : elles doivent tenir dans la main, le couvercle est plus épais (donc plus cher) que la paroi, etc. Le modèle mathématique ne prend pas tout en compte !</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Variations, inégalité, optimisation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Étude d'une fonction", points: 6,
          enonce: R`<p>Soit \(f\) définie sur \([0\,;5]\) par \(f(x)=x^3-6x^2+9x+1\).</p><ol><li>Calculer \(f'(x)\) et montrer que \(f'(x)=3(x-1)(x-3)\).</li><li>Dresser le tableau de variations complet de \(f\) sur \([0\,;5]\).</li><li>Donner le maximum et le minimum de \(f\) sur \([0\,;5]\).</li><li>Déterminer l'équation de la tangente à la courbe de \(f\) au point d'abscisse \(0\).</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(f'(x)=3x^2-12x+9\), et \(3(x-1)(x-3)=3(x^2-4x+3)=3x^2-12x+9\).</li>
<li><b>(2,5 pts : signe 1 pt, valeurs 1 pt, flèches 0,5 pt)</b> Trinôme de racines \(1\) et \(3\), de coefficient \(3\gt 0\) : positif à l'extérieur des racines. \(f(0)=1\), \(f(1)=1-6+9+1=5\), \(f(3)=27-54+27+1=1\), \(f(5)=125-150+45+1=21\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(3\)</td><td></td><td>\(5\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>\(1\)</td><td>↗</td><td>\(5\)</td><td>↘</td><td>\(1\)</td><td>↗</td><td>\(21\)</td></tr>
</table></li>
<li><b>(1 pt)</b> Le maximum est \(21\), atteint en \(x=5\) (et non en \(1\) : \(5\) n'est qu'un maximum local). Le minimum est \(1\), atteint en \(x=0\) et en \(x=3\).</li>
<li><b>(1,5 pt)</b> \(f(0)=1\) et \(f'(0)=9\). La tangente a pour équation \(y=f'(0)(x-0)+f(0)\), soit \(y=9x+1\).</li></ol>` },
        { titre: "Exercice 2 — Une inégalité", points: 5,
          enonce: R`<p>Soit \(h\) définie sur \(]0\,;+\infty[\) par \(h(x)=x^2+\dfrac{16}{x}\).</p><ol><li>Montrer que \(h'(x)=\dfrac{2(x^3-8)}{x^2}\).</li><li>Étudier le signe de \(h'(x)\) et dresser le tableau de variations de \(h\).</li><li>En déduire que pour tout \(x\gt 0\), \(x^2+\dfrac{16}{x}\geqslant 12\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(h'(x)=2x-\dfrac{16}{x^2}=\dfrac{2x^3-16}{x^2}=\dfrac{2(x^3-8)}{x^2}\).</li>
<li><b>(2 pts)</b> \(x^2\gt 0\), donc \(h'(x)\) a le signe de \(x^3-8\). La fonction cube est strictement croissante et \(2^3=8\), donc \(x^3-8\lt 0\) pour \(x\lt 2\) et \(x^3-8\gt 0\) pour \(x\gt 2\). \(h(2)=4+8=12\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(h'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(h\)</td><td>||</td><td>↘</td><td>\(12\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(h\) admet sur \(]0\,;+\infty[\) un minimum égal à \(12\) (en \(x=2\)). Donc pour tout \(x\gt 0\), \(h(x)\geqslant 12\), soit \(x^2+\dfrac{16}{x}\geqslant 12\).</li></ol>` },
        { titre: "Exercice 3 — Courbe et tangente", points: 5,
          enonce: R`<p>Soit \(f(x)=\dfrac1x\) sur \(]0\,;+\infty[\), de courbe \(\mathcal{C}\).</p><ol><li>Montrer que la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(1\) a pour équation \(y=-x+2\).</li><li>On pose \(d(x)=\dfrac1x-(-x+2)=\dfrac1x+x-2\). Étudier les variations de \(d\) sur \(]0\,;+\infty[\).</li><li>En déduire la position relative de \(\mathcal{C}\) et de \(T\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'(x)=-\dfrac1{x^2}\), \(f(1)=1\), \(f'(1)=-1\). \(T : y=-1\times(x-1)+1=-x+2\).</li>
<li><b>(2 pts)</b> \(d'(x)=-\dfrac{1}{x^2}+1=\dfrac{x^2-1}{x^2}=\dfrac{(x-1)(x+1)}{x^2}\). Sur \(]0\,;+\infty[\), \(x^2\gt 0\) et \(x+1\gt 0\) : \(d'(x)\) a le signe de \(x-1\). \(d\) est décroissante sur \(]0\,;1]\) et croissante sur \([1\,;+\infty[\), de minimum \(d(1)=1+1-2=0\).</li>
<li><b>(1,5 pt)</b> Le minimum de \(d\) est \(0\), donc \(d(x)\geqslant 0\) pour tout \(x\gt 0\), avec égalité seulement en \(x=1\). Donc \(\mathcal{C}\) est au-dessus de \(T\) sur \(]0\,;+\infty[\) ; elles se touchent uniquement au point \((1\,;1)\).</li></ol>` },
        { titre: "Exercice 4 — Le champ au bord de la rivière", points: 4,
          enonce: R`<p>Un agriculteur dispose de \(100\) m de clôture pour délimiter un champ rectangulaire le long d'une rivière (le côté le long de la rivière n'a pas besoin de clôture). On note \(x\) la longueur, en m, des deux côtés perpendiculaires à la rivière.</p><ol><li>Montrer que l'aire du champ est \(A(x)=100x-2x^2\), avec \(x\in\,]0\,;50[\).</li><li>Déterminer les dimensions du champ d'aire maximale, et cette aire.</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> Les deux côtés perpendiculaires mesurent \(x\), le côté parallèle à la rivière mesure \(100-2x\) (il faut \(100-2x\gt 0\), soit \(x\lt 50\)). L'aire est \(A(x)=x(100-2x)=100x-2x^2\).</li>
<li><b>(2,5 pts)</b> \(A'(x)=100-4x\), positif pour \(x\lt 25\) et négatif pour \(x\gt 25\). \(A\) est croissante sur \(]0\,;25]\) et décroissante sur \([25\,;50[\) : le maximum est atteint pour \(x=25\). Le champ mesure alors \(25\) m sur \(100-50=50\) m, et son aire est \(A(25)=2500-1250=1250\) m².</li></ol>` }
      ] },
    { titre: "DS n°2 — Extremums, Newton et économie", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Questions rapides", points: 4,
          enonce: R`<p>Pour chaque question, donner la bonne réponse en justifiant brièvement.</p><ol>
<li>La dérivée de \(f(x)=x^3-3x\) est : a) \(3x^2\) ; b) \(3x^2-3\) ; c) \(x^2-3\).</li>
<li>\(f\) est dérivable sur \([0\,;1]\), \(f'(x)\gt 0\) sur \([0\,;1]\) et \(f(0)=2\). Alors : a) \(f(1)\gt 2\) ; b) \(f(1)\lt 2\) ; c) \(f(1)\gt 0\) mais on ne peut pas comparer à \(2\).</li>
<li>Le nombre d'extremums locaux de \(g(x)=x^4-2x^2\) sur \(\mathbb{R}\) est : a) 1 ; b) 2 ; c) 3.</li>
<li>Méthode de Newton pour \(f(x)=x^2-3\) avec \(x_0=2\) : \(x_1\) vaut a) \(1{,}5\) ; b) \(1{,}75\) ; c) \(1{,}8\).</li></ol>`,
          correction: R`<p><b>1 pt par question.</b></p><ol>
<li><b>b)</b> \(f'(x)=3x^2-3\).</li>
<li><b>a)</b> \(f'\gt 0\) donc \(f\) est strictement croissante sur \([0\,;1]\) : \(f(1)\gt f(0)=2\).</li>
<li><b>c)</b> \(g'(x)=4x^3-4x=4x(x-1)(x+1)\). Tableau de signes : \(-\) sur \(]-\infty\,;-1[\), \(+\) sur \(]-1\,;0[\), \(-\) sur \(]0\,;1[\), \(+\) sur \(]1\,;+\infty[\). \(g'\) change de signe en \(-1\), \(0\) et \(1\) : 3 extremums locaux (minimum \(-1\) en \(\pm1\), maximum local \(0\) en \(0\)).</li>
<li><b>b)</b> \(x_1=2-\dfrac{f(2)}{f'(2)}=2-\dfrac{1}{4}=1{,}75\).</li></ol>` },
        { titre: "Exercice 2 — Une fonction rationnelle", points: 6,
          enonce: R`<p>Soit \(f\) définie sur \(]-1\,;+\infty[\) par \(f(x)=\dfrac{x^2+3}{x+1}\).</p><ol><li>Montrer que \(f'(x)=\dfrac{(x+3)(x-1)}{(x+1)^2}\).</li><li>Dresser le tableau de variations de \(f\) sur \(]-1\,;+\infty[\).</li><li>En déduire que pour tout \(x\gt -1\), \(x^2+3\geqslant 2(x+1)\).</li><li>Déterminer l'équation de la tangente à la courbe de \(f\) au point d'abscisse \(0\).</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> Avec \(u=x^2+3\), \(u'=2x\), \(v=x+1\), \(v'=1\) : \[f'(x)=\frac{2x(x+1)-(x^2+3)}{(x+1)^2}=\frac{x^2+2x-3}{(x+1)^2}.\] Or \((x+3)(x-1)=x^2-x+3x-3=x^2+2x-3\).</li>
<li><b>(2 pts)</b> Sur \(]-1\,;+\infty[\) : \((x+1)^2\gt 0\) et \(x+3\gt 0\), donc \(f'(x)\) a le signe de \(x-1\). \(f(1)=\dfrac{4}{2}=2\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-1\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>||</td><td>↘</td><td>\(2\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1 pt)</b> Le minimum de \(f\) est \(2\), donc \(\dfrac{x^2+3}{x+1}\geqslant 2\) pour tout \(x\gt -1\). Comme \(x+1\gt 0\), on peut multiplier sans changer le sens : \(x^2+3\geqslant 2(x+1)\).</li>
<li><b>(1 pt)</b> \(f(0)=3\) et \(f'(0)=\dfrac{3\times(-1)}{1}=-3\). Tangente : \(y=-3x+3\).</li></ol>` },
        { titre: "Exercice 3 — Algorithme de Newton", points: 5,
          enonce: R`<p>On s'intéresse à l'équation \(x^3-2x-5=0\) (c'est historiquement l'équation sur laquelle Newton a testé sa méthode !). On pose \(f(x)=x^3-2x-5\).</p>
<ol><li>Calculer \(f(2)\) et \(f(3)\). Montrer que \(f\) est strictement croissante sur \([2\,;3]\).</li>
<li>Compléter le programme Python ci-dessous pour qu'il applique la méthode de Newton en partant de \(x_0=2\) et s'arrête quand deux valeurs successives diffèrent de moins de \(10^{-6}\).
<pre><code>x = 2
ecart = 1
while ecart &gt;= 10**-6:
    nouveau = ......
    ecart = abs(nouveau - x)
    x = nouveau
print(x)</code></pre></li>
<li>Calculer \(x_1\) puis une valeur approchée de \(x_2\) à \(10^{-4}\) près.</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f(2)=8-4-5=-1\) et \(f(3)=27-6-5=16\). \(f'(x)=3x^2-2\) ; pour \(x\in[2\,;3]\), \(x^2\geqslant 4\) donc \(f'(x)\geqslant 10\gt 0\) : \(f\) est strictement croissante sur \([2\,;3]\) (la solution cherchée est donc unique dans cet intervalle).</li>
<li><b>(1,5 pt)</b> <pre><code>    nouveau = x - (x**3 - 2*x - 5) / (3*x**2 - 2)</code></pre> Le programme affiche environ \(2{,}094\,551\,48\).</li>
<li><b>(2 pts)</b> \(x_1=2-\dfrac{f(2)}{f'(2)}=2-\dfrac{-1}{10}=2{,}1\).<br>\(f(2{,}1)=9{,}261-4{,}2-5=0{,}061\) et \(f'(2{,}1)=3\times 4{,}41-2=11{,}23\). Donc \(x_2=2{,}1-\dfrac{0{,}061}{11{,}23}\approx 2{,}1-0{,}0054\approx 2{,}0946\).</li></ol>` },
        { titre: "Exercice 4 — Coût moyen et bénéfice", points: 5,
          enonce: R`<p>Une usine produit \(q\) centaines d'objets, \(q\in\,]0\,;6]\). Le coût total, en centaines d'euros, est \(C(q)=q^3-6q^2+13q\).</p><ol><li>Le coût moyen est \(C_M(q)=\dfrac{C(q)}{q}\). Exprimer \(C_M(q)\) et déterminer la production pour laquelle il est minimal.</li><li>Calculer le coût marginal \(C_m(q)=C'(q)\) pour cette production. Que constate-t-on ?</li><li>Les objets sont vendus \(13\) € pièce, soit \(13\) centaines d'euros la centaine. Montrer que le bénéfice est \(B(q)=-q^3+6q^2\), puis déterminer la production qui maximise le bénéfice et ce bénéfice maximal en euros.</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> \(C_M(q)=q^2-6q+13\). \(C_M'(q)=2q-6\), négatif pour \(q\lt 3\), positif pour \(q\gt 3\). \(C_M\) est décroissante sur \(]0\,;3]\) et croissante sur \([3\,;6]\) : le coût moyen est minimal pour \(q=3\) (300 objets) et vaut \(C_M(3)=9-18+13=4\) centaines d'euros par centaine, soit \(4\) € par objet.</li>
<li><b>(1 pt)</b> \(C'(q)=3q^2-12q+13\), donc \(C_m(3)=27-36+13=4\). On constate que \(C_m(3)=C_M(3)\) : le coût moyen minimal est égal au coût marginal.</li>
<li><b>(2 pts)</b> \(B(q)=13q-C(q)=13q-q^3+6q^2-13q=-q^3+6q^2\). \(B'(q)=-3q^2+12q=3q(4-q)\). Sur \(]0\,;6]\), \(3q\gt 0\), donc \(B'(q)\) a le signe de \(4-q\) : \(B\) est croissante sur \(]0\,;4]\), décroissante sur \([4\,;6]\). Le bénéfice est maximal pour \(q=4\) (400 objets) et vaut \(B(4)=-64+96=32\) centaines d'euros, soit \(3\,200\) €.</li></ol>` }
      ] },
    { titre: "DS n°3 — Signe de la dérivée, tangentes et inégalité", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Du signe de f' aux variations", points: 5,
          enonce: R`<p>Une fonction \(f\) est dérivable sur \([-4\,;5]\). On donne le tableau de signes de sa dérivée \(f'\) ainsi que quelques valeurs : \(f(-4)=-2\), \(f(-1)=6\), \(f(3)=-4\) et \(f(5)=1\).</p>
<table class="tv">
<tr><td>\(x\)</td><td>\(-4\)</td><td></td><td>\(-1\)</td><td></td><td>\(3\)</td><td></td><td>\(5\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
</table>
<ol><li>Dresser le tableau de variations de \(f\) sur \([-4\,;5]\).</li>
<li>Déterminer les extremums locaux de \(f\), puis le maximum et le minimum de \(f\) sur \([-4\,;5]\).</li>
<li>Comparer \(f(0)\) et \(f(2)\) en justifiant.</li>
<li>Donner l'équation de la tangente à la courbe de \(f\) au point d'abscisse \(-1\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'\gt 0\) sur \(]-4\,;-1[\), \(f'\lt 0\) sur \(]-1\,;3[\) et \(f'\gt 0\) sur \(]3\,;5[\) : \(f\) est croissante, puis décroissante, puis croissante.
<table class="tv">
<tr><td>\(x\)</td><td>\(-4\)</td><td></td><td>\(-1\)</td><td></td><td>\(3\)</td><td></td><td>\(5\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>\(-2\)</td><td>↗</td><td>\(6\)</td><td>↘</td><td>\(-4\)</td><td>↗</td><td>\(1\)</td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(f'\) s'annule en \(-1\) en passant de \(+\) à \(-\) : \(f(-1)=6\) est un maximum local. \(f'\) s'annule en \(3\) en passant de \(-\) à \(+\) : \(f(3)=-4\) est un minimum local.<br>
Sur \([-4\,;5]\), on compare avec les valeurs aux bornes : \(f(-4)=-2\) et \(f(5)=1\). Le maximum de \(f\) est \(6\) (atteint en \(x=-1\)) et le minimum est \(-4\) (atteint en \(x=3\)).</li>
<li><b>(1 pt)</b> \(0\) et \(2\) appartiennent à \([-1\,;3]\), intervalle sur lequel \(f\) est strictement décroissante. Comme \(0\lt 2\), on a \(f(0)\gt f(2)\).</li>
<li><b>(1 pt)</b> \(f'(-1)=0\) et \(f(-1)=6\). La tangente a pour équation \(y=0\times(x+1)+6\), soit \(y=6\) : c'est une tangente horizontale.</li></ol>` },
        { titre: "Exercice 2 — Étude d'un polynôme de degré 3", points: 8,
          enonce: R`<p>Soit \(f\) définie sur \([-4\,;2]\) par \(f(x)=x^3+3x^2-9x-2\), de courbe \(\mathcal{C}\).</p>
<ol><li>Calculer \(f'(x)\) et montrer que \(f'(x)=3(x+3)(x-1)\).</li>
<li>Étudier le signe de \(f'(x)\) et dresser le tableau de variations complet de \(f\) sur \([-4\,;2]\).</li>
<li>Donner le maximum et le minimum de \(f\) sur \([-4\,;2]\).</li>
<li>Déterminer l'équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(0\).</li>
<li>Déterminer les points de \(\mathcal{C}\) où la tangente est parallèle à la droite d'équation \(y=15x+1\).</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(f'(x)=3x^2+6x-9\). Or \(3(x+3)(x-1)=3(x^2-x+3x-3)=3(x^2+2x-3)=3x^2+6x-9\) : c'est bien égal.</li>
<li><b>(2,5 pts : signe 1 pt, valeurs 1 pt, flèches 0,5 pt)</b> \(f'(x)\) est un trinôme de racines \(-3\) et \(1\), de coefficient \(3\gt 0\) : il est positif à l'extérieur des racines et négatif entre elles.<br>
\(f(-4)=-64+48+36-2=18\) ; \(f(-3)=-27+27+27-2=25\) ; \(f(1)=1+3-9-2=-7\) ; \(f(2)=8+12-18-2=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-4\)</td><td></td><td>\(-3\)</td><td></td><td>\(1\)</td><td></td><td>\(2\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>\(18\)</td><td>↗</td><td>\(25\)</td><td>↘</td><td>\(-7\)</td><td>↗</td><td>\(0\)</td></tr>
</table></li>
<li><b>(1 pt)</b> D'après le tableau, le maximum de \(f\) sur \([-4\,;2]\) est \(25\), atteint en \(x=-3\), et le minimum est \(-7\), atteint en \(x=1\).</li>
<li><b>(1,5 pt)</b> \(f(0)=-2\) et \(f'(0)=-9\). \(T : y=f'(0)(x-0)+f(0)\), soit \(y=-9x-2\).</li>
<li><b>(2 pts)</b> Deux droites sont parallèles si elles ont le même coefficient directeur. On cherche donc \(x\in[-4\,;2]\) tel que \(f'(x)=15\) :
\[3x^2+6x-9=15\iff 3x^2+6x-24=0\iff x^2+2x-8=0.\]
\(\Delta=4+32=36\), d'où \(x=\dfrac{-2-6}{2}=-4\) ou \(x=\dfrac{-2+6}{2}=2\). Les deux valeurs sont dans \([-4\,;2]\). Les points cherchés sont \((-4\,;18)\) et \((2\,;0)\).</li></ol>` },
        { titre: "Exercice 3 — Une inégalité et deux courbes", points: 7,
          enonce: R`<p>On considère la fonction \(h\) définie sur \([0\,;+\infty[\) par \(h(x)=2x^3-3x^2+1\).</p>
<ol><li>Calculer \(h'(x)\) et étudier son signe sur \([0\,;+\infty[\).</li>
<li>Dresser le tableau de variations de \(h\) sur \([0\,;+\infty[\) et donner son minimum.</li>
<li>En déduire que pour tout réel \(x\geqslant 0\), \(2x^3+1\geqslant 3x^2\).</li>
<li>On note \(\mathcal{C}_f\) la courbe de \(f : x\mapsto 2x^3+1\) et \(\mathcal{C}_g\) celle de \(g : x\mapsto 3x^2\). Donner la position relative de \(\mathcal{C}_f\) et \(\mathcal{C}_g\) sur \([0\,;+\infty[\) et préciser leur(s) point(s) commun(s).</li>
<li>Vérifier que \(h(x)=(x-1)^2(2x+1)\) et retrouver ainsi le résultat de la question 3.</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> \(h'(x)=6x^2-6x=6x(x-1)\). Sur \([0\,;+\infty[\), \(6x\geqslant 0\) (nul seulement en \(0\)), donc \(h'(x)\) a le signe de \(x-1\) : \(h'(x)\lt 0\) sur \(]0\,;1[\) et \(h'(x)\gt 0\) sur \(]1\,;+\infty[\).</li>
<li><b>(2 pts)</b> \(h(0)=1\) et \(h(1)=2-3+1=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(h'(x)\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(h\)</td><td>\(1\)</td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr>
</table>
Le minimum de \(h\) sur \([0\,;+\infty[\) est \(0\), atteint en \(x=1\).</li>
<li><b>(1 pt)</b> Pour tout \(x\geqslant 0\), \(h(x)\geqslant 0\), c'est-à-dire \(2x^3-3x^2+1\geqslant 0\), soit \(2x^3+1\geqslant 3x^2\).</li>
<li><b>(1 pt)</b> \(f(x)-g(x)=h(x)\geqslant 0\) : \(\mathcal{C}_f\) est au-dessus de \(\mathcal{C}_g\) sur \([0\,;+\infty[\). Elles ont un seul point commun, d'abscisse \(1\) (le seul \(x\) où \(h(x)=0\)) : le point \((1\,;3)\).</li>
<li><b>(1 pt)</b> \((x-1)^2(2x+1)=(x^2-2x+1)(2x+1)=2x^3+x^2-4x^2-2x+2x+1=2x^3-3x^2+1=h(x)\). Pour \(x\geqslant 0\), \((x-1)^2\geqslant 0\) et \(2x+1\gt 0\), donc \(h(x)\geqslant 0\) : on retrouve bien \(2x^3+1\geqslant 3x^2\).</li></ol>` }
      ] },
    { titre: "DS n°4 — Quotient, boîte et racine cubique", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Encadrer une fonction rationnelle", points: 6,
          enonce: R`<p>Soit \(f\) définie sur \(\mathbb{R}\) par \(f(x)=\dfrac{2x-1}{x^2+2}\).</p>
<ol><li>Justifier que \(f\) est définie et dérivable sur \(\mathbb{R}\), puis montrer que \(f'(x)=\dfrac{-2(x-2)(x+1)}{(x^2+2)^2}\).</li>
<li>Dresser le tableau de variations de \(f\) sur \(\mathbb{R}\) (on ne demande pas les limites).</li>
<li>Montrer que pour tout réel \(x\) : \(f(x)-\dfrac12=-\dfrac{(x-2)^2}{2(x^2+2)}\) et \(f(x)+1=\dfrac{(x+1)^2}{x^2+2}\).</li>
<li>En déduire que pour tout réel \(x\), \(-1\leqslant f(x)\leqslant \dfrac12\). Quels sont le maximum et le minimum de \(f\) sur \(\mathbb{R}\) ?</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> Pour tout réel \(x\), \(x^2+2\geqslant 2\gt 0\) : le dénominateur ne s'annule jamais, \(f\) est un quotient de polynômes définie et dérivable sur \(\mathbb{R}\).<br>
Avec \(u=2x-1\), \(u'=2\), \(v=x^2+2\), \(v'=2x\) :
\[f'(x)=\frac{2(x^2+2)-(2x-1)\times 2x}{(x^2+2)^2}=\frac{2x^2+4-4x^2+2x}{(x^2+2)^2}=\frac{-2x^2+2x+4}{(x^2+2)^2}.\]
Or \(-2(x-2)(x+1)=-2(x^2-x-2)=-2x^2+2x+4\) : c'est bien égal.</li>
<li><b>(1,5 pt)</b> \((x^2+2)^2\gt 0\), donc \(f'(x)\) a le signe de \(-2(x-2)(x+1)\), trinôme de coefficient \(-2\lt 0\) et de racines \(-1\) et \(2\) : négatif à l'extérieur des racines, positif entre. \(f(-1)=\dfrac{-3}{3}=-1\) et \(f(2)=\dfrac{3}{6}=\dfrac12\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↘</td><td>\(-1\)</td><td>↗</td><td>\(\frac12\)</td><td>↘</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(f(x)-\dfrac12=\dfrac{2(2x-1)-(x^2+2)}{2(x^2+2)}=\dfrac{-x^2+4x-4}{2(x^2+2)}=-\dfrac{(x-2)^2}{2(x^2+2)}\).<br>
\(f(x)+1=\dfrac{2x-1+x^2+2}{x^2+2}=\dfrac{x^2+2x+1}{x^2+2}=\dfrac{(x+1)^2}{x^2+2}\).</li>
<li><b>(1 pt)</b> Un carré est positif et \(x^2+2\gt 0\) : donc \(f(x)-\dfrac12\leqslant 0\) et \(f(x)+1\geqslant 0\) pour tout réel \(x\), soit \(-1\leqslant f(x)\leqslant \dfrac12\). Comme \(f(-1)=-1\) et \(f(2)=\dfrac12\), le minimum de \(f\) sur \(\mathbb{R}\) est \(-1\) (en \(x=-1\)) et le maximum est \(\dfrac12\) (en \(x=2\)). Le tableau seul ne suffisait pas à l'affirmer sans connaître le comportement en \(\pm\infty\).</li></ol>` },
        { titre: "Exercice 2 — La boîte à base carrée", points: 8,
          enonce: R`<p>Une entreprise fabrique des boîtes sans couvercle en forme de pavé droit, à base carrée, de volume \(500\) cm³. On note \(x\) le côté de la base et \(h\) la hauteur, en cm (\(x\gt 0\)). On veut utiliser le moins de carton possible.</p>
<ol><li>Exprimer \(h\) en fonction de \(x\).</li>
<li>Montrer que la surface de carton utilisée (fond + 4 faces latérales) est \(S(x)=x^2+\dfrac{2000}{x}\), en cm².</li>
<li>Montrer que \(S'(x)=\dfrac{2(x^3-1000)}{x^2}\).</li>
<li>Étudier le signe de \(S'(x)\) et dresser le tableau de variations de \(S\) sur \(]0\,;+\infty[\).</li>
<li>Donner les dimensions de la boîte qui utilise le moins de carton, et la surface correspondante.</li>
<li>Pour des raisons de rangement, on impose \(x\leqslant 8\). Quelle est alors la surface minimale de carton ?</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> Le volume vaut \(x^2h=500\), donc \(h=\dfrac{500}{x^2}\).</li>
<li><b>(1,5 pt)</b> Le fond a une aire \(x^2\), chacune des 4 faces latérales une aire \(xh\). Donc \(S=x^2+4xh=x^2+4x\times\dfrac{500}{x^2}=x^2+\dfrac{2000}{x}\).</li>
<li><b>(1,5 pt)</b> \(S'(x)=2x-\dfrac{2000}{x^2}=\dfrac{2x^3-2000}{x^2}=\dfrac{2(x^3-1000)}{x^2}\).</li>
<li><b>(2 pts)</b> \(x^2\gt 0\), donc \(S'(x)\) a le signe de \(x^3-1000\). La fonction cube est strictement croissante et \(10^3=1000\) : \(x^3-1000\lt 0\) si \(x\lt 10\) et \(x^3-1000\gt 0\) si \(x\gt 10\). \(S(10)=100+200=300\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(10\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(S'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(S\)</td><td>||</td><td>↘</td><td>\(300\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1 pt)</b> \(S\) est minimale pour \(x=10\). La boîte a alors une base de \(10\) cm sur \(10\) cm et une hauteur \(h=\dfrac{500}{100}=5\) cm ; elle utilise \(300\) cm² de carton.</li>
<li><b>(1 pt)</b> \(S\) est strictement décroissante sur \(]0\,;8]\subset\,]0\,;10]\) : son minimum sur cet intervalle est atteint en \(x=8\) et vaut \(S(8)=64+\dfrac{2000}{8}=64+250=314\) cm².</li></ol>` },
        { titre: "Exercice 3 — Approcher la racine cubique de 20", points: 6,
          enonce: R`<p>On note \(\alpha\) le réel positif tel que \(\alpha^3=20\). On pose \(f(x)=x^3-20\) sur \(]0\,;+\infty[\).</p>
<ol><li>Étudier les variations de \(f\) sur \(]0\,;+\infty[\). Calculer \(f(2)\) et \(f(3)\) et en déduire que \(2\lt\alpha\lt 3\).</li>
<li>Montrer que la méthode de Newton appliquée à \(f\) s'écrit \(x_{n+1}=\dfrac{2x_n^3+20}{3x_n^2}\).</li>
<li>On part de \(x_0=3\). Calculer \(x_1\) (valeur exacte puis approchée à \(10^{-4}\)), puis une valeur approchée de \(x_2\) à \(10^{-4}\) près.</li>
<li>Compléter la fonction Python suivante pour qu'elle renvoie \(x_n\).
<pre><code>def newton(n):
    x = 3
    for i in range(n):
        x = ......
    return x</code></pre></li>
<li>Pourquoi ne peut-on pas partir de \(x_0=0\) ?</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(f'(x)=3x^2\gt 0\) sur \(]0\,;+\infty[\) : \(f\) est strictement croissante. \(f(2)=8-20=-12\lt 0\) et \(f(3)=27-20=7\gt 0\). Comme \(f(\alpha)=0\) et que \(f\) est strictement croissante, on a \(f(2)\lt f(\alpha)\lt f(3)\) donc \(2\lt\alpha\lt 3\).</li>
<li><b>(1,5 pt)</b> \(x_{n+1}=x_n-\dfrac{f(x_n)}{f'(x_n)}=x_n-\dfrac{x_n^3-20}{3x_n^2}=\dfrac{3x_n^3-x_n^3+20}{3x_n^2}=\dfrac{2x_n^3+20}{3x_n^2}\).</li>
<li><b>(1,5 pt)</b> \(x_1=\dfrac{2\times 27+20}{3\times 9}=\dfrac{74}{27}\approx 2{,}7407\). Puis, à la calculatrice, \(x_2=\dfrac{2x_1^3+20}{3x_1^2}\approx 2{,}7147\). (Pour comparaison \(\alpha\approx 2{,}714\,42\) : la convergence est très rapide.)</li>
<li><b>(1,5 pt)</b> <pre><code>        x = (2*x**3 + 20) / (3*x**2)</code></pre> (on peut aussi écrire <code>x = x - (x**3 - 20) / (3*x**2)</code>).</li>
<li><b>(0,5 pt)</b> \(f'(0)=0\) : la tangente en \(0\) est horizontale et ne coupe pas l'axe des abscisses ; la formule demanderait une division par zéro.</li></ol>` }
      ] },
    { titre: "DS n°5 — Vrai/faux, tangente et rectangle sous une parabole", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 4,
          enonce: R`<p>Pour chaque affirmation, dire si elle est vraie ou fausse en justifiant.</p><ol>
<li>Si \(f\) est dérivable sur \(\mathbb{R}\) avec \(f'(x)=(x-2)^2\), alors \(f\) admet un minimum en \(2\).</li>
<li>La fonction \(g(x)=x^3-3x^2+3x\) n'admet aucun extremum local sur \(\mathbb{R}\).</li>
<li>Pour tout réel \(x\geqslant 0\), \(\sqrt{x}-x\leqslant \dfrac14\).</li>
<li>Si \(f\) est dérivable et strictement décroissante sur \([1\,;3]\), alors \(f'(2)\lt 0\).</li></ol>`,
          correction: R`<p><b>1 pt par affirmation (réponse 0,25 pt, justification 0,75 pt).</b></p><ol>
<li><b>Faux.</b> \(f'(x)=(x-2)^2\geqslant 0\) et ne s'annule qu'en \(2\) : \(f\) est strictement croissante sur \(\mathbb{R}\). \(f'(2)=0\) mais \(f'\) ne change pas de signe : pas d'extremum en \(2\).</li>
<li><b>Vrai.</b> \(g'(x)=3x^2-6x+3=3(x-1)^2\geqslant 0\), nul seulement en \(1\) : \(g\) est strictement croissante sur \(\mathbb{R}\), donc n'a aucun extremum local.</li>
<li><b>Vrai.</b> Soit \(k(x)=\sqrt{x}-x\). Sur \(]0\,;+\infty[\), \(k'(x)=\dfrac{1}{2\sqrt x}-1=\dfrac{1-2\sqrt x}{2\sqrt x}\), du signe de \(1-2\sqrt x\) : positif si \(\sqrt x\lt\frac12\), c'est-à-dire \(x\lt\frac14\), négatif si \(x\gt\frac14\). \(k\) est croissante sur \([0\,;\frac14]\) puis décroissante : son maximum est \(k\left(\frac14\right)=\frac12-\frac14=\frac14\). Donc \(\sqrt x-x\leqslant\frac14\).</li>
<li><b>Faux.</b> Contre-exemple : \(f(x)=-(x-2)^3\) est strictement décroissante sur \([1\,;3]\) (car \(f'(x)=-3(x-2)^2\leqslant 0\), nul seulement en \(2\)), mais \(f'(2)=0\). On sait seulement que \(f'(2)\leqslant 0\).</li></ol>` },
        { titre: "Exercice 2 — Courbe et tangente horizontale", points: 8,
          enonce: R`<p>Soit \(f\) définie sur \(\mathbb{R}\) par \(f(x)=x^3-x^2-x+2\), de courbe \(\mathcal{C}\).</p>
<ol><li>Calculer \(f'(x)\) et vérifier que \(f'(x)=(3x+1)(x-1)\).</li>
<li>Dresser le tableau de variations de \(f\) sur \(\mathbb{R}\) (valeurs exactes, sans les limites).</li>
<li>Déterminer l'équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(1\).</li>
<li>Montrer que pour tout réel \(x\), \(f(x)-1=(x-1)^2(x+1)\).</li>
<li>En déduire la position relative de \(\mathcal{C}\) et de \(T\) sur \(\mathbb{R}\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'(x)=3x^2-2x-1\). Et \((3x+1)(x-1)=3x^2-3x+x-1=3x^2-2x-1\).</li>
<li><b>(2 pts)</b> \(f'\) est un trinôme de coefficient \(3\gt 0\) et de racines \(-\frac13\) et \(1\) : positif à l'extérieur, négatif entre.<br>
\(f\left(-\frac13\right)=-\frac1{27}-\frac19+\frac13+2=\dfrac{-1-3+9+54}{27}=\dfrac{59}{27}\) et \(f(1)=1-1-1+2=1\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-\frac13\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↗</td><td>\(\frac{59}{27}\)</td><td>↘</td><td>\(1\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1 pt)</b> \(f(1)=1\) et \(f'(1)=0\) : \(T : y=0\times(x-1)+1\), soit \(y=1\).</li>
<li><b>(1,5 pt)</b> \((x-1)^2(x+1)=(x^2-2x+1)(x+1)=x^3+x^2-2x^2-2x+x+1=x^3-x^2-x+1\), et \(f(x)-1=x^3-x^2-x+1\) : c'est égal.</li>
<li><b>(2 pts)</b> On étudie le signe de \(f(x)-1\). \((x-1)^2\geqslant 0\), nul seulement en \(1\), donc \(f(x)-1\) a le signe de \(x+1\) (pour \(x\neq 1\)) :
<ul><li>si \(x\lt -1\) : \(f(x)-1\lt 0\), \(\mathcal{C}\) est en dessous de \(T\) ;</li>
<li>si \(x\gt -1\) et \(x\neq 1\) : \(f(x)-1\gt 0\), \(\mathcal{C}\) est au-dessus de \(T\) ;</li>
<li>\(\mathcal{C}\) et \(T\) ont deux points communs : \((-1\,;1)\) (où la courbe traverse la droite) et \((1\,;1)\) (point de contact de la tangente).</li></ul></li></ol>` },
        { titre: "Exercice 3 — Le rectangle sous l'arche", points: 8,
          enonce: R`<p>Dans un repère orthonormé (unité : le mètre), une arche a la forme de la parabole \(\mathcal{P}\) d'équation \(y=12-x^2\), au-dessus de l'axe des abscisses. On veut y placer une porte rectangulaire \(ABCD\) avec \(A(-x\,;0)\), \(B(x\,;0)\), \(C\) et \(D\) sur \(\mathcal{P}\), où \(x\gt 0\).</p>
<ol><li>Quelles sont les valeurs possibles de \(x\) ? Montrer que l'aire de la porte est \(A(x)=24x-2x^3\).</li>
<li>Étudier les variations de \(A\) et en déduire les dimensions de la porte d'aire maximale, ainsi que cette aire.</li>
<li>On s'intéresse maintenant au périmètre \(P(x)\) de la porte. Montrer que \(P(x)=-2x^2+4x+24\).</li>
<li>À l'aide de la dérivée, déterminer la valeur de \(x\) pour laquelle le périmètre est maximal, et ce périmètre. La porte d'aire maximale a-t-elle le plus grand périmètre ?</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> \(C\) a pour coordonnées \((x\,;12-x^2)\). Il faut \(x\gt 0\) et une hauteur \(12-x^2\gt 0\), soit \(x^2\lt 12\), donc \(x\in\,]0\,;2\sqrt3[\). La largeur est \(AB=2x\), la hauteur \(12-x^2\), d'où \(A(x)=2x(12-x^2)=24x-2x^3\).</li>
<li><b>(3 pts)</b> \(A'(x)=24-6x^2=6(4-x^2)=6(2-x)(2+x)\). Sur \(]0\,;2\sqrt3[\), \(6(2+x)\gt 0\), donc \(A'(x)\) a le signe de \(2-x\) : positif sur \(]0\,;2[\), négatif sur \(]2\,;2\sqrt3[\) (et \(2\lt 2\sqrt3\approx 3{,}46\)).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(2\sqrt3\)</td></tr>
<tr><td>signe de \(A'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(A\)</td><td></td><td>↗</td><td>\(32\)</td><td>↘</td><td></td></tr>
</table>
L'aire est maximale pour \(x=2\) : \(A(2)=48-16=32\) m². La porte mesure alors \(4\) m de large et \(12-4=8\) m de haut.</li>
<li><b>(1 pt)</b> \(P(x)=2\times AB+2\times BC=2\times 2x+2(12-x^2)=-2x^2+4x+24\).</li>
<li><b>(2 pts)</b> \(P'(x)=-4x+4\), positif pour \(x\lt 1\), négatif pour \(x\gt 1\) (et \(1\in\,]0\,;2\sqrt3[\)). \(P\) est croissante sur \(]0\,;1]\), décroissante sur \([1\,;2\sqrt3[\) : le périmètre est maximal pour \(x=1\) et vaut \(P(1)=-2+4+24=26\) m (porte de \(2\) m sur \(11\) m). La porte d'aire maximale (\(x=2\)) n'a donc pas le plus grand périmètre : \(P(2)=24\lt 26\).</li></ol>` }
      ] },
    { titre: "DS n°6 — Bénéfice, coût moyen et racine carrée", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Maximiser le bénéfice", points: 6,
          enonce: R`<p>Une coopérative produit chaque jour \(q\) tonnes d'aliment pour bétail, avec \(q\in[0\,;10]\). Le coût de production, en milliers d'euros, est \(C(q)=q^3-12q^2+60q+50\). Toute la production est vendue \(36\) milliers d'euros la tonne.</p>
<ol><li>Calculer \(C'(q)\) et montrer que le coût est strictement croissant sur \([0\,;10]\).</li>
<li>Montrer que le bénéfice est \(B(q)=-q^3+12q^2-24q-50\).</li>
<li>Calculer \(B'(q)\) et déterminer les valeurs de \(q\) où \(B'\) s'annule (valeurs exactes).</li>
<li>Dresser le tableau de variations de \(B\) sur \([0\,;10]\) (valeurs approchées au centième). En déduire la production qui maximise le bénéfice, et ce bénéfice à l'euro près.</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(C'(q)=3q^2-24q+60=3(q^2-8q+20)\). Le trinôme \(q^2-8q+20\) a pour discriminant \(\Delta=64-80=-16\lt 0\) : il garde le signe de son coefficient \(1\gt 0\). Donc \(C'(q)\gt 0\) et \(C\) est strictement croissante sur \([0\,;10]\).</li>
<li><b>(1 pt)</b> Recette : \(36q\). \(B(q)=36q-C(q)=36q-q^3+12q^2-60q-50=-q^3+12q^2-24q-50\).</li>
<li><b>(1,5 pt)</b> \(B'(q)=-3q^2+24q-24=-3(q^2-8q+8)\). Pour \(q^2-8q+8\) : \(\Delta=64-32=32\), \(\sqrt{32}=4\sqrt2\), d'où \(q_1=\dfrac{8-4\sqrt2}{2}=4-2\sqrt2\approx 1{,}17\) et \(q_2=4+2\sqrt2\approx 6{,}83\), tous deux dans \([0\,;10]\).</li>
<li><b>(2 pts)</b> \(B'(q)=-3(q-q_1)(q-q_2)\) est négatif à l'extérieur des racines et positif entre. Valeurs : \(B(0)=-50\), \(B(q_1)\approx -63{,}25\), \(B(q_2)\approx 27{,}25\), \(B(10)=-1000+1200-240-50=-90\).
<table class="tv">
<tr><td>\(q\)</td><td>\(0\)</td><td></td><td>\(4-2\sqrt2\)</td><td></td><td>\(4+2\sqrt2\)</td><td></td><td>\(10\)</td></tr>
<tr><td>signe de \(B'(q)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(B\)</td><td>\(-50\)</td><td>↘</td><td>\(\approx -63{,}25\)</td><td>↗</td><td>\(\approx 27{,}25\)</td><td>↘</td><td>\(-90\)</td></tr>
</table>
Le bénéfice est maximal pour \(q=4+2\sqrt2\approx 6{,}83\) tonnes. Il vaut \(B(4+2\sqrt2)=32\sqrt2-18\approx 27{,}255\) milliers d'euros, soit environ \(27\,255\) €.</li></ol>` },
        { titre: "Exercice 2 — Coût moyen et méthode de Newton", points: 7,
          enonce: R`<p>On reprend le coût \(C(q)=q^3-12q^2+60q+50\) de l'exercice 1. Le coût moyen par tonne est \(C_M(q)=\dfrac{C(q)}{q}\) pour \(q\in\,]0\,;10]\).</p>
<ol><li>Montrer que \(C_M(q)=q^2-12q+60+\dfrac{50}{q}\) puis que \(C_M'(q)=\dfrac{2g(q)}{q^2}\) avec \(g(q)=q^3-6q^2-25\).</li>
<li>Étudier les variations de \(g\) sur \([0\,;10]\). Justifier que \(g(q)\lt 0\) sur \([0\,;4]\). On admet que \(g\) s'annule une seule fois sur \([0\,;10]\), en un réel \(\alpha\in\,]4\,;10[\).</li>
<li>Pour approcher \(\alpha\), on applique la méthode de Newton à \(g\) en partant de \(q_0=7\). Calculer \(q_1\) (valeur exacte et approchée), puis une valeur approchée de \(q_2\) à \(10^{-4}\) près.</li>
<li>Voici un programme Python. Qu'affiche-t-il ? Que représente la variable <code>n</code> ?
<pre><code>q = 7
n = 0
ecart = 1
while ecart &gt; 10**-4:
    nouveau = q - (q**3 - 6*q**2 - 25) / (3*q**2 - 12*q)
    ecart = abs(nouveau - q)
    q = nouveau
    n = n + 1
print(n, q)</code></pre></li>
<li>En déduire les variations de \(C_M\) et la production pour laquelle le coût moyen est minimal (on donnera ce coût moyen à l'euro près).</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> \(C_M(q)=\dfrac{q^3-12q^2+60q+50}{q}=q^2-12q+60+\dfrac{50}{q}\). Donc
\[C_M'(q)=2q-12-\frac{50}{q^2}=\frac{2q^3-12q^2-50}{q^2}=\frac{2(q^3-6q^2-25)}{q^2}=\frac{2g(q)}{q^2}.\]</li>
<li><b>(1,5 pt)</b> \(g'(q)=3q^2-12q=3q(q-4)\) : négatif sur \(]0\,;4[\), positif sur \(]4\,;10[\). \(g\) est décroissante sur \([0\,;4]\) et croissante sur \([4\,;10]\), avec \(g(0)=-25\), \(g(4)=64-96-25=-57\), \(g(10)=1000-600-25=375\). Sur \([0\,;4]\), \(g\) décroît de \(-25\) à \(-57\) : \(g(q)\leqslant -25\lt 0\).</li>
<li><b>(1,5 pt)</b> \(q_1=q_0-\dfrac{g(q_0)}{g'(q_0)}\) avec \(g(7)=343-294-25=24\) et \(g'(7)=147-84=63\) : \(q_1=7-\dfrac{24}{63}=7-\dfrac{8}{21}=\dfrac{139}{21}\approx 6{,}6190\). À la calculatrice, \(q_2=q_1-\dfrac{g(q_1)}{g'(q_1)}\approx 6{,}5783\).</li>
<li><b>(1 pt)</b> Le programme applique la méthode de Newton jusqu'à ce que deux termes successifs diffèrent de moins de \(10^{-4}\) ; <code>n</code> compte le nombre d'itérations effectuées. Les écarts successifs valent environ \(0{,}38\) ; \(0{,}041\) ; \(0{,}000\,45\) ; \(0{,}000\,000\,06\) : le programme affiche <code>4 6.5778012925...</code>, donc \(\alpha\approx 6{,}5778\).</li>
<li><b>(1 pt)</b> \(q^2\gt 0\), donc \(C_M'(q)\) a le signe de \(g(q)\) : négatif sur \(]0\,;\alpha[\), positif sur \(]\alpha\,;10]\). \(C_M\) est décroissante sur \(]0\,;\alpha]\) et croissante sur \([\alpha\,;10]\). Le coût moyen est minimal pour une production d'environ \(6{,}58\) tonnes ; il vaut \(C_M(\alpha)\approx 31{,}94\) milliers d'euros par tonne, soit environ \(31\,935\) € la tonne.</li></ol>` },
        { titre: "Exercice 3 — Racine carrée et tangente", points: 7,
          enonce: R`<p>On note \(\mathcal{C}\) la courbe de la fonction racine carrée \(f(x)=\sqrt x\) sur \([0\,;+\infty[\).</p>
<ol><li>Déterminer l'équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(1\).</li>
<li>On pose \(h(x)=\dfrac{x+1}{2}-\sqrt x\) sur \([0\,;+\infty[\). Montrer que pour \(x\gt 0\), \(h'(x)=\dfrac{\sqrt x-1}{2\sqrt x}\).</li>
<li>Étudier le signe de \(h'(x)\), dresser le tableau de variations de \(h\) et donner son minimum.</li>
<li>En déduire que pour tout \(x\geqslant 0\), \(\sqrt x\leqslant\dfrac{x+1}{2}\), et interpréter graphiquement.</li>
<li>Application : sans calculer \(\sqrt{1{,}02}\), montrer que \(\sqrt{1{,}02}\leqslant 1{,}01\). Comparer avec la valeur donnée par la calculatrice.</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'(x)=\dfrac{1}{2\sqrt x}\) sur \(]0\,;+\infty[\), \(f(1)=1\), \(f'(1)=\dfrac12\). \(T : y=\dfrac12(x-1)+1\), soit \(y=\dfrac{x+1}{2}\).</li>
<li><b>(1,5 pt)</b> \(h'(x)=\dfrac12-\dfrac{1}{2\sqrt x}=\dfrac{\sqrt x}{2\sqrt x}-\dfrac{1}{2\sqrt x}=\dfrac{\sqrt x-1}{2\sqrt x}\).</li>
<li><b>(2 pts)</b> \(2\sqrt x\gt 0\) pour \(x\gt 0\), donc \(h'(x)\) a le signe de \(\sqrt x-1\) : négatif si \(0\lt x\lt 1\), positif si \(x\gt 1\) (la racine carrée est strictement croissante et \(\sqrt1=1\)). \(h(0)=\frac12\), \(h(1)=1-1=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(h'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(h\)</td><td>\(\frac12\)</td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr>
</table>
(la double barre signale que \(h\) n'est pas dérivable en \(0\), mais \(h(0)\) existe.) Le minimum de \(h\) est \(0\), atteint en \(x=1\).</li>
<li><b>(1 pt)</b> Donc \(h(x)\geqslant 0\) pour tout \(x\geqslant 0\), soit \(\sqrt x\leqslant\dfrac{x+1}{2}\). Graphiquement : la courbe de la racine carrée est en dessous de sa tangente \(T\) en \(1\), avec un seul point de contact \((1\,;1)\).</li>
<li><b>(1 pt)</b> Avec \(x=1{,}02\) : \(\sqrt{1{,}02}\leqslant\dfrac{2{,}02}{2}=1{,}01\). La calculatrice donne \(\sqrt{1{,}02}\approx 1{,}009\,95\) : l'approximation par la tangente est excellente près de \(1\).</li></ol>` }
      ] },
    { titre: "DS n°7 — Fonctions rationnelles, paramètres et clôture", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Une fonction et sa droite oblique", points: 8,
          enonce: R`<p>Soit \(f\) définie sur \(]1\,;+\infty[\) par \(f(x)=\dfrac{x^2-3x+6}{x-1}\), de courbe \(\mathcal{C}\), et \(\mathcal{D}\) la droite d'équation \(y=x-2\).</p>
<ol><li>Montrer que pour tout \(x\gt 1\), \(f(x)=x-2+\dfrac{4}{x-1}\).</li>
<li>Montrer que \(f'(x)=\dfrac{(x-3)(x+1)}{(x-1)^2}\).</li>
<li>Dresser le tableau de variations de \(f\) sur \(]1\,;+\infty[\) et donner son minimum.</li>
<li>En déduire que pour tout \(x\gt 1\), \(x^2-3x+6\geqslant 3(x-1)\). Retrouver ce résultat par un calcul direct.</li>
<li>Étudier la position relative de \(\mathcal{C}\) et de \(\mathcal{D}\).</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(x-2+\dfrac{4}{x-1}=\dfrac{(x-2)(x-1)+4}{x-1}=\dfrac{x^2-3x+2+4}{x-1}=\dfrac{x^2-3x+6}{x-1}=f(x)\).</li>
<li><b>(2 pts)</b> Avec la forme de la question 1 et \(\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\) : \(f'(x)=1-\dfrac{4}{(x-1)^2}=\dfrac{(x-1)^2-4}{(x-1)^2}\). On factorise \(a^2-b^2\) : \((x-1)^2-4=(x-1-2)(x-1+2)=(x-3)(x+1)\). Donc \(f'(x)=\dfrac{(x-3)(x+1)}{(x-1)^2}\).<br>
(On peut aussi utiliser \(\left(\frac uv\right)'\) : \(\dfrac{(2x-3)(x-1)-(x^2-3x+6)}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}\), même résultat.)</li>
<li><b>(2 pts)</b> Sur \(]1\,;+\infty[\) : \((x-1)^2\gt 0\) et \(x+1\gt 0\), donc \(f'(x)\) a le signe de \(x-3\). \(f(3)=\dfrac{9-9+6}{2}=3\).
<table class="tv">
<tr><td>\(x\)</td><td>\(1\)</td><td></td><td>\(3\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>||</td><td>↘</td><td>\(3\)</td><td>↗</td><td></td></tr>
</table>
Le minimum de \(f\) sur \(]1\,;+\infty[\) est \(3\), atteint en \(x=3\).</li>
<li><b>(1,5 pt)</b> Pour tout \(x\gt 1\), \(\dfrac{x^2-3x+6}{x-1}\geqslant 3\) ; comme \(x-1\gt 0\), on multiplie sans changer le sens : \(x^2-3x+6\geqslant 3(x-1)\).<br>
Calcul direct : \(x^2-3x+6-3(x-1)=x^2-6x+9=(x-3)^2\geqslant 0\). On retrouve le résultat.</li>
<li><b>(1,5 pt)</b> \(f(x)-(x-2)=\dfrac{4}{x-1}\gt 0\) pour tout \(x\gt 1\) : \(\mathcal{C}\) est strictement au-dessus de \(\mathcal{D}\) sur \(]1\,;+\infty[\) (elles n'ont aucun point commun).</li></ol>` },
        { titre: "Exercice 2 — Retrouver une fonction", points: 5,
          enonce: R`<p>Soit \(g\) définie sur \(\mathbb{R}\) par \(g(x)=\dfrac{ax+b}{x^2+1}\), où \(a\) et \(b\) sont des réels. Sa courbe admet une tangente horizontale au point d'abscisse \(1\), et \(g(1)=2\).</p>
<ol><li>Montrer que \(g'(x)=\dfrac{-ax^2-2bx+a}{(x^2+1)^2}\), puis déterminer \(a\) et \(b\).</li>
<li>Dans la suite, \(g(x)=\dfrac{4x}{x^2+1}\). Dresser le tableau de variations de \(g\) sur \(\mathbb{R}\) (sans les limites).</li>
<li>Montrer que pour tout réel \(x\), \(-2\leqslant g(x)\leqslant 2\).</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> \(g'(x)=\dfrac{a(x^2+1)-(ax+b)\times 2x}{(x^2+1)^2}=\dfrac{ax^2+a-2ax^2-2bx}{(x^2+1)^2}=\dfrac{-ax^2-2bx+a}{(x^2+1)^2}\).<br>
Tangente horizontale en \(1\) : \(g'(1)=\dfrac{-a-2b+a}{4}=-\dfrac{b}{2}=0\), donc \(b=0\). Puis \(g(1)=\dfrac{a}{2}=2\), donc \(a=4\).</li>
<li><b>(1,5 pt)</b> Avec \(a=4\), \(b=0\) : \(g'(x)=\dfrac{4-4x^2}{(x^2+1)^2}=\dfrac{4(1-x)(1+x)}{(x^2+1)^2}\). Le dénominateur est strictement positif ; \(4(1-x^2)\) est un trinôme de coefficient \(-4\lt 0\) et de racines \(-1\) et \(1\). \(g(-1)=-2\), \(g(1)=2\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(g'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(g\)</td><td></td><td>↘</td><td>\(-2\)</td><td>↗</td><td>\(2\)</td><td>↘</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(2-g(x)=\dfrac{2x^2+2-4x}{x^2+1}=\dfrac{2(x-1)^2}{x^2+1}\geqslant 0\) et \(g(x)+2=\dfrac{4x+2x^2+2}{x^2+1}=\dfrac{2(x+1)^2}{x^2+1}\geqslant 0\). Donc \(-2\leqslant g(x)\leqslant 2\) pour tout réel \(x\) : \(2\) est le maximum de \(g\) sur \(\mathbb{R}\) et \(-2\) son minimum.</li></ol>` },
        { titre: "Exercice 3 — La clôture la moins chère", points: 7,
          enonce: R`<p>Un maraîcher veut clôturer un terrain rectangulaire de \(800\) m² situé le long d'une route. On note \(x\) la longueur (en m) du côté qui longe la route et \(y\) l'autre dimension. Le grillage côté route, plus solide, coûte \(30\) € le mètre ; les trois autres côtés coûtent \(10\) € le mètre.</p>
<ol><li>Exprimer \(y\) en fonction de \(x\), puis montrer que le coût total de la clôture est \(K(x)=40x+\dfrac{16\,000}{x}\), pour \(x\gt 0\).</li>
<li>Montrer que \(K'(x)=\dfrac{40(x-20)(x+20)}{x^2}\).</li>
<li>Dresser le tableau de variations de \(K\) sur \(]0\,;+\infty[\).</li>
<li>Donner les dimensions du terrain pour lesquelles la clôture coûte le moins cher, et ce coût.</li>
<li>Vérifier le résultat sans dérivée en montrant que \(K(x)-1600=\dfrac{40(x-20)^2}{x}\).</li></ol>`,
          correction: R`<ol><li><b>(2 pts)</b> L'aire vaut \(xy=800\), donc \(y=\dfrac{800}{x}\). Côté route : \(30x\) € ; côté opposé : \(10x\) € ; les deux autres côtés : \(2\times 10y=20y\) €. Donc \(K(x)=40x+20\times\dfrac{800}{x}=40x+\dfrac{16\,000}{x}\).</li>
<li><b>(1,5 pt)</b> \(K'(x)=40-\dfrac{16\,000}{x^2}=\dfrac{40x^2-16\,000}{x^2}=\dfrac{40(x^2-400)}{x^2}=\dfrac{40(x-20)(x+20)}{x^2}\).</li>
<li><b>(1,5 pt)</b> Sur \(]0\,;+\infty[\), \(x^2\gt 0\) et \(x+20\gt 0\) : \(K'(x)\) a le signe de \(x-20\). \(K(20)=800+800=1600\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(20\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(K'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(K\)</td><td>||</td><td>↘</td><td>\(1600\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1 pt)</b> Le coût est minimal pour \(x=20\) m ; alors \(y=\dfrac{800}{20}=40\) m. Le terrain mesure \(20\) m le long de la route sur \(40\) m de profondeur, et la clôture coûte \(1\,600\) €.</li>
<li><b>(1 pt)</b> \(K(x)-1600=\dfrac{40x^2-1600x+16\,000}{x}=\dfrac{40(x^2-40x+400)}{x}=\dfrac{40(x-20)^2}{x}\geqslant 0\) pour \(x\gt 0\), avec égalité seulement pour \(x=20\) : on retrouve que \(1600\) € est le coût minimal.</li></ol>` }
      ] },
    { titre: "DS n°8 — Cylindre, hyperbole et Newton", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Le cylindre dans la sphère", points: 7,
          enonce: R`<p>On place un cylindre de hauteur \(h\) et de rayon \(r\) (en cm) à l'intérieur d'une sphère de centre \(O\) et de rayon \(3\) cm, de sorte que les cercles de ses deux bases soient sur la sphère. On rappelle que le volume d'un cylindre est \(\pi r^2h\) et celui d'une boule de rayon \(R\) est \(\frac43\pi R^3\).</p>
<ol><li>En considérant le triangle rectangle formé par \(O\), le centre d'une base et un point du cercle de cette base, montrer que \(r^2=9-\dfrac{h^2}{4}\). Quelles sont les valeurs possibles de \(h\) ?</li>
<li>En déduire que le volume du cylindre est \(V(h)=\pi\left(9h-\dfrac{h^3}{4}\right)\).</li>
<li>Montrer que \(V'(h)=\dfrac{3\pi}{4}(12-h^2)\).</li>
<li>Étudier les variations de \(V\) et déterminer la hauteur et le rayon du cylindre de volume maximal (valeurs exactes et approchées au dixième), ainsi que ce volume.</li>
<li>Quelle proportion du volume de la boule ce cylindre occupe-t-il ? (au pourcent près)</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> Le centre d'une base est à la distance \(\dfrac h2\) de \(O\) (par symétrie). Dans le triangle rectangle, l'hypoténuse est un rayon de la sphère : par Pythagore, \(r^2+\left(\dfrac h2\right)^2=3^2\), donc \(r^2=9-\dfrac{h^2}{4}\). Il faut \(h\gt 0\) et \(r^2\gt 0\), soit \(h^2\lt 36\) : \(h\in\,]0\,;6[\).</li>
<li><b>(1 pt)</b> \(V=\pi r^2h=\pi\left(9-\dfrac{h^2}{4}\right)h=\pi\left(9h-\dfrac{h^3}{4}\right)\).</li>
<li><b>(1,5 pt)</b> \(V'(h)=\pi\left(9-\dfrac{3h^2}{4}\right)=\dfrac{3\pi}{4}\left(12-h^2\right)\) (car \(\dfrac{3\pi}{4}\times 12=9\pi\)).</li>
<li><b>(2 pts)</b> \(\dfrac{3\pi}{4}\gt 0\), donc \(V'(h)\) a le signe de \(12-h^2=(\sqrt{12}-h)(\sqrt{12}+h)\), c'est-à-dire de \(2\sqrt3-h\) sur \(]0\,;6[\). \(V\) est croissante sur \(]0\,;2\sqrt3]\) et décroissante sur \([2\sqrt3\,;6[\).
<table class="tv">
<tr><td>\(h\)</td><td>\(0\)</td><td></td><td>\(2\sqrt3\)</td><td></td><td>\(6\)</td></tr>
<tr><td>signe de \(V'(h)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(V\)</td><td></td><td>↗</td><td>\(12\sqrt3\,\pi\)</td><td>↘</td><td></td></tr>
</table>
Le volume est maximal pour \(h=2\sqrt3\approx 3{,}5\) cm. Alors \(r^2=9-\dfrac{12}{4}=6\), \(r=\sqrt6\approx 2{,}4\) cm, et \(V=\pi\times 6\times 2\sqrt3=12\sqrt3\,\pi\approx 65{,}3\) cm³.</li>
<li><b>(1 pt)</b> Volume de la boule : \(\frac43\pi\times 27=36\pi\). Proportion : \(\dfrac{12\sqrt3\,\pi}{36\pi}=\dfrac{\sqrt3}{3}\approx 0{,}577\), soit environ \(58\,\%\).</li></ol>` },
        { titre: "Exercice 2 — Autour de l'hyperbole y = 4/x", points: 6,
          enonce: R`<p>Dans un repère orthonormé d'origine \(O\), on considère la courbe \(\mathcal{H}\) d'équation \(y=\dfrac4x\) pour \(x\gt 0\), et un point \(M\) de \(\mathcal{H}\) d'abscisse \(x\).</p>
<ol><li>Montrer que \(OM^2=f(x)\) avec \(f(x)=x^2+\dfrac{16}{x^2}\).</li>
<li>Montrer que \(f'(x)=\dfrac{2(x-2)(x+2)(x^2+4)}{x^3}\) et étudier son signe sur \(]0\,;+\infty[\).</li>
<li>En déduire la position du point \(M\) le plus proche de \(O\) et la distance \(OM\) minimale.</li>
<li>Soit \(a\gt 0\). Montrer que la tangente à \(\mathcal{H}\) au point d'abscisse \(a\) a pour équation \(y=-\dfrac{4}{a^2}x+\dfrac{8}{a}\).</li>
<li>Cette tangente coupe les axes en deux points \(P\) et \(Q\). Montrer que l'aire du triangle \(OPQ\) ne dépend pas de \(a\).</li></ol>`,
          correction: R`<ol><li><b>(0,5 pt)</b> \(M\left(x\,;\frac4x\right)\), donc \(OM^2=x^2+\left(\dfrac4x\right)^2=x^2+\dfrac{16}{x^2}\).</li>
<li><b>(2 pts)</b> \(f'(x)=2x-\dfrac{32}{x^3}=\dfrac{2x^4-32}{x^3}=\dfrac{2(x^4-16)}{x^3}\). Or \(x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)\). Sur \(]0\,;+\infty[\), \(x^3\gt 0\), \(x+2\gt 0\) et \(x^2+4\gt 0\) : \(f'(x)\) a le signe de \(x-2\), négatif sur \(]0\,;2[\), positif sur \(]2\,;+\infty[\).</li>
<li><b>(1 pt)</b> \(f\) est décroissante sur \(]0\,;2]\) puis croissante sur \([2\,;+\infty[\) : son minimum est \(f(2)=4+4=8\). Comme \(OM=\sqrt{f(x)}\) et que la racine carrée est croissante, \(OM\) est minimale pour \(x=2\), c'est-à-dire au point \(M(2\,;2)\), et vaut \(\sqrt8=2\sqrt2\approx 2{,}83\).</li>
<li><b>(1,5 pt)</b> Avec \(g(x)=\dfrac4x\) : \(g'(x)=-\dfrac{4}{x^2}\), \(g(a)=\dfrac4a\), \(g'(a)=-\dfrac{4}{a^2}\). Tangente : \(y=-\dfrac{4}{a^2}(x-a)+\dfrac4a=-\dfrac{4}{a^2}x+\dfrac4a+\dfrac4a=-\dfrac{4}{a^2}x+\dfrac8a\).</li>
<li><b>(1 pt)</b> Pour \(x=0\) : \(y=\dfrac8a\), donc \(Q\left(0\,;\frac8a\right)\). Pour \(y=0\) : \(\dfrac{4}{a^2}x=\dfrac8a\iff x=2a\), donc \(P(2a\,;0)\). Le triangle \(OPQ\) est rectangle en \(O\) : son aire vaut \(\dfrac12\times 2a\times\dfrac8a=8\), quel que soit \(a\gt 0\).</li></ol>` },
        { titre: "Exercice 3 — Newton à la poursuite d'une racine", points: 7,
          enonce: R`<p>Soit \(f(x)=x^3-3x+1\). On s'intéresse à la solution \(\alpha\) de l'équation \(f(x)=0\) située dans \([0\,;1]\).</p>
<ol><li>Calculer \(f'(x)\) et montrer que \(f\) est strictement décroissante sur \([0\,;1]\). Calculer \(f(0)\) et \(f(1)\). On admet que \(\alpha\) est l'unique solution de \(f(x)=0\) dans \([0\,;1]\).</li>
<li>On applique la méthode de Newton avec \(x_0=0\). Calculer \(x_1\) puis \(x_2\) sous forme de fractions, puis donner une valeur approchée de \(x_2\) à \(10^{-4}\) près.</li>
<li>Calculer \(f\left(\frac13\right)\). En déduire, sans calculatrice, que \(\alpha\gt\dfrac13\).</li>
<li>Compléter le programme Python suivant pour qu'il applique la méthode de Newton à partir de \(x_0=0\) tant que \(|f(x)|\) dépasse \(10^{-8}\).
<pre><code>x = 0
while abs(x**3 - 3*x + 1) &gt; 10**-8:
    x = ......
print(x)</code></pre></li>
<li>Que se passerait-il si on lançait la méthode avec \(x_0=1\) ?</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'(x)=3x^2-3=3(x-1)(x+1)\). Sur \([0\,;1[\), \(x-1\lt 0\) et \(x+1\gt 0\), donc \(f'(x)\lt 0\) (et \(f'(1)=0\)) : \(f\) est strictement décroissante sur \([0\,;1]\). \(f(0)=1\) et \(f(1)=1-3+1=-1\).</li>
<li><b>(2 pts)</b> \(x_1=0-\dfrac{f(0)}{f'(0)}=-\dfrac{1}{-3}=\dfrac13\).<br>
\(f\left(\frac13\right)=\dfrac1{27}-1+1=\dfrac1{27}\) et \(f'\left(\frac13\right)=\dfrac13-3=-\dfrac83\). Donc \(x_2=\dfrac13-\dfrac{1/27}{-8/3}=\dfrac13+\dfrac{1}{27}\times\dfrac38=\dfrac13+\dfrac{1}{72}=\dfrac{25}{72}\approx 0{,}3472\).</li>
<li><b>(1 pt)</b> \(f\left(\frac13\right)=\dfrac1{27}\gt 0=f(\alpha)\). Comme \(f\) est strictement décroissante sur \([0\,;1]\), \(f\left(\frac13\right)\gt f(\alpha)\) entraîne \(\dfrac13\lt\alpha\).</li>
<li><b>(1,5 pt)</b> <pre><code>    x = x - (x**3 - 3*x + 1) / (3*x**2 - 3)</code></pre> Le programme affiche environ \(0{,}347\,296\,35\) (il s'arrête après \(x_3\)).</li>
<li><b>(1 pt)</b> \(f'(1)=0\) : la tangente en \(1\) est horizontale, elle ne coupe pas l'axe des abscisses. Le calcul de \(x_1\) demanderait une division par zéro (Python afficherait une erreur <code>ZeroDivisionError</code>).</li></ol>` }
      ] },
    { titre: "DS n°9 — Degré 4, inégalité et vitesse économique", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Un polynôme de degré 4", points: 8,
          enonce: R`<p>Soit \(f\) définie sur \(\mathbb{R}\) par \(f(x)=3x^4-4x^3-12x^2+5\), de courbe \(\mathcal{C}\).</p>
<ol><li>Calculer \(f'(x)\) et montrer que \(f'(x)=12x(x-2)(x+1)\).</li>
<li>Dresser le tableau de signes de \(f'(x)\) sur \(\mathbb{R}\).</li>
<li>Dresser le tableau de variations de \(f\) (valeurs aux points où \(f'\) s'annule, sans les limites).</li>
<li>Déterminer les extremums locaux de \(f\). Le maximum local est-il le maximum de \(f\) sur \(\mathbb{R}\) ? (on pourra calculer \(f(3)\)). Quel est le minimum de \(f\) sur \(\mathbb{R}\) ?</li>
<li>Déterminer l'équation de la tangente à \(\mathcal{C}\) au point d'abscisse \(1\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'(x)=12x^3-12x^2-24x=12x(x^2-x-2)\). Or \((x-2)(x+1)=x^2+x-2x-2=x^2-x-2\), donc \(f'(x)=12x(x-2)(x+1)\).</li>
<li><b>(2 pts)</b>
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(12x\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td><td>\(+\)</td><td></td></tr>
<tr><td>\(x-2\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>\(x+1\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td><td>\(+\)</td><td></td><td>\(+\)</td><td></td></tr>
<tr><td>\(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(f(-1)=3+4-12+5=0\) ; \(f(0)=5\) ; \(f(2)=48-32-48+5=-27\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-1\)</td><td></td><td>\(0\)</td><td></td><td>\(2\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↘</td><td>\(0\)</td><td>↗</td><td>\(5\)</td><td>↘</td><td>\(-27\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(f'\) change de signe en \(-1\), \(0\) et \(2\) : \(f\) admet un minimum local \(0\) en \(-1\), un maximum local \(5\) en \(0\) et un minimum local \(-27\) en \(2\).<br>
\(f(3)=243-108-108+5=32\gt 5\) : le maximum local \(5\) n'est pas le maximum de \(f\) sur \(\mathbb{R}\).<br>
Sur \(]-\infty\,;0]\), \(f(x)\geqslant f(-1)=0\) ; sur \([0\,;+\infty[\), \(f(x)\geqslant f(2)=-27\). Donc le minimum de \(f\) sur \(\mathbb{R}\) est \(-27\), atteint en \(x=2\).</li>
<li><b>(1,5 pt)</b> \(f(1)=3-4-12+5=-8\) et \(f'(1)=12\times 1\times(-1)\times 2=-24\). Tangente : \(y=-24(x-1)-8\), soit \(y=-24x+16\).</li></ol>` },
        { titre: "Exercice 2 — Une inégalité de degré 4", points: 6,
          enonce: R`<p>On veut démontrer que pour tout réel \(x\) : \(x^4+3\geqslant 4x\). On pose \(h(x)=x^4-4x+3\) sur \(\mathbb{R}\).</p>
<ol><li>Calculer \(h'(x)\) et étudier son signe sur \(\mathbb{R}\).</li>
<li>Dresser le tableau de variations de \(h\) et donner son minimum.</li>
<li>Conclure.</li>
<li>Déterminer l'équation de la tangente à la courbe de \(x\mapsto x^4\) au point d'abscisse \(1\), puis interpréter graphiquement l'inégalité démontrée.</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(h'(x)=4x^3-4=4(x^3-1)\). La fonction cube est strictement croissante et \(1^3=1\) : \(x^3-1\lt 0\) si \(x\lt 1\) et \(x^3-1\gt 0\) si \(x\gt 1\). Donc \(h'(x)\lt 0\) sur \(]-\infty\,;1[\) et \(h'(x)\gt 0\) sur \(]1\,;+\infty[\).</li>
<li><b>(2 pts)</b> \(h(1)=1-4+3=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(h'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(h\)</td><td></td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr>
</table>
\(h\) admet un minimum égal à \(0\), atteint en \(x=1\).</li>
<li><b>(1 pt)</b> Pour tout réel \(x\), \(h(x)\geqslant 0\), donc \(x^4-4x+3\geqslant 0\), c'est-à-dire \(x^4+3\geqslant 4x\) (égalité seulement pour \(x=1\)).</li>
<li><b>(1,5 pt)</b> Pour \(g(x)=x^4\) : \(g(1)=1\), \(g'(x)=4x^3\), \(g'(1)=4\). Tangente : \(y=4(x-1)+1=4x-3\). L'inégalité s'écrit \(x^4\geqslant 4x-3\) : la courbe de \(x\mapsto x^4\) est au-dessus de sa tangente au point d'abscisse \(1\) sur tout \(\mathbb{R}\), et ne la touche qu'au point \((1\,;1)\).</li></ol>` },
        { titre: "Exercice 3 — À quelle vitesse rouler ?", points: 6,
          enonce: R`<p>Un camion doit parcourir \(300\) km à vitesse constante \(v\) (en km/h), avec \(v\in[30\,;90]\). Le salaire du chauffeur coûte \(45\) € par heure et le carburant coûte \(\dfrac{v^2}{80}\) € par heure.</p>
<ol><li>Exprimer la durée du trajet en fonction de \(v\).</li>
<li>Montrer que le coût total du trajet est \(C(v)=\dfrac{13\,500}{v}+\dfrac{15v}{4}\).</li>
<li>Montrer que \(C'(v)=\dfrac{15(v-60)(v+60)}{4v^2}\).</li>
<li>Dresser le tableau de variations de \(C\) sur \([30\,;90]\).</li>
<li>À quelle vitesse faut-il rouler pour que le trajet coûte le moins cher ? Donner ce coût et la durée du trajet.</li></ol>`,
          correction: R`<ol><li><b>(0,5 pt)</b> Durée \(=\dfrac{\text{distance}}{\text{vitesse}}=\dfrac{300}{v}\) heures.</li>
<li><b>(1,5 pt)</b> Coût horaire : \(45+\dfrac{v^2}{80}\). Donc \(C(v)=\dfrac{300}{v}\left(45+\dfrac{v^2}{80}\right)=\dfrac{13\,500}{v}+\dfrac{300v}{80}=\dfrac{13\,500}{v}+\dfrac{15v}{4}\).</li>
<li><b>(1,5 pt)</b> \(C'(v)=-\dfrac{13\,500}{v^2}+\dfrac{15}{4}=\dfrac{15v^2-54\,000}{4v^2}=\dfrac{15(v^2-3600)}{4v^2}=\dfrac{15(v-60)(v+60)}{4v^2}\) (car \(54\,000=15\times 3600\)).</li>
<li><b>(1,5 pt)</b> Sur \([30\,;90]\), \(4v^2\gt 0\) et \(v+60\gt 0\) : \(C'(v)\) a le signe de \(v-60\). \(C(30)=450+112{,}5=562{,}5\) ; \(C(60)=225+225=450\) ; \(C(90)=150+337{,}5=487{,}5\).
<table class="tv">
<tr><td>\(v\)</td><td>\(30\)</td><td></td><td>\(60\)</td><td></td><td>\(90\)</td></tr>
<tr><td>signe de \(C'(v)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(C\)</td><td>\(562{,}5\)</td><td>↘</td><td>\(450\)</td><td>↗</td><td>\(487{,}5\)</td></tr>
</table></li>
<li><b>(1 pt)</b> Le coût est minimal pour \(v=60\) km/h : le trajet coûte alors \(450\) € et dure \(\dfrac{300}{60}=5\) heures.</li></ol>` }
      ] },
    { titre: "DS n°10 — Synthèse : QCM, étude, position et affiche", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — QCM", points: 4,
          enonce: R`<p>Pour chaque question, une seule réponse est exacte. Recopier la bonne réponse en justifiant.</p><ol>
<li>La dérivée de \(f(x)=\dfrac{x-1}{x+2}\) sur \(]-2\,;+\infty[\) est : a) \(1\) ; b) \(\dfrac{3}{(x+2)^2}\) ; c) \(\dfrac{-3}{(x+2)^2}\).</li>
<li>Le nombre de points de la courbe de \(g(x)=x^3+3x\) où la tangente est horizontale est : a) \(0\) ; b) \(1\) ; c) \(2\).</li>
<li>Le maximum de \(k(x)=-2x^2+8x-3\) sur \([0\,;1]\) est : a) \(5\) ; b) \(3\) ; c) \(-3\).</li>
<li>Méthode de Newton pour \(f(x)=x^2-10\) avec \(x_0=3\) : \(x_1\) vaut a) \(\dfrac{19}{6}\) ; b) \(\sqrt{10}\) ; c) \(3{,}5\).</li></ol>`,
          correction: R`<p><b>1 pt par question.</b></p><ol>
<li><b>b)</b> \(f'(x)=\dfrac{1\times(x+2)-(x-1)\times 1}{(x+2)^2}=\dfrac{3}{(x+2)^2}\).</li>
<li><b>a)</b> \(g'(x)=3x^2+3\geqslant 3\gt 0\) : \(g'\) ne s'annule jamais, aucune tangente horizontale.</li>
<li><b>b)</b> \(k'(x)=-4x+8\gt 0\) sur \([0\,;1]\) : \(k\) est croissante sur \([0\,;1]\), son maximum est \(k(1)=-2+8-3=3\). (Le piège : \(5=k(2)\) est le maximum sur \(\mathbb{R}\), mais \(2\notin[0\,;1]\).)</li>
<li><b>a)</b> \(x_1=3-\dfrac{f(3)}{f'(3)}=3-\dfrac{-1}{6}=\dfrac{19}{6}\approx 3{,}1667\), proche de \(\sqrt{10}\approx 3{,}1623\) sans lui être égal.</li></ol>` },
        { titre: "Exercice 2 — Étude sur un intervalle fermé", points: 6,
          enonce: R`<p>Soit \(f\) définie sur \([0\,;5]\) par \(f(x)=\dfrac13x^3-\dfrac52x^2+4x+1\).</p>
<ol><li>Calculer \(f'(x)\) et le factoriser.</li>
<li>Dresser le tableau de variations de \(f\) sur \([0\,;5]\) (valeurs exactes sous forme de fractions).</li>
<li>Donner le maximum et le minimum de \(f\) sur \([0\,;5]\).</li>
<li>Déterminer l'équation de la tangente à la courbe de \(f\) au point d'abscisse \(2\).</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(f'(x)=x^2-5x+4\). \(\Delta=25-16=9\), racines \(\dfrac{5-3}{2}=1\) et \(\dfrac{5+3}{2}=4\) : \(f'(x)=(x-1)(x-4)\).</li>
<li><b>(2 pts)</b> \(f'\) est positif à l'extérieur de \([1\,;4]\) et négatif entre. \(f(0)=1\) ; \(f(1)=\dfrac13-\dfrac52+5=\dfrac{2-15+30}{6}=\dfrac{17}{6}\) ; \(f(4)=\dfrac{64}{3}-40+17=\dfrac{64}{3}-23=-\dfrac53\) ; \(f(5)=\dfrac{125}{3}-\dfrac{125}{2}+21=\dfrac{250-375+126}{6}=\dfrac16\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(4\)</td><td></td><td>\(5\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>\(1\)</td><td>↗</td><td>\(\frac{17}{6}\)</td><td>↘</td><td>\(-\frac53\)</td><td>↗</td><td>\(\frac16\)</td></tr>
</table></li>
<li><b>(1,5 pt)</b> On compare les extremums locaux aux valeurs aux bornes : \(\dfrac{17}{6}\gt 1\) et \(\dfrac{17}{6}\gt\dfrac16\), donc le maximum est \(\dfrac{17}{6}\), atteint en \(x=1\) ; \(-\dfrac53\lt 1\) et \(-\dfrac53\lt\dfrac16\), donc le minimum est \(-\dfrac53\), atteint en \(x=4\).</li>
<li><b>(1,5 pt)</b> \(f(2)=\dfrac83-10+8+1=\dfrac53\) et \(f'(2)=4-10+4=-2\). Tangente : \(y=-2(x-2)+\dfrac53=-2x+\dfrac{17}{3}\).</li></ol>` },
        { titre: "Exercice 3 — Une courbe au-dessus d'une droite", points: 5,
          enonce: R`<p>Soit \(f\) définie sur \(]-2\,;+\infty[\) par \(f(x)=\dfrac{2x^2+3x}{x+2}\), de courbe \(\mathcal{C}\), et \(\mathcal{D}\) la droite d'équation \(y=2x-1\).</p>
<ol><li>Montrer que \(f'(x)=\dfrac{2(x+1)(x+3)}{(x+2)^2}\).</li>
<li>Étudier les variations de \(f\) sur \(]-2\,;+\infty[\) et donner son minimum.</li>
<li>Montrer que \(f(x)-(2x-1)=\dfrac{2}{x+2}\) et en déduire la position relative de \(\mathcal{C}\) et \(\mathcal{D}\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(f'(x)=\dfrac{(4x+3)(x+2)-(2x^2+3x)\times 1}{(x+2)^2}=\dfrac{4x^2+11x+6-2x^2-3x}{(x+2)^2}=\dfrac{2x^2+8x+6}{(x+2)^2}\). Or \(2(x+1)(x+3)=2(x^2+4x+3)=2x^2+8x+6\).</li>
<li><b>(1,5 pt)</b> Sur \(]-2\,;+\infty[\) : \((x+2)^2\gt 0\) et \(x+3\gt 0\), donc \(f'(x)\) a le signe de \(x+1\). \(f\) est décroissante sur \(]-2\,;-1]\) et croissante sur \([-1\,;+\infty[\). Son minimum est \(f(-1)=\dfrac{2-3}{1}=-1\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-2\)</td><td></td><td>\(-1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td>||</td><td>↘</td><td>\(-1\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(2 pts)</b> \(f(x)-(2x-1)=\dfrac{2x^2+3x-(2x-1)(x+2)}{x+2}=\dfrac{2x^2+3x-(2x^2+3x-2)}{x+2}=\dfrac{2}{x+2}\). Sur \(]-2\,;+\infty[\), \(x+2\gt 0\), donc \(f(x)-(2x-1)\gt 0\) : \(\mathcal{C}\) est strictement au-dessus de \(\mathcal{D}\).</li></ol>` },
        { titre: "Exercice 4 — L'affiche économique", points: 5,
          enonce: R`<p>On veut imprimer une affiche rectangulaire dont la zone imprimée a une aire de \(384\) cm². On laisse des marges de \(2\) cm à gauche et à droite, et de \(3\) cm en haut et en bas. On note \(x\) la largeur de la zone imprimée (en cm, \(x\gt 0\)).</p>
<ol><li>Exprimer la hauteur de la zone imprimée en fonction de \(x\), puis montrer que l'aire totale de l'affiche est \(A(x)=408+6x+\dfrac{1536}{x}\).</li>
<li>Étudier les variations de \(A\) sur \(]0\,;+\infty[\).</li>
<li>Quelles dimensions donner à l'affiche pour utiliser le moins de papier possible ? Quelle est alors son aire ?</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> Hauteur imprimée : \(\dfrac{384}{x}\). L'affiche mesure \(x+4\) de large et \(\dfrac{384}{x}+6\) de haut, donc \(A(x)=(x+4)\left(\dfrac{384}{x}+6\right)=384+6x+\dfrac{1536}{x}+24=408+6x+\dfrac{1536}{x}\).</li>
<li><b>(2 pts)</b> \(A'(x)=6-\dfrac{1536}{x^2}=\dfrac{6x^2-1536}{x^2}=\dfrac{6(x^2-256)}{x^2}=\dfrac{6(x-16)(x+16)}{x^2}\). Sur \(]0\,;+\infty[\), \(A'(x)\) a le signe de \(x-16\) : \(A\) est décroissante sur \(]0\,;16]\) et croissante sur \([16\,;+\infty[\). \(A(16)=408+96+96=600\).
<table class="tv">
<tr><td>\(x\)</td><td>\(0\)</td><td></td><td>\(16\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(A'(x)\)</td><td>||</td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(A\)</td><td>||</td><td>↘</td><td>\(600\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> L'aire est minimale pour \(x=16\) : la zone imprimée mesure \(16\) cm sur \(\dfrac{384}{16}=24\) cm, donc l'affiche mesure \(20\) cm de large sur \(30\) cm de haut, pour une aire de \(600\) cm².</li></ol>` }
      ] }
  ]
});
})();
