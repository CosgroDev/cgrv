// Mobile nav toggle
const nav = document.querySelector('.site-nav');
const navBtn = document.querySelector('.nav-toggle');
if (nav && navBtn) {
  navBtn.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!expanded));
    navBtn.setAttribute('aria-expanded', String(!expanded));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Copy email to clipboard
document.querySelectorAll('.copy').forEach(btn => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      const prev = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = prev), 1200);
    } catch (e) {
      alert('Copy failed. Please copy manually.');
    }
  });
});

// Contact form -> mailto
function handleMailto(e) {
  e.preventDefault();
  const to = document.getElementById('email-link').getAttribute('href').replace('mailto:', '');
  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const from = document.getElementById('from').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('Food Safety Consulting — Inquiry');
  const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${from}\n\n${message}`);
  const link = `mailto:${to}?subject=${subject}&body=${body}`;
  window.location.href = link;
  return false;
}

// Expose for inline form
window.handleMailto = handleMailto;

