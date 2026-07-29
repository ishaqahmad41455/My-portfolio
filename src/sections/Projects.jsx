import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { caseStudies } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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

  return (
    <section id="case-studies" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Featured DevOps Projects"
          sub="🚀 Real problems, real infrastructure"
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-16">
          {caseStudies.map((project) => (
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
                  <div>
                    <p className="text-blue-50 italic">Problem</p>
                    <p className="text-white-50">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-blue-50 italic">Solution</p>
                    <p className="text-white-50">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-blue-50 italic">Impact</p>
                    <p className="text-white-50">{project.impact}</p>
                  </div>
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
      </div>
    </section>
  );
};

export default Projects;
