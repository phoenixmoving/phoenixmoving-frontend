import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  position?: "center" | "left" | "right";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  position = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("container mx-auto mb-16 space-y-4 px-4", className, {
        "text-center": position === "center",
        "text-left": position === "left",
        "text-right": position === "right",
      })}
    >
      <h2
        className={cn(
          "text-5xl font-bold tracking-tight text-balance",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg/8 font-medium text-pretty",
            subtitleClassName,
            {
              "mx-auto max-w-4xl": position === "center",
            },
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
