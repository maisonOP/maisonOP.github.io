"use client";

import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
  email: string;
  children: React.ReactNode;
  className?: string;
  toastPlacement?: "top" | "bottom";
  ariaLabel?: string;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type" | "aria-label" | "className" | "children"
>;

export const CopyEmailButton = forwardRef<HTMLButtonElement, Props>(
  function CopyEmailButton(
    { email, children, className, toastPlacement = "top", ariaLabel, ...rest },
    ref
  ) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const input = document.createElement("input");
        input.value = email;
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand("copy");
        } catch {
          // ignore — nothing else we can do
        }
        document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    },
    [email]
  );

  return (
    <button
      ref={ref}
      type="button"
      {...rest}
      onClick={handleClick}
      aria-label={ariaLabel ?? `Copy email ${email}`}
      className={cn("relative", className)}
    >
      {children}
      <span
        role="status"
        aria-live="polite"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none",
          "flex items-center gap-1 rounded-md bg-primary text-primary-foreground",
          "text-xs font-medium px-2 py-1 shadow-lg whitespace-nowrap",
          "transition-all duration-200",
          toastPlacement === "top" ? "-top-9" : "top-full mt-2",
          copied
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1 pointer-events-none"
        )}
      >
        <Check className="size-3" aria-hidden />
        Copied
      </span>
    </button>
  );
  }
);
