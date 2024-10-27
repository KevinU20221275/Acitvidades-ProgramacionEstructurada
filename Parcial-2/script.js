// Kevin Antonio Montano Aquino U20221275

// funcion para cambiar el texto del titulo
function cambiarTexto(){
    let titulo = document.getElementById('titulo')
    titulo.classList.toggle('textoCambiado')
    let texto = titulo.classList.contains('textoCambiado') ? "Hola Mundo desde JavaScript" : "Hola Mundo!";
    titulo.innerText = texto;
}

// funcion para cambiar el color del titulo
function cambiarColor(){
    let titulo = document.getElementById('titulo')
    titulo.classList.toggle('redText')
}

// funcion para cambiar la alineacion del titulo
function cambiarAlineacion(){
    let titulo = document.getElementById('titulo')
    titulo.classList.toggle('textCenter')
}

// funcion para crear un nuevo texto debajo del titulo
function crearTexto(){
    let container = document.getElementById('textContainer')
    let texto = document.createElement('p')
    texto.id = 'parrafo'
    texto.innerText = 'JavaScript permite crear paginas dinámicas'
    container.appendChild(texto)
}

// funcion para eliminar el texto agregado debajo del titulo
function eliminarTexto(){
    let container = document.getElementById('textContainer')
    let parrafo = document.getElementById('parrafo')
    if (parrafo != null) container.removeChild(parrafo)
}

document.getElementById('btnCambiarTexto').addEventListener('click', cambiarTexto)
document.getElementById('btnCambiarColor').addEventListener('click', cambiarColor)
document.getElementById('btnCambiarAlineacion').addEventListener('click', cambiarAlineacion)
document.getElementById('btnCrearTexto').addEventListener('click', crearTexto)
document.getElementById('btnBorrarTexto').addEventListener('click', eliminarTexto)