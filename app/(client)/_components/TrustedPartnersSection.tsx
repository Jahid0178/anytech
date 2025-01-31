import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import CounterCard from "@/components/CounterCard/CounterCard";
import { clientLogos, trustedContent } from "@/data/data";

const TrustedPartnersSection = () => {
  return (
    <section>
      <div className="container">
        <div className="pb-8">
          <SectionHeading subtitle="Trusted By The Best" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustedContent.map((content) => (
            <CounterCard
              key={content.id}
              data={content}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-5 mt-16 lg:mt-[128px]">
          {clientLogos.map((logo) => (
            <picture
              key={logo.id}
              className="flex justify-stretch object-cover uppercase"
              title={logo.title}
            >
              <Image
                src={logo.image}
                alt={logo.title}
                width={200}
                height={100}
                className="w-full h-auto object-contain"
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
