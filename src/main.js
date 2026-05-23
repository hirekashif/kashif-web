// Marketing Site Client Interactivity

// 1. Pricing Plan Monthly / Annual Toggle Calculator
const pricingSwitch = document.getElementById('pricing-plan-switch');
const labelMonthly = document.getElementById('label-monthly');
const labelAnnual = document.getElementById('label-annual');
const priceStarterVal = document.getElementById('price-starter-val');
const priceProVal = document.getElementById('price-pro-val');
const priceScaleVal = document.getElementById('price-scale-val');

if (pricingSwitch) {
  pricingSwitch.addEventListener('click', () => {
    pricingSwitch.classList.toggle('active');
    
    const isAnnual = pricingSwitch.classList.contains('active');
    
    if (isAnnual) {
      labelMonthly.classList.remove('active');
      labelAnnual.classList.add('active');
      
      // Calculate 20% discount prices for SMB pricing
      // $29/mo -> $23/mo billed annually
      // $89/mo -> $71/mo billed annually
      // $249/mo -> $199/mo billed annually
      animatePriceChange(priceStarterVal, 23);
      animatePriceChange(priceProVal, 71);
      animatePriceChange(priceScaleVal, 199);
    } else {
      labelMonthly.classList.add('active');
      labelAnnual.classList.remove('active');
      
      animatePriceChange(priceStarterVal, 29);
      animatePriceChange(priceProVal, 89);
      animatePriceChange(priceScaleVal, 249);
    }
  });
}

function animatePriceChange(element, targetPrice) {
  if (!element) return;
  element.style.transform = 'scale(0.85)';
  element.style.opacity = '0.3';
  
  setTimeout(() => {
    element.textContent = `$${targetPrice}`;
    element.style.transform = 'scale(1)';
    element.style.opacity = '1';
  }, 150);
}

// 2. Interactive FAQ Accordion Click Handlers
const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const body = item.querySelector('.faq-body');
    const isActive = item.classList.contains('active');
    
    // Close other FAQ items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.faq-body');
        if (otherBody) otherBody.style.maxHeight = '0';
      }
    });
    
    // Toggle current FAQ item
    if (isActive) {
      item.classList.remove('active');
      body.style.maxHeight = '0';
    } else {
      item.classList.add('active');
      // Set maxHeight dynamically based on scrollHeight for a smooth transition
      body.style.maxHeight = `${body.scrollHeight}px`;
    }
  });
});

// 3. Header Scrolled State (Scroll Spy)
const header = document.getElementById('main-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

// 4. Interactive Mobile Menu Toggle
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const navMenuList = document.getElementById('nav-menu-list');

if (menuToggleBtn && navMenuList) {
  menuToggleBtn.addEventListener('click', () => {
    navMenuList.style.display = navMenuList.style.display === 'flex' ? 'none' : 'flex';
    if (navMenuList.style.display === 'flex') {
      navMenuList.style.position = 'absolute';
      navMenuList.style.top = '80px';
      navMenuList.style.left = '0';
      navMenuList.style.width = '100%';
      navMenuList.style.flexDirection = 'column';
      navMenuList.style.background = 'rgba(3, 7, 18, 0.95)';
      navMenuList.style.backdropFilter = 'blur(20px)';
      navMenuList.style.padding = '20px';
      navMenuList.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
      navMenuList.style.gap = '20px';
      navMenuList.style.zIndex = '999';
    }
  });
  
  // Close menu when clicking link
  const navLinks = navMenuList.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenuList.style.display = 'none';
      }
    });
  });
}

// 5. Candidate Mockup Interactive Animation on Intersection
const progressFill = document.getElementById('mock-anim-fill');

if (progressFill) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger smooth progress bar loading animation
        setTimeout(() => {
          progressFill.style.width = '98%';
        }, 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  observer.observe(document.querySelector('.mockup-container'));
}
