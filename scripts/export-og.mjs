import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { chromium } from "playwright";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const { values } = parseArgs({ options: { url: { type: "string", default: "http://127.0.0.1:4321" } } });
const base = new URL(values.url);
assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(base.hostname), "Capture must use a local development server.");
const studio = new URL("/__og-studio/", base);
const exportUrl = new URL(studio);
exportUrl.searchParams.set("export", "1");
const workDir = path.join(root, ".scratch/og-cards");
const reviewDir = path.join(root, ".impeccable/review/og-cards");
const outputDir = path.join(root, "public/assets/og");
const manifestPath = path.join(root, "src/data/social-images.json");
const previous = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const expected = Object.keys(previous);
assert.equal(expected.length, 7, "Expected seven card definitions.");
await Promise.all([workDir, reviewDir, outputDir].map(dir => fs.mkdir(dir, { recursive: true })));
const browser = await chromium.launch({ headless: true });
const report = { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, width: 1200, height: 630, jpeg: { quality: 85, mozjpeg: true, chromaSubsampling: "4:4:4" }, browser: browser.version(), cards: [], previews: [] };

async function ready(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(async image => {
      image.loading = "eager";
      await image.decode();
      if (!image.naturalWidth) throw new Error(`Missing image: ${image.src}`);
    }));
  });
}

function addProvenance(jpeg, text) {
  const payload = Buffer.from(`impeccable:prompt\0${text}`, "utf8");
  assert.ok(payload.length < 65533);
  const comment = Buffer.alloc(4);
  comment.writeUInt16BE(0xfffe, 0);
  comment.writeUInt16BE(payload.length + 2, 2);
  return Buffer.concat([jpeg.subarray(0, 2), comment, payload, jpeg.subarray(2)]);
}

try {
  const context = await browser.newContext({ viewport: report.viewport, deviceScaleFactor: 1, reducedMotion: "reduce", locale: "en-CA" });
  const page = await context.newPage();
  const pageErrors = [];
  page.on("pageerror", error => pageErrors.push(error.message));
  const response = await page.goto(exportUrl.href, { waitUntil: "load" });
  assert.equal(response.status(), 200, "Start npm run dev on the requested local URL first.");
  await page.locator("[data-og-card]").first().waitFor({ state: "visible" });
  await ready(page);
  const cards = page.locator("[data-og-card]");
  assert.equal(await cards.count(), expected.length);
  const staged = [];
  const next = {};
  for (const slug of expected) {
    const card = page.locator(`[data-og-card="${slug}"]`);
    assert.equal(await card.count(), 1, `Missing card: ${slug}`);
    const metrics = await card.evaluate(element => {
      const box = element.getBoundingClientRect();
      const text = [...element.querySelectorAll("h2, h3, p, strong, span")].filter(node => node.textContent.trim()).map(node => {
        const rect = node.getBoundingClientRect();
        const css = getComputedStyle(node);
        return { text: node.textContent.trim(), x: rect.x - box.x, y: rect.y - box.y, width: rect.width, height: rect.height, fontSize: css.fontSize, fontFamily: css.fontFamily, color: css.color, overflow: node.scrollWidth > node.clientWidth + 1 || (css.overflowY !== "visible" && node.scrollHeight > node.clientHeight + 1) };
      });
      return { width: box.width, height: box.height, text, route: element.dataset.route, alt: element.dataset.imageAlt, fonts: [...document.fonts].map(font => ({ family: font.family, status: font.status })), images: [...element.querySelectorAll("img")].map(image => ({ source: image.getAttribute("src"), alt: image.alt, width: image.naturalWidth, height: image.naturalHeight })) };
    });
    assert.equal(metrics.width, 1200, `${slug} width`);
    assert.equal(metrics.height, 630, `${slug} height`);
    assert.ok(metrics.alt, `${slug} needs social-image alt text`);
    for (const text of metrics.text) {
      assert.ok(text.x >= -1 && text.y >= -1 && text.x + text.width <= 1201 && text.y + text.height <= 631, `${slug}: text is outside capture: ${text.text}`);
      assert.equal(text.overflow, false, `${slug}: clipped text: ${text.text}`);
    }
    const png = path.join(workDir, `${slug}.png`);
    await card.screenshot({ path: png, type: "png", scale: "css", animations: "disabled", caret: "hide" });
    const provenance = `Origin: browser screenshot of tooling/og-studio/Studio.astro and Card.astro, ${slug} card. Original Iron Fist Transport equipment photographs and logo from src/assets/images/gallery/trucks. HTML/CSS composition; no AI-generated imagery. Rebuild with npm run og:export.`;
    const encoded = await sharp(png).jpeg(report.jpeg).toBuffer();
    const jpeg = addProvenance(encoded, provenance);
    const metadata = await sharp(jpeg).metadata();
    assert.equal(metadata.format, "jpeg");
    assert.equal(metadata.width, 1200);
    assert.equal(metadata.height, 630);
    const hash = createHash("sha256").update(jpeg).digest("hex").slice(0, 12);
    const filename = `${slug}.${hash}.jpg`;
    next[slug] = { src: `/assets/og/${filename}`, width: 1200, height: 630, type: "image/jpeg" };
    staged.push({ filename, jpeg });
    await fs.copyFile(png, path.join(reviewDir, `${slug}.png`));
    await sharp(jpeg).resize(600, 315).toFile(path.join(reviewDir, `${slug}-small.png`));
    report.cards.push({ slug, ...next[slug], bytes: jpeg.length, ...metrics });
  }
  assert.deepEqual(pageErrors, [], "Studio browser errors");
  await context.close();
  for (const size of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
    const previewContext = await browser.newContext({ viewport: { width: size.width, height: size.height }, deviceScaleFactor: 1, reducedMotion: "reduce" });
    const preview = await previewContext.newPage();
    const previewResponse = await preview.goto(studio.href, { waitUntil: "load" });
    assert.equal(previewResponse.status(), 200);
    await ready(preview);
    const geometry = await preview.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
    assert.equal(geometry.scrollWidth, geometry.width, `${size.name} preview overflows`);
    await preview.screenshot({ path: path.join(reviewDir, `${size.name}.png`), fullPage: true, animations: "disabled" });
    report.previews.push({ name: size.name, ...geometry });
    await previewContext.close();
  }
  // Publish only after every capture and preview passes.
  for (const output of staged) await fs.writeFile(path.join(outputDir, output.filename), output.jpeg);
  const temporaryManifestPath = `${manifestPath}.tmp`;
  await fs.writeFile(temporaryManifestPath, `${JSON.stringify(next, null, 2)}\n`);
  await fs.rename(temporaryManifestPath, manifestPath);
  for (const old of Object.values(previous)) {
    if (old.src.startsWith("/assets/og/") && !Object.values(next).some(image => image.src === old.src)) {
      await fs.rm(path.join(outputDir, path.basename(old.src)), { force: true });
    }
  }
  const manifest = JSON.stringify(report, null, 2);
  await fs.writeFile(path.join(workDir, "export-report.json"), manifest);
  await fs.writeFile(path.join(reviewDir, "export-report.json"), manifest);
  console.log(JSON.stringify({ cards: report.cards.map(({ slug, src, bytes }) => ({ slug, src, bytes })), studio: studio.href, reviewDir }, null, 2));
} finally {
  await browser.close();
}
