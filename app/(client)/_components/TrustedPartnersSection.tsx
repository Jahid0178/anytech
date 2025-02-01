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
        <div className="flex overflow-x-auto overflow-y-hidden snap-x scroll-smooth snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-5 mt-16 lg:mt-[128px]">
          {clientLogos.map((logo) => (
            <picture
              key={logo.id}
              className="flex justify-stretch object-cover uppercase snap-center flex-shrink-0 w-full items-center h-[110px]"
              title={logo.title}
            >
              <Image
                src={logo.image}
                alt={logo.title}
                width={200}
                height={100}
                className="w-full h-full object-contain"
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
