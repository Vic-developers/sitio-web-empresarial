import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", size = "sm", children, ...props }, ref) => {
    const variants = {
      primary: "bg-teal-50 text-teal-700 border border-teal-200",
      secondary: "bg-navy-50 text-navy-700 border border-navy-200",
      accent: "bg-amber-50 text-amber-700 border border-amber-200",
      outline: "bg-transparent text-slate-600 border border-slate-300",
    };

    const sizes = {
      sm: "px-2.5 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full font-medium",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
