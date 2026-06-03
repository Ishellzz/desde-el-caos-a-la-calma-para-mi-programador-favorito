function actualizarContador() {

    const fechaInicio = new Date("2026-02-06T00:00:00");
    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    const contador = document.getElementById("contador");

    if (contador) {

        contador.innerHTML =
            dias + " días • " +
            horas + " horas • " +
            minutos + " minutos • " +
            segundos + " segundos";
    }
}

setInterval(actualizarContador, 1000);
actualizarContador();


function mostrarCarta() {

    const carta = document.getElementById("cartaOculta");

    if (!carta) return;

    if (
        carta.style.display === "none" ||
        carta.style.display === ""
    ) {

        carta.style.display = "block";

    } else {

        carta.style.display = "none";
    }
}


/* Carrusel automático */

let indice = 0;

function cambiarSlide() {

    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    indice++;

    if (indice >= slides.length) {
        indice = 0;
    }

    slides[indice].classList.add("activo");
}

setInterval(cambiarSlide, 3000);


/* Animación suave al cargar */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
