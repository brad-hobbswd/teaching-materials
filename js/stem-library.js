document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  const year = document.querySelector('.year');
  if (year) year.textContent = new Date().getFullYear();
});
