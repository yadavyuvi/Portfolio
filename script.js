// Typing Effect
const roles = ["AI/ML Developer", "Data Scientist", "Deep Learning Enthusiast", "Vision Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 60;
const deletingDelay = 30;
const newRoleDelay = 1200;

function typeEffect() {
    const typingSpan = document.querySelector(".typing-text");
    if(!typingSpan) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? deletingDelay : typingDelay;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = newRoleDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target); // Optional: animate only once
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll(".fade-in");
fadeElements.forEach(el => observer.observe(el));

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle (simple version)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
