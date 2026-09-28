import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, badge, title, description, align = "center", size = "md", ...props }, ref) => {
    const sizes = {
      sm: {
        title: "text-2xl md:text-3xl",
        description: "text-base",
        spacing: "mb-8",
      },
      md: {
        title: "text-3xl md:text-4xl lg:text-5xl",
        description: "text-lg",
        spacing: "mb-12",
      },
      lg: {
        title: "text-4xl md:text-5xl lg:text-6xl",
        description: "text-xl",
        spacing: "mb-16",
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          sizes[size].spacing,
          align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
          className
        )}
        {...props}
      >
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-sm font-medium text-teal-700 mb-4">
            {badge}
          </span>
        )}
        <h2
          className={cn(
            "font-display font-bold tracking-tight text-slate-900",
            sizes[size].title
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-slate-600 leading-relaxed",
              sizes[size].description,
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
