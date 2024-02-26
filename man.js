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


const man3 = document.querySelector('.man2 .container .content .image .img3')
const man4 = document.querySelector('.man2 .container .content .image .img4')
const man5 = document.querySelector('.man2 .container .content .image .img5')
const man6 = document.querySelector('.man2 .container .content .image .img6')
const man7 = document.querySelector('.man2 .container .content .image .img7')
const man8 = document.querySelector('.man2 .container .content .image .img8')



man3.addEventListener('mouseenter', function (){
    man3.style.transform = "translateY(10px)"
    man3.style.transition = "0.3s"
})

man3.addEventListener('mouseleave', function (){
    man3.style.transform = "translateY(0px)"
    man3.style.transition = "0.3s"
})

man4.addEventListener('mouseenter', function (){
    man4.style.transform = "translateY(10px)"
    man4.style.transition = "0.3s"
})

man4.addEventListener('mouseleave', function (){
    man4.style.transform = "translateY(0px)"
    man4.style.transition = "0.3s"
})


man5.addEventListener('mouseenter', function (){
    man5.style.transform = "translateY(10px)"
    man5.style.transition = "0.3s"
})

man5.addEventListener('mouseleave', function (){
    man5.style.transform = "translateY(0px)"
    man5.style.transition = "0.3s"
})


man6.addEventListener('mouseenter', function (){
    man6.style.transform = "translateY(10px)"
    man6.style.transition = "0.3s"
})

man6.addEventListener('mouseleave', function (){
    man6.style.transform = "translateY(0px)"
    man6.style.transition = "0.3s"
})


man7.addEventListener('mouseenter', function (){
    man7.style.transform = "translateY(10px)"
    man7.style.transition = "0.3s"
})

man7.addEventListener('mouseleave', function (){
    man7.style.transform = "translateY(0px)"
    man7.style.transition = "0.3s"
})


man8.addEventListener('mouseenter', function (){
    man8.style.transform = "translateY(10px)"
    man8.style.transition = "0.3s"
})

man8.addEventListener('mouseleave', function (){
    man8.style.transform = "translateY(0px)"
    man8.style.transition = "0.3s"
})


const img3 = document.querySelector('.img3');
const texth3 = document.querySelector('.img3 .text h3');
const texth5 = document.querySelector('.img3 .text h5');
const textprice3 = document.querySelector('.img3 .text .price');

img3.addEventListener('mouseenter', function() {
    const image = img3.querySelector('img');
    // Changer la source de l'image
    image.src = 'Image_homme/Capture d’écran17.png';
    image.style.width = '15rem'
    // Modifier le texte de l'élément h3
    texth3.textContent = 'NARCISCO RODRIGUEZ';
    texth5.textContent = 'For Him Bleu Noir';
    textprice3.textContent = 'À partir de 59.42 $';
});

img3.addEventListener('mouseleave', function() {
    const image = img3.querySelector('img');
    // Rétablir la source de l'image initiale
    image.src = 'Image_homme/Capture d’écran11.png';
    image.style.width = '15rem'
    // Rétablir le texte de l'élément h3 initial
    texth3.textContent = 'AZARRO';
    texth5.textContent = 'Chrome Legend';
    textprice3.textContent = 'À partir de 36.00 $';
});

/*img4*/


const img4 = document.querySelector('.img4');
const text4h3 = document.querySelector('.img4 .text h3');
const text4h5 = document.querySelector('.img4 .text h5');
const text4price3 = document.querySelector('.img4 .text .price');

img4.addEventListener('mouseenter', function() {
    const image4 = img4.querySelector('img');
    // Changer la source de l'image
    image4.src = 'Image_homme/Capture d’écran18.png';
    // Modifier le texte de l'élément h3
    text4h3.textContent = 'DIOR';
    text4h5.textContent = 'Sauvage';
    text4price3.textContent = 'À partir de 76.35 $';
    // Appliquer une transition
    image4.style.transition = '3s';
});

img4.addEventListener('mouseleave', function() {
    const image4 = img4.querySelector('img');
    // Rétablir la source de l'image initiale
    image4.src = 'Image_homme/Capture d’écran12.png';
    image4.style.width = '15rem'
    // Rétablir le texte de l'élément h3 initial
    text4h3.textContent = 'ARMANI';
    text4h5.textContent = 'Code Homme';
    text4price3.textContent = 'À partir de 29.07 $';
});

/*img5*/


