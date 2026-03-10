// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Phone Number Formatting
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    e.target.value = value;
});

// Custom Dropdown Functionality
document.addEventListener('DOMContentLoaded', () => {
    const customSelects = document.querySelectorAll('.custom-select-wrapper');
    
    customSelects.forEach(wrapper => {
        const trigger = wrapper.querySelector('.custom-select-trigger');
        const options = wrapper.querySelector('.custom-select-options');
        const valueDisplay = wrapper.querySelector('.custom-select-value');
        const hiddenSelect = wrapper.querySelector('select');
        const selectName = trigger.getAttribute('data-select');
        
        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.custom-select-trigger.active').forEach(t => {
                if (t !== trigger) {
                    t.classList.remove('active');
                    t.nextElementSibling.classList.remove('active');
                }
            });
            
            trigger.classList.toggle('active');
            options.classList.toggle('active');
        });
        
        // Handle option selection
        options.querySelectorAll('.custom-select-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const value = option.getAttribute('data-value');
                const text = option.textContent;
                
                // Update display
                valueDisplay.textContent = text;
                valueDisplay.classList.remove('placeholder');
                
                // Update hidden select
                hiddenSelect.value = value;
                
                // Update selected state
                options.querySelectorAll('.custom-select-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                option.classList.add('selected');
                
                // Close dropdown
                trigger.classList.remove('active');
                options.classList.remove('active');
                
                // Clear validation error if present
                const formGroup = wrapper.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.remove('error');
                }
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-select-trigger.active').forEach(trigger => {
            trigger.classList.remove('active');
            trigger.nextElementSibling.classList.remove('active');
        });
    });
});

// Multi-Step Form Logic
let currentStep = 1;
const totalSteps = 3;

const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
const nextButtons = document.querySelectorAll('.btn-next');
const prevButtons = document.querySelectorAll('.btn-prev');

// Next button handlers
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        const nextStep = parseInt(button.getAttribute('data-next'));
        if (validateStep(currentStep)) {
            goToStep(nextStep);
        }
    });
});

// Previous button handlers
prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const prevStep = parseInt(button.getAttribute('data-prev'));
        goToStep(prevStep);
    });
});

function goToStep(step) {
    // Hide current step
    formSteps.forEach(formStep => {
        formStep.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.querySelector(`.form-step[data-step="${step}"]`);
    if (targetStep) {
        targetStep.classList.add('active');
    }
    
    // Update progress indicators
    progressSteps.forEach((progressStep, index) => {
        const stepNumber = index + 1;
        if (stepNumber < step) {
            progressStep.classList.add('completed');
            progressStep.classList.remove('active');
        } else if (stepNumber === step) {
            progressStep.classList.add('active');
            progressStep.classList.remove('completed');
        } else {
            progressStep.classList.remove('active', 'completed');
        }
    });
    
    currentStep = step;
    
    // Scroll to form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function validateStep(step) {
    const currentFormStep = document.querySelector(`.form-step[data-step="${step}"]`);
    const inputs = currentFormStep.querySelectorAll('input[required], select[required], textarea[required]');
    
    let isValid = true;
    let firstInvalidField = null;
    
    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        
        if (!input.value.trim()) {
            isValid = false;
            formGroup.classList.add('error');
            
            if (!firstInvalidField) {
                firstInvalidField = input;
            }
        } else {
            formGroup.classList.remove('error');
        }
    });
    
    if (!isValid && firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidField.focus();
    }
    
    return isValid;
}

// Clear validation errors on input
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.closest('.form-group');
            if (input.value.trim()) {
                formGroup.classList.remove('error');
            }
        });
        
        input.addEventListener('change', () => {
            const formGroup = input.closest('.form-group');
            if (input.value.trim()) {
                formGroup.classList.remove('error');
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
        return;
    }
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value || 'Not provided',
        service: document.getElementById('service').value,
        sqft: document.getElementById('sqft').value || 'Not specified',
        address: document.getElementById('address').value,
        timeline: document.getElementById('timeline').value,
        notes: document.getElementById('notes').value || 'None',
        timestamp: new Date().toLocaleString()
    };
    
    // Show loading state
    const submitButton = contactForm.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    try {
        // Submit to Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzgXQJfxDmeyl1ZXrCQYl5dmzr07-3WN_9HPNyMKZ9taK6BqK_lE2RdyQrg1amzuIc2/exec';
        
        const response = await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        // Show success message
        formSteps.forEach(step => step.style.display = 'none');
        formSuccess.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        currentStep = 1;
        
    } catch (error) {
        console.error('Form submission error:', error);
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        alert('There was an error submitting your request. Please try calling us instead.');
    }
});

// Gallery Load More / Collapse Toggle
const galleryLoadMore = document.getElementById('galleryLoadMore');
const hiddenGalleryItems = document.querySelectorAll('.gallery-item.hidden');

if (galleryLoadMore) {
    galleryLoadMore.addEventListener('click', () => {
        const isExpanded = galleryLoadMore.textContent === 'Collapse Gallery';
        
        if (isExpanded) {
            // Collapse - hide items again
            hiddenGalleryItems.forEach(item => {
                item.classList.add('hidden');
            });
            galleryLoadMore.textContent = 'View All Gallery';
            
            // Scroll to gallery section
            document.getElementById('gallery').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Expand - show all items
            hiddenGalleryItems.forEach(item => {
                item.classList.remove('hidden');
            });
            galleryLoadMore.textContent = 'Collapse Gallery';
        }
    });
}

// Scroll animations (fade in on scroll)
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

// Observe service cards, benefit cards, and gallery items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .benefit-card, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
