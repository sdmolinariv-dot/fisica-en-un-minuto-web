import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clapperboard,
  Gamepad2,
  Mic,
  Puzzle,
  Share2,
  Sparkles,
  Users,
  Video
} from "lucide-react";

const icons = {
  BookOpen,
  Clapperboard,
  Gamepad2,
  Mic,
  Puzzle,
  Share2,
  Sparkles,
  Users,
  Video
};

type ServiceCardProps = {
  title: string;
  description?: string;
  href?: string;
  icon?: string;
  items?: readonly string[];
  id?: string;
};

export function ServiceCard({ title, description, href, icon = "Sparkles", items, id }: ServiceCardProps) {
  const Icon = icons[icon as keyof typeof icons] ?? Sparkles;

  const card = (
    <article
      id={id}
      className="group h-full rounded-lg border border-ink/10 bg-white/86 p-6 shadow-line transition hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet/10 text-violet">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p> : null}
      {items && items.length > 0 ? (
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink-soft">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-deep-purple">
          Ver sección
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      ) : null}
    </article>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  ) : (
    card
  );
}
