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
      ]}
  ]
});
})();
