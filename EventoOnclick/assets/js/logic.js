console.log("Conectado, OK!!!")

let botonLogin = document.querySelector("#btnLogin");
let removerBoton = document.querySelector("#definicionBtn");
let megustaGato = document.querySelector("#mg_gato");
let numeroGato = document.querySelector("#numero_gato");
let megustaPerro = document.querySelector("#mg_perro");
let numeroPerro = document.querySelector("#numero_perro");

// Toggle Inicio de Sesion
botonLogin.addEventListener('dblclick', (evento) => {
    if(evento.target.innerText === "Iniciar Sesion"){
        evento.target.innerText = "Cerrar Sesion";
    }else{
        evento.target.innerText = "Iniciar Sesion";
    }
})

// Remover Boton
removerBoton.addEventListener('click', function(evento){
    removerBoton.remove()
})

// Incrementar likes
megustaGato.addEventListener("click",  function(evento){
    numeroGato.innerText ++;
    alert('Gato atrigado was liked');
})

megustaPerro.addEventListener("click",  function(evento){
    numeroPerro.innerText ++;
    alert('Golden Retriever was liked');
})
