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
      // Update both desktop and mobile theme toggle icons
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      const mobileToggle = document.getElementById('mobile-theme-toggle');
      if (mobileToggle) {
        mobileToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
      localStorage.setItem('theme', 'light');
      
      // Apply smooth transition to project cards
      animateProjectCards();
      animateSections();
      
      // Update particles.js configuration for light mode
      updateParticlesConfig('light');
    } else {
      body.classList.remove('light-mode');
      // Update both desktop and mobile theme toggle icons
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      const mobileToggle = document.getElementById('mobile-theme-toggle');
      if (mobileToggle) {
        mobileToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
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
    console.log('updateParticlesConfig called with theme:', theme);
    
    // Check if particles.js is available
    if (typeof particlesJS === 'undefined') {
      console.error('particlesJS is not defined - library may not be loaded');
      return;
    }
    
    // Check if particles-js element exists
    const particlesElement = document.getElementById('particles-js');
    if (!particlesElement) {
      console.error('particles-js element not found in DOM');
      return;
    }
    
    console.log('particles-js element found:', particlesElement);
    console.log('Current pJSDom state:', window.pJSDom);
    
    if (window.pJSDom && window.pJSDom.length > 0) {
      console.log('Destroying existing particles instance');
      // Destroy current particles instance
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
    
    // Define configurations directly instead of loading from files
    const lightConfig = {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#ff0066", "#0066ff", "#ff6600", "#00cc66"]
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.8,
          "random": false
        },
        "size": {
          "value": 4,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    };
    
    const darkConfig = {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#f713ff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.7,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
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
          "color": "#0011f8",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
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
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
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
      "retina_detect": true
    };
    
    const config = theme === 'light' ? lightConfig : darkConfig;
    console.log('Using inline config for theme:', theme);
    
    // Use direct particlesJS initialization
    particlesJS('particles-js', config);
    
    console.log('particles.js initialized with theme:', theme);
    
    // Check if particles are actually rendered
    setTimeout(() => {
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas) {
        console.log('Canvas found:', canvas);
        console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
        console.log('Canvas style:', canvas.style.cssText);
        console.log('Canvas context:', canvas.getContext('2d'));
      } else {
        console.error('No canvas found in particles-js container');
      }
      
      // Check particles-js container
      const container = document.getElementById('particles-js');
      console.log('Container innerHTML length:', container.innerHTML.length);
      console.log('Container children count:', container.children.length);
    }, 1000);
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
  
  // Initialize particles immediately for the current theme
  setTimeout(() => {
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    console.log('Initial particles load for theme:', currentTheme);
    updateParticlesConfig(currentTheme);
  }, 500);
  
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
