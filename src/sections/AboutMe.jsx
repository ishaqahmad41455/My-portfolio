import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import AnimatedCounter from "../components/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".about-content",
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".stat-card",
            { y: 30, opacity: 0, scale: 0.92 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#counter",
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section id="about" className="pt-20 md:pt-28 pb-16 md:pb-24 px-4 md:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                            About Me
                        </h2>
                        <p className="text-gray-400 text-sm">👋 A little about how I work</p>
                    </div>
                </div>

                <div className="about-content bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 max-w-4xl mx-auto mb-14 md:mb-16 p-6 md:p-10">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
                        I'm a <span className="text-white font-semibold">DevOps Engineer</span> specializing
                        in cloud infrastructure, CI/CD automation, and container orchestration. I leverage{" "}
                        <span className="text-white font-semibold">Terraform</span>,{" "}
                        <span className="text-white font-semibold">Kubernetes</span>, and{" "}
                        <span className="text-white font-semibold">AWS/Azure/GCP</span> to build scalable,
                        secure, and high-performance systems that enable teams to deliver software faster
                        and with confidence.
                    </p>
                </div>

                {/* Stats now live here only — see AnimatedCounter.jsx */}
                <AnimatedCounter />
            </div>
        </section>
    );
};

export default AboutMe;