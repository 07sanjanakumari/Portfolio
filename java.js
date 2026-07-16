// ==============================
// Portfolio JavaScript
// ==============================

// Welcome message
console.log("Welcome to Sanjana's Portfolio!");

// Download Resume Button
const resumeBtn = document.querySelector(".home-text a");

resumeBtn.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Resume will be available soon!");

});

// Navigation Active Effect
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Show message when page loads
window.onload = function () {

    alert("Welcome to My Portfolio Website 😊");

};