type MetricCardProps = {
  value: string;
  label: string;
  detail: string;
};

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-white/14 bg-white/10 p-6 text-white shadow-line backdrop-blur">
      <p className="text-3xl font-semibold leading-tight sm:text-4xl">{value}</p>
      <h3 className="mt-2 text-base font-semibold text-mint">{label}</h3>
      <p className="mt-3 text-sm leading-6 text-white/72">{detail}</p>
    </article>
  );
}
