import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Política de privacidad",
  description: "Política de privacidad editable para Física en 1 Minuto.",
  path: "/politica-de-privacidad"
});

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-ink/10 bg-white p-8 shadow-line">
        <p className="mb-4 text-sm font-bold uppercase text-violet">Privacidad</p>
        <h1 className="text-4xl font-semibold text-ink">Política de privacidad</h1>
        <div className="mt-6 grid gap-5 text-base leading-7 text-ink-soft">
          <p>
            Esta primera versión del sitio incluye formularios en modo demostración. Los datos ingresados no se envían a
            un backend mientras no se configure un endpoint real.
          </p>
          <p>
            Si se conecta un servicio de formularios, correo o analítica, esta página debe actualizarse indicando qué
            datos se recopilan, con qué finalidad, durante cuánto tiempo se conservan y cómo solicitar su eliminación.
          </p>
          <p>
            No se deben publicar claves privadas ni credenciales en el frontend. Cualquier integración sensible debe
            pasar por un servicio seguro o una API propia.
          </p>
        </div>
      </div>
    </section>
  );
}
