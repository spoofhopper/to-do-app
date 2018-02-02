function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //  get the text
    let title = newToDoText.value;

    //  create a new li
    let newLi = document.createElement('li');

    //  create a new input
    let checkbox = document.createElement('input');

    //  set the input's type to checkbox
    checkbox.type = 'checkbox';

    //  create a delete button
    let delete_button = document.createElement('input');

    //  set the delete_button's type to button
    delete_button.type = 'button';
    delete_button.value = 'Delete';

    // add delete functionality to delete_button
    delete_button.addEventListener('click', event => {
      toDoList.removeChild(newLi);
    });

    //  set the title
    newLi.textContent = title;

    //  attach the checkbox to the li
    newLi.appendChild(checkbox);

    //  attach the Delete button to the li
    newLi.appendChild(delete_button);

    //  attach the li to the ul
    toDoList.appendChild(newLi);

    //  empty the input
    newToDoText.value = '';
  });
}



window.onload = function() {
  alert("The window has loaded!");
  onReady();
};