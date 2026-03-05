document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Simplistic mobile menu toggle for now
    mobileMenuBtn.addEventListener('click', () => {
        // Because of our current CSS, we'll just toggle a specific mobile class
        // Let's implement this logic cleanly later if requested, for now just a stub.
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '20px';
            navLinks.style.backgroundColor = '#F7F6F2';
            navLinks.style.padding = '1rem';
            navLinks.style.border = '2px solid #111';
            navLinks.style.boxShadow = '4px 4px 0px #111';
            navLinks.style.zIndex = '100';
            navLinks.style.borderRadius = '8px';
        }
    });

    // Smooth scrolling for anchor links (excluding mailto)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.style.display = ''; // reset mobile menu if open

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
