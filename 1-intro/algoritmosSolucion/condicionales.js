//control de flujo

/* let nombre = "Marina";
let edad = 23
 */
//Entrada de usuario

let nombre = prompt("Escribe tu nombre");
console.log(nombre);

let edad = prompt("Escribe tu edad");
console.log(edad);



if(nombre === "Abel" && edad ==28){
//scope - contexto
    console.log("Es un");
    console.log("Admin =)");

} else if (nombre === "Maria"){
    console.log("Es una mentora");
}
 else if (nombre === "Marina"){
    console.log("Es la jefa ");
}else {
    console.log("Eres un alumn@ =)");
}

console.log("Fin del programa");