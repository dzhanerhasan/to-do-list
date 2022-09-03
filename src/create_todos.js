class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.todos = [];
    }
}

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

const todo1 = new Project('Todo1', 'First');
const todo2 = new Project('Todo2', 'Second');
const todo3 = new Project('Todo3', 'Third');

const list1 = new Todo('Test', 'Testov', '24 Oct', 10);
const list2 = new Todo('ASD', 'Testov', '24 Oct', 10);
const list3 = new Todo('sSA', 'Testov', '24 Oct', 10);

todo1.todos.push(list1, list2, list3);

let myProjects = [];
localStorage['myProjects'] = JSON.stringify(myProjects);

export { Project, Todo, myProjects };
