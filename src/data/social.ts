import { BUSINESS } from "@data/client";
import socialImages from "@data/social-images.json";

export interface SocialImage {
	src: string;
	width: number;
	height: number;
	type: string;
	alt: string;
}

interface SocialCard {
	route: string;
	label: string;
	headline: string;
	supporting: string;
	socialDescription: string;
	image: SocialImage;
}

const contactAlt = `Call ${BUSINESS.owner}, ${BUSINESS.phoneFormatted}.`;

export const SOCIAL_CARDS = {
	home: {
		route: "/",
		label: "Edmonton, Alberta",
		headline: "MOFFETT & flatbed transport",
		supporting: "Owner-operated transport based in Edmonton, Alberta.",
		socialDescription: "Edmonton-based MOFFETT delivery, flatbed transportation and power-only trucking. Speak directly with the owner-driver.",
		image: {
			...socialImages.home,
			alt: `Iron Fist Transport. MOFFETT & flatbed transport. Owner-operated in Edmonton, Alberta. Call for a quote. ${contactAlt} Photograph of the Iron Fist tractor attached to a trailer carrying wooden crates outside a metal-sided building.`,
		},
	},
	services: {
		route: "/services/",
		label: "Transport services",
		headline: "The right service for your load.",
		supporting: "MOFFETT delivery, flatbed and power-only trucking.",
		socialDescription: "Compare MOFFETT delivery, flatbed transportation and power-only trucking with Edmonton-based Iron Fist Transport.",
		image: {
			...socialImages.services,
			alt: `Iron Fist Transport. The right service for your load. MOFFETT delivery, flatbed and power-only trucking. ${contactAlt} Photograph of a red MOFFETT forklift mounted at the rear of a flatbed trailer in a dirt yard.`,
		},
	},
	"moffett-delivery": {
		route: "/services/moffett-delivery/",
		label: "MOFFETT delivery",
		headline: "MOFFETT delivery",
		supporting: "Truck-mounted forklift delivery for suitable loads.",
		socialDescription: "Discuss delivery and forklift offloading for suitable loads with Edmonton-based, owner-operated Iron Fist Transport.",
		image: {
			...socialImages["moffett-delivery"],
			alt: `Iron Fist Transport. MOFFETT delivery. Truck-mounted forklift delivery for suitable loads. ${contactAlt} Photograph of a red MOFFETT forklift mounted at the rear of a flatbed trailer in a dirt yard.`,
		},
	},
	"flatbed-transportation": {
		route: "/services/flatbed-transportation/",
		label: "Flatbed transportation",
		headline: "Flatbed transportation",
		supporting: "Construction materials and industrial cargo.",
		socialDescription: "Discuss flatbed transport for construction materials and industrial cargo with Edmonton-based Iron Fist Transport.",
		image: {
			...socialImages["flatbed-transportation"],
			alt: `Iron Fist Transport. Flatbed transportation. Construction materials and industrial cargo. ${contactAlt} Photograph of a forklift holding bundled steel pipe beside a pipe-loaded flatbed trailer in a snowy yard.`,
		},
	},
	"power-only-trucking": {
		route: "/services/power-only-trucking/",
		label: "Power-only trucking",
		headline: "Your trailer. Our tractor & driver.",
		supporting: "Edmonton-based power-only trucking for your trailer.",
		socialDescription: "Need a tractor and driver for your trailer? Discuss power-only trucking with Edmonton-based Iron Fist Transport.",
		image: {
			...socialImages["power-only-trucking"],
			alt: `Iron Fist Transport. Your trailer. Our tractor & driver. Edmonton-based power-only trucking. ${contactAlt} Photograph of the Iron Fist tractor attached to a trailer carrying wooden crates outside a metal-sided building.`,
		},
	},
	"our-work": {
		route: "/our-work/",
		label: "Equipment photographs",
		headline: "Our equipment. A closer look.",
		supporting: "Real photographs of our transport equipment.",
		socialDescription: "See real photographs of Iron Fist Transport's tractor, flatbed trailer and MOFFETT forklift. Based in Edmonton, Alberta.",
		image: {
			...socialImages["our-work"],
			alt: `Iron Fist Transport. Our equipment. A closer look. Real transport equipment photographs. ${contactAlt} Photograph of a red MOFFETT forklift mounted at the rear of a flatbed trailer in a dirt yard.`,
		},
	},
	gallery: {
		route: "/gallery/",
		label: "Delivery gallery",
		headline: "Our deliveries in action",
		supporting: "Real loads, equipment and deliveries.",
		socialDescription: "See real Iron Fist Transport deliveries, flatbed loads and MOFFETT equipment. Call to discuss your next load.",
		image: {
			...socialImages.gallery,
			alt: `Iron Fist Transport. Our deliveries in action. Real loads, equipment and deliveries. Call for a quote. ${contactAlt} Photograph of the Iron Fist tractor attached to a trailer carrying wooden crates outside a metal-sided building.`,
		},
	},
	industries: {
		route: "/industries/",
		label: "Industries we serve",
		headline: "Industries we serve",
		supporting: "Material delivery for contractors, suppliers and businesses.",
		socialDescription: "Material delivery for contractors, suppliers and industrial businesses. Explore Edmonton-based Iron Fist Transport services.",
		image: {
			...socialImages.industries,
			alt: `Iron Fist Transport. Industries we serve. Material delivery for contractors, suppliers and businesses. ${contactAlt} Photograph of a red MOFFETT forklift mounted at the rear of a flatbed trailer in a dirt yard.`,
		},
	},
	"service-areas": {
		route: "/service-areas/",
		label: "Alberta service areas",
		headline: "Edmonton-based. Alberta deliveries.",
		supporting: "Share your route and load for review before booking.",
		socialDescription: "Edmonton-based trucking for nearby communities and Alberta destinations. Contact Iron Fist Transport to review your route.",
		image: {
			...socialImages["service-areas"],
			alt: `Iron Fist Transport. Edmonton-based. Alberta deliveries. Share your route and load for review before booking. ${contactAlt} Photograph of the Iron Fist tractor attached to a trailer carrying wooden crates outside a metal-sided building.`,
		},
	},
	about: {
		route: "/about/",
		label: "About Iron Fist Transport",
		headline: "Owner-operated. Direct contact.",
		supporting: "Based in Edmonton, Alberta. Speak with the owner-driver.",
		socialDescription: "Meet Edmonton-based, owner-operated Iron Fist Transport. Speak directly with the owner-driver about your load and route.",
		image: {
			...socialImages.about,
			alt: `Iron Fist Transport. Owner-operated. Direct contact. Based in Edmonton, Alberta. ${contactAlt} Photograph of the Iron Fist tractor attached to a trailer carrying wooden crates outside a metal-sided building.`,
		},
	},
} satisfies Record<string, SocialCard>;
