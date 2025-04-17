// script.js

// MOBILE MENU TOGGLE
const toggleBtn = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
toggleBtn.addEventListener('click', () => {
  menuList.classList.toggle('open');
});

// OVERLAY FADE-OUT ON HERO HOVER
const overlay = document.querySelector('.overlay');
const heroItems = document.querySelectorAll('.hero-item');

heroItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    overlay.classList.add('fade-out');
  });
  item.addEventListener('mouseleave', () => {
    overlay.classList.remove('fade-out');
  });
});

// ABOUT SECTION SLIDE-IN
const aboutText = document.querySelector('.about-text');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observer.observe(aboutText);
