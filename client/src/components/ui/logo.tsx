import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark" | "color";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-6",
  md: "h-8", 
  lg: "h-10",
  xl: "h-12"
};

export function Logo({ variant = "color", size = "md", className }: LogoProps) {
  const textSize = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-2xl",
    xl: "text-3xl"
  };
  
  return (
    <img 
      src="/leadspoint-logo.png" 
      alt="Leadspoint CRM" 
      className={cn("w-auto object-contain", sizeClasses[size], className)}
      onError={(e) => {
        // Fallback to JPG version
        const target = e.target as HTMLImageElement;
        if (target.src.includes('.png')) {
          target.src = '/leadspoint-logo.jpg';
        } else {
          // If both fail, show text fallback
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="font-bold ${textSize[size]} ${variant === 'light' ? 'text-white' : 'text-blue-600'}">Leadspoint</span>`;
          }
        }
      }}
    />
  );
}