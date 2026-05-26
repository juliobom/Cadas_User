async function carregaruser(){
    console.log("carregou usuarios!")

    try{
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        const lista = document.getElementById("lista");
        lista.innerHTML = "";
        let val = 0;
        let usuario = [100]
        users.forEach(users => {   //ira percorrer o vetor retornado pelo express

            const li = document.createElement("li") // ira criar um novo elemento dentro da lista <ul></ul>
            li.innerHTML = `
                
                <div class=card>
                    <div class=infouser>

                        <span id=user_id>
                            ID: ${users.id}
                        </span>
                        <span id=user_name>
                            Nome: ${users.name}
                        </span>
                        <span id=user_email>
                            Email: ${users.email}
                        </span>
                    </div>

                    <button id=apaguei 
                        type=button 
                        onclick=deluser(${users.id})>
                        Excluir
                    </button>
                </div>
                `
            lista.appendChild(li);
                    //elemento filho adicionado a cada loop do forEach
            val += 1;

        });
        
    }
    catch (error) {
        console.log("erros ao gerar a lista", error)
    }

}


async function filtrarlist(event){

    event.preventDefault() 
    console.log("entrou na function")
    const valor = document.getElementById("inserir").value
    let li = document.createElement("li")
    
    li.innerHTML = valor + "<button id=apaguei type=button  onclick=deluser(id)>excluir</button>"
    let lista = " "
    lista = document.getElementById("lista").appendChild(li)
    
    

}

async function deluser(id){
    const inputValue = (await (await fetch("//api.ipify.org?format=json")).json()).ip;
    
    const {value: password } = await Swal.fire({
    
        icon: 'info',
        title: `digite a senha do usuario`,
        input: 'password',
        inputValue,
        confirmButtonText: 'enviar',
        inputValidator: (value) => {
            if(!value){
                return 'voce prescisa digitar a senha!';
            }
        }
        
    });
    
    console.log(password)

    try{
        
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
            
            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({

                password: password

            })
        });

        if(!response.ok){
            throw new Error("Erro ao deletar usuario")
        }

        await Swal.fire({
            icon: 'success',
            title: 'Usuario deletado'
        });

        carregaruser();

    }

    catch(error){   
        console.log(error)

        Swal.fire({
            icon: 'error',
            title: 'Erro ao deletar'

        });
    }
}
