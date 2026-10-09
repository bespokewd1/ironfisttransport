let cleanup = () => {};

function initializeContactActions() {
	cleanup();
	const bar = document.querySelector<HTMLElement>("[data-contact-actions]");
	if (!bar) return;

	const revealAfterIntro = bar.hasAttribute("data-reveal-after-hero");
	const intro = revealAfterIntro
		? document.querySelector<HTMLElement>("[data-contact-intro]")
		: null;
	const header = document.querySelector<HTMLElement>("[data-home-header]");
	const viewport = window.matchMedia(revealAfterIntro ? "(max-width: 63.99rem)" : "(max-width: 47.99rem)");
	const controller = new AbortController();
	const options = { signal: controller.signal };
	let frame = 0;

	const update = () => {
		frame = 0;
		// Keep gated actions hidden until the page's opening section passes the sticky header.
		// A missing intro must not expose a bar that was explicitly configured to stay hidden.
		const pastIntro = !revealAfterIntro || (intro !== null && intro.getBoundingClientRect().bottom <= (header?.getBoundingClientRect().bottom ?? 0));
		const visible = viewport.matches && pastIntro;
		bar.dataset.visible = String(visible);
		bar.inert = !visible;
		bar.setAttribute("aria-hidden", String(!visible));
	};

	const scheduleUpdate = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};
	const observer = new ResizeObserver(scheduleUpdate);
	if (intro) observer.observe(intro);
	if (header) observer.observe(header);
	window.addEventListener("scroll", scheduleUpdate, { ...options, passive: true });
	window.addEventListener("resize", scheduleUpdate, options);
	viewport.addEventListener("change", scheduleUpdate, options);
	update();

	cleanup = () => {
		controller.abort();
		observer.disconnect();
		cancelAnimationFrame(frame);
	};
}

document.addEventListener("astro:page-load", initializeContactActions);
document.addEventListener("astro:before-swap", () => cleanup());
