/* Ejercicio 2
Escriba un programa de JavaScript para construir el siguiente patrón, usando un bucle for anidado.

*  
* *  
* * *  
* * * *  
* * * * * */


function piramide(pisos){
    for (let i = 0; i< pisos; i++){
        let patern = " "
        for (let j = 0; j< x + 1; j++){
            patern = patern + " " + " x "
        }
        console.log(patern);
    }
}
piramide(5)