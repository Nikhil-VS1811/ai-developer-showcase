import { Section } from "./Section";

const projects = [
  {
    name: "Lumen RAG",
    year: "2025",
    description:
      "Production-ready retrieval engine for enterprise documents with hybrid search, reranking and per-tenant evaluation dashboards.",
    stack: ["Next.js", "PostgreSQL", "pgvector", "OpenAI", "LangGraph"],
    href: "#",
  },
  {
    name: "Atlas Agents",
    year: "2024",
    description:
      "Multi-agent workflow platform for ops teams. Visual builder, deterministic tool calls and replayable runs in under 200ms median.",
    stack: ["TypeScript", "tRPC", "Redis", "Anthropic", "Temporal"],
    href: "#",
  },
  {
    name: "Echo Voice",
    year: "2024",
    description:
      "Realtime voice assistant SDK with streaming STT/TTS, function calling and sub-400ms turn latency for customer support apps.",
    stack: ["WebRTC", "Deepgram", "Node.js", "Cloudflare Workers"],
    href: "#",
  },
  {
    name: "Forge Eval",
    year: "2023",
    description:
      "Open-source evaluation harness for LLM applications with dataset versioning, side-by-side diffs and CI integrations.",
    stack: ["Python", "FastAPI", "React", "DuckDB"],
    href: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects."
      description="A focused look at recent work — from infrastructure for AI products to the interfaces that ship them."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group relative flex flex-col p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-xl font-medium text-foreground">{p.name}</h3>
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
              ↗
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}