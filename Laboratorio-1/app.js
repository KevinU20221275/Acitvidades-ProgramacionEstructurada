// Kevin Antonio Montano Aquino
// U20221275

// Ejercicio

/*
crear un sistema simple para verificar el inventario de
una tienda de ropa. Se tienen tres tipos de productos: camisetas, pantalones y zapatos. Los
estudiantes deben declarar variables para la cantidad de cada producto y realizar una serie de
operaciones para determinar si el inventario necesita ser repuesto.
*/

// productos
let camisetas = 80; // si cambio este valor por ej: a 80 el programa solo evaluarua esta condición y no me dira si sera necesario reponer otro, como en el caso de los zapatos. lo ideal seria cambiar la estrutura por: 
let pantalones = 150;
let zapatos = 75;

// total de productos
let totalProductos = camisetas + pantalones + zapatos;

// imprimiendo el inventario
console.log('=============== INVENTARIO ===============')
console.log("|   PRODUCTOS    |   UNIDADES EN STOCK   |")
console.log("------------------------------------------")
console.log(`|   Camisetas    |          ${camisetas}  `)
console.log(`|   Pantalones   |          ${pantalones} `)
console.log(`|   Zapatos      |          ${zapatos}    `)
console.log("------------------------------------------")

// imprimiendo el total de productos
console.log(`UNIDADES TOTALES : ${totalProductos} productos \n`)

// verificando el inventario
if (camisetas < 100) {
    console.log(`Es necesario reponer camisetas.\nUnidades en Stock: ${camisetas}`);
}if (pantalones < 100) {
    console.log(`Es necesario reponer pantalones.\nUnidades en Stock: ${pantalones}`);
}if (zapatos < 100) {
    console.log(`Es necesario reponer zapatos.\nUnidades en Stock: ${zapatos}`);
}else {
    console.log("No es necesario reponer ningun producto");
}

/* FIN DEL EJERCICIO */
