"use strict";
/* Tipos de datos */


/* Tipos de variable */
/* let a; //Local
const b = 0; //constante y local
var c;  //global
 */
/* Scopec - contexto 
espacio en el que vive la variable*/

// String
/* let cadena = "Hola Mundo!"; */

//Number
 /* let numero = 5;
 let numero1 = 5.89;
 let numero2 = 5.89; */

 //Boolean
 /* let booleano = true;
 let booleano2 = false; */

 //undefined - indefinido
/* let variable;
console.log(variable + 5); */

 //nulo
/* let vacio = null; */
 
 //NaN -- Not a Number
//no es un numero
//tratar de realizar alguna operacion aritmetica con algun dato que no es un numero 

/* Plantillas literales
        template strings
        literal strings
        interpolación
        
        
*/

// console.log(`Esta es una cadena ${5 + 4}`);

// let nombre = "Raul"

//let presentacion =`
// console.log("Mi nombre es " + nombre);
//ejemplo de interpolación
// console.log(`Yo me llamo ${nombre}`);

/* Arreglos - matrices - arrays */
// let arr = [1, "A", null, undefined, [true, false]];
//notacion de corchetes
// console.log(arr[4][0]);

/* if(arr[4][0] === true)
console.log("es verdad");

let arr2 = new Array("B", 2)
console.log(arr2); */

/* objetos */ 
//clave / valor

const persona = { nombre: "Abel", 
              edad: 28,
              hobbies:[
              "Videojuegos",
                       "Musica y Ost",
                       "Comer"
                    ],
                    auto:{
                        marca: "VW",
                        modelo: "Pointer",
                        year: 2000,
                    },    
                    saludar: function(){
                        return "Saludar";
                    }
            
            
        };

//Notacion de punto
console.log("Mi nombre es " + persona.nombre);
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);
console.log(`La marca de mi carro es ${persona.auto.marca}`);
console.log(persona.saludar());
console.log(`La acción que realizo es: ${persona.saludar()}`);



















