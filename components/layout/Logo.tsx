import { cn } from "@/lib/utils";
import Image from "next/image";

export interface LogoProps {
  className?: string;
  variant?: "color" | "white";
}

export function Logo({ className, variant = "color" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo/logo.png"
        alt="SkillUps Academy"
        width={180}
        height={60}
        className={cn(
          "h-12 w-auto object-contain",
          variant === "white" && "brightness-0 invert"
        )}
        priority
        unoptimized
      />
    </div>
  );
}
