/* console.log(document.); */


/* getElementById() */

console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el parrfo 1";

console.log(parrafo1.style);

parrafo1.style.color ="red";
parrafo1.style.backgroundColor = "yellow";


/* querySelector()

*/
//etiqueta = p
// clase = .parrafo
//id = #parrafo1


const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo1.textContent);

/* \n -- inserta un salto de linea === <br> */

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

const parrafo3 = document.querySelector(".parrafo");
console.log(parrafo1.textContent);

/* \n -- inserta un salto de linea === <br> */

parrafo3.textContent += "\n Modificando el contenido desde JavaScript";



/* querySelectorAll --  lista de nodos*/

const parrafos = document.querySelectorAll('p');
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem"

//css - font-size
//js - fontsize - lower camel case


/* Modificar los atributos de html */

const enlace = document.getElementById('enlace')
console.log(enlace.href);

enlace.href = 'htts://www.youtube.com/';
enlace.target = "blank";
enlace.textContent = "Enlace de Youtube"




/* Remplazar contenido */


const parrafo4 = document.getElementById("parrafo4")

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML);//muestra el html que haya en el interior de el elemento

console.log(parrafo4.outerHTML);//muestra el contenido html, inlcuyendo al elemento

/* parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>' //remplaza el elemento completo

parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>' //remplaza el contenido del elemento */

/* parrafo4.innerHTML = '<div class="elemento">Este es un div</div>'; */

/* Js permite modificar las clases css
utilizando style */

console.log(parrafo4.classList.contains("elemento"));

const cambiaColor = () =>{
    parrafo4.classList.toggle("elemento")

}
cambiaColor()//se agrega la clase
cambiaColor()//se quita la clase


















