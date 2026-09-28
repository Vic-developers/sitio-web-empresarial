import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
}

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ className, value, label, description, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-center", className)} {...props}>
        <div className="text-4xl md:text-5xl font-display font-bold text-teal-500 mb-2">
          {value}
        </div>
        <div className="text-lg font-medium text-slate-900 mb-1">{label}</div>
        {description && <div className="text-sm text-slate-500">{description}</div>}
      </div>
    );
  }
);

Stat.displayName = "Stat";

export { Stat };
