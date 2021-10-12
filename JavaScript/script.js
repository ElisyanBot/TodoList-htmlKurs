const todoStorage = []
let taskDone = 0;

//fetched dynamic sections in the html
const newTaskInput = document.querySelector('#newTodoInput-container > input');
const taskSection = document.querySelector('#todos-section');
const displayedComplitedTaskNr = document.querySelector('header > h3 > span');


console.log(newTaskInput.value, taskSection, displayedComplitedTaskNr.innerText);

 
// add eventlistener to input-button that creates a new task with input-value as innertext on click.

// display taskDone as innerText to displayedComplitedTaskNr
//     - needs to be updated when a task is changed

// create task obj/class.
//     create variable holding an unik id for each task.
//         - global const id = 0 => id++ when new task is created

//     create variable holding task(todo) text from input.value (taskInnerText?)
    
//     create variable holding if task is completed or not  (isTaskCompleted?)
//     - true or false value
//     - needs to ++/-- taskDone (function?)
    
//     create delete task method from dom and taskStorage
//         - remove parenet(todo-container) from DOM/display
    
//     create method that controls CSS style for completed task or not.
//         - set class .completed depending on isTaskCompleded value

//     create a display method that pushes this task to the dom.
//         (can i do this on input-button click instead?)

// create a function that appends new task to taskSection
//     - needs functionaliy that appends elements
//         - li
//         - p
//         - button
//         - span(for animation)?

function newElement(taskId, taskText){
    let element = document.createElement('li');
        taskId !== null||undefined? element.setAttribute('id', taskId) : element.removeAttribute('id');
        element.classList.add('todo-container')
        
        const text =  document.createElement('p');
            text.innerText = taskText;
            element.appendChild(text);

        const deleteBtn  =  document.createElement('button');
            deleteBtn.innerText = '\uD83D\uDDD1\uFE0F';
            element.appendChild(deleteBtn);
    
    return element;
}

taskSection.appendChild(newElement(80, 'Learn javscript'))

// create a function that saves to array 
//     - push new task obj to taskStorage[]

// create a function that remove an task from taskStorge when not displayed in the dom.
//     - filter out the task from TaskStorage ande save the new values to taskStorage
//         || splice out the selected task.

