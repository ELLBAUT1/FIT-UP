// Form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorContainer = document.getElementById('error-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let errors = [];
  
  // Name validation
  if (nameInput.value.trim() === '') {
    errors.push('Name is required');
  }
  
  // Email validation
  if (emailInput.value.trim() === '') {
    errors.push('Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    errors.push('Invalid email address');
  }
  
  // Message validation
  if (messageInput.value.trim() === '') {
    errors.push('Message is required');
  }
  
  // Display errors if any
  if (errors.length > 0) {
    let errorHTML = '';
    errors.forEach((error) => {
      errorHTML += `<li>${error}</li>`;
    });
    errorContainer.innerHTML = `<ul>${errorHTML}</ul>`;
  } else {
    // Submit form
    form.submit();
  }
});

// Email validation function
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
