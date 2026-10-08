import Lenis from "lenis";
import "lenis/dist/lenis.css";

let cleanup = () => {};

function initializeMotion() {
	cleanup();
	const hero = document.querySelector<HTMLElement>("[data-home-hero]");
	const heading = hero?.querySelector<HTMLElement>("h1");
	const row = hero?.querySelector<HTMLElement>(".hero-bottom");
	if (!hero || !heading || !row) return;

	const controller = new AbortController();
	const options = { signal: controller.signal };
	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	const root = document.documentElement;
	const properties = ["--hero-heading-lag", "--hero-row-lag", "--hero-photo-lag"];
	let stopMotion = () => {};

	const startMotion = () => {
		stopMotion();
		stopMotion = () => {};
		if (reducedMotion.matches) return;

		const lenis = new Lenis({ autoRaf: false, anchors: false, syncTouch: false, lerp: 0.1 });
		root.classList.add("home-smooth-scroll");
		hero.dataset.motionActive = "";
		let frame = 0;
		let dirty = true;
		let lastScroll = -1;
		let lastTravel = -1;
		let geometry = { end: 0, rowRoom: 0, headingRoom: 0, photoRoom: 0, headingRate: 0, rowRate: 0, photoRate: 0 };

		const measure = () => {
			// Read the resting layout, never a previous frame's translated bounds.
			hero.style.setProperty("--hero-heading-lag", "0px");
			hero.style.setProperty("--hero-row-lag", "0px");
			const heroBounds = hero.getBoundingClientRect();
			const headingBounds = heading.getBoundingClientRect();
			const rowBounds = row.getBoundingClientRect();
			const rem = parseFloat(getComputedStyle(root).fontSize);
			const desktop = window.innerWidth >= 64 * rem;
			const narrow = window.innerWidth < 48 * rem;
			const gap = desktop ? 1.5 * rem : rem;
			const photoRate = narrow ? 0.12 : desktop ? 0.6 : 0.3;
			geometry = {
				end: heroBounds.bottom + window.scrollY,
				rowRoom: Math.max(0, heroBounds.bottom - rowBounds.bottom - rem),
				headingRoom: Math.max(0, rowBounds.top - headingBounds.bottom - gap),
				// The opaque sticky header covers the photo's receding top edge.
				// Keep its original crop instead of scaling it for overscan.
				photoRoom: heroBounds.height * photoRate,
				headingRate: narrow ? 0 : desktop ? 0.32 : 0.14,
				rowRate: narrow ? 0 : desktop ? 0.22 : 0.1,
				photoRate,
			};
			dirty = false;
		};

		const render = (scroll: number) => {
			const travel = Math.min(Math.max(0, scroll), geometry.end);
			if (travel === lastTravel) return;
			const rowLag = Math.min(travel * geometry.rowRate, geometry.rowRoom);
			const headingLag = Math.min(travel * geometry.headingRate, geometry.headingRoom + rowLag);
			hero.style.setProperty("--hero-row-lag", `${rowLag}px`);
			hero.style.setProperty("--hero-heading-lag", `${headingLag}px`);
			hero.style.setProperty("--hero-photo-lag", `${Math.min(travel * geometry.photoRate, geometry.photoRoom)}px`);
			lastTravel = travel;
		};

		const tick = (time: number) => {
			lenis.raf(time);
			const scroll = lenis.scroll;
			if (dirty) {
				measure();
				lastTravel = -1;
				render(scroll);
			} else if (scroll !== lastScroll) {
				render(scroll);
			}
			lastScroll = scroll;
			frame = requestAnimationFrame(tick);
		};

		const invalidate = () => { dirty = true; };
		const observer = new ResizeObserver(invalidate);
		observer.observe(hero);
		observer.observe(heading);
		observer.observe(row);
		window.addEventListener("resize", invalidate, options);
		document.fonts.addEventListener("loadingdone", invalidate, options);
		measure();
		render(lenis.scroll);
		frame = requestAnimationFrame(tick);

		stopMotion = () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("resize", invalidate);
			document.fonts.removeEventListener("loadingdone", invalidate);
			lenis.destroy();
			root.classList.remove("home-smooth-scroll");
			delete hero.dataset.motionActive;
			for (const property of properties) hero.style.removeProperty(property);
		};
	};

	reducedMotion.addEventListener("change", startMotion, options);
	startMotion();
	cleanup = () => {
		controller.abort();
		stopMotion();
	};
}

document.addEventListener("astro:page-load", initializeMotion);
document.addEventListener("astro:before-swap", () => cleanup());
