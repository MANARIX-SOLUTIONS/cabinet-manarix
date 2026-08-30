import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  inverted?: boolean;
}

export function Breadcrumbs({
  items,
  className,
  inverted = false,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-sm",
          inverted ? "text-white/45" : "text-text-muted",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    inverted ? "text-white/30" : "text-text-muted/60",
                  )}
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    inverted ? "hover:text-white" : "hover:text-text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast &&
                      (inverted
                        ? "font-medium text-white/70"
                        : "font-medium text-text-secondary"),
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
