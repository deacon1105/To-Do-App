const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoList =document.getElementById('todo-list');

let allTodos =[];

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

    function addTodo(){
        const todoText = todoInput.value.trim();
        if(todoText.length>0){
            allTodos.push(todoText);
            updateTodoList();
            todoInput.value="";
        }
    }

function updateTodoList(){
    todoList.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
      todoItem = createTodoItem(todo, todoIndex);
      todoList.append(todoItem);
    })
}

function createTodoItem(todo, todoIndex){
    const todoId = "todo-" + todoIndex;
   const todoLI = document.createElement("li");
   todoLI.className = "todo";
   todoLI.innerHTML = `
  <input type="checkbox" id="${todoId}" />
          <label class="custom-checkbox" for="${todoId}"
            ><svg fill ="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
          </label>
          <label for="${todoId}" class="todo-text"
            >${todo}</label
          >
          <button class="delete-btn">
            <img
              src="./Icons/delete_24dp_D9D9D9_FILL0_wght400_GRAD0_opsz24.svg" alt="Delete Icon"
            />
          </button>
   `
   const deleteButton = todoLI.querySelector(".delete-btn");
   deleteButton.addEventListener("click", ()=>{
    deleteTodoItem(todoIndex);
   })
    return todoLI;
}

function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_, i) => i!== todoIndex);
    updateTodoList();
}