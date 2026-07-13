type MetricCardProps = {
  value: string;
  label: string;
  detail: string;
};

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <article className="border-t border-white/30 pt-5 text-white">
      <p className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">{value}</p>
      <h3 className="mt-2 text-base font-semibold text-mint">{label}</h3>
      <p className="mt-3 max-w-xs text-sm leading-6 text-white/72">{detail}</p>
    </article>
  );
}
