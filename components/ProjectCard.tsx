import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

export function ProjectCard({ title, description, href, tag }: ProjectCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-line transition hover:-translate-y-1 hover:border-blue/24 hover:shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-bold uppercase text-blue">
            {tag}
          </span>
          <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-ink-soft transition group-hover:text-deep-purple" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p>
      </article>
    </Link>
  );
}
