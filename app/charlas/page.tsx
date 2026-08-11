import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Charlas a medida",
  description:
    "Charlas y talleres de comunicación científica diseñados a medida según el público, el objetivo y el contexto de cada organización.",
  path: "/charlas"
});

const conversationPoints = [
  {
    title: "Partimos por tu audiencia",
    text: "Definimos a quién queremos llegar, qué sabe ya y qué conversación vale la pena abrir."
  },
  {
    title: "Aterrizamos el objetivo",
    text: "Transformamos una necesidad concreta en una experiencia clara, rigurosa y memorable."
  },
  {
    title: "Elegimos el mejor formato",
    text: "Charla, taller o conversación; presencial, online o híbrida, según lo que funcione para tu contexto."
  }
] as const;

export default function CharlasPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase text-violet">Charlas a medida</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              Una charla puede cambiar la forma en que una audiencia conversa sobre ciencia.
            </h1>
            <p className="text-pretty mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
              Diseño cada encuentro desde cero junto a tu organización, para que el contenido responda al público, al
              objetivo y al momento que quieren construir.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Una conversación bien diseñada"
            title="Construyamos la charla que tu audiencia necesita."
            description="No trabajo con un catálogo cerrado: la propuesta nace de lo que tu institución, equipo o comunidad necesita comunicar."
          />
          <div className="border-t border-ink/15">
            {conversationPoints.map((point) => (
              <article key={point.title} className="border-b border-ink/15 py-6 first:pt-0">
                <h2 className="text-xl font-semibold text-ink">{point.title}</h2>
                <p className="mt-2 max-w-2xl text-base leading-7 text-ink-soft">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tienes una idea, un público o una pregunta que vale la pena explicar?"
        text="Escríbeme y conversemos una charla a medida para tu organización."
        buttonLabel="Conversemos"
        href="/contacto"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Charlas a medida de comunicación científica",
          provider: {
            "@type": "Person",
            name: siteConfig.author.name
          },
          areaServed: "Chile",
          serviceType: ["Charlas a medida", "Talleres", "Conversaciones científicas"],
          url: `${siteConfig.url}/charlas`
        }}
      />
    </>
  );
}
