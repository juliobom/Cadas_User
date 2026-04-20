async function consulte(event) {
    event.preventDefault() // previne que a pagina seja recarregada ao enviar o formulário. 
    console.log("entrou na função")

    const email = document.getElementById("email").value
    
    const response = await fetch(`http://localhost:3000/users?email=${email}`)
       // faz a requisição para o backend tipo Postman

    const users = await response.json()
    console.log(users)
}