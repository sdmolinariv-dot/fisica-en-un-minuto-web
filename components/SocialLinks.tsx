import { Camera, Music2, PlaySquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  Instagram: Camera,
  TikTok: Music2,
  YouTube: PlaySquare
};

type SocialLinksProps = {
  compact?: boolean;
};

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", compact ? "gap-2" : "gap-3")}>
      {siteConfig.socialLinks.map((link) => {
        const Icon = icons[link.label as keyof typeof icons] ?? Camera;
        const content = (
          <>
            <Icon aria-hidden="true" className="h-4 w-4" />
            <span>{link.label}</span>
          </>
        );

        return (
          <li key={link.label}>
            {link.href ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-ink/12 bg-white px-3 py-2 text-sm font-medium text-ink transition hover:border-violet/35 hover:text-deep-purple"
              >
                {content}
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-dashed border-ink/16 bg-white/62 px-3 py-2 text-sm font-medium text-ink-soft">
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
