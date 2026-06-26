import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-stone-200 bg-stone-100/50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-2xl text-stone-900">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <span className="font-medium text-stone-900">Explore</span>
            <Link
              href="/projects"
              className="text-stone-600 transition hover:text-stone-900"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-stone-600 transition hover:text-stone-900"
            >
              Contact
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 transition hover:text-stone-900"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-stone-500 md:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
