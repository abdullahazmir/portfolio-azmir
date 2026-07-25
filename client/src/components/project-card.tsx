import Image from "next/image";
import Link from "next/link";
import { Card, buttonVariants } from "@heroui/react";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full bg-surface-secondary">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
      <Card.Header className="px-5 pt-5">
        <Card.Title>{project.name}</Card.Title>
        <Card.Description>{project.shortDescription}</Card.Description>
      </Card.Header>
      <Card.Footer className="mt-auto px-5 pb-5">
        <Link
          href={`/projects/${project.slug}`}
          className={buttonVariants({ variant: "primary", size: "sm" })}
        >
          View More
        </Link>
      </Card.Footer>
    </Card>
  );
}
