const carouselSlide = document.querySelector('.carouselSlide')
const carouselImages = document.querySelectorAll('.carouselSlide img')

//Botones
const botonAtras = document.querySelector('#botonAtras')
const botonAdelante = document.querySelector('#botonAdelante')

//Contador
let contadorCarrusel = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * contadorCarrusel) + 'px)';

//Botones listenners

botonAdelante.addEventListener('click', () => {
    if(contadorCarrusel>=carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
   contadorCarrusel++;
   carouselSlide.style.transform = 'translateX(' + (-size * contadorCarrusel) + 'px)';
 
});

botonAtras.addEventListener('click', () => {
    if(contadorCarrusel<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    contadorCarrusel--;
    carouselSlide.style.transform = 'translateX(' + (-size * contadorCarrusel) + 'px)';
  
 });

 carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[contadorCarrusel].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        contadorCarrusel = carouselImages.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * contadorCarrusel) + 'px)';
    }
    if(carouselImages[contadorCarrusel].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        contadorCarrusel = carouselImages.length - contadorCarrusel;
        carouselSlide.style.transform = 'translateX(' + (-size * contadorCarrusel) + 'px)';
    }
 });

 