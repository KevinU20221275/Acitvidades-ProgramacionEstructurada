const $autor = document.getElementById('autor');
const $frase = document.getElementById('frase')
const $getQuoteBtn = document.getElementById('getQuoteBtn')

const getQuote = () => {
    // api de frases de Game of Thrones
    const URL = 'https://api.gameofthronesquotes.xyz/v1/random'
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        $autor.textContent = `- ${data.character.name}`
        $frase.textContent = `"${data.sentence}"`
    })
    .catch((error) => {
        $frase.textContent = "No se pudo obtener la frase 😢"
        $autor.textContent = "¿El invierno acerca? 😰"
        console.error('Error:', error)
    });
}

getQuote()

$getQuoteBtn.addEventListener('click', getQuote)