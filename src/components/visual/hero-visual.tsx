"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroVisual() {
  const t = useTranslations("hero");
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="diagram-visual relative mx-auto aspect-square max-w-lg glow-ring lg:max-w-none">
      <div className="absolute inset-0 rounded-[16px] border border-border/80 bg-card/90 shadow-premium backdrop-blur-md" />

      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full p-6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((__, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={60 + col * 50}
              cy={60 + row * 50}
              r="1"
              fill="var(--diagram-dot)"
              opacity="0.6"
            />
          )),
        )}

        <motion.path
          d="M120 200 L240 120 L360 200 L360 320 L240 400 L120 320 Z"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        <motion.rect
          x="200"
          y="200"
          width="80"
          height="80"
          rx="16"
          fill="url(#nodeGrad)"
          stroke="#2563EB"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        <text
          x="240"
          y="248"
          textAnchor="middle"
          fill="var(--diagram-text)"
          fontSize="14"
          fontWeight="600"
          fontFamily="system-ui"
        >
          API
        </text>

        {[
          { x: 190, y: 60, w: 100, h: 48, delay: 0.6, anim: { y: 20 } },
          { x: 320, y: 170, w: 100, h: 60, delay: 0.8, anim: { x: -20 } },
          { x: 170, y: 340, w: 140, h: 56, delay: 1, anim: { y: -20 } },
          { x: 60, y: 170, w: 90, h: 60, delay: 0.9, anim: { x: 20 } },
        ].map(({ x, y, w, h, delay, anim }) => (
          <motion.g
            key={`${x}-${y}`}
            initial={prefersReducedMotion ? false : { ...anim, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
          >
            <rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx="12"
              fill="var(--diagram-node)"
              stroke="var(--diagram-stroke)"
              strokeWidth="1.5"
            />
          </motion.g>
        ))}

        <circle cx="215" cy="84" r="6" fill="#2563EB" fillOpacity="0.2" />
        <rect
          x="228"
          y="78"
          width="50"
          height="6"
          rx="3"
          fill="var(--diagram-line)"
        />
        <rect
          x="228"
          y="90"
          width="35"
          height="4"
          rx="2"
          fill="var(--diagram-muted)"
        />
        <rect
          x="336"
          y="186"
          width="68"
          height="8"
          rx="4"
          fill="#10B981"
          fillOpacity="0.2"
        />
        <rect
          x="336"
          y="200"
          width="50"
          height="6"
          rx="3"
          fill="var(--diagram-line)"
        />
        <rect
          x="186"
          y="356"
          width="30"
          height="24"
          rx="6"
          fill="#2563EB"
          fillOpacity="0.1"
        />
        <rect
          x="224"
          y="356"
          width="30"
          height="24"
          rx="6"
          fill="#10B981"
          fillOpacity="0.1"
        />
        <rect
          x="262"
          y="356"
          width="30"
          height="24"
          rx="6"
          fill="#2563EB"
          fillOpacity="0.1"
        />
        <circle
          cx="105"
          cy="200"
          r="14"
          fill="#10B981"
          fillOpacity="0.15"
          stroke="#10B981"
          strokeWidth="1"
        />
      </svg>

      <motion.div
        className="absolute -left-2 top-[22%] rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-elevated backdrop-blur-sm"
        animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
          {t("uptime")}
        </p>
        <p className="font-heading text-base font-bold text-accent">99.9%</p>
      </motion.div>

      <motion.div
        className="absolute -right-1 bottom-[28%] rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-elevated backdrop-blur-sm"
        animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <p className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
          {t("security")}
        </p>
        <p className="font-heading text-base font-bold text-secondary">
          {t("enterprise")}
        </p>
      </motion.div>
    </div>
  );
}
