import { CheckCircle2 } from "lucide-react";

type QuiriFeatureCardProps = {
  title: string;
};

export function QuiriFeatureCard({ title }: QuiriFeatureCardProps) {
  return (
    <article className="flex min-h-24 items-center gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-line">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
        <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
      </span>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
    </article>
  );
}
