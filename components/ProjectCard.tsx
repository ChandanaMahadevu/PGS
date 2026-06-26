import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority }: ProjectCardProps) {
  const cover = project.images[0];
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm shadow-stone-900/5 ring-1 ring-stone-200/80 transition hover:shadow-md hover:ring-stone-300/80"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        {cover ? (
          <Image
            src={cover}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
        ) : null}
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-medium uppercase tracking-wider text-amber-900/90">
          {project.location}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-normal text-stone-900 transition group-hover:text-stone-700">
          {project.title}
        </h2>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-600">
          {project.description}
        </p>
        <span className="mt-4 inline-flex text-sm font-semibold text-stone-900 underline-offset-4 group-hover:underline">
          View project
        </span>
      </div>
    </Link>
  );
}
