function getById(id){
    return document.getElementById(id);
}
const addNewBtn = getById("addNewBtn");
const newTaskInp = getById("newTaskInp");
const task_list = getById("task_list");

addNewBtn.addEventListener("click", function(){
    const taskValue = newTaskInp.value;
    if(!taskValue){
        alert("Please enter the value!!");
        return;
    }
    else if(taskValue >= 0){
        alert("This is not correct value!!");
        return;
    }else{
        newTaskInp.value = "";
    }
    
   addNewItem(taskValue)
})
function addNewItem(task){
    const newDiv = document.createElement("div");
    newDiv.className = "item";
    newDiv.innerHTML = `
                    <li>${task}</li>
                    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="completed"><i class="fa-solid fa-check"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    `;
    task_list.appendChild(newDiv)
}

task_list.addEventListener("click", function(event){
    if(event.target.className == "delete"){
        deleteItem(event)
    }else if(event.target.className == "completed"){
        completeTask(event)
    }else if(event.target.className == "edit"){
        editTaskName(event)
    }
})
//delete
function deleteItem(e){
    e.target.parentElement.remove()
}
//completed
function completeTask(e){
   const li = e.target.parentElement.firstElementChild;
   li.classList.toggle("completed_task")
}
//edit task name
function editTaskName(e){
    const editLi = e.target.parentElement.firstElementChild;
    const previousText = editLi.innerText;
    editLi.innerHTML = "";
    //creating new input field for edit
    const input = document.createElement("input");
    input.type = "text";
    input.value = previousText;
    input.addEventListener("keypress", function(event){
        if(event.key == "Enter"){
            const modifiedValue = event.target.value;
            editLi.innerHTML = "";
            editLi.innerText = modifiedValue;
            event.target.style.display = "inline"
        }
       
    })
    editLi.appendChild(input);
    e.target.style.display = "none"

}