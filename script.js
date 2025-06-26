// Hexagon Navigation
document.querySelectorAll('.hexagon').forEach(hex => {
  hex.addEventListener('click', () => {
    const page = hex.getAttribute('data-page');
    document.getElementById(page).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Character Interactions
document.querySelectorAll('.character').forEach(char => {
  char.addEventListener('mouseenter', () => {
    const tooltip = char.querySelector('.tooltip');
    tooltip.style.opacity = '1';
  });
  char.addEventListener('mouseleave', () => {
    const tooltip = char.querySelector('.tooltip');
    tooltip.style.opacity = '0';
  });
});

// Escape Flatland Easter Egg
document.getElementById('escape-button').addEventListener('click', () => {
  document.body.style.transition = 'all 2s';
  document.body.style.transform = 'rotateX(60deg)';
  document.body.style.background = '#000';

  setTimeout(() => {
    alert("You've transcended dimensions!");
    document.body.style.transform = '';
    document.body.style.background = '#f0f0f0';
  }, 2000);
});

// Scroll Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.content-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});
