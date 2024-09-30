// kevin Antonio Montano Aquino U20221275

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(num1, num2){
    return num1 + num2
}

let num1 = 10;
let num2 = 10

let result = suma(num1,num2)

console.log('============== EJERCICIO 1 =================')
console.log(`El resultado de la suma de ${num1} + ${num2} es :`, result)
console.log('\n')

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numeroMayor(numeros){
    let mayor  = numeros[0]

    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i]
        }
    }

    return mayor
}

let array = [4,9,1,7];

let numMayor = numeroMayor(array);

console.log('============== EJERCICIO 2 =================')
console.log(`El mayor número del array ${array} es :`, numMayor)
console.log('\n')

// 3. Crea una función que reciba un string y devuelve el número de vocales que contiene
function contarVocales(string){
    let vocales = ['a', 'e', 'i', 'o', 'u']
    let contador = 0
    for(let i = 0; i < string.length; i++){
        if(vocales.includes(string[i].toLowerCase())){
            contador++
        }
    }
    return contador
}

let cadena = 'Hola mundo'

let numVocales = contarVocales(cadena)

console.log('============== EJERCICIO 3 =================')
console.log(`El número de vocales en la cadena '${cadena}' es :`, numVocales);
console.log('\n')


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function arrayToUpperCase(strings){
    return strings.map(string => string.toUpperCase())
}

let arrayMinusculas = ['hola', 'mundo']

let arrayMayusculas = arrayToUpperCase(arrayMinusculas)

console.log('============== EJERCICIO 4 =================')
console.log('El nuevo array con las strings en mayúsculas es :', arrayMayusculas)
console.log('\n')

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero){
    if(numero <= 1){
        return false
    }
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false
        }
    }
    return true
}

let numero = 97

let resultadoPrimo = esPrimo(numero)

console.log('============== EJERCICIO 5 =================')
console.log(`El número ${numero} ${resultadoPrimo ? 'es' : 'no es'} primo`)