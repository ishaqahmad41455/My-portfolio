import { useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { caseStudies } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = ["All", "Azure", "GCP", "CI/CD", "Database", "Automation"];
const PREVIEW_LENGTH = 100;

const truncate = (text, max) => {
  if (!text || text.length <= max) return text;
  const clipped = text.slice(0, max);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
};

const ChevronIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = project.problem;
  const needsToggle = preview && preview.length > PREVIEW_LENGTH;

  return (
    <div 
      className="project-card rounded-xl overflow-hidden flex flex-col bg-[#1a1a2e] border border-[#2a2a4a] hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail - using object-contain with reduced height and centered */}
      <div className="relative w-full h-[160px] overflow-hidden bg-[#0f0f1a] flex items-center justify-center">
        <img
          src={project.imgPath}
          alt={project.title}
          className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-110"
        />
        {project.category?.[0] && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white border border-white/10 animate-pulse">
            {project.category[0]}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="text-xs">
          {!expanded ? (
            <p className="text-gray-400 leading-relaxed">{truncate(preview, PREVIEW_LENGTH)}</p>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="animate-fadeIn">
                <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider">Problem</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.problem}</p>
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider">Solution</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.solution}</p>
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider">Impact</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.impact}</p>
              </div>
            </div>
          )}

          {needsToggle && (
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 text-xs font-medium inline-flex items-center gap-1 mt-1 transition-all duration-300 hover:gap-2"
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Read less" : "Read more"}
              <ChevronIcon />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="text-[10px] text-gray-500 bg-[#252545] px-2 py-0.5 rounded-full transition-all duration-300 hover:bg-[#3a3a6a] hover:text-white hover:scale-105 cursor-default"
            >
              #{tech.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-2 pt-2 border-t border-[#2a2a4a]">
          {project.repoLink && project.repoLink !== "#" && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xs transition-all duration-300 underline underline-offset-2 hover:underline-offset-4"
            >
              View code
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xs transition-all duration-300 underline underline-offset-2 hover:underline-offset-4"
            >
              Live link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCaseStudies = useMemo(() => {
    if (activeFilter === "All") return caseStudies;
    return caseStudies.filter((project) =>
      project.category?.includes(activeFilter)
    );
  }, [activeFilter]);

  useGSAP(() => {
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 30, opacity: 0, scale: 0.92 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: "power2.out", 
        stagger: 0.08 
      }
    );
  }, [activeFilter]);

  useGSAP(() => {
    gsap.fromTo(
      ".filter-btn",
      { y: -10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".filter-tabs",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section id="case-studies" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Featured DevOps Projects
            </h2>
            <p className="text-gray-400 text-sm">🚀 Real problems, real infrastructure</p>
          </div>

          <div className="filter-tabs flex flex-wrap gap-1.5" role="tablist" aria-label="Filter projects by category">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white scale-100"
                    : "bg-[#1a1a2e] border border-[#2a2a4a] text-gray-400 hover:text-white hover:border-[#4a4a7a] hover:scale-105"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredCaseStudies.length === 0 ? (
          <p className="text-gray-400 text-center mt-16 animate-pulse">
            No projects in this category yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCaseStudies.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;