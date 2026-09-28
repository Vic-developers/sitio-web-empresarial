import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg";
  container?: "default" | "narrow" | "full";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", container = "default", children, ...props }, ref) => {
    const spacings = {
      sm: "py-12 md:py-16 lg:py-20",
      md: "py-16 md:py-24 lg:py-32",
      lg: "py-20 md:py-32 lg:py-40",
    };

    const containers = {
      default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
      full: "w-full",
    };

    return (
      <section ref={ref} className={cn(spacings[spacing], className)} {...props}>
        <div className={containers[container]}>{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
