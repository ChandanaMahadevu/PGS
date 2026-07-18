import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Under Construction", value: "under_construction" },
          { title: "Completed", value: "completed" },
          { title: "For Sale", value: "for_sale" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Full Address",
      description: "e.g. JP Nagar, Mysore, Karnataka — used for Google Maps",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "location",
      title: "Location Label",
      description: "Short location shown on the card, e.g. JP Nagar, Mysore",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "bhk",
      title: "BHK",
      description: "e.g. 3BHK, 4BHK",
      type: "string",
    }),
    defineField({
      name: "plotSize",
      title: "Plot Size",
      description: "e.g. 30x40, 40x60",
      type: "string",
    }),
    defineField({
      name: "houseSize",
      title: "House Size (sq ft)",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price",
      description: "e.g. ₹85 Lakhs, On Request",
      type: "string",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description: "YouTube or direct video link",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower number shows first",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "photos.0" },
  },
});
