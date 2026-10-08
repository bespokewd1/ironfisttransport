# Services content research and decisions

Research date: 2026-10-08. Market context: Edmonton, Alberta.

This is the task record required by `communications/content/quality-content.md`, not public-facing copy. It covers the services overview, MOFFETT delivery, flatbed transportation, and power-only trucking. "Flatdeck" is the natural regional variant used in the research, not a different service or URL. The implementation lead performed the live searches and full-page text fetches. This record uses the supplied research summaries and direct reads of the local records and screenshots. It does not claim a separate research run or a rendered competitor audit.

Approved routes are `/services/`, `/services/moffett-delivery/`, `/services/flatbed-transportation/`, and `/services/power-only-trucking/`. Every related-service link in the plan refers to these routes. Use flatbed wording consistently with the homepage and explain flatdeck as a synonym.

## Sources and claim boundaries

| Source | What it supports | What it does not establish |
| --- | --- | --- |
| `communications/oct-08/trello-info.md` | Iron Fist Transport Ltd.; construction and industrial logistics; Edmonton business address; Paviter Sandhu; owner-operated deliveries; phone and email; MOFFETT service intent. | Equipment specifications, guaranteed delivery windows, a coverage radius, qualifications, published prices, or current availability. |
| `src/data/client.ts` | Current site constants agree with the supplied business name, address, owner, phone, email, and profile links. | Independent verification of operating capabilities. |
| Implementation handoff | The requested overview and three service pages are the intended scope. | New operational promises. |
| `communications/oct-08/prototypes/current-site/current-site-homepage.png` | Existing presentation of MOFFETT, flatdeck, and power-only services; visible truck and forklift photos; existing wording to assess. | Confirmation of the 48-foot trailer specification, Alberta-wide or same-day service, crab-walk capability, trailer compatibility, response times, or customer counts. |
| `communications/oct-08/prototypes/lovable-mock/` service screenshots | The requested service distinctions and useful topics such as load details, access, and enquiry information. | Confirmation of added cities, equipment limits, loading policies, booking procedures, inspections, driver qualifications, or a no-walk-in-office rule. Trello explicitly says the mock added details while client records were still awaited. |
| Competitor pages below | Examples of customer questions, service explanations, and content gaps. | Evidence that Iron Fist offers another company's equipment, prices, hours, delivery promises, or coverage. |

Use the supplied contact details, Edmonton base, owner-operated background, and requested service categories. Do not turn an Edmonton address into a claim that every Alberta destination is covered. Ask customers to send their route for discussion instead.

The screenshot review covered the current homepage and the mock's `service-main.png`, `moffett-delivery.png`, `flatdeck-transportation.png`, and `power-only-trucking.png`. Keep the mock's useful subject matter, not its unconfirmed promises or visible placeholders.

## Live search method and limitations

Search provider: WebSearch, US-only. Edmonton was included in the query text; this was not a search geolocated to Edmonton. Google organic positions were not confirmed. The provider returned unranked synthesized tables with usable source URLs, even when its wrapper said "No links found". The correct description is **three suitable pages from the returned results** for each service, not "Google top three".

| Intent | Main query actually searched | Additional live query |
| --- | --- | --- |
| MOFFETT delivery | `Moffett delivery Edmonton truck mounted forklift delivery service` | None recorded. |
| Flatdeck transportation | `flatbed transport Edmonton flat deck trucking service` | None recorded. |
| Power-only trucking | `power only trucking Edmonton trailer transport service` | `power only trucking Alberta Edmonton tractor driver customer trailer service -site:ironfisttransport.ca -site:jpsidhutrucklinesltd.com -site:tranhaul.com` |
| Services overview | `construction material transport Edmonton flatbed Moffett delivery services` | None recorded. |

All searches and the page reads below occurred on 2026-10-08. Result positions are unavailable for every selected URL. The lead chose readable providers relevant to Edmonton, preferred dedicated service pages when available, and used homepages when those contained the relevant offering. The three MOFFETT providers also fit the overview query, so the overview deliberately reuses that comparison rather than pretending there was another set of nine reads.

