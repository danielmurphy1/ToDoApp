const addBtn = document.getElementById("addBtn");
const addItem = document.getElementById("addItem");
const ul = document.getElementById("list");
const error = document.getElementById("error");
//let toDoList = [];



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
        addItem.value = "";

        //toDoList.push(li);
          


         
         //window.localStorage.setItem('user2', JSON.stringify(toDoList));
        

        const deleteBtn = document.getElementById(deleteID); 
        deleteBtn.addEventListener("click", function(){
            li.remove();
            // const index = toDoList.indexOf(li);
            // if (index > -1){
            //     toDoList.splice(index, 1);
            // }
            
            // window.localStorage.setItem('user', JSON.stringify(toDoList));
           

        });
       

        checkbox.addEventListener("click",function(){
            deleteButton.classList.toggle("hidden");
            li.classList.toggle("complete");
        });
        
        
    }

    
};

// window.onload = function(){
//     toDoList = JSON.parse(window.localStorage.getItem('user'));
//     for (let i = 0; i < toDoList.length; i++){
//         console.log(toDoList[i]);
//         let li = document.createElement("li");
//         li.innerHTML = toDoList[i];
//         ul.appendChild(li);
//     }
// }


addBtn.addEventListener("click", addItemToList);



