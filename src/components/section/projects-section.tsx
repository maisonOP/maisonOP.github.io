"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const t = useT();
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                {t(DATA.sections.projectsOverline)}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 max-w-[720px] mx-auto">
          {DATA.projects.map((project, id) => {
            const title = t(project.title);
            return (
              <BlurFade
                key={title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="h-full"
              >
                <div className="flex flex-col h-full border border-border rounded-xl p-5 gap-3 hover:ring-2 hover:ring-muted transition-all duration-200">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold leading-snug text-pretty">
                      {title}
                    </h3>
                    <time className="text-xs text-muted-foreground tabular-nums">
                      {t(project.dates)}
                    </time>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {t(project.description)}
                  </p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {project.technologies.map((tag) => (
                        <Badge
                          key={tag}
                          className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                          variant="outline"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
