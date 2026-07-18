import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getAllProjects } from "@/sanity/lib/queries";
import { siteConfig } from "@/data/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore residential and construction projects by ${siteConfig.name}. Homes, renovations, and brick-forward architecture.`,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Residential builds and brickwork by ${siteConfig.name}.`,
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="border-b border-stone-200 bg-white">
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects"
            description="A curated set of builds and spaces—each delivered with the same rigor we bring to every site."
          />
          <div className="mt-14">
            <ProjectsGrid projects={projects} priorityCount={2} />
          </div>
        </div>
      </section>
    </div>
  );
}
