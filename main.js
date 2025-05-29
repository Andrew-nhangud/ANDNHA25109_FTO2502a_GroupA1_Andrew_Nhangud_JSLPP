import { initializeTheme } from "./js/theme.js";
import {
  hideSidebarButton,
  unhideSidebarButton,
  sidebar,
} from "./js/sidebar.js";
import {
  saveEdit,
  saveNewTask,
  openAddTaskModal,
  closeEditModal,
  closeAddModal,
} from "./js/modal.js";
import { renderTasks } from "./js/tasks.js";

// Initialize the theme when the script loads
initializeTheme();

// Remove validation logic for editing a task
document.getElementById("saveEdit").onclick = function () {
  saveEdit(); // Call the saveEdit function directly
};

// Remove validation logic for saving new tasks
document.getElementById("saveNewTask").onclick = function () {
  saveNewTask(); // Call the saveNewTask function directly
};

// Add event listener to close modals
document.getElementById("closeEditModal").onclick = closeEditModal;
document.getElementById("closeAddModal").onclick = closeAddModal;

// Add event listener to open the add task modal
document
  .getElementById("addTaskButton")
  .addEventListener("click", openAddTaskModal);
document
  .getElementById("mobileAddTaskButton")
  .addEventListener("click", openAddTaskModal);

// Initial render
renderTasks();
