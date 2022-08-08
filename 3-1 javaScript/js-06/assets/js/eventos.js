//Manejador de eventos

function saludar(){
    alert("Hola");
}


//addeventlistener()

const boton = document.getElementById("boton")
console.log(boton);

boton.addEventListener('click', (evento)=>{
    //alert("hola")
    console.log(evento);
})

const formulario = document.getElementById("form");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert(formulario[0].value);
})