import { Plug, RefreshCw, Sparkles, type LucideIcon } from "lucide-react";
import { VALUE_PROP_ICONS, VALUE_PROP_IDS } from "@/lib/constants";

const ICON_MAP: Record<
  (typeof VALUE_PROP_ICONS)[keyof typeof VALUE_PROP_ICONS],
  LucideIcon
> = {
  plug: Plug,
  "refresh-cw": RefreshCw,
  sparkles: Sparkles,
};

export function ValuePropIcon({
  id,
}: {
  id: (typeof VALUE_PROP_IDS)[number];
}) {
  const iconKey = VALUE_PROP_ICONS[id];
  const Icon = ICON_MAP[iconKey];

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/15 bg-secondary/8 text-secondary">
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
