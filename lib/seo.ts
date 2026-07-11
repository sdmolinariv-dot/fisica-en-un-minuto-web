import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({ title, description, path = "" }: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = {
    url: "/og-image.svg",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name}: charlas y comunicación científica`
  };

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_CL",
      type: "website",
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url]
    }
  };
}
