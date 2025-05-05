// script.js
// Initialize EmailJS
emailjs.init({
  publicKey: '11TcJitY6ZSYn-GYF',
});

// Loading Screen Logic
document.addEventListener('DOMContentLoaded', () => {
  // Simulate loading time or wait for actual resources to load
  const loadingScreen = document.getElementById('loading-screen');
  const loadingDots = document.querySelector('.loading-dots');
  
  // Update loading dots animation manually (more reliable than CSS content animation)
  let dotCount = 0;
  const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    loadingDots.textContent = '.'.repeat(dotCount || 1);
  }, 500);
  
  // Track when the page actually loads
  let pageLoaded = false;
  let minLoadingTimeElapsed = false;
  
  // Hide loading screen after all resources are loaded
  window.addEventListener('load', () => {
    pageLoaded = true;
    tryHideLoadingScreen();
  });
  
  // Ensure minimum loading time of 3 seconds
  setTimeout(() => {
    minLoadingTimeElapsed = true;
    tryHideLoadingScreen();
  }, 3000); // Minimum 3 seconds loading time
  
  // Function to hide loading screen only when both conditions are met
  function tryHideLoadingScreen() {
    if (pageLoaded && minLoadingTimeElapsed) {
      loadingScreen.classList.add('hidden');
      clearInterval(dotInterval);
      
      // After transition completes, remove from DOM to improve performance
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 800); // Match transition duration
    }
  }
  
  // Fallback in case some resources take too long
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    clearInterval(dotInterval);
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 800);
  }, 8000); // Max loading time of 8 seconds (increased from 5 seconds)
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
      // Create and show congratulation message
      const congratsMessage = document.createElement('div');
      congratsMessage.classList.add('congrats-message');
      congratsMessage.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Message sent successfully!</p>
      `;
      document.body.appendChild(congratsMessage);
      
      // Remove message after animation
      setTimeout(() => {
        congratsMessage.remove();
      }, 3000);
      
      // Reset form
      e.target.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    });
});

// Initialize Animations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });

  // Typing animation for the name title
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

  // Scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Visit counter
  const visitCounter = document.getElementById('visit-counter');
  let visits = localStorage.getItem('visits') || 226;
  visits++;
  localStorage.setItem('visits', visits);
  visitCounter.textContent = `Portfolio Visits: ${visits}`;
});

// Skill bar animation with Intersection Observer
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percent = entry.target.getAttribute('data-percent');
      entry.target.style.width = `${percent}%`;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Fade-in animation for sections
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

// View Source Code Buttons
document.querySelectorAll('.view-source-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const projectCard = button.closest('.project-card');
    let githubLink = 'https://github.com/SanketKumarKar/';
    
    if (projectCard.dataset.category === 'nlp') {
      githubLink += 'sentiment-analysis-project';
    } else if (projectCard.dataset.category === 'cv') {
      githubLink += 'face-recognition-project';
    } else {
      githubLink += 'my-portfolio';
    }
    
    window.open(githubLink, '_blank');
  });
});

// // Remove any existing event listeners that might block the download
// document.querySelector('a[download]').addEventListener('click', (e) => {
//     // Let the browser handle the download naturally
//     console.log("Downloading CV...");
// });

// Social links open in popup
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link.href, '_blank', 'width=800,height=600');
  });
});


// Fix View Projects button
document.getElementById('view-projects-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Fix Download CV button
document.getElementById('download-cv-btn').addEventListener('click', (e) => {
    // Let the default download behavior happen
    console.log('Downloading CV...');
});

document.querySelector('a[download]').addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'FinalResume.pdf';
    link.download = 'Sanket_Kumar_Kar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
