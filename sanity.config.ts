"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectSchema } from "./sanity/schemaTypes/project";

export default defineConfig({
  name: "pgs-group",
  title: "PGS Group Admin",
  projectId: "4wkr25wp",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [projectSchema],
  },
});
