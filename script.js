const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-1-12",
  },
  {
    name: "wash dishes",
    dueDate: "2024-1-12",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    // const dueDate = todoObject.dueDate
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name} </div>
      <div> ${dueDate} </div>
       <button class="delete-button" onclick="
         todoList.splice(${i}, 1);
          renderTodoList();

      "> Delete </button> `;
        
 // Dodaje je se sve to u niz (TodoList)
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  let name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}
