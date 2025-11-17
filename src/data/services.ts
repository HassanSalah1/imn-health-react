import { TrendingUp, MessageSquare, Users, PieChart, CalendarDays } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";

export const services = [
  {
    icon: TrendingUp,
    title: "Clinical Development & Regulatory",
    description:
      "For every stage of clinical development we deliver data management, project oversight, safety reporting, and real-world evidence programs.",
    image: service1,
  },
  {
    icon: MessageSquare,
    title: "Communications",
    description:
      "A purpose-built network dedicated to helping health and pharmaceutical innovators communicate with clarity and impact.",
    image: service2,
  },
  {
    icon: Users,
    title: "Consultation",
    description:
      "We move beyond classic consulting—partnering in transformation to reshape mindsets, agendas, and long-term impact on every project.",
    image: service3,
  },
  {
    icon: PieChart,
    title: "Commercialization",
    description:
      "Our seasoned regional sales force continues to lead the commercialization of pharmaceutical and medical products despite industry headwinds.",
    image: service4,
  },
  {
    icon: CalendarDays,
    title: "Events & Activation",
    description:
      "Integrated medical events, launches, and activation campaigns that translate strategy into memorable, measurable experiences.",
    image: service5,
  },
];

export type Service = (typeof services)[number];

