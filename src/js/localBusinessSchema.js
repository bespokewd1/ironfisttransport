import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin = SITE.url) {
	const websiteUrl = new URL(SITE.url, origin);
	const businessId = new URL("#business", websiteUrl).href;
	const websiteId = new URL("#website", websiteUrl).href;
	const logoUrl = new URL(BUSINESS.logo, websiteUrl).href;
	const sameAs = Object.values(BUSINESS.socials).filter(Boolean);

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": businessId,
				"name": BUSINESS.name,
				"description": SITE.description,
				"url": websiteUrl.href,
				"logo": logoUrl,
				"email": BUSINESS.email,
				"telephone": BUSINESS.phoneForTel,
				"address": {
					"@type": "PostalAddress",
					"streetAddress": [BUSINESS.address.lineOne, BUSINESS.address.lineTwo].filter(Boolean).join(", "),
					"addressLocality": BUSINESS.address.city,
					"addressRegion": BUSINESS.address.state,
					"postalCode": BUSINESS.address.zip,
					"addressCountry": BUSINESS.address.country,
				},
				"hasMap": BUSINESS.address.mapLink,
				"sameAs": sameAs,
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				"name": SITE.title,
				"url": websiteUrl.href,
				"inLanguage": SITE.locale,
				"publisher": { "@id": businessId },
			},
		],
	};
}
