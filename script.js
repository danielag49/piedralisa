// Seleccionar todos los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Agregar evento de clic a cada menú
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const extraContent = item.querySelector('.extra-content');
        
        // Mostrar o ocultar el contenido extra
        if (extraContent.style.display === "block") {
            extraContent.style.display = "none";
        } else {
            extraContent.style.display = "block";
        }
    });
});
