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

// View Source Code Button Functionality
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.addEventListener('click', () => {
    window.open('https://github.com/SanketKumarKar/my-portfolio', '_blank', 'width=800,height=600');
  });
});

// Add Playful Animations
const addPlayfulAnimations = () => {
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.add('playful-animation');
  });
};

document.addEventListener('DOMContentLoaded', addPlayfulAnimations);

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
  button.style.transition = 'none';
});

// Change the color of the "View Source Code" button to blue and purple when clicked
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = 'white';
    button.style.color = 'var(--neon-blue)'; // Change text color to neon blue
  });
});

// Add event listeners to LinkedIn, GitHub, and email links to open them in a popup window
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link.href, '_blank', 'width=800,height=600');
  });
});

// Remove the moving icon animations from the home page
document.addEventListener('DOMContentLoaded', () => {
  const movingIconsContainer = document.querySelector('.neon-icons-container');
  if (movingIconsContainer) {
    movingIconsContainer.remove();
  }
});

// Remove the zoom-in and zoom-out animation from the "view source code" button
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.style.transition = 'none';
  button.style.transform = 'none';
});

// Update the skill bar animation to partially fill the bars
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 500);
  });
});
