# Leave a review implementation

Date: 2026-11-11

The approved `/leave-a-review/` page is implemented and passed the local finish review. The page extends the existing transport website. It uses the About dropdown and shared footer for discovery.

## Behavior and scope

Visitors can choose one to five stars using native radio controls. The stars fill cumulatively, keyboard arrows change the selection, and a status message confirms the choice. Selecting stars does not store, send or publish feedback. Reloading clears the choice.

Google, Facebook, phone and prepared email remain available before selection and at every rating. Ratings one through three change the direct-contact guidance without hiding public links or moving focus. The email draft includes the selected rating. The visitor reviews and sends that draft manually through their email app. Draft spaces use `%20` encoding. The custom element aborts its change listener when disconnected and before reconnecting.

The Google action reuses the existing read-reviews URL with the accurate label "Open Google reviews" and instructions to choose "Write a review" on the listing. The Facebook action opens the existing business profile and describes delivery photos and updates. It does not claim that Recommendations are available.

## Fit with the existing design

The implementation follows the direction contract in `.impeccable/surfaces/src-pages-leave-a-review-astro.md` and the incumbent `DESIGN.md`. It uses Inter, forest green, pale paper, square controls, thin rules and existing button, link and icon treatments. A compact introduction leads into the star selector, followed by unequal public-review and direct-contact columns. Below the existing 48rem breakpoint, the columns stack with public links first. Reduced-motion preferences remove the star transition.

No global token change is required. This task preserves `DESIGN.md` and `.impeccable/design.json` as they stood before the review-page work, including unrelated edits already in the workspace. No new shipping raster assets were introduced.

Two low-priority typography observations remain local to this page. The 12px endpoint labels help describe the experience scale and are hidden from assistive technology because each radio has its complete accessible label. The two path headings use `clamp(1.5rem, 2vw, 1.875rem)` as a local section-heading role. These observations do not require a site-wide typography change.

## Files and evidence

- `src/pages/leave-a-review.astro` contains the page, native selector, prepared email, component lifecycle handling and local responsive styles.
- `src/data/navData.json` adds "Leave a review" to About. The shared navigation and footer consume this data.
- `scripts/check-review.mjs` checks the built page and writes `.impeccable/review/leave-a-review/checks.json` and six screenshots.
- `.impeccable/review/leave-a-review/` contains normal and two-star screenshots at desktop, mobile and narrow widths.

The existing result file records passing selections for all five ratings and keyboard behavior at 1440px, 390px and 320px. It records no horizontal overflow, request writes or page errors. The check script also asserts unchanged public destinations at every rating, correct email drafts, no local or session storage, reload reset, footer and current-page navigation links, no-JavaScript contact paths, client navigation, canonical metadata and sitemap inclusion.

The implementation run reported these checks passed:

- `npm run build`
- `node scripts/check-review.mjs`
- `node .scratch/check-blog-build.mjs`
- `npm run og:check -- --only blog,blog-moffett-delivery`
- Diff whitespace check

The documentation pass inspected the implementation, navigation data, direction contract, product and design records, check script and saved check results. It did not rerun the build or browser checks. A fresh native reviewer inspected all six screenshots and returned "Ship" with no material fixes. The finish verdict covers the local implementation and captured states; it does not verify the live external review destinations.

## Release follow-up

Verify and replace the Google destination only when the business supplies or confirms its direct review link. [Google's official instructions](https://support.google.com/business/answer/16816815) describe opening the Business Profile, choosing "Read reviews", then "Get more reviews" and "Copy" from the business account. The current page does not invent that destination.

Verify whether Facebook Recommendations are enabled before changing the profile action into a recommendation request. These external checks remain release follow-up work.

No commits, deployments, messages or reviews were submitted as part of this implementation.

## November 12 follow-up

At the user's request, removed the redundant "Nothing has been sent" sentence from the rating status message. The explanation above the status remains. The production build, review-page interaction checks, blog build checks and focused blog OG checks passed again before preparing the commit. No deployment, messages or reviews were submitted.
