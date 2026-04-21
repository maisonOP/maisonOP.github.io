"use client";
/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { useT } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";
import { assetPath } from "@/lib/asset";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import NewsSection from "@/components/section/news-section";
import ResearchSection from "@/components/section/publications-section";
import ProjectsSection from "@/components/section/projects-section";
import VitaeSection from "@/components/section/vitae-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const t = useT();
  const name = t(DATA.name);
  const tagline = t(DATA.tagline);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-row items-center gap-5 sm:gap-8">
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-none">
              <div className="w-28 sm:w-32 md:w-36 aspect-[3/4] overflow-hidden rounded-lg border shadow-lg ring-4 ring-muted bg-muted">
                <img
                  src={assetPath(DATA.avatarUrl)}
                  alt={name}
                  className="size-full object-cover"
                />
              </div>
            </BlurFade>
            <div className="flex flex-col gap-2 min-w-0">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={name}
              />
              <BlurFadeText
                className="text-muted-foreground text-base sm:text-lg md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={tagline}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t(DATA.sections.about)}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{t(DATA.summary)}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="news">
        <NewsSection />
      </section>

      <section id="research">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <ResearchSection />
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="vitae">
        <VitaeSection />
      </section>

      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">{t(DATA.sections.skills)}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
