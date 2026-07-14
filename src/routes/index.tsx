import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Loader, CursorGlow, ScrollProgress, Aurora, Navbar, Hero, Stats, About,
  Timeline, Experience, FeaturedProjects, AllProjects, Skills, TechMarquee,
  Certifications, Achievements, GithubSection, Resume, FAQ, Contact, Footer, BackToTop,
} from "@/components/portfolio";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative min-h-screen">
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <Aurora />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Experience />
        <FeaturedProjects />
        <AllProjects />
        <Skills />
        <TechMarquee />
        <Certifications />
        <Achievements />
        <GithubSection />
        <Resume />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
