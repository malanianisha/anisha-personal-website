"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1000 : 180,
    damping: reduceMotion ? 100 : 30,
    mass: reduceMotion ? 0.01 : 0.2,
  });

  return (
    <div className="scroll-track">
      <motion.div className="scroll-bar" style={{ scaleX }} />
    </div>
  );
}
