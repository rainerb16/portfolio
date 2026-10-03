# rainerb.com

Personal portfolio of Rainer B. Built with Astro, Vue 3, GSAP and Three.js, and hosted on Netlify.

## Run it locally

Needs Node 22.12 or newer.

```bash
npm install      # once, or after pulling dependency changes
npm run dev      # dev server at http://localhost:4321, reloads on save
```

To check the production build:

```bash
npm run build    # outputs to dist/
npm run preview  # serves dist/ at http://localhost:4321
```

## Checks

```bash
npm run lint          # ESLint
npm run format        # Prettier (format:check to only check)
npm run check         # Astro and TypeScript checks
npm run test:a11y     # Playwright: axe accessibility scan, console errors, keyboard and layer controls
```

`test:a11y` runs against a built site, so run `npm run build` first. The first time, install the test browser with `npx playwright install chromium`.

CI runs all of these on every pull request (`.github/workflows/ci.yml`).

## Where things live

| What                                            | Where                       |
| ----------------------------------------------- | --------------------------- |
| Case studies                                    | `src/content/work/*.md`     |
| Personal builds and experiments                 | `src/content/projects/*.md` |
| "What I do now" cards                           | `src/data/capabilities.ts`  |
| Hero layers (3D scene, buttons and panel)       | `src/data/layers.ts`        |
| Name, links, email, "currently learning" topics | `src/data/profile.ts`       |
| Colours, fonts and shared styles                | `src/styles/global.css`     |
| Scroll animations                               | `src/scripts/motion.ts`     |
| 3D hero                                         | `src/components/hero/`      |
| Redirects and security headers                  | `netlify.toml`              |

Content files are checked against schemas in `src/content.config.ts`, so a missing or misspelled field fails the build.

## Rules for content

- Plain, direct wording.
- Work case studies show the design and decisions only. No code, company names, hostnames or data.
- Motion stays slow, and everything works with "reduce motion" turned on.
