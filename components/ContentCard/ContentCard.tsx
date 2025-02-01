"use client";

import React from "react";
import Image from "next/image";
import { ContentType } from "@/typescript/types";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Props {
  content: ContentType;
  index: number;
}

const ContentCard = ({ content, index }: Props) => {
  const { icon, title, description } = content;

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      ref={ref}
      className="p-6 md:p-8 space-y-6 bg-[#F8FCFF] rounded-2xl text-blue-950 h-full"
      initial={{
        transform: "translateY(20px)",
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              transform: "translateY(0px)",
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 0.3,
        delay: index * 0.3,
      }}
    >
      <Image
        src={icon}
        alt="logo"
        width={50}
        height={50}
      />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-base">{description}</p>
    </motion.figure>
  );
};

export default ContentCard;
