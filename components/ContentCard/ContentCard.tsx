import React from "react";
import Image from "next/image";
import { ContentType } from "@/typescript/types";

interface Props {
  content: ContentType;
}

const ContentCard = ({ content }: Props) => {
  const { icon, title, description } = content;

  return (
    <figure className="p-6 md:p-8 space-y-6 bg-[#F8FCFF] rounded-2xl text-blue-950 h-full">
      <Image
        src={icon}
        alt="logo"
        width={50}
        height={50}
      />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-base">{description}</p>
    </figure>
  );
};

export default ContentCard;
