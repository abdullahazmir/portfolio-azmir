import { profile } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Get to know me" title="About Me" />
      <div className="space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
