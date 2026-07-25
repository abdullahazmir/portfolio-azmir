import { getProjects } from "@/lib/api";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

export async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Selected work" title="Projects" />
      {projects.length === 0 ? (
        <p className="text-center text-foreground/60">
          Projects will appear here once the API is connected and seeded.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
