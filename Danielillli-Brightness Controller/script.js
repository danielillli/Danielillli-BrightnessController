// Select the toggle input and body
const toggleInput = document.querySelector("#toggle");
const body = document.body;

// Check the local storage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  toggleInput.checked = savedTheme === "dark-mode";
} else {
  body.classList.add("light-mode");
}

// Function to toggle the theme
function toggleTheme() {
  if (toggleInput.checked) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light-mode");
  }
}

// Add an event listener to the toggle input
toggleInput.addEventListener("change", toggleTheme);
