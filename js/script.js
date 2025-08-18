// Countdown Timer
function startCountdown() {
    let timeLeft = 75 * 60 + 42; // 1:15:42 in seconds
    
    function updateCountdown() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update all countdown elements
        const countdownElements = document.querySelectorAll('#countdown, #final-countdown');
        countdownElements.forEach(element => {
            if (element) element.textContent = formattedTime;
        });
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 75 * 60 + 42; // Reset countdown
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Viewers counter animation
function animateViewers() {
    const viewersElement = document.getElementById('viewers');
    let currentViewers = 74;
    
    setInterval(() => {
        // Random change between -2 and +3
        const change = Math.floor(Math.random() * 6) - 2;
        currentViewers = Math.max(65, Math.min(85, currentViewers + change));
        if (viewersElement) {
            viewersElement.textContent = currentViewers;
        }
    }, 5000);
}

// Remaining spots animation
function animateSpots() {
    const spotsElements = document.querySelectorAll('#remaining-spots, #remaining-spots-2, #final-spots');
    let spots1 = 17;
    let spots2 = 15;
    let spots3 = 12;
    
    setInterval(() => {
        // Randomly decrease spots
        if (Math.random() < 0.3) {
            spots1 = Math.max(8, spots1 - 1);
            spots2 = Math.max(6, spots2 - 1);
            spots3 = Math.max(3, spots3 - 1);
            
            spotsElements.forEach((element, index) => {
                if (element) {
                    const spotValue = index === 0 ? spots1 : index === 1 ? spots2 : spots3;
                    element.textContent = spotValue;
                }
            });
        }
    }, 15000);
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Notification popup system
function initNotifications() {
    const popup = document.getElementById('notification-popup');
    const nameElement = document.getElementById('notification-name');
    const cityElement = document.getElementById('notification-city');
    
    const names = [
        'Ana S.', 'Carlos M.', 'Beatriz L.', 'João P.', 'Maria F.',
        'Pedro R.', 'Fernanda C.', 'Lucas T.', 'Juliana M.', 'Rafael S.',
        'Camila O.', 'Bruno H.', 'Larissa N.', 'Diego A.', 'Priscila V.'
    ];
    
    const cities = [
        'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG',
        'Salvador, BA', 'Brasília, DF', 'Fortaleza, CE', 'Curitiba, PR',
        'Recife, PE', 'Porto Alegre, RS', 'Manaus, AM', 'Belém, PA',
        'Goiânia, GO', 'Campinas, SP', 'São Luís, MA', 'Maceió, AL'
    ];
    
    function showNotification() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        
        if (nameElement) nameElement.textContent = randomName;
        if (cityElement) cityElement.textContent = randomCity;
        
        if (popup) {
            popup.classList.add('show');
            
            setTimeout(() => {
                popup.classList.remove('show');
            }, 4000);
        }
    }
    
    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000);
    
    // Show notifications every 15-25 seconds
    setInterval(() => {
        const delay = Math.random() * 10000 + 15000; // 15-25 seconds
        setTimeout(showNotification, delay);
    }, 25000);
}

// Smooth scrolling for CTA buttons
function initSmoothScrolling() {
    const ctaButtons = document.querySelectorAll('.cta-header, .cta-main, .cta-section, .cta-final, .cta-last-chance');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // In a real implementation, this would redirect to checkout
            // For demo purposes, we'll scroll to the final CTA
            const finalSection = document.querySelector('.final-cta');
            if (finalSection) {
                finalSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Product cards hover effect
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-5px) scale(1)';
        });
    });
}

// Testimonials animation
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(30px)';
        testimonial.style.transition = 'all 0.6s ease';
        observer.observe(testimonial);
    });
}

// Process steps animation
function initProcessSteps() {
    const steps = document.querySelectorAll('.step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'all 0.6s ease';
        observer.observe(step);
    });
}

// Target cards animation
function initTargetCards() {
    const targetCards = document.querySelectorAll('.target-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    targetCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    animateViewers();
    animateSpots();
    initFAQ();
    initNotifications();
    initSmoothScrolling();
    initParallax();
    initProductCards();
    initTestimonials();
    initProcessSteps();
    initTargetCards();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some extra interactivity
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const urgencyBar = document.querySelector('.urgency-bar');
    
    if (scrolled > 100) {
        urgencyBar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        urgencyBar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});

// Add click effects to all buttons
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('cta-header')) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

