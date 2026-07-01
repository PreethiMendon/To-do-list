const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Toggle complete
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});