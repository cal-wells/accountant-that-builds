import type { Project, ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  "In Progress": "bg-primary/10 text-primary-dark",
  Planned: "bg-secondary/10 text-secondary",
  Live: "bg-ink/5 text-ink",
};

export function ProjectCard({ project }: { project: Project }) {
  const link = project.demoUrl ?? project.detailUrl;
  const linkLabel = project.demoUrl ? "View demo" : "Read more";

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-soft transition-shadow hover:shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-ink">{project.name}</h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-muted">{project.what}</p>

      <p className="mt-3 text-sm leading-relaxed text-muted/90">
        <span className="font-semibold text-ink">Why it matters: </span>
        {project.why}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          {linkLabel} <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}
