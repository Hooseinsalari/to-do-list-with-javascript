const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");

// even
todoBtn.addEventListener("click", todoHandler);
todoList.addEventListener("click", checkORremove)

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
    todoInput.value = "";
};

function checkORremove(event) {

    console.log(event.target.child)
    const item = event.target.parentElement
    if(event.target.classList[1] === "fa-trash-alt"){
        const todo = item.parentElement.parentElement
        todo.remove()
    }
    else if(event.target.classList[1] === "fa-check-square"){

    }
}

