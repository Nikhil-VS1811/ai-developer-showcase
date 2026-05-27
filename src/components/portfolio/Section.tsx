import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}