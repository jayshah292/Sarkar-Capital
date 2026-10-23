import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sarkar.capital";

  const routes = [
    "",
    "/services",
    "/services/mutual-funds",
    "/services/equities",
    "/services/fixed-income",
    "/services/insurance",
    "/calculators",
    "/about",
    "/compliance",
    "/contact",
    "/suitability",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
