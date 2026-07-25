import { Chip } from "@heroui/react";
import { skills } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="bg-surface/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What I work with" title="Skills" />
        <div className="space-y-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-surface p-4 sm:flex-row sm:items-center sm:gap-6 dark:border-white/10"
            >
              <span className="shrink-0 text-sm font-semibold uppercase tracking-wide text-accent sm:w-32">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item} variant="soft" color="accent">
                    <Chip.Label>{item}</Chip.Label>
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
