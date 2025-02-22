// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// EmailJS Integration
(function () {
    emailjs.init("Sanket Kumar Kar"); // Replace with your EmailJS User ID
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_el6zmci","template_wv6avkn"), {
        from_name: name,
        from_email: email,
        message: message
    }).then(function (response) {
        alert("Message sent successfully!");
        document.getElementById('contact-form').reset();
    }, function (error) {
        alert("Failed to send message. Please try again.");
    });
});
