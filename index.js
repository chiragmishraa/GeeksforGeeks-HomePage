// Theme toggle
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.checked = true;
  }

  // Toggle theme on click
  themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });
});

// Navbar toggle
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
