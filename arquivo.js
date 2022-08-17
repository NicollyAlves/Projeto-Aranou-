
const inputNome    = document.querySelector('#nome')
const inputEmail   = document.querySelector('#email')
const inputCelular = document.querySelector('#celular')
const botaoSalvar  = document.querySelector('#adicionar')
const botaoLimpar  = document.querySelector('#limpar')
const botaoExcluir = document.getElementsByClassName('btn btn-danger btn-sm')
const botaoEditar  = document.getElementsByClassName('btn btn-secondary btn-sm')

function limpar(){
  inputNome.value    = ""
  inputEmail.value   = ""
  inputCelular.value = ""
}
botaoLimpar.addEventListener("click", limpar)



function criar(){
  const tbody = document.querySelector("#tabela")
    for(let i = 0; i<1; i++){
      const tr           = document.createElement("tr")
      const tdNome       = document.createElement("td")
      const tdEmail      = document.createElement("td")
      const tdTel        = document.createElement("td")
      const tdBotoes     = document.createElement("td")
      const botaoEditar  = document.createElement("button")
      const botaoExcluir = document.createElement("button")
       
      tdNome.innerText  = inputNome.value
      tdEmail.innerText = inputEmail.value
      tdTel.innerText   = inputCelular.value
       
      inputNome.value    = ""
      inputEmail.value   = ""
      inputCelular.value = ""

      botaoEditar.type  = "button"
      botaoExcluir.type = "button"

      botaoEditar.className  = "btn btn-secondary btn-sm"
      botaoExcluir.className = "btn btn-danger btn-sm"

      botaoEditar.id  = "editar"
      botaoExcluir.id = "excluir"
       
      botaoEditar.innerText  = "Editar"
      botaoExcluir.innerText = "Excluir"
       
      tdBotoes.append(botaoEditar, botaoExcluir)
      tr.append(tdNome, tdEmail, tdTel, tdBotoes)
      tbody.appendChild(tr)
    }
    return tbody
}
    
function salvar(){
  criar()
  editar()
  excluir()
}
botaoSalvar.addEventListener("click", salvar)


function btnExcluir(event){
  const dado = event.target.parentElement.parentElement
  dado.remove()
}
function excluir(){
  for(let i = 0; i < botaoExcluir.length; i++) {
    botaoExcluir[i].addEventListener("click", btnExcluir)
  }
}
excluir()

function btnEditar(event){
  const dado         = event.target.parentElement.parentElement
  const nome         = dado.firstElementChild
  const email        = nome.nextElementSibling
  const celular      = email.nextElementSibling
  inputNome.value    = nome.innerText
  inputEmail.value   = email.innerText
  inputCelular.value = celular.innerText

  dado.remove()
}
function editar(){
  for(let i = 0; i < botaoEditar.length; i++) {
    botaoEditar[i].addEventListener("click", btnEditar)  
  }
}
editar()