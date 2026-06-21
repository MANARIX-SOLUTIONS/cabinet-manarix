import { Container } from "@/components/ui/container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/pages/breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  className?: string;
}

export function PageHero({
  breadcrumbs,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-surface",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 glow-primary" />

      <Container className="relative py-14 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="max-w-3xl font-heading text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl lg:text-5xl lg:leading-[1.1]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary lg:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
