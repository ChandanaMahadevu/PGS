import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  projects: Project[];
  /** First N cards use priority loading (e.g. above the fold). */
  priorityCount?: number;
};

export function ProjectsGrid({ projects, priorityCount = 0 }: ProjectsGridProps) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
      {projects.map((project, i) => (
        <li key={project.id}>
          <ProjectCard project={project} priority={i < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
