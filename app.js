let listaNombres = []; 

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Obtenemos el input

        if (nombre===""){
            alert("Ingresar un nombre >:C");
        } else{
            listaNombres.push(nombre); // Agregamos el nombre al array
            mostrarLista(); // Actualizamos la lista en pantalla
            limpiarCaja(); // Limpiamos el input después de agregar el nombre
        }
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos"); // Seleccionamos el <ul>
    listaHTML.innerHTML = ""; // Limpiamos la lista antes de actualiz arla

    listaNombres.forEach(nombre => {
        let li = document.createElement("li"); // Creamos un nuevo <li>
        li.textContent = nombre; // Asignamos el nombre al <li>
        listaHTML.appendChild(li); // Lo agregamos a la lista 
    });
}

function limpiarCaja(){
    let cajalimpia= document.querySelector("#amigo").value="";

}
function limpiarLista(){
    let listalimpia= document.querySelector("#listaAmigos").innerHTML="";
}

function sortearAmigo(){
    limpiarLista();
    let elemento=document.getElementById("resultado");
    elemento.innerHTML="";

    let posicion=Math.floor(Math.random()*listaNombres.length);
    let amigosorteado= listaNombres[posicion];

    elemento.innerHTML=(amigosorteado);

} 
function hola(){
    console.log("hola")
}