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
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan",
        variant === "primary" &&
          "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-deep-purple",
        variant === "secondary" &&
          "border border-ink/15 bg-white/78 text-ink hover:-translate-y-0.5 hover:border-violet/40 hover:text-deep-purple",
        variant === "light" &&
          "border border-white/24 bg-white text-ink hover:-translate-y-0.5 hover:bg-mint",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
