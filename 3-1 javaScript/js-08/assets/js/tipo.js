/* Tipo predefinido */

let tiempo = new Date();
console.log(tiempo);
console.log(Math);


let obj_literal = {
    nombre: "Juan",
    edad: 35

}

let obj_constructor = new Object();
obj_constructor.nombre ="Abel";
obj_constructor.edad =28;

console.log(obj_literal);
console.log(obj_constructor);

obj_literal["nombre"];
let llave = "nombre"
console.log("Esto es con llave "+ obj_literal[llave]);























//Define un objeto primitivo
let cadena = "Esto es una cadena";

//Define un objeto constructor / cadenas de caracteres
let cadena_Obj = new String("Esto es otra cadena obj")

console.log(cadena);
console.log(cadena_Obj);


/* Tipo numerico */

let numero = 13;
let num_Obj = new Number(13.13);
console.log(numero);
console.log(num_Obj);

/* Tipo compuesto o unico */
let lista = ["2","3","5","7"];
let lista_Obj = new Array("1","4","6","8","9")
console.log(lista);
console.log(lista_Obj);


