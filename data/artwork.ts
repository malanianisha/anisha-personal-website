export type Artwork = {
  slug: string;
  title: string;
  description?: string;
  image: string;
  aspect?: string;
  year?: string;
  tags?: string[];
};

export const artwork: Artwork[] = [
  {
    slug: "ancient-timeless",
    title: "The Ancient and the Timeless",
    description:
      "This is a scene from the Boston Tea Party, a political protest that occurred in 1773 and marked a major act of defiance to British rule.",
    image: "/tea party.JPG",
  },
  {
    slug: "legends-lost",
    title: "Legends Lost",
    description:
      "An enlarged eye filled with tears as the twin towers collapse, capturing the shock and destruction of September 11, 2001.",
    image: "/legends lost.JPG",
  },
  {
    slug: "fragments",
    title: "Fragments",
    description:
      "I created this painting using acrylic paints on a canvas. This painting was challenging as acrylic paints dry up really quickly. To show the watery effect, I had to use more water but thick paint to give a visible layer of color.",
    image: "/buddha.png",
  },
  {
    slug: "winds-of-change",
    title: "Standing in the Winds of Change",
    description:
      "A portrayal of destruction in the Amazon rainforest, depicting a journey through deforestation, overpopulation, and global warming.",
    image: "/standing.JPG",
  },
  {
    slug: "contours",
    title: "Contours",
    description:
      "This painting represents a rainy day in London. I created this using acrylic paints with a lot of water. The use of various brush strokes is very evident in the trees and while giving the watery effect.",
    image: "/london.png",
  },
  {
    slug: "lion",
    title: "Lion",
    description:
      "This King of the Jungle was created using a mixed medium: colored pencils, soft pastels and acrylic paint. I started off by using soft pastels, but it kept smudging, so I used acrylic paints and colored pencils to highlight this art.",
    image: "/lion.png",
  },
  {
    slug: "looking-beyond",
    title: "Looking Beyond the Present",
    description:
      "The Eiffel Tower set against wartime imagery, reflecting Paris during World War I and the aftermath of bombing.",
    image: "/tower.JPG",
  },
  {
    slug: "interlude",
    title: "Interlude",
    description:
      "I created this piece using soft pastels. Soft Pastels are a very helpful technique of smudging and crumbling colors easily using your fingers, cotton or earbuds.",
    image: "/cat.png",
  },
  {
    slug: "buddha",
    title: "Buddha",
    description:
      "A tribute to Tamil Nadu’s classical dance Bharatanatyam, celebrating expression and form.",
    image: "/bharat.jpg",
  },
  {
    slug: "tiger",
    title: "Tiger",
    description:
      "While sketching this tiger, I used different HB pencils to give the appropriate shade where required. This sketch took a lot of precision and patience to give fine details on the face of the tiger.",
    image: "/tiger.png",
    aspect: "aspect-[16/9]",
  },
];
