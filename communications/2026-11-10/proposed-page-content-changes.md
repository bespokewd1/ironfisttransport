# Proposed website content changes

Prepared 2026-11-11 against the current local source. Copy is finalized for review, not client-approved or applied. No website files changed during preparation.

Implementation update, 2026-11-11: the user approved this copy set and reported client approval of the keyword report. The specified copy and conservative coverage wording have now been applied locally, including the matching Service Areas social card. Power-only content, article date, blog indexing settings and deployment remain unchanged. The review/pending statements below describe the proposal before this approval. New inline links use the existing forest-green palette and underlines. Validation results are recorded in `page-content-implementation.md` in this directory.

## Recommended workflow

Review the whole copy set together for consistent service names, customer priorities and coverage. Apply and check one page at a time. Page-by-page work does not require separate deployments; related pages can ship together after review.

Recommended application order: Moffett page and its article together, flatbed, power-only verification, services overview, homepage, Industries, Service Areas, About, Our Work, Gallery and blog-index verification. Resolve any approved coverage wording consistently across the affected pages before release. Do not publish a half-updated coverage claim.

The client should confirm the services and geography in the keyword CSV before implementation. This document supplies exact copy for that review. Keyword volume, competition and difficulty remain unavailable. The recommendations follow observed intent and service fit, not measured demand comparisons.

Every edit below is a specific replacement or insertion. Everything else on the page stays as currently authored for this content pass. SEO titles below are the page title field only; the shared layout adds the business-name suffix. They are not instructions to type the suffix twice. Preserve all existing URL paths.

## 1. Homepage

Files: `src/pages/index.astro`, `src/components/Home/HomeHero.astro`.

### H-1. Page title

Current: `MOFFETT & Flatbed Edmonton`

Replacement: `Moffett delivery & flatbed trucking in Edmonton`

Reason: replace abbreviated wording with the actual services and location. Keep service-specific positioning rather than replacing it with an unmeasured generic phrase.

### H-2. Meta description

Current: `Need Moffett forklift delivery in Edmonton? Iron Fist Transport offers flatbed trucking and jobsite material delivery. Call today for a quote.`

Replacement: `Edmonton-based MOFFETT delivery, flatbed transport and power-only trucking for construction and industrial loads. Call to discuss your route and load.`

### H-3. Hero heading, coverage-dependent

Current text: `Moffett Delivery & Flatbed Trucking in Edmonton & Across Alberta`

Recommended text using currently confirmed facts: `Moffett Delivery & Flatbed Trucking in Edmonton`

Keep the existing service-name line arrangement, with `in Edmonton` as the location line. This is proposed wording for review, not authorization to remove a client-confirmed service claim. If the client confirms broader coverage, record it and settle matching wording across Homepage, Industries and Service Areas before applying.

### H-4. Hero supporting paragraph

Current: `Reliable transportation and jobsite material delivery for contractors, construction companies, building suppliers, and businesses across Edmonton and Alberta.`

Replacement: `Edmonton-based material transport for contractors, building suppliers and industrial businesses. Discuss MOFFETT delivery, flatbed trucking or a tractor and driver for your trailer.`

Keep the three service summaries, existing links, equipment photos, owner-driver content, quote section and new article feature. No additional homepage article link is needed because the feature already supplies one.

## 2. Services overview

File: `src/pages/services/index.astro`.

### S-1. Introductory paragraph

Current: `Materials that need offloading. Cargo that needs a flatbed. A trailer that needs a tractor and driver. Choose a starting point, then talk through the move with us.`

Replacement: `Moving construction materials or industrial cargo? Start with the load, the unloading equipment available and whether you already have a trailer. Compare MOFFETT delivery, flatbed transportation and power-only trucking, then discuss the move with us.`

Keep the existing title `Transport services in Edmonton`, meta description, H1, service sections, comparison guidance and links. They already match this page's service-selection purpose.

## 3. Moffett delivery

File: `src/pages/services/moffett-delivery.astro`.

### M-1. Add a contextual article link

Insert a paragraph after the existing introductory note about suitability and availability:

> No forklift at the receiving site? Read our [Moffett delivery planning guide](/blog/moffett-delivery-without-site-forklift/) for unloading choices and an enquiry checklist.

Keep the current title, meta description, H1, introduction, load/access sections, photos and FAQs. The existing text already connects Edmonton, MOFFETT and truck-mounted forklift delivery. No keyword-density target or added synonym paragraph is needed.

The article exists locally. Confirm the destination is included and working in the release before shipping this link.

## 4. Flatbed transportation

