import Link from "next/link";
import { Atom } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ActionLink } from "@/components/ActionLink";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/94 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink" aria-label="Ir al inicio">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue text-white">
            <Atom aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm">Física en</span>
            <span className="block text-lg">1 Minuto</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-deep-purple"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ActionLink href="/contacto">Cotizar una charla</ActionLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
