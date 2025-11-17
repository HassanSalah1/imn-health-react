export type OfficeContact = {
  name: string;
  address: string;
  phone: string[];
};

export const OFFICES: OfficeContact[] = [
  {
    name: "Egypt – Cairo",
    address: "3, Square 1172 Ebad ElRahman St. Sheraton, Cairo, Egypt.",
    phone: ["Phone: +202 6359696 - 6342626", "Fax: +202 6357474"],
  },
  {
    name: "UAE – Dubai",
    address: "25th Flr, Aspin Commercial Tower, Sheikh Zayed, Dubai UAE",
    phone: ["Phone: +971 4 3265759"],
  },
  {
    name: "KSA – Jeddah",
    address: "Saudi tower, El-madina Eltaleaa, 2nd floor 10/20, Jeddah.",
    phone: ["Phone: +966503634223"],
  },
];

export const CONTACT_EMAIL = "info@intermark-corp.com";

