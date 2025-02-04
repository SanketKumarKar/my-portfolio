// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Project Modals
const modals = document.querySelectorAll('.modal');
const modalButtons = document.querySelectorAll('.view-details');
const closeButtons = document.querySelectorAll('.close');

modalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'flex';
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
