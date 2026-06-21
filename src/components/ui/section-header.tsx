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
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-gradient-to-r from-secondary/60 to-accent/60" />
          <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
            {eyebrow}
          </p>
          {align === "center" && (
            <span className="h-px w-8 bg-gradient-to-l from-secondary/60 to-accent/60" />
          )}
        </div>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-[-0.02em] text-text-primary",
          "sm:text-4xl lg:text-[2.875rem] lg:leading-[1.12]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-text-secondary lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
