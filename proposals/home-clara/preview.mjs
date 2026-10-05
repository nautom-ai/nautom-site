import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

// Local-only design review. Nothing is added to the production application.
const proposalRoot = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(proposalRoot, "../..");
const port = Number(process.env.PROPOSAL_PORT || 3011);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ttf": "font/ttf",
};

const server = createServer(async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
    res.setHeader("X-Content-Type-Options", "nosniff");

    if (pathname === "/brand.css") {
      const css = await readFile(resolve(repoRoot, "src/app/globals.css"), "utf8");
      const tokens = css.match(/@theme inline\s*\{([\s\S]*?)\}/)?.[1];
      if (!tokens) throw new Error("Brand tokens not found");
      res.writeHead(200, { "Content-Type": mime[".css"] });
      res.end(req.method === "HEAD" ? undefined : `:root {${tokens}}`);
      return;
    }

    let file;
    if (["/", "/index.html", "/styles.css", "/interaction.js"].includes(pathname)) {
      file = resolve(proposalRoot, pathname === "/" ? "index.html" : pathname.slice(1));
    } else {
      const isFont = pathname.startsWith("/fonts/");
      const isAsset = pathname.startsWith("/assets/");
      if (!isFont && !isAsset) {
        res.writeHead(404).end("Not found");
        return;
      }
      const root = resolve(repoRoot, isFont ? "src/app/fonts" : "public");
      file = resolve(root, pathname.slice(isFont ? 7 : 8));
      if (!file.startsWith(root + sep)) {
        res.writeHead(404).end("Not found");
        return;
      }
    }

    let data = await readFile(file);
    if (extname(file) === ".html") {
      const site = await readFile(resolve(repoRoot, "src/lib/site.ts"), "utf8");
      const siteUrl = site.match(/export const SITE_URL = "([^"]+)"/)?.[1];
      if (!siteUrl) throw new Error("SITE_URL not found");
      data = Buffer.from(data.toString().replaceAll("{{SITE_URL}}", siteUrl));
    }
    res.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
    res.end(req.method === "HEAD" ? undefined : data);
  } catch (error) {
    res.writeHead(error.code === "ENOENT" ? 404 : 500).end("Preview unavailable");
    if (error.code !== "ENOENT") console.error(error);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Nautom · propuesta visual: http://localhost:${port}`);
});
