let modal = new bootstrap.Modal(document.getElementById("modal"));

let newTaskButton = document.getElementById("newTaskButton");
let newTask = document.getElementById("modalTask");

newTaskButton.addEventListener("click", function(){
    newTask.innerHTML = document.getElementById("newTask").value;
});

let addTaskButton = document.getElementById("addTask");
let tbody = document.getElementById("tbody");
let list = [];

addTaskButton.addEventListener("click", function(){
    let task = document.getElementById("newTask").value;
    let priority = document.getElementById("prioritySelect").value;
    let urgency = document.getElementById("urgencySelect").value;
    let lenght = document.getElementById("lenghtSelect").value;

    let priorityText;
    let urgencyText;

    if(priority = 1){
        priorityText = "MINOR"
    } else if(priority = 2){
        priorityText = "MEDIUM"
    } else if(priority = 3){
        priorityText = "MAJOR"
    }

    if(urgency = 1){
        urgencyText = "today"
    } else if(urgency = 2){
        urgencyText = "tomorrow"
    } else if(urgency = 3){
        urgencyText = "has time"
    }
    
    let id;
    for (let i = 0; i > list.length; i++){
        id = i;
        return id;
    }
    list.push({
        id: id,
        task: task,
        priority: priority,
        urgency: urgency,
        lenght: lenght
    })

    let tr = document.createElement("tr");
    tr.innerHTML = `<td class="task"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> ${task}</td>
                    <td class="prioriry ${priorityText}">${priorityText}</td>
                    <td class="${urgencyText}">${urgencyText}</td>
                    <td>${lenght} min</td>`;
    tbody.appendChild(tr);


    if(priority = 1){
        document.getElementsByClassName('priority').style.backgroundColor = '#fff'
    } else if(priority = 2){
        priorityText = "MEDIUM"
    } else if(priority = 3){
        priorityText = "MAJOR"
    }

    if(urgency = 1){
        urgencyText = "today"
    } else if(urgency = 2){
        urgencyText = "tomorrow"
    } else if(urgency = 3){
        urgencyText = "has time"
    }

    modal.hide()
    document.getElementById("modalForm").reset();
    document.getElementById("newTask").value = "";
});

