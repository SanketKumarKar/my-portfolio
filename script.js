// Initialize EmailJS
emailjs.init({
  publicKey: '11TcJitY6ZSYn-GYF',
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  emailjs.sendForm('service_el6zmci', 'template_wv6avkn', e.target)
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Message failed to send. Please try again.');
    });
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate progress bars
      if(entry.target.classList.contains('progress-track')) {
        const percent = entry.target.parentElement.getAttribute('data-percent');
        entry.target.style.width = `${percent}%`;
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-scroll, .progress-track').forEach(el => {
  observer.observe(el);
});

// Project Filter
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 
        'block' : 'none';
    });
  });
});

// Scroll to Top
const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
