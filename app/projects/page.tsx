import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies highlighting front-end architecture, product thinking, and UI craftsmanship.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
