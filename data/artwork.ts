export type Artwork = {
  slug: string;
  title: string;
  description?: string;
  image: string;
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
    description: "Layered forms that feel assembled, then gently undone.",
    image: "/lion.JPG",
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
    description: "A study of edges, gradients, and quiet tension.",
    image: "/scene.JPG",
  },
  {
    slug: "poetry-in-motion",
    title: "A Poetry in Motion",
    description:
      "A tribute to Tamil Nadu’s classical dance Bharatanatyam, celebrating expression and form.",
    image: "/bharat.jpg",
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
      "A rainy day in London painted with acrylics and water, highlighting expressive brushwork.",
    image: "/LONDON.JPG",
  },
  {
    slug: "buddha",
    title: "Buddha",
    description:
      "An acrylic study balancing thick paint with water to create a layered, luminous effect.",
    image: "/buddha.JPG",
  },
];
