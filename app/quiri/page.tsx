import { Download } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ImageSlot } from "@/components/ImageSlot";
import { JsonLd } from "@/components/JsonLd";
import { QuiriFeatureCard } from "@/components/QuiriFeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { quiriFeatures } from "@/data/services";
import { quiriDownloadLinks, siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Quiri",
  description:
    "Quiri es un juego educativo gratuito de preguntas, eventos y desafíos para aprender ciencia, cultura y pensamiento crítico jugando.",
  path: "/quiri"
});

export default function QuiriPage() {
  return (
    <>
      <section className="quiri-hero overflow-hidden px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.08em] text-blue">Quiri</p>
            <h1 className="text-balance max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
              Una pregunta. Un desafío. Otra forma de aprender.
            </h1>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              Quiri convierte la curiosidad en juego: preguntas, eventos y desafíos para aprender ciencia, cultura y
              pensamiento crítico mientras avanzas y desbloqueas recompensas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {quiriDownloadLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-cyan active:translate-y-px"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" />
                    Descargar para {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="inline-flex min-h-11 items-center gap-2 rounded-md border border-ink/16 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-soft"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" />
                    {link.label}: {link.availability ?? "Próximamente"}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden="true" className="absolute inset-7 -rotate-3 bg-signal/85" />
            <ImageSlot
              src={siteConfig.imageSlots.quiriCharacter.src}
              aspect="square"
              alt={siteConfig.imageSlots.quiriCharacter.alt}
              fileName={siteConfig.imageSlots.quiriCharacter.fileName}
              label="Quiri, guía de curiosidad"
              className="quiri-mascot relative -rotate-2"
            />
            <p className="absolute -bottom-4 -left-3 bg-ink px-4 py-3 text-sm font-semibold text-white shadow-line sm:left-6">
              Aprender también puede dar ganas de seguir jugando.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Características"
            title="Una experiencia educativa pensada como juego."
            description="La experiencia está preparada para crecer con capturas y enlaces reales."
          />
          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {quiriFeatures.map((feature) => (
              <QuiriFeatureCard key={feature} title={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl justify-items-center gap-6 sm:grid-cols-2">
          <ImageSlot
            src={siteConfig.imageSlots.quiriScreenshotOne.src}
            aspect="phone"
            alt={siteConfig.imageSlots.quiriScreenshotOne.alt}
            fileName={siteConfig.imageSlots.quiriScreenshotOne.fileName}
            label="Captura real 01"
            className="w-full max-w-[22rem]"
          />
          <ImageSlot
            src={siteConfig.imageSlots.quiriScreenshotTwo.src}
            aspect="phone"
            alt={siteConfig.imageSlots.quiriScreenshotTwo.alt}
            fileName={siteConfig.imageSlots.quiriScreenshotTwo.fileName}
            label="Captura real 02"
            className="w-full max-w-[22rem]"
          />
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
