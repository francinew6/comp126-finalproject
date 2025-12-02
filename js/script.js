// Hamburger menu toggle functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  const isActive = hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // Update aria-expanded for accessibility
  hamburger.setAttribute("aria-expanded", isActive);
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-container")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});


