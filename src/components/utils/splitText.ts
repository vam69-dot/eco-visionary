
// Simplified text splitting without GSAP dependency
const setSplitText = () => {
  try {
    const splitTexts = document.querySelectorAll(".split-text");
    splitTexts.forEach((text) => {
      const textContent = text.textContent || '';
      const chars = textContent.split('');
      
      // Clear existing content
      text.innerHTML = '';
      
      // Create spans for each character
      chars.forEach(char => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        text.appendChild(span);
      });
    });
  } catch (error) {
    console.error("Error in setSplitText:", error);
  }
};

export default setSplitText;
