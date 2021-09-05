let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', function() {

  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  };

  todoList.push(newTodo);
  displayMessages()
});

function displayMessages() {
  let displayMessage = '';
  todoList.forEach(function(item, index) {
    displayMessage += `
    <li>
      <input type='checkbox' id='item_${index}'>
      <label for='item_${index}'>${item.todo}</label>
    </li>
    `; 
    todo.innerHTML = displayMessage;
  });
}