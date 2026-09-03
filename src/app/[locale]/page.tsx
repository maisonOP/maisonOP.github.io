import ResumePage from "@/components/resume-page";
import { LOCALES, isLocale, type Locale } from "@/lib/locales";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

type Params = { locale: string };

export function generateStaticParams(): Params[] {
  return LOCALES.map((locale) => ({ locale }));
}

function toLocale(value: string): Locale {
  return isLocale(value) ? value : "en";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const name = DATA.name[locale];
  const description = DATA.description[locale];

  return {
    title: { absolute: name },
    description,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: "/en/",
        ko: "/ko/",
        "x-default": "/",
      },
    },
    openGraph: {
      title: name,
      description,
      url: `${DATA.url}/${locale}/`,
      siteName: name,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    twitter: {
      title: name,
      card: "summary_large_image",
    },
  };
}

export default function LocalePage() {
  return <ResumePage />;
}
