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

// Function to detect when the section is in view
function checkInView() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        // Check if section is in view
        if (sectionTop < windowHeight * 0.8 && sectionTop > 0) {
            section.classList.add('hover-effect'); // Apply the hover effect
        } else {
            section.classList.remove('hover-effect'); // Remove the hover effect when out of view
        }
    });
}

// Check when the page is scrolled
window.addEventListener('scroll', checkInView);

// Initial check on page load
document.addEventListener('DOMContentLoaded', checkInView);
