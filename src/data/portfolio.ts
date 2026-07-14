export const profile = {
  name: "Sourabh Prajapat",
  roles: [
    "Full Stack Developer",
    "Software Development Engineer",
    "AI & ML Engineer",
    "Open Source Contributor",
    "Data Analyst",
  ],
  location: "Indore, Madhya Pradesh, India",
  email: "prajapatsourabh725@gmail.com",
  phone: "+91 7225843050",
  github: "https://github.com/Sourabh-prajapat25",
  linkedin: "https://linkedin.com/in/sourabh-prajapat-008338384",
  leetcode: "https://leetcode.com/",
  intro:
    "I build scalable web applications, AI-powered solutions, and modern digital experiences using cutting-edge technologies.",
};

export const stats = [
  { value: 4, suffix: "+", label: "Internships" },
  { value: 5, suffix: "+", label: "Projects" },
  { value: 500, suffix: "+", label: "Community Admin" },
  { value: 150, suffix: "+", label: "Problems Solved" },
  { value: 15, suffix: "+", label: "Certificates" },
];

export const timeline = [
  { year: "2025", title: "Started BTech", desc: "Began Computer Science Engineering journey." },
  { year: "2025", title: "AI Internship", desc: "AI/ML Intern at Edunet Foundation." },
  { year: "2025", title: "Joined GDSC", desc: "Web Developer at Google Developer Student Club." },
  { year: "2026", title: "React Internship", desc: "React Developer Intern at Zetpeak." },
  { year: "2026", title: "Joined RealXR", desc: "Mern Stack Developer at RealXR Club." },
  { year: "2026", title: "AI & ML Intership", desc: "AI/ML Intern at Infosys springboard." },
  { year: "Future", title: "Software Engineer", desc: "Building scalable products at world-class companies." },
];

export const experiences = [
  {
    role: "AI/ML Intern",
    company: "Edunet Foundation",
    duration: "2025",
    location: "Remote",
    responsibilities: [
      "Built ML pipelines for real-world classification problems",
      "Worked with NLP, RAG and modern LLM tooling",
      "Presented model insights to stakeholders",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "LLMs", "RAG"],
  },

  {
    role: "Web Developer",
    company: "Google Developer Student Club",
    duration: "2025",
    location: "Indore, India",
    responsibilities: [
      "Developed and maintained chapter web experiences",
      "Led sessions on modern frontend engineering",
      "Collaborated with a cross-functional student team",
    ],
    stack: ["React", "Next.js", "Tailwind", "Firebase"],
  },
  {
    role: "React Developer Intern",
    company: "Zetpeak",
    duration: "2025",
    location: "Remote",
    responsibilities: [
      "Shipped production React features end-to-end",
      "Improved performance and Lighthouse scores",
      "Integrated REST APIs and authentication flows",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
  role: "Open Source Contributor",
  company: "GSSOC,ECWoc,OSGC",
  duration: "2026",
  location: "Remote",
  responsibilities: [
    "Contributed to open-source AI infrastructure projects",
    "Fixed issues and collaborated through GitHub pull requests",
    "Worked with maintainers following professional OSS workflows"
  ],
  stack: [
    "Python",
    "Git",
    "GitHub",
    "Docker"
  ]
},
 {
    role: "Mern Stack Developer",
    company: "RealXR",
    duration: "2026",
    location: "Indore, India",
    responsibilities: [
      "Buid End to End full website using modern framerwork",
      "Give Animation good UI UX to Club Website",
      "Work with teamates and orgainized hackathon in Campus",
    ],
    stack: ["Next.js", "Express.js", "GSAP", "Tailwind CSS"],
  },
{
  role: "AI/ML Intern",
  company: "Infosys Springboard",
  duration: "2025",
  location: "Remote",
  responsibilities: [
    "Designed and developed an AI Agent Response Evaluator for automated quality assessment",
    "Implemented LLM-based evaluation workflows to measure correctness, relevance, and coherence",
    "Optimized evaluation metrics and reporting to improve AI system performance",
  ],
  stack: ["Python", "LLMs", "NLP", "Prompt Engineering", "Evaluation Frameworks"],
},
{
  role: "Google Campus Ambassador",
  company: "Google",
  duration: "2026",
  location: "Remote",
  responsibilities: [
    "Represent Google by promoting developer programs, events, and learning initiatives on campus",
    "Organize and support technical workshops, hackathons, and community engagement activities",
    "Connect students with Google technologies, resources, and career opportunities",
  ],
  stack: [
    "Google Developer Programs",
    "Community Building",
    "Public Speaking",
    "Leadership",
    "Networking",
  ],
},
];

export type Project = {
  name: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
  category: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    name: "FairLens AI",
    description:
      "AI-powered platform that audits datasets and models for fairness, bias and explainability using modern ML tooling.",
    features: ["Bias detection", "Explainability reports", "RAG-powered insights"],
    stack: ["Next.js", "Python", "LLMs", "RAG", "Tailwind"],
    github: "https://github.com/Sourabh-prajapat25/FairLensAI/",
    demo: "https://fairlensai.vercel.app/",
    featured: true,
    category: ["AI", "Machine Learning", "Next.js"],
    accent: "from-[#7C5CFC] to-[#00D9FF]",
  },
  {
    name: "Quizania",
    description:
      "Interactive quiz platform with real-time scoring, leaderboards and topic-based practice for students.",
    features: ["Realtime leaderboards", "Topic library", "Progress analytics"],
    stack: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/Sourabh-prajapat25/Quizania",
    demo: "https://quizanias.onrender.com/",
    featured: true,
    category: ["React", "Node", "MongoDB"],
    accent: "from-[#00D9FF] to-[#00FFA3]",
  },

  {
    name: "Instagram Automation",
    description: "I made full autmation Image generation,Caption generation Reel video creation then Scheduled posting",
    features: ["Reel Creation", "Scheduled posting", "Automation"],
    stack: ["Next.js", "Python", "Gemini", "LLMs"],
    github: "https://github.com/Sourabh-prajapat25/instagram-ai-agent",
    demo: "",
    featured: true,
    category: ["AI", "Next.js", "Python"],
    accent: "from-[#7C5CFC] to-[#00FFA3]",
  },
 {
    name: "TechSphere Community",
    description:
      "500+ member developer community platform with events, resources and mentorship pipelines.",
    features: ["Event management", "Member directory", "Resource hub"],
    stack: ["Lederships", "Management", "Resourse provider","Community builder"],
    github: "",
    demo: "",
    category: ["Next.js", "React"],
    accent: "from-[#00FFA3] to-[#7C5CFC]",
  },
  {
    name: "EnergyOS AI",
    description: "AI-powered IoT energy monitoring platform for industries.",
    features: ["Electricity cost Reducing", "Sustainable Devlopment", "Scalable Solution","Industry oriented","Cost Saving"],
    stack: ["Next.js", "Python", "IOT sensors","MySQL","AI Analysis"],
    github: "https://github.com/Sourabh-prajapat25/EnergyOS",
    demo: "https://energyos-ai.vercel.app/",
    category: ["React", "Python", "IOT Sensors"],
    accent: "from-[#00D9FF] to-[#7C5CFC]",
  },
  {
  name: "AI Response Evaluator",
  description:
    "A multi-agent AI system that evaluates AI-generated responses using Retrieval-Augmented Generation (RAG), multiple evaluation agents, and analytics for response quality assessment.",
  features: [
    "RAG-based Knowledge",
    "Hallucination Detection",
    "Final Verdict Generation",
    "Analytics Dashboard",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "LangChain",
  ],
  github: "",
  demo: "",
  category: [
    "Next.js",
    "Python",
    "AI",
    "LangChain",
    "LLMs",
  ],
  accent: "from-[#00D9FF] to-[#7C5CFC]",
},
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "NLP / RAG / LLMs", level: 82 },
    ],
  },
  {
    name: "Database & Cloud",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 85 },
      { name: "Supabase", level: 82 },
      { name: "Vercel", level: 90 },
    ],
  },
];

