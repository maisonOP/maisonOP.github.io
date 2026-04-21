"use client";

import { useLocale } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const next = locale === "en" ? "ko" : "en";
  const label = locale === "en" ? "EN" : "KO";
  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={`Switch language to ${next.toUpperCase()}`}
      className={cn(
        "text-xs font-semibold tabular-nums text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      {label}
    </button>
  );
}
