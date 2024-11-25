document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    
    function createTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const span = document.createElement('span');
        span.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTask(li, span));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(li));

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    }

  
    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText) {
            createTask(taskText);
            todoInput.value = '';
        }
    });

   
    function editTask(li, span) {
        const newTask = prompt('Edit your task:', span.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            span.textContent = newTask.trim();
        }
    }

    
    function deleteTask(li) {
        todoList.removeChild(li);
    }
});
