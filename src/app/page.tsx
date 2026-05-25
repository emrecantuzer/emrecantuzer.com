import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import SectionTransition, { PageTransition } from "@/components/PageTransition";

const Divider = () => (
  <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4" />
);

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-primary/30 relative overflow-x-hidden">
        {/* Ambient Glow */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        {/* Blueprint Cyber Grid Background Overlay - Softer and wider */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#00f0ff10_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="relative z-10">
        <Header />
        <Hero />
        <SectionTransition delay={0.1}>
          <Skills />
        </SectionTransition>
        <Divider />
        <SectionTransition delay={0.1}>
          <Experience />
        </SectionTransition>
        <Divider />
        <SectionTransition delay={0.1}>
          <Education />
        </SectionTransition>
        <Divider />
        <SectionTransition delay={0.1}>
          <Projects />
        </SectionTransition>
        <Divider />
        <SectionTransition delay={0.1}>
          <Certifications />
        </SectionTransition>
        <Divider />
        <SectionTransition delay={0.1}>
          <Blog />
        </SectionTransition>
        <Divider />
        <SectionTransition delay={0.1}>
          <Contact />
        </SectionTransition>
        <BackToTop />
        </div>
      </main>
    </PageTransition>
  );
}
