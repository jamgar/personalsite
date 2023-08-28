import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mellow-lollipop-4e798a.netlify.app/",
  integrations: [tailwind(), image(), mdx()]
});