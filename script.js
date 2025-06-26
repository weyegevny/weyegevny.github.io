// Shared functionality (e.g., escape button)
document.getElementById('escape-button')?.addEventListener('click', () => {
  document.body.classList.add('escape-effect');
});

// Page-specific code can check URL:
if (window.location.pathname.includes('analysis.html')) {
  // Hexagon nav logic here
}
