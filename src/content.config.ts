import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string().min(2),
    summary: z.string().min(25).max(240),
    category: z.enum([
      'Agents & Automation',
      'Developer Tools',
      'Data & Documents',
      'Web & Monitoring',
      'Media & Creative',
      'Learning & Research',
      'Finance',
      '3D & Interactive',
    ]),
    url: z.string().url(),
    repository: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    verification: z.enum(['confirmed', 'unverified']).default('confirmed'),
  }),
});

export const collections = { tools };
