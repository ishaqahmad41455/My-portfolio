import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 30, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <TitleHeader
            title="How I Can Contribute & My Key Skills"
            sub="🤝 What I Bring to the Table"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="tech-card bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-4 flex flex-col items-center text-center gap-3 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#0f0f1a] overflow-hidden shrink-0 transition-transform duration-500 hover:scale-110">
                {techStackIcon.imgPath ? (
                  <img
                    src={techStackIcon.imgPath}
                    alt={techStackIcon.name}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <TechIconCardExperience model={techStackIcon} />
                )}
              </div>
              <p className="text-white text-xs md:text-sm font-semibold leading-snug">
                {techStackIcon.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;