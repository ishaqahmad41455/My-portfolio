import { useEffect, useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCheckCircle,
  FaRegCalendarAlt,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
const ITEMS_PER_PAGE = 6;
const PREVIEW_LENGTH = 78;

const truncate = (text, max) => {
  if (!text || text.length <= max) return text;
  const clipped = text.slice(0, max);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
};

const CertCard = ({ cert, index }) => {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = cert.description && cert.description.length > PREVIEW_LENGTH;
  const hasLiveCredential = cert.credentialUrl && cert.credentialUrl !== "#";

  return (
    <div 
      className="cert-card rounded-xl overflow-hidden flex flex-col bg-[#1a1a2e] border border-[#2a2a4a] hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail - using object-contain with proper sizing */}
      <div className="relative w-full h-[160px] overflow-hidden bg-[#0f0f1a] flex items-center justify-center">
        <img 
          src={cert.imgPath} 
          alt={cert.issuer} 
          className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-110"
        />
        {cert.level && (
          <span className={`absolute top-3 right-3 px-3 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wider ${
            cert.level.toLowerCase() === 'beginner' ? 'bg-green-500/20 text-green-400' :
            cert.level.toLowerCase() === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          } animate-pulse`}>
            {cert.level}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
          {cert.title}
        </h3>

        {cert.description && (
          <p className="text-gray-400 text-xs leading-relaxed">
            {expanded || !needsToggle
              ? cert.description
              : truncate(cert.description, PREVIEW_LENGTH)}{" "}
            {needsToggle && (
              <button
                type="button"
                className="text-blue-400 hover:text-blue-300 text-xs font-medium inline-flex align-baseline transition-all duration-300"
                aria-expanded={expanded}
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        )}

        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <FaRegCalendarAlt size={10} />
          <span>
            {cert.issuer} • {cert.date}
          </span>
        </div>

        <div className="flex items-center justify-between mt-1 pt-3 border-t border-[#2a2a4a]">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-green-400">
            <FaCheckCircle size={10} />
            Verified
          </span>

          {hasLiveCredential ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Live
              <FaExternalLinkAlt size={8} />
            </a>
          ) : (
            <span className="text-[10px] text-gray-600">Private</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const levelCounts = useMemo(() => {
    const counts = { All: certifications.length };
    LEVELS.slice(1).forEach((level) => {
      counts[level] = certifications.filter((cert) => cert.level === level).length;
    });
    return counts;
  }, []);

  const filteredCertifications = useMemo(() => {
    if (selectedLevel === "All") return certifications;
    return certifications.filter((cert) => cert.level === selectedLevel);
  }, [selectedLevel]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCertifications.length / ITEMS_PER_PAGE)
  );

  const paginatedCertifications = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCertifications.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCertifications, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel]);

  const goToPage = (page) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    document
      .getElementById("certifications")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useGSAP(() => {
    gsap.utils.toArray(".cert-card").forEach((card) => {
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
      ".cert-card",
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
  }, [selectedLevel, currentPage]);

  return (
    <section id="certifications" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Certifications
            </h2>
            <p className="text-gray-400 text-sm">📜 Continuous learning, validated</p>
          </div>

          <div className="relative w-fit">
            <label htmlFor="cert-level-filter" className="sr-only">
              Filter by certification level
            </label>
            <select
              id="cert-level-filter"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="appearance-none bg-[#1a1a2e] border border-[#2a2a4a] text-white text-sm rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-[#4a4a7a] cursor-pointer"
            >
              {LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level === "All" ? "All Tiers" : level} ({levelCounts[level]})
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {paginatedCertifications.length === 0 ? (
          <p className="text-gray-400 text-center mt-16 animate-pulse">
            No certifications at this level yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedCertifications.map((cert, index) => (
              <CertCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        )}

        {filteredCertifications.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-[#2a2a4a]">
            <p className="text-gray-400 text-xs">
              Showing Page <span className="text-white font-semibold">{currentPage}</span> of{" "}
              {totalPages} ({filteredCertifications.length} items)
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a4a] text-gray-400 hover:text-white hover:border-[#4a4a7a] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <FaChevronLeft size={12} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                    page === currentPage
                      ? "bg-blue-600 text-white"
                      : "bg-[#1a1a2e] border border-[#2a2a4a] text-gray-400 hover:text-white hover:border-[#4a4a7a]"
                  }`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a4a] text-gray-400 hover:text-white hover:border-[#4a4a7a] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;