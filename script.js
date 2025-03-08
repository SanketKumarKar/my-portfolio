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
      // Add congratulation message animation
      const congratsMessage = document.createElement('div');
      congratsMessage.classList.add('congrats-message');
      congratsMessage.innerText = 'Congratulations! Your message has been sent.';
      document.body.appendChild(congratsMessage);
      setTimeout(() => {
        congratsMessage.remove();
      }, 5000);
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    });
});

// Initialize Animations
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = '0%'; // Reset to 0
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 500);
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

  // Initialize particles.js
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });

  // Initialize AOS
  AOS.init({
    duration: 1200,
  });

  // Add typing animation for the name title
  const nameTitle = document.querySelector('.typing-animation');
  const nameText = nameTitle.textContent;
  let index = 0;

  function type() {
    if (index < nameText.length) {
      nameTitle.textContent += nameText.charAt(index);
      index++;
      setTimeout(type, 150);
    } else {
      setTimeout(() => {
        nameTitle.textContent = '';
        index = 0;
        type();
      }, 3000);
    }
  }

  nameTitle.textContent = '';
  type();
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 
        'block' : 'none';
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle Theme
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateFonts();
  updateTheme();
});

// View Source Code Button Functionality
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.addEventListener('click', () => {
    window.open('https://github.com/SanketKumarKar/my-portfolio', '_blank');
  });
});

// Update Fonts for Light Mode
const updateFonts = () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.style.fontFamily = "'Roboto', sans-serif";
  } else {
    document.body.style.fontFamily = "'Segoe UI', sans-serif";
  }
};

// Add Playful Animations
const addPlayfulAnimations = () => {
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.add('playful-animation');
  });
};

document.addEventListener('DOMContentLoaded', addPlayfulAnimations);

// Update Theme for Light Mode
const updateTheme = () => {
  if (document.body.classList.contains('light-mode')) {
    document.documentElement.style.setProperty('--neon-blue', '#007acc');
    document.documentElement.style.setProperty('--neon-purple', '#8a2be2');
    document.documentElement.style.setProperty('--dark-bg', '#f0f0f0');
    document.documentElement.style.setProperty('--section-bg', '#ffffff');
    document.documentElement.style.setProperty('--text-primary', '#000000');
    document.querySelectorAll('.btn').forEach(button => {
      button.style.backgroundColor = 'black';
      button.style.color = 'white';
    });
  } else {
    document.documentElement.style.setProperty('--neon-blue', '#00f3ff');
    document.documentElement.style.setProperty('--neon-purple', '#bc13fe');
    document.documentElement.style.setProperty('--dark-bg', '#0a0a0a');
    document.documentElement.style.setProperty('--section-bg', 'rgba(26, 26, 26, 0.95)');
    document.documentElement.style.setProperty('--text-primary', '#ffffff');
  }
};

// Add moving skills bar animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 500);
  });
});

// Add functionality to update the visit counter as soon as a user visits the site
document.addEventListener('DOMContentLoaded', () => {
  const visitCounter = document.getElementById('visit-counter');
  let visits = localStorage.getItem('visits') || 226;
  visits++;
  localStorage.setItem('visits', visits);
  visitCounter.textContent = `Portfolio Visits: ${visits}`;
});

// Make the "View Source Code" button smaller and slow down its animation
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.style.padding = '0.3rem 0.8rem';
  button.style.transition = 'all 0.8s ease-in-out';
});

// Change the color of the "View Source Code" button to blue and purple when clicked
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = 'blue';
    button.style.color = 'purple';
  });
});
