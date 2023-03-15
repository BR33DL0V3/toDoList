//To Do List 
let todoItems = ['Buy milk', 'Call the dentist', 'Pay bills'];

// Display To Do List Function

function displayTodoItems() {
  let todoList = document.getElementById('todoList');
  
  // Clear the list before adding items
  todoList.innerHTML = '';
  
  // Add each item as a list item
  for (let i = 0; i < todoItems.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = todoItems[i];
    todoList.appendChild(listItem);
  }
}

displayTodoItems();

// Add New To Do Item Function
function addTodoItem(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  
  let todoItemInput = document.getElementsByName('todoItem')[0];
  let todoItemValue = todoItemInput.value.trim();
  
  // Only add the item if it's not empty
  if (todoItemValue !== '') {
    todoItems.push(todoItemValue);
    todoItemInput.value = '';
    displayTodoItems();
  }
}


//Add event listener to sumbit form
let todoForm = document.getElementsByTagName('form')[0];
todoForm.addEventListener('submit', addTodoItem);


// Add Edit or Delete To Do Item Function
function editTodoItem(index, newValue) {
  todoItems[index] = newValue;
  displayTodoItems();
}

function deleteTodoItem(index) {
  todoItems.splice(index, 1);
  displayTodoItems();
}

// Add Edit and Delete Buttons
function displayTodoItems() {
  let todoList = document.getElementById('todoList');
  
  // Clear the list before adding items
  todoList.innerHTML = '';
  
  // Add each item as a list item with edit and delete buttons
  for (let i = 0; i < todoItems.length; i++) {
    let listItem = document.createElement('li');
    let itemText = document.createElement('span');
    itemText.textContent = todoItems[i];
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      let newValue = prompt('Enter a new value for this item:', todoItems[i]);
      if (newValue !== null) {
        editTodoItem(i, newValue.trim());
      }
    });
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteTodoItem(i);
    });
    listItem.appendChild(itemText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }
}

