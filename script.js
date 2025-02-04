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

// Custom Cursor
const cursor = document.createElement('div');
const follower = document.createElement('div');
cursor.className = 'cursor';
follower.className = 'cursor-follower';
document.body.appendChild(cursor);
document.body.appendChild(follower);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 6 + 'px';
    follower.style.top = e.clientY + 6 + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        follower.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
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
