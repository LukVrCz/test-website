const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-nav-toggle]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
