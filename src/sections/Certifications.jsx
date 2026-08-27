import { useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const Certifications = () => {
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredCertifications = useMemo(() => {
    if (activeLevel === "All") return certifications;
    return certifications.filter((cert) => cert.level === activeLevel);
  }, [activeLevel]);

  useGSAP(() => {
    gsap.fromTo(
      ".cert-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#certifications",
          start: "top 75%",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".cert-card",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.06 }
    );
  }, [activeLevel]);

  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub="📜 Continuous learning, validated"
        />

        {/* Level filter tabs */}
        <div className="filter-tabs mt-12" role="tablist" aria-label="Filter certifications by level">
          {LEVELS.map((level) => (
            <button
              key={level}
              type="button"
              role="tab"
              aria-selected={activeLevel === level}
              onClick={() => setActiveLevel(level)}
              className={`filter-tab ${
                activeLevel === level ? "filter-tab-active" : ""
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {filteredCertifications.length === 0 ? (
          <p className="text-white-50 text-center mt-16">
            No certifications at this level yet — check back soon.
          </p>
        ) : (
          <div className="grid-3-cols mt-10">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.title}
                className="cert-card card-border rounded-xl p-8 flex flex-col gap-4 relative"
              >
                {cert.level && (
                  <span
                    className={`level-badge level-badge-${cert.level.toLowerCase()}`}
                  >
                    {cert.level}
                  </span>
                )}

                <div className="size-25 flex items-center justify-center rounded-full bg-black-200 overflow-hidden">
                  <img
                    src={cert.imgPath}
                    alt={cert.issuer}
                    className="w-full h-full object-contain p-2.5"
                  />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {cert.title}
                  </h3>
                  <p className="text-white-50 mt-1">
                    {cert.issuer} &bull; {cert.date}
                  </p>
                </div>
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 underline underline-offset-4 hover:text-white transition-colors w-fit"
                  >
                    View credential
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
