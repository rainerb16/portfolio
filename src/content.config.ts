import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const side = z.enum(['top', 'right', 'bottom', 'left']);

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    stackLine: z.string(),
    next: z.string(),
    nextLabel: z.string(),
    meta: z.object({
      role: z.string(),
      scope: z.string(),
      stack: z.string(),
      status: z.string(),
      result: z.string().optional(),
    }),
    card: z.object({
      flow: z.array(z.string()).min(2),
      highlight: z.number().optional(),
      points: z.array(z.string()).min(1),
    }),
    designCaption: z.string(),
    diagram: z.object({
      width: z.number(),
      height: z.number(),
      chain: z.array(z.string()).min(2),
      nodes: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          sub: z.string(),
          x: z.number(),
          y: z.number(),
          variant: z.enum(['default', 'highlight', 'dashed']).default('default'),
        }),
      ),
      edges: z.array(
        z.object({
          from: z.string(),
          to: z.string(),
          fromSide: side,
          toSide: side,
          kind: z.enum(['main', 'side', 'dashed']).default('side'),
          label: z.string().optional(),
        }),
      ),
      bands: z
        .array(z.object({ x: z.number(), y: z.number(), w: z.number(), h: z.number(), label: z.string() }))
        .default([]),
    }),
    decisions: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
    outcomes: z.array(z.string()).min(1),
    azure: z.object({
      intro: z.string(),
      rows: z.array(z.object({ now: z.string(), azure: z.string() })),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      kind: z.enum(['build', 'experiment']),
      order: z.number(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      flow: z.array(z.string()).default([]),
      stackLine: z.string().optional(),
      note: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    }),
});

export const collections = { work, projects };
