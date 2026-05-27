import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer focused on shipping useful AI."
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I design and build full stack applications that bring large language
            models from prototype to production — including evaluation pipelines,
            retrieval, tool use, agent orchestration and the underlying APIs and
            UIs that make them feel reliable.
          </p>
          <p>
            My background spans TypeScript across the stack, Python for ML
            tooling, and cloud-native infrastructure on AWS and GCP. I care about
            measured performance, clear interfaces and software that respects the
            person using it.
          </p>
        </div>
        <div className="space-y-6 font-mono text-sm">
          <div>
            <div className="text-muted-foreground">Currently</div>
            <div className="text-foreground">Senior Full Stack Engineer</div>
          </div>
          <div>
            <div className="text-muted-foreground">Based in</div>
            <div className="text-foreground">Bengaluru, India</div>
          </div>
          <div>
            <div className="text-muted-foreground">Focus</div>
            <div className="text-foreground">LLM apps · RAG · Agents</div>
          </div>
        </div>
      </div>
    </Section>
  );
}