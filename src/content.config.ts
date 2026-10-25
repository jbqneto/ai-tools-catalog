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
      'Open Source Apps',
    ]),
    url: z.string().url(),
    repository: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    resourceType: z.enum([
      'Application',
      'Agent skill',
      'MCP server',
      'Library & framework',
      'Developer utility',
      'Directory & collection',
      'Reference project',
      'AI model',
    ]),
    aiRelationship: z.enum([
      'AI-powered',
      'AI-integrated',
      'AI ecosystem',
      'Not AI-specific',
    ]),
    verification: z.enum(['confirmed', 'unverified']).default('confirmed'),
  }),
});

const prompts = defineCollection({
  loader: glob({ base: './src/content/prompts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(3),
    summary: z.string().min(25).max(240),
    kind: z.enum(['prompt', 'workflow']),
    category: z.enum(['App Promotion', 'Motion Design', 'Video Production', 'Video Editing']),
    tags: z.array(z.string()).default([]),
    sourceNote: z.string().optional(),
    relatedUrl: z.string().url().optional(),
  }),
});

export const collections = { tools, prompts };
