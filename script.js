document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const imageSection = document.querySelector(".image-section");

    imageSection.addEventListener("mouseenter", function () {
        contactButton.style.opacity = "1";
        contactButton.style.pointerEvents = "auto";
    });

    imageSection.addEventListener("mouseleave", function () {
        // Delay before fading out to avoid immediate disappearance
        setTimeout(function () {
            contactButton.style.opacity = "0";
            contactButton.style.pointerEvents = "none";
        }, 100); // Adjust delay as needed (in milliseconds)
    });
});