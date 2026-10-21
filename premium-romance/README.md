# Premium Romance™

A standalone, fictional satire about treating relationships like financial products. Buildless HTML, CSS and JavaScript; no dependencies, backend, analytics, payment collection or data storage.

## Local preview

Requires Node.js. In this folder, run `npm run dev`, then open http://127.0.0.1:48163. To use a different port, run `PORT=48164 npm run dev`. Run `npm run check` for JavaScript syntax checks.

The deployable website is entirely inside this folder’s `dist/`. The project is isolated in `premium-romance/` on the `codex/premium-romance` branch of the existing repository. Run its commands from this folder. The original portfolio HTML and assets remain in the repository. On this branch, the root Wrangler configuration serves `premium-romance/dist` on the existing `aanviwebsite` Pages project and its custom domain. This folder retains its independent local preview script.

## Interactions

- Eligibility: select a fictional budget and priority to receive one of three satirical results. No personal information is requested, transmitted or stored.
- Pricing: monthly/yearly control updates the Premium amount and billing explanation.
- Basic and Enterprise: complete fictional plan dialogs.
- Exit: replaces the error state with a self-respect success state.
- Mobile navigation, keyboard-operable native dialogs, focus restoration, Escape dismissal, skip link and reduced-motion support.

## Photography

The editorial section reuses two existing portfolio photos at their original asset URLs: `IMG_1344.jpeg` and `IMG_1320.jpeg`. Original proportions and embedded credits are preserved. These are loaded remotely without a referrer; availability depends on the existing image host. The original asset host receives ordinary image requests. No photographs are used as fictional customer avatars or service endorsements.

Visible copy distinguishes editorial photography from the fictional products, quotes and scenarios. All testimonials are labelled as invented. The site remains set to `noindex, nofollow` while it is a local review project.

## Cloudflare production deployment

The user authorised publishing this satire on **https://aanvikarmakar.com/** on 21 October 2026.

- Existing Pages project: `aanviwebsite`.
- Production branch configured in Cloudflare: `codex/premium-romance`.
- Root Wrangler build output: `./premium-romance/dist`.
- The site is buildless; no build command is required.
- Push this branch to trigger the connected Git deployment. For an explicit direct upload from the repository root, use `npx wrangler pages deploy premium-romance/dist --project-name aanviwebsite --branch codex/premium-romance`.
- Verify the main domain's HTML, CSS and JavaScript against this folder after deployment.
- Keep the existing `noindex, nofollow` metadata and visible fiction/photo disclosures.

Before this release, the portfolio was served by deployment `73240049-241f-4e70-92dc-d9b3ad2719d7` (`https://73240049.aanviwebsite.pages.dev`). This deployment remains the rollback target for the portfolio. A local copy of its production deployment listing and homepage was saved under the repository's ignored `.wrangler/` directory.

The separate `premium-romance` Pages project was created before the user specified the main domain. It has no deployed version and is not used by this release.

See `REVIEW.md` for the local copy, design and interaction review. Earlier “nothing published” statements in review/verification notes record their pre-deployment state.
