import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  Github, Linkedin, Mail, MapPin, Phone, Download, ArrowRight, ArrowUp, ExternalLink,
  Code2, Sparkles, Rocket, Brain, Database, Cloud, Wrench, Trophy, Award, Users,
  Star, GitFork, Send, Menu, X,
} from "lucide-react";
import {
  profile, stats, timeline, experiences, projects, skillCategories,
  techStack, certifications, achievements, faqs,
} from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

/* ---------------- Loader ---------------- */
export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 1400) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-8"
      >
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] glow-primary">
          <span className="font-display text-3xl font-bold text-white">S</span>
        </div>
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] opacity-30 blur-xl animate-pulse" />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#7C5CFC] via-[#00D9FF] to-[#00FFA3]"
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{Math.floor(progress)}%</span>
      </div>
    </motion.div>
  );
}

/* ---------------- Cursor ---------------- */
export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C5CFC]/10 blur-3xl md:block"
    />
  );
}

/* ---------------- Scroll Progress ---------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-[#7C5CFC] via-[#00D9FF] to-[#00FFA3]"
    />
  );
}

/* ---------------- Aurora Background ---------------- */
export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#7C5CFC]/25 blur-[120px] animate-aurora" />
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/20 blur-[120px] animate-aurora" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#00FFA3]/15 blur-[120px] animate-aurora" style={{ animationDelay: "4s" }} />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
          scrolled ? "glass shadow-elegant" : ""
        }`}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF]">
              <span className="font-display text-lg font-bold text-white">S</span>
            </div>
            <span className="hidden font-display text-sm font-semibold sm:block">Sourabh<span className="text-[#00D9FF]">.</span></span>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/5"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollTo("resume")}
              className="hidden bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white hover:opacity-90 sm:inline-flex"
              size="sm"
            >
              Resume
            </Button>
            <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 rounded-2xl p-3 md:hidden"
            >
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-white/5"
                >
                  {n.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* ---------------- Typing text ---------------- */
export function TypingRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = profile.roles[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1200);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % profile.roles.length); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i]);
  return (
    <span className="font-mono text-lg text-[#00D9FF] sm:text-xl md:text-2xl">
      {text}
      <span className="ml-1 inline-block h-5 w-[3px] animate-pulse bg-[#00D9FF] align-middle" />
    </span>
  );
}

/* ---------------- Number Counter ---------------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400; const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------------- Section wrapper ---------------- */
export function Section({ id, eyebrow, title, sub, children }: { id?: string; eyebrow?: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col items-start gap-3"
      >
        {eyebrow && (
          <Badge variant="outline" className="border-[#7C5CFC]/40 bg-[#7C5CFC]/10 font-mono text-[10px] uppercase tracking-widest text-[#00D9FF]">
            {eyebrow}
          </Badge>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {sub && <p className="max-w-2xl text-muted-foreground">{sub}</p>}
      </motion.div>
      {children}
    </section>
  );
}

/* ---------------- Hero ---------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const rx = useTransform(my, [-100, 100], [8, -8]);
  const ry = useTransform(mx, [-100, 100], [-8, 8]);
  return (
    <section className="relative flex min-h-screen items-center px-4 pt-32">
      <div ref={ref}
        onMouseMove={(e) => {
          const r = ref.current!.getBoundingClientRect();
          mx.set(e.clientX - r.left - r.width / 2);
          my.set(e.clientY - r.top - r.height / 2);
        }}
        onMouseLeave={() => { mx.set(0); my.set(0); }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2"
      >
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FFA3] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FFA3]" />
            </span>
            <span className="font-mono text-muted-foreground">Available for opportunities</span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mb-3 font-mono text-sm text-muted-foreground">
            Hi <span className="inline-block animate-bounce">👋</span>, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">Sourabh</span><br />
            <span className="text-gradient-brand">Prajapat</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-5">
            <TypingRoles />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white hover:opacity-90 glow-primary"
              size="lg"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 hover:bg-white/10">
              <a href="/assets/resume.pdf" download><Download className="mr-2 h-4 w-4" />Download Resume</a>
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="ghost" size="lg" className="hover:bg-white/5"
            >
              Hire Me
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: Github, href: profile.github },
              { icon: Linkedin, href: profile.linkedin },
              { icon: Mail, href: `mailto:${profile.email}` },
              { icon: Code2, href: profile.leetcode },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-[#7C5CFC] hover:bg-[#7C5CFC]/10 hover:glow-primary"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D-ish workspace card */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-[#7C5CFC]/30 via-[#00D9FF]/20 to-[#00FFA3]/20 blur-3xl" />
          <div className="glass relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 shadow-elegant">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <div className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">~/sourabh — code</span>
            </div>
            <pre className="flex-1 overflow-hidden rounded-xl bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
{`const dev = {
  name: "Sourabh Prajapat",
  role: ["Full Stack", "AI/ML", "SDE"],
  stack: ["React", "Next.js", "Python"],
  focus: "Scalable products",
  status: "Building the future 🚀",
};

