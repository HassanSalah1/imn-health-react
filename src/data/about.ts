import { Users, Lightbulb, Target, Shield } from "lucide-react";

export const ABOUT_FEATURES = [
  {
    icon: Users,
    title: "Our Team",
    description:
      "Scientists, researchers, healthcare and business professionals united by a passion to commercialize impactful healthcare innovations.",
  },
  {
    icon: Target,
    title: "End-In-Mind Approach",
    description:
      "We begin every engagement with the end goal defined, ensuring every action drives measurable adoption and outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Unique Business Model",
    description:
      "IMN is your first partner in the region, operating on modern, flexible business models that deliver tailored solutions for every challenge.",
  },
  {
    icon: Shield,
    title: "Promise To Innovate",
    description:
      "We commit to innovating and delivering the perfect solution for each need, from commercialization to adoption.",
  },
];

export type AboutFeature = (typeof ABOUT_FEATURES)[number];

