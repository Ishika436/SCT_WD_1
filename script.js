// Get the navbar element
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll event listener - changes navbar style when scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting based on scroll position
window.addEventListener('scroll', highlightActiveLink);

function highlightActiveLink() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hover effect - add visual feedback
navLinks.forEach((link) => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Initialize highlighting on page load
highlightActiveLink();
