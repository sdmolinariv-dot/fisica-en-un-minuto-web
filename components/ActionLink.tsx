import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ActionLink({ href, children, variant = "primary", className }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-out active:translate-y-px",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan",
        variant === "primary" &&
          "bg-blue text-white hover:-translate-y-0.5 hover:bg-cyan",
        variant === "secondary" &&
          "border border-ink/20 bg-white text-ink hover:-translate-y-0.5 hover:border-blue hover:text-deep-purple",
        variant === "light" &&
          "border border-white/28 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
