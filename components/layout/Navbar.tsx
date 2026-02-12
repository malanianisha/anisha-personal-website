"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteMeta";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/artwork", label: "Artwork" },
  { href: "/contact", label: "Let's connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const shouldAnimate = pathname === "/" && !reduceMotion;

  useEffect(() => setMounted(true), []);
  const isDark = mounted && theme === "dark";

  const navContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: -8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-colors"
      initial={shouldAnimate ? { opacity: 0, y: -16 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center justify-between sm:w-auto">
          <motion.div
            variants={navItem}
            initial={shouldAnimate ? "hidden" : false}
            animate="show"
          >
            <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/60 text-[11px] tracking-[0.2em]">
                AM
            </span>
            <span className="font-display text-base tracking-tight">
              {siteConfig.name}
            </span>
            </Link>
          </motion.div>

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition hover:-translate-y-0.5 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
          >
            {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <span className="h-4 w-4" />}
          </button>
        </div>

        <motion.nav
          className="flex flex-wrap items-center gap-4"
          aria-label="Primary navigation"
          variants={navContainer}
          initial={shouldAnimate ? "hidden" : false}
          animate="show"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <motion.div
                key={item.href}
                variants={navItem}
                initial={shouldAnimate ? "hidden" : false}
                animate="show"
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link group pb-1.5 ${isActive ? "nav-link-active" : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition duration-300 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition hover:-translate-y-0.5 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <span className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
