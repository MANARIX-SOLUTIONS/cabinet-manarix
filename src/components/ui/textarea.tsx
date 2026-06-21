import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  variant?: "default" | "dark";
}

const labelStyles = {
  default: "text-text-primary",
  dark: "text-white/80",
} as const;

const fieldStyles = {
  default: [
    "border-border bg-surface text-text-primary placeholder:text-text-muted/80",
    "hover:border-secondary/20 hover:bg-card",
    "focus:border-secondary/40 focus:bg-card focus:ring-secondary/15",
  ].join(" "),
  dark: [
    "border-white/15 bg-white/8 text-white placeholder:text-white/40",
    "hover:border-white/25 hover:bg-white/12",
    "focus:border-secondary/50 focus:bg-white/12 focus:ring-secondary/25",
  ].join(" "),
} as const;

export function Textarea({
  label,
  error,
  variant = "default",
  className,
  id,
  ...props
}: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={inputId}
        className={cn(
          "block text-xs font-semibold tracking-wide uppercase",
          labelStyles[variant],
        )}
      >
        {label}
      </label>
      <textarea
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          "min-h-[120px] w-full resize-y rounded-xl border px-4 py-3 text-sm",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2",
          fieldStyles[variant],
          error && "border-red-400 focus:border-red-400 focus:ring-red-400/15",
        )}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
