console.log('JS ready');

// Programa principal del Pokedex
document.addEventListener('DOMContentLoaded', async function() {
  console.log("DOMContentLoaded");
  let pokemonList = await getPokemonList();
  // Encontrar los elementos con los que vamos a trabajar
  const formElement = document.querySelector("form");
  let inputElement = document.querySelector("#pokemon-name-input");
  const searchButtonElement = document.querySelector(".btn-search");
  const pokemonListSectionElement = document.querySelector(".pokemon-list");

  // Pintar pokemones cuando cargue la página
  renderPokemons(pokemonList);

  // Events Configuration
  // Formulario manejo del evento sumbit
  formElement.addEventListener("submit", formSubmitCallback);
  // Agregar un manejado de evento (addEventListener)
  // searchButtonElement.addEventListener("click", buttonCallback);

  // Callback Section
  function buttonCallback() {
    const pokemonSearch = inputElement.value;
    alert("El texto del input es: " + pokemonSearch);
  }

  function formSubmitCallback(event) {
    event.preventDefault(); // Evitar que se refresque la página
    const pokemonSearch = inputElement.value;
    // Validaciones de formulario, que el campo no esté vacío
    // console.log(pokemonSearch);
    if (pokemonSearch === '') {
      const emptyPokemonInputMessage = `Por favor ingresa el nombre de algún pokemon`;
      pokemonListSectionElement.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${emptyPokemonInputMessage}
        </div>`;
      return;
    }

    const pokemonResult = []; // 0
    // Buscar al pokemin en la lista
    // console.log(pokemonSearch);
    for (let index = 0; index < pokemonList.length; index++) {
      if (pokemonList[index].name === pokemonSearch) {
        pokemonResult.push(pokemonList[index]);
      }
    }
    // Si existe, vamos a filtrar la lista y solamente pintar el pokemon buscado
    if (pokemonResult.length > 0) {
      renderPokemons(pokemonResult);
      return;
    }
    // Si no se encontró, mostrar un mensaje
    const notFoundMessage = `Aún no capturas a <strong>${pokemonSearch}</strong>`;
    pokemonListSectionElement.innerHTML = ""; // Limpiar la sección de pokemones
    pokemonListSectionElement.innerHTML = `
      <div class="alert alert-dark" role="alert">
        ${notFoundMessage}
      </div>`;
    // console.log("Evento submit, No se refresca la página!");
  }

  // Functions/Utils Section
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

  /*
    Pintar los pokemones en la sección correspondiente
    1. Crear la tarjeta para mostrar la información de cada pokemon en la lista
    2. Agregar la tarjeta del pokemon al DOM HTML
  */
  function renderPokemons(pokemonList) {
    // Limpiar el contenedor
    pokemonListSectionElement.innerHTML = '';
    for (let position = 0; position < pokemonList.length; position++) {
      // console.log(`Pokemon ${pokemonList[position].name}`);  // template string
      let pokemonCardElement = document.createElement("div");
      // Estilos para las columnas del pokedex
      pokemonCardElement.className = "col-sm-6 col-lg-4 p-2 card-container";
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
      // Crear la tarjeta del pokemon
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