// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header background on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .process-step, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';
    hamburger.style.background = 'none';
    hamburger.style.border = 'none';
    hamburger.style.fontSize = '1.5rem';
    hamburger.style.cursor = 'pointer';
    hamburger.style.color = '#333';
    
    nav.appendChild(hamburger);
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
    });
    
    // Show/hide hamburger based on screen size
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            navMenu.style.display = navMenu.classList.contains('mobile-active') ? 'flex' : 'none';
        } else {
            hamburger.style.display = 'none';
            navMenu.style.display = 'flex';
            navMenu.classList.remove('mobile-active');
        }
    };
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', createMobileMenu);
