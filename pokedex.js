console.log('JS ready');

// Programa principal del Pokedex
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  // Llamar a la función para la actualización del DOM, ejemplo:
  // addNewDiv();

  // Encontrar los elementos con los que vamos a trabajar
  const formElement = document.querySelector("form");
  let inputElement = document.querySelector("#pokemon-name-input");
  const searchButtonElement = document.querySelector(".btn-search");

  let pokemonSearch = inputElement.value; // al inicio, cuando está vacío
  console.log("input value-" + pokemonSearch + "-");


  searchButtonElement.addEventListener("click", function () {
    pokemonSearch = inputElement.value;
    alert("Click en el botón de Buscar. El texto del input es:" + pokemonSearch);
  });
  console.log(formElement, inputElement, searchButtonElement);
});

// console.log(newDiv);


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