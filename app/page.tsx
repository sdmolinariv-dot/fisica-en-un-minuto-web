import type { Metadata } from "next";
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
import { impactMetrics, logoCollaborations, siteConfig } from "@/data/site";

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
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Física en 1 Minuto | Charlas, divulgación y comunicación científica",
    description:
      "Charlas, talleres, campañas y proyectos de comunicación científica con Sebastián Molina, físico y creador de Física en 1 Minuto."
  }
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Física en 1 Minuto"
        title="La ciencia puede ser rigurosa sin ser difícil."
        text="Soy Sebastián Molina, físico y creador de Física en 1 Minuto. Ayudo a personas, organizaciones y marcas a comunicar ideas complejas de forma clara, entretenida y responsable."
        primary={{ label: "Ver charlas", href: "/charlas" }}
        secondary={{ label: "Trabajemos juntos", href: "/contacto" }}
        supportLine="Divulgación científica, pensamiento crítico y comunicación para una comunidad de más de 400.000 personas."
        media={
          <ImageSlot
            src={siteConfig.imageSlots.hero.src}
            aspect="portrait"
            alt={siteConfig.imageSlots.hero.alt}
            fileName={siteConfig.imageSlots.hero.fileName}
            label="Foto o video vertical de Sebastián"
          />
        }
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Qué hago"
            title="Formatos para explicar ciencia con rigor, ritmo y una voz humana."
            description="Cada línea está pensada para organizaciones que necesitan claridad sin sacrificar profundidad."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 sm:px-6 lg:px-8">
        <div className="science-panel mx-auto max-w-7xl">
          <div className="relative z-10">
            <SectionHeading
              eyebrow="Impacto"
              title="Una comunidad que conversa ciencia todos los días."
              description="Los datos están centralizados para actualizarlos cuando existan nuevas cifras verificadas."
              className="text-white [&_h2]:text-white [&_p]:text-white/72"
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="Educación, contenido y experiencias para públicos reales."
            description="Una vista editable de los proyectos principales del ecosistema Física en 1 Minuto."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
