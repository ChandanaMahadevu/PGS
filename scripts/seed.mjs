import { createClient } from "@sanity/client";
import https from "https";
import { Readable } from "stream";

const client = createClient({
  projectId: "4wkr25wp",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function fetchImageBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });
  });
}

async function uploadImage(url, filename) {
  console.log(`  Uploading ${filename}...`);
  const buffer = await fetchImageBuffer(url);
  const stream = Readable.from(buffer);
  const asset = await client.assets.upload("image", stream, {
    filename,
    contentType: "image/jpeg",
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

const projects = [
  {
    title: "Lakeside Residence",
    slug: "lakeside-residence",
    status: "completed",
    location: "Whitefield, Bengaluru",
    address: "Whitefield, Bengaluru, Karnataka",
    description:
      "A calm, light-filled family home with generous glazing, natural stone accents, and interiors tuned for everyday comfort. Structural work and finishing were delivered on a fixed timeline with weekly site reviews.",
    bhk: "4 BHK",
    plotSize: "40x60",
    houseSize: 2400,
    price: "₹1.2 Cr",
    order: 1,
    imageUrls: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
  },
  {
    title: "Urban Courtyard Villa",
    slug: "urban-courtyard-villa",
    status: "for_sale",
    location: "Jubilee Hills, Hyderabad",
    address: "Jubilee Hills, Hyderabad, Telangana",
    description:
      "A private courtyard anchors this urban villa—connecting living spaces to light and air. We managed civil, MEP coordination, and brickwork using our in-house red soil inventory for consistent tone and structural integrity.",
    bhk: "3 BHK",
    plotSize: "30x50",
    houseSize: 1800,
    price: "₹95 Lakhs",
    order: 2,
    imageUrls: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
  },
  {
    title: "Coastal Weekend Retreat",
    slug: "coastal-weekend-retreat",
    status: "completed",
    location: "Near Alibaug, Maharashtra",
    address: "Alibaug, Maharashtra",
    description:
      "Designed for low maintenance and sea-adjacent conditions, this retreat pairs robust masonry with warm timber interiors. Exposed brick feature walls showcase our signature red soil product line.",
    bhk: "2 BHK",
    plotSize: "30x40",
    houseSize: 1200,
    price: "On Request",
    order: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
  {
    title: "Heritage Row Renovation",
    slug: "heritage-row-renovation",
    status: "completed",
    location: "Fort Kochi, Kerala",
    address: "Fort Kochi, Kochi, Kerala",
    description:
      "Sensitive restoration of a heritage façade with modern services behind it. New extensions use load-bearing brick where appropriate, matching historical character while meeting current seismic guidance.",
    bhk: "3 BHK",
    plotSize: "25x45",
    houseSize: 1600,
    price: "₹80 Lakhs",
    order: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
    ],
  },
];

async function seed() {
  console.log("Starting seed...\n");
  for (const project of projects) {
    console.log(`Creating: ${project.title}`);
    const photos = [];
    for (let i = 0; i < project.imageUrls.length; i++) {
      const photo = await uploadImage(project.imageUrls[i], `${project.slug}-${i + 1}.jpg`);
      photos.push(photo);
    }
    await client.createOrReplace({
      _type: "project",
      _id: `project-${project.slug}`,
      title: project.title,
      slug: { _type: "slug", current: project.slug },
      status: project.status,
      location: project.location,
      address: project.address,
      description: project.description,
      bhk: project.bhk,
      plotSize: project.plotSize,
      houseSize: project.houseSize,
      price: project.price,
      order: project.order,
      photos,
    });
    console.log(`  Done: ${project.title}\n`);
  }
  console.log("All projects seeded!");
}

seed().catch(console.error);
