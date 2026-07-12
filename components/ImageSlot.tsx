import Image from "next/image";
import { Atom, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  src?: string;
  alt: string;
  fileName: string;
  aspect?: "portrait" | "wide" | "square";
  label?: string;
  className?: string;
};

export function ImageSlot({ src, alt, fileName, aspect = "wide", label, className }: ImageSlotProps) {
  return (
    <div
      className={cn(
        "science-panel relative overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft",
        aspect === "portrait" && "aspect-[4/5]",
        aspect === "wide" && "aspect-[16/10]",
        aspect === "square" && "aspect-square",
        className
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 42vw, 92vw" />
      ) : (
        <div
          role="img"
          aria-label={`${alt}. Reemplazar con ${fileName}`}
          className="absolute inset-0 flex flex-col justify-between p-6"
        >
          <div className="flex items-center justify-between text-ink-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-violet/10 text-violet">
              <ImageIcon aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="rounded-full border border-ink/10 bg-white/78 px-3 py-1 text-xs font-semibold">
              Placeholder
            </span>
          </div>

          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/20" />
          <div className="absolute left-1/2 top-1/2 h-28 w-56 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border border-blue/18" />
          <div className="absolute left-[28%] top-[40%] h-3 w-3 rounded-full bg-cyan" />
          <div className="absolute right-[26%] top-[55%] h-3 w-3 rounded-full bg-violet" />
          <div className="absolute bottom-[32%] left-[45%] inline-flex h-14 w-14 items-center justify-center rounded-lg bg-ink text-white shadow-soft">
            <Atom aria-hidden="true" className="h-7 w-7" />
          </div>

          <div className="relative mt-auto">
            {label ? <p className="text-lg font-semibold text-ink">{label}</p> : null}
            <p className="mt-2 max-w-xs text-sm leading-6 text-ink-soft">Reemplazar por imagen real:</p>
            <code className="mt-2 block break-words rounded-lg bg-ink px-3 py-2 text-xs text-white">{fileName}</code>
          </div>
        </div>
      )}
    </div>
  );
}
