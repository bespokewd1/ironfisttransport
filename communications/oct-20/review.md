# October 20 feedback review

Checked on October 20, 2026 against the source, production HTML, Google screenshot, both Trello screenshots, and the supplied OpenGraph.xyz screenshot.

## Changes made locally in this session

The user approved the requested SEO title and description after reviewing the comparison below.

- `src/components/Home/HomeHero.astro`: updated the homepage H1 to "Moffett Delivery & Flatbed Trucking in Edmonton & Across Alberta" and the supporting paragraph to the client's exact wording. Added spaces between the heading's line spans so its text remains properly separated outside the visual layout. No CSS or motion settings changed.
- `src/pages/index.astro`: set the requested homepage title and meta description. The complete rendered title is "Moffett Delivery & Flatbed Trucking Edmonton | Iron Fist Transport".
- `src/layouts/BaseLayout.astro` and `src/components/Meta/Meta.astro`: added an optional page-specific `titleSuffix`, defaulting to the existing business name. Only the homepage uses "Iron Fist Transport" without "Ltd.". Other page titles and the legal business name in structured data remain unchanged. Open Graph and Twitter titles inherit the new homepage title. The separate social description and sharing image remain unchanged.
- `src/components/Meta/Meta.astro`: added a direct `rel="icon"` link to the existing branded 512 x 512 PNG, `/assets/brand/icon-512.png`. The 32 x 32 and 16 x 16 browser icons remain. No replacement logo or new image was made.
- `scripts/check-og.mjs`: replaced the arbitrary 60-character title ceiling with a nonempty-title check. Google does not impose a hard 60-character rule, and the approved title has 66 characters. Existing title-consistency, description, image and production-output checks remain.
- `communications/oct-20/review.md`: recorded the investigation, Netlify checks, approved changes and remaining account steps. Supporting research, browser captures and temporary validation scripts are in `.scratch/oct20-*`.

The form code, business details and production-domain constants are unchanged. The form audit found no source defect that justifies rewriting it. Existing unrelated user changes, including DESIGN.md, were left untouched.

These changes are prepared locally and have not been deployed. No Google Ads, Netlify dashboard or Search Console settings were changed. There is no connected Netlify or Search Console account in this session. Keeping `www.ironfisttransport.ca` as the intended primary domain follows the user's approval of the preceding recommendation; changing Netlify's actual primary setting remains an account action.

## 1. Contact form

### Source result

The Netlify Forms setup in `src/components/Home/HomeQuote.astro` is correct for a static Astro build:

- The rendered HTML contains `name="transport-quote"`, `method="POST"`, `data-netlify="true"` and a matching hidden `form-name`.
- The honeypot name matches its input. Required fields have names.
- JavaScript sends a same-origin `POST /` with URL-encoded data, including `form-name` and the honeypot. It does not send unsupported JSON.
- Without JavaScript, the form can make a normal browser POST. An omitted action is valid.
- `netlify.toml` runs `npm run build` and publishes `dist`.

The public production response is served by Netlify, but it still contains `data-netlify` and `netlify-honeypot`. Netlify's current docs say deploy processing removes those attributes. This strongly suggests that the HTML in the published deploy was not form-processed. It does not prove that detection is currently disabled; it may have been enabled without a later redeploy, or the wrong deploy may be published. The hidden `form-name` alone is not proof of detection because our source already supplies it.

### What to check in Netlify

1. Open the project serving `ironfisttransport.ca`. Under Deploys, confirm the intended commit is the currently Published production deploy. Check its deploy log and effective command/publish folder, `npm run build` and `dist`.
2. Open Forms. If shown, choose Enable form detection. If it was enabled previously, check Forms > Form detection and make sure it is enabled.
3. Redeploy after enabling detection. The setting does not repair an existing deploy retroactively.
4. After publication, confirm `transport-quote` appears under Forms > Active forms. View the deployed page source and confirm Netlify removed `data-netlify` and `netlify-honeypot`. Keep those attributes in the source code.
5. Open `transport-quote` and check both Verified submissions and Spam submissions for previous attempts. Mark legitimate spam as verified when appropriate. A filled honeypot is rejected quietly and may not appear in either list.
6. Open Forms > Submission notifications. Confirm an email notification covers `transport-quote` and goes to the client-approved mailbox. The email link on the website does not configure notification recipients. Only verified submissions trigger notifications. Check mailbox junk/filter rules for `formresponses@netlify.com`.
7. Check Forms > Usage if Netlify displays a usage, plan or account warning. Do not assume a quota issue without evidence.
8. Once the client is ready, send one identifiable live sample through the deployed website. Confirm it in Netlify and then in the approved mailbox. A browser success message or HTTP 200 alone does not prove inbox delivery.

No production sample was sent during this review, as the feedback leaves that test until later. Local browser tests passed for empty/invalid inputs, the encoded POST payload, a mocked failed response with retained data and retry, and a mocked successful response. Mock tests cannot verify Netlify storage, spam classification or email delivery.

