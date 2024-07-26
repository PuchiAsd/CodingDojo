console.log("Conectado, OK!!!")

// Inicializamos las variables
let botonLikeUno = document.querySelector("#btn-like-uno");
let spanTextoUno = document.querySelector("#span-uno");

let botonLikeDos = document.querySelector("#btn-like-dos");
let spanTextoDos = document.querySelector("#span-dos");

let botonLikeTres = document.querySelector("#btn-like-tres");
let spanTextoTres = document.querySelector("#span-tres");

// llamamos los metodos
botonLikeUno.addEventListener('click', function(evento){
    spanTextoUno.innerText ++;
})

botonLikeDos.addEventListener("click", function(evento) {
    spanTextoDos.innerText ++;
})

botonLikeTres.addEventListener("click", function(evento) {
    spanTextoTres.innerText ++;
})