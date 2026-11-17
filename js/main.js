// Kojo Solutions — Menu & Utilities

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('navPanel');
  const overlay = document.getElementById('navOverlay');

  if (toggle && panel && overlay) {
    function openMenu() {
      toggle.classList.add('active');
      panel.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.classList.remove('active');
      panel.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      if (panel.classList.contains('open')) closeMenu();
      else openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Close when a link is clicked
    panel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});

function copyText(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  return Promise.resolve();
}