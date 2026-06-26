export type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "lakeside-residence",
    title: "Lakeside Residence",
    location: "Whitefield, Bengaluru",
    description:
      "A calm, light-filled family home with generous glazing, natural stone accents, and interiors tuned for everyday comfort. Structural work and finishing were delivered on a fixed timeline with weekly site reviews.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80",
    ],
  },
  {
    id: "urban-courtyard-villa",
    title: "Urban Courtyard Villa",
    location: "Jubilee Hills, Hyderabad",
    description:
      "A private courtyard anchors this urban villa—connecting living spaces to light and air. We managed civil, MEP coordination, and brickwork using our in-house red soil inventory for consistent tone and structural integrity.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154529-220f49f0a1e0?w=1600&q=80",
    ],
  },
  {
    id: "coastal-weekend-retreat",
    title: "Coastal Weekend Retreat",
    location: "Near Alibaug, Maharashtra",
    description:
      "Designed for low maintenance and sea-adjacent conditions, this retreat pairs robust masonry with warm timber interiors. Exposed brick feature walls showcase our signature red soil product line.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1600&q=80",
    ],
  },
  {
    id: "heritage-row-renovation",
    title: "Heritage Row Renovation",
    location: "Fort Kochi, Kerala",
    description:
      "Sensitive restoration of a heritage façade with modern services behind it. New extensions use load-bearing brick where appropriate, matching historical character while meeting current seismic guidance.",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1600&q=80",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(count = 4): Project[] {
  return projects.slice(0, count);
}
