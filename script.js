// Get the image section and contact button elements
const imageSection = document.querySelector('.image-section');
const contactButton = document.getElementById('contact-button');

// Show the contact button on hover
imageSection.addEventListener('mouseenter', () => {
    contactButton.style.opacity = '1';
    contactButton.style.pointerEvents = 'auto'; // Enable interaction
});

// Hide the contact button when not hovering
imageSection.addEventListener('mouseleave', () => {
    contactButton.style.opacity = '0';
    contactButton.style.pointerEvents = 'none'; // Disable interaction
});