import Image from "next/image";

type LogoCloudProps = {
  title: string;
  logos: Array<{
    name: string;
    image: string;
    href?: string;
  }>;
};

export function LogoCloud({ title, logos }: LogoCloudProps) {
  const slots: LogoCloudProps["logos"] = logos.length > 0 ? logos : Array.from({ length: 8 }, (_, index) => ({
    name: `Logo real ${index + 1}`,
    image: ""
  }));

  return (
    <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-violet">Colaboraciones</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            Los logos se cargan desde un arreglo editable en <code>data/site.ts</code>.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {slots.map((logo) => {
            const content = logo.image ? (
              <Image src={logo.image} alt={logo.name} width={180} height={80} className="max-h-14 w-auto object-contain" />
            ) : (
              <span className="text-center text-sm font-semibold text-ink-soft">Logo real pendiente</span>
            );

            return logo.href ? (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-24 items-center justify-center rounded-lg border border-ink/10 bg-paper px-4 transition hover:border-violet/30"
              >
                {content}
              </a>
            ) : (
              <div
                key={logo.name}
                className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-ink/14 bg-paper px-4"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
