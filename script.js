// MOBIL HAMBURGER MENÜ
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', function() {
const isOpen = navLinks.classList.toggle('open');
navToggle.classList.toggle('open');
navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(function(link) {
link.addEventListener('click', function() {
navLinks.classList.remove('open');
navToggle.classList.remove('open');
navToggle.setAttribute('aria-expanded', 'false');
});
});
