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
            Los formularios de contacto recopilan los datos que cada persona ingresa, como nombre, correo, organización,
            teléfono opcional y mensaje, con el único fin de responder consultas, solicitudes de charlas y propuestas de
            colaboración.
          </p>
          <p>
            Al enviar un formulario, la información se transmite mediante FormSubmit para entregar la consulta a
            contacto@fisicaenunminuto.com. El servicio conserva las solicitudes conforme a sus propias condiciones.
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
