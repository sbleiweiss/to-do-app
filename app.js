function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');

let toDos = [];

function renderTheUI(){
  const toDoList = document.getElementById('toDoList');
  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);

  })
}

function createNewToDo(){
  const newToDoText = document.getElementById('newToDoText');
  if(!newToDoText.value){ return; }
  toDos.push({
    title: newToDoText.value,
    completed: false
  });

  newToDoText.value = '';
  renderTheUI();
}

addToDoForm.addEventListener('submit', event =>  {
  event.preventDefault();
  createNewToDo();
});

renderTheUI();
}

window.onload = function() {
  onReady();
};
