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
