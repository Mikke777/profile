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
let navLinks = document.querySelectorAll('header navv a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      });
    }

  }
  )
}

document.addEventListener('DOMContentLoaded', function() {
  let menuIcon = document.querySelector('#menuIcon');
  let navbar = document.querySelector('#navbar');

  if (menuIcon && navbar) {  // Ensure the elements exist before adding event handlers
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  } else {
    console.error('menuIcon or navbar not found in the DOM');
  }
});
