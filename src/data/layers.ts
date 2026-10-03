// The four layers of the hero stack, bottom to top.
// The same list drives the 3D scene, the layer buttons and the info panel.
export interface Layer {
  short: string;
  name: string;
  description: string;
  linkText: string;
  href: string;
  accent: 'blue' | 'coral';
}

export const layers: Layer[] = [
  {
    short: 'Data',
    name: 'Data',
    description: 'Event logs and business data. MySQL on Azure at work, PostgreSQL in personal projects.',
    linkText: 'Event pipeline case study',
    href: '/work/event-pipeline',
    accent: 'blue',
  },
  {
    short: 'Queues',
    name: 'Queues & events',
    description: 'Incoming work goes into a queue first. Failed jobs retry without running twice.',
    linkText: 'Event pipeline case study',
    href: '/work/event-pipeline',
    accent: 'coral',
  },
  {
    short: 'Services',
    name: 'Services & APIs',
    description: 'Workers, integrations and REST APIs in Node.js/Express and Django REST.',
    linkText: 'Business app case study',
    href: '/work/business-app',
    accent: 'blue',
  },
  {
    short: 'Apps',
    name: 'Apps',
    description: 'The screens staff use, built with React and Vue 3.',
    linkText: 'Personal builds',
    href: '/#builds',
    accent: 'blue',
  },
];
