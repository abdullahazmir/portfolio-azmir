export interface Project {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubClientLink: string;
  challenges: string;
  futureImprovements: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}
