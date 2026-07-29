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
  if (logos.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-ink/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-blue">Colaboraciones</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">{title}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink-soft">Cada colaboración empieza con una pregunta bien formulada y termina con ciencia que llega a quien importa.</p>
        </div>

        <div className="mt-9 grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-4">
          {logos.map((logo) => {
            const content = logo.image ? (
              <Image src={logo.image} alt={logo.name} width={180} height={80} className="max-h-14 w-auto object-contain" />
            ) : (
              <span className="text-center text-sm font-semibold tracking-[-0.01em] text-ink-soft">{logo.name}</span>
            );

            return logo.href ? (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-24 items-center justify-center border-b border-r border-ink/10 bg-paper px-4 transition-colors hover:bg-mint/35"
              >
                {content}
              </a>
            ) : (
              <div
                key={logo.name}
                className="flex min-h-24 items-center justify-center border-b border-r border-ink/10 bg-paper px-4"
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
