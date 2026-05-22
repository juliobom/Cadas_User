async function criarcorpo(event) {
    event.preventDefault() // previne que a pagina seja recarregada ao enviar o formulário.
    console.log("entrou na função")

    const email = document.getElementById("email").value
    const name = document.getElementById("nome").value
    const password = document.getElementById("senha").value

    const response = await fetch("http://localhost:3000/users", {      // faz a requisição para o backend tipo Postman
        method: "POST",  // método HTTP
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, name, password})
    })
    const data = await response.json()
    console.log(data)
    if(response.ok){
        let message = document.getElementById("cadast")
        message.innerHTML = "Cadastrando..."
        setTimeout(() => {
            message.innerHTML = "Usuário cadastrado!"
            message.style.backgroundColor = "#039232" 

        }, 1000)
        setTimeout(() => {
            window.location.href = "../Consultar/index.html"
        }, 2000)  
    }
    else{
        let message = document.getElementById("cadast")
        setTimeout(() => {
            message.innerHTML = "Erro ao cadastrar usuário!"
            message.style.backgroundColor = "#ff0000"
        }, 1000)
    }

}