export type ThinkingCard = {
  title: string;
  text: string;
  quote: string;
  color: string;
};

export const thinkingCards: ThinkingCard[] = [
  {
    title: "Agile Development",
    text: "Base version first, then debug with real users. Build small, ship often, and iterate.",
    quote: "Running in small steps.",
    color: "bg-[#fff8e8]",
  },
  {
    title: "AI Evaluation",
    text: "Break complex problems into measurable dimensions, define clear metrics, and use evidence to guide continuous improvement.",
    quote: "Turn intuition into evidence.Complex problems become manageable when they can be measured.",
    color: "bg-[#eef4f8]",
  },
  {
    title: "Automation First",
    text: "If a task repeats often enough, it deserves a system.",
    quote: "Automate the boring parts.",
    color: "bg-[#eef6ee]",
  },
  {
    title: "AI as an Enabler",
    text: "AI changes what is possible, but not what matters. Great products still start with real user needs, clear evaluation, and thoughtful execution.",
    quote: "New technology doesn't replace product thinking.",
    color: "bg-[#fdf0ea]",
  },
  {
    title: "User Empathy",
    text: "Understanding frustrations, motivations, and constraints leads to useful products.",
    quote: "People don't want features. They want outcomes.",
    color: "bg-[#f5eef8]",
  },
];
