"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  className?: string;
}

export function CountUp({ value, className }: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const startedAt = performance.now();
        const duration = 1800;

        const step = (now: number) => {
          const progress = Math.min(1, (now - startedAt) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={nodeRef} className={className}>
      {display}
    </span>
  );
}
