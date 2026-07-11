import { ImageSlot } from "@/components/ImageSlot";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { aboutIntroParagraphs, profileHighlights, profileSections, siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Sobre mí",
  description:
    "Trayectoria de Sebastián Molina: físico PUC, creador de Física en 1 Minuto, comunicador científico, desarrollador de Quiri y autor en desarrollo con Editorial Planeta.",
  path: "/sobre-mi"
});

export default function SobreMiPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageSlot
            src={siteConfig.imageSlots.speaking.src}
            aspect="portrait"
            alt={siteConfig.imageSlots.speaking.alt}
            fileName={siteConfig.imageSlots.speaking.fileName}
            label="Fotografía profesional"
          />
          <div>
            <p className="mb-4 text-sm font-bold uppercase text-violet">Sobre mí</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-6xl">Soy Sebastián Molina.</h1>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-ink-soft">
              {aboutIntroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profileHighlights.map((highlight) => (
            <article key={highlight.label} className="rounded-lg border border-white/14 bg-white/10 p-5">
              <p className="text-3xl font-semibold text-mint">{highlight.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/72">{highlight.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Una trayectoria entre física, docencia, datos y comunicación pública."
            description="Información complementada desde el CV, traducida y resumida para una lectura pública. No se incluyen datos personales sensibles."
          />
          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            {profileSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-line">
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{section.text}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink-soft">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: siteConfig.author.name,
            jobTitle: siteConfig.author.role,
            url: `${siteConfig.url}/sobre-mi`,
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Pontificia Universidad Católica de Chile"
            },
            knowsAbout: [
              "Física",
              "Comunicación científica",
              "Pensamiento crítico",
              "Desinformación",
              "Estadística",
              "Riesgo financiero"
            ]
          }
        }}
      />
    </>
  );
}
