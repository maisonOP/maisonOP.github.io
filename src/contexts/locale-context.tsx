"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "ko";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = "preferred-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ko") {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable (SSR/private mode); stick with default
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
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
