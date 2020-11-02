const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click",  function(event){
    const todoTextInput = document.getElementById("todo-text-input");
    const error = document.getElementById("error");

    event.preventDefault();

    if (todoTextInput.value === ""){
        error.classList.remove("hidden");
        return;
    }

    error.classList.add("hidden");

    const toDoItem = {
        id: Math.random(), 
        text: todoTextInput.value,
    };

    renderToDoItem(toDoItem);

    todoTextInput.value = "";

    const toDoList = JSON.parse(window.localStorage.getItem('user')) || [];
    toDoList.push(toDoItem);

    window.localStorage.setItem('user', JSON.stringify(toDoList));   
});

function createLiElement(toDoItem){
    let li = document.createElement("li");

    li.setAttribute("id", toDoItem.id);

    return li;
}

function createCheckbox(li, deleteButton) {
    let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

    checkbox.addEventListener("click",function(){
        deleteButton.classList.toggle("hidden");
        li.classList.toggle("complete");        
    }); 

        return checkbox;
}

function createDeleteButton(li, toDoItem){
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("hidden");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function(){
        li.remove();
        const toDoList = JSON.parse(window.localStorage.getItem('user')) || [];
        const index = toDoList.findIndex(item => item.id === toDoItem.id);
        if (index > -1){
            toDoList.splice(index, 1);
        }
        
        window.localStorage.setItem('user', JSON.stringify(toDoList));
    }); 

    return deleteButton;
}

function renderToDoItem(toDoItem){
    const li = createLiElement(toDoItem);

        let deleteButton = createDeleteButton(li, toDoItem);

        let checkbox = createCheckbox(li, deleteButton);

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(toDoItem["text"]));
        li.appendChild(deleteButton);
        const ul = document.getElementById("list");
        ul.appendChild(li);
}

window.onload = function(){
    const toDoList = JSON.parse(window.localStorage.getItem('user')) || [];
    for (let i = 0; i < toDoList.length; i++){
        renderToDoItem(toDoList[i]);
    }
}
