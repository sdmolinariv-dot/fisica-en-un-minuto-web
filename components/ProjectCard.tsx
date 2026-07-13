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
      <article className="flex h-full min-h-64 flex-col border border-ink/12 bg-white p-6 transition-[border-color,transform,background-color] duration-200 hover:-translate-y-0.5 hover:border-blue hover:bg-mint/30">
        <div className="flex items-start justify-between gap-4">
          <span className="bg-ink px-3 py-1 text-xs font-semibold tracking-[0.06em] text-white">
            {tag}
          </span>
          <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-deep-purple" />
        </div>
        <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p>
      </article>
    </Link>
  );
}
