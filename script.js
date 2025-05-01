
// Function to store user preferences
function saveUserPreference(color) {
  localStorage.setItem('buttonColor', color);
  updateButtonColor(color);
}

// Function to retrieve user preferences
function loadUserPreference() {
  const savedColor = localStorage.getItem('buttonColor');
  if (savedColor) {
    updateButtonColor(savedColor);
  }
}

// Function to update the button color dynamically
function updateButtonColor(color) {
  const button = document.querySelector('.button');
  button.style.backgroundColor = color;
}

// Function to trigger animation when button is clicked
function triggerAnimation() {
  const button = document.querySelector('.button');
  button.classList.add('clicked'); // Add a class to trigger the animation
  setTimeout(() => {
    button.classList.remove('clicked'); // Remove the class after animation is done
  }, 500); // Match animation duration
}

// Load user preferences when page loads
window.onload = loadUserPreference;

// Example: Changing color on button click
document.querySelector('.color-picker').addEventListener('change', (event) => {
  saveUserPreference(event.target.value);
});

// Trigger animation on button click
document.querySelector('.button').addEventListener('click', triggerAnimation);
