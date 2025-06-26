// Wheel Text Display
const wheel = document.querySelector('.wheel');
const wheelText = document.querySelector('.wheel-text');

if (wheel) {
  const wedges = [
    "Women are reduced to lines with no political rights",
    "Use of color is forbidden to maintain social control",
    "Irregular polygons are destroyed or imprisoned",
    "Number of sides determines social status",
    "Vision is restricted to maintain hierarchy",
    "Questioning geometry is heresy punishable by death"
  ];
  
  wheelText.innerHTML = wedges.map((text, i) => 
    `<p><strong>${document.querySelector(`.wedge:nth-child(${i+1})`).textContent}:</strong> ${text}</p>`
  ).join('');
  
  // Highlight wedge on hover
  document.querySelectorAll('.wedge').forEach((wedge, i) => {
    wedge.addEventListener('mouseenter', () => {
      wheelText.scrollTo(0, i * 60);
      wedge.style.transform = `rotate(${i * 60}deg) translate(100px) scale(1.1)`;
    });
    wedge.addEventListener('mouseleave', () => {
      wedge.style.transform = `rotate(${i * 60}deg) translate(100px)`;
    });
  });
}