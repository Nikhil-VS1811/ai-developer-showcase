import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Profiles } from "@/components/portfolio/Profiles";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun — AI-focused Full Stack Developer" },
      { name: "description", content: "Portfolio of Arjun, a full stack developer building production-grade AI products with React, TypeScript and modern LLM infrastructure." },
      { property: "og:title", content: "Arjun — AI-focused Full Stack Developer" },
      { property: "og:description", content: "Selected projects, skills and recognition from an engineer shipping intelligent web products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Profiles />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
