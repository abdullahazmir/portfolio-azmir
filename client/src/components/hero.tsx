import Image from "next/image";
import type { ReactNode } from "react";
import { buttonVariants } from "@heroui/react";
import { profile, socials } from "@/lib/content";

const socialLinks = [
  { label: "GitHub", href: socials.github, icon: "github" },
  { label: "LinkedIn", href: socials.linkedin, icon: "linkedin" },
  { label: "X", href: socials.x, icon: "x" },
  { label: "Facebook", href: socials.facebook, icon: "facebook" },
] as const;

const icons: Record<string, ReactNode> = {
  github: (
    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.03-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.16a10.9 10.9 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  ),
  x: <path d="M18.9 2H22l-7.6 8.68L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.26L1 2h7.1l4.9 6.03L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />,
  facebook: (
    <path d="M13.5 21.9v-8.4h2.8l.42-3.3h-3.22V8.02c0-.96.27-1.6 1.64-1.6h1.75V3.5c-.3-.04-1.35-.13-2.56-.13-2.53 0-4.26 1.54-4.26 4.38v2.45H7.24v3.3h2.83v8.4h3.43Z" />
  ),
};

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {profile.designation}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m {profile.name}
          </h1>
          <p className="mt-4 text-base text-foreground/70 sm:text-lg">
            {profile.about[0]}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.resume}
              download
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Download Resume
            </a>
            <a href="#projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Projects
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-foreground/70 transition-colors hover:border-accent hover:text-accent dark:border-white/15"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  {icons[s.icon]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="relative size-72 shrink-0 overflow-hidden rounded-full border-4 border-accent/20 shadow-xl sm:size-96 lg:size-[28rem]">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 288px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
