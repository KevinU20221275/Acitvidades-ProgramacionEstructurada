// Detener un Temporizador Después de 5 Ejecuciones
/* Crea un programa que muestre "Ejecutando tarea..." cada segundo, 
pero que se detenga automáticamente después de 5 ejecuciones. */

let temp = 0;
let temporizador = setInterval(() => {
    console.log("Ejecutando tarea... ")
    temp++
    if (temp === 5){
        clearInterval(temporizador)
    }
},1000)