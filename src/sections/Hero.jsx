import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import DevOpsHeroVisual from "../components/DevOpsHeroVisual";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".availability-badge",
      { y: -12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
    )
      .fromTo(
        ".profile-intro",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "<0.1"
      )
      .fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
        "-=0.6"
      )
      .fromTo(
        ".hero-subtext",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-stat",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );

    gsap.fromTo(
      ".floating-badge",
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, delay: 0.8, ease: "back.out(1.7)" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Availability badge */}
            <div className="availability-badge">
              <span className="pulse-dot" />
              Available for new projects
            </div>

            {/* Profile picture + name */}
            <div className="profile-intro">
              <img
                src="/images/profile.jpg"
                alt="Ishaq Ahmad Khan"
                className="profile-pic"
              />
              <div>
                <h2 className="profile-name">Ishaq Ahmad Khan</h2>
                <p className="profile-title">DevOps Engineer &bull; Cloud &amp; Automation</p>
              </div>
            </div>

            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>
                Ideas into <span className="gradient-text-hero">Production</span>
              </h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="hero-subtext text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl">
              Hi, I'm Ishaq — a DevOps Engineer building and automating scalable, production-grade
              cloud infrastructure.
            </p>

            {/* Quick trust signals */}
            {/* <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">3+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">30+</span>
                <span className="hero-stat-label">Projects Shipped</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">20+</span>
                <span className="hero-stat-label">Happy Clients</span>
              </div>
            </div> */}

            <div className="hero-cta flex flex-wrap items-center gap-5 relative z-20">
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />

              <a
                href="/cv/Ishaq_Ahmad_Khan_CV.pdf"
                download="Ishaq_Ahmad_Khan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv-btn"
              >
                <span>Download CV</span>
                <img
                  src="/images/arrow-down.svg"
                  alt=""
                  className="size-4 -rotate-90"
                />
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: Animated DevOps visual */}
        <figure>
          <div className="hero-3d-layout">
            <DevOpsHeroVisual />
          </div>
        </figure>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <div className="scroll-cue-mouse">
          <div className="scroll-cue-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;