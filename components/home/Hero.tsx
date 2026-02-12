"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Typewriter from "@/components/motion/Typewriter";
import MicroTerminal from "@/components/home/MicroTerminal";

const focusAreas = [
  "Design systems & UI architecture",
  "Performance + accessibility audits",
  "Component-driven builds",
  "UX-focused interaction design",
];

const headlineSegments = [
  { text: "Building " },
  { text: "modern, high-performance", className: "text-gradient text-gradient-animate" },
  { text: " web experiences where design and engineering meet." },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [typedDone, setTypedDone] = useState(reduceMotion);
  const [haloActive, setHaloActive] = useState(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => setHaloActive(false), 3600);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  const card = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
      scale: reduceMotion ? 1 : 0.96,
      filter: reduceMotion ? "blur(0px)" : "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const ambientPrimary = reduceMotion
    ? { opacity: 0.35 }
    : { x: [0, 18, 0], y: [0, -22, 0], opacity: [0.35, 0.6, 0.35] };

  const ambientSecondary = reduceMotion
    ? { opacity: 0.3 }
    : { x: [0, -14, 0], y: [0, 16, 0], opacity: [0.3, 0.5, 0.3] };

  return (
    <section className="section relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          initial={{ opacity: 0 }}
          animate={ambientPrimary}
          transition={{
            duration: 12,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-120px] left-[-40px] h-80 w-80 rounded-full bg-accent-2/25 blur-3xl"
          initial={{ opacity: 0 }}
          animate={ambientSecondary}
          transition={{
            duration: 14,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <motion.p
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Web Developer / Front-End Engineer
          </motion.p>
          <motion.h1
            className="min-h-[5.5rem] font-display text-4xl tracking-tight sm:min-h-[6.5rem] sm:text-5xl lg:min-h-[7.5rem] lg:text-6xl"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typewriter
              segments={headlineSegments}
              speed={28}
              startDelay={220}
              onComplete={() => setTypedDone(true)}
            />
          </motion.h1>
          <motion.p
            className="lede max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={typedDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            I craft polished, user-first interfaces with careful attention to performance, accessibility,
            and scalable front-end architecture.
          </motion.p>
          {typedDone ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <MicroTerminal />
            </motion.div>
          ) : null}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={typedDone ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative inline-flex"
              initial={reduceMotion ? false : { scale: 0.98 }}
              animate={typedDone ? { scale: 1 } : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.25 }}
            >
              {haloActive && !reduceMotion ? (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/25 blur-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0, 0.55, 0], scale: [0.9, 1.2, 1.4] }}
                  transition={{ duration: 3.4, ease: "easeOut" }}
                />
              ) : null}
              <Button href="/contact" variant="primary">
                Let's connect <ArrowUpRight size={16} />
              </Button>
            </motion.div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-muted transition hover:text-foreground"
            >
              View projects
            </Link>
            <a
              href="/Anisha_Malani_Resume_DA2025.pdf"
              download
              className="text-sm font-semibold text-muted transition hover:text-foreground"
            >
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={card}
          initial="hidden"
          animate={typedDone ? "show" : "hidden"}
          className="card p-6"
          style={{ transformOrigin: "85% 20%" }}
          whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.3 } }}
        >
          <p className="eyebrow">Engineering focus</p>
          <h2 className="headline">Front-end craft with systems thinking.</h2>
          <p className="lede">
            I bring a design-systems mindset to every build, prioritizing maintainable UI, thoughtful
            motion, and clear information hierarchy.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((itemLabel) => (
              <div
                key={itemLabel}
                className="rounded-xl border border-border bg-background/70 px-3 py-2 text-xs text-muted"
              >
                {itemLabel}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
