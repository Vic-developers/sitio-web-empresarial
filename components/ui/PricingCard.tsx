import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  ({ className, name, price, period, description, features, cta, ctaHref, popular = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border p-8 transition-all duration-300",
          popular
            ? "border-teal-500 bg-teal-50/50 shadow-glow scale-105"
            : "border-slate-200 bg-white shadow-soft hover:shadow-medium",
          className
        )}
        {...props}
      >
        {popular && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-500 text-white rounded-full mb-4">
            Más popular
          </span>
        )}
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-display font-bold text-slate-900">{price}</span>
          {period && <span className="text-slate-500">/{period}</span>}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={ctaHref}
          className={cn(
            "block text-center rounded-lg py-3 font-medium transition-all duration-300",
            popular
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          )}
        >
          {cta}
        </a>
      </div>
    );
  }
);

PricingCard.displayName = "PricingCard";

export { PricingCard };
