"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const FLOW_STEPS = [
  "flowMobileMoney",
  "flowPaymentApis",
  "flowOrchestration",
  "flowLedger",
  "flowSettlement",
] as const;

const METRICS = [
  { valueKey: "visualSuccessRate", labelKey: "visualSuccessLabel" },
  { valueKey: "visualVolume", labelKey: "visualVolumeLabel" },
  { valueKey: "visualLatency", labelKey: "visualLatencyLabel" },
] as const;

export function HeroVisual() {
  const t = useTranslations("hero");
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.25,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div className="glow-ring overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] shadow-premium backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <WindowChrome />
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <p className="hidden text-[11px] font-medium tracking-[0.12em] text-white/45 sm:block">
              {t("visualScope")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <p className="text-[10px] font-medium tracking-[0.14em] text-emerald-300/90 uppercase">
              {t("visualStatus")}
            </p>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="relative space-y-0">
            {!prefersReducedMotion && (
              <span
                aria-hidden="true"
                className="flow-pulse-dot pointer-events-none absolute left-[3px] top-3 z-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgb(103_232_249/0.8)]"
              />
            )}
            {FLOW_STEPS.map((key, index) => (
              <FlowNode
                key={key}
                label={t(key)}
                index={index}
                isLast={index === FLOW_STEPS.length - 1}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/8 pt-5 sm:gap-3">
            {METRICS.map(({ valueKey, labelKey }, index) => (
              <MetricCell
                key={valueKey}
                value={t(valueKey)}
                label={t(labelKey)}
                delay={prefersReducedMotion ? 0 : 0.5 + index * 0.08}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WindowChrome() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
    </div>
  );
}

function FlowNode({
  label,
  index,
  isLast,
  prefersReducedMotion,
}: {
  label: string;
  index: number;
  isLast: boolean;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <div className="relative flex items-stretch gap-3">
      <div className="flex flex-col items-center pt-3">
        <motion.span
          className="relative z-[1] flex h-2 w-2 shrink-0 rounded-full bg-blue-500 ring-4 ring-blue-500/15"
          initial={prefersReducedMotion ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.35, delay: 0.3 + index * 0.1 }}
        />
        {!isLast && (
          <motion.span
            className="my-1 w-px flex-1 bg-gradient-to-b from-blue-500/40 to-white/8"
            initial={prefersReducedMotion ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ originY: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
          />
        )}
      </div>
      <motion.div
        className="mb-2 flex-1 rounded-xl border border-white/8 bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-4 py-3 transition-colors hover:border-white/14"
        initial={prefersReducedMotion ? false : { opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.28 + index * 0.1 }}
      >
        <p className="text-sm font-medium text-white/88">{label}</p>
      </motion.div>
    </div>
  );
}

function MetricCell({
  value,
  label,
  delay,
  prefersReducedMotion,
}: {
  value: string;
  label: string;
  delay: number;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.div
      className="rounded-lg border border-white/6 bg-white/[0.03] px-2.5 py-2.5 sm:px-3"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <p className="font-heading text-sm font-semibold tracking-tight text-white sm:text-base">
        {value}
      </p>
      <p className="mt-0.5 text-[9px] leading-snug tracking-wide text-white/38 sm:text-[10px]">
        {label}
      </p>
    </motion.div>
  );
}
