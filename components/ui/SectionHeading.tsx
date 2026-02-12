"use client";

import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {eyebrow && (
        <p className="eyebrow">{eyebrow}</p>
      )}
      <h2 className="headline">{title}</h2>
      {description && (
        <p className="lede max-w-2xl">{description}</p>
      )}
    </header>
  );
}
