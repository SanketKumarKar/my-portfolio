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
