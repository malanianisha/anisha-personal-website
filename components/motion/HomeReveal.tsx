"use client";

import React, { useEffect, useState } from "react";
import styles from "./HomeReveal.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HomeReveal({ children, className }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Ensure the page paints once, then animate in (cleaner + consistent)
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={[
        styles.reveal,
        ready ? styles.ready : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
