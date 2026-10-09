# October 9 update status

Implemented locally. Production deployment and Facebook's live preview are not yet verified.

## 1. Social sharing image

- [x] Use the actual black truck in `src/assets/images/gallery/trucks/tractor.webp` as the homepage sharing image and the site fallback.
- [x] Verify the homepage emits an absolute image URL, 1200 × 630 dimensions and a locally accessible JPEG.
- [x] Inspect the sharing crop and confirm the branded truck is visible.
- [ ] After deployment, refresh the URL in Facebook Sharing Debugger and check an actual Facebook share.

## 2. Homepage, readability and icons

- [x] Keep the mobile/tablet contact bar hidden during the homepage hero; reveal it after the hero passes the sticky header, and hide it when scrolling back.
- [x] Preserve desktop behavior. By the user's follow-up request, service pages now use the same mobile/tablet reveal as the homepage.
- [x] Respect reduced motion and make hidden contact controls inert.
- [x] Improve the hero's text contrast and show clear quote/call buttons side by side.
- [x] Enlarge homepage and service-page eyebrows, including "The MOFFETT difference."
- [x] Add consistent service icons to the strip below the hero without replacing service photographs.
- [x] Use equipment-correct icons, as approved: MOFFETT forklift, flatbed trailer, power-only tractor without a trailer.
- [x] Do not copy the reference's unverified Google rating.

## 3. Social links

- [x] Footer links read "Follow us on Facebook" and "Find us on Google," with each brand icon after its text.
- [x] Update the existing About-section Google icon too.
- [x] Keep the existing business-profile destinations, horizontal text/icon alignment and safe new-tab behavior.
- [x] Confirm the Facebook destination identifies Iron Fist Transport Ltd.; the Google share link redirects to the same business name and its business-specific knowledge-graph identifier.
- [x] Check narrow mobile, mobile, tablet and desktop layouts.

## 4. Quote/contact section

- [x] Clearly offer "Call us or request a quote," with a prominent clickable phone number.
- [x] Keep the form visible beside the call option on desktop, and immediately after it on mobile.
- [x] Increase form readability and simplify the explanation of the email-draft process.
- [x] Preserve contact validation, email drafts, copy/open fallbacks, service preselection and service-specific delivery guidance.
- [x] Keep direct phone/email instructions available without JavaScript.
- [x] State that requests are not sent automatically and requested dates are not confirmed bookings.

## Local verification

- Production build passes.
- Browser checks pass at 1440px, 900px, 390px and 320px, with no horizontal overflow.
- Normal and reduced-motion contact-bar behavior, return scrolling, quote-anchor navigation and client-side page transitions pass.
- Invalid-contact validation, prepared-email contents, clipboard success/fallback and service-page defaults pass.
- Screenshots and the browser-check report are in `.impeccable/review/`.
- Independent behavior review found no material issues. Independent visual review returned `ship` for the scoped update.
- Approved design changes are merged into DESIGN.md and the matching sidecar fields. Unrelated preexisting documentation drift remains untouched.

## Contact-bar follow-up

The user reported the bar covering the hero in the local dev view. This was reproduced: the dev server was serving old footer CSS despite the new hidden HTML state. The server was restarted to load the current hide/reveal styles. Homepage gating now uses an explicit component prop, so `/index.html` also receives the correct behavior.

The follow-up checks verify actual rendered visibility, opacity, translation and keyboard focusability, not just HTML attributes. Both development and built pages pass at 375 × 667, 900 × 1000 and 1440 × 900, including homepage aliases, return scrolling and unchanged service-page behavior. The fresh independent review returned `ship` for this correction. Evidence is in `.impeccable/review/contact-bar-fix/`.

## Service-page extension

The user then requested the same reveal on the services overview, MOFFETT delivery, flatbed transportation and power-only trucking pages. All four now keep the mobile/tablet bar hidden until the opening introduction passes the sticky header, reveal it afterward and hide it on return. On detail pages, the following photograph is outside that introduction. Desktop behavior, page content and form defaults are unchanged.

Development and production checks passed across all four service pages and the homepage at 375px, 900px and 1440px. Checks include actual rendered visibility, the reveal threshold, keyboard focus, reversal, navigation, reduced motion and no-JavaScript fallbacks. Documentation reflects the new shared behavior; the independent review returned `ship`. Evidence is in `.impeccable/review/services-contact-bar/`.
