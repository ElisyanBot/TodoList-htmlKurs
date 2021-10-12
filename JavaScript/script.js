const todoStorage = []
let tasksComplete = 0;
let taskIdNumber = 0;

//fetched dynamic sections in the html
const newTaskInput = document.querySelector('#newTodoInput-container > input');
const newTaskBtn = document.querySelector('#newTodoInput-container > button');
const taskSection = document.querySelector('#todos-section');
const displayedCompletedTaskNr = document.querySelector('header > h3 > span');

function changeTasksCompleteNr(value){
    if(value === true) { 
        tasksComplete++;
    } else {
        tasksComplete >= 1 ? tasksComplete-- : tasksComplete = 0;
    }
    displayedCompletedTaskNr.innerText = tasksComplete;
}

// add eventlistener to input-button that creates a new task with input-value as innertext on click.
 
newTaskBtn.addEventListener('click', ()=>{
    todoStorage.push(new task(taskIdNumber, newTaskInput.value));
    let i = todoStorage.length - 1;
    
    todoStorage[i].createTask();
    taskIdNumber++;
})

class task {
    constructor(id, innerText){
        this.id = 'id' + id; // don't remove 'id:', it makes the querySelector work.
        this.innerText = innerText;
        this.isCompleted = false;
    }

    createTask(){
        const element = document.createElement('li');
            element.setAttribute('id', this.id);
            element.classList.add('todo-container');
        
        const text = document.createElement('p');
            text.innerText = this.innerText;
            text.addEventListener('click', () => this.completed(this.id))
            element.appendChild(text);

        const deleteBtn = document.createElement('button');
            deleteBtn.innerText = '\uD83D\uDDD1\uFE0F';
            deleteBtn.addEventListener('click', () => this.deleteTask())
            element.appendChild(deleteBtn);

        taskSection.appendChild(element);
    }

    completed(taskId){
        const taskText = document.querySelector(`#${taskId}>p`);

        if(this.isCompleted === false){
            this.isCompleted = true
            taskText.classList.add('completed')
            changeTasksCompleteNr(this.isCompleted)
        } else {
            this.isCompleted = false
            taskText.classList.remove('completed')
            changeTasksCompleteNr(this.isCompleted)
        }
    }

    deleteTask(){
        const removedItem = document.querySelector(`#${this.id}`)
        removedItem.remove();
    }
}



// create a function that remove an task from taskStorge when not displayed in the dom.
//     - filter out the task from TaskStorage ande save the new values to taskStorage
//         || splice out the selected task.

