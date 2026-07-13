import { CheckCircle2 } from "lucide-react";

type QuiriFeatureCardProps = {
  title: string;
};

export function QuiriFeatureCard({ title }: QuiriFeatureCardProps) {
  return (
    <article className="flex min-h-20 items-center gap-4 border-t border-ink/15 pt-5">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-mint text-blue">
        <CheckCircle2 aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="text-base font-semibold tracking-[-0.01em] text-ink">{title}</h3>
    </article>
  );
}
