import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-5 inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase",
            align === "center" && "mx-auto",
          )}
        >
          <span
            aria-hidden="true"
            className="h-px w-6 bg-secondary/50"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold tracking-[-0.03em] text-text-primary",
          "sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary lg:text-[1.05rem]">
          {description}
        </p>
      )}
    </div>
  );
}
