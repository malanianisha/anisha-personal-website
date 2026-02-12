"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteMeta";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.github}
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-card/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
          </Link>

          <Link
            href={siteConfig.linkedin}
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-card/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
