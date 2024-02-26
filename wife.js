/*wife*/
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


const wife3 = document.querySelector('.wif2 .container .content .image .img3')
const wife4 = document.querySelector('.wif2 .container .content .image .img4')
const wife5 = document.querySelector('.wif2 .container .content .image .img5')
const wife6 = document.querySelector('.wif2 .container .content .image .img6')
const wife7 = document.querySelector('.wif2 .container .content .image .img7')
const wife8 = document.querySelector('.wif2 .container .content .image .img8')



wife3.addEventListener('mouseenter', function (){
    wife3.style.transform = "translateY(10px)"
    wife3.style.transition = "0.3s"
})

wife3.addEventListener('mouseleave', function (){
    wife3.style.transform = "translateY(0px)"
    wife3.style.transition = "0.3s"
})

wife4.addEventListener('mouseenter', function (){
    wife4.style.transform = "translateY(10px)"
    wife4.style.transition = "0.3s"
})

wife4.addEventListener('mouseleave', function (){
    wife4.style.transform = "translateY(0px)"
    wife4.style.transition = "0.3s"
})


wife5.addEventListener('mouseenter', function (){
    wife5.style.transform = "translateY(10px)"
    wife5.style.transition = "0.3s"
})

wife5.addEventListener('mouseleave', function (){
    wife5.style.transform = "translateY(0px)"
    wife5.style.transition = "0.3s"
})


wife6.addEventListener('mouseenter', function (){
    wife6.style.transform = "translateY(10px)"
    wife6.style.transition = "0.3s"
})

wife6.addEventListener('mouseleave', function (){
    wife6.style.transform = "translateY(0px)"
    wife6.style.transition = "0.3s"
})


wife7.addEventListener('mouseenter', function (){
    wife7.style.transform = "translateY(10px)"
    wife7.style.transition = "0.3s"
})

wife7.addEventListener('mouseleave', function (){
    wife7.style.transform = "translateY(0px)"
    wife7.style.transition = "0.3s"
})


wife8.addEventListener('mouseenter', function (){
    wife8.style.transform = "translateY(10px)"
    wife8.style.transition = "0.3s"
})

wife8.addEventListener('mouseleave', function (){
    wife8.style.transform = "translateY(0px)"
    wife8.style.transition = "0.3s"
})



const img3 = document.querySelector('.img3');
const texth3 = document.querySelector('.img3 .text h3');
const texth5 = document.querySelector('.img3 .text h5');
const textprice3 = document.querySelector('.img3 .text .price');

img3.addEventListener('mouseenter', function() {
    const image = img3.querySelector('img');
    // Changer la source de l'image
    image.src = 'Image_femme/Capture d’écran16.png';
    // Modifier le texte de l'élément h3
    texth3.textContent = 'HERMÈS';
    texth5.textContent = 'Tutty Twilly d\'Hermès';
    textprice3.textContent = 'À partir de 53.79 $';
    // Appliquer une transition
    image.style.transition = '3s';
});

img3.addEventListener('mouseleave', function() {
    const image = img3.querySelector('img');
    // Rétablir la source de l'image initiale
    image.src = 'Image_femme/Capture d’écran10.png';
    // Rétablir le texte de l'élément h3 initial
    texth3.textContent = 'NINA RICCI';
    texth5.textContent = 'Nina Illusion';
    textprice3.textContent = 'À partir de 52.61 $';
    // Appliquer une transition
    image.style.transition = '3s';
});


/*img4*/


const img4 = document.querySelector('.img4');
const text4h3 = document.querySelector('.img4 .text h3');
const text4h5 = document.querySelector('.img4 .text h5');
const text4price3 = document.querySelector('.img4 .text .price');

img4.addEventListener('mouseenter', function() {
    const image4 = img4.querySelector('img');
    // Changer la source de l'image
    image4.src = 'Image_femme/Capture d’écran17.png';
    // Modifier le texte de l'élément h3
    text4h3.textContent = 'PACO RABANNE';
    text4h5.textContent = 'Fame';
    text4price3.textContent = 'À partir de 54.30 $';
    // Appliquer une transition
    image4.style.transition = '3s';
});

img4.addEventListener('mouseleave', function() {
    const image4 = img4.querySelector('img');
    // Rétablir la source de l'image initiale
    image4.src = 'Image_femme/Capture d’écran11.png';
    // Rétablir le texte de l'élément h3 initial
    text4h3.textContent = 'YVES SAINT LAURENT';
    text4h5.textContent = 'Libre L\'Absolue Platine';
    text4price3.textContent = 'À partir de 102.41 $';
    // Appliquer une transition
    image4.style.transition = '3s';
});


/*img5*/

