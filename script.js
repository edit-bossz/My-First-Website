// Select the image section and the contact button
const imageSection = document.querySelector('.image-section');
const contactButton = document.getElementById('contact-button');

// Function to show the contact button
function showButton() {
    contactButton.style.opacity = '1';
    contactButton.style.pointerEvents = 'auto';
}

// Function to hide the contact button instantly
function hideButton() {
    contactButton.style.opacity = '0';
    contactButton.style.pointerEvents = 'none';
}

// Add event listeners to the image section
imageSection.addEventListener('mouseenter', showButton);
imageSection.addEventListener('mouseleave', hideButton);