# Shared layouts and navigation

`BaseLayout.astro` owns the HTML document, metadata, fonts, light theme, shared
`Header/Header.astro`, and `Footer/Footer.astro`. Pages do not declare header or
footer slots. The CMS admin is a standalone document.

`CompanyLayout.astro` adds scoped company-page styles, a company-page content
wrapper, social-image fallback, and the shared quote section.
`TransportLayout.astro` does the same for service-page styles and supplies the
quote form's service selection and checklist. Neither owns site navigation.

## Menu links

Edit `src/data/navData.json`. The header's desktop and mobile menus use the same
entries. Each entry has `key`, `url`, and `children`. Use `children: []` for a plain
link. Populate `children` with `key`/`url` pairs for one dropdown level. Reorder,
add, or remove entries in this array. No Services dropdown is required for the
mobile menu to work. Multiple dropdowns are supported.

Optional `mobileKey` changes the mobile dropdown label. Optional `overviewLabel`
changes the final link to the parent's URL inside its dropdown. For example:

```json
{
  "key": "About",
  "url": "/about/",
  "children": [
    { "key": "About Iron Fist", "url": "/about/" },
    { "key": "Service Areas", "url": "/service-areas/" }
  ],
  "overviewLabel": "About Iron Fist"
}
```

Do not add links to routes before those pages exist. The cleanup preserves the
current menu; Industries and Service Areas will be added with their pages.

The footer uses the Services entry's children for its transport links. Other
entries and their children appear in company navigation. The logo links home;
phone and quote actions stay separate and prominent. Business contact values
come from `src/data/client.ts`.

## Quote links and mobile contact actions

BaseLayout defaults `quoteHref` to `/#quote`, so pages without a form link to the
homepage form. Pages with their own form pass `quoteHref="#quote"`.

`revealContactAfterIntro` opts into the existing mobile/tablet contact-bar reveal.
The page must have a `data-contact-intro` opening section. The homepage, company
wrapper, and service wrapper opt in. Gallery retains its immediate phone-only
viewport contact bar. These flags preserve existing behavior rather than infer
page content from route names.

Dark-mode scripts, toggle, styles, and the legacy navigation implementation have
been removed. The branded light theme is now the BaseLayout default, including
remaining blog/template routes. Their content has not been redesigned.

## Cleanup verification

The production build and existing Open Graph checks pass. Browser checks covered
10 representative routes at 1440, 1024, 768, and 390 pixels, shared chrome counts,
quote destinations, horizontal overflow, current-link state, desktop hover and
keyboard Escape/focus, mobile nested disclosures, client-side page navigation,
reversible contact-bar reveal, native no-JavaScript mobile disclosures, and a
saved dark preference. Separate temporary menu fixtures verified zero and two
dropdowns. Fixtures were restored to the current menu before the final build.
No real quote request was submitted. Local checks do not prove email delivery.
