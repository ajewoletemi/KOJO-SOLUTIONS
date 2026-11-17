// Kojo Solutions - Main JS

document.addEventListener('DOMContentLoaded', function() {
  // Highlight current nav link based on path
  const path = window.location.pathname;
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.includes(href.replace('../', '').replace('./', '')) && href !== '#' && !href.startsWith('mailto')) {
      // Already handled by class="active" in HTML, this is backup
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Utility: copy text to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return Promise.resolve();
  }
}