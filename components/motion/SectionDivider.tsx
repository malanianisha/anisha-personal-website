"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionDividerProps = {
  className?: string;
};

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`section-divider ${className}`}
      initial={reduceMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
