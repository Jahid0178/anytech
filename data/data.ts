import { ContentType, HeaderLink } from "@/typescript/types";

export const headerLinks: HeaderLink[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Services",
    url: "#",
  },
  {
    id: 3,
    title: "About Us",
    url: "#",
  },
];

export const philosophyContents: ContentType[] = [
  {
    id: "1",
    icon: "/svg/share.svg",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    id: "2",
    icon: "/svg/bulb.svg",
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    id: "3",
    icon: "/svg/chip.svg",
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];
