const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#case-studies",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Cloud", imgPath: "/images/Cloud.svg" },
  { text: "DevOps", imgPath: "/images/DevOps.svg" },
  { text: "Automation", imgPath: "/images/Automation.svg" },
  { text: "Infrastructure", imgPath: "/images/Infrastructure.svg" },
  { text: "CI/CD", imgPath: "/images/CICD.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of DevOps Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/aws1.png",
  },
  {
    imgPath: "/images/logos/azure1.png",
  },
  {
    imgPath: "/images/logos/gcp1.png",
  },
  {
    imgPath: "/images/logos/Docker.png",
  },
  {
    imgPath: "/images/logos/Vercel.png",
  },
  {
    imgPath: "/images/logos/Microsoft.png",
  },
  {
    imgPath: "/images/logos/azure-devops.png",
  },
  {
    imgPath: "/images/logos/terraform1.png",
  },
  {
    imgPath: "/images/logos/kuberneties1.png",
  },
  {
    imgPath: "/images/logos/jenkins1.png",
  },
  {
    imgPath: "/images/logos/linux1.png",
  },
  {
    imgPath: "/images/logos/git.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "AWS",
    imgPath: "/images/icons/aws.png",
  },
  {
    name: "Az",
    imgPath: "/images/icons/azure.png",
  },
  {
    name: "GCP",
    imgPath: "/images/icons/gcp.png",
  },
  {
    name: "Terraform",
    imgPath: "/images/icons/terraform.png",
  },
  {
    name: "Kubernetes",
    imgPath: "/images/icons/kubernetes.png",
  },
  {
    name: "Docker",
    imgPath: "/images/icons/Docker.png",
  },
  {
    name: "Git",
    imgPath: "/images/icons/git.svg",
  },
];

