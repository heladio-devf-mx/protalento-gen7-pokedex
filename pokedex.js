console.log('JS ready');

// Programa principal del Pokedex
document.addEventListener('DOMContentLoaded', async function() {
  console.log('DOMContentLoaded');
  let pokemonList = await getPokemonList();

  /*
    Pintar los pokemones
    1. Crear la tarjeta para mostrar la información de cada pokemon en la lista
    2. Agregar la tarjeta del pokemon al DOM HTML
  */
  pintarPokemones(pokemonList);


  // Encontrar los elementos con los que vamos a trabajar
  const formElement = document.querySelector("form");
  let inputElement = document.querySelector("#pokemon-name-input");
  const searchButtonElement = document.querySelector(".btn-search");

  // Formulario manejo del evento sumbit
  formElement.addEventListener("submit", formSubmitCallback);
  // Agregar un manejado de evento (addEventListener)
  searchButtonElement.addEventListener("click", buttonCallback);

  // Callbacks Section
  function buttonCallback() {
    pokemonSearch = inputElement.value;
    alert("El texto del input es: " + pokemonSearch);
  }

  function formSubmitCallback(event) {
    event.preventDefault();
    console.log("No se refresca la página!");
  }
  // Nos devuelve un JSON (objeto) con los "pokemons"
  async function getPokemonList() {
    let pokemons = [];
    const url = "./data/pokemons-small-api.json";

    try {
      const responseData = await fetch(url);
      // console.log(responseData);
      if (responseData.status === 200) {
        const pokemonsObject = await responseData.json();
        // console.log(pokemonsObject);
        pokemons = pokemonsObject.pokemons;
        // console.log(pokemons);
      } else {
        throw new Error("No se pudo recuperar la lista.");
      }
    } catch (error) {
      console.log("algo salió mal: ", error);
    }
    
    return pokemons;
  }

  function pintarPokemones(pokemonList) {
    const pokemonListSectionElement = document.querySelector(".pokemon-list");

    for(let position = 0; position < pokemonList.length; position++) {
      // console.log(`Pokemon ${pokemonList[position].name}`);  // template string
      let pokemonCardElement = document.createElement("div");
      pokemonCardElement.className = "col-md-6 col-lg-4";
      let pokemonCardHtml = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <img
              src="${pokemonList[position].ThumbnailImage}"
              class="card-img-top"
              alt="${pokemonList[position].name}"
            />
            <h5 class="card-title">${pokemonList[position].name}</h5>
          </div>
        </div>
      `;

      pokemonCardElement.innerHTML = pokemonCardHtml;
      // Agrega al contenedor
      pokemonListSectionElement.append(pokemonCardElement);
    }
  }
});


function addNewDiv () {
  // Create a div
  const newDiv = document.createElement("div");
  console.log(newDiv);

  // Agregar contenido al nuevo div
  newDiv.innerText = "Ejemplo de actualizar el DOM";

  // Mostrar en el DOM / la página
  const headerElement = document.querySelector("header");
  headerElement.append(newDiv);
  // newDiv.style.backgroundColor = "#dff0d8";
}