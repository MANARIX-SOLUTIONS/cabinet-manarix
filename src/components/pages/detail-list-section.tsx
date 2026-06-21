import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface DetailListSectionProps {
  title: string;
  items: string[];
  variant?: "default" | "accent";
  className?: string;
}

export function DetailListSection({
  title,
  items,
  variant = "default",
  className,
}: DetailListSectionProps) {
  return (
    <section className={cn("section-padding", className)}>
      <Container>
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                "flex items-start gap-3 rounded-card border border-border/80",
                "bg-card p-5 card-hover",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md",
                  variant === "accent" ? "bg-accent/10" : "bg-secondary/10",
                )}
              >
                <Check
                  className={cn(
                    "h-3 w-3",
                    variant === "accent" ? "text-accent" : "text-secondary",
                  )}
                  strokeWidth={2.5}
                />
              </span>
              <span className="text-sm leading-relaxed text-text-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
