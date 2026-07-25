import { Card, Chip } from "@heroui/react";
import { skills } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="bg-surface/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What I work with" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.category} className="p-2">
              <Card.Header>
                <Card.Title>{group.category}</Card.Title>
              </Card.Header>
              <Card.Content className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item} variant="soft" color="accent">
                    <Chip.Label>{item}</Chip.Label>
                  </Chip>
                ))}
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
