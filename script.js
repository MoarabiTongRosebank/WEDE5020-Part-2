/* ==========================================================================
   The Copper Loaf Bakery — script.js
   Mobile navigation (hamburger) toggle.
   The "js" class tells the CSS that JavaScript is running, so the menu is
   only collapsed when there is a working button to open it again.
   ========================================================================== */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (!toggle || !nav) {
    return;
  }

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close the menu with the Escape key and return focus to the button
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Reset the menu if the window is resized up to desktop width
  window.matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) {
    if (mq.matches) {
      setMenu(false);
    }
  });
});
