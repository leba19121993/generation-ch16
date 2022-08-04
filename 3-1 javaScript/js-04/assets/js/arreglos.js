/* 
Arreglos
Colección de elementos
Cada elementos ocupa una posicion
Esta posicion se conoce como indice y comienza 
a partir de 0

*/


let arr = [1,2,3,4];
console.log(arr);

/* 
Propiedades - describren
métodos - acciones que se puede realizar

*/

console.log(arr[2]);
arr[4] = 190;
arr[4] ="hola"
console.log(arr);

//Metodos de arreglos

/* push 
   Agrega elementos al final*/
const arreglo = ["adios"];

arreglo.push(2);
arreglo.push(true);
let num = 500;
arreglo.push(num);
console.log(arreglo);


//unshift
/* Agrega elementos al inicio del arreglo */
arreglo.unshift("A")
arreglo.unshift("B")
console.log(arreglo);

console.log(typeof (arreglo[4]));

/* Metodos para quitar elementos 

"pop" */

arreglo.pop();
console.log(arreglo);

/* 
shift()
Quita un elemtno del inicio del arreglo
*/

let dato2 = arreglo.shift()
console.log(dato2);
console.log(arreglo);

/* splice() 
Quita una parte de cualquier poscicion de 
nuestro arreglo
Permite remplazar un elemento
Permite insertar un elemento en una posicion
en especifico

posicion de inicio
cantidad de elementos a afectar
elemento/s que queremos insertar
*/

arreglo.splice(1,1, "superman", 54654)
console.log(arreglo);


/* Todos modifican el arreglo original */

//Metodos que no modifican el arreglo original
//Hacen una copia, modifican esa copia


/* slice()
Corta partes de un arreglo
*/
let dato3 = arreglo.slice(0,2 )

/* se debe indicar un rango
genera un arreglo con los elementos cortados */
console.log(dato3);
console.log(arreglo);


































