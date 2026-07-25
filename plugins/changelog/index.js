import fs from "fs-extra";
import path from "node:path";

const persianDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function formatPersianDate(date) {
  return persianDateFormatter.format(new Date(`${date}T00:00:00Z`));
}

function parseEntries(content) {
  return content
    .split(/(?=^##\s+)/m)
    .map((section) => {
      const match = section.match(/^##\s+(.+?)\s+\((\d{4}-\d{2}-\d{2})\)\s*$/m);
      if (!match) return null;
      return {
        title: match[1],
        date: match[2],
        body: section.replace(match[0], "").trim(),
      };
    })
    .filter(Boolean);
}

function badgeClass(label) {
  if (/افزود|جدید/.test(label)) return "changelog-badge--added";
  if (/رفع|اصلاح/.test(label)) return "changelog-badge--fixed";
  if (/حذف/.test(label)) return "changelog-badge--removed";
  return "changelog-badge--changed";
}

function renderBody(body) {
  const sections = [...body.matchAll(/(?:^|\n)###\s+([^\n]+)\n([\s\S]*?)(?=\n###\s|$)/g)];
  if (sections.length === 0) return body;

  return sections
    .map(([, label, sectionBody]) => {
      const lines = sectionBody.trim().split("\n");
      const items = lines.filter((line) => /^-\s+/.test(line));
      const remainder = lines.filter((line) => !/^-\s+/.test(line)).join("\n").trim();
      const list = items
        .map(
          (item) =>
            `- <span className="changelog-badge ${badgeClass(label)}">${label}</span> ${item.replace(/^-\s+/, "")}`,
        )
        .join("\n");
      return [list, remainder].filter(Boolean).join("\n\n");
    })
    .join("\n\n");
}

function renderLatest({ title, date, body }) {
  return `<article className="changelog-release changelog-release--latest">
  <header className="changelog-release__header">
    <h3>نسخه ${title}</h3>
    <span className="changelog-release__date">انتشار: <time dateTime="${date}">${formatPersianDate(date)}</time></span>
  </header>

${renderBody(body)}

</article>`;
}

function renderOlder({ title, date, body }) {
  return `<details className="changelog-release changelog-release--collapsed">
  <summary className="changelog-release__summary">
    <span className="changelog-release__version">نسخه ${title}</span>
    <span className="changelog-release__date">انتشار: <time dateTime="${date}">${formatPersianDate(date)}</time></span>
  </summary>
  <div className="changelog-release__body">

${renderBody(body)}

  </div>
</details>`;
}

function createDoc(product, content) {
  const entries = parseEntries(content);
  const releases = entries.length
    ? `## آخرین نسخه\n\n${renderLatest(entries[0])}\n\n${entries
        .slice(1)
        .map(renderOlder)
        .join("\n\n")}`
    : "هنوز تغییری برای این محصول ثبت نشده است.";

  return `---
title: "${product.title}"
description: "${product.description}"
slug: /${product.slug}/changelog
---

${releases}
`;
}

export default async function changelogPlugin(context, options) {
  const products = options.products ?? [];

  // Plugin factories run before content loading, so the docs plugin discovers
  // these generated pages in the same build.
  await Promise.all(
    products.map(async (product) => {
      const source = path.join(context.siteDir, product.source);
      const output = path.join(
        context.siteDir,
        "docs",
        product.slug,
        "changelog.mdx",
      );
      const content = await fs.readFile(source, "utf8");
      await fs.outputFile(output, createDoc(product, content));
    }),
  );

  return {
    name: "multi-product-changelog-plugin",
    getPathsToWatch: () =>
      products.map((product) => path.join(context.siteDir, product.source)),
  };
}
