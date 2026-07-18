import Image from "next/image";
import Link from "next/link";
import type { SanityProject } from "@/sanity/lib/queries";

type ProjectCardProps = {
  project: SanityProject;
  priority?: boolean;
};

const statusLabel: Record<string, string> = {
  under_construction: "Under Construction",
  completed: "Completed",
  for_sale: "For Sale",
};

const statusColor: Record<string, string> = {
  under_construction: "bg-amber-100 text-amber-800",
  completed: "bg-green-100 text-green-800",
  for_sale: "bg-blue-100 text-blue-800",
};

export function ProjectCard({ project, priority }: ProjectCardProps) {
  const cover = project.photos?.[0]?.asset.url;
  return (
    <Link
      href={`/projects/${project.slug.current}`}
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
        ) : (
          <div className="flex h-full items-center justify-center text-stone-400 text-sm">No photo yet</div>
        )}
        {project.status && (
          <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor[project.status]}`}>
            {statusLabel[project.status]}
          </span>
        )}
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-medium uppercase tracking-wider text-amber-900/90">
          {project.location}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-normal text-stone-900 transition group-hover:text-stone-700">
          {project.title}
        </h2>
        <div className="mt-2 flex gap-4 text-xs text-stone-500">
          {project.bhk && <span>{project.bhk}</span>}
          {project.houseSize && <span>{project.houseSize} sq ft</span>}
          {project.price && <span className="font-semibold text-stone-700">{project.price}</span>}
        </div>
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
