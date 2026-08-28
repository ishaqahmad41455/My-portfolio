import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { testimonials } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    gsap.utils.toArray(".testimonial-card").forEach((card) => {
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
      ".testimonial-card",
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
    <section id="testimonials" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-sm">⭐ Trusted by clients on Fiverr & beyond</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-5 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with avatar and name */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#0f0f1a] flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <img 
                      src={testimonial.imgPath} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-[10px]">
                      {testimonial.mentions}
                    </p>
                  </div>
                </div>

                {testimonial.source === "fiverr" && (
                  <span className="text-[10px] font-medium bg-green-600/20 text-green-400 px-2 py-0.5 rounded-full whitespace-nowrap animate-pulse">
                    ✓ Fiverr Client
                  </span>
                )}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 text-xs leading-relaxed flex-1">
                "{testimonial.review}"
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-0.5 mt-3 pt-3 border-t border-[#2a2a4a]">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-gray-500 text-[10px] ml-1">5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;