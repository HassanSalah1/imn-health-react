import { FileText, Target, Eye } from "lucide-react";

export const MISSION_SECTIONS = [
  {
    icon: FileText,
    title: "OVERVIEW",
    description:
      "InterMark Network (IMN) is the first and only fully-integrated healthcare management platform designed to streamline operations and enhance patient care.",
    link: "#overview",
  },
  {
    icon: Target,
    title: "OUR MISSION",
    description:
      "To be your most trusted if not the sole provider for the full range of healthcare services, delivering excellence in every interaction.",
    link: "#mission",
  },
  {
    icon: Eye,
    title: "OUR VISION",
    description:
      "To revolutionize the healthcare market through our full range of integrated services, setting new standards for patient care and operational excellence.",
    link: "#vision",
  },
];

export type MissionSection = (typeof MISSION_SECTIONS)[number];

