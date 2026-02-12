"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpStatProps = {
  value: string;
  label: string;
  className?: string;
};

function parseValue(value: string) {
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  return { numeric: Number.isNaN(numeric) ? 0 : numeric, suffix };
}

export default function CountUpStat({ value, label, className = "" }: CountUpStatProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const { numeric, suffix } = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(reduceMotion ? value : `0${suffix}`);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      setComplete(true);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    let rafId = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(numeric * progress);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setComplete(true);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, reduceMotion, numeric, suffix, value]);

  return (
    <div
      ref={ref}
      className={`stat-card card-interactive ${complete ? "stat-glow" : ""} ${className}`.trim()}
    >
      <p className="text-2xl font-display text-foreground">{display}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-subtle">{label}</p>
    </div>
  );
}
