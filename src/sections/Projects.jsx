import { useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { caseStudies } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Order controls how the tabs are displayed. "All" always leads.
const FILTERS = ["All", "Azure", "GCP", "CI/CD", "Database", "Automation"];

// Character budget shown per Problem/Solution/Impact block before it's
// clipped and a "Read more" toggle appears. Tuned so most short blurbs
// never show the toggle at all.
const PREVIEW_LENGTH = 120;

// Cuts text at the nearest word boundary at-or-before `max` so we never
// chop a word in half.
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

// One Problem / Solution / Impact block. Collapses to PREVIEW_LENGTH
// characters and reveals a "Read more" toggle only when the full text
// is actually longer than the preview.
const ExpandableField = ({ label, text }) => {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = text && text.length > PREVIEW_LENGTH;

  return (
    <div>
      <p className="text-blue-50 italic">{label}</p>
      <p className="text-white-50">
        {expanded || !needsToggle ? text : truncate(text, PREVIEW_LENGTH)}
      </p>
      {needsToggle && (
        <button
          type="button"
          className="read-more-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read less" : "Read more"}
          <ChevronIcon />
        </button>
      )}
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

  // Re-run a quick fade-in whenever the filter changes so newly shown
  // cards don't just pop in without any transition.
  useGSAP(() => {
    gsap.fromTo(
      ".case-study-card",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.06 }
    );
  }, [activeFilter]);

  return (
    <section id="case-studies" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Featured DevOps Projects"
          sub="🚀 Real problems, real infrastructure"
        />

        {/* Category filter tabs */}
        <div className="filter-tabs mt-12" role="tablist" aria-label="Filter projects by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-tab ${
                activeFilter === filter ? "filter-tab-active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredCaseStudies.length === 0 ? (
          <p className="text-white-50 text-center mt-16">
            No projects in this category yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
            {filteredCaseStudies.map((project) => (
              <div
                key={project.title}
                className="case-study-card card-border rounded-xl overflow-hidden flex flex-col"
              >
                <div className="w-full bg-black-200 overflow-hidden">
                  <img
                    src={project.imgPath}
                    alt={project.title}
                    className="w-full h-auto block"
                  />
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.category?.map((cat) => (
                      <span key={cat} className="category-badge">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 text-sm">
                    <ExpandableField label="Problem" text={project.problem} />
                    <ExpandableField label="Solution" text={project.solution} />
                    <ExpandableField label="Impact" text={project.impact} />
                  </div>

                  <div className="flex gap-4 mt-auto pt-2">
                    {project.repoLink && project.repoLink !== "#" && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-50 underline underline-offset-4 hover:text-white transition-colors text-sm"
                      >
                        View code
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-50 underline underline-offset-4 hover:text-white transition-colors text-sm"
                      >
                        Live link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
