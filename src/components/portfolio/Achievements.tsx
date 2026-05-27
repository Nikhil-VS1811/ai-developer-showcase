import { Section } from "./Section";

const items = [
  {
    year: "2025",
    title: "Winner — Anthropic Builder Hackathon",
    description: "Built an agentic research assistant that ranked first across 480 teams.",
  },
  {
    year: "2024",
    title: "Top 10 — Y Combinator AI Hackathon",
    description: "Voice-first scheduling agent shipped end-to-end in 36 hours.",
  },
  {
    year: "2024",
    title: "Speaker — PyData Bengaluru",
    description: "Talk on evaluating retrieval systems with synthetic ground truth.",
  },
  {
    year: "2023",
    title: "Open Source Maintainer",
    description: "Forge Eval reached 3k GitHub stars and is used by 40+ teams in production.",
  },
  {
    year: "2023",
    title: "Winner — Smart India Hackathon",
    description: "Government-track winner for a document intelligence platform.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements & hackathons."
    >
      <ol className="relative border-l border-border ml-2">
        {items.map((it) => (
          <li key={it.title} className="pl-8 pb-10 last:pb-0 relative">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="font-mono text-xs text-muted-foreground">{it.year}</div>
            <h3 className="mt-1 text-lg text-foreground font-medium">{it.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
              {it.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}