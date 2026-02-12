"use client";

import { useReducedMotion } from "framer-motion";
import Typewriter from "@/components/motion/Typewriter";

const lines = [
  { text: "> components: tokenized UI system" },
  { text: "> performance: image + font optimization" },
  { text: "> accessibility: keyboard + contrast checks" },
];

export default function MicroTerminal() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">engine.log</span>
      </div>
      <div className="space-y-1.5 px-4 py-3">
        {lines.map((line, index) => (
          <div key={line.text} className="text-xs text-foreground/80">
            <Typewriter
              segments={[{ text: line.text }]}
              speed={24}
              startDelay={reduceMotion ? 0 : 240 + index * 540}
              showCursor={index === lines.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
