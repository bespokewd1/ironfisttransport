import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const images = JSON.parse(await fs.readFile(path.join(root, "src/data/social-images.json"), "utf8"));
const routes = { home: "", services: "services", "moffett-delivery": "services/moffett-delivery", "flatbed-transportation": "services/flatbed-transportation", "power-only-trucking": "services/power-only-trucking", "our-work": "our-work", about: "about" };
const decode = text => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#(?:39|x27);/gi, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map(([, name, , value]) => [name, decode(value)]));
}
const results = [];
assert.equal(Object.keys(images).length, 7);
for (const [slug, route] of Object.entries(routes)) {
  const html = await fs.readFile(path.join(root, "dist", route, "index.html"), "utf8");
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
  assert.ok(head, `${slug}: head missing`);
  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => attributes(tag));
  const values = new Map();
  for (const meta of metas) {
    const key = meta.name ?? meta.property;
    if (key) {
      assert.equal(values.has(key), false, `${slug}: duplicate ${key}`);
      values.set(key, meta.content);
    }
  }
  const titles = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  assert.equal(titles.length, 1);
  const title = decode(titles[0][1]);
  assert.ok(title.trim(), `${slug}: title missing`);
  assert.equal(values.get("og:title"), title);
  assert.equal(values.get("twitter:title"), title);
  assert.ok(values.get("description").length <= 160, `${slug}: SEO description length`);
  const description = values.get("og:description");
  assert.ok(description.length > 0 && description.length <= 125, `${slug}: social description length`);
  assert.equal(values.get("twitter:description"), description);
  assert.equal(values.get("web_author"), "Pav Sandhu");
  assert.equal(values.get("og:type"), "website");
  assert.equal(values.get("twitter:card"), "summary_large_image");
  const image = images[slug];
  const imageUrl = new URL(values.get("og:image"));
  assert.equal(imageUrl.pathname, image.src);
  assert.equal(values.get("twitter:image"), imageUrl.href);
  assert.equal(values.get("og:image:width"), "1200");
  assert.equal(values.get("og:image:height"), "630");
  assert.equal(values.get("og:image:type"), "image/jpeg");
  assert.ok(values.get("og:image:alt"));
  assert.equal(values.get("twitter:image:alt"), values.get("og:image:alt"));
  const canonicals = [...head.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => attributes(tag)).filter(tag => tag.rel === "canonical");
  assert.equal(canonicals.length, 1);
  assert.equal(canonicals[0].href, values.get("og:url"));
  assert.equal(values.get("twitter:url"), canonicals[0].href);
  const preloads = [...head.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => attributes(tag)).filter(tag => tag.rel === "preload" && tag.href?.includes("/assets/og/"));
  assert.equal(preloads.length, 0, `${slug}: social card must not be a hero preload`);
  const charset = html.toLowerCase().indexOf('<meta charset="utf-8"');
  assert.ok(charset >= 0 && Buffer.byteLength(html.slice(0, charset)) < 1024, `${slug}: charset position`);
  const bytes = await fs.readFile(path.join(root, "dist", image.src));
  const metadata = await sharp(bytes).metadata();
  assert.equal(metadata.format, "jpeg");
  assert.equal(metadata.width, 1200);
  assert.equal(metadata.height, 630);
  assert.ok(bytes.includes(Buffer.from("impeccable:prompt\0")), `${slug}: missing image provenance`);
  if (slug === "our-work") assert.equal(values.get("description").length, 157, "Our work description must survive its apostrophe.");
  results.push({ slug, title: title.length, seoDescription: values.get("description").length, socialDescription: description.length, image: image.src, bytes: bytes.length });
}
async function filesIn(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(path.join(dir, entry.name)) : path.join(dir, entry.name)));
  return results.flat();
}
const buildFiles = await filesIn(path.join(root, "dist"));
assert.equal(buildFiles.some(file => /(?:__og-studio|tooling[\/]og-studio)/.test(file)), false, "Studio route leaked into production output.");
for (const file of buildFiles.filter(file => /\.(?:html|xml|js|css)$/.test(file))) {
  const text = await fs.readFile(file, "utf8");
  assert.equal(text.includes("__og-studio"), false, `Studio reference leaked into ${path.relative(root, file)}`);
}
console.log(JSON.stringify({ pages: results, studioExcludedFromBuild: true }, null, 2));
