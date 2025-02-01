import React from "react";
import HeroSection from "./_components/HeroSection";
import PhilosophySection from "./_components/PhilosophySection";
import CustomerSolutionsSection from "./_components/CustomerSolutionsSection";
import WaveDivider from "@/components/svg/WaveDivider";
import TrustedPartnersSection from "./_components/TrustedPartnersSection";
import ContactBanner from "./_components/ContactBanner";
import InnovativeFinanceSection from "./_components/InnovativeFinanceSection";
import BGAnimateWrapper from "./_components/BGAnimateWrapper";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <BGAnimateWrapper sectionName="hero">
        <HeroSection />
      </BGAnimateWrapper>
      <figure
        className="block md:hidden -translate-y-12"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
        }}
      >
        <Image
          src={"/images/hero-bg.avif"}
          alt="Hero Background"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </figure>
      <InnovativeFinanceSection />
      <WaveDivider />
      <PhilosophySection />
      <CustomerSolutionsSection />
      <WaveDivider />
      <TrustedPartnersSection />
      <BGAnimateWrapper sectionName="cta">
        <ContactBanner />
      </BGAnimateWrapper>
    </>
  );
};

export default HomePage;
