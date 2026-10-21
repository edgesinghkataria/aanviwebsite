# Premium Romance™

A standalone, fictional satire about treating relationships like financial products. Buildless HTML, CSS and JavaScript; no dependencies, backend, analytics, payment collection or data storage.

## Local preview

Requires Node.js. In this folder, run `npm run dev`, then open http://127.0.0.1:48163. To use a different port, run `PORT=48164 npm run dev`. Run `npm run check` for JavaScript syntax checks.

The deployable website is entirely inside this folder’s `dist/`. The project is isolated in `premium-romance/` on the `codex/premium-romance` branch of the existing repository. Run its commands from this folder. The original website files and hosting configuration are unchanged; this project has its own preview script and no deployment command.

## Interactions

- Eligibility: select a fictional budget and priority to receive one of three satirical results. No personal information is requested, transmitted or stored.
- Pricing: monthly/yearly control updates the Premium amount and billing explanation.
- Basic and Enterprise: complete fictional plan dialogs.
- Exit: replaces the error state with a self-respect success state.
- Mobile navigation, keyboard-operable native dialogs, focus restoration, Escape dismissal, skip link and reduced-motion support.

## Photography

The editorial section reuses two existing portfolio photos at their original asset URLs: `IMG_1344.jpeg` and `IMG_1320.jpeg`. Original proportions and embedded credits are preserved. These are loaded remotely without a referrer; availability depends on the existing image host. The original asset host receives ordinary image requests. No photographs are used as fictional customer avatars or service endorsements.

Visible copy distinguishes editorial photography from the fictional products, quotes and scenarios. All testimonials are labelled as invented. The site remains set to `noindex, nofollow` while it is a local review project.

## Deployment instructions (only after explicit approval)

See `REVIEW.md` for the latest copy, design and interaction review, including its verification limits.

Nothing has been published. Do not run the existing Aanvi site's deploy command.

1. Choose a **new, separate** static hosting project and hostname unrelated to the existing personal website.
2. Confirm permission to publish the portfolio photography at the chosen destination, or replace the two images with approved editorial assets.
3. Upload **only the contents of `dist/`** to the new static host. No build command or environment variables are needed.
4. Keep the visible fiction and photo-context disclosures. Review whether to retain the current `noindex, nofollow` metadata.
5. Verify the selected hostname, mobile layout, photos, dialogs, pricing control and exit interaction before sharing.

No deployment integration or automatic publish script is configured.
