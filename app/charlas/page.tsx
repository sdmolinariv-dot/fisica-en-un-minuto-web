import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { TalkCard } from "@/components/TalkCard";
import { createMetadata } from "@/lib/seo";
import { talks } from "@/data/talks";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Charlas y talleres",
  description:
    "Charlas y talleres de ciencia, comunicación, inteligencia artificial, pensamiento crítico y desinformación con Sebastián Molina.",
  path: "/charlas"
});

export default function CharlasPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase text-violet">Charlas</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Charlas que hacen que la ciencia se entienda, se recuerde y se converse.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
              Cada charla se adapta al público, contexto y objetivo de la organización. Pueden realizarse de forma
              presencial u online, en formato charla, conversación o taller.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">
          {talks.map((talk) => (
            <TalkCard key={talk.title} {...talk} />
          ))}
        </div>
      </section>

      <CTASection
        title="Una buena charla no solo informa: cambia la conversación."
        text="Cuéntame sobre tu público, tu objetivo y la idea que quieres explicar. Coordinamos directamente por correo o Instagram."
        buttonLabel="Cotizar una charla"
        href="/contacto"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Charlas y talleres de comunicación científica",
          provider: {
            "@type": "Person",
            name: siteConfig.author.name
          },
          areaServed: "Chile",
          serviceType: talks.map((talk) => talk.title),
          url: `${siteConfig.url}/charlas`
        }}
      />
    </>
  );
}