The combined phone-or-email field is valid. Its name `contact` means Netlify cannot automatically use it as an email Reply-To field. That is a convenience limitation, not a submission blocker.

## 2. Google result, ads and favicon

### The screenshot contains two separate systems

The top card is marked Sponsored, with Edit ad and View more in Google Ads. The old "Create Next ..." wording appears there. It is a Google Ads preview, not the organic search result. The screenshot does not establish whether someone entered that headline or Google generated an asset from the old site.

The organic result underneath already says:

> Iron Fist Transport Ltd.: MOFFETT & Flatbed in Edmonton

The yellow arrow points to the old black favicon beside that organic result. The globe beside the ad is a separate ad-branding issue.

At the initial live check, the website served this title:

> MOFFETT & Flatbed in Edmonton | Iron Fist Transport Ltd.

There is no "Create Next App" in the current homepage HTML or current source metadata. The client is seeing old wording in the ad, not evidence that the current homepage still uses the old default title.

### Is the recent domain change responsible?

It can explain delayed organic updates, but it is not a complete diagnosis. Google must recrawl and process changed pages and favicons. Google says this can take several days to several weeks. A recent change is compatible with that delay, but neither the screenshot nor the live HTML proves when Google last crawled the site. There is no guaranteed refresh date, and reindexing is not instant.

OpenGraph.xyz checks the page's current social-sharing metadata. Its successful preview is evidence that the sharing tags and image are available, not proof that Google Search has updated its index or Google Ads has updated its assets. Our `og:description` deliberately uses a social-specific value; it need not equal the standard meta description.

Google may rewrite organic title links and choose snippet text from page content according to the query, even after recrawling. The organic screenshot already demonstrates a title order different from our HTML. A different snippet is not automatically a failed metadata update.

### Separate Google Ads checks

The Ads account owner should use Edit ad or open the affected campaign. Review the headlines, descriptions, final URL, manual assets and Google-generated assets. Remove old "Create Next" wording at its source. The screenshot does not identify the campaign type, so do not assume the same edit path for every campaign.

For responsive Search ads, current Google instructions use Campaigns > Ads > edit the affected ad. Business name/logo assets live under Campaigns > Assets. Check account and campaign associations and any dynamically created assets. Search ad logos are not controlled only by the website favicon. Business verification and asset approval may apply.

Google currently recommends a 1200 x 1200 ad logo, with a 128 x 128 minimum. The client's proposed 512 x 512 PNG is suitable as a website favicon; it is not Google's recommended Ads logo size. Logo display is not guaranteed by uploading it.

### Website favicon

The current live 16 x 16, 32 x 32 and 512 x 512 assets contain the supplied Iron Fist fist logo and return HTTP 200. The change directly advertises the existing 512 x 512 image as a favicon, rather than relying on its web manifest entry. Google can still take time to replace the icon in organic results.

Google's current favicon guidance requires a square image of at least 8 x 8 and recommends a size larger than 48 x 48. A 512 x 512 PNG is suitable. Both the homepage and image must remain crawlable. Google does not guarantee that a favicon will appear. The root `/favicon.ico` currently returns 404, but a root ICO is not required when a valid icon is declared with `rel="icon"`.

## 3. Approved SEO title and description

### Title

Previous, 56 characters:

> MOFFETT & Flatbed in Edmonton | Iron Fist Transport Ltd.

Approved and implemented locally, 66 characters:

> Moffett Delivery & Flatbed Trucking Edmonton | Iron Fist Transport

The previous title was already readable and locally relevant, not a default title. The approved version identifies the services more clearly by adding Delivery and Trucking. It may truncate depending on rendered width and device. Google has no fixed character-limit rule for titles, and the change does not guarantee a ranking improvement.

The optional homepage title suffix prevents the shared metadata component from appending the legal name a second time. The legal business name remains "Iron Fist Transport Ltd." elsewhere, and other page titles retain their previous suffix.

### Meta description

Previous, 157 characters:

> Edmonton-based MOFFETT delivery, flatbed transport and power-only trucking for construction and industrial loads. Call the owner-driver to discuss your move.

Approved and implemented locally, 142 characters:

> Need Moffett forklift delivery in Edmonton? Iron Fist Transport offers flatbed trucking and jobsite material delivery. Call today for a quote.

The previous description represented the full business, including power-only trucking and the owner-driver distinction. The approved version focuses on this brief's Moffett, flatbed and jobsite leads. That is a change of emphasis, not a repair for malformed metadata. Google may show a different snippet.

The homepage Open Graph and Twitter titles now match the approved title automatically. Their intentionally separate description and existing 1200 x 630 sharing image remain unchanged. The H1 and supporting paragraph also match the client's requested wording.

## 4. Hostname mismatch to resolve before requesting indexing

