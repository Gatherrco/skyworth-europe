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
