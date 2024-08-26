/*
1. Se quiere un bucle que genere una lista con todos los números pares positivos por
debajo del número tecleado por el usuario.
Referencia: Si tecleo el número el número 9 deberá mostrar cinco líneas con los
números 0 2 4 6 8
*/

// numero ingresado por el usuario
let num = 10;

// lista donde se almacenaran los numeros pares positivos por debajo del numero ingresado
let listaParesPosivos = []

// bucle para generar la lista de numeros pares positivos por debajo del numero ingresado
for (i = num; i >= 0; i--){
    if (i % 2 == 0){
        listaParesPosivos.unshift(i)
    }
}

// imprimiendo la lista
console.log("============ EJERCICIO 1 =============")
console.log(`Numeros pares positivos por debajo de ${num}`)
console.log(listaParesPosivos)
console.log('\n')

/*
2. Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un
valor entero, el programa escribirá con asteriscos tantas líneas como diga ese
número. Cada línea estará formada por una serie de asteriscos tan larga como diga
el número de línea en el que está. Para separar una línea de la siguiente en consola,
debes usar "\n".
Referencia: Le tecleamos el valor 5. El resultado será:
*
**
***
****
*****
*/

// valor ingresado por el usuario
let lineasTriangulo = 5;

// dibujando el triángulo con asteriscos
let dibujartriangulo = '';

console.log("============ EJERCICIO 2 =============")
console.log(`Triángulo Rectángulo con ${lineasTriangulo} líneas`);

// bucle para dibujar las líneas del triángulo con asteriscos
for (let i = 1; i <= lineasTriangulo; i++){
    console.log(dibujartriangulo += '*')
}
console.log('\n')


/*
3. Se trata de crear una aplicación que calcule la suma de todos los números enteros
positivos entre 0 y el número tecleado por el usuario. El resultado teclea 5 será la
suma de: "Los números enteros entre 0 a n"
Referencia: Si tecleo el 5 obtendré "Los enteros de 0 a 5 suman 15" (1+2+3+4+5 ).
*/

// numero ingresado por el usuario
let numLimit = 5;

// variable para almacenar la suma de los enteros positivos entre 0 y el numero ingresado
let sumaDeEnteros = 0;

// bucle para calcular la suma de los enteros positivos entre 0 y el numero ingresado
for (let i = 0; i <= numLimit; i++) {
    sumaDeEnteros += i;
}

console.log("============ EJERCICIO 3 =============")
console.log(`Los enteros de 0 a ${numLimit} suman ${sumaDeEnteros}`);
console.log('\n')

/*
4. Programa que sume los números de un array y calcule la media aritmética. O sea, la
suma de los 4 números dividida entre 4
Referencia: la suma de un array que contenga los siguientes números 5,9,10,12. El
programa dirá "La media es 9"
*/

// array de numeros
let arrayNumeros = [5, 9, 10, 12];

// variable para almacenar la suma de los numeros del array
let sumaArray = 0;

// bucle para calcular la suma de los numeros del array
for (let i = 0; i < arrayNumeros.length; i++) {
    sumaArray += arrayNumeros[i];
}

// variable para almacenar la media aritmética de los numeros del array
let mediaArray = sumaArray / arrayNumeros.length;

console.log("============ EJERCICIO 4 =============")
console.log('Numeros del array: ' + arrayNumeros)
console.log(`La media es: ${mediaArray}`);
console.log('\n')


/*
5. Crea un programa que realice la tabla de multiplicar del 3
*/

console.log("============ EJERCICIO 5 =============")
console.log('Tabla de multiplicar del 3:')
console.log('---------------------------------')
for (let i = 1; i <= 10; i++) {
    console.log(`${3} x ${i} = ${3 * i}`)
}