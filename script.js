// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Click karama menu eka open/close wenna
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Link ekak click karama menu eka wahenna
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Pahala yaddi background eka dark wenawa
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Show More Button Logic
const showMoreBtn = document.getElementById('show-more-btn');
const hiddenProjects = document.querySelectorAll('.hidden-project');

showMoreBtn.addEventListener('click', () => {
    // Hangala thiyana projects tika pennanawa
    hiddenProjects.forEach(project => {
        project.style.display = 'block';
    });
    
    // Button eke text eka wenas karanawa nathnam button eka hanganna puluwan
    showMoreBtn.style.display = 'none'; // Projects pennuwata passe button eka hanganna
});

// Contact Button Logic
const contactBtn = document.getElementById('contact-btn');
const socialLinks = document.getElementById('social-links');

contactBtn.addEventListener('click', () => {
    // Class eka toggle karanawa (thibboth ain karanawa, nathnam danawa)
    socialLinks.classList.toggle('active');
    
    // Hidden class eka ain karanawa active wunaama
    if (socialLinks.classList.contains('active')) {
        socialLinks.classList.remove('hidden');
        contactBtn.innerText = "Close Contacts"; // Button text eka maru wenawa
    } else {
        socialLinks.classList.add('hidden');
        contactBtn.innerText = "Contact Me"; // Aye parana widihata
    }
});