import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <HomeCta />
    </>
  );
}
