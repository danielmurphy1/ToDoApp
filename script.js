const addBtn = document.getElementById("addBtn");
const addItem = document.getElementById("addItem");
const ul = document.getElementById("list");
const error = document.getElementById("error");
let toDoList = [];



const addItemToList = function(){
    if (addItem.value === ""){
        event.preventDefault();
        error.classList.remove("hidden");
    }else {
        error.classList.add("hidden");
        console.log(addItem.value);
        event.preventDefault();
        let li = document.createElement("li");
        let listItemID = Math.random();
        let checkboxID = Math.random();
        let deleteID = Math.random();
        console.log(listItemID);
        li.setAttribute("id", listItemID);
        let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id =  checkboxID;
            checkbox.name = addItem.value;
            checkbox.value = checkboxID;
        
        let deleteButton = document.createElement("button");
            deleteButton.setAttribute("id", deleteID);
            deleteButton.setAttribute("class", "delete-btn");
            deleteButton.classList.add("hidden");
            deleteButton.textContent = "Delete";
      
       let liText = document.createTextNode(addItem.value);
        
        li.appendChild(checkbox);
        li.appendChild(liText);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        
        
        
        //debugger;
        const toDoItem = {
            id: listItemID, 
            text: addItem.value,
        };
        addItem.value = "";
        toDoList.push(toDoItem);
          


         
         window.localStorage.setItem('user', JSON.stringify(toDoList));
        

        //const deleteBtn = document.getElementById(deleteID); 

        deleteButton.addEventListener("click", function(){
            li.remove();
            const index = toDoList.indexOf(toDoItem);
            if (index > -1){
                toDoList.splice(index, 1);
            }
            
            window.localStorage.setItem('user', JSON.stringify(toDoList));
           

        });
       

        checkbox.addEventListener("click",function(){
            deleteButton.classList.toggle("hidden");
            li.classList.toggle("complete");
        });
        
        
    }

    
};

window.onload = function(){
    toDoList = JSON.parse(window.localStorage.getItem('user')) || [];
    for (let i = 0; i < toDoList.length; i++){
        console.log(toDoList[i]);
        
        //create an li element based on the current todo element looping through

        let li = document.createElement("li");
        let listItemID = toDoList[i]["id"];
        li.setAttribute("id", listItemID);
        let liText = document.createTextNode(toDoList[i]["text"]);
        let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            //checkbox.id =  checkboxID;
            checkbox.name = toDoList[i]["text"];
            //checkbox.value = checkboxID;

        let deleteButton = document.createElement("button");
            //deleteButton.setAttribute("id", deleteID);
            deleteButton.setAttribute("class", "delete-btn");
            deleteButton.classList.add("hidden");
            deleteButton.textContent = "Delete";

        //debugger;
        li.appendChild(checkbox);
        li.appendChild(liText);
        li.appendChild(deleteButton);
        ul.appendChild(li);

        //const deleteBtn = document.getElementById(deleteID); 
       
        //debugger;
        deleteButton.addEventListener("click", function(){
            li.remove();
          
            const index = toDoList.findIndex(item => item.id === listItemID);
            if (index > -1){
                toDoList.splice(index, 1);
            }
            
            window.localStorage.setItem('user', JSON.stringify(toDoList));
           

        });    

        checkbox.addEventListener("click",function(){
            deleteButton.classList.toggle("hidden");
            li.classList.toggle("complete");
        });
    }
}


addBtn.addEventListener("click", addItemToList);



