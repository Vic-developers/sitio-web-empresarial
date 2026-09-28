"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState, HTMLAttributes, forwardRef } from "react";

export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, items, allowMultiple = false, ...props }, ref) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

    const toggleItem = (index: number) => {
      if (allowMultiple) {
        setOpenIndexes((prev) =>
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
      } else {
        setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
      }
    };

    return (
      <div ref={ref} className={cn("divide-y divide-slate-200", className)} {...props}>
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between text-left gap-4 group"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0",
                    isOpen && "rotate-180 text-teal-500"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export { Accordion };
