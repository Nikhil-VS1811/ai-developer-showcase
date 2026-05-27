import { Section } from "./Section";
import { Download } from "lucide-react";

const skills = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, SQL" },
  { label: "Frontend", value: "React, Tailwind CSS, Vite" },
  { label: "Backend", value: "Flask, REST APIs, JWT, SQLAlchemy" },
  { label: "Databases", value: "PostgreSQL, SQLite, Redis, ChromaDB" },
  { label: "AI / ML", value: "OpenAI API, LangChain, RAG, embeddings" },
  { label: "Tools", value: "Git, GitHub, Docker, Postman, Linux" },
];

const projects = [
  {
    name: "GeetAI",
    detail:
      "Flask + SQLAlchemy backend with JWT auth, React frontend, OpenAI-driven contextual Bhagavad Gita guidance, and mood-aware history.",
  },
  {
    name: "DocuQuery",
    detail:
      "RAG document Q&A with semantic chunking, OpenAI embeddings, ChromaDB vector search, and cited source pages in a React UI.",
  },
  {
    name: "DevDash",
    detail:
      "Developer analytics dashboard using the GitHub API with Redis caching, rendered through React and Chart.js.",
  },
];

const achievements = [
  "Finalist — College AI Hackathon, 2024 (shipped a working RAG demo in 24h).",
  "Top 10 — Inter-college Full Stack Build Sprint, 2024.",
  "Open-source contributor: small PRs to the Flask ecosystem and LangChain docs.",
  "Regular weekend hackathon participant focused on AI tooling and DX.",
];

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Snapshot of my work."
      description="A condensed overview of my background, stack, and the projects I'm most proud of. Download the full PDF for sharing."
    >
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resume (PDF)
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Open in new tab →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-7 rounded-2xl border border-border bg-card">
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
            Summary
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Student developer building practical AI-powered web applications.
            Comfortable across Flask backends, React frontends, REST APIs, and
            LLM workflows such as RAG, embeddings, and retrieval. I focus on
            shipping end-to-end projects with clean architecture.
          </p>

          <h3 className="font-mono text-xs uppercase tracking-wider text-primary mt-8 mb-4">
            Education
          </h3>
          <div className="text-foreground text-sm font-medium">
            B.Tech in Computer Science
          </div>
          <div className="text-muted-foreground text-sm mt-1">
            XYZ Institute of Technology
            <span className="font-mono text-xs ml-2">2022 – 2026</span>
          </div>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            Coursework: Data Structures, DBMS, Operating Systems, Machine
            Learning, Web Engineering.
          </p>
        </div>

        <div className="p-7 rounded-2xl border border-border bg-card">
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
            Technical Skills
          </h3>
          <ul className="space-y-3">
            {skills.map((s) => (
              <li key={s.label} className="text-sm">
                <span className="text-foreground font-medium">{s.label}: </span>
                <span className="text-muted-foreground">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-7 rounded-2xl border border-border bg-card md:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-5">
            Highlighted Projects
          </h3>
          <ul className="space-y-5">
            {projects.map((p) => (
              <li key={p.name}>
                <div className="text-foreground text-sm font-medium">
                  {p.name}
                </div>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {p.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-7 rounded-2xl border border-border bg-card md:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-5">
            Hackathons & Achievements
          </h3>
          <ul className="space-y-2.5">
            {achievements.map((a) => (
              <li
                key={a}
                className="text-muted-foreground text-sm leading-relaxed flex gap-3"
              >
                <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}