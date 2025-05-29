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
import { validateForm } from "./js/validations.js";

// Initialize the theme when the script loads
initializeTheme();

// Ensure validation logic is applied when editing a task
document.getElementById("saveEdit").onclick = function () {
  let isValid = validateForm("editTaskModal", [
    {
      fieldId: "editTitle",
      errorId: "editTitleError",
      message: "Title is required.",
    },
    {
      fieldId: "editDescription",
      errorId: "editDescriptionError",
      message: "Description is required.",
    },
  ]);

  if (isValid) {
    saveEdit(); // Call the saveEdit function directly
  }
};

// Add event listener for saving new tasks
document.getElementById("saveNewTask").onclick = function () {
  const isValid = validateForm("addTaskModal", [
    {
      fieldId: "newTitle",
      errorId: "newTitleError",
      message: "Title is required.",
    },
    {
      fieldId: "newDescription",
      errorId: "newDescriptionError",
      message: "Description is required.",
    },
  ]);

  if (isValid) {
    saveNewTask(); // Call the saveNewTask function directly
  }
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
