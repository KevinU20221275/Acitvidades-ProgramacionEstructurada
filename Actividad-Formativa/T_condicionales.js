/*
Ejercicio 1: Verificar Edad para Ingresar a una Discoteca
Descripción:
Escribe un programa que solicite al usuario su edad y luego determine si puede ingresar a una discoteca. Las condiciones son las siguientes:

Si el usuario tiene 18 años o más, mostrar el mensaje: "Puedes ingresar a la discoteca."
Si el usuario tiene menos de 18 años, mostrar el mensaje: "No puedes ingresar a la discoteca."
Si el usuario ingresa un valor no numérico o negativo, mostrar el mensaje: "Por favor, ingresa una edad válida."
Recomendación: Utiliza la estructura if, else if, else.*/
let age = 17

!Number(age) || age < 0 
? console.log('Por favor ingresa una edad valida') 
: age >= 18 
? console.log('Puedes ingresar a la discoteca') 
: console.log('no puedes ingresar a la discoteca')


/*
Ejercicio 2: Clasificación de Calificaciones
Descripción:
Crea un programa que tome una calificación numérica (0-100) como entrada y muestre el correspondiente grado de letra basado en la siguiente escala:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
0-59: "F"
Recomendación: Utiliza la estructura if, else if, else. */
let nota = 100

if (nota >= 90 && nota <= 100){
    console.log('A')
} else  if (nota >= 80 && nota <= 89){
    console.log('B')
} else if (nota >= 70 && nota <= 79){
    console.log('C')
} else if (nota >= 60 && nota <= 69){
    console.log('D')
} else if (nota >= 0 && nota <= 59){
    console.log('F')
} else {
    console.log('Por favor ingresa una calificacion valida')
}


/*
Ejercicio 3: Determinar el Día de la Semana
Descripción:
Escribe un programa que tome un número del 1 al 7 como entrada (donde 1 es Lunes y 7 es Domingo) y muestre el día correspondiente de la semana.

Por ejemplo:

Si el usuario ingresa 1, el programa debería mostrar "Lunes".
Si el usuario ingresa 5, el programa debería mostrar "Viernes".
Recomendación: Utiliza la estructura switch. */
let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
let dia = 1

dia > 7 || dia < 1 ? console.log('dia incorrecto') : console.log(diasSemana[dia-1])


/*
Ejercicio 4: Evaluación de Números
Descripción:
Escribe un programa que pida al usuario que ingrese un número y determine si el número es positivo, negativo o cero.

Si el número es mayor que 0, mostrar "El número es positivo."
Si el número es menor que 0, mostrar "El número es negativo."
Si el número es igual a 0, mostrar "El número es cero."
Recomendación: Utiliza la estructura if, else if, else.*/
let numero = 10

numero > 0 
? console.log('El numero es positivo') 
: numero < 0 
? console.log('El numero es negativo') 
: console.log('El numero es cero')