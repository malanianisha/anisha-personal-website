import { Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SkillTag } from "./SkillTag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card card-interactive group relative flex flex-col justify-between overflow-hidden p-6">
      <span aria-hidden="true" className="card-shine" />
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg tracking-tight text-foreground">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5">
            {project.github && (
              <Link
                href={project.github}
                aria-label={`View ${project.name} on GitHub`}
                className="rounded-full p-1 text-muted transition hover:bg-card hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                aria-label={`Open live demo of ${project.name}`}
                className="rounded-full p-1 text-muted transition hover:bg-card hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="text-xs text-subtle">{project.impact}</p>
        {project.personalNotes?.[0] && (
          <p className="text-xs text-subtle italic">Note: {project.personalNotes[0]}</p>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <SkillTag key={item} label={item} />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
        <span>{project.role ?? "Project I built"}</span>
        <Link
          href={`/projects?project=${project.slug}`}
          className="flex items-center gap-1 text-foreground transition group-hover:translate-x-0.5"
        >
          Details <ExternalLink className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
