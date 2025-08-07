document.addEventListener("DOMContentLoaded", () => {
    const book = document.getElementById("book");

    // Lista de GIFs
    const pages = [
        "port.webp",
        "p1.webp",
        "pag2_1.webp",
        "p3.webp",
        "p4.webp",
        "p5.webp",
        "p6.webp",
        "p7.webp",
        "p8.webp",
        "p9.webp",
        "p10.webp",
        "pag11.webp",
        "p12.webp",
        "p13.webp",
        "p14.webp",
        "p15.webp",
        "p16.webp",
    ];

    // Generar páginas del libro con GIFs
    pages.forEach((gifSrc) => {
        const page = document.createElement("div");
        page.classList.add("page");

        // Crear elemento de imagen
        const gif = document.createElement("img");
        gif.classList.add("lozad"); // Añadir clase 'lozad' para el lazy loading
        gif.setAttribute("data-src", gifSrc); // Establecer el GIF en el atributo 'data-src' en lugar de 'src'
        gif.alt = "GIF Animado"; // Texto alternativo para accesibilidad

        // Agregar el GIF a la página
        page.appendChild(gif);

        // Agregar la página al libro
        book.appendChild(page);
    });

    // Inicializar Lozad.js para lazy loading
    const observer = lozad('.lozad', {
        loaded: function(el) {
            el.classList.add('fade'); // Añadir clase de desvanecimiento cuando se cargue la imagen
        }
    });
    observer.observe();

    // Inicializar Turn.js para la navegación entre páginas
    $("#book").turn({
        width: "100%", // Ancho del libro (ya es 100% del contenedor)
        height: "100%", // Alto del libro (ya es 100% del contenedor)
        autoCenter: true,
        direction: "rtl", // Sentido del libro: derecha a izquierda
        elevation: 50,    // Sombras en el centro
        gradients: true,  // Activar gradientes para realismo
        duration: 800,    // Duración de la animación al pasar página
    });

    // Controles de navegación
    document.getElementById("nextPage").addEventListener("click", () => {
        $("#book").turn("next");
    });

    document.getElementById("prevPage").addEventListener("click", () => {
        $("#book").turn("previous");
    });
});
