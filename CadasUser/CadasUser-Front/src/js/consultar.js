async function carregaruser(){
    console.log("carregou usuarios!")

    try{
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        const lista = document.getElementById("lista");
        lista.innerHTML = "";
        let val = 0;
        users.forEach(users => {   //ira percorrer o vetor retornado pelo express
            const li = document.createElement("li") // ira criar um novo elemento dentro da lista <ul></ul>
            li.innerHTML = `[ ${val } ]  ID: ${users.id}  nome: ${users.name} email: ${users.email}
                `
            lista.appendChild(li); //elemento filho adicionado a cada loop do forEach
            val += 1;

        });
    }
    catch (error) {
        console.log("erros ao gerar a lista", error)
    }

}


async function gerarlist(event){

    event.preventDefault() 
    console.log("entrou na function")
    const valor = document.getElementById("inserir").value
    let li = document.createElement("li")

    li.innerHTML = valor
    let lista = document.getElementById("lista").appendChild(li)
    

}