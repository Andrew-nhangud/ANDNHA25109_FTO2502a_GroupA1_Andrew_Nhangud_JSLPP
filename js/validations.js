// validations.js

// Add validation logic for forms
function validateForm(formId, errorMessages) {
  const form = document.getElementById(formId);
  let isValid = true;

  errorMessages.forEach(({ fieldId, errorId, message }) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
      if (!field.value.trim()) {
        errorElement.textContent = message;
        isValid = false;
      } else {
        errorElement.textContent = "";
      }
    }
  });

  return isValid;
}

export { validateForm };
