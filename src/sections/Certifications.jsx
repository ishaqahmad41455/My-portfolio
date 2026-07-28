import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
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

  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub="📜 Continuous learning, validated"
        />

        <div className="grid-3-cols mt-16">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="cert-card card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="size-14 flex items-center justify-center rounded-full bg-black-200">
                <img
                  src={cert.imgPath}
                  alt={cert.issuer}
                  className="size-8 object-contain"
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
      </div>
    </section>
  );
};

export default Certifications;
