// script.js
// Initialize EmailJS
emailjs.init({
  publicKey: '11TcJitY6ZSYn-GYF',
});

// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-container');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navContainer.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-btn').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navContainer.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !navContainer.contains(e.target)) {
    hamburgerMenu.classList.remove('active');
    navContainer.classList.remove('active');
  }
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
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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

// Modal for certificate zoom
const certModal = document.createElement('div');
certModal.id = 'certificate-modal';
certModal.innerHTML = `
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <img src="" alt="Certificate Zoom" class="modal-certificate-image" />
    <button class="modal-close-btn"><i class="fas fa-times"></i></button>
  </div>
`;
document.body.appendChild(certModal);

const modalImg = certModal.querySelector('.modal-certificate-image');
const modalOverlay = certModal.querySelector('.modal-overlay');
const modalCloseBtn = certModal.querySelector('.modal-close-btn');

function openCertificateModal(imgSrc, altText) {
  modalImg.src = imgSrc;
  modalImg.alt = altText;
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Open modal on certificate click

document.querySelectorAll('.certificate-card .certificate-image').forEach(img => {
  img.addEventListener('click', (e) => {
    openCertificateModal(img.src, img.alt);
  });
});

modalOverlay.addEventListener('click', closeCertificateModal);
modalCloseBtn.addEventListener('click', closeCertificateModal);

// View More Certificates Functionality
document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('view-more-certificates');
  const hiddenCertificates = document.querySelectorAll('.hidden-certificate');
  let isExpanded = false;

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
      const btnText = viewMoreBtn.querySelector('.btn-text');
      const btnIcon = viewMoreBtn.querySelector('i');
      
      // Add loading state
      viewMoreBtn.classList.add('loading');
      btnText.textContent = 'Loading';
      
      setTimeout(() => {
        if (!isExpanded) {
          // Show hidden certificates with staggered animation
          hiddenCertificates.forEach((cert, index) => {
            setTimeout(() => {
              cert.classList.add('show');
              // Re-initialize AOS for newly shown certificates
              if (typeof AOS !== 'undefined') {
                AOS.refresh();
              }
            }, index * 150); // Staggered animation delay
          });
          
          // Update button state
          btnText.textContent = 'View Less';
          btnIcon.className = 'fas fa-chevron-up';
          viewMoreBtn.classList.add('expanded');
          isExpanded = true;
        } else {
          // Hide certificates with staggered animation
          const reversedCerts = Array.from(hiddenCertificates).reverse();
          reversedCerts.forEach((cert, index) => {
            setTimeout(() => {
              cert.classList.remove('show');
            }, index * 100);
          });
          
          // Update button state
          btnText.textContent = 'View More';
          btnIcon.className = 'fas fa-chevron-down';
          viewMoreBtn.classList.remove('expanded');
          isExpanded = false;
          
          // On mobile, scroll to contact section when collapsing
          if (window.innerWidth <= 768) {
            setTimeout(() => {
              document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }, 300);
          }
        }
        
        // Remove loading state
        viewMoreBtn.classList.remove('loading');
      }, 600); // Loading delay for smooth UX
    });
  }

  // Update certificate modal functionality for dynamically shown certificates
  function initializeCertificateModal() {
    document.querySelectorAll('.certificate-card .certificate-image').forEach(img => {
      // Remove existing listeners to prevent duplicates
      img.removeEventListener('click', handleCertificateClick);
      // Add new listener
      img.addEventListener('click', handleCertificateClick);
    });
  }

  function handleCertificateClick(e) {
    openCertificateModal(e.target.src, e.target.alt);
  }

  // Initialize modal for all certificates including hidden ones
  initializeCertificateModal();
  
  // Re-initialize when certificates are shown/hidden
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const target = mutation.target;
        if (target.classList.contains('certificate-card') && target.classList.contains('show')) {
          initializeCertificateModal();
        }
      }
    });
  });

  // Observe changes to hidden certificates
  hiddenCertificates.forEach(cert => {
    observer.observe(cert, { attributes: true });
  });
});
