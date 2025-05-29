// validations.js

/**
 * Validates the task form inputs.
 * @param {string} title - The title of the task.
 * @param {string} description - The description of the task.
 * @returns {Object} An object containing validation errors.
 */
export function validateTaskForm(title, description) {
  const errors = {};

  if (!title || title.trim() === "") {
    errors.title = "Title is required.";
  } else if (title.length > 50) {
    errors.title = "Title cannot exceed 50 characters.";
  }

  if (!description || description.trim() === "") {
    errors.description = "Description is required.";
  } else if (description.length > 200) {
    errors.description = "Description cannot exceed 200 characters.";
  }

  return errors;
}
