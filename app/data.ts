export const profile = {
  name: "Nicole Li",
  headline: "Builder × Product Thinker",
  subheadline:
    "I build tools that help people make better decisions — from job search intelligence to consumer price tracking.",
  location: "Chicago, IL",
  school: "Northwestern",
  previous: "Former Tencent Product Manager",
  status: "Open to full-time opportunities",
  email: "nicole732470@gmail.com",
  github: "https://github.com/nicole732470",
  linkedin: "https://www.linkedin.com/in/nicoleyuli/",
  douban: "https://www.douban.com/people/149884340/",
};

export const nav = [
  ["Home", "#top", "Home"],
  ["Why I Build", "#why", "Sprout"],
  ["Work", "#work", "BriefcaseBusiness"],
  ["Journey", "#journey", "MapPinned"],
  ["Thinking", "#thinking", "Brain"],
  ["Playground", "#playground", "Compass"],
  ["Contact", "#contact", "Mail"],
] as const;

export const focus = [
  { title: "Career Intelligence", text: "Turning messy job market data into useful insight.", iconKey: "briefcase" as const },
  { title: "AI & Systems", text: "Exploring how AI can augment human decision-making.", iconKey: "sparkles" as const },
  { title: "Information Design", text: "Building products that bring clarity, not more noise.", iconKey: "filter" as const },
];

export const whyIBuild = [
  "I spent five years building information and AI products at Tencent.",
  "The more I worked on systems that process massive amounts of information, the more I noticed a recurring pattern: people rarely suffer from a lack of information. They suffer from too much information and too little clarity.",
  "Today, I build tools that turn messy information into useful decisions — especially in job search, visa transparency, price tracking, and AI-assisted workflows.",
];

export const projects = [
  {
    title: "JobLens",
    number: "01",
    eyebrow: "Career intelligence",
    description:
      "Visa-aware job intelligence platform combining H-1B history, resume matching, job scoring, and a Chrome extension workflow.",
    tech: ["FastAPI", "React", "LangGraph", "AWS", "Chrome MV3"],
    github: "https://github.com/nicole732470/joblens",
    live: "https://job-lens-main.lovable.app",
    iconKey: "search" as const,
    image: "/images/joblens-screenshot.png",
  },
  {
    title: "JobPush",
    number: "02",
    eyebrow: "Opportunity monitoring",
    description:
      "Career-site discovery and job monitoring system that tracks official company openings and prioritizes opportunities.",
    tech: ["Python", "PostgreSQL", "AWS", "Crawl Pipelines"],
    github: "https://github.com/nicole732470/jobpush",
    live: "",
    iconKey: "plane" as const,
    image: "/images/jobpush-placeholder.svg",
  },
  {
    title: "PriceTracker",
    number: "03",
    eyebrow: "Consumer decisions",
    description:
      "Consumer price monitoring platform that tracks prices across retailers and alerts users to meaningful price drops.",
    tech: ["Ruby on Rails", "PostgreSQL", "Background Jobs"],
    github: "https://github.com/nicole732470/smartshoppinglist",
    live: "https://smart-shoppinglist-6ae31171e85c.herokuapp.com/",
    iconKey: "sparkles" as const,
    image: "/images/pricetracker-screenshot.jpg",
  },
];

export const numbers = [
  ["700+", "Movies watched", "clapperboard"],
  ["30+", "Places visited", "compass"],
  ["3", "Products shipped", "code"],
  ["5+", "Years in tech", "briefcase"],
] as const;

export const obsessions = [
  "Agent workflows",
  "Labor market data",
  "Information retrieval",
  "Product systems",
  "Good design",
];

export const socials = [
  ["GitHub", "https://github.com/nicole732470", "Github"],
  ["LinkedIn", "https://www.linkedin.com/in/nicoleyuli/", "BriefcaseBusiness"],
  ["Email", "mailto:nicole732470@gmail.com", "Mail"],
  ["Douban", "https://www.douban.com/people/149884340/", "Clapperboard"],
] as const;

export const quote = "The best products come from deeply understanding real human struggles.";