Selected pages received full-page WebFetch requests, not snippet-only reviews. A text fetch is not a rendered browser check. No competitor mobile layout, form submission, navigation interaction, traffic, conversions, backlinks, or reason for ranking was tested. Contact and navigation observations below describe the fetched text only. Reviews, hours, capacities, and service claims remain the providers' own claims.

### Selection and exclusions

- MOFFETT: Fully Loaded and Bitzer had readable relevant homepage content. ProZone supplied a readable dedicated page with more explicit customer information. Iron Fist's own result was not a competitor, and GNA did not yield a readable body.
- Flatdeck: YEG Transborder and Sure Shot had dedicated pages. NHL's readable homepage offered a relevant flatdeck distinction and an Edmonton address. No separate NHL flatdeck page was reviewed.
- Power-only: TranHaul's dedicated page was readable but brief. The additional query found Anttal's dedicated page and Oil City Express's locally relevant hired-cartage explanation. Oil City was selected despite being an overview because it explained the customer-owned trailer scenario.
- `https://gnamoffettservice.ca/` returned a title only. Do not compare its unread body.
- `https://www.jpsidhutrucklinesltd.com/our-services/power-only-trucking/` and its non-www variation failed with DNS errors. No body comparison is possible.
- `https://www.trailertransit.com/` had a readable broad Canadian/US homepage with loaded and empty customer-trailer examples. It did not establish an Edmonton office in the reviewed material, so the locally relevant Oil City and Anttal pages were preferred.
- Ads, directories, marketplaces, forums, and non-service articles were outside the selection criteria. Other broad or irrelevant providers not opened are not described as reviewed.
- Iron Fist search snippets were excluded as independent operational evidence. Neither an indexed promise nor repetition of old copy verifies it.

### Primary sources read by the implementation lead

