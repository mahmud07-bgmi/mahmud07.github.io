// Smooth scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

// Mouse glow effect (GS premium vibe)
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "300px";
glow.style.height = "300px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle, rgba(255,0,0,0.25), transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "0";
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
  } else {
    nav.style.boxShadow = "none";
  }
});
