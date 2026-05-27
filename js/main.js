/* ============================================================
   Paveul.github.io — Main Script
   Handles: navbar scroll state, active page, mobile menu,
   reveal animations
   ============================================================ */

(function () {
  'use strict';

  function setupNavbar() {
    // --- Navbar scroll effect ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // --- Active nav link ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__links a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });

    // --- Mobile menu toggle ---
    const toggle = document.querySelector('.navbar__toggle');
    const navLinks = document.querySelector('.navbar__links');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
      });

      // Close mobile menu when a link is clicked
      navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // --- Load Navbar Dynamically ---
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    fetch('components/navbar.html')
      .then(response => response.text())
      .then(data => {
        navPlaceholder.innerHTML = data;
        setupNavbar();
      })
      .catch(err => console.error('Failed to load navbar:', err));
  } else {
    setupNavbar();
  }

  // --- Reveal-on-scroll animations ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    reveals.forEach((el) => el.classList.add('visible'));
  }
})();
