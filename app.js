function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;
    renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }

  function renderTheUI() {

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      const delete_button = document.createElement('input');
      delete_button.type = 'button';
      delete_button.value = 'Delete';

      delete_button.addEventListener('click', event => {
        deleteToDo(toDo.id);
        renderTheUI();
        // toDoList.removeChild(newLi);
      });

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(title);
      newLi.appendChild(delete_button);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  })

  renderTheUI();
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};