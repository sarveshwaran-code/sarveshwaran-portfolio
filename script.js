// script.js - simple navigation + small fade effect
function goTo(page) {
  // small fade out before navigating (nice touch)
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = page;
  }, 220);
}

// smooth fade-in on load
window.addEventListener('load', () => {
  document.body.style.transition = 'opacity 220ms ease-in-out';
  document.body.style.opacity = 1;
});
