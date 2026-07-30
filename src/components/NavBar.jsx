import { useState, useEffect } from "react";

import { navLinks, socialImgs } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track which section is currently in view, so we can highlight the matching link
  const [activeLink, setActiveLink] = useState(navLinks[0]?.link ?? "");

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Watch every section referenced by the nav links and highlight whichever
  // one is currently centered in the viewport as the user scrolls.
  useEffect(() => {
    const sectionIds = navLinks
      .map(({ link }) => link.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      // Treat a section as "active" once it crosses the upper-middle of the screen
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // only show GitHub + LinkedIn in the navbar (Footer shows the full social list)
  const navSocials = socialImgs.filter(
    (social) => social.name === "github" || social.name === "linkedin"
  );

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          <span className="logo-text">Ishaq Ahmad Khan</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li
                key={name}
                className={`group ${activeLink === link ? "active" : ""}`}
              >
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {navSocials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-social-icon"
                aria-label={social.name}
              >
                <img src={social.imgPath} alt={social.name} />
              </a>
            ))}
          </div>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
