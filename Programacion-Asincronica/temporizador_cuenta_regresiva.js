// Temporizador de Cuenta Regresiva
/* Crea un temporizador que haga una cuenta regresiva de 5 a 0, 
mostrando cada número en la consola cada segundo. Cuando llegue a 0, 
debe mostrar el mensaje "¡Tiempo terminado!" y detenerse. */

let contador = 5

let cuentaRegresiva = setInterval(() => {
    console.log("Cuenta Regresiva: ",contador)
    contador-=1
    if (contador === 0){
        clearInterval(cuentaRegresiva)
        console.log("¡Tiempo terminado!")
    }
}, 1000)