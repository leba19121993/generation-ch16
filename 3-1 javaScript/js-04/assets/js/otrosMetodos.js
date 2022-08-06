/*  sort()

Ordena los elementos de un arreglo

*/

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort()
console.log(arr);

const arr2 =["Hola", "adios", "como estas", "Todo bien "]


arr2.sort();
console.log(arr2);

const arr3 = [5, 546,321,1,820]

arr3.sort((a,b) => a - b);//ordena de mayor a menor

arr3.sort((a,b) => b - a);//ordena de menor a mayor
console.log(arr3);




//funcion declarada
//hoisting
//Un proceso de reacomodo automatico del codigo

/* function sumar (a,b){
    return a + b
}
console.log(a);

let a = 2 */

//funcion expresada

const multiplicar = function(a,b){
    return a * b;
}
/* console.log(multiplicar (3,5)); */


/* Funciones flecha
*/

/* const dividir =(a,b) =>{
    return a/b;
}
console.log(dividir(10,2));

*/


const dividir =(a,b) => a/b;

/* console.log(dividir(10,2)); */


/* forEach()
un  ciclo que recorre en automatico todo nuesto arreglo

*/
const arrNumeros = [1,4,6,8,10,20,30,50]

/* for( let i=0; i< arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] *2;
}
console.log(arrNumeros); */

arrNumeros.forEach((elemento, indice) => console.log(elemento *=2)); //elemento = *2


/* console.log(arrNumeros);

forEach(elemento, indice, arreglo completo)
 */








