import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
// import HeroExperience from "../components/models/hero_models/HeroExperience";
import DevOpsHeroVisual from "../components/DevOpsHeroVisual";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".profile-intro",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
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
          <div className="flex flex-col gap-7">
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
                Shaping
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
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Ishaq, a developer based in Croatia with a passion for
              code.
            </p>

            <div className="flex flex-wrap items-center gap-5 relative z-20">
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
            {/* <HeroExperience /> */}
            <DevOpsHeroVisual />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
