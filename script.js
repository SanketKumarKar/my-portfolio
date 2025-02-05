// Initialize Tech Background
function createTechBackground() {
    // Create particles
    const particlesContainer = document.querySelector('.particles');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particlesContainer.appendChild(particle);
    }

    // Create hex grid elements
    const hexGrid = document.querySelector('.hex-grid');
    for(let i = 0; i < 200; i++) {
        const hex = document.createElement('div');
        hex.className = 'hex';
        hex.style.left = Math.random() * 100 + '%';
        hex.style.top = Math.random() * 100 + '%';
        hex.style.animation = `hexPulse ${5 + Math.random() * 10}s infinite`;
        hexGrid.appendChild(hex);
    }

    // Create matrix effect
    const matrix = document.querySelector('.matrix-fall');
    for(let i = 0; i < 100; i++) {
        const digit = document.createElement('div');
        digit.textContent = Math.random().toString(36).substr(2,1);
        digit.className = 'matrix-digit';
        digit.style.left = Math.random() * 100 + '%';
        digit.style.animationDelay = Math.random() * 10 + 's';
        matrix.appendChild(digit);
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize when page loads
window.addEventListener('load', () => {
    createTechBackground();
    
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.skill-bar, .project-card').forEach(el => {
        observer.observe(el);
    });
});
