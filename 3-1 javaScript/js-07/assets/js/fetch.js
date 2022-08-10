const url ="https://dog.ceo/api/breeds/image/random"

//fetch resume todo lo visto en promesas
//Devuelve la respuesta de peticion
fetch(url).then((respuesta)=>{
  /*   console.log(respuesta); */

})

//Obtener la informacion de la peticion

fetch(url)
.then((respuesta) => respuesta.json()).then((datos)=>{
    console.log(datos);
}).catch((error) =>{
    console.log(error);
})


//Forma 2

async function obtenerPerritoAleatorio(){
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json()
        console.log(datos);


    }catch(error){
        console.log(error);
    }
}
obtenerPerritoAleatorio()



