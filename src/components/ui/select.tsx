import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: readonly string[];
  placeholder?: string;
  variant?: "default" | "dark";
}

const labelStyles = {
  default: "text-text-primary",
  dark: "text-white/80",
} as const;

const fieldStyles = {
  default: [
    "border-border bg-surface text-text-primary",
    "hover:border-secondary/20 hover:bg-card",
    "focus:border-secondary/40 focus:bg-card focus:ring-secondary/15",
  ].join(" "),
  dark: [
    "border-white/15 bg-white/8 text-white",
    "hover:border-white/25 hover:bg-white/12",
    "focus:border-secondary/50 focus:bg-white/12 focus:ring-secondary/25",
  ].join(" "),
} as const;

export function Select({
  label,
  error,
  options,
  placeholder = "Select an option",
  variant = "default",
  className,
  id,
  ...props
}: SelectProps) {
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
      <select
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2",
          fieldStyles[variant],
          error && "border-red-400 focus:border-red-400 focus:ring-red-400/15",
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
