const navLinks = [
  {
    name: "Work",
    link: "#work",
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
    imgPath: "/images/logos/aws.png",
  },
  {
    imgPath: "/images/logos/azure.png",
  },
  {
    imgPath: "/images/logos/gcp.png",
  },
  {
    imgPath: "/images/logos/docker.png",
  },
  {
    imgPath: "/images/logos/Vercel.png",
  },
  {
    imgPath: "/images/logos/Microsoft.png",
  },
  {
    imgPath: "/images/logos/terraform.png",
  },
  {
    imgPath: "/images/logos/kubernetes.png",
  },
  {
    imgPath: "/images/logos/jenkins.png",
  },
  {
    imgPath: "/images/logos/linux.png",
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
    imgPath: "/images/icons/docker.png",
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
    name: "Azure",
    modelPath: "/models/glbfiles/azure-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "GCP",
    modelPath: "/models/glbfiles/gcp-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
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
    name: "Docker",
    modelPath: "/models/glbfiles/docker-transformed.glb",
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
