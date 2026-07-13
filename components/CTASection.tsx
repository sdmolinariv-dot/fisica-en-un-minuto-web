import { ActionLink } from "@/components/ActionLink";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export function CTASection({ title, text, buttonLabel, href }: CTASectionProps) {
  return (
    <section className="bg-blue px-4 py-16 sm:px-6 lg:px-8">
      <div className="science-panel mx-auto max-w-7xl text-white">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-balance max-w-3xl text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">{text}</p>
          </div>
          <ActionLink href={href} variant="light">
            {buttonLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
