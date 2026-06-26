import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";

export function HomeCta() {
  return (
    <section className="border-t border-stone-200 bg-stone-900 px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
          Share your brief—we will respond with a clear next step, whether you
          need construction, brick supply, or both.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl(
              `Hi ${siteConfig.name}, I'd like to discuss a project.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a] sm:w-auto"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-stone-500 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition hover:border-stone-400 hover:bg-white/5 sm:w-auto"
          >
            Contact form
          </Link>
        </div>
      </div>
    </section>
  );
}
