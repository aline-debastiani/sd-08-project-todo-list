function toggleSelected(event) {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task !== event.target) task.classList.remove('selected');
  }
  event.target.classList.toggle('selected');
}

function toggleCompleted(event) {
  event.target.classList.toggle('completed');
}

// Cria uma tarefa
function createTask(description) {
  const task = document.createElement('li');
  task.className = 'task';
  task.textContent = description;
  task.addEventListener('click', toggleSelected);
  task.addEventListener('dblclick', toggleCompleted);
  return task;
}

const olTasks = document.getElementById('lista-tarefas');
const taskTextInput = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');

// Cria uma nova tarefa e a adiciona a ol quando clicamos no botao
createTaskButton.addEventListener('click', function() {
  const taskDescription = taskTextInput.value;
  const task = createTask(taskDescription);
  olTasks.appendChild(task);
  taskTextInput.value = "";
});

function eraseAllTasks() {
  const tasks = olTasks.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    task.remove();
  }
}

const eraseAllButton = document.getElementById('apaga-tudo');
eraseAllButton.addEventListener('click', eraseAllTasks);

function eraseCompletedTasks() {
  const completedTasks = olTasks.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i++) {
    const task = completedTasks[i];
    task.remove();
  }
}

const eraseCompletedButton = document.getElementById('remover-finalizados');
eraseCompletedButton.addEventListener('click', eraseCompletedTasks);
