"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { CopyEmailButton } from "@/components/copy-email-button";
import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useT } from "@/contexts/locale-context";
import { DATA } from "@/data/resume";

const tooltipClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

const dockIconClass =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

export default function Navbar() {
  const t = useT();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className={dockIconClass}>
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
                <p>{t(item.label)}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([, social]) => social.navbar)
          .map(([key, social], index) => {
            const IconComponent = social.icon;
            const isEmail = key === "email";
            if (isEmail) {
              return (
                <Tooltip key={`social-${key}-${index}`}>
                  <TooltipTrigger asChild>
                    <CopyEmailButton
                      email={DATA.contact.email}
                      ariaLabel={`Copy email ${DATA.contact.email}`}
                      className="inline-flex"
                    >
                      <DockIcon className={dockIconClass}>
                        <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                      </DockIcon>
                    </CopyEmailButton>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className={tooltipClass}
                  >
                    <p>{DATA.contact.email}</p>
                    <TooltipArrow className="fill-primary" />
                  </TooltipContent>
                </Tooltip>
              );
            }
            const isExternal = social.url.startsWith("http");
            return (
              <Tooltip key={`social-${key}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className={dockIconClass}>
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className={tooltipClass}
                >
                  <p>{social.name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={dockIconClass}>
              <LocaleToggle className="size-full flex items-center justify-center" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
            <p>{t(DATA.sections.language)}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={dockIconClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
            <p>{t(DATA.sections.theme)}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
