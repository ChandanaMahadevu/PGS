/** Production URL for Open Graph / canonical (set in `.env.local`, e.g. NEXT_PUBLIC_SITE_URL=https://yourdomain.com). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

/** Replace with your business WhatsApp number in international format, no + or spaces. */
export const WHATSAPP_PHONE = "15551234567";

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const siteConfig = {
  name: "PGS Build & Brick",
  tagline: "Premium homes. Honest materials.",
  description:
    "We design and build refined residential projects and supply premium red soil bricks—crafted for strength, beauty, and lasting value.",
} as const;
