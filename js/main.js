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
      if (classObj && classObj.links && classObj.links.length > 0) {
        const docIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
        const linksHtml = classObj.links.map(l =>
          `<a href="${l.link}" target="_blank" class="class-link">${docIcon} ${l.text}</a>`
        ).join('');
        linkPlaceholder.innerHTML = linksHtml;
      }
    }

    const photoPlaceholder = document.getElementById('class-photo-placeholder');
    if (photoPlaceholder) {
      const classId = photoPlaceholder.getAttribute('data-class-id');
      const classObj = classesData.find(c => c.id === classId);
      if (classObj) {
        if (classObj.image1 && classObj.image1.src) {
          photoPlaceholder.innerHTML = `
            <div class="page-photo">
              <img src="${classObj.image1.src}" alt="${classObj.image1.alt || ''}">
            </div>
          `;
        } else {
          photoPlaceholder.innerHTML = `
            <div class="page-photo placeholder">Photo Placeholder</div>
          `;
        }
      }
    }

    const photoPlaceholder2 = document.getElementById('class-photo-placeholder-2');
    if (photoPlaceholder2) {
      const classId = photoPlaceholder2.getAttribute('data-class-id');
      const classObj = classesData.find(c => c.id === classId);
      if (classObj && classObj.image2 && classObj.image2.src) {
        photoPlaceholder2.innerHTML = `
          <div class="page-photo">
            <img src="${classObj.image2.src}" alt="${classObj.image2.alt || ''}">
          </div>
        `;
      }
    }

    const genesisPlaceholder = document.getElementById('class-genesis-placeholder');
    if (genesisPlaceholder) {
      const classId = genesisPlaceholder.getAttribute('data-class-id');
      const classObj = classesData.find(c => c.id === classId);
      if (classObj && classObj.genesis && classObj.genesis.length > 0) {
        const paragraphsHtml = classObj.genesis.map(p => `<p>${p}</p>`).join('');
        const headingText = classObj.lang === 'pl' ? 'Geneza' : 'Genesis';
        genesisPlaceholder.innerHTML = `
          <h2>${headingText}</h2>
          ${paragraphsHtml}
        `;
      }
    }

    const notesPlaceholder = document.getElementById('class-notes-placeholder');
    if (notesPlaceholder) {
      const classId = notesPlaceholder.getAttribute('data-class-id');
      const classObj = classesData.find(c => c.id === classId);
      if (classObj && classObj.teachingNotes && classObj.teachingNotes.length > 0) {
        const paragraphsHtml = classObj.teachingNotes.map(p => `<p>${p}</p>`).join('');
        const headingText = classObj.lang === 'pl' ? 'Treść i uwagi metodyczne' : 'Content &amp; teaching notes';
        notesPlaceholder.innerHTML = `
          <h2>${headingText}</h2>
          ${paragraphsHtml}
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
