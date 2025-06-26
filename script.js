// Initialize wheel text content
function initWheel() {
  const wheelText = document.querySelector('.wheel-text');
  if (!wheelText) return;

  const wedgeData = [
    {
      title: "Women = Lines",
      content: "Women are reduced to simple lines with no political rights or agency in Flatland's society."
    },
    {
      title: "Color Taboo",
      content: "Use of color is strictly forbidden as it could disrupt the social hierarchy based on shape."
    },
    {
      title: "Irregulars Destroyed",
      content: "Irregular polygons are either destroyed at birth or imprisoned to maintain geometric purity."
    },
    {
      title: "Shape = Status",
      content: "The number of sides determines social status, from triangles (low) to circles (priestly class)."
    },
    {
      title: "Vision = Control",
      content: "Vision is intentionally limited to maintain the hierarchy - lower classes can't see above their station."
    },
    {
      title: "Change = Heresy",
      content: "Any suggestion of dimensional possibilities beyond two is considered dangerous heresy."
    }
  ];

  // Populate wheel text
  wheelText.innerHTML = wedgeData.map(item => `
    <div class="wedge-info">
      <h4>${item.title}</h4>
      <p>${item.content}</p>
    </div>
  `).join('');

  // Add wedge hover effects
  const wedges = document.querySelectorAll('.wedge');
  wedges.forEach((wedge, index) => {
    wedge.addEventListener('mouseenter', () => {
      // Highlight wedge
      wedge.style.transform = `rotate(${index * 60}deg) translate(100px) scale(1.1)`;
      wedge.style.zIndex = '10';
      
      // Scroll to corresponding text
      const wedgeInfo = wheelText.querySelectorAll('.wedge-info')[index];
      wedgeInfo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      wedgeInfo.style.background = '#f8f8f8';
      wedgeInfo.style.transition = 'background 0.3s';
      
      // Remove highlight when mouse leaves
      const removeHighlight = () => {
        wedge.style.transform = `rotate(${index * 60}deg) translate(100px)`;
        wedge.style.zIndex = '1';
        wedgeInfo.style.background = 'transparent';
        wedge.removeEventListener('mouseleave', removeHighlight);
      };
      wedge.addEventListener('mouseleave', removeHighlight);
    });
  });
}

// Escape button functionality
function setupEscapeButton() {
  const escapeBtn = document.getElementById('escape-button');
  if (!escapeBtn) return;

  escapeBtn.addEventListener('click', function() {
    document.body.style.transition = 'all 1.5s';
    document.body.style.transform = 'rotateX(70deg)';
    document.body.style.background = '#000';
    
    setTimeout(function() {
      alert("You've transcended dimensions!");
      document.body.style.transform = '';
      document.body.style.background = '';
    }, 1500);
  });
}

// Hexagon navigation
function setupHexNavigation() {
  const hexes = document.querySelectorAll('.hex:not(.home-hex)');
  hexes.forEach(hex => {
    hex.addEventListener('click', function() {
      const targetId = hex.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
  initWheel();
  setupEscapeButton();
  setupHexNavigation();
});