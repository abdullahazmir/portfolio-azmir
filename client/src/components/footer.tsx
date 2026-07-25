import { profile, socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-sm text-foreground/60 sm:flex-row sm:justify-between sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={socials.facebook} target="_blank" rel="noreferrer" className="hover:text-accent">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
