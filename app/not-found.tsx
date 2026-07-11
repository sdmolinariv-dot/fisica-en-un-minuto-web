import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-lg border border-ink/10 bg-white p-8 text-center shadow-soft">
        <p className="text-sm font-bold uppercase text-violet">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">Esta página no existe.</h1>
        <p className="mt-4 text-base leading-7 text-ink-soft">
          Puedes volver al inicio o usar la navegación principal para encontrar la sección correcta.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-deep-purple"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
