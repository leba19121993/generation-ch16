/* Funciones como Objetos */

function miFuncion (a,b){
    let res = 0 //propiedad
    res = (a*b); //acción o proceso   
return res;
}
console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);