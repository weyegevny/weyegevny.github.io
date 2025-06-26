// Escape Button (Works on both pages)
const escapeBtn = document.getElementById('escape-button');
if (escapeBtn) {
  escapeBtn.addEventListener('click', () => {
    document.body.style.transition = 'all 1.5s';
    document.body.style.transform = 'rotateX(70deg)';
    document.body.style.background = '#000';
    setTimeout(() => {
      alert("You've transcended dimensions!");
      document.body.style.transform = '';
      document.body.style.background = '';
    }, 1500);
  });
}

// Hex Navigation (Analysis page only)
const hexes = document.querySelectorAll('.hex:not(.home-hex)');
hexes.forEach(hex => {
  hex.addEventListener('click', () => {
    const targetId = hex.getAttribute('data-target');
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});