const img5 = document.querySelector('.img5');
const text5h3 = document.querySelector('.img5 .text h3');
const text5h5 = document.querySelector('.img5 .text h5');
const text5price3 = document.querySelector('.img5 .text .price');

img5.addEventListener('mouseenter', function() {
    const image5 = img5.querySelector('img');
    // Changer la source de l'image
    image5.src = 'Image_homme/Capture d’écran19.png';
    // Modifier le texte de l'élément h3
    text5h3.textContent = 'AZARRO';
    text5h5.textContent = 'The Most Wanted';
    text5price3.textContent = 'À partir de 58.25 $';
});

img5.addEventListener('mouseleave', function() {
    const image5 = img5.querySelector('img');
    // Rétablir la source de l'image initiale
    image5.src = 'Image_homme/Capture d’écran13.png';
    image5.style.width = '15rem'
    // Rétablir le texte de l'élément h3 initial
    text5h3.textContent = 'ISSEY MIYAKE';
    text5h5.textContent = 'Fusion d\'Issey';
    text5price3.textContent = 'À partir de 50.79 $';
});

/*img6*/


const img6 = document.querySelector('.img6');
const text6h3 = document.querySelector('.img6 .text h3');
const text6h5 = document.querySelector('.img6 .text h5');
const text6price3 = document.querySelector('.img6 .text .price');

img6.addEventListener('mouseenter', function() {
    const image6 = img6.querySelector('img');
    // Changer la source de l'image
    image6.src = 'Image_homme/Capture d’écran20.png';
    image6.style.width = '12.5rem'
    // Modifier le texte de l'élément h3
    text6h3.textContent = 'YVES SAINT LAURENT';
    text6h5.textContent = 'L\'Homme Cologne Bleu';
    text6price3.textContent = 'À partir de 58.83 $'; 
});

img6.addEventListener('mouseleave', function() {
    const image6 = img6.querySelector('img');
    // Rétablir la source de l'image initiale
    image6.src = 'Image_homme/Capture d’écran14.png';
    image6.style.width = '15rem'
    // Rétablir le texte de l'élément h3 initial
    text6h3.textContent = 'DIESEL';
    text6h5.textContent = 'Found of the Brave';
    text6price3.textContent = 'À partir de 45.34 $';
});


/*img7*/

const img7 = document.querySelector('.img7');
const text7h3 = document.querySelector('.img7 .text h3');
const text7h5 = document.querySelector('.img7 .text h5');
const text7price3 = document.querySelector('.img7 .text .price');

img7.addEventListener('mouseenter', function() {
    const image7 = img7.querySelector('img');
    // Changer la source de l'image
    image7.src = 'Image_homme/Capture d’écran21.png';
    image7.style.width = '13rem'
    // Modifier le texte de l'élément h3
    text7h3.textContent = 'HERMÈS';
    text7h5.textContent = 'H24';
    text7price3.textContent = 'À partir de 53.11 $';
});

img7.addEventListener('mouseleave', function() {
    const image7 = img7.querySelector('img');
    // Rétablir la source de l'image initiale
    image7.src = 'Image_homme/Capture d’écran15.png';
    image7.style.width = '15rem'
    // Rétablir le texte de l'élément h3 initial
    text7h3.textContent = 'JEAN PAUL GALTIER';
    text7h5.textContent = 'Le Beau';
    text7price3.textContent = 'À partir de 84.93 $';
});

/*img8*/

const img8 = document.querySelector('.img8');
const text8h3 = document.querySelector('.img8 .text h3');
const text8h5 = document.querySelector('.img8 .text h5');
const text8price3 = document.querySelector('.img8 .text .price');

img8.addEventListener('mouseenter', function() {
    const image8 = img8.querySelector('img');
    // Changer la source de l'image
    image8.src = 'Image_homme/Capture d’écran22.png';
    image8.style.width = '13rem'
    // Modifier le texte de l'élément h3
    text8h3.textContent = 'YVES SAINT LAURENT';
    text8h5.textContent = 'Y Le Parfum';
    text8price3.textContent = 'À partir de 78.28 $';
});

img8.addEventListener('mouseleave', function() {
    const image8 = img8.querySelector('img');
    // Rétablir la source de l'image initiale
    image8.src = 'Image_homme/Capture d’écran16.png';
    image8.style.width = '15rem'
    // Rétablir le texte de l'élément h3 initial
    text8h3.textContent = 'PACO RABANNE';
    text8h5.textContent = '1 Million Parfum';
    text8price3.textContent = 'À partir de 70.68 $';
});

