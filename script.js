const inputTask = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Submit Task to Task List
const submitTask = () => {
  if (inputTask.value === '') {
    return alert('Insira um valor válido para sua task!!');
  }
  const taskListElement = document.createElement('li');
  taskListElement.className = 'task';
  taskListElement.innerText = inputTask.value;
  inputTask.value = '';
  return taskList.appendChild(taskListElement);
};

createTask.addEventListener('click', submitTask);

// Change task color
const unselectsTasks = () => {
  const taskItem = document.querySelectorAll('.task');
  for (let i = 0; i < taskItem.length; i += 1) {
    taskItem[i].classList.remove('selected');
    taskItem[i].style.backgroundColor = 'rgb(98 , 65 , 160)';
  }
};

const selectTask = (event) => {
  if (event.target.className !== 'task selected') {
    unselectsTasks();
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
};

taskList.addEventListener('click', selectTask);
