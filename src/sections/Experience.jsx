import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useGSAP(() => {
    // Timeline line animation
    gsap.fromTo(
      ".timeline-line",
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1.5,
        },
      }
    );

    // Experience cards staggered animation
    gsap.utils.toArray(".exp-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Timeline dots animation
    gsap.utils.toArray(".timeline-dot").forEach((dot, index) => {
      gsap.fromTo(
        dot,
        { scale: 0, backgroundColor: "#1a1a2e" },
        {
          scale: 1,
          backgroundColor: "#3b82f6",
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: index * 0.15 + 0.3,
          scrollTrigger: {
            trigger: dot,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      gsap.utils.toArray(".exp-card, .timeline-dot, .timeline-line").forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      });
    }
  }, []);

  return (
    // <section id="experience" className="py-20 px-4 md:px-8 bg-[#0a0a1a]">
    <section id="experience" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <TitleHeader
            title="Professional Experience"
            sub="🚀 Building, automating, and scaling cloud infrastructure"
          />
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-[#2a2a4a] overflow-hidden">
            <div className="timeline-line w-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600/50"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 pl-12 md:pl-16">
            {expCards.map((card, index) => (
              <div key={card.id || index} className="relative">
                {/* Timeline Dot */}
                <div className="timeline-dot absolute -left-[47px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-blue-500/50 bg-[#1a1a2e] transition-all duration-300 shadow-lg shadow-blue-500/20"></div>

                {/* Experience Card */}
                <div className="exp-card bg-gradient-to-br from-[#12122a] to-[#1a1a2e] border border-[#2a2a4a] rounded-2xl p-6 md:p-8 hover:border-blue-400/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-gradient-to-br hover:from-[#1a1a3a] hover:to-[#22224a] backdrop-blur-sm">
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#0f0f1a] border border-[#2a2a4a] flex items-center justify-center overflow-hidden shrink-0 hover:scale-105 transition-transform duration-300">
                        <img
                          src={card.logoPath}
                          alt={`${card.company} logo`}
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-semibold tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-blue-400 text-sm font-medium mt-0.5">
                          {card.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                          <span className="text-gray-400 text-sm">
                            {card.date}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[#2a2a4a]"></span>
                          <span className="text-gray-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {card.location || "Remote"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Short Summary */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {card.shortSummary || card.description}
                  </p>

                  {/* Collapsible Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedId === card.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-[#2a2a4a] space-y-4">
                      {/* Key Contributions */}
                      <div>
                        <h4 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                          Key Contributions
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {card.responsibilities?.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-blue-400 mt-0.5">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {card.achievements && (
                        <div>
                          <h4 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {card.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <span className="text-yellow-400 mt-0.5">✦</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {card.technologies && (
                        <div>
                          <h4 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {card.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-[#1a1a3a] border border-[#2a2a4a] rounded-full text-gray-300 text-xs font-medium hover:border-blue-400/50 hover:bg-[#22224a] hover:text-blue-300 transition-all duration-300 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* View Details / Read More Button */}
                  <button
                    onClick={() => toggleExpand(card.id)}
                    className="mt-4 group flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>
                      {expandedId === card.id ? "Show less" : "View details"}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedId === card.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;