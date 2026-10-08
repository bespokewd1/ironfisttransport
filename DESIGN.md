# Iron Fist Transport design references

The first homepage is preserved at commit `3238a1c`. This version uses the following production sites from Inspo as composition references. Their branding, copy and photographs are not reused.

## Primary references

| Reference | Inspo record | What we adapt |
| --- | --- | --- |
| [BIG](https://big.dk) | `big-dk`, captured 2026-05-04 | Indexed service rows, compact text beside large landscape photos, caption rails, square edges and a 1440px grid. |
| [Hyper Effekt](https://hypereffekt.com/) | `hypereffekt-com`, captured 2026-05-28 | A full-width real photographic hero with large left-aligned Inter typography, minimal containing UI and a small navigation. |
| [Bugatti](https://bugatti.com) | `bugatti-com`, captured 2026-05-18 | Small technical monospace labels and restrained dark photographic sections. No luxury claims, proprietary fonts or automotive imagery. |

The broad Inspo recommendation returned mostly unrelated software sites. Architecture and automotive searches supplied the references above. These specific decisions replace the earlier split hero and three-card services layout.

## Adaptation to this business

- Green stays the brand color: forest `#153e2d`, medium green `#326e3b`, pale mist `#e8eee3`.
- Inter at 400/500/600/700 supplies the homepage typography. Technical labels use a system monospace font. Other template pages retain Roboto.
- Header, hero headline, supporting copy, actions and service band fit the desktop first viewport. Display type does not push the call and quote actions below it.
- Real local equipment photos replace the references' lifestyle and product photography. A functional forest scrim supplies readable contrast over the hero.
- Below-fold sections use separate horizontal containers and vertical spacing, thin rules and sharp corners. Services are editorial rows, not three equal floating cards.
- Mobile keeps readable type, keyboard-accessible native navigation and the fixed call/quote actions.
- Business facts, service suitability, contact information and the quote-email mechanism stay truthful. No invented ratings, fleet statistics, service areas or delivery-time promises.

Source photos remain unmodified in `src/assets/images/gallery/trucks`. Astro produces responsive derivatives and a separate social-sharing crop.
