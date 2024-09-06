/* Kevin Antonio Montano Aquino U20221275 */

/*Guía de 10 Ejercicios para Practicar */
/* 
Utiliza un ciclo while para imprimir los números del 1 al 10 en la consola.
*/
console.log(" ========== 1.) Imprimir números del 1 al 10 ===========");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log("\n")


/*
Usa un ciclo do...while para calcular la suma de los números del 1 al 10.
*/
console.log("=========== 2.) Sumar los primeros 10 números ============")
let j = 1
let suma = 0;

do {
    suma += j;
    j++;
} while (j <= 10);

console.log(suma)
console.log("\n")

/*
Utiliza un ciclo while para imprimir los números pares del 2 al 20.
*/
console.log("============== 3.) Números pares del 2 al 20 =============")
k = 1;
while (k <= 20) {
    if (k % 2 == 0){
        console.log(k);
    }
    k++
}
console.log("\n")


/*
Crea un contador regresivo desde 10 hasta 1 usando un ciclo do...while.
*/
console.log("============== 3.) Contador regresivo ============");
let contador = 10;

do {
    console.log(contador);
    contador--;
} while (contador >= 1);
console.log("\n")


/*
Usa un ciclo while para encontrar y mostrar el primer múltiplo de 7 que sea mayor que 10.
*/
console.log("============== 4.) Encontrar el primer múltiplo de 7 mayor que 10 =============" );
let numero = 14;

while (numero <= 10) {
    numero += 7;
}
console.log(numero); 
console.log("\n")


/*
Utiliza un ciclo do...while para imprimir los números impares hasta el 15.
*/
console.log("============= 5.) Imprimir números impares hasta 15 ==============");
let l = 1;

do {
    if (l % 2!= 0){
        console.log(l);
    }
    l++
} while (l <= 15);
console.log("\n")


/*
Usa un ciclo while para contar cuántas veces aparece un número específico en un array dado.
*/
console.log("============== 6.) Contar cuántas veces aparece un número en un array =========");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 5];
let numeroBuscado = 5;
let numeroDeVeces = 0;

let m = 0;

while (m < numeros.length) {
    if (numeros[m] === numeroBuscado) {
        numeroDeVeces++;
    }
    m++;
}

console.log(numeroBuscado + " aparece " + numeroDeVeces + " veces en el array.");
console.log("\n")


/*
Usa un ciclo do...while para sumar todos los elementos de un array.
*/
console.log("================ 7.) Sumar todos los elementos de un array ===========");
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaDeNumerosEnArray = 0;

let n = 0;

do {
    sumaDeNumerosEnArray += arrayNumeros[n];
    n++;
} while (n < arrayNumeros.length);

console.log("La suma de todos los elementos del array es: " + sumaDeNumerosEnArray);
console.log("\n")


/*
Utiliza un ciclo while para generar los números de la secuencia de Fibonacci que son menores o iguales a 20.
*/
console.log("================ 8.) Generar una secuencia de Fibonacci hasta el número 20 =========" );
let fibonacci = [0, 1];
let numeroAnterior = 0;
let numeroActual = 1;

console.log(numeroAnterior);

while (numeroActual <= 20) {
    console.log(numeroActual);
    let siguienteNumero = numeroAnterior + numeroActual;
    numeroAnterior = numeroActual;
    numeroActual = siguienteNumero;
}