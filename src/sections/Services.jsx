import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { services, fiverrUrl, upworkUrl } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.utils.toArray(".service-card").forEach((card) => {
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
      ".service-card",
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
  }, []);

  return (
    <section id="services" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            What I Offer
          </h2>
          <p className="text-gray-400 text-sm">🛠️ Freelance DevOps & Cloud Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-5 flex flex-col items-center text-center hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0f0f1a] overflow-hidden mb-3 transition-transform duration-500 hover:scale-110">
                <img
                  src={service.imgPath}
                  alt={service.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1.5 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-3 flex-wrap">
          <a
            href={fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fiverr-cta-btn px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Hire Me on Fiverr
          </a>

          <a
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="upwork-cta-btn px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Hire Me on Upwork
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;