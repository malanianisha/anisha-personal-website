"use client";

import { Artwork } from "@/data/artwork";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type ArtworkGridProps = {
  items: Artwork[];
};

export function ArtworkGrid({ items }: ArtworkGridProps) {
  const [active, setActive] = useState<Artwork | null>(null);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {items.map((piece, idx) => {
          return (
          <button
            key={piece.slug}
            type="button"
            onClick={() => setActive(piece)}
            className="gallery-tile group mb-6 w-full break-inside-avoid text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="gallery-frame relative w-full overflow-hidden">
              <Image
                src={piece.image}
                alt={piece.title}
                width={piece.width}
                height={piece.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition duration-500 group-hover:brightness-105"
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition group-hover:opacity-95" />
              {piece.description && (
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="max-h-28 translate-y-2 overflow-hidden text-xs leading-relaxed text-white/90 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {piece.description}
                  </p>
                </div>
              )}
            </div>
            <div className="gallery-caption">
              {piece.year && (
                <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
                  {piece.year}
                </p>
              )}
              <h3 className="mt-1 text-sm font-semibold text-foreground">
                {piece.title}
              </h3>
            </div>
          </button>
          );
        })}
      </div>

      {active && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close artwork view"
              className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-1.5 text-muted shadow-soft hover:bg-background"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-1 p-4">
              {active.year && (
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                  {active.year}
                </p>
              )}
              <h3 className="font-display text-lg">{active.title}</h3>
              {active.description && (
                <p className="text-sm leading-relaxed text-muted">
                  {active.description}
                </p>
              )}
              {active.tags && active.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
