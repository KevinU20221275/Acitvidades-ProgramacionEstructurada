const $btnCargarDatos = document.getElementById('btnCargarDatos')
const $usersList = document.getElementById('usersList')

const getData = async () => {
    $usersList.innerHTML = "Cargando..."
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok){
            throw new Error(`Error en la respuesta: ${response.status}`)
        }

        const data = await response.json()

        setTimeout(() => {
            $usersList.innerHTML = ""
            renderUsersList(data)
        }, 500)
        
    } catch (error) {
        console.error('No se pudo conseguir la lista de usuarios', error.message)

        $usersList.innerHTML = 'Hubo un error al cargar los datos. Intente nuevamente.'
    }
}

const renderUsersList = (users) => {
    users.forEach((user, index) => {
        const delay = index * 150;
        
        setTimeout(() => {
            const userItem = document.createElement('li')
            userItem.setAttribute('id', user.id)
            userItem.textContent = `${user.name}`
            userItem.classList.add('hidden')
            $usersList.appendChild(userItem)

            setTimeout(() => {
                userItem.classList.add('show')
                userItem.classList.remove('hidden')
            }, 100)

        },delay)
    })
}

$btnCargarDatos.addEventListener('click', () => {
    getData()
})