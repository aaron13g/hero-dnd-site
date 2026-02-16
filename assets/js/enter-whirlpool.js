(function () {
  const btn = document.querySelector('[data-enter-whirlpool]');
  if (!btn) return;

  const target = btn.getAttribute('data-target') || (window.siteBaseurl ? `${window.siteBaseurl}/atlas/` : '/atlas/');

  // Build overlay once
  const overlay = document.createElement('div');
  overlay.className = 'whirlpool-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  const whirl = document.createElement('div');
  whirl.className = 'whirlpool';
  whirl.style.position = 'relative';

  overlay.appendChild(whirl);
  document.body.appendChild(overlay);

  btn.addEventListener('click', function (e) {
    e.preventDefault();

    // If user prefers reduced motion, skip animation
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      window.location.href = target;
      return;
    }

    overlay.classList.add('is-active');

    // Navigate after animation plays
    window.setTimeout(() => {
      window.location.href = target;
    }, 720);
  });
})();
