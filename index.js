document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = form.querySelector("input");
    const taskList = document.createElement("ul");

    form.appendChild(taskList);


    function addTask(taskContent) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        taskText.textContent = taskContent;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("complete-btn");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        completeButton.addEventListener("click", () => {
            taskText.classList.toggle("completed");
        });

        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskContent = input.value.trim();
        if (taskContent) {
            addTask(taskContent);
            input.value = "";
        }
    });
});