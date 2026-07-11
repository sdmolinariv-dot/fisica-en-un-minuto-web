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
  media: React.ReactNode;
};

export function Hero({ eyebrow, title, text, primary, secondary, supportLine, media }: HeroProps) {
  return (
    <section className="overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-18 lg:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
        <div className="animate-fade-up">
          {eyebrow ? (
            <p className="mb-5 inline-flex rounded-full border border-violet/20 bg-white/75 px-4 py-2 text-sm font-bold uppercase text-violet shadow-line">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={primary.href}>{primary.label}</ActionLink>
            <ActionLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ActionLink>
          </div>
          {supportLine ? (
            <p className="mt-7 max-w-xl border-l-4 border-cyan pl-4 text-sm font-medium leading-6 text-ink-soft">
              {supportLine}
            </p>
          ) : null}
        </div>
        <div className="animate-fade-up [animation-delay:120ms]">{media}</div>
      </div>
    </section>
  );
}
