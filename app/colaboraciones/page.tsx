import { AlertTriangle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { createMetadata } from "@/lib/seo";
import { collaborationMethod, collaborationServices } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Colaboraciones y contenido para marcas",
  description:
    "Campañas, series educativas, proyectos audiovisuales, charlas e integraciones en Quiri con rigor científico y transparencia.",
  path: "/colaboraciones"
});

export default function ColaboracionesPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase text-violet">Colaboraciones</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Contenido científico que las personas realmente quieren ver.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
              Desarrollo campañas y proyectos con marcas que buscan comunicar tecnología, educación, innovación, salud,
              sostenibilidad o conocimiento de forma clara y responsable.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Servicios"
            title="Formatos comerciales con transparencia editorial."
            description="Cada propuesta se diseña alrededor del objetivo de la marca, el público y la evidencia disponible."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {collaborationServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Metodología"
            title="Un proceso claro desde el objetivo hasta el reporte."
            description="La estructura permite mantener ritmo creativo, revisión científica y expectativas comerciales ordenadas."
          />
          <ol className="grid gap-3 sm:grid-cols-2">
            {collaborationMethod.map((step, index) => (
              <li key={step} className="rounded-lg border border-ink/10 bg-white p-5 shadow-line">
                <span className="text-sm font-bold text-violet">0{index + 1}</span>
                <p className="mt-2 text-lg font-semibold text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-amber-300/70 bg-amber-50 p-6 text-amber-950 shadow-line">
          <div className="flex flex-col gap-4 sm:flex-row">
            <AlertTriangle aria-hidden="true" className="h-6 w-6 shrink-0" />
            <p className="text-base font-semibold leading-7">
              Todas las colaboraciones comerciales se identifican de manera transparente. No trabajo con productos o
              afirmaciones que contradigan la evidencia científica.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tienes una idea para comunicar ciencia con tu marca?"
        text="Escríbeme directamente con el contexto de tu propuesta y vemos juntos el mejor formato para desarrollarla."
        buttonLabel="Hablemos de tu proyecto"
        href="/contacto"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Colaboraciones de comunicación científica para marcas",
          provider: {
            "@type": "Person",
            name: siteConfig.author.name
          },
          serviceType: collaborationServices.map((service) => service.title),
          url: `${siteConfig.url}/colaboraciones`
        }}
      />
    </>
  );
}
