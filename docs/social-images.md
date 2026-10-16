# Social image workflow

The seven Open Graph cards are authored in one local-only Astro studio. Each uses the existing brand and its page's real equipment photo, plus a headline and a call prompt. The on-page heroes are separate and unchanged.

## Preview and export

Install project dependencies with `npm ci`. On a new workstation, install the matching browser with `npx playwright install chromium`.

Start the studio server bound to loopback:

```text
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:4321/__og-studio/`.

In a second terminal run:

```text
npm run og:export
```

For a different local port, use `npm run dev -- --host 127.0.0.1 --port PORT` and `npm run og:export -- --url http://127.0.0.1:PORT`. If Astro reports an existing dev daemon, stop or reuse the intended server before starting a dedicated port; do not stop unrelated development sessions.

The export command captures each 1200 x 630 card after fonts and source images load. It saves PNG masters under `.scratch/og-cards/`, encodes JPEG once at quality 85 with MozJPEG and 4:4:4 chroma, and checks exact output dimensions. It also captures desktop/mobile studio previews and checks preview overflow. These settings are practical authoring choices, not Open Graph limits. Review the images before committing. Automated geometry and reduced-size OCR passed during implementation, but image-capable review was unavailable. Human visual approval of photo crops and composition is still required before deployment.

Production JPEGs go to `public/assets/og/`. Their filenames include a content hash. The exporter atomically replaces `src/data/social-images.json` only after all seven captures and preview checks pass, and removes only superseded images listed in the old manifest. Do not manually rename the JPEGs or point metadata at PNG masters.

Commit the new JPEGs and updated manifest together. Normal production builds use these committed files; they do not need a browser or screenshot service.

## Content and assets

- `src/data/client.ts` is the source for owner name and contact data.
- `src/data/social.ts` owns card copy, route mapping, social descriptions and image alt text.
- `tooling/og-studio/Studio.astro` selects original photographs by card identifier.
- `tooling/og-studio/Card.astro` is the shared card template.
- `src/data/social-images.json` is generated output metadata. Do not edit it by hand after initial export.

Regenerate after changing card copy, owner/contact data, logo, photos, crops, fonts or template styles. A normal build does not regenerate the images. Verify meaningful text at reduced preview size, not only at full resolution.

The screenshot JPEGs include an embedded origin comment. They are HTML/CSS browser renders using existing real photography and logo, not AI-generated equipment photographs. Original source photos are not modified.

## Production exclusion

`tooling/og-studio/integration.mjs` registers `/__og-studio/` only when Astro's command is `dev`. Studio source is outside `src/pages`; the normal build and production preview do not register it. Local HTML includes `noindex, nofollow, noarchive` as an extra precaution. Noindex is not privacy or access control; keep the dev server on 127.0.0.1 and do not expose a tunnel.

Only final JPEG assets belong in production. No studio navigation or sitemap entry is added.

## Verification

After exporting:

```text
npm run build
npm run og:check
```

The check reads built HTML and exported image bytes. It verifies seven route mappings, concise title/social copy, matching OG/X tags and alts, image dimensions/type/provenance, no OG hero preloads, charset placement and studio exclusion. Character targets are this project's copy-editing checks, not universal search-ranking rules.

After deploying, use the final page URLs in real platform preview tools and refresh their caches. This workflow does not guarantee a third-party checker's text-detection result.

Hostname/domain changes are deliberately outside this work.

Dependency installation reported pre-existing high/critical advisories in the application dependency tree. The new direct Sharp encoder is pinned to patched 0.35.5. No broad dependency upgrade or audit fix was applied; review those advisories separately.
