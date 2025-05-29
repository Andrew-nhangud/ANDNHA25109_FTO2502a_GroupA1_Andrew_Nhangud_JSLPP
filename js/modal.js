// modal.js

import {
  renderTasks,
  updateTask,
  addTask,
  deleteTask as deleteTaskFromTasks,
  getTasks,
} from "./tasks.js";
import { getPriorityValue } from "./priority.js"; // Import the function

// Opens the edit modal for a specific task
function openEditModal(task) {
  // Populate the modal fields with the task data
  document.getElementById("editTitle").value = task.title;
  document.getElementById("editDescription").value = task.description;
  document.getElementById("editStatus").value = task.status; // Set the current status
  document.getElementById("editPriority").value = task.priority; // Set the current priority
  document.getElementById("editTaskModal").style.display = "block";

  // Store the task ID in a global variable for later use
  window.currentEditingTaskId = task.id;

  // Set up the delete button to delete the task
  document.getElementById("deleteTask").onclick = () => deleteTask(task.id);
}

// Saves a new task to the task list
function saveNewTask() {
  const newTaskId = getTasks().length
    ? Math.max(...getTasks().map((t) => t.id)) + 1
    : 1;
  const newTask = {
    id: newTaskId,
    title: document.getElementById("newTitle").value,
    description: document.getElementById("newDescription").value,
    status: document.getElementById("newStatus").value,
    priority: getPriorityValue("addPriority"), // Get the selected priority
  };

  // Use the addTask function from tasks.js
  addTask(newTask);
  document.getElementById("addTaskModal").style.display = "none";
  renderTasks();
}

// Saves the edited task details
function saveEdit() {
  const taskId = window.currentEditingTaskId; // Use the stored task ID

  const updatedTask = {
    id: taskId,
    title: document.getElementById("editTitle").value,
    description: document.getElementById("editDescription").value,
    status: document.getElementById("editStatus").value, // Get the selected status
    priority: getPriorityValue("editPriority"), // Get the selected priority
  };

  // Update the task using the new function
  updateTask(updatedTask);
  document.getElementById("editTaskModal").style.display = "none"; // Close the modal
  renderTasks(); // Re-render the tasks
}

// Deletes a task by its ID
function deleteTask(taskId) {
  // Use the deleteTask function from tasks.js
  deleteTaskFromTasks(taskId);
  document.getElementById("editTaskModal").style.display = "none"; // Close the modal
  renderTasks(); // Re-render the tasks to reflect the deletion
}

// Opens the modal to add a new task
function openAddTaskModal() {
  document.getElementById("newTitle").value = "";
  document.getElementById("newDescription").value = "";
  document.getElementById("newStatus").value = "todo";
  document.getElementById("addPriority").value = "medium"; // Default priority
  document.getElementById("addTaskModal").style.display = "block";
}

// Close modals
function closeEditModal() {
  document.getElementById("editTaskModal").style.display = "none";
}

function closeAddModal() {
  document.getElementById("addTaskModal").style.display = "none";
}

// Event listeners for saving tasks
document.getElementById("saveEdit").onclick = saveEdit;
document.getElementById("saveNewTask").onclick = saveNewTask;

// Event listeners for closing modals
document.getElementById("closeEditModal").onclick = closeEditModal;
document.getElementById("closeAddModal").onclick = closeAddModal;

// Event listener to open the add task modal
document
  .getElementById("addTaskButton")
  .addEventListener("click", openAddTaskModal);
document
  .getElementById("mobileAddTaskButton")
  .addEventListener("click", openAddTaskModal);

export {
  openEditModal,
  saveEdit,
  deleteTask, // Keep this for the delete button in the edit modal
  openAddTaskModal,
  saveNewTask,
  closeEditModal,
  closeAddModal,
};
