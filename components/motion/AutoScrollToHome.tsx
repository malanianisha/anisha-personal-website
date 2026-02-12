"use client";

import { useEffect } from "react";

export default function AutoScrollToHome({
  targetId = "home",
  delayMs = 550,
}: {
  targetId?: string;
  delayMs?: number;
}) {
  useEffect(() => {
    // Always start at the top so the intro is visible on refresh/navigation
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const t = window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, delayMs);

    return () => window.clearTimeout(t);
  }, [targetId, delayMs]);

  return null;
}
