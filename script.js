const header = document.querySelector('[data-header]');
const nav = document.querySelector('#site-nav');
const navToggle = document.querySelector('.nav-toggle');
const year = document.querySelector('[data-year]');

year.textContent = new Date().getFullYear();

const syncHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
