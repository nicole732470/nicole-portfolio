export type JourneyStage = {
  id: string;
  kind: "place" | "career";
  label: string;
  title: string;
  story: string;
  emoji: string;
  accent: string;
};

export const placeStages: JourneyStage[] = [
  {
    id: "mongolia",
    kind: "place",
    label: "Inner Mongolia",
    title: "Home",
    story: "Cold North, wide spaces, people drink too much",
    emoji: "🐑",
    accent: "from-[#d4e4bc] to-[#a8c686]",
  },
  {
    id: "la",
    kind: "place",
    label: "Los Angeles",
    title: "Study at UCLA",
    story: "Good Korean food.",
    emoji: "🌴",
    accent: "from-[#f5d4a8] to-[#e8a060]",
  },
  {
    id: "beijing",
    kind: "place",
    label: "Beijing",
    title: "Second home",
    story: "I ride bike to everywhere",
    emoji: "🏯",
    accent: "from-[#f0d4a8] to-[#d4a574]",
  },
  {
    id: "chicago",
    kind: "place",
    label: "Chicago",
    title: "End of Beginning",
    story: "'And when I'm back to Chicago, I feel it'",
    emoji: "🏙",
    accent: "from-[#b8c8d8] to-[#6a8aa8]",
  },
];

export const careerStages: JourneyStage[] = [
  {
    id: "tencent",
    kind: "career",
    label: "Tencent",
    title: "Five years in AI & search",
    story: "Model evaluation, information organization, product strategy design",
    emoji: "💻",
    accent: "from-[#c8d8e8] to-[#8bb8c7]",
  },
  {
    id: "bmw",
    kind: "career",
    label: "BMW",
    title: "Marketing & Analytics",
    story: "1 year learning how to promote products and brand",
    emoji: "🚗",
    accent: "from-[#d4dce4] to-[#8a9aaa]",
  },
  {
    id: "northwestern",
    kind: "career",
    label: "Northwestern",
    title: "IT engineering",
    story: "Data Structure and Algorithms, cloud engineering, software engineering, and AI applications.",
    emoji: "💜",
    accent: "from-[#e0d0f0] to-[#9a7ab8]",
  },
  {
    id: "builder",
    kind: "career",
    label: "Independent builder",
    title: "Shipping my own tools",
    story: "Turning personal pain points into products people can actually use.",
    emoji: "🛠",
    accent: "from-[#f8e0c8] to-[#e8a878]",
  },
];

export const journeyStages = [...placeStages, ...careerStages];
