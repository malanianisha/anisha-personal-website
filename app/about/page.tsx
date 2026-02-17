import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Anisha Malani and the front-end engineering values behind the portfolio.",
};

const RESUME_URL = "/Anisha Malani Resume.pdf";
const EMAIL = "malanianisha@gmail.com";

const principles = [
  {
    title: "Performance-first UX",
    description: "Fast loading, predictable interactions, and UI that stays responsive under real data.",
  },
  {
    title: "Accessible by default",
    description: "Semantic HTML, keyboard-first flows, and tested contrast for every state.",
  },
  {
    title: "Design systems thinking",
    description: "Reusable UI patterns, consistent spacing, and scalable component structure.",
  },
];

const experience = [
  {
    role: "Summer Intern",
    org: "Teraquant Corp.",
    dates: "Jun–Aug 2025",
    focus: "APIs · Data · Cloud",
    bullets: [
      "Analyzed user data patterns and integrated APIs for a fraud-detection monitoring platform.",
      "Partnered with engineers to debug API failures and validate cloud deployments; improved KPI dashboards.",
    ],
  },
  {
    role: "Marketing Intern",
    org: "CREW Silicon Valley",
    dates: "May 2024 – Jan 2025",
    focus: "Design · Brand · Campaigns",
    bullets: [
      "Designed promotional materials and digital campaigns for professional networking events.",
      "Built reusable design components aligned to brand guidelines.",
    ],
  },
  {
    role: "Social Media Intern",
    org: "SCU Art & Art History Department",
    dates: "Sept 2024 – Present",
    focus: "Content · Strategy · Visuals",
    bullets: [
      "Created content and strategies to boost engagement and visibility of academic programs.",
      "Developed consistent templates to streamline publishing and maintain cohesion.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Santa Clara University",
    dates: "Jan–Sept 2024",
    focus: "Prototyping · Figma · Research",
    bullets: [
      "Researched emerging technologies and supported faculty work with UI prototypes and mockups.",
      "Translated research needs into clear flows and interface concepts for web deliverables.",
    ],
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Design Systems"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "Flask", "REST APIs", "SQL"],
  },
  {
    title: "Tooling",
    items: ["Git/GitHub", "Docker", "Linux CLI", "AWS (Cloud Practitioner)", "Vercel"],
  },
  {
    title: "Design",
    items: ["Figma", "Prototyping", "Branding", "Visual Design", "Content Systems"],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <Container className="section">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="eyebrow">About</p>
            <h1 className="headline text-4xl sm:text-5xl">Design-forward engineering.</h1>
            <p className="lede max-w-2xl">
              I’m Anisha, a Web Design & Engineering student focused on building product experiences that feel
              refined, performant, and human. I care about the craft behind the UI — from component structure to
              the details that make interfaces feel calm and intentional.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground">
              <Link href={RESUME_URL} className="btn btn-secondary" target="_blank" rel="noreferrer">
                View resume
              </Link>
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                Let&apos;s connect
              </a>
              <Link href="/projects" className="btn btn-ghost">
                View projects
              </Link>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-subtle">
              <Image
                src="/Headshot.jpg"
                alt="Anisha Malani portrait"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="font-display text-lg text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 className="headline">Where I&apos;ve learned and grown.</h2>
            <p className="lede max-w-2xl">
              Roles that blend product thinking, engineering collaboration, and high-quality visual execution.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experience.map((item, idx) => (
            <Reveal key={`${item.role}-${item.org}`} delay={idx * 80} className="card card-interactive p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    {item.role} <span className="text-muted">· {item.org}</span>
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-subtle">{item.focus}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">{item.dates}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 className="headline">Tools I use to build.</h2>
          </div>
        </Reveal>

        <Reveal className="grid gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg text-foreground">{group.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-subtle">Core stack</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </div>
  );
}
