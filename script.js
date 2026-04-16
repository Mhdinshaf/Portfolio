document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    if (mobileLinks.length > 0) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled'); // පහළට යද්දී Background එක dark වෙනවා
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- 3. Contact Button Logic ---
    const contactBtn = document.getElementById('contact-btn');
    const socialLinks = document.getElementById('social-links');

    if (contactBtn && socialLinks) {
        contactBtn.addEventListener('click', () => {
            socialLinks.classList.toggle('hidden');
            
            if (!socialLinks.classList.contains('hidden')) {
                contactBtn.innerText = "Close Contacts"; 
                socialLinks.classList.add('active'); 
            } else {
                contactBtn.innerText = "Contact Me"; 
                socialLinks.classList.remove('active');
            }
        });
    }

    // --- 4. Custom Slider Logic (Projects) ---
    const cards = document.querySelectorAll('.slider-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const track = document.querySelector('.slider-track');
    
    if (cards.length > 0 && track) {
        let currentIndex = 0;
        const totalCards = cards.length;

        function updateSlider() {
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');
                if(dots[index]) dots[index].classList.remove('active');

                if (index === currentIndex) {
                    card.classList.add('active'); // මැද එක
                    if(dots[index]) dots[index].classList.add('active');
                } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
                    card.classList.add('prev'); // වම් පැත්තේ එක
                } else if (index === (currentIndex + 1) % totalCards) {
                    card.classList.add('next'); // දකුණු පැත්තේ එක
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalCards;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if(card.classList.contains('prev') || card.classList.contains('next')) {
                    currentIndex = index;
                    updateSlider();
                }
            });
        });

        // Swipe & Drag Logic
        let isDragging = false;
        let startPos = 0;

        const dragStart = (e) => {
            isDragging = true;
            startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        };

        const dragEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endPos = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
            const diff = startPos - endPos;

            if (diff > 50) {
                currentIndex = (currentIndex + 1) % totalCards;
                updateSlider();
            } else if (diff < -50) {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateSlider();
            }
        };

        track.addEventListener('mousedown', dragStart);
        track.addEventListener('mouseup', dragEnd);
        track.addEventListener('mouseleave', dragEnd);

        track.addEventListener('touchstart', dragStart, {passive: true});
        track.addEventListener('touchend', dragEnd);

        updateSlider();
    }
});