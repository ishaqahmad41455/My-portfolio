import { useMemo } from "react";
import { motion } from "framer-motion";

import { FaAws, FaMicrosoft, FaDocker, FaGitAlt, FaGithub, FaShieldAlt } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import {
  SiGooglecloud,
  SiVercel,
  SiTerraform,
  SiKubernetes,
  SiJenkins,
  SiLinux,
  SiPrometheus,
  SiGrafana,
  SiClaude,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

// OpenAI's mark was pulled from Simple Icons (same trademark-takedown
// pattern as AWS/Azure/Microsoft), and no other icon set carries a
// current replacement — so it's drawn inline instead of importing a
// package export that could disappear again.
const ChatGptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1em] h-[1em]">
    <path d="M22.28 9.82a5.99 5.99 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.99 5.99 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 5.99 5.99 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.99 5.99 0 0 0 13.26 24a6.06 6.06 0 0 0 5.78-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.76-7.08ZM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .4-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.5 4.49ZM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.07l-4.83 2.79a4.5 4.5 0 0 1-6.14-1.66ZM2.34 7.86a4.48 4.48 0 0 1 2.35-1.97v5.68a.77.77 0 0 0 .39.67l5.83 3.37-2.02 1.17a.08.08 0 0 1-.07 0L3.99 13.99a4.5 4.5 0 0 1-1.65-6.13Zm16.6 3.86-5.84-3.38 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.7 8.1v-5.68a.79.79 0 0 0-.38-.67ZM20.9 8.6l-.14-.09-4.78-2.76a.78.78 0 0 0-.78 0l-5.84 3.37V6.79a.07.07 0 0 1 .03-.07l4.83-2.78a4.5 4.5 0 0 1 6.68 4.66ZM9.14 12.86l-2.02-1.17a.07.07 0 0 1-.04-.06V6.05a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.78.78 0 0 0-.4.68v6.74Zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" />
  </svg>
);

// DevOps / cloud tool stack shown in the marquee.
//
// Note: Simple Icons pulled its Azure, Azure DevOps, and Amazon/AWS
// brand marks a while back (trademark takedown requests), and Font
// Awesome never shipped an Azure mark either. Azure / Azure DevOps
// come from react-icons/vsc (the VS Code icon set) instead, which
// still carries both marks — so every item here renders as a real
// icon component, no image fallbacks needed.
//
// SOC 2 has no public brand mark anywhere (it's an audit standard,
// not a company logo), so it uses a generic shield icon instead.
const getTechStack = () => [
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <VscAzure /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Azure DevOps", icon: <VscAzureDevops /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Prometheus", icon: <SiPrometheus /> },
  { name: "Grafana", icon: <SiGrafana /> },
  { name: "SOC 2", icon: <FaShieldAlt /> },
  { name: "Claude", icon: <SiClaude /> },
  { name: "ChatGPT", icon: <ChatGptIcon /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const LogoShowcase = () => {
  const techStack = useMemo(getTechStack, []);
  // Duplicate the list so the strip can loop from -50% back to 0% with
  // no visible seam.
  const marqueeItems = useMemo(() => [...techStack, ...techStack], [techStack]);

  return (
    <div className="w-full py-6 sm:py-10 my-10 md:my-20 overflow-hidden relative select-none">
      {/* Side fade masks — matches the site's black background so items
          appear to dissolve in/out at the edges instead of clipping. */}
      <div className="absolute inset-y-0 left-0 w-10 sm:w-20 md:w-32 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-10 sm:w-20 md:w-32 bg-gradient-to-l from-black via-black/70 to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <motion.div
        className="flex gap-8 sm:gap-12 md:gap-16 items-center w-max will-change-transform transform-gpu"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 34,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex flex-col items-center justify-center gap-2 sm:gap-3 min-w-[60px] sm:min-w-[80px] group cursor-pointer"
          >
            {/* Emerald icon with hover glow */}
            <div className="text-3xl sm:text-4xl md:text-5xl text-emerald-400/80 group-hover:text-emerald-300 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.7)] flex items-center justify-center">
              {item.icon}
            </div>

            {/* Label */}
            <span className="text-[11px] sm:text-xs text-white-50 font-medium group-hover:text-emerald-300 transition-colors tracking-wide text-center whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoShowcase;
