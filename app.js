// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombre = document.getElementById("amigo").value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    nombre.value = "";

 

    console.log(amigos);
}