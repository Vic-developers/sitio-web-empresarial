import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface ProcessStep {
  step: string;
  description: string;
}

export interface ProcessTimelineProps extends HTMLAttributes<HTMLDivElement> {
  steps: ProcessStep[];
  orientation?: "horizontal" | "vertical";
}

const ProcessTimeline = forwardRef<HTMLDivElement, ProcessTimelineProps>(
  ({ className, steps, orientation = "vertical", ...props }, ref) => {
    if (orientation === "horizontal") {
      return (
        <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)} {...props}>
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{step.step}</h4>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-5 w-full h-0.5 bg-teal-200 -z-10" />
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("space-y-8", className)} {...props}>
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full bg-teal-200 mt-2" />
              )}
            </div>
            <div className="pb-8">
              <h4 className="font-semibold text-slate-900 mb-1">{step.step}</h4>
              <p className="text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

ProcessTimeline.displayName = "ProcessTimeline";

export { ProcessTimeline };
