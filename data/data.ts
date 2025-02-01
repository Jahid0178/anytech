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

export const productMarketingContent: {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  content1: string;
  content2: string;
}[] = [
  {
    id: "1",
    image: "/images/slide-1.avif",
    subtitle: "Customer focused",
    title: "Purpose-built financial services",
    content1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    content2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
  },
  {
    id: "2",
    image: "/images/slide-2.avif",
    subtitle: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    content1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    content2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
  },
  {
    id: "3",
    image: "/images/slide-3.avif",
    subtitle: "Compliance ready",
    title: "Manage compliance with ease",
    content1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    content2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
  },
  {
    id: "4",
    image: "/images/slide-4.avif",
    subtitle: "Secure and safe",
    title: "Highly secure and safe",
    content1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    content2:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
  },
];

export const trustedContent: {
  id: string;
  title: string;
  count: number;
  prefix?: string;
  suffix?: string;
}[] = [
  {
    id: "1",
    title: "Years of Experience",
    count: 20,
    prefix: ">",
  },
  {
    id: "2",
    title: "Financial Institutions",
    count: 40,
    suffix: "+",
  },
  {
    id: "3",
    title: "Customers Each",
    count: 200,
    prefix: ">",
    suffix: "m",
  },
];

export const clientLogos: {
  id: string;
  title: string;
  image: string;
}[] = [
  {
    id: "1",
    title: "Bank Of Chengde",
    image: "/logos/logo-1.png",
  },
  {
    id: "2",
    title: "Bank Of China",
    image: "/logos/logo-2.png",
  },
  {
    id: "3",
    title: "Bank of Shanghai",
    image: "/logos/logo-3.png",
  },
  {
    id: "4",
    title: "CGB",
    image: "/logos/logo-4.png",
  },
  {
    id: "5",
    title: "OneBank",
    image: "/logos/logo-5.png",
  },
  {
    id: "6",
    title: "PING AN BANK",
    image: "/logos/logo-6.png",
  },
  {
    id: "7",
    title: "POSTAL SAVINGS BANK OF CHINA",
    image: "/logos/logo-7.png",
  },
  {
    id: "8",
    title: "sea",
    image: "/logos/logo-8.png",
  },
  {
    id: "9",
    title: "Shandong City Commercial Banks Alliance",
    image: "/logos/logo-9.png",
  },
  {
    id: "10",
    title: "VipFubon Consumer Finanace",
    image: "/logos/logo-10.png",
  },
  {
    id: "11",
    title: "XIAMEN INTERNATIONAL BANK",
    image: "/logos/logo-11.webp",
  },
  {
    id: "12",
    title: "XW",
    image: "/logos/logo-12.png",
  },
  {
    id: "13",
    title: "SPD BANK",
    image: "/logos/logo-13.png",
  },
  {
    id: "14",
    title: "DCS",
    image: "/logos/logo-14.png",
  },
  {
    id: "15",
    title: "Bank Of Chengde",
    image: "/logos/logo-15.png",
  },
];
