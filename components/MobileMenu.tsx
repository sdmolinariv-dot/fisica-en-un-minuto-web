"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-line"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-20 rounded-lg border border-ink/12 bg-white p-4 shadow-soft"
        >
          <nav aria-label="Navegación móvil" className="grid gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-mint/60"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-3 rounded-md bg-blue px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Cotizar una charla
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
