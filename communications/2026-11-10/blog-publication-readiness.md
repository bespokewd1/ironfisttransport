# Blog publication readiness

Implemented locally on 2026-11-11 for task 1. No deployment or commit performed.

The blog index and existing MOFFETT article no longer receive the blog-specific noindex directive. Both URLs appear in the production sitemap. Admin remains noindexed and excluded, and the development OG studio remains absent from production output.

The index uses the title "Delivery planning blog". The article uses "No site forklift? MOFFETT guide" through an optional SEO title field shared by the content schema and CMS. Full titles including the business suffix are 49 and 58 characters. Both pages have concise search and social descriptions. The visible article heading, article body and November 10 publication date are preserved. BlogPosting retains its separate equipment photograph.

Two branded 1200 by 630 JPEG cards use the existing studio template, real equipment photography, logo and business contact strip:

- `/assets/og/blog.2c80c00ca8ef.jpg`
- `/assets/og/blog-moffett-delivery.67fcf42b7e66.jpg`

The article card is mapped explicitly to the existing article. Future articles retain their cover-image fallback until a card is authored for them. All ten existing manifest entries, including the approved Service Areas image, are unchanged.

The exporter now accepts `--only` with comma-separated card identifiers and retains older hashed assets. Generate just these cards with `npm run og:export -- --only blog,blog-moffett-delivery` while the local development server is running. The studio now contains twelve card definitions.

Validation passed:

- `npm run build`.
- `npm run og:check -- --only blog,blog-moffett-delivery`, including canonical URLs, OG/X metadata, JPEG dimensions/size, image provenance, no social-image hero preload, and production studio exclusion.
- `node .scratch/check-blog-build.mjs`, updated for publication, including sitemap inclusion, admin exclusions, production schema photo, homepage article placement and starter-post removal.
- Targeted export geometry, loaded images/fonts and desktop/mobile studio overflow checks. Both new cards were visually inspected at full or reduced size. Export reports and review images are in `.impeccable/review/og-cards/`.
- Existing manifest entries compared against HEAD and unchanged. Built article heading and date preserved. Whitespace check passed.

The unfiltered `npm run og:check` stops at its existing homepage title-length assertion after the prior approved copy changes. The homepage copy and assertion remain unchanged. The new `--only` checker option allows focused verification of this task without weakening unrelated assertions.

This verifies local production output, not the deployed site or Google's indexing decision. After release, recheck public blog responses, sitemap URLs and social image accessibility. The public technical baseline remains a later task, after the review page. GA4/GSC access and the performance report remain deferred.
