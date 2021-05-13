'use strict';

// DONNEES

// Numéro de la slide à afficher
let slide = 0;
let slides;
// Variable qui contient le numéro du timer
// initialiser a null : c'est à dire qu'il est arrêter
let timerId = null;

// FONCTIONS

// FONCTION POUR LE BOUTON SUIVANT
// 3. Création de la fonction appelée lorsque l'événement est déclenché
function onNextSlide()
{
    // 1. Retirer la classe active sur l'image affichée
    //    let activeSlide = document.querySelector('.slider-figure.active');
    //   activeSlide.classList.remove('active');
    
    // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide suivante)
    slide++;
    
    // Si jamais on dépasse le dernier élément du tableau on revient au premier
    if (slide > slides.length - 1) {
        slide = 0;
    }
    
    // On récupère la slide suivante
    //    let nextSlide = slides[slide];
    
    // Ajout de la classe active sur la slide suivante
    //  nextSlide.classList.add('active');
    
    // Appelle de notre fonction qui regroupe les même données des deux fonctions
    updateSlide();
}

// FONCTION POUR LE BOUTON PRECEDENT
function onPrevSlide ()
{
    // 1. Retirer la classe active sur l'image affichée
    //    let activeSlide = document.querySelector('.slider-figure.active');
    //    activeSlide.classList.remove('active'); // permet de supprimer la classe "active"
    
    // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide suivante)
    slide--;
    console.log(slide);
    
    // Si jamais on dépasse le premier élément du tableau on revient au dernier (taille du tableau -1)
    if (slide < 0) {
        slide = slides.length - 1;
    }
    
    // On récupère la slide précédente 
    //  let prevSlide = slides[slide];
    
    // Ajout de la classe active sur la slide suivante
    //  prevSlide.classList.add('active');
    
    // Appelle de notre fonction qui regroupe les même données des deux fonctions
    updateSlide();

}


// FONCTION POUR LE BOUTON ALEATOIRE
function onRandomSlide()
{
    let random;
    
    // Fait le une 1ère fois et fait le Tant que  le numéro aléatoire généré est le même que le
    // numéro de la slide
    // on en génère un autre 
    do {
        random = getRandomInteger(0, slides.length - 1);
    } while (random === slide); 
    
    slide = random;
    updateSlide();
}

// FONCTION POUR LE BOUTON PLAY/PAUSE
function onPlayPauseSlider()
{
    
    
    // Si le timer est arrêté (ou pas encore lancé)
    // On va lancer le timer et enregistrer le numéro
    if (timerId === null) {
        // Chaque seconde on appelle une fonction qui va passer à la slide suivante
        timerId = setInterval(onNextSlide, 1000);
    } else {
        // Si le timer est lancé, on va l'arrêter
        clearInterval(timerId);
        
        // Le timer est maintenant arrêté => on repasse timerId à null
        timerId = null;
    }
    
    let icon = document.querySelector('#play-pause i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-stop');
}




// on va factoriser (simplifier) le code des deux fonctions, on  récup les éléments identiques 
//  Puis on appelle la fonction "updateSlide" dans nos deux autres fonction
function updateSlide()
{
    // 1. Retirer la classe active sur l'image affichée
    let activeSlide = document.querySelector('.slider-figure.active');
    activeSlide.classList.remove('active');
    
    // On récupère la nouvelle slide
    let newSlide = slides[slide];
    
    // Ajout de la classe active sur la nouvelle slide
    newSlide.classList.add('active');
}

/**
 * Renvoie un nombre aléatoire entre min et max
 * 
 * @param int min Le nombre minimum
 * @param int max Le nombre maximum
 * @return int Un nombre compris entre min et max
 */
function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// CODE PRINCIPAL
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer toutes les images html dans un tableau 
    slides = document.querySelectorAll('.slider-figure');
    
    // Ici BOUTON SUIVANT------------------------------------
    // 1. Récupérer l'élément (boutton suivant)
    let nextButton = document.querySelector('#next');
    // 2. Mettre en place l'événement (boutton suivant)
    nextButton.addEventListener('click', onNextSlide);

    // Ici BOUTON PRECEDENT------------------------------------
    // 1. Récupérer l'élément (boutton précèdent)
    let prevButton = document.querySelector("#prev");
    // 2. Mettre en place l'événement (boutton précèdent)
    prevButton.addEventListener("click", onPrevSlide);
    
    // Ici BOUTON ALEATOIRE------------------------------------
    // 1. Récupérer l'élément (boutton précèdent)
    let randomButton = document.querySelector("#random");
    // 2. Mettre en place l'événement (boutton aléatoire)
     randomButton.addEventListener("click", onRandomSlide);
     
     // Ici BOUTON PLAYPAUSE ----------------------------------------
     // 1. Récupérer l'élément (boutton play)
     let playPauseButton = document.querySelector("#play-pause");
     // 2. Mettre en place l'événement (boutton play)
     playPauseButton.addEventListener("click", onPlayPauseSlider);
});

