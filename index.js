"use strict";

const subject = document.getElementById("subject");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const staatus = document.getElementById("staatus");

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click',(e) => {
    e.preventDefault();
    add();
});

function add() {
    let subjectValue = subject.value;
    let priorityValue = priority.value;
    let dueDateValue = dueDate.value;
    let statusValue = staatus.value;

    if (subjectValue != "" && priorityValue != 0 && dueDateValue != "" && statusValue != 0) {
        // table
        const table = document.getElementById("table");

        // tbody
        const tbody = document.getElementById("tbody");

        // visability
        if (tbody.childNodes.length==0){
            table.style.display = "grid";
        }

        // row  
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        // subject with toggle
        const td_subject = document.createElement("td");
        const td_subjectToggle = document.createElement("button");
        td_subjectToggle.setAttribute("type", "button");
        td_subjectToggle.setAttribute("id", "subjectTrigger");
        td_subjectToggle.setAttribute("class", "subjectTrigger");
        td_subjectToggle.textContent = subjectValue;
        td_subject.appendChild(td_subjectToggle);
        tr.appendChild(td_subject);
        subject.value = "";

        // toggle === strikethrough
        td_subjectToggle.addEventListener('click',()=>{
            if(td_subjectToggle.style.textDecoration === "none"){
                td_subjectToggle.style.textDecoration = "line-through";
            }else{
                td_subjectToggle.style.textDecoration = "none";
            }
        });

        // priority
        const td_priority = document.createElement("td");
        let p_priority;
        switch (priorityValue) {
            case 'Low':
                p_priority = document.createElement("p");
                p_priority.setAttribute("class", "lowPriority");
                p_priority.textContent = priorityValue;
                td_priority.appendChild(p_priority);
                break;
            case 'Avarage':
                p_priority = document.createElement("p");
                p_priority.setAttribute("class", "avaragePriority");
                p_priority.textContent = priorityValue;
                td_priority.appendChild(p_priority);
                break;
            case 'High':
                p_priority = document.createElement("p");
                p_priority.setAttribute("class", "highPriority");
                p_priority.textContent = priorityValue;
                td_priority.appendChild(p_priority);
                break;
        }
        tr.appendChild(td_priority);
        priority.value = "Choose one. ..";
        
        // due date
        const td_dueDate = document.createElement("td");
        td_dueDate.textContent = dueDateValue;
        tr.appendChild(td_dueDate);
        dueDate.value = "";
        
        // status & percent completed
        const td_status = document.createElement("td");
        const td_percentComplete = document.createElement("td");
        let p_status;
        let p_percentComplete;
        switch (statusValue) {
            case 'New':
                p_status = document.createElement("p");
                p_percentComplete = document.createElement("p");
                p_status.setAttribute("class", "newStatus");
                p_percentComplete.setAttribute("class", "newStatus");
                p_status.textContent = statusValue;
                p_percentComplete.textContent = "0%";
                td_status.appendChild(p_status);
                td_percentComplete.appendChild(p_percentComplete);
                break;
            case 'Started':
                p_status = document.createElement("p");
                p_percentComplete = document.createElement("p");
                p_status.setAttribute("class", "startedStatus");
                p_percentComplete.setAttribute("class", "startedStatus");
                p_status.textContent = statusValue;
                p_percentComplete.textContent = "25%";
                td_status.appendChild(p_status);
                td_percentComplete.appendChild(p_percentComplete);
                break;
            case 'In progress':
                p_status = document.createElement("p");
                p_percentComplete = document.createElement("p");
                p_status.setAttribute("class", "inProgressStatus");
                p_percentComplete.setAttribute("class", "inProgressStatus");
                p_status.textContent = statusValue;
                p_percentComplete.textContent = "50%";
                td_status.appendChild(p_status);
                td_percentComplete.appendChild(p_percentComplete);
                break;
            case 'Nearly complete':
                p_status = document.createElement("p");
                p_percentComplete = document.createElement("p");
                p_status.setAttribute("class", "nearlyCompleteStatus");
                p_percentComplete.setAttribute("class", "nearlyCompleteStatus");
                p_status.textContent = statusValue;
                p_percentComplete.textContent = "75%";
                td_status.appendChild(p_status);
                td_percentComplete.appendChild(p_percentComplete);
                break;
            case 'Complete':
                p_status = document.createElement("p");
                p_percentComplete = document.createElement("p");
                p_status.setAttribute("class", "completeStatus");
                p_percentComplete.setAttribute("class", "completeStatus");
                p_status.textContent = statusValue;
                p_percentComplete.textContent = "100%";
                td_status.appendChild(p_status);
                td_percentComplete.appendChild(p_percentComplete);
                break;                              
        }
        tr.appendChild(td_status);
        tr.appendChild(td_percentComplete);
        staatus.value = "Choose one. ..";

        // modified on
        const td_modified = document.createElement("td");
        let today = new Date();
        td_modified.textContent = today.toDateString();
        tr.appendChild(td_modified);

        // remove button
        const td_remove = document.createElement("td");
        const remove_button = document.createElement("button");
        remove_button.setAttribute("type", "button");
        remove_button.setAttribute("id", "removeButton");
        remove_button.setAttribute("class", "removeButton");
        remove_button.textContent = "Remove";
        tr.appendChild(td_remove);
        td_remove.appendChild(remove_button);
        remove_button.addEventListener('click', (e)=>{
            e.preventDefault;
            remove(e.target.parentNode.parentNode)
        });

    } else {

        alert("Please fill in all the fields.")

    }

}

function remove(row) {
    tbody.removeChild(row);
    if (tbody.childNodes.length==0){
        table.style.display = "none";
    }
}


