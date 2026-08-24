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

### Environment variables

The lead form posts to Forth CRM Data Source Post URLs from a server-side route.
Configure these in Vercel for Production, Preview, and Development:

```bash
FORTH_HOME_POST_URL=https://login.forthcrm.com/post/4898492146f1f1ffd916dd181e7a42bec35b09d2/
FORTH_CONTACT_POST_URL=https://login.forthcrm.com/post/2337089719f85c02b5381b45b030a2eb35a1bc7b/
```

## Lead form testing

Run the local smoke test before client demos or after lead-form changes:

```bash
npm run test:leads
```

This starts a local Next.js dev server, uses a mock Forth server, and submits
all lead form instances: the `/qualify` funnel, homepage hero form, homepage
intake form, and a mobile `/qualify` flow.

To verify live Forth credentials and field mapping, export the real env vars
locally and run:

```bash
npm run test:leads:live-forth
```

The live test creates a fake contact, reads it back to verify standard and
custom fields, then deletes the test contact.
