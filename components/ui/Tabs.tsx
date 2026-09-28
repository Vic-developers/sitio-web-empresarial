"use client";

import { cn } from "@/lib/utils";
import { useState, HTMLAttributes, forwardRef } from "react";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  defaultIndex?: number;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, defaultIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
      <div ref={ref} className={className} {...props}>
        <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 -mb-px border-b-2",
                activeIndex === index
                  ? "text-teal-600 border-teal-500 bg-teal-50/50"
                  : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="animate-fade-in">{tabs[activeIndex]?.content}</div>
      </div>
    );
  }
);

Tabs.displayName = "Tabs";

export { Tabs };
