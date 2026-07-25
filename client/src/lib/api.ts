import { Project } from "@/types/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_URL}/api/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return (await res.json()) as Project[];
  } catch {
    return [];
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_URL}/api/projects/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as Project;
  } catch {
    return null;
  }
}
