import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export function Badge({ children, className, pulse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        "border border-secondary/15 bg-secondary/5 px-4 py-1.5",
        "text-xs font-medium tracking-wide text-secondary",
        "shadow-subtle backdrop-blur-sm",
        "dark:border-border/80 dark:bg-card/80 dark:text-text-secondary",
        className,
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
