import React from "react";
import Image from "next/image";
import { philosophyContents } from "@/data/data";
import { ContentType } from "@/typescript/types";
import ContentCard from "@/components/ContentCard/ContentCard";

const PhilosophySection = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center space-y-4">
          <h6 className="text-xs md:text-base leading-6 tracking-widest text-blue-500 font-semibold">
            OUR PHILOSOPHY
          </h6>
          <h2 className="text-3xl md:text-3xl lg:text-5xl text-blue-950 font-semibold">
            Human-centred innovation
          </h2>
        </div>
        <figure className="py-8">
          <Image
            src="/images/philosophy-mob-img.avif"
            alt="Philosophy"
            width={300}
            height={280}
            sizes="100vw"
            className="block md:hidden w-full h-auto"
          />
          <Image
            src="/images/philosophy-img.avif"
            alt="Philosophy"
            width={300}
            height={280}
            sizes="100vw"
            className="hidden md:block w-full h-auto"
          />
        </figure>
        <ul className="flex md:grid overflow-x-auto snap-x snap-mandatory grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {philosophyContents.map((content: ContentType) => (
            <li
              key={content.id}
              className="snap-center flex-shrink-0 w-full sm:w-[80%] md:w-auto"
            >
              <ContentCard content={content} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PhilosophySection;
