const body = document.querySelector('body');

//Cria o header e o texto que explica
createBasics();


function createBasics() {
    //Cria o header
    let header = document.createElement('header');
    header.innerHTML = 'Minha Lista de Tarefas';
    body.appendChild(header);

    //Cria o parágrafo
    let instruction = document.createElement('p');
    instruction.id = 'funcionamento';
    instruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
    body.appendChild(instruction);

    //Chama a função que cria o input e botão de add
    createInput();

    //Cria a lista ordenada
    let list = document.createElement('ol');
    list.id = 'lista-tarefas';
    body.appendChild(list);
}

function createInput() {
    //Cria input
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    body.appendChild(input);

    //Cria o botão
    let button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerHTML = 'Criar';

    //Adiciona ao botão a função de adicionar itens a lista e limpar o input
    button.addEventListener('click', function(){
        let lista = document.querySelector('#lista-tarefas');
        let novaTarefa = document.querySelector('#texto-tarefa').value;

        //Cria a nova linha, adiciona o texto a ela e associa a lista
        let novaLinha = document.createElement('li');
        novaLinha.innerHTML = novaTarefa;
        lista.appendChild(novaLinha);
        //Adiciona um listener a essa nova linha para que quando for clicado troque a cor de fundo
        novaLinha.addEventListener('click', function(event){
            let getAllListItems = document.querySelectorAll('li');
            for (let i = 0; i < getAllListItems.length; i += 1){
                getAllListItems[i].style.backgroundColor = 'white';                
            }
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        })

        //Limpa o campo input
        document.querySelector('#texto-tarefa').value = '';
    })

    body.appendChild(button);
}