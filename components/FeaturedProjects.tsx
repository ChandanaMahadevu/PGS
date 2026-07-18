import Link from "next/link";
import { getFeaturedProjects } from "@/sanity/lib/queries";
import { ProjectsGrid } from "./ProjectsGrid";
import { SectionHeading } from "./SectionHeading";

export async function FeaturedProjects() {
  const featured = await getFeaturedProjects(4);
  return (
    <section className="border-t border-stone-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected projects"
            description="Homes and spaces shaped by disciplined construction—and brickwork with character."
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold text-stone-900 underline-offset-4 hover:underline"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-14">
          <ProjectsGrid projects={featured} priorityCount={2} />
        </div>
      </div>
    </section>
  );
}
