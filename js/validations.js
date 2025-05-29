// validations.js

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
