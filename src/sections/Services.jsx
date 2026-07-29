import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { services, fiverrUrl } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#services",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What I Offer"
          sub="🛠️ Freelance DevOps & Cloud Services"
        />

        <div className="grid-3-cols mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="size-25 flex items-center justify-center rounded-full bg-black-200 overflow-hidden">
                <img
                  src={service.imgPath}
                  alt={service.title}
                  className="w-full h-full object-contain p-2.5"
                />
              </div>
              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-white-50">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex-center mt-14">
          <a
            href={fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fiverr-cta-btn"
          >
            Hire Me on Fiverr
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
