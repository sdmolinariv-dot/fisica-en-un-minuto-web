import { ContactForm, type ContactFormField } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { createMetadata } from "@/lib/seo";
import { budgetRanges, contactReasons, siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacto para cotizar charlas, proponer colaboraciones, auspiciar Quiri, invitaciones de prensa y proyectos audiovisuales.",
  path: "/contacto"
});

const contactFields: readonly ContactFormField[] = [
  { name: "nombre", label: "Nombre", required: true, autoComplete: "name" },
  { name: "organizacion", label: "Organización", autoComplete: "organization" },
  { name: "correo", label: "Correo", type: "email", required: true, autoComplete: "email" },
  {
    name: "motivo",
    label: "Motivo",
    type: "select",
    required: true,
    options: contactReasons
  },
  {
    name: "presupuesto",
    label: "Presupuesto",
    type: "select",
    options: budgetRanges
  },
  { name: "fechaEstimada", label: "Fecha estimada", placeholder: "Fecha, mes o periodo tentativo" },
  { name: "mensaje", label: "Mensaje", type: "textarea", required: true }
];

const contactOptions = [
  "Cotizar una charla",
  "Proponer una colaboración",
  "Auspiciar Quiri",
  "Invitaciones de prensa",
  "Proyectos audiovisuales",
  "Consultas generales"
] as const;

export default function ContactoPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-sm font-bold uppercase text-violet">Contacto</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-6xl">Conversemos</h1>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Para invitaciones que requieren preparación, traslado o participación profesional, indica si la actividad
            cuenta con presupuesto.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {contactOptions.map((option) => (
              <div key={option} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-line">
                {option}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <SectionHeading title="Redes y correo" description="Escríbeme directamente a contacto@fisicaenunminuto.com." />
            <div className="mt-5">
              <SocialLinks />
            </div>
            <a href={`mailto:${siteConfig.contact.email}`} className="mt-5 inline-flex text-sm font-semibold text-blue hover:text-deep-purple">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <ContactForm
          formName="contacto-general"
          fields={contactFields}
          submitLabel="Enviar mensaje"
          successMessage="Gracias. Tu mensaje fue enviado correctamente."
        />
      </div>
    </section>
  );
}
