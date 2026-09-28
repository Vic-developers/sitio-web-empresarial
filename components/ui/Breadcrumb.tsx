"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-gray-900 font-medium" : ""}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="w-4 h-4 text-gray-300" />}
          </div>
        );
      })}
    </nav>
  );
}
