import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://longhornfirealarmdesign.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/fire-alarm-system-design`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/permitting-assistance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/sales-support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/engineering-consulting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/code-compliance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/bid-specifications`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
