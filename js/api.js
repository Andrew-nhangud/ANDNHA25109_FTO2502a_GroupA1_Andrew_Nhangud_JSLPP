// api.js

/**
 * Fetches tasks from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of tasks.
 */
export async function fetchTasksFromAPI() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; // Return an empty array in case of error
  }
}
