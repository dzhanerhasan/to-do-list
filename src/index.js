import { Project, Todo, myProjects } from './create_todos';
import { clearContent, createTodoDiv } from './utils';

import './styles/project_form.css';
import './styles/todos.css';

const content = document.querySelector('.content');

function home() {
    clearContent();
    content.classList.add('home');
    const projects = document.querySelector('.projects');
    projects.textContent = '';

    let storedProjects = JSON.parse(localStorage['storedProjects']);

    storedProjects.forEach(project => {
        const projectName = document.createElement('p');
        projectName.textContent = project.name;
        projects.append(projectName);

        displayTodos(projectName, project);

        const addDiv = document.createElement('div');
        const title = document.createElement('h2');
        const desc = document.createElement('p');
        addDiv.classList.add('project');
        title.textContent = project.name;
        desc.textContent = project.description;
        addDiv.append(title, desc);
        content.append(addDiv);
    });
}

function displayProjectForm() {
    clearContent();
    content.classList.add('project-form-div');
    const formTitle = document.createElement('h1');
    const addProjectForm = document.createElement('form');
    const titleField = document.createElement('input');
    const descField = document.createElement('textarea');

    const submitButton = document.createElement('input');

    formTitle.textContent = 'Create Project';
    addProjectForm.setAttribute('class', 'project-form');

    Object.assign(titleField, {
        type: 'text',
        name: 'title',
        placeholder: 'Title',
        id: 'title',
    });

    Object.assign(descField, {
        rows: '4',
        cols: '50',
        name: 'description',
        placeholder: 'Description',
        id: 'description',
    });

    Object.assign(submitButton, {
        type: 'button',
        name: 'submitBtn',
        value: 'Add Project',
        id: 'add-project',
    });

    addProjectForm.append(formTitle, titleField, descField, submitButton);
    content.append(addProjectForm);

    submitButton.addEventListener('click', createProject);
}

function displayTodos(project_name, project_obj) {
    project_name.addEventListener('click', () => {
        clearContent();
        content.classList.add('todo-list');
        const todoProjectTitle = document.createElement('h1');
        const todosDiv = document.createElement('div');
        project_obj.todos.forEach(todo => {
            todosDiv.append(createTodoDiv(todo));
        });
        todoProjectTitle.textContent = project_name.textContent;
        content.append(todoProjectTitle, todosDiv);
    });
}

function createProject() {
    const projectTitle = document.querySelector('#title');
    const projectDescription = document.querySelector('#description').value;

    if (!projectTitle.value) {
        projectTitle.placeholder = 'This field is required!';
        projectTitle.style.border = 'solid 2px red';
    } else {
        const newProject = new Project(projectTitle.value, projectDescription);
        myProjects.push(newProject);
        localStorage['storedProjects'] = JSON.stringify(myProjects);
        home();
    }
}

document.querySelector('#home').addEventListener('click', home);
document
    .querySelector('#create-project')
    .addEventListener('click', displayProjectForm);

home();
