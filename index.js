
fetch(destinationURL, configurationObject);

function submitData(name, email) {

const configurationObject = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify( {
        name,
        email,
    })
   }

fetch('http://localhost:3000/users', configurationObject)
.then(function (res){
    if (!res.ok) {
        const error = new Error('Unauthorized Access')
        error.code = response.status
        throw error
    }
    return res.json()
})
.then (function(data) {
    const createdP = document.createElement('p')
    const body = document.body
    createdP.textContent = `${data.id}`
    body.appendChild(createdP)
})
.catch(function (error) {
    const createdHeader = document.createElement('p')
    const body = document.body
    createdHeader.textContent = error.message
    body.appendChild(createdHeader)
})
}
submitData('Jeff', otyjeff.com)