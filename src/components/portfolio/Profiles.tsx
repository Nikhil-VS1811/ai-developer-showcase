import { Section } from "./Section";

const profiles = [
  { platform: "GitHub", handle: "@arjun", stat: "1.2k followers · 320 stars", href: "#" },
  { platform: "LeetCode", handle: "@arjun", stat: "Guardian · 2180 rating", href: "#" },
  { platform: "Codeforces", handle: "@arjun", stat: "Expert · 1742", href: "#" },
  { platform: "HuggingFace", handle: "@arjun", stat: "14 models published", href: "#" },
  { platform: "Kaggle", handle: "@arjun", stat: "Notebooks Expert", href: "#" },
  { platform: "LinkedIn", handle: "in/arjun", stat: "5k+ connections", href: "#" },
];

export function Profiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Around the web"
      title="Coding profiles."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {profiles.map((p) => (
          <a
            key={p.platform}
            href={p.href}
            className="group flex items-center justify-between p-6 bg-card hover:bg-accent transition-colors"
          >
            <div>
              <div className="text-foreground font-medium">{p.platform}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{p.handle}</div>
              <div className="text-sm text-muted-foreground mt-3">{p.stat}</div>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              ↗
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}