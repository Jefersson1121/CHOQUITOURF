const carouselImages = document.getElementById('carousel-images');
const images = carouselImages.children;
const imageWidth = 300;
const gap = 20;
let currentIndex = 0;

function autoSlide() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const offset = -(currentIndex * (imageWidth + gap));
  carouselImages.style.transform = `translateX(${offset}px)`;
}

setInterval(autoSlide, 3000);

 function mostrarInfo(index) {
  const todasLasInfos = document.querySelectorAll('.info');
  todasLasInfos.forEach((info, i) => {
    info.style.display = (i === index && info.style.display !== 'block') ? 'block' : 'none';
  });
}
// Obtener el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar u ocultar el botón según la posición del scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Función para volver al inicio cuando se hace click en el botón
scrollToTopBtn.addEventListener("click", function() {
    // Para navegadores modernos
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
    // Para navegadores antiguos
    /*
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    */
});