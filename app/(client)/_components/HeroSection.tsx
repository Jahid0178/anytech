import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

const HeroSection = () => {
  return (
    <div className="h-[92vh] text-white relative">
      <div className="hidden md:block absolute top-0 right-0 bottom-0 bg-hero-image w-[50%] h-full">
        <Image
          src={"/images/hero-bg.avif"}
          alt="Hero Background"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative h-full flex items-center z-50">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-7xl font-semibold">
            Embrace the future of finance
          </h1>
          <p className="font-semibold">
            Reimagine financial services with AnyTech&apos;s open platform,
            distributed banking solution that powers transformation
          </p>
          <Button size="lg">Reach Out to Us</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
