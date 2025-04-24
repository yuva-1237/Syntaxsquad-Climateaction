const toggleMenu = () => document.body.classList.toggle("open");

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

ScrollReveal().reveal('.section', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: true
});
