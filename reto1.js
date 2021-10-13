let modal = new bootstrap.Modal(document.getElementById("modal"));

let newTaskButton = document.getElementById("newTaskButton");
let newTask = document.getElementById("modalTask");

newTaskButton.addEventListener("click", function(){
    newTask.innerHTML = document.getElementById("newTask").value;
});

let tbody = document.getElementById("tbody");
let list = [];

// BOTON AGREGAR NUEVAS TAREAS
let addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", function(){
    let task = document.getElementById("newTask").value;
    let priority = parseInt(document.getElementById("prioritySelect").value);
    let urgency = parseInt(document.getElementById("urgencySelect").value);
    let lenghtHours = parseInt(document.getElementById("lenghtSelectHours").value);
    let lenghtMinutes = parseInt(document.getElementById("lenghtSelectMinutes").value);
    let lenghtBreak = document.getElementById("breakSelect");
    let lenghtTotal = lenghtHours*60 + lenghtMinutes;

    let priorityText;
    let urgencyText;
    let urgencyClass;
    let lenghtHoursText;
    let lenghtMinutesText;
    let lenghtBreakText;

    if(lenghtBreak.checked){
        lenghtBreakText = "Break!"
        lenghtHoursText = "";
        lenghtHours = 0;
        lenghtMinutesText = "";
        lenghtMinutes = 0;
    } else {
        lenghtBreakText = "";

        if(lenghtHours == 0){
            lenghtHoursText = "";
        } else if(lenghtHours > 0){
            lenghtHoursText = lenghtHours+" h";
        }
    
        if(lenghtMinutes == 0){
            lenghtMinutesText = "";
        } else if(lenghtMinutes > 0){
            lenghtMinutesText = lenghtMinutes+" min";
        }
    };

    if(priority == 1){
        priorityText = "MINOR";
    } else if(priority == 2){
        priorityText = "MEDIUM"
    } else if(priority == 3){
        priorityText = "MAJOR"
    }

    if(urgency == 1){
        urgencyText = "today"
        urgencyClass = "today"
    } else if(urgency == 2){
        urgencyText = "tomorrow"
        urgencyClass = "tomorrow"
    } else if(urgency == 3){
        urgencyText = "has time"
        urgencyClass = "hasTime"
    }

    let id = list.length+1

    list.push({
        id: id,
        task: task,
        priority: priority,
        urgency: urgency,
        lenghtHours: lenghtHours,
        lenghtMinutes: lenghtMinutes,
        lenghtTotal: lenghtTotal
    })

    let tr = document.createElement("tr");
    tr.innerHTML = `<td class="task"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> ${task}</td>
                    <td class="priority"><div class="${priorityText}">${priorityText}</div></td>
                    <td><div class="urgency ${urgencyClass}">${urgencyText}</div></td>
                    <td class="lenght"><p class="hours">${lenghtHoursText}</p><p class="minutes">${lenghtMinutesText}</p><p class="break">${lenghtBreakText}</p></td>`;
    tbody.appendChild(tr);

    modal.hide()
    document.getElementById("modalForm").reset();
    document.getElementById("newTask").value = "";

    console.log(list[id-1])
});

// FILTRO POR PRIORIDAD
let priorityFilterButton = document.getElementById("priorityFilter");
priorityFilterButton.addEventListener("click", function(){
    let listPriority = [];
    let prioritySelectLenght = document.getElementById("prioritySelect").length

    for(let i = prioritySelectLenght-1; i >= 0; i--){
        let items = list.filter(task => task.priority == i);
        listPriority = listPriority.concat(items);
    }

    tbody.innerHTML = "";

    for (let i = 0; i < listPriority.length; i++) {
        
        let tr = document.createElement("tr");

        let obj = listPriority[i];
        let task = obj.task;
        let priorityText = obj.priority;
        let urgencyClass = obj.urgencyClass;
        let urgencyText = obj.urgency;
        let lenghtMinutesText;
        let lenghtHoursText;
        let lenghtBreakText;
        
        if(obj.lenghtMinutes == "0" && obj.lenghtHours == "0"){
            lenghtBreakText = "break!";
            lenghtHoursText = "";
            lenghtMinutesText = "";
        } else if(obj.lenghtHours = "0"){
            lenghtBreakText = "";
            lenghtHoursText = "";
            lenghtMinutesText = obj.lenghtMinutes;
        } else if(obj.lenghtMinutes = "0") {
            lenghtBreakText = "";
            lenghtHoursText = obj.lenghtHours;
            lenghtMinutesText = "";
        } else{
            lenghtBreakText = "";
            lenghtHoursText = obj.lenghtHours;
            lenghtMinutesText = obj.lenghtMinutes;
            }
        
        

        if(obj.priority == "1"){
            priorityText = "MINOR";
        } else if(obj.priority == "2"){
            priorityText = "MEDIUM"
        } else if(obj.priority == "3"){
            priorityText = "MAJOR"
        }
    
        if(obj.urgency == "1"){
            urgencyText = "today"
            urgencyClass = "today"
        } else if(obj.urgency == "2"){
            urgencyText = "tomorrow"
            urgencyClass = "tomorrow"
        } else if(obj.urgency == "3"){
            urgencyText = "has time"
            urgencyClass = "hasTime"
        }

        tr.innerHTML = `<td class="task"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> ${task}</td>
                        <td class="priority"><div class="${priorityText}">${priorityText}</div></td>
                        <td><div class="urgency ${urgencyClass}">${urgencyText}</div></td>
                        <td class="lenght"><p class="hours">${lenghtHoursText}</p><p class="minutes">${lenghtMinutesText}</p><p class="break">${lenghtBreakText}</p></td>`;
        tbody.appendChild(tr);
    }
});

