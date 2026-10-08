// Optional navigation and sharing enhancements. Content works without JavaScript.
const links = [...document.querySelectorAll('.contents nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const current = entries.find(entry => entry.isIntersecting);
    if (!current) return;
    links.forEach(link => {
      if (link.hash === '#' + current.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin: '-100px 0px -65% 0px'});
  document.querySelectorAll('article section').forEach(section => observer.observe(section));
}
const copy = document.querySelector('.copy-link');
if (copy) copy.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(window.location.href);
    status.textContent = 'Page link copied.';
  } catch {
    status.textContent = 'Copy the page address from your browser.';
  }
});
