import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";
import { siteConfig, whatsappUrl } from "@/data/site";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: project.images[0] ? [{ url: project.images[0] }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const wa = whatsappUrl(
    `Hi ${siteConfig.name}, I'm interested in "${project.title}" (${project.location}).`
  );

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <Link
          href="/projects"
          className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
        >
          ← All projects
        </Link>
        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-900/90">
            {project.location}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
        </header>

        <div className="mt-12 space-y-6">
          {project.images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-stone-200 shadow-sm ring-1 ring-stone-200/80 sm:aspect-[2/1]"
            >
              <Image
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-serif text-2xl text-stone-900 sm:text-3xl">
            Overview
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
            {project.description}
          </p>
          <p className="mt-4 text-sm text-stone-500">
            <span className="font-medium text-stone-800">Location:</span>{" "}
            {project.location}
          </p>
          <div className="mt-10">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20bd5a]"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
