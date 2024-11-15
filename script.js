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
// Touch events for mobile
imageSection.addEventListener('touchstart', showButton);
imageSection.addEventListener('touchend', hideButton);

// Function to update the footer contact link based on screen size
function updateContactLink() {
    const contactLink = document.getElementById('footer-contact-link').querySelector('a');
    if (window.innerWidth <= 768) {
        // Mobile link
        contactLink.href = "intent://send?to=editprime7@gmail.com&subject=Subject&body=Body#Intent;scheme=mailto;package=com.google.android.gm;end";
    } else {
        // Desktop link
        contactLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=editprime7@gmail.com";
    }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', updateContactLink);
window.addEventListener('resize', updateContactLink);

// Ensure the footer contact link opens in a new tab
document.querySelector('.footer .contact-link').setAttribute('target', '_blank');

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


// Function to open multiple links
function openMultipleLinks() {
    // Open the first link immediately
    window.open('https://github.com/edit-bossz', '_blank');
    
    // Delay opening the second link slightly to avoid it being treated as a popup
    setTimeout(() => {
        window.open('https://orcid.org/0009-0009-4169-8752', '_blank');
    }, 500); // Adjust delay if needed
}


document.getElementById("education-link").addEventListener("click", function () {
    window.open("https://southpoint.ac.in/", "_blank"); // Opens in a new tab
});

document.querySelector('a[href="#links"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    const targetSection = document.querySelector('#links'); // Select the links section

    // Scroll smoothly to the target section and center it on the screen
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Add a light red highlight
    targetSection.style.transition = 'background-color 0.5s ease'; // Smooth transition
    targetSection.style.backgroundColor = '#b5f59a'; // Light red color

    // Remove the highlight after a delay
    setTimeout(() => {
        targetSection.style.backgroundColor = ''; // Reset to default
    }, 1000); // Highlight duration: 1 second
});

window.addEventListener("scroll", function() {
    const topButton = document.getElementById("back-to-top");
    if (window.scrollY > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
