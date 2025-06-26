// Escape Button (Both Pages)
document.getElementById('escape-button').addEventListener('click', function() {
  document.body.style.transition = 'all 1.5s';
  document.body.style.transform = 'rotateX(70deg)';
  document.body.style.background = '#000';
  
  setTimeout(function() {
    alert("You've transcended dimensions!");
    document.body.style.transform = '';
    document.body.style.background = '';
  }, 1500);
});

// Hex Navigation (Analysis Page)
if (document.querySelector('.hex-nav')) {
  document.querySelectorAll('.hex:not(.home-hex)').forEach(function(hex) {
    hex.addEventListener('click', function() {
      const targetId = hex.getAttribute('data-target');
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Shape Hover Effects (Homepage)
if (document.querySelector('.shape')) {
  document.querySelectorAll('.shape').forEach(function(shape) {
    shape.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2) rotate(10deg)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });
    shape.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}