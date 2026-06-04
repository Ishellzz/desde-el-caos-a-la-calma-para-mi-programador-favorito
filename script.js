function actualizarContador() {

```
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
```

}

setInterval(actualizarContador, 1000);
actualizarContador();

function mostrarCarta() {

```
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
```

}

let indice = 0;

function cambiarSlide() {

```
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
```

}

setInterval(cambiarSlide, 3000);

window.addEventListener("load", () => {
document.body.style.opacity = "1";
});

const historia = `Si soy sincera, al principio éramos solo conocidos.

No era que habláramos mucho ni nada por el estilo.

Pero hubo un momento donde empezamos a cruzar miradas.

No pasó nada después de eso, simplemente pasó.

Un día vino un amigo tuyo y me tiró una indirecta.

Y yo estaba completamente en el aire.

Porque no era que tú y yo habláramos, así que no entendía nada de lo que estaba pasando.

Después me preguntó si quería bailar para una actividad del 27.

Yo le seguí la corriente sin pensar mucho.

Entonces me llevó donde estabas tú y dijo que yo quería bailar contigo.

En ese momento me puse tan nerviosa que te hice señas de que no.

Todavía me da risa acordarme.

Luego una de mis amigas me decía que todo eso estaba raro y yo seguía diciendo:

"na que ver".

La realidad es que sí me parecías atractivo.

Lo negué como diez veces.

Pero al mismo tiempo buscaba cualquier excusa para mirarte o para cruzar unas cuantas palabras contigo.

Más adelante hablé con tu amigo y él me decía que te hablara.

Pero yo le respondí que me daba pena.

Y sin darme cuenta...

ahí fue donde empezó todo. 💙`;

let i = 0;

function escribirHistoria() {

```
const elemento = document.getElementById("textoHistoria");

if (!elemento) return;

if (i < historia.length) {

    elemento.innerHTML += historia.charAt(i);

    i++;

    setTimeout(escribirHistoria, 30);
}
```

}

window.addEventListener("load", escribirHistoria);
