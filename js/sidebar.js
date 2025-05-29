// sidebar.js

// Add logic to toggle sidebar visibility
const hideSidebarButton = document.getElementById("hideSidebar");
const unhideSidebarButton = document.getElementById("showSidebar");
const sidebar = document.querySelector(".side-bar");

// Add logic to dynamically toggle the sidebar-hidden class on the body
const body = document.body;

hideSidebarButton.addEventListener("click", () => {
  sidebar.style.display = "none";
  unhideSidebarButton.style.display = "block";
  body.classList.add("sidebar-hidden");
});

unhideSidebarButton.addEventListener("click", () => {
  sidebar.style.display = "block";
  unhideSidebarButton.style.display = "none";
  body.classList.remove("sidebar-hidden");
});

// Add logic to show the mobile sidebar modal when the main-header image is clicked
const mobileSidebarModal = document.getElementById("mobileSidebarModal");
const mainHeaderImage = document.querySelector(".main-header img");

mainHeaderImage.addEventListener("click", () => {
  mobileSidebarModal.style.display = "block";
});

// Add logic for mobile sidebar functionality
const closeMobileSidebarButton = document.getElementById("closeMobileSidebar");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");

// Close mobile sidebar modal
closeMobileSidebarButton.addEventListener("click", () => {
  mobileSidebarModal.style.display = "none";
});

// Toggle light and dark mode
mobileThemeToggle.addEventListener("change", () => {
  if (mobileThemeToggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

// Export the sidebar toggle functionality
export { hideSidebarButton, unhideSidebarButton, sidebar };
