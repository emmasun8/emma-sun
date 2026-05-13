import type { MetadataRoute } from "next";

const BASE = "https://www.ruomengsun.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/projects/fengcha-orb",
    "/projects/conference-outreach",
    "/projects/lawxllm",
  ];
  return paths.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
