"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";
import { useT, type Localized } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";
import { BookOpen } from "lucide-react";
import { Fragment } from "react";

type Author = { name: string; self?: boolean };
type Publication = {
  title: Localized<string>;
  authors: readonly Author[];
  venue: Localized<string>;
  date: Localized<string>;
};

function PublicationGroup({
  headline,
  items,
}: {
  headline: Localized<string>;
  items: readonly Publication[];
}) {
  const t = useT();
  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-sm font-medium text-muted-foreground text-center tracking-wide uppercase">
        {t(headline)}
      </h3>
      <Timeline>
        {items.map((pub) => {
          const title = t(pub.title);
          return (
            <TimelineItem
              key={title + t(pub.date)}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex items-center justify-center flex-none">
                  <BookOpen className="size-4 text-muted-foreground" />
                </div>
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-1.5 min-w-0">
                <time className="text-xs text-muted-foreground tabular-nums">
                  {t(pub.date)}
                </time>
                <h4 className="font-semibold leading-snug text-pretty">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.authors.map((a, i) => (
                    <Fragment key={`${a.name}-${i}`}>
                      {i > 0 && ", "}
                      {a.self ? (
                        <span className="font-semibold text-foreground">
                          {a.name}
                        </span>
                      ) : (
                        a.name
                      )}
                    </Fragment>
                  ))}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {t(pub.venue)}
                </p>
              </div>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}

export default function ResearchSection() {
  const t = useT();
  return (
    <section id="research" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-10 w-full">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">
              {t(DATA.sections.publications)}
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <PublicationGroup
          headline={DATA.sections.publicationsHeadline}
          items={DATA.publications}
        />
        <PublicationGroup
          headline={DATA.sections.socialSciencePublicationsHeadline}
          items={DATA.socialSciencePublications}
        />
      </div>
    </section>
  );
}
