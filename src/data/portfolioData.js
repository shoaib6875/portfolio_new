export const personalInfo = {
  name: "Shoaib Akhtar",
  shortName: "Shoaib",
  title: "Java Backend & Full Stack Developer",
  location: "Delhi, India",
  email: "sakhtar2003@gmail.com", // placeholder – update with real email
  github: "https://github.com/shoaib6875",
  linkedin: "https://www.linkedin.com/in/shoaib-akhtar-a8a07b220/",
  resume: "#", // update with actual resume link
  roles: [
    "Java Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Enthusiast",
  ],
  tagline:
    "I'm a final-year engineering student passionate about building scalable backend systems, modern web applications, and cloud-powered solutions.",
};

export const about = {
  intro: `I'm Shoaib Akhtar, a final-year B.Tech student from Delhi with a strong focus on software engineering. I specialize in Java backend development and full-stack web applications, and I'm currently building projects with Java, Spring Boot, React, and PostgreSQL.`,
  body: `My journey has taken me from core web development and the MERN stack into cloud infrastructure and DevOps. During my internship as a DevOps Engineer at Finkeda Limited, I worked hands-on with AWS services, production servers, CI/CD pipelines, APIs, and centralized logging systems.`,
  closing: `I'm driven by clean architecture, scalable systems, and the craft of shipping reliable software. I'm actively looking for internships and full-time software engineering roles where I can contribute and grow.`,
  currentlyExploring: [
    "Advanced Java",
    "Spring Boot",
    "Data Structures & Algorithms",
    "System Design fundamentals",
    "Cloud and DevOps",
  ],
  stats: [
    { label: "Final Year", value: "B.Tech Student" },
    { label: "Focus", value: "Java + Spring Boot" },
    { label: "Experience", value: "AWS & DevOps" },
    { label: "Projects", value: "Full Stack" },
  ],
};

export const skills = {
  Backend: [
    { name: "Java", icon: "Coffee" },
    { name: "Spring Boot", icon: "Leaf" },
    { name: "Node.js", icon: "Server" },
    { name: "Express.js", icon: "Zap" },
    { name: "REST APIs", icon: "Network" },
    { name: "JWT Auth", icon: "Shield" },
  ],
  Frontend: [
    { name: "React", icon: "Atom" },
    { name: "JavaScript", icon: "FileCode" },
    { name: "HTML", icon: "Code2" },
    { name: "CSS", icon: "Palette" },
    { name: "Tailwind CSS", icon: "Wind" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "Database" },
    { name: "MongoDB", icon: "Database" },
    { name: "MySQL", icon: "Database" },
  ],
  "Cloud & DevOps": [
    { name: "AWS EC2", icon: "Cloud" },
    { name: "AWS RDS", icon: "Database" },
    { name: "AWS S3", icon: "HardDrive" },
    { name: "AWS Lambda", icon: "Zap" },
    { name: "Docker", icon: "Box" },
    { name: "GitHub Actions", icon: "GitBranch" },
    { name: "CI/CD", icon: "RefreshCw" },
    { name: "CloudWatch", icon: "Activity" },
  ],
  Tools: [
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" },
    { name: "IntelliJ IDEA", icon: "Code" },
    { name: "VS Code", icon: "Code2" },
    { name: "Postman", icon: "Send" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "RenewIQ — Intelligent Subscription & Billing Platform",
    shortName: "RenewIQ",
    description:
      "A modern SaaS platform designed to help subscription-based businesses manage customers, plans, subscriptions, renewals and revenue insights.",
    status: "Live Frontend",
    statusColor: "emerald",
    featured: true,
    image: null,
    liveUrl: "https://renewiq-smartbilling.netlify.app/",
    githubUrl: null,
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT", "Docker", "AWS"],
    features: [
      "Business authentication",
      "Customer management",
      "Subscription lifecycle management",
      "Automated renewal tracking",
      "Billing & invoice management",
      "Revenue analytics (MRR / ARR)",
      "Churn analytics",
      "Multi-business data separation",
      "AI/LLM integration (planned)",
    ],
    note: "Frontend currently deployed. Backend integration in progress.",
  },
  {
    id: 2,
    name: "AI Object Detection System",
    shortName: "AI Object Detection",
    description:
      "An AI-powered object detection application that uses YOLOv8 to identify and detect objects from images or video input.",
    status: "Completed",
    statusColor: "blue",
    featured: true,
    image: null,
    liveUrl: null,
    githubUrl: null,
    tech: ["Python", "YOLOv8", "Streamlit"],
    features: [
      "Real-time object detection",
      "Image & video input support",
      "YOLOv8 model integration",
      "Interactive Streamlit UI",
    ],
  },
  {
    id: 3,
    name: "Personal CI/CD Dashboard",
    shortName: "CI/CD Dashboard",
    description:
      "A developer-focused dashboard designed to visualize GitHub repositories, CI/CD activity and deployment workflows.",
    status: "In Progress",
    statusColor: "amber",
    featured: true,
    image: null,
    liveUrl: null,
    githubUrl: null,
    tech: ["React", "Node.js", "GitHub OAuth", "Webhooks", "AWS"],
    features: [
      "Repository overview",
      "CI/CD pipeline visualization",
      "Deployment workflow tracking",
      "GitHub OAuth integration",
    ],
  },
  {
    id: 4,
    name: "AI Interview Preparation Platform",
    shortName: "AI Interview Prep",
    description:
      "An AI-powered platform designed to help users practice technical interviews and improve their interview performance.",
    status: "Currently Building",
    statusColor: "violet",
    featured: false,
    image: null,
    liveUrl: null,
    githubUrl: null,
    tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "AI API"],
    features: [
      "Technical interview practice",
      "AI-powered feedback",
      "Performance tracking",
      "Multiple tech domains",
    ],
  },
];

export const experience = [
  {
    role: "DevOps Engineer Intern",
    company: "Finkeda Limited",
    location: "India",
    type: "Internship",
    description:
      "Worked with AWS cloud infrastructure, managed and monitored production servers, assisted with CI/CD pipelines, and gained hands-on experience with modern DevOps practices.",
    responsibilities: [
      "Worked with AWS cloud infrastructure (EC2, RDS, S3, Lambda)",
      "Managed and monitored production servers",
      "Assisted with CI/CD pipelines and deployment workflows",
      "Worked with APIs and integration flows",
      "Explored centralized logging using Filebeat, Elasticsearch and Kibana",
      "Gained practical experience with CloudWatch and monitoring",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology",
  institution: "Maharaja Surajmal Institute of Technology (MSIT), Delhi",
  field: "Computer Science / Information Technology",
  status: "Final Year",
};

export const journey = [
  { stage: "Foundation", description: "Core CS fundamentals & programming basics" },
  { stage: "Web Development", description: "HTML, CSS, JavaScript & modern web" },
  { stage: "MERN Stack", description: "Full-stack apps with MongoDB, Express, React, Node" },
  { stage: "Cloud & DevOps", description: "AWS, CI/CD, Docker & production systems" },
  { stage: "Java Backend", description: "Spring Boot, REST APIs & scalable services" },
  { stage: "Full-Stack Products", description: "Building complete, production-ready applications" },
];

export const whatIBuild = [
  {
    title: "Backend Systems",
    description: "Building clean APIs, authentication systems and scalable application architectures.",
    icon: "Server",
  },
  {
    title: "Full Stack Products",
    description: "Turning ideas into complete, polished web applications.",
    icon: "Layers",
  },
  {
    title: "Cloud & DevOps",
    description: "Exploring deployment automation, cloud infrastructure and reliable software delivery.",
    icon: "Cloud",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
