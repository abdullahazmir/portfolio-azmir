import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chip, buttonVariants } from "@heroui/react";
import { getProject } from "@/lib/api";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/#projects" className="text-sm font-medium text-accent hover:underline">
        &larr; Back to projects
      </Link>

      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-surface-secondary">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Chip key={tech} variant="soft" color="accent">
            <Chip.Label>{tech}</Chip.Label>
          </Chip>
        ))}
      </div>

      <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "primary" })}
          >
            Live Project
          </a>
        ) : (
          <span className={buttonVariants({ variant: "primary" }) + " opacity-50"}>
            Live Project (Coming Soon)
          </span>
        )}
        {project.githubClientLink ? (
          <a
            href={project.githubClientLink}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub (Client)
          </a>
        ) : (
          <span className={buttonVariants({ variant: "outline" }) + " opacity-50"}>
            GitHub (Coming Soon)
          </span>
        )}
      </div>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Challenges Faced</h2>
          <p className="mt-2 text-foreground/75">{project.challenges}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Future Improvements</h2>
          <p className="mt-2 text-foreground/75">{project.futureImprovements}</p>
        </div>
      </section>
    </main>
  );
}
