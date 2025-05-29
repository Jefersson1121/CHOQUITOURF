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