let prueba = [
    {
        id: 1,
        lenghtHours: "0",
        lenghtMinutes: "15",
        priority: 1,
        task: "Tarea 1",
        urgency: 2,
    },
    {
        id: 2,
        lenghtHours: "1",
        lenghtMinutes: "15",
        priority: 3,
        task: "Tarea 2",
        urgency: 1,
    },
    {
        id: 3,
        lenghtHours: "2",
        lenghtMinutes: "30",
        priority: 2,
        task: "Tarea 3",
        urgency: 3,
    },
    {
        id: 4,
        lenghtHours: "0",
        lenghtMinutes: "0",
        priority: 2,
        task: "Tarea 4",
        urgency: 3,
    },
    {
        id: 5,
        lenghtHours: "0",
        lenghtMinutes: "15",
        priority: 3,
        task: "Tarea 5",
        urgency: 2,
    },
    {
        id: 6,
        lenghtHours: "0",
        lenghtMinutes: "30",
        priority: 3,
        task: "Tarea 6",
        urgency: 1,
    },
    {
        id: 7,
        lenghtHours: "0",
        lenghtMinutes: "0",
        priority: 1,
        task: "Tarea 7",
        urgency: 1,
    },
    {
        id: 8,
        lenghtHours: "0",
        lenghtMinutes: "20",
        priority: 3,
        task: "Tarea 8",
        urgency: 1,
    },
    {
        id: 9,
        lenghtHours: "0",
        lenghtMinutes: "15",
        priority: 2,
        task: "Tarea 9",
        urgency: 3,
    },
]
// FILTRO POR URGENCIA
let urgencyFilterButton = document.getElementById("urgencyFilter");
urgencyFilterButton.addEventListener("click", function(){
    let listUrgency = [];
    let urgencySelectLenght = document.getElementById("urgencySelect").length

    for(let i = 1; i < urgencySelectLenght; i++){
        let items = list.filter(task => task.urgency == i);
        listUrgency = listUrgency.concat(items);
    }

    tbody.innerHTML = "";

    for (let i = 0; i < listUrgency.length; i++) {
        
        let tr = document.createElement("tr");

        let obj = listUrgency[i];
        let task = obj.task;
        let priorityText = obj.priority;
        let urgencyClass = obj.urgencyClass;
        let urgencyText = obj.urgency;
        let lenghtMinutesText;
        let lenghtHoursText;
        let lenghtBreakText;
        
        if(obj.lenghtMinutes == "0" && obj.lenghtHours == "0"){
            lenghtBreakText = "break!";
            lenghtHoursText = "";
            lenghtMinutesText = "";
        } else if(obj.lenghtHours = "0"){
            lenghtBreakText = "";
            lenghtHoursText = "";
            lenghtMinutesText = obj.lenghtMinutes;
        } else if(obj.lenghtMinutes = "0") {
            lenghtBreakText = "";
            lenghtHoursText = obj.lenghtHours;
            lenghtMinutesText = "";
        } else{
            lenghtBreakText = "";
            lenghtHoursText = obj.lenghtHours;
            lenghtMinutesText = obj.lenghtMinutes;
            }
        
        

        if(obj.priority == "1"){
            priorityText = "MINOR";
        } else if(obj.priority == "2"){
            priorityText = "MEDIUM"
        } else if(obj.priority == "3"){
            priorityText = "MAJOR"
        }
    
        if(obj.urgency == "1"){
            urgencyText = "today"
            urgencyClass = "today"
        } else if(obj.urgency == "2"){
            urgencyText = "tomorrow"
            urgencyClass = "tomorrow"
        } else if(obj.urgency == "3"){
            urgencyText = "has time"
            urgencyClass = "hasTime"
        }

        tr.innerHTML = `<td class="task"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> ${task}</td>
                        <td class="priority"><div class="${priorityText}">${priorityText}</div></td>
                        <td><div class="urgency ${urgencyClass}">${urgencyText}</div></td>
                        <td class="lenght"><p class="hours">${lenghtHoursText}</p><p class="minutes">${lenghtMinutesText}</p><p class="break">${lenghtBreakText}</p></td>`;
        tbody.appendChild(tr);
    }
});