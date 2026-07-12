import { Clock3, MapPin, Wrench } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";

type TalkCardProps = {
  title: string;
  description: string;
  audience: readonly string[];
  duration: string;
  modality: string;
  workshop: string;
};

export function TalkCard({ title, description, audience, duration, modality, workshop }: TalkCardProps) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-line">
      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-ink">{title}</h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">{description}</p>
          <div className="mt-5">
            <p className="text-sm font-semibold text-ink">Público recomendado</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {audience.map((item) => (
                <span key={item} className="rounded-full bg-violet/10 px-3 py-1 text-sm font-medium text-deep-purple">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-paper p-5">
          <ul className="grid gap-4 text-sm text-ink-soft">
            <li className="flex gap-3">
              <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
              <span>
                <strong className="block text-ink">Duración sugerida</strong>
                {duration}
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
              <span>
                <strong className="block text-ink">Modalidad</strong>
                {modality}
              </span>
            </li>
            <li className="flex gap-3">
              <Wrench aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
              <span>
                <strong className="block text-ink">Formato</strong>
                {workshop}
              </span>
            </li>
          </ul>
          <ActionLink href="#cotizar-charla" className="mt-6 w-full">
            Cotizar esta charla
          </ActionLink>
        </div>
      </div>
    </article>
  );
}
