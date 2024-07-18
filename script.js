document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form values
      const name = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const message = document.querySelector('textarea').value;
  
      // Basic validation
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      // Simulate form submission
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    });
  
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('nav a, .hero a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle mobile menu
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });
  