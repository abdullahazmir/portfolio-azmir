import { Card } from "@heroui/react";
import { experience } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="bg-surface/50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />
        <div className="space-y-6">
          {experience.map((job) => (
            <Card key={`${job.company}-${job.role}`} className="p-2">
              <Card.Header>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <Card.Title>{job.role}</Card.Title>
                  <span className="text-sm text-foreground/60">{job.duration}</span>
                </div>
                <Card.Description>{job.company}</Card.Description>
              </Card.Header>
              <Card.Content>
                <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/75">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
