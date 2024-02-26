       const screenWidth = window.screen.width;
       const header = document.querySelector('header')
       const menuHamburger = document.querySelector(".menu .image img");
       const content2 = document.querySelector("header .container .content2");
       
       if(screenWidth <= 900)
       {
        console.log('La taille de l\'écran est inférieure à 900px')
        content2.style.display = 'none'
        menuHamburger.style.display = 'block'
        menuHamburger.addEventListener('click', ()=>{
            content2.style.display = 'block'
            content2.style.marginLeft = '43rem'
            menuHamburger.style.display = 'none'
            content2.style.transition = 'all 0.5s ease'
        })

        header.addEventListener('click', ()=>{
            content2.style.display = 'none'
            menuHamburger.style.display = 'block' 
            content2.style.transition = 'all 0.5s ease'
        })

       }
       


       const image3 = document.querySelector('.part2 .container .content .image .img3')
       const image4 = document.querySelector('.part2 .container .content .image .img4')
       const image5 = document.querySelector('.part2 .container .content .image .img5')
       const image6 = document.querySelector('.part2 .container .content .image .img6')
       const image7 = document.querySelector('.part2 .container .content .image .img7')
       const image8 = document.querySelector('.part2 .container .content .image .img8')

image3.addEventListener('mouseenter', function (){
    image3.style.transform = "translateY(10px)"
    image3.style.transition = "0.3s"
})

image3.addEventListener('mouseleave', function (){
    image3.style.transform = "translateY(0px)"
    image3.style.transition = "0.3s"
})

image4.addEventListener('mouseenter', function (){
    image4.style.transform = "translateY(10px)"
    image4.style.transition = "0.3s"
})

image4.addEventListener('mouseleave', function (){
    image4.style.transform = "translateY(0px)"
    image4.style.transition = "0.3s"
})


image5.addEventListener('mouseenter', function (){
    image5.style.transform = "translateY(10px)"
    image5.style.transition = "0.3s"
})

image5.addEventListener('mouseleave', function (){
    image5.style.transform = "translateY(0px)"
    image5.style.transition = "0.3s"
})


image6.addEventListener('mouseenter', function (){
    image6.style.transform = "translateY(10px)"
    image6.style.transition = "0.3s"
})

image6.addEventListener('mouseleave', function (){
    image6.style.transform = "translateY(0px)"
    image6.style.transition = "0.3s"
})


image7.addEventListener('mouseenter', function (){
    image7.style.transform = "translateY(10px)"
    image7.style.transition = "0.3s"
})

image7.addEventListener('mouseleave', function (){
    image7.style.transform = "translateY(0px)"
    image7.style.transition = "0.3s"
})


image8.addEventListener('mouseenter', function (){
    image8.style.transform = "translateY(10px)"
    image8.style.transition = "0.3s"
})

image8.addEventListener('mouseleave', function (){
    image8.style.transform = "translateY(0px)"
    image8.style.transition = "0.3s"
})






/*
const img3 = document.querySelector('.img3');

// Fonction pour changer l'image avec un délai de 1 à 2 secondes
function changeImageWithDelay() {
    setTimeout(function() {
        // Sélection de l'image à l'intérieur de .img3
        const image = img3.querySelector('img');
        // Changement de la source de l'image
        image.src = 'Images/Capture d’écran10.png';
    }, Math.random() * 1000 + 1000); // Délai aléatoire entre 1000 et 2000 millisecondes (1 à 2 secondes)
}

// Ajout d'un gestionnaire d'événement pour l'événement mouseenter
img3.addEventListener('mouseenter', changeImageWithDelay);

// Ajout d'un gestionnaire d'événement pour l'événement mouseleave
img3.addEventListener('mouseleave', function() {
    // Sélection de l'image à l'intérieur de .img3
    const image = img3.querySelector('img');
    // Rétablissement de la source de l'image initiale
    image.src = 'Images/Capture d’écran9.png';
});*/

