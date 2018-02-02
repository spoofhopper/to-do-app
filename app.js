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

    //WHY IS THIS LINE NECESSARY?
    // newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    // WHY IS THIS LINE NECESSARY?
    // const toDoList = document.getElementById('toDoList');

    //this line was not explained correctly in the directions - the directions referenced `newLi` but really meant `toDoList` per the instructions
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      //in the instuctions this constant is named both newToDo and newLi, needs to be fixed
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      toDoList.appendChild(newLi);

      //this line was missing from the exercise
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