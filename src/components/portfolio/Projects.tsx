import { Section } from "./Section";
import { Github, ExternalLink, Brain, FileText, BarChart3 } from "lucide-react";

const projects = [
  {
    name: "GeetAI",
    year: "2024",
    description:
      "A full-stack wellness companion that contextualizes Bhagavad Gita teachings through AI. Users log moods via a responsive React interface; a Flask backend processes entries, queries OpenAI for verse-based guidance, and stores interaction history. JWT auth protects user sessions and mood data.",
    stack: ["Flask", "React", "SQLite", "OpenAI API", "JWT", "SQLAlchemy"],
    github: "#",
    demo: "#",
    icon: Brain,
    gradient: "from-amber-900/40 via-teal-900/30 to-background",
    accent: "text-amber-400",
  },
  {
    name: "DocuQuery",
    year: "2024",
    description:
      "RAG-based document Q&A system. Upload PDFs through a React frontend; Flask handles semantic chunking, OpenAI embedding, and ChromaDB vector storage. Ask questions in natural language and receive cited answers with source page references.",
    stack: ["Flask", "LangChain", "ChromaDB", "React", "OpenAI API"],
    github: "#",
    demo: "#",
    icon: FileText,
    gradient: "from-blue-900/40 via-indigo-900/30 to-background",
    accent: "text-blue-400",
  },
  {
    name: "DevDash",
    year: "2023",
    description:
      "Personal developer analytics dashboard. Flask backend connects to the GitHub API with Redis caching for rate-limit handling. React frontend renders contribution heatmaps, language breakdowns, and repository activity timelines with Chart.js.",
    stack: ["Flask", "React", "Redis", "GitHub API", "Chart.js"],
    github: "#",
    demo: "#",
    icon: BarChart3,
    gradient: "from-emerald-900/40 via-green-900/30 to-background",
    accent: "text-emerald-400",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects."
      description="End-to-end builds covering AI integration, RAG pipelines, full-stack architecture, and third-party API orchestration."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Image placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-current blur-3xl opacity-20" />
                  <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-current blur-2xl opacity-15" />
                </div>
                <Icon
                  className={`relative z-10 w-12 h-12 ${p.accent} opacity-80 group-hover:scale-110 transition-transform duration-300`}
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-xl font-medium text-foreground">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.year}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border">
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
