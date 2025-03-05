document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.replace('scale-0', 'scale-100');
        } else {
            scrollToTopBtn.classList.replace('scale-100', 'scale-0');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle fade-in animations
    function handleFadeIn() {
        const fadeElements = document.querySelectorAll('.fade-in.opacity-0');
        
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.remove('opacity-0');
            }
        });
        
        // Check if skills section is visible
        const skillsSection = document.getElementById('skills');
        if (isInViewport(skillsSection)) {
            animateSkillBars();
        }
    }
    
    // Initial check for elements in viewport
    handleFadeIn();
    
    // Add scroll event listener for fade-in elements
    window.addEventListener('scroll', handleFadeIn);
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(function() {
            contactForm.reset();
            successMessage.classList.remove('hidden');
            
            setTimeout(function() {
                successMessage.classList.add('hidden');
            }, 5000);
        }, 1000);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Yetenek çubuklarını animasyonla doldur
    animateSkillBars();
    
    // Sayfa kaydırma olayını dinle
    window.addEventListener('scroll', function() {
        // Yukarı çık butonu görünürlüğünü kontrol et
        toggleScrollToTopButton();
    });
    
    // Mobil menü için hamburger buton işlevselliği
    setupMobileMenu();
});

// Yetenek çubuklarını animasyonla doldurma fonksiyonu
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
}

// Yukarı çık butonunun görünürlüğünü kontrol etme
function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (!scrollToTopButton) return;
    
    if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('hidden');
        scrollToTopButton.classList.add('flex');
    } else {
        scrollToTopButton.classList.remove('flex');
        scrollToTopButton.classList.add('hidden');
    }
}

// Mobil menü için hamburger buton işlevselliği
function setupMobileMenu() {
    const hamburgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const mobileMenu = document.getElementById('navbar-default');
    
    if (!hamburgerButton || !mobileMenu) return;
    
    hamburgerButton.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        
        if (expanded) {
            mobileMenu.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
        }
    });
    
    // Sayfa dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !hamburgerButton.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Menü öğelerine tıklandığında menüyü kapat (mobil görünümde)
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                mobileMenu.classList.add('hidden');
                hamburgerButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.remove('hidden');
        } else if (!hamburgerButton.getAttribute('aria-expanded') === 'true') {
            mobileMenu.classList.add('hidden');
        }
    });
}