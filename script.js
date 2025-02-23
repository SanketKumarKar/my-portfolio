// Initialize EmailJS
emailjs.init({
  publicKey: '11TcJitY6ZSYn-GYF',
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('service_el6zmci', 'template_wv6avkn', this)
    .then(() => {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset();
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
        card.classList.remove('fade-in');
      }
    });
  });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
  const percent = bar.getAttribute('data-percent');
  const track = bar.querySelector('.progress-track');
  track.style.width = `${percent}%`;
  track.style.backgroundColor = `hsl(${percent}, 100%, 50%)`; // Dynamic color based on percentage
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
