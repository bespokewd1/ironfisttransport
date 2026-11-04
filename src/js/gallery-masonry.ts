const GAP = 24;
const MIN_COLUMN_WIDTH = 300;
const MAX_COLUMNS = 3;
const TOP_INSET = 96;
const BOTTOM_INSET = 24;

/** Natural-height columns with bounded, after-entry scroll pinning. */
export function setupGalleryMasonry(root: HTMLElement, scrollTo: (top: number) => void): {
  update: () => void;
  refresh: () => void;
  destroy: () => void;
} {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const rootProperties = ["display", "position", "height", "gap", "grid-template-columns"];
  const itemProperties = ["position", "left", "top", "width", "transform", "box-sizing", "margin"];
  type SavedStyle = { value: string; priority: string };
  const saveStyles = (element: HTMLElement, properties: string[]) =>
    new Map(properties.map(property => [property, {
      value: element.style.getPropertyValue(property),
      priority: element.style.getPropertyPriority(property),
    }]));
  const restoreStyles = (element: HTMLElement, styles: Map<string, SavedStyle>) => {
    styles.forEach(({ value, priority }, property) => {
      if (value) element.style.setProperty(property, value, priority);
      else element.style.removeProperty(property);
    });
  };
  const rootStyles = saveStyles(root, rootProperties);
  const itemStyles = new Map<HTMLElement, Map<string, SavedStyle>>();
  let items: HTMLElement[] = [];
  let columnHeights: number[] = [];
  let shifts: number[] = [];
  let tallest = 0;
  let measuredWidth = -1;
  let frame = 0;
  let needsLayout = false;
  let destroyed = false;
  let focusedElement: HTMLElement | null = null;

  function updatePinning() {
    if (columnHeights.length < 2) return;
    const top = root.getBoundingClientRect().top;
    const viewportBottom = document.documentElement.clientHeight - BOTTOM_INSET;
    columnHeights.forEach((height, column) => {
      const pinTop = Math.min(TOP_INSET, viewportBottom - height);
      const shift = reducedMotion.matches ? 0
        : Math.min(tallest - height, Math.max(0, pinTop - top));
      if (shifts[column] === shift) return;
      shifts[column] = shift;
      for (let index = column; index < items.length; index += columnHeights.length) {
        items[index].style.transform = `translateY(${shift}px)`;
      }
    });
  }

  function measure() {
    measuredWidth = root.getBoundingClientRect().width;
    const columns = Math.min(MAX_COLUMNS, items.length || 1,
      Math.max(1, Math.floor((measuredWidth + GAP) / (MIN_COLUMN_WIDTH + GAP))));
    root.style.position = "relative";
    root.style.gap = `${GAP}px`;
    items.forEach(item => {
      item.style.margin = "0";
      item.style.boxSizing = "border-box";
    });
    if (columns === 1) {
      root.style.display = "grid";
      root.style.gridTemplateColumns = "minmax(0, 1fr)";
      root.style.height = "auto";
      items.forEach(item => {
        item.style.position = "static";
        item.style.left = "auto";
        item.style.top = "auto";
        item.style.width = "100%";
        item.style.transform = "none";
      });
      columnHeights = [];
      shifts = [];
      return;
    }

    const width = (measuredWidth - GAP * (columns - 1)) / columns;
    root.style.display = "block";
    root.style.gridTemplateColumns = "none";
    // Set all widths before measuring so image aspect ratios determine height.
    items.forEach(item => {
      item.style.position = "absolute";
      item.style.width = `${width}px`;
      item.style.transform = "none";
    });
    const heights = items.map(item => item.getBoundingClientRect().height);
    columnHeights = Array<number>(columns).fill(0);
    const positions = heights.map((height, index) => {
      const column = index % columns;
      const top = columnHeights[column];
      columnHeights[column] += height + GAP;
      return { column, top };
    });
    columnHeights = columnHeights.map(height => Math.max(0, height - GAP));
    tallest = Math.max(...columnHeights);
    root.style.height = `${tallest}px`;
    items.forEach((item, index) => {
      const { column, top } = positions[index];
      item.style.left = `${column * (width + GAP)}px`;
      item.style.top = `${top}px`;
    });
    shifts = [];
    updatePinning();
  }

  function revealFocus() {
    const target = focusedElement;
    focusedElement = null;
    if (!target || columnHeights.length < 2 || target !== document.activeElement
      || !target.matches(":focus-visible")) return;
    const rect = target.getBoundingClientRect();
    if (rect.top >= TOP_INSET
      && rect.bottom <= document.documentElement.clientHeight - BOTTOM_INSET) return;
    const index = items.findIndex(item => item === target || item.contains(target));
    if (index < 0) return;
    const shift = shifts[index % columnHeights.length] || 0;
    // Leave the pinned interval so translation cannot cancel native focus scrolling.
    scrollTo(window.scrollY + rect.top - shift - TOP_INSET);
    updatePinning();
  }

  function schedule(layout = false) {
    if (destroyed) return;
    needsLayout ||= layout;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (needsLayout) {
        needsLayout = false;
        measure();
      } else updatePinning();
      revealFocus();
    });
  }

  const observer = new ResizeObserver(entries => {
    if (entries.some(entry => entry.target !== root
      || Math.abs(root.getBoundingClientRect().width - measuredWidth) > 0.5)) {
      schedule(true);
    }
  });
  // Apply in the scroll event, before paint. Deferring this to another frame
  // lets native scrolling move a pinned column before its compensation catches up.
  const onScroll = () => updatePinning();
  const onResize = () => schedule(true);
  const onFocus = (event: FocusEvent) => {
    if (event.target instanceof HTMLElement) {
      focusedElement = event.target;
      schedule();
    }
  };

  function refresh() {
    if (destroyed) return;
    const children = Array.from(root.children).filter((child): child is HTMLElement =>
      child instanceof HTMLElement && child.matches("[data-gallery-item]"));
    itemStyles.forEach((styles, item) => {
      if (!children.includes(item) || item.hidden) {
        observer.unobserve(item);
        restoreStyles(item, styles);
        if (!children.includes(item)) itemStyles.delete(item);
      }
    });
    items = children.filter(item => !item.hidden);
    items.forEach(item => {
      if (!itemStyles.has(item)) itemStyles.set(item, saveStyles(item, itemProperties));
      observer.observe(item);
    });
    schedule(true);
  }

  observer.observe(root);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  reducedMotion.addEventListener("change", onScroll);
  root.addEventListener("focusin", onFocus);
  refresh();

  return {
    update: updatePinning,
    refresh,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reducedMotion.removeEventListener("change", onScroll);
      root.removeEventListener("focusin", onFocus);
      restoreStyles(root, rootStyles);
      itemStyles.forEach((styles, item) => restoreStyles(item, styles));
      items = [];
      focusedElement = null;
    },
  };
}
