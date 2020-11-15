//variáveis
const adicionarItem = document.getElementById('criar-tarefa'); //campo com o valor do item
const button = document.getElementById('criar-tarefa'); // botao enviar

// nao permite que atualize a page ao click do button
button.addEventListener('click', function(event) {
    event.preventDefault();
})

//cria uma 'li' com valor de item para cada item adicionado
adicionarItem.addEventListener('click', function (event){
    
    const item = document.getElementById('texto-tarefa');
    const ol = document.getElementById('lista-tarefas');
    const li = document.createElement('li');

    ol.appendChild(li);
    li.innerHTML = item.value
    
    item.value = '';
})