import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { ProjectsSection } from "@/components/projects-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
