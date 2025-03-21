let mensajes = ["¡Hola!", "Espero que tengas un buen día!", "Sigue adelante!"];
let indice = 0;

function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");
    
    // Asigna el mensaje actual
    mensaje.innerText = mensajes[indice];

    // Muestra el mensaje si está oculto
    if (mensaje.style.display === "none" || mensaje.style.display === "") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }

    // Avanza al siguiente mensaje (vuelve al inicio si llega al final)
    indice = (indice + 1) % mensajes.length;
}
