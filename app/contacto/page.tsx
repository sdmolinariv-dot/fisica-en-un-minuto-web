import { AtSign, Mail } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacto directo para charlas, colaboraciones, auspicios de Quiri, invitaciones de prensa y proyectos audiovisuales.",
  path: "/contacto"
});

const instagramLink = siteConfig.socialLinks.find((link) => link.label === "Instagram")?.href ?? "";

const contactMethods = [
  {
    label: "Correo",
    value: siteConfig.contact.email,
    detail: "Para charlas, propuestas y colaboraciones.",
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
    external: false
  },
  {
    label: "Instagram",
    value: "@fisica.en.1.minuto",
    detail: "Para conversar por mensaje directo.",
    href: instagramLink,
    icon: AtSign,
    external: true
  }
] as const;

export default function ContactoPage() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-violet">Contacto</p>
          <h1 className="text-balance mt-4 text-4xl font-semibold leading-tight text-ink sm:text-6xl">¿Hablamos?</h1>
          <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
            Para charlas, colaboraciones, entrevistas o proyectos educativos, escríbeme directamente. Respondo
            personalmente.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noreferrer" : undefined}
                className="group flex min-h-52 flex-col items-center justify-center rounded-md border border-ink/15 bg-white px-6 py-8 text-center transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-blue hover:bg-cyan/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-blue text-white transition-transform duration-200 group-hover:scale-105">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <span className="mt-5 text-xs font-bold uppercase text-violet">{method.label}</span>
                <span className="mt-2 break-all text-base font-semibold text-ink sm:text-lg">{method.value}</span>
                <span className="mt-2 text-sm leading-6 text-ink-soft">{method.detail}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
