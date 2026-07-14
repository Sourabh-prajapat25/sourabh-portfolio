import { a as __toESM } from "../_runtime.mjs";
import { a as useScroll, c as performance_default, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, o as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as ArrowUp, S as Award, _ as Download, a as Star, b as ChevronDown, c as Rocket, d as MapPin, f as Mail, g as ExternalLink, h as GitFork, i as Trophy, l as Phone, m as Github, n as Wrench, o as Sparkles, p as Linkedin, r as Users, s as Send, t as X, u as Menu, v as Database, w as ArrowRight, x as Brain, y as CodeXml } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-daC9f5av.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	name: "Sourabh Prajapat",
	roles: [
		"Full Stack Developer",
		"Software Development Engineer",
		"AI & ML Engineer",
		"Open Source Contributor",
		"Data Analyst"
	],
	location: "Indore, Madhya Pradesh, India",
	email: "prajapatsourabh725@gmail.com",
	phone: "+91 7225843050",
	github: "https://github.com/Sourabh-prajapat25",
	linkedin: "https://linkedin.com/in/sourabh-prajapat-008338384",
	leetcode: "https://leetcode.com/",
	intro: "I build scalable web applications, AI-powered solutions, and modern digital experiences using cutting-edge technologies."
};
var stats = [
	{
		value: 4,
		suffix: "+",
		label: "Internships"
	},
	{
		value: 5,
		suffix: "+",
		label: "Projects"
	},
	{
		value: 500,
		suffix: "+",
		label: "Community Admin"
	},
	{
		value: 150,
		suffix: "+",
		label: "Problems Solved"
	},
	{
		value: 15,
		suffix: "+",
		label: "Certificates"
	}
];
var timeline = [
	{
		year: "2025",
		title: "Started BTech",
		desc: "Began Computer Science Engineering journey."
	},
	{
		year: "2025",
		title: "AI Internship",
		desc: "AI/ML Intern at Edunet Foundation."
	},
	{
		year: "2025",
		title: "Joined GDSC",
		desc: "Web Developer at Google Developer Student Club."
	},
	{
		year: "2026",
		title: "React Internship",
		desc: "React Developer Intern at Zetpeak."
	},
	{
		year: "2026",
		title: "Joined RealXR",
		desc: "Mern Stack Developer at RealXR Club."
	},
	{
		year: "2026",
		title: "AI & ML Intership",
		desc: "AI/ML Intern at Infosys springboard."
	},
	{
		year: "Future",
		title: "Software Engineer",
		desc: "Building scalable products at world-class companies."
	}
];
var experiences = [
	{
		role: "AI/ML Intern",
		company: "Edunet Foundation",
		duration: "2025",
		location: "Remote",
		responsibilities: [
			"Built ML pipelines for real-world classification problems",
			"Worked with NLP, RAG and modern LLM tooling",
			"Presented model insights to stakeholders"
		],
		stack: [
			"Python",
			"Scikit-learn",
			"Pandas",
			"LLMs",
			"RAG"
		]
	},
	{
		role: "Web Developer",
		company: "Google Developer Student Club",
		duration: "2025",
		location: "Indore, India",
		responsibilities: [
			"Developed and maintained chapter web experiences",
			"Led sessions on modern frontend engineering",
			"Collaborated with a cross-functional student team"
		],
		stack: [
			"React",
			"Next.js",
			"Tailwind",
			"Firebase"
		]
	},
	{
		role: "React Developer Intern",
		company: "Zetpeak",
		duration: "2025",
		location: "Remote",
		responsibilities: [
			"Shipped production React features end-to-end",
			"Improved performance and Lighthouse scores",
			"Integrated REST APIs and authentication flows"
		],
		stack: [
			"React",
			"TypeScript",
			"Tailwind",
			"Node.js"
		]
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
			"Work with teamates and orgainized hackathon in Campus"
		],
		stack: [
			"Next.js",
			"Express.js",
			"GSAP",
			"Tailwind CSS"
		]
	},
	{
		role: "AI/ML Intern",
		company: "Infosys Springboard",
		duration: "2025",
		location: "Remote",
		responsibilities: [
			"Designed and developed an AI Agent Response Evaluator for automated quality assessment",
			"Implemented LLM-based evaluation workflows to measure correctness, relevance, and coherence",
			"Optimized evaluation metrics and reporting to improve AI system performance"
		],
		stack: [
			"Python",
			"LLMs",
			"NLP",
			"Prompt Engineering",
			"Evaluation Frameworks"
		]
	},
	{
		role: "Google Campus Ambassador",
		company: "Google",
		duration: "2026",
		location: "Remote",
		responsibilities: [
			"Represent Google by promoting developer programs, events, and learning initiatives on campus",
			"Organize and support technical workshops, hackathons, and community engagement activities",
			"Connect students with Google technologies, resources, and career opportunities"
		],
		stack: [
			"Google Developer Programs",
			"Community Building",
			"Public Speaking",
			"Leadership",
			"Networking"
		]
	}
];
var projects = [
	{
		name: "FairLens AI",
		description: "AI-powered platform that audits datasets and models for fairness, bias and explainability using modern ML tooling.",
		features: [
			"Bias detection",
			"Explainability reports",
			"RAG-powered insights"
		],
		stack: [
			"Next.js",
			"Python",
			"LLMs",
			"RAG",
			"Tailwind"
		],
		github: "https://github.com/Sourabh-prajapat25/FairLensAI/",
		demo: "https://fairlensai.vercel.app/",
		featured: true,
		category: [
			"AI",
			"Machine Learning",
			"Next.js"
		],
		accent: "from-[#7C5CFC] to-[#00D9FF]"
	},
	{
		name: "Quizania",
		description: "Interactive quiz platform with real-time scoring, leaderboards and topic-based practice for students.",
		features: [
			"Realtime leaderboards",
			"Topic library",
			"Progress analytics"
		],
		stack: [
			"React",
			"Node",
			"Express",
			"MongoDB"
		],
		github: "https://github.com/Sourabh-prajapat25/Quizania",
		demo: "https://quizanias.onrender.com/",
		featured: true,
		category: [
			"React",
			"Node",
			"MongoDB"
		],
		accent: "from-[#00D9FF] to-[#00FFA3]"
	},
	{
		name: "Instagram Automation",
		description: "I made full autmation Image generation,Caption generation Reel video creation then Scheduled posting",
		features: [
			"Reel Creation",
			"Scheduled posting",
			"Automation"
		],
		stack: [
			"Next.js",
			"Python",
			"Gemini",
			"LLMs"
		],
		github: "https://github.com/Sourabh-prajapat25/instagram-ai-agent",
		demo: "",
		featured: true,
		category: [
			"AI",
			"Next.js",
			"Python"
		],
		accent: "from-[#7C5CFC] to-[#00FFA3]"
	},
	{
		name: "TechSphere Community",
		description: "500+ member developer community platform with events, resources and mentorship pipelines.",
		features: [
			"Event management",
			"Member directory",
			"Resource hub"
		],
		stack: [
			"Lederships",
			"Management",
			"Resourse provider",
			"Community builder"
		],
		github: "",
		demo: "",
		category: ["Next.js", "React"],
		accent: "from-[#00FFA3] to-[#7C5CFC]"
	},
	{
		name: "EnergyOS AI",
		description: "AI-powered IoT energy monitoring platform for industries.",
		features: [
			"Electricity cost Reducing",
			"Sustainable Devlopment",
			"Scalable Solution",
			"Industry oriented",
			"Cost Saving"
		],
		stack: [
			"Next.js",
			"Python",
			"IOT sensors",
			"MySQL",
			"AI Analysis"
		],
		github: "https://github.com/Sourabh-prajapat25/EnergyOS",
		demo: "https://energyos-ai.vercel.app/",
		category: [
			"React",
			"Python",
			"IOT Sensors"
		],
		accent: "from-[#00D9FF] to-[#7C5CFC]"
	},
	{
		name: "AI Response Evaluator",
		description: "A multi-agent AI system that evaluates AI-generated responses using Retrieval-Augmented Generation (RAG), multiple evaluation agents, and analytics for response quality assessment.",
		features: [
			"RAG-based Knowledge",
			"Hallucination Detection",
			"Final Verdict Generation",
			"Analytics Dashboard"
		],
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"FastAPI",
			"Python",
			"LangChain"
		],
		github: "",
		demo: "",
		category: [
			"Next.js",
			"Python",
			"AI",
			"LangChain",
			"LLMs"
		],
		accent: "from-[#00D9FF] to-[#7C5CFC]"
	}
];
var skillCategories = [
	{
		name: "Frontend",
		skills: [
			{
				name: "React",
				level: 95
			},
			{
				name: "Next.js",
				level: 95
			},
			{
				name: "Tailwind CSS",
				level: 95
			},
			{
				name: "TypeScript",
				level: 90
			}
		]
	},
	{
		name: "Backend",
		skills: [
			{
				name: "Node.js",
				level: 90
			},
			{
				name: "Express",
				level: 88
			},
			{
				name: "REST APIs",
				level: 90
			}
		]
	},
	{
		name: "AI & ML",
		skills: [
			{
				name: "Python",
				level: 90
			},
			{
				name: "Machine Learning",
				level: 85
			},
			{
				name: "NLP / RAG / LLMs",
				level: 82
			}
		]
	},
	{
		name: "Database & Cloud",
		skills: [
			{
				name: "MySQL",
				level: 85
			},
			{
				name: "Firebase",
				level: 85
			},
			{
				name: "Supabase",
				level: 82
			},
			{
				name: "Vercel",
				level: 90
			}
		]
	}
];
var techStack = [
	"React",
	"Next.js",
	"Node",
	"Express",
	"MongoDB",
	"Firebase",
	"Supabase",
	"Git",
	"GitHub",
	"VS Code",
	"Python",
	"Pandas",
	"NumPy",
	"Scikit-Learn",
	"OpenAI",
	"Tailwind",
	"Framer Motion",
	"TypeScript"
];
var certifications = [
	{
		title: "Python Basic",
		issuer: "HackerRank",
		year: "2026"
	},
	{
		title: "Introduction to Programming Using Python",
		issuer: "Kaggle",
		year: "2026"
	},
	{
		title: "Data Science & Analytics",
		issuer: "HP",
		year: "2026"
	},
	{
		title: "Participant in IIT Kharagpur Competition",
		issuer: "Indian Institute of Technology, Kharagpur",
		year: "2026"
	},
	{
		title: "Artificial Intelligence Fundamentals",
		issuer: "IBM",
		year: "2026"
	},
	{
		title: "C Training",
		issuer: "Spoken Tutorial, EduPyramids, SINE, IIT Bombay",
		year: "2025"
	},
	{
		title: "GenAI Powered Data Analytics",
		issuer: "Tata Group",
		year: "2025"
	},
	{
		title: "Google Cloud Certified: Introduction to Generative AI",
		issuer: "Simplilearn",
		year: "2025"
	},
	{
		title: "Prompt Engineering for Everyone",
		issuer: "IBM Skills Network",
		year: "2025"
	},
	{
		title: "AI / ML Internship",
		issuer: "Edunet Foundation",
		year: "2025"
	},
	{
		title: "Infosys Springboard AI",
		issuer: "Infosys Springboard",
		year: "2025"
	},
	{
		title: "JSONPowerDB",
		issuer: "Login2Xplore",
		year: "2025"
	}
];
var achievements = [
	{
		title: "Selected for Multiple AI & Software Internships",
		desc: "Chosen for AI, Machine Learning, and Software Development internship programs."
	},
	{
		title: "Built 10+ Full-Stack & AI Projects",
		desc: "Developed MERN, AI, Machine Learning, and Data Analytics applications."
	},
	{
		title: "500+ Developer Community Members",
		desc: "Founded and grew TechSphere into an active learning community."
	},
	{
		title: "Open Source Contributor",
		desc: "Contributed to React, JavaScript, and Python open-source projects."
	},
	{
		title: "150+ DSA Problems Solved",
		desc: "Solved coding challenges across arrays, trees, graphs, dynamic programming, and SQL."
	},
	{
		title: "Hackathon Finalist",
		desc: "Reached the final rounds of college and national-level hackathons."
	},
	{
		title: "Developed Production-Ready MERN Applications",
		desc: "Built scalable full-stack applications with authentication, APIs, and responsive UI."
	},
	{
		title: "Active Member of RealXR & GDSC",
		desc: "Participated in developer events, workshops, and collaborative technical initiatives."
	}
];
var faqs = [
	{
		q: "Are you available for internships?",
		a: "Yes — I'm actively open to SDE, Full Stack and AI/ML internships."
	},
	{
		q: "Are you available for freelance?",
		a: "Yes, for select web and AI projects. Reach out via email."
	},
	{
		q: "What is your current tech stack?",
		a: "React, Next.js, TypeScript, Node.js, Python, and modern AI tooling."
	},
	{
		q: "Are you open to relocation?",
		a: "Absolutely — open to relocation across India and remote-first roles globally."
	},
	{
		q: "What are you learning right now?",
		a: "Advanced system design, LLM orchestration and production ML."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Loader({ onDone }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let raf;
		const start = performance_default.now();
		const tick = (t) => {
			const p = Math.min(100, (t - start) / 1400 * 100);
			setProgress(p);
			if (p < 100) raf = requestAnimationFrame(tick);
			else setTimeout(onDone, 250);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			transition: { duration: .6 }
		},
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .8,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				className: "relative mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] glow-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl font-bold text-white",
						children: "S"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] opacity-30 blur-xl animate-pulse" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[2px] w-56 overflow-hidden rounded-full bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { width: `${progress}%` },
						className: "h-full bg-gradient-to-r from-[#7C5CFC] via-[#00D9FF] to-[#00FFA3]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: [Math.floor(progress), "%"]
				})]
			})
		]
	});
}
function CursorGlow() {
	const x = useMotionValue(-200);
	const y = useMotionValue(-200);
	(0, import_react.useEffect)(() => {
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, [x, y]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			x,
			y
		},
		className: "pointer-events-none fixed left-0 top-0 z-[60] hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C5CFC]/10 blur-3xl md:block"
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-[#7C5CFC] via-[#00D9FF] to-[#00FFA3]"
	});
}
function Aurora() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#7C5CFC]/25 blur-[120px] animate-aurora" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/20 blur-[120px] animate-aurora",
				style: { animationDelay: "2s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#00FFA3]/15 blur-[120px] animate-aurora",
				style: { animationDelay: "4s" }
			})
		]
	});
}
var navItems = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "certifications",
		label: "Certifications"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("about");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-40% 0px -55% 0px" });
		navItems.forEach((n) => {
			const el = document.getElementById(n.id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: `fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass shadow-elegant" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => window.scrollTo({
							top: 0,
							behavior: "smooth"
						}),
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold text-white",
								children: "S"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden font-display text-sm font-semibold sm:block",
							children: ["Sourabh", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#00D9FF]",
								children: "."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollTo(n.id),
							className: "relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
							children: [active === n.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-active",
								className: "absolute inset-0 rounded-lg bg-white/5",
								transition: {
									type: "spring",
									stiffness: 380,
									damping: 30
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: n.label
							})]
						}, n.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => scrollTo("resume"),
							className: "hidden bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white hover:opacity-90 sm:inline-flex",
							size: "sm",
							children: "Resume"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "md:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "glass mt-2 rounded-2xl p-3 md:hidden",
				children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => scrollTo(n.id),
					className: "block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-white/5",
					children: n.label
				}, n.id))
			}) })]
		})
	});
}
function TypingRoles() {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [del, setDel] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = profile.roles[i];
		const timeout = setTimeout(() => {
			if (!del) {
				setText(current.slice(0, text.length + 1));
				if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1200);
			} else {
				setText(current.slice(0, text.length - 1));
				if (text.length - 1 === 0) {
					setDel(false);
					setI((i + 1) % profile.roles.length);
				}
			}
		}, del ? 40 : 80);
		return () => clearTimeout(timeout);
	}, [
		text,
		del,
		i
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-mono text-lg text-[#00D9FF] sm:text-xl md:text-2xl",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block h-5 w-[3px] animate-pulse bg-[#00D9FF] align-middle" })]
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const dur = 1400;
		const start = performance_default.now();
		let raf;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
function Section({ id, eyebrow, title, sub, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "relative mx-auto w-full max-w-6xl px-4 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 24
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: { duration: .6 },
			className: "mb-12 flex flex-col items-start gap-3",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "border-[#7C5CFC]/40 bg-[#7C5CFC]/10 font-mono text-[10px] uppercase tracking-widest text-[#00D9FF]",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: title
					})
				}),
				sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-muted-foreground",
					children: sub
				})
			]
		}), children]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useTransform(my, [-100, 100], [8, -8]);
	const ry = useTransform(mx, [-100, 100], [-8, 8]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative flex min-h-screen items-center px-4 pt-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			onMouseMove: (e) => {
				const r = ref.current.getBoundingClientRect();
				mx.set(e.clientX - r.left - r.width / 2);
				my.set(e.clientY - r.top - r.height / 2);
			},
			onMouseLeave: () => {
				mx.set(0);
				my.set(0);
			},
			className: "mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .2 },
					className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FFA3] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#00FFA3]" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-muted-foreground",
						children: "Available for opportunities"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .3 },
					className: "mb-3 font-mono text-sm text-muted-foreground",
					children: [
						"Hi ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block animate-bounce",
							children: "👋"
						}),
						", I'm"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .4 },
					className: "font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Sourabh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Prajapat"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .5 },
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingRoles, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .6 },
					className: "mt-6 max-w-lg text-base text-muted-foreground sm:text-lg",
					children: profile.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .7 },
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
							className: "group bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white hover:opacity-90 glow-primary",
							size: "lg",
							children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "border-white/15 bg-white/5 hover:bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/assets/resume.pdf",
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download Resume"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
							variant: "ghost",
							size: "lg",
							className: "hover:bg-white/5",
							children: "Hire Me"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .9 },
					className: "mt-8 flex items-center gap-4",
					children: [
						{
							icon: Github,
							href: profile.github
						},
						{
							icon: Linkedin,
							href: profile.linkedin
						},
						{
							icon: Mail,
							href: `mailto:${profile.email}`
						},
						{
							icon: CodeXml,
							href: profile.leetcode
						}
					].map(({ icon: Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-[#7C5CFC] hover:bg-[#7C5CFC]/10 hover:glow-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" })
					}, i))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					rotateX: rx,
					rotateY: ry,
					transformPerspective: 1e3
				},
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					delay: .5,
					duration: .8
				},
				className: "relative mx-auto aspect-square w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-8 rounded-[2rem] bg-gradient-to-br from-[#7C5CFC]/30 via-[#00D9FF]/20 to-[#00FFA3]/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-red-400/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-yellow-400/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-green-400/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 font-mono text-xs text-muted-foreground",
										children: "~/sourabh — code"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "flex-1 overflow-hidden rounded-xl bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs",
								children: `const dev = {
  name: "Sourabh Prajapat",
  role: ["Full Stack", "AI/ML", "SDE"],
  stack: ["React", "Next.js", "Python"],
  focus: "Scalable products",
  status: "Building the future 🚀",
};

export default dev;`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-4 gap-2",
								children: [
									"⚛️",
									"🧠",
									"🚀",
									"✨"
								].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { y: [
										0,
										-6,
										0
									] },
									transition: {
										duration: 3,
										repeat: Infinity,
										delay: i * .3
									},
									className: "flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl",
									children: e
								}, i))
							})
						]
					}),
					[
						Sparkles,
						Rocket,
						Brain,
						Database
					].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-card/80 backdrop-blur",
						style: {
							top: `${[
								10,
								20,
								65,
								75
							][i]}%`,
							left: `${[
								85,
								5,
								90,
								0
							][i]}%`
						},
						animate: {
							y: [
								0,
								-10,
								0
							],
							rotate: [
								0,
								5,
								0
							]
						},
						transition: {
							duration: 4 + i,
							repeat: Infinity,
							delay: i * .4
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4 text-[#00D9FF]" })
					}, i))
				]
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "glass grid grid-cols-2 gap-6 rounded-2xl p-6 sm:grid-cols-5 sm:gap-4",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-3xl font-bold text-gradient-brand sm:text-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.value,
						suffix: s.suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs text-muted-foreground sm:text-sm",
					children: s.label
				})]
			}, i))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About Me",
		title: "Engineer. Builder. Curious mind.",
		sub: "A short story about what drives me.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 items-center gap-10 md:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				className: "relative md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#7C5CFC]/40 to-[#00D9FF]/40 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass relative aspect-[4/5] w-full overflow-hidden rounded-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#7C5CFC]/20 via-transparent to-[#00D9FF]/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-9xl font-bold text-gradient-brand",
								children: "SP"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-xs text-[#00FFA3]",
								children: "$ whoami"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm",
								children: "Full Stack + AI Engineer"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				className: "space-y-4 text-muted-foreground md:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg leading-relaxed",
						children: [
							"I'm a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Computer Science Engineering student"
							}),
							" deeply passionate about ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#00D9FF]",
								children: "Full Stack Development"
							}),
							",",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#7C5CFC]",
								children: " AI"
							}),
							",",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#00FFA3]",
								children: " Machine Learning"
							}),
							" and Data Science."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "leading-relaxed",
						children: [
							"I love solving real-world problems and building scalable products that people actually use. I contribute to open-source and I founded ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "TechSphere"
							}),
							", a growing developer community of ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "500+ members"
							}),
							" exploring web, AI and data together."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 pt-4",
						children: [
							{
								icon: CodeXml,
								label: "Full Stack"
							},
							{
								icon: Brain,
								label: "AI / ML"
							},
							{
								icon: Database,
								label: "Data Science"
							},
							{
								icon: Users,
								label: "Community"
							}
						].map(({ icon: Icon, label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC]/30 to-[#00D9FF]/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-[#00D9FF]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground",
								children: label
							})]
						}, i))
					})
				]
			})]
		})
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "journey",
		eyebrow: "Journey",
		title: "The road so far",
		sub: "Milestones from student to shipping engineer.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#7C5CFC] via-[#00D9FF] to-transparent md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-10",
				children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: { delay: i * .05 },
					className: `relative flex items-start gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-4 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] shadow-[0_0_20px_#7C5CFC]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden flex-1 md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-10 flex-1 md:ml-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[#7C5CFC]/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-2 font-mono text-xs text-[#00D9FF]",
										children: t.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg font-semibold",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: t.desc
									})
								]
							})
						})
					]
				}, i))
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Experience",
		title: "Where I've worked",
		sub: "Selected roles and internships.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: experiences.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .1 },
				whileHover: { y: -6 },
				className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-all hover:border-[#7C5CFC]/40 hover:shadow-elegant",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7C5CFC]/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC]/30 to-[#00D9FF]/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-5 w-5 text-[#00D9FF]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: e.duration
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-lg font-semibold",
						children: e.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-[#00D9FF]",
						children: e.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
							" ",
							e.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-1.5 text-sm text-muted-foreground",
						children: e.responsibilities.map((r, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#00FFA3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r })]
						}, j))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: e.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground",
							children: s
						}, s))
					})
				]
			}, i))
		})
	});
}
function ProjectCard({ p, i }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { delay: i * .08 },
		whileHover: { y: -8 },
		className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative font-display text-3xl font-bold text-white drop-shadow-lg",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: p.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground",
					children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-[#00FFA3]" }), f]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-1.5",
					children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px]",
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						className: "border-white/15 bg-white/5",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.github ?? "#",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "mr-1.5 h-3.5 w-3.5" }), "Code"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						className: "bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.demo ?? "#",
							target: "_blank",
							rel: "noreferrer",
							children: ["Live ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-1.5 h-3.5 w-3.5" })]
						})
					})]
				})
			]
		})]
	});
}
function FeaturedProjects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "Featured Work",
		title: "Selected projects",
		sub: "Products, tools and experiments I'm proud of.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: projects.filter((p) => p.featured).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
				p,
				i
			}, p.name))
		})
	});
}
function AllProjects() {
	const categories = [
		"All",
		"React",
		"Next.js",
		"AI",
		"Machine Learning",
		"Python",
		"Node",
		"MongoDB"
	];
	const [cat, setCat] = (0, import_react.useState)("All");
	const [q, setQ] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("latest");
	const list = projects.filter((p) => cat === "All" || p.category.includes(cat)).filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
	if (sort === "oldest") list.reverse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "all-projects",
		eyebrow: "All Projects",
		title: "Explore everything",
		sub: "Filter by stack, search or sort.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-full border px-3 py-1 text-xs font-medium transition-all ${cat === c ? "border-transparent bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white" : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20"}`,
					children: c
				}, c))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search…",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "h-9 w-40 border-white/10 bg-white/5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: sort,
					onChange: (e) => setSort(e.target.value),
					className: "h-9 rounded-md border border-white/10 bg-white/5 px-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "latest",
						children: "Latest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "oldest",
						children: "Oldest"
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
				p,
				i
			}, p.name))
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: "What I work with",
		sub: "Tools and technologies across the stack.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: skillCategories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .08 },
				className: "glass rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-4 w-4 text-[#00D9FF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: cat.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: cat.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: [s.level, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-white/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { width: 0 },
							whileInView: { width: `${s.level}%` },
							viewport: { once: true },
							transition: {
								duration: 1.2,
								ease: "easeOut"
							},
							className: "h-full rounded-full bg-gradient-to-r from-[#7C5CFC] via-[#00D9FF] to-[#00FFA3]"
						})
					})] }, s.name))
				})]
			}, cat.name))
		})
	});
}
function TechMarquee() {
	const items = [...techStack, ...techStack];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tech",
		className: "relative overflow-hidden py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mb-6 max-w-6xl px-4 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs uppercase tracking-widest text-muted-foreground",
				children: "Tech Stack"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee gap-4",
					children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-xl px-5 py-3 font-mono text-sm text-muted-foreground",
						children: t
					}, i))
				})
			]
		})]
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "certifications",
		eyebrow: "Certifications",
		title: "Verified learning",
		sub: "A snapshot of certifications.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: certifications.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .08 },
				whileHover: { y: -5 },
				className: "glass group relative overflow-hidden rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00D9FF]/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-8 w-8 text-[#00D9FF]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-lg font-semibold",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: c.issuer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 font-mono text-xs text-[#00FFA3]",
						children: c.year
					})
				]
			}, c.title))
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "achievements",
		eyebrow: "Achievements",
		title: "Milestones",
		sub: "What I'm most proud of.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .07 },
				className: "group flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#00FFA3]/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00FFA3]/30 to-[#00D9FF]/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-[#00FFA3]" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display font-semibold",
					children: a.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: a.desc
				})] })]
			}, a.title))
		})
	});
}
function GithubSection() {
	const contribs = Array.from({ length: 140 }, () => Math.floor(Math.random() * 5));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "github",
		eyebrow: "GitHub",
		title: "Coding in the open",
		sub: "Contributions, repos and stars.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-3",
			children: [[
				{
					label: "Commits",
					value: 900,
					icon: GitFork
				},
				{
					label: "Repositories",
					value: 20,
					icon: Github
				},
				{
					label: "Followers",
					value: 7,
					icon: Users
				},
				{
					label: "Stars",
					value: 10,
					icon: Star
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .05 },
				className: "glass rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-[#00D9FF]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-display text-3xl font-bold text-gradient-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: s.value,
							suffix: "+"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: s.label
					})
				]
			}, s.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "glass rounded-2xl p-5 lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Contribution Heatmap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: profile.github,
						target: "_blank",
						rel: "noreferrer",
						className: "text-xs text-[#00D9FF] hover:underline",
						children: "View on GitHub →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto",
					children: contribs.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-3 w-3 rounded-sm",
						style: { background: `color-mix(in oklab, #00FFA3 ${v * 22 + 6}%, #1a1f36)` }
					}, i))
				})]
			})]
		})
	});
}
function Resume() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "resume",
		eyebrow: "Resume",
		title: "Grab my resume",
		sub: "One PDF. Everything you need to know.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "glass mx-auto flex max-w-2x2 flex-col items-center gap-6 rounded-3xl p-10 text-center sm:flex-row sm:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-20 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] font-display text-xs font-bold text-white",
					children: "PDF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl font-semibold",
						children: "Sourabh_Prajapat_Resume.pdf"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Updated 2025 · Full Stack & AI/ML"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "border-white/15 bg-white/5",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/assets/resume.pdf",
							target: "_blank",
							rel: "noreferrer",
							children: "Preview"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/assets/resume.pdf",
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download"]
						})
					})]
				})
			]
		})
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "faq",
		eyebrow: "FAQ",
		title: "Frequently asked",
		sub: "Quick answers to common questions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "mx-auto max-w-3xl",
			children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: `item-${i}`,
				className: "mb-3 rounded-xl border border-white/10 bg-card px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "text-left font-display hover:no-underline",
					children: f.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
					className: "text-muted-foreground",
					children: f.a
				})]
			}, i))
		})
	});
}
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setSending(true);
		await new Promise((r) => setTimeout(r, 900));
		setSending(false);
		toast.success("Message sent! I'll get back to you soon.");
		e.target.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: "Let's build something amazing",
		sub: "Reach out for collaborations, roles, or a coffee chat.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				className: "space-y-4",
				children: [
					{
						icon: Mail,
						label: "Email",
						value: profile.email,
						href: `mailto:${profile.email}`
					},
					{
						icon: Phone,
						label: "Phone",
						value: profile.phone,
						href: `tel:${profile.phone}`
					},
					{
						icon: Linkedin,
						label: "LinkedIn",
						value: "sourabh-prajapat",
						href: profile.linkedin
					},
					{
						icon: Github,
						label: "GitHub",
						value: "Sourabh-prajapat25",
						href: profile.github
					},
					{
						icon: MapPin,
						label: "Location",
						value: profile.location
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.href,
					target: c.href?.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					className: "glass flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-1 hover:border-[#7C5CFC]/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC]/30 to-[#00D9FF]/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4 text-[#00D9FF]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: c.value
					})] })]
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					x: 20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				onSubmit: submit,
				className: "glass space-y-4 rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							placeholder: "Your name",
							className: "border-white/10 bg-white/5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							type: "email",
							placeholder: "Email",
							className: "border-white/10 bg-white/5"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						required: true,
						placeholder: "Subject",
						className: "border-white/10 bg-white/5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						required: true,
						rows: 5,
						placeholder: "Tell me about your project…",
						className: "border-white/10 bg-white/5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: sending,
						className: "w-full bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white",
						children: sending ? "Sending…" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }), "Send Message"] })
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/10 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold text-white",
							children: "S"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-semibold",
						children: ["Sourabh", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#00D9FF]",
							children: "."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Building scalable web and AI experiences."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-sm font-semibold",
					children: "Navigation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1 text-sm text-muted-foreground",
					children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "hover:text-foreground",
						children: n.label
					}) }, n.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-sm font-semibold",
					children: "Social"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.github,
							className: "hover:text-foreground",
							children: "GitHub"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.linkedin,
							className: "hover:text-foreground",
							children: "LinkedIn"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "hover:text-foreground",
							children: "Email"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-sm font-semibold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: profile.email }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: profile.phone }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: profile.location })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-muted-foreground sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Sourabh Prajapat. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"Designed & Developed with ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#FF5A7A]",
					children: "❤"
				}),
				" by Sourabh Prajapat"
			] })]
		})]
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 600);
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			scale: .5
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .5
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] text-white shadow-elegant hover:opacity-90",
		"aria-label": "Back to top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
	}) });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Index() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { onDone: () => setLoading(false) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aurora, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllProjects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMarquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				theme: "dark",
				position: "bottom-right"
			})
		]
	});
}
//#endregion
export { Index as component };
