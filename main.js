document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle("active");
        navbar.classList.toggle("active");
    });
});

// Function to toggle video mute/unmute
function toggleMute() {
    var video = document.getElementById("aboutVideo");
    video.muted = !video.muted;
    var btn = document.getElementById("toggleMuteBtn");
    btn.innerText = video.muted ? "Unmute" : "Mute";
}

// Function to validate email format
function isValidEmail(email) {
    // Simple regex for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// JavaScript to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Validate the form fields
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Display an alert with the form data
        alert('Form submitted successfully!\n' +
              'Name: ' + name + '\n' +
              'Email: ' + email + '\n' +
              'Message: ' + message);

        // Optionally, you can reset the form after submission
        document.getElementById('contactForm').reset();
    });
});
