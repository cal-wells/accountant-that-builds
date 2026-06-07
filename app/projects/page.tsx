import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects applying AI and code to real finance and personal problems.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <Reveal>
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">Projects</h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Where I put AI and code to work - on finance problems and a few
          personal ones. Some are live, some are in progress. Demos arrive as
          each one matures.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
