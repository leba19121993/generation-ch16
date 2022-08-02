`use strict`;

//conversión de tipos de datos
//casteo parseo
//casting parsing


//coersión de tipo de dato
//conversión automática de datos
let  num = 5
let num2 = "10"

//concatenación ----  resultado de unir cadenas de texto
//unimos un numero con una cadema de texto
console.log(num - num2);

/* Number() */
//convierte cadenas o booleanos en números

let num3 = false;
console.log(Number(num3));
console.log(num3);

/* String() */
//Convierte numeros o booleanos a cadenas


let num4 = String(0)
console.log(num4);
console.log(typeof (num4));

//Boolean()
//convierte numeros y cadenas a booleanos
//0, "" --- null, undefined, NaN = false
//faultsy values - valores que tienden a falso
//todos los demas numeros los convierte a true
let num5 = Boolean(NaN);
console.log(num5);
console.log(typeof num5);


