import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Física en 1 Minuto",
    template: "%s | Física en 1 Minuto"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Física en 1 Minuto: charlas y comunicación científica"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#111426",
  colorScheme: "light"
};

const sameAs = siteConfig.socialLinks.map((link) => link.href).filter(Boolean);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
      url: siteConfig.url,
      description: siteConfig.author.shortBio,
      knowsAbout: [
        "Física",
        "Divulgación científica",
        "Comunicación científica",
        "Pensamiento crítico",
        "Desinformación"
      ],
      sameAs: sameAs.length > 0 ? sameAs : undefined
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description
    }
  ];

  return (
    <html lang="es-CL">
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
