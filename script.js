let mensajes = [
    "Hola mi amor, quería ser un poco 'único' para darte una flor por este día",
    "Te doy esta flor con todo mi corazón, y la próxima vez si te quiero dar una buena flor por un día especial en un futuro... ya verás",
    "Así que he diseñado una página web solo para darte este mensaje, aunque sé que es a través de una pantalla y no una flor en persona",
      "Te quiero muchísimo, mi persona especial. Eres única ❤️",
    "<img src='flor.jpeg' alt='Una flor para ti' style='width: 150px; height: auto;'>"
];

let indice = 0;

function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    // Asigna el mensaje o la imagen
    mensaje.innerHTML = mensajes[indice];

    // Muestra el mensaje si está oculto
    if (mensaje.style.display === "none" || mensaje.style.display === "") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }

    // Avanza al siguiente mensaje (vuelve al inicio si llega al final)
    indice = (indice + 1) % mensajes.length;
}
