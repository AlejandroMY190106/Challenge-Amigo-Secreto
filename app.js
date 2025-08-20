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

    //Actualizar la lista en pantalla
    mostrarAmigos();

    console.log(amigos);
}

function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}