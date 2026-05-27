import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Developer focused on practical AI."
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I build full stack applications that combine modern web tech with
            AI capabilities — from Flask backends and REST APIs to React
            frontends that talk to language models, retrieval systems and
            intelligent workflows.
          </p>
          <p>
            My stack centers on Python and Flask for server-side logic, React
            and TypeScript for UI, and hands-on experimentation with LLMs, prompt
            engineering and tool integration. I care about clean code, working
            products, and interfaces that feel obvious once you use them.
          </p>
        </div>
        <div className="space-y-6 font-mono text-sm">
          <div>
            <div className="text-muted-foreground">Currently</div>
            <div className="text-foreground">Student Developer</div>
          </div>
          <div>
            <div className="text-muted-foreground">Based in</div>
            <div className="text-foreground">India</div>
          </div>
          <div>
            <div className="text-muted-foreground">Focus</div>
            <div className="text-foreground">Flask · React · LLM APIs</div>
          </div>
        </div>
      </div>
    </Section>
  );
}