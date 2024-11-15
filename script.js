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

//Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

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
    const footer = document.querySelector("footer"); // Adjust this selector if needed

    // Check if the button should appear
    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

    // Check the position of the footer to prevent the button from scrolling into it
    const footerRect = footer.getBoundingClientRect();
    const buttonHeight = topButton.offsetHeight;
    
    // Stop the button when it's near the footer
    if (footerRect.top <= window.innerHeight && window.scrollY + window.innerHeight >= footerRect.top + buttonHeight) {
        topButton.style.position = "absolute";
        topButton.style.bottom = (footerRect.height + 20) + "px"; // Adjust the distance as needed
    } else {
        topButton.style.position = "fixed";
        topButton.style.bottom = "20px"; // Default position when not near the footer
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



document.getElementById("contact-form-submit").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Encode the data to ensure it's properly handled in the URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Prepare the body with proper line breaks
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Check if we are on mobile or desktop
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    // Gmail compose URL for desktop or mobile
    let emailLink;
    if (isMobile) {
        // Mobile (Android)
        emailLink = `intent://send?to=editprime7@gmail.com&subject=${encodedSubject}&body=${encodedMessage}#Intent;scheme=mailto;package=com.google.android.gm;end`;
    } else {
        // Desktop
        emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=editprime7@gmail.com&subject=${encodedSubject}&body=${encodeURIComponent(bodyContent)}`;
    }

    // Open the Gmail compose screen in a new tab or via the intent on mobile
    window.open(emailLink, '_blank');
});

// Get the button and form elements
const toggleBtn = document.getElementById('contact-toggle-btn');
const contactForm = document.getElementById('contact-form');
const closeFormBtn = document.getElementById('close-form-btn');

// Add click event listener to the "Contact Me" button
toggleBtn.addEventListener('click', function() {
    // Show the form and close button, hide the "Contact Me" button
    contactForm.style.display = 'block';
    toggleBtn.style.display = 'none';
    closeFormBtn.style.display = 'inline-block';  // Show the close button
});

// Add click event listener to the "Close Contact Form" button
closeFormBtn.addEventListener('click', function() {
    // Hide the form and close button, show the "Contact Me" button
    contactForm.style.display = 'none';
    toggleBtn.style.display = 'inline-block';  // Show the "Contact Me" button
    closeFormBtn.style.display = 'none';  // Hide the close button
});