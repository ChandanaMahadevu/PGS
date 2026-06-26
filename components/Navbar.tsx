import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#faf9f7]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-stone-900 sm:text-2xl"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 sm:gap-10">
          <ul className="hidden items-center gap-8 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(
              `Hi ${siteConfig.name}, I'd like to discuss a project.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20bd5a]"
          >
            WhatsApp
          </a>
        </nav>
      </div>
      <nav className="flex justify-center gap-6 border-t border-stone-100 bg-[#faf9f7]/95 px-4 py-2.5 sm:hidden">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-xs font-medium text-stone-600 hover:text-stone-900"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
