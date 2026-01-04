document.getElementById("y")?.append(String(new Date().getFullYear()));

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

// Mobile dropdowns
document.querySelectorAll(".has-dropdown > .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 900) {
      link.parentElement.classList.toggle("open");
    }
  });
});

document.querySelector(".to-top")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   HERO SLIDER
   ========================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let autoplayTimer = null;
const AUTOPLAY_DELAY = 6000; // 6 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i]?.classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  const next = (currentIndex + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

/* Controls */
nextBtn?.addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

prevBtn?.addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoplay();
  });
});

/* Init */
if (slides.length > 1) {
  showSlide(0);
  startAutoplay();
}
