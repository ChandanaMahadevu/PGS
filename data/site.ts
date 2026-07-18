/** Production URL for Open Graph / canonical (set in `.env.local`, e.g. NEXT_PUBLIC_SITE_URL=https://yourdomain.com). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

/** Replace with your business WhatsApp number in international format, no + or spaces. */
export const WHATSAPP_PHONE = "919901997772";

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const siteConfig = {
  name: "PGS Group",
  tagline: "Premium homes. Honest materials.",
  description:
    "We design and build refined residential projects, supply premium red soil bricks, and deliver end-to-end interior solutions—crafted for strength, beauty, and lasting value.",
} as const;
