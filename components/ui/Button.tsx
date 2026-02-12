"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

function variantClasses(variant: ButtonVariant) {
  if (variant === "secondary") {
    return "btn btn-secondary";
  }
  if (variant === "ghost") {
    return "btn btn-ghost";
  }
  return "btn btn-primary";
}

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base =
    "disabled:pointer-events-none disabled:opacity-60 hover:-translate-y-0.5";
  const classes = `${variantClasses(variant)} ${base} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal || props.download) {
      return (
        <a
          href={href}
          className={classes}
          target={props.target}
          rel={props.rel}
          download={props.download}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
