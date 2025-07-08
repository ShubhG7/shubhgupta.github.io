import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://shubhgupta.com";
  const filePath = path.join(process.cwd(), "src/data/projects.json");
  const data = await fs.readFile(filePath, "utf-8");
  const projects = JSON.parse(data);
  const urls = [
    "",
    "/projects",
    "/resume",
    ...projects.map((p: any) => `/projects/${p.id}`),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (url) => `<url><loc>${baseUrl}${url}</loc></url>`
    )
    .join("\n")}
</urlset>`;
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 