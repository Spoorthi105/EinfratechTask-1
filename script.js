function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `<span>${taskInput.value}</span>
                    <span>
                        <span class="edit" onclick="editTask(this)">✏️</span>
                        <span class="delete" onclick="deleteTask(this)">❌</span>
                    </span>`;
    taskList.appendChild(li);
    taskInput.value = "";
}

function editTask(element) {
    let newText = prompt("Edit task:", element.parentElement.previousElementSibling.textContent);
    if (newText !== null) {
        element.parentElement.previousElementSibling.textContent = newText;
    }
}

function deleteTask(element) {
    element.parentElement.parentElement.remove();
}