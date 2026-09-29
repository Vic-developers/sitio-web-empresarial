import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import Image from "next/image";

export interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

const Testimonial = forwardRef<HTMLDivElement, TestimonialProps>(
  ({ className, quote, author, role, company, image, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-slate-200 bg-white p-6 shadow-soft",
          className
        )}
        {...props}
      >
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-slate-700 mb-6 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-4">
          {image ? (
            <Image
              src={image}
              alt={author}
              width={48}
              height={48}
              className="rounded-full object-cover"
              unoptimized
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-semibold text-slate-900">{author}</div>
            <div className="text-sm text-slate-500">
              {role}
              {company && ` · ${company}`}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Testimonial.displayName = "Testimonial";

export { Testimonial };