File: `src/pages/services/flatbed-transportation.astro`.

### F-1. Add a contextual article link

In `Name the equipment at each end`, after the existing paragraph linking to the Moffett service page, add:

> Still arranging the offload? Our [guide to delivery without a site forklift](/blog/moffett-delivery-without-site-forklift/) explains what to check with the supplier and receiver.

Keep the current title, description, H1, flatbed/flatdeck explanation, handling guidance and FAQs. No forced insertion of `flatbed trucking` is required. The current wording already answers the commercial topic.

## 5. Power-only trucking

File: `src/pages/services/power-only-trucking.astro`.

No copy changes recommended. The title, description and opening already explain power-only trucking in Edmonton and a tractor and driver for the customer's trailer. Retain the existing trailer details and related flatbed link. Verify the page when checking shared components, but do not rewrite it merely because it appears in the keyword CSV.

## 6. Industries

File: `src/pages/industries.astro`.

### I-1. Page title

Current: `Industries We Serve`

Replacement: `Material transport for Edmonton businesses`

### I-2. Hero supporting paragraph

Current: `Reliable transportation solutions for contractors, suppliers, and businesses across Alberta.`

Replacement: `Edmonton-based material transport for contractors, building material suppliers and industrial businesses. Find the service that fits your cargo and unloading arrangements.`

Keep the visible `Industries We Serve` H1, existing meta description, customer sections, factual image descriptions and relevant service links. The new title and introduction supply the material-transport context without turning the customer sections into duplicate service pages.

## 7. Service Areas

File: `src/pages/service-areas.astro`. Shared social wording is addressed separately below.

The recommended wording below is a factual-boundary proposal pending client review. It presents the Edmonton base and invites route enquiries without promising every Alberta destination. Named communities can be reinstated only with the client's confirmation and agreed wording.

### A-1. Page title

Current: `Alberta Service Areas`

Replacement: `Edmonton-based transport and service area enquiries`

### A-2. Meta description

Current: `Edmonton-based MOFFETT delivery, flatbed and power-only trucking for nearby communities and Alberta destinations. Routes and loads are reviewed before booking.`

Replacement: `Discuss your route with Edmonton-based Iron Fist Transport. Share pickup and delivery addresses, your load and requested date to review availability.`

### A-3. Hero heading

Current: `Edmonton-Based. Delivering Across Alberta.`

Replacement: `Edmonton-based. Tell us your route.`

### A-4. Hero supporting paragraph

Current: `Transportation services for contractors, suppliers, and businesses throughout Alberta.`

Replacement: `Planning a material delivery or trailer move? Send your pickup and delivery locations so we can discuss the route and equipment.`

### A-5. Replace the first two paragraphs under `Edmonton is our base`

Current paragraphs begin `Iron Fist Transport is an Edmonton-based transportation company...` and `Service areas include Nisku...`.

Replacement paragraphs:

> Iron Fist Transport is based in Edmonton and provides MOFFETT delivery, flatbed transportation and power-only trucking for suitable construction and industrial moves.

> For an Edmonton pickup or delivery, or a route involving another Alberta destination, share both addresses and your requested date. We review the specific route and load before confirming availability.

Keep the following paragraph beginning `Every move is assessed individually` and the service choices and enquiry checklist.

### A-6. Final route paragraph

Current: `For deliveries across Alberta, we confirm the route, date and equipment suitability for your specific move.`

Replacement: `We confirm route availability, the date and equipment suitability for your specific move.`

## 8. About

File: `src/pages/about.astro`.

### B-1. Page title

Current: `About our Edmonton business`

Replacement: `About our Edmonton transport business`

The shared title suffix already supplies Iron Fist Transport's name. Keep the current description, owner-operated H1, business details and service links. No additional branded-keyword paragraph is needed.

## 9. Our Work

File: `src/pages/our-work.astro`.

### W-1. Page title

Current: `Our equipment photos`

Replacement: `Truck, flatbed and MOFFETT equipment photos`

Keep the current description, visible heading, equipment explanations, literal captions and existing service links. These already support the reader's equipment questions.

## 10. Gallery

File: `src/pages/gallery.astro`.

### G-1. Page title

Current: `Our Deliveries in Action`

Replacement: `Truck, flatbed and MOFFETT photo gallery`

### G-2. Introductory paragraph

Current: `A closer look at the materials we transport and the deliveries we handle.`

Replacement: `See Iron Fist Transport's truck, flatbed loads and MOFFETT equipment. Explore our transport services to discuss a load of your own.`

