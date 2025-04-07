import { defineCollection, z } from "astro:content";

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string(),
    readTime: z.string(),
    author: z.object({
      name: z.string(),
      image: z.string(),
      fallback: z.string(),
      bio: z.string(),
    }),
    featuredImage: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string(),
    tags: z.array(z.string()),
    likeCount: z.number().default(0),
    commentCount: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

// Export collections for use
export const collections = {
  blog: blogCollection,
  projects,
};
