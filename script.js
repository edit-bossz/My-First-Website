// Select the image section and the contact button
const imageSection = document.querySelector('.image-section');
const contactButton = document.getElementById('contact-button');

// Function to show the contact button with a fade-in effect
function showButton() {
    contactButton.style.transition = 'opacity 0.5s ease-in-out'; // Fade-in transition
    contactButton.style.opacity = '1';
    contactButton.style.pointerEvents = 'auto'; // Enable button interaction
}

// Function to hide the contact button immediately
function hideButton() {
    contactButton.style.transition = 'opacity 0s'; // No transition for instant fade-out
    contactButton.style.opacity = '0';
    contactButton.style.pointerEvents = 'none'; // Disable button interaction
}

// Add event listeners to the image section
imageSection.addEventListener('mouseenter', showButton);
imageSection.addEventListener('mouseleave', hideButton);

if (window.innerWidth <= 768) {
    document.getElementById("footer-contact").setAttribute("href", "intent://send?to=editprime7@gmail.com&subject=Subject&body=Body#Intent;scheme=mailto;package=com.google.android.gm;end");
} else {
    document.getElementById("footer-contact").setAttribute("href", "https://mail.google.com/mail/?view=cm&fs=1&to=editprime7@gmail.com");
}