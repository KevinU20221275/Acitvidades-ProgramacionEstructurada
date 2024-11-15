// Mostrar Fecha y Hora Actual Cada Segundo
// Escribe un programa que muestre la fecha y hora actual en la consola cada segundo.
setInterval(() => {
    let date =  new Date();
    console.log("Fecha y hora: ", date.toLocaleString())
}, 1000)