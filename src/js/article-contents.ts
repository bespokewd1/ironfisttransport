let cleanupContents = () => {};

function initializeContents() {
	cleanupContents();
	const contents = document.querySelector<HTMLElement>(".article-contents");
	const article = document.querySelector<HTMLElement>(".article-prose");
	if (!contents || !article) return;

	const links = [...contents.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
	const sections = links.flatMap((link) => {
		const heading = document.getElementById(decodeURIComponent(link.hash.slice(1)));
		return heading && article.contains(heading) ? [{ link, heading }] : [];
	});
	const header = document.querySelector<HTMLElement>("[data-site-header]");
	const controller = new AbortController();
	let frame = 0;
	let active: HTMLAnchorElement | undefined;

	const update = () => {
		frame = 0;
		// Keep the current section active through its paragraphs, even after
		// its heading has left the screen. The next heading takes over here.
		const readingLine = (header?.getBoundingClientRect().bottom ?? 0) + Math.min(160, window.innerHeight * 0.2);
		let next: HTMLAnchorElement | undefined;
		if (article.getBoundingClientRect().bottom > readingLine) {
			for (const { link, heading } of sections) {
				if (heading.getBoundingClientRect().top <= readingLine) next = link;
				else break;
			}
		}
		if (next === active) return;
		active?.removeAttribute("aria-current");
		next?.setAttribute("aria-current", "location");
		active = next;
	};
	const schedule = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};

	window.addEventListener("scroll", schedule, { passive: true, signal: controller.signal });
	window.addEventListener("resize", schedule, { signal: controller.signal });
	const observer = new ResizeObserver(schedule);
	observer.observe(article);
	if (header) observer.observe(header);
	update();
	cleanupContents = () => {
		controller.abort();
		observer.disconnect();
		cancelAnimationFrame(frame);
		active?.removeAttribute("aria-current");
	};
}

document.addEventListener("astro:page-load", initializeContents);
document.addEventListener("astro:before-swap", () => cleanupContents());
