"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Segment = {
  text: string;
  className?: string;
};

type TypewriterProps = {
  segments: Segment[];
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
};

export default function Typewriter({
  segments,
  speed = 28,
  startDelay = 200,
  showCursor = true,
  className = "",
  onComplete,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const totalLength = useMemo(
    () => segments.reduce((sum, segment) => sum + segment.text.length, 0),
    [segments]
  );
  const [count, setCount] = useState(reduceMotion ? totalLength : 0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setCount(totalLength);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= totalLength) {
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [reduceMotion, totalLength, speed, startDelay]);

  useEffect(() => {
    if (!onComplete || completedRef.current) return;
    if (count >= totalLength) {
      completedRef.current = true;
      onComplete();
    }
  }, [count, totalLength, onComplete]);

  let remaining = count;

  return (
    <span className={className}>
      {segments.map((segment, index) => {
        const available = Math.min(Math.max(remaining, 0), segment.text.length);
        const visibleText = segment.text.slice(0, available);
        remaining -= segment.text.length;

        return (
          <span key={`${segment.text}-${index}`} className={segment.className}>
            {visibleText}
          </span>
        );
      })}
      {showCursor && !reduceMotion ? (
        <span
          aria-hidden="true"
          className={`type-caret ${count >= totalLength ? "type-caret-hidden" : ""}`}
        >
          |
        </span>
      ) : null}
    </span>
  );
}
