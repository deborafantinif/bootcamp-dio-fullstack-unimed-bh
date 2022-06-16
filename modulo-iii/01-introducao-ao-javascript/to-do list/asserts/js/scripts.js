const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const listTasks = document.getElementById('todo-list')

addTaskButton.addEventListener('click', () => {
  if (!taskInput.value) return null
  
  const task = taskInput.value
  taskInput.value = ''

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'task';
  input.value = task;
  input.id = task;

  const label = document.createElement('label');
  label.htmlFor = task
  label.innerHTML = task

  const div = document.createElement('div');
  div.className = 'task-div'

  div.appendChild(input);
  div.appendChild(label);
  listTasks.appendChild(div);
})

