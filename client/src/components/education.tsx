import { Card } from "@heroui/react";
import { education } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Academic background" title="Education" />
      <div className="space-y-4">
        {education.map((edu) => (
          <Card key={edu.degree} className="p-2">
            <Card.Header>
              <Card.Title>{edu.degree}</Card.Title>
              <Card.Description>
                {edu.institution} &middot; {edu.year}
              </Card.Description>
            </Card.Header>
          </Card>
        ))}
      </div>
    </section>
  );
}
