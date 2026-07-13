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
      className="group h-full border-t border-ink/15 bg-white px-1 pb-3 pt-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-blue"
    >
      <div className="mb-6 inline-flex h-10 w-10 items-center justify-center bg-mint text-blue">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p> : null}
      {items && items.length > 0 ? (
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink-soft">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
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
