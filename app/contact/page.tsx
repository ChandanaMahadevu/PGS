import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for construction, brick supply, or project enquiries. WhatsApp and form available.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Reach ${siteConfig.name} for builds and red soil brick orders.`,
  },
};

export default function ContactPage() {
  return (
    <div className="border-b border-stone-200 bg-[#faf9f7]">
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about your site"
            description="Share a short brief—we typically reply within one business day. For fastest coordination, message us on WhatsApp."
            align="center"
          />
          <div className="mt-6 flex justify-center">
            <a
              href={whatsappUrl(
                `Hi ${siteConfig.name}, I'd like to discuss a project.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20bd5a]"
            >
              Open WhatsApp
            </a>
          </div>
          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
