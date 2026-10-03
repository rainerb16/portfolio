// Inline stroke icons (24×24). Each value is the SVG's inner markup.
export const icons = {
  process:
    '<circle cx="4.5" cy="12" r="2"/><path d="M6.5 12h3"/><path d="M13 8.5l3.5 3.5-3.5 3.5-3.5-3.5z"/><path d="M16.5 12h1.5M18 12V6h1.5M18 12v6h1.5"/>',
  document: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h5"/>',
  platforms:
    '<rect x="3" y="5" width="11" height="9" rx="1.5"/><rect x="10" y="10" width="11" height="9" rx="1.5"/>',
  system:
    '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4a2.5 2.5 0 0 1 2.5 2.5v5"/>',
  integrations:
    '<circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M7.5 12h4l5-6M11.5 12l5 6"/>',
  automation: '<path d="M4 7h11M4 12h7M4 17h11"/><path d="M17 4l3 3-3 3M15 14l3 3-3 3"/>',
} as const;

export type IconName = keyof typeof icons;
