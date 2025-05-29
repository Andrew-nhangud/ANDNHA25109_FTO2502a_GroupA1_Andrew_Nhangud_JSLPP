// priority.js

// Define the priority order
const priorityOrder = { high: 1, medium: 2, low: 3 };

// Function to get the priority value from a dropdown
export function getPriorityValue(dropdownId) {
  return document.getElementById(dropdownId).value;
}

// Function to sort tasks based on priority
export function sortTasksByPriority(tasks) {
  return tasks.sort((a, b) => {
    if (a.status === b.status) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return a.status.localeCompare(b.status);
  });
}
