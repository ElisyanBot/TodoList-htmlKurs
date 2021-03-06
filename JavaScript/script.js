const todoStorage = []
let tasksComplete = 0;
let taskIdNumber = 0;

//fetched dynamic sections in the html
const newTaskInput = document.querySelector('#newTodoInput-container > input');
const newTaskBtn = document.querySelector('#newTodoInput-container > button');
const taskSection = document.querySelector('#todos-section');
const displayedCompletedTaskNr = document.querySelector('header > h3 > span');

// add eventlistener to input-button that creates a new task with input-value as innertext on click.

newTaskBtn.addEventListener('click', ()=>{
    const inputErrorMessage = document.querySelector('.wrapper > span.error');
        if( newTaskInput.value === ''){
            inputErrorMessage.classList.add('visible');
        } else {
            inputErrorMessage.classList.remove('visible');
            todoStorage.push(new task(taskIdNumber, newTaskInput.value));
            todoStorage[todoStorage.length - 1].createTask();
            taskIdNumber++;
        }

    newTaskInput.value = '';
})

class task {
    constructor(id, innerText){
        this.id = 'id' + id; // ! don't remove 'id', it makes the querySelectors work !
        this.innerText = innerText;
        this.isCompleted = false;
    }

    createTask(){
        const element = document.createElement('li');
            element.setAttribute('id', this.id);
            element.classList.add('todo-container');
        
        const text = document.createElement('p');
            text.innerText = this.innerText;
            text.addEventListener('click', () => this.completeTask());
            element.appendChild(text);

        const deleteBtn = document.createElement('button');
            deleteBtn.innerText = '\uD83D\uDDD1\uFE0F';
            deleteBtn.addEventListener('click', () => this.deleteTask())
            element.appendChild(deleteBtn);

        taskSection.appendChild(element);
    }

    completeTask(){
        const taskText = document.querySelector(`#${this.id}>p`);

        if(this.isCompleted === false){
            this.isCompleted = true;
            taskText.classList.add('completedTask');
            changeTasksCompleteNr(this.isCompleted);
        } else {
            this.isCompleted = false;
            taskText.classList.remove('completedTask');
            changeTasksCompleteNr(this.isCompleted);
        }
    }

    deleteTask(){
        const removedItem = document.querySelector(`#${this.id}`);
        changeTasksCompleteNr(false);
        removedItem.remove();
    }
}


function changeTasksCompleteNr(value){
    if(value === true) { 
        tasksComplete++;
    } else {
        tasksComplete >= 1 ? tasksComplete-- : tasksComplete = 0;
    }
    displayedCompletedTaskNr.innerText = tasksComplete;
}


// create a function that remove an task from taskStorge when not displayed in the dom.
//     - filter out the task from TaskStorage ande save the new values to taskStorage
//         || splice out the selected task.

