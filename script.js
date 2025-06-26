// Escape Flatland Easter Egg (Works on Both Pages)
document.getElementById('escape-button').addEventListener('click', () => {
  document.body.style.transition = 'all 2s';
  document.body.style.transform = 'rotateX(60deg)';
  document.body.style.background = '#000';
  
  setTimeout(() => {
    alert("You've transcended dimensions!");
    document.body.style.transform = '';
    document.body.style.background = '';
  }, 2000);
});

// Hexagon Navigation (Analysis Page Only)
if (document.querySelector('.hex-grid')) {
  document.querySelectorAll('.hexagon:not(.back-hex)').forEach(hex => {
    hex.addEventListener('click', () => {
      const section = hex.getAttribute('data-section');
      document.getElementById(section).scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  });
}