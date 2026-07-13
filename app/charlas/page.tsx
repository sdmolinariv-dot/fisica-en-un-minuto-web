import { ContactForm, type ContactFormField } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { TalkCard } from "@/components/TalkCard";
import { createMetadata } from "@/lib/seo";
import { talks } from "@/data/talks";
import { budgetRanges, siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Charlas y talleres",
  description:
    "Charlas y talleres de ciencia, comunicación, inteligencia artificial, pensamiento crítico y desinformación con Sebastián Molina.",
  path: "/charlas"
});

const talkFormFields: readonly ContactFormField[] = [
  { name: "nombre", label: "Nombre", required: true, autoComplete: "name" },
  { name: "organizacion", label: "Organización", required: true, autoComplete: "organization" },
  { name: "correo", label: "Correo", type: "email", required: true, autoComplete: "email" },
  { name: "telefono", label: "Teléfono opcional", type: "tel", autoComplete: "tel" },
  {
    name: "tipoOrganizacion",
    label: "Tipo de organización",
    type: "select",
    required: true,
    options: ["Empresa", "Universidad", "Colegio", "Medio", "Fundación", "Institución pública", "Otra"]
  },
  {
    name: "charlaInteres",
    label: "Charla de interés",
    type: "select",
    required: true,
    options: [...talks.map((talk) => talk.title), "Charla personalizada", "Aún no lo sé"]
  },
  {
    name: "modalidad",
    label: "Modalidad",
    type: "select",
    required: true,
    options: ["Presencial", "Online", "Híbrida", "A definir"]
  },
  { name: "ciudad", label: "Ciudad", placeholder: "Ciudad o región de la actividad" },
  { name: "fechaEstimada", label: "Fecha estimada", placeholder: "Fecha, mes o periodo tentativo" },
  {
    name: "asistentes",
    label: "Cantidad aproximada de asistentes",
    placeholder: "Ej: 80 personas, curso completo, equipo interno"
  },
  {
    name: "presupuesto",
    label: "Presupuesto disponible",
    type: "select",
    required: true,
    options: budgetRanges
  },
  { name: "mensaje", label: "Mensaje", type: "textarea", required: true }
];

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

      <section id="cotizar-charla" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Actividad a medida"
              title="También puedo desarrollar una charla personalizada"
              description="Si tu organización necesita abordar un tema específico de ciencia, tecnología, pensamiento crítico, comunicación o desinformación, podemos diseñar una actividad a medida."
            />
          </div>
          <ContactForm
            formName="cotizacion-charlas"
            fields={talkFormFields}
            submitLabel="Cotizar esta charla"
            successMessage="Gracias. Tu solicitud fue enviada correctamente."
          />
        </div>
      </section>

      <CTASection
        title="Una buena charla no solo informa: cambia la conversación."
        text="Si tienes un público, un objetivo y una idea difícil de explicar, podemos convertirla en una actividad clara y memorable."
        buttonLabel="Ir a contacto"
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