Public requests currently behave as follows:

- `https://www.ironfisttransport.ca/` redirects with HTTP 301 to `https://ironfisttransport.ca/`.
- The destination returns HTTP 200.
- The HTML canonical, Open Graph URLs, robots.txt sitemap URL and sitemap entries all specify `https://www.ironfisttransport.ca/`.

That sends conflicting preferred-host signals. Choose one hostname and align redirects, canonical URLs, Open Graph URLs and sitemap URLs. Neither www nor non-www has an inherent SEO advantage.

The approved direction is to keep www as primary, matching the current site configuration and the URL in the brief. No production-domain constant needs changing. The Netlify setting has not been changed because this session has no account connection.

In Netlify, open the project's Domain management > Production domains. Beside `www.ironfisttransport.ca`, choose Options > Set as primary domain. Keep the non-www domain assigned as the alternative domain. Netlify automatically redirects the alternative to the primary. Confirm DNS/TLS are healthy, then verify both the homepage and a service-page path resolve to their matching HTTPS www URLs. Publish the prepared code changes and check the final HTML before requesting indexing.

Do not add a forced non-www-to-www rule while Netlify still treats non-www as primary. It can conflict with Netlify's automatic redirect and create a loop. No `_redirects` rule was added.

If a genuinely different old domain was replaced, check permanent redirects from old URLs to matching new URLs, verify both properties in Search Console, and consider Google's Change of Address tool where applicable. The old domain was not supplied, so that migration cannot be verified here. Change of Address is not for a www/non-www change, an HTTPS-only change or a hosting-only change.

After deployment and hostname alignment, use Search Console URL Inspection for the final canonical homepage. Inspect the live URL, compare the user-declared and Google-selected canonical, check crawl/indexing status and Request indexing. Submit the canonical sitemap in Search Console. Owner/full-user access is needed for indexing requests. This review did not access Search Console or submit a request. Repeated requests do not speed crawling.

## Validation and boundaries

- `npm run build` passed after the approved metadata changes.
- `npm run og:check` passed across all seven transport pages. The exact homepage title and description match the approved copy, other transport-page titles are unchanged, and legal-name structured data remains intact.
- An independent read-only review of source and build found no regression in the seven public transport routes, blog/admin index exclusions or canonical URLs. The remaining preferred-host mismatch requires the Netlify primary-domain setting.
- `git diff --check` passed.
- Desktop 1440px and mobile 390px browser screenshots reviewed.
- Additional 320px, 768px and 1024px checks passed for one H1, no horizontal overflow and no headline/supporting-row overlap.
- No page JavaScript errors in the desktop/mobile checks.
- Local form validation and mocked 500/200 response checks passed. No live submission or inbox verification.
- Mechanical design scan returned only existing color/type advisories. No CSS values, timing constants, service capacities, contact data or domain constants changed.
- Existing uncommitted DESIGN.md and other user files were left untouched.
- The client's approved H1/supporting copy is treated as their confirmation of the intended Alberta wording, not a guarantee that every route or date is available. Existing booking/availability qualifications remain.

## Suggested reply to the client

> We checked the current website and the supplied screenshot. The organic result already shows the current Moffett and flatbed title. The old "Create Next" wording is in the sponsored ad, which needs a separate review in Google Ads. The website has the branded icon, but Google can take several days to several weeks to refresh organic icons and page information after recrawling. We have prepared the requested SEO title, meta description, homepage heading and supporting text, along with a larger favicon reference. Deployment, primary-domain alignment and the Search Console recrawl request still need to be completed. For the contact form, the website code is correctly set up for Netlify Forms. We still need to verify Netlify form detection and notification settings, then confirm a sample submission in Netlify and the receiving mailbox before calling live delivery resolved.

## Official sources

- Netlify primary and alternative domains: https://docs.netlify.com/manage/domains/manage-domains/manage-multiple-domains
- Netlify primary-domain UI: https://docs.netlify.com/manage/domains/configure-domains/add-a-domain-alias

- Netlify setup and deploy-time detection: https://docs.netlify.com/manage/forms/setup/
- Netlify submissions/spam views: https://docs.netlify.com/manage/forms/submissions/
- Netlify notifications: https://docs.netlify.com/manage/forms/notifications/
- Netlify troubleshooting: https://docs.netlify.com/manage/forms/troubleshooting-tips/
- Google favicon rules: https://developers.google.com/search/docs/appearance/favicon-in-search
- Google title links: https://developers.google.com/search/docs/appearance/title-link
- Google snippets: https://developers.google.com/search/docs/appearance/snippet
- Google recrawl requests and timing: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google domain moves: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- Google Ads business information: https://support.google.com/google-ads/answer/12497613?hl=en
- Google Ads business information requirements: https://support.google.com/adspolicy/answer/12499303?hl=en
- Google responsive Search ad editing: https://support.google.com/google-ads/answer/7684791?hl=en
