console.log('JS ready');

// Programa principal del Pokedex
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  let pokemonList = getPokemonList().pokemons;
  // console.log(pokemonList, pokemonList.length);

  // Pintar los pokemones
  /*
    1. Crear la tarjeta para mostrar la información de cada pokemon en la lista
    2. Agregar la tarjeta del pokemon al DOM HTML
  */
  const pokemonListSectionElement = document.querySelector(".pokemon-list");

  for(let position = 0; position < pokemonList.length; position++) {
    // console.log(`Pokemon ${pokemonList[position].name}`);  // template string
    let pokemonCardElement = document.createElement("div");
    let pokemonCardHtml = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <img src="${pokemonList[position].image}" class="card-img-top" alt="Nombre del pokemon">
          <h5 class="card-title">${pokemonList[position].name}</h5>
        </div>
      </div>
    `;

    pokemonCardElement.innerHTML = pokemonCardHtml;
      //
    pokemonListSectionElement.append(pokemonCardElement);
  }

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

  function getPokemonList() {
    return {
      "pokemons": [
        {
          name: "Bulbasaur",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        },
        {
          name: "Pikachu",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        },
        {
          name: "Bulbasaur",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        },
        {
          name: "Squirtle",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        },
      ],
    };
  }
  //   {
  //     "abilities": [
  //       "Overgrow"
  //     ],
  //     "detailPageURL": "/us/pokedex/bulbasaur",
  //     "weight": 15.2,
  //     "weakness": [
  //       "Fire",
  //       "Psychic",
  //       "Flying",
  //       "Ice"
  //     ],
  //     "number": "001",
  //     "height": 28,
  //     "collectibles_slug": "bulbasaur",
  //     "featured": "true",
  //     "slug": "bulbasaur",
  //     "name": "Bulbasaur",
  //     "ThumbnailAltText": "Bulbasaur",
  //     "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //     "id": 1,
  //     "type": [
  //       "grass",
  //       "poison"
  //     ]
  //   },
  //   {
  //     "abilities": [
  //       "Overgrow"
  //     ],
  //     "detailPageURL": "/us/pokedex/ivysaur",
  //     "weight": 28.7,
  //     "weakness": [
  //       "Fire",
  //       "Psychic",
  //       "Flying",
  //       "Ice"
  //     ],
  //     "number": "002",
  //     "height": 39,
  //     "collectibles_slug": "ivysaur",
  //     "featured": "true",
  //     "slug": "ivysaur",
  //     "name": "Ivysaur",
  //     "ThumbnailAltText": "Ivysaur",
  //     "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
  //     "id": 2,
  //     "type": [
  //       "grass",
  //       "poison"
  //     ]
  //   },
  //   {
  //     "abilities": [
  //       "Overgrow"
  //     ],
  //     "detailPageURL": "/us/pokedex/venusaur",
  //     "weight": 9999,
  //     "weakness": [
  //       "Fire",
  //       "Psychic",
  //       "Flying",
  //       "Ice"
  //     ],
  //     "number": "003",
  //     "height": 945,
  //     "collectibles_slug": "venusaur",
  //     "featured": "true",
  //     "slug": "venusaur",
  //     "name": "Venusaur",
  //     "ThumbnailAltText": "Venusaur",
  //     "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
  //     "id": 3,
  //     "type": [
  //       "grass",
  //       "poison"
  //     ]
  //   },
  //   {
  //     "abilities": [
  //       "Thick Fat"
  //     ],
  //     "detailPageURL": "/us/pokedex/venusaur",
  //     "weight": 342.8,
  //     "weakness": [
  //       "Fire",
  //       "Psychic",
  //       "Flying",
  //       "Ice"
  //     ],
  //     "number": "003",
  //     "height": 94,
  //     "collectibles_slug": "venusaur",
  //     "featured": "true",
  //     "slug": "venusaur",
  //     "name": "Venusaur",
  //     "ThumbnailAltText": "Venusaur",
  //     "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
  //     "id": 3,
  //     "type": [
  //       "grass",
  //       "poison"
  //     ]
  //   },
  //   {
  //     "abilities": [
  //       "Overgrow"
  //     ],
  //     "detailPageURL": "/us/pokedex/venusaur",
  //     "weight": 220.5,
  //     "weakness": [
  //       "Fire",
  //       "Psychic",
  //       "Flying",
  //       "Ice"
  //     ],
  //     "number": "003",
  //     "height": 79,
  //     "collectibles_slug": "venusaur",
  //     "featured": "true",
  //     "slug": "venusaur",
  //     "name": "Venusaur",
  //     "ThumbnailAltText": "Venusaur",
  //     "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
  //     "id": 3,
  //     "type": [
  //       "grass",
  //       "poison"
  //     ]
  //   };
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