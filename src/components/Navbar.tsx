
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

export const smoother = {
  paused: (state: boolean) => {
    const content = document.getElementById("smooth-content");
    if (content) {
      content.style.overflow = state ? "hidden" : "visible";
    }
  },
  scrollTop: (position: number) => {
    window.scrollTo({ top: position, behavior: 'smooth' });
  },
  scrollTo: (selector: string | null, immediately = false, align = "center") => {
    if (!selector) return;
    const element = document.querySelector(selector);
    if (!element) return;
    
    element.scrollIntoView({
      behavior: immediately ? 'auto' : 'smooth',
      block: align.includes('top') ? 'start' : 'center'
    });
  }
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    
    // Add scroll behavior
    const smoothContent = document.getElementById("smooth-content");
    if (smoothContent) {
      smoothContent.style.scrollBehavior = "smooth";
    }
  }, []);
  
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          example@mail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
