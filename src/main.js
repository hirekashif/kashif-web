// Marketing site interactivity — Cobalt build

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. Pricing monthly / annual toggle (20% off annual)
const pricingSwitch = document.getElementById('pricing-plan-switch');
const labelMonthly = document.getElementById('label-monthly');
const labelAnnual = document.getElementById('label-annual');
const priceStarterVal = document.getElementById('price-starter-val');
const priceProVal = document.getElementById('price-pro-val');

if (pricingSwitch) {
  pricingSwitch.addEventListener('click', () => {
    const isAnnual = pricingSwitch.getAttribute('aria-checked') !== 'true';
    pricingSwitch.setAttribute('aria-checked', String(isAnnual));

    labelMonthly.classList.toggle('active', !isAnnual);
    labelAnnual.classList.toggle('active', isAnnual);

    // $29/mo -> $23 · $89/mo -> $71 billed annually
    animatePriceChange(priceStarterVal, isAnnual ? 23 : 29);
    animatePriceChange(priceProVal, isAnnual ? 71 : 89);
  });
}

function animatePriceChange(element, targetPrice) {
  if (!element) return;
  if (reduceMotion) { element.textContent = `$${targetPrice}`; return; }
  element.style.transform = 'scale(0.85)';
  element.style.opacity = '0.3';
  setTimeout(() => {
    element.textContent = `$${targetPrice}`;
    element.style.transform = 'scale(1)';
    element.style.opacity = '1';
  }, 140);
}

// 2. FAQ accordion
document.querySelectorAll('.faq-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const body = item.querySelector('.faq-body');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach((other) => {
      if (other !== item) {
        other.classList.remove('active');
        other.querySelector('.faq-body').style.maxHeight = '0';
        other.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
      }
    });

    if (isActive) {
      item.classList.remove('active');
      body.style.maxHeight = '0';
      header.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('active');
      body.style.maxHeight = `${body.scrollHeight}px`;
      header.setAttribute('aria-expanded', 'true');
    }
  });
});

// 3. Nav scrolled state
const header = document.getElementById('main-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 4. Mobile menu
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggleBtn && mobileMenu) {
  const setMenu = (open) => {
    mobileMenu.hidden = !open;
    menuToggleBtn.setAttribute('aria-expanded', String(open));
  };
  menuToggleBtn.addEventListener('click', () => setMenu(mobileMenu.hidden));
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
}

// 5. Candidate panel progress-fill on view
const progressFill = document.getElementById('mock-anim-fill');
if (progressFill) {
  if (reduceMotion) {
    progressFill.style.width = '94%';
  } else {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { progressFill.style.width = '94%'; }, 260);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const panel = document.getElementById('hero-panel');
    if (panel) obs.observe(panel);
  }
}

// 6. Scroll reveals
const revealEls = document.querySelectorAll('.reveal');
if (reduceMotion) {
  revealEls.forEach((el) => el.classList.add('is-in'));
} else {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => revealObs.observe(el));
}

// 7. ⌘K command palette
const cmdk = document.getElementById('cmdk');
const cmdkOpen = document.getElementById('cmdk-open');
const cmdkBackdrop = document.getElementById('cmdk-backdrop');
const cmdkInput = document.getElementById('cmdk-input');
const cmdkList = document.getElementById('cmdk-list');

const COMMANDS = [
  { label: 'Features', kind: 'section', href: '#features', icon: 'grid' },
  { label: 'How it works', kind: 'section', href: '#how-it-works', icon: 'grid' },
  { label: 'Pricing', kind: 'section', href: '#pricing', icon: 'grid' },
  { label: 'FAQs', kind: 'section', href: '#faqs', icon: 'grid' },
  { label: 'Documentation', kind: 'link', href: '/docs/', icon: 'book' },
  { label: 'Post your first job free', kind: 'action', href: 'https://app.hirekashif.com/login', icon: 'arrow' },
  { label: 'Login', kind: 'action', href: 'https://app.hirekashif.com/', icon: 'arrow' },
];

const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
};

let activeIndex = 0;
let filtered = COMMANDS;

function renderCommands() {
  if (!cmdkList) return;
  if (filtered.length === 0) {
    cmdkList.innerHTML = '<li class="cmdk-empty">No matches</li>';
    return;
  }
  cmdkList.innerHTML = filtered
    .map((cmd, i) => `
      <li class="cmdk-item ${i === activeIndex ? 'active' : ''}" role="option" data-index="${i}" aria-selected="${i === activeIndex}">
        ${ICONS[cmd.icon] || ICONS.arrow}
        <span>${cmd.label}</span>
        <span class="cmdk-item-kind">${cmd.kind}</span>
      </li>`)
    .join('');
  cmdkList.querySelectorAll('.cmdk-item').forEach((el) => {
    el.addEventListener('click', () => runCommand(filtered[Number(el.dataset.index)]));
    el.addEventListener('mousemove', () => { activeIndex = Number(el.dataset.index); syncActive(); });
  });
}

function syncActive() {
  cmdkList.querySelectorAll('.cmdk-item').forEach((el, i) => {
    el.classList.toggle('active', i === activeIndex);
    el.setAttribute('aria-selected', String(i === activeIndex));
  });
}

function openCmdk() {
  if (!cmdk) return;
  cmdk.hidden = false;
  activeIndex = 0;
  filtered = COMMANDS;
  if (cmdkInput) cmdkInput.value = '';
  renderCommands();
  requestAnimationFrame(() => cmdkInput && cmdkInput.focus());
}

function closeCmdk() {
  if (!cmdk) return;
  cmdk.hidden = true;
  if (cmdkOpen) cmdkOpen.focus();
}

function runCommand(cmd) {
  if (!cmd) return;
  closeCmdk();
  if (cmd.href.startsWith('#')) {
    document.querySelector(cmd.href)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  } else {
    window.location.href = cmd.href;
  }
}

if (cmdkOpen) cmdkOpen.addEventListener('click', openCmdk);
if (cmdkBackdrop) cmdkBackdrop.addEventListener('click', closeCmdk);

if (cmdkInput) {
  cmdkInput.addEventListener('input', () => {
    const q = cmdkInput.value.trim().toLowerCase();
    filtered = q ? COMMANDS.filter((c) => c.label.toLowerCase().includes(q)) : COMMANDS;
    activeIndex = 0;
    renderCommands();
  });
}

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    cmdk && cmdk.hidden ? openCmdk() : closeCmdk();
    return;
  }
  if (!cmdk || cmdk.hidden) return;
  if (e.key === 'Escape') { e.preventDefault(); closeCmdk(); }
  else if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); syncActive(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); syncActive(); }
  else if (e.key === 'Enter') { e.preventDefault(); runCommand(filtered[activeIndex]); }
});
