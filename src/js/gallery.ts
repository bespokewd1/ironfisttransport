import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setupGalleryMasonry } from "./gallery-masonry";

let cleanup = () => {};
function initializeGallery() {
 cleanup();
 const page = document.querySelector<HTMLElement>("[data-gallery-page]");
 const root = page?.querySelector<HTMLElement>("[data-gallery-masonry]");
 const dialog = document.querySelector<HTMLDialogElement>("[data-gallery-viewer]");
 if (!page || !root || !dialog) return;
 const controller = new AbortController();
 const options = {signal: controller.signal};
 let lenis: Lenis | undefined;
 const scrollTo = (top: number) => {
  if (lenis) {
   lenis.resize();
   lenis.scrollTo(top, {immediate: true});
  } else window.scrollTo({top, behavior: "instant"});
 };
 const masonry = setupGalleryMasonry(root, scrollTo);
 const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
 const pointer = window.matchMedia("(pointer: fine)");
 let releaseScroll = () => {};
 const configureScroll = () => {
  releaseScroll();
  releaseScroll = () => {};
  if (motion.matches || !pointer.matches) return;
  const instance = new Lenis({autoRaf: true, lerp: 0.12, anchors: true, syncTouch: false,
   prevent: node => Boolean(node.closest("[data-site-menu], [data-gallery-viewer]")),
  });
  lenis = instance;
  // Update compensation in the same frame Lenis writes the scroll position.
  const unsubscribe = instance.on("scroll", masonry.update);
  const syncLock = () => {
   if (document.body.style.overflow === "hidden") instance.stop();
   else instance.start();
  };
  const lockObserver = new MutationObserver(syncLock);
  lockObserver.observe(document.body, {attributes: true, attributeFilter: ["style"]});
  syncLock();
  releaseScroll = () => {
   lockObserver.disconnect();
   unsubscribe();
   instance.destroy();
   lenis = undefined;
  };
 };
 configureScroll();
 motion.addEventListener("change", configureScroll, options);
 pointer.addEventListener("change", configureScroll, options);
 let filterFrame = 0;
 const items = Array.from(root.querySelectorAll<HTMLElement>("[data-gallery-item]"));
 const filters = page.querySelector<HTMLElement>("[data-gallery-filters]")!;
 const count = page.querySelector<HTMLElement>("[data-gallery-count]")!;
 const image = dialog.querySelector<HTMLImageElement>("[data-viewer-image]")!;
 const error = dialog.querySelector<HTMLElement>("[data-viewer-error]")!;
 const caption = dialog.querySelector<HTMLElement>("#viewer-caption")!;
 const viewerCount = dialog.querySelector<HTMLElement>("[data-viewer-count]")!;
 const collection = page.querySelector<HTMLElement>("[data-gallery-collection]")!;
 let visible = items;
 let current = 0;
 let opener: HTMLElement | null = null;
 let previousOverflow = "";
 let previousPadding = "";
 filters.hidden = false;
 function showPhoto() {
  const link = visible[current].querySelector<HTMLAnchorElement>("[data-gallery-photo]")!;
  image.hidden = false;
  error.hidden = true;
  image.alt = link.dataset.caption!;
  image.src = link.href;
  caption.textContent = link.dataset.caption!;
  viewerCount.textContent = `${current + 1} / ${visible.length}`;
 }
 function closeViewer() { dialog!.close(); }
 root.addEventListener("click", event => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("[data-gallery-photo]");
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  opener = link;
  current = visible.indexOf(link.closest<HTMLElement>("[data-gallery-item]")!);
  previousOverflow = document.body.style.overflow;
  previousPadding = document.body.style.paddingRight;
  const gutter = innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  if (gutter) document.body.style.paddingRight = `${gutter}px`;
  showPhoto();
  dialog!.showModal();
 }, options);
 dialog.addEventListener("close", () => {
  document.body.style.overflow = previousOverflow;
  document.body.style.paddingRight = previousPadding;
  image.removeAttribute("src");
  opener?.focus({preventScroll: true});
 }, options);
 image.addEventListener("error", () => { image.hidden = true; error.hidden = false; }, options);
 const move = (direction: number) => { current = (current + direction + visible.length) % visible.length; showPhoto(); };
 dialog.querySelector("[data-viewer-close]")!.addEventListener("click", closeViewer, options);
 dialog.querySelector("[data-viewer-prev]")!.addEventListener("click", () => move(-1), options);
 dialog.querySelector("[data-viewer-next]")!.addEventListener("click", () => move(1), options);
 dialog.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
  if (event.key === "Home" || event.key === "End") { event.preventDefault(); current = event.key === "Home" ? 0 : visible.length - 1; showPhoto(); }
 }, options);
 filters.addEventListener("click", event => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-filter]");
  if (!button || button.getAttribute("aria-pressed") === "true") return;
  const offset = parseFloat(getComputedStyle(collection).scrollMarginTop);
  const align = collection.getBoundingClientRect().top < offset;
  filters.querySelectorAll("button").forEach(control => control.setAttribute("aria-pressed", String(control === button)));
  items.forEach(item => { item.hidden = button.dataset.filter !== "all" && !item.dataset.categories!.split(" ").includes(button.dataset.filter!); });
  visible = items.filter(item => !item.hidden);
  count.textContent = `${visible.length} ${visible.length === 1 ? "photograph" : "photographs"}`;
  masonry.refresh();
  cancelAnimationFrame(filterFrame);
  // Masonry measures on the next frame. Reset Lenis after that new height exists.
  filterFrame = requestAnimationFrame(() => {
   filterFrame = 0;
   if (align) scrollTo(scrollY + collection.getBoundingClientRect().top - offset);
   else if (lenis) scrollTo(scrollY);
  });
 }, options);
 cleanup = () => {
  if (dialog.open) dialog.close();
  controller.abort();
  cancelAnimationFrame(filterFrame);
  releaseScroll();
  masonry.destroy();
 };
}
document.addEventListener("astro:page-load", initializeGallery);
document.addEventListener("astro:before-swap", () => cleanup());