Link `transport services` to `/services/`. Keep the visible H1, current description, photo filters, captions, alt text and quote action. No keyword or city additions to image descriptions are proposed.

## 11. Blog index

File: `src/pages/blog/index.astro`.

### L-1. Page title

Current: `Delivery planning blog`

Replacement: `Delivery planning blog for Edmonton jobsites`

Keep `Before the truck arrives`, the current meta description, introduction, real article listing and contact section. The updated layout and heading structure already exist. No starter posts are currently present in the collection, so do not repeat their removal.

## 12. November Moffett article

File: `src/content/blog/moffett-delivery-without-site-forklift.md`.

Keep the current title, description, headings, equipment definition, enquiry template, photo, literal alt text and existing service links. The article already follows the research brief. The changes below remove repeated caveats while retaining the actual load/site and availability qualifications.

### P-1. Second opening paragraph

Current paragraph begins `A MOFFETT is a truck-mounted forklift that travels with the delivery vehicle` and ends `rather than confirmation that a particular delivery will work`.

Replacement:

> A MOFFETT is a truck-mounted forklift that travels with the delivery vehicle. For suitable loads and site conditions, it brings transport and offloading together. Start by checking the materials, the loading arrangements at pickup and the path from the truck to the intended drop point.

### P-2. Paragraph after the enquiry template

Current paragraph begins `Sending these details starts the suitability and availability discussion` and ends `what remains to be settled`.

Replacement:

> These details help the carrier review suitability and availability. Sending an enquiry does not book a delivery. If a lift weight or access measurement still needs checking, say so.

### P-3. Final paragraph under `Report changes before the delivery`

Current paragraph begins `Tell the carrier when the arrangements change` and ends `before the truck arrives`.

Replacement:

> Tell the carrier when the arrangements change. Report snow, ice, thawed ground or other conditions that may affect access, and share updated photos where useful. Revisit the plan before the truck arrives.

### P-4. Final article paragraph

Current paragraph begins `Iron Fist is based in Edmonton` and ends `a useful conversation about the delivery`.

Replacement:

> Iron Fist is based in Edmonton. Route availability, the date and equipment suitability are confirmed individually. Share what you know and identify any details you are still waiting for from the supplier or receiver.

The frontmatter currently contains a November 10 date. Check the intended publication date before release; do not change it automatically just because this review happened on November 11. No invented project story, equipment limits or winter policy is proposed.

## Shared social wording for the coverage decision

File: `src/data/social.ts`, `service-areas` entry only. Apply together with the approved Service Areas copy.

| Field | Current | Recommended replacement |
| --- | --- | --- |
| label | Alberta service areas | Service area enquiries |
| headline | Edmonton-based. Alberta deliveries. | Edmonton-based. Tell us your route. |
| supporting | Share your route and load for review before booking. | Keep current text. |
| socialDescription | Edmonton-based trucking for nearby communities and Alberta destinations. Contact Iron Fist Transport to review your route. | Discuss pickup and delivery locations with Edmonton-based Iron Fist Transport. Route availability and equipment suitability are reviewed for each move. |

Update the social image's alt text to describe the approved new card wording while preserving the existing verified contact and photo description. It must match the actual image. If the existing image contains the old coverage headline, regenerate that affected card from its approved wording in the implementation pass. Do not rewrite all social cards solely to match every SEO title.

## Publication work tracked separately

This copy pass does not include analytics setup, publishing, deployment or changing blog indexing settings. The existing blog noindex and sitemap exclusion require an explicit publication-readiness release. Confirm content, links, metadata, actual dates and client feedback before that release.

The admin page needs no content changes and retains its existing noindex. The development template is not an SEO content target. No new contact, city, industry or spelling-variant routes are proposed.

## Review checks before applying

- Confirm the client's keyword/service priorities. Final wording does not imply that client feedback has already arrived.
- Settle the coverage wording used in H-3, H-4, I-2 and A-1 through A-6, including the matching social card. The document gives one conservative version rather than several competing copy options.
- Keep navigation, forms, photos, layout and service facts intact while applying each page's specified changes.
- Check longer titles/headings and new links in the affected desktop and mobile layouts during implementation. This document review is not a rendered layout test.
- After page-by-page checks, review the combined site before a coordinated release. Do not interpret the application order as an SEO experiment or a ranking promise.

Research references: `.scratch/monthly-seo-baseline/deliverable-2/keyword-report.md` and `page-keyword-map.md` in the same folder. The client CSV remains the original keyword recommendation export; this document does not silently alter its contents or its historical article-status field.
