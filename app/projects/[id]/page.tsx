import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/sanity/lib/queries";
import { siteConfig, whatsappUrl } from "@/data/site";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectBySlug(id);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: project.photos?.[0] ? [{ url: project.photos[0].asset.url }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectBySlug(id);
  if (!project) notFound();

  const wa = whatsappUrl(
    `Hi ${siteConfig.name}, I'm interested in "${project.title}" (${project.location}).`
  );

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(project.address)}&output=embed`;

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
          {project.status && (
            <span className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor[project.status]}`}>
              {statusLabel[project.status]}
            </span>
          )}
        </header>

        {/* Photos */}
        {project.photos && project.photos.length > 0 && (
          <div className="mt-12 space-y-6">
            {project.photos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-stone-200 shadow-sm ring-1 ring-stone-200/80 sm:aspect-[2/1]"
              >
                <Image
                  src={photo.asset.url}
                  alt={photo.caption ?? `${project.title} — image ${i + 1}`}
                  fill
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        )}

        {/* Video */}
        {project.videoUrl && (
          <div className="mt-8">
            <video
              src={project.videoUrl}
              controls
              className="w-full rounded-2xl shadow-sm ring-1 ring-stone-200/80"
            />
          </div>
        )}

        <div className="mx-auto mt-14 max-w-3xl">
          {/* Description */}
          {project.description && (
            <>
              <h2 className="font-serif text-2xl text-stone-900 sm:text-3xl">Overview</h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
                {project.description}
              </p>
            </>
          )}

          {/* Specs */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:grid-cols-4">
            {project.bhk && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-stone-400">BHK</p>
                <p className="mt-1 text-sm font-semibold text-stone-900">{project.bhk}</p>
              </div>
            )}
            {project.plotSize && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-stone-400">Plot Size</p>
                <p className="mt-1 text-sm font-semibold text-stone-900">{project.plotSize}</p>
              </div>
            )}
            {project.houseSize && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-stone-400">House Size</p>
                <p className="mt-1 text-sm font-semibold text-stone-900">{project.houseSize} sq ft</p>
              </div>
            )}
            {project.price && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-stone-400">Price</p>
                <p className="mt-1 text-sm font-semibold text-stone-900">{project.price}</p>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl text-stone-900 sm:text-3xl">Location</h2>
            <p className="mt-2 text-sm text-stone-500">{project.address}</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <iframe
                src={mapSrc}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${project.title}`}
              />
            </div>
          </div>

          {/* CTA */}
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
