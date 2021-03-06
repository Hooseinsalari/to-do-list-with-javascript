const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".select")

// even
todoBtn.addEventListener("click", todoHandler);
todoList.addEventListener("click", checkORremove)
filterOption.addEventListener("click", filterTodos)
document.addEventListener("DOMContentLoaded", getLocalTodos)

// function
function todoHandler (event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    if(todoInput.value === "") {
        alert("enter")
        return
    }
    const newTodo = `
    <li>${todoInput.value}</li>
    <div class="icons">
    <span><i class="fas fa-trash-alt"></i></span>
    <span><i class="fas fa-check-square"></i></span>
    </div>`;
    
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    savedLocalTodos(todoInput.value)
    todoInput.value = "";
    
};

function checkORremove(event) {
    const classList = [...event.target.classList]
    const item = event.target.parentElement
    // console.log(item.parentElement.parentElement)
    if(classList[1] === "fa-trash-alt"){
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo)
        todo.remove()
    } else if(classList[1] === "fa-check-square"){
        const todo = item.parentElement.parentElement
        todo.classList.toggle("checked")
        console.log(todo)
    }
    
}

function filterTodos(event) {
    // console.log(event.target.value)
    const todos = [...todoList.childNodes]
    // console.log(todos)
    todos.forEach((item) => {
        switch(event.target.value){
            case "all":
                item.style.display = "flex"
                break;
            case "completed":
                if(item.className === "todo checked"){
                    item.style.display = "flex" 
                }
                else if(item.className=== "todo"){
                    item.style.display = "none"
                }
                break;
            case "uncompleted":
                if(item.className === "todo checked"){
                    item.style.display = "none" 
                }
                else if(item.className=== "todo"){
                    item.style.display = "flex"
                }
                break;
        }
    })

    
}

// Local

function savedLocalTodos (todo) {
    let savedTodos = localStorage.getItem("todos")
     ? JSON.parse(localStorage.getItem("todos"))
     : [];

    savedTodos.push(todo)
    localStorage.setItem("todos", JSON.stringify(savedTodos))
}

function getLocalTodos () {
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

    savedTodos.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = `
    <li>${todo}</li>
    <div class="icons">
    <span><i class="fas fa-trash-alt"></i></span>
    <span><i class="fas fa-check-square"></i></span>
    </div>`;
    
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos (todo) {
    console.log(todo.children[0].innerText)
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    const filterTodos = savedTodos.filter((item) => item !== todo.children[0].innerText )
    localStorage.setItem("todos", JSON.stringify(filterTodos))
}