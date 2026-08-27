import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Font Awesome Icons
import { 
  FaDocker, 
  FaGitAlt, 
  FaGithub,
  FaMicrosoft
} from 'react-icons/fa';

// Simple Icons (for DevOps tools)
import { 
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiVercel,
  SiTerraform,
  SiKubernetes,
  SiJenkins,
  SiLinux,
  SiAzuredevops
} from 'react-icons/si';

const getTechStack = () => [
  { name: "AWS", icon: <SiAmazonaws /> },
  { name: "AZURE", icon: <SiMicrosoftazure /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "VERCEL", icon: <SiVercel /> },
  { name: "DOCKER", icon: <FaDocker /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Azure DevOps", icon: <SiAzuredevops /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const DevOpsTechSlider = () => {
  const techStack = useMemo(getTechStack, []);
  const memoizedItems = useMemo(() => [...techStack, ...techStack], [techStack]);

  return (
    <div className="w-full py-6 sm:py-10 overflow-hidden relative bg-transparent select-none">
      
      {/* Side Fade Mask - Dark Gradient */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />

      {/* Slider Track */}
      <motion.div 
        className="flex gap-6 sm:gap-10 md:gap-16 items-center w-max will-change-transform transform-gpu"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ 
          duration: 30,
          ease: "linear", 
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {memoizedItems.map((item, index) => (
          <div 
            key={`${item.name}-${index}`} 
            className="flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 min-w-[50px] sm:min-w-[80px] group cursor-pointer"
          >
            {/* Icon with Green Glow Effect */}
            <div className="text-2xl sm:text-4xl md:text-5xl text-emerald-400/80 group-hover:text-emerald-300 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] flex items-center justify-center">
              {item.icon}
            </div>

            {/* Tool Name Label */}
            <span className="text-[10px] sm:text-xs text-gray-400 font-medium group-hover:text-emerald-300 transition-colors tracking-wide uppercase">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DevOpsTechSlider;