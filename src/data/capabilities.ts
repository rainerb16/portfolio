import type { IconName } from '../lib/icons';

export interface Capability {
  title: string;
  text: string;
  icon: IconName;
}

export const businessSide: Capability[] = [
  {
    title: 'Process improvement',
    text: 'I map how work moves between departments, find delays and duplicate steps, and fix the process before automating it.',
    icon: 'process',
  },
  {
    title: 'Process documentation',
    text: 'SOPs, process maps and runbooks that people use, written for staff, managers and engineers. Technical docs are published from GitHub to SharePoint automatically.',
    icon: 'document',
  },
  {
    title: 'Vendor platforms',
    text: 'I meet with the vendors of our business software, learn their platforms, and decide how we use them day to day.',
    icon: 'platforms',
  },
];

export const systemsSide: Capability[] = [
  {
    title: 'System design',
    text: 'Designed and built a business app that reads from a separate data platform through a read-only API.',
    icon: 'system',
  },
  {
    title: 'Integrations & APIs',
    text: 'Replaced separate integrations between a field-service platform, an HR system and email with one event pipeline.',
    icon: 'integrations',
  },
  {
    title: 'Automation workflows',
    text: '15 automations across departments, saving about $5,000 a month. Each one has retries, duplicate checks, health monitoring and a runbook.',
    icon: 'automation',
  },
];
