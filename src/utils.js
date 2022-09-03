function clearContent() {
    const content = document.querySelector('.content');
    content.className = 'content';
    content.textContent = '';
}

function createTodoDiv(todo_obj) {
    const todo = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoDesc = document.createElement('p');
    const todoPriority = document.createElement('p');

    todoTitle.textContent = todo_obj.title;
    todoDesc.textContent = todo_obj.description;
    todoPriority.textContent = todo_obj.priority;

    todo.classList.add('todo');
    todo.append(todoTitle, todoDesc, todoPriority);
    return todo;
}

export { clearContent, createTodoDiv };
