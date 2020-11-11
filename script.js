let selButtom = document.querySelector('#criar-tarefa');
let selInput = document.querySelector('#texto-tarefa');
let selLista = document.querySelector('#lista-tarefas');

//Adiciona tarefas
selButtom.addEventListener('click', function () {
  let textoInput = selInput.value;
  let adiciona = document.createElement('li');
  adiciona.innerText = textoInput;
  adiciona.className = 'lista';
  selLista.appendChild(adiciona);
  selInput.value = ''
});
//Seleciona tarefas
selLista.addEventListener('click', function (event) {
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
});
//Coloca risco de completed
selLista.addEventListener('dblclick', function (event) {
  let selected = document.querySelector('.completed');
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  };
});