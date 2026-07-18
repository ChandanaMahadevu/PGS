import { client } from "./client";

export type SanityProject = {
  _id: string;
  title: string;
  slug: { current: string };
  status: "under_construction" | "completed" | "for_sale";
  address: string;
  location: string;
  description?: string;
  bhk?: string;
  plotSize?: string;
  houseSize?: number;
  price?: string;
  photos?: { asset: { url: string }; caption?: string }[];
  videoUrl?: string;
  order?: number;
};

const PROJECT_FIELDS = `
  _id,
  title,
  slug,
  status,
  address,
  location,
  description,
  bhk,
  plotSize,
  houseSize,
  price,
  photos[]{ caption, asset->{ url } },
  videoUrl,
  order
`;

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc, _createdAt desc) { ${PROJECT_FIELDS} }`
  );
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] { ${PROJECT_FIELDS} }`,
    { slug }
  );
}

export async function getFeaturedProjects(count = 4): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc, _createdAt desc)[0...$count] { ${PROJECT_FIELDS} }`,
    { count }
  );
}
