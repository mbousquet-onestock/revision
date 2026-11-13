(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 6,
  titre: "Fonction exponentielle",
  partie: "Analyse",
  emoji: "🚀",
  accroche: R`Une fonction qui est <b>sa propre dérivée</b> : c'est un peu la licorne des mathématiques ! 🦄 Elle décrit la croissance des bactéries, la désintégration radioactive, le refroidissement de ton chocolat chaud ou l'élimination d'un médicament. Bienvenue dans le monde de \(e^x\), la fonction qui grandit plus vite que toutes les autres.`,

  videos: [
    { titre: "La fonction exponentielle : définition", recherche: "Yvan Monka fonction exponentielle définition f'=f", duree: "≈ 8 min", resume: R`Pourquoi il existe une unique fonction égale à sa dérivée et valant \(1\) en \(0\), et pourquoi elle ne s'annule jamais.` },
    { titre: "Propriétés algébriques de l'exponentielle", recherche: "Yvan Monka simplifier une expression avec exponentielle propriétés", duree: "≈ 9 min", resume: R`Les règles \(e^{a+b}=e^ae^b\), \(e^{-a}=\dfrac1{e^a}\), \(e^{na}=(e^a)^n\) en action sur des exemples.` },
    { titre: "Résoudre une équation avec exponentielle", recherche: "Yvan Monka résoudre une équation fonction exponentielle", duree: "≈ 7 min", resume: R`On se ramène à \(e^A=e^B\) pour conclure \(A=B\).` },
    { titre: "Résoudre une inéquation avec exponentielle", recherche: "Yvan Monka résoudre une inéquation fonction exponentielle", duree: "≈ 7 min", resume: R`Comme \(\exp\) est strictement croissante, \(e^A\lt e^B\iff A\lt B\).` },
    { titre: "Dériver une fonction avec exponentielle", recherche: "Yvan Monka dérivée exp(ax+b) fonction exponentielle", duree: "≈ 8 min", resume: R`La formule \((e^{ax+b})'=ae^{ax+b}\) et les produits du type \((ax+b)e^x\).` },
    { titre: "Étudier une fonction exponentielle", recherche: "Yvan Monka étudier les variations d'une fonction exponentielle", duree: "≈ 10 min", resume: R`Étude complète d'une fonction \(x\mapsto (ax+b)e^x\) : dérivée, signe, tableau de variations.` },
    { titre: "Croissance et décroissance exponentielle", recherche: "Yvan Monka fonctions exp(kt) exp(-kt) croissance décroissance exponentielle", duree: "≈ 6 min", resume: R`Les fonctions \(t\mapsto e^{kt}\) et \(t\mapsto e^{-kt}\) pour modéliser une évolution.` },
    { titre: "Méthode d'Euler en Python", recherche: "méthode d'Euler construction approchée exponentielle Python première spécialité", duree: "≈ 10 min", resume: R`Construire point par point une approximation de la courbe de \(\exp\) grâce à \(f(x+h)\approx f(x)(1+h)\).` }
  ],

  cours: [
    { titre: "1. Définition et propriétés algébriques", html: R`
<div class="prop"><b>Théorème — définition (admis).</b> Il existe une <b>unique</b> fonction \(f\) dérivable sur \(\mathbb{R}\) telle que
\[f'=f\quad\text{et}\quad f(0)=1.\]
On l'appelle <b>fonction exponentielle</b> et on la note \(\exp\).</div>
<div class="prop"><b>Propriété.</b> Pour tout réel \(x\), \(\exp(x)\times\exp(-x)=1\). En particulier \(\exp(x)\neq 0\) pour tout \(x\).<br>
<i>Preuve :</i> soit \(\varphi(x)=\exp(x)\exp(-x)\). Alors \(\varphi'(x)=\exp(x)\exp(-x)+\exp(x)\times(-\exp(-x))=0\) : \(\varphi\) est constante, égale à \(\varphi(0)=1\times 1=1\). Si \(\exp(x)\) valait \(0\), le produit vaudrait \(0\), pas \(1\).</div>
<div class="prop"><b>Relation fonctionnelle.</b> Pour tous réels \(a\) et \(b\) : \(\exp(a+b)=\exp(a)\times\exp(b)\).</div>
<div class="def"><b>Notation \(e^x\).</b> On note \(e=\exp(1)\approx 2{,}718\). Grâce à la relation fonctionnelle, l'exponentielle se comporte comme une puissance, d'où la notation \(\exp(x)=e^x\). Ainsi \(e^0=1\), \(e^1=e\).</div>
<div class="prop"><b>Règles de calcul.</b> Pour tous réels \(a\), \(b\) et tout entier relatif \(n\) :
\[e^{a+b}=e^a\times e^b\qquad e^{-a}=\frac1{e^a}\qquad e^{a-b}=\frac{e^a}{e^b}\qquad e^{na}=\left(e^a\right)^n.\]</div>
<div class="prop"><b>Positivité.</b> Pour tout réel \(x\), \(e^x\gt 0\).<br><i>Preuve :</i> \(e^x=e^{\frac x2+\frac x2}=\left(e^{x/2}\right)^2\geqslant 0\), et \(e^x\neq 0\).</div>
<div class="prop"><b>Suite géométrique.</b> Pour tout réel \(a\), la suite \((u_n)\) définie par \(u_n=e^{na}\) est géométrique de raison \(e^a\) et de premier terme \(u_0=1\), car \(u_{n+1}=e^{(n+1)a}=e^{na}\times e^a=u_n\times e^a\).</div>
<div class="ex"><b>Exemples de simplification.</b>
<ul><li>\(e^5\times e^{-3}=e^{5-3}=e^2\).</li>
<li>\(\dfrac{e^{2x+1}}{e^{x-1}}=e^{2x+1-(x-1)}=e^{x+2}\).</li>
<li>\(\left(e^{x}\right)^3\times e^{-2x}=e^{3x}\times e^{-2x}=e^{x}\).</li>
<li>\(\left(e^x+e^{-x}\right)^2=e^{2x}+2e^xe^{-x}+e^{-2x}=e^{2x}+2+e^{-2x}\).</li></ul></div>
<div class="warn"><b>Pièges classiques.</b>
<ul><li>\(e^{a+b}\neq e^a+e^b\) ! C'est un <b>produit</b> : \(e^{a+b}=e^a\times e^b\).</li>
<li>\(\left(e^x\right)^2=e^{2x}\) mais \(e^{x^2}\) est tout autre chose (par exemple pour \(x=3\) : \(e^6\neq e^9\)).</li>
<li>\(e^x\) n'est jamais négatif ni nul : une équation comme \(e^x=-2\) ou \(e^x=0\) n'a <b>aucune</b> solution.</li></ul></div>
` },
    { titre: "2. Étude de la fonction exponentielle et applications", html: R`
<div class="prop"><b>Variations.</b> \(\exp'=\exp\) et \(e^x\gt 0\), donc la fonction exponentielle est <b>strictement croissante</b> sur \(\mathbb{R}\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(\exp'(x)=e^x\)</td><td></td><td>\(+\)</td><td></td><td>\(+\)</td><td></td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(\exp\)</td><td></td><td>↗</td><td>\(1\)</td><td>↗</td><td>\(e\)</td><td>↗</td><td></td></tr>
</table>
La courbe passe par \((0\,;1)\) et \((1\,;e)\). Sa tangente en \(0\) a pour équation \(y=x+1\) (car \(\exp'(0)=e^0=1\)).</div>
<div class="ex"><b>Une inégalité célèbre : \(e^x\geqslant x+1\) pour tout réel \(x\).</b> Soit \(h(x)=e^x-x-1\). \(h'(x)=e^x-1\). Comme \(\exp\) est strictement croissante et \(e^0=1\) : \(h'(x)\lt 0\) si \(x\lt 0\), \(h'(x)\gt 0\) si \(x\gt 0\). \(h\) admet donc un minimum en \(0\) : \(h(0)=1-0-1=0\). Ainsi \(h(x)\geqslant 0\). La courbe de \(\exp\) est toujours au-dessus de sa tangente en \(0\).</div>

<p><b>Équations et inéquations.</b></p>
<div class="prop">Comme \(\exp\) est strictement croissante sur \(\mathbb{R}\), pour tous réels \(a\) et \(b\) :
\[e^a=e^b\iff a=b\qquad\qquad e^a\lt e^b\iff a\lt b.\]</div>
<div class="ex"><b>Exemples.</b>
<ul><li>\(e^{3x-2}=e^{x+4}\iff 3x-2=x+4\iff x=3\). \(\mathcal{S}=\{3\}\).</li>
<li>\(e^{2x+1}\geqslant 1\iff e^{2x+1}\geqslant e^0\iff 2x+1\geqslant 0\iff x\geqslant -\dfrac12\). \(\mathcal{S}=\left[-\dfrac12\,;+\infty\right[\).</li>
<li>\((x-2)e^x=0\iff x-2=0\) (car \(e^x\neq 0\)) \(\iff x=2\).</li></ul></div>
<div class="astuce">Pour transformer un nombre en exponentielle : \(1=e^0\), \(e=e^1\), \(\dfrac1e=e^{-1}\), \(\sqrt e=e^{1/2}\).</div>

<p><b>Dérivée de \(x\mapsto e^{ax+b}\).</b></p>
<div class="prop">Pour tous réels \(a\) et \(b\), la fonction \(x\mapsto e^{ax+b}\) est dérivable sur \(\mathbb{R}\) et
\[\left(e^{ax+b}\right)'=a\,e^{ax+b}.\]</div>
<div class="ex">\(\left(e^{-3x+1}\right)'=-3e^{-3x+1}\) ; \(\left(e^{0{,}5x}\right)'=0{,}5e^{0{,}5x}\).</div>
<div class="prop"><b>Les fonctions \(t\mapsto e^{kt}\) et \(t\mapsto e^{-kt}\) avec \(k\gt 0\).</b>
<ul><li>\((e^{kt})'=ke^{kt}\gt 0\) : \(t\mapsto e^{kt}\) est strictement <b>croissante</b> (modèle de croissance exponentielle : population, placement…).</li>
<li>\((e^{-kt})'=-ke^{-kt}\lt 0\) : \(t\mapsto e^{-kt}\) est strictement <b>décroissante</b> (décroissance radioactive, élimination d'un médicament, refroidissement…).</li></ul>
Plus \(k\) est grand, plus la croissance (ou la décroissance) est rapide.</div>
<div class="ex"><b>Modélisation.</b> Une population de bactéries vérifie \(N(t)=500e^{0{,}2t}\) (\(t\) en heures). Alors \(N(t+1)=500e^{0{,}2t}\times e^{0{,}2}=N(t)\times e^{0{,}2}\) : chaque heure, la population est multipliée par \(e^{0{,}2}\approx 1{,}2214\), soit une hausse d'environ \(22{,}1\,\%\). Les valeurs \(N(0), N(1), N(2),\dots\) forment une suite géométrique.</div>

<p><b>Étude de fonctions du type \(x\mapsto (ax+b)e^x\).</b></p>
<div class="astuce"><b>Méthode.</b> On dérive le produit \(u\times v\) avec \(u(x)=ax+b\), \(v(x)=e^x\) : \(f'(x)=ae^x+(ax+b)e^x=(ax+a+b)e^x\). Comme \(e^x\gt 0\), <b>\(f'(x)\) a le signe de \(ax+a+b\)</b> : un simple signe de fonction affine !</div>
<div class="ex"><b>Exemple.</b> \(f(x)=(x-2)e^x\). \(f'(x)=1\times e^x+(x-2)e^x=(x-1)e^x\), du signe de \(x-1\). \(f\) est décroissante sur \(]-\infty\,;1]\), croissante sur \([1\,;+\infty[\), de minimum \(f(1)=-e\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↘</td><td>\(-e\)</td><td>↗</td><td></td></tr>
</table></div>

<p><b>La méthode d'Euler.</b></p>
<div class="def">Si \(h\) est petit, la tangente donne \(f(x+h)\approx f(x)+hf'(x)\). Pour \(f=\exp\), comme \(f'=f\) : \(f(x+h)\approx f(x)(1+h)\).<br>
En partant de \(y_0=f(0)=1\), on construit \(y_{k+1}=y_k\times(1+h)\) : \(y_k\) est une approximation de \(e^{kh}\). Les points \((kh\,;y_k)\) dessinent une approximation de la courbe de \(\exp\).</div>
<div class="ex"><b>Programme Python : approximation de \(e=e^1\) avec \(n\) pas de longueur \(h=\dfrac1n\).</b>
<pre><code>def euler(n):
    h = 1 / n
    x = 0
    y = 1
    for k in range(n):
        y = y * (1 + h)
        x = x + h
    return y

print(euler(10))     # 2.5937424601...
print(euler(1000))   # 2.7169239322...</code></pre>
On a en fait \(y_n=\left(1+\dfrac1n\right)^n\), qui se rapproche de \(e\approx 2{,}718\,28\) quand \(n\) augmente.</div>
<div class="warn">\(\left(e^{ax+b}\right)'\) n'est <b>pas</b> \(e^{ax+b}\) : n'oublie pas le facteur \(a\) ! Et \((xe^x)'\neq e^x\) : c'est un produit, \((xe^x)'=e^x+xe^x=(x+1)e^x\).</div>
` }
  ],

  quiz: [
    { q: R`\(e^3\times e^{-5}\) est égal à :`,
      choix: [R`\(e^{-15}\)`, R`\(e^{-2}\)`, R`\(e^{8}\)`, R`\(-e^2\)`],
      bonne: 1, explication: R`\(e^a\times e^b=e^{a+b}\) : \(e^{3+(-5)}=e^{-2}\). Et \(e^{-2}=\dfrac1{e^2}\gt 0\), surtout pas \(-e^2\).` },
    { q: R`\(\left(e^x\right)^3\) est égal à :`,
      choix: [R`\(e^{x^3}\)`, R`\(e^{x+3}\)`, R`\(e^{3x}\)`, R`\(3e^x\)`],
      bonne: 2, explication: R`\(\left(e^a\right)^n=e^{na}\), donc \(\left(e^x\right)^3=e^{3x}\).` },
    { q: R`La solution de l'équation \(e^{2x-1}=e\) est :`,
      choix: [R`\(x=0\)`, R`\(x=\dfrac12\)`, R`\(x=1\)`, R`Pas de solution`],
      bonne: 2, explication: R`\(e=e^1\), donc \(e^{2x-1}=e^1\iff 2x-1=1\iff x=1\).` },
    { q: R`La dérivée de \(f(x)=e^{-3x}\) est :`,
      choix: [R`\(e^{-3x}\)`, R`\(-3e^{-3x}\)`, R`\(-3xe^{-3x-1}\)`, R`\(3e^{-3x}\)`],
      bonne: 1, explication: R`\(\left(e^{ax+b}\right)'=ae^{ax+b}\) avec \(a=-3\) : \(f'(x)=-3e^{-3x}\).` },
    { q: R`L'équation \(e^x=-1\) :`,
      choix: [R`a pour solution \(x=-1\)`, R`a pour solution \(x=0\)`, R`a une infinité de solutions`, R`n'a pas de solution`],
      bonne: 3, explication: R`Pour tout réel \(x\), \(e^x\gt 0\). Un nombre strictement positif ne peut pas valoir \(-1\).` },
    { q: R`L'ensemble des solutions de \(e^x\lt 1\) est :`,
      choix: [R`\(]-\infty\,;0[\)`, R`\(]0\,;+\infty[\)`, R`\(]-\infty\,;1[\)`, R`\(\mathbb{R}\)`],
      bonne: 0, explication: R`\(1=e^0\) et \(\exp\) est strictement croissante : \(e^x\lt e^0\iff x\lt 0\).` },
    { q: R`La dérivée de \(f(x)=xe^x\) est :`,
      choix: [R`\(e^x\)`, R`\(xe^x\)`, R`\((x+1)e^x\)`, R`\(x e^{x-1}\)`],
      bonne: 2, explication: R`Produit \(uv\) avec \(u=x\), \(v=e^x\) : \(f'(x)=1\times e^x+x\times e^x=(x+1)e^x\).` },
    { q: R`La suite définie par \(u_n=e^{0{,}5n}\) est :`,
      choix: [R`arithmétique de raison \(0{,}5\)`, R`géométrique de raison \(0{,}5\)`, R`géométrique de raison \(e^{0{,}5}\)`, R`ni arithmétique ni géométrique`],
      bonne: 2, explication: R`\(u_{n+1}=e^{0{,}5(n+1)}=e^{0{,}5n}\times e^{0{,}5}=u_n\times e^{0{,}5}\) : géométrique de raison \(e^{0{,}5}\approx 1{,}65\).` }
  ],

  exercices: [
    { niveau: 1, titre: "Simplifier des expressions",
      enonce: R`<p>Écrire le plus simplement possible (sous la forme \(e^{\dots}\) ou sous forme d'un nombre) :</p>
\[A=\frac{e^2\times e^{-3}}{e^{-1}}\qquad B=\left(e^x\right)^2\times e^{-2x+1}\qquad C=\frac{e^{3x+1}}{e^{x-1}}\qquad D=\left(e^x+e^{-x}\right)^2\]`,
      indice: R`Utilise \(e^ae^b=e^{a+b}\), \(\dfrac{e^a}{e^b}=e^{a-b}\), \((e^a)^n=e^{na}\). Pour \(D\), c'est une identité remarquable.`,
      correction: R`<ul><li>\(A=\dfrac{e^{2-3}}{e^{-1}}=\dfrac{e^{-1}}{e^{-1}}=1\).</li>
<li>\(B=e^{2x}\times e^{-2x+1}=e^{2x-2x+1}=e^1=e\).</li>
<li>\(C=e^{3x+1-(x-1)}=e^{3x+1-x+1}=e^{2x+2}\). Attention aux parenthèses : on soustrait tout l'exposant \(x-1\).</li>
<li>\(D=\left(e^x\right)^2+2e^xe^{-x}+\left(e^{-x}\right)^2=e^{2x}+2e^{0}+e^{-2x}=e^{2x}+2+e^{-2x}\).</li></ul>` },

    { niveau: 1, titre: "Résoudre des équations",
      enonce: R`<p>Résoudre dans \(\mathbb{R}\) :</p><ol><li>\(e^{3x-2}=e^{x+4}\)</li><li>\(e^{x^2-1}=1\)</li><li>\(e^{2x}\times e^{x}=e^6\)</li><li>\(e^{x}+2=0\)</li></ol>`,
      indice: R`Ramène chaque équation à la forme \(e^A=e^B\), puis utilise \(e^A=e^B\iff A=B\). Pense à \(1=e^0\).`,
      correction: R`<ol><li>\(e^{3x-2}=e^{x+4}\iff 3x-2=x+4\iff 2x=6\iff x=3\). \(\mathcal{S}=\{3\}\).</li>
<li>\(e^{x^2-1}=e^0\iff x^2-1=0\iff x^2=1\iff x=-1\) ou \(x=1\). \(\mathcal{S}=\{-1\,;1\}\).</li>
<li>\(e^{2x}\times e^x=e^{3x}\), donc l'équation devient \(e^{3x}=e^6\iff 3x=6\iff x=2\). \(\mathcal{S}=\{2\}\).</li>
<li>\(e^x+2=0\iff e^x=-2\). Or \(e^x\gt 0\) pour tout \(x\) : pas de solution. \(\mathcal{S}=\varnothing\).</li></ol>` },

    { niveau: 1, titre: "Résoudre des inéquations",
      enonce: R`<p>Résoudre dans \(\mathbb{R}\) :</p><ol><li>\(e^{2x+1}\gt e\)</li><li>\(e^{-x+3}\leqslant 1\)</li><li>\(e^{x^2}\lt e^{4x-3}\)</li></ol>`,
      indice: R`\(\exp\) est strictement croissante : \(e^A\lt e^B\iff A\lt B\) (le sens de l'inégalité est conservé). Pour la 3, tu obtiendras un trinôme du second degré.`,
      correction: R`<ol><li>\(e=e^1\) : \(e^{2x+1}\gt e^1\iff 2x+1\gt 1\iff x\gt 0\). \(\mathcal{S}=]0\,;+\infty[\).</li>
<li>\(1=e^0\) : \(e^{-x+3}\leqslant e^0\iff -x+3\leqslant 0\iff x\geqslant 3\). \(\mathcal{S}=[3\,;+\infty[\).</li>
<li>\(e^{x^2}\lt e^{4x-3}\iff x^2\lt 4x-3\iff x^2-4x+3\lt 0\). Le trinôme a pour discriminant \(\Delta=16-12=4\) et pour racines \(\dfrac{4-2}{2}=1\) et \(\dfrac{4+2}2=3\) ; il est négatif entre ses racines (coefficient \(1\gt 0\)). \(\mathcal{S}=]1\,;3[\).</li></ol>` },

    { niveau: 1, titre: "Calculer des dérivées",
      enonce: R`<p>Calculer la dérivée de chaque fonction, définie et dérivable sur l'intervalle indiqué :</p><ol><li>\(f_1(x)=3e^x-2x+1\) sur \(\mathbb{R}\)</li><li>\(f_2(x)=e^{-2x+5}\) sur \(\mathbb{R}\)</li><li>\(f_3(x)=x^2e^x\) sur \(\mathbb{R}\)</li><li>\(f_4(x)=\dfrac{e^x}{x}\) sur \(]0\,;+\infty[\)</li></ol>`,
      indice: R`Formules utiles : \((e^{ax+b})'=ae^{ax+b}\), \((uv)'=u'v+uv'\), \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\). Factorise par \(e^x\) à la fin.`,
      correction: R`<ol><li>\(f_1'(x)=3e^x-2\).</li>
<li>\(a=-2\) : \(f_2'(x)=-2e^{-2x+5}\).</li>
<li>\(u=x^2\), \(u'=2x\), \(v=e^x\), \(v'=e^x\) : \(f_3'(x)=2xe^x+x^2e^x=(x^2+2x)e^x=x(x+2)e^x\).</li>
<li>\(u=e^x\), \(v=x\) : \(f_4'(x)=\dfrac{e^x\times x-e^x\times 1}{x^2}=\dfrac{(x-1)e^x}{x^2}\).</li></ol>` },

    { niveau: 2, titre: "Étude d'une fonction (ax+b)e^x",
      enonce: R`<p>Soit \(f\) définie sur \(\mathbb{R}\) par \(f(x)=(2x-1)e^x\), de courbe \(\mathcal{C}\).</p><ol><li>Montrer que \(f'(x)=(2x+1)e^x\).</li><li>Dresser le tableau de variations de \(f\). On donnera la valeur exacte du minimum.</li><li>Étudier le signe de \(f(x)\) selon les valeurs de \(x\).</li><li>Déterminer l'équation de la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(0\).</li></ol>`,
      indice: R`Comme \(e^x\gt 0\), \(f'(x)\) a le signe de \(2x+1\), et \(f(x)\) a le signe de \(2x-1\).`,
      correction: R`<ol><li>\(u=2x-1\), \(u'=2\), \(v=e^x\), \(v'=e^x\) : \(f'(x)=2e^x+(2x-1)e^x=(2x+1)e^x\).</li>
<li>\(e^x\gt 0\) donc \(f'(x)\) a le signe de \(2x+1\), qui s'annule en \(-\dfrac12\). \(f\left(-\dfrac12\right)=(-1-1)e^{-1/2}=-2e^{-1/2}\approx -1{,}21\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-\frac12\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↘</td><td>\(-2e^{-1/2}\)</td><td>↗</td><td></td></tr>
</table>
Le minimum de \(f\) sur \(\mathbb{R}\) est \(-2e^{-1/2}=-\dfrac{2}{\sqrt e}\).</li>
<li>\(e^x\gt 0\), donc \(f(x)\) a le signe de \(2x-1\) : \(f(x)\lt 0\) sur \(\left]-\infty\,;\dfrac12\right[\), \(f\left(\dfrac12\right)=0\), \(f(x)\gt 0\) sur \(\left]\dfrac12\,;+\infty\right[\).</li>
<li>\(f(0)=-1\) et \(f'(0)=1\times 1=1\). \(T : y=1\times(x-0)+(-1)\), soit \(y=x-1\).</li></ol>` },

    { niveau: 2, titre: "Équations produits et signes",
      enonce: R`<ol><li>Résoudre dans \(\mathbb{R}\) l'équation \((x^2-4)e^{x}=0\).</li><li>Résoudre dans \(\mathbb{R}\) l'équation \(e^{2x}-e\times e^{x}=0\).</li><li>Dresser le tableau de signes de \(g(x)=(1-x)e^{-2x}\) sur \(\mathbb{R}\).</li><li>Résoudre l'inéquation \((x+3)e^{2x+1}\lt 0\).</li></ol>`,
      indice: R`Un produit est nul si et seulement si l'un de ses facteurs est nul, et une exponentielle n'est jamais nulle. Pour la 2, factorise par \(e^x\).`,
      correction: R`<ol><li>Comme \(e^x\neq 0\), \((x^2-4)e^x=0\iff x^2-4=0\iff (x-2)(x+2)=0\iff x=2\) ou \(x=-2\). \(\mathcal{S}=\{-2\,;2\}\).</li>
<li>\(e^{2x}=e^x\times e^x\), donc \(e^{2x}-e\times e^x=e^x(e^x-e)\). Comme \(e^x\neq 0\) : \(e^x-e=0\iff e^x=e^1\iff x=1\). \(\mathcal{S}=\{1\}\).</li>
<li>\(e^{-2x}\gt 0\), donc \(g(x)\) a le signe de \(1-x\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>\(1-x\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>\(e^{-2x}\)</td><td></td><td>\(+\)</td><td></td><td>\(+\)</td><td></td></tr>
<tr><td>\(g(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
</table></li>
<li>\(e^{2x+1}\gt 0\), donc \((x+3)e^{2x+1}\lt 0\iff x+3\lt 0\iff x\lt -3\). \(\mathcal{S}=]-\infty\,;-3[\).</li></ol>` },

    { niveau: 2, titre: "Une suite géométrique cachée",
      enonce: R`<p>On définit pour tout entier naturel \(n\) : \(u_n=3e^{-0{,}5n}\).</p><ol><li>Calculer \(u_0\), puis donner une valeur approchée de \(u_1\) et \(u_2\) à \(10^{-3}\) près.</li><li>Montrer que \((u_n)\) est une suite géométrique dont on précisera la raison \(q\).</li><li>Quel est le sens de variation de \((u_n)\) ? Justifier.</li><li>Calculer la valeur exacte puis une valeur approchée à \(10^{-2}\) de \(S=u_0+u_1+\dots+u_9\).</li></ol>`,
      indice: R`Calcule \(u_{n+1}\) et fais apparaître \(u_n\). Rappel : \(1+q+\dots+q^{n}=\dfrac{1-q^{n+1}}{1-q}\) si \(q\neq 1\).`,
      correction: R`<ol><li>\(u_0=3e^0=3\), \(u_1=3e^{-0{,}5}\approx 1{,}820\), \(u_2=3e^{-1}\approx 1{,}104\).</li>
<li>\(u_{n+1}=3e^{-0{,}5(n+1)}=3e^{-0{,}5n-0{,}5}=3e^{-0{,}5n}\times e^{-0{,}5}=u_n\times e^{-0{,}5}\). La suite est géométrique de raison \(q=e^{-0{,}5}\approx 0{,}6065\) et de premier terme \(u_0=3\).</li>
<li>\(u_0=3\gt 0\) et \(0\lt q\lt 1\) car \(-0{,}5\lt 0\) donc \(e^{-0{,}5}\lt e^0=1\). Une suite géométrique de premier terme positif et de raison comprise entre \(0\) et \(1\) est décroissante. (On peut aussi dire : \(u_{n+1}-u_n=u_n(q-1)\lt 0\).)</li>
<li>\(S=u_0\times\dfrac{1-q^{10}}{1-q}=3\times\dfrac{1-\left(e^{-0{,}5}\right)^{10}}{1-e^{-0{,}5}}=3\times\dfrac{1-e^{-5}}{1-e^{-0{,}5}}\approx 7{,}57\).</li></ol>` },

    { niveau: 2, titre: "Élimination d'un médicament",
      enonce: R`<p>On injecte un médicament à un patient. La concentration dans le sang, en mg/L, \(t\) heures après l'injection, est modélisée par \(C(t)=20e^{-0{,}25t}\), pour \(t\geqslant 0\).</p><ol><li>Quelle est la concentration au moment de l'injection ? Au bout de 4 heures (valeur approchée à \(0{,}01\)) ?</li><li>Calculer \(C'(t)\) et en déduire le sens de variation de \(C\). Interpréter.</li><li>Le médicament n'est plus efficace lorsque sa concentration devient strictement inférieure à \(5\) mg/L. Compléter le programme Python ci-dessous pour qu'il donne, au centième d'heure près, le moment où cela se produit.
<pre><code>from math import exp
t = 0
while ......:
    t = t + 0.01
print(t)</code></pre></li>
<li>On donne : le programme affiche environ \(5{,}55\). Interpréter ce résultat en heures et minutes.</li></ol>`,
      indice: R`\(\left(e^{-0{,}25t}\right)'=-0{,}25e^{-0{,}25t}\). La boucle doit continuer tant que le médicament est encore efficace.`,
      correction: R`<ol><li>\(C(0)=20e^0=20\) mg/L. \(C(4)=20e^{-1}\approx 7{,}36\) mg/L.</li>
<li>\(C'(t)=20\times(-0{,}25)e^{-0{,}25t}=-5e^{-0{,}25t}\). Comme \(e^{-0{,}25t}\gt 0\), \(C'(t)\lt 0\) : \(C\) est strictement décroissante sur \([0\,;+\infty[\). La concentration du médicament diminue en permanence : le corps l'élimine.</li>
<li>On continue tant que la concentration est supérieure ou égale à \(5\) :
<pre><code>while 20*exp(-0.25*t) &gt;= 5:</code></pre></li>
<li>Le programme affiche environ \(5{,}55\) (à cause des arrondis de calcul en machine, Python peut afficher \(5{,}549999\dots\)). Le médicament n'est plus efficace au bout d'environ \(5{,}55\) h, soit \(5\) h et \(0{,}55\times 60=33\) min. Il faudra réinjecter le médicament au bout d'environ 5 h 33 min.</li></ol>` },

    { niveau: 3, titre: "Algorithme : la méthode d'Euler",
      enonce: R`<p>On veut construire une approximation de la fonction exponentielle \(f\) sans calculatrice, en utilisant seulement \(f'=f\) et \(f(0)=1\).</p>
<ol><li>Rappeler l'approximation affine \(f(x+h)\approx f(x)+hf'(x)\) pour \(h\) proche de \(0\), et en déduire que \(f(x+h)\approx(1+h)f(x)\).</li>
<li>On choisit \(h=0{,}1\). On pose \(y_0=1\) et \(y_{k+1}=(1+h)y_k\). Calculer \(y_1\), \(y_2\), \(y_3\). Quelle est la nature de la suite \((y_k)\) ? Exprimer \(y_k\) en fonction de \(k\).</li>
<li>Écrire une fonction Python <code>euler(n)</code> qui, avec un pas \(h=\dfrac1n\), renvoie l'approximation de \(f(1)=e\) obtenue après \(n\) étapes.</li>
<li>Les appels <code>euler(10)</code>, <code>euler(100)</code> et <code>euler(1000)</code> renvoient environ \(2{,}5937\), \(2{,}7048\) et \(2{,}7169\). Comparer avec \(e\approx 2{,}71828\). Commenter.</li></ol>`,
      indice: R`La suite \((y_k)\) est géométrique : on multiplie toujours par le même nombre \(1+h\). Avec \(h=\dfrac1n\), il faut \(n\) pas pour aller de \(0\) à \(1\).`,
      correction: R`<ol><li>L'approximation affine (par la tangente) donne \(f(x+h)\approx f(x)+hf'(x)\). Comme \(f'(x)=f(x)\) : \(f(x+h)\approx f(x)+hf(x)=(1+h)f(x)\).</li>
<li>\(y_1=1{,}1\), \(y_2=1{,}1\times 1{,}1=1{,}21\), \(y_3=1{,}21\times 1{,}1=1{,}331\). La suite \((y_k)\) est géométrique de raison \(1{,}1\) et de premier terme \(1\), donc \(y_k=1{,}1^k\). (\(y_k\) approche \(f(0{,}1k)=e^{0{,}1k}\).)</li>
<li><pre><code>def euler(n):
    h = 1 / n
    y = 1
    for k in range(n):
        y = (1 + h) * y
    return y</code></pre>
Après \(n\) étapes, on a avancé de \(n\times\dfrac1n=1\) : \(y_n\approx f(1)=e\). En fait, \(y_n=\left(1+\dfrac1n\right)^n\).</li>
<li>Les écarts avec \(e\) sont d'environ \(0{,}125\) ; \(0{,}013\) ; \(0{,}0014\). Plus le pas \(h\) est petit, meilleure est l'approximation (ici, l'erreur est à peu près divisée par 10 quand le pas l'est). Les valeurs sont toujours <b>en dessous</b> de \(e\) : la courbe de \(\exp\) est au-dessus de ses tangentes, donc chaque étape « par la tangente » sous-estime un peu.</li></ol>` },

    { niveau: 3, titre: "Un problème de tangentes",
      enonce: R`<p>On note \(\mathcal{C}\) la courbe de la fonction exponentielle et, pour tout réel \(a\), \(T_a\) la tangente à \(\mathcal{C}\) au point d'abscisse \(a\).</p>
<ol><li>Montrer que \(T_a\) a pour équation \(y=e^a(x-a+1)\).</li><li>Montrer que \(T_a\) coupe l'axe des abscisses au point d'abscisse \(a-1\). En déduire une méthode simple pour tracer une tangente à \(\mathcal{C}\).</li><li>Existe-t-il une tangente à \(\mathcal{C}\) qui passe par l'origine du repère ? Si oui, donner son équation.</li><li>On pose \(h(x)=e^x-ex\). Étudier les variations de \(h\) et en déduire la position de \(\mathcal{C}\) par rapport à la droite d'équation \(y=ex\).</li></ol>`,
      indice: R`Équation de tangente : \(y=f'(a)(x-a)+f(a)\) avec ici \(f(a)=f'(a)=e^a\). Pour la 3 : la droite passe par \(O\) si et seulement si \(x=0\) donne \(y=0\).`,
      correction: R`<ol><li>\(T_a : y=\exp'(a)(x-a)+\exp(a)=e^a(x-a)+e^a=e^a(x-a+1)\).</li>
<li>On résout \(e^a(x-a+1)=0\). Comme \(e^a\neq 0\) : \(x-a+1=0\iff x=a-1\). Méthode : pour tracer la tangente au point \(M(a\,;e^a)\), on place le point \(P(a-1\,;0)\) sur l'axe des abscisses et on trace la droite \((PM)\). Remarquable : il suffit de reculer de \(1\) !</li>
<li>\(T_a\) passe par \(O(0\,;0)\iff e^a(0-a+1)=0\iff 1-a=0\iff a=1\). La tangente en \(1\) passe par l'origine : \(T_1 : y=e^1(x-1+1)=ex\).</li>
<li>\(h'(x)=e^x-e=e^x-e^1\). Comme \(\exp\) est strictement croissante, \(h'(x)\lt 0\iff x\lt 1\) et \(h'(x)\gt 0\iff x\gt 1\). \(h\) est décroissante sur \(]-\infty\,;1]\) et croissante sur \([1\,;+\infty[\), de minimum \(h(1)=e-e=0\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(h'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(h\)</td><td></td><td>↘</td><td>\(0\)</td><td>↗</td><td></td></tr>
</table>
Donc \(h(x)\geqslant 0\), c'est-à-dire \(e^x\geqslant ex\) pour tout réel \(x\) : \(\mathcal{C}\) est au-dessus de sa tangente \(T_1\), et elles ne se touchent qu'au point \((1\,;e)\).</li></ol>` },

    { niveau: 3, titre: "Une croissance exponentielle",
      enonce: R`<p>Une population de bactéries est modélisée par \(N(t)=500e^{0{,}2t}\), où \(t\) est le temps en heures (\(t\geqslant 0\)).</p>
<ol><li>Calculer \(N(0)\) et \(N(5)\) (arrondi à l'unité).</li><li>Étudier le sens de variation de \(N\).</li><li>Montrer que pour tout \(t\geqslant 0\), \(N(t+1)=e^{0{,}2}\times N(t)\). En déduire le pourcentage d'augmentation de la population chaque heure (à \(0{,}1\,\%\) près).</li><li>On pose \(u_n=N(n)\) pour \(n\) entier. Quelle est la nature de la suite \((u_n)\) ?</li><li>Écrire un programme Python qui détermine le plus petit entier \(n\) tel que la population dépasse \(5\,000\) bactéries. On trouve \(n=12\) : vérifier ce résultat en calculant \(u_{11}\) et \(u_{12}\).</li></ol>`,
      indice: R`\(e^{0{,}2(t+1)}=e^{0{,}2t+0{,}2}=e^{0{,}2t}\times e^{0{,}2}\). Multiplier par \(1{,}22\) revient à augmenter de \(22\,\%\).`,
      correction: R`<ol><li>\(N(0)=500e^0=500\) bactéries ; \(N(5)=500e^{1}=500e\approx 1\,359\) bactéries.</li>
<li>\(N'(t)=500\times 0{,}2e^{0{,}2t}=100e^{0{,}2t}\gt 0\) : \(N\) est strictement croissante sur \([0\,;+\infty[\).</li>
<li>\(N(t+1)=500e^{0{,}2t+0{,}2}=500e^{0{,}2t}\times e^{0{,}2}=e^{0{,}2}N(t)\). Comme \(e^{0{,}2}\approx 1{,}2214\), la population est multipliée par environ \(1{,}2214\) chaque heure : elle augmente d'environ \(22{,}1\,\%\) par heure.</li>
<li>\(u_{n+1}=N(n+1)=e^{0{,}2}u_n\) : \((u_n)\) est géométrique de raison \(e^{0{,}2}\) et de premier terme \(u_0=500\).</li>
<li><pre><code>from math import exp
n = 0
while 500*exp(0.2*n) &lt;= 5000:
    n = n + 1
print(n)</code></pre>
\(u_{11}=500e^{2{,}2}\approx 4\,512{,}5\lt 5\,000\) et \(u_{12}=500e^{2{,}4}\approx 5\,511{,}6\gt 5\,000\). Comme \((u_n)\) est croissante, \(n=12\) est bien le premier rang : la population dépasse \(5\,000\) bactéries au bout de 12 heures (en comptant en heures entières).</li></ol>` },

    { niveau: 3, titre: "Type bac : retrouver une fonction et étudier sa tangente",
      enonce: R`<p>On considère une fonction \(f\) définie sur \(\mathbb{R}\) par \(f(x)=(ax+b)e^x\), où \(a\) et \(b\) sont des réels. Sa courbe \(\mathcal{C}\) passe par le point \(A(0\,;3)\) et admet en \(A\) une tangente horizontale.</p>
<ol><li>Montrer que \(f'(x)=(ax+a+b)e^x\).</li><li>Déterminer \(a\) et \(b\). <i>Dans la suite, \(f(x)=3(1-x)e^x\).</i></li><li>Dresser le tableau de variations de \(f\) et étudier le signe de \(f(x)\).</li><li>Montrer que la tangente \(T\) à \(\mathcal{C}\) au point d'abscisse \(1\) a pour équation \(y=-3e(x-1)\).</li><li>Montrer que pour tout réel \(x\), \(f(x)-(-3e(x-1))=3(1-x)(e^x-e)\). En déduire la position relative de \(\mathcal{C}\) et \(T\).</li></ol>`,
      indice: R`\(f(0)=3\) et \(f'(0)=0\) donnent deux équations. Pour la question 5, étudie le signe de \(1-x\) et celui de \(e^x-e\) suivant que \(x\lt 1\) ou \(x\gt 1\).`,
      correction: R`<ol><li>\(u=ax+b\), \(u'=a\), \(v=e^x\) : \(f'(x)=ae^x+(ax+b)e^x=(ax+a+b)e^x\).</li>
<li>\(A\in\mathcal{C}\) : \(f(0)=b\times e^0=b=3\). Tangente horizontale en \(0\) : \(f'(0)=(a+b)e^0=a+b=0\), donc \(a=-3\). Ainsi \(f(x)=(-3x+3)e^x=3(1-x)e^x\).</li>
<li>\(f'(x)=(-3x-3+3)e^x=-3xe^x\). Comme \(e^x\gt 0\), \(f'(x)\) a le signe de \(-3x\) : positif sur \(]-\infty\,;0[\), négatif sur \(]0\,;+\infty[\). \(f(0)=3\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(0\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↗</td><td>\(3\)</td><td>↘</td><td></td></tr>
</table>
\(f\) admet un maximum égal à \(3\) en \(0\). Signe : \(3e^x\gt 0\), donc \(f(x)\) a le signe de \(1-x\) : \(f(x)\gt 0\) si \(x\lt 1\), \(f(1)=0\), \(f(x)\lt 0\) si \(x\gt 1\).</li>
<li>\(f(1)=0\) et \(f'(1)=-3e\). \(T : y=f'(1)(x-1)+f(1)=-3e(x-1)\).</li>
<li>\(f(x)+3e(x-1)=3(1-x)e^x-3e(1-x)=3(1-x)(e^x-e)\).
<ul><li>Si \(x\lt 1\) : \(1-x\gt 0\) et \(e^x\lt e^1\), donc \(e^x-e\lt 0\) : le produit est négatif.</li>
<li>Si \(x\gt 1\) : \(1-x\lt 0\) et \(e^x-e\gt 0\) : le produit est négatif.</li>
<li>Si \(x=1\) : le produit est nul.</li></ul>
Donc \(f(x)-(-3e(x-1))\leqslant 0\) pour tout \(x\) : la courbe \(\mathcal{C}\) est <b>en dessous</b> de sa tangente \(T\), et elles ne se touchent qu'au point \((1\,;0)\).</li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Calculs, équations et étude de fonction", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Simplifier et résoudre", points: 5,
          enonce: R`<ol><li>Simplifier \(A=\dfrac{e^3\times e^{-1}}{e^2}\), \(B=\dfrac{\left(e^{2x}\right)^3}{e^{5x}}\) et \(C=e^x\left(e^{-x}+e^{x}\right)\).</li><li>Résoudre dans \(\mathbb{R}\) : a) \(e^{2x+3}=e^{-x}\) ; b) \(e^{x^2}=e^{2x+3}\).</li></ol>`,
          correction: R`<ol><li><b>(3 × 0,5 pt + 0,5 pt de rédaction = 2 pts)</b> \(A=\dfrac{e^{3-1}}{e^2}=\dfrac{e^2}{e^2}=1\) ; \(B=\dfrac{e^{6x}}{e^{5x}}=e^{6x-5x}=e^x\) ; \(C=e^{x-x}+e^{x+x}=1+e^{2x}\).</li>
<li>a) <b>(1 pt)</b> \(e^{2x+3}=e^{-x}\iff 2x+3=-x\iff 3x=-3\iff x=-1\). \(\mathcal{S}=\{-1\}\).<br>
b) <b>(2 pts)</b> \(e^{x^2}=e^{2x+3}\iff x^2=2x+3\iff x^2-2x-3=0\). \(\Delta=4+12=16\), racines \(\dfrac{2-4}{2}=-1\) et \(\dfrac{2+4}{2}=3\). \(\mathcal{S}=\{-1\,;3\}\).</li></ol>` },
        { titre: "Exercice 2 — Inéquations et signes", points: 5,
          enonce: R`<ol><li>Résoudre dans \(\mathbb{R}\) : a) \(e^{3x-1}\geqslant 1\) ; b) \(e^{x^2+x}\lt e^2\).</li><li>Étudier le signe de \(g(x)=(x-4)e^{-x}\) sur \(\mathbb{R}\).</li><li>L'équation \(e^{2x}+1=0\) a-t-elle des solutions ? Justifier.</li></ol>`,
          correction: R`<ol><li>a) <b>(1 pt)</b> \(e^{3x-1}\geqslant e^0\iff 3x-1\geqslant 0\iff x\geqslant\dfrac13\). \(\mathcal{S}=\left[\dfrac13\,;+\infty\right[\).<br>
b) <b>(2 pts)</b> \(e^{x^2+x}\lt e^2\iff x^2+x-2\lt 0\). \(\Delta=1+8=9\), racines \(\dfrac{-1-3}{2}=-2\) et \(\dfrac{-1+3}2=1\) ; le trinôme est négatif entre ses racines. \(\mathcal{S}=]-2\,;1[\).</li>
<li><b>(1 pt)</b> \(e^{-x}\gt 0\) donc \(g(x)\) a le signe de \(x-4\) : \(g(x)\lt 0\) sur \(]-\infty\,;4[\), \(g(4)=0\), \(g(x)\gt 0\) sur \(]4\,;+\infty[\).</li>
<li><b>(1 pt)</b> \(e^{2x}\gt 0\) donc \(e^{2x}+1\gt 1\gt 0\) : l'équation n'a aucune solution.</li></ol>` },
        { titre: "Exercice 3 — Étude de fonction", points: 6,
          enonce: R`<p>Soit \(f(x)=(2x+3)e^x\) sur \(\mathbb{R}\).</p><ol><li>Montrer que \(f'(x)=(2x+5)e^x\).</li><li>Dresser le tableau de variations de \(f\) (valeur exacte de l'extremum).</li><li>Déterminer l'équation de la tangente à la courbe de \(f\) au point d'abscisse \(0\).</li><li>Résoudre \(f(x)=0\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(u=2x+3\), \(u'=2\), \(v=e^x\) : \(f'(x)=2e^x+(2x+3)e^x=(2x+5)e^x\).</li>
<li><b>(2 pts)</b> \(e^x\gt 0\), donc \(f'(x)\) a le signe de \(2x+5\), qui s'annule en \(-\dfrac52\). \(f\left(-\dfrac52\right)=(-5+3)e^{-5/2}=-2e^{-5/2}\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(-\frac52\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(-\)</td><td>\(0\)</td><td>\(+\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↘</td><td>\(-2e^{-5/2}\)</td><td>↗</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> \(f(0)=3\), \(f'(0)=5\). Tangente : \(y=5x+3\).</li>
<li><b>(1 pt)</b> \(e^x\neq 0\), donc \(f(x)=0\iff 2x+3=0\iff x=-\dfrac32\).</li></ol>` },
        { titre: "Exercice 4 — Dérivées", points: 4,
          enonce: R`<p>Calculer la dérivée des fonctions suivantes, dérivables sur \(\mathbb{R}\) :</p><ol><li>\(f_1(x)=e^{-4x+1}\)</li><li>\(f_2(x)=x^2e^x\)</li><li>\(f_3(x)=\dfrac{e^x}{e^x+1}\)</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(f_1'(x)=-4e^{-4x+1}\).</li>
<li><b>(1,5 pt)</b> \(f_2'(x)=2xe^x+x^2e^x=x(x+2)e^x\).</li>
<li><b>(1,5 pt)</b> \(u=e^x\), \(v=e^x+1\) (qui ne s'annule pas) : \(f_3'(x)=\dfrac{e^x(e^x+1)-e^x\times e^x}{(e^x+1)^2}=\dfrac{e^x}{(e^x+1)^2}\).</li></ol>` }
      ] },
    { titre: "DS n°2 — Modélisation, Euler et étude", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — QCM", points: 4,
          enonce: R`<p>Pour chaque question, une seule réponse est exacte. Justifier.</p><ol>
<li>\(e^{2x}\times e^{-x}=\) a) \(e^{-2x^2}\) ; b) \(e^{x}\) ; c) \(e^{3x}\).</li>
<li>L'ensemble des solutions de \(e^{-x}\gt 1\) est : a) \(]-\infty\,;0[\) ; b) \(]0\,;+\infty[\) ; c) \(]-1\,;+\infty[\).</li>
<li>La suite \(u_n=2e^{3n}\) est : a) arithmétique de raison \(3\) ; b) géométrique de raison \(3\) ; c) géométrique de raison \(e^3\).</li>
<li>La fonction \(t\mapsto e^{-2t}\) est sur \(\mathbb{R}\) : a) croissante ; b) décroissante ; c) ni l'un ni l'autre.</li></ol>`,
          correction: R`<p><b>1 pt par question (0,5 réponse + 0,5 justification).</b></p><ol>
<li><b>b)</b> \(e^{2x+(-x)}=e^x\).</li>
<li><b>a)</b> \(e^{-x}\gt e^0\iff -x\gt 0\iff x\lt 0\).</li>
<li><b>c)</b> \(u_{n+1}=2e^{3n+3}=2e^{3n}\times e^3=u_n\times e^3\).</li>
<li><b>b)</b> Sa dérivée \(-2e^{-2t}\) est strictement négative.</li></ol>` },
        { titre: "Exercice 2 — Le chocolat chaud refroidit", points: 6,
          enonce: R`<p>On sert un chocolat chaud dans une pièce à \(20\) °C. Sa température, en °C, \(t\) minutes après avoir été servi, est \(T(t)=20+70e^{-0{,}1t}\), pour \(t\geqslant 0\).</p><ol><li>Quelle est la température du chocolat au moment où il est servi ? Au bout de \(10\) minutes (à \(0{,}1\) près) ?</li><li>Calculer \(T'(t)\) et en déduire le sens de variation de \(T\).</li><li>Montrer que pour tout \(t\geqslant 0\), \(T(t)\gt 20\). Interpréter.</li><li>On peut boire le chocolat sans se brûler quand sa température est inférieure à \(40\) °C. Écrire un programme Python qui renvoie le nombre entier de minutes à attendre. Le programme renvoie \(13\) : vérifier ce résultat par le calcul de deux valeurs bien choisies.</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> \(T(0)=20+70=90\) °C. \(T(10)=20+70e^{-1}\approx 45{,}8\) °C.</li>
<li><b>(1,5 pt)</b> \(T'(t)=70\times(-0{,}1)e^{-0{,}1t}=-7e^{-0{,}1t}\lt 0\) car une exponentielle est strictement positive. \(T\) est strictement décroissante : le chocolat refroidit.</li>
<li><b>(1 pt)</b> \(70e^{-0{,}1t}\gt 0\), donc \(T(t)=20+70e^{-0{,}1t}\gt 20\). Le chocolat ne descend jamais en dessous de la température de la pièce (il s'en approche).</li>
<li><b>(2,5 pts : programme 1,5 pt, vérification 1 pt)</b>
<pre><code>from math import exp
t = 0
while 20 + 70*exp(-0.1*t) &gt;= 40:
    t = t + 1
print(t)</code></pre>
\(T(12)=20+70e^{-1{,}2}\approx 41{,}1\gt 40\) et \(T(13)=20+70e^{-1{,}3}\approx 39{,}1\lt 40\). Comme \(T\) est décroissante, il faut attendre \(13\) minutes.</li></ol>` },
        { titre: "Exercice 3 — Méthode d'Euler", points: 5,
          enonce: R`<p>On note \(f\) la fonction exponentielle. On applique la méthode d'Euler avec un pas \(h=0{,}25\) : \(y_0=1\) et \(y_{k+1}=(1+h)y_k\), où \(y_k\) est une approximation de \(f(kh)\).</p><ol><li>Justifier la relation \(y_{k+1}=(1+h)y_k\) à partir de \(f'=f\).</li><li>Calculer \(y_1\), \(y_2\), \(y_3\), \(y_4\) (valeurs exactes). Quelle valeur approchée de \(e\) obtient-on ?</li><li>Compléter le programme suivant pour qu'il affiche les \(y_k\) successifs jusqu'à \(x=1\) :
<pre><code>h = 0.25
x = 0
y = 1
while x &lt; 1:
    y = ......
    x = ......
    print(x, y)</code></pre></li>
<li>On admet que \(e^x\geqslant 1+x\) pour tout réel \(x\). Montrer que \(y_1\leqslant e^{h}\), puis expliquer pourquoi la méthode donne toujours des valeurs inférieures aux vraies valeurs.</li></ol>`,
          correction: R`<ol><li><b>(1 pt)</b> Approximation affine : \(f(x+h)\approx f(x)+hf'(x)=f(x)+hf(x)=(1+h)f(x)\). On remplace « \(\approx\) » par la définition de la suite.</li>
<li><b>(1,5 pt)</b> \(y_1=1{,}25\), \(y_2=1{,}5625\), \(y_3=1{,}953125\), \(y_4=2{,}44140625\). Donc \(e=f(1)\approx 2{,}44\), ce qui est assez loin de \(e\approx 2{,}718\) : le pas est trop grand.</li>
<li><b>(1,5 pt)</b> <code>y = (1 + h) * y</code> et <code>x = x + h</code>.</li>
<li><b>(1 pt)</b> \(y_1=1+h\leqslant e^h\) d'après l'inégalité. Plus généralement, si \(y_k\leqslant e^{kh}\), alors \(y_{k+1}=(1+h)y_k\leqslant e^h\times e^{kh}=e^{(k+1)h}\) (car \(1+h\gt 0\)). De proche en proche, toutes les valeurs approchées sont inférieures aux vraies : la courbe de \(\exp\) est au-dessus de ses tangentes, et on avance toujours « le long des tangentes ».</li></ol>` },
        { titre: "Exercice 4 — Étude de x e^(-x)", points: 5,
          enonce: R`<p>Soit \(f(x)=xe^{-x}\) sur \(\mathbb{R}\).</p><ol><li>Montrer que \(f'(x)=(1-x)e^{-x}\).</li><li>Dresser le tableau de variations de \(f\).</li><li>En déduire que pour tout réel \(x\), \(xe^{-x}\leqslant\dfrac1e\), puis que \(x\leqslant e^{x-1}\).</li><li>Déterminer l'équation de la tangente à la courbe de \(f\) en \(0\).</li></ol>`,
          correction: R`<ol><li><b>(1,5 pt)</b> \(u=x\), \(u'=1\), \(v=e^{-x}\), \(v'=-e^{-x}\) : \(f'(x)=e^{-x}-xe^{-x}=(1-x)e^{-x}\).</li>
<li><b>(1,5 pt)</b> \(e^{-x}\gt 0\), donc \(f'(x)\) a le signe de \(1-x\). \(f(1)=e^{-1}=\dfrac1e\).
<table class="tv">
<tr><td>\(x\)</td><td>\(-\infty\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
<tr><td>signe de \(f'(x)\)</td><td></td><td>\(+\)</td><td>\(0\)</td><td>\(-\)</td><td></td></tr>
<tr><td>variations de \(f\)</td><td></td><td>↗</td><td>\(\frac1e\)</td><td>↘</td><td></td></tr>
</table></li>
<li><b>(1,5 pt)</b> Le maximum de \(f\) sur \(\mathbb{R}\) est \(\dfrac1e\), donc \(xe^{-x}\leqslant\dfrac1e\). En multipliant par \(e^x\gt 0\) : \(x\leqslant\dfrac{e^x}{e}=e^{x-1}\).</li>
<li><b>(0,5 pt)</b> \(f(0)=0\), \(f'(0)=1\) : tangente \(y=x\).</li></ol>` }
      ] }
  ]
});
})();
