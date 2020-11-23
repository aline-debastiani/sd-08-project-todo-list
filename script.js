function addTask() {
  const buttonAddTask = document.getElementById('criar-tarefa');
  buttonAddTask.addEventListener('click', function () {
    let taskItem = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let newTaskItem = document.createElement('li');
    newTaskItem.classList.add('task-style');
    newTaskItem.addEventListener('click', changeLiClassColor);
    newTaskItem.addEventListener('dblclick', completedTaskClass);
    taskList.appendChild(newTaskItem);
    newTaskItem.innerText = taskItem.value;
    taskItem.value = '';
  });
}
addTask();

let liArray = document.getElementsByClassName('task-style');

function changeLiClassColor(event) {  
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function completedTaskClass(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function removeCompleted() {
  let tasksDone = document.getElementsByClassName('completed');
  const buttonTaskDone = document.getElementById('remover-finalizados');
  buttonTaskDone.addEventListener('click', function () {
    for (let iRemove = tasksDone.length -1; iRemove >= 0; iRemove -= 1) {
      tasksDone[iRemove].remove();
    }
  });
}
removeCompleted();

function moveTaskUp() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', function () {
    if (document.querySelector('.selected')) {
      let taskSelectedUp = document.querySelector('.selected');
      if (taskSelectedUp.previousElementSibling != null) {
        let previousTask = taskSelectedUp.previousElementSibling.outerHTML;
        taskSelectedUp.previousElementSibling.outerHTML = taskSelectedUp.outerHTML;
        taskSelectedUp.outerHTML = previousTask;
      }
    }
  });
}
moveTaskUp();

function moveTaskDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', function () {
    if (document.querySelector('.selected')) {
      let taskSelectedDown = document.querySelector('.selected');
      if (taskSelectedDown.nextElementSibling != null) {
        let nextTask = taskSelectedDown.nextElementSibling.outerHTML;
        taskSelectedDown.nextElementSibling.outerHTML = taskSelectedDown.outerHTML;
        taskSelectedDown.outerHTML = nextTask;
      }
    }
  });
}
moveTaskDown();

function removeSelected() {
  let selectedTask = document.getElementsByClassName('selected');
  const buttonRemoveTask = document.getElementById('remover-selecionado');
  buttonRemoveTask.addEventListener('click', function () {
    selectedTask[0].remove();
  });
}
removeSelected();

function clearAllTasks() {
  let clearArray = document.getElementById('lista-tarefas');
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', function () {
    clearArray.innerHTML = '';
  });
}
clearAllTasks();

/*
function saveList() {
  const buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', function () {
    let listToSave = document.getElementsByClassName('task-style');
    let key = 
  });
}
*/
