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

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = project.problem;
  const needsToggle = preview && preview.length > PREVIEW_LENGTH;

  return (
    <div className="rounded-xl overflow-hidden flex flex-col bg-[#1a1a2e] border border-[#2a2a4a] hover:border-[#3a3a6a] transition-all duration-300">
      {/* Thumbnail - using object-contain with reduced height and centered */}
      <div className="relative w-full h-[160px] overflow-hidden bg-[#0f0f1a] flex items-center justify-center">
        <img
          src={project.imgPath}
          alt={project.title}
          className="w-full h-full object-contain p-2"
        />
        {project.category?.[0] && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white border border-white/10">
            {project.category[0]}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2">
          {project.title}
        </h3>

        <div className="text-xs">
          {!expanded ? (
            <p className="text-gray-400 leading-relaxed">{truncate(preview, PREVIEW_LENGTH)}</p>
          ) : (
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider">Problem</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider">Solution</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider">Impact</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.impact}</p>
              </div>
            </div>
          )}

          {needsToggle && (
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 text-xs font-medium inline-flex items-center gap-1 mt-1"
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
            <span key={tech} className="text-[10px] text-gray-500 bg-[#252545] px-2 py-0.5 rounded-full">
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
              className="text-gray-400 hover:text-white text-xs transition-colors underline underline-offset-2"
            >
              View code
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xs transition-colors underline underline-offset-2"
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
    gsap.utils.toArray(".case-study-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".case-study-card",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.06 }
    );
  }, [activeFilter]);

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

          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter projects by category">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-[#1a1a2e] border border-[#2a2a4a] text-gray-400 hover:text-white hover:border-[#4a4a7a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredCaseStudies.length === 0 ? (
          <p className="text-gray-400 text-center mt-16">
            No projects in this category yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCaseStudies.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;