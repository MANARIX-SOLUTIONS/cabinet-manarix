import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-fg hover:bg-primary/90 shadow-subtle border border-transparent",
  secondary: [
    "bg-secondary text-white border border-transparent",
    "shadow-[0_1px_2px_rgb(37_99_235/0.2),0_4px_12px_-2px_rgb(37_99_235/0.35)]",
    "hover:bg-[#1d4ed8] hover:shadow-[0_4px_16px_-2px_rgb(37_99_235/0.45)]",
    "hover:-translate-y-px",
  ].join(" "),
  ghost:
    "bg-transparent text-text-primary hover:bg-surface border border-transparent",
  outline: [
    "bg-card text-text-primary border border-border shadow-subtle",
    "hover:border-secondary/30 hover:bg-card hover:shadow-elevated",
    "hover:-translate-y-px",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-2xl font-medium",
        "transition-all duration-300 ease-out focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
