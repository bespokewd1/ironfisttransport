import businessLogo from "@assets/images/gallery/trucks/ironfist-logo.webp";
import defaultSocialImage from "@assets/images/gallery/trucks/tractor.webp";

const OWNER_NAME = "Pav Sandhu";

// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Iron Fist Transport Ltd.",
	tagline: "Construction & Industrial Logistics",
	description: `Iron Fist Transport Ltd. provides construction and industrial logistics in Edmonton, Alberta, Canada. Contact ${OWNER_NAME} at (780) 993-3980.`,
	url: "https://www.ironfisttransport.ca/",
	author: OWNER_NAME,
	locale: "en-CA",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	owner: OWNER_NAME,
	email: "info@ironfisttransport.ca",
	phoneForTel: "+17809933980",
	phoneFormatted: "(780) 993-3980",
	logo: businessLogo.src,
	address: {
		lineOne: "1737 63A St SW",
		lineTwo: "",
		city: "Edmonton",
		state: "AB",
		zip: "T6X 0S1",
		country: "CA",
		mapLink: "https://share.google/Ady6cBaDRZdocYsVl",
	},
	socials: {
		facebook: "https://www.facebook.com/profile.php?id=61583884139842",
		instagram: "",
		google: "https://share.google/Ady6cBaDRZdocYsVl",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_CA",
	image: defaultSocialImage.src,
	width: defaultSocialImage.width,
	height: defaultSocialImage.height,
	type: "image/webp",
};
