//Funciones

/* function sumar () {
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " + (10 + 5));
}

sumar()
sumar()
 */

//Ejemplo Funcion

function sumar (numero1, numero2) {
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " + (numero1 + numero2));
}

/* sumar(4,5)
sumar(20,5)
sumar(46,58)
 */



//Ejercicio 2, utilizando funciones

/* function calculadoraSueldo(){

    let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = 600;
const diasSemana = 6;
const semanasMes = 4;

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));


}

calculadoraSueldo();
calculadoraSueldo();
calculadoraSueldo();
 */

// Si la funcion ya tiene parametros establecidos
/* function calculadoraSueldo(sueldoIngreso){

    let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = sueldoIngreso;
const diasSemana = 6;
const semanasMes = 4;

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));


}

calculadoraSueldo(100);
calculadoraSueldo(1);
calculadoraSueldo(50); */




/* function calculadoraSueldo(sueldoIngreso, diasTrabajados){

    let nombre = prompt("Escribe tu nombre")
console.log(nombre);


const semanasMes = 4; //local

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));
 

 return semanasMes;
}

calculadoraSueldo(100,2);

console.log(mes); */



//Calculadora de porcentajes
//0.6 =60%
function calcularPorcentaje (numero, porcentaje) {

    let resultado = numero * porcentaje;
    
    return resultado;
    

}

let resultadoFuncion = calcularPorcentaje(100, 0.4)





