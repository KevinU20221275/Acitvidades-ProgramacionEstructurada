// Kevin Antonio Montano Aquino U20221275
/*
LABORATORIO 2

Indicacciones: 
Crea un programa en JavaScript que permita calcular el promedio de las notas de un 
estudiante. Los datos de las notas se deben ingresar directamente en el código en un array . 
El programa debe incluir una función que reciba el array con las notas como parámetro,
calcule la suma de las mismas y luego divida esa suma entre la cantidad total de notas para
obtener el promedio. Finalmente, el resultado debe mostrarse en la consola.

*/

// datos del estudiante
let estudiante = {
    nombre: 'Kevin Antonio',
    notas : [7,8,6,8,9]
}

// funcion para obtener el promedio
function calcularPromedio(notas){
    let suma = notas.reduce((total, nota) => total + nota, 0)
    let promedio = suma / notas.length
    
    return promedio
}

// promedio de notas del estudiante
let promedioFinal = calcularPromedio(estudiante.notas)

// impresion del resultado
console.log(`El promedio de las notas del estudiante ${estudiante.nombre} es: ${promedioFinal}`)