export const techStack = [
  "React", "Next.js", "Node", "Express", "MongoDB", "Firebase",
  "Supabase", "Git", "GitHub", "VS Code", "Python", "Pandas",
  "NumPy", "Scikit-Learn", "OpenAI", "Tailwind", "Framer Motion", "TypeScript",
];

export const certifications = [
  {
    title: "Python Basic",
    issuer: "HackerRank",
    year: "2026",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "Kaggle",
    year: "2026",
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP",
    year: "2026",
  },
  {
    title: "Participant in IIT Kharagpur Competition",
    issuer: "Indian Institute of Technology, Kharagpur",
    year: "2026",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    year: "2026",
  },
  {
    title: "C Training",
    issuer: "Spoken Tutorial, EduPyramids, SINE, IIT Bombay",
    year: "2025",
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Tata Group",
    year: "2025",
  },
  {
    title: "Google Cloud Certified: Introduction to Generative AI",
    issuer: "Simplilearn",
    year: "2025",
  },
  {
    title: "Prompt Engineering for Everyone",
    issuer: "IBM Skills Network",
    year: "2025",
  },
  {
    title: "AI / ML Internship",
    issuer: "Edunet Foundation",
    year: "2025",
  },
  {
    title: "Infosys Springboard AI",
    issuer: "Infosys Springboard",
    year: "2025",
  },
  {
    title: "JSONPowerDB",
    issuer: "Login2Xplore",
    year: "2025",
  },
];

export const achievements = [
  {
    title: "Selected for Multiple AI & Software Internships",
    desc: "Chosen for AI, Machine Learning, and Software Development internship programs.",
  },
  {
    title: "Built 10+ Full-Stack & AI Projects",
    desc: "Developed MERN, AI, Machine Learning, and Data Analytics applications.",
  },
  {
    title: "500+ Developer Community Members",
    desc: "Founded and grew TechSphere into an active learning community.",
  },
  {
    title: "Open Source Contributor",
    desc: "Contributed to React, JavaScript, and Python open-source projects.",
  },
  {
    title: "150+ DSA Problems Solved",
    desc: "Solved coding challenges across arrays, trees, graphs, dynamic programming, and SQL.",
  },
  {
    title: "Hackathon Finalist",
    desc: "Reached the final rounds of college and national-level hackathons.",
  },
  {
    title: "Developed Production-Ready MERN Applications",
    desc: "Built scalable full-stack applications with authentication, APIs, and responsive UI.",
  },
  {
    title: "Active Member of RealXR & GDSC",
    desc: "Participated in developer events, workshops, and collaborative technical initiatives.",
  },
];

export const faqs = [
  { q: "Are you available for internships?", a: "Yes — I'm actively open to SDE, Full Stack and AI/ML internships." },
  { q: "Are you available for freelance?", a: "Yes, for select web and AI projects. Reach out via email." },
  { q: "What is your current tech stack?", a: "React, Next.js, TypeScript, Node.js, Python, and modern AI tooling." },
  { q: "Are you open to relocation?", a: "Absolutely — open to relocation across India and remote-first roles globally." },
  { q: "What are you learning right now?", a: "Advanced system design, LLM orchestration and production ML." },
];
