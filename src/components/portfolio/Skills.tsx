import { Section } from "./Section";

const groups = [
  {
    title: "AI & ML",
    items: ["OpenAI", "Anthropic", "LangGraph", "LlamaIndex", "pgvector", "RAG", "Evals"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "TanStack", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "FastAPI", "tRPC", "PostgreSQL", "Redis"],
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Cloudflare", "Docker", "Terraform", "GitHub Actions", "Vercel"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-5">
              {g.title}
            </h3>
            <ul className="space-y-2.5">
              {g.items.map((i) => (
                <li key={i} className="text-foreground text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}