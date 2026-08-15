/**
 * LAUNDRY EQUIPMENT SALES & REPAIR — MAIN JAVASCRIPT CONTROLLER
 * Comprehensive interactions: Theme toggle, RTL toggle, Mobile Drawer,
 * Interactive Equipment Selector, Catalog Filters, Animated Counters, Gallery & Accordions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize lucide icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* --------------------------------------------------------------------------
     1. THEME SWITCHER (Light / Industrial Night Mode)
     -------------------------------------------------------------------------- */
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcons(newTheme);
    });
  });

  function updateThemeIcons(theme) {
    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.setAttribute('data-lucide', 'sun');
        } else {
          icon.setAttribute('data-lucide', 'moon');
        }
      }
    });
    if (window.lucide) window.lucide.createIcons();
  }
  updateThemeIcons(savedTheme);

  /* --------------------------------------------------------------------------
     2. RTL SWITCHER (LTR / RTL)
     -------------------------------------------------------------------------- */
  const savedDir = localStorage.getItem('direction') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('direction', newDir);
    });
  });

  /* --------------------------------------------------------------------------
     3. MOBILE DRAWER NAVIGATION (Strictly 1024px & Below)
     -------------------------------------------------------------------------- */
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  function openDrawer() {
    if (drawerOverlay) {
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawerOverlay) {
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  /* --------------------------------------------------------------------------
     4. INTERACTIVE EQUIPMENT SELECTOR ("BUILT AROUND YOUR OPERATION")
     -------------------------------------------------------------------------- */
  const selectorWrap = document.querySelector('.selector-wrap');
  if (selectorWrap) {
    const state = {
      business: 'Laundromat',
      capacity: '20–40 KG',
      equipment: 'Washer'
    };

    const recommendations = {
      'Laundromat': {
        name: 'HYDRA-PRO V-SERIES',
        model: 'LX-450 / STAINLESS DRUM',
        cap: '35 KG Load',
        eff: '98.4% Water Recovery',
        dim: '1120 x 980 x 1450 mm',
        warranty: '3-Year Commercial Warranty'
      },
      'Hotel': {
        name: 'CONTINUOUS TUNNEL SYSTEM',
        model: 'HT-700 HEAVY DUO',
        cap: '60+ KG Continuous',
        eff: 'Eco-Steam Recirculation',
        dim: '1800 x 1200 x 1950 mm',
        warranty: '5-Year Industrial Warranty'
      },
      'Hospital': {
        name: 'HYGIENIC BARRIER WASHER',
        model: 'MED-SERIES B-500',
        cap: '45 KG Sanitary Load',
        eff: 'Thermal Disinfection 95°C',
        dim: '1400 x 1100 x 1650 mm',
        warranty: '5-Year Certified Warranty'
      },
      'Restaurant': {
        name: 'COMPACT HIGH-G WASHER',
        model: 'C-200 RAPID EXTRACT',
        cap: '18 KG Fast Cycle',
        eff: '400 G-Force Extraction',
        dim: '850 x 780 x 1250 mm',
        warranty: '3-Year Express Warranty'
      },
      'Apartment': {
        name: 'SMART-CARD COMMERCIAL STACK',
        model: 'APT-DUO 150',
        cap: '15 KG Stacked Unit',
        eff: 'Energy Star Tier 1',
        dim: '750 x 750 x 1900 mm',
        warranty: '3-Year Multi-Tenant Warranty'
      },
      'Industrial Laundry': {
        name: 'MEGA-TON INDUSTRIAL DRYER',
        model: 'IND-1000 TURBO-FLOW',
        cap: '100 KG Bulk Capacity',
        eff: 'Recirculating Heat Exchanger',
        dim: '2200 x 1600 x 2400 mm',
        warranty: '5-Year Heavy Duty Warranty'
      }
    };

    const pillBtns = selectorWrap.querySelectorAll('.pill-btn');
    pillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.group;
        const val = btn.dataset.val;

        // Reset active state in same group
        selectorWrap.querySelectorAll(`.pill-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        state[group] = val;
        updateRecommendation();
      });
    });

    function updateRecommendation() {
      const rec = recommendations[state.business] || recommendations['Laundromat'];
      const card = selectorWrap.querySelector('.recommendation-card');
      if (card) {
        card.style.opacity = '0.5';
        setTimeout(() => {
          card.querySelector('.rec-title').textContent = rec.name;
          card.querySelector('.rec-model').textContent = `MODEL: ${rec.model} / ${state.capacity}`;
          card.querySelectorAll('.rec-spec-val')[0].textContent = rec.cap;
          card.querySelectorAll('.rec-spec-val')[1].textContent = rec.eff;
          card.querySelectorAll('.rec-spec-val')[2].textContent = rec.dim;
          card.querySelectorAll('.rec-spec-val')[3].textContent = rec.warranty;
          card.style.opacity = '1';
        }, 150);
      }
    }
  }

  /* --------------------------------------------------------------------------
     5. VERTICAL INDUSTRIES HOVER INTERACTION
     -------------------------------------------------------------------------- */
  const industryItems = document.querySelectorAll('.industry-item');
  const industryImg = document.querySelector('#industry-preview-img');
  const industryTitle = document.querySelector('#industry-preview-title');
  const industryDesc = document.querySelector('#industry-preview-desc');

  if (industryItems.length && industryImg) {
    industryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        industryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const imgSrc = item.dataset.img;
        const title = item.dataset.title;
        const desc = item.dataset.desc;

        industryImg.style.opacity = '0.3';
        setTimeout(() => {
          if (imgSrc) industryImg.src = imgSrc;
          if (title && industryTitle) industryTitle.textContent = title;
          if (desc && industryDesc) industryDesc.textContent = desc;
          industryImg.style.opacity = '1';
        }, 150);
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. ANIMATED COUNTERS ON SCROLL
     -------------------------------------------------------------------------- */
  const statNums = document.querySelectorAll('.stat-num');
  let animated = false;

  function checkCounters() {
    if (animated || !statNums.length) return;
    const triggerBottom = window.innerHeight * 0.85;

    statNums.forEach(stat => {
      const rect = stat.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        animated = true;
        animateStat(stat);
      }
    });
  }

  function animateStat(stat) {
    const target = parseInt(stat.dataset.count, 10);
    const prefix = stat.dataset.prefix || '';
    const suffix = stat.dataset.suffix || '';
    if (isNaN(target)) return;

    let current = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = `${prefix}${Math.floor(current)}${suffix}`;
    }, stepTime);
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters();

  /* --------------------------------------------------------------------------
     7. CATALOG PRODUCTS FILTER (PRODUCTS PAGE)
     -------------------------------------------------------------------------- */
  const productCards = document.querySelectorAll('.products-grid .product-card');
  const filterCheckboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');

  if (filterCheckboxes.length && productCards.length) {
    filterCheckboxes.forEach(cb => {
      cb.addEventListener('change', filterProducts);
    });

    function filterProducts() {
      const checkedCategories = Array.from(document.querySelectorAll('.filter-sidebar input[data-filter="category"]:checked')).map(cb => cb.value);
      const checkedCapacities = Array.from(document.querySelectorAll('.filter-sidebar input[data-filter="capacity"]:checked')).map(cb => cb.value);

      productCards.forEach(card => {
        const cat = card.dataset.category;
        const cap = card.dataset.capacity;

        const matchCat = !checkedCategories.length || checkedCategories.includes(cat);
        const matchCap = !checkedCapacities.length || checkedCapacities.includes(cap);

        if (matchCat && matchCap) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     8. PRODUCT DETAILS THUMBNAIL GALLERY & ACCORDIONS
     -------------------------------------------------------------------------- */
  const galleryThumbs = document.querySelectorAll('.gallery-thumbs .thumb-item');
  const mainGalleryImg = document.querySelector('#main-gallery-img');

  if (galleryThumbs.length && mainGalleryImg) {
    galleryThumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        galleryThumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.querySelector('img').src;
        mainGalleryImg.src = newSrc;
      });
    });
  }

  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });

  /* --------------------------------------------------------------------------
     9. BACK TO TOP SMOOTH SCROLL
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     10. B2B ENQUIRY FORM SWITCHER (CONTACT PAGE)
     -------------------------------------------------------------------------- */
  const formPillBtns = document.querySelectorAll('.enquiry-pill-btn');
  const reqTypeInput = document.querySelector('#requirement_type');

  if (formPillBtns.length && reqTypeInput) {
    formPillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        formPillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        reqTypeInput.value = btn.dataset.value;
      });
    });
  }

  const enquiryForm = document.querySelector('#b2b-enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your enquiry. Our commercial equipment specialist will contact you within 2 business hours.');
      enquiryForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     10. QUOTE MODAL (Dynamic Injection & Logic)
     -------------------------------------------------------------------------- */
  function initQuoteModal() {
    // Inject Modal HTML
    const modalHTML = `
      <div class="quote-modal-overlay" id="quoteModal">
        <div class="quote-modal-card">
          <button class="quote-modal-close" id="quoteModalClose" aria-label="Close Modal"><i data-lucide="x"></i></button>
          <div class="quote-modal-header">
            <h3>Request a Quote</h3>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">Provide your details below and our team will get back to you promptly.</p>
          </div>
          <form class="quote-modal-form" id="quoteModalForm">
            <div class="form-group" style="margin-bottom:1rem;">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" placeholder="e.g. John Doe" required>
            </div>
            <div class="form-group" style="margin-bottom:1rem;">
              <label class="form-label">Work Email</label>
              <input type="email" class="form-input" placeholder="name@company.com" required>
            </div>
            <div class="form-group" style="margin-bottom:1.5rem;">
              <label class="form-label">Equipment Requirements</label>
              <textarea class="form-input" rows="4" placeholder="What specific machinery or services are you looking for?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">
              <i data-lucide="send"></i> Submit Request
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    if (window.lucide) window.lucide.createIcons();

    const modal = document.getElementById('quoteModal');
    const closeBtn = document.getElementById('quoteModalClose');
    const form = document.getElementById('quoteModalForm');

    // Intercept all "Request Quote" buttons in navbar
    const allLinks = document.querySelectorAll('a.btn-primary');
    allLinks.forEach(link => {
      if (link.textContent.toLowerCase().includes('request quote') || link.innerText.toLowerCase().includes('request quote')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.add('open');
        });
      }
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your quote request has been submitted successfully!');
      modal.classList.remove('open');
      form.reset();
    });
  }

  // Initialize Modal
  initQuoteModal();

  /* --------------------------------------------------------------------------
     11. ACTIVE NAV LINK HIGHLIGHTING
     -------------------------------------------------------------------------- */
  function highlightActiveNavLink() {
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath || currentPath === '') {
      currentPath = 'index.html';
    }

    // First check main nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });

    // Then check dropdown links
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath) {
        link.classList.add('active');
        // Also highlight parent if it exists
        const parentDropdown = link.closest('.nav-dropdown-wrap');
        if (parentDropdown) {
          const parentToggle = parentDropdown.querySelector('.nav-link');
          if (parentToggle) {
            parentToggle.classList.add('active');
          }
        }
      }
    });
  }

  highlightActiveNavLink();
});
