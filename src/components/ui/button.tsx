import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "inverse" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-fg border border-transparent shadow-subtle hover:bg-primary/90",
  secondary: [
    "bg-secondary text-white border border-transparent shadow-subtle",
    "hover:bg-[#1e40af]",
  ].join(" "),
  ghost:
    "bg-transparent text-text-primary hover:bg-surface border border-transparent",
  outline: [
    "bg-transparent text-text-primary border border-border/80",
    "hover:border-text-primary/20 hover:bg-card",
  ].join(" "),
  inverse: [
    "bg-white text-[#0b1220] border border-transparent shadow-elevated",
    "hover:bg-white/93",
  ].join(" "),
  accent: "btn-accent hover:-translate-y-px active:translate-y-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-sm font-medium tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  href,
  ...props
}: ButtonProps) {
  const classNames = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-medium",
    "transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out",
    "hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const isInternal = Boolean(href?.startsWith("/") && !href.startsWith("//"));

  if (isInternal && href) {
    return (
      <Link href={href} className={classNames} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classNames} {...props}>
      {content}
    </a>
  );
}
