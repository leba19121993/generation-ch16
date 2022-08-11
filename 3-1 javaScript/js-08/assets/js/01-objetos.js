let x = 10;
console.log(x.lenght);

let persona1 = {
    nombre: "Aristeo",
    apellido: "Hernandez",
    edad: 35,
    mail: "azul@gmail.com",

/* Metodos get y set */
    idioma: "es",
get idioma1 (){
    return this.idioma.toUpperCase();

    
},
set idioma1 (lang){
    this.idioma = lang.toLowerCase();
}
}
/* console.log(persona1.leng); */
persona1.idioma = "ES";
console.log(persona1.idioma1);
console.log(persona1.idioma1);
















/* nombreCompleto: function(){
    return this.nombre + " " + this. apellido;

} */
/* persona1.tel = "5583317593"
persona1.tel1 = "55986456511"


console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.nombreCompleto()); */

/* let Persona = {
    nombre: "Aristeo",
    apellido: "Hernandez",
    edad: 35,
    mail: "azul@gmail.com"

}
console.log(Persona);
console.log(Persona.nombre);
console.log(Persona.apellido);
console.log(Persona.edad);
console.log(Persona.mail);




let obj_Personas = new Object();
obj_Personas.nombre ="Abel";
obj_Personas.apellido ="López";
obj_Personas.edad =28;
obj_Personas.mail = "abelgenne@gmail.com";


console.log(obj_Personas.nombre);
console.log(obj_Personas.apellido);
console.log(obj_Personas.edad);
console.log(obj_Personas.mail); */





/* Metodos 

        "for in"

*/

/* for(varPropiedad in persona1){
    console.log(persona1[varPropiedad]);
}



json



let personaString = JSON.stringify(persona1)
console.log(personaString); */