- [Hiab truck-mounted forklifts](https://www.hiab.com/en-us/products/truck-mounted-forklifts) supports the broad role of transporting a forklift with the truck for unloading at the destination. It does not verify Iron Fist's model, rated capacity, steering modes, terrain performance, reach, or minimum access dimensions. An attempted `/moffett` suffix returned 404 and supplies no evidence.
- [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) informed the decision to preserve factual business structured data. Use the real business name and address, do not invent reviews, and do not guarantee a search appearance. No new Service or FAQ markup is justified merely because these pages are being added.

## MOFFETT provider comparison

### Fully Loaded

URL: https://www.fullyloaded.ca/ . Relevant homepage, not a dedicated MOFFETT page.

- The service framing connects forklift delivery and flatdeck transport with tight-space placement and sideways movement of long cargo. This addresses a customer who needs unloading rather than transport alone.
- Useful answers include the stated Alberta, Edmonton, and Calgary scope and company-stated 7-to-5 hours. There are no usable equipment specifications, site-readiness instructions, or service-specific quote inputs in the reviewed body.
- Photos, safety information, and external links are present. They are evidence of the page's presentation, not proof of Iron Fist's work or operating standards. Text contact paths exist, but the form is generic; mobile usability was not inspected.
- Lesson: explain the unloading problem early, then ask about the actual load and receiving site. Do not copy the company's tight-space, steering, hours, or coverage claims.

### Bitzer Trucking

URL: https://www.bitzertrucking.co/ . Relevant homepage.

- The page connects construction cargo such as brick and lumber with MOFFETT and flatbed transport. Cargo examples help a customer recognize their own delivery need.
- It names service cities and claims 24/7 availability, but does not resolve load dimensions, site access, lead time, or what to send for a quote.
- Photos and a testimonial provide visible trust material. Their accuracy and representativeness were not independently established. The fetched text gives service and contact context; no mobile or form test was performed.
- Lesson: use specific enquiry examples instead of a vague logistics introduction. Avoid repeating cargo lists across pages or adopting the company's availability and city claims.

### ProZone

URL: https://prozoneltd.ca/moffett-truck-delivery/ . Dedicated service page.

- The service framing and detailed material, bag, and pallet information address a customer trying to determine whether a delivery fits the service.
- The body states pricing, limits, radius, packaging requirements, and point-to-point scope. These are useful categories of answers, but all figures and conditions belong to ProZone.
- The page has photos, multiple contact routes, and review links. It offers more task detail than the two homepages. It still lacks measured clearance and practical ground-condition guidance in the reviewed material; mobile behavior was not inspected.
- Lesson: make packaging, unloading location, and quote information concrete. Do not substitute unsupported all-weather or surface-performance marketing for a discussion of the customer's actual access conditions.

## Flatdeck provider comparison

### YEG Transborder Group

URL: https://yegtransbordergroup.com/flatbed/index.html . Dedicated service page.

- The page explains an open deck and loading from multiple directions. This helps a customer distinguish flatbed transport from enclosed freight.
- It states tarping and equipment dimensions or payloads, but the mapping of those figures to equipment is ambiguous. It does not explain who loads or unloads, or what information a customer should send for a quote.
- A truck photo, phone, email, and map are present. They provide contact and visual context, not independently verified capacity evidence. No rendered mobile check was performed.
- Lesson: explain the open-deck use case plainly. Make load details and handling arrangements enquiry topics; do not publish borrowed specifications or imply every load has the same weather protection.

### Sure Shot Hotshot

URL: https://sureshothotshot.com/our-services/flat-bed-service-edmonton/ . Dedicated service page.

- The service framing addresses flatbed cargo and urgent transport. The body lists trailer options, cargo, steps, and FAQs.
- Oversize handling, payloads up to 22,000 pounds depending on equipment, 24/7 availability, sub-hour mobilization, and more than 50,000 completed hauls appear as company claims. None can be transferred to Iron Fist. Unloading responsibility, site access, and quote inputs remain unclear.
- The page contains unrelated cross-dock, office, and cleaning copy plus placeholder links. Those issues make its subject and next action less clear in the fetched text. Mobile layout and actual link behavior were not tested.
- Lesson: keep the page about flatdeck planning and remove unrelated or placeholder content. Put a call option near time-sensitive enquiry guidance without promising emergency dispatch.

### NHL Transport

URL: https://www.nhltransport.com/ . Relevant homepage.

- The page distinguishes flatdeck freight from step-deck transport for taller loads. That distinction helps customers understand that deck selection depends on the cargo.
- Its wider national and US scope and self-reported statistics are not independently substantiated here. The reviewed body lacks dimensions, loading responsibility, and receiving-site access guidance.
- An Edmonton address and phone/email quote routes establish local contact context. No dedicated flatdeck page was read; the homepage cannot stand in for an equipment specification sheet or a mobile usability test.
- Lesson: acknowledge that unusual loads need a discussion of dimensions and route. Do not imply Iron Fist has a step deck, cross-border service, or the same operating history.

## Power-only provider comparison

### TranHaul

URL: https://tranhaul.com/hot-shot-power-only-loads/ . Dedicated but brief service page.

- The page combines hotshot and urgent power-only language. It does not clearly separate cargo transport from supplying a tractor for a customer's trailer.
- Trailer ownership responsibilities, compatibility, quote information, and time commitments are not explained in the reviewed body.
- Phone, email, and Edmonton addresses give contact routes, but there are no service-specific equipment details that resolve the customer's trailer questions. Mobile usability was not checked.
- Lesson: define power-only immediately and avoid conflating it with hotshot. Ask for trailer details instead of implying universal compatibility.

### Anttal Transportation

URL: https://anttaltransportation.com/power-only/ . Dedicated service page.

- The short description offers a tractor for short- and long-haul work, but provides little detail about the customer's trailer or the movement itself.
- The body does not resolve compatibility, site access, lead time, or trailer readiness. A general 24-hour reply statement is not a dispatch promise.
- An Edmonton address, call/email routes, map, and generic form are present. These establish contact options, not evidence that any trailer will be accepted. Mobile and form behavior were not tested.
- Lesson: answer who supplies the trailer, then provide a useful enquiry checklist. Do not publish a reply-time or availability guarantee taken from another business.

### Oil City Express

URL: https://www.oilcityexpress.com/services . Services overview with a specific hired-cartage explanation.

- Hired cartage explains the relevant situation: a customer has a trailer but needs a tractor and driver during a capacity shortage around Edmonton.
- It qualifies the offer by availability. It does not provide trailer specifications, readiness guidance, loading responsibilities, or service-specific quote inputs.
- A dispatch email and call prompt are present, but the extracted text did not expose a phone number. The text review cannot establish the rendered contact experience.
- Lesson: the tractor-and-driver distinction is more useful than generic trucking language. Bring trailer details and collection arrangements into the enquiry without inventing Iron Fist's acceptance policy.

## Services overview comparison

The overview uses Fully Loaded, Bitzer, and ProZone as three suitable pages from the returned results for the overview query. Their observations above apply here too. This reuse is deliberate and is not a claim that their pages explain every requested service.

Fully Loaded shows why unloading and placement can matter as much as transport. Bitzer makes construction cargo recognizable. ProZone gives customers concrete scope and pricing categories. Together they support an overview that starts with the customer's load and unloading situation, then directs them to the right detailed page. They do not supply evidence for Iron Fist's power-only fleet or flatdeck specifications; the separate comparisons and client records determine those distinctions.

## Customer tasks and page plans

The priorities below are editorial estimates. No enquiry log, analytics, keyword volume, or demand measurements were supplied. Query variations in this section are planning terms, not additional searches claimed as completed. Each situation was checked against its own service definition rather than copied from another page.

All gap tables describe the repository baseline before this task: the four requested service routes were absent, and the homepage or screenshots were not a substitute for dedicated answers. They are not an assertion about the concurrent implementation's final state.

### Services overview

The customer is a construction supplier, contractor, or industrial buyer arranging a load from or to Edmonton. They may not know whether they need an open-deck trailer, delivery with a forklift, or only a tractor and driver. They need to choose the right enquiry, get the load moved, and know what to send. Timing may be important, but urgency is not assumed for every visitor.

Main query: `construction material transport Edmonton flatbed Moffett delivery services`. Useful planning variations: `construction material delivery Edmonton`, `transport building materials Edmonton no forklift`, `tractor and driver for my trailer Edmonton`.

Questions in estimated decision order:
1. Which service matches my load and the equipment I already have?
2. Is unloading equipment needed at the receiving site?
3. Can I discuss my pickup, destination, and requested date?
4. What load information should I send, and how do I contact the company?

| Customer need | Gap in the current page | Proposed answer or section | Evidence |
| --- | --- | --- | --- |
| Choose a service | Overview route absent; no dedicated decision page. | Short introduction and distinct MOFFETT, flatdeck, and power-only choices based on unloading need and trailer ownership. | Handoff; current/mock service categories; Fully Loaded and Oil City service explanations. |
| Understand the practical difference | Overview route absent; old wording mixes equipment and broad promises. | Explain forklift-assisted delivery, open-deck transport, and tractor-and-driver enquiries without specifications. | Hiab broad role; YEG open-deck explanation; Oil City tractor/customer-trailer distinction. |
| Make a useful enquiry | Overview route absent; no overview-specific checklist. | Ask for pickup, destination, desired date, cargo or trailer details, and unloading needs; show verified call/email contacts. | Trello/client contact data; repeated quote-input gaps across the reviewed pages. |

Keep this page short. Route unloading and access questions to MOFFETT, cargo fit and handling questions to flatdeck, and customer-trailer questions to power-only. Do not reproduce each service's FAQ or create city lists here.

### MOFFETT delivery

The customer has palletized or packaged construction material to deliver to an Edmonton-area jobsite and no suitable forklift waiting there. The desired result is transport plus a discussion of unloading at the receiving site. A construction schedule may make the date important; the page should offer a call for an urgent enquiry, not promise same-day delivery.

Main query: `Moffett delivery Edmonton truck mounted forklift delivery service`. Useful planning variations: `truck mounted forklift delivery Edmonton`, `building material delivery no forklift Edmonton`, `pallet delivery to Edmonton jobsite`.

Questions in estimated decision order:
1. Does this service address delivery when the site lacks unloading equipment?
2. What packaging, load dimensions, and weight should I describe?
3. What access, ground, and desired unloading-location information matters to the enquiry?
4. What pickup, destination, and timing information should I send?
5. How do I discuss price and arrange the next step?

| Customer need | Gap in the current page | Proposed answer or section | Evidence |
| --- | --- | --- | --- |
| Recognize the unloading solution | MOFFETT route absent; screenshot promises go beyond confirmed facts. | Start with the truck-mounted forklift definition, the Edmonton base, the unloading problem, and a call/quote action. | Trello service intent; Hiab broad transport/unloading role; Fully Loaded framing. |
| Describe a suitable load | MOFFETT route absent; no dedicated packaging checklist. | Request cargo description, packaging, weight, dimensions, and photos where useful. Treat material examples as enquiry examples, not guaranteed acceptance. | ProZone's specificity; Bitzer cargo examples; no Iron Fist capacity sheet supplied. |
| Discuss the receiving site | MOFFETT route absent; tight-access marketing is not an access specification. | Ask customers to describe entrances, surfaces, overhead obstructions, and desired unloading position. Give no clearance, slope, reach, or all-terrain guarantee. | Access information is missing from the reviewed competitors; mock identifies the topic but does not verify limits. |
| Get a practical next action | MOFFETT route absent; no service-specific enquiry guidance. | Request route and date with load details; invite a discussion of price and availability without a published rate or time promise. | Confirmed contacts; Fully Loaded/Bitzer quote-input gaps; ProZone illustrates the scope categories. |

Content order: problem and action, what forklift-assisted delivery means, load information, receiving-site questions, enquiry details, then only remaining FAQs. Link to flatdeck when transport is needed but unloading equipment is already arranged; link to power-only if the customer already has the trailer.

### Flatdeck transportation

The customer needs construction or industrial freight moved on an open-deck trailer from or to Edmonton. They need to describe the cargo and establish loading and unloading arrangements. The desired result is an appropriate transport enquiry rather than an assumption that any weight, dimension, or route can be accepted. A supplier or site deadline may matter, but no lead time is confirmed.

Main query: `flatbed transport Edmonton flat deck trucking service`. Useful planning variations: `flatdeck transportation Edmonton`, `construction material flatbed delivery Edmonton`, `open deck freight Edmonton loading unloading`.

Questions in estimated decision order:
1. Is open-deck transport the right enquiry for my cargo?
2. What dimensions, weight, packaging, and handling details matter?
3. Who has equipment available to load and unload at each end?
4. What pickup, destination, date, and weather-protection needs should I discuss?
5. What happens if the receiving site needs forklift-assisted delivery?

| Customer need | Gap in the current page | Proposed answer or section | Evidence |
| --- | --- | --- | --- |
| Understand flatdeck transport | Flatdeck route absent; old screenshot's 48-foot specification is unconfirmed. | Explain the open-deck use case with original practical language, not a borrowed specification sheet. | Requested service; YEG explanation; screenshot is presentation evidence only. |
| Describe cargo fit | Flatdeck route absent; no dedicated dimensional enquiry guidance. | Ask for total load and item dimensions, weight, packaging, and any unusual handling needs. Do not advertise oversize, step-deck, or cross-border capabilities. | YEG ambiguous figures; NHL deck distinction; missing Iron Fist equipment documentation. |
| Plan handling at both ends | Flatdeck route absent; no clear load/unload discussion. | Ask what loading and unloading equipment is available and what arrangements are needed. Link to MOFFETT rather than declaring a customer obligation. | YEG, Sure Shot, and NHL do not resolve this question; mock policy is not confirmation. |
| Discuss a quote and schedule | Flatdeck route absent; no dedicated quote checklist. | Request the route, date, cargo, site access, and protection needs. Do not promise tarps, urgent dispatch, a fixed price, or a permit service. | Confirmed contacts; competitor quote-input gaps; Sure Shot's unrelated copy shows what to avoid. |

Content order: open-deck use case, cargo details, loading and unloading, route/date and quote information, then remaining questions. Link to MOFFETT where receiving-site unloading is the issue and to power-only where the customer supplies a trailer. Avoid the MOFFETT page's detailed site-placement discussion.

### Power-only trucking

The customer owns or controls a trailer that needs moving around the Edmonton market but has no tractor and driver available for the requested movement. The desired result is a discussion of a tractor-and-driver move, with trailer details made clear before any acceptance promise. A capacity shortage can make the enquiry urgent; calling does not imply immediate dispatch.

Main query: `power only trucking Edmonton trailer transport service`. Useful planning variations: `tractor and driver for customer trailer Edmonton`, `move my trailer Edmonton power only`, `customer owned trailer transport Alberta`.

Questions in estimated decision order:
1. Does power-only mean I supply the trailer and enquire about a tractor and driver?
2. What trailer type, configuration, condition, and loaded/empty details should I send?
3. What compatibility, collection, and handover questions need discussion?
4. What pickup, destination, access, and date information matters?
5. How do I contact the company about the movement and price?

| Customer need | Gap in the current page | Proposed answer or section | Evidence |
| --- | --- | --- | --- |
| Understand who supplies what | Power-only route absent; generic trucking wording does not resolve trailer ownership. | Define the tractor-and-driver service and the customer's trailer in the opening. Keep it separate from hotshot and carrier-supplied flatdeck transport. | Requested service; current/mock distinction; Oil City explanation; TranHaul's conflation to avoid. |
| Describe the trailer | Power-only route absent; old trailer lists do not prove compatibility. | Ask for trailer type, configuration, dimensions, condition, photos, and whether it is loaded or empty. Do not publish an accepted-trailer list. | Anttal/TranHaul gaps; no Iron Fist compatibility documentation supplied. |
| Plan collection and handover | Power-only route absent; no dedicated movement checklist. | Ask about access, trailer location, contact person, collection arrangements, route, and date. Treat roadworthiness and coupling as discussion topics, not an inspection service or a verified company policy. | Oil City situation; shared competitor readiness gaps; mock policies are unconfirmed. |
| Discuss the movement | Power-only route absent; no tailored contact guidance. | Present verified call/email routes with trailer enquiry information; no guaranteed dispatch or reply window. | Trello/client contacts; Anttal's reply statement is not transferable; Oil City qualifies availability. |

Content order: customer-trailer distinction, trailer information, collection and movement details, enquiry action, then remaining FAQs. Link to flatdeck when the customer needs a trailer supplied and to MOFFETT when transport plus receiving-site unloading is the real need.

## Publication and implementation decisions

- Write original planning copy from the customer questions above. Competitor pages inform which answers matter; their prose, branding, layouts, photographs, figures, and promises are not reused.
- Use first paragraphs that identify the particular service, Edmonton context, customer problem, practical purpose, and next action. Keep "flatbed" as a natural synonym for "flatdeck" and explain MOFFETT and power-only on first use.
- Treat enquiry checklists as helpful requests for information, not invented mandatory booking terms. Do not claim a final driver-on-arrival approval procedure, inspection obligation, standby-power arrangement, or loading responsibility without owner confirmation.
- Do not publish capacities, deck length, prices, operating hours, reply times, same-day or 24/7 promises, Alberta-wide coverage, named-city coverage lists, ratings, review counts, customer counts, licences, insurance, or qualifications from the mock or competitor pages. Supported business identity and the Edmonton base are different from unconfirmed operational claims.
- Photos may describe only visible scenes, such as a truck, flatdeck, or mounted forklift. Use repository-supplied imagery with accurate descriptions and retain any known source credit. A photo does not establish a completed client job, its date/location, payload, ownership, success, or a customer-owned-trailer power-only move. Do not manufacture case studies or reuse the mock's "details pending" captions.
- Keep each page distinct and use descriptive links for related service needs. Do not create near-identical location pages or add nonexistent guide links to match the mock.
- Keep titles, descriptions, one main heading, supporting headings, and internal-link wording aligned with each page's intent. Preserve the established canonical and indexing behavior rather than creating another scheme for services.
- Preserve existing factual business structured data consistent with `client.ts` and visible contact information. Do not invent ratings or reviews, add Service/FAQ markup without a supported use, or promise rich results.
- Maintain working call and enquiry paths. Use the confirmed phone `(780) 993-3980`, `tel:+17809933980`, and email `info@ironfisttransport.ca`; do not introduce the screenshot's additional cell number without confirmation.

Implementation uses the four approved routes, a shared `TransportLayout.astro`, the approved homepage header/footer, and the existing email-draft quote form. Homepage service links now lead to the detail routes; its visual composition is unchanged. Each detail has its own planning sections, remaining questions and quote-service default. Existing canonical and business-schema infrastructure is reused without adding speculative markup.

### Completion status and remaining checks

Research and content planning are complete for the requested scope: four specific customer situations, estimated question priorities, recorded searches and limitations, three readable providers per service, explicit overview reuse, and need/gap/answer/evidence tables. Missing evidence includes confirmed equipment specifications, operating terms, availability, coverage, prices, verified review details, and rendered competitor mobile behavior.

Source review and actual-app checks covered the new routes, related links, call/email actions, enquiry paths, metadata/canonicals, visible business details, structured-data consistency, mobile layout, image descriptions and absence of placeholders. Unsupported operational promises were omitted rather than published with a "fact to confirm" label. Owner-confirmed details can support a later factual update; competitor claims cannot.

### Verification on 2026-10-08

- Production build passed and generated all four service routes. Static checks confirmed unique titles/descriptions, one H1 per page, production canonicals, sitemap inclusion, indexable pages, one quote form and consistent factual business schema.
- Final Chrome verification passed **90/90 checks**, with 95 screenshot artifacts and 26 verified client-navigation transitions. Viewports were 320, 375, 768, 1280 and 1440 pixels. Desktop/mobile screenshots were visually inspected against the approved homepage design.
- Checks exercised native menu dismissal/focus, local and homepage anchors, related-service navigation, quote defaults and editable selection, validation, encoded email drafts, clipboard success/failure, native FAQ pointer/keyboard behavior, mobile footer clearance, stored-theme transitions and JavaScript-disabled contact/menu/FAQ access. No enquiry was sent.
- Final browser run recorded zero page errors, failed HTTP responses, failed requests, unintended write requests or unexpected console errors/warnings. Exact Astro reduced-motion notices caused by the test preference and expected mailto-launch warnings are recorded separately, not treated as application failures.
- Earlier harness failures concerned responsive-image readiness timing, looking for a link after closing its native menu, asynchronous waits with JavaScript disabled and image cancellation caused by oversized screenshot capture. They were investigated and corrected in the external test helper, not hidden by broad error suppression. All strict transition and resource checks passed on the final run; no app fix was needed.
- `git diff --check` passed. All 12 new source/document files were checked for trailing whitespace and final newlines. No lint/typecheck script exists in the project; neither is claimed as run.
- Browser tooling and artifacts remain outside the repository in `%TEMP%/ironfist-services-check-wEJjUy/`, including `results.json`, `build-checks.json`, build logs and `screenshots/`. After the final build passed, the stale development dependency cache was refreshed on the existing port 4321. A fresh Chrome smoke check passed all four service routes with HTTP 200, initialized quote defaults, loaded images and no errors or 504s. Production preview on 4322 was not restarted.
- No deployment, push, dependency upgrade or source-photo modification was performed. Missing business specifications and operating terms remain the factual limits described above.