export default dev;`}
            </pre>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {["⚛️", "🧠", "🚀", "✨"].map((e, i) => (
                <motion.div key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl"
                >{e}</motion.div>
              ))}
            </div>
          </div>
          {/* Floating icons */}
          {[Sparkles, Rocket, Brain, Database].map((I, i) => (
            <motion.div key={i}
              className="absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-card/80 backdrop-blur"
              style={{
                top: `${[10, 20, 65, 75][i]}%`,
                left: `${[85, 5, 90, 0][i]}%`,
              }}
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
            >
              <I className="h-4 w-4 text-[#00D9FF]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats strip ---------------- */
export function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass grid grid-cols-2 gap-6 rounded-2xl p-6 sm:grid-cols-5 sm:gap-4"
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Engineer. Builder. Curious mind." sub="A short story about what drives me.">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative md:col-span-2"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#7C5CFC]/40 to-[#00D9FF]/40 blur-2xl" />
          <div className="glass relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFC]/20 via-transparent to-[#00D9FF]/20" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-9xl font-bold text-gradient-brand">SP</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur">
              <div className="font-mono text-xs text-[#00FFA3]">$ whoami</div>
              <div className="mt-1 text-sm">Full Stack + AI Engineer</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground md:col-span-3"
        >
          <p className="text-lg leading-relaxed">
            I'm a <span className="text-foreground">Computer Science Engineering student</span> deeply
            passionate about <span className="text-[#00D9FF]">Full Stack Development</span>,
            <span className="text-[#7C5CFC]"> AI</span>,
            <span className="text-[#00FFA3]"> Machine Learning</span> and Data Science.
          </p>
          <p className="leading-relaxed">
            I love solving real-world problems and building scalable products that people actually use.
            I contribute to open-source and I founded <span className="text-foreground">TechSphere</span>,
            a growing developer community of <span className="text-foreground">500+ members</span> exploring
            web, AI and data together.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-4">
            {[
              { icon: Code2, label: "Full Stack" },
              { icon: Brain, label: "AI / ML" },
              { icon: Database, label: "Data Science" },
              { icon: Users, label: "Community" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC]/30 to-[#00D9FF]/30">
                  <Icon className="h-4 w-4 text-[#00D9FF]" />
                </div>
                <span className="text-sm text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Timeline ---------------- */
export function Timeline() {
  return (
    <Section id="journey" eyebrow="Journey" title="The road so far" sub="Milestones from student to shipping engineer.">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#7C5CFC] via-[#00D9FF] to-transparent md:left-1/2" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative flex items-start gap-6 md:gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] shadow-[0_0_20px_#7C5CFC]" />
              </div>
              <div className="hidden flex-1 md:block" />
              <div className="ml-10 flex-1 md:ml-0">
                <div className="glass rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-[#7C5CFC]/40">
                  <div className="mb-2 font-mono text-xs text-[#00D9FF]">{t.year}</div>
                  <div className="font-display text-lg font-semibold">{t.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Experience ---------------- */
export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked" sub="Selected roles and internships.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((e, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-all hover:border-[#7C5CFC]/40 hover:shadow-elegant"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7C5CFC]/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-40" />
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC]/30 to-[#00D9FF]/30">
                <Rocket className="h-5 w-5 text-[#00D9FF]" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">{e.duration}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{e.role}</h3>
            <div className="text-sm text-[#00D9FF]">{e.company}</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {e.location}
            </div>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {e.responsibilities.map((r, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#00FFA3]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {e.stack.map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Projects ---------------- */
function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card"
    >
      <div className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <span className="relative font-display text-3xl font-bold text-white drop-shadow-lg">{p.name}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {p.features.map((f) => (
            <li key={f} className="flex items-center gap-1"><span className="h-1 w-1 rounded-full bg-[#00FFA3]" />{f}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px]">{s}</span>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          <Button size="sm" variant="outline" className="border-white/15 bg-white/5" asChild>
            <a href={p.github ?? "#"} target="_blank" rel="noreferrer"><Github className="mr-1.5 h-3.5 w-3.5" />Code</a>
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white" asChild>
            <a href={p.demo ?? "#"} target="_blank" rel="noreferrer">Live <ExternalLink className="ml-1.5 h-3.5 w-3.5" /></a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <Section id="projects" eyebrow="Featured Work" title="Selected projects" sub="Products, tools and experiments I'm proud of.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </Section>
  );
}

/* ---------------- All Projects with filters ---------------- */
export function AllProjects() {
  const categories = ["All", "React", "Next.js", "AI", "Machine Learning", "Python", "Node", "MongoDB"];
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const list = projects
    .filter((p) => cat === "All" || p.category.includes(cat))
    .filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
  if (sort === "oldest") list.reverse();
  return (
    <Section id="all-projects" eyebrow="All Projects" title="Explore everything" sub="Filter by stack, search or sort.">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                cat === c
                  ? "border-transparent bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20"
              }`}
            >{c}</button>
          ))}
        </div>
        <div className="flex gap-2">
          <Input placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} className="h-9 w-40 border-white/10 bg-white/5" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "latest" | "oldest")}
            className="h-9 rounded-md border border-white/10 bg-white/5 px-2 text-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </Section>
  );
}

