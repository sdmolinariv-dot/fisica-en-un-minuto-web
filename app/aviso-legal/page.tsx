import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Aviso legal",
  description: "Aviso legal editable para Física en 1 Minuto.",
  path: "/aviso-legal"
});

export default function AvisoLegalPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-ink/10 bg-white p-8 shadow-line">
        <p className="mb-4 text-sm font-bold uppercase text-violet">Aviso legal</p>
        <h1 className="text-4xl font-semibold text-ink">Aviso legal</h1>
        <div className="mt-6 grid gap-5 text-base leading-7 text-ink-soft">
          <p>
            El contenido de este sitio tiene fines informativos, educativos y comerciales vinculados a charlas,
            colaboraciones y proyectos de comunicación científica.
          </p>
          <p>
            Las colaboraciones comerciales deben identificarse de forma transparente. No se aceptan productos,
            servicios o afirmaciones que contradigan la evidencia científica disponible.
          </p>
          <p>
            Esta página puede complementarse con condiciones de contratación, uso de marca, derechos de contenido y
            datos legales específicos cuando estén disponibles.
          </p>
        </div>
      </div>
    </section>
  );
}
