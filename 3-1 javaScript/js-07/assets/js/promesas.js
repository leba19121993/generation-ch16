//Variable que simula los datos pedidos

const saludo = "Hola Mundo"

const datos = [
    {
        nombre: "Abel",
        apellido:"Lopez"
    },
    {
        nombre: "Abel",
        apellido:"Lopez"
    },
    {
        nombre: "Abel",
        apellido:"Lopez"
    }
]



//Funcion para Simular una peticion

function obtenerDatos(){

    return new Promise( (resolve, reject) => {
        setTimeout(() =>{

            if(false){
                resolve (datos);

            }else{
                reject("No se pudo obtener datos")
            }
        }, 1000)

    })
}

/* Forma #1 */
obtenerDatos().then((datos) =>{
    console.log(datos);
}).catch((error) =>{
    console.log("Existe un error en la peticion 1");
    console.log(error);
})


/* Forma #2 
Funciones asincronas -await async*/

async function funcionAsincrona (){

    try{
        const datos = await obtenerDatos()
        console.log(datos);

    }catch(error){
        console.log(error);

    }
    

}
funcionAsincrona()


























