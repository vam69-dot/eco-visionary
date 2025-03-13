
import { animate } from "framer-motion";

export function initialFX() {
  document.body.style.overflowY = "auto";
  
  // Enable scrolling
  const smootherContent = document.getElementById("smooth-content");
  if (smootherContent) {
    smootherContent.style.transform = "none";
  }
  
  document.getElementsByTagName("main")[0].classList.add("main-active");
  
  // Background color transition
  animate("body", 
    { backgroundColor: "#0b080c" }, 
    { duration: 0.5, delay: 1 }
  );

  // Helper function for text animations
  const animateText = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const chars = Array.from(element.querySelectorAll('.char'));
      chars.forEach((char, index) => {
        const htmlChar = char as HTMLElement;
        htmlChar.style.opacity = '0';
        htmlChar.style.transform = 'translateY(80px)';
        htmlChar.style.filter = 'blur(5px)';
        
        // Animate each character
        animate(htmlChar, 
          { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)" 
          }, 
          { 
            duration: 1.2, 
            ease: [0.215, 0.61, 0.355, 1], // Power3.inOut equivalent
            delay: 0.3 + (index * 0.025) 
          }
        );
      });
    });
  };

  // Apply text animations
  document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1").forEach(text => {
    const textContent = text.textContent || '';
    const chars = textContent.split('');
    text.innerHTML = '';
    chars.forEach(char => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      text.appendChild(span);
    });
  });
  
  animateText(".landing-info h3, .landing-intro h2, .landing-intro h1");
  animateText(".landing-h2-info");
  
  // Fade in animations
  const fadeElements = [".landing-info-h2", ".header", ".icons-section", ".nav-fade"];
  fadeElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';
      if (selector === ".landing-info-h2") {
        htmlElement.style.transform = 'translateY(30px)';
      }
      
      animate(htmlElement, 
        { opacity: 1, y: 0 }, 
        { 
          duration: 1.2, 
          ease: [0.25, 0.1, 0.25, 1], // power1.inOut equivalent
          delay: selector === ".landing-info-h2" ? 0.8 : 0.1 
        }
      );
    });
  });
}
