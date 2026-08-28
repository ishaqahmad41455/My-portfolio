import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".about-content",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <section id="about" className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* About Me Content - Centered */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        About Me
                    </h2>
                    <p className="text-gray-400 text-sm">👋 A little about how I work</p>
                </div>

                <div className="about-content bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-12">
                    <p className="text-gray-300 text-base leading-relaxed text-center">
                        I'm a <span className="text-white font-semibold">DevOps Engineer</span> specializing in cloud infrastructure, CI/CD automation, and container orchestration. I leverage <span className="text-white font-semibold">Terraform</span>, <span className="text-white font-semibold">Kubernetes</span>, and <span className="text-white font-semibold">AWS/Azure/GCP</span> to build scalable, secure, and high-performance systems that enable teams to deliver software faster and with confidence.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-6 text-center hover:border-[#3a3a6a] transition-all duration-300">
                        <p className="text-3xl md:text-4xl font-bold text-blue-400">3+</p>
                        <p className="text-gray-400 text-sm mt-1">Years of DevOps Experience</p>
                    </div>
                    <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-6 text-center hover:border-[#3a3a6a] transition-all duration-300">
                        <p className="text-3xl md:text-4xl font-bold text-blue-400">20+</p>
                        <p className="text-gray-400 text-sm mt-1">Satisfied Clients</p>
                    </div>
                    <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-6 text-center hover:border-[#3a3a6a] transition-all duration-300">
                        <p className="text-3xl md:text-4xl font-bold text-blue-400">30+</p>
                        <p className="text-gray-400 text-sm mt-1">Completed Projects</p>
                    </div>
                    <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-6 text-center hover:border-[#3a3a6a] transition-all duration-300">
                        <p className="text-3xl md:text-4xl font-bold text-blue-400">90%</p>
                        <p className="text-gray-400 text-sm mt-1">Client Retention Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;