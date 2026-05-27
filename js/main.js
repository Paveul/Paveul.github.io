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

  // --- Load Footer Dynamically ---
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(err => console.error('Failed to load footer:', err));
  }

  // --- Data-driven classes ---
  if (typeof classesData !== 'undefined') {
    // 1. Populate teaching cards
    const cardsContainer = document.getElementById('teaching-cards-container');
    if (cardsContainer) {
      classesData.forEach(c => {
        const tagsHtml = c.tags.map(t => `<a href="${t.link}" target="_blank" class="card__tag" style="text-decoration: none;">${t.text}</a>`).join('');
        const html = `
          <article class="card reveal">
            <h3 class="card__title"><a href="${c.id}.html" class="card__link">${c.title}</a></h3>
            <p class="card__description">${c.summary}</p>
            <div class="card__tags">${tagsHtml}</div>
          </article>
        `;
        cardsContainer.insertAdjacentHTML('beforeend', html);
      });
    }

    // 2. Populate class subpages
    const summaryPlaceholder = document.getElementById('class-summary-placeholder');
    if (summaryPlaceholder) {
      const classId = summaryPlaceholder.getAttribute('data-class-id');
      const classObj = classesData.find(c => c.id === classId);
      if (classObj) {
        summaryPlaceholder.innerHTML = `<p style="margin-bottom: var(--space-md);">${classObj.summary}</p>`;
      }
    }

    const linkPlaceholder = document.getElementById('class-link-placeholder');
    if (linkPlaceholder) {
      const classId = linkPlaceholder.getAttribute('data-class-id');
      const classObj = classesData.find(c => c.id === classId);
      if (classObj) {
        linkPlaceholder.innerHTML = `
          <div style="margin-top: var(--space-lg);">
            <a href="${classObj.driveLink}" target="_blank"
              style="font-weight: 600; text-decoration: underline; color: var(--color-primary);">Access the full course notes on Google Drive</a>
          </div>
        `;
      }
    }
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

  // --- Load MathJax for LaTeX rendering ---
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
    }
  };
  const mathJaxScript = document.createElement('script');
  mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  mathJaxScript.async = true;
  document.head.appendChild(mathJaxScript);
})();
