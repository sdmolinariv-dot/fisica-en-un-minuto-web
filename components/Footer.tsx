import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Ciencia clara, pensamiento crítico y comunicación responsable.
          </p>
          <p className="mt-6 text-sm text-white/58">© {year} {siteConfig.name}. Todos los derechos reservados.</p>
        </div>

        <nav aria-label="Navegación del pie de página" className="grid gap-2">
          <p className="text-sm font-semibold text-white">Navegación</p>
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/politica-de-privacidad" className="text-sm text-white/70 hover:text-white">
            Política de privacidad
          </Link>
          <Link href="/aviso-legal" className="text-sm text-white/70 hover:text-white">
            Aviso legal
          </Link>
        </nav>

        <div>
          <p className="text-sm font-semibold text-white">Redes sociales y correo</p>
          <div className="mt-4 [&_span]:border-white/18 [&_span]:bg-white/8 [&_span]:text-white/74 [&_a]:border-white/18 [&_a]:bg-white/8 [&_a]:text-white/90">
            <SocialLinks compact />
          </div>
          <a href={`mailto:${siteConfig.contact.email}`} className="mt-5 inline-flex text-sm text-white/58 hover:text-white">
            {siteConfig.contact.email || siteConfig.contact.emailLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
