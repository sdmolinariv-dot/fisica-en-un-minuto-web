import type { Metadata } from "next";
import { Atom } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ImageSlot } from "@/components/ImageSlot";
import { JsonLd } from "@/components/JsonLd";
import { LogoCloud } from "@/components/LogoCloud";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { featuredProjects } from "@/data/projects";
import { homeServices } from "@/data/services";
import { impactBreakdown, impactMetrics, logoCollaborations, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Física en 1 Minuto | Charlas, divulgación y comunicación científica"
  },
  description:
    "Charlas, talleres, campañas y proyectos de comunicación científica con Sebastián Molina, físico y creador de Física en 1 Minuto.",
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "Física en 1 Minuto | Charlas, divulgación y comunicación científica",
    description:
      "Charlas, talleres, campañas y proyectos de comunicación científica con Sebastián Molina, físico y creador de Física en 1 Minuto.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Física en 1 Minuto: charlas, divulgación y comunicación científica"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Física en 1 Minuto | Charlas, divulgación y comunicación científica",
    description:
      "Charlas, talleres, campañas y proyectos de comunicación científica con Sebastián Molina, físico y creador de Física en 1 Minuto.",
    images: ["/og.png"]
  }
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Física en 1 Minuto"
        title="La física no es difícil. Es una historia por contar."
        text="Soy Sebastián Molina, físico y creador de Física en 1 Minuto. Convierto ideas complejas en historias claras, entretenidas y responsables."
        primary={{ label: "Ver charlas", href: "/charlas" }}
        secondary={{ label: "Trabajemos juntos", href: "/contacto" }}
        supportLine="425.296 personas ya hacen de la curiosidad una conversación."
        mobileMedia={
          <div className="home-mobile-identity">
            <ImageSlot
              src={siteConfig.imageSlots.speaking.src}
              aspect="portrait"
              alt={siteConfig.imageSlots.speaking.alt}
              fileName={siteConfig.imageSlots.speaking.fileName}
              className="home-mobile-portrait"
              imageClassName="object-[50%_14%]"
            />
            <p>
              <span>Sebastián Molina</span>
              Físico y creador de Física en 1 Minuto.
            </p>
          </div>
        }
        media={
          <div className="home-hero-collage">
            <ImageSlot
              src={siteConfig.imageSlots.hero.src}
              aspect="wide"
              alt={siteConfig.imageSlots.hero.alt}
              fileName={siteConfig.imageSlots.hero.fileName}
              className="home-hero-primary"
              imageClassName="object-[50%_56%]"
            />
            <div aria-hidden="true" className="home-physics-marks">
              <span className="home-physics-formula home-physics-formula-force">F = ma</span>
              <span className="home-physics-formula home-physics-formula-motion">v = dx / dt</span>
              <Atom className="home-physics-atom" strokeWidth={1.4} />
            </div>
            <div className="home-hero-portrait">
              <ImageSlot
                src={siteConfig.imageSlots.speaking.src}
                aspect="portrait"
                alt={siteConfig.imageSlots.speaking.alt}
                fileName={siteConfig.imageSlots.speaking.fileName}
                imageClassName="object-[50%_14%]"
              />
            </div>
            <p className="home-hero-name">
              <span>Sebastián Molina</span>
              Físico y comunicador científico
            </p>
          </div>
        }
      />

      <section className="page-band bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Qué hago"
            title="Explicar bien es hacer que una idea tenga lugar en la cabeza de alguien."
            description="Charlas, contenido, proyectos educativos y audiovisuales para organizaciones que necesitan claridad sin sacrificar profundidad."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div>
            <SectionHeading
              eyebrow="Métricas · corte al 28 de julio de 2026"
              title="Una comunidad que llega por curiosidad y se queda por la ciencia."
              description="Resultados de los últimos 30 días en Instagram: 29 de junio al 28 de julio de 2026."
              className="text-white [&_h2]:text-white [&_p]:text-white/72"
            />
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
            <div className="mt-14 grid border-y border-white/20 sm:grid-cols-2 lg:grid-cols-4">
              {impactBreakdown.map((metric) => (
                <div key={metric.label} className="py-6 sm:pr-6 lg:py-7">
                  <p className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-mint">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-white/60">
              Datos reportados por el panel profesional de Instagram. Las cifras de visualizaciones, alcance,
              seguidores y crecimiento corresponden al período indicado; los seguidores reflejan el registro al 28 de julio.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="La ciencia viaja mejor cuando encuentra el formato correcto."
            description="Educación, contenido y experiencias creadas para públicos reales, con objetivos reales."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <LogoCloud
        title="Organizaciones y proyectos con los que he trabajado"
        logos={logoCollaborations}
      />

      <CTASection
        title="¿Necesitas explicar algo importante sin perder a tu audiencia?"
        text="Podemos desarrollar una charla, campaña, taller o proyecto científico adaptado a tus objetivos."
        buttonLabel="Conversemos"
        href="/contacto"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            "@type": "Person",
            name: siteConfig.author.name
          }
        }}
      />
    </>
  );
}
