(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{416:function(e,t,a){"use strict";a.r(t);var n=a(43),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"conduire-votre-campagne-d-annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conduire-votre-campagne-d-annotation"}},[e._v("#")]),e._v(" Conduire votre campagne d'annotation")]),e._v(" "),a("p",[e._v("Le travail préparatoire décrit dans la partie précédente a permis d'identifier une équipe, de formuler clairement la problématique de votre projet et d'élaborer le schéma d'annotation. La campagne d'annotation peut commencer.")]),e._v(" "),a("h2",{attrs:{id:"former-et-mobiliser-les-annotateurs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#former-et-mobiliser-les-annotateurs"}},[e._v("#")]),e._v(" Former et mobiliser les annotateurs")]),e._v(" "),a("p",[e._v("La formation et la mobilisation des annotateurs est un aspect très important. Le caractère répétitif - qui plus est souvent complexe - de la tâche d'annotation est susceptible d'entraîner des erreurs dans l'annotation (oubli d'une section de texte à annoter ou attribution d'un mauvais label par exemple). Bien former et mobiliser les annotateurs, au démarrage ainsi que tout au long du projet, permet de limiter ce risque d'erreurs. Nous verrons dans la partie suivante quels dispositifs d'évaluation des annotations permettent par ailleurs de s'assurer de la qualité des annotations.")]),e._v(" "),a("h3",{attrs:{id:"former-les-annotateurs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#former-les-annotateurs"}},[e._v("#")]),e._v(" Former les annotateurs")]),e._v(" "),a("p",[e._v("En amont du projet, il est important de bien expliquer les enjeux du projet à l'équipe d'annotateurs ainsi que le rôle clé de l'annotation dans le projet. Cet "),a("em",[e._v("on-boarding")]),e._v(" peut aussi être l'opportunité d'acculturer les annotateurs à l'Intelligence Artificielle.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("PIAF: un projet collaboratif")]),e._v(" "),a("p",[e._v("C'est notamment le pari fait par le projet collaboratif "),a("a",{attrs:{href:"https://piaf.etalab.studio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PIAF"),a("OutboundLink")],1),e._v(" (voir l'exemple présenté en partie "),a("RouterLink",{attrs:{to:"/annotation/1-annotation-ia.html"}},[e._v("Mon projet nécessite-t-il une phase d'annotation et quelle stratégie d'annotation adopter ?")]),e._v("), pour lequel ont été organisés des "),a("em",[e._v("annotathons")]),e._v(" dont le but était de former les annotateurs à l'IA tout en récoltant des contributions au projet d'annotation. "),a("a",{attrs:{href:"https://piaf.etalab.studio/enseignements-contributions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cet article"),a("OutboundLink")],1),e._v(" détaille la méthodologie adoptée pour ce projet.")],1)]),e._v(" "),a("p",[e._v("Il peut aussi être bénéfique au projet d'impliquer les annotateurs dans l'élaboration du schéma d'annotation, dans la mesure où cette élaboration  passe par une phase d'itérations entre définition du schéma et annotation de documents. L'implication des annotateurs aura également pour avantage une meilleure appropriation de leur part des tâches à effectuer.")]),e._v(" "),a("p",[e._v("La documentation (décrite dans la partie "),a("RouterLink",{attrs:{to:"/annotation/2-preparer-campagne-annotation.html"}},[e._v("Préparer votre campagne d’annotation")]),e._v(") est centrale pour la formation. La documentation peut également être complétée par un quizz qui recense les principaux types d'éléments à annoter et fournit des exemples de cas les plus difficiles.")],1),e._v(" "),a("h3",{attrs:{id:"mobiliser-les-annotateurs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobiliser-les-annotateurs"}},[e._v("#")]),e._v(" Mobiliser les annotateurs")]),e._v(" "),a("p",[e._v("Afin de mobiliser les annotateurs tout au long du projet, il est important de maintenir une dynamique d'échange. Il peut être utile de mettre en place des outils de partage (messagerie instantanée, forum de discussion, documents collaboratifs) afin de permettre à l'équipe projet d'échanger sur leurs difficultés, de se poser des questions et de s'entraider. Des sessions d'harmonisation régulières peuvent aussi être mises en place afin de communiquer sur les avancées du projet et partager des éventuels changements ou points d'attention sur l'annotation.")]),e._v(" "),a("p",[e._v("Afin de rendre l'annotation plus ludique, il est envisageable de \"gamifier\" l'annotation, en attribuant des bagdes, ou en faisant apparaître une jauge d'avancement des annotations (le fait de voir que le projet avance peut constituer une source de motivation).")]),e._v(" "),a("h2",{attrs:{id:"annoter-et-s-assurer-de-la-qualite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annoter-et-s-assurer-de-la-qualite"}},[e._v("#")]),e._v(" Annoter et s'assurer de la qualité")]),e._v(" "),a("p",[e._v("Lorsque le but de l'annotation est de développer un algorithme automatisant une tâche, la présence d'erreurs dans le corpus annoté servant à l'entraînement risque de conduire l'algorithme à reproduire les erreurs de l'annotation manuelle. Ce phénomène bien connu est désigné par l'expression "),a("em",[e._v('"Garbage In, Garbage Out"')]),e._v(". S'assurer d'obtenir des annotations de qualité est donc particulièrement important. Nous proposons ci-après quelques recommandations pour le suivi de la qualité des annotations.")]),e._v(" "),a("h3",{attrs:{id:"creer-un-jeu-de-donnees-gold-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creer-un-jeu-de-donnees-gold-standard"}},[e._v("#")]),e._v(' Créer un jeu de données "Gold Standard"')]),e._v(" "),a("p",[e._v('Un jeu de données que l\'on appelle "Gold Standard" est constitué de documents annotés pour lesquels les annotations ont été vérifiées et sont donc de qualité certaine. Ce jeu de données peut être utilisé de plusieurs façons.')]),e._v(" "),a("p",[e._v("D'une part, les documents correspondants (sans les annotations) peuvent être donnés à annoter aux annotateurs au début de projet, pour s'assurer que la tâche soit bien comprise par les annotateurs ou pour vérifier que le schéma d'annotation ne soit pas ambigu (c'est-à-dire qu'il puisse conduire deux annotateurs à annoter le même document de façon correcte mais différente). En effet, en comparant les annotations réalisées par les annotateurs et celles dont on est certain de la qualité, on peut faire remonter les erreurs ou ambiguïtés. Ces erreurs permettront soit d'identifier les éléments du schéma d'annotation à réexpliquer, soit de corriger le schéma d'annotation afin de lever certaines ambiguïtés.")]),e._v(" "),a("p",[e._v("D'autre part, le jeu de données \"Gold Standard\" peut servir de jeu de données de test, afin d'évaluer l'algorithme développé sur un jeu de données dont la qualité soit la plus fiable possible.")]),e._v(" "),a("div",{staticClass:"lexique"},[a("p",{staticClass:"title"},[e._v("Lexique : Jeu de données d'apprentissage et jeu de données de test")]),a("p",[e._v("Afin de développer un modèle d'apprentissage supervisé, un jeu de données labélisées est nécessaire. Ce jeu de données est alors divisé en deux (en général par un échantillonnage aléatoire) : un jeu de données d'apprentissage et un jeu de données de test. Le "),a("strong",[e._v("jeu d'apprentissage")]),e._v(", comme son nom l'indique, est utilisé pendant la phase d'apprentissage, afin de trouver une fonction qui permette de prédire le label à partir des variables en entrée. Afin de s'assurer que l'algorithme ait de bonnes performances sur des exemples différents de ceux utilisés lors de la phase d'apprentissage, les différentes métriques de performance de l'algorithme (justesse, précision, rappel, ...) sont calculées sur le "),a("strong",[e._v("jeu de données de test")]),e._v(".")])]),a("h3",{attrs:{id:"faire-annoter-une-partie-des-documents-par-plusieurs-annotateurs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faire-annoter-une-partie-des-documents-par-plusieurs-annotateurs"}},[e._v("#")]),e._v(" Faire annoter une partie des documents par plusieurs annotateurs")]),e._v(" "),a("p",[e._v("Tout au long du projet, il est conseillé de faire annoter une partie des documents par plusieurs annotateurs, afin de comparer leurs annotations. Si des divergences trop importantes sont remontées lors de la comparaison (voir le paragraphe ci-dessous sur les métriques de justesse), il faut alors identifier si la divergence provient d'une erreur d'un des annotateurs ou si elle provient d'une ambiguïté du schéma d'annotation qui peut conduire à deux façons correctes d'annoter le même document.")]),e._v(" "),a("h3",{attrs:{id:"relecture-aleatoire-de-documents-annotes-par-l-expert-metier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relecture-aleatoire-de-documents-annotes-par-l-expert-metier"}},[e._v("#")]),e._v(" Relecture aléatoire de documents annotés par l'expert métier")]),e._v(" "),a("p",[e._v("Tout au long du projet, il est également conseillé que l'expert métier relise ponctuellement un certain nombre de documents annotés et sélectionnés aléatoirement afin de s'assurer de la qualité des annotations.")]),e._v(" "),a("h3",{attrs:{id:"implementer-des-tests-de-coherence-sur-les-annotations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementer-des-tests-de-coherence-sur-les-annotations"}},[e._v("#")]),e._v(" Implémenter des tests de cohérence sur les annotations")]),e._v(" "),a("p",[e._v("Pour certains projets, il est possible d'implémenter des tests automatiques traduisant des règles métier que les annotations doivent respecter. Lorsque de tels tests sont implémentables, ils permettent de faire remonter de façon automatique des documents annotés comportant un fort risque d'erreurs et qui seront donc à vérifier en priorité par l'expert métier.")]),e._v(" "),a("h3",{attrs:{id:"les-metriques-de-concordances-entre-annotateurs-inter-annotater-agreement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-metriques-de-concordances-entre-annotateurs-inter-annotater-agreement"}},[e._v("#")]),e._v(" Les métriques de concordances entre annotateurs ("),a("em",[e._v("Inter Annotater Agreement")]),e._v(")")]),e._v(" "),a("p",[e._v("Des métriques existent pour comparer les annotations réalisées par différents annotateurs: le "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Kappa_de_Fleiss",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fleiss-Kappa"),a("OutboundLink")],1),e._v(" pour comparer les annotations entre "),a("em",[e._v("n")]),e._v(" annotateurs et le "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Kappa_de_Cohen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kappa de Cohen"),a("OutboundLink")],1),e._v(" pour comparer les annotations de deux annotateurs seulement. Des librairies dans les langages open source R ou Python permettent d'implémenter ces métriques.")]),e._v(" "),a("p",[e._v("Calculer ces métriques suppose cependant des choix méthodologiques plus ou moins complexes selon la complexité du schéma et des consignes d'annotation. Ces choix méthodologiques sont très bien détaillés dans la partie intitulée "),a("em",[e._v('"Mesure des accords inter- et intra-annotateur"')]),e._v(" de la "),a("a",{attrs:{href:"https://tel.archives-ouvertes.fr/tel-00797760v1/document",target:"_blank",rel:"noopener noreferrer"}},[e._v("thèse de doctorat"),a("OutboundLink")],1),e._v(" citée dans les ressources.")]),e._v(" "),a("h2",{attrs:{id:"accelerer-le-processus-d-annotation-grace-a-la-pre-annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accelerer-le-processus-d-annotation-grace-a-la-pre-annotation"}},[e._v("#")]),e._v(" Accélérer le processus d'annotation grâce à la pré-annotation")]),e._v(" "),a("p",[e._v("L'annotation manuelle étant un processus long et couteux en temps, il est souvent judicieux d'employer des méthodes automatiques ou semi-automatiques afin d'accélérer le processus d'annotation.")]),e._v(" "),a("div",{staticClass:"lexique"},[a("p",{staticClass:"title"},[e._v("Lexique : La pré-annotation")]),a("p",[e._v("La pré-annotation consiste à annoter de façon automatique les documents, afin que l’annotateur les vérifie, en les complétant ou en les corrigeant si nécessaire.")])]),a("p",[e._v("Plusieurs possibilités sont envisageables pour mettre en œuvre la pré-annotation, détaillées dans les deux paragraphes ci-dessous.")]),e._v(" "),a("h3",{attrs:{id:"la-pre-annotation-par-moteur-de-regles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#la-pre-annotation-par-moteur-de-regles"}},[e._v("#")]),e._v(" La pré-annotation par moteur de règles")]),e._v(" "),a("p",[e._v("Cette méthode présente l'avantage de ne pas nécessiter de données annotées. Elle peut donc être implémentée dès le début du projet. Dans certains cas, des règles simples peuvent permettre d'annoter des documents avec une performance plus ou moins bonne. Par exemple, afin de repérer les nom de personnes physiques dans un document, on peut utiliser la règle : tout ce qui suit \"Madame\" ou \"Monsieur\" est un nom de personne physique. Bien évidemment, cette règle ne permettra pas de repérer tous les noms de personnes physiques (certains noms ne seront pas précédés de Madame ou Monsieur) et conduira également à des faux-positifs (certains mots qui suivent Monsieur ou Madame ne seront pas des personnes physiques). L'implémentation de ce type de règles par des méthodes informatiques peut cependant permettre d'accélérer le processus d'annotation, afin d'annoter les cas simples, c'est-à-dire ceux qui sont conformes à certains règles métier ou d'usage.")]),e._v(" "),a("p",[e._v("La pertinence de cette méthode est à évaluer au cas par cas avec les experts métiers, afin d'identifier l'ensemble des règles pertinentes. Une fois ces règles établies, il faudra les traduire informatiquement afin de pré-annoter les documents, un travail à réaliser par un profil de data scientist.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.snorkel.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snorkel"),a("OutboundLink")],1),e._v(" est un outil open source développé par une équipe de Standford University permettant d'annoter des documents de façon automatique par le croisement de différentes règles métier. Une librairie est disponible en Python pour implémenter ces méthodes et de nombreux exemples et tutoriels sont proposés sur le "),a("a",{attrs:{href:"https://www.snorkel.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("site du projet"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"la-pre-annotation-par-un-modele-d-apprentissage-supervise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#la-pre-annotation-par-un-modele-d-apprentissage-supervise"}},[e._v("#")]),e._v(" La pré-annotation par un modèle d'apprentissage supervisé")]),e._v(" "),a("p",[e._v("Ce type de méthodes nécessite un premier jeu de données annotées. Une fois qu'un premier jeu de données annotées est constitué, il est alors possible d'entraîner un premier algorithme d'apprentissage afin de labéliser les documents. Ce processus est itératif : il est en effet difficile de connaître à l'avance la taille minimale requise du jeu d'apprentissage permettant de bonnes performances. On peut alors, à partir d'un faible volume de données, entraîner un premier algorithme qui n'aura probablement pas des performances suffisantes pour passer en production, mais dont on peut cependant espérer qu'il permette d'accélérer le processus d'annotation. Il faudra veiller à calibrer l'algorithme pour favoriser la précision au rappel, ce qui impliquera pour l'annotateur de corriger peu des champs annotés automatiquement (un taux de faux positifs faible) mais de rajouter les labels que l'algorithme omettra (taux de faux négatifs plus élevé).")]),e._v(" "),a("h2",{attrs:{id:"la-priorisation-des-documents-a-annoter-avec-l-active-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#la-priorisation-des-documents-a-annoter-avec-l-active-learning"}},[e._v("#")]),e._v(" La priorisation des documents à annoter avec l'active learning")]),e._v(" "),a("p",[e._v("Dans un projet d'annotation, les documents à annoter sont souvent sélectionnés aléatoirement parmi l'ensemble des documents.")]),e._v(" "),a("div",{staticClass:"lexique"},[a("p",{staticClass:"title"},[e._v("Lexique : Active learning")]),a("p",[e._v("L'active learning est un champ de l'apprentissage automatique qui fait interagir l'algorithme d'apprentissage avec le système en charge de la labélisation (l'annotateur dans notre cas). Cette méthode est particulièrement utile dans les situations où l'obtention de labels est coûteuse. Au fur et à mesure de l'annotation, l'algorithme va apprendre à prioriser les documents à faire annoter afin de maximiser le gain d'information du nouveau document annoté, et ainsi permettre de minimiser le nombre de documents nécessaires pour entraîner un algorithme avec de bonnes performances.")])]),a("p",[e._v("L'idée sous-jacente est que tous les documents n'apporteront pas la même contribution à l'algorithme d'apprentissage. Pour plus d'informations à ce sujet, "),a("a",{attrs:{href:"https://pdfs.semanticscholar.org/799c/1a76e9ef45d543cb0b0169550e761376e975.pdf?_ga=2.78090388.1614533376.1600861526-210375121.1588074514",target:"_blank",rel:"noopener noreferrer"}},[e._v("cet article"),a("OutboundLink")],1),e._v(" détaille comment implémenter des méthodes d'active learning appliquées à l'annotation de documents textuels.")]),e._v(" "),a("h2",{attrs:{id:"faire-le-bilan-de-votre-campagne-d-annotation-manuelle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faire-le-bilan-de-votre-campagne-d-annotation-manuelle"}},[e._v("#")]),e._v(" Faire le bilan de votre campagne d'annotation manuelle")]),e._v(" "),a("p",[e._v("Conduire une campagne d'annotation est souvent complexe. Une fois la campagne terminée, en faire le bilan pourra s'avérer fort utile à de futurs projets impliquant de l'annotation, en documentant la démarche, le déroulement de la campagne ainsi que les métriques clés. Nous proposons dans cette partie une liste, non exhaustive, de métriques et de questions à se poser pour faire le bilan de votre campagne d'annotation et en tirer des enseignements.")]),e._v(" "),a("h3",{attrs:{id:"les-metriques-d-evaluation-de-la-campagne"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-metriques-d-evaluation-de-la-campagne"}},[e._v("#")]),e._v(" Les métriques d'évaluation de la campagne")]),e._v(" "),a("h3",{attrs:{id:"les-metriques-quantitatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-metriques-quantitatives"}},[e._v("#")]),e._v(" Les métriques quantitatives")]),e._v(" "),a("ul",[a("li",[e._v("Durée de la campagne d'annotation")]),e._v(" "),a("li",[e._v("Nombre d'annotateurs mobilisés")]),e._v(" "),a("li",[e._v("Volume total de documents annotés")]),e._v(" "),a("li",[e._v("Temps moyen passé à annoter un document")])]),e._v(" "),a("p",[e._v("Dans le cas où une solution d'automatisation de l'annotation a été développée à l'aide d'outils d'intelligence artificielle :")]),e._v(" "),a("ul",[a("li",[e._v("Métriques de performance de l'algorithme d'automatisation de l'annotation (justesse, précision, rappel, F1-Score) globales et ventilées selon les différentes catégories d'annotations si pertinent")]),e._v(" "),a("li",[e._v("Evolution de ces différentes métriques en fonction de la taille de l'échantillon d'apprentissage")])]),e._v(" "),a("h3",{attrs:{id:"les-metriques-qualitatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-metriques-qualitatives"}},[e._v("#")]),e._v(" Les métriques qualitatives")]),e._v(" "),a("ul",[a("li",[e._v("Adéquation du logiciel d'annotation (au vu notamment des différents critères listés dans la partie "),a("RouterLink",{attrs:{to:"/annotation/4-les-logiciels-d-annotation.html"}},[e._v("Critères de sélection d’un logiciel d’annotation de documents textuels ")]),e._v(")")],1),e._v(" "),a("li",[e._v("Adéquation du schéma d'annotation (lisibilité, reproductibilité, couverture des cas particuliers)")]),e._v(" "),a("li",[e._v("Si les objectifs de volumes de documents à annoter initialement prévus ont été revus à la baisse, en identifier les raisons, qui peuvent être liées :\n"),a("ul",[a("li",[e._v("aux difficulté de mobiliser les annotateurs")]),e._v(" "),a("li",[e._v("au temps d'annotation par document plus long que prévu")]),e._v(" "),a("li",[e._v("aux itérations pour trouver un schéma d'annotation plus nombreuses que prévu, ce qui a ralenti le démarrage effectif de la campagne")])])])]),e._v(" "),a("h3",{attrs:{id:"constituer-de-ressources-mutualisables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constituer-de-ressources-mutualisables"}},[e._v("#")]),e._v(" Constituer de ressources mutualisables")]),e._v(" "),a("p",[e._v("Au-delà de la documentation développée au cours du projet et en fin de projet qui constituent des ressources potentiellement utiles à d'autres projets, une campagne d'annotation peut aussi être l'opportunité de constituer des ressources mutualisables. Lorsque les règles de protection de données le permettent, publier en open data un corpus de données annotées peut permettre à d'autres projets de se réaliser. Si la publication en open data n'est pas envisageable, le corpus de données annotées pourra s'avérer utile à de futurs projets de votre organisation. Il est donc utile de conserver ce corpus avec la documentation associée.")]),e._v(" "),a("p",[e._v("Lorsqu'un logiciel d'annotation est développé pour répondre au besoin spécifique de votre projet, il peut également être intéressant de publier le code source de l'application sur un repertoire public de type GitHub (on parle alors de code "),a("em",[e._v("open source")]),e._v(").")])])}),[],!1,null,null,null);t.default=s.exports}}]);