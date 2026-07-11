import { Download } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ImageSlot } from "@/components/ImageSlot";
import { JsonLd } from "@/components/JsonLd";
import { MetricCard } from "@/components/MetricCard";
import { QuiriFeatureCard } from "@/components/QuiriFeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { quiriFeatures } from "@/data/services";
import { quiriDownloadLinks, quiriStats, siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Quiri",
  description:
    "Quiri es un juego educativo gratuito de preguntas, eventos y desafíos para aprender ciencia, cultura y pensamiento crítico jugando.",
  path: "/quiri"
});

export default function QuiriPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase text-violet">Quiri</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Aprender jugando también puede sentirse como jugar de verdad.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
              Quiri es un juego de preguntas, eventos y desafíos donde las personas pueden aprender ciencia, cultura y
              pensamiento crítico mientras avanzan, compiten y desbloquean recompensas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {quiriDownloadLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-deep-purple"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" />
                    Descargar para {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-dashed border-ink/16 bg-white px-5 py-3 text-sm font-semibold text-ink-soft"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" />
                    Enlace {link.label} pendiente
                  </span>
                )
              )}
            </div>
          </div>
          <ImageSlot
            src={siteConfig.imageSlots.quiriCharacter.src}
            aspect="square"
            alt={siteConfig.imageSlots.quiriCharacter.alt}
            fileName={siteConfig.imageSlots.quiriCharacter.fileName}
            label="Imagen de Quiri"
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Características"
            title="Una experiencia educativa pensada como juego."
            description="La información está preparada para crecer con capturas, estadísticas y enlaces reales."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quiriFeatures.map((feature) => (
              <QuiriFeatureCard key={feature} title={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1fr_1fr_0.72fr]">
          <ImageSlot
            src={siteConfig.imageSlots.quiriScreenshotOne.src}
            alt={siteConfig.imageSlots.quiriScreenshotOne.alt}
            fileName={siteConfig.imageSlots.quiriScreenshotOne.fileName}
            label="Captura real 01"
          />
          <ImageSlot
            src={siteConfig.imageSlots.quiriScreenshotTwo.src}
            alt={siteConfig.imageSlots.quiriScreenshotTwo.alt}
            fileName={siteConfig.imageSlots.quiriScreenshotTwo.fileName}
            label="Captura real 02"
          />
          <ImageSlot
            src={siteConfig.imageSlots.quiriQr.src}
            aspect="square"
            alt={siteConfig.imageSlots.quiriQr.alt}
            fileName={siteConfig.imageSlots.quiriQr.fileName}
            label="Código QR"
          />
        </div>
      </section>

      <section className="bg-ink px-4 py-16 sm:px-6 lg:px-8">
        <div className="science-panel mx-auto max-w-7xl text-white">
          <div className="relative z-10">
            <SectionHeading
              eyebrow="Estadísticas editables"
              title="Datos preparados para actualizarse con métricas reales."
              className="text-white [&_h2]:text-white"
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {quiriStats.map((stat) => (
                <MetricCard key={stat.label} value={stat.value} label={stat.label} detail="Campo listo para editar en data/site.ts." />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Lleva tu marca a una experiencia educativa"
        text="Las organizaciones pueden patrocinar eventos temáticos, desarrollar contenido educativo y crear experiencias especiales dentro de Quiri, acompañadas de difusión desde Física en 1 Minuto."
        buttonLabel="Solicitar propuesta para Quiri"
        href="/contacto"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Quiri",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Android, iOS",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CLP"
          },
          description:
            "Juego educativo gratuito de preguntas, eventos y desafíos sobre ciencia, cultura y pensamiento crítico.",
          url: `${siteConfig.url}/quiri`
        }}
      />
    </>
  );
}
