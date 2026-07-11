import { ImageSlot } from "@/components/ImageSlot";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { profileSections, siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Sobre mí",
  description:
    "Trayectoria de Sebastián Molina, físico y creador de Física en 1 Minuto, proyecto de divulgación científica y pensamiento crítico.",
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
              <p>
                Soy físico y creador de Física en 1 Minuto, un proyecto de divulgación científica que nació con una
                idea simple: la ciencia no debería sentirse reservada para quienes ya saben de ciencia.
              </p>
              <p>
                A través de videos, charlas, talleres, juegos y proyectos educativos, busco explicar ideas complejas de
                forma clara, entretenida y rigurosa. Una parte importante de mi trabajo también está dedicada a combatir
                la desinformación, las pseudociencias y el humo que circula en redes sociales.
              </p>
              <p>
                Actualmente desarrollo Quiri, un juego educativo gratuito, y trabajo en nuevos proyectos editoriales y
                audiovisuales relacionados con ciencia, educación y pensamiento crítico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Espacios listos para completar con información verificada."
            description="No se publican grados, premios, cargos, medios ni reconocimientos que no estén confirmados."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profileSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-line">
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{section.text}</p>
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
            url: `${siteConfig.url}/sobre-mi`
          }
        }}
      />
    </>
  );
}
