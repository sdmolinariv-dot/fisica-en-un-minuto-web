import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold tracking-[0.08em] text-blue">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="text-pretty mt-4 text-base leading-7 text-ink-soft sm:text-lg">{description}</p> : null}
    </div>
  );
}
