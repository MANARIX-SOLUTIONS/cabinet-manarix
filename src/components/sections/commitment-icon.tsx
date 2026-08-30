import {
  FileCheck,
  Handshake,
  Lock,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { TRANSPARENCY_COMMITMENT_IDS } from "@/lib/constants";

const COMMITMENT_ICONS: Record<
  (typeof TRANSPARENCY_COMMITMENT_IDS)[number],
  LucideIcon
> = {
  milestones: Receipt,
  ownership: FileCheck,
  noLockin: Lock,
  warranty: ShieldCheck,
  formal: Handshake,
};

export function CommitmentIcon({
  id,
}: {
  id: (typeof TRANSPARENCY_COMMITMENT_IDS)[number];
}) {
  const Icon = COMMITMENT_ICONS[id];

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-surface/80 text-text-muted">
      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
