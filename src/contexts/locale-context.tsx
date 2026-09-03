"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

import { isLocale, type Locale } from "@/lib/locales";

export type { Locale };

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Locale pinned by the URL (/en/, /ko/), or null on the root path. */
  routeLocale: Locale | null;
  /** Path prefix to keep internal links on the current locale route. */
  basePath: string;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = "preferred-locale";

function routeLocaleOf(pathname: string | null): Locale | null {
  if (!pathname) return null;
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : null;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const routeLocale = routeLocaleOf(pathname);
  const [preferred, setPreferred] = useState<Locale>("en");

  useEffect(() => {
    if (routeLocale) return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ko") {
        setPreferred(stored);
      }
    } catch {
      // localStorage unavailable (SSR/private mode); stick with default
    }
  }, [routeLocale]);

  const locale = routeLocale ?? preferred;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    if (routeLocale) {
      // On /en/ or /ko/ the URL is the source of truth, so switch routes.
      router.push(`/${next}/`);
      return;
    }
    setPreferred(next);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        routeLocale,
        basePath: routeLocale ? `/${routeLocale}` : "",
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export type Localized<T = string> = { en: T; ko: T };

export function pickLocale<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function useT() {
  const { locale } = useLocale();
  return <T,>(value: Localized<T>) => pickLocale(value, locale);
}
