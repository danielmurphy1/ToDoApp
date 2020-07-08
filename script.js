
const addBtn = document.getElementById("addBtn");
const addItem = document.getElementById("addItem");
const ul = document.getElementById("list");
const error = document.getElementById("error");
let toDoList = [];


addBtn.addEventListener("click",  function(){
    if (addItem.value === ""){
        event.preventDefault();
        error.classList.remove("hidden");
    }else {
        error.classList.add("hidden");
        console.log(addItem.value);
        event.preventDefault();
        let li = document.createElement("li");
        let listItemID = Math.random();
        li.setAttribute("id", listItemID);
        let liText = document.createTextNode(addItem.value);

        let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            
        
        let deleteButton = document.createElement("button");
            deleteButton.classList.add("hidden");
            deleteButton.textContent = "Delete";
      
       
        
        li.appendChild(checkbox);
        li.appendChild(liText);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        
        
        const toDoItem = {
            id: listItemID, 
            text: addItem.value,
        };
        addItem.value = "";
        toDoList.push(toDoItem);
          


         
         window.localStorage.setItem('user', JSON.stringify(toDoList));
        

     

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

    
});

window.onload = function(){
    toDoList = JSON.parse(window.localStorage.getItem('user')) || [];
    for (let i = 0; i < toDoList.length; i++){
        console.log(toDoList[i]);
        
        

        let li = document.createElement("li");
        let listItemID = toDoList[i]["id"];
        li.setAttribute("id", listItemID);
        let liText = document.createTextNode(toDoList[i]["text"]);


        let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
           

        let deleteButton = document.createElement("button");
            deleteButton.classList.add("hidden");
            deleteButton.textContent = "Delete";

        
        li.appendChild(checkbox);
        li.appendChild(liText);
        li.appendChild(deleteButton);
        ul.appendChild(li);

        
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


