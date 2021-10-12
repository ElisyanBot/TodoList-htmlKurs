const todoStorage = []
let taskDone = 0;

//fetched dynamic sections in the html
const newTaskInput = document.querySelector('#newTodoInput-container > input');
const taskSection = document.querySelector('#todos-section');
const displayedComplitedTaskNr = document.querySelector('header > h3 > span');


console.log(newTaskInput.value, taskSection, displayedComplitedTaskNr.innerText);
