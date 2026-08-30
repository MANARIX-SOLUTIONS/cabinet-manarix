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
    <section className={cn("hero-canvas relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-15" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
      />
      <Container className="relative pt-32 pb-16 lg:pt-36 lg:pb-20">
        <Breadcrumbs items={breadcrumbs} inverted />
        <h1 className="max-w-3xl font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
