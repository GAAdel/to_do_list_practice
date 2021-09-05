let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');

let todoList = [];

addButton.addEventListener('click', function() {

  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  };

  todoList.push(newTodo);
});