const techStackIcons = [
  {
    name: "AWS",
    modelPath: "/models/glbfiles/aws-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    // The azure-transformed.glb has no colored/front-facing geometry
    // pointed at the camera (see chat notes) — falls back to the flat icon.
    name: "Azure",
    // imgPath: "/images/icons/azure.png",
    modelPath: "/models/glbfiles/azure.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    // gcp-transformed.glb lost its real shape in the optimize/compress step
    // and renders as an unrecognizable capsule — flat icon looks correct.
    name: "GCP",
    // imgPath: "/images/icons/gcp.png",
    modelPath: "/models/glbfiles/gcp-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Terraform",
    modelPath: "/models/glbfiles/terraform-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Kubernetes",
    modelPath: "/models/glbfiles/kubernetes-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    // Same issue as Azure — the extruded side walls dominate the view
    // and the whale reads as a near-black silhouette. Flat icon instead.
    name: "Docker",
    // imgPath: "/images/icons/docker.png",
    modelPath: "/models/glbfiles/docker.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/glbfiles/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Azure DevOps",
    modelPath: "/models/glbfiles/azure-devops-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  }, 
  {
    name: "Grafana",
    modelPath: "/models/glbfiles/grafana-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },  
  // {
  //   name: "Machine Learning",
  //   modelPath: "/models/glbfiles/machine-learning-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },  
  {
    name: "Data Analytics",
    modelPath: "/models/glbfiles/data-analysis-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },        
];

const expCards = [
  {
    review:
      "Ishaq has demonstrated strong DevOps expertise by designing and managing reliable CI/CD pipelines, automating cloud infrastructure, and supporting production workloads across multiple environments.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "DevOps Engineer",
    date: "April 2025 - Present",
    responsibilities: [
      "Architected and managed CI/CD pipelines in Azure DevOps for .NET, Java, and Node.js applications, reducing deployment lead time by 40%.",
      "Engineered scalable hosting infrastructure using Azure App Services and IIS with health checks and automated rollback strategies.",
      "Designed and managed deployment strategies across QA, Pre-Production, and Production environments.",
      "Integrated Azure Blob Storage into deployment workflows and improved document storage reliability.",
      "Implemented least-privilege access governance using Azure AD and optimized source control workflows using Azure Repos.",
      "Used Jenkins and GitHub Actions to automate build and deployment workflows across application environments.",
    ],
  },
  {
    review:
      "At Anemoia.dev, Ishaq worked extensively on cloud infrastructure, automation, CI/CD, Docker deployments, and Linux administration, helping teams deliver applications faster and more reliably.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "DevOps Engineer",
    date: "July 2023 - April 2025",
    responsibilities: [
      "Built CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps, improving deployment reliability by 35%.",
      "Implemented Docker-based application deployments across cloud and on-premises environments.",
      "Developed Bash and Shell automation scripts that eliminated approximately 80% of repetitive server tasks.",
      "Managed Linux servers, troubleshooting system issues and optimizing application and infrastructure performance.",
      "Managed Git and GitHub repositories, branching strategies, code reviews, and team collaboration workflows.",
      "Provisioned cloud infrastructure using Terraform, achieving up to 70% faster environment setup across projects.",
    ],
  },
  {
    review:
      "Ishaq was accepted into the FlyRank AI Internship program as a Machine Learning Engineering Intern, gaining experience in a structured six-week machine learning internship program.",
    imgPath: "/images/exp6.png",
    logoPath: "/images/logo6.png",
    title: "Machine Learning Engineering Intern",
    date: "July 2026 - August 2026",
    responsibilities: [
      "Accepted into the FlyRank AI Internship program as a Machine Learning Engineering Intern.",
      "Participated in a six-week Machine Learning internship program from July 1, 2026, to August 12, 2026.",
      "Developed practical exposure to machine learning engineering through participation in the internship program.",
    ],
  },
];

const expLogos = [
  {
    name: "logo5",
    imgPath: "/images/logo5.png",
  },
  {
    name: "logo4",
    imgPath: "/images/logo4.png",
  },
  {
    name: "logo6",
    imgPath: "/images/logo6.png",
  },
];

// EDIT ME: replace with your real certifications. Remove entries you don't hold.
const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    imgPath: "/images/Icons/aws_cer1.png",
    credentialUrl: "#",
  },
  {
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "2026",
    imgPath: "/images/Icons/azure_cer1.png",
    credentialUrl: "#",
  },
  // --- new Google Cloud Skill Badges ---
  {
    title: "Implement Cloud Security Fundamentals on Google Cloud",
    issuer: "Google Cloud",
    date: "Aug 2026",
    imgPath: "/images/Icons/gcp_bagde.png",
    credentialUrl: "https://www.credly.com/earner/earned/badge/3d7676cc-e366-4970-88f9-0262ffcc4998",
  },
  {
    title: "Implementing Cloud Load Balancing for Compute Engine",
    issuer: "Google Cloud",
    date: "Aug 2026",
    imgPath: "/images/Icons/gcp_bagde.png",
    credentialUrl: "https://www.credly.com/badges/43cdbe76-c20e-4ce2-bd75-273431d6c415",
  },
  {
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    date: "Aug 2026",
    imgPath: "/images/Icons/gcp_bagde.png",
    credentialUrl: "https://www.credly.com/earner/earned/badge/a479ce08-c19c-4e8d-bb88-22a4bc6256ec",
  },
  {
    title: "Make Advanced - API calls with HTTP modules",
    issuer: "Make",
    date: "May 2024",
    imgPath: "/images/Icons/make.png",
    credentialUrl: "https://www.credly.com/earner/earned/badge/9a6bf5c4-dc0d-4417-910a-bbc28ac6b94b",
  }
  // {
  //   title: "Certified Kubernetes Administrator (CKA)",
  //   issuer: "The Linux Foundation / CNCF",
  //   date: "2025",
  //   imgPath: "/images/logos/kubernetes.png",
  //   credentialUrl: "#",
  // },
  // {
  //   title: "HashiCorp Certified: Terraform Associate",
  //   issuer: "HashiCorp",
  //   date: "2025",
  //   imgPath: "/images/logos/terraform.png",
  //   credentialUrl: "#",
  // },
];

// EDIT ME: replace with your real projects. imgPath should point to an
// architecture diagram or screenshot placed in public/images/projects/.
const caseStudies = [
  {
    title: "End-to-End CI/CD for Multi-Environment .NET Applications",
    imgPath: "/images/projects/case-study-1.png",
    stack: [
      "Azure DevOps",
      "Azure Repos",
      "Azure App Services",
      "IIS",
      "YAML Pipelines"
    ],
    problem:
      "The application required reliable deployments across QA, Pre-Production, and Production environments. Manual deployment processes increased the risk of errors, slowed releases, and made environment management difficult.",
    solution:
      "Designed and managed an end-to-end CI/CD workflow using Azure DevOps. Implemented automated build and deployment pipelines for .NET backend services and React Native APIs, with deployments targeting Azure App Services and Windows IIS across multiple environments. Added structured release workflows, health checks, and environment-specific deployment strategies.",
    impact:
      "Reduced deployment lead time by 40%, improved release reliability, and helped maintain highly available production workloads with a more consistent and automated delivery process.",
    repoLink: "#",
    liveLink: "#",
  },

  {
    title: "GCP Cloud Infrastructure Automation with Terraform",
    imgPath: "/images/projects/case-study-2.png",
    stack: [
      "Google Cloud Platform",
      "Terraform",
      "GKE Autopilot",
      "Cloud Run",
      "GCS",
      "MongoDB Atlas",
      "Azure DevOps"
    ],
    problem:
      "Cloud infrastructure required a scalable and repeatable approach for provisioning networking, storage, Kubernetes workloads, and cloud services without relying on manual configuration.",
    solution:
      "Designed and managed cloud infrastructure on GCP using Terraform. Provisioned VPCs, subnets, GCS buckets, and supporting cloud resources while integrating MongoDB Atlas. Deployed workloads using GKE Autopilot and Cloud Run and connected infrastructure provisioning with automated DevOps workflows.",
    impact:
      "Achieved up to 70% faster environment setup through infrastructure automation, while making infrastructure changes version-controlled, repeatable, and easier to manage across environments.",
    repoLink: "#",
    liveLink: "#",
  },

  {
    title: "Production Application Deployment & Database Migration to Azure",
    imgPath: "/images/projects/case-study-3.png",
    stack: [
      "Azure VM",
      "PostgreSQL",
      "Docker Compose",
      "Linux",
      "Shell Scripting",
      "Cron Jobs"
    ],
    problem:
      "An application and its PostgreSQL database were running on Heroku and needed to be migrated to an Azure-based environment while maintaining reliable application delivery and database operations.",
    solution:
      "Migrated the application and PostgreSQL database from Heroku to an Azure VM. Containerized and deployed the application using Docker Compose, configured the production environment, and automated database backup processes using shell scripts and scheduled cron jobs.",
    impact:
      "Successfully moved the application to Azure infrastructure while establishing a more controlled deployment environment and automated backup workflow for operational reliability.",
    repoLink: "#",
    liveLink: "#",
  },

  {
    title: "AWS Production Deployment & Automated Backup Architecture",
    imgPath: "/images/projects/case-study-4.png",
    stack: [
      "AWS EC2",
      "Docker Compose",
      "Shell Scripting",
      "Cron Jobs",
      "CI/CD"
    ],
    problem:
      "Production applications required reliable cloud hosting, repeatable deployments, and automated database backup processes to reduce operational risk and manual maintenance.",
    solution:
      "Deployed and maintained production-grade applications on AWS EC2 instances. Managed complete CI/CD workflows, containerized applications using Docker Compose, and implemented automated database backup processes using shell scripts and cron jobs.",
    impact:
      "Created a more reliable and repeatable production deployment workflow while reducing manual operational work and improving backup consistency.",
    repoLink: "#",
    liveLink: "#",
  },

  {
    title: "TechMetaScore — AWS Deployment & MongoDB Operations",
    imgPath: "/images/projects/case-study-5.png",
    stack: [
      "AWS EC2",
      "Docker Compose",
      "MongoDB",
      "Shell Scripting",
      "Cron Jobs"
    ],
    problem:
      "The TechMetaScore application required a reliable production deployment architecture with a dedicated database setup and automated backup process.",
    solution:
      "Led the deployment and ongoing maintenance of the TechMetaScore application on AWS. Designed and configured a custom MongoDB database environment, deployed the application using Docker Compose, and automated database backup operations through shell scripting and cron jobs.",
    impact:
      "Established a reliable AWS-hosted application environment with automated database operations and backup processes, improving operational consistency and reducing the need for manual maintenance.",
    repoLink: "#",
    liveLink: "#",
  },
];


// EDIT ME: replace with the services you actually offer, and update fiverrUrl below.
const services = [
  {
    title: "CI/CD Pipeline Setup",
    desc: "Design and implement automated build, test, and deployment pipelines using Jenkins, GitHub Actions, or Azure DevOps.",
    imgPath: "/images/cicd.png",
  },
  {
    title: "Cloud Infrastructure & Migration",
    desc: "Provision and migrate infrastructure on AWS, Azure, or GCP with security and cost-efficiency in mind.",
    imgPath: "/images/cloud_infrastructure_migration.png",
  },
  {
    title: "Infrastructure as Code",
    desc: "Turn manual, error-prone setups into versioned, repeatable Terraform or CloudFormation modules.",
    imgPath: "/images/infrastructure_as_code.png",
  },
  {
    title: "Containerization & Orchestration",
    desc: "Dockerize applications and set up Kubernetes for scalable, portable deployments.",
    imgPath: "/images/containerization_orchestration.png",
  },
  {
    title: "Server & Linux Administration",
    desc: "Configure, harden, and maintain Linux servers, including monitoring and automated maintenance scripts.",
    imgPath: "/images/server_linux_administration.png",
  },
  {
    title: "DevOps Consulting & Audits",
    desc: "Review your existing pipeline/infrastructure and provide a prioritized roadmap of improvements.",
    imgPath: "/images/devops_consulting_audits.png",
  },
];

// EDIT ME: put your real Fiverr gig/profile URL here.
const fiverrUrl = "https://www.fiverr.com/ishaqahmad745";

// EDIT ME: replace client reviews with your real Fiverr reviews.
// `source: "fiverr"` shows the green "Fiverr Client" badge on the card.

// EDIT ME: put your real Upwork profile URL here.
const upworkUrl = "https://www.upwork.com/freelancers/~016a6d1ae7719b63f6";

const testimonials = [
  {
    name: "Bryn Thomas",
    mentions: "@bthomas85381",
    source: "fiverr",
    review:
      "I recently had the pleasure of working with Ishaq on Fiverr to build out my LLM OS model, and I couldn't be more thrilled with the results. From start to finish, Ishaq demonstrated exceptional skill, attention to detail, and a remarkable ability to overcome challenges",
    imgPath: "/images/client1.png",
  },
  {
    name: "Cloud Solution",
    mentions: "@clouds_solution",
    source: "fiverr",
    review:
      "Very honest personality and professional. I would love to work again. Thank you!",
    imgPath: "/images/client2.png",
  },
  {
    name: "John",
    mentions: "@laujohn",
    source: "fiverr",
    review:
      "Collaborating with Ishaq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. If you're seeking to elevate your cloud infrastructure, Ishaq is the ideal partner.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Crist Frick",
    mentions: "@christfrick",
    source: "fiverr",
    review:
      "Ishaq was a pleasure to work with. He turned our fragile deployment process into a fast, automated workflow that's both reliable and easy to maintain. Fantastic work overall.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Umer",
    mentions: "@umer1998",
    source: "fiverr",
    review:
      "Ishaq’s expertise in cloud and DevOps is truly impressive. He delivered a robust and scalable CI/CD solution for our platform, and our deployment times have significantly decreased since the launch. He’s a true professional!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Meajr65",
    mentions: "@meajr65",
    source: "fiverr",
    review:
      "Ishaq understood our requirements perfectly and delivered infrastructure that exceeded our expectations. His skills across cloud, automation, and CI/CD are top-notch.",
    imgPath: "/images/client6.png",
  },
];

// EDIT ME: set `link` to your real profile URLs. Leave "#" for icons you
// don't want to include yet — they just won't go anywhere until you do.
const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/ishaqahmad41455",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/ishaq-ahmad-7922a61a0",
  },
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  //   link: "#",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  //   link: "#",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  //   link: "#",
  // },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  certifications,
  caseStudies,
  services,
  fiverrUrl,
  upworkUrl,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
