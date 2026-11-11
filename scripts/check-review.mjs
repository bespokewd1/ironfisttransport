import assert from "node:assert/strict";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
const out = path.join(root, ".impeccable/review/leave-a-review");
await fs.mkdir(out, { recursive: true });
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".png": "image/png" };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    const target = path.resolve(dist, `.${decodeURIComponent(url.pathname)}`, url.pathname.endsWith("/") ? "index.html" : "");
    if (!target.startsWith(`${dist}${path.sep}`)) throw new Error("Invalid path");
    res.setHeader("Content-Type", mime[path.extname(target)] ?? "application/octet-stream");
    res.end(await fs.readFile(target));
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const [name, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844], ["narrow", 320, 740]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: "reduce" });
    const page = await context.newPage();
    const errors = [];
    const writes = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("request", request => { if (request.method() !== "GET") writes.push(request.url()); });
    assert.equal((await page.goto(`${base}/leave-a-review/`)).status(), 200);
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator("delivery-feedback");
    const google = section.getByRole("link", { name: "Open Google reviews" });
    const facebook = section.getByRole("link", { name: "Visit us on Facebook" });
    const originalLinks = [await google.getAttribute("href"), await facebook.getAttribute("href")];
    const email = section.getByRole("link", { name: "Send a message" });
    assert.equal(new URL(await email.getAttribute("href")).searchParams.get("body").includes("My experience:"), true);
    assert.equal(await section.locator("input:checked").count(), 0);
    for (let rating = 1; rating <= 5; rating++) {
      const radio = section.locator(`input[value="${rating}"]`);
      await radio.locator("..").click();
      assert.equal(await radio.isChecked(), true);
      await page.getByRole("status").filter({ hasText: `${rating} out of 5 selected.` }).waitFor();
      assert.equal(await section.locator("label[data-filled]").count(), rating);
      for (const link of [google, facebook]) assert.equal(await link.isVisible(), true);
      assert.deepEqual([await google.getAttribute("href"), await facebook.getAttribute("href")], originalLinks);
      const draft = new URL(await email.getAttribute("href"));
      assert.equal(draft.pathname, "info@ironfisttransport.ca");
      assert.ok(draft.searchParams.get("body").includes(`My experience (${rating} out of 5):`));
      assert.ok(!draft.search.includes("+"), "Mail draft spaces must be percent-encoded");
    }
    const fifth = section.locator('input[value="5"]');
    await fifth.focus();
    await page.keyboard.press("ArrowLeft");
    assert.equal(await section.locator('input[value="4"]').isChecked(), true);
    await page.keyboard.press("ArrowRight");
    assert.equal(await fifth.isChecked(), true);
    await section.locator('input[value="2"]').locator("..").click();
    await page.screenshot({ path: path.join(out, `${name}-selected.png`), fullPage: true });
    await page.reload();
    assert.equal(await section.locator("input:checked").count(), 0);
    assert.equal(await section.locator("label[data-filled]").count(), 0);
    await page.screenshot({ path: path.join(out, `${name}.png`), fullPage: true });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(await page.locator('footer a[href="/leave-a-review/"]').count(), 1);
    assert.equal(await page.locator('.desktop-nav a[href="/leave-a-review/"][aria-current="page"]').count(), 1);
    assert.equal(await page.locator('.mobile-menu a[href="/leave-a-review/"][aria-current="page"]').count(), 1);
    assert.deepEqual(await page.evaluate(() => [localStorage.length, sessionStorage.length]), [0, 0]);
    assert.deepEqual(writes, []);
    assert.deepEqual(errors, []);
    results.push({ name, width, ratings: "1–5 passed", keyboard: "passed", overflow: false, writes: 0, errors: 0 });
    await context.close();
  }
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(`${base}/leave-a-review/`);
  for (const name of ["Open Google reviews", "Visit us on Facebook", "Send a message"]) assert.equal(await page.locator("delivery-feedback").getByRole("link", { name }).isVisible(), true);
  assert.equal(await page.locator('delivery-feedback a[href^="tel:"]').count(), 1);
  await context.close();
  const navigationContext = await browser.newContext();
  const navigationPage = await navigationContext.newPage();
  await navigationPage.goto(`${base}/about/`);
  await navigationPage.locator('footer a[href="/leave-a-review/"]').click();
  await navigationPage.waitForURL("**/leave-a-review/");
  await navigationPage.locator('input[value="1"]').locator("..").click();
  await navigationPage.getByRole("status").filter({ hasText: "1 out of 5 selected." }).waitFor();
  await navigationContext.close();
  const sitemap = await fs.readFile(path.join(dist, "sitemap-0.xml"), "utf8");
  assert.match(sitemap, /https:\/\/www\.ironfisttransport\.ca\/leave-a-review\//);
  const html = await fs.readFile(path.join(dist, "leave-a-review/index.html"), "utf8");
  assert.doesNotMatch(html, /name="robots" content="noindex/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.ironfisttransport\.ca\/leave-a-review\/"/);
  await fs.writeFile(path.join(out, "checks.json"), JSON.stringify({ results, noJavaScript: "all paths accessible", clientNavigation: "passed", sitemap: "passed" }, null, 2));
  console.log(JSON.stringify({ results, noJavaScript: "passed", clientNavigation: "passed", sitemap: "passed", screenshots: out }, null, 2));
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
