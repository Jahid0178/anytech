import React from "react";
import HeroSection from "./_components/HeroSection";
import PhilosophySection from "./_components/PhilosophySection";
import CustomerSolutionsSection from "./_components/CustomerSolutionsSection";
import WaveDivider from "@/components/svg/WaveDivider";
import TrustedPartnersSection from "./_components/TrustedPartnersSection";
import ContactBanner from "./_components/ContactBanner";
import InnovativeFinanceSection from "./_components/InnovativeFinanceSection";
import BGAnimateWrapper from "./_components/BGAnimateWrapper";

const HomePage = () => {
  return (
    <>
      <BGAnimateWrapper>
        <HeroSection />
      </BGAnimateWrapper>
      <InnovativeFinanceSection />
      <WaveDivider />
      <PhilosophySection />
      <CustomerSolutionsSection />
      <WaveDivider />
      <TrustedPartnersSection />
      <ContactBanner />
    </>
  );
};

export default HomePage;
