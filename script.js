let getText = document.getElementById('texto-tarefa');
let buttonTarefa = document.getElementById('criar-tarefa');
let eraseAll = document.getElementById('apagar-tudo');
let TasksList = document.getElementById('lista-tarefas');
getText.className = 'list-of-tasks';

function ListofTasks {

    let paragraph = document.createElement('li');
    paragraph.innerText = getText.value;
    paragraph.className = 'task';
    TasksList.appendchild(paragraph);


}

paragraph.addEventListener('click', ListofTasks);