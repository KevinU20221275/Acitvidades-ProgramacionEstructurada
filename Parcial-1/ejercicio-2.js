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
  { title: "Pulp Fiction", genre: "Thriller" },
  { title: "The Godfather", genre: "Action" },
  { title: "Eternal Sunshine of the Spotless Mind", genre: "Drama" },
  { title: "The Dark Knight", genre: "Super Hero" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "War" },
  { title: "Star Wars: Episode VI - Return of the Jedi", genre: "Fantasy" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventur" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Action" },
  { title: "The Hobbit: The Desolation of Smaug", genre: "Family" },
  { title: "The Matrix", genre: "Ciberpunk" },
  { title: "Inception", genre: "Sci-Fi" },
  { title: "Interstellar", genre: "Suspense" },
  { title: "Inside Out", genre: "Animation"}
]

// 2. Usa una variable para almacenar el género de película que el usuario desea ver.
let userGenre = "Drama";

// 3. Utiliza sentencias if, else if y else para buscar una película dentro del array que
// coincida con el género seleccionado.
const recommendedMovie = movies.find((movie) => movie.genre.toLowerCase() === userGenre.toLowerCase());

// Usa console.log para mostrar el título de la película recomendada o un mensaje
// indicando que no hay películas disponibles para el género seleccionado.
console.log("======== SISTEMA DE RECOMENDACION DE PELICULAS =========")
console.log(`Genero que deseas ver: "${userGenre}"`)
if (recommendedMovie) {
  console.log(`Recomendamos ver la película: "${recommendedMovie.title}"`);
} else {
  console.log("No hay películas disponibles para el género seleccionado.");
}