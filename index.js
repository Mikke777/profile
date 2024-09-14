document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Ensure no empty fields before sending the email
  if (name === '' || email === '' || message === '') {
    document.getElementById('statusMessage').textContent = 'Please fill out all fields.';
    return; // Exit if fields are empty
  }

  let params = {
    name: name,
    email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send("service_lvpjfge", "template_6r14wof", params)
    .then(function(response) {
      document.getElementById('statusMessage').textContent = 'Email Sent!';
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      document.getElementById('statusMessage').textContent = 'Failed to send email. Please try again later.';
      console.log('FAILED...', error);
    });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section'); // Assuming sections have a specific class or tag
  const navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          const activeLink = document.querySelector(`header nav a[href*=${id}]`);
          if (activeLink) { // Check if activeLink is not null
            activeLink.classList.add('active');
          }
        });
      }
    });
  };
});

document.addEventListener('DOMContentLoaded', function() {
  let menuIcon = document.querySelector('#menuIcon');
  let navbar = document.querySelector('#navbar');

  if (menuIcon && navbar) {  // Ensure the elements exist before adding event handlers
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-solid');
      menuIcon.classList.toggle('fa-x');
      navbar.classList.toggle('active');
    };
  } else {
    console.error('menuIcon or navbar not found in the DOM');
  }
});
