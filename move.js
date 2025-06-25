// Scroll-triggered animations
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.scroll-section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      section.style.transform = 'translateY(0)';
      section.style.opacity = '1';
    }
  });
});

// Easter Egg: Transform the entire page into 3D
document.getElementById('escape-button').addEventListener('click', () => {
  document.body.style.transform = 'rotateX(60deg)';
  document.body.style.background = '#000';
  setTimeout(() => alert("You've escaped Flatland!"), 1000);
});

// Hover effects for shapes
document.querySelectorAll('.square, .polygon').forEach(shape => {
  shape.addEventListener('mouseenter', () => {
    shape.style.transform = 'rotateX(20deg) rotateY(20deg) scale(1.1)';
  });
  shape.addEventListener('mouseleave', () => {
    shape.style.transform = '';
  });
});
