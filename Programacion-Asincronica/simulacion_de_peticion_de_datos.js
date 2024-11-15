// Simulación de Petición de Datos con setTimeout
/* Simula una petición a un servidor que tarda 2 segundos en responder. 
Debe mostrar "Obteniendo datos..." inmediatamente, y después de 2 segundos, 
debe mostrar "Datos recibidos: [1, 2, 3, 4, 5]". */

console.log('Obteniendo datos...')
setTimeout(() => {
    console.log("Datos recibidos: [1, 2, 3, 4, 5]")
}, 2000)