"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ExternalLink, Mail, Github, Search, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { projects, Project, ProjectCategory } from "@/data/projects";

const FILTERS: ("All" | ProjectCategory)[] = [
  "All",
  "Front-End",
  "Full-Stack",
  "UI/UX",
  "Data",
  "Web",
  "Hackathon",
];

function lockBodyScroll(locked: boolean) {
  if (typeof document === "undefined") return;
  document.body.style.overflow = locked ? "hidden" : "";
}

export default function ProjectsClient() {
  const reduceMotion = useReducedMotion();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<("All" | ProjectCategory)>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    lockBodyScroll(!!activeProject);
    return () => lockBodyScroll(false);
  }, [activeProject]);

  useEffect(() => {
    const slug = searchParams.get("project");
    if (!slug) return;
    const match = projects.find((project) => project.slug === slug);
    if (match) setActiveProject(match);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const sorted = [...projects].sort((a, b) => a.importanceRank - b.importanceRank);
    const normalized = query.trim().toLowerCase();

    return sorted.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ? true : project.categories.includes(activeFilter);
      const matchesQuery = normalized
        ? [
            project.name,
            project.summary,
            project.impact,
            project.stack.join(" "),
            project.categories.join(" "),
          ]
            .join(" ")
            .toLowerCase()
            .includes(normalized)
        : true;

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const requestEmail = "malanianisha@gmail.com";

  return (
    <div className="bg-background">
      <Container className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1 className="headline">Projects I've built so far.</h1>
          <p className="lede max-w-2xl">
            A mix of classwork, internships, and personal builds with notes on what I learned along the way.
          </p>
        </Reveal>

        <Reveal className="card flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background/60 text-subtle hover:border-accent/60 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="relative w-full max-w-sm">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
            <input
              id="project-search"
              type="search"
              placeholder="Search by stack, category, or project"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="input pl-9"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 70}>
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="card card-interactive group flex h-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative overflow-hidden rounded-t-2xl border-b border-border bg-background/70">
                  {project.image ? (
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt || `${project.name} screenshot`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 860px) 100vw, 540px"
                        priority={idx < 2}
                      />
                    </div>
                  ) : (
                    <div className="flex h-44 items-center justify-center text-xs uppercase tracking-[0.3em] text-subtle">
                      Screenshot placeholder
                    </div>
                  )}
                  {project.github && (
                    <span className="absolute right-4 top-4 rounded-full bg-background/80 p-2 text-muted shadow-soft">
                      <Github className="h-4 w-4" />
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-lg text-foreground">{project.name}</h3>
                    <p className="mt-2 text-sm text-muted">{project.summary}</p>
                    {project.personalNotes?.[0] && (
                      <p className="mt-2 text-xs text-subtle italic">Note: {project.personalNotes[0]}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.2em] text-subtle">
                    <span>{project.categories.join(" · ")}</span>
                    <span className="flex items-center gap-1 text-foreground transition group-hover:translate-x-0.5">
                      View details <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            />

            <motion.div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-card shadow-subtle"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between gap-6 border-b border-border px-6 py-5">
                <div>
                  <p className="eyebrow">Project I built</p>
                  <h2 className="headline text-2xl sm:text-3xl">{activeProject.name}</h2>
                  <p className="lede mt-2">{activeProject.impact}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                  {activeProject.image && (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border">
                      <Image
                        src={activeProject.image}
                        alt={activeProject.imageAlt || `${activeProject.name} screenshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 900px) 100vw, 900px"
                      />
                    </div>
                  )}

                  <div>
                    <p className="eyebrow">Problem</p>
                    <p className="lede mt-2">{activeProject.problem}</p>
                  </div>

                  <div>
                    <p className="eyebrow">Solution</p>
                    <p className="lede mt-2">{activeProject.solution}</p>
                  </div>

                  <div>
                    <p className="eyebrow">Outcome</p>
                    <p className="lede mt-2">{activeProject.outcome}</p>
                  </div>

                  {activeProject.personalNotes?.length > 0 && (
                    <div>
                      <p className="eyebrow">Personal notes</p>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {activeProject.personalNotes.map((note) => (
                          <li key={note}>• {note}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <p className="eyebrow">Highlights</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {activeProject.highlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside className="space-y-6">
                  <div className="card p-5">
                    <p className="eyebrow">Tech stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card p-5">
                    <p className="eyebrow">Architecture</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {activeProject.architecture.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {activeProject.tradeoffs && activeProject.tradeoffs.length > 0 && (
                    <div className="card p-5">
                      <p className="eyebrow">Tradeoffs</p>
                      <ul className="mt-4 space-y-2 text-sm text-muted">
                        {activeProject.tradeoffs.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProject.metrics && activeProject.metrics.length > 0 && (
                    <div className="card p-5">
                      <p className="eyebrow">Metrics</p>
                      <div className="mt-4 grid gap-3">
                        {activeProject.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-xl border border-border bg-background/70 px-3 py-2">
                            <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-subtle">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="card p-5">
                    <p className="eyebrow">Links</p>
                    <div className="mt-4 grid gap-2">
                      {activeProject.demo ? (
                        <a
                          href={activeProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-secondary"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      ) : (
                        <div className="rounded-full border border-border bg-background/60 px-4 py-2 text-xs text-subtle">
                          Live demo coming soon
                        </div>
                      )}

                      {activeProject.github ? (
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-secondary"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      ) : (
                        <a
                          href={`mailto:${requestEmail}?subject=${encodeURIComponent(
                            `Requesting a walkthrough: ${activeProject.name}`
                          )}`}
                          className="btn btn-secondary"
                        >
                          <Mail size={16} />
                          Request walkthrough
                        </a>
                      )}
                    </div>
                  </div>
                </aside>
              </div>

              <div className="flex justify-end border-t border-border px-6 py-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="btn btn-ghost"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
