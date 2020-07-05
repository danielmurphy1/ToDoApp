const addBtn = document.getElementById("addBtn");
const addItem = document.getElementById("addItem");
const ul = document.getElementById("list");
const error = document.getElementById("error");



const addItemToList = function(){
    if (addItem.value === ""){
        event.preventDefault();
        error.classList.remove("error");
    }else {
        error.classList.add("error");
        console.log(addItem.value);
        event.preventDefault();
        let li = document.createElement("li");
        let randomID = Math.random();
        console.log(randomID);
        li.setAttribute("id", randomID);
        let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id =  randomID;
            checkbox.name = addItem.value;
            checkbox.value = randomID;
        //li.appendChild(checkbox);
        let deleteButton = document.createElement("button");
            deleteButton.setAttribute("id", randomID);
            deleteButton.setAttribute("class", "delete-btn");
            deleteButton.textContent = "Delete";
        li.textContent = addItem.value; 
        
        li.appendChild(checkbox);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        addItem.value = "";
        const deleteBtn = document.getElementById(randomID); 
        deleteBtn.addEventListener("click", function(){
            this.remove();
        });
    }
};

addBtn.addEventListener("click", addItemToList);
