import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { artwork } from "@/data/artwork";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Artwork",
  description: "Visual explorations and artwork that inform the design systems behind the portfolio.",
};

export default function ArtworkPage() {
  return (
    <section className="bg-background">
      <Container className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">Artwork</p>
          <h1 className="headline">Artwork and visual studies.</h1>
          <p className="lede max-w-2xl">
            A gallery of creative work that informs my systems thinking and visual craft.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <ArtworkGrid items={artwork} />
        </Reveal>
      </Container>
    </section>
  );
}
