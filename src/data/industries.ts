import type { ImageMetadata } from "astro";
import construction from "@assets/images/gallery/flatbed-deliveries/brick-pallets-site.webp";
import suppliers from "@assets/images/gallery/flatbed-deliveries/flatbed-brick-delivery.webp";
import industrial from "@assets/images/gallery/trucks/tractor.webp";

type ServiceLink = {
	title: string;
	href: "/services/moffett-delivery/" | "/services/flatbed-transportation/" | "/services/power-only-trucking/";
};

type Industry = {
	id: string;
	title: string;
	image: ImageMetadata;
	alt: string;
	position: string;
	description: string;
	summary: string;
	services: ServiceLink[];
};

export const industries = [
	{
		id: "construction-contractors",
		title: "Construction & Contractors",
		image: construction,
		alt: "Brick pallets set beside a building under construction at a snowy jobsite",
		position: "center 45%",
		description: "Move bricks, lumber, building materials and other suitable construction supplies to your jobsite. MOFFETT delivery brings a truck-mounted forklift for suitable offloads. Share pallet weights, ground conditions and access details so we can confirm the setup.",
		summary: "Building materials to the jobsite, with MOFFETT offloading for suitable loads and access.",
		services: [{ title: "MOFFETT delivery", href: "/services/moffett-delivery/" }, { title: "Flatbed transportation", href: "/services/flatbed-transportation/" }],
	},
	{
		id: "building-material-suppliers",
		title: "Building Material Suppliers",
		image: suppliers,
		alt: "Strapped brick pallets on a flatbed trailer in a supplier yard",
		position: "center 60%",
		description: "Arrange transportation of palletized building materials from your yard to the construction site. Discuss scheduled deliveries, pickup readiness and site receiving hours with us. A MOFFETT can handle suitable offloads where a separate site forklift is not available, subject to load and access checks.",
		summary: "Palletized materials from your yard to site, with delivery dates and offloading discussed in advance.",
		services: [{ title: "MOFFETT delivery", href: "/services/moffett-delivery/" }, { title: "Flatbed transportation", href: "/services/flatbed-transportation/" }],
	},
	{
		id: "industrial-commercial",
		title: "Industrial & Commercial Businesses",
		image: industrial,
		alt: "Iron Fist Transport tractor and flatbed carrying wooden crates outside an industrial building",
		position: "center 58%",
		description: "Plan flatbed transportation for suitable industrial materials, equipment and commercial loads. If you already have a roadworthy trailer, ask about power-only trucking. Send cargo dimensions and weight, trailer details where applicable, and loading and unloading arrangements for review.",
		summary: "Flatbed transport for suitable industrial loads, or a tractor and driver for your trailer.",
		services: [{ title: "Flatbed transportation", href: "/services/flatbed-transportation/" }, { title: "Power-only trucking", href: "/services/power-only-trucking/" }],
	},
] satisfies Industry[];
