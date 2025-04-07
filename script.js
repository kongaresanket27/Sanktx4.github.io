// Add any JavaScript for interactivity or animations here
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add a simple fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-in-out';
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = '1';
        });
    }, 500);
});