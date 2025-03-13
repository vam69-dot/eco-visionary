
import * as THREE from "three";
import { animate, inView } from "framer-motion";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  // Remove unused intensity variable
  
  // Replace GSAP ScrollTrigger with Framer Motion's inView
  if (character) {
    // Landing section animations
    inView(".landing-section", () => {
      return (entry: IntersectionObserverEntry) => {
        const ratio = 1 - entry.intersectionRatio;
        if (character) {
          character.rotation.y = ratio * 0.7;
          camera.position.z = 22 + (ratio * 0);
        }
        const landingContainer = document.querySelector(".landing-container");
        const aboutMe = document.querySelector(".about-me");
        const characterModel = document.querySelector(".character-model");
        
        if (landingContainer) {
          (landingContainer as HTMLElement).style.opacity = `${1 - ratio}`;
          (landingContainer as HTMLElement).style.transform = `translateY(${ratio * 40}%)`;
        }
        
        if (aboutMe) {
          (aboutMe as HTMLElement).style.transform = `translateY(${(1 - ratio) * -50}%)`;
        }
        
        if (characterModel) {
          (characterModel as HTMLElement).style.transform = `translateX(${ratio * -25}%)`;
        }
      };
    });
    
    // About section animations
    inView(".about-section", () => {
      let screenLight: any, monitor: any;
      character.children.forEach((object: any) => {
        if (object.name === "Plane004") {
          object.children.forEach((child: any) => {
            child.material.transparent = true;
            child.material.opacity = 0;
            if (child.material.name === "Material.027") {
              monitor = child;
              child.material.color.set("#FFFFFF");
            }
          });
        }
        if (object.name === "screenlight") {
          object.material.transparent = true;
          object.material.opacity = 0;
          object.material.emissive.set("#C8BFFF");
          screenLight = object;
        }
      });
      
      let neckBone = character.getObjectByName("spine005");
      
      return (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // Animate camera
          animate(camera.position, 
            { z: 75, y: 8.4 }, 
            { duration: 3, ease: [0.215, 0.61, 0.355, 1] }
          );
          
          // Animate about section
          animate(".about-section", 
            { y: "30%", opacity: 0 }, 
            { duration: 3, delay: 2 }
          );
          
          // Animate character model
          animate(".character-model", 
            { x: "-12%" }, 
            { duration: 2.5, delay: 1 }
          );
          
          if (neckBone) {
            animate(neckBone.rotation, 
              { x: 0.6 }, 
              { duration: 1.5, delay: 1 }
            );
          }
          
          animate(character.rotation, 
            { y: 0.92, x: 0.12 }, 
            { duration: 1.5, delay: 1.5 }
          );
          
          if (monitor) {
            animate(monitor.material, 
              { opacity: 1 }, 
              { duration: 0.8, delay: 1.6 }
            );
          }
          
          if (screenLight) {
            animate(screenLight.material, 
              { opacity: 1 }, 
              { duration: 0.8, delay: 2.25 }
            );
          }
          
          setTimeout(() => {
            const whatBoxIn = document.querySelector(".what-box-in");
            if (whatBoxIn) {
              (whatBoxIn as HTMLElement).style.display = "flex";
            }
          }, 3000);
          
          if (monitor) {
            animate(monitor.position, 
              { y: 0, z: 0 }, 
              { duration: 1.5, delay: 0.75 }
            );
          }
          
          animate(".character-rim", 
            { opacity: 0, scale: 0, y: "-70%" }, 
            { duration: 2.5, delay: 1 }
          );
        }
      };
    });
    
    // What I Do section animations
    inView(".whatIDO", () => {
      return (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          animate(".character-model", 
            { y: "-100%" }, 
            { duration: 2, ease: "linear", delay: 0.5 }
          );
          
          animate(".whatIDO", 
            { y: "15%" }, 
            { duration: 1 }
          );
          
          animate(character.rotation, 
            { x: -0.04 }, 
            { duration: 1, delay: 0.5 }
          );
        }
      };
    });
  } else {
    // Mobile view adaptations
    if (window.innerWidth <= 1024) {
      inView(".what-box-in", () => {
        return (entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.display = "flex";
          }
        };
      });
    }
  }
}

export function setAllTimeline() {
  // Career section animations
  inView(".career-section", () => {
    return (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // Animate timeline
        animate(".career-timeline", 
          { maxHeight: "100%" }, 
          { duration: 0.5 }
        );
        
        animate(".career-timeline", 
          { opacity: 1 }, 
          { duration: 0.1 }
        );
        
        // Animate career info boxes
        document.querySelectorAll(".career-info-box").forEach((box, index) => {
          animate(box as HTMLElement, 
            { opacity: 1 }, 
            { duration: 0.5, delay: index * 0.1 }
          );
        });
        
        // Stop career dot animations
        document.querySelectorAll(".career-dot").forEach((dot) => {
          (dot as HTMLElement).style.animationIterationCount = "1";
        });
        
        // Move career section based on screen size
        if (window.innerWidth > 1024) {
          animate(".career-section", 
            { y: "20%" }, 
            { duration: 0.5, delay: 0.2 }
          );
        }
      }
    };
  });
}
