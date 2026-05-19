document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ duration: 800, once: true });
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (nav) { if (window.scrollY > 100) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
});