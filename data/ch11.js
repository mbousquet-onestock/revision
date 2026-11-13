(function () {
const R = String.raw;

// --- Petit utilitaire : arbre pondéré à deux niveaux en SVG (texte brut, sans KaTeX) ---
function arbre(o) {
  var A = o.A, B = o.B;
  var W = o.fin ? 480 : 320;
  var s = '<svg viewBox="0 0 ' + W + ' 210" width="' + W + '" style="max-width:100%;height:auto;display:block;margin:0.6em auto" role="img" aria-label="Arbre pondéré">';
  function L(x1, y1, x2, y2) { s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="currentColor" stroke-width="1.4"/>'; }
  function T(x, y, t, anc, sz) { s += '<text x="' + x + '" y="' + y + '" fill="currentColor" font-size="' + (sz || 15) + '" text-anchor="' + (anc || 'middle') + '">' + t + '</text>'; }
  var y1 = [55, 155], y2 = [[25, 85], [125, 185]];
  for (var i = 0; i < 2; i++) {
    L(10, 105, 120, y1[i]);
    T(135, y1[i] + 5, A[i], 'middle', 16);
    T(58, i ? 147 : 72, o.p[i], 'middle', 14);
    for (var j = 0; j < 2; j++) {
      L(150, y1[i], 255, y2[i][j]);
      T(270, y2[i][j] + 5, B[i][j], 'middle', 16);
      var mid = (y1[i] + y2[i][j]) / 2;
      T(198, j ? mid + 16 : mid - 9, o.q[i][j], 'middle', 14);
      if (o.fin) T(295, y2[i][j] + 5, o.fin[2 * i + j], 'start', 13);
    }
  }
  return s + '</svg>';
}

(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 11,
  titre: "Variables aléatoires",
  partie: "Probabilités et statistiques",
  emoji: "🎰",
  accroche: R`Un jeu de fête foraine, un ticket de tombola, un contrat d'assurance : qui gagne vraiment à la fin ? Avec une <b>variable aléatoire</b>, tu transformes le hasard en nombres, et avec l'<b>espérance</b> tu prédis le gain moyen à long terme. Bref : tu vas savoir repérer un jeu truqué avant de miser ton argent de poche !`,

  videos: [
    { titre: "Variable aléatoire et loi de probabilité", recherche: "Yvan Monka variable aléatoire loi de probabilité première", duree: "≈ 8 min", resume: R`Ce qu'est une variable aléatoire, les notations \(\{X=a\}\) et comment présenter sa loi dans un tableau.` },
    { titre: "Calculer une espérance", recherche: "Yvan Monka calculer l'espérance d'une variable aléatoire", duree: "≈ 6 min", resume: R`La formule de l'espérance et son interprétation comme moyenne à long terme.` },
    { titre: "Variance et écart-type", recherche: "Yvan Monka variance écart-type variable aléatoire", duree: "≈ 7 min", resume: R`Mesurer la dispersion des valeurs autour de l'espérance.` },
    { titre: "Jeu équitable", recherche: "Yvan Monka espérance gain jeu équitable", duree: "≈ 8 min", resume: R`Modéliser un jeu par une variable aléatoire « gain » et décider s'il est favorable, défavorable ou équitable.` },
    { titre: "Espérance et variance de aX + b", recherche: "Yvan Monka espérance variance aX+b transformation affine variable aléatoire", duree: "≈ 6 min", resume: R`Les formules \(E(aX+b)=aE(X)+b\) et \(V(aX+b)=a^2V(X)\) et comment s'en servir.` },
    { titre: "Espérance et variance en Python", recherche: "Python calcul espérance variance variable aléatoire listes première spécialité", duree: "≈ 9 min", resume: R`Programmer l'espérance, la variance et l'écart-type à partir de deux listes.` },
    { titre: "Simuler une variable aléatoire en Python", recherche: "simuler une variable aléatoire Python moyenne échantillon première", duree: "≈ 10 min", resume: R`Simuler un jeu de nombreuses fois et comparer la moyenne obtenue à l'espérance.` }
  ],

  cours: [
    { titre: "1. Variable aléatoire réelle", html: R`
<div class="def"><b>Définition.</b> Une <b>variable aléatoire réelle</b> \(X\) définie sur un univers \(\Omega\) (fini) est une fonction qui associe un <b>nombre réel</b> à chaque issue de \(\Omega\).</div>
<div class="ex"><b>Exemple.</b> On lance deux pièces. \(\Omega=\{PP;PF;FP;FF\}\). Si \(X\) est le nombre de « Pile », alors \(X(PP)=2\), \(X(PF)=X(FP)=1\), \(X(FF)=0\). \(X\) prend les valeurs \(0\), \(1\) et \(2\).</div>
<div class="def"><b>Notations.</b> Pour un réel \(a\) :
<ul>
<li>\(\{X=a\}\) est l'événement « \(X\) prend la valeur \(a\) », formé des issues \(\omega\) telles que \(X(\omega)=a\) ;</li>
<li>\(\{X&lt;a\}\), \(\{X\leqslant a\}\), \(\{X\geqslant a\}\)… sont définis de la même façon ;</li>
<li>on note \(P(X=a)\) la probabilité de \(\{X=a\}\) (au lieu de \(P(\{X=a\})\)).</li>
</ul></div>
<div class="ex">Avec l'exemple des deux pièces : \(\{X=1\}=\{PF;FP\}\), donc \(P(X=1)=\frac24=\frac12\). Et \(\{X\geqslant1\}=\{PP;PF;FP\}\), donc \(P(X\geqslant1)=\frac34\).</div>
<div class="warn"><b>Piège :</b> \(X\) n'est pas un nombre « inconnu » comme en algèbre : c'est une <b>fonction</b>. Ce sont ses valeurs \(x_i\) qui sont des nombres. Et \(\{X=a\}\) est un <b>événement</b>, pas un nombre.</div>` },
    { titre: "2. Loi de probabilité et modélisation", html: R`
<div class="def"><b>Définition.</b> Si \(X\) prend les valeurs \(x_1,x_2,\dots,x_n\), la <b>loi de probabilité</b> de \(X\) est la donnée des \(p_i=P(X=x_i)\). On la présente dans un tableau :
<table class="tv"><tr><td>\(x_i\)</td><td>\(x_1\)</td><td>\(x_2\)</td><td>…</td><td>\(x_n\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(p_1\)</td><td>\(p_2\)</td><td>…</td><td>\(p_n\)</td></tr></table></div>
<div class="prop"><b>Propriété.</b> \(p_1+p_2+\dots+p_n=1\) et chaque \(p_i\) est entre 0 et 1.</div>
<div class="ex"><b>Méthode : modéliser un jeu.</b> On mise 3 € pour faire tourner une roue de 10 secteurs identiques : 1 secteur rapporte 13 €, 4 secteurs rapportent 5 €, les autres rien. On note \(X\) le <b>gain algébrique</b> (ce qu'on reçoit moins la mise).
<ol>
<li>Valeurs possibles : \(13-3=10\), \(5-3=2\), \(0-3=-3\).</li>
<li>Probabilités (équiprobabilité des secteurs) : \(\frac{1}{10}\), \(\frac{4}{10}\), \(\frac{5}{10}\).</li>
<li>Tableau :
<table class="tv"><tr><td>\(x_i\)</td><td>\(-3\)</td><td>\(2\)</td><td>\(10\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}5\)</td><td>\(0{,}4\)</td><td>\(0{,}1\)</td></tr></table></li>
<li>Vérification : \(0{,}5+0{,}4+0{,}1=1\) ✓.</li>
</ol>
On peut alors lire par exemple \(P(X&gt;0)=0{,}4+0{,}1=0{,}5\).</div>
<div class="warn"><b>Pièges :</b>
<ul><li>Oublier de retirer la mise : le <b>gain</b> n'est pas la somme reçue !</li><li>Oublier une valeur, ou des probabilités dont la somme ne fait pas 1 : vérifie toujours.</li><li>Pour une expérience à plusieurs étapes, fais un <b>arbre</b> puis regroupe les chemins qui donnent la même valeur de \(X\).</li></ul></div>` },
    { titre: "3. Espérance", html: R`
<div class="def"><b>Définition.</b> L'<b>espérance</b> de \(X\) est
\[E(X)=p_1x_1+p_2x_2+\dots+p_nx_n=\sum_{i=1}^{n}p_ix_i.\]</div>
<p><b>Interprétation :</b> si on répète l'expérience un très grand nombre de fois, la <b>moyenne</b> des valeurs obtenues se rapproche de \(E(X)\). C'est la « valeur moyenne à long terme ».</p>
<div class="ex"><b>Exemple</b> (roue ci-dessus). \(E(X)=0{,}5\times(-3)+0{,}4\times2+0{,}1\times10=-1{,}5+0{,}8+1=0{,}3\).<br>
En moyenne, sur un grand nombre de parties, le joueur gagne environ 0,30 € par partie.</div>
<div class="prop"><b>Jeu équitable.</b> Si \(X\) est le gain algébrique du joueur :
<ul><li>\(E(X)&gt;0\) : jeu <b>favorable</b> au joueur ;</li><li>\(E(X)&lt;0\) : jeu <b>défavorable</b> au joueur (favorable à l'organisateur) ;</li><li>\(E(X)=0\) : jeu <b>équitable</b>.</li></ul></div>
<div class="warn"><b>Piège :</b> l'espérance n'est pas forcément une valeur prise par \(X\) (ici \(0{,}3\) n'est jamais gagné) ! Et « jeu favorable » ne garantit pas de gagner à chaque partie, seulement en moyenne à long terme.</div>` },
    { titre: "4. Variance et écart-type", html: R`
<div class="def"><b>Définition.</b> La <b>variance</b> et l'<b>écart-type</b> de \(X\) sont
\[V(X)=\sum_{i=1}^{n}p_i\big(x_i-E(X)\big)^2\qquad\text{et}\qquad\sigma(X)=\sqrt{V(X)}.\]</div>
<p><b>Interprétation :</b> ils mesurent la <b>dispersion</b> des valeurs de \(X\) autour de son espérance. Plus \(\sigma(X)\) est grand, plus les résultats sont « risqués » (éloignés de la moyenne). L'écart-type s'exprime dans la <b>même unité</b> que \(X\).</p>
<div class="prop"><b>Formule de König-Huygens</b> (souvent plus rapide) :
\[V(X)=E(X^2)-\big(E(X)\big)^2\quad\text{où}\quad E(X^2)=\sum p_ix_i^2.\]</div>
<div class="ex"><b>Exemple</b> (roue, \(E(X)=0{,}3\)).<br>
Par la définition : \(V(X)=0{,}5\times(-3{,}3)^2+0{,}4\times1{,}7^2+0{,}1\times9{,}7^2=5{,}445+1{,}156+9{,}409=16{,}01\).<br>
Par König-Huygens : \(E(X^2)=0{,}5\times9+0{,}4\times4+0{,}1\times100=16{,}1\) et \(V(X)=16{,}1-0{,}3^2=16{,}01\) ✓.<br>
\(\sigma(X)=\sqrt{16{,}01}\approx4{,}00\) €.</div>
<div class="warn"><b>Pièges :</b>
<ul><li>Une variance est <b>toujours positive</b> : si tu trouves un nombre négatif, il y a une erreur.</li><li>Dans König-Huygens, c'est \(\big(E(X)\big)^2\) et non \(E(X)\) qu'on soustrait.</li><li>Ne pas oublier la racine carrée pour l'écart-type.</li></ul></div>` },
    { titre: "5. Transformation affine : E(aX+b) et V(aX+b)", html: R`
<div class="prop"><b>Propriété.</b> Pour tous réels \(a\) et \(b\) :
\[E(aX+b)=aE(X)+b,\qquad V(aX+b)=a^2V(X),\qquad \sigma(aX+b)=|a|\,\sigma(X).\]</div>
<p><b>Intuition :</b> ajouter \(b\) décale toutes les valeurs (donc la moyenne) mais ne change pas leur dispersion ; multiplier par \(a\) étire les écarts d'un facteur \(|a|\), donc la variance d'un facteur \(a^2\).</p>
<div class="ex"><b>Exemple.</b> Un food-truck sert \(X\) clients par jour avec \(E(X)=50\) et \(\sigma(X)=8\). Chaque client rapporte 6 €, et les frais fixes sont de 120 € par jour. Le bénéfice est \(B=6X-120\).<br>
\(E(B)=6\times50-120=180\) €, \(V(B)=36\times64=2304\), \(\sigma(B)=6\times8=48\) €.</div>
<div class="warn"><b>Pièges :</b> \(V(aX+b)\neq aV(X)+b\) ! Le \(b\) disparaît et \(a\) est <b>au carré</b>. Par exemple \(V(-X)=V(X)\) (et non \(-V(X)\), une variance est positive).</div>` },
    { titre: "6. Algorithmique : calculer et simuler en Python", html: R`
<p>On représente une loi par deux listes de même longueur : <code>valeurs</code> et <code>probas</code>.</p>
<div class="ex"><b>Espérance, variance, écart-type.</b>
<pre><code>from math import sqrt

def esperance(valeurs, probas):
    E = 0
    for i in range(len(valeurs)):
        E = E + valeurs[i] * probas[i]
    return E

def variance(valeurs, probas):
    E = esperance(valeurs, probas)
    V = 0
    for i in range(len(valeurs)):
        V = V + probas[i] * (valeurs[i] - E)**2
    return V

def ecart_type(valeurs, probas):
    return sqrt(variance(valeurs, probas))

print(esperance([-3, 2, 10], [0.5, 0.4, 0.1]))   # environ 0.3</code></pre></div>
<div class="ex"><b>Simulation et moyenne.</b> On simule la roue un grand nombre de fois : la moyenne des gains approche \(E(X)=0{,}3\).
<pre><code>from random import randint

def partie():
    secteur = randint(1, 10)     # entier au hasard entre 1 et 10
    if secteur == 1:
        return 10
    elif secteur &lt;= 5:
        return 2
    else:
        return -3

def moyenne(n):
    s = 0
    for k in range(n):
        s = s + partie()
    return s / n</code></pre></div>
<div class="ex"><b>Fréquence d'apparition d'une lettre</b> dans un texte :
<pre><code>def frequence(texte, lettre):
    compteur = 0
    for c in texte:
        if c == lettre:
            compteur = compteur + 1
    return compteur / len(texte)

print(frequence("ABRACADABRA", "A"))   # 5/11, environ 0.4545</code></pre></div>
<div class="warn"><b>Attention :</b> en Python, les décimaux s'écrivent avec un <b>point</b> (<code>0.5</code>) et les calculs sur les flottants peuvent donner des résultats comme <code>0.30000000000000004</code> : ce n'est pas une erreur de raisonnement, juste un arrondi machine.</div>` }
  ],

  quiz: [
    { q: R`\(X\) prend les valeurs \(0\), \(1\), \(2\) avec \(P(X=0)=0{,}2\), \(P(X=1)=0{,}5\) et \(P(X=2)=p\). Alors \(p=\)`, choix: [R`\(0{,}2\)`, R`\(0{,}3\)`, R`\(0{,}5\)`, R`\(0{,}7\)`], bonne: 1, explication: R`La somme des probabilités vaut 1 : \(p=1-0{,}2-0{,}5=0{,}3\).` },
    { q: R`Avec la loi précédente (\(p=0{,}3\)), \(E(X)=\)`, choix: [R`\(1\)`, R`\(1{,}1\)`, R`\(0{,}8\)`, R`\(1{,}5\)`], bonne: 1, explication: R`\(E(X)=0\times0{,}2+1\times0{,}5+2\times0{,}3=0{,}5+0{,}6=1{,}1\).` },
    { q: R`Avec la même loi, \(P(X\leqslant1)=\)`, choix: [R`\(0{,}5\)`, R`\(0{,}2\)`, R`\(0{,}7\)`, R`\(0{,}8\)`], bonne: 2, explication: R`\(P(X\leqslant1)=P(X=0)+P(X=1)=0{,}2+0{,}5=0{,}7\).` },
    { q: R`Si \(E(X)=3\), alors \(E(2X-1)=\)`, choix: [R`\(6\)`, R`\(5\)`, R`\(3\)`, R`\(11\)`], bonne: 1, explication: R`\(E(aX+b)=aE(X)+b=2\times3-1=5\).` },
    { q: R`Si \(V(X)=4\), alors \(V(-3X+2)=\)`, choix: [R`\(-10\)`, R`\(-12\)`, R`\(36\)`, R`\(38\)`], bonne: 2, explication: R`\(V(aX+b)=a^2V(X)=(-3)^2\times4=36\). Le \(+2\) ne change pas la dispersion, et une variance n'est jamais négative.` },
    { q: R`\(V(X)=9\). L'écart-type de \(X\) vaut :`, choix: [R`\(81\)`, R`\(4{,}5\)`, R`\(3\)`, R`\(9\)`], bonne: 2, explication: R`\(\sigma(X)=\sqrt{V(X)}=\sqrt9=3\).` },
    { q: R`\(X\) est le gain algébrique d'un joueur. Le jeu est équitable si :`, choix: [R`\(E(X)=0\)`, R`\(V(X)=0\)`, R`\(E(X)=1\)`, R`\(P(X&gt;0)=0{,}5\)`], bonne: 0, explication: R`Un jeu est équitable quand le gain moyen à long terme est nul : \(E(X)=0\).` },
    { q: R`Que renvoie <code>sum([valeurs[i] * probas[i] for i in range(len(valeurs))])</code> ?`, choix: [R`La variance de \(X\)`, R`L'espérance de \(X\)`, R`La somme des probabilités`, R`L'écart-type de \(X\)`], bonne: 1, explication: R`On additionne les produits \(x_i\times p_i\) : c'est la formule de l'espérance.` }
  ],

  exercices: [
    { niveau: 1, titre: "Lire une loi de probabilité",
      enonce: R`La loi d'une variable aléatoire \(X\) est donnée par :
<table class="tv"><tr><td>\(x_i\)</td><td>\(-2\)</td><td>\(0\)</td><td>\(1\)</td><td>\(3\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}1\)</td><td>\(0{,}3\)</td><td>\(a\)</td><td>\(0{,}2\)</td></tr></table>
<ol><li>Détermine \(a\).</li><li>Calcule \(P(X=0)\), \(P(X\geqslant1)\), \(P(X&lt;1)\) et \(P(-2&lt;X\leqslant1)\).</li><li>Calcule \(E(X)\).</li></ol>`,
      indice: R`La somme des probabilités vaut 1. Pour \(P(X\geqslant1)\), additionne les probabilités des valeurs supérieures ou égales à 1.`,
      correction: R`<ol>
<li>\(0{,}1+0{,}3+a+0{,}2=1\) donc \(a=0{,}4\).</li>
<li>\(P(X=0)=0{,}3\).<br>
\(P(X\geqslant1)=P(X=1)+P(X=3)=0{,}4+0{,}2=0{,}6\).<br>
\(P(X&lt;1)=P(X=-2)+P(X=0)=0{,}4\) (c'est aussi \(1-P(X\geqslant1)\)).<br>
\(P(-2&lt;X\leqslant1)=P(X=0)+P(X=1)=0{,}7\) (attention, \(-2\) est exclu).</li>
<li>\(E(X)=0{,}1\times(-2)+0{,}3\times0+0{,}4\times1+0{,}2\times3=-0{,}2+0+0{,}4+0{,}6=0{,}8\).</li>
</ol>`},
    { niveau: 1, titre: "Deux pièces",
      enonce: R`On lance deux pièces équilibrées. \(X\) est le nombre de « Pile » obtenus.
<ol><li>Donne l'univers et les valeurs prises par \(X\).</li><li>Détermine la loi de \(X\).</li><li>Calcule \(E(X)\), \(V(X)\) et \(\sigma(X)\).</li></ol>`,
      indice: R`Il y a 4 issues équiprobables. Pour \(V(X)\), calcule \(E(X^2)\) puis utilise \(V(X)=E(X^2)-E(X)^2\).`,
      correction: R`<ol>
<li>\(\Omega=\{PP;PF;FP;FF\}\), 4 issues équiprobables. \(X\) prend les valeurs 0, 1, 2.</li>
<li>\(\{X=0\}=\{FF\}\), \(\{X=1\}=\{PF;FP\}\), \(\{X=2\}=\{PP\}\).
<table class="tv"><tr><td>\(x_i\)</td><td>0</td><td>1</td><td>2</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac14\)</td><td>\(\frac12\)</td><td>\(\frac14\)</td></tr></table></li>
<li>\(E(X)=0\times\frac14+1\times\frac12+2\times\frac14=1\) (en moyenne un Pile sur deux lancers, logique !).<br>
\(E(X^2)=0+\frac12+4\times\frac14=\frac32\), donc \(V(X)=\frac32-1^2=\frac12\) et \(\sigma(X)=\sqrt{\frac12}=\frac{\sqrt2}{2}\approx0{,}707\).</li>
</ol>`},
    { niveau: 1, titre: "Espérance, variance, écart-type",
      enonce: R`La loi de \(X\) est :
<table class="tv"><tr><td>\(x_i\)</td><td>1</td><td>2</td><td>5</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}5\)</td><td>\(0{,}3\)</td><td>\(0{,}2\)</td></tr></table>
<ol><li>Calcule \(E(X)\).</li><li>Calcule \(V(X)\) avec la définition, puis vérifie avec la formule de König-Huygens.</li><li>Donne \(\sigma(X)\) arrondi au centième.</li></ol>`,
      indice: R`Définition : \(V(X)=\sum p_i(x_i-E(X))^2\).`,
      correction: R`<ol>
<li>\(E(X)=0{,}5\times1+0{,}3\times2+0{,}2\times5=0{,}5+0{,}6+1=2{,}1\).</li>
<li>Définition : \(V(X)=0{,}5\times(1-2{,}1)^2+0{,}3\times(2-2{,}1)^2+0{,}2\times(5-2{,}1)^2\)<br>
\(=0{,}5\times1{,}21+0{,}3\times0{,}01+0{,}2\times8{,}41=0{,}605+0{,}003+1{,}682=2{,}29\).<br>
König-Huygens : \(E(X^2)=0{,}5\times1+0{,}3\times4+0{,}2\times25=0{,}5+1{,}2+5=6{,}7\), et \(V(X)=6{,}7-2{,}1^2=6{,}7-4{,}41=2{,}29\) ✓.</li>
<li>\(\sigma(X)=\sqrt{2{,}29}\approx1{,}51\).</li>
</ol>`},
    { niveau: 1, titre: "Changer d'unité",
      enonce: R`Une variable aléatoire \(X\) vérifie \(E(X)=5\) et \(V(X)=2\).
<ol><li>On pose \(Y=3X-4\). Calcule \(E(Y)\), \(V(Y)\) et \(\sigma(Y)\).</li><li>On pose \(Z=10-X\). Calcule \(E(Z)\) et \(V(Z)\).</li></ol>`,
      indice: R`\(E(aX+b)=aE(X)+b\) et \(V(aX+b)=a^2V(X)\). Pour \(Z\), \(a=-1\) et \(b=10\).`,
      correction: R`<ol>
<li>\(E(Y)=3\times5-4=11\) ; \(V(Y)=3^2\times2=18\) ; \(\sigma(Y)=\sqrt{18}=3\sqrt2\approx4{,}24\) (ou \(3\times\sqrt2\)).</li>
<li>\(Z=-X+10\) : \(E(Z)=-5+10=5\) ; \(V(Z)=(-1)^2\times2=2\). La dispersion ne change pas quand on « retourne » les valeurs.</li>
</ol>`},
    { niveau: 2, titre: "Le jeu du dé",
      enonce: R`On lance un dé équilibré. Si on obtient 1, 2 ou 3, on perd 2 € ; si on obtient 4 ou 5, on gagne 1 € ; si on obtient 6, on gagne 6 €. \(X\) est le gain algébrique.
<ol><li>Donne la loi de \(X\).</li><li>Calcule \(E(X)\). Le jeu est-il favorable au joueur ?</li><li>Calcule \(V(X)\) et \(\sigma(X)\).</li><li>L'organisateur veut un jeu équitable en changeant uniquement le gain \(g\) obtenu avec un 6. Quelle valeur doit-il choisir ?</li></ol>`,
      indice: R`Avec un gain \(g\) pour le 6, \(E(X)=-1+\frac13+\frac g6\). Résous \(E(X)=0\).`,
      correction: R`<ol>
<li><table class="tv"><tr><td>\(x_i\)</td><td>\(-2\)</td><td>\(1\)</td><td>\(6\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac12\)</td><td>\(\frac13\)</td><td>\(\frac16\)</td></tr></table></li>
<li>\(E(X)=-2\times\frac12+1\times\frac13+6\times\frac16=-1+\frac13+1=\frac13\approx0{,}33\). \(E(X)&gt;0\) : le jeu est <b>favorable</b> au joueur (environ 33 centimes gagnés par partie en moyenne).</li>
<li>\(E(X^2)=4\times\frac12+1\times\frac13+36\times\frac16=2+\frac13+6=\frac{25}{3}\). \(V(X)=\frac{25}{3}-\frac19=\frac{75-1}{9}=\frac{74}{9}\approx8{,}22\), \(\sigma(X)=\sqrt{\frac{74}{9}}=\frac{\sqrt{74}}{3}\approx2{,}87\) €.</li>
<li>\(E(X)=-1+\frac13+\frac g6=0\iff\frac g6=\frac23\iff g=4\). Il faut que le 6 rapporte <b>4 €</b>.</li>
</ol>`},
    { niveau: 2, titre: "Tirages sans remise",
      enonce: R`Une urne contient 3 boules rouges et 2 boules blanches. On tire successivement deux boules <b>sans remise</b>. \(X\) est le nombre de boules rouges obtenues.
<ol><li>Construis un arbre pondéré.</li><li>Détermine la loi de \(X\).</li><li>Calcule \(E(X)\), \(V(X)\) et \(\sigma(X)\).</li></ol>`,
      indice: R`Après avoir tiré une rouge, il ne reste que 4 boules dont 2 rouges.`,
      correction: R`<ol>
<li>\(R\) : rouge, \(B\) : blanche.`
+ arbre({ A: ['R', 'B'], B: [['R', 'B'], ['R', 'B']], p: ['3/5', '2/5'], q: [['2/4', '2/4'], ['3/4', '1/4']], fin: ['RR : 6/20, X = 2', 'RB : 6/20, X = 1', 'BR : 6/20, X = 1', 'BB : 2/20, X = 0'] }) + R`</li>
<li>\(P(X=2)=\frac35\times\frac24=\frac{3}{10}\) ; \(P(X=1)=\frac35\times\frac24+\frac25\times\frac34=\frac{3}{10}+\frac{3}{10}=\frac{6}{10}\) ; \(P(X=0)=\frac25\times\frac14=\frac{1}{10}\). Total : \(1\) ✓.
<table class="tv"><tr><td>\(x_i\)</td><td>0</td><td>1</td><td>2</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}1\)</td><td>\(0{,}6\)</td><td>\(0{,}3\)</td></tr></table></li>
<li>\(E(X)=0+0{,}6+0{,}6=1{,}2\). \(E(X^2)=0+0{,}6+4\times0{,}3=1{,}8\), \(V(X)=1{,}8-1{,}44=0{,}36\), \(\sigma(X)=0{,}6\).</li>
</ol>`},
    { niveau: 2, titre: "La tombola",
      enonce: R`Une association vend 200 tickets de tombola à 2 € l'un. Parmi eux : 1 ticket gagne 100 €, 5 tickets gagnent 20 € et 20 tickets gagnent 5 €. Les autres ne gagnent rien. On achète un ticket au hasard ; \(G\) est le gain algébrique.
<ol><li>Donne la loi de \(G\).</li><li>Calcule \(E(G)\) et interprète.</li><li>Retrouve ce résultat en calculant le bénéfice total de l'association.</li></ol>`,
      indice: R`N'oublie pas de retirer le prix du ticket (2 €) à chaque lot. Il y a \(200-26=174\) tickets perdants.`,
      correction: R`<ol>
<li>Valeurs : \(100-2=98\), \(20-2=18\), \(5-2=3\) et \(-2\).
<table class="tv"><tr><td>\(g_i\)</td><td>\(-2\)</td><td>\(3\)</td><td>\(18\)</td><td>\(98\)</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(\frac{174}{200}\)</td><td>\(\frac{20}{200}\)</td><td>\(\frac{5}{200}\)</td><td>\(\frac{1}{200}\)</td></tr></table></li>
<li>\(E(G)=\dfrac{-2\times174+3\times20+18\times5+98\times1}{200}=\dfrac{-348+60+90+98}{200}=\dfrac{-100}{200}=-0{,}5\). En moyenne, un acheteur perd 50 centimes par ticket : le jeu est défavorable au joueur (c'est normal, l'association veut gagner de l'argent).</li>
<li>Recettes : \(200\times2=400\) €. Lots : \(100+5\times20+20\times5=300\) €. Bénéfice : \(100\) €, soit \(\frac{100}{200}=0{,}5\) € par ticket : c'est bien \(-E(G)\) ✓.</li>
</ol>`},
    { niveau: 2, titre: "Choisir un placement",
      enonce: R`On compare deux placements. Les gains (en €) sont modélisés par :
<table class="tv"><tr><td>\(x_i\)</td><td>0</td><td>10</td><td>20</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}2\)</td><td>\(0{,}6\)</td><td>\(0{,}2\)</td></tr></table>
<table class="tv"><tr><td>\(y_i\)</td><td>\(-20\)</td><td>10</td><td>25</td></tr><tr><td>\(P(Y=y_i)\)</td><td>\(0{,}2\)</td><td>\(0{,}4\)</td><td>\(0{,}4\)</td></tr></table>
<ol><li>Calcule \(E(X)\) et \(E(Y)\).</li><li>Calcule \(\sigma(X)\) et \(\sigma(Y)\).</li><li>Quel placement conseilles-tu à une personne prudente ? Justifie.</li></ol>`,
      indice: R`Même espérance ? Alors c'est l'écart-type (le risque) qui départage.`,
      correction: R`<ol>
<li>\(E(X)=0+6+4=10\) ; \(E(Y)=-4+4+10=10\). Même gain moyen.</li>
<li>\(V(X)=0{,}2\times(0-10)^2+0{,}6\times0+0{,}2\times(20-10)^2=20+0+20=40\), \(\sigma(X)=\sqrt{40}\approx6{,}32\) €.<br>
\(E(Y^2)=0{,}2\times400+0{,}4\times100+0{,}4\times625=80+40+250=370\), \(V(Y)=370-100=270\), \(\sigma(Y)=\sqrt{270}\approx16{,}43\) €.</li>
<li>Les deux placements rapportent en moyenne 10 €, mais \(Y\) est beaucoup plus dispersé (on peut même perdre 20 €). Une personne prudente choisira <b>le placement \(X\)</b>, moins risqué.</li>
</ol>`},
    { niveau: 3, titre: "Le lièvre et la tortue",
      enonce: R`On lance un dé équilibré. Si on obtient 6, le lièvre file à l'arrivée et gagne. Sinon, la tortue avance d'une case. La tortue gagne si elle a avancé de 4 cases avant que le 6 ne sorte. On relance le dé tant que la partie n'est pas finie.
<ol><li>Montre que la probabilité que la tortue gagne est \(\left(\frac56\right)^4\). Qui est avantagé ?</li><li>On note \(N\) le nombre de lancers de la partie. Donne la loi de \(N\) (valeurs exactes) et vérifie que la somme des probabilités vaut 1.</li><li>Calcule \(E(N)\) et interprète.</li><li>Avec combien de cases (au lieu de 4) le jeu devient-il favorable à la tortue ?</li><li>Complète ce programme qui simule une partie :
<pre><code>from random import randint

def course():
    tortue = 0
    while tortue &lt; 4:
        de = randint(1, 6)
        if ........ :
            return "lievre"
        tortue = ........
    return "tortue"</code></pre></li></ol>`,
      indice: R`La tortue gagne si les 4 premiers lancers ne donnent pas 6 (lancers indépendants). La partie dure au plus 4 lancers : \(N=4\) dès que les 3 premiers ne sont pas des 6.`,
      correction: R`<ol>
<li>La tortue gagne si et seulement si aucun des 4 premiers lancers ne donne 6. Les lancers étant indépendants : \(P(\text{tortue})=\left(\frac56\right)^4=\frac{625}{1296}\approx0{,}482\). Donc \(P(\text{lièvre})\approx0{,}518\) : le <b>lièvre</b> est (légèrement) avantagé.</li>
<li>\(N=1\) : 6 au 1<sup>er</sup> lancer : \(\frac16=\frac{36}{216}\).<br>
\(N=2\) : pas 6 puis 6 : \(\frac56\times\frac16=\frac{5}{36}=\frac{30}{216}\).<br>
\(N=3\) : \(\left(\frac56\right)^2\times\frac16=\frac{25}{216}\).<br>
\(N=4\) : les 3 premiers ne sont pas des 6 (le 4<sup>e</sup> lancer termine la partie quoi qu'il arrive) : \(\left(\frac56\right)^3=\frac{125}{216}\).<br>
Somme : \(\frac{36+30+25+125}{216}=\frac{216}{216}=1\) ✓.</li>
<li>\(E(N)=\frac{1\times36+2\times30+3\times25+4\times125}{216}=\frac{36+60+75+500}{216}=\frac{671}{216}\approx3{,}11\). En moyenne, une partie dure un peu plus de 3 lancers.</li>
<li>Avec \(n\) cases, \(P(\text{tortue})=\left(\frac56\right)^n\). \(\left(\frac56\right)^3=\frac{125}{216}\approx0{,}579&gt;0{,}5\) alors que \(\left(\frac56\right)^4\approx0{,}482&lt;0{,}5\). Le jeu est favorable à la tortue avec <b>3 cases</b> (ou moins).</li>
<li><code>if de == 6 :</code> et <code>tortue = tortue + 1</code>.</li>
</ol>`},
    { niveau: 3, titre: "La chasse aux écureuils (en photo !)",
      enonce: R`Une photographe animalière part « chasser » les écureuils avec son appareil. Elle fait au plus 3 tentatives ; chaque tentative réussit avec probabilité \(0{,}4\), indépendamment des autres, et elle s'arrête dès qu'elle a sa photo.
<ol><li>On note \(X\) le nombre de tentatives effectuées. Donne la loi de \(X\) et calcule \(E(X)\).</li><li>Quelle est la probabilité qu'elle rentre sans photo ?</li><li>Chaque tentative lui coûte 5 € (temps, transport) et une photo réussie se vend 30 €. On note \(G\) son gain algébrique. Donne la loi de \(G\) et calcule \(E(G)\).</li><li>Vérifie que \(E(G)=30\times P(\text{photo})-5E(X)\).</li></ol>`,
      indice: R`\(X=3\) dès que les deux premières tentatives échouent (que la 3<sup>e</sup> réussisse ou non). Pour \(G\), sépare le cas \(X=3\) en « 3<sup>e</sup> réussie » et « 3<sup>e</sup> ratée ».`,
      correction: R`<ol>
<li>\(P(X=1)=0{,}4\) ; \(P(X=2)=0{,}6\times0{,}4=0{,}24\) ; \(P(X=3)=0{,}6\times0{,}6=0{,}36\). Total : \(1\) ✓.<br>
\(E(X)=0{,}4+2\times0{,}24+3\times0{,}36=0{,}4+0{,}48+1{,}08=1{,}96\) tentatives en moyenne.</li>
<li>Sans photo : 3 échecs : \(0{,}6^3=0{,}216\).</li>
<li>
<ul><li>Réussite au 1<sup>er</sup> essai : \(30-5=25\), probabilité \(0{,}4\).</li><li>Au 2<sup>e</sup> : \(30-10=20\), probabilité \(0{,}24\).</li><li>Au 3<sup>e</sup> : \(30-15=15\), probabilité \(0{,}6^2\times0{,}4=0{,}144\).</li><li>Aucune : \(-15\), probabilité \(0{,}216\).</li></ul>
<table class="tv"><tr><td>\(g_i\)</td><td>\(-15\)</td><td>15</td><td>20</td><td>25</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(0{,}216\)</td><td>\(0{,}144\)</td><td>\(0{,}24\)</td><td>\(0{,}4\)</td></tr></table>
\(E(G)=-15\times0{,}216+15\times0{,}144+20\times0{,}24+25\times0{,}4=-3{,}24+2{,}16+4{,}8+10=13{,}72\) €.</li>
<li>\(P(\text{photo})=1-0{,}216=0{,}784\). \(30\times0{,}784-5\times1{,}96=23{,}52-9{,}8=13{,}72\) ✓. (Le gain est \(G=30Y-5X\) où \(Y\) vaut 1 si photo, 0 sinon : l'espérance « se partage ».)</li>
</ol>`},
    { niveau: 3, titre: "Python : variance et écart-type",
      enonce: R`On considère le programme :
<pre><code>from math import sqrt

def esperance(valeurs, probas):
    E = 0
    for i in range(len(valeurs)):
        E = E + valeurs[i] * probas[i]
    return E

def variance(valeurs, probas):
    E = esperance(valeurs, probas)
    V = 0
    for i in range(len(valeurs)):
        V = ........
    return V</code></pre>
<ol><li>Complète la ligne manquante en utilisant la définition de la variance.</li><li>Écris une fonction <code>ecart_type(valeurs, probas)</code>.</li><li>Écris une autre version de <code>variance</code> utilisant la formule de König-Huygens.</li><li>Que renvoient <code>esperance</code>, <code>variance</code> et <code>ecart_type</code> pour <code>valeurs = [0, 1, 2, 3]</code> et <code>probas = [0.1, 0.4, 0.3, 0.2]</code> ? (calcul à la main)</li><li>Ajoute au début de <code>esperance</code> un test qui affiche un message si la somme des probabilités n'est pas (environ) égale à 1.</li></ol>`,
      indice: R`\(V(X)=\sum p_i(x_i-E)^2\). Pour König-Huygens, calcule d'abord la somme des \(p_ix_i^2\).`,
      correction: R`<ol>
<li><code>V = V + probas[i] * (valeurs[i] - E)**2</code></li>
<li>
<pre><code>def ecart_type(valeurs, probas):
    return sqrt(variance(valeurs, probas))</code></pre></li>
<li>
<pre><code>def variance2(valeurs, probas):
    E = esperance(valeurs, probas)
    S = 0
    for i in range(len(valeurs)):
        S = S + probas[i] * valeurs[i]**2
    return S - E**2</code></pre></li>
<li>\(E=0\times0{,}1+1\times0{,}4+2\times0{,}3+3\times0{,}2=0{,}4+0{,}6+0{,}6=1{,}6\).<br>
\(V=0{,}1\times1{,}6^2+0{,}4\times0{,}6^2+0{,}3\times0{,}4^2+0{,}2\times1{,}4^2=0{,}256+0{,}144+0{,}048+0{,}392=0{,}84\).<br>
(Vérification : \(E(X^2)=0{,}4+1{,}2+1{,}8=3{,}4\) et \(3{,}4-2{,}56=0{,}84\) ✓.)<br>
\(\sigma=\sqrt{0{,}84}\approx0{,}917\).</li>
<li>
<pre><code>def esperance(valeurs, probas):
    if abs(sum(probas) - 1) &gt; 1e-9:
        print("Attention : la somme des probabilités ne vaut pas 1 !")
    E = 0
    for i in range(len(valeurs)):
        E = E + valeurs[i] * probas[i]
    return E</code></pre>
On compare à \(10^{-9}\) près plutôt qu'avec <code>== 1</code> à cause des arrondis des flottants.</li>
</ol>`},
    { niveau: 3, titre: "Fréquence des lettres",
      enonce: R`<ol><li>Écris une fonction Python <code>frequence(texte, lettre)</code> qui renvoie la fréquence d'apparition de <code>lettre</code> dans <code>texte</code>. Que renvoie <code>frequence("MATHEMATIQUES", "M")</code> ?</li>
<li>On tire une lettre au hasard dans le mot MATHEMATIQUES (13 lettres). Si c'est une voyelle, on gagne 2 € ; sinon on perd 1 €. On note \(X\) le gain. Donne la loi de \(X\), puis calcule \(E(X)\), \(V(X)\) et \(\sigma(X)\).</li>
<li>Complète la fonction qui simule une partie :
<pre><code>from random import randint

def tirage():
    mot = "MATHEMATIQUES"
    lettre = mot[randint(0, len(mot) - 1)]
    if lettre in "AEIOUY":
        return ........
    else:
        return ........</code></pre>
Que devrait renvoyer, environ, la moyenne de 100 000 appels à <code>tirage()</code> ?</li></ol>`,
      indice: R`Compte les voyelles : M-A-T-H-E-M-A-T-I-Q-U-E-S.`,
      correction: R`<ol>
<li>
<pre><code>def frequence(texte, lettre):
    compteur = 0
    for c in texte:
        if c == lettre:
            compteur = compteur + 1
    return compteur / len(texte)</code></pre>
Il y a 2 « M » sur 13 lettres : la fonction renvoie \(\frac{2}{13}\approx0{,}154\).</li>
<li>Voyelles : A, E, A, I, U, E, soit 6 ; consonnes : M, T, H, M, T, Q, S, soit 7.
<table class="tv"><tr><td>\(x_i\)</td><td>\(-1\)</td><td>\(2\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac{7}{13}\)</td><td>\(\frac{6}{13}\)</td></tr></table>
\(E(X)=\frac{-7+12}{13}=\frac{5}{13}\approx0{,}385\).<br>
\(E(X^2)=\frac{7\times1+6\times4}{13}=\frac{31}{13}\), donc \(V(X)=\frac{31}{13}-\frac{25}{169}=\frac{403-25}{169}=\frac{378}{169}\approx2{,}237\), et \(\sigma(X)\approx1{,}496\).</li>
<li><code>return 2</code> puis <code>return -1</code>. La moyenne de nombreuses parties approche l'espérance : environ \(0{,}385\).</li>
</ol>`}
  ],

  ds: [
    { titre: "DS n°1 — Lois, espérance, variance", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Une loi de probabilité", points: 5,
          enonce: R`La loi de \(X\) est :
<table class="tv"><tr><td>\(x_i\)</td><td>\(-3\)</td><td>\(-1\)</td><td>\(2\)</td><td>\(4\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}15\)</td><td>\(0{,}35\)</td><td>\(0{,}3\)</td><td>\(p\)</td></tr></table>
<ol><li>Calcule \(p\).</li><li>Calcule \(P(X&gt;0)\) et \(P(X\leqslant-1)\).</li><li>Calcule \(E(X)\), \(V(X)\) et \(\sigma(X)\) (arrondi au centième).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(p=1-0{,}15-0{,}35-0{,}3=0{,}2\).</li>
<li>(1 pt) \(P(X&gt;0)=0{,}3+0{,}2=0{,}5\) ; \(P(X\leqslant-1)=0{,}15+0{,}35=0{,}5\).</li>
<li>(3 pts) \(E(X)=-0{,}45-0{,}35+0{,}6+0{,}8=0{,}6\) (1 pt).<br>
\(E(X^2)=0{,}15\times9+0{,}35\times1+0{,}3\times4+0{,}2\times16=1{,}35+0{,}35+1{,}2+3{,}2=6{,}1\) ; \(V(X)=6{,}1-0{,}36=5{,}74\) (1,5 pt).<br>
\(\sigma(X)=\sqrt{5{,}74}\approx2{,}40\) (0,5 pt).</li>
</ol>`},
        { titre: "Exercice 2 — La roue", points: 6,
          enonce: R`Une roue comporte 8 secteurs identiques : 1 rouge, 3 bleus et 4 verts. Pour jouer, on mise 2 €. Si la roue s'arrête sur rouge, on reçoit 10 € ; sur bleu, on reçoit 2 € ; sur vert, rien. \(G\) est le gain algébrique du joueur.
<ol><li>Donne la loi de \(G\).</li><li>Calcule \(E(G)\). Que peux-tu dire du jeu ?</li><li>Calcule \(V(G)\) et \(\sigma(G)\).</li><li>L'organisateur veut que le joueur perde en moyenne 50 centimes par partie. Il modifie uniquement la somme \(x\) reçue sur le rouge. Détermine \(x\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Rouge : \(10-2=8\) ; bleu : \(2-2=0\) ; vert : \(-2\).
<table class="tv"><tr><td>\(g_i\)</td><td>\(-2\)</td><td>\(0\)</td><td>\(8\)</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(\frac48\)</td><td>\(\frac38\)</td><td>\(\frac18\)</td></tr></table></li>
<li>(1,5 pt) \(E(G)=-2\times\frac48+0+8\times\frac18=-1+1=0\). Le jeu est <b>équitable</b>.</li>
<li>(1,5 pt) \(V(G)=E(G^2)-0^2=4\times\frac48+64\times\frac18=2+8=10\) ; \(\sigma(G)=\sqrt{10}\approx3{,}16\) €.</li>
<li>(1,5 pt) Sur le rouge, le gain devient \(x-2\) : \(E(G)=\frac{x-2}{8}-1\). On veut \(\frac{x-2}{8}-1=-0{,}5\iff\frac{x-2}{8}=0{,}5\iff x=6\). Le rouge doit rapporter <b>6 €</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Recette d'un commerce", points: 5,
          enonce: R`Le nombre \(X\) de clients d'une boutique un jour donné vérifie \(E(X)=40\) et \(\sigma(X)=5\). Chaque client dépense 12 € et les frais fixes journaliers sont de 100 €. On note \(R=12X-100\) le bénéfice journalier.
<ol><li>Calcule \(V(X)\).</li><li>Calcule \(E(R)\) et interprète.</li><li>Calcule \(V(R)\) et \(\sigma(R)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(V(X)=\sigma(X)^2=25\).</li>
<li>(2 pts) \(E(R)=12\times40-100=380\). En moyenne, la boutique fait 380 € de bénéfice par jour.</li>
<li>(2 pts) \(V(R)=12^2\times25=144\times25=3600\) ; \(\sigma(R)=\sqrt{3600}=60\) € (ou directement \(12\times5\)).</li>
</ol>`},
        { titre: "Exercice 4 — Algorithmique", points: 4,
          enonce: R`<pre><code>def esperance(valeurs, probas):
    E = 0
    for i in range(len(valeurs)):
        E = E + valeurs[i] * probas[i]
    return E</code></pre>
<ol><li>Écris une fonction <code>variance(valeurs, probas)</code> qui utilise <code>esperance</code>.</li><li>Que renvoient <code>esperance</code> et <code>variance</code> pour <code>valeurs = [-2, 1, 5]</code> et <code>probas = [0.5, 0.3, 0.2]</code> ? Justifie par le calcul.</li></ol>`,
          correction: R`<ol>
<li>(2 pts)
<pre><code>def variance(valeurs, probas):
    E = esperance(valeurs, probas)
    V = 0
    for i in range(len(valeurs)):
        V = V + probas[i] * (valeurs[i] - E)**2
    return V</code></pre></li>
<li>(2 pts) \(E=-1+0{,}3+1=0{,}3\). \(E(X^2)=0{,}5\times4+0{,}3\times1+0{,}2\times25=2+0{,}3+5=7{,}3\), donc \(V=7{,}3-0{,}09=7{,}21\). Les fonctions renvoient environ <code>0.3</code> et <code>7.21</code>.</li>
</ol>`}
      ]},
    { titre: "DS n°2 — Jeux, assurance et simulation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Deux tirages", points: 7,
          enonce: R`Une urne contient 1 boule rouge et 3 boules noires. On tire une boule, on la remet, puis on en tire une seconde. Chaque boule rouge rapporte 5 € et chaque boule noire fait perdre 1 €. \(X\) est le gain total.
<ol><li>Construis un arbre et justifie que \(X\) prend les valeurs \(10\), \(4\) et \(-2\).</li><li>Détermine la loi de \(X\).</li><li>Calcule \(E(X)\), \(V(X)\) et \(\sigma(X)\).</li><li>Le joueur doit désormais payer une mise \(m\) pour jouer. Quelle mise rend le jeu équitable ? La variance du gain change-t-elle ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Tirages indépendants (avec remise).`
+ arbre({ A: ['R', 'N'], B: [['R', 'N'], ['R', 'N']], p: ['1/4', '3/4'], q: [['1/4', '3/4'], ['1/4', '3/4']], fin: ['RR : 1/16, X = 10', 'RN : 3/16, X = 4', 'NR : 3/16, X = 4', 'NN : 9/16, X = −2'] }) + R`
Deux rouges : \(5+5=10\) ; une de chaque : \(5-1=4\) ; deux noires : \(-1-1=-2\).</li>
<li>(1,5 pt)
<table class="tv"><tr><td>\(x_i\)</td><td>\(-2\)</td><td>\(4\)</td><td>\(10\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac{9}{16}\)</td><td>\(\frac{6}{16}\)</td><td>\(\frac{1}{16}\)</td></tr></table></li>
<li>(2,5 pts) \(E(X)=\frac{-18+24+10}{16}=\frac{16}{16}=1\).<br>
\(E(X^2)=\frac{4\times9+16\times6+100\times1}{16}=\frac{36+96+100}{16}=\frac{232}{16}=14{,}5\) ; \(V(X)=14{,}5-1=13{,}5\) ; \(\sigma(X)=\sqrt{13{,}5}\approx3{,}67\).</li>
<li>(1,5 pt) Le nouveau gain est \(Y=X-m\), \(E(Y)=1-m\) : équitable pour <b>\(m=1\) €</b>. \(V(Y)=V(X-m)=V(X)=13{,}5\) : la variance ne change pas.</li>
</ol>`},
        { titre: "Exercice 2 — L'assurance", points: 5,
          enonce: R`Une compagnie vend un contrat annuel 300 €. Sur une année, un client n'a aucun sinistre avec probabilité \(0{,}9\), un petit sinistre (coût 1 000 € pour la compagnie) avec probabilité \(0{,}08\), un gros sinistre (coût 10 000 €) avec probabilité \(0{,}02\). \(B\) est le bénéfice de la compagnie sur un contrat.
<ol><li>Donne la loi de \(B\).</li><li>Calcule \(E(B)\) et interprète pour 1 000 contrats.</li><li>Quel prix de contrat donnerait un bénéfice moyen de 50 € par contrat ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Valeurs : \(300\), \(300-1000=-700\), \(300-10000=-9700\).
<table class="tv"><tr><td>\(b_i\)</td><td>\(-9700\)</td><td>\(-700\)</td><td>\(300\)</td></tr><tr><td>\(P(B=b_i)\)</td><td>\(0{,}02\)</td><td>\(0{,}08\)</td><td>\(0{,}9\)</td></tr></table></li>
<li>(2 pts) \(E(B)=-194-56+270=20\) €. Sur 1 000 contrats, la compagnie peut espérer environ \(20\,000\) € de bénéfice.</li>
<li>(1,5 pt) Avec un prix \(p\) : \(B=p-C\) où \(C\) est le coût, avec \(E(C)=0{,}08\times1000+0{,}02\times10000=280\). \(E(B)=p-280=50\iff p=330\) €.</li>
</ol>`},
        { titre: "Exercice 3 — Degrés Celsius et Fahrenheit", points: 4,
          enonce: R`La température de midi \(X\) (en °C) dans une ville en mai a pour espérance \(20\) et pour écart-type \(3\). En degrés Fahrenheit, la température est \(F=1{,}8X+32\).
<ol><li>Calcule \(E(F)\).</li><li>Calcule \(V(X)\), \(V(F)\) et \(\sigma(F)\).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(E(F)=1{,}8\times20+32=68\) °F.</li>
<li>(2,5 pts) \(V(X)=3^2=9\) ; \(V(F)=1{,}8^2\times9=3{,}24\times9=29{,}16\) ; \(\sigma(F)=1{,}8\times3=5{,}4\) °F (le \(+32\) ne change pas la dispersion).</li>
</ol>`},
        { titre: "Exercice 4 — Simulation", points: 4,
          enonce: R`<pre><code>from random import randint

def partie():
    de = randint(1, 6)
    if de == 6:
        return 5
    elif de &gt;= 4:
        return 1
    else:
        return -2

def moyenne(n):
    s = 0
    for i in range(n):
        s = s + partie()
    return s / n</code></pre>
<ol><li>Décris en français le jeu simulé par <code>partie()</code> et donne la loi du gain \(X\).</li><li>Calcule \(E(X)\).</li><li>Que renvoie environ <code>moyenne(100000)</code> ? Pourquoi ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) On lance un dé : avec 6, on gagne 5 € ; avec 4 ou 5, on gagne 1 € ; avec 1, 2 ou 3, on perd 2 €.
<table class="tv"><tr><td>\(x_i\)</td><td>\(-2\)</td><td>\(1\)</td><td>\(5\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac12\)</td><td>\(\frac13\)</td><td>\(\frac16\)</td></tr></table></li>
<li>(1,5 pt) \(E(X)=-1+\frac13+\frac56=\frac{-6+2+5}{6}=\frac16\approx0{,}17\).</li>
<li>(1 pt) <code>moyenne(100000)</code> calcule la moyenne des gains sur 100 000 parties simulées ; pour un grand nombre de parties, elle est proche de l'espérance : environ \(0{,}17\).</li>
</ol>`}
      ]},
    { titre: "DS n°3 — Loi à paramètre, dés tétraédriques et notes ajustées", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Une loi à compléter", points: 5,
          enonce: R`Une variable aléatoire \(X\) a pour loi de probabilité, où \(a\) est un réel :
<table class="tv"><tr><td>\(x_i\)</td><td>\(-3\)</td><td>\(-1\)</td><td>\(0\)</td><td>\(2\)</td><td>\(4\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}1\)</td><td>\(a\)</td><td>\(0{,}25\)</td><td>\(2a\)</td><td>\(0{,}05\)</td></tr></table>
<ol><li>Détermine \(a\) et réécris le tableau complet.</li><li>Calcule \(P(X\geqslant0)\) et \(P(-1\leqslant X&lt;2)\). Décris par une phrase l'événement \(\{X&lt;0\}\) et donne sa probabilité.</li><li>Calcule \(E(X)\).</li><li>Calcule \(V(X)\) puis donne \(\sigma(X)\) (on donne \(\sqrt{3{,}25}\approx1{,}80\)).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) La somme des probabilités vaut 1 : \(0{,}1+a+0{,}25+2a+0{,}05=1\iff3a+0{,}4=1\iff a=0{,}2\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(-3\)</td><td>\(-1\)</td><td>\(0\)</td><td>\(2\)</td><td>\(4\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}1\)</td><td>\(0{,}2\)</td><td>\(0{,}25\)</td><td>\(0{,}4\)</td><td>\(0{,}05\)</td></tr></table></li>
<li>(1,5 pt) \(P(X\geqslant0)=0{,}25+0{,}4+0{,}05=0{,}7\) (0,5 pt).<br>
\(P(-1\leqslant X&lt;2)=P(X=-1)+P(X=0)=0{,}2+0{,}25=0{,}45\) (0,5 pt).<br>
\(\{X&lt;0\}\) est l'événement « \(X\) prend une valeur strictement négative » ; c'est le contraire de \(\{X\geqslant0\}\), donc \(P(X&lt;0)=1-0{,}7=0{,}3\) (0,5 pt).</li>
<li>(1 pt) \(E(X)=0{,}1\times(-3)+0{,}2\times(-1)+0{,}25\times0+0{,}4\times2+0{,}05\times4=-0{,}3-0{,}2+0+0{,}8+0{,}2=0{,}5\).</li>
<li>(1,5 pt) \(E(X^2)=0{,}1\times9+0{,}2\times1+0{,}25\times0+0{,}4\times4+0{,}05\times16=0{,}9+0{,}2+0+1{,}6+0{,}8=3{,}5\) (0,5 pt).<br>
Par König-Huygens : \(V(X)=E(X^2)-\big(E(X)\big)^2=3{,}5-0{,}25=3{,}25\) (0,5 pt).<br>
\(\sigma(X)=\sqrt{3{,}25}\approx1{,}80\) (0,5 pt).</li>
</ol>`},
        { titre: "Exercice 2 — Deux dés tétraédriques", points: 6,
          enonce: R`On lance deux dés équilibrés à 4 faces, numérotées de 1 à 4. On note \(X\) le <b>plus grand</b> des deux numéros obtenus (si les deux numéros sont égaux, \(X\) est ce numéro).
<ol><li>Combien y a-t-il d'issues équiprobables ? Écris l'événement \(\{X=2\}\) à l'aide de couples.</li><li>Montre que la loi de \(X\) est :
<table class="tv"><tr><td>\(x_i\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td><td>\(4\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac{1}{16}\)</td><td>\(\frac{3}{16}\)</td><td>\(\frac{5}{16}\)</td><td>\(\frac{7}{16}\)</td></tr></table></li>
<li>Calcule \(P(X\geqslant3)\), puis \(E(X)\) et \(V(X)\).</li>
<li>Un jeu consiste à payer une mise de \(m\) euros pour lancer les deux dés ; on reçoit alors \(2X\) euros. On note \(G=2X-m\) le gain algébrique.
<ol type="a"><li>Exprime \(E(G)\) en fonction de \(m\). Pour quelle mise le jeu est-il équitable ?</li><li>Calcule \(V(G)\). Dépend-elle de \(m\) ?</li></ol></li></ol>`,
          correction: R`<ol>
<li>(1 pt) Chaque dé a 4 issues, donc il y a \(4\times4=16\) couples équiprobables. \(\{X=2\}=\{(1;2);(2;1);(2;2)\}\).</li>
<li>(1,5 pt) \(\{X=1\}=\{(1;1)\}\) : 1 couple. \(\{X=2\}\) : 3 couples. \(\{X=3\}=\{(1;3);(2;3);(3;3);(3;1);(3;2)\}\) : 5 couples. \(\{X=4\}\) : les couples contenant au moins un 4, soit \(16-9=7\) couples (les 9 autres ont leurs deux numéros dans \(\{1;2;3\}\)). On divise par 16, d'où la loi annoncée ; vérification : \(\frac{1+3+5+7}{16}=1\) ✓.</li>
<li>(2 pts) \(P(X\geqslant3)=\frac{5}{16}+\frac{7}{16}=\frac{12}{16}=\frac34\) (0,5 pt).<br>
\(E(X)=\frac{1\times1+2\times3+3\times5+4\times7}{16}=\frac{1+6+15+28}{16}=\frac{50}{16}=\frac{25}{8}=3{,}125\) (0,5 pt).<br>
\(E(X^2)=\frac{1\times1+4\times3+9\times5+16\times7}{16}=\frac{1+12+45+112}{16}=\frac{170}{16}=\frac{85}{8}\), donc \(V(X)=\frac{85}{8}-\left(\frac{25}{8}\right)^2=\frac{680}{64}-\frac{625}{64}=\frac{55}{64}\) (1 pt).</li>
<li>(1,5 pt) a. \(E(G)=E(2X-m)=2E(X)-m=\frac{25}{4}-m=6{,}25-m\). Le jeu est équitable si \(E(G)=0\), c'est-à-dire pour une mise de <b>6,25 €</b> (1 pt).<br>
b. \(V(G)=2^2V(X)=4\times\frac{55}{64}=\frac{55}{16}\) : elle ne dépend pas de \(m\), car retrancher une constante ne change pas la dispersion (0,5 pt).</li>
</ol>`},
        { titre: "Exercice 3 — Ajuster des notes", points: 5,
          enonce: R`À un contrôle très difficile, la note \(X\) (sur 20) d'un élève pris au hasard vérifie \(E(X)=8\) et \(\sigma(X)=5\).
<ol><li>Le professeur envisage d'ajouter 2 points à tout le monde : \(Y=X+2\). Calcule \(E(Y)\) et \(\sigma(Y)\).</li>
<li>Il préfère finalement une transformation \(Z=aX+b\) avec \(a&gt;0\), de sorte que \(E(Z)=10\) et \(\sigma(Z)=4\).
<ol type="a"><li>Montre que \(a=0{,}8\) puis que \(b=3{,}6\).</li><li>Calcule \(V(Z)\).</li><li>Quelle note ajustée obtient un élève qui avait 20 ? et un élève qui avait 0 ?</li><li>Quelles notes initiales sont augmentées par cet ajustement ?</li></ol></li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(E(Y)=E(X)+2=10\) et \(\sigma(Y)=\sigma(X)=5\) : ajouter une constante décale la moyenne mais ne change pas la dispersion.</li>
<li>(4 pts) a. \(\sigma(Z)=|a|\,\sigma(X)=5a\) car \(a&gt;0\). Donc \(5a=4\iff a=0{,}8\). Puis \(E(Z)=0{,}8\times8+b=6{,}4+b=10\iff b=3{,}6\) (1,5 pt).<br>
b. \(V(Z)=\sigma(Z)^2=16\) (ou \(0{,}8^2\times25=0{,}64\times25=16\)) (0,5 pt).<br>
c. \(0{,}8\times20+3{,}6=19{,}6\) et \(0{,}8\times0+3{,}6=3{,}6\) : 20 devient 19,6 et 0 devient 3,6 (1 pt).<br>
d. La note \(x\) est augmentée si \(0{,}8x+3{,}6&gt;x\iff3{,}6&gt;0{,}2x\iff x&lt;18\). Toutes les notes inférieures à 18 sont augmentées (18 reste 18, les notes au-dessus baissent légèrement) (1 pt).</li>
</ol>`},
        { titre: "Exercice 4 — Algorithmique", points: 4,
          enonce: R`On représente une loi de probabilité par deux listes <code>valeurs</code> et <code>probas</code>.
<pre><code>def mystere(valeurs, probas):
    s = 0
    for i in range(len(valeurs)):
        if valeurs[i] &gt; 0:
            s = s + probas[i]
    return s</code></pre>
<ol><li>Que renvoie <code>mystere([-3, -1, 0, 2, 4], [0.1, 0.2, 0.25, 0.4, 0.05])</code> ? Que calcule cette fonction en général ?</li>
<li>Écris une fonction <code>est_une_loi(probas)</code> qui renvoie <code>True</code> si la somme des éléments de <code>probas</code> vaut 1 (à \(10^{-9}\) près, à cause des arrondis machine) et <code>False</code> sinon.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) La fonction ajoute les probabilités des valeurs strictement positives : ici \(2\) et \(4\), donc elle renvoie \(0{,}4+0{,}05=0{,}45\) (1 pt). En général, elle calcule \(P(X&gt;0)\) (1 pt).</li>
<li>(2 pts)
<pre><code>def est_une_loi(probas):
    s = 0
    for p in probas:
        s = s + p
    return abs(s - 1) &lt; 10**(-9)</code></pre>
(1 pt pour le calcul de la somme, 1 pt pour le test ; un test écrit avec <code>if</code> / <code>else</code> renvoyant <code>True</code> ou <code>False</code> est accepté.)</li>
</ol>`}
      ]},
    { titre: "DS n°4 — Jeu de cartes, contrôle qualité et salaires", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Le jeu de 32 cartes", points: 6,
          enonce: R`Un jeu de 32 cartes contient 4 as, 12 figures (rois, dames, valets) et 16 autres cartes (7, 8, 9 et 10). Pour jouer, on paie 2 € puis on tire une carte au hasard : un as rapporte 10 €, une figure rapporte 3 €, une autre carte ne rapporte rien. On note \(G\) le gain algébrique du joueur.
<ol><li>Donne la loi de \(G\).</li><li>Calcule \(E(G)\). Le jeu est-il favorable au joueur ? Interprète.</li><li>Calcule \(V(G)\) et \(\sigma(G)\) (arrondi au centième).</li><li>L'organisateur garde les mêmes lots mais modifie la mise \(m\) (en euros). Exprime \(E(G)\) en fonction de \(m\). Quelle est la plus petite mise, en nombre entier de centimes, qui rend le jeu défavorable au joueur ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) As : \(10-2=8\) ; figure : \(3-2=1\) ; autre : \(0-2=-2\). Probabilités : \(\frac{4}{32}=\frac18\), \(\frac{12}{32}=\frac38\), \(\frac{16}{32}=\frac12\).
<table class="tv"><tr><td>\(g_i\)</td><td>\(-2\)</td><td>\(1\)</td><td>\(8\)</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(\frac12\)</td><td>\(\frac38\)</td><td>\(\frac18\)</td></tr></table></li>
<li>(1,5 pt) \(E(G)=-2\times\frac12+1\times\frac38+8\times\frac18=-1+0{,}375+1=0{,}375\). \(E(G)&gt;0\) : le jeu est <b>favorable</b> au joueur, qui gagne en moyenne environ 37,5 centimes par partie sur un grand nombre de parties.</li>
<li>(1,5 pt) \(E(G^2)=4\times\frac12+1\times\frac38+64\times\frac18=2+0{,}375+8=10{,}375\) ; \(V(G)=10{,}375-0{,}375^2=10{,}375-0{,}140625=10{,}234375\) ; \(\sigma(G)=\sqrt{10{,}234375}\approx3{,}20\) €.</li>
<li>(1,5 pt) La somme reçue \(S\) vaut 10, 3 ou 0 avec \(E(S)=10\times\frac18+3\times\frac38=1{,}25+1{,}125=2{,}375\). Comme \(G=S-m\), \(E(G)=2{,}375-m\).<br>
Le jeu est défavorable si \(E(G)&lt;0\iff m&gt;2{,}375\). En centimes entiers, la plus petite mise est <b>2,38 €</b>.</li>
</ol>`},
        { titre: "Exercice 2 — Contrôle qualité", points: 6,
          enonce: R`Une usine fabrique des composants électroniques. Un composant est défectueux avec probabilité \(0{,}05\). Chaque composant passe un test :
<ul><li>s'il est défectueux, le test le rejette avec probabilité \(0{,}9\) ;</li><li>s'il est bon, le test le rejette quand même (à tort) avec probabilité \(0{,}02\).</li></ul>
Un composant rejeté fait perdre 1 € à l'usine. Un composant accepté et bon rapporte 4 €. Un composant accepté mais défectueux est renvoyé par le client et fait perdre 15 €. On note \(B\) le bénéfice (en €) réalisé sur un composant pris au hasard.
<ol><li>Construis un arbre pondéré (\(D\) : « défectueux », \(N\) : « bon » ; \(R\) : « rejeté », \(A\) : « accepté »).</li><li>Détermine la loi de \(B\).</li><li>Calcule \(E(B)\) et interprète pour une production de 10 000 composants.</li><li>Calcule \(\sigma(B)\) (arrondi au centième).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt)`
+ arbre({ A: ['D', 'N'], B: [['R', 'A'], ['R', 'A']], p: ['0,05', '0,95'], q: [['0,9', '0,1'], ['0,02', '0,98']], fin: ['D et R : 0,045 ; B = −1', 'D et A : 0,005 ; B = −15', 'N et R : 0,019 ; B = −1', 'N et A : 0,931 ; B = 4'] }) + R`
Probabilités des chemins : \(0{,}05\times0{,}9=0{,}045\) ; \(0{,}05\times0{,}1=0{,}005\) ; \(0{,}95\times0{,}02=0{,}019\) ; \(0{,}95\times0{,}98=0{,}931\).</li>
<li>(1,5 pt) \(B=-1\) correspond aux deux chemins « rejeté » : \(P(B=-1)=0{,}045+0{,}019=0{,}064\).
<table class="tv"><tr><td>\(b_i\)</td><td>\(-15\)</td><td>\(-1\)</td><td>\(4\)</td></tr><tr><td>\(P(B=b_i)\)</td><td>\(0{,}005\)</td><td>\(0{,}064\)</td><td>\(0{,}931\)</td></tr></table>
Vérification : \(0{,}005+0{,}064+0{,}931=1\) ✓.</li>
<li>(1,5 pt) \(E(B)=0{,}005\times(-15)+0{,}064\times(-1)+0{,}931\times4=-0{,}075-0{,}064+3{,}724=3{,}585\) €. Sur 10 000 composants, l'usine peut espérer un bénéfice d'environ \(10\,000\times3{,}585=35\,850\) €.</li>
<li>(1,5 pt) \(E(B^2)=0{,}005\times225+0{,}064\times1+0{,}931\times16=1{,}125+0{,}064+14{,}896=16{,}085\) ; \(V(B)=16{,}085-3{,}585^2=16{,}085-12{,}852225=3{,}232775\) ; \(\sigma(B)\approx1{,}80\) €.</li>
</ol>`},
        { titre: "Exercice 3 — Augmentation de salaire", points: 4,
          enonce: R`Dans une entreprise, le salaire mensuel \(X\) (en €) d'un employé pris au hasard vérifie \(E(X)=2100\) et \(\sigma(X)=300\). La direction hésite entre trois augmentations :
<ul><li>option A : \(+5\,\%\) pour tous, soit \(Y=1{,}05X\) ;</li><li>option B : \(+100\) € pour tous, soit \(Z=X+100\) ;</li><li>option C : \(+3\,\%\) puis \(+40\) €, soit \(W=1{,}03X+40\).</li></ul>
<ol><li>Calcule l'espérance et l'écart-type de \(Y\), \(Z\) et \(W\).</li><li>Quelle option augmente le plus le salaire moyen ? Laquelle ne creuse pas les écarts de salaires ? Justifie.</li></ol>`,
          correction: R`<ol>
<li>(3 pts, 1 pt par option) On utilise \(E(aX+b)=aE(X)+b\) et \(\sigma(aX+b)=|a|\,\sigma(X)\).<br>
A : \(E(Y)=1{,}05\times2100=2205\) € ; \(\sigma(Y)=1{,}05\times300=315\) €.<br>
B : \(E(Z)=2100+100=2200\) € ; \(\sigma(Z)=300\) €.<br>
C : \(E(W)=1{,}03\times2100+40=2163+40=2203\) € ; \(\sigma(W)=1{,}03\times300=309\) €.</li>
<li>(1 pt) L'option A donne le salaire moyen le plus élevé (2 205 €). L'option B est la seule qui ne change pas l'écart-type : ajouter la même somme à tous ne modifie pas les écarts, alors qu'un pourcentage augmente davantage les hauts salaires.</li>
</ol>`},
        { titre: "Exercice 4 — Simuler le jeu de cartes", points: 4,
          enonce: R`On veut simuler le jeu de l'exercice 1 (mise de 2 €). On numérote les cartes de 1 à 32 : les numéros 1 à 4 sont les as, 5 à 16 les figures, 17 à 32 les autres cartes.
<pre><code>from random import randint

def partie():
    carte = randint(1, 32)
    if carte &lt;= 4:
        return ...
    elif ...:
        return 1
    else:
        return ...</code></pre>
<ol><li>Recopie et complète la fonction <code>partie()</code>, qui renvoie le gain algébrique.</li><li>Écris une fonction <code>moyenne(n)</code> qui renvoie la moyenne des gains de \(n\) parties simulées.</li><li>Quelle valeur peut-on attendre pour <code>moyenne(100000)</code> ? Pourquoi ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt)
<pre><code>def partie():
    carte = randint(1, 32)
    if carte &lt;= 4:
        return 8
    elif carte &lt;= 16:
        return 1
    else:
        return -2</code></pre>
Le <code>elif</code> n'est examiné que si <code>carte &gt; 4</code>, donc <code>carte &lt;= 16</code> correspond bien aux numéros 5 à 16.</li>
<li>(1,5 pt)
<pre><code>def moyenne(n):
    s = 0
    for k in range(n):
        s = s + partie()
    return s / n</code></pre></li>
<li>(1 pt) Pour un grand nombre de parties, la moyenne des gains est proche de l'espérance : on attend environ \(0{,}375\).</li>
</ol>`}
      ]},
    { titre: "DS n°5 — Familles, écart de deux dés et basket", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Familles de trois enfants", points: 4,
          enonce: R`On considère une famille de trois enfants. On suppose que chaque enfant est une fille (F) ou un garçon (G) avec la même probabilité, et que les 8 issues (ordre de naissance pris en compte) sont équiprobables. On note \(X\) le nombre de filles.
<ol><li>Écris l'univers \(\Omega\) et l'événement \(\{X=2\}\).</li><li>Donne la loi de \(X\).</li><li>Calcule \(P(X\geqslant1)\) et interprète par une phrase.</li><li>Calcule \(E(X)\) et \(V(X)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(\Omega=\{FFF;FFG;FGF;GFF;FGG;GFG;GGF;GGG\}\) et \(\{X=2\}=\{FFG;FGF;GFF\}\).</li>
<li>(1 pt)
<table class="tv"><tr><td>\(x_i\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac18\)</td><td>\(\frac38\)</td><td>\(\frac38\)</td><td>\(\frac18\)</td></tr></table></li>
<li>(0,5 pt) \(P(X\geqslant1)=1-P(X=0)=1-\frac18=\frac78\) : la probabilité qu'une telle famille ait au moins une fille est \(0{,}875\).</li>
<li>(1,5 pt) \(E(X)=\frac{0+3+6+3}{8}=\frac{12}{8}=1{,}5\). \(E(X^2)=\frac{0+3+12+9}{8}=\frac{24}{8}=3\), donc \(V(X)=3-1{,}5^2=0{,}75\).</li>
</ol>`},
        { titre: "Exercice 2 — L'écart entre deux dés", points: 6,
          enonce: R`On lance deux dés équilibrés à six faces et on note \(X\) l'écart entre les deux numéros (le plus grand moins le plus petit ; \(X=0\) si les numéros sont égaux).
<ol><li>À l'aide d'un tableau à double entrée, détermine la loi de \(X\).</li><li>Calcule \(P(X\leqslant1)\).</li><li>Calcule \(E(X)\) (valeur exacte puis arrondi au centième).</li><li>Un forain propose : on mise 1 € ; si l'écart est 0, on reçoit 5 € ; si l'écart est 4 ou plus, on reçoit 3 € ; sinon on ne reçoit rien. On note \(G\) le gain algébrique.
<ol type="a"><li>Donne la loi de \(G\).</li><li>Le jeu est-il favorable au joueur ? Calcule aussi \(\sigma(G)\).</li></ol></li></ol>`,
          correction: R`<ol>
<li>(2 pts) Le tableau des écarts (36 cases équiprobables) contient : 6 fois 0 (la diagonale), 10 fois 1, 8 fois 2, 6 fois 3, 4 fois 4 et 2 fois 5.
<table class="tv"><tr><td>\(x_i\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td><td>\(4\)</td><td>\(5\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac{6}{36}\)</td><td>\(\frac{10}{36}\)</td><td>\(\frac{8}{36}\)</td><td>\(\frac{6}{36}\)</td><td>\(\frac{4}{36}\)</td><td>\(\frac{2}{36}\)</td></tr></table>
Vérification : \(6+10+8+6+4+2=36\) ✓.</li>
<li>(0,5 pt) \(P(X\leqslant1)=\frac{6+10}{36}=\frac{16}{36}=\frac49\approx0{,}44\).</li>
<li>(1 pt) \(E(X)=\frac{0\times6+1\times10+2\times8+3\times6+4\times4+5\times2}{36}=\frac{70}{36}=\frac{35}{18}\approx1{,}94\).</li>
<li>(2,5 pts) a. Écart 0 : gain \(5-1=4\), probabilité \(\frac{6}{36}\) ; écart 4 ou 5 : gain \(3-1=2\), probabilité \(\frac{4+2}{36}=\frac{6}{36}\) ; sinon gain \(-1\), probabilité \(\frac{24}{36}\) (1 pt).
<table class="tv"><tr><td>\(g_i\)</td><td>\(-1\)</td><td>\(2\)</td><td>\(4\)</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(\frac23\)</td><td>\(\frac16\)</td><td>\(\frac16\)</td></tr></table>
b. \(E(G)=-\frac23+\frac26+\frac46=\frac{-4+2+4}{6}=\frac13\approx0{,}33&gt;0\) : le jeu est favorable au joueur (0,75 pt).<br>
\(E(G^2)=1\times\frac23+4\times\frac16+16\times\frac16=\frac{4+4+16}{6}=4\) ; \(V(G)=4-\frac19=\frac{35}{9}\) ; \(\sigma(G)=\frac{\sqrt{35}}{3}\approx1{,}97\) € (0,75 pt).</li>
</ol>`},
        { titre: "Exercice 3 — Deux points ou trois points ?", points: 5,
          enonce: R`Une basketteuse réussit un tir à 3 points avec probabilité \(0{,}35\) et un tir à 2 points avec probabilité \(0{,}5\). On note \(T\) le nombre de points marqués sur un tir à 3 points (0 ou 3) et \(D\) le nombre de points marqués sur un tir à 2 points (0 ou 2).
<ol><li>Donne les lois de \(T\) et de \(D\).</li><li>Calcule \(E(T)\) et \(E(D)\). Quel tir rapporte le plus de points en moyenne ?</li><li>Calcule \(\sigma(T)\) et \(\sigma(D)\). Quel tir est le plus « risqué » ?</li><li>Une autre joueuse réussit ses tirs à 2 points avec probabilité \(0{,}5\) et ses tirs à 3 points avec probabilité \(p\). À partir de quelle valeur de \(p\) a-t-elle intérêt, en moyenne, à tirer à 3 points ?</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(T=3)=0{,}35\), \(P(T=0)=0{,}65\) ; \(P(D=2)=0{,}5\), \(P(D=0)=0{,}5\).</li>
<li>(1,5 pt) \(E(T)=3\times0{,}35=1{,}05\) et \(E(D)=2\times0{,}5=1\). Le tir à 3 points rapporte un peu plus en moyenne (1,05 point par tir contre 1).</li>
<li>(1,5 pt) \(E(T^2)=9\times0{,}35=3{,}15\), \(V(T)=3{,}15-1{,}05^2=2{,}0475\), \(\sigma(T)\approx1{,}43\).<br>
\(E(D^2)=4\times0{,}5=2\), \(V(D)=2-1=1\), \(\sigma(D)=1\).<br>
Le tir à 3 points a le plus grand écart-type : c'est le plus risqué (résultats plus dispersés).</li>
<li>(1 pt) Pour cette joueuse, l'espérance d'un tir à 3 points est \(3p\), celle d'un tir à 2 points est \(1\). Elle a intérêt à tirer à 3 points si \(3p&gt;1\iff p&gt;\frac13\approx0{,}333\) (soit plus d'un tir réussi sur trois).</li>
</ol>`},
        { titre: "Exercice 4 — Lire un programme", points: 5,
          enonce: R`<pre><code>from math import sqrt

def esperance(valeurs, probas):
    E = 0
    for i in range(len(valeurs)):
        E = E + valeurs[i] * probas[i]
    return E

def mystere(valeurs, probas):
    m = 0
    for i in range(len(valeurs)):
        m = m + probas[i] * valeurs[i]**2
    return m

def f(valeurs, probas):
    return mystere(valeurs, probas) - esperance(valeurs, probas)**2</code></pre>
<ol><li>Que calcule la fonction <code>mystere</code> ? Et la fonction <code>f</code> ? Cite la formule du cours utilisée.</li><li>Que renvoient <code>mystere([0, 3], [0.65, 0.35])</code> et <code>f([0, 3], [0.65, 0.35])</code> ? Justifie par le calcul.</li><li>Écris une fonction <code>ecart_type(valeurs, probas)</code> utilisant <code>f</code>.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) <code>mystere</code> calcule \(\sum p_ix_i^2=E(X^2)\) (1 pt). <code>f</code> renvoie \(E(X^2)-\big(E(X)\big)^2\), c'est-à-dire la variance \(V(X)\) d'après la formule de König-Huygens (1 pt).</li>
<li>(2 pts) C'est la loi de \(T\) de l'exercice 3. <code>mystere</code> renvoie \(0{,}65\times0+0{,}35\times9=3{,}15\) (1 pt) ; <code>esperance</code> vaut \(0{,}35\times3=1{,}05\), donc <code>f</code> renvoie \(3{,}15-1{,}05^2=3{,}15-1{,}1025=2{,}0475\) (1 pt) (à un arrondi machine près : Python affiche <code>2.0475000000000003</code>).</li>
<li>(1 pt)
<pre><code>def ecart_type(valeurs, probas):
    return sqrt(f(valeurs, probas))</code></pre></li>
</ol>`}
      ]},
    { titre: "DS n°6 — Bonbons, extension de garantie et variable centrée réduite", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Le sachet de bonbons", points: 6,
          enonce: R`Un sachet contient 6 bonbons indiscernables au toucher : 2 à la menthe (M) et 4 à la fraise (F). Léa prend un bonbon au hasard, le mange, puis en prend un second au hasard. On note \(X\) le nombre de bonbons à la menthe obtenus.
<ol><li>Construis un arbre pondéré de la situation.</li><li>Détermine la loi de \(X\).</li><li>Calcule \(E(X)\) et \(V(X)\).</li><li>Un jeu reprend cette expérience : on paie 3 € et on reçoit 4 € par bonbon à la menthe obtenu. Le gain est \(G=4X-3\). Calcule \(E(G)\) et \(V(G)\) sans donner la loi de \(G\). Le jeu est-il équitable ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Le premier bonbon est mangé : c'est un tirage <b>sans remise</b> ; au second tirage il reste 5 bonbons.`
+ arbre({ A: ['M', 'F'], B: [['M', 'F'], ['M', 'F']], p: ['2/6', '4/6'], q: [['1/5', '4/5'], ['2/5', '3/5']], fin: ['MM : 2/30, X = 2', 'MF : 8/30, X = 1', 'FM : 8/30, X = 1', 'FF : 12/30, X = 0'] }) + R`</li>
<li>(1,5 pt) \(P(X=2)=\frac26\times\frac15=\frac{2}{30}=\frac{1}{15}\) ; \(P(X=1)=\frac26\times\frac45+\frac46\times\frac25=\frac{8}{30}+\frac{8}{30}=\frac{16}{30}=\frac{8}{15}\) ; \(P(X=0)=\frac46\times\frac35=\frac{12}{30}=\frac{6}{15}\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac{6}{15}\)</td><td>\(\frac{8}{15}\)</td><td>\(\frac{1}{15}\)</td></tr></table>
Vérification : \(\frac{6+8+1}{15}=1\) ✓.</li>
<li>(1,5 pt) \(E(X)=\frac{0+8+2}{15}=\frac{10}{15}=\frac23\).<br>
\(E(X^2)=\frac{0+8+4}{15}=\frac{12}{15}=\frac45\) ; \(V(X)=\frac45-\frac49=\frac{36-20}{45}=\frac{16}{45}\).</li>
<li>(1,5 pt) \(E(G)=4E(X)-3=\frac83-3=-\frac13\approx-0{,}33\) € : le jeu n'est pas équitable, il est défavorable au joueur (qui perd environ 33 centimes par partie en moyenne).<br>
\(V(G)=4^2V(X)=16\times\frac{16}{45}=\frac{256}{45}\).</li>
</ol>`},
        { titre: "Exercice 2 — L'extension de garantie", points: 5,
          enonce: R`Un magasin vend une extension de garantie de 2 ans pour un lave-linge au prix de 60 €. Pendant ces 2 ans, on estime que :
<ul><li>avec probabilité \(0{,}85\), l'appareil ne tombe pas en panne ;</li><li>avec probabilité \(0{,}1\), il faut une réparation qui coûte 150 € ;</li><li>avec probabilité \(0{,}05\), il faut remplacer l'appareil, ce qui coûte 400 €.</li></ul>
On note \(C\) le coût des pannes (en €) pendant ces 2 ans.
<ol><li>Donne la loi de \(C\) et calcule \(E(C)\).</li><li>Un client qui n'achète pas l'extension paie lui-même les pannes. Du point de vue de l'espérance, l'extension est-elle intéressante pour lui ?</li><li>On note \(B=60-C\) le bénéfice du magasin sur une extension vendue. Calcule \(E(B)\), puis \(V(C)\), \(V(B)\) et \(\sigma(B)\).</li><li>Quel prix d'extension donnerait au magasin un bénéfice moyen de 10 € par extension ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt)
<table class="tv"><tr><td>\(c_i\)</td><td>\(0\)</td><td>\(150\)</td><td>\(400\)</td></tr><tr><td>\(P(C=c_i)\)</td><td>\(0{,}85\)</td><td>\(0{,}1\)</td><td>\(0{,}05\)</td></tr></table>
\(E(C)=0\times0{,}85+150\times0{,}1+400\times0{,}05=0+15+20=35\) €.</li>
<li>(0,5 pt) En moyenne, les pannes coûtent 35 € au client, moins que les 60 € de l'extension : en espérance, elle n'est pas intéressante pour lui (elle le protège seulement d'un coût élevé mais rare).</li>
<li>(2 pts) \(E(B)=60-E(C)=60-35=25\) € (0,5 pt).<br>
\(E(C^2)=0{,}1\times22\,500+0{,}05\times160\,000=2250+8000=10\,250\) ; \(V(C)=10\,250-35^2=10\,250-1225=9025\) (1 pt).<br>
\(B=-C+60\), donc \(V(B)=(-1)^2V(C)=9025\) et \(\sigma(B)=\sqrt{9025}=95\) € (0,5 pt).</li>
<li>(1 pt) Avec un prix \(x\), \(E(x-C)=x-35\). On veut \(x-35=10\iff x=45\) : l'extension devrait coûter <b>45 €</b>.</li>
</ol>`},
        { titre: "Exercice 3 — Centrer et réduire", points: 5,
          enonce: R`Une variable aléatoire \(X\) vérifie \(E(X)=12\) et \(V(X)=9\).
<ol><li>Calcule \(\sigma(X)\) et \(E(X^2)\).</li><li>Calcule \(E(5-2X)\), \(V(5-2X)\) et \(\sigma(5-2X)\).</li><li>Détermine les réels \(a&gt;0\) et \(b\) tels que la variable \(Z=aX+b\) vérifie \(E(Z)=0\) et \(\sigma(Z)=1\) (on dit que \(Z\) est « centrée réduite »).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(\sigma(X)=\sqrt9=3\) (0,5 pt). D'après König-Huygens, \(V(X)=E(X^2)-\big(E(X)\big)^2\), donc \(E(X^2)=V(X)+\big(E(X)\big)^2=9+144=153\) (1 pt).</li>
<li>(1,5 pt) \(E(5-2X)=-2\times12+5=-19\) ; \(V(5-2X)=(-2)^2\times9=36\) ; \(\sigma(5-2X)=|-2|\times3=6\).</li>
<li>(2 pts) \(\sigma(Z)=a\,\sigma(X)=3a\) car \(a&gt;0\) : \(3a=1\iff a=\frac13\). Puis \(E(Z)=\frac13\times12+b=4+b=0\iff b=-4\). Donc \(Z=\frac13X-4=\frac{X-12}{3}\).</li>
</ol>`},
        { titre: "Exercice 4 — Simuler les pannes", points: 4,
          enonce: R`La fonction <code>random()</code> du module <code>random</code> renvoie un nombre réel au hasard dans \([0;1[\) : pour \(0\leqslant a\leqslant b\leqslant 1\), la probabilité qu'il soit dans \([a;b[\) est \(b-a\).
<pre><code>from random import random

def cout():
    r = random()
    if r &lt; 0.05:
        return 400
    elif r &lt; 0.15:
        return 150
    else:
        return 0</code></pre>
<ol><li>Explique pourquoi <code>cout()</code> simule le coût \(C\) de l'exercice 2.</li><li>Écris une fonction <code>cout_moyen(n)</code> qui renvoie le coût moyen observé sur \(n\) appareils simulés.</li><li>Autour de quelle valeur se situe <code>cout_moyen(10000)</code> ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) La fonction renvoie 400 si \(r\in[0;0{,}05[\), avec probabilité \(0{,}05\) ; 150 si \(r\in[0{,}05;0{,}15[\), avec probabilité \(0{,}15-0{,}05=0{,}1\) ; 0 sinon, avec probabilité \(1-0{,}15=0{,}85\). C'est bien la loi de \(C\).</li>
<li>(1,5 pt)
<pre><code>def cout_moyen(n):
    s = 0
    for k in range(n):
        s = s + cout()
    return s / n</code></pre></li>
<li>(1 pt) Sur un grand nombre de simulations, la moyenne est proche de l'espérance : environ \(E(C)=35\) €.</li>
</ol>`}
      ]},
    { titre: "DS n°7 — Roulette, feux tricolores et buts marqués", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Rouge ou numéro plein ?", points: 5,
          enonce: R`Une roulette de casino comporte 37 cases équiprobables numérotées de 0 à 36 : 18 rouges, 18 noires et le 0, qui est vert. Un joueur mise 1 €.
<ul><li><b>Stratégie A</b> : il mise sur « rouge ». Si la bille tombe sur une case rouge, il récupère sa mise et gagne 1 € (gain \(+1\)) ; sinon il perd sa mise (gain \(-1\)).</li><li><b>Stratégie B</b> : il mise sur le numéro 17. Si la bille tombe sur le 17, il récupère sa mise et gagne 35 € (gain \(+35\)) ; sinon il perd sa mise (gain \(-1\)).</li></ul>
On note \(A\) et \(B\) les gains algébriques correspondants.
<ol><li>Donne les lois de \(A\) et de \(B\).</li><li>Calcule \(E(A)\) et \(E(B)\). Que constate-t-on ? Combien un joueur peut-il s'attendre à perdre sur 1 000 parties ?</li><li>Calcule \(\sigma(A)\) et \(\sigma(B)\) (arrondis au centième). Interprète la différence.</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(A=1)=\frac{18}{37}\), \(P(A=-1)=\frac{19}{37}\) (les 18 noires et le 0) ; \(P(B=35)=\frac{1}{37}\), \(P(B=-1)=\frac{36}{37}\).</li>
<li>(2 pts) \(E(A)=\frac{18-19}{37}=-\frac{1}{37}\approx-0{,}027\) et \(E(B)=\frac{35-36}{37}=-\frac{1}{37}\) (1 pt).<br>
Les deux stratégies ont la même espérance, négative : les deux jeux sont défavorables au joueur. Sur 1 000 parties, il peut s'attendre à perdre environ \(\frac{1000}{37}\approx27\) € (1 pt).</li>
<li>(2 pts) \(E(A^2)=1\), \(V(A)=1-\frac{1}{1369}=\frac{1368}{1369}\), \(\sigma(A)\approx1{,}00\) (0,5 pt).<br>
\(E(B^2)=\frac{35^2\times1+1\times36}{37}=\frac{1261}{37}\), \(V(B)=\frac{1261}{37}-\frac{1}{1369}=\frac{46\,657-1}{1369}=\frac{46\,656}{1369}\), \(\sigma(B)=\frac{216}{37}\approx5{,}84\) (1 pt).<br>
La stratégie B est beaucoup plus risquée : les résultats sont très dispersés (on perd presque toujours, mais on gagne rarement une grosse somme), alors qu'avec A les gains restent proches de la moyenne (0,5 pt).</li>
</ol>`},
        { titre: "Exercice 2 — Les feux tricolores", points: 6,
          enonce: R`Pour aller au lycée, Lucas passe deux feux. Le premier est vert avec probabilité \(0{,}6\). Les feux étant synchronisés, si le premier est vert, le second est vert avec probabilité \(0{,}7\) ; si le premier est rouge, le second est vert avec probabilité \(0{,}4\). Sans attente, le trajet dure 15 minutes et chaque feu rouge fait perdre 2 minutes.<br>
On note \(N\) le nombre de feux rouges rencontrés et \(T\) la durée du trajet en minutes.
<ol><li>Construis un arbre pondéré et détermine la loi de \(N\).</li><li>Calcule \(E(N)\) et \(V(N)\).</li><li>Justifie que \(T=2N+15\). En déduire \(E(T)\), \(V(T)\) et \(\sigma(T)\) (arrondi au centième).</li><li>Calcule \(P(T&gt;16)\) et interprète.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(V_1\), \(V_2\) : « feu vert » ; \(R_1\), \(R_2\) : « feu rouge ».`
+ arbre({ A: ['V1', 'R1'], B: [['V2', 'R2'], ['V2', 'R2']], p: ['0,6', '0,4'], q: [['0,7', '0,3'], ['0,4', '0,6']], fin: ['0,42 ; N = 0', '0,18 ; N = 1', '0,16 ; N = 1', '0,24 ; N = 2'] }) + R`
\(P(N=0)=0{,}6\times0{,}7=0{,}42\) ; \(P(N=1)=0{,}6\times0{,}3+0{,}4\times0{,}4=0{,}18+0{,}16=0{,}34\) ; \(P(N=2)=0{,}4\times0{,}6=0{,}24\).
<table class="tv"><tr><td>\(n_i\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td></tr><tr><td>\(P(N=n_i)\)</td><td>\(0{,}42\)</td><td>\(0{,}34\)</td><td>\(0{,}24\)</td></tr></table></li>
<li>(1,5 pt) \(E(N)=0\times0{,}42+1\times0{,}34+2\times0{,}24=0{,}82\). \(E(N^2)=0{,}34+4\times0{,}24=1{,}3\), \(V(N)=1{,}3-0{,}82^2=1{,}3-0{,}6724=0{,}6276\).</li>
<li>(1,5 pt) Chaque feu rouge ajoute 2 minutes aux 15 minutes de base, donc \(T=15+2N\).<br>
\(E(T)=2\times0{,}82+15=16{,}64\) min ; \(V(T)=2^2\times0{,}6276=2{,}5104\) ; \(\sigma(T)=\sqrt{2{,}5104}\approx1{,}58\) min.</li>
<li>(1 pt) \(T&gt;16\iff15+2N&gt;16\iff N\geqslant1\), donc \(P(T&gt;16)=1-0{,}42=0{,}58\) : Lucas met plus de 16 minutes (il rencontre au moins un feu rouge) dans 58 % des cas.</li>
</ol>`},
        { titre: "Exercice 3 — Les buts d'une équipe", points: 5,
          enonce: R`Le nombre \(X\) de buts marqués par une équipe de football lors d'un match suit la loi suivante, où \(a\) et \(b\) sont deux réels :
<table class="tv"><tr><td>\(x_i\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td><td>\(4\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}15\)</td><td>\(a\)</td><td>\(0{,}3\)</td><td>\(b\)</td><td>\(0{,}1\)</td></tr></table>
On sait de plus que \(E(X)=1{,}85\).
<ol><li>Montre que \(a+b=0{,}45\) et que \(a+3b=0{,}85\). En déduire \(a\) et \(b\).</li><li>Calcule la probabilité que l'équipe marque au moins deux buts.</li><li>Calcule \(V(X)\) et \(\sigma(X)\) (arrondi au centième).</li></ol>`,
          correction: R`<ol>
<li>(2,5 pts) Somme des probabilités : \(0{,}15+a+0{,}3+b+0{,}1=1\iff a+b=0{,}45\) (0,5 pt).<br>
Espérance : \(0\times0{,}15+1\times a+2\times0{,}3+3b+4\times0{,}1=1{,}85\iff a+3b+1=1{,}85\iff a+3b=0{,}85\) (1 pt).<br>
En soustrayant la première égalité à la seconde : \(2b=0{,}85-0{,}45=0{,}4\), donc \(b=0{,}2\) et \(a=0{,}45-0{,}2=0{,}25\) (1 pt).</li>
<li>(1 pt) \(P(X\geqslant2)=0{,}3+0{,}2+0{,}1=0{,}6\).</li>
<li>(1,5 pt) \(E(X^2)=0{,}25\times1+0{,}3\times4+0{,}2\times9+0{,}1\times16=0{,}25+1{,}2+1{,}8+1{,}6=4{,}85\) ; \(V(X)=4{,}85-1{,}85^2=4{,}85-3{,}4225=1{,}4275\) ; \(\sigma(X)\approx1{,}19\).</li>
</ol>`},
        { titre: "Exercice 4 — Fonctions Python", points: 4,
          enonce: R`On représente une loi par deux listes <code>valeurs</code> et <code>probas</code>.
<ol><li>Écris une fonction <code>esperance(valeurs, probas)</code> qui renvoie l'espérance.</li><li>Écris une fonction <code>proba_au_moins(valeurs, probas, s)</code> qui renvoie \(P(X\geqslant s)\).</li><li>Avec la loi de l'exercice 3, écris les deux listes et donne ce que renvoient <code>esperance(valeurs, probas)</code> et <code>proba_au_moins(valeurs, probas, 2)</code>.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt)
<pre><code>def esperance(valeurs, probas):
    E = 0
    for i in range(len(valeurs)):
        E = E + valeurs[i] * probas[i]
    return E</code></pre></li>
<li>(1,5 pt)
<pre><code>def proba_au_moins(valeurs, probas, s):
    p = 0
    for i in range(len(valeurs)):
        if valeurs[i] &gt;= s:
            p = p + probas[i]
    return p</code></pre></li>
<li>(1 pt) <code>valeurs = [0, 1, 2, 3, 4]</code> et <code>probas = [0.15, 0.25, 0.3, 0.2, 0.1]</code>. Les fonctions renvoient \(1{,}85\) et \(0{,}6\) (éventuellement à un arrondi machine près).</li>
</ol>`}
      ]},
    { titre: "DS n°8 — Jetons, urnes en deux étapes et cinéma", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Le sac de jetons", points: 5,
          enonce: R`Un sac contient 10 jetons indiscernables au toucher, portant les numéros : 1, 1, 2, 2, 2, 3, 5, 5, 7, 10. On tire un jeton au hasard et on note \(X\) son numéro.
<ol><li>Donne la loi de \(X\).</li><li>Calcule la probabilité que le numéro soit pair, puis \(P(2&lt;X\leqslant7)\).</li><li>Calcule \(E(X)\).</li><li>Calcule \(V(X)\). On donne \(\sqrt{7{,}76}\approx2{,}79\) : donne \(\sigma(X)\).</li><li>On pose \(Y=10-X\). Sans calculer la loi de \(Y\), donne \(E(Y)\) et \(\sigma(Y)\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt)
<table class="tv"><tr><td>\(x_i\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td><td>\(5\)</td><td>\(7\)</td><td>\(10\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}2\)</td><td>\(0{,}3\)</td><td>\(0{,}1\)</td><td>\(0{,}2\)</td><td>\(0{,}1\)</td><td>\(0{,}1\)</td></tr></table></li>
<li>(1 pt) Numéros pairs : 2 et 10, donc \(P(X=2)+P(X=10)=0{,}3+0{,}1=0{,}4\). \(P(2&lt;X\leqslant7)=P(X=3)+P(X=5)+P(X=7)=0{,}1+0{,}2+0{,}1=0{,}4\).</li>
<li>(1 pt) \(E(X)=0{,}2\times1+0{,}3\times2+0{,}1\times3+0{,}2\times5+0{,}1\times7+0{,}1\times10=0{,}2+0{,}6+0{,}3+1+0{,}7+1=3{,}8\).</li>
<li>(1 pt) \(E(X^2)=0{,}2\times1+0{,}3\times4+0{,}1\times9+0{,}2\times25+0{,}1\times49+0{,}1\times100=0{,}2+1{,}2+0{,}9+5+4{,}9+10=22{,}2\) ; \(V(X)=22{,}2-3{,}8^2=22{,}2-14{,}44=7{,}76\) ; \(\sigma(X)=\sqrt{7{,}76}\approx2{,}79\).</li>
<li>(1 pt) \(Y=-X+10\) : \(E(Y)=-3{,}8+10=6{,}2\) et \(\sigma(Y)=|-1|\times\sigma(X)\approx2{,}79\).</li>
</ol>`},
        { titre: "Exercice 2 — Un dé puis une urne", points: 6,
          enonce: R`On paie 4 € pour jouer. On lance un dé équilibré :
<ul><li>si on obtient 6 (événement \(S\)), on tire une boule dans l'urne U, qui contient 3 boules gagnantes et 1 perdante ;</li><li>sinon, on tire une boule dans l'urne V, qui contient 1 boule gagnante et 3 perdantes.</li></ul>
On reçoit 20 € si on tire une boule gagnante (\(W\)) de l'urne U, 2 € si on tire une boule perdante de U, 5 € si on tire une boule gagnante de V, et rien sinon. On note \(G\) le gain algébrique.
<ol><li>Construis un arbre pondéré de l'expérience.</li><li>Détermine la loi de \(G\).</li><li>Calcule \(E(G)\). Le jeu est-il favorable au joueur ?</li><li>Calcule \(P(G&gt;0)\).</li><li>Quelle mise rendrait ce jeu équitable ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) Sur l'arbre, « non S » signifie « ne pas obtenir 6 » et « non W » « tirer une boule perdante ».`
+ arbre({ A: ['S', 'non S'], B: [['W', 'non W'], ['W', 'non W']], p: ['1/6', '5/6'], q: [['3/4', '1/4'], ['1/4', '3/4']], fin: ['3/24 ; G = 16', '1/24 ; G = −2', '5/24 ; G = 1', '15/24 ; G = −4'] }) + R`</li>
<li>(1,5 pt) Gains : \(20-4=16\) ; \(2-4=-2\) ; \(5-4=1\) ; \(0-4=-4\). Probabilités : \(\frac16\times\frac34=\frac{3}{24}\), \(\frac16\times\frac14=\frac{1}{24}\), \(\frac56\times\frac14=\frac{5}{24}\), \(\frac56\times\frac34=\frac{15}{24}\).
<table class="tv"><tr><td>\(g_i\)</td><td>\(-4\)</td><td>\(-2\)</td><td>\(1\)</td><td>\(16\)</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(\frac{15}{24}\)</td><td>\(\frac{1}{24}\)</td><td>\(\frac{5}{24}\)</td><td>\(\frac{3}{24}\)</td></tr></table>
Vérification : \(15+1+5+3=24\) ✓.</li>
<li>(1,5 pt) \(E(G)=\frac{-4\times15-2\times1+1\times5+16\times3}{24}=\frac{-60-2+5+48}{24}=\frac{-9}{24}=-\frac38=-0{,}375\). Le jeu est <b>défavorable</b> : le joueur perd en moyenne 37,5 centimes par partie.</li>
<li>(0,5 pt) \(P(G&gt;0)=\frac{5}{24}+\frac{3}{24}=\frac{8}{24}=\frac13\).</li>
<li>(1 pt) La somme reçue \(R\) vérifie \(G=R-4\), donc \(E(R)=E(G)+4=4-0{,}375=3{,}625\). Avec une mise \(m\), le gain moyen est \(3{,}625-m\), nul pour \(m=3{,}625\) : la mise équitable est <b>3,625 €</b> (environ 3,63 €).</li>
</ol>`},
        { titre: "Exercice 3 — La séance de cinéma", points: 5,
          enonce: R`Le nombre \(X\) de spectateurs d'une séance dans un petit cinéma vérifie \(E(X)=120\) et \(\sigma(X)=30\). La place coûte 9 € et chaque séance coûte 400 € au cinéma. On note \(B=9X-400\) le bénéfice d'une séance.
<ol><li>Calcule \(E(B)\), \(V(B)\) et \(\sigma(B)\).</li><li>Le gérant teste un prix de 7 €. Le nombre de spectateurs \(X'\) vérifie alors \(E(X')=160\) et \(\sigma(X')=35\). Le bénéfice devient \(B'=7X'-400\). Calcule \(E(B')\) et \(\sigma(B')\).</li><li>Quel prix conseilles-tu au gérant ? Justifie à l'aide des deux critères.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) \(E(B)=9\times120-400=1080-400=680\) € (0,5 pt) ; \(V(B)=9^2\times30^2=81\times900=72\,900\) (1 pt) ; \(\sigma(B)=9\times30=270\) € (0,5 pt).</li>
<li>(2 pts) \(E(B')=7\times160-400=1120-400=720\) € (1 pt) ; \(\sigma(B')=7\times35=245\) € (1 pt).</li>
<li>(1 pt) À 7 €, le bénéfice moyen est plus élevé (720 € contre 680 €) <b>et</b> l'écart-type est plus faible (245 € contre 270 €), donc le bénéfice est aussi plus régulier. Le prix de 7 € est préférable sur les deux critères.</li>
</ol>`},
        { titre: "Exercice 4 — Simulation du jeu", points: 4,
          enonce: R`On considère le programme suivant (la fonction <code>randint(a, b)</code> renvoie un entier au hasard entre \(a\) et \(b\) inclus).
<pre><code>from random import randint

def partie():
    de = randint(1, 6)
    boule = randint(1, 4)
    if de == 6:
        if boule &lt;= 3:
            return 16
        else:
            return -2
    else:
        if boule == 1:
            return 1
        else:
            return -4</code></pre>
<ol><li>Explique pourquoi cette fonction simule une partie du jeu de l'exercice 2 (on numérote les boules de chaque urne de 1 à 4).</li><li>Écris une fonction <code>moyenne(n)</code> qui renvoie la moyenne des gains de \(n\) parties.</li><li>Un élève obtient <code>moyenne(100000)</code> \(\approx0{,}41\). Que peut-on penser de son programme ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) <code>de</code> simule le dé. Si <code>de == 6</code>, on est dans l'urne U : les boules 1, 2, 3 sont gagnantes (probabilité \(\frac34\)) et donnent \(20-4=16\), la boule 4 est perdante et donne \(2-4=-2\). Sinon, on est dans l'urne V : seule la boule 1 est gagnante (probabilité \(\frac14\)), gain \(5-4=1\), sinon \(0-4=-4\).</li>
<li>(1,5 pt)
<pre><code>def moyenne(n):
    s = 0
    for k in range(n):
        s = s + partie()
    return s / n</code></pre></li>
<li>(1 pt) Pour 100 000 parties, la moyenne doit être proche de \(E(G)=-0{,}375\). Une valeur proche de \(0{,}41\) (positive de surcroît) est très improbable : son programme contient sûrement une erreur.</li>
</ol>`}
      ]},
    { titre: "DS n°9 — QCM au hasard, prise de risque et loi donnée par une formule", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Répondre au hasard à un QCM", points: 6,
          enonce: R`Un QCM comporte 3 questions ; chacune propose 4 réponses dont une seule est juste. Un élève répond au hasard, indépendamment, à chaque question. On note \(X\) le nombre de bonnes réponses.
<ol><li>En t'aidant d'un arbre (que l'on ne demande pas de recopier en entier), justifie que \(P(X=0)=\frac{27}{64}\) et \(P(X=3)=\frac{1}{64}\), puis que \(P(X=1)=\frac{27}{64}\) et \(P(X=2)=\frac{9}{64}\).</li><li>Calcule \(E(X)\) et \(V(X)\).</li><li>Une bonne réponse rapporte 2 points et une mauvaise retire 0,5 point. On note \(N\) la note obtenue.
<ol type="a"><li>Montre que \(N=2{,}5X-1{,}5\).</li><li>En déduire \(E(N)\) et \(\sigma(N)\).</li></ol></li><li>Le professeur veut qu'un élève répondant au hasard ait une note moyenne nulle. Il garde 2 points par bonne réponse. Combien de points doit-il retirer par mauvaise réponse ?</li></ol>`,
          correction: R`<ol>
<li>(2 pts) À chaque question, la réponse est juste avec probabilité \(\frac14\) et fausse avec probabilité \(\frac34\) ; l'arbre a 3 niveaux et 8 chemins.<br>
\(\{X=0\}\) : un seul chemin (faux, faux, faux), \(P(X=0)=\left(\frac34\right)^3=\frac{27}{64}\). De même \(P(X=3)=\left(\frac14\right)^3=\frac{1}{64}\) (1 pt).<br>
\(\{X=1\}\) : 3 chemins (la bonne réponse est à la 1<sup>re</sup>, à la 2<sup>e</sup> ou à la 3<sup>e</sup> question), chacun de probabilité \(\frac14\times\frac34\times\frac34=\frac{9}{64}\), donc \(P(X=1)=\frac{27}{64}\). \(\{X=2\}\) : 3 chemins de probabilité \(\frac14\times\frac14\times\frac34=\frac{3}{64}\), donc \(P(X=2)=\frac{9}{64}\). Vérification : \(\frac{27+27+9+1}{64}=1\) ✓ (1 pt).</li>
<li>(1,5 pt) \(E(X)=\frac{0\times27+1\times27+2\times9+3\times1}{64}=\frac{48}{64}=0{,}75\). \(E(X^2)=\frac{27+4\times9+9\times1}{64}=\frac{72}{64}=1{,}125\) ; \(V(X)=1{,}125-0{,}75^2=0{,}5625\).</li>
<li>(1,5 pt) a. Avec \(X\) bonnes réponses, il y a \(3-X\) mauvaises : \(N=2X-0{,}5(3-X)=2X-1{,}5+0{,}5X=2{,}5X-1{,}5\) (0,5 pt).<br>
b. \(E(N)=2{,}5\times0{,}75-1{,}5=0{,}375\) ; \(\sigma(X)=\sqrt{0{,}5625}=0{,}75\), donc \(\sigma(N)=2{,}5\times0{,}75=1{,}875\) (1 pt).</li>
<li>(1 pt) En retirant \(k\) points par mauvaise réponse : \(N=2X-k(3-X)=(2+k)X-3k\), donc \(E(N)=0{,}75(2+k)-3k=1{,}5-2{,}25k\). \(E(N)=0\iff k=\frac{1{,}5}{2{,}25}=\frac23\) : il faut retirer \(\frac23\) de point par mauvaise réponse.</li>
</ol>`},
        { titre: "Exercice 2 — Deux jeux de même espérance", points: 5,
          enonce: R`On compare deux jeux, dont on note \(A\) et \(B\) les gains algébriques (en €).
<ul><li><b>Jeu A</b> : on lance une pièce équilibrée ; Pile fait gagner 10 €, Face fait perdre 8 €.</li><li><b>Jeu B</b> : on lance un dé équilibré ; le 1 fait perdre 4 €, les numéros 2 à 5 font gagner 1 €, le 6 fait gagner 6 €.</li></ul>
<ol><li>Donne les lois de \(A\) et de \(B\), puis calcule \(E(A)\) et \(E(B)\).</li><li>Calcule \(\sigma(A)\) et \(\sigma(B)\) (arrondi au centième).</li><li>Un joueur prudent doit-il préférer l'un des deux jeux ? Justifie.</li><li>Au jeu A, on double tous les montants (Pile : \(+20\) €, Face : \(-16\) €). Sans refaire de loi, donne l'espérance et l'écart-type du nouveau gain.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(P(A=10)=P(A=-8)=\frac12\) ; \(E(A)=5-4=1\) €.<br>
\(P(B=-4)=\frac16\), \(P(B=1)=\frac46\), \(P(B=6)=\frac16\) ; \(E(B)=\frac{-4+4+6}{6}=1\) €.</li>
<li>(2 pts) \(E(A^2)=\frac{100+64}{2}=82\), \(V(A)=82-1=81\), \(\sigma(A)=9\) € (1 pt).<br>
\(E(B^2)=\frac{16+4\times1+36}{6}=\frac{56}{6}=\frac{28}{3}\), \(V(B)=\frac{28}{3}-1=\frac{25}{3}\), \(\sigma(B)\approx2{,}89\) € (1 pt).</li>
<li>(0,5 pt) Les deux jeux ont la même espérance (1 € par partie en moyenne), mais \(\sigma(B)&lt;\sigma(A)\) : le jeu B est moins risqué, un joueur prudent le préfère.</li>
<li>(1 pt) Le nouveau gain est \(2A\) : \(E(2A)=2E(A)=2\) € et \(\sigma(2A)=2\sigma(A)=18\) €.</li>
</ol>`},
        { titre: "Exercice 3 — Une loi donnée par une formule", points: 5,
          enonce: R`Une variable aléatoire \(X\) prend les valeurs \(1\), \(2\), \(3\), \(4\) et \(5\), avec \(P(X=k)=c\times k\) pour tout \(k\in\{1;2;3;4;5\}\), où \(c\) est un réel.
<ol><li>Détermine \(c\) et donne la loi de \(X\) dans un tableau.</li><li>Calcule \(P(X\geqslant4)\) et \(P(X\neq3)\).</li><li>Calcule \(E(X)\) (valeur exacte).</li><li>Calcule \(V(X)\) (valeur exacte) et \(\sigma(X)\) (arrondi au centième).</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) \(c\times1+c\times2+c\times3+c\times4+c\times5=1\iff15c=1\iff c=\frac{1}{15}\).
<table class="tv"><tr><td>\(x_i\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td><td>\(4\)</td><td>\(5\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(\frac{1}{15}\)</td><td>\(\frac{2}{15}\)</td><td>\(\frac{3}{15}\)</td><td>\(\frac{4}{15}\)</td><td>\(\frac{5}{15}\)</td></tr></table></li>
<li>(1 pt) \(P(X\geqslant4)=\frac{4+5}{15}=\frac{9}{15}=\frac35\) ; \(P(X\neq3)=1-\frac{3}{15}=\frac{12}{15}=\frac45\).</li>
<li>(1 pt) \(E(X)=\frac{1\times1+2\times2+3\times3+4\times4+5\times5}{15}=\frac{55}{15}=\frac{11}{3}\approx3{,}67\).</li>
<li>(1,5 pt) \(E(X^2)=\frac{1^2\times1+2^2\times2+3^2\times3+4^2\times4+5^2\times5}{15}=\frac{1+8+27+64+125}{15}=\frac{225}{15}=15\) ; \(V(X)=15-\frac{121}{9}=\frac{135-121}{9}=\frac{14}{9}\) ; \(\sigma(X)=\frac{\sqrt{14}}{3}\approx1{,}25\).</li>
</ol>`},
        { titre: "Exercice 4 — Construire les listes en Python", points: 4,
          enonce: R`On dispose d'une fonction <code>esperance(valeurs, probas)</code> qui renvoie l'espérance d'une loi donnée par deux listes. On considère :
<pre><code>valeurs = []
probas = []
for k in range(1, 6):
    valeurs.append(k)
    probas.append(k / 15)
print(esperance(valeurs, probas))</code></pre>
<ol><li>Quel est le contenu des listes <code>valeurs</code> et <code>probas</code> à la fin de la boucle ? Quelle valeur est affichée ?</li><li>On considère maintenant la loi définie par \(P(X=k)=\frac{k^2}{55}\) pour \(k\in\{1;2;3;4;5\}\). Vérifie que c'est bien une loi de probabilité, puis indique la seule ligne du programme à modifier.</li></ol>`,
          correction: R`<ol>
<li>(2 pts) <code>range(1, 6)</code> parcourt \(k=1,2,3,4,5\). À la fin, <code>valeurs = [1, 2, 3, 4, 5]</code> et <code>probas</code> contient \(\frac{1}{15},\frac{2}{15},\frac{3}{15},\frac{4}{15},\frac{5}{15}\) (en valeurs décimales approchées) : c'est la loi de l'exercice 3 (1 pt). Le programme affiche \(E(X)=\frac{11}{3}\), soit environ <code>3.6666666666666665</code> (1 pt).</li>
<li>(2 pts) Les probabilités sont positives et \(\frac{1+4+9+16+25}{55}=\frac{55}{55}=1\) : c'est bien une loi (1 pt). On remplace la ligne <code>probas.append(k / 15)</code> par <code>probas.append(k**2 / 55)</code> (1 pt).</li>
</ol>`}
      ]},
    { titre: "DS n°10 — Bilan : vrai ou faux, livraisons, boulangerie et simulation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux ?", points: 4,
          enonce: R`Pour chaque affirmation, dis si elle est vraie ou fausse et justifie (une réponse non justifiée ne rapporte rien).
<ol><li>Si \(E(X)=3\) et \(V(X)=2\), alors \(E(2X-1)=5\) et \(V(2X-1)=8\).</li><li>Pour toute variable aléatoire \(X\), \(V(-X)=-V(X)\).</li><li>Le tableau suivant définit une loi de probabilité :
<table class="tv"><tr><td>\(x_i\)</td><td>\(1\)</td><td>\(2\)</td><td>\(3\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}5\)</td><td>\(0{,}4\)</td><td>\(0{,}2\)</td></tr></table></li><li>Si \(E(X)=0\), alors \(X\) prend forcément la valeur \(0\).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) <b>Vrai</b> : \(E(2X-1)=2\times3-1=5\) et \(V(2X-1)=2^2\times2=8\).</li>
<li>(1 pt) <b>Faux</b> : \(V(-X)=(-1)^2V(X)=V(X)\). Une variance est toujours positive ; par exemple si \(V(X)=2\), alors \(V(-X)=2\neq-2\).</li>
<li>(1 pt) <b>Faux</b> : \(0{,}5+0{,}4+0{,}2=1{,}1\neq1\).</li>
<li>(1 pt) <b>Faux</b> : contre-exemple, \(X\) prend les valeurs \(-1\) et \(1\) avec probabilité \(\frac12\) chacune : \(E(X)=-\frac12+\frac12=0\), mais \(X\) ne prend jamais la valeur 0.</li>
</ol>`},
        { titre: "Exercice 2 — Le service de livraison", points: 6,
          enonce: R`Une entreprise livre des colis. 30 % des colis sont envoyés en <b>express</b> (\(E\)), facturés 12 €, et les autres en <b>standard</b> (\(S\)), facturés 6 €. Un colis express arrive à l'heure (\(H\)) avec probabilité \(0{,}95\), un colis standard avec probabilité \(0{,}8\). Chaque livraison coûte 4 € à l'entreprise et, si le colis est en retard, le client est intégralement remboursé. On note \(B\) le bénéfice (en €) sur un colis pris au hasard.
<ol><li>Construis un arbre pondéré et justifie que \(B\) prend les valeurs \(8\), \(2\) et \(-4\).</li><li>Détermine la loi de \(B\).</li><li>Calcule \(E(B)\) et \(\sigma(B)\) (arrondi au centième). Interprète \(E(B)\) pour 1 000 colis.</li><li>L'entreprise veut améliorer la ponctualité de l'express uniquement : on note \(p\) la probabilité qu'un colis express arrive à l'heure. Exprime \(E(B)\) en fonction de \(p\). Peut-elle ainsi atteindre un bénéfice moyen de 3 € par colis ?</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) On note \(T\) : « en retard ».`
+ arbre({ A: ['E', 'S'], B: [['H', 'T'], ['H', 'T']], p: ['0,3', '0,7'], q: [['0,95', '0,05'], ['0,8', '0,2']], fin: ['0,285 ; B = 8', '0,015 ; B = −4', '0,56 ; B = 2', '0,14 ; B = −4'] }) + R`
Express à l'heure : \(12-4=8\) ; standard à l'heure : \(6-4=2\) ; en retard (express ou standard) : le prix est remboursé, il reste le coût, soit \(-4\).</li>
<li>(1,5 pt) \(P(B=8)=0{,}3\times0{,}95=0{,}285\) ; \(P(B=2)=0{,}7\times0{,}8=0{,}56\) ; \(P(B=-4)=0{,}3\times0{,}05+0{,}7\times0{,}2=0{,}015+0{,}14=0{,}155\).
<table class="tv"><tr><td>\(b_i\)</td><td>\(-4\)</td><td>\(2\)</td><td>\(8\)</td></tr><tr><td>\(P(B=b_i)\)</td><td>\(0{,}155\)</td><td>\(0{,}56\)</td><td>\(0{,}285\)</td></tr></table>
Vérification : \(0{,}155+0{,}56+0{,}285=1\) ✓.</li>
<li>(1,5 pt) \(E(B)=-4\times0{,}155+2\times0{,}56+8\times0{,}285=-0{,}62+1{,}12+2{,}28=2{,}78\) €. Sur 1 000 colis, le bénéfice attendu est d'environ 2 780 €.<br>
\(E(B^2)=0{,}155\times16+0{,}56\times4+0{,}285\times64=2{,}48+2{,}24+18{,}24=22{,}96\) ; \(V(B)=22{,}96-2{,}78^2=22{,}96-7{,}7284=15{,}2316\) ; \(\sigma(B)\approx3{,}90\) €.</li>
<li>(1,5 pt) Partie express : \(0{,}3\big(8p-4(1-p)\big)=0{,}3(12p-4)=3{,}6p-1{,}2\). Partie standard (inchangée) : \(0{,}56\times2+0{,}14\times(-4)=1{,}12-0{,}56=0{,}56\).<br>
Donc \(E(B)=3{,}6p-1{,}2+0{,}56=3{,}6p-0{,}64\) (on retrouve \(2{,}78\) pour \(p=0{,}95\)).<br>
Comme \(p\leqslant1\), \(E(B)\leqslant3{,}6-0{,}64=2{,}96&lt;3\) : même avec un express toujours à l'heure, l'entreprise ne peut pas atteindre 3 € de bénéfice moyen par colis de cette façon.</li>
</ol>`},
        { titre: "Exercice 3 — La boulangerie", points: 5,
          enonce: R`Une boulangerie cuit chaque jour 300 baguettes, qui lui coûtent 0,30 € chacune. Elle les vend 1,10 € et les invendues sont perdues. Le nombre \(X\) de baguettes vendues un jour donné suit la loi :
<table class="tv"><tr><td>\(x_i\)</td><td>\(150\)</td><td>\(200\)</td><td>\(250\)</td><td>\(300\)</td></tr><tr><td>\(P(X=x_i)\)</td><td>\(0{,}1\)</td><td>\(0{,}4\)</td><td>\(0{,}3\)</td><td>\(0{,}2\)</td></tr></table>
<ol><li>Calcule \(P(X\geqslant250)\) et \(E(X)\).</li><li>Calcule \(V(X)\) à l'aide de la définition (écarts à la moyenne), puis \(\sigma(X)\) (arrondi au centième).</li><li>Justifie que le bénéfice journalier est \(B=1{,}1X-90\). En déduire \(E(B)\), \(V(B)\) et \(\sigma(B)\) (arrondi au centime).</li></ol>`,
          correction: R`<ol>
<li>(1 pt) \(P(X\geqslant250)=0{,}3+0{,}2=0{,}5\). \(E(X)=150\times0{,}1+200\times0{,}4+250\times0{,}3+300\times0{,}2=15+80+75+60=230\) baguettes.</li>
<li>(2 pts) Écarts à la moyenne : \(-80\), \(-30\), \(20\), \(70\).<br>
\(V(X)=0{,}1\times6400+0{,}4\times900+0{,}3\times400+0{,}2\times4900=640+360+120+980=2100\) ; \(\sigma(X)=\sqrt{2100}\approx45{,}83\).</li>
<li>(2 pts) La recette est \(1{,}1X\) et le coût de fabrication \(300\times0{,}30=90\) €, quel que soit le nombre de ventes : \(B=1{,}1X-90\) (0,5 pt).<br>
\(E(B)=1{,}1\times230-90=253-90=163\) € (0,5 pt) ; \(V(B)=1{,}1^2\times2100=1{,}21\times2100=2541\) (0,5 pt) ; \(\sigma(B)=1{,}1\times\sqrt{2100}\approx50{,}41\) € (0,5 pt).</li>
</ol>`},
        { titre: "Exercice 4 — Le jeu des doubles", points: 5,
          enonce: R`<pre><code>from random import randint

def partie():
    a = randint(1, 6)
    b = randint(1, 6)
    if a == b:
        return 2 * a
    else:
        return -2

def moyenne(n):
    s = 0
    for i in range(n):
        s = s + partie()
    return s / n</code></pre>
<ol><li>Décris en français le jeu simulé par <code>partie()</code>, puis donne la loi du gain \(G\).</li><li>Calcule \(E(G)\).</li><li>Écris une fonction <code>frequence_gagnant(n)</code> qui simule \(n\) parties et renvoie la fréquence des parties où le gain est strictement positif. De quelle valeur cette fréquence se rapproche-t-elle quand \(n\) est grand ?</li><li>Deux appels successifs à <code>moyenne(100000)</code> donnent <code>-0.49812</code> puis <code>-0.50274</code>. Explique pourquoi les résultats diffèrent, et pourquoi ils sont proches l'un de l'autre.</li></ol>`,
          correction: R`<ol>
<li>(1,5 pt) On lance deux dés : si on obtient un double \(k\), on gagne \(2k\) € ; sinon, on perd 2 €. Chacun des 6 doubles a la probabilité \(\frac{1}{36}\) et il y a \(36-6=30\) issues qui ne sont pas des doubles.
<table class="tv"><tr><td>\(g_i\)</td><td>\(-2\)</td><td>\(2\)</td><td>\(4\)</td><td>\(6\)</td><td>\(8\)</td><td>\(10\)</td><td>\(12\)</td></tr><tr><td>\(P(G=g_i)\)</td><td>\(\frac{30}{36}\)</td><td>\(\frac{1}{36}\)</td><td>\(\frac{1}{36}\)</td><td>\(\frac{1}{36}\)</td><td>\(\frac{1}{36}\)</td><td>\(\frac{1}{36}\)</td><td>\(\frac{1}{36}\)</td></tr></table></li>
<li>(1 pt) \(E(G)=\frac{-2\times30+2+4+6+8+10+12}{36}=\frac{-60+42}{36}=-\frac{18}{36}=-0{,}5\) € : le jeu est défavorable.</li>
<li>(1,5 pt)
<pre><code>def frequence_gagnant(n):
    compteur = 0
    for i in range(n):
        if partie() &gt; 0:
            compteur = compteur + 1
    return compteur / n</code></pre>
Le gain est positif exactement quand on obtient un double, donc la fréquence se rapproche de \(P(G&gt;0)=\frac{6}{36}=\frac16\approx0{,}167\).</li>
<li>(1 pt) Chaque appel simule des parties différentes (tirages au hasard), donc les moyennes ne sont pas identiques. Mais pour un grand nombre de parties, la moyenne des gains est proche de l'espérance \(-0{,}5\) : c'est pourquoi les deux résultats en sont très proches.</li>
</ol>`}
      ]}
  ]
});
})();
