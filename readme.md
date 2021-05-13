# Slider
## Contexte
Les sliders ou carrousels d'images sont parfois décriés. Pour autant ce sont des éléments qu'on retrouve très souvent sur un site web
et c'est un cas d'école pour tout développeur. Il existe bien sûr des sliders "prêts-à-slider", notamment grâce aux plugins jQuery, mais on va voir ici que ce n'est pas si compliqué à faire soi-même.
Vive le DIY! :)

## Objectifs pédagogiques
Cet exercice va permettre de revoir et d'approfondir la manipulation du DOM en JavaScript :

- ***Sélection*** des éléments du DOM
- Gestion des classes avec l'***API classList***
- Gestion des ***événements*** liés à la ***souris***
- Gestion des ***événements*** liés au ***clavier***
- Evénément '***DOMContentLoaded***'

### Bonus 1
- ***Création d'éléments*** "from scratch" et ***insertion*** dans le document
- Manipulation des ***attributs*** HTML des éléments du DOM
- Stockage de données directement dans les balises HTML grâce aux ***attributs data*** et à l'***API dataset***

## Fonctionnalités
L'objectif du projet est de mettre en place un slider d'images.
Plusieurs boutons permettent d'agir sur le slider :

- Bouton "Image suivante" : affiche la prochaine image
- Bouton "Image précédente" : affiche l'image précédente
- Bouton "Play/Pause" : lancer / stoppe le défilement automatique des images
- Bouton "Random" : affiche une image au hasard, différente de l'image actuelle

En plus de ces boutons, le slider devra être navigable au clavier :

- touche -> (flèche droite) : affiche la prochaine image
- touche <- (flèche gauche) : affiche l'image précédente

## Indications
### Principe général
Toutes les images du slider seront présentes dès le départ dans le code source HTML. La balise ***figure*** semble ici adéquate.
En CSS il sera aisé de masquer les figures, sauf une, qui sera visible, au moyen d'une classe 'active'.

Changer l'image affichée signifie donc attribuer la classe 'active' à une autre figure... 

### Mise en place des éléments HTML

* Créer une barre de navigation (*class : toolbar*) pour la barre d'outils

La barre d'outils est une liste de boutons :

* Un bouton (*id : play-pause*) pour démarrer ou arrêter le carrousel.
* Un bouton (*id : random*) pour se déplacer aléatoirement dans le diaporama.

Dans la partie principale de la page :

* Créer une figure par photos (*class : slider-figure*)
* Insérer une balise img (*class : slider-picture*)
* Insérer une légende (*class : slider-legend*)
* Créer une navigation (*class : slider-navigation*)  intégrant 2 liens (*id : prev* / *class : prev*) (*id : next* / *class : next*)  permettant de naviguer vers la gauche ou vers la droite (flèches)


### CSS

Au chargement de la page :

* Toutes les figures doivent être masquées, sauf la première à l'aide d'une classe (*class : active*)
* Les légendes doivent apparaître sur les photos suffisamment lisibles
* Les flèches de navigation doivent être placées de part et d'autre de la photo

### JavaScript

* Comme pour l'exercice Dragon Slayer, il faut séparer le code réutilisable dans d'autres projets du code spécifique au projet.
* Comme pour l'exercice Dragon Slayer, organiser le code en trois parties : les variables, les fonctions et enfin le code principal.
* Nommer correctement les gestionnaires d'évènements pour qu'ils aient un sens.
* On veillera à utiliser le moins de variables globales possibles !

## BONUS
### Bonus 1 : ajout de puces
Ajouter des puces rondes cliquables sous le diaporama permettra d'accéder immédiatement à l'image souhaitée, de visualiser l'image active et de voir le nombre total d'images.

#### Indications

- Insérer une liste numérotée avec l'id ***slider-dots*** et la classe ***slider-dots*** dans le code HTML.
- Le nombre d'images pouvant changer, le code HTML ne pourra pas être écrit en dur dans le code source mais devra être généré de manière dynamique en JavaScript. Vous allez donc devoir apprendre à ***créer de nouveaux éléments***, à ***les insérer dans le document*** à l'endroit souhaité et à installer dessus un gestionnaire d'événement au clic.
La difficulté ici sera d'installer un gestionnaire d'événement sur des éléments qui n'existent pas au départ... ce sera l'occasion d'appréhender la ***délégation d'événement***.
- Les items de la liste seront stylés de manière à apparaître sur la figure.
- L'item qui correspond à l'image actuellement affichée est "sélectionné" et mis en évidence visuellement avec une couleur différente avec la classe ***selected***.
- Au clic sur l'un des items, l'image correspondante est affichée.
- Lorsque l'image affichée change, par exemple si on clique sur les boutons "Prédécent" ou "Suivant", l'item sélectionné est mis à jour.

#### Attention
Ce bonus fait intervenir les notions suivantes :

- délégation d'événement
- création d'élément et insertion dans le DOM
- API dataset

## Mockup
![Mockup1](resources/mockups/mockup1.png)
