"use client";

import React, { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const EMAIL = "malanianisha@gmail.com";

function buildMailto({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactClient() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const mailtoHref = useMemo(() => {
    const subject = "Let's connect — Portfolio Website";
    const body = `Hi Anisha,\n\n${message || "[Your message here]"}\n\n—\nName: ${
      name || "[Your name]"
    }\nEmail: ${fromEmail || "[Your email]"}\n`;
    return buildMailto({ to: EMAIL, subject, body });
  }, [name, fromEmail, message]);

  const isNameValid = name.trim().length > 1;
  const isEmailValid = emailRegex.test(fromEmail);
  const isMessageValid = message.trim().length > 4;
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid) return;
    window.location.href = mailtoHref;
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(56,189,248,0.16),transparent_60%)]"
      />
      <Container className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">Let's connect</p>
          <h1 className="headline">Let’s build something thoughtful.</h1>
          <p className="lede max-w-2xl">
            Share a quick overview and I’ll respond with timelines, next steps, and how I can help.
          </p>
        </Reveal>

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="contact-card contact-form">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <label className="eyebrow" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`input ${touched.name && !isNameValid ? "border-red-500/70" : ""}`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                  autoComplete="name"
                  aria-invalid={touched.name && !isNameValid}
                />
                {touched.name && !isNameValid && (
                  <p className="text-xs text-red-400">Please enter your name.</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="eyebrow" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`input ${touched.email && !isEmailValid ? "border-red-500/70" : ""}`}
                  placeholder="your@email.com"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                  autoComplete="email"
                  aria-invalid={touched.email && !isEmailValid}
                />
                {touched.email && !isEmailValid && (
                  <p className="text-xs text-red-400">Please enter a valid email address.</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="eyebrow" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className={`input min-h-[160px] ${touched.message && !isMessageValid ? "border-red-500/70" : ""}`}
                  placeholder="Tell me about the project, timeline, and goals."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                  rows={6}
                  aria-invalid={touched.message && !isMessageValid}
                />
                {touched.message && !isMessageValid && (
                  <p className="text-xs text-red-400">Please add a short message.</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                  Send message
                </button>
                <span className="text-xs text-subtle">
                  This opens your email app with the message pre-filled.
                </span>
              </div>
            </form>
          </Reveal>

          <Reveal className="space-y-6">
            <div className="contact-card">
              <p className="eyebrow">Direct contact</p>
              <a className="mt-3 inline-flex text-base font-semibold text-foreground" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <p className="mt-3 text-sm text-muted">
                Prefer scheduling? Add your Calendly link below.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-foreground transition hover:text-accent"
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
              >
                calendly.com/your-link →
              </a>
            </div>

            <div className="contact-card">
              <p className="eyebrow">Social</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  className="btn btn-secondary"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
