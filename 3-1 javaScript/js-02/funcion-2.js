/* function miFuncion(a,b){
    return (a + b );

}
let resultado = miFuncion(3,6);
console.log("El resultado es: "+resultado); */

     /* Funcuones anonimas o de expresión */

/* Actividad: Hacer funciones de expresión para todas las operaciones aritmeticas
 */

let suma = function (a , b){
    return(a+b)
};
let resultado = suma (2 , 3);

console.log("El resultado de la suma es: " + resultado);

let resta = function (a , b){
    return(a-b)
};
let resultado1 = resta (50 , 3);

console.log("El resultado de la resta es: " + resultado1);

let multi = function (a , b){
    return(a*b)
};
let resultado2 = multi (20 , 10);

console.log("El resultado de la multiplicación es: " + resultado2);

let div = function (a , b){
    return(a/b)
};
let resultado3 = div (100 , 50);

console.log("El resultado de la división es: " + resultado3);


/* Funciones self Invoking */

(function (a,b){
    console.log("El resultado de la función Self es: " + (a + b));
}
)(5,10);
