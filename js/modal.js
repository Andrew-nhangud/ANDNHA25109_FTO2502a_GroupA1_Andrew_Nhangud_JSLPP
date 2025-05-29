// modal.js

import {
  renderTasks,
  updateTask,
  addTask,
  deleteTask as deleteTaskFromTasks,
  getTasks,
} from "./tasks.js";
import { getPriorityValue } from "./priority.js"; // Import the function
import { validateTaskForm } from "./validations.js";

let taskToDelete = null;

/**
 * Opens the edit modal for a specific task.
 * Populates the modal fields with the task data.
 * @param {Object} task - The task to edit.
 */
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
  document.getElementById("deleteTask").onclick = () =>
    showConfirmationModal(task.id);
}

// Shows a notification message
function showNotification(message) {
  const notificationModal = document.getElementById("notificationModal");
  const notificationMessage = document.getElementById("notificationMessage");

  notificationMessage.textContent = message;
  notificationModal.style.display = "block";

  setTimeout(() => {
    notificationModal.style.display = "none";
  }, 2000); // Hide after 2 seconds
}

/**
 * Saves a new task to the task list.
 * Validates the task form inputs.
 */
function saveNewTask() {
  const title = document.getElementById("newTitle").value;
  const description = document.getElementById("newDescription").value;

  const errors = validateTaskForm(title, description);

  if (Object.keys(errors).length > 0) {
    document.getElementById("newTitleError").textContent = errors.title || "";
    document.getElementById("newDescriptionError").textContent =
      errors.description || "";
    return;
  }

  const newTaskId = getTasks().length
    ? Math.max(...getTasks().map((t) => t.id)) + 1
    : 1;
  const newTask = {
    id: newTaskId,
    title,
    description,
    status: document.getElementById("newStatus").value,
    priority: getPriorityValue("addPriority"), // Get the selected priority
  };

  // Use the addTask function from tasks.js
  addTask(newTask);
  document.getElementById("addTaskModal").style.display = "none";
  renderTasks();
  showNotification("Task Added");
}

/**
 * Saves the edited task details.
 */
function saveEdit() {
  const title = document.getElementById("editTitle").value;
  const description = document.getElementById("editDescription").value;

  const errors = validateTaskForm(title, description);

  if (Object.keys(errors).length > 0) {
    document.getElementById("editTitleError").textContent = errors.title || "";
    document.getElementById("editDescriptionError").textContent =
      errors.description || "";
    return;
  }

  const taskId = window.currentEditingTaskId; // Use the stored task ID

  const updatedTask = {
    id: taskId,
    title,
    description,
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
  showNotification("Task Removed");
}

function showConfirmationModal(taskId) {
  taskToDelete = taskId;
  const confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "block";
}

function hideConfirmationModal() {
  const confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "none";
  taskToDelete = null;
}

function confirmDeleteTask() {
  if (taskToDelete !== null) {
    deleteTaskFromTasks(taskToDelete);
    renderTasks();
    showNotification("Task Removed");
  }
  document.getElementById("editTaskModal").style.display = "none"; // Close the edit modal
  hideConfirmationModal();
}

function setupConfirmationModal() {
  document.getElementById("confirmDelete").onclick = confirmDeleteTask;
  document.getElementById("cancelDelete").onclick = hideConfirmationModal;
}

// Call setupConfirmationModal when the page loads
setupConfirmationModal();

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