const img5 = document.querySelector('.img5');
const text5h3 = document.querySelector('.img5 .text h3');
const text5h5 = document.querySelector('.img5 .text h5');
const text5price3 = document.querySelector('.img5 .text .price');

img5.addEventListener('mouseenter', function() {
    const image5 = img5.querySelector('img');
    // Changer la source de l'image
    image5.src = 'Image_femme/Capture d’écran18.png';
    // Modifier le texte de l'élément h3
    text5h3.textContent = 'NARCISCO RODRIGUEZ';
    text5h5.textContent = 'All Of Me';
    text5price3.textContent = 'À partir de 54.53 $';
    // Appliquer une transition
    image.style.transition = '3s';
});

img5.addEventListener('mouseleave', function() {
    const image5 = img5.querySelector('img');
    // Rétablir la source de l'image initiale
    image5.src = 'Image_femme/Capture d’écran12.png';
    // Rétablir le texte de l'élément h3 initial
    text5h3.textContent = 'ARMANI';
    text5h5.textContent = 'My Way Nectar';
    text5price3.textContent = 'À partir de 64.73 $';
    // Appliquer une transition
    image5.style.transition = '3s';
});


/*img6*/

const img6 = document.querySelector('.img6');
const text6h3 = document.querySelector('.img6 .text h3');
const text6h5 = document.querySelector('.img6 .text h5');
const text6price3 = document.querySelector('.img6 .text .price');

img6.addEventListener('mouseenter', function() {
    const image6 = img6.querySelector('img');
    // Changer la source de l'image
    image6.src = 'Image_femme/Capture d’écran19.png';
    // Modifier le texte de l'élément h3
    text6h3.textContent = 'ARMANI';
    text6h5.textContent = 'Si';
    text6price3.textContent = 'À partir de 64.86 $';
    // Appliquer une transition
    image6.style.transition = '3s';
});

img6.addEventListener('mouseleave', function() {
    const image6 = img6.querySelector('img');
    // Rétablir la source de l'image initiale
    image6.src = 'Image_femme/Capture d’écran13.png';
    // Rétablir le texte de l'élément h3 initial
    text6h3.textContent = 'GERLAIN';
    text6h5.textContent = 'La Petite Robe Noir';
    text6price3.textContent = 'À partir de 58.62 $';
    // Appliquer une transition
    image6.style.transition = '3s';
});


/*img7*/

const img7 = document.querySelector('.img7');
const text7h3 = document.querySelector('.img7 .text h3');
const text7h5 = document.querySelector('.img7 .text h5');
const text7price3 = document.querySelector('.img7 .text .price');

img7.addEventListener('mouseenter', function() {
    const image7 = img7.querySelector('img');
    // Changer la source de l'image
    image7.src = 'Image_femme/Capture d’écran20.png';
    // Modifier le texte de l'élément h3
    text7h3.textContent = 'DIOR';
    text7h5.textContent = 'Parfum Notes Florales';
    text7price3.textContent = 'À partir de 130.89 $';
    // Appliquer une transition
    image7.style.transition = '3s';
});

img7.addEventListener('mouseleave', function() {
    const image7 = img7.querySelector('img');
    // Rétablir la source de l'image initiale
    image7.src = 'Image_femme/Capture d’écran14.png';
    // Rétablir le texte de l'élément h3 initial
    text7h3.textContent = 'LA SULTANE DE SABA';
    text7h5.textContent = 'Eau de Parfum Voyage en Orient';
    text7price3.textContent = 'À partir de 74.00 $';
    // Appliquer une transition
    image7.style.transition = '3s';
});

/*img8*/


const img8 = document.querySelector('.img8');
const text8h3 = document.querySelector('.img8 .text h3');
const text8h5 = document.querySelector('.img8 .text h5');
const text8price3 = document.querySelector('.img8 .text .price');

img8.addEventListener('mouseenter', function() {
    const image8 = img8.querySelector('img');
    // Changer la source de l'image
    image8.src = 'Image_femme/Capture d’écran21.png';
    // Modifier le texte de l'élément h3
    text8h3.textContent = 'DIOR';
    text8h5.textContent = 'Parfum Notes Florales';
    text8price3.textContent = 'À partir de 130.89 $';
    // Appliquer une transition
    image8.style.transition = '3s';
});

img8.addEventListener('mouseleave', function() {
    const image8 = img8.querySelector('img');
    // Rétablir la source de l'image initiale
    image8.src = 'Image_femme/Capture d’écran15.png';
    // Rétablir le texte de l'élément h3 initial
    text8h3.textContent = 'GERLAIN';
    text8h5.textContent = 'Aqua Allegoria Forte Oud Yuzu';
    text8price3.textContent = 'À partir de 81.68 $';
    // Appliquer une transition
    image8.style.transition = '3s';
});