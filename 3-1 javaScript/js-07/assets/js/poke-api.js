/* https://pokeapi.co/
 */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"





/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")

const idPokemon =document.getElementById("id-pokemon")

const nombrePokemon = document.getElementById("nombre-pokemon")

const listaHabilidades = document.getElementById("lista-habilidades")



const listaTipos = document.getElementById("lista-tipos")

const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);


//Eventos
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    const inputPokemon = document.getElementById("busqueda-pokemon")
    console.log(inputPokemon.value);

    const nuevaBusqueda = urlPokemon + inputPokemon.value
    
    

    console.log(nuevaBusqueda);


    obtenerPokemon(nuevaBusqueda)



    



})





/* Funciones */
async function obtenerPokemon(url){


    try {
        
        
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    /* console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other["official-artwork"].front_default); */

    const pokemon = {
        nombre:datos.forms[0].name,
        habilidades:datos.abilities,
        id:datos.id,
        tipos: datos.types,
        imagen:datos.sprites.other["official-artwork"].front_default
    }    
    //Imagen - nombre- ID
    imgPokemon.src = pokemon.imagen
    idPokemon.textContent =`ID: ${pokemon.id}`
    nombrePokemon.textContent = pokemon.nombre

    //Tarjeta Habilidades

    
     //--------------------agregando habilidades------------------------------

    
    //->console.log(pokemon.habilidades); //array ->paso 2

    //->recorriendo el atributo habilidadess ->paso 3
    let templateHabilidades = ` `;
    for (let i=0; i<pokemon.habilidades.length; i++){
        const nombreHabilidad = pokemon.habilidades[i].ability.name;
        templateHabilidades += `<li class="list-group-item">${nombreHabilidad}</li>`; //lo que quiero agregar        
    }
    //->agregar elementos con innerHTML o CreateElement
    listaHabilidades.innerHTML = templateHabilidades; //->paso 4

    //--------------------agregando tipos---------------------------------------
    console.log(pokemon.tipos);

    let templateTipos = ` `;
    pokemon.tipos.forEach(element => {
       const nombreTipos = element.type.name;
       templateTipos += `<li class="list-group-item">${nombreTipos}</li>`;

    });

    listaTipos.innerHTML = templateTipos;       

        
    } catch (e) {
        alert("Pokemon No Valido, intenta otra vez")
        
    }
}

