"use client";
import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { useT } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_COUNT = 6;

export default function NewsSection() {
  const t = useT();
  const [expanded, setExpanded] = useState(false);
  const items = DATA.news;
  const hasMore = items.length > INITIAL_COUNT;
  const visibleItems = expanded ? items : items.slice(0, INITIAL_COUNT);

  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">{t(DATA.sections.news)}</h2>
      </BlurFade>
      <ul className="flex flex-col gap-2.5">
        {visibleItems.map((item, i) => (
          <BlurFade
            key={`news-${i}`}
            delay={BLUR_FADE_DELAY * 4 + i * 0.03}
          >
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm leading-relaxed">
              <time className="font-semibold tabular-nums text-foreground sm:min-w-[5.5rem] flex-none">
                {t(item.date)}
              </time>
              <div className="text-muted-foreground prose prose-sm max-w-none dark:prose-invert [&_p]:m-0 [&_em]:italic">
                <Markdown
                  components={{
                    a: ({ ...props }) => (
                      <a
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  }}
                >
                  {t(item.text)}
                </Markdown>
              </div>
            </li>
          </BlurFade>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="self-start inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform",
              expanded && "rotate-180"
            )}
          />
          {expanded
            ? t(DATA.sections.showLess)
            : t(DATA.sections.showMore)}
        </button>
      )}
    </div>
  );
}
