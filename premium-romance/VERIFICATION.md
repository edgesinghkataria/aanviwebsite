# Local verification — 21 October 2026

- Preview returns HTTP 200 at http://127.0.0.1:48163.
- JavaScript syntax checks pass (`npm run check`). No dependencies or build step required.
- Browser checked at CSS viewport widths 320, 390, 768, 1200 and 1440 pixels. Document width matches viewport width. Main heading fits its column at each width. Pricing uses one column on phones and three on tablets/desktops.
- Original two editorial photographs load successfully. Full photo proportions and embedded image credits remain visible.
- Mobile navigation opens and closes; choosing a section closes the menu.
- Eligibility form produces all three fictional outcomes: connection/respect rejection, fictional financial pre-approval and satire recognition. Retry works.
- Escape closes the native dialog and restores focus to its triggering button.
- Basic and Enterprise plan dialogs display their dedicated responses.
- Monthly/yearly pricing changes and restores the Premium price and billing copy.
- Exit button changes the error to “Self-respect restored,” updates the details and status message, and becomes disabled.
- Reduced-motion styling is implemented; assistive technology and reduced-motion system settings were not independently audited.
- Existing `aanviwebsite` repository remains clean. No existing files, hosting settings or domains were changed. Nothing was deployed.

Photography is served by the existing remote image host. This is local browser verification, not a published deployment or a comprehensive accessibility audit.
