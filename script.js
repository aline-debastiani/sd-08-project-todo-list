/*function createButton(){
    let lastselected = null
    let button = document.createElement('button')
    button.id = 'criar-tarefa'
    button.innerHTML = 'Criar Tarefa'
    let divPai = document.getElementById('section-one')
    divPai.appendChild(button)
    button.addEventListener('click',function(){
        let input = document.getElementById('texto-tarefa')
        let createLI = document.createElement('li')
        createLI.addEventListener('click', function corFundo(event){
            if(lastselected === null){
                lastselected = event.target 
            }else{
                lastselected.style.backgroundColor = 'white'
                lastselected = event.target
            }
            event.target.style.backgroundColor = 'rgb(128,128,128)'
        })
        let lista = document.getElementById('lista-tarefas')
        if(input.value.length > 0){
            createLI.innerText = input.value
            lista.appendChild(createLI)
            input.value = ''
        }else{
            alert('Digite ao menos um caractere.')
        }
        
    })
}
createButton()*/

let button = document.createElement('button')
let lista = document.getElementById('lista-tarefas')
let createLI = document.createElement('li')
let input = document.getElementById('texto-tarefa')
let lastselected = null
let selectLI = document.getElementsByTagName('li')
let doubleSelected = null

function createButton(){
    button.id = 'criar-tarefa'
    button.innerHTML = 'Criar Tarefa'
    let divPai = document.getElementById('section-one')
    divPai.appendChild(button)
}
createButton()

function addClickButton(){
    button.addEventListener('click',function(){
        let createLI = document.createElement('li')
        createLI.addEventListener('dblclick', function completed(event){
            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed');
              } else {
                event.target.classList.add('completed');
              }
        })
        createLI.addEventListener('click', function corFundo(event){
            if(lastselected === null){
                lastselected = event.target 
            }else{
                lastselected.style.backgroundColor = 'white'
                lastselected = event.target
            }
            event.target.style.backgroundColor = 'rgb(128,128,128)'
        })
        if(input.value.length > 0){
            createLI.innerText = input.value
            lista.appendChild(createLI)
            input.value = ''
        }else{
            alert('Digite ao menos um caractere.')
        }
    })
}
addClickButton()

