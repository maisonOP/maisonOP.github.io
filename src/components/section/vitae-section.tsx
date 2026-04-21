"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { useT } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parseStart(en: string): number {
  const [mon, year] = en.trim().split(/\s+/);
  const mi = MONTHS.indexOf(mon);
  const y = parseInt(year, 10);
  if (Number.isNaN(y)) return 0;
  return y * 12 + (mi >= 0 ? mi : 0);
}

type Entry = {
  primary: string;
  secondary: string;
  dates: string;
  description?: string;
  side: "left" | "right";
  sortKey: number;
};

function EntryRow({ entry }: { entry: Entry }) {
  const isLeft = entry.side === "left";
  return (
    <div
      className={cn(
        "flex items-center gap-2 flex-wrap",
        isLeft ? "md:justify-end" : "md:justify-start"
      )}
    >
      {isLeft ? (
        <>
          <span className="hidden md:inline-flex text-[11px] tabular-nums text-primary bg-primary/10 rounded-md px-2 py-0.5">
            {entry.dates}
          </span>
          <span className="text-sm font-semibold border border-border rounded-md px-3 py-1 bg-background">
            {entry.primary}
          </span>
          <span className="md:hidden text-[11px] tabular-nums text-primary bg-primary/10 rounded-md px-2 py-0.5">
            {entry.dates}
          </span>
        </>
      ) : (
        <>
          <span className="text-sm font-semibold border border-border rounded-md px-3 py-1 bg-background">
            {entry.primary}
          </span>
          <span className="text-[11px] tabular-nums text-primary bg-primary/10 rounded-md px-2 py-0.5">
            {entry.dates}
          </span>
        </>
      )}
    </div>
  );
}

export default function VitaeSection() {
  const t = useT();

  const entries: Entry[] = [
    ...DATA.work.map<Entry>((w) => ({
      primary: t(w.company),
      secondary: t(w.title),
      dates: `${t(w.start)} – ${t(w.end)}`,
      description: t(w.description),
      side: "left",
      sortKey: parseStart(w.start.en),
    })),
    ...DATA.education.map<Entry>((e) => ({
      primary: t(e.school),
      secondary: t(e.degree),
      dates: `${t(e.start)} – ${t(e.end)}`,
      side: "right",
      sortKey: parseStart(e.start.en),
    })),
  ].sort((a, b) => b.sortKey - a.sortKey);

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="text-xl font-bold">{t(DATA.sections.vitae)}</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="relative">
          <div className="absolute top-0 bottom-0 w-px bg-border left-[11px] md:left-1/2 md:-translate-x-1/2" />
          <ul className="flex flex-col gap-y-10">
            {entries.map((entry, i) => {
              const isLeft = entry.side === "left";
              return (
                <li key={`${entry.primary}-${i}`} className="relative">
                  <span
                    aria-hidden
                    className="absolute z-10 size-[10px] rounded-full border-2 border-primary bg-background top-3 left-[11px] -translate-x-1/2 md:left-1/2"
                  />
                  <div
                    className={cn(
                      "pl-8 md:pl-0 md:w-1/2",
                      isLeft
                        ? "md:pr-10 md:text-right"
                        : "md:ml-auto md:pl-10 md:text-left"
                    )}
                  >
                    <EntryRow entry={entry} />
                    <div className="mt-2 text-sm font-semibold leading-snug">
                      {entry.secondary}
                    </div>
                    {entry.description && (
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {entry.description}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </BlurFade>
    </div>
  );
}
