import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

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
        <section id="about" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="About Me"
                    sub="👋 A little about how I work"
                />

                <div className="about-content card-border rounded-xl p-8 md:p-12 mt-16 max-w-4xl mx-auto">
                    <p className="text-white-50 md:text-lg leading-relaxed">
                        I’m Ishaq Ahmad Khan, a DevOps Engineer with 4+ years of experience
                        working across cloud infrastructure, automation, CI/CD, containerization,
                        and deployment workflows. I specialize in building reliable, scalable,
                        and automated environments that help development teams deliver software
                        faster and with greater confidence. My experience spans AWS, Microsoft
                        Azure, and Google Cloud Platform (GCP), with a strong focus on GCP and
                        infrastructure automation using Terraform.
                    </p>

                    <p className="text-white-50 md:text-lg leading-relaxed mt-5">
                        I work across the complete software delivery lifecycle — from designing
                        and provisioning cloud infrastructure with Terraform, to building and
                        maintaining CI/CD pipelines using Jenkins, GitHub Actions, and Azure
                        DevOps. I containerize and orchestrate applications with Docker and
                        Kubernetes, and have hands-on experience with services and tools such as
                        GKE, Cloud Run, Azure App Service, Azure Storage, Azure Key Vault,
                        Azure Functions, Nginx, Apache, IIS, Ansible, SonarQube, Artifactory,
                        Prometheus, and Grafana.
                    </p>

                    <p className="text-white-50 md:text-lg leading-relaxed mt-5">
                        My approach to DevOps is simple: automate what can be automated, make
                        deployments predictable, build infrastructure that is easy to maintain,
                        and create systems that teams can confidently operate. I focus on
                        improving reliability, reducing manual effort, strengthening deployment
                        processes, and giving teams better visibility into their applications
                        and infrastructure through monitoring and observability.
                    </p>

                    <p className="text-white-50 md:text-lg leading-relaxed mt-5">
                        Beyond infrastructure and pipelines, I enjoy solving complex technical
                        problems and continuously exploring new technologies in cloud computing,
                        DevOps, automation, Kubernetes, infrastructure as code, and machine
                        learning. I believe that good engineering is not only about making
                        systems work — it is about making them scalable, secure, maintainable,
                        and easy for others to understand.
                    </p>

                    <p className="text-white-50 md:text-lg leading-relaxed mt-5">
                        I’m always looking for opportunities to work on challenging projects,
                        collaborate with talented teams, and build solutions that create real
                        impact. Whether it’s migrating infrastructure to the cloud, automating a
                        deployment pipeline, improving Kubernetes workloads, or designing
                        infrastructure as code, I enjoy turning complex requirements into
                        reliable and practical solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">
                                What I value
                            </h3>
                            <p className="text-white-50">
                                Reliability, clear communication, and infrastructure that's
                                easy for the next engineer to understand.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">
                                How I work
                            </h3>
                            <p className="text-white-50">
                                Small, automated, reversible changes — with monitoring and
                                rollback plans built in from day one.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">
                                What I'm exploring
                            </h3>
                            <p className="text-white-50">
                                Applying ML/automation to infrastructure operations and
                                deepening my Kubernetes expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
