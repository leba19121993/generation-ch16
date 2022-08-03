/* Control de flujo */
/* Condicionales */
/* if */

let condicion = "C";

if(condicion === "A"){
    /* Codigo que se hace si se cumple la 
    condicion A */

    console.log("Entro en la condición A");

}else if (condicion === "B"){
    /* Codigo que se hace si se cumple la 
    condicion B */
    console.log("Entro en la condición B");

}else if (condicion === "C"){
    /* Codigo que se hace si se cumple la 
    condicion C */
    console.log("Entro en la condición C");

}else{
    /* Codigo que se hace si no se cumple
    ninguna de las condiciones anteriores */

    console.log("No cumple con ninguna");


}

/* Switch */
/* = asignación
== comparación no estricta
=== comparación estricta
Se utiliza para evaluar expresiones */
let nuevaCondicion = 156;


switch(false){
    case 1:
    console.log("Buenos Dias");
    console.log("Espero que te encuentres bien");
    break

    case "Restar" :
        console.log("Nos vemos");
        break;

    case true :
        console.log("Te mando un saludo");
        break;
    case false:
        console.log("Caso false");
        break    



    default:
        console.log("No entendi tu mensaje");
        
    
}

/* 
switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}

*/

/* 
if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}

*/