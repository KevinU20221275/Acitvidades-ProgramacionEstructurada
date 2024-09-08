// Kevin Antonio Montano Aquino U20221275
/*
Ejercicio 2: "Sistema de recomendación de películas"
Debes crear un sistema que recomiende películas a los usuarios según su preferencia de
género. El programa pedirá el género de película que el usuario desea ver y le mostrará una
película recomendada de acuerdo con esa categoría. Si no hay películas disponibles para el
género solicitado, el sistema indicará que no hay recomendaciones.
*/

// 1. Crea un array que contenga al menos 5 películas, cada una con su título y género.
const movies = [
  { title: "Pulp Fiction", genre: "Drama" },
  { title: "The Godfather", genre: "Drama" },
  { title: "Eternal Sunshine of the Spotless Mind", genre: "Drama" },
  { title: "The Dark Knight", genre: "Drama" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Fantasy" },
  { title: "Star Wars: Episode VI - Return of the Jedi", genre: "Fantasy" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Fantasy" },
  { title: "The Hobbit: The Desolation of Smaug", genre: "Fantasy" },
  { title: "The Matrix", genre: "Sci-Fi" },
  { title: "Inception", genre: "Sci-Fi" },
  { title: "Interstellar", genre: "Sci-Fi" },
  { title: "Inside Out", genre: "Animation"}
]

// 2. Usa una variable para almacenar el género de película que el usuario desea ver.
let userGenre = "Drama";

// 3. Utiliza sentencias if, else if y else para buscar una película dentro del array que
// coincida con el género seleccionado.
const recommendedMovie = movies.find((movie) => movie.genre === userGenre);

// Usa console.log para mostrar el título de la película recomendada o un mensaje
// indicando que no hay películas disponibles para el género seleccionado.
if (recommendedMovie) {
  console.log(`Recomendamos ver la película "${recommendedMovie.title}"`);
} else {
  console.log("No hay películas disponibles para el género seleccionado.");
}