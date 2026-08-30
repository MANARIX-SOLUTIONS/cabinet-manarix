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
  className,
}: DetailListSectionProps) {
  return (
    <section className={cn("section-padding", className)}>
      <Container>
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
        <ol className="mt-8 divide-y divide-border/70 overflow-hidden rounded-card border border-border/70 bg-card">
          {items.map((item, index) => (
            <li
              key={item}
              className="grid gap-4 px-6 py-5 sm:grid-cols-[3rem_1fr] sm:items-start lg:px-8"
            >
              <span className="index-mark">0{index + 1}</span>
              <span className="text-sm leading-relaxed text-text-secondary">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
