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
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff4444';
            setTimeout(() => {
                input.style.borderColor = '';
            }, 2000);
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields before continuing.');
    }
    
    return isValid;
}

// Load Google Maps API dynamically
function loadGoogleMapsAPI() {
    if (typeof CONFIG !== 'undefined' && CONFIG.GOOGLE_PLACES_API_KEY) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_PLACES_API_KEY}&libraries=places&callback=initAutocomplete`;
        script.async = true;
        script.defer = true;
        document.getElementById('google-maps-script').replaceWith(script);
    } else {
        console.warn('Google Places API key not configured');
    }
}

// Google Places Autocomplete
let autocomplete;

function initAutocomplete() {
    const addressInput = document.getElementById('address');
    
    if (!addressInput) return;
    
    if (typeof google === 'undefined') {
        console.warn('Google Maps API not loaded');
        return;
    }
    
    autocomplete = new google.maps.places.Autocomplete(addressInput, {
        types: ['address'],
        componentRestrictions: { country: 'us' }
    });
    
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
            addressInput.value = place.formatted_address;
        }
    });
}

// Make initAutocomplete available globally for the Google Maps callback
window.initAutocomplete = initAutocomplete;

// Load Google Maps API when page loads
document.addEventListener('DOMContentLoaded', loadGoogleMapsAPI);

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
        material: document.getElementById('material').value || 'Not specified',
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
        // Replace with your actual Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxTr94HPSAa-RlEjV50NG-QVRAre6HaJC7oQ8xqmsdZM4UJhmRA1ufclJ1vQPY_CSd7/exec';
        
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
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try calling us directly at (215) 555-0100.');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

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
