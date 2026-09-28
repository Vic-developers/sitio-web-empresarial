import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface DashboardPreviewProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const DashboardPreview = forwardRef<HTMLDivElement, DashboardPreviewProps>(
  ({ className, title = "Dashboard Preview", description = "Visualiza tus datos en tiempo real", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-slate-200 bg-white shadow-large overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-4 text-sm text-slate-500">{title}</span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Usuarios", value: "12,345", change: "+12%" },
              { label: "Ingresos", value: "$45,678", change: "+8%" },
              { label: "Conversión", value: "3.2%", change: "+0.5%" },
            ].map((stat, index) => (
              <div key={index} className="rounded-lg bg-slate-50 p-4">
                <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-green-600">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="h-48 rounded-lg bg-gradient-to-br from-teal-50 to-navy-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-teal-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DashboardPreview.displayName = "DashboardPreview";

export { DashboardPreview };
