export type Locale = "en" | "ko";

export const LOCALES: Locale[] = ["en", "ko"];

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ko";
}
