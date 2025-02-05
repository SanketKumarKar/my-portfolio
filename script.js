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
.hex {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(78, 205, 196, 0.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: hexPulse 5s infinite;
}

@keyframes hexPulse {
  0% { transform: scale(1) rotate(0deg); opacity: 0.1; }
  50% { transform: scale(1.5) rotate(180deg); opacity: 0.3; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.1; }
}
