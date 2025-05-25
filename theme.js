// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Function to set theme
  function setTheme(theme) {
    // Add transition class to body for smooth section background changes
    body.classList.add('theme-transition');
    
    if (theme === 'light') {
      body.classList.add('light-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
      
      // Apply smooth transition to project cards
      animateProjectCards();
      animateSections();
      
      // Update particles.js configuration for light mode
      updateParticlesConfig('light');
    } else {
      body.classList.remove('light-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
      
      // Apply smooth transition to project cards
      animateProjectCards();
      animateSections();
      
      // Update particles.js configuration for dark mode
      updateParticlesConfig('dark');
    }
    
    // Remove transition class after transition completes
    setTimeout(() => {
      body.classList.remove('theme-transition');
    }, 500);
  }
  
  // Function to animate project cards during theme change
  function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      // Add a staggered animation delay
      setTimeout(() => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.transform = 'scale(1)';
        }, 200);
      }, index * 50);
    });
  }
  
  // Function to animate sections during theme change
  function animateSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      // Add a subtle fade effect
      section.style.opacity = '0.8';
      setTimeout(() => {
        section.style.opacity = '1';
      }, 300);
    });
  }
  
  // Function to update particles.js configuration
  function updateParticlesConfig(theme) {
    if (window.pJSDom && window.pJSDom.length > 0) {
      // Destroy current particles instance
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
      
      if (theme === 'light') {
        // For light mode, create a Google-themed particles config on the fly
        const lightConfig = {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#4285f4", "#ea4335", "#fbbc05", "#34a853"]  // Google colors
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#5f6368",  // Google dark gray for lines
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 3,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "background": {
            "color": "transparent",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        };
        
        // Apply the light config directly
        particlesJS('particles-js', lightConfig);
        console.log('particles.js loaded with light theme');
      } else {
        // For dark mode, load the original config file
        particlesJS.load('particles-js', 'particles.json', function() {
          console.log('particles.js loaded with dark theme');
        });
      }
    }
  }
  
  // Handle click event on theme toggle
  themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Default to dark mode on first visit
    setTheme('dark');
    
    // Listen for changes in system preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }
  
  // Add theme toggle to mobile menu
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navContainer = document.querySelector('.nav-container');
  
  // Create a clone of the theme toggle for the hamburger menu
  const mobileThemeToggle = themeToggle.cloneNode(true);
  mobileThemeToggle.id = 'mobile-theme-toggle';
  mobileThemeToggle.classList.add('mobile-only');
  
  // Add event listener to the mobile theme toggle
  mobileThemeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
  
  // Append the mobile theme toggle to the nav container
  navContainer.appendChild(mobileThemeToggle);
  
  // Add style for mobile-only toggle
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 769px) {
      #mobile-theme-toggle {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      #theme-toggle {
        display: none;
      }
      
      #mobile-theme-toggle {
        margin-top: 20px;
      }
    }
  `;
  document.head.appendChild(style);
});
