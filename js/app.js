const listaDeEspera = []

function adicionarLista(urgencia) {
    console.log("DEBUGANDO O ADICIONAR LISTA")
    let paciente = document.querySelector("#paciente").value 
    let ulLista = document.querySelector("#listaEspera") 
    
        if(paciente == ""){
            alert("Preencha o campo nome corretamente!")
            return
        }

        if(urgencia === true){
            listaDeEspera.unshift(paciente)
        }else{
            listaDeEspera.push(paciente)
        }

    let listaTela = ""

    listaDeEspera.forEach(function(item, indice){
        listaTela += `<li class="list-group-item">${indice+1} - ${item}</li>`
    })

    ulLista.innerHTML = listaTela

    document.querySelector("#paciente").value = ""
    document.querySelector("#paciente").focus()
}

const atender = function () {
    let ulLista = document.querySelector("#listaEspera") 
    let nomeAtendimento = document.querySelector("#nomePessoaAtendimento") 

    if(listaDeEspera.length == 0){
        alert("Não tem pacientes na lista de espera!!!");
        document.querySelector("#paciente").focus()
        return
    }

    let pacienteEmAtendimento = listaDeEspera.shift()

    nomeAtendimento.innerHTML = pacienteEmAtendimento
    document.querySelector("#alertAtendimento").style = "display:block"
   
    let listaTela = ""
    listaDeEspera.forEach(function(item, indice){
        listaTela += `<li class="list-group-item">${indice+1} - ${item}</li>`
    })

    ulLista.innerHTML = listaTela

    document.querySelector("#paciente").value = ""
    document.querySelector("#paciente").focus()

}

btnAdd.addEventListener("click", () => adicionarLista(false));
btnUrg.addEventListener("click", () => adicionarLista(true));
btnAtender.addEventListener("click", atender);
document.querySelector("#alertAtendimento").style = "display:none"