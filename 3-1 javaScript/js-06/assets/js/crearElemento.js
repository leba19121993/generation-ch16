/* crear un elemento */
const imagen = document.createElement("img")
//modificar los atributos html del elemento

imagen.src ="https://placeimg.com/200/200/tech";
imagen.alt = "Imagenes aleatorias de animales"

//lo insertamos en un elemento padre
document.body.appendChild(imagen)
document.body.insertAdjacentElement("afterbegin",imagen)
document.body.insertAdjacentElement("afterend",imagen)
document.body.insertAdjacentElement("beforebegin",imagen)
document.body.insertAdjacentElement("beforeend",imagen)


/* forma correcta de crear e insertar un elemento 
1 - Se crea el elemento que contendra la imagen
Seleccionar ek elemento padre*/

const placeimg = document.getElementById("padreImg");

//3 - crear elemento

const imagen2 = document.createElement("img")

//4- modificar los atributos de elemento
imagen2.src = "https://placeimg.com/200/200/nature";
imagen2.alt = "Imagenes de naturaleza"

//5 --INSERTAR ELEMENTO
padreImg.appendChild(imagen2)


//Utilizar forEach para pintar datos 

const frutas =["Toronja", "Manzana", "Limon","Jicama", "Granada", "Sandia","Platano","Guayaba"]

const listaFrutas =document.getElementById("frutas")

/* FORMA 1 */
/* frutas.forEach((element) =>{
    const li = document.createElement("li")
    li.textContent = element

    listaFrutas.appendChild(li)
}) */





/* FORMA  2*/

frutas.forEach((el) =>{
    listaFrutas.innerHTML += `<li>${el}</li>`;


})