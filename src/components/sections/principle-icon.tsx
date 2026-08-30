import {
  Layers,
  RefreshCw,
  Repeat,
  Scale,
  ScanEye,
  Shield,
  type LucideIcon,
} from "lucide-react";
import {
  ARCHITECTURE_PRINCIPLE_ICONS,
  ARCHITECTURE_PRINCIPLE_IDS,
} from "@/lib/constants";

const ICON_MAP: Record<
  (typeof ARCHITECTURE_PRINCIPLE_ICONS)[keyof typeof ARCHITECTURE_PRINCIPLE_ICONS],
  LucideIcon
> = {
  repeat: Repeat,
  "refresh-cw": RefreshCw,
  "scan-eye": ScanEye,
  layers: Layers,
  shield: Shield,
  scale: Scale,
};

export function PrincipleIcon({ id }: { id: (typeof ARCHITECTURE_PRINCIPLE_IDS)[number] }) {
  const iconKey = ARCHITECTURE_PRINCIPLE_ICONS[id];
  const Icon = ICON_MAP[iconKey];

  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-secondary/15 bg-secondary/8 text-secondary">
      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
