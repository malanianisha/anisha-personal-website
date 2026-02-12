import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let’s connect about front-end engineering, UI systems, and collaboration opportunities.",
};

export default function ContactPage() {
  return <ContactClient />;
}
