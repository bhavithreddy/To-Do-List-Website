const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const categorySelect = document.getElementById("category-select");

// Add Task
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  const category = categorySelect.value;

  if (taskText !== "") {
    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = `${taskText} [${category}]`;
    taskSpan.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
    categorySelect.value = "";
  }
});

// Delete Task
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
  }
});

// Initialize Calendar
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    dateClick: function (info) {
      const taskText = prompt("Enter task for " + info.dateStr);
      if (taskText) {
        calendar.addEvent({
          title: taskText,
          start: info.dateStr,
        });
      }
    },
  });
  calendar.render();
});
