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
        "overflow-hidden rounded-xl border border-border bg-surface",
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
  type: "payment" | "operations" | "cloud";
}

export async function PlatformMockup({ type }: PlatformMockupProps) {
  const t = await getTranslations("mockups");

  if (type === "payment") {
    return (
      <MockupShell title={t("paymentConsole")}>
        <div className="grid grid-cols-3 gap-2">
          {[t("volume"), t("successRate"), t("providers")].map((label, i) => (
            <div
              key={label}
              className="rounded-lg border border-border bg-card p-2"
            >
              <p className="text-[8px] text-text-secondary">{label}</p>
              <p className="font-heading text-xs font-bold text-text-primary">
                {["$2.4M", "99.7%", "12"][i]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {["MTN MoMo", "Card Gateway", "Bank Transfer"].map((provider) => (
            <div
              key={provider}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-2 py-1.5"
            >
              <span className="text-[9px] text-text-primary">{provider}</span>
              <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[8px] font-medium text-accent">
                {t("active")}
              </span>
            </div>
          ))}
        </div>
      </MockupShell>
    );
  }

  if (type === "operations") {
    const navItems = [t("workflows"), t("tasks"), t("teams"), t("reports")];
    const tasks = ["Approval Pipeline", "Document Review", "Compliance Check"];

    return (
      <MockupShell title={t("operationsDashboard")}>
        <div className="flex gap-2">
          <div className="w-1/3 space-y-1.5">
            {navItems.map((item, i) => (
              <div
                key={item}
                className={cn(
                  "rounded-md px-2 py-1 text-[8px]",
                  i === 0
                    ? "bg-secondary/10 font-medium text-secondary"
                    : "text-text-secondary",
                )}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-1.5">
            {tasks.map((task) => (
              <div
                key={task}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-2 py-1.5"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-sm border border-border"
                  aria-hidden="true"
                />
                <span className="text-[8px] text-text-primary">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </MockupShell>
    );
  }

  return (
    <MockupShell title={t("cloudInfra")}>
      <div className="grid grid-cols-2 gap-2">
        {["ECS Cluster", "RDS", "S3", "CloudFront"].map((service) => (
          <div
            key={service}
            className="rounded-lg border border-border bg-card p-2 text-center"
          >
            <div
              className="mx-auto mb-1 h-4 w-4 rounded bg-secondary/10"
              aria-hidden="true"
            />
            <p className="text-[8px] font-medium text-text-primary">
              {service}
            </p>
            <p className="text-[7px] text-accent">{t("healthy")}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-6 flex-1 rounded-sm bg-secondary/10"
            style={{ opacity: 0.3 + (i % 4) * 0.15 }}
          />
        ))}
      </div>
    </MockupShell>
  );
}
