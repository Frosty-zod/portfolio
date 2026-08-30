/* ============================================
   THEME TOGGLE
   Reads saved preference -> falls back to OS setting -> defaults to dark.
   Persists choice in localStorage so it's remembered next visit.
   ============================================ */
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    themeToggle.checked = true;
  } else {
    root.removeAttribute('data-theme');
    themeToggle.checked = false;
  }
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
    return;
  }
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
}

themeToggle.addEventListener('change', () => {
  const next = themeToggle.checked ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

initTheme();

/* ============================================
   MOBILE NAV
   ============================================ */
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================
   SCROLL REVEAL
   Falls back to showing everything immediately if IntersectionObserver
   isn't available, so content is never stuck invisible.
   ============================================ */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ============================================
   HERO TYPED LINE
   ============================================ */
const typedLineEl = document.getElementById('typed-line');
const fullLine = "building stuff that actually works.";
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  typedLineEl.textContent = fullLine;
} else {
  let i = 0;
  const typeSpeed = 35;
  (function typeChar() {
    if (i <= fullLine.length) {
      typedLineEl.textContent = fullLine.slice(0, i);
      i++;
      setTimeout(typeChar, typeSpeed);
    }
  })();
}

/* ============================================
   COPY EMAIL TO CLIPBOARD
   ============================================ */
const copyBtn = document.getElementById('copy-email');
const copyHint = document.getElementById('copy-hint');

copyBtn.addEventListener('click', async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyHint.textContent = 'copied!';
  } catch (err) {
    copyHint.textContent = email;
  }
  copyHint.classList.add('is-shown');
  setTimeout(() => copyHint.classList.remove('is-shown'), 1500);
});

/* ============================================
   FOOTER YEAR
   ============================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================
   BACK TO TOP
   ============================================ */
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('is-visible');
  } else {
    backToTop.classList.remove('is-visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

/* ============================================
   CONSOLE EASTER EGG
   ============================================ */
console.log(
  '%c👋 Looking for something? Drop me an email at abhirawat489@gmail.com',
  'color: #2DD4BF; font-size: 16px; font-weight: bold;'
);
