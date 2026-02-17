export type Artwork = {
  slug: string;
  title: string;
  description?: string;
  image: string;
  width: number;
  height: number;
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
    width: 1447,
    height: 1000,
  },
  {
    slug: "legends-lost",
    title: "Legends Lost",
    description:
      "An enlarged eye filled with tears as the twin towers collapse, capturing the shock and destruction of September 11, 2001.",
    image: "/legends lost.JPG",
    width: 2967,
    height: 4005,
  },
  {
    slug: "fragments",
    title: "Buddha",
    description:
      "I created this painting using acrylic paints on a canvas. This painting was challenging as acrylic paints dry up really quickly. To show the watery effect, I had to use more water but thick paint to give a visible layer of color.",
    image: "/buddha.png",
    width: 3659,
    height: 2730,
  },
  {
    slug: "winds-of-change",
    title: "Standing in the Winds of Change",
    description:
      "A portrayal of destruction in the Amazon rainforest, depicting a journey through deforestation, overpopulation, and global warming.",
    image: "/standing.JPG",
    width: 2944,
    height: 3990,
  },
  {
    slug: "contours",
    title: "Rainy Day in London",
    description:
      "This painting represents a rainy day in London. I created this using acrylic paints with a lot of water. The use of various brush strokes is very evident in the trees and while giving the watery effect.",
    image: "/london.png",
    width: 2637,
    height: 3529,
  },
  {
    slug: "lion",
    title: "Crowned by Fire",
    description:
      "This King of the Jungle was created using a mixed medium: colored pencils, soft pastels and acrylic paint. I started off by using soft pastels, but it kept smudging, so I used acrylic paints and colored pencils to highlight this art.",
    image: "/lion.png",
    width: 2767,
    height: 3871,
  },
  {
    slug: "looking-beyond",
    title: "Looking Beyond the Present",
    description:
      "The Eiffel Tower set against wartime imagery, reflecting Paris during World War I and the aftermath of bombing.",
    image: "/tower.JPG",
    width: 2750,
    height: 3821,
  },
  {
    slug: "interlude",
    title: "A Moment Before the Leap",
    description:
      "I created this piece using soft pastels. Soft Pastels are a very helpful technique of smudging and crumbling colors easily using your fingers, cotton or earbuds.",
    image: "/cat.png",
    width: 2659,
    height: 3614,
  },
  {
    slug: "buddha",
    title: "A Poetry in Motion",
    description:
      "A tribute to Tamil Nadu’s classical dance Bharatanatyam, celebrating expression and form.",
    image: "/bharat.jpg",
    width: 2626,
    height: 3250,
  },
  {
    slug: "tiger",
    title: "Quiet Strength",
    description:
      "While sketching this tiger, I used different HB pencils to give the appropriate shade where required. This sketch took a lot of precision and patience to give fine details on the face of the tiger.",
    image: "/tiger.png",
    width: 3793,
    height: 2784,
  },
];
