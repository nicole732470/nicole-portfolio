export const profile = {
  name: "Nicole Li",
  headline: "Curiosity-driven",
  subheadline:
    "We live in an age of chaos. I build products to navigate the complexity and uncertainty.",
  location: "Chicago, IL",
  school: "Northwestern University",
  hobby: "World Traveler 🌏",
  previous: "Former Tencent Product Manager",
  now: "Product Engineer",
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
  { title: "System Thinking", text: "Approaching problems through end-to-end systems.", iconKey: "briefcase" as const },
  { title: "Data Intelligence", text: "Using data, evaluation, and evidence to find structure in chaos.", iconKey: "sparkles" as const },
  { title: "Engineering-oriented", text: "Building products with simple, maintainable solutions.", iconKey: "filter" as const },
];

export const whyIBuild = [
  "I spent five years building information and AI products at Tencent.",
  "The more I worked on systems that process massive amounts of information, the more I noticed a recurring pattern: people rarely suffer from a lack of information. They suffer from too much information and too little clarity.",
  "Today, I build tools that turn messy information into useful decisions — especially in job search, visa transparency, price tracking, and AI-assisted workflows.",
];

export const projects = [
  {
    title: "PriceTracker",
    number: "01",
    eyebrow: "Web Scraping & Automation",
    description:
      "Consumer price monitoring platform that tracks prices across retailers and alerts users to price drops.",
    tech: ["Ruby on Rails", "SendGrid", "Github Actions", "Heroku"],
    github: "https://github.com/nicole732470/project-smart-shopping-list/tree/main",
    live: "https://smart-shoppinglist-6ae31171e85c.herokuapp.com/",
    iconKey: "sparkles" as const,
    image: "/images/pricetracker-screenshot.png",
  },
  {
    title: "JobLens",
    number: "02",
    eyebrow: "AI Decision Systems",
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
    number: "03",
    eyebrow: "Data Pipelines & Monitoring",
    description:
      "Career-site discovery and job monitoring system that tracks official company openings and prioritizes opportunities.",
    tech: ["Python", "PostgreSQL", "AWS", "Data Engineering"],
    github: "https://github.com/nicole732470/jobpush",
    live: "",
    iconKey: "plane" as const,
    image: "/images/jobpush-placeholder.svg",
  },
];

export const numbers = [
  ["750+", "Movies watched", "clapperboard"],
  ["500+", "Reading hours", "book-open"],
  ["10+", "Countries visited", "globe-2"],
  ["1", "Cat", "paw-print"],
] as const;


export const socials = [
  ["GitHub", "https://github.com/nicole732470", "Github"],
  ["LinkedIn", "https://www.linkedin.com/in/nicoleyuli/", "BriefcaseBusiness"],
  ["Email", "mailto:nicole732470@gmail.com", "Mail"],
  ["Douban", "https://www.douban.com/people/149884340/", "Clapperboard"],
] as const;

export const quote = "The best products come from deeply understanding real human struggles.";
