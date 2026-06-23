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
    title: "Where it started",
    story: "Wide grasslands, long winters, and a habit of looking further than the horizon.",
    emoji: "🌾",
    accent: "from-[#d4e4bc] to-[#a8c686]",
  },
  {
    id: "la",
    kind: "place",
    label: "Los Angeles",
    title: "First stretch in the US",
    story: "Sun, sprawl, and a different rhythm before Chicago became home.",
    emoji: "🌴",
    accent: "from-[#f5d4a8] to-[#e8a060]",
  },
  {
    id: "beijing",
    kind: "place",
    label: "Beijing",
    title: "Advertising & communication",
    story: "Learning how people notice, interpret, and respond to information.",
    emoji: "🏯",
    accent: "from-[#f0d4a8] to-[#d4a574]",
  },
  {
    id: "chicago",
    kind: "place",
    label: "Chicago",
    title: "A new city, new pace",
    story: "Lake Michigan, cold winters, and a shift closer to building software.",
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
    story: "Search systems, AI experiences, evaluation frameworks, and content at scale.",
    emoji: "💻",
    accent: "from-[#c8d8e8] to-[#8bb8c7]",
  },
  {
    id: "bmw",
    kind: "career",
    label: "BMW",
    title: "Product & mobility",
    story: "Building digital product experiences at the intersection of software and the physical world.",
    emoji: "🚗",
    accent: "from-[#d4dce4] to-[#8a9aaa]",
  },
  {
    id: "northwestern",
    kind: "career",
    label: "Northwestern",
    title: "Software engineering",
    story: "Databases, cloud, software architecture, and AI applications.",
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
