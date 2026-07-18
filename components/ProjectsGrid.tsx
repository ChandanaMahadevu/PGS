import type { SanityProject } from "@/sanity/lib/queries";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  projects: SanityProject[];
  priorityCount?: number;
};

export function ProjectsGrid({ projects, priorityCount = 0 }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-stone-500 py-16">No projects yet. Add your first project in the admin panel.</p>
    );
  }
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
      {projects.map((project, i) => (
        <li key={project._id}>
          <ProjectCard project={project} priority={i < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
