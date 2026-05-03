function buttonup(){
    const button = document.getElementById("consultar")
    const lista = document.getElementById("lista")
    
    button.innerHTML = "Consultando..."

    setTimeout(() => {

        button.style.marginTop = "10px"
        button.style.transition = "0.3s"
        button.innerHTML = "Consultar"

        setTimeout(() => {

            lista.style.backgroundColor = "#3c577641"
        },200)
        
    }, 2000)

    
    
    
}