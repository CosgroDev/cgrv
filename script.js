// Theme locked to light; remove any stored dark preference
localStorage.removeItem("dale-theme");
document.body.classList.remove("dark");

// Intersection observer for reveal animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll("[data-observe], .panel, .qual-card, .stat").forEach(el => observer.observe(el));

// Timeline interaction
const timelineItems = document.querySelectorAll(".timeline-item");
const roleField = document.getElementById("timeline-role");
const companyField = document.getElementById("timeline-company");
const periodField = document.getElementById("timeline-period");
const descField = document.getElementById("timeline-description");
const detailList = document.querySelector(".detail-points");

function updateTimelineDetail(item) {
  if (!item) return;
  roleField.textContent = item.dataset.role;
  companyField.textContent = item.dataset.company;
  periodField.textContent = item.dataset.period;
  descField.textContent = item.dataset.details;
  if (detailList) {
    const bullets = (item.dataset.bullets || "").split("|").filter(Boolean);
    detailList.innerHTML = bullets.map(b => `<li>${b}</li>`).join("");
  }
}

timelineItems.forEach(item => {
  item.addEventListener("click", () => {
    timelineItems.forEach(btn => btn.classList.remove("active"));
    item.classList.add("active");
    updateTimelineDetail(item);
  });
});

// Initialize detail with the active item
const activeItem = document.querySelector(".timeline-item.active") || timelineItems[0];
updateTimelineDetail(activeItem);

// Skill hover micro animation
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-3px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Parallax on hero blobs
const blobs = document.querySelectorAll(".blob");
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.04;
  blobs.forEach((blob, idx) => {
    blob.style.transform = `translateY(${offset * (idx + 1)}px)`;
  });
});

// Contact phone reveal
const revealBtn = document.querySelector(".reveal");
revealBtn?.addEventListener("click", () => {
  revealBtn.textContent = "+447535426390";
  revealBtn.setAttribute("aria-label", "Phone number revealed");
});

// Contact form handling (client-side only)
const contactForm = document.querySelector(".contact-form");
contactForm?.addEventListener("submit", e => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type='submit']");
  btn.textContent = "Sent!";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Send";
    btn.disabled = false;
    contactForm.reset();
  }, 1800);
});

// Back to top button
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (!backToTop) return;
  const shouldShow = window.scrollY > 240;
  backToTop.classList.toggle("visible", shouldShow);
});
backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
