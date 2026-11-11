# Website content implementation

Applied 2026-11-11 after the user approved the proposed content and confirmed client approval of the keyword report.

Scope: `proposed-page-content-changes.md` in this folder. Its numbered change items define the copy. Homepage, Services, Moffett, Flatbed, Industries, Service Areas, About, Our Work, Gallery, Blog and the November article received the specified changes. Power-only needed no copy changes.

Used the approved conservative coverage wording consistently. The Service Areas social copy and image now match. Only that entry in `src/data/social-images.json` changed; other social images were retained. The previous Service Areas image file was retained to avoid removing a previously deployed asset. The new raster carries source/provenance metadata. New paragraph links share a small forest-green, underlined inline-link style without changing paragraph typography.

The existing November 10 article date is retained for publication review. Blog noindex and sitemap exclusion remain. No account configuration, deployment, publication or commit was performed in this implementation pass. Unrelated workspace changes were preserved.

Validation:

- Production build passed after copy and social-image updates.
- All 12 public pages passed desktop and mobile checks, with one H1 per page, no horizontal overflow or clipped headings, loaded images and no page JavaScript errors. Newly added article links were present. Rendered screenshots were reviewed; the only refinement was styling the three new inline links to match the brand.
- Built internal page links and fragment targets resolved. Page titles were unique. The new social image existed in built output, and only the intended manifest entry changed.
- Existing blog build checks passed for metadata, canonical/schema image URLs, homepage article placement, demo removal and retained indexing boundaries.
- Mechanical design scan reported existing hero palette/type-ramp advisories and the gallery's intentionally empty lightbox image element, populated when the viewer opens. These were pre-existing and outside this copy scope.
- Final build and whitespace checks passed after the inline-link refinement. The affected link layouts received a focused desktop/mobile confirmation.

Local QA scripts, screenshots and logs are under the OS temporary directory, `ironfist-approved-copy-qa`, plus `ironfist-approved-copy-build.log`. They are verification artifacts, not website content. No forms or messages were submitted.
