import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/project-card";
import { projects, type Project } from "@/data/projects";

const base: Project = {
  slug: "demo",
  name: "Demo Project",
  what: "Does a thing.",
  why: "For a reason.",
  status: "In Progress",
};

describe("ProjectCard", () => {
  it("renders a 'Visit site' link to the demoUrl when present", () => {
    render(
      <ProjectCard project={{ ...base, demoUrl: "https://example.com/demo" }} />,
    );
    const link = screen.getByRole("link", { name: /visit site/i });
    expect(link).toHaveAttribute("href", "https://example.com/demo");
  });

  it("renders a 'View code' link to the detailUrl when present", () => {
    render(
      <ProjectCard
        project={{ ...base, detailUrl: "https://github.com/x/y" }}
      />,
    );
    const link = screen.getByRole("link", { name: /view code/i });
    expect(link).toHaveAttribute("href", "https://github.com/x/y");
  });

  it("renders no link when no URL is present", () => {
    render(<ProjectCard project={base} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders the status badge text", () => {
    render(<ProjectCard project={{ ...base, status: "Planned" }} />);
    expect(screen.getByText("Planned")).toBeInTheDocument();
  });

  it("renders one card per project in the data", () => {
    render(
      <>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </>,
    );
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
  });
});
