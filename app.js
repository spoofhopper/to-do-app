function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    renderTheUI();
  }

  function renderTheUI() {

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(title);
      newLi.appendChild(checkbox);
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