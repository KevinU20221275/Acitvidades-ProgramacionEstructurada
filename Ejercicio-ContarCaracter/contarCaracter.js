let cadena = "HOla MundO";
let caracter = "o";

cadena.length

function contarCaracter(cadena, caracter){
    let contador = 0;
    cadena = cadena.toLowerCase();
    caracter = caracter.toLowerCase();
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] == caracter) {
            contador++;
        }
    }

    return contador;
}

console.log("Cadena: " + cadena)
console.log("Caracter a contar: '" + caracter + "'\n")
let numeroVeces = contarCaracter(cadena, caracter);
console.log(`El carater '${caracter}' se repite ${numeroVeces} veces`)