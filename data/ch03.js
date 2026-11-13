(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 3,
  titre: "Suites numériques",
  partie: "Algèbre",
  emoji: "🔢",
  accroche: R`Si on te propose 1 000 € par jour pendant un mois, ou 1 centime le 1er jour puis le double chaque jour, tu choisis quoi ? Spoiler : la deuxième option rapporte plus de <b>10 millions d'euros</b>. Bienvenue dans le monde des suites, où l'on apprend à prévoir l'avenir terme après terme !`,

  videos: [
    { titre: "Générer une suite (explicite ou par récurrence)", recherche: "Yvan Monka générer une suite numérique explicite récurrence", duree: "≈ 10 min", resume: R`Les deux façons de définir une suite : par une formule \(u_n=f(n)\) ou par une relation \(u_{n+1}=f(u_n)\), et comment calculer les premiers termes.` },
    { titre: "Sens de variation d'une suite", recherche: "Yvan Monka sens de variation d'une suite", duree: "≈ 8 min", resume: R`Étudier le signe de \(u_{n+1}-u_n\) (ou comparer \(\dfrac{u_{n+1}}{u_n}\) à 1) pour savoir si une suite est croissante ou décroissante.` },
    { titre: "Suites et algorithmes en Python (seuil)", recherche: "Yvan Monka suite algorithme python seuil boucle while", duree: "≈ 12 min", resume: R`Calculer un terme avec une boucle <i>for</i>, chercher un seuil avec une boucle <i>while</i>, conjecturer une limite.` },
    { titre: "Suites arithmétiques : définition et terme général", recherche: "Yvan Monka suite arithmétique définition terme général", duree: "≈ 9 min", resume: R`Reconnaître une suite arithmétique, trouver sa raison et écrire \(u_n=u_0+nr\).` },
    { titre: "Somme des termes d'une suite arithmétique", recherche: "Yvan Monka somme des termes d'une suite arithmétique 1+2+...+n", duree: "≈ 9 min", resume: R`La démonstration « à la Gauss » de \(1+2+\dots+n=\dfrac{n(n+1)}{2}\) et son utilisation.` },
    { titre: "Suites géométriques : définition et terme général", recherche: "Yvan Monka suite géométrique définition terme général", duree: "≈ 9 min", resume: R`Reconnaître une suite géométrique, trouver sa raison et écrire \(v_n=v_0\times q^n\) ; lien avec les pourcentages.` },
    { titre: "Somme des termes d'une suite géométrique", recherche: "Yvan Monka somme des termes d'une suite géométrique démonstration", duree: "≈ 10 min", resume: R`La démonstration de \(1+q+\dots+q^n=\dfrac{1-q^{n+1}}{1-q}\) et des exemples de calcul.` },
    { titre: "Suite arithmético-géométrique et suite auxiliaire", recherche: "Yvan Monka suite arithmético-géométrique suite auxiliaire", duree: "≈ 12 min", resume: R`La méthode classique type bac : montrer qu'une suite auxiliaire est géométrique pour en déduire l'expression de \(u_n\).` }
  ],

  cours: [
    { titre: "1. Les suites numériques", html: R`
<div class="def"><b>Définition.</b> Une <b>suite numérique</b> \((u_n)\) associe à chaque entier naturel \(n\) un réel noté \(u_n\), appelé <b>terme de rang \(n\)</b> (ou terme d'indice \(n\)).</div>
<div class="warn"><b>Ne confonds pas</b> \(u_n\) (le terme de rang \(n\), un nombre), \((u_n)\) (la suite entière) et \(u_{n+1}\) (le terme suivant) avec \(u_n+1\) (le terme \(u_n\) augmenté de 1).</div>
<p><b>Deux façons de définir une suite :</b></p>
<ul>
<li><b>Formule explicite</b> : \(u_n=f(n)\). On calcule directement n'importe quel terme. <br>Exemple : \(u_n=n^2+1\) donne \(u_{10}=101\) sans calculer les précédents.</li>
<li><b>Relation de récurrence</b> : on donne le premier terme et une relation \(u_{n+1}=f(u_n)\). Pour calculer \(u_{10}\), il faut calculer \(u_1,u_2,\dots,u_9\) avant. <br>Exemple : \(u_0=3\) et \(u_{n+1}=2u_n-1\) donnent \(u_1=5\), \(u_2=9\), \(u_3=17\).</li>
</ul>
<div class="ex"><b>Exemple résolu.</b> Soit \(u_n=\dfrac{2n+1}{n+3}\) pour \(n\in\mathbb N\). Exprimer \(u_{n+1}\).<br>
On remplace <b>chaque</b> \(n\) par \(n+1\) : \(u_{n+1}=\dfrac{2(n+1)+1}{(n+1)+3}=\dfrac{2n+3}{n+4}\).</div>
<p><b>Plusieurs registres.</b> Une suite peut venir d'un <b>motif géométrique</b> (nombre d'allumettes pour construire \(n\) carrés alignés : \(3n+1\)), d'un <b>tableur</b> (en B3 on écrit <code>=2*B2-1</code> puis on recopie vers le bas) ou d'un <b>graphique</b> : on représente les points \((n\,;u_n)\) — des points isolés, <b>on ne les relie pas</b>.</p>
<div class="def"><b>Sens de variation.</b> La suite \((u_n)\) est
<ul><li><b>croissante</b> si pour tout \(n\), \(u_{n+1}\geqslant u_n\) ;</li>
<li><b>décroissante</b> si pour tout \(n\), \(u_{n+1}\leqslant u_n\) ;</li>
<li><b>constante</b> si pour tout \(n\), \(u_{n+1}=u_n\).</li></ul></div>
<div class="prop"><b>Méthodes pour étudier les variations.</b>
<ol><li><b>Signe de la différence</b> : on étudie le signe de \(u_{n+1}-u_n\). Si elle est positive pour tout \(n\), la suite est croissante.</li>
<li><b>Quotient</b> (si tous les termes sont <b>strictement positifs</b>) : on compare \(\dfrac{u_{n+1}}{u_n}\) à 1. Supérieur à 1 : croissante.</li>
<li><b>Fonction associée</b> : si \(u_n=f(n)\) et \(f\) est croissante sur \([0\,;+\infty[\), alors \((u_n)\) est croissante.</li></ol></div>
<div class="ex"><b>Exemple résolu.</b> \(u_n=n^2-3n\). On calcule \(u_{n+1}-u_n=(n+1)^2-3(n+1)-n^2+3n=n^2+2n+1-3n-3-n^2+3n=2n-2\).<br>
Pour \(n\geqslant 1\), \(2n-2\geqslant 0\) : la suite est croissante <b>à partir du rang 1</b>. (Et \(u_1-u_0=-2\) : elle commence par descendre.)</div>
<div class="warn"><b>Piège.</b> Pour une suite définie par récurrence, la méthode « fonction associée » ne marche <b>pas</b> : si \(u_{n+1}=f(u_n)\) avec \(f\) croissante, on ne peut rien conclure directement. Utilise la différence \(u_{n+1}-u_n\).</div>` },

    { titre: "2. Étude algorithmique et notion de limite", html: R`
<p>Python est l'outil idéal pour calculer beaucoup de termes d'un coup.</p>
<div class="ex"><b>Calculer \(u_n\)</b> pour \(u_0=3\) et \(u_{n+1}=2u_n-1\) : une boucle <b>for</b> qui applique \(n\) fois la relation.
<pre><code>def terme(n):
    u = 3
    for i in range(n):
        u = 2*u - 1
    return u

print(terme(5))   # affiche 65</code></pre></div>
<div class="ex"><b>Algorithme de seuil</b> : on cherche le plus petit \(n\) tel que \(u_n\) dépasse 1000. On ne sait pas combien de tours faire : boucle <b>while</b>.
<pre><code>def seuil(S):
    n = 0
    u = 3
    while u &lt;= S:
        u = 2*u - 1
        n = n + 1
    return n

print(seuil(1000))   # affiche 9 (u_9 = 1025)</code></pre></div>
<div class="astuce"><b>Astuce.</b> La condition du <i>while</i> est le <b>contraire</b> de ce qu'on cherche : on veut \(u_n&gt;1000\), donc on boucle <b>tant que</b> \(u\leqslant 1000\).</div>
<div class="ex"><b>Somme de termes</b> \(S=u_0+u_1+\dots+u_n\) : on ajoute chaque terme dans une variable <code>s</code>.
<pre><code>def somme(n):
    u = 3
    s = u
    for i in range(n):
        u = 2*u - 1
        s = s + u
    return s</code></pre></div>
<p><b>Suites célèbres :</b></p>
<ul>
<li><b>Factorielle</b> : \(n!=1\times2\times\dots\times n\) (avec \(0!=1\)), par récurrence \((n+1)!=(n+1)\times n!\). Exemple : \(6!=720\).</li>
<li><b>Syracuse</b> : on part d'un entier ; s'il est pair on le divise par 2, sinon on le multiplie par 3 et on ajoute 1. On conjecture qu'on finit toujours par atteindre 1 (personne n'a jamais su le démontrer !).</li>
<li><b>Fibonacci</b> : \(F_0=0\), \(F_1=1\), \(F_{n+2}=F_{n+1}+F_n\) : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…</li>
</ul>
<div class="def"><b>Notion de limite (approche intuitive).</b> Si les termes \(u_n\) deviennent aussi proches que l'on veut d'un réel \(\ell\) quand \(n\) devient grand, on dit que la suite <b>converge vers \(\ell\)</b> et on note \(\displaystyle\lim_{n\to+\infty}u_n=\ell\). Si les termes deviennent aussi grands que l'on veut, on note \(\displaystyle\lim_{n\to+\infty}u_n=+\infty\).</div>
<div class="ex"><b>Exemples.</b> \(u_n=\dfrac1{n+1}\) tend vers 0 ; \(u_n=n^2\) tend vers \(+\infty\) ; \(u_n=(-1)^n\) n'a pas de limite (elle oscille entre \(-1\) et 1).</div>
<div class="warn">En Première, on <b>conjecture</b> les limites (avec un tableau de valeurs, Python, la calculatrice), on ne les démontre pas.</div>` },

    { titre: "3. Suites arithmétiques", html: R`
<div class="def"><b>Définition.</b> Une suite \((u_n)\) est <b>arithmétique</b> s'il existe un réel \(r\), appelé <b>raison</b>, tel que pour tout \(n\) : \(u_{n+1}=u_n+r\). On passe d'un terme au suivant en <b>ajoutant toujours le même nombre</b>.</div>
<div class="prop"><b>Terme général.</b> \(u_n=u_0+nr\) et plus généralement \(u_n=u_p+(n-p)r\). <br>Par exemple \(u_n=u_1+(n-1)r\).</div>
<div class="prop"><b>Pour montrer qu'une suite est arithmétique</b>, on calcule \(u_{n+1}-u_n\) et on montre que c'est une <b>constante</b> (qui ne dépend pas de \(n\)).</div>
<div class="ex"><b>Exemple résolu.</b> \(u_n=5-2n\). Alors \(u_{n+1}-u_n=5-2(n+1)-(5-2n)=-2\). C'est constant : \((u_n)\) est arithmétique de raison \(-2\) et de premier terme \(u_0=5\).</div>
<div class="prop"><b>Variations.</b> Si \(r&gt;0\), la suite est croissante ; si \(r&lt;0\), décroissante ; si \(r=0\), constante.<br>
Graphiquement, les points \((n\,;u_n)\) sont <b>alignés</b> (sur la droite d'équation \(y=rx+u_0\)) : c'est une <b>croissance linéaire</b>, comme une augmentation d'un montant fixe chaque année.</div>
<div class="prop"><b>Somme des premiers entiers (démonstration au programme).</b> Pour tout \(n\geqslant1\) :
\[1+2+\dots+n=\frac{n(n+1)}{2}.\]
<b>Démonstration.</b> Notons \(S=1+2+\dots+n\). On l'écrit deux fois, dans les deux sens :
\[\begin{array}{rcccccc} S&amp;=&amp;1&amp;+&amp;2&amp;+\dots+&amp;n\\ S&amp;=&amp;n&amp;+&amp;(n-1)&amp;+\dots+&amp;1\end{array}\]
En additionnant colonne par colonne, chaque colonne vaut \(n+1\) et il y a \(n\) colonnes : \(2S=n(n+1)\), donc \(S=\dfrac{n(n+1)}{2}\).</div>
<div class="prop"><b>Somme de termes consécutifs d'une suite arithmétique.</b>
\[S=\text{(nombre de termes)}\times\frac{\text{premier terme}+\text{dernier terme}}{2}.\]
En particulier \(u_0+u_1+\dots+u_n=(n+1)\times\dfrac{u_0+u_n}{2}\).</div>
<div class="ex"><b>Exemple résolu.</b> \(S=3+7+11+\dots+199\). C'est une suite arithmétique de raison 4 qui part de 3. Le dernier terme : \(3+4k=199\) donne \(k=49\), il y a donc \(49+1=50\) termes. \(S=50\times\dfrac{3+199}{2}=50\times101=5050\).</div>
<div class="warn"><b>Piège n°1 :</b> le nombre de termes de \(u_0\) à \(u_n\) est \(n+1\), pas \(n\) ! De \(u_5\) à \(u_{20}\), il y a \(20-5+1=16\) termes.</div>` },

    { titre: "4. Suites géométriques", html: R`
<div class="def"><b>Définition.</b> Une suite \((v_n)\) est <b>géométrique</b> s'il existe un réel \(q\), appelé <b>raison</b>, tel que pour tout \(n\) : \(v_{n+1}=q\times v_n\). On passe d'un terme au suivant en <b>multipliant toujours par le même nombre</b>.</div>
<div class="prop"><b>Terme général.</b> \(v_n=v_0\times q^n\) et plus généralement \(v_n=v_p\times q^{n-p}\).</div>
<div class="prop"><b>Pour montrer qu'une suite est géométrique</b>, on exprime \(v_{n+1}\) en fonction de \(v_n\) et on obtient \(v_{n+1}=q\,v_n\) avec \(q\) constant (ou, si les termes ne s'annulent pas, on montre que \(\dfrac{v_{n+1}}{v_n}\) est constant).</div>
<div class="prop"><b>Pourcentages et croissance exponentielle.</b>
<ul><li>Augmenter de \(t\,\%\), c'est multiplier par \(1+\dfrac{t}{100}\) : +3 % donne \(q=1{,}03\).</li>
<li>Diminuer de \(t\,\%\), c'est multiplier par \(1-\dfrac{t}{100}\) : −20 % donne \(q=0{,}8\).</li></ul>
Une quantité qui évolue d'un même pourcentage chaque année suit une suite géométrique : c'est une <b>croissance (ou décroissance) exponentielle</b>.</div>
<div class="prop"><b>Variations</b> (pour \(v_0&gt;0\) et \(q&gt;0\)) : si \(q&gt;1\), la suite est croissante ; si \(0&lt;q&lt;1\), elle est décroissante ; si \(q=1\), constante.<br>
Si \(v_0&lt;0\), c'est l'inverse. Si \(q&lt;0\), les termes changent de signe : la suite n'est pas monotone.</div>
<div class="ex"><b>Exemple résolu.</b> Un smartphone vaut 800 € et perd 15 % de sa valeur chaque année. Sa valeur après \(n\) années est \(v_n=800\times0{,}85^n\). Après 3 ans : \(v_3=800\times0{,}85^3=491{,}30\) €. Comme \(0&lt;0{,}85&lt;1\) et \(v_0&gt;0\), la valeur diminue.</div>
<div class="prop"><b>Somme des puissances (démonstration au programme).</b> Pour \(q\neq1\) et tout \(n\in\mathbb N\) :
\[1+q+q^2+\dots+q^n=\frac{1-q^{n+1}}{1-q}.\]
<b>Démonstration.</b> Notons \(S=1+q+\dots+q^n\). Alors \(qS=q+q^2+\dots+q^{n+1}\). En soustrayant, presque tout se simplifie :
\[S-qS=1-q^{n+1},\quad\text{donc}\quad (1-q)S=1-q^{n+1}.\]
Comme \(q\neq1\), on peut diviser par \(1-q\) : \(S=\dfrac{1-q^{n+1}}{1-q}\).</div>
<div class="prop"><b>Somme de termes consécutifs d'une suite géométrique</b> (\(q\neq1\)) :
\[v_0+v_1+\dots+v_n=v_0\times\frac{1-q^{n+1}}{1-q}=\text{premier terme}\times\frac{1-q^{\text{nombre de termes}}}{1-q}.\]</div>
<div class="ex"><b>Exemple résolu.</b> \(S=2+6+18+\dots+2\times3^7\). Premier terme 2, raison 3, et de \(3^0\) à \(3^7\) il y a 8 termes. \(S=2\times\dfrac{1-3^8}{1-3}=2\times\dfrac{1-6561}{-2}=6560\).</div>
<div class="prop"><b>Limite de \(q^n\)</b> (conjecture) : si \(q&gt;1\), \(q^n\) tend vers \(+\infty\) ; si \(0&lt;q&lt;1\), \(q^n\) tend vers 0.</div>
<div class="warn"><b>Pièges.</b> \(2\times3^n\neq6^n\) (la puissance ne porte que sur 3). Et augmenter de 10 % puis baisser de 10 % ne ramène pas au départ : \(1{,}1\times0{,}9=0{,}99\).</div>
<div class="astuce"><b>Linéaire ou exponentielle ?</b> Arithmétique = on <b>ajoute</b> un montant fixe (points alignés). Géométrique = on <b>multiplie</b> par un coefficient fixe (points sur une courbe qui « décolle »). À long terme, une croissance exponentielle (\(q&gt;1\)) finit toujours par dépasser une croissance linéaire.</div>` }
  ],

  quiz: [
    { q: R`Soit \(u_n=3n-2\). Que vaut \(u_{n+1}\) ?`, choix: [R`\(3n-1\)`, R`\(3n+1\)`, R`\(3n-2+1\)`, R`\(4n-2\)`], bonne: 1, explication: R`On remplace \(n\) par \(n+1\) : \(3(n+1)-2=3n+3-2=3n+1\). Attention, \(u_n+1=3n-1\), ce n'est pas la même chose !` },
    { q: R`\(u_0=3\) et \(u_{n+1}=3u_n-4\). Que vaut \(u_2\) ?`, choix: [R`5`, R`11`, R`9`, R`13`], bonne: 1, explication: R`On calcule terme après terme : \(u_1=3\times3-4=5\), puis \(u_2=3\times5-4=11\).` },
    { q: R`Une suite arithmétique vérifie \(u_0=5\) et \(u_{10}=35\). Sa raison vaut :`, choix: [R`3`, R`3,5`, R`30`, R`7`], bonne: 0, explication: R`\(u_{10}=u_0+10r\), donc \(35=5+10r\), d'où \(10r=30\) et \(r=3\).` },
    { q: R`Un prix augmente de 4 % par an. Le coefficient multiplicateur annuel est :`, choix: [R`\(0{,}04\)`, R`\(1{,}4\)`, R`\(1{,}04\)`, R`\(0{,}96\)`], bonne: 2, explication: R`Augmenter de 4 %, c'est multiplier par \(1+\dfrac{4}{100}=1{,}04\). Le prix suit une suite géométrique de raison 1,04.` },
    { q: R`Combien vaut \(1+2+3+\dots+100\) ?`, choix: [R`5000`, R`5050`, R`10 100`, R`4950`], bonne: 1, explication: R`Avec la formule \(\dfrac{n(n+1)}{2}\) pour \(n=100\) : \(\dfrac{100\times101}{2}=5050\). C'est le calcul que le petit Gauss aurait fait de tête à 9 ans !` },
    { q: R`La suite définie par \(v_n=5\times0{,}7^n\) est :`, choix: [R`croissante`, R`décroissante`, R`constante`, R`ni croissante ni décroissante`], bonne: 1, explication: R`C'est une suite géométrique de premier terme \(v_0=5&gt;0\) et de raison \(q=0{,}7\in\,]0\,;1[\) : elle est décroissante (et tend vers 0).` },
    { q: R`Que vaut \(1+2+4+8+\dots+2^9\) ?`, choix: [R`512`, R`1024`, R`1023`, R`2047`], bonne: 2, explication: R`C'est \(1+q+\dots+q^9\) avec \(q=2\) : \(\dfrac{1-2^{10}}{1-2}=\dfrac{1-1024}{-1}=1023\).` },
    { q: R`Dans un algorithme de seuil qui cherche le premier \(n\) tel que \(u_n&gt;50\), la boucle s'écrit :`, choix: [R`<code>while u &gt; 50:</code>`, R`<code>while u &lt;= 50:</code>`, R`<code>for i in range(50):</code>`, R`<code>if u &gt; 50:</code>`], bonne: 1, explication: R`On continue <b>tant que</b> le seuil n'est pas dépassé, c'est-à-dire tant que \(u\leqslant50\). La boucle s'arrête dès que \(u&gt;50\).` }
  ],

  exercices: [
    { niveau: 1, titre: "Calculer les premiers termes",
      enonce: R`<ol><li>Soit \((u_n)\) définie pour tout \(n\in\mathbb N\) par \(u_n=n^2-3n+1\). Calcule \(u_0\), \(u_1\), \(u_2\) et \(u_5\).</li>
<li>Soit \((v_n)\) définie par \(v_0=4\) et, pour tout \(n\), \(v_{n+1}=2v_n-3\). Calcule \(v_1\), \(v_2\) et \(v_3\).</li>
<li>Pour laquelle des deux suites peut-on calculer directement le terme de rang 100 ? Calcule-le.</li></ol>`,
      indice: R`Pour \((u_n)\), remplace \(n\) par la valeur demandée. Pour \((v_n)\), chaque terme se calcule à partir du précédent.`,
      correction: R`<ol><li>\(u_0=0-0+1=1\) ; \(u_1=1-3+1=-1\) ; \(u_2=4-6+1=-1\) ; \(u_5=25-15+1=11\).</li>
<li>\(v_1=2\times4-3=5\) ; \(v_2=2\times5-3=7\) ; \(v_3=2\times7-3=11\).</li>
<li>\((u_n)\) est définie de façon <b>explicite</b> : on calcule directement \(u_{100}=100^2-3\times100+1=10\,000-300+1=9701\). Pour \((v_n)\), définie par récurrence, il faudrait calculer les 99 termes précédents (ou utiliser un programme).</li></ol>` },

    { niveau: 1, titre: "Une suite arithmétique",
      enonce: R`Soit \((u_n)\) la suite arithmétique de premier terme \(u_0=7\) et de raison \(r=-3\).
<ol><li>Calcule \(u_1\), \(u_2\) et \(u_3\).</li>
<li>Exprime \(u_n\) en fonction de \(n\), puis calcule \(u_{20}\).</li>
<li>Donne le sens de variation de \((u_n)\).</li>
<li>Le nombre \(-125\) est-il un terme de la suite ? Si oui, de quel rang ?</li></ol>`,
      indice: R`\(u_n=u_0+nr\). Pour la dernière question, résous l'équation \(u_n=-125\) et vérifie que la solution est un entier naturel.`,
      correction: R`<ol><li>On ajoute \(-3\) à chaque fois : \(u_1=4\), \(u_2=1\), \(u_3=-2\).</li>
<li>Pour une suite arithmétique, \(u_n=u_0+nr=7-3n\). Donc \(u_{20}=7-60=-53\).</li>
<li>La raison \(r=-3\) est négative, donc la suite \((u_n)\) est <b>décroissante</b>.</li>
<li>\(7-3n=-125\iff -3n=-132\iff n=44\). C'est un entier naturel, donc \(-125\) est le terme de rang 44 : \(u_{44}=-125\).</li></ol>` },

    { niveau: 1, titre: "Une suite géométrique",
      enonce: R`Soit \((v_n)\) la suite géométrique de premier terme \(v_0=5\) et de raison \(q=2\).
<ol><li>Calcule \(v_1\), \(v_2\), \(v_3\).</li>
<li>Exprime \(v_n\) en fonction de \(n\) et calcule \(v_6\).</li>
<li>Donne le sens de variation de \((v_n)\).</li>
<li>Soit \((w_n)\) la suite géométrique telle que \(w_0=64\) et \(w_{n+1}=\dfrac{w_n}{4}\). Donne sa raison, exprime \(w_n\) et calcule \(w_3\).</li></ol>`,
      indice: R`\(v_n=v_0\times q^n\). Diviser par 4, c'est multiplier par \(\dfrac14\).`,
      correction: R`<ol><li>On multiplie par 2 : \(v_1=10\), \(v_2=20\), \(v_3=40\).</li>
<li>\(v_n=v_0\times q^n=5\times2^n\), donc \(v_6=5\times64=320\).</li>
<li>\(v_0=5&gt;0\) et \(q=2&gt;1\) : la suite est <b>croissante</b>.</li>
<li>\(w_{n+1}=\dfrac14 w_n\) : \((w_n)\) est géométrique de raison \(q=\dfrac14=0{,}25\). Donc \(w_n=64\times\left(\dfrac14\right)^n\) et \(w_3=64\times\dfrac1{64}=1\).</li></ol>` },

    { niveau: 1, titre: "Arithmétique, géométrique… ou ni l'un ni l'autre ?",
      enonce: R`Pour chacune des suites suivantes (définies pour \(n\in\mathbb N\)), dis si elle est arithmétique, géométrique ou ni l'un ni l'autre. Justifie et précise la raison le cas échéant.
<ul><li>\(a_n=4-5n\)</li><li>\(b_n=3\times2^{n+1}\)</li><li>\(c_n=n^2\)</li><li>\(d_n=\dfrac{5}{3^n}\)</li></ul>`,
      indice: R`Calcule \(a_{n+1}-a_n\). Pour les autres, exprime le terme suivant en fonction du terme précédent. Pour prouver qu'une suite n'est <b>pas</b> arithmétique, un contre-exemple sur les premiers termes suffit.`,
      correction: R`<ul><li>\(a_{n+1}-a_n=4-5(n+1)-(4-5n)=-5\) : constante. \((a_n)\) est <b>arithmétique de raison \(-5\)</b> (et \(a_0=4\)).</li>
<li>\(b_{n+1}=3\times2^{n+2}=2\times\left(3\times2^{n+1}\right)=2\,b_n\) : \((b_n)\) est <b>géométrique de raison 2</b>, de premier terme \(b_0=3\times2=6\).</li>
<li>\(c_0=0\), \(c_1=1\), \(c_2=4\). \(c_1-c_0=1\) mais \(c_2-c_1=3\) : la différence n'est pas constante, donc pas arithmétique. Et \(c_1=1\) n'est pas de la forme \(q\times c_0=0\), donc pas géométrique. <b>Ni l'un ni l'autre.</b></li>
<li>\(d_n=5\times\left(\dfrac13\right)^n\), donc \(d_{n+1}=\dfrac13 d_n\) : \((d_n)\) est <b>géométrique de raison \(\dfrac13\)</b> et de premier terme \(d_0=5\).</li></ul>` },

    { niveau: 2, titre: "Étudier le sens de variation",
      enonce: R`Étudie le sens de variation de chacune des suites suivantes, définies pour \(n\in\mathbb N\).
<ol><li>\(u_n=n^2-4n+1\)</li>
<li>\(v_n=1-\dfrac{1}{n+1}\)</li>
<li>\(w_0=2\) et \(w_{n+1}=w_n+n^2+1\)</li></ol>`,
      indice: R`Dans les trois cas, étudie le signe de la différence (terme suivant) − (terme). Pour la 2, mets au même dénominateur.`,
      correction: R`<ol><li>\(u_{n+1}-u_n=(n+1)^2-4(n+1)+1-(n^2-4n+1)=n^2+2n+1-4n-4+1-n^2+4n-1=2n-3\).<br>
\(2n-3\geqslant0\iff n\geqslant1{,}5\). Donc pour \(n\geqslant2\), \(u_{n+1}\geqslant u_n\) : la suite est <b>croissante à partir du rang 2</b>. Avant, elle décroît : \(u_0=1\), \(u_1=-2\), \(u_2=-3\), puis \(u_3=-2\), \(u_4=1\)…</li>
<li>\(v_{n+1}-v_n=1-\dfrac1{n+2}-1+\dfrac1{n+1}=\dfrac1{n+1}-\dfrac1{n+2}=\dfrac{(n+2)-(n+1)}{(n+1)(n+2)}=\dfrac{1}{(n+1)(n+2)}\).<br>
Numérateur et dénominateur sont strictement positifs, donc \(v_{n+1}-v_n&gt;0\) : \((v_n)\) est <b>strictement croissante</b>. (On peut conjecturer qu'elle tend vers 1.)</li>
<li>\(w_{n+1}-w_n=n^2+1\). Or \(n^2\geqslant0\), donc \(n^2+1&gt;0\) : \((w_n)\) est <b>strictement croissante</b>.</li></ol>` },

    { niveau: 2, titre: "Python : conjecturer une limite et chercher un seuil",
      enonce: R`On considère la suite définie par \(u_0=2\) et \(u_{n+1}=0{,}5\,u_n+3\).
<ol><li>Complète la fonction Python suivante pour qu'elle renvoie \(u_n\).
<pre><code>def u(n):
    valeur = 2
    for i in range(n):
        valeur = ...
    return valeur</code></pre></li>
<li>Calcule \(u_1,\dots,u_5\). Quelle limite peux-tu conjecturer ?</li>
<li>Écris une fonction <code>seuil()</code> qui renvoie le plus petit entier \(n\) tel que \(u_n&gt;5{,}99\). Quelle valeur renvoie-t-elle ?</li></ol>`,
      indice: R`Pour le seuil, utilise une boucle <code>while</code> et un compteur <code>n</code>. Tu peux aussi remarquer que \(6-u_n\) est divisé par 2 à chaque étape.`,
      correction: R`<ol><li>La ligne manquante est <code>valeur = 0.5*valeur + 3</code>.</li>
<li>\(u_1=0{,}5\times2+3=4\) ; \(u_2=5\) ; \(u_3=5{,}5\) ; \(u_4=5{,}75\) ; \(u_5=5{,}875\).<br>
Les termes augmentent et s'approchent de 6 (l'écart à 6 est divisé par 2 à chaque fois : 4 ; 2 ; 1 ; 0,5 ; 0,25 ; 0,125). On conjecture \(\displaystyle\lim_{n\to+\infty}u_n=6\).</li>
<li><pre><code>def seuil():
    n = 0
    valeur = 2
    while valeur &lt;= 5.99:
        valeur = 0.5*valeur + 3
        n = n + 1
    return n</code></pre>
L'écart \(6-u_n\) vaut \(4\times0{,}5^n\). On a \(u_8=5{,}984375\leqslant5{,}99\) et \(u_9=5{,}9921875&gt;5{,}99\). La fonction renvoie donc <b>9</b>.</li></ol>` },

    { niveau: 2, titre: "Sommes arithmétiques : les gradins",
      enonce: R`<ol><li>Calcule \(S_1=1+2+3+\dots+200\).</li>
<li>Calcule \(S_2=5+8+11+\dots+302\).</li>
<li>Un amphithéâtre comporte 25 rangées. La première rangée a 20 places, et chaque rangée a 2 places de plus que la précédente. Combien de places la dernière rangée compte-t-elle ? Quelle est la capacité totale de l'amphithéâtre ?</li></ol>`,
      indice: R`Somme = nombre de termes × (premier + dernier) / 2. Pour \(S_2\), trouve d'abord combien il y a de termes.`,
      correction: R`<ol><li>\(S_1=\dfrac{200\times201}{2}=20\,100\).</li>
<li>Les termes forment une suite arithmétique de premier terme 5 et de raison 3 : ils s'écrivent \(5+3k\). \(5+3k=302\iff k=99\), donc \(k\) va de 0 à 99 : il y a <b>100 termes</b>.<br>
\(S_2=100\times\dfrac{5+302}{2}=100\times153{,}5=15\,350\).</li>
<li>Le nombre de places de la rangée \(n\) (pour \(n\) de 1 à 25) est \(p_n=20+2(n-1)\), suite arithmétique de raison 2. La dernière rangée compte \(p_{25}=20+2\times24=68\) places.<br>
Capacité : \(p_1+\dots+p_{25}=25\times\dfrac{20+68}{2}=25\times44=1100\) places.</li></ol>` },

    { niveau: 2, titre: "Sommes géométriques : la légende de l'échiquier",
      enonce: R`Selon la légende, l'inventeur des échecs demanda au roi 1 grain de riz sur la 1re case, 2 sur la 2e, 4 sur la 3e, et ainsi de suite en doublant à chaque case, jusqu'à la 64e.
<ol><li>Combien de grains y a-t-il sur la case \(n\) (pour \(n\) de 1 à 64) ?</li>
<li>Combien de grains y a-t-il en tout sur les 10 premières cases ?</li>
<li>Montre que le nombre total de grains sur l'échiquier est \(2^{64}-1\). Sachant qu'un grain pèse environ 0,02 g, donne un ordre de grandeur de la masse totale en tonnes (\(2^{64}\approx1{,}8\times10^{19}\)).</li>
<li>Calcule \(T=3+6+12+\dots+3\times2^9\).</li></ol>`,
      indice: R`Utilise \(1+q+\dots+q^n=\dfrac{1-q^{n+1}}{1-q}\) avec \(q=2\). Compte bien les termes : de \(2^0\) à \(2^{63}\), il y en a 64.`,
      correction: R`<ol><li>Case 1 : \(2^0=1\) ; case 2 : \(2^1\) ; … ; case \(n\) : \(2^{n-1}\) grains.</li>
<li>\(1+2+\dots+2^9=\dfrac{1-2^{10}}{1-2}=\dfrac{1-1024}{-1}=1023\) grains.</li>
<li>Total : \(1+2+\dots+2^{63}=\dfrac{1-2^{64}}{1-2}=2^{64}-1\) grains.<br>
Masse : \(1{,}8\times10^{19}\times0{,}02=3{,}6\times10^{17}\) g \(=3{,}6\times10^{11}\) tonnes, soit environ 360 milliards de tonnes (des centaines de fois la production mondiale annuelle de riz !).</li>
<li>\(T=3\times(1+2+\dots+2^9)=3\times1023=3069\).</li></ol>` },

    { niveau: 3, titre: "Le bassin : suite auxiliaire",
      enonce: R`Un bassin contient \(10\ \text{m}^3\) d'eau. Chaque jour, 20 % de l'eau s'évapore, puis on rajoute \(4\ \text{m}^3\). On note \(u_n\) le volume (en \(\text{m}^3\)) après \(n\) jours, avec \(u_0=10\).
<ol><li>Justifie que \(u_{n+1}=0{,}8\,u_n+4\) et calcule \(u_1\) et \(u_2\).</li>
<li>On pose \(v_n=u_n-20\). Montre que \((v_n)\) est géométrique ; précise sa raison et \(v_0\).</li>
<li>En déduire \(u_n\) en fonction de \(n\).</li>
<li>Étudie le sens de variation de \((u_n)\) et conjecture sa limite.</li>
<li>Écris un programme Python donnant le premier jour où le volume dépasse \(19\ \text{m}^3\), puis donne ce jour.</li></ol>`,
      indice: R`Pour la 2 : \(v_{n+1}=u_{n+1}-20=0{,}8u_n+4-20\), puis factorise par 0,8 en remarquant que \(u_n=v_n+20\).`,
      correction: R`<ol><li>Perdre 20 % revient à multiplier par 0,8, puis on ajoute 4 : \(u_{n+1}=0{,}8u_n+4\). \(u_1=0{,}8\times10+4=12\) ; \(u_2=0{,}8\times12+4=13{,}6\).</li>
<li>\(v_{n+1}=u_{n+1}-20=0{,}8u_n+4-20=0{,}8u_n-16=0{,}8(u_n-20)=0{,}8\,v_n\).<br>
Donc \((v_n)\) est géométrique de raison \(q=0{,}8\) et de premier terme \(v_0=u_0-20=-10\).</li>
<li>\(v_n=-10\times0{,}8^n\) et \(u_n=v_n+20\), donc \(u_n=20-10\times0{,}8^n\).</li>
<li>\(u_{n+1}-u_n=-10\times0{,}8^{n+1}+10\times0{,}8^n=10\times0{,}8^n(1-0{,}8)=2\times0{,}8^n&gt;0\). La suite \((u_n)\) est <b>croissante</b>.<br>
Comme \(0&lt;0{,}8&lt;1\), \(0{,}8^n\) tend vers 0, donc on conjecture que \(u_n\) tend vers <b>20</b> : le volume se stabilise vers \(20\ \text{m}^3\).</li>
<li><pre><code>def premier_jour():
    n = 0
    u = 10
    while u &lt;= 19:
        u = 0.8*u + 4
        n = n + 1
    return n</code></pre>
\(u_n&gt;19\iff 10\times0{,}8^n&lt;1\iff 0{,}8^n&lt;0{,}1\). Or \(0{,}8^{10}\approx0{,}107\) et \(0{,}8^{11}\approx0{,}086\). On a \(u_{10}\approx18{,}93\) et \(u_{11}\approx19{,}14\) : le volume dépasse \(19\ \text{m}^3\) pour la première fois le <b>11e jour</b> (le programme renvoie 11).</li></ol>` },

    { niveau: 3, titre: "TP : le remboursement d'un emprunt",
      enonce: R`Inès emprunte 5 000 € pour acheter une voiture. Chaque mois, la somme restant due augmente de 0,5 % (intérêts), puis Inès rembourse 300 €. On note \(C_n\) la somme restant due après \(n\) mois, donc \(C_0=5000\).
<ol><li>Justifie que \(C_{n+1}=1{,}005\,C_n-300\) et calcule \(C_1\) et \(C_2\) (au centime).</li>
<li>On pose \(v_n=C_n-60\,000\). Montre que \((v_n)\) est géométrique, puis que \(C_n=60\,000-55\,000\times1{,}005^n\).</li>
<li>Écris une fonction Python qui renvoie le nombre de mensualités complètes de 300 € qu'Inès versera avant que la dette restante devienne inférieure à 300 €.</li>
<li>On donne \(C_{17}\approx133{,}24\) €. Combien de mois dure le remboursement ? Quel est le montant de la dernière mensualité, et le coût total du crédit (intérêts) ?</li></ol>`,
      indice: R`Augmenter de 0,5 %, c'est multiplier par 1,005. Pour la 2, calcule \(v_{n+1}=1{,}005C_n-300-60\,000\) et factorise par 1,005.`,
      correction: R`<ol><li>La dette est multipliée par 1,005 (intérêts) puis diminuée de 300 : \(C_{n+1}=1{,}005C_n-300\).<br>
\(C_1=1{,}005\times5000-300=4725\) € ; \(C_2=1{,}005\times4725-300=4448{,}625\approx4448{,}63\) €.</li>
<li>\(v_{n+1}=C_{n+1}-60\,000=1{,}005C_n-60\,300=1{,}005\left(C_n-60\,000\right)=1{,}005\,v_n\) (car \(1{,}005\times60\,000=60\,300\)).<br>
\((v_n)\) est géométrique de raison 1,005 et \(v_0=5000-60\,000=-55\,000\). Donc \(v_n=-55\,000\times1{,}005^n\) et \(C_n=v_n+60\,000=60\,000-55\,000\times1{,}005^n\).</li>
<li><pre><code>def nb_mensualites():
    C = 5000
    n = 0
    while C &gt;= 300:
        C = 1.005*C - 300
        n = n + 1
    return n</code></pre>
Elle renvoie 17.</li>
<li>Après 17 mensualités, il reste \(C_{17}\approx133{,}24\) €. Le 18e mois, cette somme augmente de 0,5 % : \(1{,}005\times133{,}24\approx133{,}91\) €, qu'Inès rembourse en une dernière fois. Le remboursement dure donc <b>18 mois</b>, la dernière mensualité vaut environ <b>133,91 €</b>.<br>
Total versé : \(17\times300+133{,}91=5233{,}91\) €. Coût du crédit : \(5233{,}91-5000=233{,}91\) € d'intérêts.</li></ol>` },

    { niveau: 3, titre: "TP : la demi-vie d'un médicament",
      enonce: R`<b>Partie A.</b> On injecte à un patient 20 mg d'un médicament. Chaque heure, l'organisme élimine 15 % de la quantité présente. On note \(q_n\) la quantité (en mg) présente au bout de \(n\) heures.
<ol><li>Exprime \(q_n\) en fonction de \(n\).</li>
<li>La <i>demi-vie</i> est la durée au bout de laquelle la quantité a diminué de moitié. Détermine le premier nombre entier d'heures au bout duquel la quantité est inférieure ou égale à 10 mg.</li></ol>
<b>Partie B.</b> On utilise maintenant une perfusion : au départ le patient n'a pas de médicament (\(r_0=0\)), et chaque heure l'organisme élimine 15 % de la quantité tandis que la perfusion apporte 3 mg. On a donc \(r_{n+1}=0{,}85\,r_n+3\).
<ol start="3"><li>Montre que la suite \(s_n=r_n-20\) est géométrique, et déduis-en \(r_n=20-20\times0{,}85^n\).</li>
<li>Le médicament est efficace dès que la quantité atteint 18 mg. Au bout de combien d'heures (entières) est-ce le cas ? Vers quelle quantité la perfusion stabilise-t-elle le patient ?</li></ol>`,
      indice: R`Éliminer 15 %, c'est multiplier par 0,85. Pour les seuils, utilise un tableau de valeurs de la calculatrice ou une boucle <code>while</code>.`,
      correction: R`<ol><li>Chaque heure, la quantité est multipliée par 0,85 : \((q_n)\) est géométrique de raison 0,85 et \(q_n=20\times0{,}85^n\).</li>
<li>On calcule : \(q_4=20\times0{,}85^4\approx10{,}44\) mg et \(q_5=20\times0{,}85^5\approx8{,}87\) mg. La suite étant décroissante, c'est au bout de <b>5 heures</b> que la quantité passe pour la première fois sous 10 mg (la demi-vie est entre 4 h et 5 h).</li>
<li>\(s_{n+1}=r_{n+1}-20=0{,}85r_n+3-20=0{,}85r_n-17=0{,}85(r_n-20)=0{,}85\,s_n\).<br>
\((s_n)\) est géométrique de raison 0,85 et \(s_0=0-20=-20\). Donc \(s_n=-20\times0{,}85^n\) et \(r_n=s_n+20=20-20\times0{,}85^n\).</li>
<li>\(r_n\geqslant18\iff20\times0{,}85^n\leqslant2\iff0{,}85^n\leqslant0{,}1\). Or \(0{,}85^{14}\approx0{,}103\) et \(0{,}85^{15}\approx0{,}087\). On a \(r_{14}\approx17{,}94\) et \(r_{15}\approx18{,}25\) : le médicament est efficace au bout de <b>15 heures</b>.<br>
Comme \(0{,}85^n\) tend vers 0, \(r_n\) tend vers <b>20 mg</b> : la quantité se stabilise autour de 20 mg.</li></ol>` },

    { niveau: 3, titre: "Algorithmique : factorielle, Syracuse et Fibonacci",
      enonce: R`<ol><li><b>Factorielle.</b> Écris une fonction <code>fact(n)</code> qui renvoie \(n!=1\times2\times\dots\times n\). Que renvoie <code>fact(10)</code> ?</li>
<li><b>Syracuse.</b> On considère la fonction suivante :
<pre><code>def syracuse(a):
    u = a
    n = 0
    m = a
    while u != 1:
        if u % 2 == 0:
            u = u // 2
        else:
            u = 3*u + 1
        n = n + 1
        if u &gt; m:
            m = u
    return n, m</code></pre>
Écris la liste des termes obtenus à partir de \(a=7\). Que renvoie <code>syracuse(7)</code> ? Que représentent <code>n</code> et <code>m</code> ?</li>
<li><b>Fibonacci.</b> On définit \(F_0=0\), \(F_1=1\) et \(F_{n+2}=F_{n+1}+F_n\). Écris une fonction <code>fibo(n)</code> qui renvoie \(F_n\), et calcule \(F_{12}\). Calcule les quotients \(\dfrac{F_{11}}{F_{10}}\) et \(\dfrac{F_{12}}{F_{11}}\) : de quel nombre célèbre semblent-ils se rapprocher ?</li></ol>`,
      indice: R`Pour Fibonacci, il faut garder en mémoire <b>deux</b> termes consécutifs (par exemple <code>a</code> et <code>b</code>) et les mettre à jour en même temps.`,
      correction: R`<ol><li><pre><code>def fact(n):
    p = 1
    for k in range(1, n+1):
        p = p * k
    return p</code></pre>
<code>fact(10)</code> renvoie \(10!=3\,628\,800\).</li>
<li>À partir de 7 : 7 ; 22 ; 11 ; 34 ; 17 ; 52 ; 26 ; 13 ; 40 ; 20 ; 10 ; 5 ; 16 ; 8 ; 4 ; 2 ; 1.<br>
Il y a 16 étapes pour atteindre 1, et le plus grand terme est 52 : <code>syracuse(7)</code> renvoie <code>(16, 52)</code>. <code>n</code> est le « temps de vol » (nombre d'étapes pour atteindre 1) et <code>m</code> l'« altitude maximale » (plus grande valeur atteinte).</li>
<li><pre><code>def fibo(n):
    a = 0
    b = 1
    for i in range(n):
        a, b = b, a + b
    return a</code></pre>
Les termes : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144. Donc \(F_{12}=144\).<br>
\(\dfrac{F_{11}}{F_{10}}=\dfrac{89}{55}\approx1{,}6182\) et \(\dfrac{F_{12}}{F_{11}}=\dfrac{144}{89}\approx1{,}6180\). Ils semblent se rapprocher du <b>nombre d'or</b> \(\varphi=\dfrac{1+\sqrt5}{2}\approx1{,}6180\).</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Généralités et suites arithmétiques", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Questions rapides", points: 5,
          enonce: R`<ol><li>Soit \(u_n=2n^2-1\). Calcule \(u_3\) puis exprime \(u_{n+1}\) en fonction de \(n\) sous forme développée.</li>
<li>\((w_n)\) est une suite arithmétique telle que \(w_5=12\) et \(w_9=24\). Détermine sa raison \(r\) et \(w_0\).</li>
<li>Calcule \(w_0+w_1+\dots+w_9\).</li></ol>`,
          correction: R`<ol><li>\(u_3=2\times9-1=17\). <b>(0,5 pt)</b><br>\(u_{n+1}=2(n+1)^2-1=2(n^2+2n+1)-1=2n^2+4n+1\). <b>(1 pt)</b></li>
<li>\(w_9=w_5+4r\) donc \(24=12+4r\), d'où \(r=3\). <b>(1 pt)</b><br>\(w_5=w_0+5r\) donc \(w_0=12-15=-3\). <b>(1 pt)</b></li>
<li>\(w_9=24\), et de \(w_0\) à \(w_9\) il y a 10 termes : \(S=10\times\dfrac{-3+24}{2}=10\times10{,}5=105\). <b>(1,5 pt : nombre de termes 0,5 ; formule 0,5 ; résultat 0,5)</b></li></ol>` },
        { titre: "Exercice 2 — Sens de variation", points: 5,
          enonce: R`<ol><li>Soit \(u_n=n^2-10n+3\) pour \(n\in\mathbb N\). Calcule \(u_{n+1}-u_n\), puis étudie le sens de variation de \((u_n)\). Quel est le plus petit terme de la suite ?</li>
<li>Soit \(v_n=\dfrac{3n}{n+1}\) pour \(n\in\mathbb N\). Montre que \(v_{n+1}-v_n=\dfrac{3}{(n+1)(n+2)}\) et conclus.</li></ol>`,
          correction: R`<ol><li>\(u_{n+1}-u_n=(n+1)^2-10(n+1)+3-n^2+10n-3=n^2+2n+1-10n-10-n^2+10n=2n-9\). <b>(1 pt)</b><br>
\(2n-9\geqslant0\iff n\geqslant4{,}5\). Donc \(u_{n+1}&lt;u_n\) pour \(n\leqslant4\) et \(u_{n+1}&gt;u_n\) pour \(n\geqslant5\) : la suite est décroissante jusqu'à \(u_5\) (\(u_0&gt;u_1&gt;\dots&gt;u_5\)), puis croissante à partir du rang 5. <b>(1 pt)</b><br>
Le plus petit terme est \(u_5=25-50+3=-22\). <b>(0,5 pt)</b></li>
<li>\(v_{n+1}-v_n=\dfrac{3(n+1)}{n+2}-\dfrac{3n}{n+1}=\dfrac{3(n+1)^2-3n(n+2)}{(n+1)(n+2)}=\dfrac{3n^2+6n+3-3n^2-6n}{(n+1)(n+2)}=\dfrac{3}{(n+1)(n+2)}\). <b>(1,5 pt)</b><br>
Pour \(n\in\mathbb N\), \(n+1&gt;0\) et \(n+2&gt;0\), donc \(v_{n+1}-v_n&gt;0\) : \((v_n)\) est strictement croissante. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Algorithme", points: 5,
          enonce: R`On considère la suite \(u_0=3\), \(u_{n+1}=2u_n-1\), et la fonction Python :
<pre><code>def mystere():
    n = 0
    u = 3
    while u &lt; 1000:
        u = 2*u - 1
        n = n + 1
    return n</code></pre>
<ol><li>Calcule \(u_1\), \(u_2\), \(u_3\), \(u_4\).</li>
<li>Conjecture une expression de \(u_n\) en fonction de \(n\) (indice : compare \(u_n-1\) aux puissances de 2), et vérifie-la en montrant que la suite \(v_n=u_n-1\) est géométrique.</li>
<li>Que renvoie <code>mystere()</code> ? Explique ce que ce nombre représente.</li></ol>`,
          correction: R`<ol><li>\(u_1=5\), \(u_2=9\), \(u_3=17\), \(u_4=33\). <b>(1 pt)</b></li>
<li>\(u_n-1\) vaut 2, 4, 8, 16, 32 : on conjecture \(u_n=2^{n+1}+1\). <b>(0,5 pt)</b><br>
\(v_{n+1}=u_{n+1}-1=2u_n-2=2(u_n-1)=2v_n\) : \((v_n)\) est géométrique de raison 2 et \(v_0=2\). Donc \(v_n=2\times2^n=2^{n+1}\) et \(u_n=2^{n+1}+1\). <b>(1,5 pt)</b></li>
<li>La boucle s'arrête au premier \(n\) tel que \(u_n\geqslant1000\), soit \(2^{n+1}\geqslant999\). Or \(2^9=512\) et \(2^{10}=1024\) : il faut \(n+1=10\). En effet \(u_8=513&lt;1000\) et \(u_9=1025\geqslant1000\). <b>(1,5 pt)</b><br>
<code>mystere()</code> renvoie <b>9</b> : c'est le rang du premier terme de la suite supérieur ou égal à 1000. <b>(0,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — La tirelire de Léa", points: 5,
          enonce: R`Léa met 20 € dans sa tirelire la première semaine, puis chaque semaine 5 € de plus que la semaine précédente. On note \(a_n\) la somme déposée la \(n\)-ième semaine (\(a_1=20\)).
<ol><li>Quelle est la nature de la suite \((a_n)\) ? Exprime \(a_n\) en fonction de \(n\).</li>
<li>Combien dépose-t-elle la 30e semaine ? Combien a-t-elle économisé en tout au bout de 30 semaines ?</li>
<li>Montre que la somme totale au bout de \(n\) semaines est \(S_n=\dfrac{n(5n+35)}{2}\).</li>
<li>Au bout de combien de semaines aura-t-elle économisé au moins 1000 € ?</li></ol>`,
          correction: R`<ol><li>On ajoute 5 chaque semaine : \((a_n)\) est arithmétique de raison 5 et de premier terme \(a_1=20\). Donc \(a_n=a_1+(n-1)\times5=5n+15\). <b>(1 pt)</b></li>
<li>\(a_{30}=150+15=165\) €. <b>(0,5 pt)</b> Total : \(30\times\dfrac{20+165}{2}=30\times92{,}5=2775\) €. <b>(1 pt)</b></li>
<li>\(S_n=a_1+\dots+a_n=n\times\dfrac{20+(5n+15)}{2}=\dfrac{n(5n+35)}{2}\). <b>(1 pt)</b></li>
<li>On cherche le plus petit \(n\) tel que \(S_n\geqslant1000\). \(S_n\) augmente avec \(n\). \(S_{16}=\dfrac{16\times115}{2}=920\) et \(S_{17}=\dfrac{17\times120}{2}=1020\). <b>(1 pt)</b><br>
Elle aura au moins 1000 € au bout de <b>17 semaines</b>. <b>(0,5 pt)</b></li></ol>` }
      ] },
    { titre: "DS n°2 — Suites géométriques et modélisation", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Suite géométrique", points: 4,
          enonce: R`\((v_n)\) est une suite géométrique de raison positive telle que \(v_1=6\) et \(v_4=48\).
<ol><li>Détermine la raison \(q\) et \(v_0\).</li>
<li>Exprime \(v_n\) en fonction de \(n\) et donne son sens de variation.</li>
<li>Calcule \(v_0+v_1+\dots+v_7\).</li></ol>`,
          correction: R`<ol><li>\(v_4=v_1\times q^3\), donc \(q^3=\dfrac{48}{6}=8\) et \(q=2\). Puis \(v_0=\dfrac{v_1}{q}=3\). <b>(1,5 pt)</b></li>
<li>\(v_n=3\times2^n\). Comme \(v_0&gt;0\) et \(q=2&gt;1\), la suite est croissante. <b>(1 pt)</b></li>
<li>8 termes : \(S=3\times\dfrac{1-2^8}{1-2}=3\times255=765\). <b>(1,5 pt)</b></li></ol>` },
        { titre: "Exercice 2 — Linéaire ou exponentielle ?", points: 6,
          enonce: R`En 2024, une ville compte 12 000 habitants. Deux modèles sont proposés pour la suite :
<ul><li>Modèle A : la population augmente de 400 habitants par an ; on note \(a_n\) la population en \(2024+n\).</li>
<li>Modèle B : la population augmente de 3 % par an ; on note \(b_n\) la population en \(2024+n\).</li></ul>
<ol><li>Donne la nature de chaque suite et exprime \(a_n\) et \(b_n\) en fonction de \(n\).</li>
<li>Calcule la population en 2030 selon chaque modèle (arrondie à l'unité).</li>
<li>Écris une fonction Python qui renvoie la première année où le modèle B prévoit plus d'habitants que le modèle A. On donne \(b_7\approx14\,758\) et \(b_8\approx15\,201\) : quelle année obtient-on ?</li>
<li>Selon le modèle B, en quelle année la population aura-t-elle doublé par rapport à 2024 ? (On donne \(1{,}03^{23}\approx1{,}974\) et \(1{,}03^{24}\approx2{,}033\).)</li></ol>`,
          correction: R`<ol><li>\((a_n)\) est arithmétique de raison 400 : \(a_n=12\,000+400n\). \((b_n)\) est géométrique de raison 1,03 : \(b_n=12\,000\times1{,}03^n\). <b>(1,5 pt)</b></li>
<li>2030 correspond à \(n=6\). \(a_6=12\,000+2400=14\,400\) habitants ; \(b_6=12\,000\times1{,}03^6\approx14\,329\) habitants. <b>(1 pt)</b></li>
<li><pre><code>def annee():
    n = 0
    a = 12000
    b = 12000
    while b &lt;= a:
        n = n + 1
        a = a + 400
        b = 1.03*b
    return 2024 + n</code></pre>
<b>(1,5 pt)</b><br>
Attention : au départ \(a_0=b_0\), d'où le <code>&lt;=</code>. On a \(a_7=14\,800&gt;b_7\approx14\,758\) mais \(a_8=15\,200&lt;b_8\approx15\,201\). La fonction renvoie <b>2032</b>. <b>(1 pt)</b></li>
<li>On cherche \(n\) tel que \(b_n\geqslant24\,000\), soit \(1{,}03^n\geqslant2\). D'après les valeurs données, c'est le cas dès \(n=24\) (et pas pour \(n=23\)). La population aura doublé en <b>2048</b>. <b>(1 pt)</b></li></ol>` },
        { titre: "Exercice 3 — Suite arithmético-géométrique", points: 5,
          enonce: R`Soit \((u_n)\) définie par \(u_0=1\) et \(u_{n+1}=\dfrac13u_n+2\). On pose \(v_n=u_n-3\).
<ol><li>Calcule \(u_1\) et \(u_2\).</li>
<li>Montre que \((v_n)\) est géométrique ; précise sa raison et son premier terme.</li>
<li>Exprime \(v_n\), puis \(u_n\), en fonction de \(n\).</li>
<li>Étudie le sens de variation de \((u_n)\) et conjecture sa limite.</li></ol>`,
          correction: R`<ol><li>\(u_1=\dfrac13+2=\dfrac73\) ; \(u_2=\dfrac79+2=\dfrac{25}{9}\). <b>(1 pt)</b></li>
<li>\(v_{n+1}=u_{n+1}-3=\dfrac13u_n-1=\dfrac13(u_n-3)=\dfrac13v_n\). \((v_n)\) est géométrique de raison \(\dfrac13\), de premier terme \(v_0=1-3=-2\). <b>(1,5 pt)</b></li>
<li>\(v_n=-2\times\left(\dfrac13\right)^n\), donc \(u_n=3-2\times\left(\dfrac13\right)^n\). <b>(1 pt)</b></li>
<li>\(u_{n+1}-u_n=-2\left(\dfrac13\right)^{n+1}+2\left(\dfrac13\right)^n=2\left(\dfrac13\right)^n\left(1-\dfrac13\right)=\dfrac43\left(\dfrac13\right)^n&gt;0\) : \((u_n)\) est croissante. <b>(1 pt)</b><br>
Comme \(\left(\dfrac13\right)^n\) tend vers 0, on conjecture que \(u_n\) tend vers 3. <b>(0,5 pt)</b></li></ol>` },
        { titre: "Exercice 4 — Démonstration et paradoxe de Zénon", points: 5,
          enonce: R`<ol><li><b>Restitution du cours.</b> Soit \(q\neq1\) et \(n\in\mathbb N\). Démontre que \(1+q+q^2+\dots+q^n=\dfrac{1-q^{n+1}}{1-q}\).</li>
<li>Achille doit parcourir 2 km. Il parcourt d'abord 1 km, puis la moitié de ce qui reste (0,5 km), puis encore la moitié de ce qui reste (0,25 km), etc. Calcule la distance parcourue après 11 étapes, c'est-à-dire \(D=1+0{,}5+0{,}5^2+\dots+0{,}5^{10}\). Donne la valeur exacte puis décimale.</li>
<li>Montre que pour tout \(n\), \(1+0{,}5+\dots+0{,}5^n=2-0{,}5^n\). Que peut-on conjecturer quand \(n\) devient grand ?</li></ol>`,
          correction: R`<ol><li>Soit \(S=1+q+\dots+q^n\). Alors \(qS=q+q^2+\dots+q^{n+1}\). <b>(0,5 pt)</b><br>
Par différence, tous les termes de \(q\) à \(q^n\) se simplifient : \(S-qS=1-q^{n+1}\), soit \((1-q)S=1-q^{n+1}\). <b>(1 pt)</b><br>
Comme \(q\neq1\), \(1-q\neq0\) et \(S=\dfrac{1-q^{n+1}}{1-q}\). <b>(0,5 pt)</b></li>
<li>Avec \(q=0{,}5\) et \(n=10\) : \(D=\dfrac{1-0{,}5^{11}}{1-0{,}5}=2\left(1-0{,}5^{11}\right)=2-0{,}5^{10}=2-\dfrac1{1024}=\dfrac{2047}{1024}=1{,}9990234375\) km. <b>(1,5 pt)</b></li>
<li>\(1+\dots+0{,}5^n=\dfrac{1-0{,}5^{n+1}}{0{,}5}=2-2\times0{,}5^{n+1}=2-0{,}5^n\). <b>(1 pt)</b><br>
\(0{,}5^n\) tend vers 0, donc la somme tend vers 2 : en une infinité d'étapes, Achille parcourt bien exactement 2 km. <b>(0,5 pt)</b></li></ol>` }
      ] }
  ]
});
})();
