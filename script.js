const lista = [];
// Insere elemento na lista
function insereElementoNaLista (){    
    let inputText = document.getElementById("texto-tarefa").value;    
    let li_ID = document.getElementById("lista-tarefas")    
    let Item = document.createElement('li')
    Item.classList.add("list-item");
    let ultimoElemento;         
      
    //Verifica se o input text está vazio
    if (inputText !== '') {
        lista.push(document.getElementById("texto-tarefa").value)
        ultimoElemento = lista[lista.length -1];                
        Item.innerHTML = ultimoElemento
        li_ID.appendChild(Item)   
        document.getElementById('texto-tarefa').value='';
    } else {
        alert("Preencha a lista com algum item!")
    }
    setColor();
    doubleClick();
}

// Ao clicar no botão salva o texto na lista e apaga conteúdo do input
document.getElementById("criar-tarefa").onclick = function(e) {
    insereElementoNaLista();
    e.preventDefault();
}

//Função para apagar itens da lista
let botaoApaga = document.querySelector('#apaga-tudo')
botaoApaga.onclick = () => {
    const listaInterna = document.getElementById("lista-tarefas");
    if (lista.length != 0){
        if (confirm("\t\n Tem certeza que deseja apagar todos os itens da lista? \t\n")){            
            while (listaInterna.firstChild) {
                listaInterna.removeChild(listaInterna.lastChild);
            }
         }
    } else {
        alert("\t Não há itens em sua lista! \t")
    }   
}

//Ao clicar em um dos itens a variável recebe a classe active
function setColor() {    
    let item = document.querySelectorAll(".list-item");
    for (let i = 0; i < item.length; i++) { 
        item[i].addEventListener("click", function (event) { 
        reverteClasses();  //Reverte todos os itens para ".list-item"
        if (item[i].className === "list-item"){
            event.target.className = 'list-item-active'; 
            }
        })    
    }     
}   

//Ao dar um duplo click ele aplica a classe completed
function doubleClick() {    
    let item = document.querySelectorAll(".list-item");
    for (let i = 0; i < item.length; i++) {   
        item[i].addEventListener("dblclick", function (event) { 
            // if (item[i].className === ""){
            //     event.target.classList.add('list-item'); 
            // } else if (item[i].className === "list-item" || item[i].className === "list-item-active"){
            //     event.target.classList.add('completed'); 
            // }



            if (item[i].className === "completed"){
                event.target.classList.remove('completed'); 
                event.target.classList.add('list-item'); 
                                         
            } else if (item[i].className === "list-item-active"){
                event.target.classList.remove('list-item-active'); 
                event.target.classList.add('completed');

            } else if (item[i].className === "list-item"){
                event.target.classList.remove('list-item');
                event.target.classList.add('completed');
            } 
        })
    }     
} 

//Função para reverter classe dos itens da lista, é chamada na função serColor
function reverteClasses (){
    let itemActive = document.querySelectorAll(".list-item-active"); 
        for (let i = 0; i < itemActive.length; i++) {           
            itemActive[i].classList.remove('list-item-active');
            itemActive[i].classList.add('list-item');       
    }
}    
    
//Função para apagar itens da lista
// let botaoApagaFinalizados = document.querySelector('#remover-finalizados')
// botaoApagaFinalizados.onclick = () => {
//     const listaInterna = document.querySelectorAll(".completed");
//     if (listaInterna){
//         if (confirm("\t\n Deseja apagar todos os itens completados da lista? \t\n")){            
//             while (listaInterna.firstChild) {
//                 listaInterna.removeChild(listaInterna.lastChild);
//             }
//          }
//     } else {
//         alert("\t Não há itens em sua lista! \t")
//     }   
// }
    

        
    
            


    


