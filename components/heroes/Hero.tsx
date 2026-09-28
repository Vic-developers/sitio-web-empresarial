import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ className, badge, title, description, align = "center", size = "lg", ...props }, ref) => {
    const sizes = {
      sm: {
        title: "text-3xl md:text-4xl",
        description: "text-base",
        spacing: "mb-8",
      },
      md: {
        title: "text-4xl md:text-5xl",
        description: "text-lg",
        spacing: "mb-12",
      },
      lg: {
        title: "text-5xl md:text-6xl lg:text-7xl",
        description: "text-xl",
        spacing: "mb-16",
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "pt-32 pb-16 md:pt-40 md:pb-24",
          align === "center" ? "text-center" : "text-left",
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(sizes[size].spacing, align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl")}>
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
                {badge}
              </span>
            )}
            <h1
              className={cn(
                "font-display font-bold tracking-tight text-white",
                sizes[size].title
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={cn(
                  "mt-6 text-slate-300 leading-relaxed",
                  sizes[size].description,
                  align === "center" && "mx-auto max-w-2xl"
                )}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Hero.displayName = "Hero";

export { Hero };
