// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.smooth-scroll').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    mobileMenu.classList.add('hidden');
  });
});

// Counter animations
function animateCounter(elementId, targetValue, suffix = '') {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const duration = 2000;
  const steps = 60;
  const stepValue = targetValue / steps;
  const stepDuration = duration / steps;
  
  let currentValue = 0;
  
  const counter = setInterval(() => {
    currentValue += stepValue;
    
    if (currentValue >= targetValue) {
      element.textContent = targetValue + suffix;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(currentValue) + suffix;
    }
  }, stepDuration);
}

// Initialize counters when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Hero section counters
  setTimeout(() => {
    animateCounter('projects-counter', 250);
    animateCounter('clients-counter', 150);
  }, 500);
});

// Intersection Observer for about section counters
const aboutSection = document.getElementById('about');
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter('about-projects-counter', 250);
      animateCounter('about-clients-counter', 150);
      animateCounter('about-roi-counter', 300, '%');
      aboutObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}

// Toast notification function
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="font-semibold">${type === 'success' ? 'Success!' : 'Error!'}</div>
    <div class="text-sm text-gray-300">${message}</div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');

// Formspree endpoint for contact form
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeoklnzb';

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Check if Formspree endpoint is configured
  if (FORMSPREE_ENDPOINT === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
    showToast('Please configure your Formspree endpoint in script.js', 'error');
    return;
  }
  
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  const formData = new FormData(contactForm);
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showToast('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
      contactForm.reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    showToast('Please try again or contact us directly at marko@marketechnic.com', 'error');
  } finally {
    submitButton.textContent = 'Send Message';
    submitButton.disabled = false;
  }
});

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');

newsletterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = newsletterEmail.value;
  
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }
  
  // For static sites, you can:
  // 1. Use a service like Netlify Forms, Formspree, or ConvertKit
  // 2. Integrate with a mailing service API
  // 3. For now, we'll just show a success message
  
  showToast('Thank you for subscribing to our newsletter!', 'success');
  newsletterEmail.value = '';
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 100) {
    navbar.classList.add('bg-black');
    navbar.classList.remove('bg-black/95');
  } else {
    navbar.classList.add('bg-black/95');
    navbar.classList.remove('bg-black');
  }
});

// Initialize animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.classList.add('animate-fade-in-up');
    }
  });
}, observerOptions);

// Observe all elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.animate-fade-in-up:not([style*="animation-delay"])');
  elementsToAnimate.forEach(el => {
    animateOnScroll.observe(el);
  });
});