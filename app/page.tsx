import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/home/Hero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionDivider from "@/components/motion/SectionDivider";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Node.js",
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <div className="bg-background">
      <Hero />

      <section className="section pt-0">
        <Container>
          <ScrollReveal className="card card-interactive flex flex-wrap items-center justify-between gap-4 px-6 py-5" hover>
            <div>
              <p className="eyebrow">Tech stack</p>
              <p className="text-sm text-muted">Tools I reach for to ship fast, clean web experiences.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">My work</p>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="headline">Projects I&apos;ve built recently.</h2>
                  <p className="lede max-w-2xl">
                    A few builds I&apos;m proud of, with small notes on what I learned along the way.
                  </p>
                  <SectionDivider className="mt-4" />
                </div>
                <Link
                  href="/projects"
                  className="btn btn-ghost text-xs uppercase tracking-[0.2em]"
                >
                  See all projects <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 90} hover>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <ScrollReveal className="card card-interactive flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center" hover>
            <div>
              <p className="eyebrow">Let’s build</p>
              <h2 className="headline">Want to build something together?</h2>
              <p className="lede max-w-2xl">
                I’m open to internships and collaborative projects focused on product quality and front-end craft.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Let&apos;s connect
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
