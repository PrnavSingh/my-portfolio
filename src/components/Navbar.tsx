import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;

    if (isDesktop) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);

      let links = document.querySelectorAll(".header ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        element.addEventListener("click", (e) => {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        });
      });
    }

    window.addEventListener("resize", () => {
      if (smoother) ScrollSmoother.refresh(true);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleMobileNavClick = (sectionId: string) => {
    closeMenu();
    // Small delay to let menu close animation start before scrolling
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          PS
        </a>
        <a
          href="mailto:thaakurpranavsingh@gmail.com"
          className="navbar-connect say-hello-btn"
          data-cursor="disable"
        >
          Say Hello &nbsp;↗
        </a>

        {/* Hamburger button — only visible on mobile */}
        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          data-cursor="disable"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop nav */}
        <ul className="nav-desktop">
          <li><a data-href="#about" href="#about"><HoverLinks text="ABOUT" /></a></li>
          <li><a data-href="#techstack" href="#techstack"><HoverLinks text="TECH STACK" /></a></li>
          <li><a data-href="#skills" href="#skills"><HoverLinks text="SKILLS" /></a></li>
          <li><a data-href="#work" href="#work"><HoverLinks text="WORK" /></a></li>
          <li><a data-href="#contact" href="#contact"><HoverLinks text="CONTACT" /></a></li>
        </ul>
      </div>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleMobileNavClick("about"); }}>ABOUT</a>
          <a href="#techstack" onClick={(e) => { e.preventDefault(); handleMobileNavClick("techstack"); }}>TECH STACK</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleMobileNavClick("skills"); }}>SKILLS</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); handleMobileNavClick("work"); }}>WORK</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleMobileNavClick("contact"); }}>CONTACT</a>
          <a href="mailto:thaakurpranavsingh@gmail.com" onClick={closeMenu} className="mobile-email">
            thaakurpranavsingh@gmail.com
          </a>
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
