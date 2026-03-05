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

    // Smooth scrolling for clean URL navigation and anchor links
    document.querySelectorAll('.nav-links a, a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            let href = this.getAttribute('href');
            let targetId = href;

            // Convert clean URLs to anchor IDs (e.g., /work -> #work)
            if (targetId.startsWith('/') && targetId.length > 1) {
                targetId = '#' + targetId.substring(1);
            } else if (targetId === '/') {
                targetId = '#home';
            }

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            // If the target element exists on the current page, scroll to it
            if (targetElement) {
                e.preventDefault();
                navLinks.style.display = ''; // reset mobile menu if open
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update URL to match without real navigation
                if (href.startsWith('/')) {
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // Check if we need to scroll to a section on page load based on the URL
    const path = window.location.pathname;
    if (path.length > 1 && path !== '/') {
        const sectionId = '#' + path.substring(1).replace(/\/$/, '');
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
