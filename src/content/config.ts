import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    group: z.enum(['AI Automation', 'WordPress', 'Shopify', 'SaaS / App', 'SEO']),
    label: z.string(),          // small tag line e.g. 'WooCommerce · Custom PHP'
    live: z.string().url().optional(),
    image: z.string(),
    tags: z.array(z.string()),
    gallery: z.array(z.string()).default([]),   // extra screenshots (click to enlarge)
    featured: z.boolean().default(false),
  }),
});

const seoWins = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    metric: z.string(),         // headline number/result
    metricLabel: z.string(),
    summary: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = { projects, seoWins };
