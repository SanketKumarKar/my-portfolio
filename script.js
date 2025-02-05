// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated Skill Bars
document.querySelectorAll('.skill-bar').forEach(bar => {
    const progress = bar.querySelector('.progress');
    const width = progress.style.width;
    progress.style.setProperty('--target-width', width);
    progress.style.width = '0';
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                bar.classList.add('visible');
                progress.style.width = width;
            }
        });
    });
    observer.observe(bar);
});

// Scroll-Triggered Animations
const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
});

document.querySelectorAll('.project-card, .skill-bar, #contact').forEach(el => {
    scrollObserver.observe(el);
});

// Create Tech Background
function createTechBackground() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for(let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }

    const hexGrid = document.querySelector('.hex-grid');
    for(let i = 0; i < 200; i++) {
        const hex = document.createElement('div');
        hex.className = 'hex';
        hex.style.left = Math.random() * 100 + '%';
        hex.style.top = Math.random() * 100 + '%';
        hex.style.animation = `hexPulse ${5 + Math.random() * 10}s infinite`;
        hexGrid.appendChild(hex);
    }
}

// Initialize background
createTechBackground();
