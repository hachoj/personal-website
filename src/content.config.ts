import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

export const BLOG_PATH = "src/data/blog";
export const AUTHORS_PATH = "src/data/authors";

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${AUTHORS_PATH}` }),
  schema: () =>
    z.object({
      name: z.string(),
      location: z.string().optional(),
      phone: z.string().optional(),
      email: z.string().optional(),
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      avatar: z.string().optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: reference("authors").default("harrison"),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

export const collections = { blog, authors };
