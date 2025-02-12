// script.js

// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');

mobileNavToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNavigation.setAttribute('data-visible', true);
        mobileNavToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
       primaryNavigation.setAttribute('data-visible', false);
       mobileNavToggle.setAttribute('aria-expanded', false);
    }
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
    }
    // You can add more robust email validation here
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
}
