# River Relief — Website

Marketing site for River Relief LLC, a personal-loan / debt-consolidation
lender. Built with Next.js (App Router) and TypeScript, deployed on Vercel.

> **Note:** This repo now lives at
> [`ryder-saunders/river-relief-website-rebuild`](https://github.com/ryder-saunders/river-relief-website-rebuild).
> Confirm the Vercel Git integration is pointed at this transferred GitHub
> repo before relying on automatic production deploys from `main`.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint + Prettier (with `prettier-plugin-tailwindcss` for class sorting)
- GitHub Actions CI (`format:check`, `lint`, `typecheck`, `build`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Purpose                               |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Start the local dev server            |
| `npm run build`        | Production build                      |
| `npm run start`        | Serve the production build            |
| `npm run lint`         | ESLint                                |
| `npm run typecheck`    | `tsc --noEmit`                        |
| `npm run format`       | Format all files with Prettier        |
| `npm run format:check` | Check formatting without writing (CI) |

## Project structure

```
src/
  app/
    layout.tsx      # Root layout: fonts, metadata, header/footer shell
    page.tsx         # The single homepage — composes section components
    globals.css       # Tailwind entry + theme tokens
  components/          # Presentational, one component per homepage section
  lib/
    site-config.ts     # ALL page copy, nav links, and contact info lives here
```

## Editing content

Nearly all text on the site (headings, copy, nav links, process steps,
contact info, CTA links, the legal disclosure) lives in
[`src/lib/site-config.ts`](src/lib/site-config.ts). Update that file rather
than editing JSX in components — it keeps content changes low-risk and easy
to review. Several values are placeholders marked `// TODO:` pending real
client content (application link, phone number, social links, contact
details).

Brand colors and logo files are documented in [`AGENTS.md`](AGENTS.md#brand)
— colors are Tailwind theme tokens (`bg-brand-*` etc.) in
`src/app/globals.css`, logos are in `public/brand/`.

For more on how the project is organized and conventions to follow, see
[`AGENTS.md`](AGENTS.md).

## Deployment

Live at **https://river-relief-website-rebuild.vercel.app**.

The Vercel project is linked locally as `river-relief-website-rebuild`
(`prj_GZWprUnk9XyHKRta1sieGsiqmIVX`). Confirm in Vercel that its Git
integration points to
`ryder-saunders/river-relief-website-rebuild`: pushes to `main` should deploy
to production automatically, and PRs should get preview deployments. No
`vercel.json` is needed — Next.js is auto-detected.
