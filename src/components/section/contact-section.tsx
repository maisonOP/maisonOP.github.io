"use client";
import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { CopyEmailButton } from "@/components/copy-email-button";
import { useT } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  const t = useT();
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
          {t(DATA.sections.contact)}
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t(DATA.sections.contactHeadline)}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {t(DATA.sections.contactBody)}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <CopyEmailButton
            email={DATA.contact.email}
            className="text-sm border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer"
          >
            {DATA.contact.email}
          </CopyEmailButton>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
