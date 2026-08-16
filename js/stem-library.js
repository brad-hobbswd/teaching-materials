document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  document.querySelectorAll('img').forEach(image => {
    image.addEventListener('error', () => image.classList.add('image-error'));
  });

  const year = document.querySelector('.year');
  if (year) year.textContent = new Date().getFullYear();

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menu?.setAttribute('aria-expanded', 'false');
      menu?.setAttribute('aria-label', 'Open navigation menu');
      menu?.focus();
    }
  });
});
