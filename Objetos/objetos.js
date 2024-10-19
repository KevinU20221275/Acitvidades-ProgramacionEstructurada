// Kevin Antonio Montano Aquino U20221275

/*1- Realice el siguiente ejercicio:
Crear un objeto sencillo que se usa para guardar información sobre las
calificaciones de un alumno. El objeto contiene tres materias inglés,
programación y Matemática, el objeto contendrá el nombre del alumno y la
calificación en cada una de ellas. El Script imprimirá el nombre y la media de
sus calificaciones.
Utiliza el método toFixed(n) para redondear el promedio, n son los dígitos
después del punto decimal y devuelve una cadena que representa el
resultado.
*/

const alumno = {
  nombre: 'Kevin Montano',
  calificaciones: {
    ingles: 8,
    programacion: 9,
    matematica: 7
  },
  calcularMedia: function() {
    const calificaciones = Object.values(this.calificaciones);
    const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const promedio = suma / calificaciones.length;
    return promedio.toFixed(2);
  }
};

console.log('======= EJERCICIO 1 =============')
console.log('Nombre:', alumno.nombre);
console.log('Media de calificaciones:', alumno.calcularMedia());


/*
2- Defina un objeto, mediante una expresión, que tenga dos propiedades: precio
y descuento y un método neto. El método calculará el precio con el descuento
aplicado. Los valores se pedirán por teclado usando el prompt-sync
En el siguiente ejercicio utilizaras la librería de prompt-sync, para solicitarle a
los usuarios los datos,
• Requerir la librería prompt-sync
• Definir el objeto que contiene el precio, el descuento y un método para
calcular el precio neto:
o Propiedad para el precio
o Propiedad para el descuento
o Método para calcular el precio neto con el descuento aplicado

Precio neto = Precio − (

Descuento
100 )

o Solicitar al usuario que ingrese los valores de precio y descuento
o Calcular el precio neto y mostrar el resultado
• Utiliza parseFloat( ) Para asegurar prompt se tratan como un
número.*/
console.log('\n')
const prompt = require('prompt-sync')();

const articulo = {
  precio: 0,
  descuento: 0,
  calcularPrecioNeto: function() {
    return this.precio - ((this.descuento / 100) * this.precio);
  }
};


console.log('======= EJERCICIO 2 =============')
let precio = parseFloat(prompt('Ingrese el precio del articulo: '))

while (isNaN(precio) || precio <= 0) {
    console.log("Error: Ingrese un valor valido")
    precio = parseFloat(prompt('Ingrese el precio del articulo: '))
}

articulo.precio = precio;
console.log('\n')

let descuento = parseFloat(prompt('Ingrese el descuento del articulo (en %): '))

while (isNaN(descuento) || descuento < 0 || descuento > 100) {
    console.log("Error: Ingreso un valor no valido. ")
    descuento = parseFloat(prompt('Ingrese el descuento del articulo (en %): '))
} 

articulo.descuento = descuento;

console.log('\n')


console.log('===== Datos del Articulo ====')
console.log('Precio:', articulo.precio);
console.log('Descuento:', articulo.descuento + '%');
console.log('Precio neto:', articulo.calcularPrecioNeto());