/* ---------------- Skills ---------------- */
export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with" sub="Tools and technologies across the stack.">
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-[#00D9FF]" />
              <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
            </div>
            <div className="space-y-3">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7C5CFC] via-[#00D9FF] to-[#00FFA3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Tech marquee ---------------- */
export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <section id="tech" className="relative overflow-hidden py-16">
      <div className="mx-auto mb-6 max-w-6xl px-4 text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {items.map((t, i) => (
            <div key={i} className="glass rounded-xl px-5 py-3 font-mono text-sm text-muted-foreground">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */
export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified learning" sub="A snapshot of certifications.">
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00D9FF]/20 blur-3xl" />
            <Award className="h-8 w-8 text-[#00D9FF]" />
            <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
            <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
            <div className="mt-4 font-mono text-xs text-[#00FFA3]">{c.year}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Achievements ---------------- */
export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones" sub="What I'm most proud of.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#00FFA3]/40"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00FFA3]/30 to-[#00D9FF]/30">
              <Trophy className="h-5 w-5 text-[#00FFA3]" />
            </div>
            <div>
              <h3 className="font-display font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Github ---------------- */
export function GithubSection() {
  const contribs = Array.from({ length: 7 * 20 }, () => Math.floor(Math.random() * 5));
  return (
    <Section id="github" eyebrow="GitHub" title="Coding in the open" sub="Contributions, repos and stars.">
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          { label: "Commits", value: 900, icon: GitFork },
          { label: "Repositories", value: 20, icon: Github },
          { label: "Followers", value: 7, icon: Users },
          { label: "Stars", value: 10, icon: Star },
          
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <s.icon className="h-5 w-5 text-[#00D9FF]" />
            <div className="mt-3 font-display text-3xl font-bold text-gradient-brand">
              <Counter to={s.value} suffix="+" />
            </div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-2xl p-5 lg:col-span-3"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="font-display font-semibold">Contribution Heatmap</div>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-xs text-[#00D9FF] hover:underline">View on GitHub →</a>
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
            {contribs.map((v, i) => (
              <div key={i} className="h-3 w-3 rounded-sm"
                style={{ background: `color-mix(in oklab, #00FFA3 ${v * 22 + 6}%, #1a1f36)` }} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Resume ---------------- */
export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Grab my resume" sub="One PDF. Everything you need to know.">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass mx-auto flex max-w-2x2 flex-col items-center gap-6 rounded-3xl p-10 text-center sm:flex-row sm:text-left"
      >
        <div className="flex h-20 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] font-display text-xs font-bold text-white">
          PDF
        </div>
        <div className="flex-1">
          <div className="font-display text-xl font-semibold">Sourabh_Prajapat_Resume.pdf</div>
          <div className="mt-1 text-sm text-muted-foreground">Updated 2025 · Full Stack & AI/ML</div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/15 bg-white/5" asChild>
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">Preview</a>
          </Button>
          <Button className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white" asChild>
            <a href="/assets/resume.pdf" download><Download className="mr-2 h-4 w-4" />Download</a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Frequently asked" sub="Quick answers to common questions.">
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="mb-3 rounded-xl border border-white/10 bg-card px-5">
            <AccordionTrigger className="text-left font-display hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [sending, setSending] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something amazing" sub="Reach out for collaborations, roles, or a coffee chat.">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
            { icon: Linkedin, label: "LinkedIn", value: "sourabh-prajapat", href: profile.linkedin },
            { icon: Github, label: "GitHub", value: "Sourabh-prajapat25", href: profile.github },
            { icon: MapPin, label: "Location", value: profile.location },
          ].map((c, i) => (
            <a key={i} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="glass flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-1 hover:border-[#7C5CFC]/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC]/30 to-[#00D9FF]/30">
                <c.icon className="h-4 w-4 text-[#00D9FF]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="text-sm">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          onSubmit={submit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required placeholder="Your name" className="border-white/10 bg-white/5" />
            <Input required type="email" placeholder="Email" className="border-white/10 bg-white/5" />
          </div>
          <Input required placeholder="Subject" className="border-white/10 bg-white/5" />
          <Textarea required rows={5} placeholder="Tell me about your project…" className="border-white/10 bg-white/5" />
          <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] text-white">
            {sending ? "Sending…" : (<><Send className="mr-2 h-4 w-4" />Send Message</>)}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF]">
              <span className="font-display text-lg font-bold text-white">S</span>
            </div>
            <span className="font-display font-semibold">Sourabh<span className="text-[#00D9FF]">.</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Building scalable web and AI experiences.</p>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Navigation</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {navItems.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-foreground">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Social</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href={profile.github} className="hover:text-foreground">GitHub</a></li>
            <li><a href={profile.linkedin} className="hover:text-foreground">LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`} className="hover:text-foreground">Email</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Contact</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Sourabh Prajapat. All rights reserved.</div>
        <div>Designed & Developed with <span className="text-[#FF5A7A]">❤</span> by Sourabh Prajapat</div>
      </div>
    </footer>
  );
}

/* ---------------- Back to top ---------------- */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFC] to-[#00D9FF] text-white shadow-elegant hover:opacity-90"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
