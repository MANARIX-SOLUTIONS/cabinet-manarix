import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

interface MockupShellProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function MockupShell({ title, children, className }: MockupShellProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/80 bg-surface shadow-subtle",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-card px-3 py-2">
        <span
          className="h-2 w-2 rounded-full bg-red-400/60"
          aria-hidden="true"
        />
        <span
          className="h-2 w-2 rounded-full bg-yellow-400/60"
          aria-hidden="true"
        />
        <span
          className="h-2 w-2 rounded-full bg-green-400/60"
          aria-hidden="true"
        />
        <span className="ml-2 truncate text-[10px] text-text-secondary">
          {title}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

interface PlatformMockupProps {
  type: "xaalis";
}

export async function PlatformMockup({ type }: PlatformMockupProps) {
  const t = await getTranslations("proofs");

  if (type !== "xaalis") {
    return null;
  }

  const rails = ["Wave", "Orange Money", "Free Money"];

  return (
    <MockupShell title={t("xaalis.title")}>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-card p-2">
          <p className="text-[8px] text-text-secondary">XOF</p>
          <p className="font-heading text-xs font-bold text-text-primary">
            Append-only
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-2">
          <p className="text-[8px] text-text-secondary">SYSCOHADA</p>
          <p className="font-heading text-xs font-bold text-text-primary">
            Partie double
          </p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        {rails.map((rail) => (
          <div
            key={rail}
            className="flex items-center justify-between rounded-lg border border-border bg-card px-2 py-1.5"
          >
            <span className="text-[9px] text-text-primary">{rail}</span>
            <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[8px] font-medium text-accent">
              SMS / notif
            </span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}
