export type ThinkingCard = {
  title: string;
  text: string;
  quote: string;
  color: string;
};

export const thinkingCards: ThinkingCard[] = [
  {
    title: "Career Intelligence",
    text: "Can job search become a data problem instead of a volume problem?",
    quote: "The best applications are not the most — they are the most informed.",
    color: "bg-[#fff8e8]",
  },
  {
    title: "AI Evaluation",
    text: "Why evaluation matters more than demos.",
    quote: "A demo proves possibility. Evaluation proves trust.",
    color: "bg-[#eef4f8]",
  },
  {
    title: "Information Systems",
    text: "People rarely need more information. They need better filters.",
    quote: "Clarity is a product feature, not a side effect.",
    color: "bg-[#eef6ee]",
  },
  {
    title: "Human Decision Making",
    text: "How software can reduce uncertainty without pretending the world is simple.",
    quote: "Good tools respect how messy real decisions actually are.",
    color: "bg-[#fdf0ea]",
  },
  {
    title: "Building in Public",
    text: "What changes when you ship small tools before the perfect plan exists.",
    quote: "Momentum comes from making the problem visible, not hiding in research.",
    color: "bg-[#f5eef8]",
  },
];
