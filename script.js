let mensajes = ["¡Hola!", "Espero que tengas un buen día!", "Sigue adelante!"];
let indice = 0;

function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");
    
    if (mensaje.style.display === "none" || mensaje.style.display === "") {
        mensaje.style.display = "block";
        mensaje.style.zIndex = "3";  // Asegurar que quede encima
    } else {
        mensaje.style.display = "none";
    }
}
