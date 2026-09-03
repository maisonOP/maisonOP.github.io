import ResumePage from "@/components/resume-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/en/",
      ko: "/ko/",
      "x-default": "/",
    },
  },
};

export default function Page() {
  return <ResumePage />;
}
