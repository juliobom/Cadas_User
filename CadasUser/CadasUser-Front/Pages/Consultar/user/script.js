async function consulte(event) {
    event.preventDefault() // previne que a pagina seja recarregada ao enviar o formulário. 
    console.log("entrou na função")

    const email = document.getElementById("email").value

    const lista = document.getElementById("lista")
    

    const response = await fetch(`http://localhost:3000/users/${email}`)
    // faz a requisição para o backend tipo Postman

    const users = await response.json()
    console.log(users)
    gerarlista(users)

}

async function gerarlista(users) {
    
    const lista = document.getElementById("lista")

    setTimeout(() => {
        
        lista.innerHTML = "Dados do Usuario.<br>"
        lista.innerHTML += `
        Nome: ${users.name}<br>
        E-mail: ${users.email}
        `
    },2200)

}