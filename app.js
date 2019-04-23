function onReady(){ // create onReady function for to-do app!
  const addToDoForm = document.getElementById('addToDoForm'); // selected form and assigned it to ariable "addToDoForm"
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList'); // takes one argument, an elements ID and returns exactly one matching element
  addToDoForm.addEventListener('submit', event => {   //event listener, will be listening for form submissiom ("addToDoForm") . addEventListener takes a *type* & *listener" (function)
    event.preventDefault();

    // get the text ( get the text from the input and assign it to a variable, title, title var will now = alue of input at the moment that the submit event was triggered)
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement); //this.parentElement represents the button's <li> parent
    })

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}


//property on the window called onload which is an *event handler* for the load event of window
window.onload = function() {
  onReady(); // creating app in function onReady (instead of build it out on window.onload) & call function within event handler
};
