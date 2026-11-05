import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dist = process.argv[2] ?? "dist";
const read = (path) => readFileSync(join(dist, path), "utf8");
const pages = [
	["industries", "Industries We Serve", "Reliable transportation solutions for contractors, suppliers, and businesses across Alberta."],
	["service-areas", "Edmonton-Based. Delivering Across Alberta.", "Transportation services for contractors, suppliers, and businesses throughout Alberta."],
];
const sitemap = read("sitemap-0.xml");
const titles = new Set();
const descriptions = new Set();
for (const [route, heading, subheading] of pages) {
	const html = read(`${route}/index.html`);
	assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${route} has one H1`);
	const h1 = html.match(/<h1\b[^>]*>(.*?)<\/h1>/s)?.[1].replace(/<[^>]+>/g, "");
	assert.equal(h1, heading, `${route} heading`);
	assert.ok(html.includes(subheading), `${route} exact subheading`);
	const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
	const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
	assert.ok(title && description, `${route} metadata`);
	titles.add(title);
	descriptions.add(description);
	assert.ok(!/noindex/i.test(html), `${route} indexable`);
	assert.ok(sitemap.includes(`/${route}/`), `${route} sitemap entry`);
	assert.equal([...html.matchAll(/id="quote"/g)].length, 1, `${route} shared quote section`);
	for (const service of ["moffett-delivery", "flatbed-transportation", "power-only-trucking"]) {
		assert.ok(html.includes(`href="/services/${service}/"`), `${route} links to ${service}`);
	}
	for (const match of html.matchAll(/(?:src|href)="(\/_astro\/[^"?#]+)"/g)) {
		assert.ok(existsSync(join(dist, match[1])), `${route} asset exists ${match[1]}`);
	}
	for (const match of html.matchAll(/href="(\/[^"?#]*)(?:#[^"]*)?"/g)) {
		assert.ok(existsSync(join(dist, match[1], "index.html")) || existsSync(join(dist, match[1])) && !match[1].endsWith("/"), `${route} internal destination exists ${match[1]}`);
	}
	const footer = html.match(/<nav[^>]*aria-label="Company navigation"[^>]*>(.*?)<\/nav>/s)?.[1];
	assert.ok(footer, `${route} footer navigation`);
	const links = [...footer.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
	assert.equal(links.length, new Set(links).size, `${route} no duplicate footer URLs`);
	assert.ok(footer.includes("About Iron Fist"), `${route} footer About label`);
}
assert.equal(titles.size, 2, "Unique titles");
assert.equal(descriptions.size, 2, "Unique descriptions");
const home = read("index.html");
assert.ok(home.indexOf('id="services"') < home.indexOf('id="industries-title"'), "Industries follows services");
assert.ok(home.indexOf('id="industries-title"') < home.indexOf('id="moffett'), "Industries precedes MOFFETT section");
for (const id of ["construction-contractors", "building-material-suppliers", "industrial-commercial"]) {
	assert.ok(home.includes(`href="/industries/#${id}"`), `Home links to ${id}`);
	assert.ok(read("industries/index.html").includes(`id="${id}"`), `Industry anchor ${id}`);
}
assert.match(home, /href="\/service-areas\/"[^>]*>View Service Areas/, "Home service-area link");
console.log("Nov-5 built-output checks passed.");
