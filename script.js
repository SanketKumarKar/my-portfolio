// Initialize EmailJS
emailjs.init({
  publicKey: '11TcJitY6ZSYn-GYF',
});

// Smooth Scroll Navigation
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.getElementById(button.dataset.section);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_el6zmci', 'template_wv6avkn', e.target)
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.dataset.filter;
    
    // Filter projects
    projectCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize Animations sanket
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const width = bar.dataset.percent;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});
