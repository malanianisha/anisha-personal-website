"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  hover?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  amount = 0.25,
  hover = false,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
    : { opacity: 0, y: 28, scale: 0.98, filter: "blur(6px)" };

  const visible = {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: delay / 1000,
    },
  };

  const hoverMotion =
    hover && !reduceMotion
      ? { y: -6, scale: 1.01, transition: { type: "spring", stiffness: 220, damping: 18 } }
      : undefined;

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount }}
      whileHover={hoverMotion}
    >
      {children}
    </motion.div>
  );
}
