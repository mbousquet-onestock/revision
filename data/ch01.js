(function () {
const R = String.raw;
(window.CHAPTERS = window.CHAPTERS || []).push({
  id: 1,
  titre: "Algorithmique et raisonnement logique",
  partie: "Algorithmique et programmation",
  emoji: "🧠",
  accroche: R`Ta playlist, ton historique de messages, le classement d'un jeu vidéo : tout ça, ce sont des <b>listes</b> ! Dans ce chapitre, tu apprends à les manipuler en Python… et à raisonner comme un détective : contre-exemple, contraposée, raisonnement par l'absurde. De quoi gagner tous tes débats (en maths, en tout cas) 🕵️.`,

  videos: [
    { titre: "Les listes en Python : création et manipulation", recherche: "Yvan Monka listes Python première spécialité", duree: "≈ 12 min", resume: R`Créer une liste, accéder à un élément par son indice, utiliser <b>append</b>, <b>len</b> et l'indice <b>-1</b>.` },
    { titre: "Générer une liste en compréhension", recherche: "Yvan Monka liste en compréhension Python", duree: "≈ 8 min", resume: R`Écrire en une ligne des listes comme <b>[k**2 for k in range(10)]</b>, avec ou sans condition <b>if</b>.` },
    { titre: "Parcourir une liste avec une boucle for", recherche: "Python parcourir une liste boucle for indice élément lycée", duree: "≈ 10 min", resume: R`La différence entre <b>for x in L</b> (on parcourt les valeurs) et <b>for i in range(len(L))</b> (on parcourt les indices).` },
    { titre: "Ensembles : inclusion, intersection, réunion", recherche: "Yvan Monka intersection réunion ensembles seconde", duree: "≈ 7 min", resume: R`Les symboles \(\in\), \(\subset\), \(\cap\), \(\cup\) expliqués sur des exemples et des intervalles.` },
    { titre: "Implication, réciproque et contraposée", recherche: "Yvan Monka réciproque contraposée implication", duree: "≈ 9 min", resume: R`Comment écrire la réciproque et la contraposée d'une implication, et laquelle a la même valeur de vérité.` },
    { titre: "Condition nécessaire, condition suffisante", recherche: "condition nécessaire condition suffisante maths lycée explication", duree: "≈ 8 min", resume: R`Savoir dire si « \(P\) » est nécessaire, suffisante ou les deux pour « \(Q\) ».` },
    { titre: "Raisonnement par l'absurde : racine de 2 est irrationnel", recherche: "Yvan Monka raisonnement par l'absurde racine de 2 irrationnel", duree: "≈ 7 min", resume: R`La démonstration classique, pas à pas : on suppose le contraire et on tombe sur une contradiction.` },
    { titre: "Négation d'une proposition et quantificateurs", recherche: "négation quantificateur pour tout il existe maths lycée", duree: "≈ 8 min", resume: R`Nier « pour tout » donne « il existe », nier « et » donne « ou » : les règles à connaître par cœur.` }
  ],

  cours: [
    { titre: "1. Les listes en Python", html: R`
<div class="def"><b>Définition.</b> Une <b>liste</b> est une suite ordonnée d'éléments, écrite entre crochets et séparés par des virgules : <b>L = [3, 7, 1, 9]</b>. Les éléments sont repérés par leur <b>indice</b> (leur position), qui commence à <b>0</b>.</div>
<p><b>Accéder aux éléments</b> : si <b>L = [3, 7, 1, 9]</b> alors</p>
<ul>
<li><b>L[0]</b> vaut 3 (premier élément), <b>L[3]</b> vaut 9 ;</li>
<li><b>L[-1]</b> vaut 9 : c'est le <b>dernier</b> élément (<b>L[-2]</b> est l'avant-dernier) ;</li>
<li><b>len(L)</b> vaut 4 : c'est le nombre d'éléments. Les indices vont donc de 0 à <b>len(L) - 1</b>.</li>
</ul>
<div class="warn"><b>Piège n°1.</b> Avec une liste de 4 éléments, <b>L[4]</b> provoque une erreur (<i>IndexError</i>) : le dernier indice est 3, pas 4 !</div>

<h4>Générer une liste</h4>
<ul>
<li><b>En extension</b> : on écrit tous les éléments, <b>L = [2, 4, 6, 8]</b>. La liste vide s'écrit <b>[]</b>.</li>
<li><b>Avec range</b> : <b>list(range(5))</b> donne <b>[0, 1, 2, 3, 4]</b> ; <b>list(range(2, 11, 3))</b> donne <b>[2, 5, 8]</b> (de 2 inclus à 11 <b>exclu</b>, de 3 en 3).</li>
<li><b>En compréhension</b> : <b>[expression for variable in ... if condition]</b>. Par exemple <b>[k**2 for k in range(5)]</b> donne <b>[0, 1, 4, 9, 16]</b> et <b>[x for x in range(20) if x % 3 == 0]</b> donne <b>[0, 3, 6, 9, 12, 15, 18]</b>.</li>
<li><b>Avec une boucle et append</b> :</li>
</ul>
<pre><code>L = []
for k in range(5):
    L.append(2 * k + 1)
print(L)   # [1, 3, 5, 7, 9]</code></pre>

<h4>Ajouter et supprimer des éléments</h4>
<table class="tv">
<tr><td><b>Instruction</b></td><td><b>Effet</b></td></tr>
<tr><td>L.append(x)</td><td>ajoute x à la <b>fin</b> de la liste</td></tr>
<tr><td>L.insert(i, x)</td><td>insère x à l'indice i (les suivants sont décalés)</td></tr>
<tr><td>L.pop()</td><td>supprime le dernier élément et le renvoie</td></tr>
<tr><td>L.pop(i)</td><td>supprime l'élément d'indice i et le renvoie</td></tr>
<tr><td>L.remove(x)</td><td>supprime la <b>première occurrence</b> de la <b>valeur</b> x</td></tr>
<tr><td>del L[i]</td><td>supprime l'élément d'indice i</td></tr>
<tr><td>L[i] = x</td><td>remplace l'élément d'indice i par x</td></tr>
</table>
<div class="ex"><b>Exemple.</b> On part de <b>L = [3, 7, 1, 9, 4]</b>.
<pre><code>L.append(5)    # [3, 7, 1, 9, 4, 5]
L.insert(0, 8) # [8, 3, 7, 1, 9, 4, 5]
L.pop(2)       # renvoie 7 ; L = [8, 3, 1, 9, 4, 5]
L.remove(9)    # [8, 3, 1, 4, 5]
del L[0]       # [3, 1, 4, 5]</code></pre></div>
<div class="warn"><b>Piège n°2.</b> <b>pop</b> et <b>del</b> travaillent avec un <b>indice</b>, alors que <b>remove</b> travaille avec une <b>valeur</b>. Sur <b>L = [5, 0, 2]</b>, <b>L.remove(2)</b> enlève le nombre 2 (résultat <b>[5, 0]</b>) alors que <b>L.pop(2)</b> enlève l'élément d'indice 2 (ici aussi le 2, mais <b>L.pop(0)</b> enlèverait le 5).</div>

<h4>Parcourir une liste</h4>
<p>Deux façons de faire, à bien distinguer :</p>
<pre><code>notes = [12, 8, 15]

for x in notes:              # on parcourt les VALEURS
    print(x)                 # affiche 12 puis 8 puis 15

for i in range(len(notes)):  # on parcourt les INDICES
    print(i, notes[i])       # affiche 0 12 puis 1 8 puis 2 15</code></pre>
<div class="astuce"><b>Astuce.</b> Utilise <b>for x in L</b> quand seule la valeur compte (somme, maximum…) et <b>for i in range(len(L))</b> quand tu as besoin de la position (comparer deux voisins <b>L[i]</b> et <b>L[i+1]</b>, renvoyer un indice…).</div>
<div class="ex"><b>Exemple résolu : la moyenne d'une liste.</b>
<pre><code>def moyenne(L):
    s = 0
    for x in L:
        s = s + x
    return s / len(L)

print(moyenne([12, 8, 15, 10, 9, 18]))   # 12.0</code></pre>
La somme vaut \(72\), il y a \(6\) notes, donc la moyenne est \(72 \div 6 = 12\).</div>
` },
    { titre: "2. Vocabulaire des ensembles", html: R`
<div class="def"><b>Ensemble.</b> Un ensemble est une collection d'objets appelés <b>éléments</b>. On note \(x \in E\) (« \(x\) appartient à \(E\) ») et \(x \notin E\) sinon. L'ensemble vide se note \(\varnothing\).</div>
<p>Exemples : \(\{1 ; 2 ; 3\}\) (ensemble écrit en extension), les ensembles de nombres \(\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}\), les intervalles comme \([0 ; 1]\).</p>
<div class="def"><b>Inclusion.</b> \(A \subset B\) (« \(A\) est inclus dans \(B\) ») signifie que <b>tout</b> élément de \(A\) est aussi un élément de \(B\). On dit que \(A\) est une <b>partie</b> (ou un sous-ensemble) de \(B\).</div>
<div class="warn"><b>Piège.</b> \(\in\) relie un <b>élément</b> à un ensemble, \(\subset\) relie deux <b>ensembles</b>. On écrit \(2 \in \{1;2;3\}\) mais \(\{2\} \subset \{1;2;3\}\).</div>
<div class="def"><b>Intersection et réunion.</b>
<ul>
<li>\(A \cap B\) (« \(A\) inter \(B\) ») est l'ensemble des éléments qui sont dans \(A\) <b>et</b> dans \(B\).</li>
<li>\(A \cup B\) (« \(A\) union \(B\) ») est l'ensemble des éléments qui sont dans \(A\) <b>ou</b> dans \(B\) (ou dans les deux).</li>
<li>Si \(A \subset E\), le <b>complémentaire</b> de \(A\) dans \(E\), noté \(\overline{A}\), est l'ensemble des éléments de \(E\) qui ne sont pas dans \(A\).</li>
</ul></div>
<div class="ex"><b>Exemple.</b> \(A = \{1;2;3;4;6\}\) et \(B = \{2;4;5;6;8\}\). Alors \(A \cap B = \{2;4;6\}\) et \(A \cup B = \{1;2;3;4;5;6;8\}\).<br>
Avec des intervalles : \([-2;5] \cap \,]3;8] = \,]3;5]\) et \([-2;5] \cup \,]3;8] = [-2;8]\).</div>
<div class="def"><b>Produit cartésien.</b> Le produit cartésien de \(A\) et \(B\), noté \(A \times B\), est l'ensemble des <b>couples</b> \((a ; b)\) avec \(a \in A\) et \(b \in B\).
\[A \times B = \{(a;b) \,:\, a \in A,\ b \in B\}\]</div>
<div class="ex"><b>Exemple.</b> \(\{0;1\} \times \{a;b;c\} = \{(0;a),(0;b),(0;c),(1;a),(1;b),(1;c)\}\) : il y a \(2 \times 3 = 6\) couples.<br>
\(\mathbb{R} \times \mathbb{R}\), noté \(\mathbb{R}^2\), est l'ensemble des coordonnées des points du plan.</div>
<div class="prop"><b>Nombre d'éléments.</b> Si \(A\) a \(n\) éléments et \(B\) en a \(p\), alors \(A \times B\) a \(n \times p\) éléments.</div>
<div class="warn"><b>Piège.</b> Dans un couple, l'ordre compte : \((0;a) \ne (a;0)\). Et \(A \times B\) n'est en général pas égal à \(B \times A\).</div>
<div class="astuce"><b>En Python.</b> On obtient la liste des couples de \(A \times B\) avec une double compréhension : <b>[(a, b) for a in A for b in B]</b>.</div>
` },
    { titre: "3. Propositions, négation et quantificateurs", html: R`
<div class="def"><b>Proposition.</b> Une proposition est un énoncé qui est soit <b>vrai</b>, soit <b>faux</b>. Exemples : « \(7\) est premier » (vraie), « \(2+2=5\) » (fausse).</div>
<div class="def"><b>Négation.</b> La négation de \(P\), notée « non \(P\) », est vraie quand \(P\) est fausse et fausse quand \(P\) est vraie.</div>
<div class="prop"><b>Négation de « et » / « ou ».</b>
<ul>
<li>non (\(P\) et \(Q\)) \(=\) (non \(P\)) <b>ou</b> (non \(Q\)) ;</li>
<li>non (\(P\) ou \(Q\)) \(=\) (non \(P\)) <b>et</b> (non \(Q\)).</li>
</ul></div>
<div class="ex"><b>Exemple.</b> La négation de « \(x \geqslant 2\) et \(y \lt 1\) » est « \(x \lt 2\) ou \(y \geqslant 1\) ».</div>
<div class="def"><b>Quantificateurs.</b>
<ul>
<li>« <b>pour tout</b> \(x\) » (noté \(\forall x\)) : la propriété est vraie pour chaque \(x\), sans exception ;</li>
<li>« <b>il existe</b> \(x\) » (noté \(\exists x\)) : la propriété est vraie pour <b>au moins un</b> \(x\).</li>
</ul></div>
<div class="prop"><b>Négation des quantificateurs.</b>
<ul>
<li>non (« pour tout \(x\), \(P(x)\) ») \(=\) « il existe \(x\) tel que non \(P(x)\) » ;</li>
<li>non (« il existe \(x\) tel que \(P(x)\) ») \(=\) « pour tout \(x\), non \(P(x)\) ».</li>
</ul></div>
<div class="ex"><b>Exemples.</b>
<ul>
<li>Négation de « pour tout réel \(x\), \(x^2 \geqslant 0\) » : « il existe un réel \(x\) tel que \(x^2 \lt 0\) ».</li>
<li>Négation de « tous les élèves de la classe ont un portable » : « <b>au moins un</b> élève de la classe n'a pas de portable » (et surtout pas « aucun élève n'a de portable » !).</li>
</ul></div>
<div class="def"><b>Contre-exemple.</b> Pour montrer qu'une proposition « pour tout \(x\), \(P(x)\) » est <b>fausse</b>, il suffit de trouver <b>un seul</b> \(x\) pour lequel \(P(x)\) est fausse : c'est un contre-exemple.</div>
<div class="ex"><b>Exemple.</b> « Pour tout réel \(x\), \(x^2 \geqslant x\) » est fausse : pour \(x = \frac12\), \(x^2 = \frac14 \lt \frac12\).</div>
<div class="warn"><b>Piège.</b> Vérifier une propriété sur 10, 100 ou 1000 exemples ne la <b>démontre pas</b> ! (\(n^2+n+41\) est premier pour \(n = 0, 1, \dots, 39\), mais pas pour \(n = 40\) : \(40^2+40+41 = 1681 = 41^2\).)</div>
` },
    { titre: "4. Implication, conditions et raisonnements", html: R`
<div class="def"><b>Implication.</b> « \(P \Rightarrow Q\) » se lit « si \(P\) alors \(Q\) ». Elle est vraie quand, à chaque fois que \(P\) est vraie, \(Q\) l'est aussi.</div>
<div class="def"><b>Condition nécessaire / suffisante.</b> Si \(P \Rightarrow Q\) est vraie :
<ul>
<li>\(P\) est une <b>condition suffisante</b> pour \(Q\) (il suffit d'avoir \(P\) pour avoir \(Q\)) ;</li>
<li>\(Q\) est une <b>condition nécessaire</b> pour \(P\) (pour avoir \(P\), il faut forcément \(Q\)).</li>
</ul>
Si \(P \Rightarrow Q\) et \(Q \Rightarrow P\) sont vraies, on écrit \(P \Leftrightarrow Q\) : \(P\) et \(Q\) sont <b>équivalentes</b> (\(P\) est une condition nécessaire et suffisante pour \(Q\)).</div>
<div class="ex"><b>Exemple.</b> « \(x = 2 \Rightarrow x^2 = 4\) » est vraie. Donc « \(x = 2\) » est une condition <b>suffisante</b> pour avoir \(x^2 = 4\), mais pas nécessaire (car \(x = -2\) convient aussi).</div>
<div class="def"><b>Réciproque et contraposée</b> de « \(P \Rightarrow Q\) » :
<ul>
<li>la <b>réciproque</b> est « \(Q \Rightarrow P\) » ;</li>
<li>la <b>contraposée</b> est « non \(Q \Rightarrow\) non \(P\) ».</li>
</ul></div>
<div class="prop"><b>Propriété.</b> Une implication et sa contraposée sont <b>toujours</b> simultanément vraies ou simultanément fausses. En revanche, la réciproque d'une implication vraie peut être fausse.</div>
<div class="ex"><b>Exemple.</b> « Si \(n\) est multiple de 6, alors \(n\) est pair » est vraie.
<ul>
<li>Réciproque : « si \(n\) est pair, alors \(n\) est multiple de 6 » : <b>fausse</b> (contre-exemple : \(n = 4\)).</li>
<li>Contraposée : « si \(n\) est impair, alors \(n\) n'est pas multiple de 6 » : <b>vraie</b>.</li>
</ul></div>
<div class="warn"><b>Piège.</b> Ne confonds pas contraposée et négation ! La négation de « \(P \Rightarrow Q\) » est « \(P\) et non \(Q\) » (il existe un cas où \(P\) est vraie et \(Q\) fausse).</div>

<h4>Raisonnement par contraposition</h4>
<p>Pour démontrer \(P \Rightarrow Q\), il est parfois plus facile de démontrer non \(Q \Rightarrow\) non \(P\).</p>
<div class="ex"><b>Exemple résolu.</b> Montrons que, pour tout entier \(n\), si \(n^2\) est pair alors \(n\) est pair.<br>
On démontre la contraposée : « si \(n\) est impair, alors \(n^2\) est impair ». Si \(n\) est impair, il existe un entier \(k\) tel que \(n = 2k+1\). Alors
\[n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1,\]
et comme \(2k^2+2k\) est un entier, \(n^2\) est impair. La contraposée est vraie, donc l'implication aussi.</div>

<h4>Raisonnement par l'absurde</h4>
<p>Pour démontrer qu'une proposition \(P\) est vraie, on suppose que \(P\) est fausse et on aboutit à une <b>contradiction</b> (une absurdité).</p>
<div class="ex"><b>Démonstration de référence : \(\sqrt2\) est irrationnel.</b><br>
Supposons par l'absurde que \(\sqrt2\) est rationnel : \(\sqrt2 = \frac{p}{q}\) avec \(p\) et \(q\) entiers naturels non nuls et la fraction <b>irréductible</b>.<br>
Alors \(2 = \frac{p^2}{q^2}\), donc \(p^2 = 2q^2\) : \(p^2\) est pair, donc \(p\) est pair (exemple précédent). On écrit \(p = 2k\).<br>
Alors \(4k^2 = 2q^2\), donc \(q^2 = 2k^2\) : \(q^2\) est pair, donc \(q\) est pair.<br>
\(p\) et \(q\) sont tous les deux pairs : la fraction \(\frac pq\) se simplifie par 2, ce qui contredit le fait qu'elle est irréductible. <b>Contradiction</b> : \(\sqrt2\) est donc irrationnel.</div>
<div class="astuce"><b>Quel raisonnement choisir ?</b>
<ul>
<li>Montrer qu'un « pour tout » est faux : un <b>contre-exemple</b>.</li>
<li>Montrer « si … alors … » quand l'hypothèse est peu exploitable : la <b>contraposition</b>.</li>
<li>Montrer qu'un objet « n'existe pas » ou qu'un nombre « n'est pas … » : l'<b>absurde</b>.</li>
</ul></div>
` }
  ],

  quiz: [
    { q: R`On définit <b>L = [4, 8, 15, 16, 23, 42]</b>. Que vaut <b>L[-1]</b> ?`, choix: [R`4`, R`42`, R`23`, R`Une erreur`], bonne: 1, explication: R`L'indice <b>-1</b> désigne le dernier élément de la liste : 42.` },
    { q: R`Que vaut <b>len(list(range(2, 10)))</b> ?`, choix: [R`10`, R`9`, R`8`, R`2`], bonne: 2, explication: R`<b>range(2, 10)</b> donne 2, 3, …, 9 (10 est exclu), soit \(10 - 2 = 8\) nombres.` },
    { q: R`Que donne <b>[2 * k for k in range(4)]</b> ?`, choix: [R`[2, 4, 6, 8]`, R`[0, 2, 4, 6]`, R`[0, 2, 4, 6, 8]`, R`[2, 4, 6]`], bonne: 1, explication: R`\(k\) prend les valeurs 0, 1, 2, 3, donc \(2k\) vaut 0, 2, 4, 6.` },
    { q: R`Avec <b>L = [5, 0, 2]</b>, que devient <b>L</b> après <b>L.remove(0)</b> ?`, choix: [R`[0, 2]`, R`[5, 2]`, R`[5, 0]`, R`Une erreur`], bonne: 1, explication: R`<b>remove</b> supprime la <b>valeur</b> 0 (et non l'élément d'indice 0) : il reste [5, 2].` },
    { q: R`\(A = \{1;2;3\}\) et \(B = \{3;4\}\). Combien d'éléments possède \(A \times B\) ?`, choix: [R`5`, R`4`, R`6`, R`1`], bonne: 2, explication: R`\(A\) a 3 éléments, \(B\) en a 2, donc \(A \times B\) contient \(3 \times 2 = 6\) couples.` },
    { q: R`Quelle est la négation de « tous les élèves ont un stylo » ?`, choix: [R`Aucun élève n'a de stylo.`, R`Au moins un élève n'a pas de stylo.`, R`Tous les élèves n'ont pas de stylo.`, R`Au moins un élève a un stylo.`], bonne: 1, explication: R`La négation de « pour tout » est « il existe … tel que non … » : il suffit d'<b>un</b> élève sans stylo.` },
    { q: R`Quelle est la contraposée de « si \(P\) alors \(Q\) » ?`, choix: [R`Si \(Q\) alors \(P\).`, R`Si non \(P\) alors non \(Q\).`, R`Si non \(Q\) alors non \(P\).`, R`\(P\) et non \(Q\).`], bonne: 2, explication: R`La contraposée échange <b>et</b> nie : « si non \(Q\) alors non \(P\) ». « Si \(Q\) alors \(P\) » est la réciproque.` },
    { q: R`Pour un réel \(x\), « \(x = 3\) » est, pour « \(x^2 = 9\) », une condition…`, choix: [R`nécessaire mais pas suffisante`, R`suffisante mais pas nécessaire`, R`nécessaire et suffisante`, R`ni nécessaire ni suffisante`], bonne: 1, explication: R`Si \(x = 3\) alors \(x^2 = 9\) : c'est suffisant. Mais ce n'est pas nécessaire car \(x = -3\) donne aussi \(x^2 = 9\).` }
  ],

  exercices: [
    { niveau: 1, titre: "Indices, len et modifications", enonce: R`
<p>On exécute le programme suivant.</p>
<pre><code>L = [3, 7, 1, 9, 4]
print(L[0], L[2], L[-1], len(L))
L.append(5)
L.insert(0, 8)
x = L.pop(2)
L.remove(9)
del L[0]
print(x, L)</code></pre>
<ol><li>Qu'affiche la première instruction <b>print</b> ?</li>
<li>Donne le contenu de <b>L</b> après chaque ligne, puis ce qu'affiche le dernier <b>print</b>.</li></ol>`,
      indice: R`Les indices commencent à 0. <b>pop(2)</b> et <b>del L[0]</b> utilisent un indice, <b>remove(9)</b> une valeur.`,
      correction: R`
<ol><li><b>L[0]</b> est le premier élément : 3. <b>L[2]</b> est le troisième : 1. <b>L[-1]</b> est le dernier : 4. La liste contient 5 éléments. Affichage : <b>3 1 4 5</b>.</li>
<li><ul>
<li><b>L.append(5)</b> : ajout à la fin, <b>L = [3, 7, 1, 9, 4, 5]</b>.</li>
<li><b>L.insert(0, 8)</b> : 8 est placé à l'indice 0, <b>L = [8, 3, 7, 1, 9, 4, 5]</b>.</li>
<li><b>x = L.pop(2)</b> : l'élément d'indice 2 est 7 ; il est retiré et stocké dans x. <b>x = 7</b> et <b>L = [8, 3, 1, 9, 4, 5]</b>.</li>
<li><b>L.remove(9)</b> : on retire la valeur 9, <b>L = [8, 3, 1, 4, 5]</b>.</li>
<li><b>del L[0]</b> : on retire l'élément d'indice 0 (le 8), <b>L = [3, 1, 4, 5]</b>.</li>
</ul>
Le dernier <b>print</b> affiche :
<pre><code>7 [3, 1, 4, 5]</code></pre></li></ol>` },

    { niveau: 1, titre: "Listes en compréhension", enonce: R`
<ol><li>Donne le contenu de chacune des listes suivantes.
<pre><code>A = [k**2 for k in range(5)]
B = list(range(2, 11, 3))
C = [2*k + 1 for k in range(4)]
D = [x for x in range(20) if x % 3 == 0]</code></pre></li>
<li>Écris en compréhension la liste <b>[10, 20, 30, …, 100]</b>.</li>
<li>Écris en compréhension la liste des nombres pairs compris entre 0 et 30 (inclus) qui ne sont pas multiples de 4.</li></ol>`,
      indice: R`<b>range(n)</b> va de 0 à \(n-1\). <b>x % 3 == 0</b> signifie « le reste de la division de x par 3 est nul ».`,
      correction: R`
<ol><li><ul>
<li>\(k\) prend les valeurs 0, 1, 2, 3, 4, donc <b>A = [0, 1, 4, 9, 16]</b>.</li>
<li>On part de 2, on avance de 3 en 3 et on s'arrête avant 11 : <b>B = [2, 5, 8]</b>.</li>
<li>\(2k+1\) pour \(k = 0, 1, 2, 3\) : <b>C = [1, 3, 5, 7]</b>.</li>
<li>On garde les multiples de 3 entre 0 et 19 : <b>D = [0, 3, 6, 9, 12, 15, 18]</b>.</li>
</ul></li>
<li>Les nombres sont \(10k\) pour \(k\) allant de 1 à 10 :
<pre><code>[10 * k for k in range(1, 11)]</code></pre>
(Autre solution : <b>list(range(10, 101, 10))</b>.)</li>
<li>
<pre><code>[x for x in range(0, 31, 2) if x % 4 != 0]</code></pre>
qui donne <b>[2, 6, 10, 14, 18, 22, 26, 30]</b>.</li></ol>` },

    { niveau: 1, titre: "Intersection, réunion, produit cartésien", enonce: R`
<ol><li>On considère \(A = \{1;2;3;4;6\}\) et \(B = \{2;4;5;6;8\}\).
<ol type="a"><li>Détermine \(A \cap B\) et \(A \cup B\).</li>
<li>Vrai ou faux : \(5 \in A\) ; \(\{2;4\} \subset A\) ; \(A \cap B \subset B\) ?</li></ol></li>
<li>On considère les intervalles \(I = [-2;5]\) et \(J = \,]3;8]\). Détermine \(I \cap J\) et \(I \cup J\).</li>
<li>Écris en extension le produit cartésien \(\{0;1\} \times \{a;b;c\}\). Combien a-t-il d'éléments ?</li></ol>`,
      indice: R`« \(\cap\) » = dans les deux (« et »), « \(\cup\) » = dans l'un ou l'autre (« ou »). Pour les intervalles, dessine-les sur une droite graduée.`,
      correction: R`
<ol><li><ol type="a"><li>Les éléments communs sont 2, 4 et 6 : \(A \cap B = \{2;4;6\}\). En regroupant tous les éléments (sans répétition) : \(A \cup B = \{1;2;3;4;5;6;8\}\).</li>
<li>\(5 \in A\) est <b>faux</b> (5 n'est pas dans \(A\)). \(\{2;4\} \subset A\) est <b>vrai</b> car 2 et 4 sont dans \(A\). \(A \cap B \subset B\) est <b>vrai</b> : un élément de \(A \cap B\) est en particulier dans \(B\) (c'est toujours vrai).</li></ol></li>
<li>Sur une droite graduée, \(I\) va de \(-2\) à \(5\) (inclus) et \(J\) de \(3\) (exclu) à \(8\) (inclus).<br>
La partie commune va de 3 exclu à 5 inclus : \(I \cap J = \,]3;5]\).<br>
Les deux intervalles se chevauchent, leur réunion va de \(-2\) à \(8\) : \(I \cup J = [-2;8]\).</li>
<li>\(\{0;1\} \times \{a;b;c\} = \{(0;a),(0;b),(0;c),(1;a),(1;b),(1;c)\}\). Il contient \(2 \times 3 = 6\) éléments.</li></ol>` },

    { niveau: 1, titre: "Écrire la négation", enonce: R`
<p>Écris la négation de chacune des propositions suivantes, puis indique laquelle de la proposition ou de sa négation est vraie quand c'est possible.</p>
<ol><li>« Tous les chats sont gris. »</li>
<li>« \(x \geqslant 2\) et \(y \lt 1\) » (où \(x\) et \(y\) sont des réels).</li>
<li>« Il existe un entier \(n\) tel que \(n^2 = 2\). »</li>
<li>« Pour tout réel \(x\), \(x^2 \geqslant 0\). »</li>
<li>« Il pleut ou il fait froid. »</li></ol>`,
      indice: R`« pour tout » devient « il existe … tel que non … » et inversement ; « et » devient « ou » et inversement.`,
      correction: R`
<ol><li>« <b>Il existe au moins un chat qui n'est pas gris.</b> » (C'est la négation qui est vraie : il existe des chats noirs !)</li>
<li>« \(x \lt 2\) <b>ou</b> \(y \geqslant 1\) ». (La négation de \(\geqslant\) est \(\lt\), celle de \(\lt\) est \(\geqslant\), et « et » devient « ou ».) On ne peut pas dire laquelle est vraie sans connaître \(x\) et \(y\).</li>
<li>« <b>Pour tout entier \(n\), \(n^2 \ne 2\).</b> » C'est la négation qui est vraie : \(1^2 = 1\), \(2^2 = 4\), et les carrés d'entiers ne valent jamais 2.</li>
<li>« <b>Il existe un réel \(x\) tel que \(x^2 \lt 0\).</b> » C'est la proposition de départ qui est vraie : un carré est toujours positif ou nul.</li>
<li>« <b>Il ne pleut pas et il ne fait pas froid.</b> » On ne peut pas savoir laquelle est vraie sans regarder par la fenêtre 😉.</li></ol>` },

    { niveau: 2, titre: "Statistiques d'une liste de notes", enonce: R`
<p>On donne la liste <b>notes = [12, 8, 15, 10, 9, 18]</b>.</p>
<ol><li>Complète la fonction suivante pour qu'elle renvoie la moyenne de la liste <b>L</b>.
<pre><code>def moyenne(L):
    s = 0
    for x in L:
        s = ...
    return ...</code></pre></li>
<li>Écris une fonction <b>nb_admis(L)</b> qui renvoie le nombre de notes supérieures ou égales à 10.</li>
<li>Écris une fonction <b>indices_faibles(L)</b> qui renvoie la liste des <b>indices</b> des notes strictement inférieures à 10.</li>
<li>Qu'affichent <b>moyenne(notes)</b>, <b>nb_admis(notes)</b> et <b>indices_faibles(notes)</b> ?</li></ol>`,
      indice: R`Pour la question 3, tu as besoin de la position : utilise <b>for i in range(len(L))</b> et teste <b>L[i]</b>.`,
      correction: R`
<ol><li>On accumule la somme dans <b>s</b>, puis on divise par le nombre de notes :
<pre><code>def moyenne(L):
    s = 0
    for x in L:
        s = s + x
    return s / len(L)</code></pre></li>
<li>On utilise un compteur :
<pre><code>def nb_admis(L):
    c = 0
    for x in L:
        if x &gt;= 10:
            c = c + 1
    return c</code></pre></li>
<li>On parcourt les indices et on garde ceux qui conviennent :
<pre><code>def indices_faibles(L):
    res = []
    for i in range(len(L)):
        if L[i] &lt; 10:
            res.append(i)
    return res</code></pre>
(Version en compréhension : <b>[i for i in range(len(L)) if L[i] &lt; 10]</b>.)</li>
<li>Somme : \(12+8+15+10+9+18 = 72\), et \(72 \div 6 = 12\). Les notes \(\geqslant 10\) sont 12, 15, 10, 18 : il y en a 4. Les notes \(\lt 10\) sont 8 (indice 1) et 9 (indice 4).
<pre><code>12.0
4
[1, 4]</code></pre></li></ol>` },

    { niveau: 2, titre: "Années bissextiles", enonce: R`
<p>Une année est <b>bissextile</b> si elle est divisible par 4 mais pas par 100, <b>ou</b> si elle est divisible par 400.</p>
<ol><li>2024, 1900, 2000 et 2023 sont-elles bissextiles ?</li>
<li>Écris une fonction <b>bissextile(a)</b> qui renvoie <b>True</b> si l'année <b>a</b> est bissextile et <b>False</b> sinon.</li>
<li>Écris en compréhension la liste des années bissextiles de 1890 à 1920 (incluses) et donne son contenu.</li>
<li>Combien y a-t-il d'années bissextiles de 2001 à 2100 ? Écris l'instruction Python qui permet de le vérifier.</li></ol>`,
      indice: R`« a divisible par 4 » s'écrit <b>a % 4 == 0</b>. Attention aux parenthèses entre le « et » et le « ou ».`,
      correction: R`
<ol><li><ul>
<li>2024 est divisible par 4 et pas par 100 : <b>bissextile</b>.</li>
<li>1900 est divisible par 4 mais aussi par 100, et pas par 400 (\(1900 = 4 \times 475\)) : <b>pas bissextile</b>.</li>
<li>2000 est divisible par 400 : <b>bissextile</b>.</li>
<li>2023 est impaire, donc pas divisible par 4 : <b>pas bissextile</b>.</li></ul></li>
<li>
<pre><code>def bissextile(a):
    return (a % 4 == 0 and a % 100 != 0) or a % 400 == 0</code></pre>
La condition est un booléen : on peut le renvoyer directement, sans <b>if</b>.</li>
<li>
<pre><code>L = [a for a in range(1890, 1921) if bissextile(a)]
print(L)</code></pre>
Affichage : <b>[1892, 1896, 1904, 1908, 1912, 1916, 1920]</b>. Remarque : 1900 n'y est pas !</li>
<li>Les multiples de 4 de 2004 à 2100 sont \(4 \times 501, \dots, 4 \times 525\), soit \(25\) nombres. Parmi eux, 2100 est divisible par 100 mais pas par 400 : il faut l'enlever. Il y a donc <b>24</b> années bissextiles.
<pre><code>print(len([a for a in range(2001, 2101) if bissextile(a)]))   # 24</code></pre></li></ol>` },

    { niveau: 2, titre: "Réciproque, contraposée, CN et CS", enonce: R`
<ol><li>On considère la proposition \(P\) : « si un entier \(n\) est multiple de 6, alors \(n\) est pair ».
<ol type="a"><li>\(P\) est-elle vraie ? Justifie.</li>
<li>Énonce la réciproque de \(P\). Est-elle vraie ?</li>
<li>Énonce la contraposée de \(P\). Est-elle vraie ?</li></ol></li>
<li>Complète par « nécessaire », « suffisante » ou « nécessaire et suffisante » (\(x\) désigne un réel).
<ol type="a"><li>« \(x \gt 5\) » est une condition … pour que « \(x \gt 3\) ».</li>
<li>« \(x^2 = 25\) » est une condition … pour que « \(x = 5\) ».</li>
<li>« \(2x + 1 = 7\) » est une condition … pour que « \(x = 3\) ».</li></ol></li></ol>`,
      indice: R`Si \(P \Rightarrow Q\) est vraie, alors \(P\) est suffisante pour \(Q\) et \(Q\) est nécessaire pour \(P\).`,
      correction: R`
<ol><li><ol type="a"><li>Si \(n\) est multiple de 6, il existe un entier \(k\) tel que \(n = 6k = 2 \times (3k)\). Comme \(3k\) est entier, \(n\) est pair : \(P\) est <b>vraie</b>.</li>
<li>Réciproque : « si \(n\) est pair, alors \(n\) est multiple de 6 ». Elle est <b>fausse</b> : contre-exemple \(n = 4\), pair mais pas multiple de 6.</li>
<li>Contraposée : « si \(n\) n'est pas pair (donc impair), alors \(n\) n'est pas multiple de 6 ». Elle est <b>vraie</b>, car une implication et sa contraposée ont toujours la même valeur de vérité.</li></ol></li>
<li><ol type="a"><li>Si \(x \gt 5\) alors \(x \gt 3\), mais \(x = 4\) vérifie \(x \gt 3\) sans vérifier \(x \gt 5\). Donc « \(x \gt 5\) » est une condition <b>suffisante</b> (non nécessaire).</li>
<li>Si \(x = 5\) alors \(x^2 = 25\) : pour avoir \(x = 5\), il <b>faut</b> \(x^2 = 25\). Mais \(x^2 = 25\) n'implique pas \(x = 5\) (\(x = -5\) convient). C'est une condition <b>nécessaire</b> (non suffisante).</li>
<li>\(2x + 1 = 7 \Leftrightarrow 2x = 6 \Leftrightarrow x = 3\) : condition <b>nécessaire et suffisante</b>.</li></ol></li></ol>` },

    { niveau: 2, titre: "La chasse aux contre-exemples", enonce: R`
<p>Montre que chacune des propositions suivantes est fausse.</p>
<ol><li>« Pour tout réel \(x\), \(x^2 \geqslant x\). »</li>
<li>« Pour tout réel \(x\), \((x+1)^2 = x^2 + 1\). »</li>
<li>« Pour tout réel \(x\), \(\sqrt{x^2} = x\). »</li>
<li>« Pour tout entier naturel \(n\), \(n^2 + n + 41\) est un nombre premier. » (Indice : essaie \(n = 40\).)</li></ol>`,
      indice: R`Un seul contre-exemple suffit. Pense aux nombres entre 0 et 1, aux nombres négatifs…`,
      correction: R`
<ol><li>Pour \(x = \frac12\) : \(x^2 = \frac14\) et \(\frac14 \lt \frac12\), donc \(x^2 \lt x\). La proposition est fausse.</li>
<li>Pour \(x = 1\) : \((1+1)^2 = 4\) alors que \(1^2 + 1 = 2\). La proposition est fausse (en réalité \((x+1)^2 = x^2 + 2x + 1\)).</li>
<li>Pour \(x = -3\) : \(\sqrt{(-3)^2} = \sqrt 9 = 3 \ne -3\). La proposition est fausse (en réalité \(\sqrt{x^2} = |x|\)).</li>
<li>Pour \(n = 40\) : \(40^2 + 40 + 41 = 1600 + 81 = 1681 = 41^2\), qui est divisible par 41 et n'est donc pas premier. La proposition est fausse, bien qu'elle soit vraie pour \(n = 0, 1, \dots, 39\) !</li></ol>` },

    { niveau: 3, titre: "Le tri par sélection", enonce: R`
<p>Pour trier une liste dans l'ordre croissant, le <b>tri par sélection</b> procède ainsi : on cherche le plus petit élément et on l'échange avec le premier ; puis on cherche le plus petit parmi les éléments restants et on l'échange avec le deuxième ; etc.</p>
<pre><code>def tri_selection(L):
    n = len(L)
    for i in range(n - 1):
        imin = i
        for j in range(i + 1, n):
            if L[j] &lt; L[imin]:
                imin = j
        L[i], L[imin] = L[imin], L[i]
    return L</code></pre>
<ol><li>Que contient <b>imin</b> à la fin de la boucle sur <b>j</b> ?</li>
<li>On applique la fonction à <b>[5, 2, 8, 1, 4]</b>. Donne le contenu de la liste à la fin de chaque passage dans la boucle sur <b>i</b>.</li>
<li>Écris une fonction <b>est_triee(L)</b> qui renvoie <b>True</b> si la liste est triée dans l'ordre croissant et <b>False</b> sinon.</li></ol>`,
      indice: R`Pour <b>est_triee</b>, compare chaque élément <b>L[i]</b> avec son voisin <b>L[i + 1]</b> : attention à ne pas sortir de la liste !`,
      correction: R`
<ol><li><b>imin</b> contient l'<b>indice</b> du plus petit élément parmi <b>L[i], L[i+1], …, L[n-1]</b>. La ligne suivante échange cet élément avec <b>L[i]</b>.</li>
<li>Ici \(n = 5\), donc \(i\) va de 0 à 3.
<ul>
<li>\(i = 0\) : le minimum de toute la liste est 1 (indice 3) ; on échange 5 et 1 : <b>[1, 2, 8, 5, 4]</b>.</li>
<li>\(i = 1\) : le minimum de [2, 8, 5, 4] est 2, déjà à sa place : <b>[1, 2, 8, 5, 4]</b>.</li>
<li>\(i = 2\) : le minimum de [8, 5, 4] est 4 (indice 4) ; on échange 8 et 4 : <b>[1, 2, 4, 5, 8]</b>.</li>
<li>\(i = 3\) : le minimum de [5, 8] est 5, déjà à sa place : <b>[1, 2, 4, 5, 8]</b>.</li>
</ul>
La fonction renvoie <b>[1, 2, 4, 5, 8]</b>.</li>
<li>Dès que deux voisins sont dans le mauvais ordre, la liste n'est pas triée. Les indices \(i\) vont jusqu'à <b>len(L) - 2</b> pour que <b>L[i + 1]</b> existe :
<pre><code>def est_triee(L):
    for i in range(len(L) - 1):
        if L[i] &gt; L[i + 1]:
            return False
    return True

print(est_triee([1, 2, 4, 5, 8]))   # True
print(est_triee([1, 3, 2]))         # False</code></pre></li></ol>` },

    { niveau: 3, titre: "Démontrer par contraposition", enonce: R`
<p>Soit \(n\) un entier naturel.</p>
<ol><li>Montre que si \(n\) est impair, alors \(n^2\) est impair.</li>
<li>En déduire, en utilisant un raisonnement par contraposition, que : « si \(n^2\) est pair, alors \(n\) est pair ».</li>
<li>Montre par contraposition que : « si \(5n + 3\) est pair, alors \(n\) est impair ».</li>
<li>La réciproque de la proposition de la question 3 est-elle vraie ?</li></ol>`,
      indice: R`Un entier impair s'écrit \(2k + 1\), un entier pair s'écrit \(2k\), avec \(k\) entier.`,
      correction: R`
<ol><li>Si \(n\) est impair, il existe un entier \(k\) tel que \(n = 2k + 1\). Alors
\[n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1.\]
Comme \(2k^2 + 2k\) est un entier, \(n^2\) est impair.</li>
<li>La contraposée de « si \(n^2\) est pair, alors \(n\) est pair » est « si \(n\) n'est pas pair, alors \(n^2\) n'est pas pair », c'est-à-dire « si \(n\) est impair, alors \(n^2\) est impair ». On vient de la démontrer à la question 1. Une implication et sa contraposée étant équivalentes, la propriété est démontrée.</li>
<li>La contraposée est : « si \(n\) est pair, alors \(5n + 3\) est impair ». Si \(n\) est pair, \(n = 2k\) avec \(k\) entier, donc
\[5n + 3 = 10k + 3 = 2(5k + 1) + 1,\]
qui est impair car \(5k+1\) est entier. La contraposée est vraie, donc la proposition aussi.</li>
<li>Réciproque : « si \(n\) est impair, alors \(5n + 3\) est pair ». Si \(n = 2k + 1\), alors \(5n + 3 = 10k + 8 = 2(5k + 4)\) est pair. La réciproque est <b>vraie</b> : on a l'équivalence « \(5n+3\) pair \(\Leftrightarrow\) \(n\) impair ».</li></ol>` },

    { niveau: 3, titre: "Raisonnements par l'absurde", enonce: R`
<ol><li>Démontre par l'absurde qu'il n'existe pas d'entiers naturels \(m\) et \(n\) tels que \(m^2 - n^2 = 2\).<br>
<i>On pourra factoriser \(m^2 - n^2\) et étudier la parité de \(m - n\) et de \(m + n\).</i></li>
<li>Soient \(a\) et \(b\) deux réels <b>strictement</b> positifs. Démontre par l'absurde que \(\sqrt{a + b} \ne \sqrt a + \sqrt b\).</li></ol>`,
      indice: R`Pour la question 1 : \(m + n\) et \(m - n\) diffèrent de \(2n\), qui est pair. Ils ont donc la même parité. Pour la question 2 : élève au carré.`,
      correction: R`
<ol><li>Supposons par l'absurde qu'il existe des entiers naturels \(m\) et \(n\) tels que \(m^2 - n^2 = 2\). Alors \((m - n)(m + n) = 2\).<br>
Or \((m + n) - (m - n) = 2n\) est pair, donc \(m - n\) et \(m + n\) ont la <b>même parité</b>.
<ul>
<li>S'ils sont tous les deux pairs, leur produit est un multiple de \(2 \times 2 = 4\) : impossible car 2 n'est pas multiple de 4.</li>
<li>S'ils sont tous les deux impairs, leur produit est impair : impossible car 2 est pair.</li>
</ul>
Dans tous les cas on obtient une contradiction : de tels entiers n'existent pas.</li>
<li>Supposons par l'absurde que \(\sqrt{a + b} = \sqrt a + \sqrt b\). Les deux membres sont positifs, on peut élever au carré :
\[a + b = (\sqrt a + \sqrt b)^2 = a + 2\sqrt a \sqrt b + b.\]
On en déduit \(2\sqrt a \sqrt b = 0\), donc \(\sqrt a = 0\) ou \(\sqrt b = 0\), c'est-à-dire \(a = 0\) ou \(b = 0\). C'est en contradiction avec \(a \gt 0\) et \(b \gt 0\). Donc \(\sqrt{a + b} \ne \sqrt a + \sqrt b\).</li></ol>` },

    { niveau: 3, titre: "Diviseurs, nombres parfaits et nombres premiers", enonce: R`
<p>On considère la fonction suivante.</p>
<pre><code>def diviseurs(n):
    return [d for d in range(1, n + 1) if n % d == 0]</code></pre>
<ol><li>Que renvoient <b>diviseurs(12)</b> et <b>diviseurs(28)</b> ?</li>
<li>Un entier \(n \geqslant 2\) est <b>parfait</b> s'il est égal à la somme de ses diviseurs autres que lui-même. Vérifie que 28 est parfait, puis écris une instruction qui donne la liste des nombres parfaits de 2 à 1000. (On pourra utiliser <b>sum(L)</b> qui renvoie la somme des éléments de <b>L</b>.) Le programme affiche <b>[6, 28, 496]</b>.</li>
<li>Explique pourquoi un entier \(n \geqslant 2\) est premier si et seulement si <b>len(diviseurs(n)) == 2</b>. Écris alors la liste en compréhension des nombres premiers inférieurs à 30 et donne son contenu.</li>
<li>Vrai ou faux ? Justifie.
<ol type="a"><li>« Tout nombre premier est impair. »</li>
<li>« Il existe un nombre parfait impair inférieur à 1000. »</li></ol></li></ol>`,
      indice: R`Un nombre premier a exactement deux diviseurs : 1 et lui-même. Pour 4a, pense au plus petit nombre premier.`,
      correction: R`
<ol><li>La fonction garde les entiers \(d\) de 1 à \(n\) qui divisent \(n\) :
<pre><code>[1, 2, 3, 4, 6, 12]
[1, 2, 4, 7, 14, 28]</code></pre></li>
<li>\(1 + 2 + 4 + 7 + 14 = 28\) : 28 est bien parfait. La somme des diviseurs autres que \(n\) vaut <b>sum(diviseurs(n)) - n</b>, d'où :
<pre><code>print([n for n in range(2, 1001) if sum(diviseurs(n)) - n == n])
# [6, 28, 496]</code></pre></li>
<li>Pour \(n \geqslant 2\), 1 et \(n\) sont toujours deux diviseurs distincts de \(n\), donc la liste a au moins 2 éléments. \(n\) est premier exactement quand il n'en a pas d'autre, c'est-à-dire quand la liste a exactement 2 éléments.
<pre><code>print([n for n in range(2, 30) if len(diviseurs(n)) == 2])
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]</code></pre></li>
<li><ol type="a"><li><b>Faux</b> : 2 est premier et pair (contre-exemple).</li>
<li><b>Faux</b> : le programme montre que les seuls nombres parfaits de 2 à 1000 sont 6, 28 et 496, qui sont tous pairs. (Ici l'ordinateur a vérifié <b>tous</b> les cas possibles : c'est une vraie preuve, car il n'y en a qu'un nombre fini.)</li></ol></li></ol>` }
  ],

  ds: [
    { titre: "DS n°1 — Listes, ensembles et implications", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Prévoir l'affichage", points: 5, enonce: R`
<p>On exécute le programme suivant.</p>
<pre><code>L = [2, 5, 9]
L.append(L[0] + L[-1])
L.insert(1, 0)
print(L, len(L))
M = [x * 2 for x in L if x &gt; 4]
print(M)
S = 0
for i in range(len(L)):
    S = S + i * L[i]
print(S)</code></pre>
<p>Donne, en justifiant, les trois lignes affichées.</p>`,
          correction: R`
<ul>
<li><b>L[0] + L[-1]</b> vaut \(2 + 9 = 11\), ajouté à la fin : <b>[2, 5, 9, 11]</b>. Puis 0 est inséré à l'indice 1 : <b>[2, 0, 5, 9, 11]</b>, qui a 5 éléments. Affichage : <b>[2, 0, 5, 9, 11] 5</b>. <i>(2 points : 1 pour append, 1 pour insert et len)</i></li>
<li>On garde les éléments \(\gt 4\) (5, 9, 11) et on les double : <b>[10, 18, 22]</b>. <i>(1,5 point)</i></li>
<li>\(S = 0 \times 2 + 1 \times 0 + 2 \times 5 + 3 \times 9 + 4 \times 11 = 0 + 0 + 10 + 27 + 44 = 81\). Affichage : <b>81</b>. <i>(1,5 point)</i></li>
</ul>
<pre><code>[2, 0, 5, 9, 11] 5
[10, 18, 22]
81</code></pre>` },
        { titre: "Exercice 2 — Ensembles", points: 5, enonce: R`
<p>Soit \(E = \{1;2;3;\dots;12\}\) l'ensemble des entiers de 1 à 12. On note \(A\) l'ensemble des multiples de 2 de \(E\) et \(B\) l'ensemble des multiples de 3 de \(E\).</p>
<ol><li>Écris \(A\) et \(B\) en extension.</li>
<li>Détermine \(A \cap B\) et \(A \cup B\). Comment peut-on décrire \(A \cap B\) par une phrase ?</li>
<li>Détermine le complémentaire de \(A \cup B\) dans \(E\).</li>
<li>A-t-on \(B \subset A\) ? Justifie.</li>
<li>Écris en extension \(\{P;F\} \times \{1;2;3\}\) (P = pile, F = face, puis un numéro de 1 à 3). Combien a-t-il d'éléments ?</li></ol>`,
          correction: R`
<ol><li>\(A = \{2;4;6;8;10;12\}\) et \(B = \{3;6;9;12\}\). <i>(1 point)</i></li>
<li>\(A \cap B = \{6;12\}\) : ce sont les multiples de 6 de \(E\) (multiples de 2 <b>et</b> de 3).<br>\(A \cup B = \{2;3;4;6;8;9;10;12\}\). <i>(1,5 point)</i></li>
<li>Les éléments de \(E\) qui ne sont ni multiples de 2 ni multiples de 3 : \(\overline{A \cup B} = \{1;5;7;11\}\). <i>(1 point)</i></li>
<li>Non : \(3 \in B\) mais \(3 \notin A\) (3 est impair). Donc \(B \not\subset A\). <i>(0,5 point)</i></li>
<li>\(\{P;F\} \times \{1;2;3\} = \{(P;1),(P;2),(P;3),(F;1),(F;2),(F;3)\}\) : \(2 \times 3 = 6\) éléments. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Compter dans une liste", points: 5, enonce: R`
<ol><li>Écris une fonction <b>compter(L, v)</b> qui renvoie le nombre de fois où la valeur <b>v</b> apparaît dans la liste <b>L</b>, en utilisant une boucle <b>for x in L</b>.</li>
<li>Écris une fonction <b>positions(L, v)</b> qui renvoie la liste des indices où <b>v</b> apparaît dans <b>L</b>.</li>
<li>On pose <b>T = [3, 1, 3, 2, 3, 1]</b>. Que renvoient <b>compter(T, 3)</b>, <b>positions(T, 1)</b> et <b>positions(T, 7)</b> ?</li></ol>`,
          correction: R`
<ol><li><i>(2 points)</i>
<pre><code>def compter(L, v):
    c = 0
    for x in L:
        if x == v:
            c = c + 1
    return c</code></pre></li>
<li>On a besoin des indices, donc on parcourt <b>range(len(L))</b>. <i>(2 points)</i>
<pre><code>def positions(L, v):
    res = []
    for i in range(len(L)):
        if L[i] == v:
            res.append(i)
    return res</code></pre></li>
<li>3 apparaît aux indices 0, 2 et 4 : <b>compter(T, 3)</b> renvoie <b>3</b>. 1 apparaît aux indices 1 et 5 : <b>[1, 5]</b>. 7 n'apparaît pas : <b>[]</b> (liste vide). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Logique", points: 5, enonce: R`
<p>On considère la proposition \(P\) : « si un quadrilatère est un carré, alors c'est un rectangle ».</p>
<ol><li>\(P\) est-elle vraie ?</li>
<li>Énonce la réciproque de \(P\) et dis si elle est vraie.</li>
<li>Énonce la contraposée de \(P\) et dis si elle est vraie.</li>
<li>Complète : « être un carré est une condition … pour être un rectangle ».</li>
<li>Écris la négation de « pour tout réel \(x\), \(x^2 + 1 \gt 0\) ». Laquelle des deux est vraie ?</li></ol>`,
          correction: R`
<ol><li>Oui : un carré a quatre angles droits, c'est donc un rectangle. \(P\) est vraie. <i>(1 point)</i></li>
<li>Réciproque : « si un quadrilatère est un rectangle, alors c'est un carré ». Elle est <b>fausse</b> : un rectangle de côtés 2 et 1 n'est pas un carré. <i>(1 point)</i></li>
<li>Contraposée : « si un quadrilatère n'est pas un rectangle, alors ce n'est pas un carré ». Elle est <b>vraie</b>, comme \(P\). <i>(1 point)</i></li>
<li>« Être un carré est une condition <b>suffisante</b> (mais pas nécessaire) pour être un rectangle. » <i>(1 point)</i></li>
<li>Négation : « il existe un réel \(x\) tel que \(x^2 + 1 \leqslant 0\) ». C'est la proposition de départ qui est vraie : \(x^2 \geqslant 0\) donc \(x^2 + 1 \geqslant 1 \gt 0\). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°2 — Tris et raisonnements", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Maximum et tri par insertion", points: 7, enonce: R`
<ol><li>Écris une fonction <b>maximum(L)</b> qui renvoie le plus grand élément d'une liste non vide <b>L</b>, <b>sans</b> utiliser la fonction <b>max</b> de Python. Que renvoie <b>maximum([4, -2, 11, 7, 11, 0])</b> ?</li>
<li>On considère la fonction suivante, où <b>L</b> est une liste <b>déjà triée</b> dans l'ordre croissant.
<pre><code>def inserer(L, v):
    i = 0
    while i &lt; len(L) and L[i] &lt; v:
        i = i + 1
    L.insert(i, v)
    return L</code></pre>
<ol type="a"><li>Que renvoient <b>inserer([1, 4, 6, 9], 5)</b>, <b>inserer([1, 4, 6, 9], 10)</b> et <b>inserer([], 3)</b> ?</li>
<li>Pourquoi le test <b>i &lt; len(L)</b> est-il indispensable ?</li></ol></li>
<li>Écris une fonction <b>tri_insertion(L)</b> qui part d'une liste vide <b>R</b>, y insère un par un les éléments de <b>L</b> grâce à <b>inserer</b>, puis renvoie <b>R</b>. Que renvoie <b>tri_insertion([7, 3, 9, 1, 3])</b> ?</li></ol>`,
          correction: R`
<ol><li>On garde en mémoire le plus grand élément rencontré. <i>(2 points)</i>
<pre><code>def maximum(L):
    m = L[0]
    for x in L:
        if x &gt; m:
            m = x
    return m</code></pre>
<b>maximum([4, -2, 11, 7, 11, 0])</b> renvoie <b>11</b>.</li>
<li><ol type="a"><li>La boucle avance tant que les éléments sont plus petits que <b>v</b>. <i>(2 points)</i>
<ul><li>Pour 5 : on dépasse 1 et 4, on s'arrête sur 6 (indice 2) : <b>[1, 4, 5, 6, 9]</b>.</li>
<li>Pour 10 : on dépasse tout, \(i = 4\) : <b>[1, 4, 6, 9, 10]</b>.</li>
<li>Pour la liste vide : \(i = 0\) directement : <b>[3]</b>.</li></ul></li>
<li>Quand <b>v</b> est plus grand que tous les éléments, \(i\) atteint <b>len(L)</b> et <b>L[i]</b> n'existe pas : sans le premier test, on obtiendrait une erreur <i>IndexError</i>. Grâce au <b>and</b>, Python n'évalue pas <b>L[i] &lt; v</b> quand <b>i &lt; len(L)</b> est faux. <i>(1 point)</i></li></ol></li>
<li><i>(2 points)</i>
<pre><code>def tri_insertion(L):
    R = []
    for x in L:
        inserer(R, x)
    return R

print(tri_insertion([7, 3, 9, 1, 3]))   # [1, 3, 3, 7, 9]</code></pre>
Étapes : [7] → [3, 7] → [3, 7, 9] → [1, 3, 7, 9] → [1, 3, 3, 7, 9].</li></ol>` },
        { titre: "Exercice 2 — Négations et contre-exemples", points: 7, enonce: R`
<ol><li>Écris la négation de chacune des propositions suivantes.
<ol type="a"><li>« Tous les élèves de la classe ont la moyenne. »</li>
<li>« Il existe un réel \(x\) tel que \(x^2 = -1\). »</li>
<li>« \(n\) est pair et \(n \gt 10\). »</li></ol></li>
<li>Pour tout entier naturel \(n\), on pose \(u_n = n^2 - n + 11\).
<ol type="a"><li>Calcule \(u_0, u_1, u_2, u_3, u_4\). Ces nombres sont-ils premiers ?</li>
<li>La proposition « pour tout entier naturel \(n\), \(u_n\) est premier » est-elle vraie ? (Indice : calcule \(u_{11}\).)</li></ol></li>
<li>Pour un réel \(x\), complète avec « nécessaire », « suffisante » ou « nécessaire et suffisante » :
<ol type="a"><li>« \(x \gt 0\) » est une condition … pour que « \(x^2 \gt 0\) ».</li>
<li>« \(x^3 = 8\) » est une condition … pour que « \(x = 2\) ».</li></ol></li></ol>`,
          correction: R`
<ol><li><i>(3 points)</i>
<ol type="a"><li>« Au moins un élève de la classe n'a pas la moyenne. »</li>
<li>« Pour tout réel \(x\), \(x^2 \ne -1\). »</li>
<li>« \(n\) est impair ou \(n \leqslant 10\). »</li></ol></li>
<li><ol type="a"><li>\(u_0 = 11\), \(u_1 = 1 - 1 + 11 = 11\), \(u_2 = 4 - 2 + 11 = 13\), \(u_3 = 9 - 3 + 11 = 17\), \(u_4 = 16 - 4 + 11 = 23\). Tous sont premiers. <i>(1,5 point)</i></li>
<li>\(u_{11} = 121 - 11 + 11 = 121 = 11 \times 11\), qui n'est pas premier. C'est un contre-exemple : la proposition est <b>fausse</b>. <i>(1,5 point)</i></li></ol></li>
<li><ol type="a"><li>Si \(x \gt 0\) alors \(x^2 \gt 0\), mais \(x = -1\) vérifie \(x^2 \gt 0\) sans vérifier \(x \gt 0\) : condition <b>suffisante</b> (non nécessaire). <i>(0,5 point)</i></li>
<li>Le seul réel dont le cube vaut 8 est 2, donc \(x^3 = 8 \Leftrightarrow x = 2\) : condition <b>nécessaire et suffisante</b>. <i>(0,5 point)</i></li></ol></li></ol>` },
        { titre: "Exercice 3 — Contraposition et absurde", points: 6, enonce: R`
<ol><li>Soit \(n\) un entier. On veut montrer : « si \(n^2 + 4n\) est impair, alors \(n\) est impair ».
<ol type="a"><li>Énonce la contraposée de cette proposition.</li>
<li>Démontre-la, puis conclus.</li></ol></li>
<li>On veut montrer par l'absurde que \(\frac13\) n'est pas un nombre décimal. On rappelle qu'un nombre décimal s'écrit \(\frac{a}{10^k}\) avec \(a\) entier et \(k\) entier naturel.
<ol type="a"><li>Que suppose-t-on au départ ?</li>
<li>Montre qu'on aboutit à l'égalité \(10^k = 3a\), puis à une contradiction.</li></ol></li></ol>`,
          correction: R`
<ol><li><ol type="a"><li>Contraposée : « si \(n\) est pair, alors \(n^2 + 4n\) est pair ». <i>(1 point)</i></li>
<li>Si \(n\) est pair, \(n = 2k\) avec \(k\) entier. Alors \(n^2 + 4n = 4k^2 + 8k = 2(2k^2 + 4k)\), qui est pair car \(2k^2 + 4k\) est entier. La contraposée est vraie, donc la proposition de départ aussi. <i>(2 points)</i></li></ol></li>
<li><ol type="a"><li>On suppose le contraire : \(\frac13\) est décimal, c'est-à-dire qu'il existe un entier \(a\) et un entier naturel \(k\) tels que \(\frac13 = \frac{a}{10^k}\). <i>(1 point)</i></li>
<li>En multipliant en croix : \(10^k = 3a\). Donc \(10^k\) est un multiple de 3. Or \(10^k = 1\,00\dots0\) a une somme de chiffres égale à 1, qui n'est pas un multiple de 3 : \(10^k\) n'est pas divisible par 3. (Autre argument : \(10^k = 2^k \times 5^k\) ne contient pas le facteur premier 3.) C'est une <b>contradiction</b>, donc \(\frac13\) n'est pas décimal. <i>(2 points)</i></li></ol></li></ol>` }
      ] },
    { titre: "DS n°3 — Relevés de températures et intervalles", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Une semaine de températures", points: 6, enonce: R`
<p>Une station météo relève chaque matin la température (en °C) du lundi au dimanche. Les relevés sont stockés dans la liste :</p>
<pre><code>T = [-2, 3, 5, -1, 0, 4, 7]</code></pre>
<ol><li>Que valent <b>T[2]</b>, <b>T[-2]</b> et <b>len(T)</b> ?</li>
<li>On exécute ensuite les instructions suivantes. Donne le contenu de <b>T</b> après chaque ligne, puis ce qu'affiche le programme.
<pre><code>x = T.pop(3)
T.insert(0, -4)
T.remove(0)
T.append(T[1] + T[-1])
print(x, T)</code></pre></li>
<li>Écris une fonction <b>jours_gel(L)</b> qui renvoie le nombre de valeurs <b>strictement négatives</b> de la liste <b>L</b>. Que renvoie-t-elle pour la liste de départ <b>[-2, 3, 5, -1, 0, 4, 7]</b> ?</li>
<li>Écris une fonction <b>amplitude(L)</b> qui renvoie l'écart entre la plus grande et la plus petite valeur d'une liste non vide <b>L</b>, <b>sans</b> utiliser les fonctions <b>max</b> et <b>min</b> de Python. Que renvoie-t-elle pour la liste de départ ?</li></ol>`,
          correction: R`
<ol><li><b>T[2]</b> est le troisième élément : <b>5</b>. <b>T[-2]</b> est l'avant-dernier : <b>4</b>. La liste a <b>7</b> éléments. <i>(1 point)</i></li>
<li><i>(1,5 point)</i>
<ul>
<li><b>x = T.pop(3)</b> : l'élément d'indice 3 est \(-1\) ; il est retiré et stocké dans <b>x</b>. <b>T = [-2, 3, 5, 0, 4, 7]</b>.</li>
<li><b>T.insert(0, -4)</b> : \(-4\) est placé en tête : <b>T = [-4, -2, 3, 5, 0, 4, 7]</b>.</li>
<li><b>T.remove(0)</b> : on retire la <b>valeur</b> 0 (et non l'élément d'indice 0) : <b>T = [-4, -2, 3, 5, 4, 7]</b>.</li>
<li><b>T[1] + T[-1]</b> vaut \(-2 + 7 = 5\), ajouté à la fin : <b>T = [-4, -2, 3, 5, 4, 7, 5]</b>.</li>
</ul>
Affichage :
<pre><code>-1 [-4, -2, 3, 5, 4, 7, 5]</code></pre></li>
<li>On utilise un compteur qu'on augmente à chaque valeur négative. <i>(1,5 point)</i>
<pre><code>def jours_gel(L):
    c = 0
    for t in L:
        if t &lt; 0:
            c = c + 1
    return c</code></pre>
Les valeurs strictement négatives sont \(-2\) et \(-1\) (0 n'est pas strictement négatif) : la fonction renvoie <b>2</b>.</li>
<li>On garde en mémoire la plus grande et la plus petite valeur rencontrées, en partant du premier élément. <i>(2 points : 1,5 pour la fonction, 0,5 pour le résultat)</i>
<pre><code>def amplitude(L):
    grand = L[0]
    petit = L[0]
    for t in L:
        if t &gt; grand:
            grand = t
        if t &lt; petit:
            petit = t
    return grand - petit</code></pre>
Pour la liste de départ, la plus grande valeur est 7 et la plus petite \(-2\) : la fonction renvoie \(7 - (-2) = 9\).</li></ol>` },
        { titre: "Exercice 2 — Intervalles", points: 5, enonce: R`
<p>On considère les intervalles \(I = [-3 ; 4[\), \(J = \,]1 ; 7]\) et \(K = \,]-\infty ; 0]\).</p>
<ol><li>Détermine \(I \cap J\) et \(I \cup J\).</li>
<li>Détermine \(I \cap K\) et \(J \cap K\).</li>
<li>Détermine le complémentaire de \(I\) dans \(\mathbb{R}\).</li>
<li>A-t-on \(J \subset I\) ? Justifie.</li></ol>`,
          correction: R`
<p>On représente les intervalles sur une droite graduée.</p>
<ol><li>Les réels qui sont à la fois dans \(I\) et dans \(J\) sont strictement supérieurs à 1 et strictement inférieurs à 4 : \(I \cap J = \,]1 ; 4[\).<br>
Les deux intervalles se chevauchent : leur réunion va de \(-3\) (inclus) à \(7\) (inclus), \(I \cup J = [-3 ; 7]\). <i>(2 points)</i></li>
<li>\(I \cap K = [-3 ; 0]\) (0 appartient à \(I\) et à \(K\)).<br>
Un élément de \(J\) est strictement supérieur à 1, un élément de \(K\) est inférieur ou égal à 0 : aucun réel n'est dans les deux, \(J \cap K = \varnothing\). <i>(1,5 point)</i></li>
<li>Les réels qui ne sont pas dans \(I\) sont ceux qui sont strictement inférieurs à \(-3\) ou supérieurs ou égaux à 4 :
\[\overline{I} = \,]-\infty ; -3[ \,\cup\, [4 ; +\infty[.\] <i>(1 point)</i></li>
<li>Non : \(5 \in J\) mais \(5 \notin I\) (car \(5 \geqslant 4\)). Donc \(J \not\subset I\). <i>(0,5 point)</i></li></ol>` },
        { titre: "Exercice 3 — Négations et conditions", points: 5, enonce: R`
<ol><li>Écris la négation de chacune des propositions suivantes.
<ol type="a"><li>« Tous les trains de la journée sont arrivés à l'heure. »</li>
<li>« Il existe un réel \(x\) tel que \(x^2 \lt x\). »</li>
<li>« \(x \leqslant 0\) ou \(x \gt 5\) » (où \(x\) est un réel).</li></ol>
Pour la b, indique laquelle de la proposition et de sa négation est vraie.</li>
<li>Pour un réel \(x\), complète par « nécessaire », « suffisante » ou « nécessaire et suffisante », en justifiant.
<ol type="a"><li>« \(x \lt 2\) » est une condition … pour que « \(x^2 \lt 4\) ».</li>
<li>« \(x \geqslant 3\) » est une condition … pour que « \(x^2 \geqslant 9\) ».</li>
<li>« \(x^2 = x\) » est une condition … pour que « \(x = 1\) ».</li></ol></li></ol>`,
          correction: R`
<ol><li><i>(2 points : 0,5 par négation, 0,5 pour la valeur de vérité)</i>
<ol type="a"><li>« Au moins un train de la journée n'est pas arrivé à l'heure. »</li>
<li>« Pour tout réel \(x\), \(x^2 \geqslant x\). » C'est la proposition de départ qui est vraie : pour \(x = \frac12\), \(x^2 = \frac14 \lt \frac12\).</li>
<li>« \(x \gt 0\) et \(x \leqslant 5\) », c'est-à-dire \(0 \lt x \leqslant 5\) (le « ou » devient « et »).</li></ol></li>
<li><i>(3 points : 1 par question)</i>
<ol type="a"><li>Si \(x^2 \lt 4\), alors \(-2 \lt x \lt 2\), donc en particulier \(x \lt 2\). Mais \(x = -3\) vérifie \(x \lt 2\) alors que \(x^2 = 9 \geqslant 4\). « \(x \lt 2\) » est une condition <b>nécessaire</b> mais pas suffisante.</li>
<li>Si \(x \geqslant 3\), alors \(x\) est positif et \(x^2 \geqslant 3 \times 3 = 9\). Mais \(x = -4\) vérifie \(x^2 = 16 \geqslant 9\) sans vérifier \(x \geqslant 3\). Condition <b>suffisante</b> mais pas nécessaire.</li>
<li>Si \(x = 1\), alors \(x^2 = 1 = x\). Mais \(x = 0\) vérifie \(x^2 = x\) sans être égal à 1. Condition <b>nécessaire</b> mais pas suffisante.</li></ol></li></ol>` },
        { titre: "Exercice 4 — Multiples de 3 et contraposition", points: 4, enonce: R`
<p>Soit \(n\) un entier. On veut démontrer la proposition \(P\) : « si \(n^2\) est un multiple de 3, alors \(n\) est un multiple de 3 ».</p>
<ol><li>Énonce la contraposée de \(P\).</li>
<li>Un entier qui n'est pas multiple de 3 s'écrit \(3k + 1\) ou \(3k + 2\) avec \(k\) entier. Démontre la contraposée en traitant ces deux cas.</li>
<li>Conclus.</li></ol>`,
          correction: R`
<ol><li>Contraposée : « si \(n\) n'est pas un multiple de 3, alors \(n^2\) n'est pas un multiple de 3 ». <i>(1 point)</i></li>
<li><i>(2,5 points)</i>
<ul><li>Si \(n = 3k + 1\) : \(n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1\). Comme \(3k^2 + 2k\) est entier, \(n^2\) est un multiple de 3 plus 1 : ce n'est pas un multiple de 3.</li>
<li>Si \(n = 3k + 2\) : \(n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1\). Comme \(3k^2 + 4k + 1\) est entier, \(n^2\) n'est pas un multiple de 3.</li></ul>
Dans les deux cas, \(n^2\) n'est pas un multiple de 3 : la contraposée est démontrée.</li>
<li>Une implication et sa contraposée ont toujours la même valeur de vérité : \(P\) est vraie. <i>(0,5 point)</i></li></ol>` }
      ] },
    { titre: "DS n°4 — Range, sommes cumulées et dénombrement", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Générer des listes", points: 5, enonce: R`
<ol><li>Donne le contenu des listes <b>A</b>, <b>B</b>, <b>C</b> et <b>D</b> créées par le programme suivant.
<pre><code>A = list(range(3, 20, 4))
B = [k * k - 1 for k in range(1, 6)]
C = [x for x in B if x % 3 == 0]
D = [A[i] + B[i] for i in range(len(A))]</code></pre></li>
<li>Écris en compréhension la liste des multiples de 7 compris entre 50 et 120 (inclus). Combien contient-elle d'éléments ?</li></ol>`,
          correction: R`
<ol><li><i>(4 points : 1 par liste)</i>
<ul>
<li>On part de 3, on avance de 4 en 4 et on s'arrête avant 20 : <b>A = [3, 7, 11, 15, 19]</b>.</li>
<li>\(k\) prend les valeurs 1, 2, 3, 4, 5 et \(k^2 - 1\) vaut 0, 3, 8, 15, 24 : <b>B = [0, 3, 8, 15, 24]</b>.</li>
<li>On garde les éléments de <b>B</b> divisibles par 3 (0 est divisible par 3, 8 ne l'est pas) : <b>C = [0, 3, 15, 24]</b>.</li>
<li><b>A</b> et <b>B</b> ont 5 éléments ; on ajoute terme à terme : \(3+0\), \(7+3\), \(11+8\), \(15+15\), \(19+24\), donc <b>D = [3, 10, 19, 30, 43]</b>.</li>
</ul></li>
<li><i>(1 point)</i>
<pre><code>M = [x for x in range(50, 121) if x % 7 == 0]</code></pre>
On obtient <b>[56, 63, 70, 77, 84, 91, 98, 105, 112, 119]</b>, soit \(7 \times 8\) jusqu'à \(7 \times 17\) : \(17 - 8 + 1 = 10\) éléments. (Autre écriture : <b>[7 * k for k in range(8, 18)]</b>.)</li></ol>` },
        { titre: "Exercice 2 — Une tirelire", points: 6, enonce: R`
<p>On considère la fonction suivante.</p>
<pre><code>def cumul(L):
    S = []
    s = 0
    for x in L:
        s = s + x
        S.append(s)
    return S</code></pre>
<ol><li>Recopie et complète le tableau de suivi des variables pour l'appel <b>cumul([4, -1, 3, 0, 5])</b>, puis donne la liste renvoyée.
<table class="tv"><tr><td>x</td><td>4</td><td>-1</td><td>3</td><td>0</td><td>5</td></tr><tr><td>s</td><td></td><td></td><td></td><td></td><td></td></tr></table></li>
<li>Léa met de l'argent de côté chaque mois. Les montants (en €) des six premiers mois sont <b>E = [50, 20, 35, 0, 45, 60]</b>. Donne <b>cumul(E)</b> et interprète le dernier nombre.</li>
<li>Écris une fonction <b>premier_depassement(L, seuil)</b> qui renvoie le premier indice <b>i</b> pour lequel la somme <b>L[0] + … + L[i]</b> est supérieure ou égale à <b>seuil</b>, et <b>-1</b> si ce n'est jamais le cas. Que renvoient <b>premier_depassement(E, 100)</b> et <b>premier_depassement(E, 250)</b> ?</li>
<li>On dit qu'une liste est croissante si chaque élément est supérieur ou égal au précédent.
<ol type="a"><li>Justifie que si tous les éléments de <b>L</b> sont positifs ou nuls, alors <b>cumul(L)</b> est croissante.</li>
<li>La réciproque est-elle vraie ? Justifie.</li></ol></li></ol>`,
          correction: R`
<ol><li><i>(1,5 point)</i>
<table class="tv"><tr><td>x</td><td>4</td><td>-1</td><td>3</td><td>0</td><td>5</td></tr><tr><td>s</td><td>4</td><td>3</td><td>6</td><td>6</td><td>11</td></tr></table>
Chaque valeur de <b>s</b> est ajoutée à <b>S</b> : la fonction renvoie <b>[4, 3, 6, 6, 11]</b>.</li>
<li><b>cumul(E)</b> renvoie <b>[50, 70, 105, 105, 150, 210]</b>. Le dernier nombre, 210, est le montant total (en €) économisé par Léa au bout des six mois. <i>(1 point)</i></li>
<li>On calcule la somme au fur et à mesure et on s'arrête dès qu'elle atteint le seuil. On a besoin de l'indice, donc on parcourt <b>range(len(L))</b>. <i>(2 points : 1,5 pour la fonction, 0,5 pour les résultats)</i>
<pre><code>def premier_depassement(L, seuil):
    s = 0
    for i in range(len(L)):
        s = s + L[i]
        if s &gt;= seuil:
            return i
    return -1</code></pre>
Les sommes successives sont 50, 70, 105… : le seuil 100 est atteint à l'indice 2, la fonction renvoie <b>2</b> (le 3<sup>e</sup> mois). Le total maximal est 210, inférieur à 250 : la fonction renvoie <b>-1</b>.</li>
<li><i>(1,5 point)</i>
<ol type="a"><li>Chaque élément de <b>cumul(L)</b> (à partir du deuxième) est égal au précédent auquel on ajoute un élément <b>x</b> de <b>L</b>. Si \(x \geqslant 0\), la nouvelle somme est supérieure ou égale à la précédente : la liste <b>cumul(L)</b> est croissante.</li>
<li>La réciproque est « si <b>cumul(L)</b> est croissante, alors tous les éléments de <b>L</b> sont positifs ou nuls ». Elle est <b>fausse</b> : pour <b>L = [-5, 1]</b>, <b>cumul(L) = [-5, -4]</b> est croissante, mais \(-5 \lt 0\). (Le premier élément n'est comparé à rien.)</li></ol></li></ol>` },
        { titre: "Exercice 3 — Deux dés et produit cartésien", points: 5, enonce: R`
<p>On lance un dé rouge puis un dé bleu, numérotés de 1 à 6. Un résultat est un couple \((a ; b)\) où \(a\) est le numéro du dé rouge et \(b\) celui du dé bleu. On exécute :</p>
<pre><code>couples = [(a, b) for a in range(1, 7) for b in range(1, 7)]
sept = [(a, b) for a in range(1, 7) for b in range(1, 7) if a + b == 7]
print(len(couples), len(sept))</code></pre>
<ol><li>La liste <b>couples</b> représente un produit cartésien : lequel ? Explique pourquoi le premier nombre affiché est 36.</li>
<li>Écris en extension l'ensemble des couples de la liste <b>sept</b>. Qu'affiche le programme ?</li>
<li>Écris une instruction qui crée la liste des couples pour lesquels le numéro du dé rouge est strictement plus grand que celui du dé bleu. Combien contient-elle d'éléments ? Justifie.</li></ol>`,
          correction: R`
<ol><li>La liste <b>couples</b> contient tous les couples \((a ; b)\) avec \(a \in \{1;2;3;4;5;6\}\) et \(b \in \{1;2;3;4;5;6\}\) : c'est le produit cartésien \(\{1;2;3;4;5;6\} \times \{1;2;3;4;5;6\}\). Chaque ensemble a 6 éléments, donc il y a \(6 \times 6 = 36\) couples. <i>(1,5 point)</i></li>
<li>\(\{(1;6),(2;5),(3;4),(4;3),(5;2),(6;1)\}\) : pour chaque valeur de \(a\), il y a exactement une valeur \(b = 7 - a\) entre 1 et 6. Le programme affiche <b>36 6</b>. <i>(1,5 point)</i></li>
<li><i>(2 points : 1 pour l'instruction, 1 pour le décompte)</i>
<pre><code>R = [(a, b) for a in range(1, 7) for b in range(1, 7) if a &gt; b]</code></pre>
Pour \(a = 1\) il n'y a aucun \(b\), pour \(a = 2\) un seul (\(b = 1\)), pour \(a = 3\) deux, … , pour \(a = 6\) cinq. Il y a donc \(0 + 1 + 2 + 3 + 4 + 5 = 15\) couples.<br>
(Autre raisonnement : sur les 36 couples, 6 sont des doubles ; les 30 autres se répartissent également entre \(a \gt b\) et \(a \lt b\), soit 15 chacun.)</li></ol>` },
        { titre: "Exercice 4 — Un raisonnement par l'absurde", points: 4, enonce: R`
<p>Un fleuriste vend des bouquets de 6 roses et des bouquets de 9 roses (on ne défait pas les bouquets).</p>
<ol><li>On veut montrer par l'absurde qu'il est impossible d'acheter exactement 100 roses, c'est-à-dire qu'il n'existe pas d'entiers naturels \(a\) et \(b\) tels que \(6a + 9b = 100\). Que suppose-t-on au départ ?</li>
<li>Termine la démonstration.</li>
<li>Montre en revanche qu'on peut acheter exactement 99 roses.</li></ol>`,
          correction: R`
<ol><li>On suppose le contraire : il existe des entiers naturels \(a\) et \(b\) tels que \(6a + 9b = 100\). <i>(1 point)</i></li>
<li>Alors \(100 = 6a + 9b = 3(2a + 3b)\), et comme \(2a + 3b\) est un entier, 100 serait un multiple de 3. Or \(100 = 3 \times 33 + 1\) (ou : la somme de ses chiffres vaut 1) : 100 n'est pas un multiple de 3. C'est une <b>contradiction</b>. Il est donc impossible d'acheter exactement 100 roses. <i>(2 points)</i></li>
<li>Il suffit de trouver un exemple : avec \(a = 3\) et \(b = 9\), \(6 \times 3 + 9 \times 9 = 18 + 81 = 99\). Trois bouquets de 6 et neuf bouquets de 9 conviennent (\(a = 0\) et \(b = 11\) aussi). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°5 — Suite de Syracuse, nombres premiers et contraposée", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — La suite de Syracuse", points: 5, enonce: R`
<p>On considère la fonction suivante (<b>n // 2</b> est le quotient entier de <b>n</b> par 2).</p>
<pre><code>def parcours(n):
    L = [n]
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        L.append(n)
    return L</code></pre>
<ol><li>Que renvoie <b>parcours(6)</b> ? Détaille les étapes.</li>
<li>Pour <b>L = parcours(6)</b>, que valent <b>len(L)</b> et le plus grand élément de <b>L</b> ?</li>
<li>Que renvoie <b>parcours(1)</b> ? Pourquoi ?</li>
<li>Donne le contenu de la liste <b>[n for n in range(1, 11) if len(parcours(n)) &lt;= 5]</b>. Justifie.</li></ol>`,
          correction: R`
<ol><li>6 est pair : 3 ; 3 est impair : \(3 \times 3 + 1 = 10\) ; puis 5 ; puis \(3 \times 5 + 1 = 16\) ; puis 8, 4, 2, 1 et la boucle s'arrête. La fonction renvoie <b>[6, 3, 10, 5, 16, 8, 4, 2, 1]</b>. <i>(2 points)</i></li>
<li><b>len(L)</b> vaut <b>9</b> et le plus grand élément est <b>16</b>. <i>(1 point)</i></li>
<li><b>L</b> vaut d'abord <b>[1]</b> ; la condition <b>n != 1</b> est fausse dès le départ, on n'entre pas dans la boucle : la fonction renvoie <b>[1]</b>. <i>(0,5 point)</i></li>
<li>On calcule les débuts de parcours (on peut s'arrêter dès que la liste dépasse 5 éléments) : <i>(1,5 point)</i>
<ul>
<li>1 : [1] (1 élément) ; 2 : [2, 1] (2) ; 4 : [4, 2, 1] (3) ; 8 : [8, 4, 2, 1] (4) ;</li>
<li>3 : [3, 10, 5, 16, 8, 4, …] (déjà 6 éléments) ; 5 : [5, 16, 8, 4, 2, 1] (6) ; 6 : 9 éléments (question 1) ;</li>
<li>7 : [7, 22, 11, 34, 17, 52, …] ; 9 : [9, 28, 14, 7, 22, 11, …] ; 10 : [10, 5, 16, 8, 4, 2, 1] (7).</li>
</ul>
La liste vaut <b>[1, 2, 4, 8]</b>.</li></ol>` },
        { titre: "Exercice 2 — Vrai ou faux ?", points: 5, enonce: R`
<p>Pour chaque proposition, dis si elle est vraie ou fausse et justifie (démonstration ou contre-exemple).</p>
<ol><li>« Pour tout réel \(x\), \((x + 1)^2 = x^2 + 1\). »</li>
<li>« Il existe un réel \(x\) tel que \(x^2 = x\). »</li>
<li>« Pour tout entier \(n\), \(n^2 - n\) est pair. »</li>
<li>« Pour tout réel \(x \gt 0\), \(\frac1x \leqslant x\). »</li>
<li>Écris la négation de la proposition 3.</li></ol>`,
          correction: R`
<ol><li><b>Faux</b> : pour \(x = 1\), \((1+1)^2 = 4\) alors que \(1^2 + 1 = 2\). (En général \((x+1)^2 = x^2 + 2x + 1\).) <i>(1 point)</i></li>
<li><b>Vrai</b> : \(x = 0\) convient car \(0^2 = 0\) (ou \(x = 1\)). Un seul exemple suffit pour un « il existe ». <i>(1 point)</i></li>
<li><b>Vrai</b>. On a \(n^2 - n = n(n-1)\). <i>(1,5 point)</i>
<ul><li>Si \(n\) est pair, \(n = 2k\) et \(n(n-1) = 2k(2k-1) = 2\big(k(2k-1)\big)\), qui est pair.</li>
<li>Si \(n\) est impair, \(n = 2k + 1\) et \(n(n-1) = (2k+1) \times 2k = 2\big(k(2k+1)\big)\), qui est pair.</li></ul>
Dans tous les cas, \(n^2 - n\) est pair.</li>
<li><b>Faux</b> : pour \(x = \frac12\), \(\frac1x = 2\) et \(2 \gt \frac12\). <i>(1 point)</i></li>
<li>« Il existe un entier \(n\) tel que \(n^2 - n\) est impair. » <i>(0,5 point)</i></li></ol>` },
        { titre: "Exercice 3 — Nombres premiers et ensembles", points: 5, enonce: R`
<p>Soit \(E = \{1;2;3;\dots;20\}\). On note \(A\) l'ensemble des nombres premiers de \(E\) et \(B\) l'ensemble des nombres impairs de \(E\).</p>
<ol><li>Écris \(A\) et \(B\) en extension.</li>
<li>Détermine \(A \cap B\) et \(A \cup B\).</li>
<li>A-t-on \(A \subset B\) ? Traduis ta réponse par une phrase sur les nombres premiers.</li>
<li>Détermine le complémentaire de \(A \cup B\) dans \(E\) et décris-le par une phrase.</li>
<li>Détermine tous les couples \((p ; q)\) de \(A \times A\) tels que \(p + q = 20\).</li></ol>`,
          correction: R`
<ol><li>\(A = \{2;3;5;7;11;13;17;19\}\) (1 n'est pas premier) et \(B = \{1;3;5;7;9;11;13;15;17;19\}\). <i>(1 point)</i></li>
<li>\(A \cap B = \{3;5;7;11;13;17;19\}\) (les nombres premiers impairs).<br>
\(A \cup B = \{1;2;3;5;7;9;11;13;15;17;19\}\). <i>(1,5 point)</i></li>
<li>Non, car \(2 \in A\) et \(2 \notin B\). La proposition « tout nombre premier est impair » est fausse, 2 est un contre-exemple (c'est d'ailleurs le seul). <i>(0,5 point)</i></li>
<li>\(\overline{A \cup B} = \{4;6;8;10;12;14;16;18;20\}\) : ce sont les nombres pairs de \(E\) qui ne sont pas premiers, c'est-à-dire les nombres pairs de 4 à 20. <i>(1 point)</i></li>
<li>On teste chaque \(p \in A\) : \(20 - 2 = 18\), \(20 - 5 = 15\), \(20 - 11 = 9\), \(20 - 19 = 1\) ne sont pas premiers, alors que \(20 - 3 = 17\), \(20 - 7 = 13\), \(20 - 13 = 7\), \(20 - 17 = 3\) le sont. Les couples sont \((3;17)\), \((7;13)\), \((13;7)\) et \((17;3)\). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Contraposées", points: 5, enonce: R`
<ol><li>Soient \(a\) et \(b\) deux réels. On considère la proposition \(P\) : « si \(a + b \gt 2\), alors \(a \gt 1\) ou \(b \gt 1\) ».
<ol type="a"><li>Énonce la contraposée de \(P\).</li>
<li>Démontre-la et conclus.</li>
<li>Énonce la réciproque de \(P\). Est-elle vraie ?</li></ol></li>
<li>Soit \(n\) un entier. Démontre par contraposition : « si \(n^2 - 1\) n'est pas un multiple de 8, alors \(n\) est pair ».<br>
<i>On pourra remarquer que le produit \(k(k+1)\) de deux entiers consécutifs est toujours pair.</i></li></ol>`,
          correction: R`
<ol><li><ol type="a"><li>La négation de « \(a \gt 1\) ou \(b \gt 1\) » est « \(a \leqslant 1\) et \(b \leqslant 1\) ». Contraposée : « si \(a \leqslant 1\) et \(b \leqslant 1\), alors \(a + b \leqslant 2\) ». <i>(1 point)</i></li>
<li>Si \(a \leqslant 1\) et \(b \leqslant 1\), en ajoutant membre à membre ces deux inégalités, \(a + b \leqslant 2\). La contraposée est vraie, donc \(P\) est vraie. <i>(1 point)</i></li>
<li>Réciproque : « si \(a \gt 1\) ou \(b \gt 1\), alors \(a + b \gt 2\) ». Elle est <b>fausse</b> : pour \(a = 3\) et \(b = -5\), on a bien \(a \gt 1\), mais \(a + b = -2 \leqslant 2\). <i>(1 point)</i></li></ol></li>
<li>Contraposée : « si \(n\) est impair, alors \(n^2 - 1\) est un multiple de 8 ». <i>(2 points : 0,5 pour la contraposée, 1,5 pour la preuve)</i><br>
Si \(n\) est impair, \(n = 2k + 1\) avec \(k\) entier, et
\[n^2 - 1 = 4k^2 + 4k + 1 - 1 = 4k(k+1).\]
Or \(k(k+1)\) est le produit de deux entiers consécutifs : l'un des deux est pair, donc \(k(k+1) = 2m\) avec \(m\) entier. Alors \(n^2 - 1 = 4 \times 2m = 8m\) est un multiple de 8. La contraposée est vraie, donc la proposition aussi.</li></ol>` }
      ] },
    { titre: "DS n°6 — Clés de contrôle, menus et complémentaires", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Une clé de contrôle", points: 6, enonce: R`
<p>Pour détecter les erreurs de saisie, on ajoute à la fin d'un code une <b>clé</b> calculée par la fonction suivante (<b>s % 11</b> est le reste de la division de <b>s</b> par 11).</p>
<pre><code>def cle(L):
    s = 0
    for i in range(len(L)):
        s = s + (i + 1) * L[i]
    return s % 11</code></pre>
<ol><li>Recopie et complète le tableau de suivi pour l'appel <b>cle([3, 0, 7, 2, 5])</b>, puis donne la valeur renvoyée.
<table class="tv"><tr><td>i</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>s</td><td></td><td></td><td></td><td></td><td></td></tr></table></li>
<li>Un code complet est <b>valide</b> si son dernier chiffre est égal à la clé des chiffres précédents. Complète la fonction suivante, qui doit renvoyer <b>True</b> si le code <b>C</b> est valide et <b>False</b> sinon.
<pre><code>def valide(C):
    D = [x for x in C]   # copie de C
    k = ...              # on retire le dernier élément de D et on le garde dans k
    return ...</code></pre></li>
<li>Que renvoient <b>valide([3, 0, 7, 2, 5, 2])</b> et <b>valide([3, 0, 7, 5, 2, 2])</b> (où deux chiffres ont été inversés) ? Justifie.</li>
<li>Que se passerait-il si on remplaçait <b>range(len(L))</b> par <b>range(len(L) + 1)</b> dans la fonction <b>cle</b> ?</li></ol>`,
          correction: R`
<ol><li><i>(2 points)</i>
<table class="tv"><tr><td>i</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>s</td><td>3</td><td>3</td><td>24</td><td>32</td><td>57</td></tr></table>
En effet \(s = 1 \times 3 + 2 \times 0 + 3 \times 7 + 4 \times 2 + 5 \times 5 = 3 + 0 + 21 + 8 + 25 = 57\). Comme \(57 = 11 \times 5 + 2\), la fonction renvoie <b>2</b>.</li>
<li><b>pop()</b> retire et renvoie le dernier élément ; ensuite <b>D</b> contient les chiffres sans la clé. <i>(2 points)</i>
<pre><code>def valide(C):
    D = [x for x in C]
    k = D.pop()
    return cle(D) == k</code></pre>
(On travaille sur une copie pour ne pas modifier la liste <b>C</b>.)</li>
<li><i>(1 point)</i>
<ul><li>Pour <b>[3, 0, 7, 2, 5, 2]</b> : la clé de <b>[3, 0, 7, 2, 5]</b> est 2 (question 1), égale au dernier chiffre : <b>True</b>.</li>
<li>Pour <b>[3, 0, 7, 5, 2, 2]</b> : \(s = 3 + 0 + 21 + 4 \times 5 + 5 \times 2 = 54\) et \(54 = 11 \times 4 + 10\), la clé vaut 10, différente de 2 : <b>False</b>. L'inversion a été détectée.</li></ul></li>
<li>Au dernier tour, \(i\) vaudrait <b>len(L)</b> et <b>L[i]</b> n'existe pas (le dernier indice est <b>len(L) - 1</b>) : on obtiendrait une erreur <i>IndexError</i>. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 2 — Le menu du self", points: 5, enonce: R`
<p>Au self, on choisit une entrée parmi \(E = \{c ; s\}\) (crudités, soupe), un plat parmi \(P = \{p ; l ; r\}\) (poulet, lasagnes, risotto) et un dessert parmi \(D = \{f ; g\}\) (fruit, gâteau).</p>
<ol><li>Écris en extension \(E \times P\). Combien a-t-il d'éléments ?</li>
<li>Le couple \((p ; c)\) appartient-il à \(E \times P\) ? Justifie.</li>
<li>Un menu complet est un triplet \((e ; q ; d)\) de \(E \times P \times D\). Combien y a-t-il de menus complets ? Justifie.</li>
<li>En Python, on pose <b>E = ["c", "s"]</b> et <b>P = ["p", "l", "r"]</b>. Écris en compréhension la liste des couples (entrée, plat), puis la liste de ces couples <b>privée</b> du couple <b>("s", "r")</b> (soupe et risotto ne sont jamais servis ensemble). Combien d'éléments a cette seconde liste ?</li></ol>`,
          correction: R`
<ol><li>\(E \times P = \{(c;p),(c;l),(c;r),(s;p),(s;l),(s;r)\}\) : il a \(2 \times 3 = 6\) éléments. <i>(1,5 point)</i></li>
<li>Non : dans un couple de \(E \times P\), le premier terme est une entrée et le second un plat. Or \(p\) n'est pas une entrée. L'ordre compte : \((p;c) \ne (c;p)\). <i>(1 point)</i></li>
<li>Pour chacun des 6 couples (entrée ; plat), on a 2 desserts possibles : il y a \(2 \times 3 \times 2 = 12\) menus complets. <i>(1 point)</i></li>
<li><i>(1,5 point)</i>
<pre><code>menus = [(e, q) for e in E for q in P]
menus2 = [(e, q) for e in E for q in P if not (e == "s" and q == "r")]</code></pre>
La seconde liste contient \(6 - 1 = 5\) éléments.</li></ol>` },
        { titre: "Exercice 3 — Négations et complémentaires", points: 5, enonce: R`
<ol><li>Pour un réel \(x\) : \(x \in [1 ; 3]\) signifie « \(x \geqslant 1\) et \(x \leqslant 3\) ».
<ol type="a"><li>Écris la négation de « \(x \geqslant 1\) et \(x \leqslant 3\) ».</li>
<li>En déduire le complémentaire de \([1 ; 3]\) dans \(\mathbb{R}\), écrit comme une réunion d'intervalles.</li></ol></li>
<li>Soit \(U = \,]-\infty ; -2[ \,\cup\, [5 ; +\infty[\). Traduis « \(x \in U\) » par une phrase avec « ou », écris sa négation, puis donne le complémentaire de \(U\) dans \(\mathbb{R}\).</li>
<li>Écris la négation de chacune des phrases suivantes.
<ol type="a"><li>« Chaque jour de la semaine, il a plu ou il a fait froid. »</li>
<li>« Il existe un élève de la classe qui a 18 ans et qui a le permis. »</li></ol></li></ol>`,
          correction: R`
<ol><li><ol type="a"><li>« \(x \lt 1\) ou \(x \gt 3\) » (le « et » devient « ou » et chaque inégalité est niée). <i>(1 point)</i></li>
<li>\(\overline{[1;3]} = \,]-\infty ; 1[ \,\cup\, ]3 ; +\infty[\). <i>(0,5 point)</i></li></ol></li>
<li>« \(x \in U\) » signifie « \(x \lt -2\) ou \(x \geqslant 5\) ». Sa négation est « \(x \geqslant -2\) et \(x \lt 5\) », c'est-à-dire \(-2 \leqslant x \lt 5\). Donc \(\overline{U} = [-2 ; 5[\). <i>(1,5 point)</i></li>
<li><i>(2 points : 1 par phrase)</i>
<ol type="a"><li>« Il existe un jour de la semaine où il n'a pas plu <b>et</b> où il n'a pas fait froid. »</li>
<li>« Aucun élève de la classe n'a à la fois 18 ans et le permis », autrement dit : « pour tout élève de la classe, il n'a pas 18 ans <b>ou</b> il n'a pas le permis. »</li></ol></li></ol>` },
        { titre: "Exercice 4 — Une racine qui n'est jamais entière", points: 4, enonce: R`
<p>Soit \(n\) un entier naturel <b>non nul</b>. On veut montrer par l'absurde que \(\sqrt{n^2 + 1}\) n'est pas un entier.</p>
<ol><li>On suppose que \(m = \sqrt{n^2 + 1}\) est un entier. Quelle égalité vérifie \(m\) ?</li>
<li>Montre que \(n^2 \lt m^2 \lt (n+1)^2\), puis aboutis à une contradiction.</li>
<li>Pour \(n = 0\), le résultat est-il encore vrai ? À quel endroit as-tu utilisé \(n \geqslant 1\) ?</li></ol>`,
          correction: R`
<ol><li>\(m\) est un entier naturel tel que \(m^2 = n^2 + 1\). <i>(1 point)</i></li>
<li>On a \(m^2 = n^2 + 1 \gt n^2\). D'autre part \((n+1)^2 = n^2 + 2n + 1\) et, comme \(n \geqslant 1\), \(2n \geqslant 2 \gt 0\), donc \(m^2 = n^2 + 1 \lt n^2 + 2n + 1 = (n+1)^2\).<br>
Les nombres \(n\), \(m\), \(n+1\) étant positifs, \(n^2 \lt m^2 \lt (n+1)^2\) donne \(n \lt m \lt n + 1\). Mais il n'existe aucun entier strictement compris entre deux entiers consécutifs : <b>contradiction</b>. Donc \(\sqrt{n^2+1}\) n'est pas un entier. <i>(2 points)</i></li>
<li>Pour \(n = 0\), \(\sqrt{0 + 1} = 1\) est un entier : le résultat est faux. L'hypothèse \(n \geqslant 1\) a servi à affirmer que \(2n \gt 0\), donc que \(m^2 \lt (n+1)^2\) (pour \(n = 0\), on a \(m^2 = 1 = (n+1)^2\)). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°7 — Soldes, inéquations et conjectures", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — Les soldes", points: 6, enonce: R`
<p>Un magasin enregistre les prix (en €) de six articles dans la liste :</p>
<pre><code>prix = [12.5, 40, 7.2, 25, 60, 19.9]</code></pre>
<ol><li>Que valent <b>len(prix)</b>, <b>prix[1]</b> et <b>prix[-2]</b> ?</li>
<li>Pendant les soldes, les articles coûtant au moins 20 € sont réduits de 20 %. Que contient la liste <b>soldes = [p * 0.8 for p in prix if p &gt;= 20]</b> ? Pourquoi multiplie-t-on par 0,8 ?</li>
<li>Écris une fonction <b>total(L)</b> qui renvoie la somme des éléments de la liste <b>L</b>, <b>sans</b> utiliser la fonction <b>sum</b>. Quelle est la valeur de <b>total(prix)</b> ?</li>
<li>Écris une fonction <b>abordables(L, budget)</b> qui renvoie la liste des <b>indices</b> des articles dont le prix est inférieur ou égal à <b>budget</b>. Que renvoie <b>abordables(prix, 20)</b> ?</li></ol>`,
          correction: R`
<ol><li><b>len(prix)</b> vaut <b>6</b>, <b>prix[1]</b> (deuxième élément) vaut <b>40</b> et <b>prix[-2]</b> (avant-dernier) vaut <b>60</b>. <i>(1 point)</i></li>
<li>Baisser un prix de 20 % revient à le multiplier par \(1 - \frac{20}{100} = 0{,}8\). Les articles concernés coûtent 40, 25 et 60 € : \(40 \times 0{,}8 = 32\), \(25 \times 0{,}8 = 20\), \(60 \times 0{,}8 = 48\). La liste vaut <b>[32.0, 20.0, 48.0]</b>. <i>(1,5 point)</i></li>
<li><i>(1,5 point)</i>
<pre><code>def total(L):
    s = 0
    for p in L:
        s = s + p
    return s</code></pre>
\(12{,}5 + 40 + 7{,}2 + 25 + 60 + 19{,}9 = 164{,}6\) : <b>total(prix)</b> vaut 164,6.</li>
<li>On a besoin des positions, donc on parcourt les indices. <i>(2 points : 1,5 pour la fonction, 0,5 pour le résultat)</i>
<pre><code>def abordables(L, budget):
    res = []
    for i in range(len(L)):
        if L[i] &lt;= budget:
            res.append(i)
    return res</code></pre>
Les prix inférieurs ou égaux à 20 sont 12,5 (indice 0), 7,2 (indice 2) et 19,9 (indice 5) : la fonction renvoie <b>[0, 2, 5]</b>.</li></ol>` },
        { titre: "Exercice 2 — Ensembles définis par une inéquation", points: 5, enonce: R`
<p>On considère les ensembles \(A = \{x \in \mathbb{R} \,:\, x^2 \leqslant 9\}\) et \(B = \{x \in \mathbb{R} \,:\, 2x - 1 \gt 0\}\).</p>
<ol><li>Montre que \(A = [-3 ; 3]\).</li>
<li>Écris \(B\) sous forme d'intervalle.</li>
<li>Détermine \(A \cap B\) et \(A \cup B\).</li>
<li>Détermine le complémentaire de \(B\) dans \(\mathbb{R}\). Le réel \(0{,}5\) appartient-il à \(A \cap B\) ?</li></ol>`,
          correction: R`
<ol><li>\(x^2 \leqslant 9 \Leftrightarrow x^2 - 9 \leqslant 0 \Leftrightarrow (x - 3)(x + 3) \leqslant 0\). Le produit de \(x - 3\) (qui s'annule en 3) et de \(x + 3\) (qui s'annule en \(-3\)) est négatif ou nul entre les deux racines : \(x \in [-3 ; 3]\). Donc \(A = [-3;3]\). <i>(1,5 point)</i></li>
<li>\(2x - 1 \gt 0 \Leftrightarrow x \gt \frac12\), donc \(B = \,]\frac12 ; +\infty[\). <i>(1 point)</i></li>
<li>\(A \cap B = \,]\frac12 ; 3]\) et \(A \cup B = [-3 ; +\infty[\). <i>(1,5 point)</i></li>
<li>\(\overline{B} = \,]-\infty ; \frac12]\). Le réel \(0{,}5 = \frac12\) n'appartient pas à \(B\) (l'inégalité est stricte), donc \(0{,}5 \notin A \cap B\). <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Conditions nécessaires, conditions suffisantes", points: 4, enonce: R`
<p>Complète par « nécessaire », « suffisante » ou « nécessaire et suffisante », en justifiant.</p>
<ol><li>Pour deux réels \(x\) et \(y\) : « \(x \gt 0\) et \(y \gt 0\) » est une condition … pour que « \(xy \gt 0\) ».</li>
<li>Pour un quadrilatère \(ABCD\) : « \(ABCD\) est un rectangle » est une condition … pour que « les diagonales de \(ABCD\) ont la même longueur ».</li>
<li>Pour un réel \(x\) : « \(x^2 - 5x + 6 = 0\) » est une condition … pour que « \(x = 2\) ».</li>
<li>Pour un réel \(x\) : « \(3x - 4 = 11\) » est une condition … pour que « \(x = 5\) ».</li></ol>`,
          correction: R`
<ol><li>Si \(x \gt 0\) et \(y \gt 0\), le produit de deux nombres strictement positifs est strictement positif : \(xy \gt 0\). Mais \(x = y = -1\) donne \(xy = 1 \gt 0\). Condition <b>suffisante</b>, non nécessaire. <i>(1 point)</i></li>
<li>Les diagonales d'un rectangle ont la même longueur. Mais un trapèze isocèle qui n'est pas un rectangle a aussi des diagonales de même longueur. Condition <b>suffisante</b>, non nécessaire. <i>(1 point)</i></li>
<li>Si \(x = 2\), \(4 - 10 + 6 = 0\). Mais \(x = 3\) vérifie aussi \(9 - 15 + 6 = 0\). Condition <b>nécessaire</b>, non suffisante. <i>(1 point)</i></li>
<li>\(3x - 4 = 11 \Leftrightarrow 3x = 15 \Leftrightarrow x = 5\). Condition <b>nécessaire et suffisante</b>. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Une conjecture à tester", points: 5, enonce: R`
<p>On pose \(f(n) = n^2 + n + 17\) pour tout entier naturel \(n\), et on considère le programme suivant.</p>
<pre><code>def f(n):
    return n**2 + n + 17

def est_premier(m):
    if m &lt; 2:
        return False
    for d in range(2, m):
        if m % d == 0:
            return False
    return True

print([n for n in range(20) if not est_premier(f(n))])</code></pre>
<ol><li>Calcule \(f(0)\), \(f(1)\), \(f(2)\) et \(f(3)\). Ces nombres sont-ils premiers ?</li>
<li>Explique le rôle de la fonction <b>est_premier</b>.</li>
<li>Calcule \(f(16)\). La proposition « pour tout entier naturel \(n\), \(f(n)\) est premier » est-elle vraie ?</li>
<li>Montre, sans calculer \(f(17)\), que \(f(17)\) est un multiple de 17.</li>
<li>Le programme affiche <b>[16, 17]</b>. Que peut-on en conclure ? Écris la négation de la proposition de la question 3.</li></ol>`,
          correction: R`
<ol><li>\(f(0) = 17\), \(f(1) = 19\), \(f(2) = 23\), \(f(3) = 29\) : ils sont tous premiers. <i>(1 point)</i></li>
<li><b>est_premier(m)</b> renvoie <b>True</b> si <b>m</b> est premier et <b>False</b> sinon : elle renvoie <b>False</b> pour les nombres inférieurs à 2, puis teste tous les diviseurs possibles \(d\) de 2 à \(m - 1\) ; dès qu'elle en trouve un, elle renvoie <b>False</b>. <i>(1 point)</i></li>
<li>\(f(16) = 256 + 16 + 17 = 289 = 17^2\), qui n'est pas premier. C'est un contre-exemple : la proposition est <b>fausse</b>. <i>(1,5 point)</i></li>
<li>\(f(17) = 17^2 + 17 + 17 = 17 \times (17 + 1 + 1) = 17 \times 19\) : c'est un multiple de 17 (il vaut 323). <i>(1 point)</i></li>
<li>Pour \(n\) de 0 à 19, \(f(n)\) n'est pas premier seulement pour \(n = 16\) et \(n = 17\). Les 16 premières valeurs premières ne prouvaient donc rien : un seul contre-exemple suffit à rendre fausse une proposition « pour tout ». Négation : « il existe un entier naturel \(n\) tel que \(f(n)\) n'est pas premier ». <i>(0,5 point)</i></li></ol>` }
      ] },
    { titre: "DS n°8 — Boucle while, palindromes et parité", duree: "1 h", calculatrice: true,
      exercices: [
        { titre: "Exercice 1 — La forêt communale", points: 6, enonce: R`
<p>Une forêt compte 1200 arbres. Chaque année, le nombre d'arbres augmente de 10 % (jeunes pousses), puis on abat 50 arbres. On veut savoir au bout de combien d'années la forêt comptera au moins 2000 arbres.</p>
<pre><code>p = 1200
n = 0
while p &lt; 2000:
    p = p * 1.1 - 50
    n = n + 1
print(n, round(p))</code></pre>
<ol><li>Explique la ligne <b>p = p * 1.1 - 50</b>.</li>
<li>Recopie et complète le tableau suivant (valeurs arrondies au dixième) jusqu'à l'arrêt de la boucle.
<table class="tv"><tr><td>n</td><td>0</td><td>1</td><td>2</td><td>3</td><td>…</td></tr><tr><td>p</td><td>1200</td><td></td><td></td><td></td><td>…</td></tr></table></li>
<li>Qu'affiche le programme ? Interprète.</li>
<li>Modifie le programme pour qu'il construise la liste <b>V</b> de toutes les valeurs successives de <b>p</b> (en commençant par 1200), puis affiche <b>len(V)</b>. Quelle valeur sera affichée ?</li></ol>`,
          correction: R`
<ol><li>Augmenter de 10 % revient à multiplier par 1,1 ; on retire ensuite les 50 arbres abattus. <b>p</b> devient le nombre d'arbres de l'année suivante. <i>(1 point)</i></li>
<li><i>(2 points)</i>
<table class="tv"><tr><td>n</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
<tr><td>p</td><td>1200</td><td>1270</td><td>1347</td><td>1431,7</td><td>1524,9</td><td>1627,4</td><td>1740,1</td><td>1864,1</td><td>2000,5</td></tr></table>
Par exemple \(1200 \times 1{,}1 - 50 = 1270\) et \(1270 \times 1{,}1 - 50 = 1347\). Après 7 tours, \(p \approx 1864{,}1 \lt 2000\) ; après 8 tours, \(p \approx 2000{,}5 \geqslant 2000\) : la boucle s'arrête.</li>
<li>Le programme affiche <b>8 2001</b> : il faut <b>8 ans</b> pour que la forêt compte au moins 2000 arbres (environ 2001 arbres à ce moment-là). <i>(1 point)</i></li>
<li><i>(2 points : 1,5 pour le programme, 0,5 pour la valeur)</i>
<pre><code>p = 1200
V = [p]
while p &lt; 2000:
    p = p * 1.1 - 50
    V.append(p)
print(len(V))</code></pre>
La liste contient la valeur initiale et les 8 valeurs calculées : le programme affiche <b>9</b>.</li></ol>` },
        { titre: "Exercice 2 — Listes palindromes", points: 5, enonce: R`
<p>On considère la fonction suivante.</p>
<pre><code>def miroir(L):
    M = []
    for x in L:
        M.insert(0, x)
    return M</code></pre>
<ol><li>Donne le contenu de <b>M</b> après chaque passage dans la boucle pour l'appel <b>miroir([1, 2, 3, 4])</b>. Que fait cette fonction ?</li>
<li>Une liste est un <b>palindrome</b> si elle se lit de la même façon dans les deux sens. Écris une fonction <b>est_palindrome(L)</b> qui renvoie <b>True</b> si <b>L</b> est un palindrome et <b>False</b> sinon, <b>sans</b> utiliser <b>miroir</b> : on comparera <b>L[i]</b> et <b>L[len(L) - 1 - i]</b>.</li>
<li>Que renvoie ta fonction pour <b>[2, 5, 5, 2]</b>, <b>[1, 2, 1, 2]</b> et <b>[7]</b> ?</li></ol>`,
          correction: R`
<ol><li>Chaque élément est inséré <b>en tête</b> : <b>[1]</b>, puis <b>[2, 1]</b>, puis <b>[3, 2, 1]</b>, puis <b>[4, 3, 2, 1]</b>. La fonction renvoie la liste <b>à l'envers</b>. <i>(1,5 point)</i></li>
<li>Le premier élément doit être égal au dernier, le deuxième à l'avant-dernier, etc. Il suffit d'aller jusqu'au milieu. <i>(2 points)</i>
<pre><code>def est_palindrome(L):
    n = len(L)
    for i in range(n // 2):
        if L[i] != L[n - 1 - i]:
            return False
    return True</code></pre>
(Une boucle sur <b>range(n)</b> serait aussi correcte, mais ferait chaque comparaison deux fois.)</li>
<li><i>(1,5 point)</i>
<ul><li><b>[2, 5, 5, 2]</b> : 2 = 2 et 5 = 5, la fonction renvoie <b>True</b>.</li>
<li><b>[1, 2, 1, 2]</b> : dès \(i = 0\), \(1 \ne 2\), la fonction renvoie <b>False</b>.</li>
<li><b>[7]</b> : <b>n // 2</b> vaut 0, on n'entre pas dans la boucle, la fonction renvoie <b>True</b> (une liste d'un seul élément est un palindrome).</li></ul></li></ol>` },
        { titre: "Exercice 3 — Produit de deux entiers impairs", points: 5, enonce: R`
<p>Soient \(a\) et \(b\) deux entiers. On considère la proposition \(P\) : « si \(ab\) est impair, alors \(a\) et \(b\) sont impairs ».</p>
<ol><li>Énonce la contraposée de \(P\). Attention à la négation de « et ».</li>
<li>Démontre la contraposée, puis conclus.</li>
<li>Énonce la réciproque de \(P\) et démontre-la.</li>
<li>Complète : « \(a\) et \(b\) sont impairs » est une condition … pour que « \(ab\) est impair ».</li></ol>`,
          correction: R`
<ol><li>La négation de « \(a\) et \(b\) sont impairs » est « \(a\) est pair <b>ou</b> \(b\) est pair ». Contraposée : « si \(a\) est pair ou \(b\) est pair, alors \(ab\) est pair ». <i>(1 point)</i></li>
<li>Si \(a\) est pair, \(a = 2k\) avec \(k\) entier, et \(ab = 2(kb)\) est pair car \(kb\) est entier. Si \(b\) est pair, on raisonne de même. La contraposée est vraie, donc \(P\) est vraie. <i>(2 points)</i></li>
<li>Réciproque : « si \(a\) et \(b\) sont impairs, alors \(ab\) est impair ». Si \(a = 2k + 1\) et \(b = 2j + 1\) avec \(k, j\) entiers :
\[ab = 4kj + 2k + 2j + 1 = 2(2kj + k + j) + 1,\]
qui est impair car \(2kj + k + j\) est entier. La réciproque est vraie. <i>(1,5 point)</i></li>
<li>\(P\) et sa réciproque sont vraies : condition <b>nécessaire et suffisante</b>. <i>(0,5 point)</i></li></ol>` },
        { titre: "Exercice 4 — Multiples de 4 et de 6", points: 4, enonce: R`
<p>Dans \(\mathbb{N}\), on note \(A\) l'ensemble des multiples de 4, \(B\) celui des multiples de 6, \(C\) celui des multiples de 12 et \(P\) celui des nombres pairs.</p>
<ol><li>Donne les cinq plus petits éléments de \(A \cap B\).</li>
<li>Montre que \(C \subset A \cap B\).</li>
<li>Montre que \(A \cup B \subset P\).</li>
<li>A-t-on \(P \subset A \cup B\) ? Justifie.</li></ol>`,
          correction: R`
<ol><li>\(A = \{0;4;8;12;16;20;24;\dots\}\), \(B = \{0;6;12;18;24;\dots\}\). Les cinq plus petits éléments communs sont \(0, 12, 24, 36, 48\). <i>(1 point)</i></li>
<li>Soit \(n \in C\) : \(n = 12k\) avec \(k\) entier naturel. Alors \(n = 4 \times (3k)\) est un multiple de 4 et \(n = 6 \times (2k)\) est un multiple de 6. Donc \(n \in A \cap B\) : \(C \subset A \cap B\). <i>(1 point)</i></li>
<li>Soit \(n \in A \cup B\). Si \(n \in A\), \(n = 4k = 2(2k)\) est pair ; si \(n \in B\), \(n = 6k = 2(3k)\) est pair. Dans les deux cas \(n \in P\) : \(A \cup B \subset P\). <i>(1 point)</i></li>
<li>Non : \(2 \in P\), mais 2 n'est ni un multiple de 4 ni un multiple de 6, donc \(2 \notin A \cup B\). <i>(1 point)</i></li></ol>` }
      ] },
    { titre: "DS n°9 — Dés, séries et principe des tiroirs", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Lancer de deux dés", points: 6, enonce: R`
<p>On lance deux dés équilibrés à six faces, l'un vert et l'autre jaune. On note \(\Omega = \{1;2;3;4;5;6\} \times \{1;2;3;4;5;6\}\) l'ensemble des couples (numéro vert ; numéro jaune).</p>
<ol><li>Combien \(\Omega\) a-t-il d'éléments ?</li>
<li>On note \(S\) l'ensemble des couples dont la somme est supérieure ou égale à 10. Écris \(S\) en extension.</li>
<li>On note \(D\) l'ensemble des doubles et \(Q\) l'ensemble des couples dont la somme est paire.
<ol type="a"><li>Montre que \(D \subset Q\).</li>
<li>A-t-on \(Q \subset D\) ?</li></ol></li>
<li>Détermine \(D \cap S\).</li>
<li>Écris en compréhension une liste Python représentant \(S\).</li></ol>`,
          correction: R`
<ol><li>\(\Omega\) a \(6 \times 6 = 36\) éléments. <i>(0,5 point)</i></li>
<li>Somme 10 : \((4;6),(5;5),(6;4)\) ; somme 11 : \((5;6),(6;5)\) ; somme 12 : \((6;6)\).<br>
\(S = \{(4;6),(5;5),(5;6),(6;4),(6;5),(6;6)\}\) : 6 couples. <i>(1,5 point)</i></li>
<li><ol type="a"><li>Un double s'écrit \((a;a)\) et sa somme \(a + a = 2a\) est paire. Tout élément de \(D\) est donc dans \(Q\) : \(D \subset Q\). <i>(1 point)</i></li>
<li>Non : \((1;3) \in Q\) car \(1 + 3 = 4\) est pair, mais ce n'est pas un double. <i>(0,5 point)</i></li></ol></li>
<li>Les doubles de \(S\) sont \(D \cap S = \{(5;5),(6;6)\}\). <i>(1 point)</i></li>
<li><i>(1,5 point)</i>
<pre><code>S = [(v, j) for v in range(1, 7) for j in range(1, 7) if v + j &gt;= 10]</code></pre></li></ol>` },
        { titre: "Exercice 2 — La plus longue série", points: 5, enonce: R`
<p>Paul note dans une liste les résultats de ses lancers de dé : <b>L = [3, 6, 1, 6, 6, 2, 5, 6, 4]</b>. On considère la fonction suivante.</p>
<pre><code>def serie(L, v):
    best = 0
    c = 0
    for x in L:
        if x == v:
            c = c + 1
            if c &gt; best:
                best = c
        else:
            c = 0
    return best</code></pre>
<ol><li>Recopie et complète le tableau de suivi pour l'appel <b>serie(L, 6)</b> (valeurs à la fin de chaque tour), puis donne la valeur renvoyée.
<table class="tv"><tr><td>x</td><td>3</td><td>6</td><td>1</td><td>6</td><td>6</td><td>2</td><td>5</td><td>6</td><td>4</td></tr><tr><td>c</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>best</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></li>
<li>Que représente la valeur renvoyée ? Que renvoient <b>serie(L, 5)</b> et <b>serie(L, 7)</b> ?</li>
<li>Écris une fonction <b>premier(L, v)</b>, utilisant une boucle <b>while</b>, qui renvoie l'indice de la première apparition de <b>v</b> dans <b>L</b>, et <b>-1</b> si <b>v</b> n'apparaît pas. Que renvoient <b>premier(L, 6)</b> et <b>premier(L, 4)</b> ?</li></ol>`,
          correction: R`
<ol><li><i>(2 points)</i>
<table class="tv"><tr><td>x</td><td>3</td><td>6</td><td>1</td><td>6</td><td>6</td><td>2</td><td>5</td><td>6</td><td>4</td></tr><tr><td>c</td><td>0</td><td>1</td><td>0</td><td>1</td><td>2</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>best</td><td>0</td><td>1</td><td>1</td><td>1</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr></table>
La fonction renvoie <b>2</b>.</li>
<li><b>c</b> compte les <b>v</b> consécutifs (il repart de 0 dès qu'un autre résultat sort) et <b>best</b> retient le record : la fonction renvoie la longueur de la plus longue série de <b>v</b> consécutifs. 5 apparaît une seule fois : <b>serie(L, 5)</b> renvoie <b>1</b> ; 7 n'apparaît jamais : <b>serie(L, 7)</b> renvoie <b>0</b>. <i>(1 point)</i></li>
<li><i>(2 points : 1,5 pour la fonction, 0,5 pour les résultats)</i>
<pre><code>def premier(L, v):
    i = 0
    while i &lt; len(L) and L[i] != v:
        i = i + 1
    if i == len(L):
        return -1
    return i</code></pre>
La boucle s'arrête soit sur la première case contenant <b>v</b>, soit quand on est sorti de la liste. <b>premier(L, 6)</b> renvoie <b>1</b> et <b>premier(L, 4)</b> renvoie <b>8</b> (dernier indice).</li></ol>` },
        { titre: "Exercice 3 — Logique et dés", points: 5, enonce: R`
<p>On lance les deux dés de l'exercice 1.</p>
<ol><li>Écris la négation de chacune des propositions suivantes.
<ol type="a"><li>« Au moins un des deux dés affiche 6. »</li>
<li>« Les deux dés affichent un nombre pair. »</li></ol></li>
<li>On considère la proposition \(P\) : « si la somme des deux dés vaut 12, alors on a obtenu un double ».
<ol type="a"><li>\(P\) est-elle vraie ?</li>
<li>Énonce sa réciproque et sa contraposée, et donne leur valeur de vérité.</li></ol></li>
<li>« Obtenir un double » est-il une condition nécessaire ou suffisante pour « obtenir une somme paire » ? (Utilise l'exercice 1.)</li></ol>`,
          correction: R`
<ol><li><i>(2 points)</i>
<ol type="a"><li>« Aucun des deux dés n'affiche 6 » (autrement dit : les deux dés affichent un nombre différent de 6).</li>
<li>« Au moins un des deux dés affiche un nombre impair. »</li></ol></li>
<li><ol type="a"><li>La seule façon d'obtenir 12 est \((6;6)\), qui est un double : \(P\) est <b>vraie</b>. <i>(0,5 point)</i></li>
<li>Réciproque : « si on a obtenu un double, alors la somme vaut 12 ». <b>Fausse</b> : \((1;1)\) est un double de somme 2.<br>
Contraposée : « si on n'a pas obtenu de double, alors la somme ne vaut pas 12 ». <b>Vraie</b>, comme \(P\). <i>(1,5 point)</i></li></ol></li>
<li>On a montré \(D \subset Q\) : obtenir un double entraîne une somme paire, c'est une condition <b>suffisante</b>. Elle n'est pas nécessaire car \((1;3)\) a une somme paire sans être un double. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Le principe des tiroirs", points: 4, enonce: R`
<ol><li>On range 10 chaussettes dans 3 tiroirs. Démontre par l'absurde qu'au moins un tiroir contient au moins 4 chaussettes.</li>
<li>Une classe compte 35 élèves.
<ol type="a"><li>Démontre par l'absurde qu'au moins 3 élèves sont nés le même mois.</li>
<li>Peut-on affirmer qu'au moins 4 élèves sont nés le même mois ? Justifie.</li></ol></li></ol>`,
          correction: R`
<ol><li>Supposons par l'absurde que chaque tiroir contient au plus 3 chaussettes. Alors les 3 tiroirs contiennent au total au plus \(3 \times 3 = 9\) chaussettes, alors qu'il y en a 10. <b>Contradiction</b> : un tiroir contient au moins 4 chaussettes. <i>(1,5 point)</i></li>
<li><ol type="a"><li>Supposons par l'absurde qu'il y a au plus 2 élèves nés chaque mois. Alors la classe compte au plus \(12 \times 2 = 24\) élèves, ce qui contredit le fait qu'elle en compte 35. Donc au moins 3 élèves sont nés le même mois. <i>(1,5 point)</i></li>
<li>Non : il est possible que 11 mois comptent 3 naissances et un mois 2 naissances, car \(11 \times 3 + 2 = 35\). Dans ce cas, aucun mois n'a 4 élèves. Ce contre-exemple montre qu'on ne peut pas l'affirmer. <i>(1 point)</i></li></ol></li></ol>` }
      ] },
    { titre: "DS n°10 — Bilan du chapitre", duree: "1 h", calculatrice: false,
      exercices: [
        { titre: "Exercice 1 — Vrai ou faux justifié", points: 5, enonce: R`
<p>Pour chaque affirmation, réponds par vrai ou faux en justifiant.</p>
<ol><li>Si <b>L = [8, 1, 6]</b>, après <b>L.pop(0)</b> puis <b>L.append(0)</b>, la liste <b>L</b> vaut <b>[1, 6, 0]</b>.</li>
<li><b>[k for k in range(10) if k % 4 == 1]</b> vaut <b>[1, 5, 9]</b>.</li>
<li>\(\{1;2\} \times \{1;2;3\}\) a 5 éléments.</li>
<li>\(]-1 ; 4] \cap [2 ; 6[ \;= [2 ; 4]\).</li>
<li>La négation de « tous les nombres de la liste sont positifs » est « tous les nombres de la liste sont négatifs ».</li></ol>`,
          correction: R`
<p><i>(1 point par affirmation)</i></p>
<ol><li><b>Vrai</b> : <b>pop(0)</b> retire l'élément d'indice 0 (le 8), il reste <b>[1, 6]</b> ; <b>append(0)</b> ajoute 0 à la fin : <b>[1, 6, 0]</b>.</li>
<li><b>Vrai</b> : parmi 0, 1, …, 9, ceux dont le reste dans la division par 4 vaut 1 sont 1, 5 et 9.</li>
<li><b>Faux</b> : il a \(2 \times 3 = 6\) éléments : \((1;1),(1;2),(1;3),(2;1),(2;2),(2;3)\).</li>
<li><b>Vrai</b> : les réels communs sont supérieurs ou égaux à 2 et inférieurs ou égaux à 4 (4 appartient aux deux intervalles).</li>
<li><b>Faux</b> : la négation est « <b>au moins un</b> nombre de la liste n'est pas positif ». Par exemple, pour la liste [3, -1], la proposition et l'affirmation proposée sont fausses toutes les deux, ce qui est impossible pour une proposition et sa négation.</li></ol>` },
        { titre: "Exercice 2 — Séparer les pairs et les impairs", points: 5, enonce: R`
<pre><code>def separer(L):
    P = []
    I = []
    for x in L:
        if ...:
            P.append(x)
        else:
            ...
    return P, I</code></pre>
<ol><li>Complète la fonction pour que <b>P</b> contienne les éléments pairs de <b>L</b> et <b>I</b> les éléments impairs.</li>
<li>Que renvoie <b>separer([7, 4, 0, 13, 22, 9])</b> ?</li>
<li>Écris en compréhension la liste <b>P</b> à partir de <b>L</b>.</li>
<li>A-t-on toujours <b>len(P) + len(I) == len(L)</b> ? Justifie.</li></ol>`,
          correction: R`
<ol><li>Un entier est pair si le reste de sa division par 2 est nul. <i>(2 points)</i>
<pre><code>def separer(L):
    P = []
    I = []
    for x in L:
        if x % 2 == 0:
            P.append(x)
        else:
            I.append(x)
    return P, I</code></pre></li>
<li>4, 0 et 22 sont pairs (0 est pair car \(0 = 2 \times 0\)) ; 7, 13 et 9 sont impairs. La fonction renvoie <b>([4, 0, 22], [7, 13, 9])</b>. <i>(1 point)</i></li>
<li><b>P = [x for x in L if x % 2 == 0]</b> <i>(1 point)</i></li>
<li>Oui : à chaque tour de boucle, l'élément <b>x</b> est ajouté à exactement une des deux listes (soit dans le <b>if</b>, soit dans le <b>else</b>). Chaque élément de <b>L</b> est donc compté une fois et une seule. <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 3 — Une implication sur les carrés", points: 5, enonce: R`
<p>Pour un réel \(x\), on considère la proposition \(P\) : « si \(x^2 \gt 4\), alors \(x \gt 2\) ».</p>
<ol><li>\(P\) est-elle vraie ?</li>
<li>Énonce la réciproque de \(P\) et démontre qu'elle est vraie.</li>
<li>Énonce la contraposée de \(P\). Est-elle vraie ?</li>
<li>Complète : « \(x \gt 2\) » est une condition … pour que « \(x^2 \gt 4\) ».</li>
<li>Écris la négation de \(P\).</li></ol>`,
          correction: R`
<ol><li>\(P\) est <b>fausse</b> : pour \(x = -3\), \(x^2 = 9 \gt 4\) mais \(x \lt 2\). <i>(1 point)</i></li>
<li>Réciproque : « si \(x \gt 2\), alors \(x^2 \gt 4\) ». Si \(x \gt 2\), alors \(x\) est strictement positif ; en multipliant les deux membres de \(x \gt 2\) par \(x \gt 0\), on obtient \(x^2 \gt 2x\), et \(2x \gt 4\). Donc \(x^2 \gt 4\) : la réciproque est vraie. <i>(1,5 point)</i></li>
<li>Contraposée : « si \(x \leqslant 2\), alors \(x^2 \leqslant 4\) ». Elle est fausse, comme \(P\) : \(x = -3\) est encore un contre-exemple. <i>(1 point)</i></li>
<li>On a « \(x \gt 2 \Rightarrow x^2 \gt 4\) » mais pas l'implication inverse : condition <b>suffisante</b> (non nécessaire). <i>(0,5 point)</i></li>
<li>Négation : « il existe un réel \(x\) tel que \(x^2 \gt 4\) et \(x \leqslant 2\) ». (Elle est vraie, puisque \(P\) est fausse.) <i>(1 point)</i></li></ol>` },
        { titre: "Exercice 4 — Rationnels et irrationnels", points: 5, enonce: R`
<p>On rappelle qu'un nombre est rationnel s'il s'écrit \(\frac{p}{q}\) avec \(p\) entier et \(q\) entier non nul, et qu'il est irrationnel sinon. On admet que \(\sqrt2\) est irrationnel.</p>
<ol><li>Soit \(x\) un rationnel et \(y\) un irrationnel. Démontre par l'absurde que \(x + y\) est irrationnel.</li>
<li>En déduire que \(1 + \sqrt2\) et \(1 - \sqrt2\) sont irrationnels.</li>
<li>La proposition « la somme de deux irrationnels est toujours irrationnelle » est-elle vraie ?</li></ol>`,
          correction: R`
<ol><li>Supposons par l'absurde que \(x + y\) est rationnel : \(x + y = \frac{a}{b}\) avec \(a, b\) entiers, \(b \ne 0\). Comme \(x\) est rationnel, \(x = \frac{p}{q}\) avec \(p, q\) entiers, \(q \ne 0\). Alors
\[y = \frac{a}{b} - \frac{p}{q} = \frac{aq - pb}{bq},\]
où \(aq - pb\) est entier et \(bq\) est un entier non nul. Donc \(y\) est rationnel, ce qui contredit l'hypothèse. <b>Contradiction</b> : \(x + y\) est irrationnel. <i>(2,5 points : 0,5 pour l'hypothèse, 1,5 pour le calcul, 0,5 pour la conclusion)</i></li>
<li>1 est rationnel (\(1 = \frac11\)) et \(\sqrt2\) est irrationnel, donc \(1 + \sqrt2\) est irrationnel d'après la question 1.<br>
\(-\sqrt2\) est irrationnel : sinon \(-\sqrt2 = \frac pq\) et \(\sqrt2 = \frac{-p}{q}\) serait rationnel. Donc \(1 - \sqrt2 = 1 + (-\sqrt2)\) est irrationnel. <i>(1 point)</i></li>
<li>Non : \(\sqrt2\) et \(1 - \sqrt2\) sont deux irrationnels, mais leur somme \(\sqrt2 + (1 - \sqrt2) = 1\) est rationnelle. C'est un contre-exemple. <i>(1,5 point)</i></li></ol>` }
      ] }
  ]
});
})();
