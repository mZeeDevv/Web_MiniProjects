function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
