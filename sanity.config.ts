import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schemas';
import { deskTool } from 'sanity/desk';
// import StudioNavbar from '@/components/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Bloggers_Studio',
  title: 'Bloggers Studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool(), deskTool()],

  schema: {
    types: schemaTypes,
  },
  // studio: {
  //   components: {
  //     navbar: StudioNavbar,
  //   },
  // },
});
