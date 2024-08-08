import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import rehypeKatex from "rehype-katex"; // relevant
import remarkMath from "remark-math"; // relevant
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    mdx({
      remarkPlugins: [remarkMath], // relevant
      rehypePlugins: [rehypeKatex], // relevant
    }),
  ],
  image: {
    domains: ["res.cloudinary.com"],
    service: passthroughImageService(),
  },
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  output: "server",
  adapter: netlify(),
});
