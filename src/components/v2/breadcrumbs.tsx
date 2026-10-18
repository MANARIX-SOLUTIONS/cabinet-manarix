import { Link } from "@/i18n/navigation";

export type V2BreadcrumbItem = {
  label: string;
  href?: string;
};

export function V2Breadcrumbs({ items }: { items: V2BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/50">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-white/25" aria-hidden="true">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "font-medium text-white/72" : undefined}
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
