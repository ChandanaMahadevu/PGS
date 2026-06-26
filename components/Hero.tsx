import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";

type HeroProps = {
  headline?: string;
  subtext?: string;
};

export function Hero({
  headline = "We Build Your Dream Home",
  subtext = "Thoughtful construction and premium red soil bricks—engineered for longevity, finished with care.",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7] px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(180,83,9,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 60%, rgba(68,64,60,0.06) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-900/80">
          {siteConfig.tagline}
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl xl:text-7xl">
          {headline}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
          {subtext}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-stone-800"
          >
            View projects
          </Link>
          <a
            href={whatsappUrl(
              `Hi ${siteConfig.name}, I'd like to discuss a new build.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 shadow-sm transition hover:border-stone-400"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
