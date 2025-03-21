let mensajes = ["¡Hola!", "Espero que tengas un buen día!", "Sigue adelante!"];
let indice = 0;

function mostrarMensaje() {
    let mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = mensajes[indice];
    mensajeDiv.classList.add("mostrar");
    indice = (indice + 1) % mensajes.length;
}
