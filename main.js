document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const alienName = document.querySelector('input').value
    try {
        const response = await fetch(`https://startrekspecs.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
