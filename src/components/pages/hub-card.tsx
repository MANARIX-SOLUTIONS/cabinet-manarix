import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface HubCardProps {
  title: string;
  description: string;
  href: string;
  index?: number;
}

export function HubCard({ title, description, href, index = 0 }: HubCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group premium-card flex h-full flex-col p-7",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="font-heading text-4xl font-extrabold leading-none text-text-muted/30 transition-colors group-hover:text-secondary/25">
          0{index + 1}
        </span>
        <ArrowUpRight
          className={cn(
            "h-5 w-5 shrink-0 text-text-muted",
            "transition-all duration-300",
            "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary",
          )}
        />
      </div>
      <h2 className="font-heading text-xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </Link>
  );
}
