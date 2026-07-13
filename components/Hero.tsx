import { ActionLink } from "@/components/ActionLink";

type HeroProps = {
  eyebrow?: string;
  title: string;
  text: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
  supportLine?: string;
  mobileMedia?: React.ReactNode;
  media: React.ReactNode;
};

export function Hero({ eyebrow, title, text, primary, secondary, supportLine, mobileMedia, media }: HeroProps) {
  return (
    <section className="hero-shell relative overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-10">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <div className="relative z-10">
          {eyebrow ? (
            <p className="mb-7 text-sm font-semibold tracking-[0.08em] text-mint">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="text-pretty mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-xl sm:leading-8">{text}</p>
          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <ActionLink href={primary.href}>{primary.label}</ActionLink>
            <ActionLink href={secondary.href} variant="light">
              {secondary.label}
            </ActionLink>
          </div>
          {supportLine ? (
            <p className="mt-9 max-w-lg border-t border-white/20 pt-4 text-sm font-medium leading-6 text-white/72">
              {supportLine}
            </p>
          ) : null}
          {mobileMedia ? <div className="hero-mobile-media">{mobileMedia}</div> : null}
        </div>
        <div className="hero-visual">
          <div className="hero-media relative">
            {media}
            <p className="absolute bottom-5 left-5 max-w-[14rem] border-l-2 border-signal bg-ink/82 px-4 py-3 text-sm font-medium leading-5 text-white backdrop-blur-sm">
              Un minuto puede abrir una pregunta que cambia cómo miras el mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
